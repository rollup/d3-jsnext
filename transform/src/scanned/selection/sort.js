{
  "filepath": "/selection/sort.js",
  "shared": [],
  "dependencies": [
    "d3_selectionPrototype",
    "d3_ascending"
  ],
  "helpers": [
    "d3_selection_sortComparator"
  ],
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
              "name": "d3_selectionPrototype"
            },
            "property": {
              "type": "Identifier",
              "name": "sort"
            }
          },
          "right": {
            "type": "FunctionExpression",
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "name": "comparator"
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
                      "type": "Identifier",
                      "name": "comparator"
                    },
                    "right": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "name": "d3_selection_sortComparator"
                        },
                        "property": {
                          "type": "Identifier",
                          "name": "apply"
                        }
                      },
                      "arguments": [
                        {
                          "type": "ThisExpression"
                        },
                        {
                          "type": "Identifier",
                          "name": "arguments"
                        }
                      ]
                    }
                  }
                },
                {
                  "type": "ForStatement",
                  "init": {
                    "type": "VariableDeclaration",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "name": "j"
                        },
                        "init": {
                          "type": "UnaryExpression",
                          "operator": "-",
                          "argument": {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1"
                          },
                          "prefix": true
                        }
                      },
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "name": "m"
                        },
                        "init": {
                          "type": "MemberExpression",
                          "computed": false,
                          "object": {
                            "type": "ThisExpression"
                          },
                          "property": {
                            "type": "Identifier",
                            "name": "length"
                          }
                        }
                      }
                    ],
                    "kind": "var"
                  },
                  "test": {
                    "type": "BinaryExpression",
                    "operator": "<",
                    "left": {
                      "type": "UpdateExpression",
                      "operator": "++",
                      "argument": {
                        "type": "Identifier",
                        "name": "j"
                      },
                      "prefix": true
                    },
                    "right": {
                      "type": "Identifier",
                      "name": "m"
                    }
                  },
                  "update": null,
                  "body": {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "MemberExpression",
                          "computed": true,
                          "object": {
                            "type": "ThisExpression"
                          },
                          "property": {
                            "type": "Identifier",
                            "name": "j"
                          }
                        },
                        "property": {
                          "type": "Identifier",
                          "name": "sort"
                        }
                      },
                      "arguments": [
                        {
                          "type": "Identifier",
                          "name": "comparator"
                        }
                      ]
                    }
                  }
                },
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "ThisExpression"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "order"
                      }
                    },
                    "arguments": []
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
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "name": "d3_selection_sortComparator"
        },
        "params": [
          {
            "type": "Identifier",
            "name": "comparator"
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
                "type": "ExpressionStatement",
                "expression": {
                  "type": "AssignmentExpression",
                  "operator": "=",
                  "left": {
                    "type": "Identifier",
                    "name": "comparator"
                  },
                  "right": {
                    "type": "Identifier",
                    "name": "d3_ascending"
                  }
                }
              },
              "alternate": null
            },
            {
              "type": "ReturnStatement",
              "argument": {
                "type": "FunctionExpression",
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "name": "a"
                  },
                  {
                    "type": "Identifier",
                    "name": "b"
                  }
                ],
                "defaults": [],
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "ConditionalExpression",
                        "test": {
                          "type": "LogicalExpression",
                          "operator": "&&",
                          "left": {
                            "type": "Identifier",
                            "name": "a"
                          },
                          "right": {
                            "type": "Identifier",
                            "name": "b"
                          }
                        },
                        "consequent": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "Identifier",
                            "name": "comparator"
                          },
                          "arguments": [
                            {
                              "type": "MemberExpression",
                              "computed": false,
                              "object": {
                                "type": "Identifier",
                                "name": "a"
                              },
                              "property": {
                                "type": "Identifier",
                                "name": "__data__"
                              }
                            },
                            {
                              "type": "MemberExpression",
                              "computed": false,
                              "object": {
                                "type": "Identifier",
                                "name": "b"
                              },
                              "property": {
                                "type": "Identifier",
                                "name": "__data__"
                              }
                            }
                          ]
                        },
                        "alternate": {
                          "type": "BinaryExpression",
                          "operator": "-",
                          "left": {
                            "type": "UnaryExpression",
                            "operator": "!",
                            "argument": {
                              "type": "Identifier",
                              "name": "a"
                            },
                            "prefix": true
                          },
                          "right": {
                            "type": "UnaryExpression",
                            "operator": "!",
                            "argument": {
                              "type": "Identifier",
                              "name": "b"
                            },
                            "prefix": true
                          }
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
          ]
        },
        "rest": null,
        "generator": false,
        "expression": false
      }
    ]
  },
  "src": "d3_selectionPrototype.sort = function (comparator) {\n    comparator = d3_selection_sortComparator.apply(this, arguments);\n    for (var j = -1, m = this.length; ++j < m;)\n        this[j].sort(comparator);\n    return this.order();\n};\nfunction d3_selection_sortComparator(comparator) {\n    if (!arguments.length)\n        comparator = d3_ascending;\n    return function (a, b) {\n        return a && b ? comparator(a.__data__, b.__data__) : !a - !b;\n    };\n}"
}