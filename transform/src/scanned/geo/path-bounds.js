{
  "filepath": "/geo/path-bounds.js",
  "shared": [
    {
      "path": "/geo/_pathBounds.js",
      "properties": [
        "d3_geo_pathBoundsX0",
        "d3_geo_pathBoundsY0",
        "d3_geo_pathBoundsX1",
        "d3_geo_pathBoundsY1"
      ],
      "name": "GEO_PATHBOUNDS"
    }
  ],
  "dependencies": [
    "d3_noop",
    "d3_geo_pathBoundsX0",
    "d3_geo_pathBoundsX1",
    "d3_geo_pathBoundsY0",
    "d3_geo_pathBoundsY1"
  ],
  "helpers": [
    "d3_geo_pathBounds",
    "d3_geo_pathBoundsPoint"
  ],
  "exports": [],
  "ast": {
    "type": "Program",
    "body": [
      {
        "type": "EmptyStatement"
      },
      {
        "type": "EmptyStatement"
      },
      {
        "type": "EmptyStatement"
      },
      {
        "type": "EmptyStatement"
      },
      {
        "type": "VariableDeclaration",
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "name": "d3_geo_pathBounds"
            },
            "init": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "key": {
                    "type": "Identifier",
                    "name": "point"
                  },
                  "value": {
                    "type": "Identifier",
                    "name": "d3_geo_pathBoundsPoint"
                  },
                  "kind": "init"
                },
                {
                  "type": "Property",
                  "key": {
                    "type": "Identifier",
                    "name": "lineStart"
                  },
                  "value": {
                    "type": "Identifier",
                    "name": "d3_noop"
                  },
                  "kind": "init"
                },
                {
                  "type": "Property",
                  "key": {
                    "type": "Identifier",
                    "name": "lineEnd"
                  },
                  "value": {
                    "type": "Identifier",
                    "name": "d3_noop"
                  },
                  "kind": "init"
                },
                {
                  "type": "Property",
                  "key": {
                    "type": "Identifier",
                    "name": "polygonStart"
                  },
                  "value": {
                    "type": "Identifier",
                    "name": "d3_noop"
                  },
                  "kind": "init"
                },
                {
                  "type": "Property",
                  "key": {
                    "type": "Identifier",
                    "name": "polygonEnd"
                  },
                  "value": {
                    "type": "Identifier",
                    "name": "d3_noop"
                  },
                  "kind": "init"
                }
              ]
            }
          }
        ]
      },
      {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "name": "d3_geo_pathBoundsPoint"
        },
        "params": [
          {
            "type": "Identifier",
            "name": "x"
          },
          {
            "type": "Identifier",
            "name": "y"
          }
        ],
        "defaults": [],
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "IfStatement",
              "test": {
                "type": "BinaryExpression",
                "operator": "<",
                "left": {
                  "type": "Identifier",
                  "name": "x"
                },
                "right": {
                  "type": "Identifier",
                  "name": "d3_geo_pathBoundsX0"
                }
              },
              "consequent": {
                "type": "ExpressionStatement",
                "expression": {
                  "type": "AssignmentExpression",
                  "operator": "=",
                  "left": {
                    "type": "Identifier",
                    "name": "d3_geo_pathBoundsX0"
                  },
                  "right": {
                    "type": "Identifier",
                    "name": "x"
                  }
                }
              },
              "alternate": null
            },
            {
              "type": "IfStatement",
              "test": {
                "type": "BinaryExpression",
                "operator": ">",
                "left": {
                  "type": "Identifier",
                  "name": "x"
                },
                "right": {
                  "type": "Identifier",
                  "name": "d3_geo_pathBoundsX1"
                }
              },
              "consequent": {
                "type": "ExpressionStatement",
                "expression": {
                  "type": "AssignmentExpression",
                  "operator": "=",
                  "left": {
                    "type": "Identifier",
                    "name": "d3_geo_pathBoundsX1"
                  },
                  "right": {
                    "type": "Identifier",
                    "name": "x"
                  }
                }
              },
              "alternate": null
            },
            {
              "type": "IfStatement",
              "test": {
                "type": "BinaryExpression",
                "operator": "<",
                "left": {
                  "type": "Identifier",
                  "name": "y"
                },
                "right": {
                  "type": "Identifier",
                  "name": "d3_geo_pathBoundsY0"
                }
              },
              "consequent": {
                "type": "ExpressionStatement",
                "expression": {
                  "type": "AssignmentExpression",
                  "operator": "=",
                  "left": {
                    "type": "Identifier",
                    "name": "d3_geo_pathBoundsY0"
                  },
                  "right": {
                    "type": "Identifier",
                    "name": "y"
                  }
                }
              },
              "alternate": null
            },
            {
              "type": "IfStatement",
              "test": {
                "type": "BinaryExpression",
                "operator": ">",
                "left": {
                  "type": "Identifier",
                  "name": "y"
                },
                "right": {
                  "type": "Identifier",
                  "name": "d3_geo_pathBoundsY1"
                }
              },
              "consequent": {
                "type": "ExpressionStatement",
                "expression": {
                  "type": "AssignmentExpression",
                  "operator": "=",
                  "left": {
                    "type": "Identifier",
                    "name": "d3_geo_pathBoundsY1"
                  },
                  "right": {
                    "type": "Identifier",
                    "name": "y"
                  }
                }
              },
              "alternate": null
            }
          ]
        },
        "rest": null,
        "generator": false,
        "expression": false
      }
    ]
  },
  "src": ";\n;\n;\n;\nvar d3_geo_pathBounds = {\n        point: d3_geo_pathBoundsPoint,\n        lineStart: d3_noop,\n        lineEnd: d3_noop,\n        polygonStart: d3_noop,\n        polygonEnd: d3_noop\n    };\nfunction d3_geo_pathBoundsPoint(x, y) {\n    if (x < d3_geo_pathBoundsX0)\n        d3_geo_pathBoundsX0 = x;\n    if (x > d3_geo_pathBoundsX1)\n        d3_geo_pathBoundsX1 = x;\n    if (y < d3_geo_pathBoundsY0)\n        d3_geo_pathBoundsY0 = y;\n    if (y > d3_geo_pathBoundsY1)\n        d3_geo_pathBoundsY1 = y;\n}"
}