{
  "filepath": "/selection/on.js",
  "shared": [
    {
      "path": "/_global.js",
      "properties": [
        "d3_array",
        "d3_date",
        "d3.event"
      ],
      "name": "GLOBAL"
    }
  ],
  "dependencies": [
    "d3_selectionPrototype",
    "d3_array",
    "d3.requote",
    "d3_noop",
    "d3.map",
    "d3_document"
  ],
  "helpers": [
    "d3_selection_on",
    "d3_selection_onFilters",
    "d3_selection_onListener",
    "d3_selection_onFilter"
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
              "name": "on"
            }
          },
          "right": {
            "type": "FunctionExpression",
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "name": "type"
              },
              {
                "type": "Identifier",
                "name": "listener"
              },
              {
                "type": "Identifier",
                "name": "capture"
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
                        "name": "n"
                      },
                      "init": {
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
                      "type": "Identifier",
                      "name": "n"
                    },
                    "right": {
                      "type": "Literal",
                      "value": 3,
                      "raw": "3"
                    }
                  },
                  "consequent": {
                    "type": "BlockStatement",
                    "body": [
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
                              "name": "type"
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
                              "type": "IfStatement",
                              "test": {
                                "type": "BinaryExpression",
                                "operator": "<",
                                "left": {
                                  "type": "Identifier",
                                  "name": "n"
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
                                    "name": "listener"
                                  },
                                  "right": {
                                    "type": "Literal",
                                    "value": false,
                                    "raw": "false"
                                  }
                                }
                              },
                              "alternate": null
                            },
                            {
                              "type": "ForInStatement",
                              "left": {
                                "type": "Identifier",
                                "name": "capture"
                              },
                              "right": {
                                "type": "Identifier",
                                "name": "type"
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
                                        "name": "d3_selection_on"
                                      },
                                      "arguments": [
                                        {
                                          "type": "Identifier",
                                          "name": "capture"
                                        },
                                        {
                                          "type": "MemberExpression",
                                          "computed": true,
                                          "object": {
                                            "type": "Identifier",
                                            "name": "type"
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "name": "capture"
                                          }
                                        },
                                        {
                                          "type": "Identifier",
                                          "name": "listener"
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
                        "type": "IfStatement",
                        "test": {
                          "type": "BinaryExpression",
                          "operator": "<",
                          "left": {
                            "type": "Identifier",
                            "name": "n"
                          },
                          "right": {
                            "type": "Literal",
                            "value": 2,
                            "raw": "2"
                          }
                        },
                        "consequent": {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "LogicalExpression",
                            "operator": "&&",
                            "left": {
                              "type": "AssignmentExpression",
                              "operator": "=",
                              "left": {
                                "type": "Identifier",
                                "name": "n"
                              },
                              "right": {
                                "type": "MemberExpression",
                                "computed": true,
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
                                  "type": "BinaryExpression",
                                  "operator": "+",
                                  "left": {
                                    "type": "Literal",
                                    "value": "__on",
                                    "raw": "\"__on\""
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "name": "type"
                                  }
                                }
                              }
                            },
                            "right": {
                              "type": "MemberExpression",
                              "computed": false,
                              "object": {
                                "type": "Identifier",
                                "name": "n"
                              },
                              "property": {
                                "type": "Identifier",
                                "name": "_"
                              }
                            }
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
                            "type": "Identifier",
                            "name": "capture"
                          },
                          "right": {
                            "type": "Literal",
                            "value": false,
                            "raw": "false"
                          }
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
                          "name": "d3_selection_on"
                        },
                        "arguments": [
                          {
                            "type": "Identifier",
                            "name": "type"
                          },
                          {
                            "type": "Identifier",
                            "name": "listener"
                          },
                          {
                            "type": "Identifier",
                            "name": "capture"
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
          "name": "d3_selection_on"
        },
        "params": [
          {
            "type": "Identifier",
            "name": "type"
          },
          {
            "type": "Identifier",
            "name": "listener"
          },
          {
            "type": "Identifier",
            "name": "capture"
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
                    "name": "name"
                  },
                  "init": {
                    "type": "BinaryExpression",
                    "operator": "+",
                    "left": {
                      "type": "Literal",
                      "value": "__on",
                      "raw": "\"__on\""
                    },
                    "right": {
                      "type": "Identifier",
                      "name": "type"
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
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "name": "type"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "indexOf"
                      }
                    },
                    "arguments": [
                      {
                        "type": "Literal",
                        "value": ".",
                        "raw": "\".\""
                      }
                    ]
                  }
                },
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "name": "wrap"
                  },
                  "init": {
                    "type": "Identifier",
                    "name": "d3_selection_onListener"
                  }
                }
              ],
              "kind": "var"
            },
            {
              "type": "IfStatement",
              "test": {
                "type": "BinaryExpression",
                "operator": ">",
                "left": {
                  "type": "Identifier",
                  "name": "i"
                },
                "right": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0"
                }
              },
              "consequent": {
                "type": "ExpressionStatement",
                "expression": {
                  "type": "AssignmentExpression",
                  "operator": "=",
                  "left": {
                    "type": "Identifier",
                    "name": "type"
                  },
                  "right": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "name": "type"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "substring"
                      }
                    },
                    "arguments": [
                      {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0"
                      },
                      {
                        "type": "Identifier",
                        "name": "i"
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
                    "name": "filter"
                  },
                  "init": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "name": "d3_selection_onFilters"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "get"
                      }
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "name": "type"
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
                "type": "Identifier",
                "name": "filter"
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
                        "name": "type"
                      },
                      "right": {
                        "type": "Identifier",
                        "name": "filter"
                      }
                    },
                    {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "name": "wrap"
                      },
                      "right": {
                        "type": "Identifier",
                        "name": "d3_selection_onFilter"
                      }
                    }
                  ]
                }
              },
              "alternate": null
            },
            {
              "type": "FunctionDeclaration",
              "id": {
                "type": "Identifier",
                "name": "onRemove"
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
                          "name": "l"
                        },
                        "init": {
                          "type": "MemberExpression",
                          "computed": true,
                          "object": {
                            "type": "ThisExpression"
                          },
                          "property": {
                            "type": "Identifier",
                            "name": "name"
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
                      "name": "l"
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
                                "type": "ThisExpression"
                              },
                              "property": {
                                "type": "Identifier",
                                "name": "removeEventListener"
                              }
                            },
                            "arguments": [
                              {
                                "type": "Identifier",
                                "name": "type"
                              },
                              {
                                "type": "Identifier",
                                "name": "l"
                              },
                              {
                                "type": "MemberExpression",
                                "computed": false,
                                "object": {
                                  "type": "Identifier",
                                  "name": "l"
                                },
                                "property": {
                                  "type": "Identifier",
                                  "name": "$"
                                }
                              }
                            ]
                          }
                        },
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "UnaryExpression",
                            "operator": "delete",
                            "argument": {
                              "type": "MemberExpression",
                              "computed": true,
                              "object": {
                                "type": "ThisExpression"
                              },
                              "property": {
                                "type": "Identifier",
                                "name": "name"
                              }
                            },
                            "prefix": true
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
                "name": "onAdd"
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
                          "name": "l"
                        },
                        "init": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "Identifier",
                            "name": "wrap"
                          },
                          "arguments": [
                            {
                              "type": "Identifier",
                              "name": "listener"
                            },
                            {
                              "type": "CallExpression",
                              "callee": {
                                "type": "Identifier",
                                "name": "d3_array"
                              },
                              "arguments": [
                                {
                                  "type": "Identifier",
                                  "name": "arguments"
                                }
                              ]
                            }
                          ]
                        }
                      }
                    ],
                    "kind": "var"
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
                          "name": "onRemove"
                        },
                        "property": {
                          "type": "Identifier",
                          "name": "call"
                        }
                      },
                      "arguments": [
                        {
                          "type": "ThisExpression"
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
                          "type": "ThisExpression"
                        },
                        "property": {
                          "type": "Identifier",
                          "name": "addEventListener"
                        }
                      },
                      "arguments": [
                        {
                          "type": "Identifier",
                          "name": "type"
                        },
                        {
                          "type": "AssignmentExpression",
                          "operator": "=",
                          "left": {
                            "type": "MemberExpression",
                            "computed": true,
                            "object": {
                              "type": "ThisExpression"
                            },
                            "property": {
                              "type": "Identifier",
                              "name": "name"
                            }
                          },
                          "right": {
                            "type": "Identifier",
                            "name": "l"
                          }
                        },
                        {
                          "type": "AssignmentExpression",
                          "operator": "=",
                          "left": {
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "name": "l"
                            },
                            "property": {
                              "type": "Identifier",
                              "name": "$"
                            }
                          },
                          "right": {
                            "type": "Identifier",
                            "name": "capture"
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
                          "name": "l"
                        },
                        "property": {
                          "type": "Identifier",
                          "name": "_"
                        }
                      },
                      "right": {
                        "type": "Identifier",
                        "name": "listener"
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
                "name": "removeAll"
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
                          "name": "re"
                        },
                        "init": {
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
                                  "value": "^__on([^.]+)",
                                  "raw": "\"^__on([^.]+)\""
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
                                      "name": "type"
                                    }
                                  ]
                                }
                              },
                              "right": {
                                "type": "Literal",
                                "value": "$",
                                "raw": "\"$\""
                              }
                            }
                          ]
                        }
                      },
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "name": "match"
                        },
                        "init": null
                      }
                    ],
                    "kind": "var"
                  },
                  {
                    "type": "ForInStatement",
                    "left": {
                      "type": "VariableDeclaration",
                      "declarations": [
                        {
                          "type": "VariableDeclarator",
                          "id": {
                            "type": "Identifier",
                            "name": "name"
                          },
                          "init": null
                        }
                      ],
                      "kind": "var"
                    },
                    "right": {
                      "type": "ThisExpression"
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
                              "name": "match"
                            },
                            "right": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "MemberExpression",
                                "computed": false,
                                "object": {
                                  "type": "Identifier",
                                  "name": "name"
                                },
                                "property": {
                                  "type": "Identifier",
                                  "name": "match"
                                }
                              },
                              "arguments": [
                                {
                                  "type": "Identifier",
                                  "name": "re"
                                }
                              ]
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
                                      "name": "l"
                                    },
                                    "init": {
                                      "type": "MemberExpression",
                                      "computed": true,
                                      "object": {
                                        "type": "ThisExpression"
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "name": "name"
                                      }
                                    }
                                  }
                                ],
                                "kind": "var"
                              },
                              {
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
                                      "name": "removeEventListener"
                                    }
                                  },
                                  "arguments": [
                                    {
                                      "type": "MemberExpression",
                                      "computed": true,
                                      "object": {
                                        "type": "Identifier",
                                        "name": "match"
                                      },
                                      "property": {
                                        "type": "Literal",
                                        "value": 1,
                                        "raw": "1"
                                      }
                                    },
                                    {
                                      "type": "Identifier",
                                      "name": "l"
                                    },
                                    {
                                      "type": "MemberExpression",
                                      "computed": false,
                                      "object": {
                                        "type": "Identifier",
                                        "name": "l"
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "name": "$"
                                      }
                                    }
                                  ]
                                }
                              },
                              {
                                "type": "ExpressionStatement",
                                "expression": {
                                  "type": "UnaryExpression",
                                  "operator": "delete",
                                  "argument": {
                                    "type": "MemberExpression",
                                    "computed": true,
                                    "object": {
                                      "type": "ThisExpression"
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "name": "name"
                                    }
                                  },
                                  "prefix": true
                                }
                              }
                            ]
                          },
                          "alternate": null
                        }
                      ]
                    },
                    "each": false
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
                  "type": "Identifier",
                  "name": "i"
                },
                "consequent": {
                  "type": "ConditionalExpression",
                  "test": {
                    "type": "Identifier",
                    "name": "listener"
                  },
                  "consequent": {
                    "type": "Identifier",
                    "name": "onAdd"
                  },
                  "alternate": {
                    "type": "Identifier",
                    "name": "onRemove"
                  }
                },
                "alternate": {
                  "type": "ConditionalExpression",
                  "test": {
                    "type": "Identifier",
                    "name": "listener"
                  },
                  "consequent": {
                    "type": "Identifier",
                    "name": "d3_noop"
                  },
                  "alternate": {
                    "type": "Identifier",
                    "name": "removeAll"
                  }
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
        "type": "VariableDeclaration",
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "name": "d3_selection_onFilters"
            },
            "init": {
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
                  "name": "map"
                }
              },
              "arguments": [
                {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "key": {
                        "type": "Identifier",
                        "name": "mouseenter"
                      },
                      "value": {
                        "type": "Literal",
                        "value": "mouseover",
                        "raw": "\"mouseover\""
                      },
                      "kind": "init"
                    },
                    {
                      "type": "Property",
                      "key": {
                        "type": "Identifier",
                        "name": "mouseleave"
                      },
                      "value": {
                        "type": "Literal",
                        "value": "mouseout",
                        "raw": "\"mouseout\""
                      },
                      "kind": "init"
                    }
                  ]
                }
              ]
            }
          }
        ]
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
              "name": "d3_selection_onFilters"
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
                  "name": "k"
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
                      "operator": "in",
                      "left": {
                        "type": "BinaryExpression",
                        "operator": "+",
                        "left": {
                          "type": "Literal",
                          "value": "on",
                          "raw": "\"on\""
                        },
                        "right": {
                          "type": "Identifier",
                          "name": "k"
                        }
                      },
                      "right": {
                        "type": "Identifier",
                        "name": "d3_document"
                      }
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
                            "name": "d3_selection_onFilters"
                          },
                          "property": {
                            "type": "Identifier",
                            "name": "remove"
                          }
                        },
                        "arguments": [
                          {
                            "type": "Identifier",
                            "name": "k"
                          }
                        ]
                      }
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
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "name": "d3_selection_onListener"
        },
        "params": [
          {
            "type": "Identifier",
            "name": "listener"
          },
          {
            "type": "Identifier",
            "name": "argumentz"
          }
        ],
        "defaults": [],
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "ReturnStatement",
              "argument": {
                "type": "FunctionExpression",
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "name": "e"
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
                            "name": "o"
                          },
                          "init": {
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "name": "d3"
                            },
                            "property": {
                              "type": "Identifier",
                              "name": "event"
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
                          "type": "MemberExpression",
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "name": "d3"
                          },
                          "property": {
                            "type": "Identifier",
                            "name": "event"
                          }
                        },
                        "right": {
                          "type": "Identifier",
                          "name": "e"
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
                            "name": "argumentz"
                          },
                          "property": {
                            "type": "Literal",
                            "value": 0,
                            "raw": "0"
                          }
                        },
                        "right": {
                          "type": "MemberExpression",
                          "computed": false,
                          "object": {
                            "type": "ThisExpression"
                          },
                          "property": {
                            "type": "Identifier",
                            "name": "__data__"
                          }
                        }
                      }
                    },
                    {
                      "type": "TryStatement",
                      "block": {
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
                                  "name": "listener"
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
                                  "name": "argumentz"
                                }
                              ]
                            }
                          }
                        ]
                      },
                      "guardedHandlers": [],
                      "handlers": [],
                      "finalizer": {
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
                                  "name": "d3"
                                },
                                "property": {
                                  "type": "Identifier",
                                  "name": "event"
                                }
                              },
                              "right": {
                                "type": "Identifier",
                                "name": "o"
                              }
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
      },
      {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "name": "d3_selection_onFilter"
        },
        "params": [
          {
            "type": "Identifier",
            "name": "listener"
          },
          {
            "type": "Identifier",
            "name": "argumentz"
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
                    "name": "l"
                  },
                  "init": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "name": "d3_selection_onListener"
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "name": "listener"
                      },
                      {
                        "type": "Identifier",
                        "name": "argumentz"
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
                    "name": "e"
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
                            "name": "target"
                          },
                          "init": {
                            "type": "ThisExpression"
                          }
                        },
                        {
                          "type": "VariableDeclarator",
                          "id": {
                            "type": "Identifier",
                            "name": "related"
                          },
                          "init": {
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "name": "e"
                            },
                            "property": {
                              "type": "Identifier",
                              "name": "relatedTarget"
                            }
                          }
                        }
                      ],
                      "kind": "var"
                    },
                    {
                      "type": "IfStatement",
                      "test": {
                        "type": "LogicalExpression",
                        "operator": "||",
                        "left": {
                          "type": "UnaryExpression",
                          "operator": "!",
                          "argument": {
                            "type": "Identifier",
                            "name": "related"
                          },
                          "prefix": true
                        },
                        "right": {
                          "type": "LogicalExpression",
                          "operator": "&&",
                          "left": {
                            "type": "BinaryExpression",
                            "operator": "!==",
                            "left": {
                              "type": "Identifier",
                              "name": "related"
                            },
                            "right": {
                              "type": "Identifier",
                              "name": "target"
                            }
                          },
                          "right": {
                            "type": "UnaryExpression",
                            "operator": "!",
                            "argument": {
                              "type": "BinaryExpression",
                              "operator": "&",
                              "left": {
                                "type": "CallExpression",
                                "callee": {
                                  "type": "MemberExpression",
                                  "computed": false,
                                  "object": {
                                    "type": "Identifier",
                                    "name": "related"
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "name": "compareDocumentPosition"
                                  }
                                },
                                "arguments": [
                                  {
                                    "type": "Identifier",
                                    "name": "target"
                                  }
                                ]
                              },
                              "right": {
                                "type": "Literal",
                                "value": 8,
                                "raw": "8"
                              }
                            },
                            "prefix": true
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
                                  "name": "l"
                                },
                                "property": {
                                  "type": "Identifier",
                                  "name": "call"
                                }
                              },
                              "arguments": [
                                {
                                  "type": "Identifier",
                                  "name": "target"
                                },
                                {
                                  "type": "Identifier",
                                  "name": "e"
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
            }
          ]
        },
        "rest": null,
        "generator": false,
        "expression": false
      }
    ]
  },
  "src": "d3_selectionPrototype.on = function (type, listener, capture) {\n    var n = arguments.length;\n    if (n < 3) {\n        if (typeof type !== 'string') {\n            if (n < 2)\n                listener = false;\n            for (capture in type)\n                this.each(d3_selection_on(capture, type[capture], listener));\n            return this;\n        }\n        if (n < 2)\n            return (n = this.node()['__on' + type]) && n._;\n        capture = false;\n    }\n    return this.each(d3_selection_on(type, listener, capture));\n};\nfunction d3_selection_on(type, listener, capture) {\n    var name = '__on' + type, i = type.indexOf('.'), wrap = d3_selection_onListener;\n    if (i > 0)\n        type = type.substring(0, i);\n    var filter = d3_selection_onFilters.get(type);\n    if (filter)\n        type = filter, wrap = d3_selection_onFilter;\n    function onRemove() {\n        var l = this[name];\n        if (l) {\n            this.removeEventListener(type, l, l.$);\n            delete this[name];\n        }\n    }\n    function onAdd() {\n        var l = wrap(listener, d3_array(arguments));\n        onRemove.call(this);\n        this.addEventListener(type, this[name] = l, l.$ = capture);\n        l._ = listener;\n    }\n    function removeAll() {\n        var re = new RegExp('^__on([^.]+)' + d3.requote(type) + '$'), match;\n        for (var name in this) {\n            if (match = name.match(re)) {\n                var l = this[name];\n                this.removeEventListener(match[1], l, l.$);\n                delete this[name];\n            }\n        }\n    }\n    return i ? listener ? onAdd : onRemove : listener ? d3_noop : removeAll;\n}\nvar d3_selection_onFilters = d3.map({\n        mouseenter: 'mouseover',\n        mouseleave: 'mouseout'\n    });\nd3_selection_onFilters.forEach(function (k) {\n    if ('on' + k in d3_document)\n        d3_selection_onFilters.remove(k);\n});\nfunction d3_selection_onListener(listener, argumentz) {\n    return function (e) {\n        var o = d3.event;\n        d3.event = e;\n        argumentz[0] = this.__data__;\n        try {\n            listener.apply(this, argumentz);\n        } finally {\n            d3.event = o;\n        }\n    };\n}\nfunction d3_selection_onFilter(listener, argumentz) {\n    var l = d3_selection_onListener(listener, argumentz);\n    return function (e) {\n        var target = this, related = e.relatedTarget;\n        if (!related || related !== target && !(related.compareDocumentPosition(target) & 8)) {\n            l.call(target, e);\n        }\n    };\n}"
}