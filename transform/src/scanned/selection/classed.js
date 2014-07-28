{
  "filepath": "/selection/classed.js",
  "shared": [],
  "dependencies": [
    "d3_selectionPrototype",
    "d3.requote",
    "d3_collapse"
  ],
  "helpers": [
    "d3_selection_classedRe",
    "d3_selection_classes",
    "d3_selection_classed",
    "d3_selection_classedName"
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
              "name": "classed"
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
                    "type": "BlockStatement",
                    "body": [
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
                              "name": "name"
                            },
                            "prefix": true
                          },
                          "right": {
                            "type": "Literal",
                            "value": "string",
                            "raw": "\"string\""
                          }
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
                                    "name": "node"
                                  },
                                  "init": {
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
                                      "type": "AssignmentExpression",
                                      "operator": "=",
                                      "left": {
                                        "type": "Identifier",
                                        "name": "name"
                                      },
                                      "right": {
                                        "type": "CallExpression",
                                        "callee": {
                                          "type": "Identifier",
                                          "name": "d3_selection_classes"
                                        },
                                        "arguments": [
                                          {
                                            "type": "Identifier",
                                            "name": "name"
                                          }
                                        ]
                                      }
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
                                }
                              ],
                              "kind": "var"
                            },
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
                                  "type": "MemberExpression",
                                  "computed": false,
                                  "object": {
                                    "type": "Identifier",
                                    "name": "node"
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "name": "classList"
                                  }
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
                                              "name": "value"
                                            },
                                            "property": {
                                              "type": "Identifier",
                                              "name": "contains"
                                            }
                                          },
                                          "arguments": [
                                            {
                                              "type": "MemberExpression",
                                              "computed": true,
                                              "object": {
                                                "type": "Identifier",
                                                "name": "name"
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "name": "i"
                                              }
                                            }
                                          ]
                                        },
                                        "prefix": true
                                      },
                                      "consequent": {
                                        "type": "ReturnStatement",
                                        "argument": {
                                          "type": "Literal",
                                          "value": false,
                                          "raw": "false"
                                        }
                                      },
                                      "alternate": null
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
                                            "name": "node"
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "name": "getAttribute"
                                          }
                                        },
                                        "arguments": [
                                          {
                                            "type": "Literal",
                                            "value": "class",
                                            "raw": "\"class\""
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
                                              "type": "CallExpression",
                                              "callee": {
                                                "type": "Identifier",
                                                "name": "d3_selection_classedRe"
                                              },
                                              "arguments": [
                                                {
                                                  "type": "MemberExpression",
                                                  "computed": true,
                                                  "object": {
                                                    "type": "Identifier",
                                                    "name": "name"
                                                  },
                                                  "property": {
                                                    "type": "Identifier",
                                                    "name": "i"
                                                  }
                                                }
                                              ]
                                            },
                                            "property": {
                                              "type": "Identifier",
                                              "name": "test"
                                            }
                                          },
                                          "arguments": [
                                            {
                                              "type": "Identifier",
                                              "name": "value"
                                            }
                                          ]
                                        },
                                        "prefix": true
                                      },
                                      "consequent": {
                                        "type": "ReturnStatement",
                                        "argument": {
                                          "type": "Literal",
                                          "value": false,
                                          "raw": "false"
                                        }
                                      },
                                      "alternate": null
                                    }
                                  }
                                ]
                              }
                            },
                            {
                              "type": "ReturnStatement",
                              "argument": {
                                "type": "Literal",
                                "value": true,
                                "raw": "true"
                              }
                            }
                          ]
                        },
                        "alternate": null
                      },
                      {
                        "type": "ForInStatement",
                        "left": {
                          "type": "Identifier",
                          "name": "value"
                        },
                        "right": {
                          "type": "Identifier",
                          "name": "name"
                        },
                        "body": {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "CallExpression",
                            "callee": {
                              "type": "MemberExpression",
                              "computed": false,
                              "object": {
                                "type": "ThisExpression"
                              },
                              "property": {
                                "type": "Identifier",
                                "name": "each"
                              }
                            },
                            "arguments": [
                              {
                                "type": "CallExpression",
                                "callee": {
                                  "type": "Identifier",
                                  "name": "d3_selection_classed"
                                },
                                "arguments": [
                                  {
                                    "type": "Identifier",
                                    "name": "value"
                                  },
                                  {
                                    "type": "MemberExpression",
                                    "computed": true,
                                    "object": {
                                      "type": "Identifier",
                                      "name": "name"
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "name": "value"
                                    }
                                  }
                                ]
                              }
                            ]
                          }
                        },
                        "each": false
                      },
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "ThisExpression"
                        }
                      }
                    ]
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
                        "type": "ThisExpression"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "each"
                      }
                    },
                    "arguments": [
                      {
                        "type": "CallExpression",
                        "callee": {
                          "type": "Identifier",
                          "name": "d3_selection_classed"
                        },
                        "arguments": [
                          {
                            "type": "Identifier",
                            "name": "name"
                          },
                          {
                            "type": "Identifier",
                            "name": "value"
                          }
                        ]
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
          "name": "d3_selection_classedRe"
        },
        "params": [
          {
            "type": "Identifier",
            "name": "name"
          }
        ],
        "defaults": [],
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "ReturnStatement",
              "argument": {
                "type": "NewExpression",
                "callee": {
                  "type": "Identifier",
                  "name": "RegExp"
                },
                "arguments": [
                  {
                    "type": "BinaryExpression",
                    "operator": "+",
                    "left": {
                      "type": "BinaryExpression",
                      "operator": "+",
                      "left": {
                        "type": "Literal",
                        "value": "(?:^|\\s+)",
                        "raw": "\"(?:^|\\\\s+)\""
                      },
                      "right": {
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
                            "name": "requote"
                          }
                        },
                        "arguments": [
                          {
                            "type": "Identifier",
                            "name": "name"
                          }
                        ]
                      }
                    },
                    "right": {
                      "type": "Literal",
                      "value": "(?:\\s+|$)",
                      "raw": "\"(?:\\\\s+|$)\""
                    }
                  },
                  {
                    "type": "Literal",
                    "value": "g",
                    "raw": "\"g\""
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
          "name": "d3_selection_classes"
        },
        "params": [
          {
            "type": "Identifier",
            "name": "name"
          }
        ],
        "defaults": [],
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "ReturnStatement",
              "argument": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "BinaryExpression",
                        "operator": "+",
                        "left": {
                          "type": "Identifier",
                          "name": "name"
                        },
                        "right": {
                          "type": "Literal",
                          "value": "",
                          "raw": "\"\""
                        }
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "trim"
                      }
                    },
                    "arguments": []
                  },
                  "property": {
                    "type": "Identifier",
                    "name": "split"
                  }
                },
                "arguments": [
                  {
                    "type": "Literal",
                    "value": {},
                    "raw": "/^|\\s+/"
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
          "name": "d3_selection_classed"
        },
        "params": [
          {
            "type": "Identifier",
            "name": "name"
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
              "type": "ExpressionStatement",
              "expression": {
                "type": "AssignmentExpression",
                "operator": "=",
                "left": {
                  "type": "Identifier",
                  "name": "name"
                },
                "right": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "name": "d3_selection_classes"
                      },
                      "arguments": [
                        {
                          "type": "Identifier",
                          "name": "name"
                        }
                      ]
                    },
                    "property": {
                      "type": "Identifier",
                      "name": "map"
                    }
                  },
                  "arguments": [
                    {
                      "type": "Identifier",
                      "name": "d3_selection_classedName"
                    }
                  ]
                }
              }
            },
            {
              "type": "VariableDeclaration",
              "declarations": [
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
                      "name": "name"
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
              "type": "FunctionDeclaration",
              "id": {
                "type": "Identifier",
                "name": "classedConstant"
              },
              "params": [],
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
                      }
                    ],
                    "kind": "var"
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
                      "type": "ExpressionStatement",
                      "expression": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "MemberExpression",
                          "computed": true,
                          "object": {
                            "type": "Identifier",
                            "name": "name"
                          },
                          "property": {
                            "type": "Identifier",
                            "name": "i"
                          }
                        },
                        "arguments": [
                          {
                            "type": "ThisExpression"
                          },
                          {
                            "type": "Identifier",
                            "name": "value"
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
            {
              "type": "FunctionDeclaration",
              "id": {
                "type": "Identifier",
                "name": "classedFunction"
              },
              "params": [],
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
                          "name": "x"
                        },
                        "init": {
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
                    ],
                    "kind": "var"
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
                      "type": "ExpressionStatement",
                      "expression": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "MemberExpression",
                          "computed": true,
                          "object": {
                            "type": "Identifier",
                            "name": "name"
                          },
                          "property": {
                            "type": "Identifier",
                            "name": "i"
                          }
                        },
                        "arguments": [
                          {
                            "type": "ThisExpression"
                          },
                          {
                            "type": "Identifier",
                            "name": "x"
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
                  "type": "Identifier",
                  "name": "classedFunction"
                },
                "alternate": {
                  "type": "Identifier",
                  "name": "classedConstant"
                }
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
          "name": "d3_selection_classedName"
        },
        "params": [
          {
            "type": "Identifier",
            "name": "name"
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
                    "name": "re"
                  },
                  "init": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "name": "d3_selection_classedRe"
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "name": "name"
                      }
                    ]
                  }
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
                    "name": "node"
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
                          "name": "c"
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
                            "name": "classList"
                          }
                        }
                      },
                      "consequent": {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "ConditionalExpression",
                          "test": {
                            "type": "Identifier",
                            "name": "value"
                          },
                          "consequent": {
                            "type": "CallExpression",
                            "callee": {
                              "type": "MemberExpression",
                              "computed": false,
                              "object": {
                                "type": "Identifier",
                                "name": "c"
                              },
                              "property": {
                                "type": "Identifier",
                                "name": "add"
                              }
                            },
                            "arguments": [
                              {
                                "type": "Identifier",
                                "name": "name"
                              }
                            ]
                          },
                          "alternate": {
                            "type": "CallExpression",
                            "callee": {
                              "type": "MemberExpression",
                              "computed": false,
                              "object": {
                                "type": "Identifier",
                                "name": "c"
                              },
                              "property": {
                                "type": "Identifier",
                                "name": "remove"
                              }
                            },
                            "arguments": [
                              {
                                "type": "Identifier",
                                "name": "name"
                              }
                            ]
                          }
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
                            "name": "c"
                          },
                          "init": {
                            "type": "LogicalExpression",
                            "operator": "||",
                            "left": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "MemberExpression",
                                "computed": false,
                                "object": {
                                  "type": "Identifier",
                                  "name": "node"
                                },
                                "property": {
                                  "type": "Identifier",
                                  "name": "getAttribute"
                                }
                              },
                              "arguments": [
                                {
                                  "type": "Literal",
                                  "value": "class",
                                  "raw": "\"class\""
                                }
                              ]
                            },
                            "right": {
                              "type": "Literal",
                              "value": "",
                              "raw": "\"\""
                            }
                          }
                        }
                      ],
                      "kind": "var"
                    },
                    {
                      "type": "IfStatement",
                      "test": {
                        "type": "Identifier",
                        "name": "value"
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
                                  "name": "re"
                                },
                                "property": {
                                  "type": "Identifier",
                                  "name": "lastIndex"
                                }
                              },
                              "right": {
                                "type": "Literal",
                                "value": 0,
                                "raw": "0"
                              }
                            }
                          },
                          {
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
                                    "name": "re"
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "name": "test"
                                  }
                                },
                                "arguments": [
                                  {
                                    "type": "Identifier",
                                    "name": "c"
                                  }
                                ]
                              },
                              "prefix": true
                            },
                            "consequent": {
                              "type": "ExpressionStatement",
                              "expression": {
                                "type": "CallExpression",
                                "callee": {
                                  "type": "MemberExpression",
                                  "computed": false,
                                  "object": {
                                    "type": "Identifier",
                                    "name": "node"
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "name": "setAttribute"
                                  }
                                },
                                "arguments": [
                                  {
                                    "type": "Literal",
                                    "value": "class",
                                    "raw": "\"class\""
                                  },
                                  {
                                    "type": "CallExpression",
                                    "callee": {
                                      "type": "Identifier",
                                      "name": "d3_collapse"
                                    },
                                    "arguments": [
                                      {
                                        "type": "BinaryExpression",
                                        "operator": "+",
                                        "left": {
                                          "type": "BinaryExpression",
                                          "operator": "+",
                                          "left": {
                                            "type": "Identifier",
                                            "name": "c"
                                          },
                                          "right": {
                                            "type": "Literal",
                                            "value": " ",
                                            "raw": "\" \""
                                          }
                                        },
                                        "right": {
                                          "type": "Identifier",
                                          "name": "name"
                                        }
                                      }
                                    ]
                                  }
                                ]
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
                                  "name": "node"
                                },
                                "property": {
                                  "type": "Identifier",
                                  "name": "setAttribute"
                                }
                              },
                              "arguments": [
                                {
                                  "type": "Literal",
                                  "value": "class",
                                  "raw": "\"class\""
                                },
                                {
                                  "type": "CallExpression",
                                  "callee": {
                                    "type": "Identifier",
                                    "name": "d3_collapse"
                                  },
                                  "arguments": [
                                    {
                                      "type": "CallExpression",
                                      "callee": {
                                        "type": "MemberExpression",
                                        "computed": false,
                                        "object": {
                                          "type": "Identifier",
                                          "name": "c"
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "name": "replace"
                                        }
                                      },
                                      "arguments": [
                                        {
                                          "type": "Identifier",
                                          "name": "re"
                                        },
                                        {
                                          "type": "Literal",
                                          "value": " ",
                                          "raw": "\" \""
                                        }
                                      ]
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
  "src": "d3_selectionPrototype.classed = function (name, value) {\n    if (arguments.length < 2) {\n        if (typeof name === 'string') {\n            var node = this.node(), n = (name = d3_selection_classes(name)).length, i = -1;\n            if (value = node.classList) {\n                while (++i < n)\n                    if (!value.contains(name[i]))\n                        return false;\n            } else {\n                value = node.getAttribute('class');\n                while (++i < n)\n                    if (!d3_selection_classedRe(name[i]).test(value))\n                        return false;\n            }\n            return true;\n        }\n        for (value in name)\n            this.each(d3_selection_classed(value, name[value]));\n        return this;\n    }\n    return this.each(d3_selection_classed(name, value));\n};\nfunction d3_selection_classedRe(name) {\n    return new RegExp('(?:^|\\\\s+)' + d3.requote(name) + '(?:\\\\s+|$)', 'g');\n}\nfunction d3_selection_classes(name) {\n    return (name + '').trim().split(/^|\\s+/);\n}\nfunction d3_selection_classed(name, value) {\n    name = d3_selection_classes(name).map(d3_selection_classedName);\n    var n = name.length;\n    function classedConstant() {\n        var i = -1;\n        while (++i < n)\n            name[i](this, value);\n    }\n    function classedFunction() {\n        var i = -1, x = value.apply(this, arguments);\n        while (++i < n)\n            name[i](this, x);\n    }\n    return typeof value === 'function' ? classedFunction : classedConstant;\n}\nfunction d3_selection_classedName(name) {\n    var re = d3_selection_classedRe(name);\n    return function (node, value) {\n        if (c = node.classList)\n            return value ? c.add(name) : c.remove(name);\n        var c = node.getAttribute('class') || '';\n        if (value) {\n            re.lastIndex = 0;\n            if (!re.test(c))\n                node.setAttribute('class', d3_collapse(c + ' ' + name));\n        } else {\n            node.setAttribute('class', d3_collapse(c.replace(re, ' ')));\n        }\n    };\n}"
}