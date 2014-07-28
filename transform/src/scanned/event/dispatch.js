{
  "filepath": "/event/dispatch.js",
  "shared": [],
  "dependencies": [
    "d3_Map"
  ],
  "helpers": [
    "d3_dispatch",
    "d3_dispatch_event"
  ],
  "exports": [
    "d3.dispatch"
  ],
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
              "name": "d3"
            },
            "property": {
              "type": "Identifier",
              "name": "dispatch"
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
                  "type": "VariableDeclaration",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "name": "dispatch"
                      },
                      "init": {
                        "type": "NewExpression",
                        "callee": {
                          "type": "Identifier",
                          "name": "d3_dispatch"
                        },
                        "arguments": []
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
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "computed": true,
                        "object": {
                          "type": "Identifier",
                          "name": "dispatch"
                        },
                        "property": {
                          "type": "MemberExpression",
                          "computed": true,
                          "object": {
                            "type": "Identifier",
                            "name": "arguments"
                          },
                          "property": {
                            "type": "Identifier",
                            "name": "i"
                          }
                        }
                      },
                      "right": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "Identifier",
                          "name": "d3_dispatch_event"
                        },
                        "arguments": [
                          {
                            "type": "Identifier",
                            "name": "dispatch"
                          }
                        ]
                      }
                    }
                  }
                },
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Identifier",
                    "name": "dispatch"
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
          "name": "d3_dispatch"
        },
        "params": [],
        "defaults": [],
        "body": {
          "type": "BlockStatement",
          "body": []
        },
        "rest": null,
        "generator": false,
        "expression": false
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
                "name": "d3_dispatch"
              },
              "property": {
                "type": "Identifier",
                "name": "prototype"
              }
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
                        "name": "name"
                      },
                      "init": {
                        "type": "Literal",
                        "value": "",
                        "raw": "\"\""
                      }
                    }
                  ],
                  "kind": "var"
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
                      "type": "Literal",
                      "value": 0,
                      "raw": "0"
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
                            "name": "name"
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
                            ]
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
                      }
                    ]
                  },
                  "alternate": null
                },
                {
                  "type": "IfStatement",
                  "test": {
                    "type": "Identifier",
                    "name": "type"
                  },
                  "consequent": {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "ConditionalExpression",
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
                              "name": "type"
                            }
                          },
                          "property": {
                            "type": "Identifier",
                            "name": "on"
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
                            "type": "MemberExpression",
                            "computed": true,
                            "object": {
                              "type": "ThisExpression"
                            },
                            "property": {
                              "type": "Identifier",
                              "name": "type"
                            }
                          },
                          "property": {
                            "type": "Identifier",
                            "name": "on"
                          }
                        },
                        "arguments": [
                          {
                            "type": "Identifier",
                            "name": "name"
                          },
                          {
                            "type": "Identifier",
                            "name": "listener"
                          }
                        ]
                      }
                    }
                  },
                  "alternate": null
                },
                {
                  "type": "IfStatement",
                  "test": {
                    "type": "BinaryExpression",
                    "operator": "===",
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
                          "operator": "==",
                          "left": {
                            "type": "Identifier",
                            "name": "listener"
                          },
                          "right": {
                            "type": "Literal",
                            "value": null,
                            "raw": "null"
                          }
                        },
                        "consequent": {
                          "type": "ForInStatement",
                          "left": {
                            "type": "Identifier",
                            "name": "type"
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
                                  "type": "CallExpression",
                                  "callee": {
                                    "type": "MemberExpression",
                                    "computed": false,
                                    "object": {
                                      "type": "ThisExpression"
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "name": "hasOwnProperty"
                                    }
                                  },
                                  "arguments": [
                                    {
                                      "type": "Identifier",
                                      "name": "type"
                                    }
                                  ]
                                },
                                "consequent": {
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
                                          "name": "type"
                                        }
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "name": "on"
                                      }
                                    },
                                    "arguments": [
                                      {
                                        "type": "Identifier",
                                        "name": "name"
                                      },
                                      {
                                        "type": "Literal",
                                        "value": null,
                                        "raw": "null"
                                      }
                                    ]
                                  }
                                },
                                "alternate": null
                              }
                            ]
                          },
                          "each": false
                        },
                        "alternate": null
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
          "name": "d3_dispatch_event"
        },
        "params": [
          {
            "type": "Identifier",
            "name": "dispatch"
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
                    "name": "listeners"
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
                    "name": "listenerByName"
                  },
                  "init": {
                    "type": "NewExpression",
                    "callee": {
                      "type": "Identifier",
                      "name": "d3_Map"
                    },
                    "arguments": []
                  }
                }
              ],
              "kind": "var"
            },
            {
              "type": "FunctionDeclaration",
              "id": {
                "type": "Identifier",
                "name": "event"
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
                          "name": "z"
                        },
                        "init": {
                          "type": "Identifier",
                          "name": "listeners"
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
                            "name": "z"
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
                          "name": "l"
                        },
                        "init": null
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
                      "type": "IfStatement",
                      "test": {
                        "type": "AssignmentExpression",
                        "operator": "=",
                        "left": {
                          "type": "Identifier",
                          "name": "l"
                        },
                        "right": {
                          "type": "MemberExpression",
                          "computed": false,
                          "object": {
                            "type": "MemberExpression",
                            "computed": true,
                            "object": {
                              "type": "Identifier",
                              "name": "z"
                            },
                            "property": {
                              "type": "Identifier",
                              "name": "i"
                            }
                          },
                          "property": {
                            "type": "Identifier",
                            "name": "on"
                          }
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
                              "name": "l"
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
                      },
                      "alternate": null
                    }
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Identifier",
                      "name": "dispatch"
                    }
                  }
                ]
              },
              "rest": null,
              "generator": false,
              "expression": false
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
                    "name": "event"
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
                      "name": "name"
                    },
                    {
                      "type": "Identifier",
                      "name": "listener"
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
                                "type": "MemberExpression",
                                "computed": false,
                                "object": {
                                  "type": "Identifier",
                                  "name": "listenerByName"
                                },
                                "property": {
                                  "type": "Identifier",
                                  "name": "get"
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
                          {
                            "type": "VariableDeclarator",
                            "id": {
                              "type": "Identifier",
                              "name": "i"
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
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "LogicalExpression",
                            "operator": "&&",
                            "left": {
                              "type": "Identifier",
                              "name": "l"
                            },
                            "right": {
                              "type": "MemberExpression",
                              "computed": false,
                              "object": {
                                "type": "Identifier",
                                "name": "l"
                              },
                              "property": {
                                "type": "Identifier",
                                "name": "on"
                              }
                            }
                          }
                        },
                        "alternate": null
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
                                    "name": "on"
                                  }
                                },
                                "right": {
                                  "type": "Literal",
                                  "value": null,
                                  "raw": "null"
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
                                  "name": "listeners"
                                },
                                "right": {
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
                                          "type": "Identifier",
                                          "name": "listeners"
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "name": "slice"
                                        }
                                      },
                                      "arguments": [
                                        {
                                          "type": "Literal",
                                          "value": 0,
                                          "raw": "0"
                                        },
                                        {
                                          "type": "AssignmentExpression",
                                          "operator": "=",
                                          "left": {
                                            "type": "Identifier",
                                            "name": "i"
                                          },
                                          "right": {
                                            "type": "CallExpression",
                                            "callee": {
                                              "type": "MemberExpression",
                                              "computed": false,
                                              "object": {
                                                "type": "Identifier",
                                                "name": "listeners"
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "name": "indexOf"
                                              }
                                            },
                                            "arguments": [
                                              {
                                                "type": "Identifier",
                                                "name": "l"
                                              }
                                            ]
                                          }
                                        }
                                      ]
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "name": "concat"
                                    }
                                  },
                                  "arguments": [
                                    {
                                      "type": "CallExpression",
                                      "callee": {
                                        "type": "MemberExpression",
                                        "computed": false,
                                        "object": {
                                          "type": "Identifier",
                                          "name": "listeners"
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "name": "slice"
                                        }
                                      },
                                      "arguments": [
                                        {
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
                                      ]
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
                                    "name": "listenerByName"
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
                          ]
                        },
                        "alternate": null
                      },
                      {
                        "type": "IfStatement",
                        "test": {
                          "type": "Identifier",
                          "name": "listener"
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
                                "name": "listeners"
                              },
                              "property": {
                                "type": "Identifier",
                                "name": "push"
                              }
                            },
                            "arguments": [
                              {
                                "type": "CallExpression",
                                "callee": {
                                  "type": "MemberExpression",
                                  "computed": false,
                                  "object": {
                                    "type": "Identifier",
                                    "name": "listenerByName"
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "name": "set"
                                  }
                                },
                                "arguments": [
                                  {
                                    "type": "Identifier",
                                    "name": "name"
                                  },
                                  {
                                    "type": "ObjectExpression",
                                    "properties": [
                                      {
                                        "type": "Property",
                                        "key": {
                                          "type": "Identifier",
                                          "name": "on"
                                        },
                                        "value": {
                                          "type": "Identifier",
                                          "name": "listener"
                                        },
                                        "kind": "init"
                                      }
                                    ]
                                  }
                                ]
                              }
                            ]
                          }
                        },
                        "alternate": null
                      },
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "Identifier",
                          "name": "dispatch"
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
                "name": "event"
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
  "src": "d3.dispatch = function () {\n    var dispatch = new d3_dispatch(), i = -1, n = arguments.length;\n    while (++i < n)\n        dispatch[arguments[i]] = d3_dispatch_event(dispatch);\n    return dispatch;\n};\nfunction d3_dispatch() {\n}\nd3_dispatch.prototype.on = function (type, listener) {\n    var i = type.indexOf('.'), name = '';\n    if (i >= 0) {\n        name = type.substring(i + 1);\n        type = type.substring(0, i);\n    }\n    if (type)\n        return arguments.length < 2 ? this[type].on(name) : this[type].on(name, listener);\n    if (arguments.length === 2) {\n        if (listener == null)\n            for (type in this) {\n                if (this.hasOwnProperty(type))\n                    this[type].on(name, null);\n            }\n        return this;\n    }\n};\nfunction d3_dispatch_event(dispatch) {\n    var listeners = [], listenerByName = new d3_Map();\n    function event() {\n        var z = listeners, i = -1, n = z.length, l;\n        while (++i < n)\n            if (l = z[i].on)\n                l.apply(this, arguments);\n        return dispatch;\n    }\n    event.on = function (name, listener) {\n        var l = listenerByName.get(name), i;\n        if (arguments.length < 2)\n            return l && l.on;\n        if (l) {\n            l.on = null;\n            listeners = listeners.slice(0, i = listeners.indexOf(l)).concat(listeners.slice(i + 1));\n            listenerByName.remove(name);\n        }\n        if (listener)\n            listeners.push(listenerByName.set(name, { on: listener }));\n        return dispatch;\n    };\n    return event;\n}"
}