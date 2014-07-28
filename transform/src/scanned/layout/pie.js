{
  "filepath": "/layout/pie.js",
  "shared": [],
  "dependencies": [
    "d3.sum",
    "d3.range"
  ],
  "helpers": [
    "d3_layout_pieSortByValue"
  ],
  "exports": [
    "d3.layout.pie"
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
              "name": "pie"
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
                        "name": "value"
                      },
                      "init": {
                        "type": "Identifier",
                        "name": "Number"
                      }
                    },
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "name": "sort"
                      },
                      "init": {
                        "type": "Identifier",
                        "name": "d3_layout_pieSortByValue"
                      }
                    },
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "name": "startAngle"
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
                        "name": "endAngle"
                      },
                      "init": {
                        "type": "Identifier",
                        "name": "τ"
                      }
                    }
                  ],
                  "kind": "var"
                },
                {
                  "type": "FunctionDeclaration",
                  "id": {
                    "type": "Identifier",
                    "name": "pie"
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
                              "name": "values"
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
                                          "type": "UnaryExpression",
                                          "operator": "+",
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
                                                "name": "call"
                                              }
                                            },
                                            "arguments": [
                                              {
                                                "type": "Identifier",
                                                "name": "pie"
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
                                          },
                                          "prefix": true
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
                              "name": "a"
                            },
                            "init": {
                              "type": "UnaryExpression",
                              "operator": "+",
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
                                      "name": "startAngle"
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
                                  "type": "CallExpression",
                                  "callee": {
                                    "type": "MemberExpression",
                                    "computed": false,
                                    "object": {
                                      "type": "Identifier",
                                      "name": "startAngle"
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
                                },
                                "alternate": {
                                  "type": "Identifier",
                                  "name": "startAngle"
                                }
                              },
                              "prefix": true
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
                              "name": "k"
                            },
                            "init": {
                              "type": "BinaryExpression",
                              "operator": "/",
                              "left": {
                                "type": "BinaryExpression",
                                "operator": "-",
                                "left": {
                                  "type": "ConditionalExpression",
                                  "test": {
                                    "type": "BinaryExpression",
                                    "operator": "===",
                                    "left": {
                                      "type": "UnaryExpression",
                                      "operator": "typeof",
                                      "argument": {
                                        "type": "Identifier",
                                        "name": "endAngle"
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
                                    "type": "CallExpression",
                                    "callee": {
                                      "type": "MemberExpression",
                                      "computed": false,
                                      "object": {
                                        "type": "Identifier",
                                        "name": "endAngle"
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
                                  },
                                  "alternate": {
                                    "type": "Identifier",
                                    "name": "endAngle"
                                  }
                                },
                                "right": {
                                  "type": "Identifier",
                                  "name": "a"
                                }
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
                                    "name": "sum"
                                  }
                                },
                                "arguments": [
                                  {
                                    "type": "Identifier",
                                    "name": "values"
                                  }
                                ]
                              }
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
                              "name": "index"
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
                        ],
                        "kind": "var"
                      },
                      {
                        "type": "IfStatement",
                        "test": {
                          "type": "BinaryExpression",
                          "operator": "!=",
                          "left": {
                            "type": "Identifier",
                            "name": "sort"
                          },
                          "right": {
                            "type": "Literal",
                            "value": null,
                            "raw": "null"
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
                                "name": "index"
                              },
                              "property": {
                                "type": "Identifier",
                                "name": "sort"
                              }
                            },
                            "arguments": [
                              {
                                "type": "ConditionalExpression",
                                "test": {
                                  "type": "BinaryExpression",
                                  "operator": "===",
                                  "left": {
                                    "type": "Identifier",
                                    "name": "sort"
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "name": "d3_layout_pieSortByValue"
                                  }
                                },
                                "consequent": {
                                  "type": "FunctionExpression",
                                  "id": null,
                                  "params": [
                                    {
                                      "type": "Identifier",
                                      "name": "i"
                                    },
                                    {
                                      "type": "Identifier",
                                      "name": "j"
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
                                              "name": "values"
                                            },
                                            "property": {
                                              "type": "Identifier",
                                              "name": "j"
                                            }
                                          },
                                          "right": {
                                            "type": "MemberExpression",
                                            "computed": true,
                                            "object": {
                                              "type": "Identifier",
                                              "name": "values"
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
                                  "rest": null,
                                  "generator": false,
                                  "expression": false
                                },
                                "alternate": {
                                  "type": "FunctionExpression",
                                  "id": null,
                                  "params": [
                                    {
                                      "type": "Identifier",
                                      "name": "i"
                                    },
                                    {
                                      "type": "Identifier",
                                      "name": "j"
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
                                            "name": "sort"
                                          },
                                          "arguments": [
                                            {
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
                                            {
                                              "type": "MemberExpression",
                                              "computed": true,
                                              "object": {
                                                "type": "Identifier",
                                                "name": "data"
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "name": "j"
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
                              "name": "arcs"
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
                          "type": "CallExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "name": "index"
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
                                  "name": "i"
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
                                        "type": "MemberExpression",
                                        "computed": true,
                                        "object": {
                                          "type": "Identifier",
                                          "name": "arcs"
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "name": "i"
                                        }
                                      },
                                      "right": {
                                        "type": "ObjectExpression",
                                        "properties": [
                                          {
                                            "type": "Property",
                                            "key": {
                                              "type": "Identifier",
                                              "name": "data"
                                            },
                                            "value": {
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
                                            "kind": "init"
                                          },
                                          {
                                            "type": "Property",
                                            "key": {
                                              "type": "Identifier",
                                              "name": "value"
                                            },
                                            "value": {
                                              "type": "AssignmentExpression",
                                              "operator": "=",
                                              "left": {
                                                "type": "Identifier",
                                                "name": "d"
                                              },
                                              "right": {
                                                "type": "MemberExpression",
                                                "computed": true,
                                                "object": {
                                                  "type": "Identifier",
                                                  "name": "values"
                                                },
                                                "property": {
                                                  "type": "Identifier",
                                                  "name": "i"
                                                }
                                              }
                                            },
                                            "kind": "init"
                                          },
                                          {
                                            "type": "Property",
                                            "key": {
                                              "type": "Identifier",
                                              "name": "startAngle"
                                            },
                                            "value": {
                                              "type": "Identifier",
                                              "name": "a"
                                            },
                                            "kind": "init"
                                          },
                                          {
                                            "type": "Property",
                                            "key": {
                                              "type": "Identifier",
                                              "name": "endAngle"
                                            },
                                            "value": {
                                              "type": "AssignmentExpression",
                                              "operator": "+=",
                                              "left": {
                                                "type": "Identifier",
                                                "name": "a"
                                              },
                                              "right": {
                                                "type": "BinaryExpression",
                                                "operator": "*",
                                                "left": {
                                                  "type": "Identifier",
                                                  "name": "d"
                                                },
                                                "right": {
                                                  "type": "Identifier",
                                                  "name": "k"
                                                }
                                              }
                                            },
                                            "kind": "init"
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
                            }
                          ]
                        }
                      },
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "Identifier",
                          "name": "arcs"
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
                        "name": "pie"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "value"
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
                                "name": "value"
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
                                "name": "value"
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
                              "name": "pie"
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
                        "name": "pie"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "sort"
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
                                "name": "sort"
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
                                "name": "sort"
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
                              "name": "pie"
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
                        "name": "pie"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "startAngle"
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
                                "name": "startAngle"
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
                                "name": "startAngle"
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
                              "name": "pie"
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
                        "name": "pie"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "endAngle"
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
                                "name": "endAngle"
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
                                "name": "endAngle"
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
                              "name": "pie"
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
                    "name": "pie"
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
        "type": "VariableDeclaration",
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "name": "d3_layout_pieSortByValue"
            },
            "init": {
              "type": "ObjectExpression",
              "properties": []
            }
          }
        ]
      }
    ]
  },
  "src": "d3.layout.pie = function () {\n    var value = Number, sort = d3_layout_pieSortByValue, startAngle = 0, endAngle = τ;\n    function pie(data) {\n        var values = data.map(function (d, i) {\n                return +value.call(pie, d, i);\n            });\n        var a = +(typeof startAngle === 'function' ? startAngle.apply(this, arguments) : startAngle);\n        var k = ((typeof endAngle === 'function' ? endAngle.apply(this, arguments) : endAngle) - a) / d3.sum(values);\n        var index = d3.range(data.length);\n        if (sort != null)\n            index.sort(sort === d3_layout_pieSortByValue ? function (i, j) {\n                return values[j] - values[i];\n            } : function (i, j) {\n                return sort(data[i], data[j]);\n            });\n        var arcs = [];\n        index.forEach(function (i) {\n            var d;\n            arcs[i] = {\n                data: data[i],\n                value: d = values[i],\n                startAngle: a,\n                endAngle: a += d * k\n            };\n        });\n        return arcs;\n    }\n    pie.value = function (x) {\n        if (!arguments.length)\n            return value;\n        value = x;\n        return pie;\n    };\n    pie.sort = function (x) {\n        if (!arguments.length)\n            return sort;\n        sort = x;\n        return pie;\n    };\n    pie.startAngle = function (x) {\n        if (!arguments.length)\n            return startAngle;\n        startAngle = x;\n        return pie;\n    };\n    pie.endAngle = function (x) {\n        if (!arguments.length)\n            return endAngle;\n        endAngle = x;\n        return pie;\n    };\n    return pie;\n};\nvar d3_layout_pieSortByValue = {};"
}