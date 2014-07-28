{
  "filepath": "/arrays/quantile.js",
  "shared": [],
  "dependencies": [],
  "helpers": [],
  "exports": [
    "d3.quantile"
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
              "type": "Identifier",
              "name": "d3"
            },
            "property": {
              "type": "Identifier",
              "name": "quantile"
            }
          },
          "right": {
            "type": "FunctionExpression",
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "name": "values"
              },
              {
                "type": "Identifier",
                "name": "p"
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
                        "name": "H"
                      },
                      "init": {
                        "type": "BinaryExpression",
                        "operator": "+",
                        "left": {
                          "type": "BinaryExpression",
                          "operator": "*",
                          "left": {
                            "type": "BinaryExpression",
                            "operator": "-",
                            "left": {
                              "type": "MemberExpression",
                              "computed": false,
                              "object": {
                                "type": "Identifier",
                                "name": "values"
                              },
                              "property": {
                                "type": "Identifier",
                                "name": "length"
                              }
                            },
                            "right": {
                              "type": "Literal",
                              "value": 1,
                              "raw": "1"
                            }
                          },
                          "right": {
                            "type": "Identifier",
                            "name": "p"
                          }
                        },
                        "right": {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1"
                        }
                      }
                    },
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "name": "h"
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
                            "name": "floor"
                          }
                        },
                        "arguments": [
                          {
                            "type": "Identifier",
                            "name": "H"
                          }
                        ]
                      }
                    },
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "name": "v"
                      },
                      "init": {
                        "type": "UnaryExpression",
                        "operator": "+",
                        "argument": {
                          "type": "MemberExpression",
                          "computed": true,
                          "object": {
                            "type": "Identifier",
                            "name": "values"
                          },
                          "property": {
                            "type": "BinaryExpression",
                            "operator": "-",
                            "left": {
                              "type": "Identifier",
                              "name": "h"
                            },
                            "right": {
                              "type": "Literal",
                              "value": 1,
                              "raw": "1"
                            }
                          }
                        },
                        "prefix": true
                      }
                    },
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "name": "e"
                      },
                      "init": {
                        "type": "BinaryExpression",
                        "operator": "-",
                        "left": {
                          "type": "Identifier",
                          "name": "H"
                        },
                        "right": {
                          "type": "Identifier",
                          "name": "h"
                        }
                      }
                    }
                  ],
                  "kind": "var"
                },
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "ConditionalExpression",
                    "test": {
                      "type": "Identifier",
                      "name": "e"
                    },
                    "consequent": {
                      "type": "BinaryExpression",
                      "operator": "+",
                      "left": {
                        "type": "Identifier",
                        "name": "v"
                      },
                      "right": {
                        "type": "BinaryExpression",
                        "operator": "*",
                        "left": {
                          "type": "Identifier",
                          "name": "e"
                        },
                        "right": {
                          "type": "BinaryExpression",
                          "operator": "-",
                          "left": {
                            "type": "MemberExpression",
                            "computed": true,
                            "object": {
                              "type": "Identifier",
                              "name": "values"
                            },
                            "property": {
                              "type": "Identifier",
                              "name": "h"
                            }
                          },
                          "right": {
                            "type": "Identifier",
                            "name": "v"
                          }
                        }
                      }
                    },
                    "alternate": {
                      "type": "Identifier",
                      "name": "v"
                    }
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
  "src": "d3.quantile = function (values, p) {\n    var H = (values.length - 1) * p + 1, h = Math.floor(H), v = +values[h - 1], e = H - h;\n    return e ? v + e * (values[h] - v) : v;\n};"
}