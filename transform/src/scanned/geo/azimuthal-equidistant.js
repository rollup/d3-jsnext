{
  "filepath": "/geo/azimuthal-equidistant.js",
  "shared": [],
  "dependencies": [
    "d3_geo_azimuthal",
    "d3_identity",
    "d3_geo_projection"
  ],
  "helpers": [
    "d3_geo_azimuthalEquidistant"
  ],
  "exports": [
    "d3.geo.azimuthalEquidistant"
  ],
  "ast": {
    "type": "Program",
    "body": [
      {
        "type": "VariableDeclaration",
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "name": "d3_geo_azimuthalEquidistant"
            },
            "init": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "name": "d3_geo_azimuthal"
              },
              "arguments": [
                {
                  "type": "FunctionExpression",
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "name": "cosλcosφ"
                    }
                  ],
                  "defaults": [],
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "VariableDeclaration",
                        "declarations": [
                          {
                            "type": "VariableDeclarator",
                            "id": {
                              "type": "Identifier",
                              "name": "c"
                            },
                            "init": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "MemberExpression",
                                "computed": false,
                                "object": {
                                  "type": "Identifier",
                                  "name": "Math"
                                },
                                "property": {
                                  "type": "Identifier",
                                  "name": "acos"
                                }
                              },
                              "arguments": [
                                {
                                  "type": "Identifier",
                                  "name": "cosλcosφ"
                                }
                              ]
                            }
                          }
                        ],
                        "kind": "var"
                      },
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "LogicalExpression",
                          "operator": "&&",
                          "left": {
                            "type": "Identifier",
                            "name": "c"
                          },
                          "right": {
                            "type": "BinaryExpression",
                            "operator": "/",
                            "left": {
                              "type": "Identifier",
                              "name": "c"
                            },
                            "right": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "MemberExpression",
                                "computed": false,
                                "object": {
                                  "type": "Identifier",
                                  "name": "Math"
                                },
                                "property": {
                                  "type": "Identifier",
                                  "name": "sin"
                                }
                              },
                              "arguments": [
                                {
                                  "type": "Identifier",
                                  "name": "c"
                                }
                              ]
                            }
                          }
                        }
                      }
                    ]
                  },
                  "rest": null,
                  "generator": false,
                  "expression": false
                },
                {
                  "type": "Identifier",
                  "name": "d3_identity"
                }
              ]
            }
          }
        ]
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
                  "name": "azimuthalEquidistant"
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
                            "name": "d3_geo_azimuthalEquidistant"
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
            "type": "Identifier",
            "name": "d3_geo_azimuthalEquidistant"
          }
        }
      }
    ]
  },
  "src": "var d3_geo_azimuthalEquidistant = d3_geo_azimuthal(function (cosλcosφ) {\n        var c = Math.acos(cosλcosφ);\n        return c && c / Math.sin(c);\n    }, d3_identity);\n(d3.geo.azimuthalEquidistant = function () {\n    return d3_geo_projection(d3_geo_azimuthalEquidistant);\n}).raw = d3_geo_azimuthalEquidistant;"
}