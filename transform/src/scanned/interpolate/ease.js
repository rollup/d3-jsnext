{
  "filepath": "/interpolate/ease.js",
  "shared": [],
  "dependencies": [
    "d3_identity",
    "d3.map",
    "d3_arraySlice"
  ],
  "helpers": [
    "d3_ease_default",
    "d3_ease",
    "d3_ease_mode",
    "d3_ease_clamp",
    "d3_ease_reverse",
    "d3_ease_reflect",
    "d3_ease_quad",
    "d3_ease_cubic",
    "d3_ease_cubicInOut",
    "d3_ease_poly",
    "d3_ease_sin",
    "d3_ease_exp",
    "d3_ease_circle",
    "d3_ease_elastic",
    "d3_ease_back",
    "d3_ease_bounce"
  ],
  "exports": [
    "d3.ease"
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
              "name": "d3_ease_default"
            },
            "init": {
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
                      "type": "Identifier",
                      "name": "d3_identity"
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
        "type": "VariableDeclaration",
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "name": "d3_ease"
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
                        "name": "linear"
                      },
                      "value": {
                        "type": "Identifier",
                        "name": "d3_ease_default"
                      },
                      "kind": "init"
                    },
                    {
                      "type": "Property",
                      "key": {
                        "type": "Identifier",
                        "name": "poly"
                      },
                      "value": {
                        "type": "Identifier",
                        "name": "d3_ease_poly"
                      },
                      "kind": "init"
                    },
                    {
                      "type": "Property",
                      "key": {
                        "type": "Identifier",
                        "name": "quad"
                      },
                      "value": {
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
                                "type": "Identifier",
                                "name": "d3_ease_quad"
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
                        "name": "cubic"
                      },
                      "value": {
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
                                "type": "Identifier",
                                "name": "d3_ease_cubic"
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
                        "name": "sin"
                      },
                      "value": {
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
                                "type": "Identifier",
                                "name": "d3_ease_sin"
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
                        "name": "exp"
                      },
                      "value": {
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
                                "type": "Identifier",
                                "name": "d3_ease_exp"
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
                        "name": "circle"
                      },
                      "value": {
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
                                "type": "Identifier",
                                "name": "d3_ease_circle"
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
                        "name": "elastic"
                      },
                      "value": {
                        "type": "Identifier",
                        "name": "d3_ease_elastic"
                      },
                      "kind": "init"
                    },
                    {
                      "type": "Property",
                      "key": {
                        "type": "Identifier",
                        "name": "back"
                      },
                      "value": {
                        "type": "Identifier",
                        "name": "d3_ease_back"
                      },
                      "kind": "init"
                    },
                    {
                      "type": "Property",
                      "key": {
                        "type": "Identifier",
                        "name": "bounce"
                      },
                      "value": {
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
                                "type": "Identifier",
                                "name": "d3_ease_bounce"
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
        "type": "VariableDeclaration",
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "name": "d3_ease_mode"
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
                        "value": "in",
                        "raw": "\"in\""
                      },
                      "value": {
                        "type": "Identifier",
                        "name": "d3_identity"
                      },
                      "kind": "init"
                    },
                    {
                      "type": "Property",
                      "key": {
                        "type": "Literal",
                        "value": "out",
                        "raw": "\"out\""
                      },
                      "value": {
                        "type": "Identifier",
                        "name": "d3_ease_reverse"
                      },
                      "kind": "init"
                    },
                    {
                      "type": "Property",
                      "key": {
                        "type": "Literal",
                        "value": "in-out",
                        "raw": "\"in-out\""
                      },
                      "value": {
                        "type": "Identifier",
                        "name": "d3_ease_reflect"
                      },
                      "kind": "init"
                    },
                    {
                      "type": "Property",
                      "key": {
                        "type": "Literal",
                        "value": "out-in",
                        "raw": "\"out-in\""
                      },
                      "value": {
                        "type": "FunctionExpression",
                        "id": null,
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
                                "type": "CallExpression",
                                "callee": {
                                  "type": "Identifier",
                                  "name": "d3_ease_reflect"
                                },
                                "arguments": [
                                  {
                                    "type": "CallExpression",
                                    "callee": {
                                      "type": "Identifier",
                                      "name": "d3_ease_reverse"
                                    },
                                    "arguments": [
                                      {
                                        "type": "Identifier",
                                        "name": "f"
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
              "name": "ease"
            }
          },
          "right": {
            "type": "FunctionExpression",
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "name": "name"
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
                            "name": "name"
                          },
                          "property": {
                            "type": "Identifier",
                            "name": "indexOf"
                          }
                        },
                        "arguments": [
                          {
                            "type": "Literal",
                            "value": "-",
                            "raw": "\"-\""
                          }
                        ]
                      }
                    },
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "name": "t"
                      },
                      "init": {
                        "type": "ConditionalExpression",
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
                        },
                        "alternate": {
                          "type": "Identifier",
                          "name": "name"
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
                        "type": "ConditionalExpression",
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
                        },
                        "alternate": {
                          "type": "Literal",
                          "value": "in",
                          "raw": "\"in\""
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
                      "type": "Identifier",
                      "name": "t"
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
                            "name": "d3_ease"
                          },
                          "property": {
                            "type": "Identifier",
                            "name": "get"
                          }
                        },
                        "arguments": [
                          {
                            "type": "Identifier",
                            "name": "t"
                          }
                        ]
                      },
                      "right": {
                        "type": "Identifier",
                        "name": "d3_ease_default"
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
                      "name": "m"
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
                            "name": "d3_ease_mode"
                          },
                          "property": {
                            "type": "Identifier",
                            "name": "get"
                          }
                        },
                        "arguments": [
                          {
                            "type": "Identifier",
                            "name": "m"
                          }
                        ]
                      },
                      "right": {
                        "type": "Identifier",
                        "name": "d3_identity"
                      }
                    }
                  }
                },
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "name": "d3_ease_clamp"
                    },
                    "arguments": [
                      {
                        "type": "CallExpression",
                        "callee": {
                          "type": "Identifier",
                          "name": "m"
                        },
                        "arguments": [
                          {
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
                                "name": "apply"
                              }
                            },
                            "arguments": [
                              {
                                "type": "Literal",
                                "value": null,
                                "raw": "null"
                              },
                              {
                                "type": "CallExpression",
                                "callee": {
                                  "type": "MemberExpression",
                                  "computed": false,
                                  "object": {
                                    "type": "Identifier",
                                    "name": "d3_arraySlice"
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "name": "call"
                                  }
                                },
                                "arguments": [
                                  {
                                    "type": "Identifier",
                                    "name": "arguments"
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
          "name": "d3_ease_clamp"
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
                    "name": "t"
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
                            "type": "Identifier",
                            "name": "t"
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
                          "type": "ConditionalExpression",
                          "test": {
                            "type": "BinaryExpression",
                            "operator": ">=",
                            "left": {
                              "type": "Identifier",
                              "name": "t"
                            },
                            "right": {
                              "type": "Literal",
                              "value": 1,
                              "raw": "1"
                            }
                          },
                          "consequent": {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1"
                          },
                          "alternate": {
                            "type": "CallExpression",
                            "callee": {
                              "type": "Identifier",
                              "name": "f"
                            },
                            "arguments": [
                              {
                                "type": "Identifier",
                                "name": "t"
                              }
                            ]
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
          "name": "d3_ease_reverse"
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
                    "name": "t"
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
                          "type": "Literal",
                          "value": 1,
                          "raw": "1"
                        },
                        "right": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "Identifier",
                            "name": "f"
                          },
                          "arguments": [
                            {
                              "type": "BinaryExpression",
                              "operator": "-",
                              "left": {
                                "type": "Literal",
                                "value": 1,
                                "raw": "1"
                              },
                              "right": {
                                "type": "Identifier",
                                "name": "t"
                              }
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
          "name": "d3_ease_reflect"
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
                    "name": "t"
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
                        "operator": "*",
                        "left": {
                          "type": "Literal",
                          "value": 0.5,
                          "raw": ".5"
                        },
                        "right": {
                          "type": "ConditionalExpression",
                          "test": {
                            "type": "BinaryExpression",
                            "operator": "<",
                            "left": {
                              "type": "Identifier",
                              "name": "t"
                            },
                            "right": {
                              "type": "Literal",
                              "value": 0.5,
                              "raw": ".5"
                            }
                          },
                          "consequent": {
                            "type": "CallExpression",
                            "callee": {
                              "type": "Identifier",
                              "name": "f"
                            },
                            "arguments": [
                              {
                                "type": "BinaryExpression",
                                "operator": "*",
                                "left": {
                                  "type": "Literal",
                                  "value": 2,
                                  "raw": "2"
                                },
                                "right": {
                                  "type": "Identifier",
                                  "name": "t"
                                }
                              }
                            ]
                          },
                          "alternate": {
                            "type": "BinaryExpression",
                            "operator": "-",
                            "left": {
                              "type": "Literal",
                              "value": 2,
                              "raw": "2"
                            },
                            "right": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "Identifier",
                                "name": "f"
                              },
                              "arguments": [
                                {
                                  "type": "BinaryExpression",
                                  "operator": "-",
                                  "left": {
                                    "type": "Literal",
                                    "value": 2,
                                    "raw": "2"
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
                                      "name": "t"
                                    }
                                  }
                                }
                              ]
                            }
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
          "name": "d3_ease_quad"
        },
        "params": [
          {
            "type": "Identifier",
            "name": "t"
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
                "operator": "*",
                "left": {
                  "type": "Identifier",
                  "name": "t"
                },
                "right": {
                  "type": "Identifier",
                  "name": "t"
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
          "name": "d3_ease_cubic"
        },
        "params": [
          {
            "type": "Identifier",
            "name": "t"
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
                "operator": "*",
                "left": {
                  "type": "BinaryExpression",
                  "operator": "*",
                  "left": {
                    "type": "Identifier",
                    "name": "t"
                  },
                  "right": {
                    "type": "Identifier",
                    "name": "t"
                  }
                },
                "right": {
                  "type": "Identifier",
                  "name": "t"
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
          "name": "d3_ease_cubicInOut"
        },
        "params": [
          {
            "type": "Identifier",
            "name": "t"
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
                "operator": "<=",
                "left": {
                  "type": "Identifier",
                  "name": "t"
                },
                "right": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0"
                }
              },
              "consequent": {
                "type": "ReturnStatement",
                "argument": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0"
                }
              },
              "alternate": null
            },
            {
              "type": "IfStatement",
              "test": {
                "type": "BinaryExpression",
                "operator": ">=",
                "left": {
                  "type": "Identifier",
                  "name": "t"
                },
                "right": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1"
                }
              },
              "consequent": {
                "type": "ReturnStatement",
                "argument": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1"
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
                    "name": "t2"
                  },
                  "init": {
                    "type": "BinaryExpression",
                    "operator": "*",
                    "left": {
                      "type": "Identifier",
                      "name": "t"
                    },
                    "right": {
                      "type": "Identifier",
                      "name": "t"
                    }
                  }
                },
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "name": "t3"
                  },
                  "init": {
                    "type": "BinaryExpression",
                    "operator": "*",
                    "left": {
                      "type": "Identifier",
                      "name": "t2"
                    },
                    "right": {
                      "type": "Identifier",
                      "name": "t"
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
                "operator": "*",
                "left": {
                  "type": "Literal",
                  "value": 4,
                  "raw": "4"
                },
                "right": {
                  "type": "ConditionalExpression",
                  "test": {
                    "type": "BinaryExpression",
                    "operator": "<",
                    "left": {
                      "type": "Identifier",
                      "name": "t"
                    },
                    "right": {
                      "type": "Literal",
                      "value": 0.5,
                      "raw": ".5"
                    }
                  },
                  "consequent": {
                    "type": "Identifier",
                    "name": "t3"
                  },
                  "alternate": {
                    "type": "BinaryExpression",
                    "operator": "-",
                    "left": {
                      "type": "BinaryExpression",
                      "operator": "+",
                      "left": {
                        "type": "BinaryExpression",
                        "operator": "*",
                        "left": {
                          "type": "Literal",
                          "value": 3,
                          "raw": "3"
                        },
                        "right": {
                          "type": "BinaryExpression",
                          "operator": "-",
                          "left": {
                            "type": "Identifier",
                            "name": "t"
                          },
                          "right": {
                            "type": "Identifier",
                            "name": "t2"
                          }
                        }
                      },
                      "right": {
                        "type": "Identifier",
                        "name": "t3"
                      }
                    },
                    "right": {
                      "type": "Literal",
                      "value": 0.75,
                      "raw": ".75"
                    }
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
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "name": "d3_ease_poly"
        },
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
              "type": "ReturnStatement",
              "argument": {
                "type": "FunctionExpression",
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "name": "t"
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
                            "name": "t"
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
          "name": "d3_ease_sin"
        },
        "params": [
          {
            "type": "Identifier",
            "name": "t"
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
                  "type": "Literal",
                  "value": 1,
                  "raw": "1"
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
                      "name": "cos"
                    }
                  },
                  "arguments": [
                    {
                      "type": "BinaryExpression",
                      "operator": "*",
                      "left": {
                        "type": "Identifier",
                        "name": "t"
                      },
                      "right": {
                        "type": "Identifier",
                        "name": "halfπ"
                      }
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
          "name": "d3_ease_exp"
        },
        "params": [
          {
            "type": "Identifier",
            "name": "t"
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
                    "name": "Math"
                  },
                  "property": {
                    "type": "Identifier",
                    "name": "pow"
                  }
                },
                "arguments": [
                  {
                    "type": "Literal",
                    "value": 2,
                    "raw": "2"
                  },
                  {
                    "type": "BinaryExpression",
                    "operator": "*",
                    "left": {
                      "type": "Literal",
                      "value": 10,
                      "raw": "10"
                    },
                    "right": {
                      "type": "BinaryExpression",
                      "operator": "-",
                      "left": {
                        "type": "Identifier",
                        "name": "t"
                      },
                      "right": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1"
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
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "name": "d3_ease_circle"
        },
        "params": [
          {
            "type": "Identifier",
            "name": "t"
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
                  "type": "Literal",
                  "value": 1,
                  "raw": "1"
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
                      "name": "sqrt"
                    }
                  },
                  "arguments": [
                    {
                      "type": "BinaryExpression",
                      "operator": "-",
                      "left": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1"
                      },
                      "right": {
                        "type": "BinaryExpression",
                        "operator": "*",
                        "left": {
                          "type": "Identifier",
                          "name": "t"
                        },
                        "right": {
                          "type": "Identifier",
                          "name": "t"
                        }
                      }
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
          "name": "d3_ease_elastic"
        },
        "params": [
          {
            "type": "Identifier",
            "name": "a"
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
              "type": "VariableDeclaration",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "name": "s"
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
                "type": "ExpressionStatement",
                "expression": {
                  "type": "AssignmentExpression",
                  "operator": "=",
                  "left": {
                    "type": "Identifier",
                    "name": "p"
                  },
                  "right": {
                    "type": "Literal",
                    "value": 0.45,
                    "raw": "0.45"
                  }
                }
              },
              "alternate": null
            },
            {
              "type": "IfStatement",
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
                "type": "ExpressionStatement",
                "expression": {
                  "type": "AssignmentExpression",
                  "operator": "=",
                  "left": {
                    "type": "Identifier",
                    "name": "s"
                  },
                  "right": {
                    "type": "BinaryExpression",
                    "operator": "*",
                    "left": {
                      "type": "BinaryExpression",
                      "operator": "/",
                      "left": {
                        "type": "Identifier",
                        "name": "p"
                      },
                      "right": {
                        "type": "Identifier",
                        "name": "τ"
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
                          "name": "asin"
                        }
                      },
                      "arguments": [
                        {
                          "type": "BinaryExpression",
                          "operator": "/",
                          "left": {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1"
                          },
                          "right": {
                            "type": "Identifier",
                            "name": "a"
                          }
                        }
                      ]
                    }
                  }
                }
              },
              "alternate": {
                "type": "ExpressionStatement",
                "expression": {
                  "type": "SequenceExpression",
                  "expressions": [
                    {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "name": "a"
                      },
                      "right": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1"
                      }
                    },
                    {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "name": "s"
                      },
                      "right": {
                        "type": "BinaryExpression",
                        "operator": "/",
                        "left": {
                          "type": "Identifier",
                          "name": "p"
                        },
                        "right": {
                          "type": "Literal",
                          "value": 4,
                          "raw": "4"
                        }
                      }
                    }
                  ]
                }
              }
            },
            {
              "type": "ReturnStatement",
              "argument": {
                "type": "FunctionExpression",
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "name": "t"
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
                          "type": "Literal",
                          "value": 1,
                          "raw": "1"
                        },
                        "right": {
                          "type": "BinaryExpression",
                          "operator": "*",
                          "left": {
                            "type": "BinaryExpression",
                            "operator": "*",
                            "left": {
                              "type": "Identifier",
                              "name": "a"
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
                                  "name": "pow"
                                }
                              },
                              "arguments": [
                                {
                                  "type": "Literal",
                                  "value": 2,
                                  "raw": "2"
                                },
                                {
                                  "type": "BinaryExpression",
                                  "operator": "*",
                                  "left": {
                                    "type": "UnaryExpression",
                                    "operator": "-",
                                    "argument": {
                                      "type": "Literal",
                                      "value": 10,
                                      "raw": "10"
                                    },
                                    "prefix": true
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "name": "t"
                                  }
                                }
                              ]
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
                                "name": "sin"
                              }
                            },
                            "arguments": [
                              {
                                "type": "BinaryExpression",
                                "operator": "/",
                                "left": {
                                  "type": "BinaryExpression",
                                  "operator": "*",
                                  "left": {
                                    "type": "BinaryExpression",
                                    "operator": "-",
                                    "left": {
                                      "type": "Identifier",
                                      "name": "t"
                                    },
                                    "right": {
                                      "type": "Identifier",
                                      "name": "s"
                                    }
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "name": "τ"
                                  }
                                },
                                "right": {
                                  "type": "Identifier",
                                  "name": "p"
                                }
                              }
                            ]
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
          "name": "d3_ease_back"
        },
        "params": [
          {
            "type": "Identifier",
            "name": "s"
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
                  "type": "Identifier",
                  "name": "s"
                },
                "prefix": true
              },
              "consequent": {
                "type": "ExpressionStatement",
                "expression": {
                  "type": "AssignmentExpression",
                  "operator": "=",
                  "left": {
                    "type": "Identifier",
                    "name": "s"
                  },
                  "right": {
                    "type": "Literal",
                    "value": 1.70158,
                    "raw": "1.70158"
                  }
                }
              },
              "alternate": null
            },
            {
              "type": "ReturnStatement",
              "argument": {
                "type": "FunctionExpression",
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "name": "t"
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
                        "operator": "*",
                        "left": {
                          "type": "BinaryExpression",
                          "operator": "*",
                          "left": {
                            "type": "Identifier",
                            "name": "t"
                          },
                          "right": {
                            "type": "Identifier",
                            "name": "t"
                          }
                        },
                        "right": {
                          "type": "BinaryExpression",
                          "operator": "-",
                          "left": {
                            "type": "BinaryExpression",
                            "operator": "*",
                            "left": {
                              "type": "BinaryExpression",
                              "operator": "+",
                              "left": {
                                "type": "Identifier",
                                "name": "s"
                              },
                              "right": {
                                "type": "Literal",
                                "value": 1,
                                "raw": "1"
                              }
                            },
                            "right": {
                              "type": "Identifier",
                              "name": "t"
                            }
                          },
                          "right": {
                            "type": "Identifier",
                            "name": "s"
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
          "name": "d3_ease_bounce"
        },
        "params": [
          {
            "type": "Identifier",
            "name": "t"
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
                  "operator": "<",
                  "left": {
                    "type": "Identifier",
                    "name": "t"
                  },
                  "right": {
                    "type": "BinaryExpression",
                    "operator": "/",
                    "left": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1"
                    },
                    "right": {
                      "type": "Literal",
                      "value": 2.75,
                      "raw": "2.75"
                    }
                  }
                },
                "consequent": {
                  "type": "BinaryExpression",
                  "operator": "*",
                  "left": {
                    "type": "BinaryExpression",
                    "operator": "*",
                    "left": {
                      "type": "Literal",
                      "value": 7.5625,
                      "raw": "7.5625"
                    },
                    "right": {
                      "type": "Identifier",
                      "name": "t"
                    }
                  },
                  "right": {
                    "type": "Identifier",
                    "name": "t"
                  }
                },
                "alternate": {
                  "type": "ConditionalExpression",
                  "test": {
                    "type": "BinaryExpression",
                    "operator": "<",
                    "left": {
                      "type": "Identifier",
                      "name": "t"
                    },
                    "right": {
                      "type": "BinaryExpression",
                      "operator": "/",
                      "left": {
                        "type": "Literal",
                        "value": 2,
                        "raw": "2"
                      },
                      "right": {
                        "type": "Literal",
                        "value": 2.75,
                        "raw": "2.75"
                      }
                    }
                  },
                  "consequent": {
                    "type": "BinaryExpression",
                    "operator": "+",
                    "left": {
                      "type": "BinaryExpression",
                      "operator": "*",
                      "left": {
                        "type": "BinaryExpression",
                        "operator": "*",
                        "left": {
                          "type": "Literal",
                          "value": 7.5625,
                          "raw": "7.5625"
                        },
                        "right": {
                          "type": "AssignmentExpression",
                          "operator": "-=",
                          "left": {
                            "type": "Identifier",
                            "name": "t"
                          },
                          "right": {
                            "type": "BinaryExpression",
                            "operator": "/",
                            "left": {
                              "type": "Literal",
                              "value": 1.5,
                              "raw": "1.5"
                            },
                            "right": {
                              "type": "Literal",
                              "value": 2.75,
                              "raw": "2.75"
                            }
                          }
                        }
                      },
                      "right": {
                        "type": "Identifier",
                        "name": "t"
                      }
                    },
                    "right": {
                      "type": "Literal",
                      "value": 0.75,
                      "raw": ".75"
                    }
                  },
                  "alternate": {
                    "type": "ConditionalExpression",
                    "test": {
                      "type": "BinaryExpression",
                      "operator": "<",
                      "left": {
                        "type": "Identifier",
                        "name": "t"
                      },
                      "right": {
                        "type": "BinaryExpression",
                        "operator": "/",
                        "left": {
                          "type": "Literal",
                          "value": 2.5,
                          "raw": "2.5"
                        },
                        "right": {
                          "type": "Literal",
                          "value": 2.75,
                          "raw": "2.75"
                        }
                      }
                    },
                    "consequent": {
                      "type": "BinaryExpression",
                      "operator": "+",
                      "left": {
                        "type": "BinaryExpression",
                        "operator": "*",
                        "left": {
                          "type": "BinaryExpression",
                          "operator": "*",
                          "left": {
                            "type": "Literal",
                            "value": 7.5625,
                            "raw": "7.5625"
                          },
                          "right": {
                            "type": "AssignmentExpression",
                            "operator": "-=",
                            "left": {
                              "type": "Identifier",
                              "name": "t"
                            },
                            "right": {
                              "type": "BinaryExpression",
                              "operator": "/",
                              "left": {
                                "type": "Literal",
                                "value": 2.25,
                                "raw": "2.25"
                              },
                              "right": {
                                "type": "Literal",
                                "value": 2.75,
                                "raw": "2.75"
                              }
                            }
                          }
                        },
                        "right": {
                          "type": "Identifier",
                          "name": "t"
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "value": 0.9375,
                        "raw": ".9375"
                      }
                    },
                    "alternate": {
                      "type": "BinaryExpression",
                      "operator": "+",
                      "left": {
                        "type": "BinaryExpression",
                        "operator": "*",
                        "left": {
                          "type": "BinaryExpression",
                          "operator": "*",
                          "left": {
                            "type": "Literal",
                            "value": 7.5625,
                            "raw": "7.5625"
                          },
                          "right": {
                            "type": "AssignmentExpression",
                            "operator": "-=",
                            "left": {
                              "type": "Identifier",
                              "name": "t"
                            },
                            "right": {
                              "type": "BinaryExpression",
                              "operator": "/",
                              "left": {
                                "type": "Literal",
                                "value": 2.625,
                                "raw": "2.625"
                              },
                              "right": {
                                "type": "Literal",
                                "value": 2.75,
                                "raw": "2.75"
                              }
                            }
                          }
                        },
                        "right": {
                          "type": "Identifier",
                          "name": "t"
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "value": 0.984375,
                        "raw": ".984375"
                      }
                    }
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
  "src": "var d3_ease_default = function () {\n    return d3_identity;\n};\nvar d3_ease = d3.map({\n        linear: d3_ease_default,\n        poly: d3_ease_poly,\n        quad: function () {\n            return d3_ease_quad;\n        },\n        cubic: function () {\n            return d3_ease_cubic;\n        },\n        sin: function () {\n            return d3_ease_sin;\n        },\n        exp: function () {\n            return d3_ease_exp;\n        },\n        circle: function () {\n            return d3_ease_circle;\n        },\n        elastic: d3_ease_elastic,\n        back: d3_ease_back,\n        bounce: function () {\n            return d3_ease_bounce;\n        }\n    });\nvar d3_ease_mode = d3.map({\n        'in': d3_identity,\n        'out': d3_ease_reverse,\n        'in-out': d3_ease_reflect,\n        'out-in': function (f) {\n            return d3_ease_reflect(d3_ease_reverse(f));\n        }\n    });\nd3.ease = function (name) {\n    var i = name.indexOf('-'), t = i >= 0 ? name.substring(0, i) : name, m = i >= 0 ? name.substring(i + 1) : 'in';\n    t = d3_ease.get(t) || d3_ease_default;\n    m = d3_ease_mode.get(m) || d3_identity;\n    return d3_ease_clamp(m(t.apply(null, d3_arraySlice.call(arguments, 1))));\n};\nfunction d3_ease_clamp(f) {\n    return function (t) {\n        return t <= 0 ? 0 : t >= 1 ? 1 : f(t);\n    };\n}\nfunction d3_ease_reverse(f) {\n    return function (t) {\n        return 1 - f(1 - t);\n    };\n}\nfunction d3_ease_reflect(f) {\n    return function (t) {\n        return 0.5 * (t < 0.5 ? f(2 * t) : 2 - f(2 - 2 * t));\n    };\n}\nfunction d3_ease_quad(t) {\n    return t * t;\n}\nfunction d3_ease_cubic(t) {\n    return t * t * t;\n}\nfunction d3_ease_cubicInOut(t) {\n    if (t <= 0)\n        return 0;\n    if (t >= 1)\n        return 1;\n    var t2 = t * t, t3 = t2 * t;\n    return 4 * (t < 0.5 ? t3 : 3 * (t - t2) + t3 - 0.75);\n}\nfunction d3_ease_poly(e) {\n    return function (t) {\n        return Math.pow(t, e);\n    };\n}\nfunction d3_ease_sin(t) {\n    return 1 - Math.cos(t * halfπ);\n}\nfunction d3_ease_exp(t) {\n    return Math.pow(2, 10 * (t - 1));\n}\nfunction d3_ease_circle(t) {\n    return 1 - Math.sqrt(1 - t * t);\n}\nfunction d3_ease_elastic(a, p) {\n    var s;\n    if (arguments.length < 2)\n        p = 0.45;\n    if (arguments.length)\n        s = p / τ * Math.asin(1 / a);\n    else\n        a = 1, s = p / 4;\n    return function (t) {\n        return 1 + a * Math.pow(2, -10 * t) * Math.sin((t - s) * τ / p);\n    };\n}\nfunction d3_ease_back(s) {\n    if (!s)\n        s = 1.70158;\n    return function (t) {\n        return t * t * ((s + 1) * t - s);\n    };\n}\nfunction d3_ease_bounce(t) {\n    return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + 0.75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + 0.9375 : 7.5625 * (t -= 2.625 / 2.75) * t + 0.984375;\n}"
}