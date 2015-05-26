(function () { 'use strict';

    var width = 960,
        height = 500;

    var d3$range;

    var abs = Math.abs;

    function d3_range_integerScale(x) {
      var k = 1;
      while (x * k % 1) k *= 10;
      return k;
    }

    d3$range = function(start, stop, step) {
      if (arguments.length < 3) {
        step = 1;
        if (arguments.length < 2) {
          stop = start;
          start = 0;
        }
      }
      if ((stop - start) / step === Infinity) throw new Error("infinite range");
      var range = [],
           k = d3_range_integerScale(abs(step)),
           i = -1,
           j;
      start *= k, stop *= k, step *= k;
      if (step < 0) while ((j = start + step * ++i) > stop) range.push(j / k);
      else while ((j = start + step * ++i) < stop) range.push(j / k);
      return range;
    };

    var d3$geom$voronoi;

    var d3_geom_voronoiClipExtent = [[-1e6, -1e6], [1e6, 1e6]];

    function d3_functor(v) {
      return typeof v === "function" ? v : function() { return v; };
    }

    function d3_geom_voronoiTriangleArea(a, b, c) {
      return (a.x - c.x) * (b.y - a.y) - (a.x - b.x) * (c.y - a.y);
    }

    function d3_geom_voronoiHalfEdgeOrder(a, b) {
      return b.angle - a.angle;
    }

    function d3_geom_voronoiCell(site) {
      this.site = site;
      this.edges = [];
    }

    d3_geom_voronoiCell.prototype.prepare = function() {
      var halfEdges = this.edges,
          iHalfEdge = halfEdges.length,
          edge;

      while (iHalfEdge--) {
        edge = halfEdges[iHalfEdge].edge;
        if (!edge.b || !edge.a) halfEdges.splice(iHalfEdge, 1);
      }

      halfEdges.sort(d3_geom_voronoiHalfEdgeOrder);
      return halfEdges.length;
    };

    var d3_geom_voronoiEdges,
        d3_geom_voronoiCells,
        d3_geom_voronoiBeaches,
        d3_geom_voronoiBeachPool = [],
        d3_geom_voronoiFirstCircle,
        d3_geom_voronoiCircles,
        d3_geom_voronoiCirclePool = [];

    function d3_geom_voronoiRedBlackNode(node) {
      node.U = // parent node
      node.C = // color - true for red, false for black
      node.L = // left node
      node.R = // right node
      node.P = // previous node
      node.N = null; // next node
    }

    function d3_geom_voronoiCircle() {
      d3_geom_voronoiRedBlackNode(this);
      this.x =
      this.y =
      this.arc =
      this.site =
      this.cy = null;
    }

    var ε = 1e-6,
        ε2 = ε * ε,
        π = Math.PI,
        τ = 2 * π,
        τε = τ - ε,
        halfπ = π / 2,
        d3_radians = π / 180,
        d3_degrees = 180 / π;

    function d3_geom_voronoiAttachCircle(arc) {
      var lArc = arc.P,
          rArc = arc.N;

      if (!lArc || !rArc) return;

      var lSite = lArc.site,
          cSite = arc.site,
          rSite = rArc.site;

      if (lSite === rSite) return;

      var bx = cSite.x,
          by = cSite.y,
          ax = lSite.x - bx,
          ay = lSite.y - by,
          cx = rSite.x - bx,
          cy = rSite.y - by;

      var d = 2 * (ax * cy - ay * cx);
      if (d >= -ε2) return;

      var ha = ax * ax + ay * ay,
          hc = cx * cx + cy * cy,
          x = (cy * ha - ay * hc) / d,
          y = (ax * hc - cx * ha) / d,
          cy = y + by;

      var circle = d3_geom_voronoiCirclePool.pop() || new d3_geom_voronoiCircle;
      circle.arc = arc;
      circle.site = cSite;
      circle.x = x + bx;
      circle.y = cy + Math.sqrt(x * x + y * y); // y bottom
      circle.cy = cy;

      arc.circle = circle;

      var before = null,
          node = d3_geom_voronoiCircles._;

      while (node) {
        if (circle.y < node.y || (circle.y === node.y && circle.x <= node.x)) {
          if (node.L) node = node.L;
          else { before = node.P; break; }
        } else {
          if (node.R) node = node.R;
          else { before = node; break; }
        }
      }

      d3_geom_voronoiCircles.insert(before, circle);
      if (!before) d3_geom_voronoiFirstCircle = circle;
    }

    function d3_geom_voronoiDetachCircle(arc) {
      var circle = arc.circle;
      if (circle) {
        if (!circle.P) d3_geom_voronoiFirstCircle = circle.N;
        d3_geom_voronoiCircles.remove(circle);
        d3_geom_voronoiCirclePool.push(circle);
        d3_geom_voronoiRedBlackNode(circle);
        arc.circle = null;
      }
    }

    function d3_geom_voronoiEdge(lSite, rSite) {
      this.l = lSite;
      this.r = rSite;
      this.a = this.b = null; // for border edges
    }

    function d3_geom_voronoiCreateBorderEdge(lSite, va, vb) {
      var edge = new d3_geom_voronoiEdge(lSite, null);
      edge.a = va;
      edge.b = vb;
      d3_geom_voronoiEdges.push(edge);
      return edge;
    }

    function d3_geom_voronoiHalfEdge(edge, lSite, rSite) {
      var va = edge.a,
          vb = edge.b;
      this.edge = edge;
      this.site = lSite;
      this.angle = rSite ? Math.atan2(rSite.y - lSite.y, rSite.x - lSite.x)
          : edge.l === lSite ? Math.atan2(vb.x - va.x, va.y - vb.y)
          : Math.atan2(va.x - vb.x, vb.y - va.y);
    }

    d3_geom_voronoiHalfEdge.prototype = {
      start: function() { return this.edge.l === this.site ? this.edge.a : this.edge.b; },
      end: function() { return this.edge.l === this.site ? this.edge.b : this.edge.a; }
    };

    function d3_geom_voronoiCloseCells(extent) {
      var x0 = extent[0][0],
          x1 = extent[1][0],
          y0 = extent[0][1],
          y1 = extent[1][1],
          x2,
          y2,
          x3,
          y3,
          cells = d3_geom_voronoiCells,
          iCell = cells.length,
          cell,
          iHalfEdge,
          halfEdges,
          nHalfEdges,
          start,
          end;

      while (iCell--) {
        cell = cells[iCell];
        if (!cell || !cell.prepare()) continue;
        halfEdges = cell.edges;
        nHalfEdges = halfEdges.length;
        iHalfEdge = 0;
        while (iHalfEdge < nHalfEdges) {
          end = halfEdges[iHalfEdge].end(), x3 = end.x, y3 = end.y;
          start = halfEdges[++iHalfEdge % nHalfEdges].start(), x2 = start.x, y2 = start.y;
          if (abs(x3 - x2) > ε || abs(y3 - y2) > ε) {
            halfEdges.splice(iHalfEdge, 0, new d3_geom_voronoiHalfEdge(d3_geom_voronoiCreateBorderEdge(cell.site, end,
                abs(x3 - x0) < ε && y1 - y3 > ε ? {x: x0, y: abs(x2 - x0) < ε ? y2 : y1}
                : abs(y3 - y1) < ε && x1 - x3 > ε ? {x: abs(y2 - y1) < ε ? x2 : x1, y: y1}
                : abs(x3 - x1) < ε && y3 - y0 > ε ? {x: x1, y: abs(x2 - x1) < ε ? y2 : y0}
                : abs(y3 - y0) < ε && x3 - x0 > ε ? {x: abs(y2 - y0) < ε ? x2 : x0, y: y0}
                : null), cell.site, null));
            ++nHalfEdges;
          }
        }
      }
    }

    function d3_geom_voronoiConnectEdge(edge, extent) {
      var vb = edge.b;
      if (vb) return true;

      var va = edge.a,
          x0 = extent[0][0],
          x1 = extent[1][0],
          y0 = extent[0][1],
          y1 = extent[1][1],
          lSite = edge.l,
          rSite = edge.r,
          lx = lSite.x,
          ly = lSite.y,
          rx = rSite.x,
          ry = rSite.y,
          fx = (lx + rx) / 2,
          fy = (ly + ry) / 2,
          fm,
          fb;

      if (ry === ly) {
        if (fx < x0 || fx >= x1) return;
        if (lx > rx) {
          if (!va) va = {x: fx, y: y0};
          else if (va.y >= y1) return;
          vb = {x: fx, y: y1};
        } else {
          if (!va) va = {x: fx, y: y1};
          else if (va.y < y0) return;
          vb = {x: fx, y: y0};
        }
      } else {
        fm = (lx - rx) / (ry - ly);
        fb = fy - fm * fx;
        if (fm < -1 || fm > 1) {
          if (lx > rx) {
            if (!va) va = {x: (y0 - fb) / fm, y: y0};
            else if (va.y >= y1) return;
            vb = {x: (y1 - fb) / fm, y: y1};
          } else {
            if (!va) va = {x: (y1 - fb) / fm, y: y1};
            else if (va.y < y0) return;
            vb = {x: (y0 - fb) / fm, y: y0};
          }
        } else {
          if (ly < ry) {
            if (!va) va = {x: x0, y: fm * x0 + fb};
            else if (va.x >= x1) return;
            vb = {x: x1, y: fm * x1 + fb};
          } else {
            if (!va) va = {x: x1, y: fm * x1 + fb};
            else if (va.x < x0) return;
            vb = {x: x0, y: fm * x0 + fb};
          }
        }
      }

      edge.a = va;
      edge.b = vb;
      return true;
    }// Liang–Barsky line clipping.

    function d3_geom_clipLine(x0, y0, x1, y1) {
      return function(line) {
        var a = line.a,
            b = line.b,
            ax = a.x,
            ay = a.y,
            bx = b.x,
            by = b.y,
            t0 = 0,
            t1 = 1,
            dx = bx - ax,
            dy = by - ay,
            r;

        r = x0 - ax;
        if (!dx && r > 0) return;
        r /= dx;
        if (dx < 0) {
          if (r < t0) return;
          if (r < t1) t1 = r;
        } else if (dx > 0) {
          if (r > t1) return;
          if (r > t0) t0 = r;
        }

        r = x1 - ax;
        if (!dx && r < 0) return;
        r /= dx;
        if (dx < 0) {
          if (r > t1) return;
          if (r > t0) t0 = r;
        } else if (dx > 0) {
          if (r < t0) return;
          if (r < t1) t1 = r;
        }

        r = y0 - ay;
        if (!dy && r > 0) return;
        r /= dy;
        if (dy < 0) {
          if (r < t0) return;
          if (r < t1) t1 = r;
        } else if (dy > 0) {
          if (r > t1) return;
          if (r > t0) t0 = r;
        }

        r = y1 - ay;
        if (!dy && r < 0) return;
        r /= dy;
        if (dy < 0) {
          if (r > t1) return;
          if (r > t0) t0 = r;
        } else if (dy > 0) {
          if (r < t0) return;
          if (r < t1) t1 = r;
        }

        if (t0 > 0) line.a = {x: ax + t0 * dx, y: ay + t0 * dy};
        if (t1 < 1) line.b = {x: ax + t1 * dx, y: ay + t1 * dy};
        return line;
      };
    }

    function d3_geom_voronoiClipEdges(extent) {
      var edges = d3_geom_voronoiEdges,
          clip = d3_geom_clipLine(extent[0][0], extent[0][1], extent[1][0], extent[1][1]),
          i = edges.length,
          e;
      while (i--) {
        e = edges[i];
        if (!d3_geom_voronoiConnectEdge(e, extent)
            || !clip(e)
            || (abs(e.a.x - e.b.x) < ε && abs(e.a.y - e.b.y) < ε)) {
          e.a = e.b = null;
          edges.splice(i, 1);
        }
      }
    }

    function d3_geom_voronoiSetEdgeEnd(edge, lSite, rSite, vertex) {
      if (!edge.a && !edge.b) {
        edge.a = vertex;
        edge.l = lSite;
        edge.r = rSite;
      } else if (edge.l === rSite) {
        edge.b = vertex;
      } else {
        edge.a = vertex;
      }
    }

    function d3_geom_voronoiCreateEdge(lSite, rSite, va, vb) {
      var edge = new d3_geom_voronoiEdge(lSite, rSite);
      d3_geom_voronoiEdges.push(edge);
      if (va) d3_geom_voronoiSetEdgeEnd(edge, lSite, rSite, va);
      if (vb) d3_geom_voronoiSetEdgeEnd(edge, rSite, lSite, vb);
      d3_geom_voronoiCells[lSite.i].edges.push(new d3_geom_voronoiHalfEdge(edge, lSite, rSite));
      d3_geom_voronoiCells[rSite.i].edges.push(new d3_geom_voronoiHalfEdge(edge, rSite, lSite));
      return edge;
    }

    function d3_geom_voronoiDetachBeach(beach) {
      d3_geom_voronoiDetachCircle(beach);
      d3_geom_voronoiBeaches.remove(beach);
      d3_geom_voronoiBeachPool.push(beach);
      d3_geom_voronoiRedBlackNode(beach);
    }

    function d3_geom_voronoiRemoveBeach(beach) {
      var circle = beach.circle,
          x = circle.x,
          y = circle.cy,
          vertex = {x: x, y: y},
          previous = beach.P,
          next = beach.N,
          disappearing = [beach];

      d3_geom_voronoiDetachBeach(beach);

      var lArc = previous;
      while (lArc.circle
          && abs(x - lArc.circle.x) < ε
          && abs(y - lArc.circle.cy) < ε) {
        previous = lArc.P;
        disappearing.unshift(lArc);
        d3_geom_voronoiDetachBeach(lArc);
        lArc = previous;
      }

      disappearing.unshift(lArc);
      d3_geom_voronoiDetachCircle(lArc);

      var rArc = next;
      while (rArc.circle
          && abs(x - rArc.circle.x) < ε
          && abs(y - rArc.circle.cy) < ε) {
        next = rArc.N;
        disappearing.push(rArc);
        d3_geom_voronoiDetachBeach(rArc);
        rArc = next;
      }

      disappearing.push(rArc);
      d3_geom_voronoiDetachCircle(rArc);

      var nArcs = disappearing.length,
          iArc;
      for (iArc = 1; iArc < nArcs; ++iArc) {
        rArc = disappearing[iArc];
        lArc = disappearing[iArc - 1];
        d3_geom_voronoiSetEdgeEnd(rArc.edge, lArc.site, rArc.site, vertex);
      }

      lArc = disappearing[0];
      rArc = disappearing[nArcs - 1];
      rArc.edge = d3_geom_voronoiCreateEdge(lArc.site, rArc.site, null, vertex);

      d3_geom_voronoiAttachCircle(lArc);
      d3_geom_voronoiAttachCircle(rArc);
    }

    function d3_geom_voronoiBeach() {
      d3_geom_voronoiRedBlackNode(this);
      this.edge =
      this.site =
      this.circle = null;
    }

    function d3_geom_voronoiCreateBeach(site) {
      var beach = d3_geom_voronoiBeachPool.pop() || new d3_geom_voronoiBeach;
      beach.site = site;
      return beach;
    }

    function d3_geom_voronoiLeftBreakPoint(arc, directrix) {
      var site = arc.site,
          rfocx = site.x,
          rfocy = site.y,
          pby2 = rfocy - directrix;

      if (!pby2) return rfocx;

      var lArc = arc.P;
      if (!lArc) return -Infinity;

      site = lArc.site;
      var lfocx = site.x,
          lfocy = site.y,
          plby2 = lfocy - directrix;

      if (!plby2) return lfocx;

      var hl = lfocx - rfocx,
          aby2 = 1 / pby2 - 1 / plby2,
          b = hl / plby2;

      if (aby2) return (-b + Math.sqrt(b * b - 2 * aby2 * (hl * hl / (-2 * plby2) - lfocy + plby2 / 2 + rfocy - pby2 / 2))) / aby2 + rfocx;

      return (rfocx + lfocx) / 2;
    }

    function d3_geom_voronoiRightBreakPoint(arc, directrix) {
      var rArc = arc.N;
      if (rArc) return d3_geom_voronoiLeftBreakPoint(rArc, directrix);
      var site = arc.site;
      return site.y === directrix ? site.x : Infinity;
    }

    function d3_geom_voronoiAddBeach(site) {
      var x = site.x,
          directrix = site.y,
          lArc,
          rArc,
          dxl,
          dxr,
          node = d3_geom_voronoiBeaches._;

      while (node) {
        dxl = d3_geom_voronoiLeftBreakPoint(node, directrix) - x;
        if (dxl > ε) node = node.L; else {
          dxr = x - d3_geom_voronoiRightBreakPoint(node, directrix);
          if (dxr > ε) {
            if (!node.R) {
              lArc = node;
              break;
            }
            node = node.R;
          } else {
            if (dxl > -ε) {
              lArc = node.P;
              rArc = node;
            } else if (dxr > -ε) {
              lArc = node;
              rArc = node.N;
            } else {
              lArc = rArc = node;
            }
            break;
          }
        }
      }

      var newArc = d3_geom_voronoiCreateBeach(site);
      d3_geom_voronoiBeaches.insert(lArc, newArc);

      if (!lArc && !rArc) return;

      if (lArc === rArc) {
        d3_geom_voronoiDetachCircle(lArc);
        rArc = d3_geom_voronoiCreateBeach(lArc.site);
        d3_geom_voronoiBeaches.insert(newArc, rArc);
        newArc.edge = rArc.edge = d3_geom_voronoiCreateEdge(lArc.site, newArc.site);
        d3_geom_voronoiAttachCircle(lArc);
        d3_geom_voronoiAttachCircle(rArc);
        return;
      }

      if (!rArc) { // && lArc
        newArc.edge = d3_geom_voronoiCreateEdge(lArc.site, newArc.site);
        return;
      }

      // else lArc !== rArc
      d3_geom_voronoiDetachCircle(lArc);
      d3_geom_voronoiDetachCircle(rArc);

      var lSite = lArc.site,
          ax = lSite.x,
          ay = lSite.y,
          bx = site.x - ax,
          by = site.y - ay,
          rSite = rArc.site,
          cx = rSite.x - ax,
          cy = rSite.y - ay,
          d = 2 * (bx * cy - by * cx),
          hb = bx * bx + by * by,
          hc = cx * cx + cy * cy,
          vertex = {x: (cy * hb - by * hc) / d + ax, y: (bx * hc - cx * hb) / d + ay};

      d3_geom_voronoiSetEdgeEnd(rArc.edge, lSite, rSite, vertex);
      newArc.edge = d3_geom_voronoiCreateEdge(lSite, site, null, vertex);
      rArc.edge = d3_geom_voronoiCreateEdge(site, rSite, null, vertex);
      d3_geom_voronoiAttachCircle(lArc);
      d3_geom_voronoiAttachCircle(rArc);
    }

    function d3_geom_voronoiRedBlackTree() {
      this._ = null; // root node
    }

    function d3_geom_voronoiRedBlackRotateRight(tree, node) {
      var p = node,
          q = node.L,
          parent = p.U;

      if (parent) {
        if (parent.L === p) parent.L = q;
        else parent.R = q;
      } else {
        tree._ = q;
      }

      q.U = parent;
      p.U = q;
      p.L = q.R;
      if (p.L) p.L.U = p;
      q.R = p;
    }

    function d3_geom_voronoiRedBlackRotateLeft(tree, node) {
      var p = node,
          q = node.R,
          parent = p.U;

      if (parent) {
        if (parent.L === p) parent.L = q;
        else parent.R = q;
      } else {
        tree._ = q;
      }

      q.U = parent;
      p.U = q;
      p.R = q.L;
      if (p.R) p.R.U = p;
      q.L = p;
    }

    function d3_geom_voronoiRedBlackFirst(node) {
      while (node.L) node = node.L;
      return node;
    }


    d3_geom_voronoiRedBlackTree.prototype = {

      insert: function(after, node) {
        var parent, grandpa, uncle;

        if (after) {
          node.P = after;
          node.N = after.N;
          if (after.N) after.N.P = node;
          after.N = node;
          if (after.R) {
            after = after.R;
            while (after.L) after = after.L;
            after.L = node;
          } else {
            after.R = node;
          }
          parent = after;
        } else if (this._) {
          after = d3_geom_voronoiRedBlackFirst(this._);
          node.P = null;
          node.N = after;
          after.P = after.L = node;
          parent = after;
        } else {
          node.P = node.N = null;
          this._ = node;
          parent = null;
        }
        node.L = node.R = null;
        node.U = parent;
        node.C = true;

        after = node;
        while (parent && parent.C) {
          grandpa = parent.U;
          if (parent === grandpa.L) {
            uncle = grandpa.R;
            if (uncle && uncle.C) {
              parent.C = uncle.C = false;
              grandpa.C = true;
              after = grandpa;
            } else {
              if (after === parent.R) {
                d3_geom_voronoiRedBlackRotateLeft(this, parent);
                after = parent;
                parent = after.U;
              }
              parent.C = false;
              grandpa.C = true;
              d3_geom_voronoiRedBlackRotateRight(this, grandpa);
            }
          } else {
            uncle = grandpa.L;
            if (uncle && uncle.C) {
              parent.C = uncle.C = false;
              grandpa.C = true;
              after = grandpa;
            } else {
              if (after === parent.L) {
                d3_geom_voronoiRedBlackRotateRight(this, parent);
                after = parent;
                parent = after.U;
              }
              parent.C = false;
              grandpa.C = true;
              d3_geom_voronoiRedBlackRotateLeft(this, grandpa);
            }
          }
          parent = after.U;
        }
        this._.C = false;
      },

      remove: function(node) {
        if (node.N) node.N.P = node.P;
        if (node.P) node.P.N = node.N;
        node.N = node.P = null;

        var parent = node.U,
            sibling,
            left = node.L,
            right = node.R,
            next,
            red;

        if (!left) next = right;
        else if (!right) next = left;
        else next = d3_geom_voronoiRedBlackFirst(right);

        if (parent) {
          if (parent.L === node) parent.L = next;
          else parent.R = next;
        } else {
          this._ = next;
        }

        if (left && right) {
          red = next.C;
          next.C = node.C;
          next.L = left;
          left.U = next;
          if (next !== right) {
            parent = next.U;
            next.U = node.U;
            node = next.R;
            parent.L = node;
            next.R = right;
            right.U = next;
          } else {
            next.U = parent;
            parent = next;
            node = next.R;
          }
        } else {
          red = node.C;
          node = next;
        }

        if (node) node.U = parent;
        if (red) return;
        if (node && node.C) { node.C = false; return; }

        do {
          if (node === this._) break;
          if (node === parent.L) {
            sibling = parent.R;
            if (sibling.C) {
              sibling.C = false;
              parent.C = true;
              d3_geom_voronoiRedBlackRotateLeft(this, parent);
              sibling = parent.R;
            }
            if ((sibling.L && sibling.L.C)
                || (sibling.R && sibling.R.C)) {
              if (!sibling.R || !sibling.R.C) {
                sibling.L.C = false;
                sibling.C = true;
                d3_geom_voronoiRedBlackRotateRight(this, sibling);
                sibling = parent.R;
              }
              sibling.C = parent.C;
              parent.C = sibling.R.C = false;
              d3_geom_voronoiRedBlackRotateLeft(this, parent);
              node = this._;
              break;
            }
          } else {
            sibling = parent.L;
            if (sibling.C) {
              sibling.C = false;
              parent.C = true;
              d3_geom_voronoiRedBlackRotateRight(this, parent);
              sibling = parent.L;
            }
            if ((sibling.L && sibling.L.C)
              || (sibling.R && sibling.R.C)) {
              if (!sibling.L || !sibling.L.C) {
                sibling.R.C = false;
                sibling.C = true;
                d3_geom_voronoiRedBlackRotateLeft(this, sibling);
                sibling = parent.L;
              }
              sibling.C = parent.C;
              parent.C = sibling.L.C = false;
              d3_geom_voronoiRedBlackRotateRight(this, parent);
              node = this._;
              break;
            }
          }
          sibling.C = true;
          node = parent;
          parent = parent.U;
        } while (!node.C);

        if (node) node.C = false;
      }

    };

    function d3_geom_voronoiVertexOrder(a, b) {
      return b.y - a.y || b.x - a.x;
    }


    function d3_geom_voronoi(sites, bbox) {
      var site = sites.sort(d3_geom_voronoiVertexOrder).pop(),
          x0,
          y0,
          circle;

      d3_geom_voronoiEdges = [];
      d3_geom_voronoiCells = new Array(sites.length);
      d3_geom_voronoiBeaches = new d3_geom_voronoiRedBlackTree;
      d3_geom_voronoiCircles = new d3_geom_voronoiRedBlackTree;

      while (true) {
        circle = d3_geom_voronoiFirstCircle;
        if (site && (!circle || site.y < circle.y || (site.y === circle.y && site.x < circle.x))) {
          if (site.x !== x0 || site.y !== y0) {
            d3_geom_voronoiCells[site.i] = new d3_geom_voronoiCell(site);
            d3_geom_voronoiAddBeach(site);
            x0 = site.x, y0 = site.y;
          }
          site = sites.pop();
        } else if (circle) {
          d3_geom_voronoiRemoveBeach(circle.arc);
        } else {
          break;
        }
      }

      if (bbox) d3_geom_voronoiClipEdges(bbox), d3_geom_voronoiCloseCells(bbox);

      var diagram = {cells: d3_geom_voronoiCells, edges: d3_geom_voronoiEdges};

      d3_geom_voronoiBeaches =
      d3_geom_voronoiCircles =
      d3_geom_voronoiEdges =
      d3_geom_voronoiCells = null;

      return diagram;
    }

    function d3_geom_pointY(d) {
      return d[1];
    }

    function d3_geom_pointX(d) {
      return d[0];
    }

    d3$geom$voronoi = function(points) {
      var x = d3_geom_pointX,
          y = d3_geom_pointY,
          fx = x,
          fy = y,
          clipExtent = d3_geom_voronoiClipExtent;

      // @deprecated; use voronoi(data) instead.
      if (points) return voronoi(points);

      function voronoi(data) {
        var polygons = new Array(data.length),
            x0 = clipExtent[0][0],
            y0 = clipExtent[0][1],
            x1 = clipExtent[1][0],
            y1 = clipExtent[1][1];

        d3_geom_voronoi(sites(data), clipExtent).cells.forEach(function(cell, i) {
          var edges = cell.edges,
              site = cell.site,
              polygon = polygons[i] = edges.length ? edges.map(function(e) { var s = e.start(); return [s.x, s.y]; })
                  : site.x >= x0 && site.x <= x1 && site.y >= y0 && site.y <= y1 ? [[x0, y1], [x1, y1], [x1, y0], [x0, y0]]
                  : [];
          polygon.point = data[i];
        });

        return polygons;
      }

      function sites(data) {
        return data.map(function(d, i) {
          return {
            x: Math.round(fx(d, i) / ε) * ε,
            y: Math.round(fy(d, i) / ε) * ε,
            i: i
          };
        });
      }

      voronoi.links = function(data) {
        return d3_geom_voronoi(sites(data)).edges.filter(function(edge) {
          return edge.l && edge.r;
        }).map(function(edge) {
          return {
            source: data[edge.l.i],
            target: data[edge.r.i]
          };
        });
      };

      voronoi.triangles = function(data) {
        var triangles = [];

        d3_geom_voronoi(sites(data)).cells.forEach(function(cell, i) {
          var site = cell.site,
              edges = cell.edges.sort(d3_geom_voronoiHalfEdgeOrder),
              j = -1,
              m = edges.length,
              e0,
              s0,
              e1 = edges[m - 1].edge,
              s1 = e1.l === site ? e1.r : e1.l;

          while (++j < m) {
            e0 = e1;
            s0 = s1;
            e1 = edges[j].edge;
            s1 = e1.l === site ? e1.r : e1.l;
            if (i < s0.i && i < s1.i && d3_geom_voronoiTriangleArea(site, s0, s1) < 0) {
              triangles.push([data[i], data[s0.i], data[s1.i]]);
            }
          }
        });

        return triangles;
      };

      voronoi.x = function(_) {
        return arguments.length ? (fx = d3_functor(x = _), voronoi) : x;
      };

      voronoi.y = function(_) {
        return arguments.length ? (fy = d3_functor(y = _), voronoi) : y;
      };

      voronoi.clipExtent = function(_) {
        if (!arguments.length) return clipExtent === d3_geom_voronoiClipExtent ? null : clipExtent;
        clipExtent = _ == null ? d3_geom_voronoiClipExtent : _;
        return voronoi;
      };

      // @deprecated; use clipExtent instead.
      voronoi.size = function(_) {
        if (!arguments.length) return clipExtent === d3_geom_voronoiClipExtent ? null : clipExtent && clipExtent[1];
        return voronoi.clipExtent(_ && [[0, 0], _]);
      };

      return voronoi;
    };

    var d3$mouse;

    function d3_eventSource() {
      var e = window.d3_event, s;
      while (s = e.sourceEvent) e = s;
      return e;
    }// https://bugs.webkit.org/show_bug.cgi?id=44083

    var d3_mouse_bug44083 = window.navigator && /WebKit/.test(window.navigator.userAgent) ? -1 : 0;

    var d3$select;
    var d3$selection;

    var d3_document = window.document;

    d3$selection = function() {
      return d3$select(d3_document.documentElement);
    };

    var d3_selectionPrototype = d3$selection.prototype = [];

    var d3_vendorPrefixes = ["webkit", "ms", "moz", "Moz", "o", "O"];

    function d3_vendorSymbol(object, name) {
      if (name in object) return name;
      name = name.charAt(0).toUpperCase() + name.slice(1);
      for (var i = 0, n = d3_vendorPrefixes.length; i < n; ++i) {
        var prefixName = d3_vendorPrefixes[i] + name;
        if (prefixName in object) return prefixName;
      }
    }

    var d3_select = function(s, n) { return n.querySelector(s); },
        d3_selectAll = function(s, n) { return n.querySelectorAll(s); },
        d3_selectMatches = function(n, s) {
          var d3_selectMatcher = n.matches || n[d3_vendorSymbol(n, "matchesSelector")];
          d3_selectMatches = function(n, s) {
            return d3_selectMatcher.call(n, s);
          };
          return d3_selectMatches(n, s);
        };// Prefer Sizzle, if available.

    if (typeof Sizzle === "function") {
      d3_select = function(s, n) { return Sizzle(s, n)[0] || null; };
      d3_selectAll = Sizzle;
      d3_selectMatches = Sizzle.matchesSelector;
    }

    function d3_selection_selector(selector) {
      return typeof selector === "function" ? selector : function() {
        return d3_select(selector, this);
      };
    }

    d3_selectionPrototype.select = function(selector) {
      var subgroups = [],
          subgroup,
          subnode,
          group,
          node;

      selector = d3_selection_selector(selector);

      for (var j = -1, m = this.length; ++j < m;) {
        subgroups.push(subgroup = []);
        subgroup.parentNode = (group = this[j]).parentNode;
        for (var i = -1, n = group.length; ++i < n;) {
          if (node = group[i]) {
            subgroup.push(subnode = selector.call(node, node.__data__, i, j));
            if (subnode && "__data__" in node) subnode.__data__ = node.__data__;
          } else {
            subgroup.push(null);
          }
        }
      }

      return d3_selection(subgroups);
    };

    var d3_arraySlice = [].slice,
        d3_array = function(list) { return d3_arraySlice.call(list); }; // conversion for NodeLists

    function d3_selection_selectorAll(selector) {
      return typeof selector === "function" ? selector : function() {
        return d3_selectAll(selector, this);
      };
    }

    d3_selectionPrototype.selectAll = function(selector) {
      var subgroups = [],
          subgroup,
          node;

      selector = d3_selection_selectorAll(selector);

      for (var j = -1, m = this.length; ++j < m;) {
        for (var group = this[j], i = -1, n = group.length; ++i < n;) {
          if (node = group[i]) {
            subgroups.push(subgroup = d3_array(selector.call(node, node.__data__, i, j)));
            subgroup.parentNode = node;
          }
        }
      }

      return d3_selection(subgroups);
    };

    var d3$ns;

    var d3_nsPrefix = {
      svg: "http://www.w3.org/2000/svg",
      xhtml: "http://www.w3.org/1999/xhtml",
      xlink: "http://www.w3.org/1999/xlink",
      xml: "http://www.w3.org/XML/1998/namespace",
      xmlns: "http://www.w3.org/2000/xmlns/"
    };

    d3$ns = {
      prefix: d3_nsPrefix,
      qualify: function(name) {
        var i = name.indexOf(":"),
            prefix = name;
        if (i >= 0) {
          prefix = name.slice(0, i);
          name = name.slice(i + 1);
        }
        return d3_nsPrefix.hasOwnProperty(prefix)
            ? {space: d3_nsPrefix[prefix], local: name}
            : name;
      }
    };

    function d3_selection_attr(name, value) {
      name = d3$ns.qualify(name);

      // For attr(string, null), remove the attribute with the specified name.
      function attrNull() {
        this.removeAttribute(name);
      }
      function attrNullNS() {
        this.removeAttributeNS(name.space, name.local);
      }

      // For attr(string, string), set the attribute with the specified name.
      function attrConstant() {
        this.setAttribute(name, value);
      }
      function attrConstantNS() {
        this.setAttributeNS(name.space, name.local, value);
      }

      // For attr(string, function), evaluate the function for each element, and set
      // or remove the attribute as appropriate.
      function attrFunction() {
        var x = value.apply(this, arguments);
        if (x == null) this.removeAttribute(name);
        else this.setAttribute(name, x);
      }
      function attrFunctionNS() {
        var x = value.apply(this, arguments);
        if (x == null) this.removeAttributeNS(name.space, name.local);
        else this.setAttributeNS(name.space, name.local, x);
      }

      return value == null
          ? (name.local ? attrNullNS : attrNull) : (typeof value === "function"
          ? (name.local ? attrFunctionNS : attrFunction)
          : (name.local ? attrConstantNS : attrConstant));
    }

    d3_selectionPrototype.attr = function(name, value) {
      if (arguments.length < 2) {

        // For attr(string), return the attribute value for the first node.
        if (typeof name === "string") {
          var node = this.node();
          name = d3$ns.qualify(name);
          return name.local
              ? node.getAttributeNS(name.space, name.local)
              : node.getAttribute(name);
        }

        // For attr(object), the object specifies the names and values of the
        // attributes to set or remove. The values may be functions that are
        // evaluated for each element.
        for (value in name) this.each(d3_selection_attr(value, name[value]));
        return this;
      }

      return this.each(d3_selection_attr(name, value));
    };

    function d3_collapse(s) {
      return s.trim().replace(/\s+/g, " ");
    }

    var d3$requote;

    var d3_requote_re = /[\\\^\$\*\+\?\|\[\]\(\)\.\{\}]/g;

    d3$requote = function(s) {
      return s.replace(d3_requote_re, "\\$&");
    };

    function d3_selection_classedRe(name) {
      return new RegExp("(?:^|\\s+)" + d3$requote(name) + "(?:\\s+|$)", "g");
    }

    function d3_selection_classedName(name) {
      var re = d3_selection_classedRe(name);
      return function(node, value) {
        if (c = node.classList) return value ? c.add(name) : c.remove(name);
        var c = node.getAttribute("class") || "";
        if (value) {
          re.lastIndex = 0;
          if (!re.test(c)) node.setAttribute("class", d3_collapse(c + " " + name));
        } else {
          node.setAttribute("class", d3_collapse(c.replace(re, " ")));
        }
      };
    }

    function d3_selection_classes(name) {
      return (name + "").trim().split(/^|\s+/);
    }// Multiple class names are allowed (e.g., "foo bar").

    function d3_selection_classed(name, value) {
      name = d3_selection_classes(name).map(d3_selection_classedName);
      var n = name.length;

      function classedConstant() {
        var i = -1;
        while (++i < n) name[i](this, value);
      }

      // When the value is a function, the function is still evaluated only once per
      // element even if there are multiple class names.
      function classedFunction() {
        var i = -1, x = value.apply(this, arguments);
        while (++i < n) name[i](this, x);
      }

      return typeof value === "function"
          ? classedFunction
          : classedConstant;
    }

    d3_selectionPrototype.classed = function(name, value) {
      if (arguments.length < 2) {

        // For classed(string), return true only if the first node has the specified
        // class or classes. Note that even if the browser supports DOMTokenList, it
        // probably doesn't support it on SVG elements (which can be animated).
        if (typeof name === "string") {
          var node = this.node(),
              n = (name = d3_selection_classes(name)).length,
              i = -1;
          if (value = node.classList) {
            while (++i < n) if (!value.contains(name[i])) return false;
          } else {
            value = node.getAttribute("class");
            while (++i < n) if (!d3_selection_classedRe(name[i]).test(value)) return false;
          }
          return true;
        }

        // For classed(object), the object specifies the names of classes to add or
        // remove. The values may be functions that are evaluated for each element.
        for (value in name) this.each(d3_selection_classed(value, name[value]));
        return this;
      }

      // Otherwise, both a name and a value are specified, and are handled as below.
      return this.each(d3_selection_classed(name, value));
    };

    function d3_selection_style(name, value, priority) {

      // For style(name, null) or style(name, null, priority), remove the style
      // property with the specified name. The priority is ignored.
      function styleNull() {
        this.style.removeProperty(name);
      }

      // For style(name, string) or style(name, string, priority), set the style
      // property with the specified name, using the specified priority.
      function styleConstant() {
        this.style.setProperty(name, value, priority);
      }

      // For style(name, function) or style(name, function, priority), evaluate the
      // function for each element, and set or remove the style property as
      // appropriate. When setting, use the specified priority.
      function styleFunction() {
        var x = value.apply(this, arguments);
        if (x == null) this.style.removeProperty(name);
        else this.style.setProperty(name, x, priority);
      }

      return value == null
          ? styleNull : (typeof value === "function"
          ? styleFunction : styleConstant);
    }

    function d3_window(node) {
      return node
          && ((node.ownerDocument && node.ownerDocument.defaultView) // node is a Node
            || (node.document && node) // node is a Window
            || node.defaultView); // node is a Document
    }

    d3_selectionPrototype.style = function(name, value, priority) {
      var n = arguments.length;
      if (n < 3) {

        // For style(object) or style(object, string), the object specifies the
        // names and values of the attributes to set or remove. The values may be
        // functions that are evaluated for each element. The optional string
        // specifies the priority.
        if (typeof name !== "string") {
          if (n < 2) value = "";
          for (priority in name) this.each(d3_selection_style(priority, name[priority], value));
          return this;
        }

        // For style(string), return the computed style value for the first node.
        if (n < 2) {
          var node = this.node();
          return d3_window(node).getComputedStyle(node, null).getPropertyValue(name);
        }

        // For style(string, string) or style(string, function), use the default
        // priority. The priority is ignored for style(string, null).
        priority = "";
      }

      // Otherwise, a name, value and priority are specified, and handled as below.
      return this.each(d3_selection_style(name, value, priority));
    };

    function d3_selection_property(name, value) {

      // For property(name, null), remove the property with the specified name.
      function propertyNull() {
        delete this[name];
      }

      // For property(name, string), set the property with the specified name.
      function propertyConstant() {
        this[name] = value;
      }

      // For property(name, function), evaluate the function for each element, and
      // set or remove the property as appropriate.
      function propertyFunction() {
        var x = value.apply(this, arguments);
        if (x == null) delete this[name];
        else this[name] = x;
      }

      return value == null
          ? propertyNull : (typeof value === "function"
          ? propertyFunction : propertyConstant);
    }

    d3_selectionPrototype.property = function(name, value) {
      if (arguments.length < 2) {

        // For property(string), return the property value for the first node.
        if (typeof name === "string") return this.node()[name];

        // For property(object), the object specifies the names and values of the
        // properties to set or remove. The values may be functions that are
        // evaluated for each element.
        for (value in name) this.each(d3_selection_property(value, name[value]));
        return this;
      }

      // Otherwise, both a name and a value are specified, and are handled as below.
      return this.each(d3_selection_property(name, value));
    };

    d3_selectionPrototype.text = function(value) {
      return arguments.length
          ? this.each(typeof value === "function"
          ? function() { var v = value.apply(this, arguments); this.textContent = v == null ? "" : v; } : value == null
          ? function() { this.textContent = ""; }
          : function() { this.textContent = value; })
          : this.node().textContent;
    };

    d3_selectionPrototype.html = function(value) {
      return arguments.length
          ? this.each(typeof value === "function"
          ? function() { var v = value.apply(this, arguments); this.innerHTML = v == null ? "" : v; } : value == null
          ? function() { this.innerHTML = ""; }
          : function() { this.innerHTML = value; })
          : this.node().innerHTML;
    };

    function d3_selection_creator(name) {

      function create() {
        var document = this.ownerDocument,
            namespace = this.namespaceURI;
        return namespace
            ? document.createElementNS(namespace, name)
            : document.createElement(name);
      }

      function createNS() {
        return this.ownerDocument.createElementNS(name.space, name.local);
      }

      return typeof name === "function" ? name
          : (name = d3$ns.qualify(name)).local ? createNS
          : create;
    }

    d3_selectionPrototype.append = function(name) {
      name = d3_selection_creator(name);
      return this.select(function() {
        return this.appendChild(name.apply(this, arguments));
      });
    };

    d3_selectionPrototype.insert = function(name, before) {
      name = d3_selection_creator(name);
      before = d3_selection_selector(before);
      return this.select(function() {
        return this.insertBefore(name.apply(this, arguments), before.apply(this, arguments) || null);
      });
    };

    function d3_selectionRemove() {
      var parent = this.parentNode;
      if (parent) parent.removeChild(this);
    }// TODO remove(selector)?
    // TODO remove(node)?
    // TODO remove(function)?

    d3_selectionPrototype.remove = function() {
      return this.each(d3_selectionRemove);
    };

    var d3_selection_enterPrototype = [];

    d3_selection_enterPrototype.append = d3_selectionPrototype.append;
    d3_selection_enterPrototype.empty = d3_selectionPrototype.empty;
    d3_selection_enterPrototype.node = d3_selectionPrototype.node;
    d3_selection_enterPrototype.call = d3_selectionPrototype.call;
    d3_selection_enterPrototype.size = d3_selectionPrototype.size;

    d3_selection_enterPrototype.select = function(selector) {
      var subgroups = [],
          subgroup,
          subnode,
          upgroup,
          group,
          node;

      for (var j = -1, m = this.length; ++j < m;) {
        upgroup = (group = this[j]).update;
        subgroups.push(subgroup = []);
        subgroup.parentNode = group.parentNode;
        for (var i = -1, n = group.length; ++i < n;) {
          if (node = group[i]) {
            subgroup.push(upgroup[i] = subnode = selector.call(group.parentNode, node.__data__, i, j));
            subnode.__data__ = node.__data__;
          } else {
            subgroup.push(null);
          }
        }
      }

      return d3_selection(subgroups);
    };

    function d3_selection_enterInsertBefore(enter) {
      var i0, j0;
      return function(d, i, j) {
        var group = enter[j].update,
            n = group.length,
            node;
        if (j != j0) j0 = j, i0 = 0;
        if (i >= i0) i0 = i + 1;
        while (!(node = group[i0]) && ++i0 < n);
        return node;
      };
    }


    d3_selection_enterPrototype.insert = function(name, before) {
      if (arguments.length < 2) before = d3_selection_enterInsertBefore(this);
      return d3_selectionPrototype.insert.call(this, name, before);
    };

    var d3_subclass = {}.__proto__?

    // Until ECMAScript supports array subclassing, prototype injection works well.
    function(object, prototype) {
      object.__proto__ = prototype;
    }:

    // And if your browser doesn't support __proto__, we'll use direct extension.
    function(object, prototype) {
      for (var property in prototype) object[property] = prototype[property];
    };

    function d3_selection_enter(selection) {
      d3_subclass(selection, d3_selection_enterPrototype);
      return selection;
    }

    function d3_selection_dataNode(data) {
      return {__data__: data};
    }

    function d3_Map() {
      this._ = Object.create(null);
    }

    var d3_map_proto = "__proto__",
        d3_map_zero = "\0";

    function d3_map_unescape(key) {
      return (key += "")[0] === d3_map_zero ? key.slice(1) : key;
    }

    function d3_map_empty() {
      for (var key in this._) return false;
      return true;
    }

    function d3_map_size() {
      var size = 0;
      for (var key in this._) ++size;
      return size;
    }

    function d3_map_keys() {
      var keys = [];
      for (var key in this._) keys.push(d3_map_unescape(key));
      return keys;
    }

    function d3_map_escape(key) {
      return (key += "") === d3_map_proto || key[0] === d3_map_zero ? d3_map_zero + key : key;
    }

    function d3_map_remove(key) {
      return (key = d3_map_escape(key)) in this._ && delete this._[key];
    }

    function d3_map_has(key) {
      return d3_map_escape(key) in this._;
    }

    function d3_class(ctor, properties) {
      for (var key in properties) {
        Object.defineProperty(ctor.prototype, key, {
          value: properties[key],
          enumerable: false
        });
      }
    }

    d3_class(d3_Map, {
      has: d3_map_has,
      get: function(key) {
        return this._[d3_map_escape(key)];
      },
      set: function(key, value) {
        return this._[d3_map_escape(key)] = value;
      },
      remove: d3_map_remove,
      keys: d3_map_keys,
      values: function() {
        var values = [];
        for (var key in this._) values.push(this._[key]);
        return values;
      },
      entries: function() {
        var entries = [];
        for (var key in this._) entries.push({key: d3_map_unescape(key), value: this._[key]});
        return entries;
      },
      size: d3_map_size,
      empty: d3_map_empty,
      forEach: function(f) {
        for (var key in this._) f.call(this, d3_map_unescape(key), this._[key]);
      }
    });

    d3_selectionPrototype.data = function(value, key) {
      var i = -1,
          n = this.length,
          group,
          node;

      // If no value is specified, return the first value.
      if (!arguments.length) {
        value = new Array(n = (group = this[0]).length);
        while (++i < n) {
          if (node = group[i]) {
            value[i] = node.__data__;
          }
        }
        return value;
      }

      function bind(group, groupData) {
        var i,
            n = group.length,
            m = groupData.length,
            n0 = Math.min(n, m),
            updateNodes = new Array(m),
            enterNodes = new Array(m),
            exitNodes = new Array(n),
            node,
            nodeData;

        if (key) {
          var nodeByKeyValue = new d3_Map,
              keyValues = new Array(n),
              keyValue;

          for (i = -1; ++i < n;) {
            if (nodeByKeyValue.has(keyValue = key.call(node = group[i], node.__data__, i))) {
              exitNodes[i] = node; // duplicate selection key
            } else {
              nodeByKeyValue.set(keyValue, node);
            }
            keyValues[i] = keyValue;
          }

          for (i = -1; ++i < m;) {
            if (!(node = nodeByKeyValue.get(keyValue = key.call(groupData, nodeData = groupData[i], i)))) {
              enterNodes[i] = d3_selection_dataNode(nodeData);
            } else if (node !== true) { // no duplicate data key
              updateNodes[i] = node;
              node.__data__ = nodeData;
            }
            nodeByKeyValue.set(keyValue, true);
          }

          for (i = -1; ++i < n;) {
            if (nodeByKeyValue.get(keyValues[i]) !== true) {
              exitNodes[i] = group[i];
            }
          }
        } else {
          for (i = -1; ++i < n0;) {
            node = group[i];
            nodeData = groupData[i];
            if (node) {
              node.__data__ = nodeData;
              updateNodes[i] = node;
            } else {
              enterNodes[i] = d3_selection_dataNode(nodeData);
            }
          }
          for (; i < m; ++i) {
            enterNodes[i] = d3_selection_dataNode(groupData[i]);
          }
          for (; i < n; ++i) {
            exitNodes[i] = group[i];
          }
        }

        enterNodes.update
            = updateNodes;

        enterNodes.parentNode
            = updateNodes.parentNode
            = exitNodes.parentNode
            = group.parentNode;

        enter.push(enterNodes);
        update.push(updateNodes);
        exit.push(exitNodes);
      }

      var enter = d3_selection_enter([]),
          update = d3_selection([]),
          exit = d3_selection([]);

      if (typeof value === "function") {
        while (++i < n) {
          bind(group = this[i], value.call(group, group.parentNode.__data__, i));
        }
      } else {
        while (++i < n) {
          bind(group = this[i], value);
        }
      }

      update.enter = function() { return enter; };
      update.exit = function() { return exit; };
      return update;
    };

    d3_selectionPrototype.datum = function(value) {
      return arguments.length
          ? this.property("__data__", value)
          : this.property("__data__");
    };

    function d3_selection_filter(selector) {
      return function() {
        return d3_selectMatches(this, selector);
      };
    }

    d3_selectionPrototype.filter = function(filter) {
      var subgroups = [],
          subgroup,
          group,
          node;

      if (typeof filter !== "function") filter = d3_selection_filter(filter);

      for (var j = 0, m = this.length; j < m; j++) {
        subgroups.push(subgroup = []);
        subgroup.parentNode = (group = this[j]).parentNode;
        for (var i = 0, n = group.length; i < n; i++) {
          if ((node = group[i]) && filter.call(node, node.__data__, i, j)) {
            subgroup.push(node);
          }
        }
      }

      return d3_selection(subgroups);
    };

    d3_selectionPrototype.order = function() {
      for (var j = -1, m = this.length; ++j < m;) {
        for (var group = this[j], i = group.length - 1, next = group[i], node; --i >= 0;) {
          if (node = group[i]) {
            if (next && next !== node.nextSibling) next.parentNode.insertBefore(node, next);
            next = node;
          }
        }
      }
      return this;
    };

    function d3_ascending(a, b) {
      return a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;
    }

    function d3_selection_sortComparator(comparator) {
      if (!arguments.length) comparator = d3_ascending;
      return function(a, b) {
        return a && b ? comparator(a.__data__, b.__data__) : !a - !b;
      };
    }

    d3_selectionPrototype.sort = function(comparator) {
      comparator = d3_selection_sortComparator.apply(this, arguments);
      for (var j = -1, m = this.length; ++j < m;) this[j].sort(comparator);
      return this.order();
    };

    function d3_noop() {}

    function d3_selection_onListener(listener, argumentz) {
      return function(e) {
        var o = window.d3_event; // Events can be reentrant (e.g., focus).
        window.d3_event = e;
        argumentz[0] = this.__data__;
        try {
          listener.apply(this, argumentz);
        } finally {
          window.d3_event = o;
        }
      };
    }

    function d3_selection_onFilter(listener, argumentz) {
      var l = d3_selection_onListener(listener, argumentz);
      return function(e) {
        var target = this, related = e.relatedTarget;
        if (!related || (related !== target && !(related.compareDocumentPosition(target) & 8))) {
          l.call(target, e);
        }
      };
    }

    var d3$map;

    d3$map = function(object, f) {
      var map = new d3_Map;
      if (object instanceof d3_Map) {
        object.forEach(function(key, value) { map.set(key, value); });
      } else if (Array.isArray(object)) {
        var i = -1,
            n = object.length,
            o;
        if (arguments.length === 1) while (++i < n) map.set(i, object[i]);
        else while (++i < n) map.set(f.call(object, o = object[i], i), o);
      } else {
        for (var key in object) map.set(key, object[key]);
      }
      return map;
    };

    var d3_selection_onFilters = d3$map({
      mouseenter: "mouseover",
      mouseleave: "mouseout"
    });

    function d3_selection_on(type, listener, capture) {
      var name = "__on" + type,
          i = type.indexOf("."),
          wrap = d3_selection_onListener;

      if (i > 0) type = type.slice(0, i);
      var filter = d3_selection_onFilters.get(type);
      if (filter) type = filter, wrap = d3_selection_onFilter;

      function onRemove() {
        var l = this[name];
        if (l) {
          this.removeEventListener(type, l, l.$);
          delete this[name];
        }
      }

      function onAdd() {
        var l = wrap(listener, d3_array(arguments));
        onRemove.call(this);
        this.addEventListener(type, this[name] = l, l.$ = capture);
        l._ = listener;
      }

      function removeAll() {
        var re = new RegExp("^__on([^.]+)" + d3$requote(type) + "$"),
            match;
        for (var name in this) {
          if (match = name.match(re)) {
            var l = this[name];
            this.removeEventListener(match[1], l, l.$);
            delete this[name];
          }
        }
      }

      return i
          ? listener ? onAdd : onRemove
          : listener ? d3_noop : removeAll;
    }

    d3_selectionPrototype.on = function(type, listener, capture) {
      var n = arguments.length;
      if (n < 3) {

        // For on(object) or on(object, boolean), the object specifies the event
        // types and listeners to add or remove. The optional boolean specifies
        // whether the listener captures events.
        if (typeof type !== "string") {
          if (n < 2) listener = false;
          for (capture in type) this.each(d3_selection_on(capture, type[capture], listener));
          return this;
        }

        // For on(string), return the listener for the first node.
        if (n < 2) return (n = this.node()["__on" + type]) && n._;

        // For on(string, function), use the default capture.
        capture = false;
      }

      // Otherwise, a type, listener and capture are specified, and handled as below.
      return this.each(d3_selection_on(type, listener, capture));
    };

    function d3_selection_each(groups, callback) {
      for (var j = 0, m = groups.length; j < m; j++) {
        for (var group = groups[j], i = 0, n = group.length, node; i < n; i++) {
          if (node = group[i]) callback(node, i, j);
        }
      }
      return groups;
    }

    d3_selectionPrototype.each = function(callback) {
      return d3_selection_each(this, function(node, i, j) {
        callback.call(node, node.__data__, i, j);
      });
    };

    d3_selectionPrototype.call = function(callback) {
      var args = d3_array(arguments);
      callback.apply(args[0] = this, args);
      return this;
    };

    d3_selectionPrototype.empty = function() {
      return !this.node();
    };

    d3_selectionPrototype.node = function() {
      for (var j = 0, m = this.length; j < m; j++) {
        for (var group = this[j], i = 0, n = group.length; i < n; i++) {
          var node = group[i];
          if (node) return node;
        }
      }
      return null;
    };

    d3_selectionPrototype.size = function() {
      var n = 0;
      d3_selection_each(this, function() { ++n; });
      return n;
    };

    function d3_selection(groups) {
      d3_subclass(groups, d3_selectionPrototype);
      return groups;
    }

    function d3_documentElement(node) {
      return node
          && (node.ownerDocument // node is a Node
          || node.document // node is a Window
          || node).documentElement; // node is a Document
    }// TODO fast singleton implementation?


    d3$select = function(node) {
      var group;
      if (typeof node === "string") {
        group = [d3_select(node, d3_document)];
        group.parentNode = d3_document.documentElement;
      } else {
        group = [node];
        group.parentNode = d3_documentElement(node);
      }
      return d3_selection([group]);
    };

    function d3_mousePoint(container, e) {
      if (e.changedTouches) e = e.changedTouches[0];
      var svg = container.ownerSVGElement || container;
      if (svg.createSVGPoint) {
        var point = svg.createSVGPoint();
        if (d3_mouse_bug44083 < 0) {
          var window = d3_window(container);
          if (window.scrollX || window.scrollY) {
            svg = d3$select("body").append("svg").style({
              position: "absolute",
              top: 0,
              left: 0,
              margin: 0,
              padding: 0,
              border: "none"
            }, "important");
            var ctm = svg[0][0].getScreenCTM();
            d3_mouse_bug44083 = !(ctm.f || ctm.e);
            svg.remove();
          }
        }
        if (d3_mouse_bug44083) point.x = e.pageX, point.y = e.pageY;
        else point.x = e.clientX, point.y = e.clientY;
        point = point.matrixTransform(container.getScreenCTM().inverse());
        return [point.x, point.y];
      }
      var rect = container.getBoundingClientRect();
      return [e.clientX - rect.left - container.clientLeft, e.clientY - rect.top - container.clientTop];
    }

    d3$mouse = function(container) {
      return d3_mousePoint(container, d3_eventSource());
    };

    var vertices = d3$range(100).map(function(d) {
      return [Math.random() * width, Math.random() * height];
    });

    var layout = d3$geom$voronoi()
        .clipExtent([[0, 0], [width, height]]);

    var svg = d3$select("body").append("svg")
        .attr("width", width)
        .attr("height", height)
        .on("mousemove", function() { vertices[0] = d3$mouse(this); redraw(); });

    var path = svg.append("g").selectAll("path");

    svg.selectAll("circle")
        .data(vertices.slice(1))
      .enter().append("circle")
        .attr("transform", function(d) { return "translate(" + d + ")"; })
        .attr("r", 1.5);

    redraw();

    function redraw() {
      path = path
          .data(layout(vertices), polygon);

      path.exit().remove();

      path.enter().append("path")
          .attr("class", function(d, i) { return "q" + (i % 9) + "-9"; })
          .attr("d", polygon);

      path.order();
    }

    function polygon(d) {
      return "M" + d.join("L") + "Z";
    }

})();