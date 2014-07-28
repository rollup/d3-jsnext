{
  "filepath": "/layout/stack.js",
  "shared": [],
  "dependencies": [
    "d3_identity",
    "d3.permute",
    "d3.map",
    "d3.range"
  ],
  "helpers": [
    "d3_layout_stackX",
    "d3_layout_stackY",
    "d3_layout_stackOut",
    "d3_layout_stackOrders",
    "d3_layout_stackOffsets",
    "d3_layout_stackOrderDefault",
    "d3_layout_stackOffsetZero",
    "d3_layout_stackMaxIndex",
    "d3_layout_stackReduceSum",
    "d3_layout_stackSum"
  ],
  "exports": [
    "d3.layout.stack"
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
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "Identifier",
                "name": "d3"
              },
              "property": {
                "type": "Identifier",
                "name": "layout"
              }
            },
            "property": {
              "type": "Identifier",
              "name": "stack"
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
                        "name": "values"
                      },
                      "init": {
                        "type": "Identifier",
                        "name": "d3_identity"
                      }
                    },
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "name": "order"
                      },
                      "init": {
                        "type": "Identifier",
                        "name": "d3_layout_stackOrderDefault"
                      }
                    },
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "name": "offset"
                      },
                      "init": {
                        "type": "Identifier",
                        "name": "d3_layout_stackOffsetZero"
                      }
                    },
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "name": "out"
                      },
                      "init": {
                        "type": "Identifier",
                        "name": "d3_layout_stackOut"
                      }
                    },
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "name": "x"
                      },
                      "init": {
                        "type": "Identifier",
                        "name": "d3_layout_stackX"
                      }
                    },
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "name": "y"
                      },
                      "init": {
                        "type": "Identifier",
                        "name": "d3_layout_stackY"
                      }
                    }
                  ],
                  "kind": "var"
                },
                {
                  "type": "FunctionDeclaration",
                  "id": {
                    "type": "Identifier",
                    "name": "stack"
                  },
                  "params": [
                    {
                      "type": "Identifier",
                      "name": "data"
                    },
                    {
                      "type": "Identifier",
                      "name": "index"
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
                              "name": "series"
                            },
                            "init": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "MemberExpression",
                                "computed": false,
                                "object": {
                                  "type": "Identifier",
                                  "name": "data"
                                },
                                "property": {
                                  "type": "Identifier",
                                  "name": "map"
                                }
                              },
                              "arguments": [
                                {
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
                                              "type": "Identifier",
                                              "name": "values"
                                            },
                                            "property": {
                                              "type": "Identifier",
                                              "name": "call"
                                            }
                                          },
                                          "arguments": [
                                            {
                                              "type": "Identifier",
                                              "name": "stack"
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
                                    ]
                                  },
                                  "rest": null,
                                  "generator": false,
                                  "expression": false
                                }
                              ]
                            }
                          }
                        ],
                        "kind": "var"
                      },
                      {
                        "type": "VariableDeclaration",
                        "declarations": [
                          {
                            "type": "VariableDeclarator",
                            "id": {
                              "type": "Identifier",
                              "name": "points"
                            },
                            "init": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "MemberExpression",
                                "computed": false,
                                "object": {
                                  "type": "Identifier",
                                  "name": "series"
                                },
                                "property": {
                                  "type": "Identifier",
                                  "name": "map"
                                }
                              },
                              "arguments": [
                                {
                                  "type": "FunctionExpression",
                                  "id": null,
                                  "params": [
                                    {
                                      "type": "Identifier",
                                      "name": "d"
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
                                              "type": "Identifier",
                                              "name": "d"
                                            },
                                            "property": {
                                              "type": "Identifier",
                                              "name": "map"
                                            }
                                          },
                                          "arguments": [
                                            {
                                              "type": "FunctionExpression",
                                              "id": null,
                                              "params": [
                                                {
                                                  "type": "Identifier",
                                                  "name": "v"
                                                },
                                                {
                                                  "type": "Identifier",
                                                  "name": "i"
                                                }
                                              ],
                                              "defaults": [],
                                              "body": {
                                                "type": "BlockStatement",
                                                "body": [
                                                  {
                                                    "type": "ReturnStatement",
                                                    "argument": {
                                                      "type": "ArrayExpression",
                                                      "elements": [
                                                        {
                                                          "type": "CallExpression",
                                                          "callee": {
                                                            "type": "MemberExpression",
                                                            "computed": false,
                                                            "object": {
                                                              "type": "Identifier",
                                                              "name": "x"
                                                            },
                                                            "property": {
                                                              "type": "Identifier",
                                                              "name": "call"
                                                            }
                                                          },
                                                          "arguments": [
                                                            {
                                                              "type": "Identifier",
                                                              "name": "stack"
                                                            },
                                                            {
                                                              "type": "Identifier",
                                                              "name": "v"
                                                            },
                                                            {
                                                              "type": "Identifier",
                                                              "name": "i"
                                                            }
                                                          ]
                                                        },
                                                        {
                                                          "type": "CallExpression",
                                                          "callee": {
                                                            "type": "MemberExpression",
                                                            "computed": false,
                                                            "object": {
                                                              "type": "Identifier",
                                                              "name": "y"
                                                            },
                                                            "property": {
                                                              "type": "Identifier",
                                                              "name": "call"
                                                            }
                                                          },
                                                          "arguments": [
                                                            {
                                                              "type": "Identifier",
                                                              "name": "stack"
                                                            },
                                                            {
                                                              "type": "Identifier",
                                                              "name": "v"
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
                                              },
                                              "rest": null,
                                              "generator": false,
                                              "expression": false
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
                            }
                          }
                        ],
                        "kind": "var"
                      },
                      {
                        "type": "VariableDeclaration",
                        "declarations": [
                          {
                            "type": "VariableDeclarator",
                            "id": {
                              "type": "Identifier",
                              "name": "orders"
                            },
                            "init": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "MemberExpression",
                                "computed": false,
                                "object": {
                                  "type": "Identifier",
                                  "name": "order"
                                },
                                "property": {
                                  "type": "Identifier",
                                  "name": "call"
                                }
                              },
                              "arguments": [
                                {
                                  "type": "Identifier",
                                  "name": "stack"
                                },
                                {
                                  "type": "Identifier",
                                  "name": "points"
                                },
                                {
                                  "type": "Identifier",
                                  "name": "index"
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
                          "type": "AssignmentExpression",
                          "operator": "=",
                          "left": {
                            "type": "Identifier",
                            "name": "series"
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
                                "name": "permute"
                              }
                            },
                            "arguments": [
                              {
                                "type": "Identifier",
                                "name": "series"
                              },
                              {
                                "type": "Identifier",
                                "name": "orders"
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
                            "name": "points"
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
                                "name": "permute"
                              }
                            },
                            "arguments": [
                              {
                                "type": "Identifier",
                                "name": "points"
                              },
                              {
                                "type": "Identifier",
                                "name": "orders"
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
                              "name": "offsets"
                            },
                            "init": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "MemberExpression",
                                "computed": false,
                                "object": {
                                  "type": "Identifier",
                                  "name": "offset"
                                },
                                "property": {
                                  "type": "Identifier",
                                  "name": "call"
                                }
                              },
                              "arguments": [
                                {
                                  "type": "Identifier",
                                  "name": "stack"
                                },
                                {
                                  "type": "Identifier",
                                  "name": "points"
                                },
                                {
                                  "type": "Identifier",
                                  "name": "index"
                                }
                              ]
                            }
                          }
                        ],
                        "kind": "var"
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
                                "name": "series"
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
                                "type": "MemberExpression",
                                "computed": true,
                                "object": {
                                  "type": "Identifier",
                                  "name": "series"
                                },
                                "property": {
                                  "type": "Literal",
                                  "value": 0,
                                  "raw": "0"
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
                            "init": null
                          },
                          {
                            "type": "VariableDeclarator",
                            "id": {
                              "type": "Identifier",
                              "name": "j"
                            },
                            "init": null
                          },
                          {
                            "type": "VariableDeclarator",
                            "id": {
                              "type": "Identifier",
                              "name": "o"
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
                            "name": "j"
                          },
                          "right": {
                            "type": "Literal",
                            "value": 0,
                            "raw": "0"
                          }
                        },
                        "test": {
                          "type": "BinaryExpression",
                          "operator": "<",
                          "left": {
                            "type": "Identifier",
                            "name": "j"
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
                            "name": "j"
                          },
                          "prefix": true
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
                                    "type": "Identifier",
                                    "name": "out"
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "name": "call"
                                  }
                                },
                                "arguments": [
                                  {
                                    "type": "Identifier",
                                    "name": "stack"
                                  },
                                  {
                                    "type": "MemberExpression",
                                    "computed": true,
                                    "object": {
                                      "type": "MemberExpression",
                                      "computed": true,
                                      "object": {
                                        "type": "Identifier",
                                        "name": "series"
                                      },
                                      "property": {
                                        "type": "Literal",
                                        "value": 0,
                                        "raw": "0"
                                      }
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "name": "j"
                                    }
                                  },
                                  {
                                    "type": "AssignmentExpression",
                                    "operator": "=",
                                    "left": {
                                      "type": "Identifier",
                                      "name": "o"
                                    },
                                    "right": {
                                      "type": "MemberExpression",
                                      "computed": true,
                                      "object": {
                                        "type": "Identifier",
                                        "name": "offsets"
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "name": "j"
                                      }
                                    }
                                  },
                                  {
                                    "type": "MemberExpression",
                                    "computed": true,
                                    "object": {
                                      "type": "MemberExpression",
                                      "computed": true,
                                      "object": {
                                        "type": "MemberExpression",
                                        "computed": true,
                                        "object": {
                                          "type": "Identifier",
                                          "name": "points"
                                        },
                                        "property": {
                                          "type": "Literal",
                                          "value": 0,
                                          "raw": "0"
                                        }
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "name": "j"
                                      }
                                    },
                                    "property": {
                                      "type": "Literal",
                                      "value": 1,
                                      "raw": "1"
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
                                  "type": "Literal",
                                  "value": 1,
                                  "raw": "1"
                                }
                              },
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
                                      "type": "CallExpression",
                                      "callee": {
                                        "type": "MemberExpression",
                                        "computed": false,
                                        "object": {
                                          "type": "Identifier",
                                          "name": "out"
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "name": "call"
                                        }
                                      },
                                      "arguments": [
                                        {
                                          "type": "Identifier",
                                          "name": "stack"
                                        },
                                        {
                                          "type": "MemberExpression",
                                          "computed": true,
                                          "object": {
                                            "type": "MemberExpression",
                                            "computed": true,
                                            "object": {
                                              "type": "Identifier",
                                              "name": "series"
                                            },
                                            "property": {
                                              "type": "Identifier",
                                              "name": "i"
                                            }
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "name": "j"
                                          }
                                        },
                                        {
                                          "type": "AssignmentExpression",
                                          "operator": "+=",
                                          "left": {
                                            "type": "Identifier",
                                            "name": "o"
                                          },
                                          "right": {
                                            "type": "MemberExpression",
                                            "computed": true,
                                            "object": {
                                              "type": "MemberExpression",
                                              "computed": true,
                                              "object": {
                                                "type": "MemberExpression",
                                                "computed": true,
                                                "object": {
                                                  "type": "Identifier",
                                                  "name": "points"
                                                },
                                                "property": {
                                                  "type": "BinaryExpression",
                                                  "operator": "-",
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
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "name": "j"
                                              }
                                            },
                                            "property": {
                                              "type": "Literal",
                                              "value": 1,
                                              "raw": "1"
                                            }
                                          }
                                        },
                                        {
                                          "type": "MemberExpression",
                                          "computed": true,
                                          "object": {
                                            "type": "MemberExpression",
                                            "computed": true,
                                            "object": {
                                              "type": "MemberExpression",
                                              "computed": true,
                                              "object": {
                                                "type": "Identifier",
                                                "name": "points"
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "name": "i"
                                              }
                                            },
                                            "property": {
                                              "type": "Identifier",
                                              "name": "j"
                                            }
                                          },
                                          "property": {
                                            "type": "Literal",
                                            "value": 1,
                                            "raw": "1"
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
                          "type": "Identifier",
                          "name": "data"
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
                        "name": "stack"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "values"
                      }
                    },
                    "right": {
                      "type": "FunctionExpression",
                      "id": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "name": "x"
                        }
                      ],
                      "defaults": [],
                      "body": {
                        "type": "BlockStatement",
                        "body": [
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
                              "type": "ReturnStatement",
                              "argument": {
                                "type": "Identifier",
                                "name": "values"
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
                                "name": "values"
                              },
                              "right": {
                                "type": "Identifier",
                                "name": "x"
                              }
                            }
                          },
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "Identifier",
                              "name": "stack"
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
                        "name": "stack"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "order"
                      }
                    },
                    "right": {
                      "type": "FunctionExpression",
                      "id": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "name": "x"
                        }
                      ],
                      "defaults": [],
                      "body": {
                        "type": "BlockStatement",
                        "body": [
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
                              "type": "ReturnStatement",
                              "argument": {
                                "type": "Identifier",
                                "name": "order"
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
                                "name": "order"
                              },
                              "right": {
                                "type": "ConditionalExpression",
                                "test": {
                                  "type": "BinaryExpression",
                                  "operator": "===",
                                  "left": {
                                    "type": "UnaryExpression",
                                    "operator": "typeof",
                                    "argument": {
                                      "type": "Identifier",
                                      "name": "x"
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
                                  "name": "x"
                                },
                                "alternate": {
                                  "type": "LogicalExpression",
                                  "operator": "||",
                                  "left": {
                                    "type": "CallExpression",
                                    "callee": {
                                      "type": "MemberExpression",
                                      "computed": false,
                                      "object": {
                                        "type": "Identifier",
                                        "name": "d3_layout_stackOrders"
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "name": "get"
                                      }
                                    },
                                    "arguments": [
                                      {
                                        "type": "Identifier",
                                        "name": "x"
                                      }
                                    ]
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "name": "d3_layout_stackOrderDefault"
                                  }
                                }
                              }
                            }
                          },
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "Identifier",
                              "name": "stack"
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
                        "name": "stack"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "offset"
                      }
                    },
                    "right": {
                      "type": "FunctionExpression",
                      "id": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "name": "x"
                        }
                      ],
                      "defaults": [],
                      "body": {
                        "type": "BlockStatement",
                        "body": [
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
                              "type": "ReturnStatement",
                              "argument": {
                                "type": "Identifier",
                                "name": "offset"
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
                                "name": "offset"
                              },
                              "right": {
                                "type": "ConditionalExpression",
                                "test": {
                                  "type": "BinaryExpression",
                                  "operator": "===",
                                  "left": {
                                    "type": "UnaryExpression",
                                    "operator": "typeof",
                                    "argument": {
                                      "type": "Identifier",
                                      "name": "x"
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
                                  "name": "x"
                                },
                                "alternate": {
                                  "type": "LogicalExpression",
                                  "operator": "||",
                                  "left": {
                                    "type": "CallExpression",
                                    "callee": {
                                      "type": "MemberExpression",
                                      "computed": false,
                                      "object": {
                                        "type": "Identifier",
                                        "name": "d3_layout_stackOffsets"
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "name": "get"
                                      }
                                    },
                                    "arguments": [
                                      {
                                        "type": "Identifier",
                                        "name": "x"
                                      }
                                    ]
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "name": "d3_layout_stackOffsetZero"
                                  }
                                }
                              }
                            }
                          },
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "Identifier",
                              "name": "stack"
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
                        "name": "stack"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "x"
                      }
                    },
                    "right": {
                      "type": "FunctionExpression",
                      "id": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "name": "z"
                        }
                      ],
                      "defaults": [],
                      "body": {
                        "type": "BlockStatement",
                        "body": [
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
                              "type": "ReturnStatement",
                              "argument": {
                                "type": "Identifier",
                                "name": "x"
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
                                "name": "x"
                              },
                              "right": {
                                "type": "Identifier",
                                "name": "z"
                              }
                            }
                          },
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "Identifier",
                              "name": "stack"
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
                        "name": "stack"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "y"
                      }
                    },
                    "right": {
                      "type": "FunctionExpression",
                      "id": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "name": "z"
                        }
                      ],
                      "defaults": [],
                      "body": {
                        "type": "BlockStatement",
                        "body": [
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
                              "type": "ReturnStatement",
                              "argument": {
                                "type": "Identifier",
                                "name": "y"
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
                                "name": "y"
                              },
                              "right": {
                                "type": "Identifier",
                                "name": "z"
                              }
                            }
                          },
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "Identifier",
                              "name": "stack"
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
                        "name": "stack"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "out"
                      }
                    },
                    "right": {
                      "type": "FunctionExpression",
                      "id": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "name": "z"
                        }
                      ],
                      "defaults": [],
                      "body": {
                        "type": "BlockStatement",
                        "body": [
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
                              "type": "ReturnStatement",
                              "argument": {
                                "type": "Identifier",
                                "name": "out"
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
                                "name": "out"
                              },
                              "right": {
                                "type": "Identifier",
                                "name": "z"
                              }
                            }
                          },
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "Identifier",
                              "name": "stack"
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
                    "name": "stack"
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
          "name": "d3_layout_stackX"
        },
        "params": [
          {
            "type": "Identifier",
            "name": "d"
          }
        ],
        "defaults": [],
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "ReturnStatement",
              "argument": {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "name": "d"
                },
                "property": {
                  "type": "Identifier",
                  "name": "x"
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
          "name": "d3_layout_stackY"
        },
        "params": [
          {
            "type": "Identifier",
            "name": "d"
          }
        ],
        "defaults": [],
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "ReturnStatement",
              "argument": {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "name": "d"
                },
                "property": {
                  "type": "Identifier",
                  "name": "y"
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
          "name": "d3_layout_stackOut"
        },
        "params": [
          {
            "type": "Identifier",
            "name": "d"
          },
          {
            "type": "Identifier",
            "name": "y0"
          },
          {
            "type": "Identifier",
            "name": "y"
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
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "name": "d"
                  },
                  "property": {
                    "type": "Identifier",
                    "name": "y0"
                  }
                },
                "right": {
                  "type": "Identifier",
                  "name": "y0"
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
                    "name": "d"
                  },
                  "property": {
                    "type": "Identifier",
                    "name": "y"
                  }
                },
                "right": {
                  "type": "Identifier",
                  "name": "y"
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
              "name": "d3_layout_stackOrders"
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
                        "type": "Literal",
                        "value": "inside-out",
                        "raw": "\"inside-out\""
                      },
                      "value": {
                        "type": "FunctionExpression",
                        "id": null,
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
                                      "name": "data"
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
                                  "init": null
                                },
                                {
                                  "type": "VariableDeclarator",
                                  "id": {
                                    "type": "Identifier",
                                    "name": "j"
                                  },
                                  "init": null
                                },
                                {
                                  "type": "VariableDeclarator",
                                  "id": {
                                    "type": "Identifier",
                                    "name": "max"
                                  },
                                  "init": {
                                    "type": "CallExpression",
                                    "callee": {
                                      "type": "MemberExpression",
                                      "computed": false,
                                      "object": {
                                        "type": "Identifier",
                                        "name": "data"
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "name": "map"
                                      }
                                    },
                                    "arguments": [
                                      {
                                        "type": "Identifier",
                                        "name": "d3_layout_stackMaxIndex"
                                      }
                                    ]
                                  }
                                },
                                {
                                  "type": "VariableDeclarator",
                                  "id": {
                                    "type": "Identifier",
                                    "name": "sums"
                                  },
                                  "init": {
                                    "type": "CallExpression",
                                    "callee": {
                                      "type": "MemberExpression",
                                      "computed": false,
                                      "object": {
                                        "type": "Identifier",
                                        "name": "data"
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "name": "map"
                                      }
                                    },
                                    "arguments": [
                                      {
                                        "type": "Identifier",
                                        "name": "d3_layout_stackReduceSum"
                                      }
                                    ]
                                  }
                                },
                                {
                                  "type": "VariableDeclarator",
                                  "id": {
                                    "type": "Identifier",
                                    "name": "index"
                                  },
                                  "init": {
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
                                            "name": "d3"
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "name": "range"
                                          }
                                        },
                                        "arguments": [
                                          {
                                            "type": "Identifier",
                                            "name": "n"
                                          }
                                        ]
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "name": "sort"
                                      }
                                    },
                                    "arguments": [
                                      {
                                        "type": "FunctionExpression",
                                        "id": null,
                                        "params": [
                                          {
                                            "type": "Identifier",
                                            "name": "a"
                                          },
                                          {
                                            "type": "Identifier",
                                            "name": "b"
                                          }
                                        ],
                                        "defaults": [],
                                        "body": {
                                          "type": "BlockStatement",
                                          "body": [
                                            {
                                              "type": "ReturnStatement",
                                              "argument": {
                                                "type": "BinaryExpression",
                                                "operator": "-",
                                                "left": {
                                                  "type": "MemberExpression",
                                                  "computed": true,
                                                  "object": {
                                                    "type": "Identifier",
                                                    "name": "max"
                                                  },
                                                  "property": {
                                                    "type": "Identifier",
                                                    "name": "a"
                                                  }
                                                },
                                                "right": {
                                                  "type": "MemberExpression",
                                                  "computed": true,
                                                  "object": {
                                                    "type": "Identifier",
                                                    "name": "max"
                                                  },
                                                  "property": {
                                                    "type": "Identifier",
                                                    "name": "b"
                                                  }
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
                                  }
                                },
                                {
                                  "type": "VariableDeclarator",
                                  "id": {
                                    "type": "Identifier",
                                    "name": "top"
                                  },
                                  "init": {
                                    "type": "Literal",
                                    "value": 0,
                                    "raw": "0"
                                  }
                                },
                                {
                                  "type": "VariableDeclarator",
                                  "id": {
                                    "type": "Identifier",
                                    "name": "bottom"
                                  },
                                  "init": {
                                    "type": "Literal",
                                    "value": 0,
                                    "raw": "0"
                                  }
                                },
                                {
                                  "type": "VariableDeclarator",
                                  "id": {
                                    "type": "Identifier",
                                    "name": "tops"
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
                                    "name": "bottoms"
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
                              "type": "ForStatement",
                              "init": {
                                "type": "AssignmentExpression",
                                "operator": "=",
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
                                        "type": "Identifier",
                                        "name": "j"
                                      },
                                      "right": {
                                        "type": "MemberExpression",
                                        "computed": true,
                                        "object": {
                                          "type": "Identifier",
                                          "name": "index"
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
                                      "type": "BinaryExpression",
                                      "operator": "<",
                                      "left": {
                                        "type": "Identifier",
                                        "name": "top"
                                      },
                                      "right": {
                                        "type": "Identifier",
                                        "name": "bottom"
                                      }
                                    },
                                    "consequent": {
                                      "type": "BlockStatement",
                                      "body": [
                                        {
                                          "type": "ExpressionStatement",
                                          "expression": {
                                            "type": "AssignmentExpression",
                                            "operator": "+=",
                                            "left": {
                                              "type": "Identifier",
                                              "name": "top"
                                            },
                                            "right": {
                                              "type": "MemberExpression",
                                              "computed": true,
                                              "object": {
                                                "type": "Identifier",
                                                "name": "sums"
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "name": "j"
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
                                                "name": "tops"
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "name": "push"
                                              }
                                            },
                                            "arguments": [
                                              {
                                                "type": "Identifier",
                                                "name": "j"
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
                                          "type": "ExpressionStatement",
                                          "expression": {
                                            "type": "AssignmentExpression",
                                            "operator": "+=",
                                            "left": {
                                              "type": "Identifier",
                                              "name": "bottom"
                                            },
                                            "right": {
                                              "type": "MemberExpression",
                                              "computed": true,
                                              "object": {
                                                "type": "Identifier",
                                                "name": "sums"
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "name": "j"
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
                                                "name": "bottoms"
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "name": "push"
                                              }
                                            },
                                            "arguments": [
                                              {
                                                "type": "Identifier",
                                                "name": "j"
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
                                  "type": "MemberExpression",
                                  "computed": false,
                                  "object": {
                                    "type": "CallExpression",
                                    "callee": {
                                      "type": "MemberExpression",
                                      "computed": false,
                                      "object": {
                                        "type": "Identifier",
                                        "name": "bottoms"
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "name": "reverse"
                                      }
                                    },
                                    "arguments": []
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "name": "concat"
                                  }
                                },
                                "arguments": [
                                  {
                                    "type": "Identifier",
                                    "name": "tops"
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
                      "kind": "init"
                    },
                    {
                      "type": "Property",
                      "key": {
                        "type": "Literal",
                        "value": "reverse",
                        "raw": "\"reverse\""
                      },
                      "value": {
                        "type": "FunctionExpression",
                        "id": null,
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
                                        "name": "d3"
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "name": "range"
                                      }
                                    },
                                    "arguments": [
                                      {
                                        "type": "MemberExpression",
                                        "computed": false,
                                        "object": {
                                          "type": "Identifier",
                                          "name": "data"
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "name": "length"
                                        }
                                      }
                                    ]
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "name": "reverse"
                                  }
                                },
                                "arguments": []
                              }
                            }
                          ]
                        },
                        "rest": null,
                        "generator": false,
                        "expression": false
                      },
                      "kind": "init"
                    },
                    {
                      "type": "Property",
                      "key": {
                        "type": "Literal",
                        "value": "default",
                        "raw": "\"default\""
                      },
                      "value": {
                        "type": "Identifier",
                        "name": "d3_layout_stackOrderDefault"
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
        "type": "VariableDeclaration",
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "name": "d3_layout_stackOffsets"
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
                        "type": "Literal",
                        "value": "silhouette",
                        "raw": "\"silhouette\""
                      },
                      "value": {
                        "type": "FunctionExpression",
                        "id": null,
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
                                      "name": "data"
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
                                      "type": "MemberExpression",
                                      "computed": true,
                                      "object": {
                                        "type": "Identifier",
                                        "name": "data"
                                      },
                                      "property": {
                                        "type": "Literal",
                                        "value": 0,
                                        "raw": "0"
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
                                    "name": "sums"
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
                                    "name": "max"
                                  },
                                  "init": {
                                    "type": "Literal",
                                    "value": 0,
                                    "raw": "0"
                                  }
                                },
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
                                    "name": "j"
                                  },
                                  "init": null
                                },
                                {
                                  "type": "VariableDeclarator",
                                  "id": {
                                    "type": "Identifier",
                                    "name": "o"
                                  },
                                  "init": null
                                },
                                {
                                  "type": "VariableDeclarator",
                                  "id": {
                                    "type": "Identifier",
                                    "name": "y0"
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
                              "type": "ForStatement",
                              "init": {
                                "type": "AssignmentExpression",
                                "operator": "=",
                                "left": {
                                  "type": "Identifier",
                                  "name": "j"
                                },
                                "right": {
                                  "type": "Literal",
                                  "value": 0,
                                  "raw": "0"
                                }
                              },
                              "test": {
                                "type": "BinaryExpression",
                                "operator": "<",
                                "left": {
                                  "type": "Identifier",
                                  "name": "j"
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
                                  "name": "j"
                                },
                                "prefix": true
                              },
                              "body": {
                                "type": "BlockStatement",
                                "body": [
                                  {
                                    "type": "ForStatement",
                                    "init": {
                                      "type": "SequenceExpression",
                                      "expressions": [
                                        {
                                          "type": "AssignmentExpression",
                                          "operator": "=",
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
                                        {
                                          "type": "AssignmentExpression",
                                          "operator": "=",
                                          "left": {
                                            "type": "Identifier",
                                            "name": "o"
                                          },
                                          "right": {
                                            "type": "Literal",
                                            "value": 0,
                                            "raw": "0"
                                          }
                                        }
                                      ]
                                    },
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
                                      "prefix": false
                                    },
                                    "body": {
                                      "type": "ExpressionStatement",
                                      "expression": {
                                        "type": "AssignmentExpression",
                                        "operator": "+=",
                                        "left": {
                                          "type": "Identifier",
                                          "name": "o"
                                        },
                                        "right": {
                                          "type": "MemberExpression",
                                          "computed": true,
                                          "object": {
                                            "type": "MemberExpression",
                                            "computed": true,
                                            "object": {
                                              "type": "MemberExpression",
                                              "computed": true,
                                              "object": {
                                                "type": "Identifier",
                                                "name": "data"
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "name": "i"
                                              }
                                            },
                                            "property": {
                                              "type": "Identifier",
                                              "name": "j"
                                            }
                                          },
                                          "property": {
                                            "type": "Literal",
                                            "value": 1,
                                            "raw": "1"
                                          }
                                        }
                                      }
                                    }
                                  },
                                  {
                                    "type": "IfStatement",
                                    "test": {
                                      "type": "BinaryExpression",
                                      "operator": ">",
                                      "left": {
                                        "type": "Identifier",
                                        "name": "o"
                                      },
                                      "right": {
                                        "type": "Identifier",
                                        "name": "max"
                                      }
                                    },
                                    "consequent": {
                                      "type": "ExpressionStatement",
                                      "expression": {
                                        "type": "AssignmentExpression",
                                        "operator": "=",
                                        "left": {
                                          "type": "Identifier",
                                          "name": "max"
                                        },
                                        "right": {
                                          "type": "Identifier",
                                          "name": "o"
                                        }
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
                                          "name": "sums"
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "name": "push"
                                        }
                                      },
                                      "arguments": [
                                        {
                                          "type": "Identifier",
                                          "name": "o"
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
                                  "name": "j"
                                },
                                "right": {
                                  "type": "Literal",
                                  "value": 0,
                                  "raw": "0"
                                }
                              },
                              "test": {
                                "type": "BinaryExpression",
                                "operator": "<",
                                "left": {
                                  "type": "Identifier",
                                  "name": "j"
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
                                  "name": "j"
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
                                          "name": "y0"
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "name": "j"
                                        }
                                      },
                                      "right": {
                                        "type": "BinaryExpression",
                                        "operator": "/",
                                        "left": {
                                          "type": "BinaryExpression",
                                          "operator": "-",
                                          "left": {
                                            "type": "Identifier",
                                            "name": "max"
                                          },
                                          "right": {
                                            "type": "MemberExpression",
                                            "computed": true,
                                            "object": {
                                              "type": "Identifier",
                                              "name": "sums"
                                            },
                                            "property": {
                                              "type": "Identifier",
                                              "name": "j"
                                            }
                                          }
                                        },
                                        "right": {
                                          "type": "Literal",
                                          "value": 2,
                                          "raw": "2"
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
                                "name": "y0"
                              }
                            }
                          ]
                        },
                        "rest": null,
                        "generator": false,
                        "expression": false
                      },
                      "kind": "init"
                    },
                    {
                      "type": "Property",
                      "key": {
                        "type": "Literal",
                        "value": "wiggle",
                        "raw": "\"wiggle\""
                      },
                      "value": {
                        "type": "FunctionExpression",
                        "id": null,
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
                                      "name": "data"
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
                                    "name": "x"
                                  },
                                  "init": {
                                    "type": "MemberExpression",
                                    "computed": true,
                                    "object": {
                                      "type": "Identifier",
                                      "name": "data"
                                    },
                                    "property": {
                                      "type": "Literal",
                                      "value": 0,
                                      "raw": "0"
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
                                      "name": "x"
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
                                  "init": null
                                },
                                {
                                  "type": "VariableDeclarator",
                                  "id": {
                                    "type": "Identifier",
                                    "name": "j"
                                  },
                                  "init": null
                                },
                                {
                                  "type": "VariableDeclarator",
                                  "id": {
                                    "type": "Identifier",
                                    "name": "k"
                                  },
                                  "init": null
                                },
                                {
                                  "type": "VariableDeclarator",
                                  "id": {
                                    "type": "Identifier",
                                    "name": "s1"
                                  },
                                  "init": null
                                },
                                {
                                  "type": "VariableDeclarator",
                                  "id": {
                                    "type": "Identifier",
                                    "name": "s2"
                                  },
                                  "init": null
                                },
                                {
                                  "type": "VariableDeclarator",
                                  "id": {
                                    "type": "Identifier",
                                    "name": "s3"
                                  },
                                  "init": null
                                },
                                {
                                  "type": "VariableDeclarator",
                                  "id": {
                                    "type": "Identifier",
                                    "name": "dx"
                                  },
                                  "init": null
                                },
                                {
                                  "type": "VariableDeclarator",
                                  "id": {
                                    "type": "Identifier",
                                    "name": "o"
                                  },
                                  "init": null
                                },
                                {
                                  "type": "VariableDeclarator",
                                  "id": {
                                    "type": "Identifier",
                                    "name": "o0"
                                  },
                                  "init": null
                                },
                                {
                                  "type": "VariableDeclarator",
                                  "id": {
                                    "type": "Identifier",
                                    "name": "y0"
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
                                  "computed": true,
                                  "object": {
                                    "type": "Identifier",
                                    "name": "y0"
                                  },
                                  "property": {
                                    "type": "Literal",
                                    "value": 0,
                                    "raw": "0"
                                  }
                                },
                                "right": {
                                  "type": "AssignmentExpression",
                                  "operator": "=",
                                  "left": {
                                    "type": "Identifier",
                                    "name": "o"
                                  },
                                  "right": {
                                    "type": "AssignmentExpression",
                                    "operator": "=",
                                    "left": {
                                      "type": "Identifier",
                                      "name": "o0"
                                    },
                                    "right": {
                                      "type": "Literal",
                                      "value": 0,
                                      "raw": "0"
                                    }
                                  }
                                }
                              }
                            },
                            {
                              "type": "ForStatement",
                              "init": {
                                "type": "AssignmentExpression",
                                "operator": "=",
                                "left": {
                                  "type": "Identifier",
                                  "name": "j"
                                },
                                "right": {
                                  "type": "Literal",
                                  "value": 1,
                                  "raw": "1"
                                }
                              },
                              "test": {
                                "type": "BinaryExpression",
                                "operator": "<",
                                "left": {
                                  "type": "Identifier",
                                  "name": "j"
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
                                  "name": "j"
                                },
                                "prefix": true
                              },
                              "body": {
                                "type": "BlockStatement",
                                "body": [
                                  {
                                    "type": "ForStatement",
                                    "init": {
                                      "type": "SequenceExpression",
                                      "expressions": [
                                        {
                                          "type": "AssignmentExpression",
                                          "operator": "=",
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
                                        {
                                          "type": "AssignmentExpression",
                                          "operator": "=",
                                          "left": {
                                            "type": "Identifier",
                                            "name": "s1"
                                          },
                                          "right": {
                                            "type": "Literal",
                                            "value": 0,
                                            "raw": "0"
                                          }
                                        }
                                      ]
                                    },
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
                                      "type": "ExpressionStatement",
                                      "expression": {
                                        "type": "AssignmentExpression",
                                        "operator": "+=",
                                        "left": {
                                          "type": "Identifier",
                                          "name": "s1"
                                        },
                                        "right": {
                                          "type": "MemberExpression",
                                          "computed": true,
                                          "object": {
                                            "type": "MemberExpression",
                                            "computed": true,
                                            "object": {
                                              "type": "MemberExpression",
                                              "computed": true,
                                              "object": {
                                                "type": "Identifier",
                                                "name": "data"
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "name": "i"
                                              }
                                            },
                                            "property": {
                                              "type": "Identifier",
                                              "name": "j"
                                            }
                                          },
                                          "property": {
                                            "type": "Literal",
                                            "value": 1,
                                            "raw": "1"
                                          }
                                        }
                                      }
                                    }
                                  },
                                  {
                                    "type": "ForStatement",
                                    "init": {
                                      "type": "SequenceExpression",
                                      "expressions": [
                                        {
                                          "type": "AssignmentExpression",
                                          "operator": "=",
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
                                        {
                                          "type": "AssignmentExpression",
                                          "operator": "=",
                                          "left": {
                                            "type": "Identifier",
                                            "name": "s2"
                                          },
                                          "right": {
                                            "type": "Literal",
                                            "value": 0,
                                            "raw": "0"
                                          }
                                        },
                                        {
                                          "type": "AssignmentExpression",
                                          "operator": "=",
                                          "left": {
                                            "type": "Identifier",
                                            "name": "dx"
                                          },
                                          "right": {
                                            "type": "BinaryExpression",
                                            "operator": "-",
                                            "left": {
                                              "type": "MemberExpression",
                                              "computed": true,
                                              "object": {
                                                "type": "MemberExpression",
                                                "computed": true,
                                                "object": {
                                                  "type": "Identifier",
                                                  "name": "x"
                                                },
                                                "property": {
                                                  "type": "Identifier",
                                                  "name": "j"
                                                }
                                              },
                                              "property": {
                                                "type": "Literal",
                                                "value": 0,
                                                "raw": "0"
                                              }
                                            },
                                            "right": {
                                              "type": "MemberExpression",
                                              "computed": true,
                                              "object": {
                                                "type": "MemberExpression",
                                                "computed": true,
                                                "object": {
                                                  "type": "Identifier",
                                                  "name": "x"
                                                },
                                                "property": {
                                                  "type": "BinaryExpression",
                                                  "operator": "-",
                                                  "left": {
                                                    "type": "Identifier",
                                                    "name": "j"
                                                  },
                                                  "right": {
                                                    "type": "Literal",
                                                    "value": 1,
                                                    "raw": "1"
                                                  }
                                                }
                                              },
                                              "property": {
                                                "type": "Literal",
                                                "value": 0,
                                                "raw": "0"
                                              }
                                            }
                                          }
                                        }
                                      ]
                                    },
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
                                          "type": "ForStatement",
                                          "init": {
                                            "type": "SequenceExpression",
                                            "expressions": [
                                              {
                                                "type": "AssignmentExpression",
                                                "operator": "=",
                                                "left": {
                                                  "type": "Identifier",
                                                  "name": "k"
                                                },
                                                "right": {
                                                  "type": "Literal",
                                                  "value": 0,
                                                  "raw": "0"
                                                }
                                              },
                                              {
                                                "type": "AssignmentExpression",
                                                "operator": "=",
                                                "left": {
                                                  "type": "Identifier",
                                                  "name": "s3"
                                                },
                                                "right": {
                                                  "type": "BinaryExpression",
                                                  "operator": "/",
                                                  "left": {
                                                    "type": "BinaryExpression",
                                                    "operator": "-",
                                                    "left": {
                                                      "type": "MemberExpression",
                                                      "computed": true,
                                                      "object": {
                                                        "type": "MemberExpression",
                                                        "computed": true,
                                                        "object": {
                                                          "type": "MemberExpression",
                                                          "computed": true,
                                                          "object": {
                                                            "type": "Identifier",
                                                            "name": "data"
                                                          },
                                                          "property": {
                                                            "type": "Identifier",
                                                            "name": "i"
                                                          }
                                                        },
                                                        "property": {
                                                          "type": "Identifier",
                                                          "name": "j"
                                                        }
                                                      },
                                                      "property": {
                                                        "type": "Literal",
                                                        "value": 1,
                                                        "raw": "1"
                                                      }
                                                    },
                                                    "right": {
                                                      "type": "MemberExpression",
                                                      "computed": true,
                                                      "object": {
                                                        "type": "MemberExpression",
                                                        "computed": true,
                                                        "object": {
                                                          "type": "MemberExpression",
                                                          "computed": true,
                                                          "object": {
                                                            "type": "Identifier",
                                                            "name": "data"
                                                          },
                                                          "property": {
                                                            "type": "Identifier",
                                                            "name": "i"
                                                          }
                                                        },
                                                        "property": {
                                                          "type": "BinaryExpression",
                                                          "operator": "-",
                                                          "left": {
                                                            "type": "Identifier",
                                                            "name": "j"
                                                          },
                                                          "right": {
                                                            "type": "Literal",
                                                            "value": 1,
                                                            "raw": "1"
                                                          }
                                                        }
                                                      },
                                                      "property": {
                                                        "type": "Literal",
                                                        "value": 1,
                                                        "raw": "1"
                                                      }
                                                    }
                                                  },
                                                  "right": {
                                                    "type": "BinaryExpression",
                                                    "operator": "*",
                                                    "left": {
                                                      "type": "Literal",
                                                      "value": 2,
                                                      "raw": "2"
                                                    },
                                                    "right": {
                                                      "type": "Identifier",
                                                      "name": "dx"
                                                    }
                                                  }
                                                }
                                              }
                                            ]
                                          },
                                          "test": {
                                            "type": "BinaryExpression",
                                            "operator": "<",
                                            "left": {
                                              "type": "Identifier",
                                              "name": "k"
                                            },
                                            "right": {
                                              "type": "Identifier",
                                              "name": "i"
                                            }
                                          },
                                          "update": {
                                            "type": "UpdateExpression",
                                            "operator": "++",
                                            "argument": {
                                              "type": "Identifier",
                                              "name": "k"
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
                                                  "operator": "+=",
                                                  "left": {
                                                    "type": "Identifier",
                                                    "name": "s3"
                                                  },
                                                  "right": {
                                                    "type": "BinaryExpression",
                                                    "operator": "/",
                                                    "left": {
                                                      "type": "BinaryExpression",
                                                      "operator": "-",
                                                      "left": {
                                                        "type": "MemberExpression",
                                                        "computed": true,
                                                        "object": {
                                                          "type": "MemberExpression",
                                                          "computed": true,
                                                          "object": {
                                                            "type": "MemberExpression",
                                                            "computed": true,
                                                            "object": {
                                                              "type": "Identifier",
                                                              "name": "data"
                                                            },
                                                            "property": {
                                                              "type": "Identifier",
                                                              "name": "k"
                                                            }
                                                          },
                                                          "property": {
                                                            "type": "Identifier",
                                                            "name": "j"
                                                          }
                                                        },
                                                        "property": {
                                                          "type": "Literal",
                                                          "value": 1,
                                                          "raw": "1"
                                                        }
                                                      },
                                                      "right": {
                                                        "type": "MemberExpression",
                                                        "computed": true,
                                                        "object": {
                                                          "type": "MemberExpression",
                                                          "computed": true,
                                                          "object": {
                                                            "type": "MemberExpression",
                                                            "computed": true,
                                                            "object": {
                                                              "type": "Identifier",
                                                              "name": "data"
                                                            },
                                                            "property": {
                                                              "type": "Identifier",
                                                              "name": "k"
                                                            }
                                                          },
                                                          "property": {
                                                            "type": "BinaryExpression",
                                                            "operator": "-",
                                                            "left": {
                                                              "type": "Identifier",
                                                              "name": "j"
                                                            },
                                                            "right": {
                                                              "type": "Literal",
                                                              "value": 1,
                                                              "raw": "1"
                                                            }
                                                          }
                                                        },
                                                        "property": {
                                                          "type": "Literal",
                                                          "value": 1,
                                                          "raw": "1"
                                                        }
                                                      }
                                                    },
                                                    "right": {
                                                      "type": "Identifier",
                                                      "name": "dx"
                                                    }
                                                  }
                                                }
                                              }
                                            ]
                                          }
                                        },
                                        {
                                          "type": "ExpressionStatement",
                                          "expression": {
                                            "type": "AssignmentExpression",
                                            "operator": "+=",
                                            "left": {
                                              "type": "Identifier",
                                              "name": "s2"
                                            },
                                            "right": {
                                              "type": "BinaryExpression",
                                              "operator": "*",
                                              "left": {
                                                "type": "Identifier",
                                                "name": "s3"
                                              },
                                              "right": {
                                                "type": "MemberExpression",
                                                "computed": true,
                                                "object": {
                                                  "type": "MemberExpression",
                                                  "computed": true,
                                                  "object": {
                                                    "type": "MemberExpression",
                                                    "computed": true,
                                                    "object": {
                                                      "type": "Identifier",
                                                      "name": "data"
                                                    },
                                                    "property": {
                                                      "type": "Identifier",
                                                      "name": "i"
                                                    }
                                                  },
                                                  "property": {
                                                    "type": "Identifier",
                                                    "name": "j"
                                                  }
                                                },
                                                "property": {
                                                  "type": "Literal",
                                                  "value": 1,
                                                  "raw": "1"
                                                }
                                              }
                                            }
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
                                        "computed": true,
                                        "object": {
                                          "type": "Identifier",
                                          "name": "y0"
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "name": "j"
                                        }
                                      },
                                      "right": {
                                        "type": "AssignmentExpression",
                                        "operator": "-=",
                                        "left": {
                                          "type": "Identifier",
                                          "name": "o"
                                        },
                                        "right": {
                                          "type": "ConditionalExpression",
                                          "test": {
                                            "type": "Identifier",
                                            "name": "s1"
                                          },
                                          "consequent": {
                                            "type": "BinaryExpression",
                                            "operator": "*",
                                            "left": {
                                              "type": "BinaryExpression",
                                              "operator": "/",
                                              "left": {
                                                "type": "Identifier",
                                                "name": "s2"
                                              },
                                              "right": {
                                                "type": "Identifier",
                                                "name": "s1"
                                              }
                                            },
                                            "right": {
                                              "type": "Identifier",
                                              "name": "dx"
                                            }
                                          },
                                          "alternate": {
                                            "type": "Literal",
                                            "value": 0,
                                            "raw": "0"
                                          }
                                        }
                                      }
                                    }
                                  },
                                  {
                                    "type": "IfStatement",
                                    "test": {
                                      "type": "BinaryExpression",
                                      "operator": "<",
                                      "left": {
                                        "type": "Identifier",
                                        "name": "o"
                                      },
                                      "right": {
                                        "type": "Identifier",
                                        "name": "o0"
                                      }
                                    },
                                    "consequent": {
                                      "type": "ExpressionStatement",
                                      "expression": {
                                        "type": "AssignmentExpression",
                                        "operator": "=",
                                        "left": {
                                          "type": "Identifier",
                                          "name": "o0"
                                        },
                                        "right": {
                                          "type": "Identifier",
                                          "name": "o"
                                        }
                                      }
                                    },
                                    "alternate": null
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
                                  "name": "j"
                                },
                                "right": {
                                  "type": "Literal",
                                  "value": 0,
                                  "raw": "0"
                                }
                              },
                              "test": {
                                "type": "BinaryExpression",
                                "operator": "<",
                                "left": {
                                  "type": "Identifier",
                                  "name": "j"
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
                                  "name": "j"
                                },
                                "prefix": true
                              },
                              "body": {
                                "type": "ExpressionStatement",
                                "expression": {
                                  "type": "AssignmentExpression",
                                  "operator": "-=",
                                  "left": {
                                    "type": "MemberExpression",
                                    "computed": true,
                                    "object": {
                                      "type": "Identifier",
                                      "name": "y0"
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "name": "j"
                                    }
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "name": "o0"
                                  }
                                }
                              }
                            },
                            {
                              "type": "ReturnStatement",
                              "argument": {
                                "type": "Identifier",
                                "name": "y0"
                              }
                            }
                          ]
                        },
                        "rest": null,
                        "generator": false,
                        "expression": false
                      },
                      "kind": "init"
                    },
                    {
                      "type": "Property",
                      "key": {
                        "type": "Literal",
                        "value": "expand",
                        "raw": "\"expand\""
                      },
                      "value": {
                        "type": "FunctionExpression",
                        "id": null,
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
                                      "name": "data"
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
                                      "type": "MemberExpression",
                                      "computed": true,
                                      "object": {
                                        "type": "Identifier",
                                        "name": "data"
                                      },
                                      "property": {
                                        "type": "Literal",
                                        "value": 0,
                                        "raw": "0"
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
                                    "name": "k"
                                  },
                                  "init": {
                                    "type": "BinaryExpression",
                                    "operator": "/",
                                    "left": {
                                      "type": "Literal",
                                      "value": 1,
                                      "raw": "1"
                                    },
                                    "right": {
                                      "type": "Identifier",
                                      "name": "n"
                                    }
                                  }
                                },
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
                                    "name": "j"
                                  },
                                  "init": null
                                },
                                {
                                  "type": "VariableDeclarator",
                                  "id": {
                                    "type": "Identifier",
                                    "name": "o"
                                  },
                                  "init": null
                                },
                                {
                                  "type": "VariableDeclarator",
                                  "id": {
                                    "type": "Identifier",
                                    "name": "y0"
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
                              "type": "ForStatement",
                              "init": {
                                "type": "AssignmentExpression",
                                "operator": "=",
                                "left": {
                                  "type": "Identifier",
                                  "name": "j"
                                },
                                "right": {
                                  "type": "Literal",
                                  "value": 0,
                                  "raw": "0"
                                }
                              },
                              "test": {
                                "type": "BinaryExpression",
                                "operator": "<",
                                "left": {
                                  "type": "Identifier",
                                  "name": "j"
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
                                  "name": "j"
                                },
                                "prefix": true
                              },
                              "body": {
                                "type": "BlockStatement",
                                "body": [
                                  {
                                    "type": "ForStatement",
                                    "init": {
                                      "type": "SequenceExpression",
                                      "expressions": [
                                        {
                                          "type": "AssignmentExpression",
                                          "operator": "=",
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
                                        {
                                          "type": "AssignmentExpression",
                                          "operator": "=",
                                          "left": {
                                            "type": "Identifier",
                                            "name": "o"
                                          },
                                          "right": {
                                            "type": "Literal",
                                            "value": 0,
                                            "raw": "0"
                                          }
                                        }
                                      ]
                                    },
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
                                      "prefix": false
                                    },
                                    "body": {
                                      "type": "ExpressionStatement",
                                      "expression": {
                                        "type": "AssignmentExpression",
                                        "operator": "+=",
                                        "left": {
                                          "type": "Identifier",
                                          "name": "o"
                                        },
                                        "right": {
                                          "type": "MemberExpression",
                                          "computed": true,
                                          "object": {
                                            "type": "MemberExpression",
                                            "computed": true,
                                            "object": {
                                              "type": "MemberExpression",
                                              "computed": true,
                                              "object": {
                                                "type": "Identifier",
                                                "name": "data"
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "name": "i"
                                              }
                                            },
                                            "property": {
                                              "type": "Identifier",
                                              "name": "j"
                                            }
                                          },
                                          "property": {
                                            "type": "Literal",
                                            "value": 1,
                                            "raw": "1"
                                          }
                                        }
                                      }
                                    }
                                  },
                                  {
                                    "type": "IfStatement",
                                    "test": {
                                      "type": "Identifier",
                                      "name": "o"
                                    },
                                    "consequent": {
                                      "type": "ForStatement",
                                      "init": {
                                        "type": "AssignmentExpression",
                                        "operator": "=",
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
                                        "prefix": false
                                      },
                                      "body": {
                                        "type": "ExpressionStatement",
                                        "expression": {
                                          "type": "AssignmentExpression",
                                          "operator": "/=",
                                          "left": {
                                            "type": "MemberExpression",
                                            "computed": true,
                                            "object": {
                                              "type": "MemberExpression",
                                              "computed": true,
                                              "object": {
                                                "type": "MemberExpression",
                                                "computed": true,
                                                "object": {
                                                  "type": "Identifier",
                                                  "name": "data"
                                                },
                                                "property": {
                                                  "type": "Identifier",
                                                  "name": "i"
                                                }
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "name": "j"
                                              }
                                            },
                                            "property": {
                                              "type": "Literal",
                                              "value": 1,
                                              "raw": "1"
                                            }
                                          },
                                          "right": {
                                            "type": "Identifier",
                                            "name": "o"
                                          }
                                        }
                                      }
                                    },
                                    "alternate": {
                                      "type": "ForStatement",
                                      "init": {
                                        "type": "AssignmentExpression",
                                        "operator": "=",
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
                                        "prefix": false
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
                                              "type": "MemberExpression",
                                              "computed": true,
                                              "object": {
                                                "type": "MemberExpression",
                                                "computed": true,
                                                "object": {
                                                  "type": "Identifier",
                                                  "name": "data"
                                                },
                                                "property": {
                                                  "type": "Identifier",
                                                  "name": "i"
                                                }
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "name": "j"
                                              }
                                            },
                                            "property": {
                                              "type": "Literal",
                                              "value": 1,
                                              "raw": "1"
                                            }
                                          },
                                          "right": {
                                            "type": "Identifier",
                                            "name": "k"
                                          }
                                        }
                                      }
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
                                  "name": "j"
                                },
                                "right": {
                                  "type": "Literal",
                                  "value": 0,
                                  "raw": "0"
                                }
                              },
                              "test": {
                                "type": "BinaryExpression",
                                "operator": "<",
                                "left": {
                                  "type": "Identifier",
                                  "name": "j"
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
                                  "name": "j"
                                },
                                "prefix": true
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
                                      "name": "y0"
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "name": "j"
                                    }
                                  },
                                  "right": {
                                    "type": "Literal",
                                    "value": 0,
                                    "raw": "0"
                                  }
                                }
                              }
                            },
                            {
                              "type": "ReturnStatement",
                              "argument": {
                                "type": "Identifier",
                                "name": "y0"
                              }
                            }
                          ]
                        },
                        "rest": null,
                        "generator": false,
                        "expression": false
                      },
                      "kind": "init"
                    },
                    {
                      "type": "Property",
                      "key": {
                        "type": "Literal",
                        "value": "zero",
                        "raw": "\"zero\""
                      },
                      "value": {
                        "type": "Identifier",
                        "name": "d3_layout_stackOffsetZero"
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
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "name": "d3_layout_stackOrderDefault"
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
                    "name": "range"
                  }
                },
                "arguments": [
                  {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "name": "data"
                    },
                    "property": {
                      "type": "Identifier",
                      "name": "length"
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
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "name": "d3_layout_stackOffsetZero"
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
                      "type": "MemberExpression",
                      "computed": true,
                      "object": {
                        "type": "Identifier",
                        "name": "data"
                      },
                      "property": {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0"
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
                    "name": "y0"
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
              "type": "WhileStatement",
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
                      "name": "y0"
                    },
                    "property": {
                      "type": "Identifier",
                      "name": "j"
                    }
                  },
                  "right": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0"
                  }
                }
              }
            },
            {
              "type": "ReturnStatement",
              "argument": {
                "type": "Identifier",
                "name": "y0"
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
          "name": "d3_layout_stackMaxIndex"
        },
        "params": [
          {
            "type": "Identifier",
            "name": "array"
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
                    "type": "Literal",
                    "value": 1,
                    "raw": "1"
                  }
                },
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "name": "j"
                  },
                  "init": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0"
                  }
                },
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "name": "v"
                  },
                  "init": {
                    "type": "MemberExpression",
                    "computed": true,
                    "object": {
                      "type": "MemberExpression",
                      "computed": true,
                      "object": {
                        "type": "Identifier",
                        "name": "array"
                      },
                      "property": {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0"
                      }
                    },
                    "property": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1"
                    }
                  }
                },
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "name": "k"
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
                      "name": "array"
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
                    "type": "IfStatement",
                    "test": {
                      "type": "BinaryExpression",
                      "operator": ">",
                      "left": {
                        "type": "AssignmentExpression",
                        "operator": "=",
                        "left": {
                          "type": "Identifier",
                          "name": "k"
                        },
                        "right": {
                          "type": "MemberExpression",
                          "computed": true,
                          "object": {
                            "type": "MemberExpression",
                            "computed": true,
                            "object": {
                              "type": "Identifier",
                              "name": "array"
                            },
                            "property": {
                              "type": "Identifier",
                              "name": "i"
                            }
                          },
                          "property": {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1"
                          }
                        }
                      },
                      "right": {
                        "type": "Identifier",
                        "name": "v"
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
                              "name": "j"
                            },
                            "right": {
                              "type": "Identifier",
                              "name": "i"
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
                              "name": "v"
                            },
                            "right": {
                              "type": "Identifier",
                              "name": "k"
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
                "name": "j"
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
          "name": "d3_layout_stackReduceSum"
        },
        "params": [
          {
            "type": "Identifier",
            "name": "d"
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
                    "type": "Identifier",
                    "name": "d"
                  },
                  "property": {
                    "type": "Identifier",
                    "name": "reduce"
                  }
                },
                "arguments": [
                  {
                    "type": "Identifier",
                    "name": "d3_layout_stackSum"
                  },
                  {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0"
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
          "name": "d3_layout_stackSum"
        },
        "params": [
          {
            "type": "Identifier",
            "name": "p"
          },
          {
            "type": "Identifier",
            "name": "d"
          }
        ],
        "defaults": [],
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "ReturnStatement",
              "argument": {
                "type": "BinaryExpression",
                "operator": "+",
                "left": {
                  "type": "Identifier",
                  "name": "p"
                },
                "right": {
                  "type": "MemberExpression",
                  "computed": true,
                  "object": {
                    "type": "Identifier",
                    "name": "d"
                  },
                  "property": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1"
                  }
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
  "src": "d3.layout.stack = function () {\n    var values = d3_identity, order = d3_layout_stackOrderDefault, offset = d3_layout_stackOffsetZero, out = d3_layout_stackOut, x = d3_layout_stackX, y = d3_layout_stackY;\n    function stack(data, index) {\n        var series = data.map(function (d, i) {\n                return values.call(stack, d, i);\n            });\n        var points = series.map(function (d) {\n                return d.map(function (v, i) {\n                    return [\n                        x.call(stack, v, i),\n                        y.call(stack, v, i)\n                    ];\n                });\n            });\n        var orders = order.call(stack, points, index);\n        series = d3.permute(series, orders);\n        points = d3.permute(points, orders);\n        var offsets = offset.call(stack, points, index);\n        var n = series.length, m = series[0].length, i, j, o;\n        for (j = 0; j < m; ++j) {\n            out.call(stack, series[0][j], o = offsets[j], points[0][j][1]);\n            for (i = 1; i < n; ++i) {\n                out.call(stack, series[i][j], o += points[i - 1][j][1], points[i][j][1]);\n            }\n        }\n        return data;\n    }\n    stack.values = function (x) {\n        if (!arguments.length)\n            return values;\n        values = x;\n        return stack;\n    };\n    stack.order = function (x) {\n        if (!arguments.length)\n            return order;\n        order = typeof x === 'function' ? x : d3_layout_stackOrders.get(x) || d3_layout_stackOrderDefault;\n        return stack;\n    };\n    stack.offset = function (x) {\n        if (!arguments.length)\n            return offset;\n        offset = typeof x === 'function' ? x : d3_layout_stackOffsets.get(x) || d3_layout_stackOffsetZero;\n        return stack;\n    };\n    stack.x = function (z) {\n        if (!arguments.length)\n            return x;\n        x = z;\n        return stack;\n    };\n    stack.y = function (z) {\n        if (!arguments.length)\n            return y;\n        y = z;\n        return stack;\n    };\n    stack.out = function (z) {\n        if (!arguments.length)\n            return out;\n        out = z;\n        return stack;\n    };\n    return stack;\n};\nfunction d3_layout_stackX(d) {\n    return d.x;\n}\nfunction d3_layout_stackY(d) {\n    return d.y;\n}\nfunction d3_layout_stackOut(d, y0, y) {\n    d.y0 = y0;\n    d.y = y;\n}\nvar d3_layout_stackOrders = d3.map({\n        'inside-out': function (data) {\n            var n = data.length, i, j, max = data.map(d3_layout_stackMaxIndex), sums = data.map(d3_layout_stackReduceSum), index = d3.range(n).sort(function (a, b) {\n                    return max[a] - max[b];\n                }), top = 0, bottom = 0, tops = [], bottoms = [];\n            for (i = 0; i < n; ++i) {\n                j = index[i];\n                if (top < bottom) {\n                    top += sums[j];\n                    tops.push(j);\n                } else {\n                    bottom += sums[j];\n                    bottoms.push(j);\n                }\n            }\n            return bottoms.reverse().concat(tops);\n        },\n        'reverse': function (data) {\n            return d3.range(data.length).reverse();\n        },\n        'default': d3_layout_stackOrderDefault\n    });\nvar d3_layout_stackOffsets = d3.map({\n        'silhouette': function (data) {\n            var n = data.length, m = data[0].length, sums = [], max = 0, i, j, o, y0 = [];\n            for (j = 0; j < m; ++j) {\n                for (i = 0, o = 0; i < n; i++)\n                    o += data[i][j][1];\n                if (o > max)\n                    max = o;\n                sums.push(o);\n            }\n            for (j = 0; j < m; ++j) {\n                y0[j] = (max - sums[j]) / 2;\n            }\n            return y0;\n        },\n        'wiggle': function (data) {\n            var n = data.length, x = data[0], m = x.length, i, j, k, s1, s2, s3, dx, o, o0, y0 = [];\n            y0[0] = o = o0 = 0;\n            for (j = 1; j < m; ++j) {\n                for (i = 0, s1 = 0; i < n; ++i)\n                    s1 += data[i][j][1];\n                for (i = 0, s2 = 0, dx = x[j][0] - x[j - 1][0]; i < n; ++i) {\n                    for (k = 0, s3 = (data[i][j][1] - data[i][j - 1][1]) / (2 * dx); k < i; ++k) {\n                        s3 += (data[k][j][1] - data[k][j - 1][1]) / dx;\n                    }\n                    s2 += s3 * data[i][j][1];\n                }\n                y0[j] = o -= s1 ? s2 / s1 * dx : 0;\n                if (o < o0)\n                    o0 = o;\n            }\n            for (j = 0; j < m; ++j)\n                y0[j] -= o0;\n            return y0;\n        },\n        'expand': function (data) {\n            var n = data.length, m = data[0].length, k = 1 / n, i, j, o, y0 = [];\n            for (j = 0; j < m; ++j) {\n                for (i = 0, o = 0; i < n; i++)\n                    o += data[i][j][1];\n                if (o)\n                    for (i = 0; i < n; i++)\n                        data[i][j][1] /= o;\n                else\n                    for (i = 0; i < n; i++)\n                        data[i][j][1] = k;\n            }\n            for (j = 0; j < m; ++j)\n                y0[j] = 0;\n            return y0;\n        },\n        'zero': d3_layout_stackOffsetZero\n    });\nfunction d3_layout_stackOrderDefault(data) {\n    return d3.range(data.length);\n}\nfunction d3_layout_stackOffsetZero(data) {\n    var j = -1, m = data[0].length, y0 = [];\n    while (++j < m)\n        y0[j] = 0;\n    return y0;\n}\nfunction d3_layout_stackMaxIndex(array) {\n    var i = 1, j = 0, v = array[0][1], k, n = array.length;\n    for (; i < n; ++i) {\n        if ((k = array[i][1]) > v) {\n            j = i;\n            v = k;\n        }\n    }\n    return j;\n}\nfunction d3_layout_stackReduceSum(d) {\n    return d.reduce(d3_layout_stackSum, 0);\n}\nfunction d3_layout_stackSum(p, d) {\n    return p + d[1];\n}"
}