{
  "filepath": "/selection/select.js",
  "shared": [],
  "dependencies": [
    "d3_selectionPrototype",
    "d3_selection",
    "d3_select"
  ],
  "helpers": [
    "d3_selection_selector"
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
              "name": "select"
            }
          },
          "right": {
            "type": "FunctionExpression",
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "name": "selector"
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
                        "name": "subgroups"
                      },
                      "init": {
                        "type": "ArrayExpression",
                        "elements": []
                      }
                    },
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "name": "subgroup"
                      },
                      "init": null
                    },
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "name": "subnode"
                      },
                      "init": null
                    },
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "name": "group"
                      },
                      "init": null
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
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "name": "selector"
                    },
                    "right": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "name": "d3_selection_selector"
                      },
                      "arguments": [
                        {
                          "type": "Identifier",
                          "name": "selector"
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
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "name": "subgroups"
                            },
                            "property": {
                              "type": "Identifier",
                              "name": "push"
                            }
                          },
                          "arguments": [
                            {
                              "type": "AssignmentExpression",
                              "operator": "=",
                              "left": {
                                "type": "Identifier",
                                "name": "subgroup"
                              },
                              "right": {
                                "type": "ArrayExpression",
                                "elements": []
                              }
                            }
                          ]
                        }
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
                              "name": "subgroup"
                            },
                            "property": {
                              "type": "Identifier",
                              "name": "parentNode"
                            }
                          },
                          "right": {
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                              "type": "AssignmentExpression",
                              "operator": "=",
                              "left": {
                                "type": "Identifier",
                                "name": "group"
                              },
                              "right": {
                                "type": "MemberExpression",
                                "computed": true,
                                "object": {
                                  "type": "ThisExpression"
                                },
                                "property": {
                                  "type": "Identifier",
                                  "name": "j"
                                }
                              }
                            },
                            "property": {
                              "type": "Identifier",
                              "name": "parentNode"
                            }
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
                                "name": "i"
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
                              "name": "i"
                            },
                            "prefix": true
                          },
                          "right": {
                            "type": "Identifier",
                            "name": "n"
                          }
                        },
                        "update": null,
                        "body": {
                          "type": "BlockStatement",
                          "body": [
                            {
                              "type": "IfStatement",
                              "test": {
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
                                    "name": "i"
                                  }
                                }
                              },
                              "consequent": {
                                "type": "BlockStatement",
                                "body": [
                                  {
                                    "type": "ExpressionStatement",
                                    "expression": {
                                      "type": "CallExpression",
                                      "callee": {
                                        "type": "MemberExpression",
                                        "computed": false,
                                        "object": {
                                          "type": "Identifier",
                                          "name": "subgroup"
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "name": "push"
                                        }
                                      },
                                      "arguments": [
                                        {
                                          "type": "AssignmentExpression",
                                          "operator": "=",
                                          "left": {
                                            "type": "Identifier",
                                            "name": "subnode"
                                          },
                                          "right": {
                                            "type": "CallExpression",
                                            "callee": {
                                              "type": "MemberExpression",
                                              "computed": false,
                                              "object": {
                                                "type": "Identifier",
                                                "name": "selector"
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
                                        }
                                      ]
                                    }
                                  },
                                  {
                                    "type": "IfStatement",
                                    "test": {
                                      "type": "LogicalExpression",
                                      "operator": "&&",
                                      "left": {
                                        "type": "Identifier",
                                        "name": "subnode"
                                      },
                                      "right": {
                                        "type": "BinaryExpression",
                                        "operator": "in",
                                        "left": {
                                          "type": "Literal",
                                          "value": "__data__",
                                          "raw": "\"__data__\""
                                        },
                                        "right": {
                                          "type": "Identifier",
                                          "name": "node"
                                        }
                                      }
                                    },
                                    "consequent": {
                                      "type": "ExpressionStatement",
                                      "expression": {
                                        "type": "AssignmentExpression",
                                        "operator": "=",
                                        "left": {
                                          "type": "MemberExpression",
                                          "computed": false,
                                          "object": {
                                            "type": "Identifier",
                                            "name": "subnode"
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "name": "__data__"
                                          }
                                        },
                                        "right": {
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
                                        }
                                      }
                                    },
                                    "alternate": null
                                  }
                                ]
                              },
                              "alternate": {
                                "type": "BlockStatement",
                                "body": [
                                  {
                                    "type": "ExpressionStatement",
                                    "expression": {
                                      "type": "CallExpression",
                                      "callee": {
                                        "type": "MemberExpression",
                                        "computed": false,
                                        "object": {
                                          "type": "Identifier",
                                          "name": "subgroup"
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "name": "push"
                                        }
                                      },
                                      "arguments": [
                                        {
                                          "type": "Literal",
                                          "value": null,
                                          "raw": "null"
                                        }
                                      ]
                                    }
                                  }
                                ]
                              }
                            }
                          ]
                        }
                      }
                    ]
                  }
                },
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "name": "d3_selection"
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "name": "subgroups"
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
          "name": "d3_selection_selector"
        },
        "params": [
          {
            "type": "Identifier",
            "name": "selector"
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
                  "type": "BinaryExpression",
                  "operator": "===",
                  "left": {
                    "type": "UnaryExpression",
                    "operator": "typeof",
                    "argument": {
                      "type": "Identifier",
                      "name": "selector"
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
                  "type": "Identifier",
                  "name": "selector"
                },
                "alternate": {
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
                            "name": "d3_select"
                          },
                          "arguments": [
                            {
                              "type": "Identifier",
                              "name": "selector"
                            },
                            {
                              "type": "ThisExpression"
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
        "rest": null,
        "generator": false,
        "expression": false
      }
    ]
  },
  "src": "d3_selectionPrototype.select = function (selector) {\n    var subgroups = [], subgroup, subnode, group, node;\n    selector = d3_selection_selector(selector);\n    for (var j = -1, m = this.length; ++j < m;) {\n        subgroups.push(subgroup = []);\n        subgroup.parentNode = (group = this[j]).parentNode;\n        for (var i = -1, n = group.length; ++i < n;) {\n            if (node = group[i]) {\n                subgroup.push(subnode = selector.call(node, node.__data__, i, j));\n                if (subnode && '__data__' in node)\n                    subnode.__data__ = node.__data__;\n            } else {\n                subgroup.push(null);\n            }\n        }\n    }\n    return d3_selection(subgroups);\n};\nfunction d3_selection_selector(selector) {\n    return typeof selector === 'function' ? selector : function () {\n        return d3_select(selector, this);\n    };\n}"
}