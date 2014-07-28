{
  "filepath": "/event/timer.js",
  "shared": [],
  "dependencies": [
    "d3_window",
    "d3_vendorSymbol"
  ],
  "helpers": [
    "d3_timer_queueHead",
    "d3_timer_queueTail",
    "d3_timer_interval",
    "d3_timer_timeout",
    "d3_timer_active",
    "d3_timer_frame",
    "d3_timer_step",
    "d3_timer_mark",
    "d3_timer_sweep"
  ],
  "exports": [
    "d3.timer",
    "d3.timer.flush"
  ],
  "ast": {
    "type": "Program",
    "body": [
      {
        "type": "VariableDeclaration",
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "name": "d3_timer_queueHead"
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
              "name": "d3_timer_queueTail"
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
              "name": "d3_timer_interval"
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
              "name": "d3_timer_timeout"
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
              "name": "d3_timer_active"
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
              "name": "d3_timer_frame"
            },
            "init": {
              "type": "LogicalExpression",
              "operator": "||",
              "left": {
                "type": "MemberExpression",
                "computed": true,
                "object": {
                  "type": "Identifier",
                  "name": "d3_window"
                },
                "property": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "name": "d3_vendorSymbol"
                  },
                  "arguments": [
                    {
                      "type": "Identifier",
                      "name": "d3_window"
                    },
                    {
                      "type": "Literal",
                      "value": "requestAnimationFrame",
                      "raw": "\"requestAnimationFrame\""
                    }
                  ]
                }
              },
              "right": {
                "type": "FunctionExpression",
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "name": "callback"
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
                          "name": "setTimeout"
                        },
                        "arguments": [
                          {
                            "type": "Identifier",
                            "name": "callback"
                          },
                          {
                            "type": "Literal",
                            "value": 17,
                            "raw": "17"
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
      {
        "type": "VariableDeclaration",
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "MemberExpression",
              "computed": true,
              "object": {
                "type": "Identifier",
                "name": "d3_window"
              },
              "property": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "name": "d3_vendorSymbol"
                },
                "arguments": [
                  {
                    "type": "Identifier",
                    "name": "d3_window"
                  },
                  {
                    "type": "Literal",
                    "value": "requestAnimationFrame",
                    "raw": "\"requestAnimationFrame\""
                  }
                ]
              }
            },
            "init": {
              "type": "FunctionExpression",
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "name": "callback"
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
                        "name": "setTimeout"
                      },
                      "arguments": [
                        {
                          "type": "Identifier",
                          "name": "callback"
                        },
                        {
                          "type": "Literal",
                          "value": 17,
                          "raw": "17"
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
              "name": "timer"
            }
          },
          "right": {
            "type": "FunctionExpression",
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "name": "callback"
              },
              {
                "type": "Identifier",
                "name": "delay"
              },
              {
                "type": "Identifier",
                "name": "then"
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
                        "name": "delay"
                      },
                      "right": {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0"
                      }
                    }
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
                      "value": 3,
                      "raw": "3"
                    }
                  },
                  "consequent": {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "name": "then"
                      },
                      "right": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "MemberExpression",
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "name": "Date"
                          },
                          "property": {
                            "type": "Identifier",
                            "name": "now"
                          }
                        },
                        "arguments": []
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
                        "name": "time"
                      },
                      "init": {
                        "type": "BinaryExpression",
                        "operator": "+",
                        "left": {
                          "type": "Identifier",
                          "name": "then"
                        },
                        "right": {
                          "type": "Identifier",
                          "name": "delay"
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
                        "type": "ObjectExpression",
                        "properties": [
                          {
                            "type": "Property",
                            "key": {
                              "type": "Identifier",
                              "name": "c"
                            },
                            "value": {
                              "type": "Identifier",
                              "name": "callback"
                            },
                            "kind": "init"
                          },
                          {
                            "type": "Property",
                            "key": {
                              "type": "Identifier",
                              "name": "t"
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
                              "name": "f"
                            },
                            "value": {
                              "type": "Literal",
                              "value": false,
                              "raw": "false"
                            },
                            "kind": "init"
                          },
                          {
                            "type": "Property",
                            "key": {
                              "type": "Identifier",
                              "name": "n"
                            },
                            "value": {
                              "type": "Literal",
                              "value": null,
                              "raw": "null"
                            },
                            "kind": "init"
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
                    "name": "d3_timer_queueTail"
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
                          "name": "d3_timer_queueTail"
                        },
                        "property": {
                          "type": "Identifier",
                          "name": "n"
                        }
                      },
                      "right": {
                        "type": "Identifier",
                        "name": "timer"
                      }
                    }
                  },
                  "alternate": {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "name": "d3_timer_queueHead"
                      },
                      "right": {
                        "type": "Identifier",
                        "name": "timer"
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
                      "name": "d3_timer_queueTail"
                    },
                    "right": {
                      "type": "Identifier",
                      "name": "timer"
                    }
                  }
                },
                {
                  "type": "IfStatement",
                  "test": {
                    "type": "UnaryExpression",
                    "operator": "!",
                    "argument": {
                      "type": "Identifier",
                      "name": "d3_timer_interval"
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
                            "name": "d3_timer_timeout"
                          },
                          "right": {
                            "type": "CallExpression",
                            "callee": {
                              "type": "Identifier",
                              "name": "clearTimeout"
                            },
                            "arguments": [
                              {
                                "type": "Identifier",
                                "name": "d3_timer_timeout"
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
                            "name": "d3_timer_interval"
                          },
                          "right": {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1"
                          }
                        }
                      },
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "Identifier",
                            "name": "d3_timer_frame"
                          },
                          "arguments": [
                            {
                              "type": "Identifier",
                              "name": "d3_timer_step"
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
      },
      {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "name": "d3_timer_step"
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
                    "name": "now"
                  },
                  "init": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "name": "d3_timer_mark"
                    },
                    "arguments": []
                  }
                },
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "name": "delay"
                  },
                  "init": {
                    "type": "BinaryExpression",
                    "operator": "-",
                    "left": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "name": "d3_timer_sweep"
                      },
                      "arguments": []
                    },
                    "right": {
                      "type": "Identifier",
                      "name": "now"
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
                "operator": ">",
                "left": {
                  "type": "Identifier",
                  "name": "delay"
                },
                "right": {
                  "type": "Literal",
                  "value": 24,
                  "raw": "24"
                }
              },
              "consequent": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "IfStatement",
                    "test": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "name": "isFinite"
                      },
                      "arguments": [
                        {
                          "type": "Identifier",
                          "name": "delay"
                        }
                      ]
                    },
                    "consequent": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "CallExpression",
                            "callee": {
                              "type": "Identifier",
                              "name": "clearTimeout"
                            },
                            "arguments": [
                              {
                                "type": "Identifier",
                                "name": "d3_timer_timeout"
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
                              "type": "Identifier",
                              "name": "d3_timer_timeout"
                            },
                            "right": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "Identifier",
                                "name": "setTimeout"
                              },
                              "arguments": [
                                {
                                  "type": "Identifier",
                                  "name": "d3_timer_step"
                                },
                                {
                                  "type": "Identifier",
                                  "name": "delay"
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
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "name": "d3_timer_interval"
                      },
                      "right": {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0"
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
                        "type": "Identifier",
                        "name": "d3_timer_interval"
                      },
                      "right": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1"
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "name": "d3_timer_frame"
                      },
                      "arguments": [
                        {
                          "type": "Identifier",
                          "name": "d3_timer_step"
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
                "name": "timer"
              }
            },
            "property": {
              "type": "Identifier",
              "name": "flush"
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
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "name": "d3_timer_mark"
                    },
                    "arguments": []
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "name": "d3_timer_sweep"
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
          "name": "d3_timer_mark"
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
                    "name": "now"
                  },
                  "init": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "name": "Date"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "now"
                      }
                    },
                    "arguments": []
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
                  "name": "d3_timer_active"
                },
                "right": {
                  "type": "Identifier",
                  "name": "d3_timer_queueHead"
                }
              }
            },
            {
              "type": "WhileStatement",
              "test": {
                "type": "Identifier",
                "name": "d3_timer_active"
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "IfStatement",
                    "test": {
                      "type": "BinaryExpression",
                      "operator": ">=",
                      "left": {
                        "type": "Identifier",
                        "name": "now"
                      },
                      "right": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "name": "d3_timer_active"
                        },
                        "property": {
                          "type": "Identifier",
                          "name": "t"
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
                            "name": "d3_timer_active"
                          },
                          "property": {
                            "type": "Identifier",
                            "name": "f"
                          }
                        },
                        "right": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "name": "d3_timer_active"
                            },
                            "property": {
                              "type": "Identifier",
                              "name": "c"
                            }
                          },
                          "arguments": [
                            {
                              "type": "BinaryExpression",
                              "operator": "-",
                              "left": {
                                "type": "Identifier",
                                "name": "now"
                              },
                              "right": {
                                "type": "MemberExpression",
                                "computed": false,
                                "object": {
                                  "type": "Identifier",
                                  "name": "d3_timer_active"
                                },
                                "property": {
                                  "type": "Identifier",
                                  "name": "t"
                                }
                              }
                            }
                          ]
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
                        "name": "d3_timer_active"
                      },
                      "right": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "name": "d3_timer_active"
                        },
                        "property": {
                          "type": "Identifier",
                          "name": "n"
                        }
                      }
                    }
                  }
                ]
              }
            },
            {
              "type": "ReturnStatement",
              "argument": {
                "type": "Identifier",
                "name": "now"
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
          "name": "d3_timer_sweep"
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
                    "name": "t0"
                  },
                  "init": null
                },
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "name": "t1"
                  },
                  "init": {
                    "type": "Identifier",
                    "name": "d3_timer_queueHead"
                  }
                },
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "name": "time"
                  },
                  "init": {
                    "type": "Identifier",
                    "name": "Infinity"
                  }
                }
              ],
              "kind": "var"
            },
            {
              "type": "WhileStatement",
              "test": {
                "type": "Identifier",
                "name": "t1"
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "IfStatement",
                    "test": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "name": "t1"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "f"
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
                              "name": "t1"
                            },
                            "right": {
                              "type": "ConditionalExpression",
                              "test": {
                                "type": "Identifier",
                                "name": "t0"
                              },
                              "consequent": {
                                "type": "AssignmentExpression",
                                "operator": "=",
                                "left": {
                                  "type": "MemberExpression",
                                  "computed": false,
                                  "object": {
                                    "type": "Identifier",
                                    "name": "t0"
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "name": "n"
                                  }
                                },
                                "right": {
                                  "type": "MemberExpression",
                                  "computed": false,
                                  "object": {
                                    "type": "Identifier",
                                    "name": "t1"
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "name": "n"
                                  }
                                }
                              },
                              "alternate": {
                                "type": "AssignmentExpression",
                                "operator": "=",
                                "left": {
                                  "type": "Identifier",
                                  "name": "d3_timer_queueHead"
                                },
                                "right": {
                                  "type": "MemberExpression",
                                  "computed": false,
                                  "object": {
                                    "type": "Identifier",
                                    "name": "t1"
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "name": "n"
                                  }
                                }
                              }
                            }
                          }
                        }
                      ]
                    },
                    "alternate": {
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
                                "name": "t1"
                              },
                              "property": {
                                "type": "Identifier",
                                "name": "t"
                              }
                            },
                            "right": {
                              "type": "Identifier",
                              "name": "time"
                            }
                          },
                          "consequent": {
                            "type": "ExpressionStatement",
                            "expression": {
                              "type": "AssignmentExpression",
                              "operator": "=",
                              "left": {
                                "type": "Identifier",
                                "name": "time"
                              },
                              "right": {
                                "type": "MemberExpression",
                                "computed": false,
                                "object": {
                                  "type": "Identifier",
                                  "name": "t1"
                                },
                                "property": {
                                  "type": "Identifier",
                                  "name": "t"
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
                              "name": "t1"
                            },
                            "right": {
                              "type": "MemberExpression",
                              "computed": false,
                              "object": {
                                "type": "AssignmentExpression",
                                "operator": "=",
                                "left": {
                                  "type": "Identifier",
                                  "name": "t0"
                                },
                                "right": {
                                  "type": "Identifier",
                                  "name": "t1"
                                }
                              },
                              "property": {
                                "type": "Identifier",
                                "name": "n"
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
                  "type": "Identifier",
                  "name": "d3_timer_queueTail"
                },
                "right": {
                  "type": "Identifier",
                  "name": "t0"
                }
              }
            },
            {
              "type": "ReturnStatement",
              "argument": {
                "type": "Identifier",
                "name": "time"
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
  "src": "var d3_timer_queueHead;\nvar d3_timer_queueTail;\nvar d3_timer_interval;\nvar d3_timer_timeout;\nvar d3_timer_active;\nvar d3_timer_frame = d3_window[d3_vendorSymbol(d3_window, 'requestAnimationFrame')] || function (callback) {\n        setTimeout(callback, 17);\n    };\nvar d3_window[d3_vendorSymbol(d3_window, 'requestAnimationFrame')] = function (callback) {\n    setTimeout(callback, 17);\n};\nd3.timer = function (callback, delay, then) {\n    var n = arguments.length;\n    if (n < 2)\n        delay = 0;\n    if (n < 3)\n        then = Date.now();\n    var time = then + delay, timer = {\n            c: callback,\n            t: time,\n            f: false,\n            n: null\n        };\n    if (d3_timer_queueTail)\n        d3_timer_queueTail.n = timer;\n    else\n        d3_timer_queueHead = timer;\n    d3_timer_queueTail = timer;\n    if (!d3_timer_interval) {\n        d3_timer_timeout = clearTimeout(d3_timer_timeout);\n        d3_timer_interval = 1;\n        d3_timer_frame(d3_timer_step);\n    }\n};\nfunction d3_timer_step() {\n    var now = d3_timer_mark(), delay = d3_timer_sweep() - now;\n    if (delay > 24) {\n        if (isFinite(delay)) {\n            clearTimeout(d3_timer_timeout);\n            d3_timer_timeout = setTimeout(d3_timer_step, delay);\n        }\n        d3_timer_interval = 0;\n    } else {\n        d3_timer_interval = 1;\n        d3_timer_frame(d3_timer_step);\n    }\n}\nd3.timer.flush = function () {\n    d3_timer_mark();\n    d3_timer_sweep();\n};\nfunction d3_timer_mark() {\n    var now = Date.now();\n    d3_timer_active = d3_timer_queueHead;\n    while (d3_timer_active) {\n        if (now >= d3_timer_active.t)\n            d3_timer_active.f = d3_timer_active.c(now - d3_timer_active.t);\n        d3_timer_active = d3_timer_active.n;\n    }\n    return now;\n}\nfunction d3_timer_sweep() {\n    var t0, t1 = d3_timer_queueHead, time = Infinity;\n    while (t1) {\n        if (t1.f) {\n            t1 = t0 ? t0.n = t1.n : d3_timer_queueHead = t1.n;\n        } else {\n            if (t1.t < time)\n                time = t1.t;\n            t1 = (t0 = t1).n;\n        }\n    }\n    d3_timer_queueTail = t0;\n    return time;\n}"
}