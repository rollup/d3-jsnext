{
  "filepath": "/time/interval.js",
  "shared": [],
  "dependencies": [
    "d3_date",
    "d3_date_utc"
  ],
  "helpers": [
    "d3_time_interval",
    "d3_time_interval_utc"
  ],
  "exports": [],
  "ast": {
    "type": "Program",
    "body": [
      {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "name": "d3_time_interval"
        },
        "params": [
          {
            "type": "Identifier",
            "name": "local"
          },
          {
            "type": "Identifier",
            "name": "step"
          },
          {
            "type": "Identifier",
            "name": "number"
          }
        ],
        "defaults": [],
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "FunctionDeclaration",
              "id": {
                "type": "Identifier",
                "name": "round"
              },
              "params": [
                {
                  "type": "Identifier",
                  "name": "date"
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
                          "name": "d0"
                        },
                        "init": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "Identifier",
                            "name": "local"
                          },
                          "arguments": [
                            {
                              "type": "Identifier",
                              "name": "date"
                            }
                          ]
                        }
                      },
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "name": "d1"
                        },
                        "init": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "Identifier",
                            "name": "offset"
                          },
                          "arguments": [
                            {
                              "type": "Identifier",
                              "name": "d0"
                            },
                            {
                              "type": "Literal",
                              "value": 1,
                              "raw": "1"
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
                      "type": "ConditionalExpression",
                      "test": {
                        "type": "BinaryExpression",
                        "operator": "<",
                        "left": {
                          "type": "BinaryExpression",
                          "operator": "-",
                          "left": {
                            "type": "Identifier",
                            "name": "date"
                          },
                          "right": {
                            "type": "Identifier",
                            "name": "d0"
                          }
                        },
                        "right": {
                          "type": "BinaryExpression",
                          "operator": "-",
                          "left": {
                            "type": "Identifier",
                            "name": "d1"
                          },
                          "right": {
                            "type": "Identifier",
                            "name": "date"
                          }
                        }
                      },
                      "consequent": {
                        "type": "Identifier",
                        "name": "d0"
                      },
                      "alternate": {
                        "type": "Identifier",
                        "name": "d1"
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
                "name": "ceil"
              },
              "params": [
                {
                  "type": "Identifier",
                  "name": "date"
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
                        "name": "step"
                      },
                      "arguments": [
                        {
                          "type": "AssignmentExpression",
                          "operator": "=",
                          "left": {
                            "type": "Identifier",
                            "name": "date"
                          },
                          "right": {
                            "type": "CallExpression",
                            "callee": {
                              "type": "Identifier",
                              "name": "local"
                            },
                            "arguments": [
                              {
                                "type": "NewExpression",
                                "callee": {
                                  "type": "Identifier",
                                  "name": "d3_date"
                                },
                                "arguments": [
                                  {
                                    "type": "BinaryExpression",
                                    "operator": "-",
                                    "left": {
                                      "type": "Identifier",
                                      "name": "date"
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
                        },
                        {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1"
                        }
                      ]
                    }
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Identifier",
                      "name": "date"
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
                "name": "offset"
              },
              "params": [
                {
                  "type": "Identifier",
                  "name": "date"
                },
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
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "name": "step"
                      },
                      "arguments": [
                        {
                          "type": "AssignmentExpression",
                          "operator": "=",
                          "left": {
                            "type": "Identifier",
                            "name": "date"
                          },
                          "right": {
                            "type": "NewExpression",
                            "callee": {
                              "type": "Identifier",
                              "name": "d3_date"
                            },
                            "arguments": [
                              {
                                "type": "UnaryExpression",
                                "operator": "+",
                                "argument": {
                                  "type": "Identifier",
                                  "name": "date"
                                },
                                "prefix": true
                              }
                            ]
                          }
                        },
                        {
                          "type": "Identifier",
                          "name": "k"
                        }
                      ]
                    }
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Identifier",
                      "name": "date"
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
                "name": "range"
              },
              "params": [
                {
                  "type": "Identifier",
                  "name": "t0"
                },
                {
                  "type": "Identifier",
                  "name": "t1"
                },
                {
                  "type": "Identifier",
                  "name": "dt"
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
                          "name": "time"
                        },
                        "init": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "Identifier",
                            "name": "ceil"
                          },
                          "arguments": [
                            {
                              "type": "Identifier",
                              "name": "t0"
                            }
                          ]
                        }
                      },
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "name": "times"
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
                    "type": "IfStatement",
                    "test": {
                      "type": "BinaryExpression",
                      "operator": ">",
                      "left": {
                        "type": "Identifier",
                        "name": "dt"
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
                          "type": "WhileStatement",
                          "test": {
                            "type": "BinaryExpression",
                            "operator": "<",
                            "left": {
                              "type": "Identifier",
                              "name": "time"
                            },
                            "right": {
                              "type": "Identifier",
                              "name": "t1"
                            }
                          },
                          "body": {
                            "type": "BlockStatement",
                            "body": [
                              {
                                "type": "IfStatement",
                                "test": {
                                  "type": "UnaryExpression",
                                  "operator": "!",
                                  "argument": {
                                    "type": "BinaryExpression",
                                    "operator": "%",
                                    "left": {
                                      "type": "CallExpression",
                                      "callee": {
                                        "type": "Identifier",
                                        "name": "number"
                                      },
                                      "arguments": [
                                        {
                                          "type": "Identifier",
                                          "name": "time"
                                        }
                                      ]
                                    },
                                    "right": {
                                      "type": "Identifier",
                                      "name": "dt"
                                    }
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
                                        "name": "times"
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "name": "push"
                                      }
                                    },
                                    "arguments": [
                                      {
                                        "type": "NewExpression",
                                        "callee": {
                                          "type": "Identifier",
                                          "name": "Date"
                                        },
                                        "arguments": [
                                          {
                                            "type": "UnaryExpression",
                                            "operator": "+",
                                            "argument": {
                                              "type": "Identifier",
                                              "name": "time"
                                            },
                                            "prefix": true
                                          }
                                        ]
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
                                    "type": "Identifier",
                                    "name": "step"
                                  },
                                  "arguments": [
                                    {
                                      "type": "Identifier",
                                      "name": "time"
                                    },
                                    {
                                      "type": "Literal",
                                      "value": 1,
                                      "raw": "1"
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
                              "type": "Identifier",
                              "name": "time"
                            },
                            "right": {
                              "type": "Identifier",
                              "name": "t1"
                            }
                          },
                          "body": {
                            "type": "ExpressionStatement",
                            "expression": {
                              "type": "SequenceExpression",
                              "expressions": [
                                {
                                  "type": "CallExpression",
                                  "callee": {
                                    "type": "MemberExpression",
                                    "computed": false,
                                    "object": {
                                      "type": "Identifier",
                                      "name": "times"
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "name": "push"
                                    }
                                  },
                                  "arguments": [
                                    {
                                      "type": "NewExpression",
                                      "callee": {
                                        "type": "Identifier",
                                        "name": "Date"
                                      },
                                      "arguments": [
                                        {
                                          "type": "UnaryExpression",
                                          "operator": "+",
                                          "argument": {
                                            "type": "Identifier",
                                            "name": "time"
                                          },
                                          "prefix": true
                                        }
                                      ]
                                    }
                                  ]
                                },
                                {
                                  "type": "CallExpression",
                                  "callee": {
                                    "type": "Identifier",
                                    "name": "step"
                                  },
                                  "arguments": [
                                    {
                                      "type": "Identifier",
                                      "name": "time"
                                    },
                                    {
                                      "type": "Literal",
                                      "value": 1,
                                      "raw": "1"
                                    }
                                  ]
                                }
                              ]
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
                      "name": "times"
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
                "name": "range_utc"
              },
              "params": [
                {
                  "type": "Identifier",
                  "name": "t0"
                },
                {
                  "type": "Identifier",
                  "name": "t1"
                },
                {
                  "type": "Identifier",
                  "name": "dt"
                }
              ],
              "defaults": [],
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "TryStatement",
                    "block": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "AssignmentExpression",
                            "operator": "=",
                            "left": {
                              "type": "Identifier",
                              "name": "d3_date"
                            },
                            "right": {
                              "type": "Identifier",
                              "name": "d3_date_utc"
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
                                "name": "utc"
                              },
                              "init": {
                                "type": "NewExpression",
                                "callee": {
                                  "type": "Identifier",
                                  "name": "d3_date_utc"
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
                              "type": "MemberExpression",
                              "computed": false,
                              "object": {
                                "type": "Identifier",
                                "name": "utc"
                              },
                              "property": {
                                "type": "Identifier",
                                "name": "_"
                              }
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
                            "type": "CallExpression",
                            "callee": {
                              "type": "Identifier",
                              "name": "range"
                            },
                            "arguments": [
                              {
                                "type": "Identifier",
                                "name": "utc"
                              },
                              {
                                "type": "Identifier",
                                "name": "t1"
                              },
                              {
                                "type": "Identifier",
                                "name": "dt"
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
                              "type": "Identifier",
                              "name": "d3_date"
                            },
                            "right": {
                              "type": "Identifier",
                              "name": "Date"
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
                    "name": "local"
                  },
                  "property": {
                    "type": "Identifier",
                    "name": "floor"
                  }
                },
                "right": {
                  "type": "Identifier",
                  "name": "local"
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
                    "name": "local"
                  },
                  "property": {
                    "type": "Identifier",
                    "name": "round"
                  }
                },
                "right": {
                  "type": "Identifier",
                  "name": "round"
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
                    "name": "local"
                  },
                  "property": {
                    "type": "Identifier",
                    "name": "ceil"
                  }
                },
                "right": {
                  "type": "Identifier",
                  "name": "ceil"
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
                    "name": "local"
                  },
                  "property": {
                    "type": "Identifier",
                    "name": "offset"
                  }
                },
                "right": {
                  "type": "Identifier",
                  "name": "offset"
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
                    "name": "local"
                  },
                  "property": {
                    "type": "Identifier",
                    "name": "range"
                  }
                },
                "right": {
                  "type": "Identifier",
                  "name": "range"
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
                    "name": "utc"
                  },
                  "init": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "name": "local"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "utc"
                      }
                    },
                    "right": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "name": "d3_time_interval_utc"
                      },
                      "arguments": [
                        {
                          "type": "Identifier",
                          "name": "local"
                        }
                      ]
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
                    "name": "utc"
                  },
                  "property": {
                    "type": "Identifier",
                    "name": "floor"
                  }
                },
                "right": {
                  "type": "Identifier",
                  "name": "utc"
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
                    "name": "utc"
                  },
                  "property": {
                    "type": "Identifier",
                    "name": "round"
                  }
                },
                "right": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "name": "d3_time_interval_utc"
                  },
                  "arguments": [
                    {
                      "type": "Identifier",
                      "name": "round"
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
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "name": "utc"
                  },
                  "property": {
                    "type": "Identifier",
                    "name": "ceil"
                  }
                },
                "right": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "name": "d3_time_interval_utc"
                  },
                  "arguments": [
                    {
                      "type": "Identifier",
                      "name": "ceil"
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
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "name": "utc"
                  },
                  "property": {
                    "type": "Identifier",
                    "name": "offset"
                  }
                },
                "right": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "name": "d3_time_interval_utc"
                  },
                  "arguments": [
                    {
                      "type": "Identifier",
                      "name": "offset"
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
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "name": "utc"
                  },
                  "property": {
                    "type": "Identifier",
                    "name": "range"
                  }
                },
                "right": {
                  "type": "Identifier",
                  "name": "range_utc"
                }
              }
            },
            {
              "type": "ReturnStatement",
              "argument": {
                "type": "Identifier",
                "name": "local"
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
          "name": "d3_time_interval_utc"
        },
        "params": [
          {
            "type": "Identifier",
            "name": "method"
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
                    "name": "date"
                  },
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
                      "type": "TryStatement",
                      "block": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ExpressionStatement",
                            "expression": {
                              "type": "AssignmentExpression",
                              "operator": "=",
                              "left": {
                                "type": "Identifier",
                                "name": "d3_date"
                              },
                              "right": {
                                "type": "Identifier",
                                "name": "d3_date_utc"
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
                                  "name": "utc"
                                },
                                "init": {
                                  "type": "NewExpression",
                                  "callee": {
                                    "type": "Identifier",
                                    "name": "d3_date_utc"
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
                                "type": "MemberExpression",
                                "computed": false,
                                "object": {
                                  "type": "Identifier",
                                  "name": "utc"
                                },
                                "property": {
                                  "type": "Identifier",
                                  "name": "_"
                                }
                              },
                              "right": {
                                "type": "Identifier",
                                "name": "date"
                              }
                            }
                          },
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "MemberExpression",
                              "computed": false,
                              "object": {
                                "type": "CallExpression",
                                "callee": {
                                  "type": "Identifier",
                                  "name": "method"
                                },
                                "arguments": [
                                  {
                                    "type": "Identifier",
                                    "name": "utc"
                                  },
                                  {
                                    "type": "Identifier",
                                    "name": "k"
                                  }
                                ]
                              },
                              "property": {
                                "type": "Identifier",
                                "name": "_"
                              }
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
                                "type": "Identifier",
                                "name": "d3_date"
                              },
                              "right": {
                                "type": "Identifier",
                                "name": "Date"
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
      }
    ]
  },
  "src": "function d3_time_interval(local, step, number) {\n    function round(date) {\n        var d0 = local(date), d1 = offset(d0, 1);\n        return date - d0 < d1 - date ? d0 : d1;\n    }\n    function ceil(date) {\n        step(date = local(new d3_date(date - 1)), 1);\n        return date;\n    }\n    function offset(date, k) {\n        step(date = new d3_date(+date), k);\n        return date;\n    }\n    function range(t0, t1, dt) {\n        var time = ceil(t0), times = [];\n        if (dt > 1) {\n            while (time < t1) {\n                if (!(number(time) % dt))\n                    times.push(new Date(+time));\n                step(time, 1);\n            }\n        } else {\n            while (time < t1)\n                times.push(new Date(+time)), step(time, 1);\n        }\n        return times;\n    }\n    function range_utc(t0, t1, dt) {\n        try {\n            d3_date = d3_date_utc;\n            var utc = new d3_date_utc();\n            utc._ = t0;\n            return range(utc, t1, dt);\n        } finally {\n            d3_date = Date;\n        }\n    }\n    local.floor = local;\n    local.round = round;\n    local.ceil = ceil;\n    local.offset = offset;\n    local.range = range;\n    var utc = local.utc = d3_time_interval_utc(local);\n    utc.floor = utc;\n    utc.round = d3_time_interval_utc(round);\n    utc.ceil = d3_time_interval_utc(ceil);\n    utc.offset = d3_time_interval_utc(offset);\n    utc.range = range_utc;\n    return local;\n}\nfunction d3_time_interval_utc(method) {\n    return function (date, k) {\n        try {\n            d3_date = d3_date_utc;\n            var utc = new d3_date_utc();\n            utc._ = date;\n            return method(utc, k)._;\n        } finally {\n            d3_date = Date;\n        }\n    };\n}"
}