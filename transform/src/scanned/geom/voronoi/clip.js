{
  "filepath": "/geom/voronoi/clip.js",
  "shared": [],
  "dependencies": [
    "d3_geom_voronoiEdges",
    "d3_geom_clipLine",
    "abs"
  ],
  "helpers": [
    "d3_geom_voronoiClipEdges",
    "d3_geom_voronoiConnectEdge"
  ],
  "exports": [],
  "ast": {
    "type": "Program",
    "body": [
      {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "name": "d3_geom_voronoiClipEdges"
        },
        "params": [
          {
            "type": "Identifier",
            "name": "extent"
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
                    "name": "edges"
                  },
                  "init": {
                    "type": "Identifier",
                    "name": "d3_geom_voronoiEdges"
                  }
                },
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "name": "clip"
                  },
                  "init": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "name": "d3_geom_clipLine"
                    },
                    "arguments": [
                      {
                        "type": "MemberExpression",
                        "computed": true,
                        "object": {
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
                        },
                        "property": {
                          "type": "Literal",
                          "value": 0,
                          "raw": "0"
                        }
                      },
                      {
                        "type": "MemberExpression",
                        "computed": true,
                        "object": {
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
                        },
                        "property": {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1"
                        }
                      },
                      {
                        "type": "MemberExpression",
                        "computed": true,
                        "object": {
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
                        },
                        "property": {
                          "type": "Literal",
                          "value": 0,
                          "raw": "0"
                        }
                      },
                      {
                        "type": "MemberExpression",
                        "computed": true,
                        "object": {
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
                      "name": "edges"
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
                    "name": "e"
                  },
                  "init": null
                }
              ],
              "kind": "var"
            },
            {
              "type": "WhileStatement",
              "test": {
                "type": "UpdateExpression",
                "operator": "--",
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
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "name": "e"
                      },
                      "right": {
                        "type": "MemberExpression",
                        "computed": true,
                        "object": {
                          "type": "Identifier",
                          "name": "edges"
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
                      "type": "LogicalExpression",
                      "operator": "||",
                      "left": {
                        "type": "LogicalExpression",
                        "operator": "||",
                        "left": {
                          "type": "UnaryExpression",
                          "operator": "!",
                          "argument": {
                            "type": "CallExpression",
                            "callee": {
                              "type": "Identifier",
                              "name": "d3_geom_voronoiConnectEdge"
                            },
                            "arguments": [
                              {
                                "type": "Identifier",
                                "name": "e"
                              },
                              {
                                "type": "Identifier",
                                "name": "extent"
                              }
                            ]
                          },
                          "prefix": true
                        },
                        "right": {
                          "type": "UnaryExpression",
                          "operator": "!",
                          "argument": {
                            "type": "CallExpression",
                            "callee": {
                              "type": "Identifier",
                              "name": "clip"
                            },
                            "arguments": [
                              {
                                "type": "Identifier",
                                "name": "e"
                              }
                            ]
                          },
                          "prefix": true
                        }
                      },
                      "right": {
                        "type": "LogicalExpression",
                        "operator": "&&",
                        "left": {
                          "type": "BinaryExpression",
                          "operator": "<",
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
                                  "type": "MemberExpression",
                                  "computed": false,
                                  "object": {
                                    "type": "MemberExpression",
                                    "computed": false,
                                    "object": {
                                      "type": "Identifier",
                                      "name": "e"
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "name": "a"
                                    }
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "name": "x"
                                  }
                                },
                                "right": {
                                  "type": "MemberExpression",
                                  "computed": false,
                                  "object": {
                                    "type": "MemberExpression",
                                    "computed": false,
                                    "object": {
                                      "type": "Identifier",
                                      "name": "e"
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "name": "b"
                                    }
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "name": "x"
                                  }
                                }
                              }
                            ]
                          },
                          "right": {
                            "type": "Identifier",
                            "name": "ε"
                          }
                        },
                        "right": {
                          "type": "BinaryExpression",
                          "operator": "<",
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
                                  "type": "MemberExpression",
                                  "computed": false,
                                  "object": {
                                    "type": "MemberExpression",
                                    "computed": false,
                                    "object": {
                                      "type": "Identifier",
                                      "name": "e"
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "name": "a"
                                    }
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "name": "y"
                                  }
                                },
                                "right": {
                                  "type": "MemberExpression",
                                  "computed": false,
                                  "object": {
                                    "type": "MemberExpression",
                                    "computed": false,
                                    "object": {
                                      "type": "Identifier",
                                      "name": "e"
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "name": "b"
                                    }
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "name": "y"
                                  }
                                }
                              }
                            ]
                          },
                          "right": {
                            "type": "Identifier",
                            "name": "ε"
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
                              "type": "MemberExpression",
                              "computed": false,
                              "object": {
                                "type": "Identifier",
                                "name": "e"
                              },
                              "property": {
                                "type": "Identifier",
                                "name": "a"
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
                                  "name": "e"
                                },
                                "property": {
                                  "type": "Identifier",
                                  "name": "b"
                                }
                              },
                              "right": {
                                "type": "Literal",
                                "value": null,
                                "raw": "null"
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
                                "name": "edges"
                              },
                              "property": {
                                "type": "Identifier",
                                "name": "splice"
                              }
                            },
                            "arguments": [
                              {
                                "type": "Identifier",
                                "name": "i"
                              },
                              {
                                "type": "Literal",
                                "value": 1,
                                "raw": "1"
                              }
                            ]
                          }
                        }
                      ]
                    },
                    "alternate": null
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
          "name": "d3_geom_voronoiConnectEdge"
        },
        "params": [
          {
            "type": "Identifier",
            "name": "edge"
          },
          {
            "type": "Identifier",
            "name": "extent"
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
                    "name": "vb"
                  },
                  "init": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "name": "edge"
                    },
                    "property": {
                      "type": "Identifier",
                      "name": "b"
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
                "name": "vb"
              },
              "consequent": {
                "type": "ReturnStatement",
                "argument": {
                  "type": "Literal",
                  "value": true,
                  "raw": "true"
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
                    "name": "va"
                  },
                  "init": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "name": "edge"
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
                    "name": "x0"
                  },
                  "init": {
                    "type": "MemberExpression",
                    "computed": true,
                    "object": {
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
                    "name": "x1"
                  },
                  "init": {
                    "type": "MemberExpression",
                    "computed": true,
                    "object": {
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
                    "name": "y0"
                  },
                  "init": {
                    "type": "MemberExpression",
                    "computed": true,
                    "object": {
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
                    "name": "y1"
                  },
                  "init": {
                    "type": "MemberExpression",
                    "computed": true,
                    "object": {
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
                    "name": "lSite"
                  },
                  "init": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "name": "edge"
                    },
                    "property": {
                      "type": "Identifier",
                      "name": "l"
                    }
                  }
                },
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "name": "rSite"
                  },
                  "init": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "name": "edge"
                    },
                    "property": {
                      "type": "Identifier",
                      "name": "r"
                    }
                  }
                },
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "name": "lx"
                  },
                  "init": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "name": "lSite"
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
                    "name": "ly"
                  },
                  "init": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "name": "lSite"
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
                    "name": "rx"
                  },
                  "init": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "name": "rSite"
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
                    "name": "ry"
                  },
                  "init": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "name": "rSite"
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
                    "name": "fx"
                  },
                  "init": {
                    "type": "BinaryExpression",
                    "operator": "/",
                    "left": {
                      "type": "BinaryExpression",
                      "operator": "+",
                      "left": {
                        "type": "Identifier",
                        "name": "lx"
                      },
                      "right": {
                        "type": "Identifier",
                        "name": "rx"
                      }
                    },
                    "right": {
                      "type": "Literal",
                      "value": 2,
                      "raw": "2"
                    }
                  }
                },
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "name": "fy"
                  },
                  "init": {
                    "type": "BinaryExpression",
                    "operator": "/",
                    "left": {
                      "type": "BinaryExpression",
                      "operator": "+",
                      "left": {
                        "type": "Identifier",
                        "name": "ly"
                      },
                      "right": {
                        "type": "Identifier",
                        "name": "ry"
                      }
                    },
                    "right": {
                      "type": "Literal",
                      "value": 2,
                      "raw": "2"
                    }
                  }
                },
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "name": "fm"
                  },
                  "init": null
                },
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "name": "fb"
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
                "operator": "===",
                "left": {
                  "type": "Identifier",
                  "name": "ry"
                },
                "right": {
                  "type": "Identifier",
                  "name": "ly"
                }
              },
              "consequent": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "IfStatement",
                    "test": {
                      "type": "LogicalExpression",
                      "operator": "||",
                      "left": {
                        "type": "BinaryExpression",
                        "operator": "<",
                        "left": {
                          "type": "Identifier",
                          "name": "fx"
                        },
                        "right": {
                          "type": "Identifier",
                          "name": "x0"
                        }
                      },
                      "right": {
                        "type": "BinaryExpression",
                        "operator": ">=",
                        "left": {
                          "type": "Identifier",
                          "name": "fx"
                        },
                        "right": {
                          "type": "Identifier",
                          "name": "x1"
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
                    "type": "IfStatement",
                    "test": {
                      "type": "BinaryExpression",
                      "operator": ">",
                      "left": {
                        "type": "Identifier",
                        "name": "lx"
                      },
                      "right": {
                        "type": "Identifier",
                        "name": "rx"
                      }
                    },
                    "consequent": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "IfStatement",
                          "test": {
                            "type": "UnaryExpression",
                            "operator": "!",
                            "argument": {
                              "type": "Identifier",
                              "name": "va"
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
                                "name": "va"
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
                                      "type": "Identifier",
                                      "name": "fx"
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
                                      "type": "Identifier",
                                      "name": "y0"
                                    },
                                    "kind": "init"
                                  }
                                ]
                              }
                            }
                          },
                          "alternate": {
                            "type": "IfStatement",
                            "test": {
                              "type": "BinaryExpression",
                              "operator": ">=",
                              "left": {
                                "type": "MemberExpression",
                                "computed": false,
                                "object": {
                                  "type": "Identifier",
                                  "name": "va"
                                },
                                "property": {
                                  "type": "Identifier",
                                  "name": "y"
                                }
                              },
                              "right": {
                                "type": "Identifier",
                                "name": "y1"
                              }
                            },
                            "consequent": {
                              "type": "ReturnStatement",
                              "argument": null
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
                              "name": "vb"
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
                                    "type": "Identifier",
                                    "name": "fx"
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
                                    "type": "Identifier",
                                    "name": "y1"
                                  },
                                  "kind": "init"
                                }
                              ]
                            }
                          }
                        }
                      ]
                    },
                    "alternate": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "IfStatement",
                          "test": {
                            "type": "UnaryExpression",
                            "operator": "!",
                            "argument": {
                              "type": "Identifier",
                              "name": "va"
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
                                "name": "va"
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
                                      "type": "Identifier",
                                      "name": "fx"
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
                                      "type": "Identifier",
                                      "name": "y1"
                                    },
                                    "kind": "init"
                                  }
                                ]
                              }
                            }
                          },
                          "alternate": {
                            "type": "IfStatement",
                            "test": {
                              "type": "BinaryExpression",
                              "operator": "<",
                              "left": {
                                "type": "MemberExpression",
                                "computed": false,
                                "object": {
                                  "type": "Identifier",
                                  "name": "va"
                                },
                                "property": {
                                  "type": "Identifier",
                                  "name": "y"
                                }
                              },
                              "right": {
                                "type": "Identifier",
                                "name": "y0"
                              }
                            },
                            "consequent": {
                              "type": "ReturnStatement",
                              "argument": null
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
                              "name": "vb"
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
                                    "type": "Identifier",
                                    "name": "fx"
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
                                    "type": "Identifier",
                                    "name": "y0"
                                  },
                                  "kind": "init"
                                }
                              ]
                            }
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
                        "name": "fm"
                      },
                      "right": {
                        "type": "BinaryExpression",
                        "operator": "/",
                        "left": {
                          "type": "BinaryExpression",
                          "operator": "-",
                          "left": {
                            "type": "Identifier",
                            "name": "lx"
                          },
                          "right": {
                            "type": "Identifier",
                            "name": "rx"
                          }
                        },
                        "right": {
                          "type": "BinaryExpression",
                          "operator": "-",
                          "left": {
                            "type": "Identifier",
                            "name": "ry"
                          },
                          "right": {
                            "type": "Identifier",
                            "name": "ly"
                          }
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
                        "name": "fb"
                      },
                      "right": {
                        "type": "BinaryExpression",
                        "operator": "-",
                        "left": {
                          "type": "Identifier",
                          "name": "fy"
                        },
                        "right": {
                          "type": "BinaryExpression",
                          "operator": "*",
                          "left": {
                            "type": "Identifier",
                            "name": "fm"
                          },
                          "right": {
                            "type": "Identifier",
                            "name": "fx"
                          }
                        }
                      }
                    }
                  },
                  {
                    "type": "IfStatement",
                    "test": {
                      "type": "LogicalExpression",
                      "operator": "||",
                      "left": {
                        "type": "BinaryExpression",
                        "operator": "<",
                        "left": {
                          "type": "Identifier",
                          "name": "fm"
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
                      },
                      "right": {
                        "type": "BinaryExpression",
                        "operator": ">",
                        "left": {
                          "type": "Identifier",
                          "name": "fm"
                        },
                        "right": {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1"
                        }
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
                              "name": "lx"
                            },
                            "right": {
                              "type": "Identifier",
                              "name": "rx"
                            }
                          },
                          "consequent": {
                            "type": "BlockStatement",
                            "body": [
                              {
                                "type": "IfStatement",
                                "test": {
                                  "type": "UnaryExpression",
                                  "operator": "!",
                                  "argument": {
                                    "type": "Identifier",
                                    "name": "va"
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
                                      "name": "va"
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
                                            "operator": "/",
                                            "left": {
                                              "type": "BinaryExpression",
                                              "operator": "-",
                                              "left": {
                                                "type": "Identifier",
                                                "name": "y0"
                                              },
                                              "right": {
                                                "type": "Identifier",
                                                "name": "fb"
                                              }
                                            },
                                            "right": {
                                              "type": "Identifier",
                                              "name": "fm"
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
                                            "type": "Identifier",
                                            "name": "y0"
                                          },
                                          "kind": "init"
                                        }
                                      ]
                                    }
                                  }
                                },
                                "alternate": {
                                  "type": "IfStatement",
                                  "test": {
                                    "type": "BinaryExpression",
                                    "operator": ">=",
                                    "left": {
                                      "type": "MemberExpression",
                                      "computed": false,
                                      "object": {
                                        "type": "Identifier",
                                        "name": "va"
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "name": "y"
                                      }
                                    },
                                    "right": {
                                      "type": "Identifier",
                                      "name": "y1"
                                    }
                                  },
                                  "consequent": {
                                    "type": "ReturnStatement",
                                    "argument": null
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
                                    "name": "vb"
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
                                          "operator": "/",
                                          "left": {
                                            "type": "BinaryExpression",
                                            "operator": "-",
                                            "left": {
                                              "type": "Identifier",
                                              "name": "y1"
                                            },
                                            "right": {
                                              "type": "Identifier",
                                              "name": "fb"
                                            }
                                          },
                                          "right": {
                                            "type": "Identifier",
                                            "name": "fm"
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
                                          "type": "Identifier",
                                          "name": "y1"
                                        },
                                        "kind": "init"
                                      }
                                    ]
                                  }
                                }
                              }
                            ]
                          },
                          "alternate": {
                            "type": "BlockStatement",
                            "body": [
                              {
                                "type": "IfStatement",
                                "test": {
                                  "type": "UnaryExpression",
                                  "operator": "!",
                                  "argument": {
                                    "type": "Identifier",
                                    "name": "va"
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
                                      "name": "va"
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
                                            "operator": "/",
                                            "left": {
                                              "type": "BinaryExpression",
                                              "operator": "-",
                                              "left": {
                                                "type": "Identifier",
                                                "name": "y1"
                                              },
                                              "right": {
                                                "type": "Identifier",
                                                "name": "fb"
                                              }
                                            },
                                            "right": {
                                              "type": "Identifier",
                                              "name": "fm"
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
                                            "type": "Identifier",
                                            "name": "y1"
                                          },
                                          "kind": "init"
                                        }
                                      ]
                                    }
                                  }
                                },
                                "alternate": {
                                  "type": "IfStatement",
                                  "test": {
                                    "type": "BinaryExpression",
                                    "operator": "<",
                                    "left": {
                                      "type": "MemberExpression",
                                      "computed": false,
                                      "object": {
                                        "type": "Identifier",
                                        "name": "va"
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "name": "y"
                                      }
                                    },
                                    "right": {
                                      "type": "Identifier",
                                      "name": "y0"
                                    }
                                  },
                                  "consequent": {
                                    "type": "ReturnStatement",
                                    "argument": null
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
                                    "name": "vb"
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
                                          "operator": "/",
                                          "left": {
                                            "type": "BinaryExpression",
                                            "operator": "-",
                                            "left": {
                                              "type": "Identifier",
                                              "name": "y0"
                                            },
                                            "right": {
                                              "type": "Identifier",
                                              "name": "fb"
                                            }
                                          },
                                          "right": {
                                            "type": "Identifier",
                                            "name": "fm"
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
                                          "type": "Identifier",
                                          "name": "y0"
                                        },
                                        "kind": "init"
                                      }
                                    ]
                                  }
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
                          "type": "IfStatement",
                          "test": {
                            "type": "BinaryExpression",
                            "operator": "<",
                            "left": {
                              "type": "Identifier",
                              "name": "ly"
                            },
                            "right": {
                              "type": "Identifier",
                              "name": "ry"
                            }
                          },
                          "consequent": {
                            "type": "BlockStatement",
                            "body": [
                              {
                                "type": "IfStatement",
                                "test": {
                                  "type": "UnaryExpression",
                                  "operator": "!",
                                  "argument": {
                                    "type": "Identifier",
                                    "name": "va"
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
                                      "name": "va"
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
                                            "type": "Identifier",
                                            "name": "x0"
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
                                              "type": "BinaryExpression",
                                              "operator": "*",
                                              "left": {
                                                "type": "Identifier",
                                                "name": "fm"
                                              },
                                              "right": {
                                                "type": "Identifier",
                                                "name": "x0"
                                              }
                                            },
                                            "right": {
                                              "type": "Identifier",
                                              "name": "fb"
                                            }
                                          },
                                          "kind": "init"
                                        }
                                      ]
                                    }
                                  }
                                },
                                "alternate": {
                                  "type": "IfStatement",
                                  "test": {
                                    "type": "BinaryExpression",
                                    "operator": ">=",
                                    "left": {
                                      "type": "MemberExpression",
                                      "computed": false,
                                      "object": {
                                        "type": "Identifier",
                                        "name": "va"
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "name": "x"
                                      }
                                    },
                                    "right": {
                                      "type": "Identifier",
                                      "name": "x1"
                                    }
                                  },
                                  "consequent": {
                                    "type": "ReturnStatement",
                                    "argument": null
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
                                    "name": "vb"
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
                                          "type": "Identifier",
                                          "name": "x1"
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
                                            "type": "BinaryExpression",
                                            "operator": "*",
                                            "left": {
                                              "type": "Identifier",
                                              "name": "fm"
                                            },
                                            "right": {
                                              "type": "Identifier",
                                              "name": "x1"
                                            }
                                          },
                                          "right": {
                                            "type": "Identifier",
                                            "name": "fb"
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
                          "alternate": {
                            "type": "BlockStatement",
                            "body": [
                              {
                                "type": "IfStatement",
                                "test": {
                                  "type": "UnaryExpression",
                                  "operator": "!",
                                  "argument": {
                                    "type": "Identifier",
                                    "name": "va"
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
                                      "name": "va"
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
                                            "type": "Identifier",
                                            "name": "x1"
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
                                              "type": "BinaryExpression",
                                              "operator": "*",
                                              "left": {
                                                "type": "Identifier",
                                                "name": "fm"
                                              },
                                              "right": {
                                                "type": "Identifier",
                                                "name": "x1"
                                              }
                                            },
                                            "right": {
                                              "type": "Identifier",
                                              "name": "fb"
                                            }
                                          },
                                          "kind": "init"
                                        }
                                      ]
                                    }
                                  }
                                },
                                "alternate": {
                                  "type": "IfStatement",
                                  "test": {
                                    "type": "BinaryExpression",
                                    "operator": "<",
                                    "left": {
                                      "type": "MemberExpression",
                                      "computed": false,
                                      "object": {
                                        "type": "Identifier",
                                        "name": "va"
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "name": "x"
                                      }
                                    },
                                    "right": {
                                      "type": "Identifier",
                                      "name": "x0"
                                    }
                                  },
                                  "consequent": {
                                    "type": "ReturnStatement",
                                    "argument": null
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
                                    "name": "vb"
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
                                          "type": "Identifier",
                                          "name": "x0"
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
                                            "type": "BinaryExpression",
                                            "operator": "*",
                                            "left": {
                                              "type": "Identifier",
                                              "name": "fm"
                                            },
                                            "right": {
                                              "type": "Identifier",
                                              "name": "x0"
                                            }
                                          },
                                          "right": {
                                            "type": "Identifier",
                                            "name": "fb"
                                          }
                                        },
                                        "kind": "init"
                                      }
                                    ]
                                  }
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
              "type": "ExpressionStatement",
              "expression": {
                "type": "AssignmentExpression",
                "operator": "=",
                "left": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "name": "edge"
                  },
                  "property": {
                    "type": "Identifier",
                    "name": "a"
                  }
                },
                "right": {
                  "type": "Identifier",
                  "name": "va"
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
                    "name": "edge"
                  },
                  "property": {
                    "type": "Identifier",
                    "name": "b"
                  }
                },
                "right": {
                  "type": "Identifier",
                  "name": "vb"
                }
              }
            },
            {
              "type": "ReturnStatement",
              "argument": {
                "type": "Literal",
                "value": true,
                "raw": "true"
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
  "src": "function d3_geom_voronoiClipEdges(extent) {\n    var edges = d3_geom_voronoiEdges, clip = d3_geom_clipLine(extent[0][0], extent[0][1], extent[1][0], extent[1][1]), i = edges.length, e;\n    while (i--) {\n        e = edges[i];\n        if (!d3_geom_voronoiConnectEdge(e, extent) || !clip(e) || abs(e.a.x - e.b.x) < ε && abs(e.a.y - e.b.y) < ε) {\n            e.a = e.b = null;\n            edges.splice(i, 1);\n        }\n    }\n}\nfunction d3_geom_voronoiConnectEdge(edge, extent) {\n    var vb = edge.b;\n    if (vb)\n        return true;\n    var va = edge.a, x0 = extent[0][0], x1 = extent[1][0], y0 = extent[0][1], y1 = extent[1][1], lSite = edge.l, rSite = edge.r, lx = lSite.x, ly = lSite.y, rx = rSite.x, ry = rSite.y, fx = (lx + rx) / 2, fy = (ly + ry) / 2, fm, fb;\n    if (ry === ly) {\n        if (fx < x0 || fx >= x1)\n            return;\n        if (lx > rx) {\n            if (!va)\n                va = {\n                    x: fx,\n                    y: y0\n                };\n            else if (va.y >= y1)\n                return;\n            vb = {\n                x: fx,\n                y: y1\n            };\n        } else {\n            if (!va)\n                va = {\n                    x: fx,\n                    y: y1\n                };\n            else if (va.y < y0)\n                return;\n            vb = {\n                x: fx,\n                y: y0\n            };\n        }\n    } else {\n        fm = (lx - rx) / (ry - ly);\n        fb = fy - fm * fx;\n        if (fm < -1 || fm > 1) {\n            if (lx > rx) {\n                if (!va)\n                    va = {\n                        x: (y0 - fb) / fm,\n                        y: y0\n                    };\n                else if (va.y >= y1)\n                    return;\n                vb = {\n                    x: (y1 - fb) / fm,\n                    y: y1\n                };\n            } else {\n                if (!va)\n                    va = {\n                        x: (y1 - fb) / fm,\n                        y: y1\n                    };\n                else if (va.y < y0)\n                    return;\n                vb = {\n                    x: (y0 - fb) / fm,\n                    y: y0\n                };\n            }\n        } else {\n            if (ly < ry) {\n                if (!va)\n                    va = {\n                        x: x0,\n                        y: fm * x0 + fb\n                    };\n                else if (va.x >= x1)\n                    return;\n                vb = {\n                    x: x1,\n                    y: fm * x1 + fb\n                };\n            } else {\n                if (!va)\n                    va = {\n                        x: x1,\n                        y: fm * x1 + fb\n                    };\n                else if (va.x < x0)\n                    return;\n                vb = {\n                    x: x0,\n                    y: fm * x0 + fb\n                };\n            }\n        }\n    }\n    edge.a = va;\n    edge.b = vb;\n    return true;\n}"
}