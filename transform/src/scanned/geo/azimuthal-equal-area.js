{
  "filepath": "/geo/azimuthal-equal-area.js",
  "shared": [],
  "dependencies": [
    "d3_geo_azimuthal",
    "d3_geo_projection"
  ],
  "helpers": [
    "d3_geo_azimuthalEqualArea"
  ],
  "exports": [
    "d3.geo.azimuthalEqualArea"
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
              "name": "d3_geo_azimuthalEqualArea"
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
                        "type": "ReturnStatement",
                        "argument": {
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
                              "name": "sqrt"
                            }
                          },
                          "arguments": [
                            {
                              "type": "BinaryExpression",
                              "operator": "/",
                              "left": {
                                "type": "Literal",
                                "value": 2,
                                "raw": "2"
                              },
                              "right": {
                                "type": "BinaryExpression",
                                "operator": "+",
                                "left": {
                                  "type": "Literal",
                                  "value": 1,
                                  "raw": "1"
                                },
                                "right": {
                                  "type": "Identifier",
                                  "name": "cosλcosφ"
                                }
                              }
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
                  "type": "FunctionExpression",
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "name": "ρ"
                    }
                  ],
                  "defaults": [],
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "BinaryExpression",
                          "operator": "*",
                          "left": {
                            "type": "Literal",
                            "value": 2,
                            "raw": "2"
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
                                "name": "asin"
                              }
                            },
                            "arguments": [
                              {
                                "type": "BinaryExpression",
                                "operator": "/",
                                "left": {
                                  "type": "Identifier",
                                  "name": "ρ"
                                },
                                "right": {
                                  "type": "Literal",
                                  "value": 2,
                                  "raw": "2"
                                }
                              }
                            ]
                          }
                        }
                      }
                    ]
                  },
                  "rest": null,
                  "generator": false,
                  "expression": false
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
                  "name": "azimuthalEqualArea"
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
                            "name": "d3_geo_azimuthalEqualArea"
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
            "name": "d3_geo_azimuthalEqualArea"
          }
        }
      }
    ]
  },
  "src": "var d3_geo_azimuthalEqualArea = d3_geo_azimuthal(function (cosλcosφ) {\n        return Math.sqrt(2 / (1 + cosλcosφ));\n    }, function (ρ) {\n        return 2 * Math.asin(ρ / 2);\n    });\n(d3.geo.azimuthalEqualArea = function () {\n    return d3_geo_projection(d3_geo_azimuthalEqualArea);\n}).raw = d3_geo_azimuthalEqualArea;"
}