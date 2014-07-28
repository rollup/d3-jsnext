{
  "filepath": "/transition/duration.js",
  "shared": [],
  "dependencies": [
    "d3_transitionPrototype",
    "d3_selection_each"
  ],
  "helpers": [],
  "exports": [],
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
              "name": "d3_transitionPrototype"
            },
            "property": {
              "type": "Identifier",
              "name": "duration"
            }
          },
          "right": {
            "type": "FunctionExpression",
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "name": "value"
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
                        "name": "id"
                      },
                      "init": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "ThisExpression"
                        },
                        "property": {
                          "type": "Identifier",
                          "name": "id"
                        }
                      }
                    }
                  ],
                  "kind": "var"
                },
                {
                  "type": "IfStatement",
                  "test": {
                    "type": "BinaryExpression",
                    "operator": "<",
                    "left": {
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
                    "right": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1"
                    }
                  },
                  "consequent": {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "MemberExpression",
                        "computed": true,
                        "object": {
                          "type": "MemberExpression",
                          "computed": false,
                          "object": {
                            "type": "CallExpression",
                            "callee": {
                              "type": "MemberExpression",
                              "computed": false,
                              "object": {
                                "type": "ThisExpression"
                              },
                              "property": {
                                "type": "Identifier",
                                "name": "node"
                              }
                            },
                            "arguments": []
                          },
                          "property": {
                            "type": "Identifier",
                            "name": "__transition__"
                          }
                        },
                        "property": {
                          "type": "Identifier",
                          "name": "id"
                        }
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "duration"
                      }
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
                      "name": "d3_selection_each"
                    },
                    "arguments": [
                      {
                        "type": "ThisExpression"
                      },
                      {
                        "type": "ConditionalExpression",
                        "test": {
                          "type": "BinaryExpression",
                          "operator": "===",
                          "left": {
                            "type": "UnaryExpression",
                            "operator": "typeof",
                            "argument": {
                              "type": "Identifier",
                              "name": "value"
                            },
                            "prefix": true
                          },
                          "right": {
                            "type": "Literal",
                            "value": "function",
                            "raw": "\"function\""
                          }
                        },
                        "consequent": {
                          "type": "FunctionExpression",
                          "id": null,
                          "params": [
                            {
                              "type": "Identifier",
                              "name": "node"
                            },
                            {
                              "type": "Identifier",
                              "name": "i"
                            },
                            {
                              "type": "Identifier",
                              "name": "j"
                            }
                          ],
                          "defaults": [],
                          "body": {
                            "type": "BlockStatement",
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
                                      "computed": true,
                                      "object": {
                                        "type": "MemberExpression",
                                        "computed": false,
                                        "object": {
                                          "type": "Identifier",
                                          "name": "node"
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "name": "__transition__"
                                        }
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "name": "id"
                                      }
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "name": "duration"
                                    }
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
                                        "name": "max"
                                      }
                                    },
                                    "arguments": [
                                      {
                                        "type": "Literal",
                                        "value": 1,
                                        "raw": "1"
                                      },
                                      {
                                        "type": "CallExpression",
                                        "callee": {
                                          "type": "MemberExpression",
                                          "computed": false,
                                          "object": {
                                            "type": "Identifier",
                                            "name": "value"
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "name": "call"
                                          }
                                        },
                                        "arguments": [
                                          {
                                            "type": "Identifier",
                                            "name": "node"
                                          },
                                          {
                                            "type": "MemberExpression",
                                            "computed": false,
                                            "object": {
                                              "type": "Identifier",
                                              "name": "node"
                                            },
                                            "property": {
                                              "type": "Identifier",
                                              "name": "__data__"
                                            }
                                          },
                                          {
                                            "type": "Identifier",
                                            "name": "i"
                                          },
                                          {
                                            "type": "Identifier",
                                            "name": "j"
                                          }
                                        ]
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
                        },
                        "alternate": {
                          "type": "SequenceExpression",
                          "expressions": [
                            {
                              "type": "AssignmentExpression",
                              "operator": "=",
                              "left": {
                                "type": "Identifier",
                                "name": "value"
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
                                    "name": "max"
                                  }
                                },
                                "arguments": [
                                  {
                                    "type": "Literal",
                                    "value": 1,
                                    "raw": "1"
                                  },
                                  {
                                    "type": "Identifier",
                                    "name": "value"
                                  }
                                ]
                              }
                            },
                            {
                              "type": "FunctionExpression",
                              "id": null,
                              "params": [
                                {
                                  "type": "Identifier",
                                  "name": "node"
                                }
                              ],
                              "defaults": [],
                              "body": {
                                "type": "BlockStatement",
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
                                          "computed": true,
                                          "object": {
                                            "type": "MemberExpression",
                                            "computed": false,
                                            "object": {
                                              "type": "Identifier",
                                              "name": "node"
                                            },
                                            "property": {
                                              "type": "Identifier",
                                              "name": "__transition__"
                                            }
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "name": "id"
                                          }
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "name": "duration"
                                        }
                                      },
                                      "right": {
                                        "type": "Identifier",
                                        "name": "value"
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
  "src": "d3_transitionPrototype.duration = function (value) {\n    var id = this.id;\n    if (arguments.length < 1)\n        return this.node().__transition__[id].duration;\n    return d3_selection_each(this, typeof value === 'function' ? function (node, i, j) {\n        node.__transition__[id].duration = Math.max(1, value.call(node, node.__data__, i, j));\n    } : (value = Math.max(1, value), function (node) {\n        node.__transition__[id].duration = value;\n    }));\n};"
}