{
  "filepath": "/locale/number-format.js",
  "shared": [],
  "dependencies": [
    "d3_identity",
    "d3.formatPrefix",
    "d3.map",
    "d3.round",
    "d3_format_precision"
  ],
  "helpers": [
    "d3_locale_numberFormat",
    "d3_format_re",
    "d3_format_types",
    "d3_format_typeDefault"
  ],
  "exports": [],
  "ast": {
    "type": "Program",
    "body": [
      {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "name": "d3_locale_numberFormat"
        },
        "params": [
          {
            "type": "Identifier",
            "name": "locale"
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
                    "name": "locale_decimal"
                  },
                  "init": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "name": "locale"
                    },
                    "property": {
                      "type": "Identifier",
                      "name": "decimal"
                    }
                  }
                },
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "name": "locale_thousands"
                  },
                  "init": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "name": "locale"
                    },
                    "property": {
                      "type": "Identifier",
                      "name": "thousands"
                    }
                  }
                },
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "name": "locale_grouping"
                  },
                  "init": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "name": "locale"
                    },
                    "property": {
                      "type": "Identifier",
                      "name": "grouping"
                    }
                  }
                },
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "name": "locale_currency"
                  },
                  "init": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "name": "locale"
                    },
                    "property": {
                      "type": "Identifier",
                      "name": "currency"
                    }
                  }
                },
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "name": "formatGroup"
                  },
                  "init": {
                    "type": "ConditionalExpression",
                    "test": {
                      "type": "Identifier",
                      "name": "locale_grouping"
                    },
                    "consequent": {
                      "type": "FunctionExpression",
                      "id": null,
                      "params": [
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
                            "type": "VariableDeclaration",
                            "declarations": [
                              {
                                "type": "VariableDeclarator",
                                "id": {
                                  "type": "Identifier",
                                  "name": "i"
                                },
                                "init": {
                                  "type": "MemberExpression",
                                  "computed": false,
                                  "object": {
                                    "type": "Identifier",
                                    "name": "value"
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
                                  "name": "t"
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
                                  "name": "g"
                                },
                                "init": {
                                  "type": "MemberExpression",
                                  "computed": true,
                                  "object": {
                                    "type": "Identifier",
                                    "name": "locale_grouping"
                                  },
                                  "property": {
                                    "type": "Literal",
                                    "value": 0,
                                    "raw": "0"
                                  }
                                }
                              }
                            ],
                            "kind": "var"
                          },
                          {
                            "type": "WhileStatement",
                            "test": {
                              "type": "LogicalExpression",
                              "operator": "&&",
                              "left": {
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
                              "right": {
                                "type": "BinaryExpression",
                                "operator": ">",
                                "left": {
                                  "type": "Identifier",
                                  "name": "g"
                                },
                                "right": {
                                  "type": "Literal",
                                  "value": 0,
                                  "raw": "0"
                                }
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
                                      "type": "MemberExpression",
                                      "computed": false,
                                      "object": {
                                        "type": "Identifier",
                                        "name": "t"
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
                                            "name": "value"
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "name": "substring"
                                          }
                                        },
                                        "arguments": [
                                          {
                                            "type": "AssignmentExpression",
                                            "operator": "-=",
                                            "left": {
                                              "type": "Identifier",
                                              "name": "i"
                                            },
                                            "right": {
                                              "type": "Identifier",
                                              "name": "g"
                                            }
                                          },
                                          {
                                            "type": "BinaryExpression",
                                            "operator": "+",
                                            "left": {
                                              "type": "Identifier",
                                              "name": "i"
                                            },
                                            "right": {
                                              "type": "Identifier",
                                              "name": "g"
                                            }
                                          }
                                        ]
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
                                      "name": "g"
                                    },
                                    "right": {
                                      "type": "MemberExpression",
                                      "computed": true,
                                      "object": {
                                        "type": "Identifier",
                                        "name": "locale_grouping"
                                      },
                                      "property": {
                                        "type": "AssignmentExpression",
                                        "operator": "=",
                                        "left": {
                                          "type": "Identifier",
                                          "name": "j"
                                        },
                                        "right": {
                                          "type": "BinaryExpression",
                                          "operator": "%",
                                          "left": {
                                            "type": "BinaryExpression",
                                            "operator": "+",
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
                                          "right": {
                                            "type": "MemberExpression",
                                            "computed": false,
                                            "object": {
                                              "type": "Identifier",
                                              "name": "locale_grouping"
                                            },
                                            "property": {
                                              "type": "Identifier",
                                              "name": "length"
                                            }
                                          }
                                        }
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
                                      "name": "t"
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
                                  "name": "join"
                                }
                              },
                              "arguments": [
                                {
                                  "type": "Identifier",
                                  "name": "locale_thousands"
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
                    "alternate": {
                      "type": "Identifier",
                      "name": "d3_identity"
                    }
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
                    "name": "specifier"
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
                            "name": "match"
                          },
                          "init": {
                            "type": "CallExpression",
                            "callee": {
                              "type": "MemberExpression",
                              "computed": false,
                              "object": {
                                "type": "Identifier",
                                "name": "d3_format_re"
                              },
                              "property": {
                                "type": "Identifier",
                                "name": "exec"
                              }
                            },
                            "arguments": [
                              {
                                "type": "Identifier",
                                "name": "specifier"
                              }
                            ]
                          }
                        },
                        {
                          "type": "VariableDeclarator",
                          "id": {
                            "type": "Identifier",
                            "name": "fill"
                          },
                          "init": {
                            "type": "LogicalExpression",
                            "operator": "||",
                            "left": {
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
                            "right": {
                              "type": "Literal",
                              "value": " ",
                              "raw": "\" \""
                            }
                          }
                        },
                        {
                          "type": "VariableDeclarator",
                          "id": {
                            "type": "Identifier",
                            "name": "align"
                          },
                          "init": {
                            "type": "LogicalExpression",
                            "operator": "||",
                            "left": {
                              "type": "MemberExpression",
                              "computed": true,
                              "object": {
                                "type": "Identifier",
                                "name": "match"
                              },
                              "property": {
                                "type": "Literal",
                                "value": 2,
                                "raw": "2"
                              }
                            },
                            "right": {
                              "type": "Literal",
                              "value": ">",
                              "raw": "\">\""
                            }
                          }
                        },
                        {
                          "type": "VariableDeclarator",
                          "id": {
                            "type": "Identifier",
                            "name": "sign"
                          },
                          "init": {
                            "type": "LogicalExpression",
                            "operator": "||",
                            "left": {
                              "type": "MemberExpression",
                              "computed": true,
                              "object": {
                                "type": "Identifier",
                                "name": "match"
                              },
                              "property": {
                                "type": "Literal",
                                "value": 3,
                                "raw": "3"
                              }
                            },
                            "right": {
                              "type": "Literal",
                              "value": "",
                              "raw": "\"\""
                            }
                          }
                        },
                        {
                          "type": "VariableDeclarator",
                          "id": {
                            "type": "Identifier",
                            "name": "symbol"
                          },
                          "init": {
                            "type": "LogicalExpression",
                            "operator": "||",
                            "left": {
                              "type": "MemberExpression",
                              "computed": true,
                              "object": {
                                "type": "Identifier",
                                "name": "match"
                              },
                              "property": {
                                "type": "Literal",
                                "value": 4,
                                "raw": "4"
                              }
                            },
                            "right": {
                              "type": "Literal",
                              "value": "",
                              "raw": "\"\""
                            }
                          }
                        },
                        {
                          "type": "VariableDeclarator",
                          "id": {
                            "type": "Identifier",
                            "name": "zfill"
                          },
                          "init": {
                            "type": "MemberExpression",
                            "computed": true,
                            "object": {
                              "type": "Identifier",
                              "name": "match"
                            },
                            "property": {
                              "type": "Literal",
                              "value": 5,
                              "raw": "5"
                            }
                          }
                        },
                        {
                          "type": "VariableDeclarator",
                          "id": {
                            "type": "Identifier",
                            "name": "width"
                          },
                          "init": {
                            "type": "UnaryExpression",
                            "operator": "+",
                            "argument": {
                              "type": "MemberExpression",
                              "computed": true,
                              "object": {
                                "type": "Identifier",
                                "name": "match"
                              },
                              "property": {
                                "type": "Literal",
                                "value": 6,
                                "raw": "6"
                              }
                            },
                            "prefix": true
                          }
                        },
                        {
                          "type": "VariableDeclarator",
                          "id": {
                            "type": "Identifier",
                            "name": "comma"
                          },
                          "init": {
                            "type": "MemberExpression",
                            "computed": true,
                            "object": {
                              "type": "Identifier",
                              "name": "match"
                            },
                            "property": {
                              "type": "Literal",
                              "value": 7,
                              "raw": "7"
                            }
                          }
                        },
                        {
                          "type": "VariableDeclarator",
                          "id": {
                            "type": "Identifier",
                            "name": "precision"
                          },
                          "init": {
                            "type": "MemberExpression",
                            "computed": true,
                            "object": {
                              "type": "Identifier",
                              "name": "match"
                            },
                            "property": {
                              "type": "Literal",
                              "value": 8,
                              "raw": "8"
                            }
                          }
                        },
                        {
                          "type": "VariableDeclarator",
                          "id": {
                            "type": "Identifier",
                            "name": "type"
                          },
                          "init": {
                            "type": "MemberExpression",
                            "computed": true,
                            "object": {
                              "type": "Identifier",
                              "name": "match"
                            },
                            "property": {
                              "type": "Literal",
                              "value": 9,
                              "raw": "9"
                            }
                          }
                        },
                        {
                          "type": "VariableDeclarator",
                          "id": {
                            "type": "Identifier",
                            "name": "scale"
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
                            "name": "prefix"
                          },
                          "init": {
                            "type": "Literal",
                            "value": "",
                            "raw": "\"\""
                          }
                        },
                        {
                          "type": "VariableDeclarator",
                          "id": {
                            "type": "Identifier",
                            "name": "suffix"
                          },
                          "init": {
                            "type": "Literal",
                            "value": "",
                            "raw": "\"\""
                          }
                        },
                        {
                          "type": "VariableDeclarator",
                          "id": {
                            "type": "Identifier",
                            "name": "integer"
                          },
                          "init": {
                            "type": "Literal",
                            "value": false,
                            "raw": "false"
                          }
                        }
                      ],
                      "kind": "var"
                    },
                    {
                      "type": "IfStatement",
                      "test": {
                        "type": "Identifier",
                        "name": "precision"
                      },
                      "consequent": {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "AssignmentExpression",
                          "operator": "=",
                          "left": {
                            "type": "Identifier",
                            "name": "precision"
                          },
                          "right": {
                            "type": "UnaryExpression",
                            "operator": "+",
                            "argument": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "MemberExpression",
                                "computed": false,
                                "object": {
                                  "type": "Identifier",
                                  "name": "precision"
                                },
                                "property": {
                                  "type": "Identifier",
                                  "name": "substring"
                                }
                              },
                              "arguments": [
                                {
                                  "type": "Literal",
                                  "value": 1,
                                  "raw": "1"
                                }
                              ]
                            },
                            "prefix": true
                          }
                        }
                      },
                      "alternate": null
                    },
                    {
                      "type": "IfStatement",
                      "test": {
                        "type": "LogicalExpression",
                        "operator": "||",
                        "left": {
                          "type": "Identifier",
                          "name": "zfill"
                        },
                        "right": {
                          "type": "LogicalExpression",
                          "operator": "&&",
                          "left": {
                            "type": "BinaryExpression",
                            "operator": "===",
                            "left": {
                              "type": "Identifier",
                              "name": "fill"
                            },
                            "right": {
                              "type": "Literal",
                              "value": "0",
                              "raw": "\"0\""
                            }
                          },
                          "right": {
                            "type": "BinaryExpression",
                            "operator": "===",
                            "left": {
                              "type": "Identifier",
                              "name": "align"
                            },
                            "right": {
                              "type": "Literal",
                              "value": "=",
                              "raw": "\"=\""
                            }
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
                                "type": "Identifier",
                                "name": "zfill"
                              },
                              "right": {
                                "type": "AssignmentExpression",
                                "operator": "=",
                                "left": {
                                  "type": "Identifier",
                                  "name": "fill"
                                },
                                "right": {
                                  "type": "Literal",
                                  "value": "0",
                                  "raw": "\"0\""
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
                                "name": "align"
                              },
                              "right": {
                                "type": "Literal",
                                "value": "=",
                                "raw": "\"=\""
                              }
                            }
                          },
                          {
                            "type": "IfStatement",
                            "test": {
                              "type": "Identifier",
                              "name": "comma"
                            },
                            "consequent": {
                              "type": "ExpressionStatement",
                              "expression": {
                                "type": "AssignmentExpression",
                                "operator": "-=",
                                "left": {
                                  "type": "Identifier",
                                  "name": "width"
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
                                      "name": "floor"
                                    }
                                  },
                                  "arguments": [
                                    {
                                      "type": "BinaryExpression",
                                      "operator": "/",
                                      "left": {
                                        "type": "BinaryExpression",
                                        "operator": "-",
                                        "left": {
                                          "type": "Identifier",
                                          "name": "width"
                                        },
                                        "right": {
                                          "type": "Literal",
                                          "value": 1,
                                          "raw": "1"
                                        }
                                      },
                                      "right": {
                                        "type": "Literal",
                                        "value": 4,
                                        "raw": "4"
                                      }
                                    }
                                  ]
                                }
                              }
                            },
                            "alternate": null
                          }
                        ]
                      },
                      "alternate": null
                    },
                    {
                      "type": "SwitchStatement",
                      "discriminant": {
                        "type": "Identifier",
                        "name": "type"
                      },
                      "cases": [
                        {
                          "type": "SwitchCase",
                          "test": {
                            "type": "Literal",
                            "value": "n",
                            "raw": "\"n\""
                          },
                          "consequent": [
                            {
                              "type": "ExpressionStatement",
                              "expression": {
                                "type": "AssignmentExpression",
                                "operator": "=",
                                "left": {
                                  "type": "Identifier",
                                  "name": "comma"
                                },
                                "right": {
                                  "type": "Literal",
                                  "value": true,
                                  "raw": "true"
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
                                  "type": "Literal",
                                  "value": "g",
                                  "raw": "\"g\""
                                }
                              }
                            },
                            {
                              "type": "BreakStatement",
                              "label": null
                            }
                          ]
                        },
                        {
                          "type": "SwitchCase",
                          "test": {
                            "type": "Literal",
                            "value": "%",
                            "raw": "\"%\""
                          },
                          "consequent": [
                            {
                              "type": "ExpressionStatement",
                              "expression": {
                                "type": "AssignmentExpression",
                                "operator": "=",
                                "left": {
                                  "type": "Identifier",
                                  "name": "scale"
                                },
                                "right": {
                                  "type": "Literal",
                                  "value": 100,
                                  "raw": "100"
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
                                  "name": "suffix"
                                },
                                "right": {
                                  "type": "Literal",
                                  "value": "%",
                                  "raw": "\"%\""
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
                                  "type": "Literal",
                                  "value": "f",
                                  "raw": "\"f\""
                                }
                              }
                            },
                            {
                              "type": "BreakStatement",
                              "label": null
                            }
                          ]
                        },
                        {
                          "type": "SwitchCase",
                          "test": {
                            "type": "Literal",
                            "value": "p",
                            "raw": "\"p\""
                          },
                          "consequent": [
                            {
                              "type": "ExpressionStatement",
                              "expression": {
                                "type": "AssignmentExpression",
                                "operator": "=",
                                "left": {
                                  "type": "Identifier",
                                  "name": "scale"
                                },
                                "right": {
                                  "type": "Literal",
                                  "value": 100,
                                  "raw": "100"
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
                                  "name": "suffix"
                                },
                                "right": {
                                  "type": "Literal",
                                  "value": "%",
                                  "raw": "\"%\""
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
                                  "type": "Literal",
                                  "value": "r",
                                  "raw": "\"r\""
                                }
                              }
                            },
                            {
                              "type": "BreakStatement",
                              "label": null
                            }
                          ]
                        },
                        {
                          "type": "SwitchCase",
                          "test": {
                            "type": "Literal",
                            "value": "b",
                            "raw": "\"b\""
                          },
                          "consequent": []
                        },
                        {
                          "type": "SwitchCase",
                          "test": {
                            "type": "Literal",
                            "value": "o",
                            "raw": "\"o\""
                          },
                          "consequent": []
                        },
                        {
                          "type": "SwitchCase",
                          "test": {
                            "type": "Literal",
                            "value": "x",
                            "raw": "\"x\""
                          },
                          "consequent": []
                        },
                        {
                          "type": "SwitchCase",
                          "test": {
                            "type": "Literal",
                            "value": "X",
                            "raw": "\"X\""
                          },
                          "consequent": [
                            {
                              "type": "IfStatement",
                              "test": {
                                "type": "BinaryExpression",
                                "operator": "===",
                                "left": {
                                  "type": "Identifier",
                                  "name": "symbol"
                                },
                                "right": {
                                  "type": "Literal",
                                  "value": "#",
                                  "raw": "\"#\""
                                }
                              },
                              "consequent": {
                                "type": "ExpressionStatement",
                                "expression": {
                                  "type": "AssignmentExpression",
                                  "operator": "=",
                                  "left": {
                                    "type": "Identifier",
                                    "name": "prefix"
                                  },
                                  "right": {
                                    "type": "BinaryExpression",
                                    "operator": "+",
                                    "left": {
                                      "type": "Literal",
                                      "value": "0",
                                      "raw": "\"0\""
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
                                          "name": "toLowerCase"
                                        }
                                      },
                                      "arguments": []
                                    }
                                  }
                                }
                              },
                              "alternate": null
                            }
                          ]
                        },
                        {
                          "type": "SwitchCase",
                          "test": {
                            "type": "Literal",
                            "value": "c",
                            "raw": "\"c\""
                          },
                          "consequent": []
                        },
                        {
                          "type": "SwitchCase",
                          "test": {
                            "type": "Literal",
                            "value": "d",
                            "raw": "\"d\""
                          },
                          "consequent": [
                            {
                              "type": "ExpressionStatement",
                              "expression": {
                                "type": "AssignmentExpression",
                                "operator": "=",
                                "left": {
                                  "type": "Identifier",
                                  "name": "integer"
                                },
                                "right": {
                                  "type": "Literal",
                                  "value": true,
                                  "raw": "true"
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
                                  "name": "precision"
                                },
                                "right": {
                                  "type": "Literal",
                                  "value": 0,
                                  "raw": "0"
                                }
                              }
                            },
                            {
                              "type": "BreakStatement",
                              "label": null
                            }
                          ]
                        },
                        {
                          "type": "SwitchCase",
                          "test": {
                            "type": "Literal",
                            "value": "s",
                            "raw": "\"s\""
                          },
                          "consequent": [
                            {
                              "type": "ExpressionStatement",
                              "expression": {
                                "type": "AssignmentExpression",
                                "operator": "=",
                                "left": {
                                  "type": "Identifier",
                                  "name": "scale"
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
                                  "type": "Literal",
                                  "value": "r",
                                  "raw": "\"r\""
                                }
                              }
                            },
                            {
                              "type": "BreakStatement",
                              "label": null
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "type": "IfStatement",
                      "test": {
                        "type": "BinaryExpression",
                        "operator": "===",
                        "left": {
                          "type": "Identifier",
                          "name": "symbol"
                        },
                        "right": {
                          "type": "Literal",
                          "value": "$",
                          "raw": "\"$\""
                        }
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
                                "name": "prefix"
                              },
                              "right": {
                                "type": "MemberExpression",
                                "computed": true,
                                "object": {
                                  "type": "Identifier",
                                  "name": "locale_currency"
                                },
                                "property": {
                                  "type": "Literal",
                                  "value": 0,
                                  "raw": "0"
                                }
                              }
                            },
                            {
                              "type": "AssignmentExpression",
                              "operator": "=",
                              "left": {
                                "type": "Identifier",
                                "name": "suffix"
                              },
                              "right": {
                                "type": "MemberExpression",
                                "computed": true,
                                "object": {
                                  "type": "Identifier",
                                  "name": "locale_currency"
                                },
                                "property": {
                                  "type": "Literal",
                                  "value": 1,
                                  "raw": "1"
                                }
                              }
                            }
                          ]
                        }
                      },
                      "alternate": null
                    },
                    {
                      "type": "IfStatement",
                      "test": {
                        "type": "LogicalExpression",
                        "operator": "&&",
                        "left": {
                          "type": "BinaryExpression",
                          "operator": "==",
                          "left": {
                            "type": "Identifier",
                            "name": "type"
                          },
                          "right": {
                            "type": "Literal",
                            "value": "r",
                            "raw": "\"r\""
                          }
                        },
                        "right": {
                          "type": "UnaryExpression",
                          "operator": "!",
                          "argument": {
                            "type": "Identifier",
                            "name": "precision"
                          },
                          "prefix": true
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
                            "type": "Literal",
                            "value": "g",
                            "raw": "\"g\""
                          }
                        }
                      },
                      "alternate": null
                    },
                    {
                      "type": "IfStatement",
                      "test": {
                        "type": "BinaryExpression",
                        "operator": "!=",
                        "left": {
                          "type": "Identifier",
                          "name": "precision"
                        },
                        "right": {
                          "type": "Literal",
                          "value": null,
                          "raw": "null"
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
                                "name": "type"
                              },
                              "right": {
                                "type": "Literal",
                                "value": "g",
                                "raw": "\"g\""
                              }
                            },
                            "consequent": {
                              "type": "ExpressionStatement",
                              "expression": {
                                "type": "AssignmentExpression",
                                "operator": "=",
                                "left": {
                                  "type": "Identifier",
                                  "name": "precision"
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
                                      "name": "max"
                                    }
                                  },
                                  "arguments": [
                                    {
                                      "type": "Literal",
                                      "value": 1,
                                      "raw": "1"
                                    },
                                    {
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
                                          "type": "Literal",
                                          "value": 21,
                                          "raw": "21"
                                        },
                                        {
                                          "type": "Identifier",
                                          "name": "precision"
                                        }
                                      ]
                                    }
                                  ]
                                }
                              }
                            },
                            "alternate": {
                              "type": "IfStatement",
                              "test": {
                                "type": "LogicalExpression",
                                "operator": "||",
                                "left": {
                                  "type": "BinaryExpression",
                                  "operator": "==",
                                  "left": {
                                    "type": "Identifier",
                                    "name": "type"
                                  },
                                  "right": {
                                    "type": "Literal",
                                    "value": "e",
                                    "raw": "\"e\""
                                  }
                                },
                                "right": {
                                  "type": "BinaryExpression",
                                  "operator": "==",
                                  "left": {
                                    "type": "Identifier",
                                    "name": "type"
                                  },
                                  "right": {
                                    "type": "Literal",
                                    "value": "f",
                                    "raw": "\"f\""
                                  }
                                }
                              },
                              "consequent": {
                                "type": "ExpressionStatement",
                                "expression": {
                                  "type": "AssignmentExpression",
                                  "operator": "=",
                                  "left": {
                                    "type": "Identifier",
                                    "name": "precision"
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
                                        "name": "max"
                                      }
                                    },
                                    "arguments": [
                                      {
                                        "type": "Literal",
                                        "value": 0,
                                        "raw": "0"
                                      },
                                      {
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
                                            "type": "Literal",
                                            "value": 20,
                                            "raw": "20"
                                          },
                                          {
                                            "type": "Identifier",
                                            "name": "precision"
                                          }
                                        ]
                                      }
                                    ]
                                  }
                                }
                              },
                              "alternate": null
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
                          "name": "type"
                        },
                        "right": {
                          "type": "LogicalExpression",
                          "operator": "||",
                          "left": {
                            "type": "CallExpression",
                            "callee": {
                              "type": "MemberExpression",
                              "computed": false,
                              "object": {
                                "type": "Identifier",
                                "name": "d3_format_types"
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
                          },
                          "right": {
                            "type": "Identifier",
                            "name": "d3_format_typeDefault"
                          }
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
                            "name": "zcomma"
                          },
                          "init": {
                            "type": "LogicalExpression",
                            "operator": "&&",
                            "left": {
                              "type": "Identifier",
                              "name": "zfill"
                            },
                            "right": {
                              "type": "Identifier",
                              "name": "comma"
                            }
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
                            "name": "value"
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
                                    "name": "fullSuffix"
                                  },
                                  "init": {
                                    "type": "Identifier",
                                    "name": "suffix"
                                  }
                                }
                              ],
                              "kind": "var"
                            },
                            {
                              "type": "IfStatement",
                              "test": {
                                "type": "LogicalExpression",
                                "operator": "&&",
                                "left": {
                                  "type": "Identifier",
                                  "name": "integer"
                                },
                                "right": {
                                  "type": "BinaryExpression",
                                  "operator": "%",
                                  "left": {
                                    "type": "Identifier",
                                    "name": "value"
                                  },
                                  "right": {
                                    "type": "Literal",
                                    "value": 1,
                                    "raw": "1"
                                  }
                                }
                              },
                              "consequent": {
                                "type": "ReturnStatement",
                                "argument": {
                                  "type": "Literal",
                                  "value": "",
                                  "raw": "\"\""
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
                                    "name": "negative"
                                  },
                                  "init": {
                                    "type": "ConditionalExpression",
                                    "test": {
                                      "type": "LogicalExpression",
                                      "operator": "||",
                                      "left": {
                                        "type": "BinaryExpression",
                                        "operator": "<",
                                        "left": {
                                          "type": "Identifier",
                                          "name": "value"
                                        },
                                        "right": {
                                          "type": "Literal",
                                          "value": 0,
                                          "raw": "0"
                                        }
                                      },
                                      "right": {
                                        "type": "LogicalExpression",
                                        "operator": "&&",
                                        "left": {
                                          "type": "BinaryExpression",
                                          "operator": "===",
                                          "left": {
                                            "type": "Identifier",
                                            "name": "value"
                                          },
                                          "right": {
                                            "type": "Literal",
                                            "value": 0,
                                            "raw": "0"
                                          }
                                        },
                                        "right": {
                                          "type": "BinaryExpression",
                                          "operator": "<",
                                          "left": {
                                            "type": "BinaryExpression",
                                            "operator": "/",
                                            "left": {
                                              "type": "Literal",
                                              "value": 1,
                                              "raw": "1"
                                            },
                                            "right": {
                                              "type": "Identifier",
                                              "name": "value"
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
                                    "consequent": {
                                      "type": "SequenceExpression",
                                      "expressions": [
                                        {
                                          "type": "AssignmentExpression",
                                          "operator": "=",
                                          "left": {
                                            "type": "Identifier",
                                            "name": "value"
                                          },
                                          "right": {
                                            "type": "UnaryExpression",
                                            "operator": "-",
                                            "argument": {
                                              "type": "Identifier",
                                              "name": "value"
                                            },
                                            "prefix": true
                                          }
                                        },
                                        {
                                          "type": "Literal",
                                          "value": "-",
                                          "raw": "\"-\""
                                        }
                                      ]
                                    },
                                    "alternate": {
                                      "type": "Identifier",
                                      "name": "sign"
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
                                  "name": "scale"
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
                                    "type": "VariableDeclaration",
                                    "declarations": [
                                      {
                                        "type": "VariableDeclarator",
                                        "id": {
                                          "type": "Identifier",
                                          "name": "unit"
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
                                              "name": "formatPrefix"
                                            }
                                          },
                                          "arguments": [
                                            {
                                              "type": "Identifier",
                                              "name": "value"
                                            },
                                            {
                                              "type": "Identifier",
                                              "name": "precision"
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
                                        "name": "value"
                                      },
                                      "right": {
                                        "type": "CallExpression",
                                        "callee": {
                                          "type": "MemberExpression",
                                          "computed": false,
                                          "object": {
                                            "type": "Identifier",
                                            "name": "unit"
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "name": "scale"
                                          }
                                        },
                                        "arguments": [
                                          {
                                            "type": "Identifier",
                                            "name": "value"
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
                                        "name": "fullSuffix"
                                      },
                                      "right": {
                                        "type": "BinaryExpression",
                                        "operator": "+",
                                        "left": {
                                          "type": "MemberExpression",
                                          "computed": false,
                                          "object": {
                                            "type": "Identifier",
                                            "name": "unit"
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "name": "symbol"
                                          }
                                        },
                                        "right": {
                                          "type": "Identifier",
                                          "name": "suffix"
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
                                    "type": "ExpressionStatement",
                                    "expression": {
                                      "type": "AssignmentExpression",
                                      "operator": "*=",
                                      "left": {
                                        "type": "Identifier",
                                        "name": "value"
                                      },
                                      "right": {
                                        "type": "Identifier",
                                        "name": "scale"
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
                                  "type": "Identifier",
                                  "name": "value"
                                },
                                "right": {
                                  "type": "CallExpression",
                                  "callee": {
                                    "type": "Identifier",
                                    "name": "type"
                                  },
                                  "arguments": [
                                    {
                                      "type": "Identifier",
                                      "name": "value"
                                    },
                                    {
                                      "type": "Identifier",
                                      "name": "precision"
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
                                    "name": "i"
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
                                        "name": "lastIndexOf"
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
                                    "name": "before"
                                  },
                                  "init": {
                                    "type": "ConditionalExpression",
                                    "test": {
                                      "type": "BinaryExpression",
                                      "operator": "<",
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
                                      "type": "Identifier",
                                      "name": "value"
                                    },
                                    "alternate": {
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
                                {
                                  "type": "VariableDeclarator",
                                  "id": {
                                    "type": "Identifier",
                                    "name": "after"
                                  },
                                  "init": {
                                    "type": "ConditionalExpression",
                                    "test": {
                                      "type": "BinaryExpression",
                                      "operator": "<",
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
                                      "type": "Literal",
                                      "value": "",
                                      "raw": "\"\""
                                    },
                                    "alternate": {
                                      "type": "BinaryExpression",
                                      "operator": "+",
                                      "left": {
                                        "type": "Identifier",
                                        "name": "locale_decimal"
                                      },
                                      "right": {
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
                                  }
                                }
                              ],
                              "kind": "var"
                            },
                            {
                              "type": "IfStatement",
                              "test": {
                                "type": "LogicalExpression",
                                "operator": "&&",
                                "left": {
                                  "type": "UnaryExpression",
                                  "operator": "!",
                                  "argument": {
                                    "type": "Identifier",
                                    "name": "zfill"
                                  },
                                  "prefix": true
                                },
                                "right": {
                                  "type": "Identifier",
                                  "name": "comma"
                                }
                              },
                              "consequent": {
                                "type": "ExpressionStatement",
                                "expression": {
                                  "type": "AssignmentExpression",
                                  "operator": "=",
                                  "left": {
                                    "type": "Identifier",
                                    "name": "before"
                                  },
                                  "right": {
                                    "type": "CallExpression",
                                    "callee": {
                                      "type": "Identifier",
                                      "name": "formatGroup"
                                    },
                                    "arguments": [
                                      {
                                        "type": "Identifier",
                                        "name": "before"
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
                                    "name": "length"
                                  },
                                  "init": {
                                    "type": "BinaryExpression",
                                    "operator": "+",
                                    "left": {
                                      "type": "BinaryExpression",
                                      "operator": "+",
                                      "left": {
                                        "type": "BinaryExpression",
                                        "operator": "+",
                                        "left": {
                                          "type": "MemberExpression",
                                          "computed": false,
                                          "object": {
                                            "type": "Identifier",
                                            "name": "prefix"
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "name": "length"
                                          }
                                        },
                                        "right": {
                                          "type": "MemberExpression",
                                          "computed": false,
                                          "object": {
                                            "type": "Identifier",
                                            "name": "before"
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "name": "length"
                                          }
                                        }
                                      },
                                      "right": {
                                        "type": "MemberExpression",
                                        "computed": false,
                                        "object": {
                                          "type": "Identifier",
                                          "name": "after"
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "name": "length"
                                        }
                                      }
                                    },
                                    "right": {
                                      "type": "ConditionalExpression",
                                      "test": {
                                        "type": "Identifier",
                                        "name": "zcomma"
                                      },
                                      "consequent": {
                                        "type": "Literal",
                                        "value": 0,
                                        "raw": "0"
                                      },
                                      "alternate": {
                                        "type": "MemberExpression",
                                        "computed": false,
                                        "object": {
                                          "type": "Identifier",
                                          "name": "negative"
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "name": "length"
                                        }
                                      }
                                    }
                                  }
                                },
                                {
                                  "type": "VariableDeclarator",
                                  "id": {
                                    "type": "Identifier",
                                    "name": "padding"
                                  },
                                  "init": {
                                    "type": "ConditionalExpression",
                                    "test": {
                                      "type": "BinaryExpression",
                                      "operator": "<",
                                      "left": {
                                        "type": "Identifier",
                                        "name": "length"
                                      },
                                      "right": {
                                        "type": "Identifier",
                                        "name": "width"
                                      }
                                    },
                                    "consequent": {
                                      "type": "CallExpression",
                                      "callee": {
                                        "type": "MemberExpression",
                                        "computed": false,
                                        "object": {
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
                                                "name": "length"
                                              },
                                              "right": {
                                                "type": "BinaryExpression",
                                                "operator": "+",
                                                "left": {
                                                  "type": "BinaryExpression",
                                                  "operator": "-",
                                                  "left": {
                                                    "type": "Identifier",
                                                    "name": "width"
                                                  },
                                                  "right": {
                                                    "type": "Identifier",
                                                    "name": "length"
                                                  }
                                                },
                                                "right": {
                                                  "type": "Literal",
                                                  "value": 1,
                                                  "raw": "1"
                                                }
                                              }
                                            }
                                          ]
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "name": "join"
                                        }
                                      },
                                      "arguments": [
                                        {
                                          "type": "Identifier",
                                          "name": "fill"
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
                              ],
                              "kind": "var"
                            },
                            {
                              "type": "IfStatement",
                              "test": {
                                "type": "Identifier",
                                "name": "zcomma"
                              },
                              "consequent": {
                                "type": "ExpressionStatement",
                                "expression": {
                                  "type": "AssignmentExpression",
                                  "operator": "=",
                                  "left": {
                                    "type": "Identifier",
                                    "name": "before"
                                  },
                                  "right": {
                                    "type": "CallExpression",
                                    "callee": {
                                      "type": "Identifier",
                                      "name": "formatGroup"
                                    },
                                    "arguments": [
                                      {
                                        "type": "BinaryExpression",
                                        "operator": "+",
                                        "left": {
                                          "type": "Identifier",
                                          "name": "padding"
                                        },
                                        "right": {
                                          "type": "Identifier",
                                          "name": "before"
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
                                "operator": "+=",
                                "left": {
                                  "type": "Identifier",
                                  "name": "negative"
                                },
                                "right": {
                                  "type": "Identifier",
                                  "name": "prefix"
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
                                  "name": "value"
                                },
                                "right": {
                                  "type": "BinaryExpression",
                                  "operator": "+",
                                  "left": {
                                    "type": "Identifier",
                                    "name": "before"
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "name": "after"
                                  }
                                }
                              }
                            },
                            {
                              "type": "ReturnStatement",
                              "argument": {
                                "type": "BinaryExpression",
                                "operator": "+",
                                "left": {
                                  "type": "ConditionalExpression",
                                  "test": {
                                    "type": "BinaryExpression",
                                    "operator": "===",
                                    "left": {
                                      "type": "Identifier",
                                      "name": "align"
                                    },
                                    "right": {
                                      "type": "Literal",
                                      "value": "<",
                                      "raw": "\"<\""
                                    }
                                  },
                                  "consequent": {
                                    "type": "BinaryExpression",
                                    "operator": "+",
                                    "left": {
                                      "type": "BinaryExpression",
                                      "operator": "+",
                                      "left": {
                                        "type": "Identifier",
                                        "name": "negative"
                                      },
                                      "right": {
                                        "type": "Identifier",
                                        "name": "value"
                                      }
                                    },
                                    "right": {
                                      "type": "Identifier",
                                      "name": "padding"
                                    }
                                  },
                                  "alternate": {
                                    "type": "ConditionalExpression",
                                    "test": {
                                      "type": "BinaryExpression",
                                      "operator": "===",
                                      "left": {
                                        "type": "Identifier",
                                        "name": "align"
                                      },
                                      "right": {
                                        "type": "Literal",
                                        "value": ">",
                                        "raw": "\">\""
                                      }
                                    },
                                    "consequent": {
                                      "type": "BinaryExpression",
                                      "operator": "+",
                                      "left": {
                                        "type": "BinaryExpression",
                                        "operator": "+",
                                        "left": {
                                          "type": "Identifier",
                                          "name": "padding"
                                        },
                                        "right": {
                                          "type": "Identifier",
                                          "name": "negative"
                                        }
                                      },
                                      "right": {
                                        "type": "Identifier",
                                        "name": "value"
                                      }
                                    },
                                    "alternate": {
                                      "type": "ConditionalExpression",
                                      "test": {
                                        "type": "BinaryExpression",
                                        "operator": "===",
                                        "left": {
                                          "type": "Identifier",
                                          "name": "align"
                                        },
                                        "right": {
                                          "type": "Literal",
                                          "value": "^",
                                          "raw": "\"^\""
                                        }
                                      },
                                      "consequent": {
                                        "type": "BinaryExpression",
                                        "operator": "+",
                                        "left": {
                                          "type": "BinaryExpression",
                                          "operator": "+",
                                          "left": {
                                            "type": "BinaryExpression",
                                            "operator": "+",
                                            "left": {
                                              "type": "CallExpression",
                                              "callee": {
                                                "type": "MemberExpression",
                                                "computed": false,
                                                "object": {
                                                  "type": "Identifier",
                                                  "name": "padding"
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
                                                  "type": "AssignmentExpression",
                                                  "operator": ">>=",
                                                  "left": {
                                                    "type": "Identifier",
                                                    "name": "length"
                                                  },
                                                  "right": {
                                                    "type": "Literal",
                                                    "value": 1,
                                                    "raw": "1"
                                                  }
                                                }
                                              ]
                                            },
                                            "right": {
                                              "type": "Identifier",
                                              "name": "negative"
                                            }
                                          },
                                          "right": {
                                            "type": "Identifier",
                                            "name": "value"
                                          }
                                        },
                                        "right": {
                                          "type": "CallExpression",
                                          "callee": {
                                            "type": "MemberExpression",
                                            "computed": false,
                                            "object": {
                                              "type": "Identifier",
                                              "name": "padding"
                                            },
                                            "property": {
                                              "type": "Identifier",
                                              "name": "substring"
                                            }
                                          },
                                          "arguments": [
                                            {
                                              "type": "Identifier",
                                              "name": "length"
                                            }
                                          ]
                                        }
                                      },
                                      "alternate": {
                                        "type": "BinaryExpression",
                                        "operator": "+",
                                        "left": {
                                          "type": "Identifier",
                                          "name": "negative"
                                        },
                                        "right": {
                                          "type": "ConditionalExpression",
                                          "test": {
                                            "type": "Identifier",
                                            "name": "zcomma"
                                          },
                                          "consequent": {
                                            "type": "Identifier",
                                            "name": "value"
                                          },
                                          "alternate": {
                                            "type": "BinaryExpression",
                                            "operator": "+",
                                            "left": {
                                              "type": "Identifier",
                                              "name": "padding"
                                            },
                                            "right": {
                                              "type": "Identifier",
                                              "name": "value"
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                },
                                "right": {
                                  "type": "Identifier",
                                  "name": "fullSuffix"
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
              "name": "d3_format_re"
            },
            "init": {
              "type": "Literal",
              "value": {},
              "raw": "/(?:([^{])?([<>=^]))?([+\\- ])?([$#])?(0)?(\\d+)?(,)?(\\.-?\\d+)?([a-z%])?/i"
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
              "name": "d3_format_types"
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
                        "name": "b"
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
                                    "name": "toString"
                                  }
                                },
                                "arguments": [
                                  {
                                    "type": "Literal",
                                    "value": 2,
                                    "raw": "2"
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
                        "type": "Identifier",
                        "name": "c"
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
                                "type": "CallExpression",
                                "callee": {
                                  "type": "MemberExpression",
                                  "computed": false,
                                  "object": {
                                    "type": "Identifier",
                                    "name": "String"
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "name": "fromCharCode"
                                  }
                                },
                                "arguments": [
                                  {
                                    "type": "Identifier",
                                    "name": "x"
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
                        "type": "Identifier",
                        "name": "o"
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
                                    "name": "toString"
                                  }
                                },
                                "arguments": [
                                  {
                                    "type": "Literal",
                                    "value": 8,
                                    "raw": "8"
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
                        "type": "Identifier",
                        "name": "x"
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
                                    "name": "toString"
                                  }
                                },
                                "arguments": [
                                  {
                                    "type": "Literal",
                                    "value": 16,
                                    "raw": "16"
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
                        "type": "Identifier",
                        "name": "X"
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
                                        "name": "x"
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "name": "toString"
                                      }
                                    },
                                    "arguments": [
                                      {
                                        "type": "Literal",
                                        "value": 16,
                                        "raw": "16"
                                      }
                                    ]
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "name": "toUpperCase"
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
                        "type": "Identifier",
                        "name": "g"
                      },
                      "value": {
                        "type": "FunctionExpression",
                        "id": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "name": "x"
                          },
                          {
                            "type": "Identifier",
                            "name": "p"
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
                                    "name": "x"
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "name": "toPrecision"
                                  }
                                },
                                "arguments": [
                                  {
                                    "type": "Identifier",
                                    "name": "p"
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
                        "type": "Identifier",
                        "name": "e"
                      },
                      "value": {
                        "type": "FunctionExpression",
                        "id": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "name": "x"
                          },
                          {
                            "type": "Identifier",
                            "name": "p"
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
                                    "name": "x"
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "name": "toExponential"
                                  }
                                },
                                "arguments": [
                                  {
                                    "type": "Identifier",
                                    "name": "p"
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
                        "type": "Identifier",
                        "name": "f"
                      },
                      "value": {
                        "type": "FunctionExpression",
                        "id": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "name": "x"
                          },
                          {
                            "type": "Identifier",
                            "name": "p"
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
                                    "name": "x"
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "name": "toFixed"
                                  }
                                },
                                "arguments": [
                                  {
                                    "type": "Identifier",
                                    "name": "p"
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
                        "type": "Identifier",
                        "name": "r"
                      },
                      "value": {
                        "type": "FunctionExpression",
                        "id": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "name": "x"
                          },
                          {
                            "type": "Identifier",
                            "name": "p"
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
                                    "type": "AssignmentExpression",
                                    "operator": "=",
                                    "left": {
                                      "type": "Identifier",
                                      "name": "x"
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
                                          "name": "round"
                                        }
                                      },
                                      "arguments": [
                                        {
                                          "type": "Identifier",
                                          "name": "x"
                                        },
                                        {
                                          "type": "CallExpression",
                                          "callee": {
                                            "type": "Identifier",
                                            "name": "d3_format_precision"
                                          },
                                          "arguments": [
                                            {
                                              "type": "Identifier",
                                              "name": "x"
                                            },
                                            {
                                              "type": "Identifier",
                                              "name": "p"
                                            }
                                          ]
                                        }
                                      ]
                                    }
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "name": "toFixed"
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
                                        "value": 0,
                                        "raw": "0"
                                      },
                                      {
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
                                            "type": "Literal",
                                            "value": 20,
                                            "raw": "20"
                                          },
                                          {
                                            "type": "CallExpression",
                                            "callee": {
                                              "type": "Identifier",
                                              "name": "d3_format_precision"
                                            },
                                            "arguments": [
                                              {
                                                "type": "BinaryExpression",
                                                "operator": "*",
                                                "left": {
                                                  "type": "Identifier",
                                                  "name": "x"
                                                },
                                                "right": {
                                                  "type": "BinaryExpression",
                                                  "operator": "+",
                                                  "left": {
                                                    "type": "Literal",
                                                    "value": 1,
                                                    "raw": "1"
                                                  },
                                                  "right": {
                                                    "type": "Literal",
                                                    "value": 1e-15,
                                                    "raw": "1e-15"
                                                  }
                                                }
                                              },
                                              {
                                                "type": "Identifier",
                                                "name": "p"
                                              }
                                            ]
                                          }
                                        ]
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
          "name": "d3_format_typeDefault"
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
                "operator": "+",
                "left": {
                  "type": "Identifier",
                  "name": "x"
                },
                "right": {
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
    ]
  }
}