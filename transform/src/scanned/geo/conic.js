{
  "filepath": "/geo/conic.js",
  "shared": [],
  "dependencies": [
    "d3_geo_projectionMutator"
  ],
  "helpers": [
    "d3_geo_conic"
  ],
  "exports": [],
  "ast": {
    "type": "Program",
    "body": [
      {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "name": "d3_geo_conic"
        },
        "params": [
          {
            "type": "Identifier",
            "name": "projectAt"
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
                    "name": "φ0"
                  },
                  "init": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0"
                  }
                },
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "name": "φ1"
                  },
                  "init": {
                    "type": "BinaryExpression",
                    "operator": "/",
                    "left": {
                      "type": "Identifier",
                      "name": "π"
                    },
                    "right": {
                      "type": "Literal",
                      "value": 3,
                      "raw": "3"
                    }
                  }
                },
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "name": "m"
                  },
                  "init": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "name": "d3_geo_projectionMutator"
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "name": "projectAt"
                      }
                    ]
                  }
                },
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "name": "p"
                  },
                  "init": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "name": "m"
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "name": "φ0"
                      },
                      {
                        "type": "Identifier",
                        "name": "φ1"
                      }
                    ]
                  }
                }
              ],
              "kind": "var"
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
                    "type": "Identifier",
                    "name": "p"
                  },
                  "property": {
                    "type": "Identifier",
                    "name": "parallels"
                  }
                },
                "right": {
                  "type": "FunctionExpression",
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "name": "_"
                    }
                  ],
                  "defaults": [],
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "IfStatement",
                        "test": {
                          "type": "UnaryExpression",
                          "operator": "!",
                          "argument": {
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "name": "arguments"
                            },
                            "property": {
                              "type": "Identifier",
                              "name": "length"
                            }
                          },
                          "prefix": true
                        },
                        "consequent": {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "ArrayExpression",
                            "elements": [
                              {
                                "type": "BinaryExpression",
                                "operator": "*",
                                "left": {
                                  "type": "BinaryExpression",
                                  "operator": "/",
                                  "left": {
                                    "type": "Identifier",
                                    "name": "φ0"
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "name": "π"
                                  }
                                },
                                "right": {
                                  "type": "Literal",
                                  "value": 180,
                                  "raw": "180"
                                }
                              },
                              {
                                "type": "BinaryExpression",
                                "operator": "*",
                                "left": {
                                  "type": "BinaryExpression",
                                  "operator": "/",
                                  "left": {
                                    "type": "Identifier",
                                    "name": "φ1"
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "name": "π"
                                  }
                                },
                                "right": {
                                  "type": "Literal",
                                  "value": 180,
                                  "raw": "180"
                                }
                              }
                            ]
                          }
                        },
                        "alternate": null
                      },
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "Identifier",
                            "name": "m"
                          },
                          "arguments": [
                            {
                              "type": "AssignmentExpression",
                              "operator": "=",
                              "left": {
                                "type": "Identifier",
                                "name": "φ0"
                              },
                              "right": {
                                "type": "BinaryExpression",
                                "operator": "/",
                                "left": {
                                  "type": "BinaryExpression",
                                  "operator": "*",
                                  "left": {
                                    "type": "MemberExpression",
                                    "computed": true,
                                    "object": {
                                      "type": "Identifier",
                                      "name": "_"
                                    },
                                    "property": {
                                      "type": "Literal",
                                      "value": 0,
                                      "raw": "0"
                                    }
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "name": "π"
                                  }
                                },
                                "right": {
                                  "type": "Literal",
                                  "value": 180,
                                  "raw": "180"
                                }
                              }
                            },
                            {
                              "type": "AssignmentExpression",
                              "operator": "=",
                              "left": {
                                "type": "Identifier",
                                "name": "φ1"
                              },
                              "right": {
                                "type": "BinaryExpression",
                                "operator": "/",
                                "left": {
                                  "type": "BinaryExpression",
                                  "operator": "*",
                                  "left": {
                                    "type": "MemberExpression",
                                    "computed": true,
                                    "object": {
                                      "type": "Identifier",
                                      "name": "_"
                                    },
                                    "property": {
                                      "type": "Literal",
                                      "value": 1,
                                      "raw": "1"
                                    }
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "name": "π"
                                  }
                                },
                                "right": {
                                  "type": "Literal",
                                  "value": 180,
                                  "raw": "180"
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
                }
              }
            },
            {
              "type": "ReturnStatement",
              "argument": {
                "type": "Identifier",
                "name": "p"
              }
            }
          ]
        },
        "rest": null,
        "generator": false,
        "expression": false
      }
    ]
  },
  "src": "function d3_geo_conic(projectAt) {\n    var φ0 = 0, φ1 = π / 3, m = d3_geo_projectionMutator(projectAt), p = m(φ0, φ1);\n    p.parallels = function (_) {\n        if (!arguments.length)\n            return [\n                φ0 / π * 180,\n                φ1 / π * 180\n            ];\n        return m(φ0 = _[0] * π / 180, φ1 = _[1] * π / 180);\n    };\n    return p;\n}"
}