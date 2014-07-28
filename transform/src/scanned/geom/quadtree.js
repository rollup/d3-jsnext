{
  "filepath": "/geom/quadtree.js",
  "shared": [],
  "dependencies": [
    "d3_geom_pointX",
    "d3_geom_pointY",
    "d3_functor",
    "abs"
  ],
  "helpers": [
    "d3_geom_quadtreeCompatX",
    "d3_geom_quadtreeCompatY",
    "d3_geom_quadtreeNode",
    "d3_geom_quadtreeVisit"
  ],
  "exports": [
    "d3.geom.quadtree"
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
              "name": "quadtree"
            }
          },
          "right": {
            "type": "FunctionExpression",
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "name": "points"
              },
              {
                "type": "Identifier",
                "name": "x1"
              },
              {
                "type": "Identifier",
                "name": "y1"
              },
              {
                "type": "Identifier",
                "name": "x2"
              },
              {
                "type": "Identifier",
                "name": "y2"
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
                    },
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "name": "compat"
                      },
                      "init": null
                    }
                  ],
                  "kind": "var"
                },
                {
                  "type": "IfStatement",
                  "test": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "name": "compat"
                    },
                    "right": {
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
                            "name": "x"
                          },
                          "right": {
                            "type": "Identifier",
                            "name": "d3_geom_quadtreeCompatX"
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
                            "name": "y"
                          },
                          "right": {
                            "type": "Identifier",
                            "name": "d3_geom_quadtreeCompatY"
                          }
                        }
                      },
                      {
                        "type": "IfStatement",
                        "test": {
                          "type": "BinaryExpression",
                          "operator": "===",
                          "left": {
                            "type": "Identifier",
                            "name": "compat"
                          },
                          "right": {
                            "type": "Literal",
                            "value": 3,
                            "raw": "3"
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
                                  "name": "y2"
                                },
                                "right": {
                                  "type": "Identifier",
                                  "name": "y1"
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
                                  "name": "x2"
                                },
                                "right": {
                                  "type": "Identifier",
                                  "name": "x1"
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
                                  "name": "y1"
                                },
                                "right": {
                                  "type": "AssignmentExpression",
                                  "operator": "=",
                                  "left": {
                                    "type": "Identifier",
                                    "name": "x1"
                                  },
                                  "right": {
                                    "type": "Literal",
                                    "value": 0,
                                    "raw": "0"
                                  }
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
                          "type": "CallExpression",
                          "callee": {
                            "type": "Identifier",
                            "name": "quadtree"
                          },
                          "arguments": [
                            {
                              "type": "Identifier",
                              "name": "points"
                            }
                          ]
                        }
                      }
                    ]
                  },
                  "alternate": null
                },
                {
                  "type": "FunctionDeclaration",
                  "id": {
                    "type": "Identifier",
                    "name": "quadtree"
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
                              "name": "d"
                            },
                            "init": null
                          },
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
                              "name": "xs"
                            },
                            "init": null
                          },
                          {
                            "type": "VariableDeclarator",
                            "id": {
                              "type": "Identifier",
                              "name": "ys"
                            },
                            "init": null
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
                            "init": null
                          },
                          {
                            "type": "VariableDeclarator",
                            "id": {
                              "type": "Identifier",
                              "name": "x1_"
                            },
                            "init": null
                          },
                          {
                            "type": "VariableDeclarator",
                            "id": {
                              "type": "Identifier",
                              "name": "y1_"
                            },
                            "init": null
                          },
                          {
                            "type": "VariableDeclarator",
                            "id": {
                              "type": "Identifier",
                              "name": "x2_"
                            },
                            "init": null
                          },
                          {
                            "type": "VariableDeclarator",
                            "id": {
                              "type": "Identifier",
                              "name": "y2_"
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
                          "operator": "!=",
                          "left": {
                            "type": "Identifier",
                            "name": "x1"
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
                              "type": "ExpressionStatement",
                              "expression": {
                                "type": "SequenceExpression",
                                "expressions": [
                                  {
                                    "type": "AssignmentExpression",
                                    "operator": "=",
                                    "left": {
                                      "type": "Identifier",
                                      "name": "x1_"
                                    },
                                    "right": {
                                      "type": "Identifier",
                                      "name": "x1"
                                    }
                                  },
                                  {
                                    "type": "AssignmentExpression",
                                    "operator": "=",
                                    "left": {
                                      "type": "Identifier",
                                      "name": "y1_"
                                    },
                                    "right": {
                                      "type": "Identifier",
                                      "name": "y1"
                                    }
                                  },
                                  {
                                    "type": "AssignmentExpression",
                                    "operator": "=",
                                    "left": {
                                      "type": "Identifier",
                                      "name": "x2_"
                                    },
                                    "right": {
                                      "type": "Identifier",
                                      "name": "x2"
                                    }
                                  },
                                  {
                                    "type": "AssignmentExpression",
                                    "operator": "=",
                                    "left": {
                                      "type": "Identifier",
                                      "name": "y2_"
                                    },
                                    "right": {
                                      "type": "Identifier",
                                      "name": "y2"
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
                              "type": "ExpressionStatement",
                              "expression": {
                                "type": "AssignmentExpression",
                                "operator": "=",
                                "left": {
                                  "type": "Identifier",
                                  "name": "x2_"
                                },
                                "right": {
                                  "type": "AssignmentExpression",
                                  "operator": "=",
                                  "left": {
                                    "type": "Identifier",
                                    "name": "y2_"
                                  },
                                  "right": {
                                    "type": "UnaryExpression",
                                    "operator": "-",
                                    "argument": {
                                      "type": "AssignmentExpression",
                                      "operator": "=",
                                      "left": {
                                        "type": "Identifier",
                                        "name": "x1_"
                                      },
                                      "right": {
                                        "type": "AssignmentExpression",
                                        "operator": "=",
                                        "left": {
                                          "type": "Identifier",
                                          "name": "y1_"
                                        },
                                        "right": {
                                          "type": "Identifier",
                                          "name": "Infinity"
                                        }
                                      }
                                    },
                                    "prefix": true
                                  }
                                }
                              }
                            },
                            {
                              "type": "ExpressionStatement",
                              "expression": {
                                "type": "SequenceExpression",
                                "expressions": [
                                  {
                                    "type": "AssignmentExpression",
                                    "operator": "=",
                                    "left": {
                                      "type": "Identifier",
                                      "name": "xs"
                                    },
                                    "right": {
                                      "type": "ArrayExpression",
                                      "elements": []
                                    }
                                  },
                                  {
                                    "type": "AssignmentExpression",
                                    "operator": "=",
                                    "left": {
                                      "type": "Identifier",
                                      "name": "ys"
                                    },
                                    "right": {
                                      "type": "ArrayExpression",
                                      "elements": []
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
                                  "name": "n"
                                },
                                "right": {
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
                              }
                            },
                            {
                              "type": "IfStatement",
                              "test": {
                                "type": "Identifier",
                                "name": "compat"
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
                                          "name": "d"
                                        },
                                        "right": {
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
                                        }
                                      }
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
                                            "name": "d"
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "name": "x"
                                          }
                                        },
                                        "right": {
                                          "type": "Identifier",
                                          "name": "x1_"
                                        }
                                      },
                                      "consequent": {
                                        "type": "ExpressionStatement",
                                        "expression": {
                                          "type": "AssignmentExpression",
                                          "operator": "=",
                                          "left": {
                                            "type": "Identifier",
                                            "name": "x1_"
                                          },
                                          "right": {
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
                                            "name": "d"
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "name": "y"
                                          }
                                        },
                                        "right": {
                                          "type": "Identifier",
                                          "name": "y1_"
                                        }
                                      },
                                      "consequent": {
                                        "type": "ExpressionStatement",
                                        "expression": {
                                          "type": "AssignmentExpression",
                                          "operator": "=",
                                          "left": {
                                            "type": "Identifier",
                                            "name": "y1_"
                                          },
                                          "right": {
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
                                      },
                                      "alternate": null
                                    },
                                    {
                                      "type": "IfStatement",
                                      "test": {
                                        "type": "BinaryExpression",
                                        "operator": ">",
                                        "left": {
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
                                        },
                                        "right": {
                                          "type": "Identifier",
                                          "name": "x2_"
                                        }
                                      },
                                      "consequent": {
                                        "type": "ExpressionStatement",
                                        "expression": {
                                          "type": "AssignmentExpression",
                                          "operator": "=",
                                          "left": {
                                            "type": "Identifier",
                                            "name": "x2_"
                                          },
                                          "right": {
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
                                      },
                                      "alternate": null
                                    },
                                    {
                                      "type": "IfStatement",
                                      "test": {
                                        "type": "BinaryExpression",
                                        "operator": ">",
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
                                          "name": "y2_"
                                        }
                                      },
                                      "consequent": {
                                        "type": "ExpressionStatement",
                                        "expression": {
                                          "type": "AssignmentExpression",
                                          "operator": "=",
                                          "left": {
                                            "type": "Identifier",
                                            "name": "y2_"
                                          },
                                          "right": {
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
                                            "name": "xs"
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "name": "push"
                                          }
                                        },
                                        "arguments": [
                                          {
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
                                            "name": "ys"
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "name": "push"
                                          }
                                        },
                                        "arguments": [
                                          {
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
                                        ]
                                      }
                                    }
                                  ]
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
                                  "prefix": true
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
                                            "name": "x_"
                                          },
                                          "init": {
                                            "type": "UnaryExpression",
                                            "operator": "+",
                                            "argument": {
                                              "type": "CallExpression",
                                              "callee": {
                                                "type": "Identifier",
                                                "name": "fx"
                                              },
                                              "arguments": [
                                                {
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
                                                      "name": "data"
                                                    },
                                                    "property": {
                                                      "type": "Identifier",
                                                      "name": "i"
                                                    }
                                                  }
                                                },
                                                {
                                                  "type": "Identifier",
                                                  "name": "i"
                                                }
                                              ]
                                            },
                                            "prefix": true
                                          }
                                        },
                                        {
                                          "type": "VariableDeclarator",
                                          "id": {
                                            "type": "Identifier",
                                            "name": "y_"
                                          },
                                          "init": {
                                            "type": "UnaryExpression",
                                            "operator": "+",
                                            "argument": {
                                              "type": "CallExpression",
                                              "callee": {
                                                "type": "Identifier",
                                                "name": "fy"
                                              },
                                              "arguments": [
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
                                          "name": "x_"
                                        },
                                        "right": {
                                          "type": "Identifier",
                                          "name": "x1_"
                                        }
                                      },
                                      "consequent": {
                                        "type": "ExpressionStatement",
                                        "expression": {
                                          "type": "AssignmentExpression",
                                          "operator": "=",
                                          "left": {
                                            "type": "Identifier",
                                            "name": "x1_"
                                          },
                                          "right": {
                                            "type": "Identifier",
                                            "name": "x_"
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
                                          "name": "y_"
                                        },
                                        "right": {
                                          "type": "Identifier",
                                          "name": "y1_"
                                        }
                                      },
                                      "consequent": {
                                        "type": "ExpressionStatement",
                                        "expression": {
                                          "type": "AssignmentExpression",
                                          "operator": "=",
                                          "left": {
                                            "type": "Identifier",
                                            "name": "y1_"
                                          },
                                          "right": {
                                            "type": "Identifier",
                                            "name": "y_"
                                          }
                                        }
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
                                          "name": "x_"
                                        },
                                        "right": {
                                          "type": "Identifier",
                                          "name": "x2_"
                                        }
                                      },
                                      "consequent": {
                                        "type": "ExpressionStatement",
                                        "expression": {
                                          "type": "AssignmentExpression",
                                          "operator": "=",
                                          "left": {
                                            "type": "Identifier",
                                            "name": "x2_"
                                          },
                                          "right": {
                                            "type": "Identifier",
                                            "name": "x_"
                                          }
                                        }
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
                                          "name": "y_"
                                        },
                                        "right": {
                                          "type": "Identifier",
                                          "name": "y2_"
                                        }
                                      },
                                      "consequent": {
                                        "type": "ExpressionStatement",
                                        "expression": {
                                          "type": "AssignmentExpression",
                                          "operator": "=",
                                          "left": {
                                            "type": "Identifier",
                                            "name": "y2_"
                                          },
                                          "right": {
                                            "type": "Identifier",
                                            "name": "y_"
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
                                            "name": "xs"
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "name": "push"
                                          }
                                        },
                                        "arguments": [
                                          {
                                            "type": "Identifier",
                                            "name": "x_"
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
                                            "name": "ys"
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "name": "push"
                                          }
                                        },
                                        "arguments": [
                                          {
                                            "type": "Identifier",
                                            "name": "y_"
                                          }
                                        ]
                                      }
                                    }
                                  ]
                                }
                              }
                            }
                          ]
                        }
                      },
                      {
                        "type": "VariableDeclaration",
                        "declarations": [
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
                                "name": "x2_"
                              },
                              "right": {
                                "type": "Identifier",
                                "name": "x1_"
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
                                "name": "y2_"
                              },
                              "right": {
                                "type": "Identifier",
                                "name": "y1_"
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
                          "operator": ">",
                          "left": {
                            "type": "Identifier",
                            "name": "dx"
                          },
                          "right": {
                            "type": "Identifier",
                            "name": "dy"
                          }
                        },
                        "consequent": {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "AssignmentExpression",
                            "operator": "=",
                            "left": {
                              "type": "Identifier",
                              "name": "y2_"
                            },
                            "right": {
                              "type": "BinaryExpression",
                              "operator": "+",
                              "left": {
                                "type": "Identifier",
                                "name": "y1_"
                              },
                              "right": {
                                "type": "Identifier",
                                "name": "dx"
                              }
                            }
                          }
                        },
                        "alternate": {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "AssignmentExpression",
                            "operator": "=",
                            "left": {
                              "type": "Identifier",
                              "name": "x2_"
                            },
                            "right": {
                              "type": "BinaryExpression",
                              "operator": "+",
                              "left": {
                                "type": "Identifier",
                                "name": "x1_"
                              },
                              "right": {
                                "type": "Identifier",
                                "name": "dy"
                              }
                            }
                          }
                        }
                      },
                      {
                        "type": "FunctionDeclaration",
                        "id": {
                          "type": "Identifier",
                          "name": "insert"
                        },
                        "params": [
                          {
                            "type": "Identifier",
                            "name": "n"
                          },
                          {
                            "type": "Identifier",
                            "name": "d"
                          },
                          {
                            "type": "Identifier",
                            "name": "x"
                          },
                          {
                            "type": "Identifier",
                            "name": "y"
                          },
                          {
                            "type": "Identifier",
                            "name": "x1"
                          },
                          {
                            "type": "Identifier",
                            "name": "y1"
                          },
                          {
                            "type": "Identifier",
                            "name": "x2"
                          },
                          {
                            "type": "Identifier",
                            "name": "y2"
                          }
                        ],
                        "defaults": [],
                        "body": {
                          "type": "BlockStatement",
                          "body": [
                            {
                              "type": "IfStatement",
                              "test": {
                                "type": "LogicalExpression",
                                "operator": "||",
                                "left": {
                                  "type": "CallExpression",
                                  "callee": {
                                    "type": "Identifier",
                                    "name": "isNaN"
                                  },
                                  "arguments": [
                                    {
                                      "type": "Identifier",
                                      "name": "x"
                                    }
                                  ]
                                },
                                "right": {
                                  "type": "CallExpression",
                                  "callee": {
                                    "type": "Identifier",
                                    "name": "isNaN"
                                  },
                                  "arguments": [
                                    {
                                      "type": "Identifier",
                                      "name": "y"
                                    }
                                  ]
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
                                "type": "MemberExpression",
                                "computed": false,
                                "object": {
                                  "type": "Identifier",
                                  "name": "n"
                                },
                                "property": {
                                  "type": "Identifier",
                                  "name": "leaf"
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
                                          "name": "nx"
                                        },
                                        "init": {
                                          "type": "MemberExpression",
                                          "computed": false,
                                          "object": {
                                            "type": "Identifier",
                                            "name": "n"
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
                                          "name": "ny"
                                        },
                                        "init": {
                                          "type": "MemberExpression",
                                          "computed": false,
                                          "object": {
                                            "type": "Identifier",
                                            "name": "n"
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "name": "y"
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
                                      "operator": "!=",
                                      "left": {
                                        "type": "Identifier",
                                        "name": "nx"
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
                                            "operator": "<",
                                            "left": {
                                              "type": "BinaryExpression",
                                              "operator": "+",
                                              "left": {
                                                "type": "CallExpression",
                                                "callee": {
                                                  "type": "Identifier",
                                                  "name": "abs"
                                                },
                                                "arguments": [
                                                  {
                                                    "type": "BinaryExpression",
                                                    "operator": "-",
                                                    "left": {
                                                      "type": "Identifier",
                                                      "name": "nx"
                                                    },
                                                    "right": {
                                                      "type": "Identifier",
                                                      "name": "x"
                                                    }
                                                  }
                                                ]
                                              },
                                              "right": {
                                                "type": "CallExpression",
                                                "callee": {
                                                  "type": "Identifier",
                                                  "name": "abs"
                                                },
                                                "arguments": [
                                                  {
                                                    "type": "BinaryExpression",
                                                    "operator": "-",
                                                    "left": {
                                                      "type": "Identifier",
                                                      "name": "ny"
                                                    },
                                                    "right": {
                                                      "type": "Identifier",
                                                      "name": "y"
                                                    }
                                                  }
                                                ]
                                              }
                                            },
                                            "right": {
                                              "type": "Literal",
                                              "value": 0.01,
                                              "raw": ".01"
                                            }
                                          },
                                          "consequent": {
                                            "type": "BlockStatement",
                                            "body": [
                                              {
                                                "type": "ExpressionStatement",
                                                "expression": {
                                                  "type": "CallExpression",
                                                  "callee": {
                                                    "type": "Identifier",
                                                    "name": "insertChild"
                                                  },
                                                  "arguments": [
                                                    {
                                                      "type": "Identifier",
                                                      "name": "n"
                                                    },
                                                    {
                                                      "type": "Identifier",
                                                      "name": "d"
                                                    },
                                                    {
                                                      "type": "Identifier",
                                                      "name": "x"
                                                    },
                                                    {
                                                      "type": "Identifier",
                                                      "name": "y"
                                                    },
                                                    {
                                                      "type": "Identifier",
                                                      "name": "x1"
                                                    },
                                                    {
                                                      "type": "Identifier",
                                                      "name": "y1"
                                                    },
                                                    {
                                                      "type": "Identifier",
                                                      "name": "x2"
                                                    },
                                                    {
                                                      "type": "Identifier",
                                                      "name": "y2"
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
                                                "type": "VariableDeclaration",
                                                "declarations": [
                                                  {
                                                    "type": "VariableDeclarator",
                                                    "id": {
                                                      "type": "Identifier",
                                                      "name": "nPoint"
                                                    },
                                                    "init": {
                                                      "type": "MemberExpression",
                                                      "computed": false,
                                                      "object": {
                                                        "type": "Identifier",
                                                        "name": "n"
                                                      },
                                                      "property": {
                                                        "type": "Identifier",
                                                        "name": "point"
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
                                                      "name": "n"
                                                    },
                                                    "property": {
                                                      "type": "Identifier",
                                                      "name": "x"
                                                    }
                                                  },
                                                  "right": {
                                                    "type": "AssignmentExpression",
                                                    "operator": "=",
                                                    "left": {
                                                      "type": "MemberExpression",
                                                      "computed": false,
                                                      "object": {
                                                        "type": "Identifier",
                                                        "name": "n"
                                                      },
                                                      "property": {
                                                        "type": "Identifier",
                                                        "name": "y"
                                                      }
                                                    },
                                                    "right": {
                                                      "type": "AssignmentExpression",
                                                      "operator": "=",
                                                      "left": {
                                                        "type": "MemberExpression",
                                                        "computed": false,
                                                        "object": {
                                                          "type": "Identifier",
                                                          "name": "n"
                                                        },
                                                        "property": {
                                                          "type": "Identifier",
                                                          "name": "point"
                                                        }
                                                      },
                                                      "right": {
                                                        "type": "Literal",
                                                        "value": null,
                                                        "raw": "null"
                                                      }
                                                    }
                                                  }
                                                }
                                              },
                                              {
                                                "type": "ExpressionStatement",
                                                "expression": {
                                                  "type": "CallExpression",
                                                  "callee": {
                                                    "type": "Identifier",
                                                    "name": "insertChild"
                                                  },
                                                  "arguments": [
                                                    {
                                                      "type": "Identifier",
                                                      "name": "n"
                                                    },
                                                    {
                                                      "type": "Identifier",
                                                      "name": "nPoint"
                                                    },
                                                    {
                                                      "type": "Identifier",
                                                      "name": "nx"
                                                    },
                                                    {
                                                      "type": "Identifier",
                                                      "name": "ny"
                                                    },
                                                    {
                                                      "type": "Identifier",
                                                      "name": "x1"
                                                    },
                                                    {
                                                      "type": "Identifier",
                                                      "name": "y1"
                                                    },
                                                    {
                                                      "type": "Identifier",
                                                      "name": "x2"
                                                    },
                                                    {
                                                      "type": "Identifier",
                                                      "name": "y2"
                                                    }
                                                  ]
                                                }
                                              },
                                              {
                                                "type": "ExpressionStatement",
                                                "expression": {
                                                  "type": "CallExpression",
                                                  "callee": {
                                                    "type": "Identifier",
                                                    "name": "insertChild"
                                                  },
                                                  "arguments": [
                                                    {
                                                      "type": "Identifier",
                                                      "name": "n"
                                                    },
                                                    {
                                                      "type": "Identifier",
                                                      "name": "d"
                                                    },
                                                    {
                                                      "type": "Identifier",
                                                      "name": "x"
                                                    },
                                                    {
                                                      "type": "Identifier",
                                                      "name": "y"
                                                    },
                                                    {
                                                      "type": "Identifier",
                                                      "name": "x1"
                                                    },
                                                    {
                                                      "type": "Identifier",
                                                      "name": "y1"
                                                    },
                                                    {
                                                      "type": "Identifier",
                                                      "name": "x2"
                                                    },
                                                    {
                                                      "type": "Identifier",
                                                      "name": "y2"
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
                                          "type": "ExpressionStatement",
                                          "expression": {
                                            "type": "SequenceExpression",
                                            "expressions": [
                                              {
                                                "type": "AssignmentExpression",
                                                "operator": "=",
                                                "left": {
                                                  "type": "MemberExpression",
                                                  "computed": false,
                                                  "object": {
                                                    "type": "Identifier",
                                                    "name": "n"
                                                  },
                                                  "property": {
                                                    "type": "Identifier",
                                                    "name": "x"
                                                  }
                                                },
                                                "right": {
                                                  "type": "Identifier",
                                                  "name": "x"
                                                }
                                              },
                                              {
                                                "type": "AssignmentExpression",
                                                "operator": "=",
                                                "left": {
                                                  "type": "MemberExpression",
                                                  "computed": false,
                                                  "object": {
                                                    "type": "Identifier",
                                                    "name": "n"
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
                                              },
                                              {
                                                "type": "AssignmentExpression",
                                                "operator": "=",
                                                "left": {
                                                  "type": "MemberExpression",
                                                  "computed": false,
                                                  "object": {
                                                    "type": "Identifier",
                                                    "name": "n"
                                                  },
                                                  "property": {
                                                    "type": "Identifier",
                                                    "name": "point"
                                                  }
                                                },
                                                "right": {
                                                  "type": "Identifier",
                                                  "name": "d"
                                                }
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
                                    "type": "ExpressionStatement",
                                    "expression": {
                                      "type": "CallExpression",
                                      "callee": {
                                        "type": "Identifier",
                                        "name": "insertChild"
                                      },
                                      "arguments": [
                                        {
                                          "type": "Identifier",
                                          "name": "n"
                                        },
                                        {
                                          "type": "Identifier",
                                          "name": "d"
                                        },
                                        {
                                          "type": "Identifier",
                                          "name": "x"
                                        },
                                        {
                                          "type": "Identifier",
                                          "name": "y"
                                        },
                                        {
                                          "type": "Identifier",
                                          "name": "x1"
                                        },
                                        {
                                          "type": "Identifier",
                                          "name": "y1"
                                        },
                                        {
                                          "type": "Identifier",
                                          "name": "x2"
                                        },
                                        {
                                          "type": "Identifier",
                                          "name": "y2"
                                        }
                                      ]
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
                          "name": "insertChild"
                        },
                        "params": [
                          {
                            "type": "Identifier",
                            "name": "n"
                          },
                          {
                            "type": "Identifier",
                            "name": "d"
                          },
                          {
                            "type": "Identifier",
                            "name": "x"
                          },
                          {
                            "type": "Identifier",
                            "name": "y"
                          },
                          {
                            "type": "Identifier",
                            "name": "x1"
                          },
                          {
                            "type": "Identifier",
                            "name": "y1"
                          },
                          {
                            "type": "Identifier",
                            "name": "x2"
                          },
                          {
                            "type": "Identifier",
                            "name": "y2"
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
                                    "name": "sx"
                                  },
                                  "init": {
                                    "type": "BinaryExpression",
                                    "operator": "*",
                                    "left": {
                                      "type": "BinaryExpression",
                                      "operator": "+",
                                      "left": {
                                        "type": "Identifier",
                                        "name": "x1"
                                      },
                                      "right": {
                                        "type": "Identifier",
                                        "name": "x2"
                                      }
                                    },
                                    "right": {
                                      "type": "Literal",
                                      "value": 0.5,
                                      "raw": ".5"
                                    }
                                  }
                                },
                                {
                                  "type": "VariableDeclarator",
                                  "id": {
                                    "type": "Identifier",
                                    "name": "sy"
                                  },
                                  "init": {
                                    "type": "BinaryExpression",
                                    "operator": "*",
                                    "left": {
                                      "type": "BinaryExpression",
                                      "operator": "+",
                                      "left": {
                                        "type": "Identifier",
                                        "name": "y1"
                                      },
                                      "right": {
                                        "type": "Identifier",
                                        "name": "y2"
                                      }
                                    },
                                    "right": {
                                      "type": "Literal",
                                      "value": 0.5,
                                      "raw": ".5"
                                    }
                                  }
                                },
                                {
                                  "type": "VariableDeclarator",
                                  "id": {
                                    "type": "Identifier",
                                    "name": "right"
                                  },
                                  "init": {
                                    "type": "BinaryExpression",
                                    "operator": ">=",
                                    "left": {
                                      "type": "Identifier",
                                      "name": "x"
                                    },
                                    "right": {
                                      "type": "Identifier",
                                      "name": "sx"
                                    }
                                  }
                                },
                                {
                                  "type": "VariableDeclarator",
                                  "id": {
                                    "type": "Identifier",
                                    "name": "bottom"
                                  },
                                  "init": {
                                    "type": "BinaryExpression",
                                    "operator": ">=",
                                    "left": {
                                      "type": "Identifier",
                                      "name": "y"
                                    },
                                    "right": {
                                      "type": "Identifier",
                                      "name": "sy"
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
                                    "type": "BinaryExpression",
                                    "operator": "+",
                                    "left": {
                                      "type": "BinaryExpression",
                                      "operator": "<<",
                                      "left": {
                                        "type": "Identifier",
                                        "name": "bottom"
                                      },
                                      "right": {
                                        "type": "Literal",
                                        "value": 1,
                                        "raw": "1"
                                      }
                                    },
                                    "right": {
                                      "type": "Identifier",
                                      "name": "right"
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
                                    "name": "n"
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "name": "leaf"
                                  }
                                },
                                "right": {
                                  "type": "Literal",
                                  "value": false,
                                  "raw": "false"
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
                                  "name": "n"
                                },
                                "right": {
                                  "type": "LogicalExpression",
                                  "operator": "||",
                                  "left": {
                                    "type": "MemberExpression",
                                    "computed": true,
                                    "object": {
                                      "type": "MemberExpression",
                                      "computed": false,
                                      "object": {
                                        "type": "Identifier",
                                        "name": "n"
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "name": "nodes"
                                      }
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "name": "i"
                                    }
                                  },
                                  "right": {
                                    "type": "AssignmentExpression",
                                    "operator": "=",
                                    "left": {
                                      "type": "MemberExpression",
                                      "computed": true,
                                      "object": {
                                        "type": "MemberExpression",
                                        "computed": false,
                                        "object": {
                                          "type": "Identifier",
                                          "name": "n"
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "name": "nodes"
                                        }
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "name": "i"
                                      }
                                    },
                                    "right": {
                                      "type": "CallExpression",
                                      "callee": {
                                        "type": "Identifier",
                                        "name": "d3_geom_quadtreeNode"
                                      },
                                      "arguments": []
                                    }
                                  }
                                }
                              }
                            },
                            {
                              "type": "IfStatement",
                              "test": {
                                "type": "Identifier",
                                "name": "right"
                              },
                              "consequent": {
                                "type": "ExpressionStatement",
                                "expression": {
                                  "type": "AssignmentExpression",
                                  "operator": "=",
                                  "left": {
                                    "type": "Identifier",
                                    "name": "x1"
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "name": "sx"
                                  }
                                }
                              },
                              "alternate": {
                                "type": "ExpressionStatement",
                                "expression": {
                                  "type": "AssignmentExpression",
                                  "operator": "=",
                                  "left": {
                                    "type": "Identifier",
                                    "name": "x2"
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "name": "sx"
                                  }
                                }
                              }
                            },
                            {
                              "type": "IfStatement",
                              "test": {
                                "type": "Identifier",
                                "name": "bottom"
                              },
                              "consequent": {
                                "type": "ExpressionStatement",
                                "expression": {
                                  "type": "AssignmentExpression",
                                  "operator": "=",
                                  "left": {
                                    "type": "Identifier",
                                    "name": "y1"
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "name": "sy"
                                  }
                                }
                              },
                              "alternate": {
                                "type": "ExpressionStatement",
                                "expression": {
                                  "type": "AssignmentExpression",
                                  "operator": "=",
                                  "left": {
                                    "type": "Identifier",
                                    "name": "y2"
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "name": "sy"
                                  }
                                }
                              }
                            },
                            {
                              "type": "ExpressionStatement",
                              "expression": {
                                "type": "CallExpression",
                                "callee": {
                                  "type": "Identifier",
                                  "name": "insert"
                                },
                                "arguments": [
                                  {
                                    "type": "Identifier",
                                    "name": "n"
                                  },
                                  {
                                    "type": "Identifier",
                                    "name": "d"
                                  },
                                  {
                                    "type": "Identifier",
                                    "name": "x"
                                  },
                                  {
                                    "type": "Identifier",
                                    "name": "y"
                                  },
                                  {
                                    "type": "Identifier",
                                    "name": "x1"
                                  },
                                  {
                                    "type": "Identifier",
                                    "name": "y1"
                                  },
                                  {
                                    "type": "Identifier",
                                    "name": "x2"
                                  },
                                  {
                                    "type": "Identifier",
                                    "name": "y2"
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
                        "declarations": [
                          {
                            "type": "VariableDeclarator",
                            "id": {
                              "type": "Identifier",
                              "name": "root"
                            },
                            "init": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "Identifier",
                                "name": "d3_geom_quadtreeNode"
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
                              "name": "root"
                            },
                            "property": {
                              "type": "Identifier",
                              "name": "add"
                            }
                          },
                          "right": {
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
                                  "type": "ExpressionStatement",
                                  "expression": {
                                    "type": "CallExpression",
                                    "callee": {
                                      "type": "Identifier",
                                      "name": "insert"
                                    },
                                    "arguments": [
                                      {
                                        "type": "Identifier",
                                        "name": "root"
                                      },
                                      {
                                        "type": "Identifier",
                                        "name": "d"
                                      },
                                      {
                                        "type": "UnaryExpression",
                                        "operator": "+",
                                        "argument": {
                                          "type": "CallExpression",
                                          "callee": {
                                            "type": "Identifier",
                                            "name": "fx"
                                          },
                                          "arguments": [
                                            {
                                              "type": "Identifier",
                                              "name": "d"
                                            },
                                            {
                                              "type": "UpdateExpression",
                                              "operator": "++",
                                              "argument": {
                                                "type": "Identifier",
                                                "name": "i"
                                              },
                                              "prefix": true
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
                                            "type": "Identifier",
                                            "name": "fy"
                                          },
                                          "arguments": [
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
                                      },
                                      {
                                        "type": "Identifier",
                                        "name": "x1_"
                                      },
                                      {
                                        "type": "Identifier",
                                        "name": "y1_"
                                      },
                                      {
                                        "type": "Identifier",
                                        "name": "x2_"
                                      },
                                      {
                                        "type": "Identifier",
                                        "name": "y2_"
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
                              "name": "root"
                            },
                            "property": {
                              "type": "Identifier",
                              "name": "visit"
                            }
                          },
                          "right": {
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
                                  "type": "ExpressionStatement",
                                  "expression": {
                                    "type": "CallExpression",
                                    "callee": {
                                      "type": "Identifier",
                                      "name": "d3_geom_quadtreeVisit"
                                    },
                                    "arguments": [
                                      {
                                        "type": "Identifier",
                                        "name": "f"
                                      },
                                      {
                                        "type": "Identifier",
                                        "name": "root"
                                      },
                                      {
                                        "type": "Identifier",
                                        "name": "x1_"
                                      },
                                      {
                                        "type": "Identifier",
                                        "name": "y1_"
                                      },
                                      {
                                        "type": "Identifier",
                                        "name": "x2_"
                                      },
                                      {
                                        "type": "Identifier",
                                        "name": "y2_"
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
                            "type": "Identifier",
                            "name": "i"
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
                        "type": "IfStatement",
                        "test": {
                          "type": "BinaryExpression",
                          "operator": "==",
                          "left": {
                            "type": "Identifier",
                            "name": "x1"
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
                                  "prefix": true
                                },
                                "right": {
                                  "type": "Identifier",
                                  "name": "n"
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
                                        "type": "Identifier",
                                        "name": "insert"
                                      },
                                      "arguments": [
                                        {
                                          "type": "Identifier",
                                          "name": "root"
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
                                          "type": "MemberExpression",
                                          "computed": true,
                                          "object": {
                                            "type": "Identifier",
                                            "name": "xs"
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
                                            "name": "ys"
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "name": "i"
                                          }
                                        },
                                        {
                                          "type": "Identifier",
                                          "name": "x1_"
                                        },
                                        {
                                          "type": "Identifier",
                                          "name": "y1_"
                                        },
                                        {
                                          "type": "Identifier",
                                          "name": "x2_"
                                        },
                                        {
                                          "type": "Identifier",
                                          "name": "y2_"
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
                                "type": "UpdateExpression",
                                "operator": "--",
                                "argument": {
                                  "type": "Identifier",
                                  "name": "i"
                                },
                                "prefix": true
                              }
                            }
                          ]
                        },
                        "alternate": {
                          "type": "ExpressionStatement",
                          "expression": {
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
                                "name": "forEach"
                              }
                            },
                            "arguments": [
                              {
                                "type": "MemberExpression",
                                "computed": false,
                                "object": {
                                  "type": "Identifier",
                                  "name": "root"
                                },
                                "property": {
                                  "type": "Identifier",
                                  "name": "add"
                                }
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
                            "name": "xs"
                          },
                          "right": {
                            "type": "AssignmentExpression",
                            "operator": "=",
                            "left": {
                              "type": "Identifier",
                              "name": "ys"
                            },
                            "right": {
                              "type": "AssignmentExpression",
                              "operator": "=",
                              "left": {
                                "type": "Identifier",
                                "name": "data"
                              },
                              "right": {
                                "type": "AssignmentExpression",
                                "operator": "=",
                                "left": {
                                  "type": "Identifier",
                                  "name": "d"
                                },
                                "right": {
                                  "type": "Literal",
                                  "value": null,
                                  "raw": "null"
                                }
                              }
                            }
                          }
                        }
                      },
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "Identifier",
                          "name": "root"
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
                        "name": "quadtree"
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
                                    "name": "quadtree"
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
                        "name": "quadtree"
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
                                    "name": "quadtree"
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
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "name": "quadtree"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "extent"
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
                                "type": "ConditionalExpression",
                                "test": {
                                  "type": "BinaryExpression",
                                  "operator": "==",
                                  "left": {
                                    "type": "Identifier",
                                    "name": "x1"
                                  },
                                  "right": {
                                    "type": "Literal",
                                    "value": null,
                                    "raw": "null"
                                  }
                                },
                                "consequent": {
                                  "type": "Literal",
                                  "value": null,
                                  "raw": "null"
                                },
                                "alternate": {
                                  "type": "ArrayExpression",
                                  "elements": [
                                    {
                                      "type": "ArrayExpression",
                                      "elements": [
                                        {
                                          "type": "Identifier",
                                          "name": "x1"
                                        },
                                        {
                                          "type": "Identifier",
                                          "name": "y1"
                                        }
                                      ]
                                    },
                                    {
                                      "type": "ArrayExpression",
                                      "elements": [
                                        {
                                          "type": "Identifier",
                                          "name": "x2"
                                        },
                                        {
                                          "type": "Identifier",
                                          "name": "y2"
                                        }
                                      ]
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
                              "operator": "==",
                              "left": {
                                "type": "Identifier",
                                "name": "_"
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
                                "type": "AssignmentExpression",
                                "operator": "=",
                                "left": {
                                  "type": "Identifier",
                                  "name": "x1"
                                },
                                "right": {
                                  "type": "AssignmentExpression",
                                  "operator": "=",
                                  "left": {
                                    "type": "Identifier",
                                    "name": "y1"
                                  },
                                  "right": {
                                    "type": "AssignmentExpression",
                                    "operator": "=",
                                    "left": {
                                      "type": "Identifier",
                                      "name": "x2"
                                    },
                                    "right": {
                                      "type": "AssignmentExpression",
                                      "operator": "=",
                                      "left": {
                                        "type": "Identifier",
                                        "name": "y2"
                                      },
                                      "right": {
                                        "type": "Literal",
                                        "value": null,
                                        "raw": "null"
                                      }
                                    }
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
                                      "name": "x1"
                                    },
                                    "right": {
                                      "type": "UnaryExpression",
                                      "operator": "+",
                                      "argument": {
                                        "type": "MemberExpression",
                                        "computed": true,
                                        "object": {
                                          "type": "MemberExpression",
                                          "computed": true,
                                          "object": {
                                            "type": "Identifier",
                                            "name": "_"
                                          },
                                          "property": {
                                            "type": "Literal",
                                            "value": 0,
                                            "raw": "0"
                                          }
                                        },
                                        "property": {
                                          "type": "Literal",
                                          "value": 0,
                                          "raw": "0"
                                        }
                                      },
                                      "prefix": true
                                    }
                                  },
                                  {
                                    "type": "AssignmentExpression",
                                    "operator": "=",
                                    "left": {
                                      "type": "Identifier",
                                      "name": "y1"
                                    },
                                    "right": {
                                      "type": "UnaryExpression",
                                      "operator": "+",
                                      "argument": {
                                        "type": "MemberExpression",
                                        "computed": true,
                                        "object": {
                                          "type": "MemberExpression",
                                          "computed": true,
                                          "object": {
                                            "type": "Identifier",
                                            "name": "_"
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
                                      },
                                      "prefix": true
                                    }
                                  },
                                  {
                                    "type": "AssignmentExpression",
                                    "operator": "=",
                                    "left": {
                                      "type": "Identifier",
                                      "name": "x2"
                                    },
                                    "right": {
                                      "type": "UnaryExpression",
                                      "operator": "+",
                                      "argument": {
                                        "type": "MemberExpression",
                                        "computed": true,
                                        "object": {
                                          "type": "MemberExpression",
                                          "computed": true,
                                          "object": {
                                            "type": "Identifier",
                                            "name": "_"
                                          },
                                          "property": {
                                            "type": "Literal",
                                            "value": 1,
                                            "raw": "1"
                                          }
                                        },
                                        "property": {
                                          "type": "Literal",
                                          "value": 0,
                                          "raw": "0"
                                        }
                                      },
                                      "prefix": true
                                    }
                                  },
                                  {
                                    "type": "AssignmentExpression",
                                    "operator": "=",
                                    "left": {
                                      "type": "Identifier",
                                      "name": "y2"
                                    },
                                    "right": {
                                      "type": "UnaryExpression",
                                      "operator": "+",
                                      "argument": {
                                        "type": "MemberExpression",
                                        "computed": true,
                                        "object": {
                                          "type": "MemberExpression",
                                          "computed": true,
                                          "object": {
                                            "type": "Identifier",
                                            "name": "_"
                                          },
                                          "property": {
                                            "type": "Literal",
                                            "value": 1,
                                            "raw": "1"
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
                                  }
                                ]
                              }
                            }
                          },
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "Identifier",
                              "name": "quadtree"
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
                        "name": "quadtree"
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
                                "type": "ConditionalExpression",
                                "test": {
                                  "type": "BinaryExpression",
                                  "operator": "==",
                                  "left": {
                                    "type": "Identifier",
                                    "name": "x1"
                                  },
                                  "right": {
                                    "type": "Literal",
                                    "value": null,
                                    "raw": "null"
                                  }
                                },
                                "consequent": {
                                  "type": "Literal",
                                  "value": null,
                                  "raw": "null"
                                },
                                "alternate": {
                                  "type": "ArrayExpression",
                                  "elements": [
                                    {
                                      "type": "BinaryExpression",
                                      "operator": "-",
                                      "left": {
                                        "type": "Identifier",
                                        "name": "x2"
                                      },
                                      "right": {
                                        "type": "Identifier",
                                        "name": "x1"
                                      }
                                    },
                                    {
                                      "type": "BinaryExpression",
                                      "operator": "-",
                                      "left": {
                                        "type": "Identifier",
                                        "name": "y2"
                                      },
                                      "right": {
                                        "type": "Identifier",
                                        "name": "y1"
                                      }
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
                              "operator": "==",
                              "left": {
                                "type": "Identifier",
                                "name": "_"
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
                                "type": "AssignmentExpression",
                                "operator": "=",
                                "left": {
                                  "type": "Identifier",
                                  "name": "x1"
                                },
                                "right": {
                                  "type": "AssignmentExpression",
                                  "operator": "=",
                                  "left": {
                                    "type": "Identifier",
                                    "name": "y1"
                                  },
                                  "right": {
                                    "type": "AssignmentExpression",
                                    "operator": "=",
                                    "left": {
                                      "type": "Identifier",
                                      "name": "x2"
                                    },
                                    "right": {
                                      "type": "AssignmentExpression",
                                      "operator": "=",
                                      "left": {
                                        "type": "Identifier",
                                        "name": "y2"
                                      },
                                      "right": {
                                        "type": "Literal",
                                        "value": null,
                                        "raw": "null"
                                      }
                                    }
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
                                      "name": "x1"
                                    },
                                    "right": {
                                      "type": "AssignmentExpression",
                                      "operator": "=",
                                      "left": {
                                        "type": "Identifier",
                                        "name": "y1"
                                      },
                                      "right": {
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
                                      "name": "x2"
                                    },
                                    "right": {
                                      "type": "UnaryExpression",
                                      "operator": "+",
                                      "argument": {
                                        "type": "MemberExpression",
                                        "computed": true,
                                        "object": {
                                          "type": "Identifier",
                                          "name": "_"
                                        },
                                        "property": {
                                          "type": "Literal",
                                          "value": 0,
                                          "raw": "0"
                                        }
                                      },
                                      "prefix": true
                                    }
                                  },
                                  {
                                    "type": "AssignmentExpression",
                                    "operator": "=",
                                    "left": {
                                      "type": "Identifier",
                                      "name": "y2"
                                    },
                                    "right": {
                                      "type": "UnaryExpression",
                                      "operator": "+",
                                      "argument": {
                                        "type": "MemberExpression",
                                        "computed": true,
                                        "object": {
                                          "type": "Identifier",
                                          "name": "_"
                                        },
                                        "property": {
                                          "type": "Literal",
                                          "value": 1,
                                          "raw": "1"
                                        }
                                      },
                                      "prefix": true
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
                              "name": "quadtree"
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
                    "name": "quadtree"
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
          "name": "d3_geom_quadtreeCompatX"
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
          "name": "d3_geom_quadtreeCompatY"
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
          "name": "d3_geom_quadtreeNode"
        },
        "params": [],
        "defaults": [],
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "ReturnStatement",
              "argument": {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "key": {
                      "type": "Identifier",
                      "name": "leaf"
                    },
                    "value": {
                      "type": "Literal",
                      "value": true,
                      "raw": "true"
                    },
                    "kind": "init"
                  },
                  {
                    "type": "Property",
                    "key": {
                      "type": "Identifier",
                      "name": "nodes"
                    },
                    "value": {
                      "type": "ArrayExpression",
                      "elements": []
                    },
                    "kind": "init"
                  },
                  {
                    "type": "Property",
                    "key": {
                      "type": "Identifier",
                      "name": "point"
                    },
                    "value": {
                      "type": "Literal",
                      "value": null,
                      "raw": "null"
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
                      "type": "Literal",
                      "value": null,
                      "raw": "null"
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
                      "type": "Literal",
                      "value": null,
                      "raw": "null"
                    },
                    "kind": "init"
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
          "name": "d3_geom_quadtreeVisit"
        },
        "params": [
          {
            "type": "Identifier",
            "name": "f"
          },
          {
            "type": "Identifier",
            "name": "node"
          },
          {
            "type": "Identifier",
            "name": "x1"
          },
          {
            "type": "Identifier",
            "name": "y1"
          },
          {
            "type": "Identifier",
            "name": "x2"
          },
          {
            "type": "Identifier",
            "name": "y2"
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
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "name": "f"
                  },
                  "arguments": [
                    {
                      "type": "Identifier",
                      "name": "node"
                    },
                    {
                      "type": "Identifier",
                      "name": "x1"
                    },
                    {
                      "type": "Identifier",
                      "name": "y1"
                    },
                    {
                      "type": "Identifier",
                      "name": "x2"
                    },
                    {
                      "type": "Identifier",
                      "name": "y2"
                    }
                  ]
                },
                "prefix": true
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
                          "name": "sx"
                        },
                        "init": {
                          "type": "BinaryExpression",
                          "operator": "*",
                          "left": {
                            "type": "BinaryExpression",
                            "operator": "+",
                            "left": {
                              "type": "Identifier",
                              "name": "x1"
                            },
                            "right": {
                              "type": "Identifier",
                              "name": "x2"
                            }
                          },
                          "right": {
                            "type": "Literal",
                            "value": 0.5,
                            "raw": ".5"
                          }
                        }
                      },
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "name": "sy"
                        },
                        "init": {
                          "type": "BinaryExpression",
                          "operator": "*",
                          "left": {
                            "type": "BinaryExpression",
                            "operator": "+",
                            "left": {
                              "type": "Identifier",
                              "name": "y1"
                            },
                            "right": {
                              "type": "Identifier",
                              "name": "y2"
                            }
                          },
                          "right": {
                            "type": "Literal",
                            "value": 0.5,
                            "raw": ".5"
                          }
                        }
                      },
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "name": "children"
                        },
                        "init": {
                          "type": "MemberExpression",
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "name": "node"
                          },
                          "property": {
                            "type": "Identifier",
                            "name": "nodes"
                          }
                        }
                      }
                    ],
                    "kind": "var"
                  },
                  {
                    "type": "IfStatement",
                    "test": {
                      "type": "MemberExpression",
                      "computed": true,
                      "object": {
                        "type": "Identifier",
                        "name": "children"
                      },
                      "property": {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0"
                      }
                    },
                    "consequent": {
                      "type": "ExpressionStatement",
                      "expression": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "Identifier",
                          "name": "d3_geom_quadtreeVisit"
                        },
                        "arguments": [
                          {
                            "type": "Identifier",
                            "name": "f"
                          },
                          {
                            "type": "MemberExpression",
                            "computed": true,
                            "object": {
                              "type": "Identifier",
                              "name": "children"
                            },
                            "property": {
                              "type": "Literal",
                              "value": 0,
                              "raw": "0"
                            }
                          },
                          {
                            "type": "Identifier",
                            "name": "x1"
                          },
                          {
                            "type": "Identifier",
                            "name": "y1"
                          },
                          {
                            "type": "Identifier",
                            "name": "sx"
                          },
                          {
                            "type": "Identifier",
                            "name": "sy"
                          }
                        ]
                      }
                    },
                    "alternate": null
                  },
                  {
                    "type": "IfStatement",
                    "test": {
                      "type": "MemberExpression",
                      "computed": true,
                      "object": {
                        "type": "Identifier",
                        "name": "children"
                      },
                      "property": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1"
                      }
                    },
                    "consequent": {
                      "type": "ExpressionStatement",
                      "expression": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "Identifier",
                          "name": "d3_geom_quadtreeVisit"
                        },
                        "arguments": [
                          {
                            "type": "Identifier",
                            "name": "f"
                          },
                          {
                            "type": "MemberExpression",
                            "computed": true,
                            "object": {
                              "type": "Identifier",
                              "name": "children"
                            },
                            "property": {
                              "type": "Literal",
                              "value": 1,
                              "raw": "1"
                            }
                          },
                          {
                            "type": "Identifier",
                            "name": "sx"
                          },
                          {
                            "type": "Identifier",
                            "name": "y1"
                          },
                          {
                            "type": "Identifier",
                            "name": "x2"
                          },
                          {
                            "type": "Identifier",
                            "name": "sy"
                          }
                        ]
                      }
                    },
                    "alternate": null
                  },
                  {
                    "type": "IfStatement",
                    "test": {
                      "type": "MemberExpression",
                      "computed": true,
                      "object": {
                        "type": "Identifier",
                        "name": "children"
                      },
                      "property": {
                        "type": "Literal",
                        "value": 2,
                        "raw": "2"
                      }
                    },
                    "consequent": {
                      "type": "ExpressionStatement",
                      "expression": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "Identifier",
                          "name": "d3_geom_quadtreeVisit"
                        },
                        "arguments": [
                          {
                            "type": "Identifier",
                            "name": "f"
                          },
                          {
                            "type": "MemberExpression",
                            "computed": true,
                            "object": {
                              "type": "Identifier",
                              "name": "children"
                            },
                            "property": {
                              "type": "Literal",
                              "value": 2,
                              "raw": "2"
                            }
                          },
                          {
                            "type": "Identifier",
                            "name": "x1"
                          },
                          {
                            "type": "Identifier",
                            "name": "sy"
                          },
                          {
                            "type": "Identifier",
                            "name": "sx"
                          },
                          {
                            "type": "Identifier",
                            "name": "y2"
                          }
                        ]
                      }
                    },
                    "alternate": null
                  },
                  {
                    "type": "IfStatement",
                    "test": {
                      "type": "MemberExpression",
                      "computed": true,
                      "object": {
                        "type": "Identifier",
                        "name": "children"
                      },
                      "property": {
                        "type": "Literal",
                        "value": 3,
                        "raw": "3"
                      }
                    },
                    "consequent": {
                      "type": "ExpressionStatement",
                      "expression": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "Identifier",
                          "name": "d3_geom_quadtreeVisit"
                        },
                        "arguments": [
                          {
                            "type": "Identifier",
                            "name": "f"
                          },
                          {
                            "type": "MemberExpression",
                            "computed": true,
                            "object": {
                              "type": "Identifier",
                              "name": "children"
                            },
                            "property": {
                              "type": "Literal",
                              "value": 3,
                              "raw": "3"
                            }
                          },
                          {
                            "type": "Identifier",
                            "name": "sx"
                          },
                          {
                            "type": "Identifier",
                            "name": "sy"
                          },
                          {
                            "type": "Identifier",
                            "name": "x2"
                          },
                          {
                            "type": "Identifier",
                            "name": "y2"
                          }
                        ]
                      }
                    },
                    "alternate": null
                  }
                ]
              },
              "alternate": null
            }
          ]
        },
        "rest": null,
        "generator": false,
        "expression": false
      }
    ]
  },
  "src": "d3.geom.quadtree = function (points, x1, y1, x2, y2) {\n    var x = d3_geom_pointX, y = d3_geom_pointY, compat;\n    if (compat = arguments.length) {\n        x = d3_geom_quadtreeCompatX;\n        y = d3_geom_quadtreeCompatY;\n        if (compat === 3) {\n            y2 = y1;\n            x2 = x1;\n            y1 = x1 = 0;\n        }\n        return quadtree(points);\n    }\n    function quadtree(data) {\n        var d, fx = d3_functor(x), fy = d3_functor(y), xs, ys, i, n, x1_, y1_, x2_, y2_;\n        if (x1 != null) {\n            x1_ = x1, y1_ = y1, x2_ = x2, y2_ = y2;\n        } else {\n            x2_ = y2_ = -(x1_ = y1_ = Infinity);\n            xs = [], ys = [];\n            n = data.length;\n            if (compat)\n                for (i = 0; i < n; ++i) {\n                    d = data[i];\n                    if (d.x < x1_)\n                        x1_ = d.x;\n                    if (d.y < y1_)\n                        y1_ = d.y;\n                    if (d.x > x2_)\n                        x2_ = d.x;\n                    if (d.y > y2_)\n                        y2_ = d.y;\n                    xs.push(d.x);\n                    ys.push(d.y);\n                }\n            else\n                for (i = 0; i < n; ++i) {\n                    var x_ = +fx(d = data[i], i), y_ = +fy(d, i);\n                    if (x_ < x1_)\n                        x1_ = x_;\n                    if (y_ < y1_)\n                        y1_ = y_;\n                    if (x_ > x2_)\n                        x2_ = x_;\n                    if (y_ > y2_)\n                        y2_ = y_;\n                    xs.push(x_);\n                    ys.push(y_);\n                }\n        }\n        var dx = x2_ - x1_, dy = y2_ - y1_;\n        if (dx > dy)\n            y2_ = y1_ + dx;\n        else\n            x2_ = x1_ + dy;\n        function insert(n, d, x, y, x1, y1, x2, y2) {\n            if (isNaN(x) || isNaN(y))\n                return;\n            if (n.leaf) {\n                var nx = n.x, ny = n.y;\n                if (nx != null) {\n                    if (abs(nx - x) + abs(ny - y) < 0.01) {\n                        insertChild(n, d, x, y, x1, y1, x2, y2);\n                    } else {\n                        var nPoint = n.point;\n                        n.x = n.y = n.point = null;\n                        insertChild(n, nPoint, nx, ny, x1, y1, x2, y2);\n                        insertChild(n, d, x, y, x1, y1, x2, y2);\n                    }\n                } else {\n                    n.x = x, n.y = y, n.point = d;\n                }\n            } else {\n                insertChild(n, d, x, y, x1, y1, x2, y2);\n            }\n        }\n        function insertChild(n, d, x, y, x1, y1, x2, y2) {\n            var sx = (x1 + x2) * 0.5, sy = (y1 + y2) * 0.5, right = x >= sx, bottom = y >= sy, i = (bottom << 1) + right;\n            n.leaf = false;\n            n = n.nodes[i] || (n.nodes[i] = d3_geom_quadtreeNode());\n            if (right)\n                x1 = sx;\n            else\n                x2 = sx;\n            if (bottom)\n                y1 = sy;\n            else\n                y2 = sy;\n            insert(n, d, x, y, x1, y1, x2, y2);\n        }\n        var root = d3_geom_quadtreeNode();\n        root.add = function (d) {\n            insert(root, d, +fx(d, ++i), +fy(d, i), x1_, y1_, x2_, y2_);\n        };\n        root.visit = function (f) {\n            d3_geom_quadtreeVisit(f, root, x1_, y1_, x2_, y2_);\n        };\n        i = -1;\n        if (x1 == null) {\n            while (++i < n) {\n                insert(root, data[i], xs[i], ys[i], x1_, y1_, x2_, y2_);\n            }\n            --i;\n        } else\n            data.forEach(root.add);\n        xs = ys = data = d = null;\n        return root;\n    }\n    quadtree.x = function (_) {\n        return arguments.length ? (x = _, quadtree) : x;\n    };\n    quadtree.y = function (_) {\n        return arguments.length ? (y = _, quadtree) : y;\n    };\n    quadtree.extent = function (_) {\n        if (!arguments.length)\n            return x1 == null ? null : [\n                [\n                    x1,\n                    y1\n                ],\n                [\n                    x2,\n                    y2\n                ]\n            ];\n        if (_ == null)\n            x1 = y1 = x2 = y2 = null;\n        else\n            x1 = +_[0][0], y1 = +_[0][1], x2 = +_[1][0], y2 = +_[1][1];\n        return quadtree;\n    };\n    quadtree.size = function (_) {\n        if (!arguments.length)\n            return x1 == null ? null : [\n                x2 - x1,\n                y2 - y1\n            ];\n        if (_ == null)\n            x1 = y1 = x2 = y2 = null;\n        else\n            x1 = y1 = 0, x2 = +_[0], y2 = +_[1];\n        return quadtree;\n    };\n    return quadtree;\n};\nfunction d3_geom_quadtreeCompatX(d) {\n    return d.x;\n}\nfunction d3_geom_quadtreeCompatY(d) {\n    return d.y;\n}\nfunction d3_geom_quadtreeNode() {\n    return {\n        leaf: true,\n        nodes: [],\n        point: null,\n        x: null,\n        y: null\n    };\n}\nfunction d3_geom_quadtreeVisit(f, node, x1, y1, x2, y2) {\n    if (!f(node, x1, y1, x2, y2)) {\n        var sx = (x1 + x2) * 0.5, sy = (y1 + y2) * 0.5, children = node.nodes;\n        if (children[0])\n            d3_geom_quadtreeVisit(f, children[0], x1, y1, sx, sy);\n        if (children[1])\n            d3_geom_quadtreeVisit(f, children[1], sx, y1, x2, sy);\n        if (children[2])\n            d3_geom_quadtreeVisit(f, children[2], x1, sy, sx, y2);\n        if (children[3])\n            d3_geom_quadtreeVisit(f, children[3], sx, sy, x2, y2);\n    }\n}"
}