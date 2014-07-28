{
  "filepath": "/geom/delaunay.js",
  "shared": [],
  "dependencies": [
    "d3.geom.voronoi"
  ],
  "helpers": [],
  "exports": [
    "d3.geom.delaunay"
  ],
  "ast": {
    "type": "Program",
    "body": [
      {
        "type": "ExpressionStatement",
        "expression": {
          "type": "AssignmentExpression",
          "operator": "=",
          "left": {
            "type": "MemberExpression",
            "computed": false,
            "object": {
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "Identifier",
                "name": "d3"
              },
              "property": {
                "type": "Identifier",
                "name": "geom"
              }
            },
            "property": {
              "type": "Identifier",
              "name": "delaunay"
            }
          },
          "right": {
            "type": "FunctionExpression",
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "name": "vertices"
              }
            ],
            "defaults": [],
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "MemberExpression",
                          "computed": false,
                          "object": {
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "name": "d3"
                            },
                            "property": {
                              "type": "Identifier",
                              "name": "geom"
                            }
                          },
                          "property": {
                            "type": "Identifier",
                            "name": "voronoi"
                          }
                        },
                        "arguments": []
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "triangles"
                      }
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "name": "vertices"
                      }
                    ]
                  }
                }
              ]
            },
            "rest": null,
            "generator": false,
            "expression": false
          }
        }
      }
    ]
  },
  "src": "d3.geom.delaunay = function (vertices) {\n    return d3.geom.voronoi().triangles(vertices);\n};"
}