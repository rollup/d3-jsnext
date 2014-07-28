{
  "filepath": "/transition/ease.js",
  "shared": [],
  "dependencies": [
    "d3_transitionPrototype",
    "d3.ease.apply",
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
              "name": "ease"
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
                        "name": "ease"
                      }
                    }
                  },
                  "alternate": null
                },
                {
                  "type": "IfStatement",
                  "test": {
                    "type": "BinaryExpression",
                    "operator": "!==",
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
                    "type": "ExpressionStatement",
                    "expression": {
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
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "name": "d3"
                            },
                            "property": {
                              "type": "Identifier",
                              "name": "ease"
                            }
                          },
                          "property": {
                            "type": "Identifier",
                            "name": "apply"
                          }
                        },
                        "arguments": [
                          {
                            "type": "Identifier",
                            "name": "d3"
                          },
                          {
                            "type": "Identifier",
                            "name": "arguments"
                          }
                        ]
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
                                    "name": "ease"
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
            },
            "rest": null,
            "generator": false,
            "expression": false
          }
        }
      }
    ]
  },
  "src": "d3_transitionPrototype.ease = function (value) {\n    var id = this.id;\n    if (arguments.length < 1)\n        return this.node().__transition__[id].ease;\n    if (typeof value !== 'function')\n        value = d3.ease.apply(d3, arguments);\n    return d3_selection_each(this, function (node) {\n        node.__transition__[id].ease = value;\n    });\n};"
}