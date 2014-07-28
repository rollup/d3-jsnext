{
  "filepath": "/geom/hull.js",
  "shared": [],
  "dependencies": [
    "d3_geom_pointX",
    "d3_geom_pointY",
    "d3_functor",
    "d3_cross2d"
  ],
  "helpers": [
    "d3_geom_hullUpper",
    "d3_geom_hullOrder"
  ],
  "exports": [
    "d3.geom.hull"
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
                "name": "geom"
              }
            },
            "property": {
              "type": "Identifier",
              "name": "hull"
            }
          },
          "right": {
            "type": "FunctionExpression",
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "name": "vertices"
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
                        "name": "x"
                      },
                      "init": {
                        "type": "Identifier",
                        "name": "d3_geom_pointX"
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
                        "name": "d3_geom_pointY"
                      }
                    }
                  ],
                  "kind": "var"
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
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "name": "hull"
                      },
                      "arguments": [
                        {
                          "type": "Identifier",
                          "name": "vertices"
                        }
                      ]
                    }
                  },
                  "alternate": null
                },
                {
                  "type": "FunctionDeclaration",
                  "id": {
                    "type": "Identifier",
                    "name": "hull"
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
                        "type": "IfStatement",
                        "test": {
                          "type": "BinaryExpression",
                          "operator": "<",
                          "left": {
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
                          },
                          "right": {
                            "type": "Literal",
                            "value": 3,
                            "raw": "3"
                          }
                        },
                        "consequent": {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "ArrayExpression",
                            "elements": []
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
                              "name": "fx"
                            },
                            "init": {
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
                          },
                          {
                            "type": "VariableDeclarator",
                            "id": {
                              "type": "Identifier",
                              "name": "fy"
                            },
                            "init": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "Identifier",
                                "name": "d3_functor"
                              },
                              "arguments": [
                                {
                                  "type": "Identifier",
                                  "name": "y"
                                }
                              ]
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
                              "name": "points"
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
                              "name": "flippedPoints"
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
                          "prefix": false
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
                                    "name": "points"
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "name": "push"
                                  }
                                },
                                "arguments": [
                                  {
                                    "type": "ArrayExpression",
                                    "elements": [
                                      {
                                        "type": "UnaryExpression",
                                        "operator": "+",
                                        "argument": {
                                          "type": "CallExpression",
                                          "callee": {
                                            "type": "MemberExpression",
                                            "computed": false,
                                            "object": {
                                              "type": "Identifier",
                                              "name": "fx"
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
                                              "type": "Identifier",
                                              "name": "i"
                                            }
                                          ]
                                        },
                                        "prefix": true
                                      },
                                      {
                                        "type": "UnaryExpression",
                                        "operator": "+",
                                        "argument": {
                                          "type": "CallExpression",
                                          "callee": {
                                            "type": "MemberExpression",
                                            "computed": false,
                                            "object": {
                                              "type": "Identifier",
                                              "name": "fy"
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
                                              "type": "Identifier",
                                              "name": "i"
                                            }
                                          ]
                                        },
                                        "prefix": true
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
                              "name": "points"
                            },
                            "property": {
                              "type": "Identifier",
                              "name": "sort"
                            }
                          },
                          "arguments": [
                            {
                              "type": "Identifier",
                              "name": "d3_geom_hullOrder"
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
                            "type": "CallExpression",
                            "callee": {
                              "type": "MemberExpression",
                              "computed": false,
                              "object": {
                                "type": "Identifier",
                                "name": "flippedPoints"
                              },
                              "property": {
                                "type": "Identifier",
                                "name": "push"
                              }
                            },
                            "arguments": [
                              {
                                "type": "ArrayExpression",
                                "elements": [
                                  {
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
                                      "type": "Literal",
                                      "value": 0,
                                      "raw": "0"
                                    }
                                  },
                                  {
                                    "type": "UnaryExpression",
                                    "operator": "-",
                                    "argument": {
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
                                        "type": "Literal",
                                        "value": 1,
                                        "raw": "1"
                                      }
                                    },
                                    "prefix": true
                                  }
                                ]
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
                              "name": "upper"
                            },
                            "init": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "Identifier",
                                "name": "d3_geom_hullUpper"
                              },
                              "arguments": [
                                {
                                  "type": "Identifier",
                                  "name": "points"
                                }
                              ]
                            }
                          },
                          {
                            "type": "VariableDeclarator",
                            "id": {
                              "type": "Identifier",
                              "name": "lower"
                            },
                            "init": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "Identifier",
                                "name": "d3_geom_hullUpper"
                              },
                              "arguments": [
                                {
                                  "type": "Identifier",
                                  "name": "flippedPoints"
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
                              "name": "skipLeft"
                            },
                            "init": {
                              "type": "BinaryExpression",
                              "operator": "===",
                              "left": {
                                "type": "MemberExpression",
                                "computed": true,
                                "object": {
                                  "type": "Identifier",
                                  "name": "lower"
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
                                  "type": "Identifier",
                                  "name": "upper"
                                },
                                "property": {
                                  "type": "Literal",
                                  "value": 0,
                                  "raw": "0"
                                }
                              }
                            }
                          },
                          {
                            "type": "VariableDeclarator",
                            "id": {
                              "type": "Identifier",
                              "name": "skipRight"
                            },
                            "init": {
                              "type": "BinaryExpression",
                              "operator": "===",
                              "left": {
                                "type": "MemberExpression",
                                "computed": true,
                                "object": {
                                  "type": "Identifier",
                                  "name": "lower"
                                },
                                "property": {
                                  "type": "BinaryExpression",
                                  "operator": "-",
                                  "left": {
                                    "type": "MemberExpression",
                                    "computed": false,
                                    "object": {
                                      "type": "Identifier",
                                      "name": "lower"
                                    },
                                    "property": {
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
                              },
                              "right": {
                                "type": "MemberExpression",
                                "computed": true,
                                "object": {
                                  "type": "Identifier",
                                  "name": "upper"
                                },
                                "property": {
                                  "type": "BinaryExpression",
                                  "operator": "-",
                                  "left": {
                                    "type": "MemberExpression",
                                    "computed": false,
                                    "object": {
                                      "type": "Identifier",
                                      "name": "upper"
                                    },
                                    "property": {
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
                            }
                          },
                          {
                            "type": "VariableDeclarator",
                            "id": {
                              "type": "Identifier",
                              "name": "polygon"
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
                            "type": "BinaryExpression",
                            "operator": "-",
                            "left": {
                              "type": "MemberExpression",
                              "computed": false,
                              "object": {
                                "type": "Identifier",
                                "name": "upper"
                              },
                              "property": {
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
                        },
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
                        "update": {
                          "type": "UpdateExpression",
                          "operator": "--",
                          "argument": {
                            "type": "Identifier",
                            "name": "i"
                          },
                          "prefix": true
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
                                "name": "polygon"
                              },
                              "property": {
                                "type": "Identifier",
                                "name": "push"
                              }
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
                                      "type": "MemberExpression",
                                      "computed": true,
                                      "object": {
                                        "type": "Identifier",
                                        "name": "upper"
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "name": "i"
                                      }
                                    }
                                  },
                                  "property": {
                                    "type": "Literal",
                                    "value": 2,
                                    "raw": "2"
                                  }
                                }
                              }
                            ]
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
                            "name": "i"
                          },
                          "right": {
                            "type": "UnaryExpression",
                            "operator": "+",
                            "argument": {
                              "type": "Identifier",
                              "name": "skipLeft"
                            },
                            "prefix": true
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
                            "type": "BinaryExpression",
                            "operator": "-",
                            "left": {
                              "type": "MemberExpression",
                              "computed": false,
                              "object": {
                                "type": "Identifier",
                                "name": "lower"
                              },
                              "property": {
                                "type": "Identifier",
                                "name": "length"
                              }
                            },
                            "right": {
                              "type": "Identifier",
                              "name": "skipRight"
                            }
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
                            "type": "CallExpression",
                            "callee": {
                              "type": "MemberExpression",
                              "computed": false,
                              "object": {
                                "type": "Identifier",
                                "name": "polygon"
                              },
                              "property": {
                                "type": "Identifier",
                                "name": "push"
                              }
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
                                      "type": "MemberExpression",
                                      "computed": true,
                                      "object": {
                                        "type": "Identifier",
                                        "name": "lower"
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "name": "i"
                                      }
                                    }
                                  },
                                  "property": {
                                    "type": "Literal",
                                    "value": 2,
                                    "raw": "2"
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
                          "type": "Identifier",
                          "name": "polygon"
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
                        "name": "hull"
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
                                "type": "SequenceExpression",
                                "expressions": [
                                  {
                                    "type": "AssignmentExpression",
                                    "operator": "=",
                                    "left": {
                                      "type": "Identifier",
                                      "name": "x"
                                    },
                                    "right": {
                                      "type": "Identifier",
                                      "name": "_"
                                    }
                                  },
                                  {
                                    "type": "Identifier",
                                    "name": "hull"
                                  }
                                ]
                              },
                              "alternate": {
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
                        "name": "hull"
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
                                "type": "SequenceExpression",
                                "expressions": [
                                  {
                                    "type": "AssignmentExpression",
                                    "operator": "=",
                                    "left": {
                                      "type": "Identifier",
                                      "name": "y"
                                    },
                                    "right": {
                                      "type": "Identifier",
                                      "name": "_"
                                    }
                                  },
                                  {
                                    "type": "Identifier",
                                    "name": "hull"
                                  }
                                ]
                              },
                              "alternate": {
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
                    }
                  }
                },
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Identifier",
                    "name": "hull"
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
          "name": "d3_geom_hullUpper"
        },
        "params": [
          {
            "type": "Identifier",
            "name": "points"
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
                      "name": "points"
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
                    "name": "hull"
                  },
                  "init": {
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
                },
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "name": "hs"
                  },
                  "init": {
                    "type": "Literal",
                    "value": 2,
                    "raw": "2"
                  }
                }
              ],
              "kind": "var"
            },
            {
              "type": "ForStatement",
              "init": {
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
                      "value": 2,
                      "raw": "2"
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
                "type": "BlockStatement",
                "body": [
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
                          "name": "hs"
                        },
                        "right": {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1"
                        }
                      },
                      "right": {
                        "type": "BinaryExpression",
                        "operator": "<=",
                        "left": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "Identifier",
                            "name": "d3_cross2d"
                          },
                          "arguments": [
                            {
                              "type": "MemberExpression",
                              "computed": true,
                              "object": {
                                "type": "Identifier",
                                "name": "points"
                              },
                              "property": {
                                "type": "MemberExpression",
                                "computed": true,
                                "object": {
                                  "type": "Identifier",
                                  "name": "hull"
                                },
                                "property": {
                                  "type": "BinaryExpression",
                                  "operator": "-",
                                  "left": {
                                    "type": "Identifier",
                                    "name": "hs"
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
                              "type": "MemberExpression",
                              "computed": true,
                              "object": {
                                "type": "Identifier",
                                "name": "points"
                              },
                              "property": {
                                "type": "MemberExpression",
                                "computed": true,
                                "object": {
                                  "type": "Identifier",
                                  "name": "hull"
                                },
                                "property": {
                                  "type": "BinaryExpression",
                                  "operator": "-",
                                  "left": {
                                    "type": "Identifier",
                                    "name": "hs"
                                  },
                                  "right": {
                                    "type": "Literal",
                                    "value": 1,
                                    "raw": "1"
                                  }
                                }
                              }
                            },
                            {
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
                            }
                          ]
                        },
                        "right": {
                          "type": "Literal",
                          "value": 0,
                          "raw": "0"
                        }
                      }
                    },
                    "body": {
                      "type": "ExpressionStatement",
                      "expression": {
                        "type": "UpdateExpression",
                        "operator": "--",
                        "argument": {
                          "type": "Identifier",
                          "name": "hs"
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
                        "type": "MemberExpression",
                        "computed": true,
                        "object": {
                          "type": "Identifier",
                          "name": "hull"
                        },
                        "property": {
                          "type": "UpdateExpression",
                          "operator": "++",
                          "argument": {
                            "type": "Identifier",
                            "name": "hs"
                          },
                          "prefix": false
                        }
                      },
                      "right": {
                        "type": "Identifier",
                        "name": "i"
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
                    "type": "Identifier",
                    "name": "hull"
                  },
                  "property": {
                    "type": "Identifier",
                    "name": "slice"
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
                    "name": "hs"
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
          "name": "d3_geom_hullOrder"
        },
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
                "type": "LogicalExpression",
                "operator": "||",
                "left": {
                  "type": "BinaryExpression",
                  "operator": "-",
                  "left": {
                    "type": "MemberExpression",
                    "computed": true,
                    "object": {
                      "type": "Identifier",
                      "name": "a"
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
                      "type": "Identifier",
                      "name": "b"
                    },
                    "property": {
                      "type": "Literal",
                      "value": 0,
                      "raw": "0"
                    }
                  }
                },
                "right": {
                  "type": "BinaryExpression",
                  "operator": "-",
                  "left": {
                    "type": "MemberExpression",
                    "computed": true,
                    "object": {
                      "type": "Identifier",
                      "name": "a"
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
                      "type": "Identifier",
                      "name": "b"
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
        },
        "rest": null,
        "generator": false,
        "expression": false
      }
    ]
  },
  "src": "d3.geom.hull = function (vertices) {\n    var x = d3_geom_pointX, y = d3_geom_pointY;\n    if (arguments.length)\n        return hull(vertices);\n    function hull(data) {\n        if (data.length < 3)\n            return [];\n        var fx = d3_functor(x), fy = d3_functor(y), i, n = data.length, points = [], flippedPoints = [];\n        for (i = 0; i < n; i++) {\n            points.push([\n                +fx.call(this, data[i], i),\n                +fy.call(this, data[i], i),\n                i\n            ]);\n        }\n        points.sort(d3_geom_hullOrder);\n        for (i = 0; i < n; i++)\n            flippedPoints.push([\n                points[i][0],\n                -points[i][1]\n            ]);\n        var upper = d3_geom_hullUpper(points), lower = d3_geom_hullUpper(flippedPoints);\n        var skipLeft = lower[0] === upper[0], skipRight = lower[lower.length - 1] === upper[upper.length - 1], polygon = [];\n        for (i = upper.length - 1; i >= 0; --i)\n            polygon.push(data[points[upper[i]][2]]);\n        for (i = +skipLeft; i < lower.length - skipRight; ++i)\n            polygon.push(data[points[lower[i]][2]]);\n        return polygon;\n    }\n    hull.x = function (_) {\n        return arguments.length ? (x = _, hull) : x;\n    };\n    hull.y = function (_) {\n        return arguments.length ? (y = _, hull) : y;\n    };\n    return hull;\n};\nfunction d3_geom_hullUpper(points) {\n    var n = points.length, hull = [\n            0,\n            1\n        ], hs = 2;\n    for (var i = 2; i < n; i++) {\n        while (hs > 1 && d3_cross2d(points[hull[hs - 2]], points[hull[hs - 1]], points[i]) <= 0)\n            --hs;\n        hull[hs++] = i;\n    }\n    return hull.slice(0, hs);\n}\nfunction d3_geom_hullOrder(a, b) {\n    return a[0] - b[0] || a[1] - b[1];\n}"
}