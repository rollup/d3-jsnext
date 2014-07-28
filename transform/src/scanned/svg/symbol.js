{
  "filepath": "/svg/symbol.js",
  "shared": [],
  "dependencies": [
    "d3_functor",
    "d3.map",
    "d3_radians"
  ],
  "helpers": [
    "d3_svg_symbolSize",
    "d3_svg_symbolType",
    "d3_svg_symbolCircle",
    "d3_svg_symbols",
    "d3_svg_symbolSqrt3",
    "d3_svg_symbolTan30"
  ],
  "exports": [
    "d3.svg.symbol",
    "d3.svg.symbolTypes"
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
                "name": "svg"
              }
            },
            "property": {
              "type": "Identifier",
              "name": "symbol"
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
                        "name": "type"
                      },
                      "init": {
                        "type": "Identifier",
                        "name": "d3_svg_symbolType"
                      }
                    },
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "name": "size"
                      },
                      "init": {
                        "type": "Identifier",
                        "name": "d3_svg_symbolSize"
                      }
                    }
                  ],
                  "kind": "var"
                },
                {
                  "type": "FunctionDeclaration",
                  "id": {
                    "type": "Identifier",
                    "name": "symbol"
                  },
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
                            "type": "LogicalExpression",
                            "operator": "||",
                            "left": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "MemberExpression",
                                "computed": false,
                                "object": {
                                  "type": "Identifier",
                                  "name": "d3_svg_symbols"
                                },
                                "property": {
                                  "type": "Identifier",
                                  "name": "get"
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
                                      "name": "type"
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "name": "call"
                                    }
                                  },
                                  "arguments": [
                                    {
                                      "type": "ThisExpression"
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
                              ]
                            },
                            "right": {
                              "type": "Identifier",
                              "name": "d3_svg_symbolCircle"
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
                                  "name": "size"
                                },
                                "property": {
                                  "type": "Identifier",
                                  "name": "call"
                                }
                              },
                              "arguments": [
                                {
                                  "type": "ThisExpression"
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
                        "name": "symbol"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "type"
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
                                "name": "type"
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
                                "name": "type"
                              },
                              "right": {
                                "type": "CallExpression",
                                "callee": {
                                  "type": "Identifier",
                                  "name": "d3_functor"
                                },
                                "arguments": [
                                  {
                                    "type": "Identifier",
                                    "name": "x"
                                  }
                                ]
                              }
                            }
                          },
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "Identifier",
                              "name": "symbol"
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
                        "name": "symbol"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "size"
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
                                "name": "size"
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
                                "name": "size"
                              },
                              "right": {
                                "type": "CallExpression",
                                "callee": {
                                  "type": "Identifier",
                                  "name": "d3_functor"
                                },
                                "arguments": [
                                  {
                                    "type": "Identifier",
                                    "name": "x"
                                  }
                                ]
                              }
                            }
                          },
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "Identifier",
                              "name": "symbol"
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
                    "name": "symbol"
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
          "name": "d3_svg_symbolSize"
        },
        "params": [],
        "defaults": [],
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "ReturnStatement",
              "argument": {
                "type": "Literal",
                "value": 64,
                "raw": "64"
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
          "name": "d3_svg_symbolType"
        },
        "params": [],
        "defaults": [],
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "ReturnStatement",
              "argument": {
                "type": "Literal",
                "value": "circle",
                "raw": "\"circle\""
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
          "name": "d3_svg_symbolCircle"
        },
        "params": [
          {
            "type": "Identifier",
            "name": "size"
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
                    "name": "r"
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
                        "name": "sqrt"
                      }
                    },
                    "arguments": [
                      {
                        "type": "BinaryExpression",
                        "operator": "/",
                        "left": {
                          "type": "Identifier",
                          "name": "size"
                        },
                        "right": {
                          "type": "Identifier",
                          "name": "π"
                        }
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
                "type": "BinaryExpression",
                "operator": "+",
                "left": {
                  "type": "BinaryExpression",
                  "operator": "+",
                  "left": {
                    "type": "BinaryExpression",
                    "operator": "+",
                    "left": {
                      "type": "BinaryExpression",
                      "operator": "+",
                      "left": {
                        "type": "BinaryExpression",
                        "operator": "+",
                        "left": {
                          "type": "BinaryExpression",
                          "operator": "+",
                          "left": {
                            "type": "BinaryExpression",
                            "operator": "+",
                            "left": {
                              "type": "BinaryExpression",
                              "operator": "+",
                              "left": {
                                "type": "BinaryExpression",
                                "operator": "+",
                                "left": {
                                  "type": "BinaryExpression",
                                  "operator": "+",
                                  "left": {
                                    "type": "BinaryExpression",
                                    "operator": "+",
                                    "left": {
                                      "type": "BinaryExpression",
                                      "operator": "+",
                                      "left": {
                                        "type": "BinaryExpression",
                                        "operator": "+",
                                        "left": {
                                          "type": "BinaryExpression",
                                          "operator": "+",
                                          "left": {
                                            "type": "Literal",
                                            "value": "M0,",
                                            "raw": "\"M0,\""
                                          },
                                          "right": {
                                            "type": "Identifier",
                                            "name": "r"
                                          }
                                        },
                                        "right": {
                                          "type": "Literal",
                                          "value": "A",
                                          "raw": "\"A\""
                                        }
                                      },
                                      "right": {
                                        "type": "Identifier",
                                        "name": "r"
                                      }
                                    },
                                    "right": {
                                      "type": "Literal",
                                      "value": ",",
                                      "raw": "\",\""
                                    }
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "name": "r"
                                  }
                                },
                                "right": {
                                  "type": "Literal",
                                  "value": " 0 1,1 0,",
                                  "raw": "\" 0 1,1 0,\""
                                }
                              },
                              "right": {
                                "type": "UnaryExpression",
                                "operator": "-",
                                "argument": {
                                  "type": "Identifier",
                                  "name": "r"
                                },
                                "prefix": true
                              }
                            },
                            "right": {
                              "type": "Literal",
                              "value": "A",
                              "raw": "\"A\""
                            }
                          },
                          "right": {
                            "type": "Identifier",
                            "name": "r"
                          }
                        },
                        "right": {
                          "type": "Literal",
                          "value": ",",
                          "raw": "\",\""
                        }
                      },
                      "right": {
                        "type": "Identifier",
                        "name": "r"
                      }
                    },
                    "right": {
                      "type": "Literal",
                      "value": " 0 1,1 0,",
                      "raw": "\" 0 1,1 0,\""
                    }
                  },
                  "right": {
                    "type": "Identifier",
                    "name": "r"
                  }
                },
                "right": {
                  "type": "Literal",
                  "value": "Z",
                  "raw": "\"Z\""
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
              "name": "d3_svg_symbols"
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
                        "value": "circle",
                        "raw": "\"circle\""
                      },
                      "value": {
                        "type": "Identifier",
                        "name": "d3_svg_symbolCircle"
                      },
                      "kind": "init"
                    },
                    {
                      "type": "Property",
                      "key": {
                        "type": "Literal",
                        "value": "cross",
                        "raw": "\"cross\""
                      },
                      "value": {
                        "type": "FunctionExpression",
                        "id": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "name": "size"
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
                                    "name": "r"
                                  },
                                  "init": {
                                    "type": "BinaryExpression",
                                    "operator": "/",
                                    "left": {
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
                                          "name": "sqrt"
                                        }
                                      },
                                      "arguments": [
                                        {
                                          "type": "BinaryExpression",
                                          "operator": "/",
                                          "left": {
                                            "type": "Identifier",
                                            "name": "size"
                                          },
                                          "right": {
                                            "type": "Literal",
                                            "value": 5,
                                            "raw": "5"
                                          }
                                        }
                                      ]
                                    },
                                    "right": {
                                      "type": "Literal",
                                      "value": 2,
                                      "raw": "2"
                                    }
                                  }
                                }
                              ],
                              "kind": "var"
                            },
                            {
                              "type": "ReturnStatement",
                              "argument": {
                                "type": "BinaryExpression",
                                "operator": "+",
                                "left": {
                                  "type": "BinaryExpression",
                                  "operator": "+",
                                  "left": {
                                    "type": "BinaryExpression",
                                    "operator": "+",
                                    "left": {
                                      "type": "BinaryExpression",
                                      "operator": "+",
                                      "left": {
                                        "type": "BinaryExpression",
                                        "operator": "+",
                                        "left": {
                                          "type": "BinaryExpression",
                                          "operator": "+",
                                          "left": {
                                            "type": "BinaryExpression",
                                            "operator": "+",
                                            "left": {
                                              "type": "BinaryExpression",
                                              "operator": "+",
                                              "left": {
                                                "type": "BinaryExpression",
                                                "operator": "+",
                                                "left": {
                                                  "type": "BinaryExpression",
                                                  "operator": "+",
                                                  "left": {
                                                    "type": "BinaryExpression",
                                                    "operator": "+",
                                                    "left": {
                                                      "type": "BinaryExpression",
                                                      "operator": "+",
                                                      "left": {
                                                        "type": "BinaryExpression",
                                                        "operator": "+",
                                                        "left": {
                                                          "type": "BinaryExpression",
                                                          "operator": "+",
                                                          "left": {
                                                            "type": "BinaryExpression",
                                                            "operator": "+",
                                                            "left": {
                                                              "type": "BinaryExpression",
                                                              "operator": "+",
                                                              "left": {
                                                                "type": "BinaryExpression",
                                                                "operator": "+",
                                                                "left": {
                                                                  "type": "BinaryExpression",
                                                                  "operator": "+",
                                                                  "left": {
                                                                    "type": "BinaryExpression",
                                                                    "operator": "+",
                                                                    "left": {
                                                                      "type": "BinaryExpression",
                                                                      "operator": "+",
                                                                      "left": {
                                                                        "type": "BinaryExpression",
                                                                        "operator": "+",
                                                                        "left": {
                                                                          "type": "BinaryExpression",
                                                                          "operator": "+",
                                                                          "left": {
                                                                            "type": "BinaryExpression",
                                                                            "operator": "+",
                                                                            "left": {
                                                                              "type": "BinaryExpression",
                                                                              "operator": "+",
                                                                              "left": {
                                                                                "type": "BinaryExpression",
                                                                                "operator": "+",
                                                                                "left": {
                                                                                  "type": "BinaryExpression",
                                                                                  "operator": "+",
                                                                                  "left": {
                                                                                    "type": "Literal",
                                                                                    "value": "M",
                                                                                    "raw": "\"M\""
                                                                                  },
                                                                                  "right": {
                                                                                    "type": "BinaryExpression",
                                                                                    "operator": "*",
                                                                                    "left": {
                                                                                      "type": "UnaryExpression",
                                                                                      "operator": "-",
                                                                                      "argument": {
                                                                                        "type": "Literal",
                                                                                        "value": 3,
                                                                                        "raw": "3"
                                                                                      },
                                                                                      "prefix": true
                                                                                    },
                                                                                    "right": {
                                                                                      "type": "Identifier",
                                                                                      "name": "r"
                                                                                    }
                                                                                  }
                                                                                },
                                                                                "right": {
                                                                                  "type": "Literal",
                                                                                  "value": ",",
                                                                                  "raw": "\",\""
                                                                                }
                                                                              },
                                                                              "right": {
                                                                                "type": "UnaryExpression",
                                                                                "operator": "-",
                                                                                "argument": {
                                                                                  "type": "Identifier",
                                                                                  "name": "r"
                                                                                },
                                                                                "prefix": true
                                                                              }
                                                                            },
                                                                            "right": {
                                                                              "type": "Literal",
                                                                              "value": "H",
                                                                              "raw": "\"H\""
                                                                            }
                                                                          },
                                                                          "right": {
                                                                            "type": "UnaryExpression",
                                                                            "operator": "-",
                                                                            "argument": {
                                                                              "type": "Identifier",
                                                                              "name": "r"
                                                                            },
                                                                            "prefix": true
                                                                          }
                                                                        },
                                                                        "right": {
                                                                          "type": "Literal",
                                                                          "value": "V",
                                                                          "raw": "\"V\""
                                                                        }
                                                                      },
                                                                      "right": {
                                                                        "type": "BinaryExpression",
                                                                        "operator": "*",
                                                                        "left": {
                                                                          "type": "UnaryExpression",
                                                                          "operator": "-",
                                                                          "argument": {
                                                                            "type": "Literal",
                                                                            "value": 3,
                                                                            "raw": "3"
                                                                          },
                                                                          "prefix": true
                                                                        },
                                                                        "right": {
                                                                          "type": "Identifier",
                                                                          "name": "r"
                                                                        }
                                                                      }
                                                                    },
                                                                    "right": {
                                                                      "type": "Literal",
                                                                      "value": "H",
                                                                      "raw": "\"H\""
                                                                    }
                                                                  },
                                                                  "right": {
                                                                    "type": "Identifier",
                                                                    "name": "r"
                                                                  }
                                                                },
                                                                "right": {
                                                                  "type": "Literal",
                                                                  "value": "V",
                                                                  "raw": "\"V\""
                                                                }
                                                              },
                                                              "right": {
                                                                "type": "UnaryExpression",
                                                                "operator": "-",
                                                                "argument": {
                                                                  "type": "Identifier",
                                                                  "name": "r"
                                                                },
                                                                "prefix": true
                                                              }
                                                            },
                                                            "right": {
                                                              "type": "Literal",
                                                              "value": "H",
                                                              "raw": "\"H\""
                                                            }
                                                          },
                                                          "right": {
                                                            "type": "BinaryExpression",
                                                            "operator": "*",
                                                            "left": {
                                                              "type": "Literal",
                                                              "value": 3,
                                                              "raw": "3"
                                                            },
                                                            "right": {
                                                              "type": "Identifier",
                                                              "name": "r"
                                                            }
                                                          }
                                                        },
                                                        "right": {
                                                          "type": "Literal",
                                                          "value": "V",
                                                          "raw": "\"V\""
                                                        }
                                                      },
                                                      "right": {
                                                        "type": "Identifier",
                                                        "name": "r"
                                                      }
                                                    },
                                                    "right": {
                                                      "type": "Literal",
                                                      "value": "H",
                                                      "raw": "\"H\""
                                                    }
                                                  },
                                                  "right": {
                                                    "type": "Identifier",
                                                    "name": "r"
                                                  }
                                                },
                                                "right": {
                                                  "type": "Literal",
                                                  "value": "V",
                                                  "raw": "\"V\""
                                                }
                                              },
                                              "right": {
                                                "type": "BinaryExpression",
                                                "operator": "*",
                                                "left": {
                                                  "type": "Literal",
                                                  "value": 3,
                                                  "raw": "3"
                                                },
                                                "right": {
                                                  "type": "Identifier",
                                                  "name": "r"
                                                }
                                              }
                                            },
                                            "right": {
                                              "type": "Literal",
                                              "value": "H",
                                              "raw": "\"H\""
                                            }
                                          },
                                          "right": {
                                            "type": "UnaryExpression",
                                            "operator": "-",
                                            "argument": {
                                              "type": "Identifier",
                                              "name": "r"
                                            },
                                            "prefix": true
                                          }
                                        },
                                        "right": {
                                          "type": "Literal",
                                          "value": "V",
                                          "raw": "\"V\""
                                        }
                                      },
                                      "right": {
                                        "type": "Identifier",
                                        "name": "r"
                                      }
                                    },
                                    "right": {
                                      "type": "Literal",
                                      "value": "H",
                                      "raw": "\"H\""
                                    }
                                  },
                                  "right": {
                                    "type": "BinaryExpression",
                                    "operator": "*",
                                    "left": {
                                      "type": "UnaryExpression",
                                      "operator": "-",
                                      "argument": {
                                        "type": "Literal",
                                        "value": 3,
                                        "raw": "3"
                                      },
                                      "prefix": true
                                    },
                                    "right": {
                                      "type": "Identifier",
                                      "name": "r"
                                    }
                                  }
                                },
                                "right": {
                                  "type": "Literal",
                                  "value": "Z",
                                  "raw": "\"Z\""
                                }
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
                        "value": "diamond",
                        "raw": "\"diamond\""
                      },
                      "value": {
                        "type": "FunctionExpression",
                        "id": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "name": "size"
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
                                    "name": "ry"
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
                                        "name": "sqrt"
                                      }
                                    },
                                    "arguments": [
                                      {
                                        "type": "BinaryExpression",
                                        "operator": "/",
                                        "left": {
                                          "type": "Identifier",
                                          "name": "size"
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
                                            "name": "d3_svg_symbolTan30"
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
                                    "name": "rx"
                                  },
                                  "init": {
                                    "type": "BinaryExpression",
                                    "operator": "*",
                                    "left": {
                                      "type": "Identifier",
                                      "name": "ry"
                                    },
                                    "right": {
                                      "type": "Identifier",
                                      "name": "d3_svg_symbolTan30"
                                    }
                                  }
                                }
                              ],
                              "kind": "var"
                            },
                            {
                              "type": "ReturnStatement",
                              "argument": {
                                "type": "BinaryExpression",
                                "operator": "+",
                                "left": {
                                  "type": "BinaryExpression",
                                  "operator": "+",
                                  "left": {
                                    "type": "BinaryExpression",
                                    "operator": "+",
                                    "left": {
                                      "type": "BinaryExpression",
                                      "operator": "+",
                                      "left": {
                                        "type": "BinaryExpression",
                                        "operator": "+",
                                        "left": {
                                          "type": "BinaryExpression",
                                          "operator": "+",
                                          "left": {
                                            "type": "BinaryExpression",
                                            "operator": "+",
                                            "left": {
                                              "type": "BinaryExpression",
                                              "operator": "+",
                                              "left": {
                                                "type": "BinaryExpression",
                                                "operator": "+",
                                                "left": {
                                                  "type": "BinaryExpression",
                                                  "operator": "+",
                                                  "left": {
                                                    "type": "Literal",
                                                    "value": "M0,",
                                                    "raw": "\"M0,\""
                                                  },
                                                  "right": {
                                                    "type": "UnaryExpression",
                                                    "operator": "-",
                                                    "argument": {
                                                      "type": "Identifier",
                                                      "name": "ry"
                                                    },
                                                    "prefix": true
                                                  }
                                                },
                                                "right": {
                                                  "type": "Literal",
                                                  "value": "L",
                                                  "raw": "\"L\""
                                                }
                                              },
                                              "right": {
                                                "type": "Identifier",
                                                "name": "rx"
                                              }
                                            },
                                            "right": {
                                              "type": "Literal",
                                              "value": ",0",
                                              "raw": "\",0\""
                                            }
                                          },
                                          "right": {
                                            "type": "Literal",
                                            "value": " 0,",
                                            "raw": "\" 0,\""
                                          }
                                        },
                                        "right": {
                                          "type": "Identifier",
                                          "name": "ry"
                                        }
                                      },
                                      "right": {
                                        "type": "Literal",
                                        "value": " ",
                                        "raw": "\" \""
                                      }
                                    },
                                    "right": {
                                      "type": "UnaryExpression",
                                      "operator": "-",
                                      "argument": {
                                        "type": "Identifier",
                                        "name": "rx"
                                      },
                                      "prefix": true
                                    }
                                  },
                                  "right": {
                                    "type": "Literal",
                                    "value": ",0",
                                    "raw": "\",0\""
                                  }
                                },
                                "right": {
                                  "type": "Literal",
                                  "value": "Z",
                                  "raw": "\"Z\""
                                }
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
                        "value": "square",
                        "raw": "\"square\""
                      },
                      "value": {
                        "type": "FunctionExpression",
                        "id": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "name": "size"
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
                                    "name": "r"
                                  },
                                  "init": {
                                    "type": "BinaryExpression",
                                    "operator": "/",
                                    "left": {
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
                                          "name": "sqrt"
                                        }
                                      },
                                      "arguments": [
                                        {
                                          "type": "Identifier",
                                          "name": "size"
                                        }
                                      ]
                                    },
                                    "right": {
                                      "type": "Literal",
                                      "value": 2,
                                      "raw": "2"
                                    }
                                  }
                                }
                              ],
                              "kind": "var"
                            },
                            {
                              "type": "ReturnStatement",
                              "argument": {
                                "type": "BinaryExpression",
                                "operator": "+",
                                "left": {
                                  "type": "BinaryExpression",
                                  "operator": "+",
                                  "left": {
                                    "type": "BinaryExpression",
                                    "operator": "+",
                                    "left": {
                                      "type": "BinaryExpression",
                                      "operator": "+",
                                      "left": {
                                        "type": "BinaryExpression",
                                        "operator": "+",
                                        "left": {
                                          "type": "BinaryExpression",
                                          "operator": "+",
                                          "left": {
                                            "type": "BinaryExpression",
                                            "operator": "+",
                                            "left": {
                                              "type": "BinaryExpression",
                                              "operator": "+",
                                              "left": {
                                                "type": "BinaryExpression",
                                                "operator": "+",
                                                "left": {
                                                  "type": "BinaryExpression",
                                                  "operator": "+",
                                                  "left": {
                                                    "type": "BinaryExpression",
                                                    "operator": "+",
                                                    "left": {
                                                      "type": "BinaryExpression",
                                                      "operator": "+",
                                                      "left": {
                                                        "type": "BinaryExpression",
                                                        "operator": "+",
                                                        "left": {
                                                          "type": "BinaryExpression",
                                                          "operator": "+",
                                                          "left": {
                                                            "type": "BinaryExpression",
                                                            "operator": "+",
                                                            "left": {
                                                              "type": "BinaryExpression",
                                                              "operator": "+",
                                                              "left": {
                                                                "type": "Literal",
                                                                "value": "M",
                                                                "raw": "\"M\""
                                                              },
                                                              "right": {
                                                                "type": "UnaryExpression",
                                                                "operator": "-",
                                                                "argument": {
                                                                  "type": "Identifier",
                                                                  "name": "r"
                                                                },
                                                                "prefix": true
                                                              }
                                                            },
                                                            "right": {
                                                              "type": "Literal",
                                                              "value": ",",
                                                              "raw": "\",\""
                                                            }
                                                          },
                                                          "right": {
                                                            "type": "UnaryExpression",
                                                            "operator": "-",
                                                            "argument": {
                                                              "type": "Identifier",
                                                              "name": "r"
                                                            },
                                                            "prefix": true
                                                          }
                                                        },
                                                        "right": {
                                                          "type": "Literal",
                                                          "value": "L",
                                                          "raw": "\"L\""
                                                        }
                                                      },
                                                      "right": {
                                                        "type": "Identifier",
                                                        "name": "r"
                                                      }
                                                    },
                                                    "right": {
                                                      "type": "Literal",
                                                      "value": ",",
                                                      "raw": "\",\""
                                                    }
                                                  },
                                                  "right": {
                                                    "type": "UnaryExpression",
                                                    "operator": "-",
                                                    "argument": {
                                                      "type": "Identifier",
                                                      "name": "r"
                                                    },
                                                    "prefix": true
                                                  }
                                                },
                                                "right": {
                                                  "type": "Literal",
                                                  "value": " ",
                                                  "raw": "\" \""
                                                }
                                              },
                                              "right": {
                                                "type": "Identifier",
                                                "name": "r"
                                              }
                                            },
                                            "right": {
                                              "type": "Literal",
                                              "value": ",",
                                              "raw": "\",\""
                                            }
                                          },
                                          "right": {
                                            "type": "Identifier",
                                            "name": "r"
                                          }
                                        },
                                        "right": {
                                          "type": "Literal",
                                          "value": " ",
                                          "raw": "\" \""
                                        }
                                      },
                                      "right": {
                                        "type": "UnaryExpression",
                                        "operator": "-",
                                        "argument": {
                                          "type": "Identifier",
                                          "name": "r"
                                        },
                                        "prefix": true
                                      }
                                    },
                                    "right": {
                                      "type": "Literal",
                                      "value": ",",
                                      "raw": "\",\""
                                    }
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "name": "r"
                                  }
                                },
                                "right": {
                                  "type": "Literal",
                                  "value": "Z",
                                  "raw": "\"Z\""
                                }
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
                        "value": "triangle-down",
                        "raw": "\"triangle-down\""
                      },
                      "value": {
                        "type": "FunctionExpression",
                        "id": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "name": "size"
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
                                    "name": "rx"
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
                                        "name": "sqrt"
                                      }
                                    },
                                    "arguments": [
                                      {
                                        "type": "BinaryExpression",
                                        "operator": "/",
                                        "left": {
                                          "type": "Identifier",
                                          "name": "size"
                                        },
                                        "right": {
                                          "type": "Identifier",
                                          "name": "d3_svg_symbolSqrt3"
                                        }
                                      }
                                    ]
                                  }
                                },
                                {
                                  "type": "VariableDeclarator",
                                  "id": {
                                    "type": "Identifier",
                                    "name": "ry"
                                  },
                                  "init": {
                                    "type": "BinaryExpression",
                                    "operator": "/",
                                    "left": {
                                      "type": "BinaryExpression",
                                      "operator": "*",
                                      "left": {
                                        "type": "Identifier",
                                        "name": "rx"
                                      },
                                      "right": {
                                        "type": "Identifier",
                                        "name": "d3_svg_symbolSqrt3"
                                      }
                                    },
                                    "right": {
                                      "type": "Literal",
                                      "value": 2,
                                      "raw": "2"
                                    }
                                  }
                                }
                              ],
                              "kind": "var"
                            },
                            {
                              "type": "ReturnStatement",
                              "argument": {
                                "type": "BinaryExpression",
                                "operator": "+",
                                "left": {
                                  "type": "BinaryExpression",
                                  "operator": "+",
                                  "left": {
                                    "type": "BinaryExpression",
                                    "operator": "+",
                                    "left": {
                                      "type": "BinaryExpression",
                                      "operator": "+",
                                      "left": {
                                        "type": "BinaryExpression",
                                        "operator": "+",
                                        "left": {
                                          "type": "BinaryExpression",
                                          "operator": "+",
                                          "left": {
                                            "type": "BinaryExpression",
                                            "operator": "+",
                                            "left": {
                                              "type": "BinaryExpression",
                                              "operator": "+",
                                              "left": {
                                                "type": "BinaryExpression",
                                                "operator": "+",
                                                "left": {
                                                  "type": "BinaryExpression",
                                                  "operator": "+",
                                                  "left": {
                                                    "type": "Literal",
                                                    "value": "M0,",
                                                    "raw": "\"M0,\""
                                                  },
                                                  "right": {
                                                    "type": "Identifier",
                                                    "name": "ry"
                                                  }
                                                },
                                                "right": {
                                                  "type": "Literal",
                                                  "value": "L",
                                                  "raw": "\"L\""
                                                }
                                              },
                                              "right": {
                                                "type": "Identifier",
                                                "name": "rx"
                                              }
                                            },
                                            "right": {
                                              "type": "Literal",
                                              "value": ",",
                                              "raw": "\",\""
                                            }
                                          },
                                          "right": {
                                            "type": "UnaryExpression",
                                            "operator": "-",
                                            "argument": {
                                              "type": "Identifier",
                                              "name": "ry"
                                            },
                                            "prefix": true
                                          }
                                        },
                                        "right": {
                                          "type": "Literal",
                                          "value": " ",
                                          "raw": "\" \""
                                        }
                                      },
                                      "right": {
                                        "type": "UnaryExpression",
                                        "operator": "-",
                                        "argument": {
                                          "type": "Identifier",
                                          "name": "rx"
                                        },
                                        "prefix": true
                                      }
                                    },
                                    "right": {
                                      "type": "Literal",
                                      "value": ",",
                                      "raw": "\",\""
                                    }
                                  },
                                  "right": {
                                    "type": "UnaryExpression",
                                    "operator": "-",
                                    "argument": {
                                      "type": "Identifier",
                                      "name": "ry"
                                    },
                                    "prefix": true
                                  }
                                },
                                "right": {
                                  "type": "Literal",
                                  "value": "Z",
                                  "raw": "\"Z\""
                                }
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
                        "value": "triangle-up",
                        "raw": "\"triangle-up\""
                      },
                      "value": {
                        "type": "FunctionExpression",
                        "id": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "name": "size"
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
                                    "name": "rx"
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
                                        "name": "sqrt"
                                      }
                                    },
                                    "arguments": [
                                      {
                                        "type": "BinaryExpression",
                                        "operator": "/",
                                        "left": {
                                          "type": "Identifier",
                                          "name": "size"
                                        },
                                        "right": {
                                          "type": "Identifier",
                                          "name": "d3_svg_symbolSqrt3"
                                        }
                                      }
                                    ]
                                  }
                                },
                                {
                                  "type": "VariableDeclarator",
                                  "id": {
                                    "type": "Identifier",
                                    "name": "ry"
                                  },
                                  "init": {
                                    "type": "BinaryExpression",
                                    "operator": "/",
                                    "left": {
                                      "type": "BinaryExpression",
                                      "operator": "*",
                                      "left": {
                                        "type": "Identifier",
                                        "name": "rx"
                                      },
                                      "right": {
                                        "type": "Identifier",
                                        "name": "d3_svg_symbolSqrt3"
                                      }
                                    },
                                    "right": {
                                      "type": "Literal",
                                      "value": 2,
                                      "raw": "2"
                                    }
                                  }
                                }
                              ],
                              "kind": "var"
                            },
                            {
                              "type": "ReturnStatement",
                              "argument": {
                                "type": "BinaryExpression",
                                "operator": "+",
                                "left": {
                                  "type": "BinaryExpression",
                                  "operator": "+",
                                  "left": {
                                    "type": "BinaryExpression",
                                    "operator": "+",
                                    "left": {
                                      "type": "BinaryExpression",
                                      "operator": "+",
                                      "left": {
                                        "type": "BinaryExpression",
                                        "operator": "+",
                                        "left": {
                                          "type": "BinaryExpression",
                                          "operator": "+",
                                          "left": {
                                            "type": "BinaryExpression",
                                            "operator": "+",
                                            "left": {
                                              "type": "BinaryExpression",
                                              "operator": "+",
                                              "left": {
                                                "type": "BinaryExpression",
                                                "operator": "+",
                                                "left": {
                                                  "type": "BinaryExpression",
                                                  "operator": "+",
                                                  "left": {
                                                    "type": "Literal",
                                                    "value": "M0,",
                                                    "raw": "\"M0,\""
                                                  },
                                                  "right": {
                                                    "type": "UnaryExpression",
                                                    "operator": "-",
                                                    "argument": {
                                                      "type": "Identifier",
                                                      "name": "ry"
                                                    },
                                                    "prefix": true
                                                  }
                                                },
                                                "right": {
                                                  "type": "Literal",
                                                  "value": "L",
                                                  "raw": "\"L\""
                                                }
                                              },
                                              "right": {
                                                "type": "Identifier",
                                                "name": "rx"
                                              }
                                            },
                                            "right": {
                                              "type": "Literal",
                                              "value": ",",
                                              "raw": "\",\""
                                            }
                                          },
                                          "right": {
                                            "type": "Identifier",
                                            "name": "ry"
                                          }
                                        },
                                        "right": {
                                          "type": "Literal",
                                          "value": " ",
                                          "raw": "\" \""
                                        }
                                      },
                                      "right": {
                                        "type": "UnaryExpression",
                                        "operator": "-",
                                        "argument": {
                                          "type": "Identifier",
                                          "name": "rx"
                                        },
                                        "prefix": true
                                      }
                                    },
                                    "right": {
                                      "type": "Literal",
                                      "value": ",",
                                      "raw": "\",\""
                                    }
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "name": "ry"
                                  }
                                },
                                "right": {
                                  "type": "Literal",
                                  "value": "Z",
                                  "raw": "\"Z\""
                                }
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
              ]
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
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "Identifier",
                "name": "d3"
              },
              "property": {
                "type": "Identifier",
                "name": "svg"
              }
            },
            "property": {
              "type": "Identifier",
              "name": "symbolTypes"
            }
          },
          "right": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "Identifier",
                "name": "d3_svg_symbols"
              },
              "property": {
                "type": "Identifier",
                "name": "keys"
              }
            },
            "arguments": []
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
              "name": "d3_svg_symbolSqrt3"
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
                  "name": "sqrt"
                }
              },
              "arguments": [
                {
                  "type": "Literal",
                  "value": 3,
                  "raw": "3"
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
              "name": "d3_svg_symbolTan30"
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
                  "name": "tan"
                }
              },
              "arguments": [
                {
                  "type": "BinaryExpression",
                  "operator": "*",
                  "left": {
                    "type": "Literal",
                    "value": 30,
                    "raw": "30"
                  },
                  "right": {
                    "type": "Identifier",
                    "name": "d3_radians"
                  }
                }
              ]
            }
          }
        ]
      }
    ]
  }
}