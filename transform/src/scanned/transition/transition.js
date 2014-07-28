{
  "filepath": "/transition/transition.js",
  "shared": [],
  "dependencies": [
    "d3_subclass",
    "d3_selectionPrototype",
    "d3_selectionRoot",
    "d3_Map",
    "d3.timer",
    "d3_timer_active",
    "d3_true"
  ],
  "helpers": [
    "d3_transition",
    "d3_transitionPrototype",
    "d3_transitionId",
    "d3_transitionInheritId",
    "d3_transitionInherit",
    "d3_transitionNode"
  ],
  "exports": [
    "d3.transition",
    "d3.transition.prototype"
  ],
  "ast": {
    "type": "Program",
    "body": [
      {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "name": "d3_transition"
        },
        "params": [
          {
            "type": "Identifier",
            "name": "groups"
          },
          {
            "type": "Identifier",
            "name": "id"
          }
        ],
        "defaults": [],
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "ExpressionStatement",
              "expression": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "name": "d3_subclass"
                },
                "arguments": [
                  {
                    "type": "Identifier",
                    "name": "groups"
                  },
                  {
                    "type": "Identifier",
                    "name": "d3_transitionPrototype"
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
                    "name": "groups"
                  },
                  "property": {
                    "type": "Identifier",
                    "name": "id"
                  }
                },
                "right": {
                  "type": "Identifier",
                  "name": "id"
                }
              }
            },
            {
              "type": "ReturnStatement",
              "argument": {
                "type": "Identifier",
                "name": "groups"
              }
            }
          ]
        },
        "rest": null,
        "generator": false,
        "expression": false
      },
      {
        "type": "VariableDeclaration",
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "name": "d3_transitionPrototype"
            },
            "init": {
              "type": "ArrayExpression",
              "elements": []
            }
          }
        ]
      },
      {
        "type": "VariableDeclaration",
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "name": "d3_transitionId"
            },
            "init": {
              "type": "Literal",
              "value": 0,
              "raw": "0"
            }
          }
        ]
      },
      {
        "type": "VariableDeclaration",
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "name": "d3_transitionInheritId"
            },
            "init": null
          }
        ]
      },
      {
        "type": "VariableDeclaration",
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "name": "d3_transitionInherit"
            },
            "init": null
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
              "type": "Identifier",
              "name": "d3_transitionPrototype"
            },
            "property": {
              "type": "Identifier",
              "name": "call"
            }
          },
          "right": {
            "type": "MemberExpression",
            "computed": false,
            "object": {
              "type": "Identifier",
              "name": "d3_selectionPrototype"
            },
            "property": {
              "type": "Identifier",
              "name": "call"
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
            "type": "MemberExpression",
            "computed": false,
            "object": {
              "type": "Identifier",
              "name": "d3_transitionPrototype"
            },
            "property": {
              "type": "Identifier",
              "name": "empty"
            }
          },
          "right": {
            "type": "MemberExpression",
            "computed": false,
            "object": {
              "type": "Identifier",
              "name": "d3_selectionPrototype"
            },
            "property": {
              "type": "Identifier",
              "name": "empty"
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
            "type": "MemberExpression",
            "computed": false,
            "object": {
              "type": "Identifier",
              "name": "d3_transitionPrototype"
            },
            "property": {
              "type": "Identifier",
              "name": "node"
            }
          },
          "right": {
            "type": "MemberExpression",
            "computed": false,
            "object": {
              "type": "Identifier",
              "name": "d3_selectionPrototype"
            },
            "property": {
              "type": "Identifier",
              "name": "node"
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
            "type": "MemberExpression",
            "computed": false,
            "object": {
              "type": "Identifier",
              "name": "d3_transitionPrototype"
            },
            "property": {
              "type": "Identifier",
              "name": "size"
            }
          },
          "right": {
            "type": "MemberExpression",
            "computed": false,
            "object": {
              "type": "Identifier",
              "name": "d3_selectionPrototype"
            },
            "property": {
              "type": "Identifier",
              "name": "size"
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
            "type": "MemberExpression",
            "computed": false,
            "object": {
              "type": "Identifier",
              "name": "d3"
            },
            "property": {
              "type": "Identifier",
              "name": "transition"
            }
          },
          "right": {
            "type": "FunctionExpression",
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "name": "selection"
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
                    "consequent": {
                      "type": "ConditionalExpression",
                      "test": {
                        "type": "Identifier",
                        "name": "d3_transitionInheritId"
                      },
                      "consequent": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "MemberExpression",
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "name": "selection"
                          },
                          "property": {
                            "type": "Identifier",
                            "name": "transition"
                          }
                        },
                        "arguments": []
                      },
                      "alternate": {
                        "type": "Identifier",
                        "name": "selection"
                      }
                    },
                    "alternate": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "name": "d3_selectionRoot"
                        },
                        "property": {
                          "type": "Identifier",
                          "name": "transition"
                        }
                      },
                      "arguments": []
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
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "Identifier",
                "name": "d3"
              },
              "property": {
                "type": "Identifier",
                "name": "transition"
              }
            },
            "property": {
              "type": "Identifier",
              "name": "prototype"
            }
          },
          "right": {
            "type": "Identifier",
            "name": "d3_transitionPrototype"
          }
        }
      },
      {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "name": "d3_transitionNode"
        },
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
            "name": "id"
          },
          {
            "type": "Identifier",
            "name": "inherit"
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
                    "name": "lock"
                  },
                  "init": {
                    "type": "LogicalExpression",
                    "operator": "||",
                    "left": {
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
                    "right": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
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
                      "right": {
                        "type": "ObjectExpression",
                        "properties": [
                          {
                            "type": "Property",
                            "key": {
                              "type": "Identifier",
                              "name": "active"
                            },
                            "value": {
                              "type": "Literal",
                              "value": 0,
                              "raw": "0"
                            },
                            "kind": "init"
                          },
                          {
                            "type": "Property",
                            "key": {
                              "type": "Identifier",
                              "name": "count"
                            },
                            "value": {
                              "type": "Literal",
                              "value": 0,
                              "raw": "0"
                            },
                            "kind": "init"
                          }
                        ]
                      }
                    }
                  }
                },
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "name": "transition"
                  },
                  "init": {
                    "type": "MemberExpression",
                    "computed": true,
                    "object": {
                      "type": "Identifier",
                      "name": "lock"
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
                "type": "UnaryExpression",
                "operator": "!",
                "argument": {
                  "type": "Identifier",
                  "name": "transition"
                },
                "prefix": true
              },
              "consequent": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "name": "time"
                        },
                        "init": {
                          "type": "MemberExpression",
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "name": "inherit"
                          },
                          "property": {
                            "type": "Identifier",
                            "name": "time"
                          }
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
                        "type": "Identifier",
                        "name": "transition"
                      },
                      "right": {
                        "type": "AssignmentExpression",
                        "operator": "=",
                        "left": {
                          "type": "MemberExpression",
                          "computed": true,
                          "object": {
                            "type": "Identifier",
                            "name": "lock"
                          },
                          "property": {
                            "type": "Identifier",
                            "name": "id"
                          }
                        },
                        "right": {
                          "type": "ObjectExpression",
                          "properties": [
                            {
                              "type": "Property",
                              "key": {
                                "type": "Identifier",
                                "name": "tween"
                              },
                              "value": {
                                "type": "NewExpression",
                                "callee": {
                                  "type": "Identifier",
                                  "name": "d3_Map"
                                },
                                "arguments": []
                              },
                              "kind": "init"
                            },
                            {
                              "type": "Property",
                              "key": {
                                "type": "Identifier",
                                "name": "time"
                              },
                              "value": {
                                "type": "Identifier",
                                "name": "time"
                              },
                              "kind": "init"
                            },
                            {
                              "type": "Property",
                              "key": {
                                "type": "Identifier",
                                "name": "ease"
                              },
                              "value": {
                                "type": "MemberExpression",
                                "computed": false,
                                "object": {
                                  "type": "Identifier",
                                  "name": "inherit"
                                },
                                "property": {
                                  "type": "Identifier",
                                  "name": "ease"
                                }
                              },
                              "kind": "init"
                            },
                            {
                              "type": "Property",
                              "key": {
                                "type": "Identifier",
                                "name": "delay"
                              },
                              "value": {
                                "type": "MemberExpression",
                                "computed": false,
                                "object": {
                                  "type": "Identifier",
                                  "name": "inherit"
                                },
                                "property": {
                                  "type": "Identifier",
                                  "name": "delay"
                                }
                              },
                              "kind": "init"
                            },
                            {
                              "type": "Property",
                              "key": {
                                "type": "Identifier",
                                "name": "duration"
                              },
                              "value": {
                                "type": "MemberExpression",
                                "computed": false,
                                "object": {
                                  "type": "Identifier",
                                  "name": "inherit"
                                },
                                "property": {
                                  "type": "Identifier",
                                  "name": "duration"
                                }
                              },
                              "kind": "init"
                            }
                          ]
                        }
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "UpdateExpression",
                      "operator": "++",
                      "argument": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "name": "lock"
                        },
                        "property": {
                          "type": "Identifier",
                          "name": "count"
                        }
                      },
                      "prefix": true
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
                          "name": "d3"
                        },
                        "property": {
                          "type": "Identifier",
                          "name": "timer"
                        }
                      },
                      "arguments": [
                        {
                          "type": "FunctionExpression",
                          "id": null,
                          "params": [
                            {
                              "type": "Identifier",
                              "name": "elapsed"
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
                                      "name": "d"
                                    },
                                    "init": {
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
                                  },
                                  {
                                    "type": "VariableDeclarator",
                                    "id": {
                                      "type": "Identifier",
                                      "name": "ease"
                                    },
                                    "init": {
                                      "type": "MemberExpression",
                                      "computed": false,
                                      "object": {
                                        "type": "Identifier",
                                        "name": "transition"
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "name": "ease"
                                      }
                                    }
                                  },
                                  {
                                    "type": "VariableDeclarator",
                                    "id": {
                                      "type": "Identifier",
                                      "name": "delay"
                                    },
                                    "init": {
                                      "type": "MemberExpression",
                                      "computed": false,
                                      "object": {
                                        "type": "Identifier",
                                        "name": "transition"
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "name": "delay"
                                      }
                                    }
                                  },
                                  {
                                    "type": "VariableDeclarator",
                                    "id": {
                                      "type": "Identifier",
                                      "name": "duration"
                                    },
                                    "init": {
                                      "type": "MemberExpression",
                                      "computed": false,
                                      "object": {
                                        "type": "Identifier",
                                        "name": "transition"
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "name": "duration"
                                      }
                                    }
                                  },
                                  {
                                    "type": "VariableDeclarator",
                                    "id": {
                                      "type": "Identifier",
                                      "name": "timer"
                                    },
                                    "init": {
                                      "type": "Identifier",
                                      "name": "d3_timer_active"
                                    }
                                  },
                                  {
                                    "type": "VariableDeclarator",
                                    "id": {
                                      "type": "Identifier",
                                      "name": "tweened"
                                    },
                                    "init": {
                                      "type": "ArrayExpression",
                                      "elements": []
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
                                      "name": "timer"
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "name": "t"
                                    }
                                  },
                                  "right": {
                                    "type": "BinaryExpression",
                                    "operator": "+",
                                    "left": {
                                      "type": "Identifier",
                                      "name": "delay"
                                    },
                                    "right": {
                                      "type": "Identifier",
                                      "name": "time"
                                    }
                                  }
                                }
                              },
                              {
                                "type": "IfStatement",
                                "test": {
                                  "type": "BinaryExpression",
                                  "operator": "<=",
                                  "left": {
                                    "type": "Identifier",
                                    "name": "delay"
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "name": "elapsed"
                                  }
                                },
                                "consequent": {
                                  "type": "ReturnStatement",
                                  "argument": {
                                    "type": "CallExpression",
                                    "callee": {
                                      "type": "Identifier",
                                      "name": "start"
                                    },
                                    "arguments": [
                                      {
                                        "type": "BinaryExpression",
                                        "operator": "-",
                                        "left": {
                                          "type": "Identifier",
                                          "name": "elapsed"
                                        },
                                        "right": {
                                          "type": "Identifier",
                                          "name": "delay"
                                        }
                                      }
                                    ]
                                  }
                                },
                                "alternate": null
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
                                      "name": "timer"
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "name": "c"
                                    }
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "name": "start"
                                  }
                                }
                              },
                              {
                                "type": "FunctionDeclaration",
                                "id": {
                                  "type": "Identifier",
                                  "name": "start"
                                },
                                "params": [
                                  {
                                    "type": "Identifier",
                                    "name": "elapsed"
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
                                        "operator": ">",
                                        "left": {
                                          "type": "MemberExpression",
                                          "computed": false,
                                          "object": {
                                            "type": "Identifier",
                                            "name": "lock"
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "name": "active"
                                          }
                                        },
                                        "right": {
                                          "type": "Identifier",
                                          "name": "id"
                                        }
                                      },
                                      "consequent": {
                                        "type": "ReturnStatement",
                                        "argument": {
                                          "type": "CallExpression",
                                          "callee": {
                                            "type": "Identifier",
                                            "name": "stop"
                                          },
                                          "arguments": []
                                        }
                                      },
                                      "alternate": null
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
                                            "name": "lock"
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "name": "active"
                                          }
                                        },
                                        "right": {
                                          "type": "Identifier",
                                          "name": "id"
                                        }
                                      }
                                    },
                                    {
                                      "type": "ExpressionStatement",
                                      "expression": {
                                        "type": "LogicalExpression",
                                        "operator": "&&",
                                        "left": {
                                          "type": "MemberExpression",
                                          "computed": false,
                                          "object": {
                                            "type": "Identifier",
                                            "name": "transition"
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "name": "event"
                                          }
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
                                                "type": "MemberExpression",
                                                "computed": false,
                                                "object": {
                                                  "type": "Identifier",
                                                  "name": "transition"
                                                },
                                                "property": {
                                                  "type": "Identifier",
                                                  "name": "event"
                                                }
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "name": "start"
                                              }
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
                                              "type": "Identifier",
                                              "name": "d"
                                            },
                                            {
                                              "type": "Identifier",
                                              "name": "i"
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
                                            "type": "MemberExpression",
                                            "computed": false,
                                            "object": {
                                              "type": "Identifier",
                                              "name": "transition"
                                            },
                                            "property": {
                                              "type": "Identifier",
                                              "name": "tween"
                                            }
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "name": "forEach"
                                          }
                                        },
                                        "arguments": [
                                          {
                                            "type": "FunctionExpression",
                                            "id": null,
                                            "params": [
                                              {
                                                "type": "Identifier",
                                                "name": "key"
                                              },
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
                                                  "type": "IfStatement",
                                                  "test": {
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
                                                          "type": "Identifier",
                                                          "name": "d"
                                                        },
                                                        {
                                                          "type": "Identifier",
                                                          "name": "i"
                                                        }
                                                      ]
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
                                                              "name": "tweened"
                                                            },
                                                            "property": {
                                                              "type": "Identifier",
                                                              "name": "push"
                                                            }
                                                          },
                                                          "arguments": [
                                                            {
                                                              "type": "Identifier",
                                                              "name": "value"
                                                            }
                                                          ]
                                                        }
                                                      }
                                                    ]
                                                  },
                                                  "alternate": null
                                                }
                                              ]
                                            },
                                            "rest": null,
                                            "generator": false,
                                            "expression": false
                                          }
                                        ]
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
                                            "name": "d3"
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "name": "timer"
                                          }
                                        },
                                        "arguments": [
                                          {
                                            "type": "FunctionExpression",
                                            "id": null,
                                            "params": [],
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
                                                        "type": "Identifier",
                                                        "name": "timer"
                                                      },
                                                      "property": {
                                                        "type": "Identifier",
                                                        "name": "c"
                                                      }
                                                    },
                                                    "right": {
                                                      "type": "ConditionalExpression",
                                                      "test": {
                                                        "type": "CallExpression",
                                                        "callee": {
                                                          "type": "Identifier",
                                                          "name": "tick"
                                                        },
                                                        "arguments": [
                                                          {
                                                            "type": "LogicalExpression",
                                                            "operator": "||",
                                                            "left": {
                                                              "type": "Identifier",
                                                              "name": "elapsed"
                                                            },
                                                            "right": {
                                                              "type": "Literal",
                                                              "value": 1,
                                                              "raw": "1"
                                                            }
                                                          }
                                                        ]
                                                      },
                                                      "consequent": {
                                                        "type": "Identifier",
                                                        "name": "d3_true"
                                                      },
                                                      "alternate": {
                                                        "type": "Identifier",
                                                        "name": "tick"
                                                      }
                                                    }
                                                  }
                                                },
                                                {
                                                  "type": "ReturnStatement",
                                                  "argument": {
                                                    "type": "Literal",
                                                    "value": 1,
                                                    "raw": "1"
                                                  }
                                                }
                                              ]
                                            },
                                            "rest": null,
                                            "generator": false,
                                            "expression": false
                                          },
                                          {
                                            "type": "Literal",
                                            "value": 0,
                                            "raw": "0"
                                          },
                                          {
                                            "type": "Identifier",
                                            "name": "time"
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
                                "type": "FunctionDeclaration",
                                "id": {
                                  "type": "Identifier",
                                  "name": "tick"
                                },
                                "params": [
                                  {
                                    "type": "Identifier",
                                    "name": "elapsed"
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
                                        "operator": "!==",
                                        "left": {
                                          "type": "MemberExpression",
                                          "computed": false,
                                          "object": {
                                            "type": "Identifier",
                                            "name": "lock"
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "name": "active"
                                          }
                                        },
                                        "right": {
                                          "type": "Identifier",
                                          "name": "id"
                                        }
                                      },
                                      "consequent": {
                                        "type": "ReturnStatement",
                                        "argument": {
                                          "type": "CallExpression",
                                          "callee": {
                                            "type": "Identifier",
                                            "name": "stop"
                                          },
                                          "arguments": []
                                        }
                                      },
                                      "alternate": null
                                    },
                                    {
                                      "type": "VariableDeclaration",
                                      "declarations": [
                                        {
                                          "type": "VariableDeclarator",
                                          "id": {
                                            "type": "Identifier",
                                            "name": "t"
                                          },
                                          "init": {
                                            "type": "BinaryExpression",
                                            "operator": "/",
                                            "left": {
                                              "type": "Identifier",
                                              "name": "elapsed"
                                            },
                                            "right": {
                                              "type": "Identifier",
                                              "name": "duration"
                                            }
                                          }
                                        },
                                        {
                                          "type": "VariableDeclarator",
                                          "id": {
                                            "type": "Identifier",
                                            "name": "e"
                                          },
                                          "init": {
                                            "type": "CallExpression",
                                            "callee": {
                                              "type": "Identifier",
                                              "name": "ease"
                                            },
                                            "arguments": [
                                              {
                                                "type": "Identifier",
                                                "name": "t"
                                              }
                                            ]
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
                                              "name": "tweened"
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
                                    {
                                      "type": "WhileStatement",
                                      "test": {
                                        "type": "BinaryExpression",
                                        "operator": ">",
                                        "left": {
                                          "type": "Identifier",
                                          "name": "n"
                                        },
                                        "right": {
                                          "type": "Literal",
                                          "value": 0,
                                          "raw": "0"
                                        }
                                      },
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
                                                  "type": "MemberExpression",
                                                  "computed": true,
                                                  "object": {
                                                    "type": "Identifier",
                                                    "name": "tweened"
                                                  },
                                                  "property": {
                                                    "type": "UpdateExpression",
                                                    "operator": "--",
                                                    "argument": {
                                                      "type": "Identifier",
                                                      "name": "n"
                                                    },
                                                    "prefix": true
                                                  }
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
                                                  "type": "Identifier",
                                                  "name": "e"
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
                                        "type": "BinaryExpression",
                                        "operator": ">=",
                                        "left": {
                                          "type": "Identifier",
                                          "name": "t"
                                        },
                                        "right": {
                                          "type": "Literal",
                                          "value": 1,
                                          "raw": "1"
                                        }
                                      },
                                      "consequent": {
                                        "type": "BlockStatement",
                                        "body": [
                                          {
                                            "type": "ExpressionStatement",
                                            "expression": {
                                              "type": "LogicalExpression",
                                              "operator": "&&",
                                              "left": {
                                                "type": "MemberExpression",
                                                "computed": false,
                                                "object": {
                                                  "type": "Identifier",
                                                  "name": "transition"
                                                },
                                                "property": {
                                                  "type": "Identifier",
                                                  "name": "event"
                                                }
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
                                                      "type": "MemberExpression",
                                                      "computed": false,
                                                      "object": {
                                                        "type": "Identifier",
                                                        "name": "transition"
                                                      },
                                                      "property": {
                                                        "type": "Identifier",
                                                        "name": "event"
                                                      }
                                                    },
                                                    "property": {
                                                      "type": "Identifier",
                                                      "name": "end"
                                                    }
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
                                                    "type": "Identifier",
                                                    "name": "d"
                                                  },
                                                  {
                                                    "type": "Identifier",
                                                    "name": "i"
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
                                                "type": "Identifier",
                                                "name": "stop"
                                              },
                                              "arguments": []
                                            }
                                          }
                                        ]
                                      },
                                      "alternate": null
                                    }
                                  ]
                                },
                                "rest": null,
                                "generator": false,
                                "expression": false
                              },
                              {
                                "type": "FunctionDeclaration",
                                "id": {
                                  "type": "Identifier",
                                  "name": "stop"
                                },
                                "params": [],
                                "defaults": [],
                                "body": {
                                  "type": "BlockStatement",
                                  "body": [
                                    {
                                      "type": "IfStatement",
                                      "test": {
                                        "type": "UpdateExpression",
                                        "operator": "--",
                                        "argument": {
                                          "type": "MemberExpression",
                                          "computed": false,
                                          "object": {
                                            "type": "Identifier",
                                            "name": "lock"
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "name": "count"
                                          }
                                        },
                                        "prefix": true
                                      },
                                      "consequent": {
                                        "type": "ExpressionStatement",
                                        "expression": {
                                          "type": "UnaryExpression",
                                          "operator": "delete",
                                          "argument": {
                                            "type": "MemberExpression",
                                            "computed": true,
                                            "object": {
                                              "type": "Identifier",
                                              "name": "lock"
                                            },
                                            "property": {
                                              "type": "Identifier",
                                              "name": "id"
                                            }
                                          },
                                          "prefix": true
                                        }
                                      },
                                      "alternate": {
                                        "type": "ExpressionStatement",
                                        "expression": {
                                          "type": "UnaryExpression",
                                          "operator": "delete",
                                          "argument": {
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
                                          "prefix": true
                                        }
                                      }
                                    },
                                    {
                                      "type": "ReturnStatement",
                                      "argument": {
                                        "type": "Literal",
                                        "value": 1,
                                        "raw": "1"
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
                          "rest": null,
                          "generator": false,
                          "expression": false
                        },
                        {
                          "type": "Literal",
                          "value": 0,
                          "raw": "0"
                        },
                        {
                          "type": "Identifier",
                          "name": "time"
                        }
                      ]
                    }
                  }
                ]
              },
              "alternate": null
            }
          ]
        },
        "rest": null,
        "generator": false,
        "expression": false
      }
    ]
  },
  "src": "function d3_transition(groups, id) {\n    d3_subclass(groups, d3_transitionPrototype);\n    groups.id = id;\n    return groups;\n}\nvar d3_transitionPrototype = [];\nvar d3_transitionId = 0;\nvar d3_transitionInheritId;\nvar d3_transitionInherit;\nd3_transitionPrototype.call = d3_selectionPrototype.call;\nd3_transitionPrototype.empty = d3_selectionPrototype.empty;\nd3_transitionPrototype.node = d3_selectionPrototype.node;\nd3_transitionPrototype.size = d3_selectionPrototype.size;\nd3.transition = function (selection) {\n    return arguments.length ? d3_transitionInheritId ? selection.transition() : selection : d3_selectionRoot.transition();\n};\nd3.transition.prototype = d3_transitionPrototype;\nfunction d3_transitionNode(node, i, id, inherit) {\n    var lock = node.__transition__ || (node.__transition__ = {\n            active: 0,\n            count: 0\n        }), transition = lock[id];\n    if (!transition) {\n        var time = inherit.time;\n        transition = lock[id] = {\n            tween: new d3_Map(),\n            time: time,\n            ease: inherit.ease,\n            delay: inherit.delay,\n            duration: inherit.duration\n        };\n        ++lock.count;\n        d3.timer(function (elapsed) {\n            var d = node.__data__, ease = transition.ease, delay = transition.delay, duration = transition.duration, timer = d3_timer_active, tweened = [];\n            timer.t = delay + time;\n            if (delay <= elapsed)\n                return start(elapsed - delay);\n            timer.c = start;\n            function start(elapsed) {\n                if (lock.active > id)\n                    return stop();\n                lock.active = id;\n                transition.event && transition.event.start.call(node, d, i);\n                transition.tween.forEach(function (key, value) {\n                    if (value = value.call(node, d, i)) {\n                        tweened.push(value);\n                    }\n                });\n                d3.timer(function () {\n                    timer.c = tick(elapsed || 1) ? d3_true : tick;\n                    return 1;\n                }, 0, time);\n            }\n            function tick(elapsed) {\n                if (lock.active !== id)\n                    return stop();\n                var t = elapsed / duration, e = ease(t), n = tweened.length;\n                while (n > 0) {\n                    tweened[--n].call(node, e);\n                }\n                if (t >= 1) {\n                    transition.event && transition.event.end.call(node, d, i);\n                    return stop();\n                }\n            }\n            function stop() {\n                if (--lock.count)\n                    delete lock[id];\n                else\n                    delete node.__transition__;\n                return 1;\n            }\n        }, 0, time);\n    }\n}"
}