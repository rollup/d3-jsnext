{
  "filepath": "/scale/log.js",
  "shared": [],
  "dependencies": [
    "d3.scale.linear",
    "d3_scale_nice",
    "d3_scaleExtent",
    "d3.format",
    "d3_scale_linearRebind"
  ],
  "helpers": [
    "d3_scale_log",
    "d3_scale_logFormat",
    "d3_scale_logNiceNegative"
  ],
  "exports": [
    "d3.scale.log"
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
                "name": "scale"
              }
            },
            "property": {
              "type": "Identifier",
              "name": "log"
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
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "name": "d3_scale_log"
                    },
                    "arguments": [
                      {
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
                                "type": "MemberExpression",
                                "computed": false,
                                "object": {
                                  "type": "Identifier",
                                  "name": "d3"
                                },
                                "property": {
                                  "type": "Identifier",
                                  "name": "scale"
                                }
                              },
                              "property": {
                                "type": "Identifier",
                                "name": "linear"
                              }
                            },
                            "arguments": []
                          },
                          "property": {
                            "type": "Identifier",
                            "name": "domain"
                          }
                        },
                        "arguments": [
                          {
                            "type": "ArrayExpression",
                            "elements": [
                              {
                                "type": "Literal",
                                "value": 0,
                                "raw": "0"
                              },
                              {
                                "type": "Literal",
                                "value": 1,
                                "raw": "1"
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "type": "Literal",
                        "value": 10,
                        "raw": "10"
                      },
                      {
                        "type": "Literal",
                        "value": true,
                        "raw": "true"
                      },
                      {
                        "type": "ArrayExpression",
                        "elements": [
                          {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1"
                          },
                          {
                            "type": "Literal",
                            "value": 10,
                            "raw": "10"
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
          "name": "d3_scale_log"
        },
        "params": [
          {
            "type": "Identifier",
            "name": "linear"
          },
          {
            "type": "Identifier",
            "name": "base"
          },
          {
            "type": "Identifier",
            "name": "positive"
          },
          {
            "type": "Identifier",
            "name": "domain"
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
                "name": "log"
              },
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
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "BinaryExpression",
                      "operator": "/",
                      "left": {
                        "type": "ConditionalExpression",
                        "test": {
                          "type": "Identifier",
                          "name": "positive"
                        },
                        "consequent": {
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
                              "name": "log"
                            }
                          },
                          "arguments": [
                            {
                              "type": "ConditionalExpression",
                              "test": {
                                "type": "BinaryExpression",
                                "operator": "<",
                                "left": {
                                  "type": "Identifier",
                                  "name": "x"
                                },
                                "right": {
                                  "type": "Literal",
                                  "value": 0,
                                  "raw": "0"
                                }
                              },
                              "consequent": {
                                "type": "Literal",
                                "value": 0,
                                "raw": "0"
                              },
                              "alternate": {
                                "type": "Identifier",
                                "name": "x"
                              }
                            }
                          ]
                        },
                        "alternate": {
                          "type": "UnaryExpression",
                          "operator": "-",
                          "argument": {
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
                                "name": "log"
                              }
                            },
                            "arguments": [
                              {
                                "type": "ConditionalExpression",
                                "test": {
                                  "type": "BinaryExpression",
                                  "operator": ">",
                                  "left": {
                                    "type": "Identifier",
                                    "name": "x"
                                  },
                                  "right": {
                                    "type": "Literal",
                                    "value": 0,
                                    "raw": "0"
                                  }
                                },
                                "consequent": {
                                  "type": "Literal",
                                  "value": 0,
                                  "raw": "0"
                                },
                                "alternate": {
                                  "type": "UnaryExpression",
                                  "operator": "-",
                                  "argument": {
                                    "type": "Identifier",
                                    "name": "x"
                                  },
                                  "prefix": true
                                }
                              }
                            ]
                          },
                          "prefix": true
                        }
                      },
                      "right": {
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
                            "name": "log"
                          }
                        },
                        "arguments": [
                          {
                            "type": "Identifier",
                            "name": "base"
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
                "name": "pow"
              },
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
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "ConditionalExpression",
                      "test": {
                        "type": "Identifier",
                        "name": "positive"
                      },
                      "consequent": {
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
                            "name": "pow"
                          }
                        },
                        "arguments": [
                          {
                            "type": "Identifier",
                            "name": "base"
                          },
                          {
                            "type": "Identifier",
                            "name": "x"
                          }
                        ]
                      },
                      "alternate": {
                        "type": "UnaryExpression",
                        "operator": "-",
                        "argument": {
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
                              "name": "pow"
                            }
                          },
                          "arguments": [
                            {
                              "type": "Identifier",
                              "name": "base"
                            },
                            {
                              "type": "UnaryExpression",
                              "operator": "-",
                              "argument": {
                                "type": "Identifier",
                                "name": "x"
                              },
                              "prefix": true
                            }
                          ]
                        },
                        "prefix": true
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
                "name": "scale"
              },
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
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "name": "linear"
                      },
                      "arguments": [
                        {
                          "type": "CallExpression",
                          "callee": {
                            "type": "Identifier",
                            "name": "log"
                          },
                          "arguments": [
                            {
                              "type": "Identifier",
                              "name": "x"
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
                    "name": "scale"
                  },
                  "property": {
                    "type": "Identifier",
                    "name": "invert"
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
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "Identifier",
                            "name": "pow"
                          },
                          "arguments": [
                            {
                              "type": "CallExpression",
                              "callee": {
                                "type": "MemberExpression",
                                "computed": false,
                                "object": {
                                  "type": "Identifier",
                                  "name": "linear"
                                },
                                "property": {
                                  "type": "Identifier",
                                  "name": "invert"
                                }
                              },
                              "arguments": [
                                {
                                  "type": "Identifier",
                                  "name": "x"
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
              "type": "ExpressionStatement",
              "expression": {
                "type": "AssignmentExpression",
                "operator": "=",
                "left": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "name": "scale"
                  },
                  "property": {
                    "type": "Identifier",
                    "name": "domain"
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
                            "name": "domain"
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
                            "name": "positive"
                          },
                          "right": {
                            "type": "BinaryExpression",
                            "operator": ">=",
                            "left": {
                              "type": "MemberExpression",
                              "computed": true,
                              "object": {
                                "type": "Identifier",
                                "name": "x"
                              },
                              "property": {
                                "type": "Literal",
                                "value": 0,
                                "raw": "0"
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
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "name": "linear"
                            },
                            "property": {
                              "type": "Identifier",
                              "name": "domain"
                            }
                          },
                          "arguments": [
                            {
                              "type": "CallExpression",
                              "callee": {
                                "type": "MemberExpression",
                                "computed": false,
                                "object": {
                                  "type": "AssignmentExpression",
                                  "operator": "=",
                                  "left": {
                                    "type": "Identifier",
                                    "name": "domain"
                                  },
                                  "right": {
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
                                        "name": "map"
                                      }
                                    },
                                    "arguments": [
                                      {
                                        "type": "Identifier",
                                        "name": "Number"
                                      }
                                    ]
                                  }
                                },
                                "property": {
                                  "type": "Identifier",
                                  "name": "map"
                                }
                              },
                              "arguments": [
                                {
                                  "type": "Identifier",
                                  "name": "log"
                                }
                              ]
                            }
                          ]
                        }
                      },
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "Identifier",
                          "name": "scale"
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
                    "name": "scale"
                  },
                  "property": {
                    "type": "Identifier",
                    "name": "base"
                  }
                },
                "right": {
                  "type": "FunctionExpression",
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "name": "_"
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
                            "name": "base"
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
                            "name": "base"
                          },
                          "right": {
                            "type": "UnaryExpression",
                            "operator": "+",
                            "argument": {
                              "type": "Identifier",
                              "name": "_"
                            },
                            "prefix": true
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
                              "name": "linear"
                            },
                            "property": {
                              "type": "Identifier",
                              "name": "domain"
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
                                  "name": "domain"
                                },
                                "property": {
                                  "type": "Identifier",
                                  "name": "map"
                                }
                              },
                              "arguments": [
                                {
                                  "type": "Identifier",
                                  "name": "log"
                                }
                              ]
                            }
                          ]
                        }
                      },
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "Identifier",
                          "name": "scale"
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
                    "name": "scale"
                  },
                  "property": {
                    "type": "Identifier",
                    "name": "nice"
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
                              "name": "niced"
                            },
                            "init": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "Identifier",
                                "name": "d3_scale_nice"
                              },
                              "arguments": [
                                {
                                  "type": "CallExpression",
                                  "callee": {
                                    "type": "MemberExpression",
                                    "computed": false,
                                    "object": {
                                      "type": "Identifier",
                                      "name": "domain"
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "name": "map"
                                    }
                                  },
                                  "arguments": [
                                    {
                                      "type": "Identifier",
                                      "name": "log"
                                    }
                                  ]
                                },
                                {
                                  "type": "ConditionalExpression",
                                  "test": {
                                    "type": "Identifier",
                                    "name": "positive"
                                  },
                                  "consequent": {
                                    "type": "Identifier",
                                    "name": "Math"
                                  },
                                  "alternate": {
                                    "type": "Identifier",
                                    "name": "d3_scale_logNiceNegative"
                                  }
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
                              "name": "linear"
                            },
                            "property": {
                              "type": "Identifier",
                              "name": "domain"
                            }
                          },
                          "arguments": [
                            {
                              "type": "Identifier",
                              "name": "niced"
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
                            "name": "domain"
                          },
                          "right": {
                            "type": "CallExpression",
                            "callee": {
                              "type": "MemberExpression",
                              "computed": false,
                              "object": {
                                "type": "Identifier",
                                "name": "niced"
                              },
                              "property": {
                                "type": "Identifier",
                                "name": "map"
                              }
                            },
                            "arguments": [
                              {
                                "type": "Identifier",
                                "name": "pow"
                              }
                            ]
                          }
                        }
                      },
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "Identifier",
                          "name": "scale"
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
                    "name": "scale"
                  },
                  "property": {
                    "type": "Identifier",
                    "name": "ticks"
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
                              "name": "extent"
                            },
                            "init": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "Identifier",
                                "name": "d3_scaleExtent"
                              },
                              "arguments": [
                                {
                                  "type": "Identifier",
                                  "name": "domain"
                                }
                              ]
                            }
                          },
                          {
                            "type": "VariableDeclarator",
                            "id": {
                              "type": "Identifier",
                              "name": "ticks"
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
                              "name": "u"
                            },
                            "init": {
                              "type": "MemberExpression",
                              "computed": true,
                              "object": {
                                "type": "Identifier",
                                "name": "extent"
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
                              "name": "v"
                            },
                            "init": {
                              "type": "MemberExpression",
                              "computed": true,
                              "object": {
                                "type": "Identifier",
                                "name": "extent"
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
                              "name": "i"
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
                                  "name": "floor"
                                }
                              },
                              "arguments": [
                                {
                                  "type": "CallExpression",
                                  "callee": {
                                    "type": "Identifier",
                                    "name": "log"
                                  },
                                  "arguments": [
                                    {
                                      "type": "Identifier",
                                      "name": "u"
                                    }
                                  ]
                                }
                              ]
                            }
                          },
                          {
                            "type": "VariableDeclarator",
                            "id": {
                              "type": "Identifier",
                              "name": "j"
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
                                  "name": "ceil"
                                }
                              },
                              "arguments": [
                                {
                                  "type": "CallExpression",
                                  "callee": {
                                    "type": "Identifier",
                                    "name": "log"
                                  },
                                  "arguments": [
                                    {
                                      "type": "Identifier",
                                      "name": "v"
                                    }
                                  ]
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
                              "type": "ConditionalExpression",
                              "test": {
                                "type": "BinaryExpression",
                                "operator": "%",
                                "left": {
                                  "type": "Identifier",
                                  "name": "base"
                                },
                                "right": {
                                  "type": "Literal",
                                  "value": 1,
                                  "raw": "1"
                                }
                              },
                              "consequent": {
                                "type": "Literal",
                                "value": 2,
                                "raw": "2"
                              },
                              "alternate": {
                                "type": "Identifier",
                                "name": "base"
                              }
                            }
                          }
                        ],
                        "kind": "var"
                      },
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
                              "type": "BinaryExpression",
                              "operator": "-",
                              "left": {
                                "type": "Identifier",
                                "name": "j"
                              },
                              "right": {
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
                              "type": "IfStatement",
                              "test": {
                                "type": "Identifier",
                                "name": "positive"
                              },
                              "consequent": {
                                "type": "BlockStatement",
                                "body": [
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
                                        "name": "j"
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
                                              "type": "Literal",
                                              "value": 1,
                                              "raw": "1"
                                            }
                                          }
                                        ],
                                        "kind": "var"
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
                                          "name": "n"
                                        }
                                      },
                                      "update": {
                                        "type": "UpdateExpression",
                                        "operator": "++",
                                        "argument": {
                                          "type": "Identifier",
                                          "name": "k"
                                        },
                                        "prefix": false
                                      },
                                      "body": {
                                        "type": "ExpressionStatement",
                                        "expression": {
                                          "type": "CallExpression",
                                          "callee": {
                                            "type": "MemberExpression",
                                            "computed": false,
                                            "object": {
                                              "type": "Identifier",
                                              "name": "ticks"
                                            },
                                            "property": {
                                              "type": "Identifier",
                                              "name": "push"
                                            }
                                          },
                                          "arguments": [
                                            {
                                              "type": "BinaryExpression",
                                              "operator": "*",
                                              "left": {
                                                "type": "CallExpression",
                                                "callee": {
                                                  "type": "Identifier",
                                                  "name": "pow"
                                                },
                                                "arguments": [
                                                  {
                                                    "type": "Identifier",
                                                    "name": "i"
                                                  }
                                                ]
                                              },
                                              "right": {
                                                "type": "Identifier",
                                                "name": "k"
                                              }
                                            }
                                          ]
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
                                          "name": "ticks"
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
                                            "type": "Identifier",
                                            "name": "pow"
                                          },
                                          "arguments": [
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
                                          "name": "ticks"
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
                                            "type": "Identifier",
                                            "name": "pow"
                                          },
                                          "arguments": [
                                            {
                                              "type": "Identifier",
                                              "name": "i"
                                            }
                                          ]
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
                                        "type": "UpdateExpression",
                                        "operator": "++",
                                        "argument": {
                                          "type": "Identifier",
                                          "name": "i"
                                        },
                                        "prefix": false
                                      },
                                      "right": {
                                        "type": "Identifier",
                                        "name": "j"
                                      }
                                    },
                                    "update": null,
                                    "body": {
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
                                              "type": "BinaryExpression",
                                              "operator": "-",
                                              "left": {
                                                "type": "Identifier",
                                                "name": "n"
                                              },
                                              "right": {
                                                "type": "Literal",
                                                "value": 1,
                                                "raw": "1"
                                              }
                                            }
                                          }
                                        ],
                                        "kind": "var"
                                      },
                                      "test": {
                                        "type": "BinaryExpression",
                                        "operator": ">",
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
                                      "update": {
                                        "type": "UpdateExpression",
                                        "operator": "--",
                                        "argument": {
                                          "type": "Identifier",
                                          "name": "k"
                                        },
                                        "prefix": false
                                      },
                                      "body": {
                                        "type": "ExpressionStatement",
                                        "expression": {
                                          "type": "CallExpression",
                                          "callee": {
                                            "type": "MemberExpression",
                                            "computed": false,
                                            "object": {
                                              "type": "Identifier",
                                              "name": "ticks"
                                            },
                                            "property": {
                                              "type": "Identifier",
                                              "name": "push"
                                            }
                                          },
                                          "arguments": [
                                            {
                                              "type": "BinaryExpression",
                                              "operator": "*",
                                              "left": {
                                                "type": "CallExpression",
                                                "callee": {
                                                  "type": "Identifier",
                                                  "name": "pow"
                                                },
                                                "arguments": [
                                                  {
                                                    "type": "Identifier",
                                                    "name": "i"
                                                  }
                                                ]
                                              },
                                              "right": {
                                                "type": "Identifier",
                                                "name": "k"
                                              }
                                            }
                                          ]
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
                                  "type": "MemberExpression",
                                  "computed": true,
                                  "object": {
                                    "type": "Identifier",
                                    "name": "ticks"
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "name": "i"
                                  }
                                },
                                "right": {
                                  "type": "Identifier",
                                  "name": "u"
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
                                "type": "BlockStatement",
                                "body": []
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
                                  "type": "MemberExpression",
                                  "computed": false,
                                  "object": {
                                    "type": "Identifier",
                                    "name": "ticks"
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "name": "length"
                                  }
                                }
                              },
                              "test": {
                                "type": "BinaryExpression",
                                "operator": ">",
                                "left": {
                                  "type": "MemberExpression",
                                  "computed": true,
                                  "object": {
                                    "type": "Identifier",
                                    "name": "ticks"
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
                                "right": {
                                  "type": "Identifier",
                                  "name": "v"
                                }
                              },
                              "update": {
                                "type": "UpdateExpression",
                                "operator": "--",
                                "argument": {
                                  "type": "Identifier",
                                  "name": "j"
                                },
                                "prefix": false
                              },
                              "body": {
                                "type": "BlockStatement",
                                "body": []
                              }
                            },
                            {
                              "type": "ExpressionStatement",
                              "expression": {
                                "type": "AssignmentExpression",
                                "operator": "=",
                                "left": {
                                  "type": "Identifier",
                                  "name": "ticks"
                                },
                                "right": {
                                  "type": "CallExpression",
                                  "callee": {
                                    "type": "MemberExpression",
                                    "computed": false,
                                    "object": {
                                      "type": "Identifier",
                                      "name": "ticks"
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "name": "slice"
                                    }
                                  },
                                  "arguments": [
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
                            }
                          ]
                        },
                        "alternate": null
                      },
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "Identifier",
                          "name": "ticks"
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
                    "name": "scale"
                  },
                  "property": {
                    "type": "Identifier",
                    "name": "tickFormat"
                  }
                },
                "right": {
                  "type": "FunctionExpression",
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "name": "n"
                    },
                    {
                      "type": "Identifier",
                      "name": "format"
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
                            "name": "d3_scale_logFormat"
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
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "AssignmentExpression",
                            "operator": "=",
                            "left": {
                              "type": "Identifier",
                              "name": "format"
                            },
                            "right": {
                              "type": "Identifier",
                              "name": "d3_scale_logFormat"
                            }
                          }
                        },
                        "alternate": {
                          "type": "IfStatement",
                          "test": {
                            "type": "BinaryExpression",
                            "operator": "!==",
                            "left": {
                              "type": "UnaryExpression",
                              "operator": "typeof",
                              "argument": {
                                "type": "Identifier",
                                "name": "format"
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
                            "type": "ExpressionStatement",
                            "expression": {
                              "type": "AssignmentExpression",
                              "operator": "=",
                              "left": {
                                "type": "Identifier",
                                "name": "format"
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
                                    "name": "format"
                                  }
                                },
                                "arguments": [
                                  {
                                    "type": "Identifier",
                                    "name": "format"
                                  }
                                ]
                              }
                            }
                          },
                          "alternate": null
                        }
                      },
                      {
                        "type": "VariableDeclaration",
                        "declarations": [
                          {
                            "type": "VariableDeclarator",
                            "id": {
                              "type": "Identifier",
                              "name": "k"
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
                                  "name": "max"
                                }
                              },
                              "arguments": [
                                {
                                  "type": "Literal",
                                  "value": 0.1,
                                  "raw": ".1"
                                },
                                {
                                  "type": "BinaryExpression",
                                  "operator": "/",
                                  "left": {
                                    "type": "Identifier",
                                    "name": "n"
                                  },
                                  "right": {
                                    "type": "MemberExpression",
                                    "computed": false,
                                    "object": {
                                      "type": "CallExpression",
                                      "callee": {
                                        "type": "MemberExpression",
                                        "computed": false,
                                        "object": {
                                          "type": "Identifier",
                                          "name": "scale"
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "name": "ticks"
                                        }
                                      },
                                      "arguments": []
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "name": "length"
                                    }
                                  }
                                }
                              ]
                            }
                          },
                          {
                            "type": "VariableDeclarator",
                            "id": {
                              "type": "Identifier",
                              "name": "f"
                            },
                            "init": {
                              "type": "ConditionalExpression",
                              "test": {
                                "type": "Identifier",
                                "name": "positive"
                              },
                              "consequent": {
                                "type": "SequenceExpression",
                                "expressions": [
                                  {
                                    "type": "AssignmentExpression",
                                    "operator": "=",
                                    "left": {
                                      "type": "Identifier",
                                      "name": "e"
                                    },
                                    "right": {
                                      "type": "Literal",
                                      "value": 1e-12,
                                      "raw": "1e-12"
                                    }
                                  },
                                  {
                                    "type": "MemberExpression",
                                    "computed": false,
                                    "object": {
                                      "type": "Identifier",
                                      "name": "Math"
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "name": "ceil"
                                    }
                                  }
                                ]
                              },
                              "alternate": {
                                "type": "SequenceExpression",
                                "expressions": [
                                  {
                                    "type": "AssignmentExpression",
                                    "operator": "=",
                                    "left": {
                                      "type": "Identifier",
                                      "name": "e"
                                    },
                                    "right": {
                                      "type": "UnaryExpression",
                                      "operator": "-",
                                      "argument": {
                                        "type": "Literal",
                                        "value": 1e-12,
                                        "raw": "1e-12"
                                      },
                                      "prefix": true
                                    }
                                  },
                                  {
                                    "type": "MemberExpression",
                                    "computed": false,
                                    "object": {
                                      "type": "Identifier",
                                      "name": "Math"
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "name": "floor"
                                    }
                                  }
                                ]
                              }
                            }
                          },
                          {
                            "type": "VariableDeclarator",
                            "id": {
                              "type": "Identifier",
                              "name": "e"
                            },
                            "init": null
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
                                  "type": "ConditionalExpression",
                                  "test": {
                                    "type": "BinaryExpression",
                                    "operator": "<=",
                                    "left": {
                                      "type": "BinaryExpression",
                                      "operator": "/",
                                      "left": {
                                        "type": "Identifier",
                                        "name": "d"
                                      },
                                      "right": {
                                        "type": "CallExpression",
                                        "callee": {
                                          "type": "Identifier",
                                          "name": "pow"
                                        },
                                        "arguments": [
                                          {
                                            "type": "CallExpression",
                                            "callee": {
                                              "type": "Identifier",
                                              "name": "f"
                                            },
                                            "arguments": [
                                              {
                                                "type": "BinaryExpression",
                                                "operator": "+",
                                                "left": {
                                                  "type": "CallExpression",
                                                  "callee": {
                                                    "type": "Identifier",
                                                    "name": "log"
                                                  },
                                                  "arguments": [
                                                    {
                                                      "type": "Identifier",
                                                      "name": "d"
                                                    }
                                                  ]
                                                },
                                                "right": {
                                                  "type": "Identifier",
                                                  "name": "e"
                                                }
                                              }
                                            ]
                                          }
                                        ]
                                      }
                                    },
                                    "right": {
                                      "type": "Identifier",
                                      "name": "k"
                                    }
                                  },
                                  "consequent": {
                                    "type": "CallExpression",
                                    "callee": {
                                      "type": "Identifier",
                                      "name": "format"
                                    },
                                    "arguments": [
                                      {
                                        "type": "Identifier",
                                        "name": "d"
                                      }
                                    ]
                                  },
                                  "alternate": {
                                    "type": "Literal",
                                    "value": "",
                                    "raw": "\"\""
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
                    "name": "scale"
                  },
                  "property": {
                    "type": "Identifier",
                    "name": "copy"
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
                          "type": "CallExpression",
                          "callee": {
                            "type": "Identifier",
                            "name": "d3_scale_log"
                          },
                          "arguments": [
                            {
                              "type": "CallExpression",
                              "callee": {
                                "type": "MemberExpression",
                                "computed": false,
                                "object": {
                                  "type": "Identifier",
                                  "name": "linear"
                                },
                                "property": {
                                  "type": "Identifier",
                                  "name": "copy"
                                }
                              },
                              "arguments": []
                            },
                            {
                              "type": "Identifier",
                              "name": "base"
                            },
                            {
                              "type": "Identifier",
                              "name": "positive"
                            },
                            {
                              "type": "Identifier",
                              "name": "domain"
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
              "type": "ReturnStatement",
              "argument": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "name": "d3_scale_linearRebind"
                },
                "arguments": [
                  {
                    "type": "Identifier",
                    "name": "scale"
                  },
                  {
                    "type": "Identifier",
                    "name": "linear"
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
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "name": "d3_scale_logFormat"
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
                  "name": "format"
                }
              },
              "arguments": [
                {
                  "type": "Literal",
                  "value": ".0e",
                  "raw": "\".0e\""
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
              "name": "d3_scale_logNiceNegative"
            },
            "init": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "key": {
                    "type": "Identifier",
                    "name": "floor"
                  },
                  "value": {
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
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "UnaryExpression",
                            "operator": "-",
                            "argument": {
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
                                  "name": "ceil"
                                }
                              },
                              "arguments": [
                                {
                                  "type": "UnaryExpression",
                                  "operator": "-",
                                  "argument": {
                                    "type": "Identifier",
                                    "name": "x"
                                  },
                                  "prefix": true
                                }
                              ]
                            },
                            "prefix": true
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
                    "type": "Identifier",
                    "name": "ceil"
                  },
                  "value": {
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
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "UnaryExpression",
                            "operator": "-",
                            "argument": {
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
                                  "name": "floor"
                                }
                              },
                              "arguments": [
                                {
                                  "type": "UnaryExpression",
                                  "operator": "-",
                                  "argument": {
                                    "type": "Identifier",
                                    "name": "x"
                                  },
                                  "prefix": true
                                }
                              ]
                            },
                            "prefix": true
                          }
                        }
                      ]
                    },
                    "rest": null,
                    "generator": false,
                    "expression": false
                  },
                  "kind": "init"
                }
              ]
            }
          }
        ]
      }
    ]
  },
  "src": "d3.scale.log = function () {\n    return d3_scale_log(d3.scale.linear().domain([\n        0,\n        1\n    ]), 10, true, [\n        1,\n        10\n    ]);\n};\nfunction d3_scale_log(linear, base, positive, domain) {\n    function log(x) {\n        return (positive ? Math.log(x < 0 ? 0 : x) : -Math.log(x > 0 ? 0 : -x)) / Math.log(base);\n    }\n    function pow(x) {\n        return positive ? Math.pow(base, x) : -Math.pow(base, -x);\n    }\n    function scale(x) {\n        return linear(log(x));\n    }\n    scale.invert = function (x) {\n        return pow(linear.invert(x));\n    };\n    scale.domain = function (x) {\n        if (!arguments.length)\n            return domain;\n        positive = x[0] >= 0;\n        linear.domain((domain = x.map(Number)).map(log));\n        return scale;\n    };\n    scale.base = function (_) {\n        if (!arguments.length)\n            return base;\n        base = +_;\n        linear.domain(domain.map(log));\n        return scale;\n    };\n    scale.nice = function () {\n        var niced = d3_scale_nice(domain.map(log), positive ? Math : d3_scale_logNiceNegative);\n        linear.domain(niced);\n        domain = niced.map(pow);\n        return scale;\n    };\n    scale.ticks = function () {\n        var extent = d3_scaleExtent(domain), ticks = [], u = extent[0], v = extent[1], i = Math.floor(log(u)), j = Math.ceil(log(v)), n = base % 1 ? 2 : base;\n        if (isFinite(j - i)) {\n            if (positive) {\n                for (; i < j; i++)\n                    for (var k = 1; k < n; k++)\n                        ticks.push(pow(i) * k);\n                ticks.push(pow(i));\n            } else {\n                ticks.push(pow(i));\n                for (; i++ < j;)\n                    for (var k = n - 1; k > 0; k--)\n                        ticks.push(pow(i) * k);\n            }\n            for (i = 0; ticks[i] < u; i++) {\n            }\n            for (j = ticks.length; ticks[j - 1] > v; j--) {\n            }\n            ticks = ticks.slice(i, j);\n        }\n        return ticks;\n    };\n    scale.tickFormat = function (n, format) {\n        if (!arguments.length)\n            return d3_scale_logFormat;\n        if (arguments.length < 2)\n            format = d3_scale_logFormat;\n        else if (typeof format !== 'function')\n            format = d3.format(format);\n        var k = Math.max(0.1, n / scale.ticks().length), f = positive ? (e = 1e-12, Math.ceil) : (e = -1e-12, Math.floor), e;\n        return function (d) {\n            return d / pow(f(log(d) + e)) <= k ? format(d) : '';\n        };\n    };\n    scale.copy = function () {\n        return d3_scale_log(linear.copy(), base, positive, domain);\n    };\n    return d3_scale_linearRebind(scale, linear);\n}\nvar d3_scale_logFormat = d3.format('.0e');\nvar d3_scale_logNiceNegative = {\n        floor: function (x) {\n            return -Math.ceil(-x);\n        },\n        ceil: function (x) {\n            return -Math.floor(-x);\n        }\n    };"
}