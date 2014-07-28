{
  "filepath": "/dsv/dsv.js",
  "shared": [],
  "dependencies": [
    "d3_xhr",
    "d3_Set"
  ],
  "helpers": [],
  "exports": [
    "d3.dsv"
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
              "name": "dsv"
            }
          },
          "right": {
            "type": "FunctionExpression",
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "name": "delimiter"
              },
              {
                "type": "Identifier",
                "name": "mimeType"
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
                        "name": "reFormat"
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
                                "value": "[\"",
                                "raw": "\"[\\\"\""
                              },
                              "right": {
                                "type": "Identifier",
                                "name": "delimiter"
                              }
                            },
                            "right": {
                              "type": "Literal",
                              "value": "\n]",
                              "raw": "\"\\n]\""
                            }
                          }
                        ]
                      }
                    },
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "name": "delimiterCode"
                      },
                      "init": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "MemberExpression",
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "name": "delimiter"
                          },
                          "property": {
                            "type": "Identifier",
                            "name": "charCodeAt"
                          }
                        },
                        "arguments": [
                          {
                            "type": "Literal",
                            "value": 0,
                            "raw": "0"
                          }
                        ]
                      }
                    }
                  ],
                  "kind": "var"
                },
                {
                  "type": "FunctionDeclaration",
                  "id": {
                    "type": "Identifier",
                    "name": "dsv"
                  },
                  "params": [
                    {
                      "type": "Identifier",
                      "name": "url"
                    },
                    {
                      "type": "Identifier",
                      "name": "row"
                    },
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
                            "value": 3,
                            "raw": "3"
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
                                  "name": "callback"
                                },
                                "right": {
                                  "type": "Identifier",
                                  "name": "row"
                                }
                              },
                              {
                                "type": "AssignmentExpression",
                                "operator": "=",
                                "left": {
                                  "type": "Identifier",
                                  "name": "row"
                                },
                                "right": {
                                  "type": "Literal",
                                  "value": null,
                                  "raw": "null"
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
                              "name": "xhr"
                            },
                            "init": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "Identifier",
                                "name": "d3_xhr"
                              },
                              "arguments": [
                                {
                                  "type": "Identifier",
                                  "name": "url"
                                },
                                {
                                  "type": "Identifier",
                                  "name": "mimeType"
                                },
                                {
                                  "type": "ConditionalExpression",
                                  "test": {
                                    "type": "BinaryExpression",
                                    "operator": "==",
                                    "left": {
                                      "type": "Identifier",
                                      "name": "row"
                                    },
                                    "right": {
                                      "type": "Literal",
                                      "value": null,
                                      "raw": "null"
                                    }
                                  },
                                  "consequent": {
                                    "type": "Identifier",
                                    "name": "response"
                                  },
                                  "alternate": {
                                    "type": "CallExpression",
                                    "callee": {
                                      "type": "Identifier",
                                      "name": "typedResponse"
                                    },
                                    "arguments": [
                                      {
                                        "type": "Identifier",
                                        "name": "row"
                                      }
                                    ]
                                  }
                                },
                                {
                                  "type": "Identifier",
                                  "name": "callback"
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
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "name": "xhr"
                            },
                            "property": {
                              "type": "Identifier",
                              "name": "row"
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
                                  "type": "ReturnStatement",
                                  "argument": {
                                    "type": "ConditionalExpression",
                                    "test": {
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
                                    "consequent": {
                                      "type": "CallExpression",
                                      "callee": {
                                        "type": "MemberExpression",
                                        "computed": false,
                                        "object": {
                                          "type": "Identifier",
                                          "name": "xhr"
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "name": "response"
                                        }
                                      },
                                      "arguments": [
                                        {
                                          "type": "ConditionalExpression",
                                          "test": {
                                            "type": "BinaryExpression",
                                            "operator": "==",
                                            "left": {
                                              "type": "AssignmentExpression",
                                              "operator": "=",
                                              "left": {
                                                "type": "Identifier",
                                                "name": "row"
                                              },
                                              "right": {
                                                "type": "Identifier",
                                                "name": "_"
                                              }
                                            },
                                            "right": {
                                              "type": "Literal",
                                              "value": null,
                                              "raw": "null"
                                            }
                                          },
                                          "consequent": {
                                            "type": "Identifier",
                                            "name": "response"
                                          },
                                          "alternate": {
                                            "type": "CallExpression",
                                            "callee": {
                                              "type": "Identifier",
                                              "name": "typedResponse"
                                            },
                                            "arguments": [
                                              {
                                                "type": "Identifier",
                                                "name": "_"
                                              }
                                            ]
                                          }
                                        }
                                      ]
                                    },
                                    "alternate": {
                                      "type": "Identifier",
                                      "name": "row"
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
                      },
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "Identifier",
                          "name": "xhr"
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
                    "name": "response"
                  },
                  "params": [
                    {
                      "type": "Identifier",
                      "name": "request"
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
                              "name": "dsv"
                            },
                            "property": {
                              "type": "Identifier",
                              "name": "parse"
                            }
                          },
                          "arguments": [
                            {
                              "type": "MemberExpression",
                              "computed": false,
                              "object": {
                                "type": "Identifier",
                                "name": "request"
                              },
                              "property": {
                                "type": "Identifier",
                                "name": "responseText"
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
                    "name": "typedResponse"
                  },
                  "params": [
                    {
                      "type": "Identifier",
                      "name": "f"
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
                              "name": "request"
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
                                      "name": "dsv"
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "name": "parse"
                                    }
                                  },
                                  "arguments": [
                                    {
                                      "type": "MemberExpression",
                                      "computed": false,
                                      "object": {
                                        "type": "Identifier",
                                        "name": "request"
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "name": "responseText"
                                      }
                                    },
                                    {
                                      "type": "Identifier",
                                      "name": "f"
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
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "name": "dsv"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "parse"
                      }
                    },
                    "right": {
                      "type": "FunctionExpression",
                      "id": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "name": "text"
                        },
                        {
                          "type": "Identifier",
                          "name": "f"
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
                                "init": null
                              }
                            ],
                            "kind": "var"
                          },
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "MemberExpression",
                                "computed": false,
                                "object": {
                                  "type": "Identifier",
                                  "name": "dsv"
                                },
                                "property": {
                                  "type": "Identifier",
                                  "name": "parseRows"
                                }
                              },
                              "arguments": [
                                {
                                  "type": "Identifier",
                                  "name": "text"
                                },
                                {
                                  "type": "FunctionExpression",
                                  "id": null,
                                  "params": [
                                    {
                                      "type": "Identifier",
                                      "name": "row"
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
                                        "type": "IfStatement",
                                        "test": {
                                          "type": "Identifier",
                                          "name": "o"
                                        },
                                        "consequent": {
                                          "type": "ReturnStatement",
                                          "argument": {
                                            "type": "CallExpression",
                                            "callee": {
                                              "type": "Identifier",
                                              "name": "o"
                                            },
                                            "arguments": [
                                              {
                                                "type": "Identifier",
                                                "name": "row"
                                              },
                                              {
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
                                              "name": "a"
                                            },
                                            "init": {
                                              "type": "NewExpression",
                                              "callee": {
                                                "type": "Identifier",
                                                "name": "Function"
                                              },
                                              "arguments": [
                                                {
                                                  "type": "Literal",
                                                  "value": "d",
                                                  "raw": "\"d\""
                                                },
                                                {
                                                  "type": "BinaryExpression",
                                                  "operator": "+",
                                                  "left": {
                                                    "type": "BinaryExpression",
                                                    "operator": "+",
                                                    "left": {
                                                      "type": "Literal",
                                                      "value": "return {",
                                                      "raw": "\"return {\""
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
                                                              "name": "row"
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
                                                                  "name": "name"
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
                                                                                "name": "JSON"
                                                                              },
                                                                              "property": {
                                                                                "type": "Identifier",
                                                                                "name": "stringify"
                                                                              }
                                                                            },
                                                                            "arguments": [
                                                                              {
                                                                                "type": "Identifier",
                                                                                "name": "name"
                                                                              }
                                                                            ]
                                                                          },
                                                                          "right": {
                                                                            "type": "Literal",
                                                                            "value": ": d[",
                                                                            "raw": "\": d[\""
                                                                          }
                                                                        },
                                                                        "right": {
                                                                          "type": "Identifier",
                                                                          "name": "i"
                                                                        }
                                                                      },
                                                                      "right": {
                                                                        "type": "Literal",
                                                                        "value": "]",
                                                                        "raw": "\"]\""
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
                                                        "property": {
                                                          "type": "Identifier",
                                                          "name": "join"
                                                        }
                                                      },
                                                      "arguments": [
                                                        {
                                                          "type": "Literal",
                                                          "value": ",",
                                                          "raw": "\",\""
                                                        }
                                                      ]
                                                    }
                                                  },
                                                  "right": {
                                                    "type": "Literal",
                                                    "value": "}",
                                                    "raw": "\"}\""
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
                                          "type": "AssignmentExpression",
                                          "operator": "=",
                                          "left": {
                                            "type": "Identifier",
                                            "name": "o"
                                          },
                                          "right": {
                                            "type": "ConditionalExpression",
                                            "test": {
                                              "type": "Identifier",
                                              "name": "f"
                                            },
                                            "consequent": {
                                              "type": "FunctionExpression",
                                              "id": null,
                                              "params": [
                                                {
                                                  "type": "Identifier",
                                                  "name": "row"
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
                                                        "type": "Identifier",
                                                        "name": "f"
                                                      },
                                                      "arguments": [
                                                        {
                                                          "type": "CallExpression",
                                                          "callee": {
                                                            "type": "Identifier",
                                                            "name": "a"
                                                          },
                                                          "arguments": [
                                                            {
                                                              "type": "Identifier",
                                                              "name": "row"
                                                            }
                                                          ]
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
                                            },
                                            "alternate": {
                                              "type": "Identifier",
                                              "name": "a"
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
                        "name": "dsv"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "parseRows"
                      }
                    },
                    "right": {
                      "type": "FunctionExpression",
                      "id": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "name": "text"
                        },
                        {
                          "type": "Identifier",
                          "name": "f"
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
                                  "name": "EOL"
                                },
                                "init": {
                                  "type": "ObjectExpression",
                                  "properties": []
                                }
                              },
                              {
                                "type": "VariableDeclarator",
                                "id": {
                                  "type": "Identifier",
                                  "name": "EOF"
                                },
                                "init": {
                                  "type": "ObjectExpression",
                                  "properties": []
                                }
                              },
                              {
                                "type": "VariableDeclarator",
                                "id": {
                                  "type": "Identifier",
                                  "name": "rows"
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
                                  "name": "N"
                                },
                                "init": {
                                  "type": "MemberExpression",
                                  "computed": false,
                                  "object": {
                                    "type": "Identifier",
                                    "name": "text"
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
                                  "name": "I"
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
                                  "name": "n"
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
                                  "name": "t"
                                },
                                "init": null
                              },
                              {
                                "type": "VariableDeclarator",
                                "id": {
                                  "type": "Identifier",
                                  "name": "eol"
                                },
                                "init": null
                              }
                            ],
                            "kind": "var"
                          },
                          {
                            "type": "FunctionDeclaration",
                            "id": {
                              "type": "Identifier",
                              "name": "token"
                            },
                            "params": [],
                            "defaults": [],
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
                                      "name": "I"
                                    },
                                    "right": {
                                      "type": "Identifier",
                                      "name": "N"
                                    }
                                  },
                                  "consequent": {
                                    "type": "ReturnStatement",
                                    "argument": {
                                      "type": "Identifier",
                                      "name": "EOF"
                                    }
                                  },
                                  "alternate": null
                                },
                                {
                                  "type": "IfStatement",
                                  "test": {
                                    "type": "Identifier",
                                    "name": "eol"
                                  },
                                  "consequent": {
                                    "type": "ReturnStatement",
                                    "argument": {
                                      "type": "SequenceExpression",
                                      "expressions": [
                                        {
                                          "type": "AssignmentExpression",
                                          "operator": "=",
                                          "left": {
                                            "type": "Identifier",
                                            "name": "eol"
                                          },
                                          "right": {
                                            "type": "Literal",
                                            "value": false,
                                            "raw": "false"
                                          }
                                        },
                                        {
                                          "type": "Identifier",
                                          "name": "EOL"
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
                                        "name": "j"
                                      },
                                      "init": {
                                        "type": "Identifier",
                                        "name": "I"
                                      }
                                    }
                                  ],
                                  "kind": "var"
                                },
                                {
                                  "type": "IfStatement",
                                  "test": {
                                    "type": "BinaryExpression",
                                    "operator": "===",
                                    "left": {
                                      "type": "CallExpression",
                                      "callee": {
                                        "type": "MemberExpression",
                                        "computed": false,
                                        "object": {
                                          "type": "Identifier",
                                          "name": "text"
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "name": "charCodeAt"
                                        }
                                      },
                                      "arguments": [
                                        {
                                          "type": "Identifier",
                                          "name": "j"
                                        }
                                      ]
                                    },
                                    "right": {
                                      "type": "Literal",
                                      "value": 34,
                                      "raw": "34"
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
                                              "name": "i"
                                            },
                                            "init": {
                                              "type": "Identifier",
                                              "name": "j"
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
                                            "prefix": false
                                          },
                                          "right": {
                                            "type": "Identifier",
                                            "name": "N"
                                          }
                                        },
                                        "body": {
                                          "type": "BlockStatement",
                                          "body": [
                                            {
                                              "type": "IfStatement",
                                              "test": {
                                                "type": "BinaryExpression",
                                                "operator": "===",
                                                "left": {
                                                  "type": "CallExpression",
                                                  "callee": {
                                                    "type": "MemberExpression",
                                                    "computed": false,
                                                    "object": {
                                                      "type": "Identifier",
                                                      "name": "text"
                                                    },
                                                    "property": {
                                                      "type": "Identifier",
                                                      "name": "charCodeAt"
                                                    }
                                                  },
                                                  "arguments": [
                                                    {
                                                      "type": "Identifier",
                                                      "name": "i"
                                                    }
                                                  ]
                                                },
                                                "right": {
                                                  "type": "Literal",
                                                  "value": 34,
                                                  "raw": "34"
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
                                                        "type": "CallExpression",
                                                        "callee": {
                                                          "type": "MemberExpression",
                                                          "computed": false,
                                                          "object": {
                                                            "type": "Identifier",
                                                            "name": "text"
                                                          },
                                                          "property": {
                                                            "type": "Identifier",
                                                            "name": "charCodeAt"
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
                                                      },
                                                      "right": {
                                                        "type": "Literal",
                                                        "value": 34,
                                                        "raw": "34"
                                                      }
                                                    },
                                                    "consequent": {
                                                      "type": "BreakStatement",
                                                      "label": null
                                                    },
                                                    "alternate": null
                                                  },
                                                  {
                                                    "type": "ExpressionStatement",
                                                    "expression": {
                                                      "type": "UpdateExpression",
                                                      "operator": "++",
                                                      "argument": {
                                                        "type": "Identifier",
                                                        "name": "i"
                                                      },
                                                      "prefix": true
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
                                        "type": "ExpressionStatement",
                                        "expression": {
                                          "type": "AssignmentExpression",
                                          "operator": "=",
                                          "left": {
                                            "type": "Identifier",
                                            "name": "I"
                                          },
                                          "right": {
                                            "type": "BinaryExpression",
                                            "operator": "+",
                                            "left": {
                                              "type": "Identifier",
                                              "name": "i"
                                            },
                                            "right": {
                                              "type": "Literal",
                                              "value": 2,
                                              "raw": "2"
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
                                              "name": "c"
                                            },
                                            "init": {
                                              "type": "CallExpression",
                                              "callee": {
                                                "type": "MemberExpression",
                                                "computed": false,
                                                "object": {
                                                  "type": "Identifier",
                                                  "name": "text"
                                                },
                                                "property": {
                                                  "type": "Identifier",
                                                  "name": "charCodeAt"
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
                                        ],
                                        "kind": "var"
                                      },
                                      {
                                        "type": "IfStatement",
                                        "test": {
                                          "type": "BinaryExpression",
                                          "operator": "===",
                                          "left": {
                                            "type": "Identifier",
                                            "name": "c"
                                          },
                                          "right": {
                                            "type": "Literal",
                                            "value": 13,
                                            "raw": "13"
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
                                                  "name": "eol"
                                                },
                                                "right": {
                                                  "type": "Literal",
                                                  "value": true,
                                                  "raw": "true"
                                                }
                                              }
                                            },
                                            {
                                              "type": "IfStatement",
                                              "test": {
                                                "type": "BinaryExpression",
                                                "operator": "===",
                                                "left": {
                                                  "type": "CallExpression",
                                                  "callee": {
                                                    "type": "MemberExpression",
                                                    "computed": false,
                                                    "object": {
                                                      "type": "Identifier",
                                                      "name": "text"
                                                    },
                                                    "property": {
                                                      "type": "Identifier",
                                                      "name": "charCodeAt"
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
                                                        "value": 2,
                                                        "raw": "2"
                                                      }
                                                    }
                                                  ]
                                                },
                                                "right": {
                                                  "type": "Literal",
                                                  "value": 10,
                                                  "raw": "10"
                                                }
                                              },
                                              "consequent": {
                                                "type": "ExpressionStatement",
                                                "expression": {
                                                  "type": "UpdateExpression",
                                                  "operator": "++",
                                                  "argument": {
                                                    "type": "Identifier",
                                                    "name": "I"
                                                  },
                                                  "prefix": true
                                                }
                                              },
                                              "alternate": null
                                            }
                                          ]
                                        },
                                        "alternate": {
                                          "type": "IfStatement",
                                          "test": {
                                            "type": "BinaryExpression",
                                            "operator": "===",
                                            "left": {
                                              "type": "Identifier",
                                              "name": "c"
                                            },
                                            "right": {
                                              "type": "Literal",
                                              "value": 10,
                                              "raw": "10"
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
                                                    "name": "eol"
                                                  },
                                                  "right": {
                                                    "type": "Literal",
                                                    "value": true,
                                                    "raw": "true"
                                                  }
                                                }
                                              }
                                            ]
                                          },
                                          "alternate": null
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
                                                  "name": "text"
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
                                                    "name": "j"
                                                  },
                                                  "right": {
                                                    "type": "Literal",
                                                    "value": 1,
                                                    "raw": "1"
                                                  }
                                                },
                                                {
                                                  "type": "Identifier",
                                                  "name": "i"
                                                }
                                              ]
                                            },
                                            "property": {
                                              "type": "Identifier",
                                              "name": "replace"
                                            }
                                          },
                                          "arguments": [
                                            {
                                              "type": "Literal",
                                              "value": {},
                                              "raw": "/\"\"/g"
                                            },
                                            {
                                              "type": "Literal",
                                              "value": "\"",
                                              "raw": "\"\\\"\""
                                            }
                                          ]
                                        }
                                      }
                                    ]
                                  },
                                  "alternate": null
                                },
                                {
                                  "type": "WhileStatement",
                                  "test": {
                                    "type": "BinaryExpression",
                                    "operator": "<",
                                    "left": {
                                      "type": "Identifier",
                                      "name": "I"
                                    },
                                    "right": {
                                      "type": "Identifier",
                                      "name": "N"
                                    }
                                  },
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
                                              "name": "c"
                                            },
                                            "init": {
                                              "type": "CallExpression",
                                              "callee": {
                                                "type": "MemberExpression",
                                                "computed": false,
                                                "object": {
                                                  "type": "Identifier",
                                                  "name": "text"
                                                },
                                                "property": {
                                                  "type": "Identifier",
                                                  "name": "charCodeAt"
                                                }
                                              },
                                              "arguments": [
                                                {
                                                  "type": "UpdateExpression",
                                                  "operator": "++",
                                                  "argument": {
                                                    "type": "Identifier",
                                                    "name": "I"
                                                  },
                                                  "prefix": false
                                                }
                                              ]
                                            }
                                          },
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
                                      {
                                        "type": "IfStatement",
                                        "test": {
                                          "type": "BinaryExpression",
                                          "operator": "===",
                                          "left": {
                                            "type": "Identifier",
                                            "name": "c"
                                          },
                                          "right": {
                                            "type": "Literal",
                                            "value": 10,
                                            "raw": "10"
                                          }
                                        },
                                        "consequent": {
                                          "type": "ExpressionStatement",
                                          "expression": {
                                            "type": "AssignmentExpression",
                                            "operator": "=",
                                            "left": {
                                              "type": "Identifier",
                                              "name": "eol"
                                            },
                                            "right": {
                                              "type": "Literal",
                                              "value": true,
                                              "raw": "true"
                                            }
                                          }
                                        },
                                        "alternate": {
                                          "type": "IfStatement",
                                          "test": {
                                            "type": "BinaryExpression",
                                            "operator": "===",
                                            "left": {
                                              "type": "Identifier",
                                              "name": "c"
                                            },
                                            "right": {
                                              "type": "Literal",
                                              "value": 13,
                                              "raw": "13"
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
                                                    "name": "eol"
                                                  },
                                                  "right": {
                                                    "type": "Literal",
                                                    "value": true,
                                                    "raw": "true"
                                                  }
                                                }
                                              },
                                              {
                                                "type": "IfStatement",
                                                "test": {
                                                  "type": "BinaryExpression",
                                                  "operator": "===",
                                                  "left": {
                                                    "type": "CallExpression",
                                                    "callee": {
                                                      "type": "MemberExpression",
                                                      "computed": false,
                                                      "object": {
                                                        "type": "Identifier",
                                                        "name": "text"
                                                      },
                                                      "property": {
                                                        "type": "Identifier",
                                                        "name": "charCodeAt"
                                                      }
                                                    },
                                                    "arguments": [
                                                      {
                                                        "type": "Identifier",
                                                        "name": "I"
                                                      }
                                                    ]
                                                  },
                                                  "right": {
                                                    "type": "Literal",
                                                    "value": 10,
                                                    "raw": "10"
                                                  }
                                                },
                                                "consequent": {
                                                  "type": "ExpressionStatement",
                                                  "expression": {
                                                    "type": "SequenceExpression",
                                                    "expressions": [
                                                      {
                                                        "type": "UpdateExpression",
                                                        "operator": "++",
                                                        "argument": {
                                                          "type": "Identifier",
                                                          "name": "I"
                                                        },
                                                        "prefix": true
                                                      },
                                                      {
                                                        "type": "UpdateExpression",
                                                        "operator": "++",
                                                        "argument": {
                                                          "type": "Identifier",
                                                          "name": "k"
                                                        },
                                                        "prefix": true
                                                      }
                                                    ]
                                                  }
                                                },
                                                "alternate": null
                                              }
                                            ]
                                          },
                                          "alternate": {
                                            "type": "IfStatement",
                                            "test": {
                                              "type": "BinaryExpression",
                                              "operator": "!==",
                                              "left": {
                                                "type": "Identifier",
                                                "name": "c"
                                              },
                                              "right": {
                                                "type": "Identifier",
                                                "name": "delimiterCode"
                                              }
                                            },
                                            "consequent": {
                                              "type": "ContinueStatement",
                                              "label": null
                                            },
                                            "alternate": null
                                          }
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
                                              "type": "Identifier",
                                              "name": "text"
                                            },
                                            "property": {
                                              "type": "Identifier",
                                              "name": "substring"
                                            }
                                          },
                                          "arguments": [
                                            {
                                              "type": "Identifier",
                                              "name": "j"
                                            },
                                            {
                                              "type": "BinaryExpression",
                                              "operator": "-",
                                              "left": {
                                                "type": "Identifier",
                                                "name": "I"
                                              },
                                              "right": {
                                                "type": "Identifier",
                                                "name": "k"
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
                                        "type": "Identifier",
                                        "name": "text"
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "name": "substring"
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
                            "rest": null,
                            "generator": false,
                            "expression": false
                          },
                          {
                            "type": "WhileStatement",
                            "test": {
                              "type": "BinaryExpression",
                              "operator": "!==",
                              "left": {
                                "type": "AssignmentExpression",
                                "operator": "=",
                                "left": {
                                  "type": "Identifier",
                                  "name": "t"
                                },
                                "right": {
                                  "type": "CallExpression",
                                  "callee": {
                                    "type": "Identifier",
                                    "name": "token"
                                  },
                                  "arguments": []
                                }
                              },
                              "right": {
                                "type": "Identifier",
                                "name": "EOF"
                              }
                            },
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
                                        "name": "a"
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
                                    "type": "LogicalExpression",
                                    "operator": "&&",
                                    "left": {
                                      "type": "BinaryExpression",
                                      "operator": "!==",
                                      "left": {
                                        "type": "Identifier",
                                        "name": "t"
                                      },
                                      "right": {
                                        "type": "Identifier",
                                        "name": "EOL"
                                      }
                                    },
                                    "right": {
                                      "type": "BinaryExpression",
                                      "operator": "!==",
                                      "left": {
                                        "type": "Identifier",
                                        "name": "t"
                                      },
                                      "right": {
                                        "type": "Identifier",
                                        "name": "EOF"
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
                                              "name": "a"
                                            },
                                            "property": {
                                              "type": "Identifier",
                                              "name": "push"
                                            }
                                          },
                                          "arguments": [
                                            {
                                              "type": "Identifier",
                                              "name": "t"
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
                                            "name": "t"
                                          },
                                          "right": {
                                            "type": "CallExpression",
                                            "callee": {
                                              "type": "Identifier",
                                              "name": "token"
                                            },
                                            "arguments": []
                                          }
                                        }
                                      }
                                    ]
                                  }
                                },
                                {
                                  "type": "IfStatement",
                                  "test": {
                                    "type": "LogicalExpression",
                                    "operator": "&&",
                                    "left": {
                                      "type": "Identifier",
                                      "name": "f"
                                    },
                                    "right": {
                                      "type": "UnaryExpression",
                                      "operator": "!",
                                      "argument": {
                                        "type": "AssignmentExpression",
                                        "operator": "=",
                                        "left": {
                                          "type": "Identifier",
                                          "name": "a"
                                        },
                                        "right": {
                                          "type": "CallExpression",
                                          "callee": {
                                            "type": "Identifier",
                                            "name": "f"
                                          },
                                          "arguments": [
                                            {
                                              "type": "Identifier",
                                              "name": "a"
                                            },
                                            {
                                              "type": "UpdateExpression",
                                              "operator": "++",
                                              "argument": {
                                                "type": "Identifier",
                                                "name": "n"
                                              },
                                              "prefix": false
                                            }
                                          ]
                                        }
                                      },
                                      "prefix": true
                                    }
                                  },
                                  "consequent": {
                                    "type": "ContinueStatement",
                                    "label": null
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
                                        "name": "rows"
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "name": "push"
                                      }
                                    },
                                    "arguments": [
                                      {
                                        "type": "Identifier",
                                        "name": "a"
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
                              "name": "rows"
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
                        "name": "dsv"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "format"
                      }
                    },
                    "right": {
                      "type": "FunctionExpression",
                      "id": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "name": "rows"
                        }
                      ],
                      "defaults": [],
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
                                  "type": "Identifier",
                                  "name": "Array"
                                },
                                "property": {
                                  "type": "Identifier",
                                  "name": "isArray"
                                }
                              },
                              "arguments": [
                                {
                                  "type": "MemberExpression",
                                  "computed": true,
                                  "object": {
                                    "type": "Identifier",
                                    "name": "rows"
                                  },
                                  "property": {
                                    "type": "Literal",
                                    "value": 0,
                                    "raw": "0"
                                  }
                                }
                              ]
                            },
                            "consequent": {
                              "type": "ReturnStatement",
                              "argument": {
                                "type": "CallExpression",
                                "callee": {
                                  "type": "MemberExpression",
                                  "computed": false,
                                  "object": {
                                    "type": "Identifier",
                                    "name": "dsv"
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "name": "formatRows"
                                  }
                                },
                                "arguments": [
                                  {
                                    "type": "Identifier",
                                    "name": "rows"
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
                                  "name": "fieldSet"
                                },
                                "init": {
                                  "type": "NewExpression",
                                  "callee": {
                                    "type": "Identifier",
                                    "name": "d3_Set"
                                  },
                                  "arguments": []
                                }
                              },
                              {
                                "type": "VariableDeclarator",
                                "id": {
                                  "type": "Identifier",
                                  "name": "fields"
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
                                  "name": "rows"
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
                                      "name": "row"
                                    }
                                  ],
                                  "defaults": [],
                                  "body": {
                                    "type": "BlockStatement",
                                    "body": [
                                      {
                                        "type": "ForInStatement",
                                        "left": {
                                          "type": "VariableDeclaration",
                                          "declarations": [
                                            {
                                              "type": "VariableDeclarator",
                                              "id": {
                                                "type": "Identifier",
                                                "name": "field"
                                              },
                                              "init": null
                                            }
                                          ],
                                          "kind": "var"
                                        },
                                        "right": {
                                          "type": "Identifier",
                                          "name": "row"
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
                                                  "type": "CallExpression",
                                                  "callee": {
                                                    "type": "MemberExpression",
                                                    "computed": false,
                                                    "object": {
                                                      "type": "Identifier",
                                                      "name": "fieldSet"
                                                    },
                                                    "property": {
                                                      "type": "Identifier",
                                                      "name": "has"
                                                    }
                                                  },
                                                  "arguments": [
                                                    {
                                                      "type": "Identifier",
                                                      "name": "field"
                                                    }
                                                  ]
                                                },
                                                "prefix": true
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
                                                          "name": "fields"
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
                                                              "name": "fieldSet"
                                                            },
                                                            "property": {
                                                              "type": "Identifier",
                                                              "name": "add"
                                                            }
                                                          },
                                                          "arguments": [
                                                            {
                                                              "type": "Identifier",
                                                              "name": "field"
                                                            }
                                                          ]
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
                                        "each": false
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
                                      "type": "ArrayExpression",
                                      "elements": [
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
                                                  "type": "Identifier",
                                                  "name": "fields"
                                                },
                                                "property": {
                                                  "type": "Identifier",
                                                  "name": "map"
                                                }
                                              },
                                              "arguments": [
                                                {
                                                  "type": "Identifier",
                                                  "name": "formatValue"
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
                                              "name": "delimiter"
                                            }
                                          ]
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
                                          "name": "rows"
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
                                              "name": "row"
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
                                                          "name": "fields"
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
                                                              "name": "field"
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
                                                                    "name": "formatValue"
                                                                  },
                                                                  "arguments": [
                                                                    {
                                                                      "type": "MemberExpression",
                                                                      "computed": true,
                                                                      "object": {
                                                                        "type": "Identifier",
                                                                        "name": "row"
                                                                      },
                                                                      "property": {
                                                                        "type": "Identifier",
                                                                        "name": "field"
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
                                                      "name": "delimiter"
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
                                  ]
                                },
                                "property": {
                                  "type": "Identifier",
                                  "name": "join"
                                }
                              },
                              "arguments": [
                                {
                                  "type": "Literal",
                                  "value": "\n",
                                  "raw": "\"\\n\""
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
                        "name": "dsv"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "formatRows"
                      }
                    },
                    "right": {
                      "type": "FunctionExpression",
                      "id": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "name": "rows"
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
                                      "name": "rows"
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "name": "map"
                                    }
                                  },
                                  "arguments": [
                                    {
                                      "type": "Identifier",
                                      "name": "formatRow"
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
                                  "type": "Literal",
                                  "value": "\n",
                                  "raw": "\"\\n\""
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
                    "name": "formatRow"
                  },
                  "params": [
                    {
                      "type": "Identifier",
                      "name": "row"
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
                                  "name": "row"
                                },
                                "property": {
                                  "type": "Identifier",
                                  "name": "map"
                                }
                              },
                              "arguments": [
                                {
                                  "type": "Identifier",
                                  "name": "formatValue"
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
                              "name": "delimiter"
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
                    "name": "formatValue"
                  },
                  "params": [
                    {
                      "type": "Identifier",
                      "name": "text"
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
                            "type": "CallExpression",
                            "callee": {
                              "type": "MemberExpression",
                              "computed": false,
                              "object": {
                                "type": "Identifier",
                                "name": "reFormat"
                              },
                              "property": {
                                "type": "Identifier",
                                "name": "test"
                              }
                            },
                            "arguments": [
                              {
                                "type": "Identifier",
                                "name": "text"
                              }
                            ]
                          },
                          "consequent": {
                            "type": "BinaryExpression",
                            "operator": "+",
                            "left": {
                              "type": "BinaryExpression",
                              "operator": "+",
                              "left": {
                                "type": "Literal",
                                "value": "\"",
                                "raw": "\"\\\"\""
                              },
                              "right": {
                                "type": "CallExpression",
                                "callee": {
                                  "type": "MemberExpression",
                                  "computed": false,
                                  "object": {
                                    "type": "Identifier",
                                    "name": "text"
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "name": "replace"
                                  }
                                },
                                "arguments": [
                                  {
                                    "type": "Literal",
                                    "value": {},
                                    "raw": "/\\\"/g"
                                  },
                                  {
                                    "type": "Literal",
                                    "value": "\"\"",
                                    "raw": "\"\\\"\\\"\""
                                  }
                                ]
                              }
                            },
                            "right": {
                              "type": "Literal",
                              "value": "\"",
                              "raw": "\"\\\"\""
                            }
                          },
                          "alternate": {
                            "type": "Identifier",
                            "name": "text"
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
                    "type": "Identifier",
                    "name": "dsv"
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
  "src": "d3.dsv = function (delimiter, mimeType) {\n    var reFormat = new RegExp('[\"' + delimiter + '\\n]'), delimiterCode = delimiter.charCodeAt(0);\n    function dsv(url, row, callback) {\n        if (arguments.length < 3)\n            callback = row, row = null;\n        var xhr = d3_xhr(url, mimeType, row == null ? response : typedResponse(row), callback);\n        xhr.row = function (_) {\n            return arguments.length ? xhr.response((row = _) == null ? response : typedResponse(_)) : row;\n        };\n        return xhr;\n    }\n    function response(request) {\n        return dsv.parse(request.responseText);\n    }\n    function typedResponse(f) {\n        return function (request) {\n            return dsv.parse(request.responseText, f);\n        };\n    }\n    dsv.parse = function (text, f) {\n        var o;\n        return dsv.parseRows(text, function (row, i) {\n            if (o)\n                return o(row, i - 1);\n            var a = new Function('d', 'return {' + row.map(function (name, i) {\n                    return JSON.stringify(name) + ': d[' + i + ']';\n                }).join(',') + '}');\n            o = f ? function (row, i) {\n                return f(a(row), i);\n            } : a;\n        });\n    };\n    dsv.parseRows = function (text, f) {\n        var EOL = {}, EOF = {}, rows = [], N = text.length, I = 0, n = 0, t, eol;\n        function token() {\n            if (I >= N)\n                return EOF;\n            if (eol)\n                return eol = false, EOL;\n            var j = I;\n            if (text.charCodeAt(j) === 34) {\n                var i = j;\n                while (i++ < N) {\n                    if (text.charCodeAt(i) === 34) {\n                        if (text.charCodeAt(i + 1) !== 34)\n                            break;\n                        ++i;\n                    }\n                }\n                I = i + 2;\n                var c = text.charCodeAt(i + 1);\n                if (c === 13) {\n                    eol = true;\n                    if (text.charCodeAt(i + 2) === 10)\n                        ++I;\n                } else if (c === 10) {\n                    eol = true;\n                }\n                return text.substring(j + 1, i).replace(/\"\"/g, '\"');\n            }\n            while (I < N) {\n                var c = text.charCodeAt(I++), k = 1;\n                if (c === 10)\n                    eol = true;\n                else if (c === 13) {\n                    eol = true;\n                    if (text.charCodeAt(I) === 10)\n                        ++I, ++k;\n                } else if (c !== delimiterCode)\n                    continue;\n                return text.substring(j, I - k);\n            }\n            return text.substring(j);\n        }\n        while ((t = token()) !== EOF) {\n            var a = [];\n            while (t !== EOL && t !== EOF) {\n                a.push(t);\n                t = token();\n            }\n            if (f && !(a = f(a, n++)))\n                continue;\n            rows.push(a);\n        }\n        return rows;\n    };\n    dsv.format = function (rows) {\n        if (Array.isArray(rows[0]))\n            return dsv.formatRows(rows);\n        var fieldSet = new d3_Set(), fields = [];\n        rows.forEach(function (row) {\n            for (var field in row) {\n                if (!fieldSet.has(field)) {\n                    fields.push(fieldSet.add(field));\n                }\n            }\n        });\n        return [fields.map(formatValue).join(delimiter)].concat(rows.map(function (row) {\n            return fields.map(function (field) {\n                return formatValue(row[field]);\n            }).join(delimiter);\n        })).join('\\n');\n    };\n    dsv.formatRows = function (rows) {\n        return rows.map(formatRow).join('\\n');\n    };\n    function formatRow(row) {\n        return row.map(formatValue).join(delimiter);\n    }\n    function formatValue(text) {\n        return reFormat.test(text) ? '\"' + text.replace(/\\\"/g, '\"\"') + '\"' : text;\n    }\n    return dsv;\n};"
}