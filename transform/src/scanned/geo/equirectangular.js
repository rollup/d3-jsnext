{
  "filepath": "/geo/equirectangular.js",
  "shared": [],
  "dependencies": [
    "d3_geo_projection"
  ],
  "helpers": [
    "d3_geo_equirectangular"
  ],
  "exports": [
    "d3.geo.equirectangular"
  ],
  "ast": {
    "type": "Program",
    "body": [
      {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "name": "d3_geo_equirectangular"
        },
        "params": [
          {
            "type": "Identifier",
            "name": "λ"
          },
          {
            "type": "Identifier",
            "name": "φ"
          }
        ],
        "defaults": [],
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "ReturnStatement",
              "argument": {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Identifier",
                    "name": "λ"
                  },
                  {
                    "type": "Identifier",
                    "name": "φ"
                  }
                ]
              }
            }
          ]
        },
        "rest": null,
        "generator": false,
        "expression": false
      },
      {
        "type": "ExpressionStatement",
        "expression": {
          "type": "AssignmentExpression",
          "operator": "=",
          "left": {
            "type": "MemberExpression",
            "computed": false,
            "object": {
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
                    "name": "geo"
                  }
                },
                "property": {
                  "type": "Identifier",
                  "name": "equirectangular"
                }
              },
              "right": {
                "type": "FunctionExpression",
                "id": null,
                "params": [],
                "defaults": [],
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "Identifier",
                          "name": "d3_geo_projection"
                        },
                        "arguments": [
                          {
                            "type": "Identifier",
                            "name": "d3_geo_equirectangular"
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
            },
            "property": {
              "type": "Identifier",
              "name": "raw"
            }
          },
          "right": {
            "type": "AssignmentExpression",
            "operator": "=",
            "left": {
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "Identifier",
                "name": "d3_geo_equirectangular"
              },
              "property": {
                "type": "Identifier",
                "name": "invert"
              }
            },
            "right": {
              "type": "Identifier",
              "name": "d3_geo_equirectangular"
            }
          }
        }
      }
    ]
  },
  "src": "function d3_geo_equirectangular(λ, φ) {\n    return [\n        λ,\n        φ\n    ];\n}\n(d3.geo.equirectangular = function () {\n    return d3_geo_projection(d3_geo_equirectangular);\n}).raw = d3_geo_equirectangular.invert = d3_geo_equirectangular;"
}