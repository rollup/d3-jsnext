{
  "filepath": "/transition/selectAll.js",
  "shared": [],
  "dependencies": [
    "d3_transitionPrototype",
    "d3_selection_selectorAll",
    "d3_transitionNode",
    "d3_transition"
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
              "name": "selectAll"
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
                    },
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
                        "name": "subnodes"
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
                        "name": "transition"
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
                        "name": "d3_selection_selectorAll"
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
                        "type": "ForStatement",
                        "init": {
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
                                      "type": "AssignmentExpression",
                                      "operator": "=",
                                      "left": {
                                        "type": "Identifier",
                                        "name": "transition"
                                      },
                                      "right": {
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
                                      }
                                    }
                                  },
                                  {
                                    "type": "ExpressionStatement",
                                    "expression": {
                                      "type": "AssignmentExpression",
                                      "operator": "=",
                                      "left": {
                                        "type": "Identifier",
                                        "name": "subnodes"
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
                                  },
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
                                    "type": "ForStatement",
                                    "init": {
                                      "type": "VariableDeclaration",
                                      "declarations": [
                                        {
                                          "type": "VariableDeclarator",
                                          "id": {
                                            "type": "Identifier",
                                            "name": "k"
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
                                            "name": "o"
                                          },
                                          "init": {
                                            "type": "MemberExpression",
                                            "computed": false,
                                            "object": {
                                              "type": "Identifier",
                                              "name": "subnodes"
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
                                          "name": "k"
                                        },
                                        "prefix": true
                                      },
                                      "right": {
                                        "type": "Identifier",
                                        "name": "o"
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
                                              "name": "subnode"
                                            },
                                            "right": {
                                              "type": "MemberExpression",
                                              "computed": true,
                                              "object": {
                                                "type": "Identifier",
                                                "name": "subnodes"
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "name": "k"
                                              }
                                            }
                                          },
                                          "consequent": {
                                            "type": "ExpressionStatement",
                                            "expression": {
                                              "type": "CallExpression",
                                              "callee": {
                                                "type": "Identifier",
                                                "name": "d3_transitionNode"
                                              },
                                              "arguments": [
                                                {
                                                  "type": "Identifier",
                                                  "name": "subnode"
                                                },
                                                {
                                                  "type": "Identifier",
                                                  "name": "k"
                                                },
                                                {
                                                  "type": "Identifier",
                                                  "name": "id"
                                                },
                                                {
                                                  "type": "Identifier",
                                                  "name": "transition"
                                                }
                                              ]
                                            }
                                          },
                                          "alternate": null
                                        },
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
                                                "type": "Identifier",
                                                "name": "subnode"
                                              }
                                            ]
                                          }
                                        }
                                      ]
                                    }
                                  }
                                ]
                              },
                              "alternate": null
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
                      "name": "d3_transition"
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "name": "subgroups"
                      },
                      {
                        "type": "Identifier",
                        "name": "id"
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
  "src": "d3_transitionPrototype.selectAll = function (selector) {\n    var id = this.id, subgroups = [], subgroup, subnodes, node, subnode, transition;\n    selector = d3_selection_selectorAll(selector);\n    for (var j = -1, m = this.length; ++j < m;) {\n        for (var group = this[j], i = -1, n = group.length; ++i < n;) {\n            if (node = group[i]) {\n                transition = node.__transition__[id];\n                subnodes = selector.call(node, node.__data__, i, j);\n                subgroups.push(subgroup = []);\n                for (var k = -1, o = subnodes.length; ++k < o;) {\n                    if (subnode = subnodes[k])\n                        d3_transitionNode(subnode, k, id, transition);\n                    subgroup.push(subnode);\n                }\n            }\n        }\n    }\n    return d3_transition(subgroups, id);\n};"
}