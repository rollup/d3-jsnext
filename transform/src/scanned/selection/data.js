{
  "filepath": "/selection/data.js",
  "shared": [],
  "dependencies": [
    "d3_selectionPrototype",
    "d3_Map",
    "d3_selection_enter",
    "d3_selection"
  ],
  "helpers": [
    "d3_selection_dataNode"
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
              "name": "data"
            }
          },
          "right": {
            "type": "FunctionExpression",
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "name": "value"
              },
              {
                "type": "Identifier",
                "name": "key"
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
                          "type": "ThisExpression"
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
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "AssignmentExpression",
                          "operator": "=",
                          "left": {
                            "type": "Identifier",
                            "name": "value"
                          },
                          "right": {
                            "type": "NewExpression",
                            "callee": {
                              "type": "Identifier",
                              "name": "Array"
                            },
                            "arguments": [
                              {
                                "type": "AssignmentExpression",
                                "operator": "=",
                                "left": {
                                  "type": "Identifier",
                                  "name": "n"
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
                                        "type": "Literal",
                                        "value": 0,
                                        "raw": "0"
                                      }
                                    }
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "name": "length"
                                  }
                                }
                              }
                            ]
                          }
                        }
                      },
                      {
                        "type": "WhileStatement",
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
                                        "type": "MemberExpression",
                                        "computed": true,
                                        "object": {
                                          "type": "Identifier",
                                          "name": "value"
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "name": "i"
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
                                  }
                                ]
                              },
                              "alternate": null
                            }
                          ]
                        }
                      },
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "Identifier",
                          "name": "value"
                        }
                      }
                    ]
                  },
                  "alternate": null
                },
                {
                  "type": "FunctionDeclaration",
                  "id": {
                    "type": "Identifier",
                    "name": "bind"
                  },
                  "params": [
                    {
                      "type": "Identifier",
                      "name": "group"
                    },
                    {
                      "type": "Identifier",
                      "name": "groupData"
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
                              "name": "i"
                            },
                            "init": null
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
                              "name": "m"
                            },
                            "init": {
                              "type": "MemberExpression",
                              "computed": false,
                              "object": {
                                "type": "Identifier",
                                "name": "groupData"
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
                              "name": "n0"
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
                                  "name": "min"
                                }
                              },
                              "arguments": [
                                {
                                  "type": "Identifier",
                                  "name": "n"
                                },
                                {
                                  "type": "Identifier",
                                  "name": "m"
                                }
                              ]
                            }
                          },
                          {
                            "type": "VariableDeclarator",
                            "id": {
                              "type": "Identifier",
                              "name": "updateNodes"
                            },
                            "init": {
                              "type": "NewExpression",
                              "callee": {
                                "type": "Identifier",
                                "name": "Array"
                              },
                              "arguments": [
                                {
                                  "type": "Identifier",
                                  "name": "m"
                                }
                              ]
                            }
                          },
                          {
                            "type": "VariableDeclarator",
                            "id": {
                              "type": "Identifier",
                              "name": "enterNodes"
                            },
                            "init": {
                              "type": "NewExpression",
                              "callee": {
                                "type": "Identifier",
                                "name": "Array"
                              },
                              "arguments": [
                                {
                                  "type": "Identifier",
                                  "name": "m"
                                }
                              ]
                            }
                          },
                          {
                            "type": "VariableDeclarator",
                            "id": {
                              "type": "Identifier",
                              "name": "exitNodes"
                            },
                            "init": {
                              "type": "NewExpression",
                              "callee": {
                                "type": "Identifier",
                                "name": "Array"
                              },
                              "arguments": [
                                {
                                  "type": "Identifier",
                                  "name": "n"
                                }
                              ]
                            }
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
                              "name": "nodeData"
                            },
                            "init": null
                          }
                        ],
                        "kind": "var"
                      },
                      {
                        "type": "IfStatement",
                        "test": {
                          "type": "Identifier",
                          "name": "key"
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
                                    "name": "nodeByKeyValue"
                                  },
                                  "init": {
                                    "type": "NewExpression",
                                    "callee": {
                                      "type": "Identifier",
                                      "name": "d3_Map"
                                    },
                                    "arguments": []
                                  }
                                },
                                {
                                  "type": "VariableDeclarator",
                                  "id": {
                                    "type": "Identifier",
                                    "name": "dataByKeyValue"
                                  },
                                  "init": {
                                    "type": "NewExpression",
                                    "callee": {
                                      "type": "Identifier",
                                      "name": "d3_Map"
                                    },
                                    "arguments": []
                                  }
                                },
                                {
                                  "type": "VariableDeclarator",
                                  "id": {
                                    "type": "Identifier",
                                    "name": "keyValues"
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
                                    "name": "keyValue"
                                  },
                                  "init": null
                                }
                              ],
                              "kind": "var"
                            },
                            {
                              "type": "ForStatement",
                              "init": {
                                "type": "AssignmentExpression",
                                "operator": "=",
                                "left": {
                                  "type": "Identifier",
                                  "name": "i"
                                },
                                "right": {
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
                                    "type": "ExpressionStatement",
                                    "expression": {
                                      "type": "AssignmentExpression",
                                      "operator": "=",
                                      "left": {
                                        "type": "Identifier",
                                        "name": "keyValue"
                                      },
                                      "right": {
                                        "type": "CallExpression",
                                        "callee": {
                                          "type": "MemberExpression",
                                          "computed": false,
                                          "object": {
                                            "type": "Identifier",
                                            "name": "key"
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "name": "call"
                                          }
                                        },
                                        "arguments": [
                                          {
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
                                          }
                                        ]
                                      }
                                    }
                                  },
                                  {
                                    "type": "IfStatement",
                                    "test": {
                                      "type": "CallExpression",
                                      "callee": {
                                        "type": "MemberExpression",
                                        "computed": false,
                                        "object": {
                                          "type": "Identifier",
                                          "name": "nodeByKeyValue"
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "name": "has"
                                        }
                                      },
                                      "arguments": [
                                        {
                                          "type": "Identifier",
                                          "name": "keyValue"
                                        }
                                      ]
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
                                              "type": "MemberExpression",
                                              "computed": true,
                                              "object": {
                                                "type": "Identifier",
                                                "name": "exitNodes"
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "name": "i"
                                              }
                                            },
                                            "right": {
                                              "type": "Identifier",
                                              "name": "node"
                                            }
                                          }
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
                                                "name": "nodeByKeyValue"
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "name": "set"
                                              }
                                            },
                                            "arguments": [
                                              {
                                                "type": "Identifier",
                                                "name": "keyValue"
                                              },
                                              {
                                                "type": "Identifier",
                                                "name": "node"
                                              }
                                            ]
                                          }
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
                                          "name": "keyValues"
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "name": "push"
                                        }
                                      },
                                      "arguments": [
                                        {
                                          "type": "Identifier",
                                          "name": "keyValue"
                                        }
                                      ]
                                    }
                                  }
                                ]
                              }
                            },
                            {
                              "type": "ForStatement",
                              "init": {
                                "type": "AssignmentExpression",
                                "operator": "=",
                                "left": {
                                  "type": "Identifier",
                                  "name": "i"
                                },
                                "right": {
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
                                      "type": "AssignmentExpression",
                                      "operator": "=",
                                      "left": {
                                        "type": "Identifier",
                                        "name": "keyValue"
                                      },
                                      "right": {
                                        "type": "CallExpression",
                                        "callee": {
                                          "type": "MemberExpression",
                                          "computed": false,
                                          "object": {
                                            "type": "Identifier",
                                            "name": "key"
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "name": "call"
                                          }
                                        },
                                        "arguments": [
                                          {
                                            "type": "Identifier",
                                            "name": "groupData"
                                          },
                                          {
                                            "type": "AssignmentExpression",
                                            "operator": "=",
                                            "left": {
                                              "type": "Identifier",
                                              "name": "nodeData"
                                            },
                                            "right": {
                                              "type": "MemberExpression",
                                              "computed": true,
                                              "object": {
                                                "type": "Identifier",
                                                "name": "groupData"
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "name": "i"
                                              }
                                            }
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
                                    "type": "IfStatement",
                                    "test": {
                                      "type": "AssignmentExpression",
                                      "operator": "=",
                                      "left": {
                                        "type": "Identifier",
                                        "name": "node"
                                      },
                                      "right": {
                                        "type": "CallExpression",
                                        "callee": {
                                          "type": "MemberExpression",
                                          "computed": false,
                                          "object": {
                                            "type": "Identifier",
                                            "name": "nodeByKeyValue"
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "name": "get"
                                          }
                                        },
                                        "arguments": [
                                          {
                                            "type": "Identifier",
                                            "name": "keyValue"
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
                                            "type": "AssignmentExpression",
                                            "operator": "=",
                                            "left": {
                                              "type": "MemberExpression",
                                              "computed": true,
                                              "object": {
                                                "type": "Identifier",
                                                "name": "updateNodes"
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "name": "i"
                                              }
                                            },
                                            "right": {
                                              "type": "Identifier",
                                              "name": "node"
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
                                                "name": "node"
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "name": "__data__"
                                              }
                                            },
                                            "right": {
                                              "type": "Identifier",
                                              "name": "nodeData"
                                            }
                                          }
                                        }
                                      ]
                                    },
                                    "alternate": {
                                      "type": "IfStatement",
                                      "test": {
                                        "type": "UnaryExpression",
                                        "operator": "!",
                                        "argument": {
                                          "type": "CallExpression",
                                          "callee": {
                                            "type": "MemberExpression",
                                            "computed": false,
                                            "object": {
                                              "type": "Identifier",
                                              "name": "dataByKeyValue"
                                            },
                                            "property": {
                                              "type": "Identifier",
                                              "name": "has"
                                            }
                                          },
                                          "arguments": [
                                            {
                                              "type": "Identifier",
                                              "name": "keyValue"
                                            }
                                          ]
                                        },
                                        "prefix": true
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
                                                "type": "MemberExpression",
                                                "computed": true,
                                                "object": {
                                                  "type": "Identifier",
                                                  "name": "enterNodes"
                                                },
                                                "property": {
                                                  "type": "Identifier",
                                                  "name": "i"
                                                }
                                              },
                                              "right": {
                                                "type": "CallExpression",
                                                "callee": {
                                                  "type": "Identifier",
                                                  "name": "d3_selection_dataNode"
                                                },
                                                "arguments": [
                                                  {
                                                    "type": "Identifier",
                                                    "name": "nodeData"
                                                  }
                                                ]
                                              }
                                            }
                                          }
                                        ]
                                      },
                                      "alternate": null
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
                                          "name": "dataByKeyValue"
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "name": "set"
                                        }
                                      },
                                      "arguments": [
                                        {
                                          "type": "Identifier",
                                          "name": "keyValue"
                                        },
                                        {
                                          "type": "Identifier",
                                          "name": "nodeData"
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
                                          "name": "nodeByKeyValue"
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "name": "remove"
                                        }
                                      },
                                      "arguments": [
                                        {
                                          "type": "Identifier",
                                          "name": "keyValue"
                                        }
                                      ]
                                    }
                                  }
                                ]
                              }
                            },
                            {
                              "type": "ForStatement",
                              "init": {
                                "type": "AssignmentExpression",
                                "operator": "=",
                                "left": {
                                  "type": "Identifier",
                                  "name": "i"
                                },
                                "right": {
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
                                      "type": "CallExpression",
                                      "callee": {
                                        "type": "MemberExpression",
                                        "computed": false,
                                        "object": {
                                          "type": "Identifier",
                                          "name": "nodeByKeyValue"
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "name": "has"
                                        }
                                      },
                                      "arguments": [
                                        {
                                          "type": "MemberExpression",
                                          "computed": true,
                                          "object": {
                                            "type": "Identifier",
                                            "name": "keyValues"
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "name": "i"
                                          }
                                        }
                                      ]
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
                                              "type": "MemberExpression",
                                              "computed": true,
                                              "object": {
                                                "type": "Identifier",
                                                "name": "exitNodes"
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "name": "i"
                                              }
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
                        },
                        "alternate": {
                          "type": "BlockStatement",
                          "body": [
                            {
                              "type": "ForStatement",
                              "init": {
                                "type": "AssignmentExpression",
                                "operator": "=",
                                "left": {
                                  "type": "Identifier",
                                  "name": "i"
                                },
                                "right": {
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
                                  "name": "n0"
                                }
                              },
                              "update": null,
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
                                    }
                                  },
                                  {
                                    "type": "ExpressionStatement",
                                    "expression": {
                                      "type": "AssignmentExpression",
                                      "operator": "=",
                                      "left": {
                                        "type": "Identifier",
                                        "name": "nodeData"
                                      },
                                      "right": {
                                        "type": "MemberExpression",
                                        "computed": true,
                                        "object": {
                                          "type": "Identifier",
                                          "name": "groupData"
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "name": "i"
                                        }
                                      }
                                    }
                                  },
                                  {
                                    "type": "IfStatement",
                                    "test": {
                                      "type": "Identifier",
                                      "name": "node"
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
                                            "right": {
                                              "type": "Identifier",
                                              "name": "nodeData"
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
                                              "computed": true,
                                              "object": {
                                                "type": "Identifier",
                                                "name": "updateNodes"
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "name": "i"
                                              }
                                            },
                                            "right": {
                                              "type": "Identifier",
                                              "name": "node"
                                            }
                                          }
                                        }
                                      ]
                                    },
                                    "alternate": {
                                      "type": "BlockStatement",
                                      "body": [
                                        {
                                          "type": "ExpressionStatement",
                                          "expression": {
                                            "type": "AssignmentExpression",
                                            "operator": "=",
                                            "left": {
                                              "type": "MemberExpression",
                                              "computed": true,
                                              "object": {
                                                "type": "Identifier",
                                                "name": "enterNodes"
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "name": "i"
                                              }
                                            },
                                            "right": {
                                              "type": "CallExpression",
                                              "callee": {
                                                "type": "Identifier",
                                                "name": "d3_selection_dataNode"
                                              },
                                              "arguments": [
                                                {
                                                  "type": "Identifier",
                                                  "name": "nodeData"
                                                }
                                              ]
                                            }
                                          }
                                        }
                                      ]
                                    }
                                  }
                                ]
                              }
                            },
                            {
                              "type": "ForStatement",
                              "init": null,
                              "test": {
                                "type": "BinaryExpression",
                                "operator": "<",
                                "left": {
                                  "type": "Identifier",
                                  "name": "i"
                                },
                                "right": {
                                  "type": "Identifier",
                                  "name": "m"
                                }
                              },
                              "update": {
                                "type": "UpdateExpression",
                                "operator": "++",
                                "argument": {
                                  "type": "Identifier",
                                  "name": "i"
                                },
                                "prefix": true
                              },
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
                                        "computed": true,
                                        "object": {
                                          "type": "Identifier",
                                          "name": "enterNodes"
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "name": "i"
                                        }
                                      },
                                      "right": {
                                        "type": "CallExpression",
                                        "callee": {
                                          "type": "Identifier",
                                          "name": "d3_selection_dataNode"
                                        },
                                        "arguments": [
                                          {
                                            "type": "MemberExpression",
                                            "computed": true,
                                            "object": {
                                              "type": "Identifier",
                                              "name": "groupData"
                                            },
                                            "property": {
                                              "type": "Identifier",
                                              "name": "i"
                                            }
                                          }
                                        ]
                                      }
                                    }
                                  }
                                ]
                              }
                            },
                            {
                              "type": "ForStatement",
                              "init": null,
                              "test": {
                                "type": "BinaryExpression",
                                "operator": "<",
                                "left": {
                                  "type": "Identifier",
                                  "name": "i"
                                },
                                "right": {
                                  "type": "Identifier",
                                  "name": "n"
                                }
                              },
                              "update": {
                                "type": "UpdateExpression",
                                "operator": "++",
                                "argument": {
                                  "type": "Identifier",
                                  "name": "i"
                                },
                                "prefix": true
                              },
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
                                        "computed": true,
                                        "object": {
                                          "type": "Identifier",
                                          "name": "exitNodes"
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "name": "i"
                                        }
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
                                    }
                                  }
                                ]
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
                              "name": "enterNodes"
                            },
                            "property": {
                              "type": "Identifier",
                              "name": "update"
                            }
                          },
                          "right": {
                            "type": "Identifier",
                            "name": "updateNodes"
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
                              "name": "enterNodes"
                            },
                            "property": {
                              "type": "Identifier",
                              "name": "parentNode"
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
                                "name": "updateNodes"
                              },
                              "property": {
                                "type": "Identifier",
                                "name": "parentNode"
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
                                  "name": "exitNodes"
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
                                  "type": "Identifier",
                                  "name": "group"
                                },
                                "property": {
                                  "type": "Identifier",
                                  "name": "parentNode"
                                }
                              }
                            }
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
                              "name": "enter"
                            },
                            "property": {
                              "type": "Identifier",
                              "name": "push"
                            }
                          },
                          "arguments": [
                            {
                              "type": "Identifier",
                              "name": "enterNodes"
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
                              "name": "update"
                            },
                            "property": {
                              "type": "Identifier",
                              "name": "push"
                            }
                          },
                          "arguments": [
                            {
                              "type": "Identifier",
                              "name": "updateNodes"
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
                              "name": "exit"
                            },
                            "property": {
                              "type": "Identifier",
                              "name": "push"
                            }
                          },
                          "arguments": [
                            {
                              "type": "Identifier",
                              "name": "exitNodes"
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
                  "type": "VariableDeclaration",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "name": "enter"
                      },
                      "init": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "Identifier",
                          "name": "d3_selection_enter"
                        },
                        "arguments": [
                          {
                            "type": "ArrayExpression",
                            "elements": []
                          }
                        ]
                      }
                    },
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "name": "update"
                      },
                      "init": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "Identifier",
                          "name": "d3_selection"
                        },
                        "arguments": [
                          {
                            "type": "ArrayExpression",
                            "elements": []
                          }
                        ]
                      }
                    },
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "name": "exit"
                      },
                      "init": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "Identifier",
                          "name": "d3_selection"
                        },
                        "arguments": [
                          {
                            "type": "ArrayExpression",
                            "elements": []
                          }
                        ]
                      }
                    }
                  ],
                  "kind": "var"
                },
                {
                  "type": "IfStatement",
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
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "WhileStatement",
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
                        "body": {
                          "type": "BlockStatement",
                          "body": [
                            {
                              "type": "ExpressionStatement",
                              "expression": {
                                "type": "CallExpression",
                                "callee": {
                                  "type": "Identifier",
                                  "name": "bind"
                                },
                                "arguments": [
                                  {
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
                                        "name": "i"
                                      }
                                    }
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
                                        "name": "group"
                                      },
                                      {
                                        "type": "MemberExpression",
                                        "computed": false,
                                        "object": {
                                          "type": "MemberExpression",
                                          "computed": false,
                                          "object": {
                                            "type": "Identifier",
                                            "name": "group"
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "name": "parentNode"
                                          }
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "name": "__data__"
                                        }
                                      },
                                      {
                                        "type": "Identifier",
                                        "name": "i"
                                      }
                                    ]
                                  }
                                ]
                              }
                            }
                          ]
                        }
                      }
                    ]
                  },
                  "alternate": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "WhileStatement",
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
                        "body": {
                          "type": "BlockStatement",
                          "body": [
                            {
                              "type": "ExpressionStatement",
                              "expression": {
                                "type": "CallExpression",
                                "callee": {
                                  "type": "Identifier",
                                  "name": "bind"
                                },
                                "arguments": [
                                  {
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
                                        "name": "i"
                                      }
                                    }
                                  },
                                  {
                                    "type": "Identifier",
                                    "name": "value"
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
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "name": "update"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "enter"
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
                              "type": "Identifier",
                              "name": "enter"
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
                        "type": "Identifier",
                        "name": "update"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "exit"
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
                              "type": "Identifier",
                              "name": "exit"
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
                    "name": "update"
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
          "name": "d3_selection_dataNode"
        },
        "params": [
          {
            "type": "Identifier",
            "name": "data"
          }
        ],
        "defaults": [],
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "ReturnStatement",
              "argument": {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "key": {
                      "type": "Identifier",
                      "name": "__data__"
                    },
                    "value": {
                      "type": "Identifier",
                      "name": "data"
                    },
                    "kind": "init"
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
    ]
  },
  "src": "d3_selectionPrototype.data = function (value, key) {\n    var i = -1, n = this.length, group, node;\n    if (!arguments.length) {\n        value = new Array(n = (group = this[0]).length);\n        while (++i < n) {\n            if (node = group[i]) {\n                value[i] = node.__data__;\n            }\n        }\n        return value;\n    }\n    function bind(group, groupData) {\n        var i, n = group.length, m = groupData.length, n0 = Math.min(n, m), updateNodes = new Array(m), enterNodes = new Array(m), exitNodes = new Array(n), node, nodeData;\n        if (key) {\n            var nodeByKeyValue = new d3_Map(), dataByKeyValue = new d3_Map(), keyValues = [], keyValue;\n            for (i = -1; ++i < n;) {\n                keyValue = key.call(node = group[i], node.__data__, i);\n                if (nodeByKeyValue.has(keyValue)) {\n                    exitNodes[i] = node;\n                } else {\n                    nodeByKeyValue.set(keyValue, node);\n                }\n                keyValues.push(keyValue);\n            }\n            for (i = -1; ++i < m;) {\n                keyValue = key.call(groupData, nodeData = groupData[i], i);\n                if (node = nodeByKeyValue.get(keyValue)) {\n                    updateNodes[i] = node;\n                    node.__data__ = nodeData;\n                } else if (!dataByKeyValue.has(keyValue)) {\n                    enterNodes[i] = d3_selection_dataNode(nodeData);\n                }\n                dataByKeyValue.set(keyValue, nodeData);\n                nodeByKeyValue.remove(keyValue);\n            }\n            for (i = -1; ++i < n;) {\n                if (nodeByKeyValue.has(keyValues[i])) {\n                    exitNodes[i] = group[i];\n                }\n            }\n        } else {\n            for (i = -1; ++i < n0;) {\n                node = group[i];\n                nodeData = groupData[i];\n                if (node) {\n                    node.__data__ = nodeData;\n                    updateNodes[i] = node;\n                } else {\n                    enterNodes[i] = d3_selection_dataNode(nodeData);\n                }\n            }\n            for (; i < m; ++i) {\n                enterNodes[i] = d3_selection_dataNode(groupData[i]);\n            }\n            for (; i < n; ++i) {\n                exitNodes[i] = group[i];\n            }\n        }\n        enterNodes.update = updateNodes;\n        enterNodes.parentNode = updateNodes.parentNode = exitNodes.parentNode = group.parentNode;\n        enter.push(enterNodes);\n        update.push(updateNodes);\n        exit.push(exitNodes);\n    }\n    var enter = d3_selection_enter([]), update = d3_selection([]), exit = d3_selection([]);\n    if (typeof value === 'function') {\n        while (++i < n) {\n            bind(group = this[i], value.call(group, group.parentNode.__data__, i));\n        }\n    } else {\n        while (++i < n) {\n            bind(group = this[i], value);\n        }\n    }\n    update.enter = function () {\n        return enter;\n    };\n    update.exit = function () {\n        return exit;\n    };\n    return update;\n};\nfunction d3_selection_dataNode(data) {\n    return { __data__: data };\n}"
}