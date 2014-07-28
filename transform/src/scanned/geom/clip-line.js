{
  "filepath": "/geom/clip-line.js",
  "shared": [],
  "dependencies": [],
  "helpers": [
    "d3_geom_clipLine"
  ],
  "exports": [],
  "ast": {
    "type": "Program",
    "body": [
      {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "name": "d3_geom_clipLine"
        },
        "params": [
          {
            "type": "Identifier",
            "name": "x0"
          },
          {
            "type": "Identifier",
            "name": "y0"
          },
          {
            "type": "Identifier",
            "name": "x1"
          },
          {
            "type": "Identifier",
            "name": "y1"
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
                    "name": "line"
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
                            "name": "a"
                          },
                          "init": {
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "name": "line"
                            },
                            "property": {
                              "type": "Identifier",
                              "name": "a"
                            }
                          }
                        },
                        {
                          "type": "VariableDeclarator",
                          "id": {
                            "type": "Identifier",
                            "name": "b"
                          },
                          "init": {
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "name": "line"
                            },
                            "property": {
                              "type": "Identifier",
                              "name": "b"
                            }
                          }
                        },
                        {
                          "type": "VariableDeclarator",
                          "id": {
                            "type": "Identifier",
                            "name": "ax"
                          },
                          "init": {
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "name": "a"
                            },
                            "property": {
                              "type": "Identifier",
                              "name": "x"
                            }
                          }
                        },
                        {
                          "type": "VariableDeclarator",
                          "id": {
                            "type": "Identifier",
                            "name": "ay"
                          },
                          "init": {
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "name": "a"
                            },
                            "property": {
                              "type": "Identifier",
                              "name": "y"
                            }
                          }
                        },
                        {
                          "type": "VariableDeclarator",
                          "id": {
                            "type": "Identifier",
                            "name": "bx"
                          },
                          "init": {
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "name": "b"
                            },
                            "property": {
                              "type": "Identifier",
                              "name": "x"
                            }
                          }
                        },
                        {
                          "type": "VariableDeclarator",
                          "id": {
                            "type": "Identifier",
                            "name": "by"
                          },
                          "init": {
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "name": "b"
                            },
                            "property": {
                              "type": "Identifier",
                              "name": "y"
                            }
                          }
                        },
                        {
                          "type": "VariableDeclarator",
                          "id": {
                            "type": "Identifier",
                            "name": "t0"
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
                            "name": "t1"
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
                            "name": "dx"
                          },
                          "init": {
                            "type": "BinaryExpression",
                            "operator": "-",
                            "left": {
                              "type": "Identifier",
                              "name": "bx"
                            },
                            "right": {
                              "type": "Identifier",
                              "name": "ax"
                            }
                          }
                        },
                        {
                          "type": "VariableDeclarator",
                          "id": {
                            "type": "Identifier",
                            "name": "dy"
                          },
                          "init": {
                            "type": "BinaryExpression",
                            "operator": "-",
                            "left": {
                              "type": "Identifier",
                              "name": "by"
                            },
                            "right": {
                              "type": "Identifier",
                              "name": "ay"
                            }
                          }
                        },
                        {
                          "type": "VariableDeclarator",
                          "id": {
                            "type": "Identifier",
                            "name": "r"
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
                          "type": "Identifier",
                          "name": "r"
                        },
                        "right": {
                          "type": "BinaryExpression",
                          "operator": "-",
                          "left": {
                            "type": "Identifier",
                            "name": "x0"
                          },
                          "right": {
                            "type": "Identifier",
                            "name": "ax"
                          }
                        }
                      }
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
                            "name": "dx"
                          },
                          "prefix": true
                        },
                        "right": {
                          "type": "BinaryExpression",
                          "operator": ">",
                          "left": {
                            "type": "Identifier",
                            "name": "r"
                          },
                          "right": {
                            "type": "Literal",
                            "value": 0,
                            "raw": "0"
                          }
                        }
                      },
                      "consequent": {
                        "type": "ReturnStatement",
                        "argument": null
                      },
                      "alternate": null
                    },
                    {
                      "type": "ExpressionStatement",
                      "expression": {
                        "type": "AssignmentExpression",
                        "operator": "/=",
                        "left": {
                          "type": "Identifier",
                          "name": "r"
                        },
                        "right": {
                          "type": "Identifier",
                          "name": "dx"
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
                          "name": "dx"
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
                            "type": "IfStatement",
                            "test": {
                              "type": "BinaryExpression",
                              "operator": "<",
                              "left": {
                                "type": "Identifier",
                                "name": "r"
                              },
                              "right": {
                                "type": "Identifier",
                                "name": "t0"
                              }
                            },
                            "consequent": {
                              "type": "ReturnStatement",
                              "argument": null
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
                                "name": "r"
                              },
                              "right": {
                                "type": "Identifier",
                                "name": "t1"
                              }
                            },
                            "consequent": {
                              "type": "ExpressionStatement",
                              "expression": {
                                "type": "AssignmentExpression",
                                "operator": "=",
                                "left": {
                                  "type": "Identifier",
                                  "name": "t1"
                                },
                                "right": {
                                  "type": "Identifier",
                                  "name": "r"
                                }
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
                          "operator": ">",
                          "left": {
                            "type": "Identifier",
                            "name": "dx"
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
                              "type": "IfStatement",
                              "test": {
                                "type": "BinaryExpression",
                                "operator": ">",
                                "left": {
                                  "type": "Identifier",
                                  "name": "r"
                                },
                                "right": {
                                  "type": "Identifier",
                                  "name": "t1"
                                }
                              },
                              "consequent": {
                                "type": "ReturnStatement",
                                "argument": null
                              },
                              "alternate": null
                            },
                            {
                              "type": "IfStatement",
                              "test": {
                                "type": "BinaryExpression",
                                "operator": ">",
                                "left": {
                                  "type": "Identifier",
                                  "name": "r"
                                },
                                "right": {
                                  "type": "Identifier",
                                  "name": "t0"
                                }
                              },
                              "consequent": {
                                "type": "ExpressionStatement",
                                "expression": {
                                  "type": "AssignmentExpression",
                                  "operator": "=",
                                  "left": {
                                    "type": "Identifier",
                                    "name": "t0"
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "name": "r"
                                  }
                                }
                              },
                              "alternate": null
                            }
                          ]
                        },
                        "alternate": null
                      }
                    },
                    {
                      "type": "ExpressionStatement",
                      "expression": {
                        "type": "AssignmentExpression",
                        "operator": "=",
                        "left": {
                          "type": "Identifier",
                          "name": "r"
                        },
                        "right": {
                          "type": "BinaryExpression",
                          "operator": "-",
                          "left": {
                            "type": "Identifier",
                            "name": "x1"
                          },
                          "right": {
                            "type": "Identifier",
                            "name": "ax"
                          }
                        }
                      }
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
                            "name": "dx"
                          },
                          "prefix": true
                        },
                        "right": {
                          "type": "BinaryExpression",
                          "operator": "<",
                          "left": {
                            "type": "Identifier",
                            "name": "r"
                          },
                          "right": {
                            "type": "Literal",
                            "value": 0,
                            "raw": "0"
                          }
                        }
                      },
                      "consequent": {
                        "type": "ReturnStatement",
                        "argument": null
                      },
                      "alternate": null
                    },
                    {
                      "type": "ExpressionStatement",
                      "expression": {
                        "type": "AssignmentExpression",
                        "operator": "/=",
                        "left": {
                          "type": "Identifier",
                          "name": "r"
                        },
                        "right": {
                          "type": "Identifier",
                          "name": "dx"
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
                          "name": "dx"
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
                            "type": "IfStatement",
                            "test": {
                              "type": "BinaryExpression",
                              "operator": ">",
                              "left": {
                                "type": "Identifier",
                                "name": "r"
                              },
                              "right": {
                                "type": "Identifier",
                                "name": "t1"
                              }
                            },
                            "consequent": {
                              "type": "ReturnStatement",
                              "argument": null
                            },
                            "alternate": null
                          },
                          {
                            "type": "IfStatement",
                            "test": {
                              "type": "BinaryExpression",
                              "operator": ">",
                              "left": {
                                "type": "Identifier",
                                "name": "r"
                              },
                              "right": {
                                "type": "Identifier",
                                "name": "t0"
                              }
                            },
                            "consequent": {
                              "type": "ExpressionStatement",
                              "expression": {
                                "type": "AssignmentExpression",
                                "operator": "=",
                                "left": {
                                  "type": "Identifier",
                                  "name": "t0"
                                },
                                "right": {
                                  "type": "Identifier",
                                  "name": "r"
                                }
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
                          "operator": ">",
                          "left": {
                            "type": "Identifier",
                            "name": "dx"
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
                              "type": "IfStatement",
                              "test": {
                                "type": "BinaryExpression",
                                "operator": "<",
                                "left": {
                                  "type": "Identifier",
                                  "name": "r"
                                },
                                "right": {
                                  "type": "Identifier",
                                  "name": "t0"
                                }
                              },
                              "consequent": {
                                "type": "ReturnStatement",
                                "argument": null
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
                                  "name": "r"
                                },
                                "right": {
                                  "type": "Identifier",
                                  "name": "t1"
                                }
                              },
                              "consequent": {
                                "type": "ExpressionStatement",
                                "expression": {
                                  "type": "AssignmentExpression",
                                  "operator": "=",
                                  "left": {
                                    "type": "Identifier",
                                    "name": "t1"
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "name": "r"
                                  }
                                }
                              },
                              "alternate": null
                            }
                          ]
                        },
                        "alternate": null
                      }
                    },
                    {
                      "type": "ExpressionStatement",
                      "expression": {
                        "type": "AssignmentExpression",
                        "operator": "=",
                        "left": {
                          "type": "Identifier",
                          "name": "r"
                        },
                        "right": {
                          "type": "BinaryExpression",
                          "operator": "-",
                          "left": {
                            "type": "Identifier",
                            "name": "y0"
                          },
                          "right": {
                            "type": "Identifier",
                            "name": "ay"
                          }
                        }
                      }
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
                            "name": "dy"
                          },
                          "prefix": true
                        },
                        "right": {
                          "type": "BinaryExpression",
                          "operator": ">",
                          "left": {
                            "type": "Identifier",
                            "name": "r"
                          },
                          "right": {
                            "type": "Literal",
                            "value": 0,
                            "raw": "0"
                          }
                        }
                      },
                      "consequent": {
                        "type": "ReturnStatement",
                        "argument": null
                      },
                      "alternate": null
                    },
                    {
                      "type": "ExpressionStatement",
                      "expression": {
                        "type": "AssignmentExpression",
                        "operator": "/=",
                        "left": {
                          "type": "Identifier",
                          "name": "r"
                        },
                        "right": {
                          "type": "Identifier",
                          "name": "dy"
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
                          "name": "dy"
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
                            "type": "IfStatement",
                            "test": {
                              "type": "BinaryExpression",
                              "operator": "<",
                              "left": {
                                "type": "Identifier",
                                "name": "r"
                              },
                              "right": {
                                "type": "Identifier",
                                "name": "t0"
                              }
                            },
                            "consequent": {
                              "type": "ReturnStatement",
                              "argument": null
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
                                "name": "r"
                              },
                              "right": {
                                "type": "Identifier",
                                "name": "t1"
                              }
                            },
                            "consequent": {
                              "type": "ExpressionStatement",
                              "expression": {
                                "type": "AssignmentExpression",
                                "operator": "=",
                                "left": {
                                  "type": "Identifier",
                                  "name": "t1"
                                },
                                "right": {
                                  "type": "Identifier",
                                  "name": "r"
                                }
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
                          "operator": ">",
                          "left": {
                            "type": "Identifier",
                            "name": "dy"
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
                              "type": "IfStatement",
                              "test": {
                                "type": "BinaryExpression",
                                "operator": ">",
                                "left": {
                                  "type": "Identifier",
                                  "name": "r"
                                },
                                "right": {
                                  "type": "Identifier",
                                  "name": "t1"
                                }
                              },
                              "consequent": {
                                "type": "ReturnStatement",
                                "argument": null
                              },
                              "alternate": null
                            },
                            {
                              "type": "IfStatement",
                              "test": {
                                "type": "BinaryExpression",
                                "operator": ">",
                                "left": {
                                  "type": "Identifier",
                                  "name": "r"
                                },
                                "right": {
                                  "type": "Identifier",
                                  "name": "t0"
                                }
                              },
                              "consequent": {
                                "type": "ExpressionStatement",
                                "expression": {
                                  "type": "AssignmentExpression",
                                  "operator": "=",
                                  "left": {
                                    "type": "Identifier",
                                    "name": "t0"
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "name": "r"
                                  }
                                }
                              },
                              "alternate": null
                            }
                          ]
                        },
                        "alternate": null
                      }
                    },
                    {
                      "type": "ExpressionStatement",
                      "expression": {
                        "type": "AssignmentExpression",
                        "operator": "=",
                        "left": {
                          "type": "Identifier",
                          "name": "r"
                        },
                        "right": {
                          "type": "BinaryExpression",
                          "operator": "-",
                          "left": {
                            "type": "Identifier",
                            "name": "y1"
                          },
                          "right": {
                            "type": "Identifier",
                            "name": "ay"
                          }
                        }
                      }
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
                            "name": "dy"
                          },
                          "prefix": true
                        },
                        "right": {
                          "type": "BinaryExpression",
                          "operator": "<",
                          "left": {
                            "type": "Identifier",
                            "name": "r"
                          },
                          "right": {
                            "type": "Literal",
                            "value": 0,
                            "raw": "0"
                          }
                        }
                      },
                      "consequent": {
                        "type": "ReturnStatement",
                        "argument": null
                      },
                      "alternate": null
                    },
                    {
                      "type": "ExpressionStatement",
                      "expression": {
                        "type": "AssignmentExpression",
                        "operator": "/=",
                        "left": {
                          "type": "Identifier",
                          "name": "r"
                        },
                        "right": {
                          "type": "Identifier",
                          "name": "dy"
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
                          "name": "dy"
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
                            "type": "IfStatement",
                            "test": {
                              "type": "BinaryExpression",
                              "operator": ">",
                              "left": {
                                "type": "Identifier",
                                "name": "r"
                              },
                              "right": {
                                "type": "Identifier",
                                "name": "t1"
                              }
                            },
                            "consequent": {
                              "type": "ReturnStatement",
                              "argument": null
                            },
                            "alternate": null
                          },
                          {
                            "type": "IfStatement",
                            "test": {
                              "type": "BinaryExpression",
                              "operator": ">",
                              "left": {
                                "type": "Identifier",
                                "name": "r"
                              },
                              "right": {
                                "type": "Identifier",
                                "name": "t0"
                              }
                            },
                            "consequent": {
                              "type": "ExpressionStatement",
                              "expression": {
                                "type": "AssignmentExpression",
                                "operator": "=",
                                "left": {
                                  "type": "Identifier",
                                  "name": "t0"
                                },
                                "right": {
                                  "type": "Identifier",
                                  "name": "r"
                                }
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
                          "operator": ">",
                          "left": {
                            "type": "Identifier",
                            "name": "dy"
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
                              "type": "IfStatement",
                              "test": {
                                "type": "BinaryExpression",
                                "operator": "<",
                                "left": {
                                  "type": "Identifier",
                                  "name": "r"
                                },
                                "right": {
                                  "type": "Identifier",
                                  "name": "t0"
                                }
                              },
                              "consequent": {
                                "type": "ReturnStatement",
                                "argument": null
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
                                  "name": "r"
                                },
                                "right": {
                                  "type": "Identifier",
                                  "name": "t1"
                                }
                              },
                              "consequent": {
                                "type": "ExpressionStatement",
                                "expression": {
                                  "type": "AssignmentExpression",
                                  "operator": "=",
                                  "left": {
                                    "type": "Identifier",
                                    "name": "t1"
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "name": "r"
                                  }
                                }
                              },
                              "alternate": null
                            }
                          ]
                        },
                        "alternate": null
                      }
                    },
                    {
                      "type": "IfStatement",
                      "test": {
                        "type": "BinaryExpression",
                        "operator": ">",
                        "left": {
                          "type": "Identifier",
                          "name": "t0"
                        },
                        "right": {
                          "type": "Literal",
                          "value": 0,
                          "raw": "0"
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
                              "name": "line"
                            },
                            "property": {
                              "type": "Identifier",
                              "name": "a"
                            }
                          },
                          "right": {
                            "type": "ObjectExpression",
                            "properties": [
                              {
                                "type": "Property",
                                "key": {
                                  "type": "Identifier",
                                  "name": "x"
                                },
                                "value": {
                                  "type": "BinaryExpression",
                                  "operator": "+",
                                  "left": {
                                    "type": "Identifier",
                                    "name": "ax"
                                  },
                                  "right": {
                                    "type": "BinaryExpression",
                                    "operator": "*",
                                    "left": {
                                      "type": "Identifier",
                                      "name": "t0"
                                    },
                                    "right": {
                                      "type": "Identifier",
                                      "name": "dx"
                                    }
                                  }
                                },
                                "kind": "init"
                              },
                              {
                                "type": "Property",
                                "key": {
                                  "type": "Identifier",
                                  "name": "y"
                                },
                                "value": {
                                  "type": "BinaryExpression",
                                  "operator": "+",
                                  "left": {
                                    "type": "Identifier",
                                    "name": "ay"
                                  },
                                  "right": {
                                    "type": "BinaryExpression",
                                    "operator": "*",
                                    "left": {
                                      "type": "Identifier",
                                      "name": "t0"
                                    },
                                    "right": {
                                      "type": "Identifier",
                                      "name": "dy"
                                    }
                                  }
                                },
                                "kind": "init"
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
                        "operator": "<",
                        "left": {
                          "type": "Identifier",
                          "name": "t1"
                        },
                        "right": {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1"
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
                              "name": "line"
                            },
                            "property": {
                              "type": "Identifier",
                              "name": "b"
                            }
                          },
                          "right": {
                            "type": "ObjectExpression",
                            "properties": [
                              {
                                "type": "Property",
                                "key": {
                                  "type": "Identifier",
                                  "name": "x"
                                },
                                "value": {
                                  "type": "BinaryExpression",
                                  "operator": "+",
                                  "left": {
                                    "type": "Identifier",
                                    "name": "ax"
                                  },
                                  "right": {
                                    "type": "BinaryExpression",
                                    "operator": "*",
                                    "left": {
                                      "type": "Identifier",
                                      "name": "t1"
                                    },
                                    "right": {
                                      "type": "Identifier",
                                      "name": "dx"
                                    }
                                  }
                                },
                                "kind": "init"
                              },
                              {
                                "type": "Property",
                                "key": {
                                  "type": "Identifier",
                                  "name": "y"
                                },
                                "value": {
                                  "type": "BinaryExpression",
                                  "operator": "+",
                                  "left": {
                                    "type": "Identifier",
                                    "name": "ay"
                                  },
                                  "right": {
                                    "type": "BinaryExpression",
                                    "operator": "*",
                                    "left": {
                                      "type": "Identifier",
                                      "name": "t1"
                                    },
                                    "right": {
                                      "type": "Identifier",
                                      "name": "dy"
                                    }
                                  }
                                },
                                "kind": "init"
                              }
                            ]
                          }
                        }
                      },
                      "alternate": null
                    },
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "Identifier",
                        "name": "line"
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
  "src": "function d3_geom_clipLine(x0, y0, x1, y1) {\n    return function (line) {\n        var a = line.a, b = line.b, ax = a.x, ay = a.y, bx = b.x, by = b.y, t0 = 0, t1 = 1, dx = bx - ax, dy = by - ay, r;\n        r = x0 - ax;\n        if (!dx && r > 0)\n            return;\n        r /= dx;\n        if (dx < 0) {\n            if (r < t0)\n                return;\n            if (r < t1)\n                t1 = r;\n        } else if (dx > 0) {\n            if (r > t1)\n                return;\n            if (r > t0)\n                t0 = r;\n        }\n        r = x1 - ax;\n        if (!dx && r < 0)\n            return;\n        r /= dx;\n        if (dx < 0) {\n            if (r > t1)\n                return;\n            if (r > t0)\n                t0 = r;\n        } else if (dx > 0) {\n            if (r < t0)\n                return;\n            if (r < t1)\n                t1 = r;\n        }\n        r = y0 - ay;\n        if (!dy && r > 0)\n            return;\n        r /= dy;\n        if (dy < 0) {\n            if (r < t0)\n                return;\n            if (r < t1)\n                t1 = r;\n        } else if (dy > 0) {\n            if (r > t1)\n                return;\n            if (r > t0)\n                t0 = r;\n        }\n        r = y1 - ay;\n        if (!dy && r < 0)\n            return;\n        r /= dy;\n        if (dy < 0) {\n            if (r > t1)\n                return;\n            if (r > t0)\n                t0 = r;\n        } else if (dy > 0) {\n            if (r < t0)\n                return;\n            if (r < t1)\n                t1 = r;\n        }\n        if (t0 > 0)\n            line.a = {\n                x: ax + t0 * dx,\n                y: ay + t0 * dy\n            };\n        if (t1 < 1)\n            line.b = {\n                x: ax + t1 * dx,\n                y: ay + t1 * dy\n            };\n        return line;\n    };\n}"
}