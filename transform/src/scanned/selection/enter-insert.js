{
  "filepath": "/selection/enter-insert.js",
  "shared": [],
  "dependencies": [
    "d3_selection_enterPrototype",
    "d3_selectionPrototype"
  ],
  "helpers": [
    "d3_selection_enterInsertBefore"
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
              "name": "d3_selection_enterPrototype"
            },
            "property": {
              "type": "Identifier",
              "name": "insert"
            }
          },
          "right": {
            "type": "FunctionExpression",
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "name": "name"
              },
              {
                "type": "Identifier",
                "name": "before"
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
                      "value": 2,
                      "raw": "2"
                    }
                  },
                  "consequent": {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "name": "before"
                      },
                      "right": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "Identifier",
                          "name": "d3_selection_enterInsertBefore"
                        },
                        "arguments": [
                          {
                            "type": "ThisExpression"
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
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "name": "d3_selectionPrototype"
                        },
                        "property": {
                          "type": "Identifier",
                          "name": "insert"
                        }
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "call"
                      }
                    },
                    "arguments": [
                      {
                        "type": "ThisExpression"
                      },
                      {
                        "type": "Identifier",
                        "name": "name"
                      },
                      {
                        "type": "Identifier",
                        "name": "before"
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
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "name": "d3_selection_enterInsertBefore"
        },
        "params": [
          {
            "type": "Identifier",
            "name": "enter"
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
                    "name": "i0"
                  },
                  "init": null
                },
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "name": "j0"
                  },
                  "init": null
                }
              ],
              "kind": "var"
            },
            {
              "type": "ReturnStatement",
              "argument": {
                "type": "FunctionExpression",
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "name": "d"
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
                      "type": "VariableDeclaration",
                      "declarations": [
                        {
                          "type": "VariableDeclarator",
                          "id": {
                            "type": "Identifier",
                            "name": "group"
                          },
                          "init": {
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                              "type": "MemberExpression",
                              "computed": true,
                              "object": {
                                "type": "Identifier",
                                "name": "enter"
                              },
                              "property": {
                                "type": "Identifier",
                                "name": "j"
                              }
                            },
                            "property": {
                              "type": "Identifier",
                              "name": "update"
                            }
                          }
                        },
                        {
                          "type": "VariableDeclarator",
                          "id": {
                            "type": "Identifier",
                            "name": "n"
                          },
                          "init": {
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "name": "group"
                            },
                            "property": {
                              "type": "Identifier",
                              "name": "length"
                            }
                          }
                        },
                        {
                          "type": "VariableDeclarator",
                          "id": {
                            "type": "Identifier",
                            "name": "node"
                          },
                          "init": null
                        }
                      ],
                      "kind": "var"
                    },
                    {
                      "type": "IfStatement",
                      "test": {
                        "type": "BinaryExpression",
                        "operator": "!=",
                        "left": {
                          "type": "Identifier",
                          "name": "j"
                        },
                        "right": {
                          "type": "Identifier",
                          "name": "j0"
                        }
                      },
                      "consequent": {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "SequenceExpression",
                          "expressions": [
                            {
                              "type": "AssignmentExpression",
                              "operator": "=",
                              "left": {
                                "type": "Identifier",
                                "name": "j0"
                              },
                              "right": {
                                "type": "Identifier",
                                "name": "j"
                              }
                            },
                            {
                              "type": "AssignmentExpression",
                              "operator": "=",
                              "left": {
                                "type": "Identifier",
                                "name": "i0"
                              },
                              "right": {
                                "type": "Literal",
                                "value": 0,
                                "raw": "0"
                              }
                            }
                          ]
                        }
                      },
                      "alternate": null
                    },
                    {
                      "type": "IfStatement",
                      "test": {
                        "type": "BinaryExpression",
                        "operator": ">=",
                        "left": {
                          "type": "Identifier",
                          "name": "i"
                        },
                        "right": {
                          "type": "Identifier",
                          "name": "i0"
                        }
                      },
                      "consequent": {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "AssignmentExpression",
                          "operator": "=",
                          "left": {
                            "type": "Identifier",
                            "name": "i0"
                          },
                          "right": {
                            "type": "BinaryExpression",
                            "operator": "+",
                            "left": {
                              "type": "Identifier",
                              "name": "i"
                            },
                            "right": {
                              "type": "Literal",
                              "value": 1,
                              "raw": "1"
                            }
                          }
                        }
                      },
                      "alternate": null
                    },
                    {
                      "type": "WhileStatement",
                      "test": {
                        "type": "LogicalExpression",
                        "operator": "&&",
                        "left": {
                          "type": "UnaryExpression",
                          "operator": "!",
                          "argument": {
                            "type": "AssignmentExpression",
                            "operator": "=",
                            "left": {
                              "type": "Identifier",
                              "name": "node"
                            },
                            "right": {
                              "type": "MemberExpression",
                              "computed": true,
                              "object": {
                                "type": "Identifier",
                                "name": "group"
                              },
                              "property": {
                                "type": "Identifier",
                                "name": "i0"
                              }
                            }
                          },
                          "prefix": true
                        },
                        "right": {
                          "type": "BinaryExpression",
                          "operator": "<",
                          "left": {
                            "type": "UpdateExpression",
                            "operator": "++",
                            "argument": {
                              "type": "Identifier",
                              "name": "i0"
                            },
                            "prefix": true
                          },
                          "right": {
                            "type": "Identifier",
                            "name": "n"
                          }
                        }
                      },
                      "body": {
                        "type": "EmptyStatement"
                      }
                    },
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "Identifier",
                        "name": "node"
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
  "src": "d3_selection_enterPrototype.insert = function (name, before) {\n    if (arguments.length < 2)\n        before = d3_selection_enterInsertBefore(this);\n    return d3_selectionPrototype.insert.call(this, name, before);\n};\nfunction d3_selection_enterInsertBefore(enter) {\n    var i0, j0;\n    return function (d, i, j) {\n        var group = enter[j].update, n = group.length, node;\n        if (j != j0)\n            j0 = j, i0 = 0;\n        if (i >= i0)\n            i0 = i + 1;\n        while (!(node = group[i0]) && ++i0 < n);\n        return node;\n    };\n}"
}