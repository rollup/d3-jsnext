{
  "filepath": "/geom/voronoi/edge.js",
  "shared": [],
  "dependencies": [
    "d3_geom_voronoiEdges",
    "d3_geom_voronoiCells"
  ],
  "helpers": [
    "d3_geom_voronoiEdge",
    "d3_geom_voronoiCreateEdge",
    "d3_geom_voronoiCreateBorderEdge",
    "d3_geom_voronoiSetEdgeEnd",
    "d3_geom_voronoiHalfEdge"
  ],
  "exports": [],
  "ast": {
    "type": "Program",
    "body": [
      {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "name": "d3_geom_voronoiEdge"
        },
        "params": [
          {
            "type": "Identifier",
            "name": "lSite"
          },
          {
            "type": "Identifier",
            "name": "rSite"
          }
        ],
        "defaults": [],
        "body": {
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
                    "type": "ThisExpression"
                  },
                  "property": {
                    "type": "Identifier",
                    "name": "l"
                  }
                },
                "right": {
                  "type": "Identifier",
                  "name": "lSite"
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
                    "type": "ThisExpression"
                  },
                  "property": {
                    "type": "Identifier",
                    "name": "r"
                  }
                },
                "right": {
                  "type": "Identifier",
                  "name": "rSite"
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
                    "type": "ThisExpression"
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
                      "type": "ThisExpression"
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
          "name": "d3_geom_voronoiCreateEdge"
        },
        "params": [
          {
            "type": "Identifier",
            "name": "lSite"
          },
          {
            "type": "Identifier",
            "name": "rSite"
          },
          {
            "type": "Identifier",
            "name": "va"
          },
          {
            "type": "Identifier",
            "name": "vb"
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
                    "name": "edge"
                  },
                  "init": {
                    "type": "NewExpression",
                    "callee": {
                      "type": "Identifier",
                      "name": "d3_geom_voronoiEdge"
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "name": "lSite"
                      },
                      {
                        "type": "Identifier",
                        "name": "rSite"
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
                    "name": "d3_geom_voronoiEdges"
                  },
                  "property": {
                    "type": "Identifier",
                    "name": "push"
                  }
                },
                "arguments": [
                  {
                    "type": "Identifier",
                    "name": "edge"
                  }
                ]
              }
            },
            {
              "type": "IfStatement",
              "test": {
                "type": "Identifier",
                "name": "va"
              },
              "consequent": {
                "type": "ExpressionStatement",
                "expression": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "name": "d3_geom_voronoiSetEdgeEnd"
                  },
                  "arguments": [
                    {
                      "type": "Identifier",
                      "name": "edge"
                    },
                    {
                      "type": "Identifier",
                      "name": "lSite"
                    },
                    {
                      "type": "Identifier",
                      "name": "rSite"
                    },
                    {
                      "type": "Identifier",
                      "name": "va"
                    }
                  ]
                }
              },
              "alternate": null
            },
            {
              "type": "IfStatement",
              "test": {
                "type": "Identifier",
                "name": "vb"
              },
              "consequent": {
                "type": "ExpressionStatement",
                "expression": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "name": "d3_geom_voronoiSetEdgeEnd"
                  },
                  "arguments": [
                    {
                      "type": "Identifier",
                      "name": "edge"
                    },
                    {
                      "type": "Identifier",
                      "name": "rSite"
                    },
                    {
                      "type": "Identifier",
                      "name": "lSite"
                    },
                    {
                      "type": "Identifier",
                      "name": "vb"
                    }
                  ]
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
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "MemberExpression",
                      "computed": true,
                      "object": {
                        "type": "Identifier",
                        "name": "d3_geom_voronoiCells"
                      },
                      "property": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "name": "lSite"
                        },
                        "property": {
                          "type": "Identifier",
                          "name": "i"
                        }
                      }
                    },
                    "property": {
                      "type": "Identifier",
                      "name": "edges"
                    }
                  },
                  "property": {
                    "type": "Identifier",
                    "name": "push"
                  }
                },
                "arguments": [
                  {
                    "type": "NewExpression",
                    "callee": {
                      "type": "Identifier",
                      "name": "d3_geom_voronoiHalfEdge"
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "name": "edge"
                      },
                      {
                        "type": "Identifier",
                        "name": "lSite"
                      },
                      {
                        "type": "Identifier",
                        "name": "rSite"
                      }
                    ]
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
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "MemberExpression",
                      "computed": true,
                      "object": {
                        "type": "Identifier",
                        "name": "d3_geom_voronoiCells"
                      },
                      "property": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "name": "rSite"
                        },
                        "property": {
                          "type": "Identifier",
                          "name": "i"
                        }
                      }
                    },
                    "property": {
                      "type": "Identifier",
                      "name": "edges"
                    }
                  },
                  "property": {
                    "type": "Identifier",
                    "name": "push"
                  }
                },
                "arguments": [
                  {
                    "type": "NewExpression",
                    "callee": {
                      "type": "Identifier",
                      "name": "d3_geom_voronoiHalfEdge"
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "name": "edge"
                      },
                      {
                        "type": "Identifier",
                        "name": "rSite"
                      },
                      {
                        "type": "Identifier",
                        "name": "lSite"
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
                "name": "edge"
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
          "name": "d3_geom_voronoiCreateBorderEdge"
        },
        "params": [
          {
            "type": "Identifier",
            "name": "lSite"
          },
          {
            "type": "Identifier",
            "name": "va"
          },
          {
            "type": "Identifier",
            "name": "vb"
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
                    "name": "edge"
                  },
                  "init": {
                    "type": "NewExpression",
                    "callee": {
                      "type": "Identifier",
                      "name": "d3_geom_voronoiEdge"
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "name": "lSite"
                      },
                      {
                        "type": "Literal",
                        "value": null,
                        "raw": "null"
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
              "type": "ExpressionStatement",
              "expression": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "name": "d3_geom_voronoiEdges"
                  },
                  "property": {
                    "type": "Identifier",
                    "name": "push"
                  }
                },
                "arguments": [
                  {
                    "type": "Identifier",
                    "name": "edge"
                  }
                ]
              }
            },
            {
              "type": "ReturnStatement",
              "argument": {
                "type": "Identifier",
                "name": "edge"
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
          "name": "d3_geom_voronoiSetEdgeEnd"
        },
        "params": [
          {
            "type": "Identifier",
            "name": "edge"
          },
          {
            "type": "Identifier",
            "name": "lSite"
          },
          {
            "type": "Identifier",
            "name": "rSite"
          },
          {
            "type": "Identifier",
            "name": "vertex"
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
                "operator": "&&",
                "left": {
                  "type": "UnaryExpression",
                  "operator": "!",
                  "argument": {
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
                  "prefix": true
                },
                "right": {
                  "type": "UnaryExpression",
                  "operator": "!",
                  "argument": {
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
                  "prefix": true
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
                          "name": "edge"
                        },
                        "property": {
                          "type": "Identifier",
                          "name": "a"
                        }
                      },
                      "right": {
                        "type": "Identifier",
                        "name": "vertex"
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
                          "name": "l"
                        }
                      },
                      "right": {
                        "type": "Identifier",
                        "name": "lSite"
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
                          "name": "r"
                        }
                      },
                      "right": {
                        "type": "Identifier",
                        "name": "rSite"
                      }
                    }
                  }
                ]
              },
              "alternate": {
                "type": "IfStatement",
                "test": {
                  "type": "BinaryExpression",
                  "operator": "===",
                  "left": {
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
                  },
                  "right": {
                    "type": "Identifier",
                    "name": "rSite"
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
                            "name": "edge"
                          },
                          "property": {
                            "type": "Identifier",
                            "name": "b"
                          }
                        },
                        "right": {
                          "type": "Identifier",
                          "name": "vertex"
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
                          "name": "vertex"
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
          "name": "d3_geom_voronoiHalfEdge"
        },
        "params": [
          {
            "type": "Identifier",
            "name": "edge"
          },
          {
            "type": "Identifier",
            "name": "lSite"
          },
          {
            "type": "Identifier",
            "name": "rSite"
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
              "type": "ExpressionStatement",
              "expression": {
                "type": "AssignmentExpression",
                "operator": "=",
                "left": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "ThisExpression"
                  },
                  "property": {
                    "type": "Identifier",
                    "name": "edge"
                  }
                },
                "right": {
                  "type": "Identifier",
                  "name": "edge"
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
                    "type": "ThisExpression"
                  },
                  "property": {
                    "type": "Identifier",
                    "name": "site"
                  }
                },
                "right": {
                  "type": "Identifier",
                  "name": "lSite"
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
                    "type": "ThisExpression"
                  },
                  "property": {
                    "type": "Identifier",
                    "name": "angle"
                  }
                },
                "right": {
                  "type": "ConditionalExpression",
                  "test": {
                    "type": "Identifier",
                    "name": "rSite"
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
                        "name": "atan2"
                      }
                    },
                    "arguments": [
                      {
                        "type": "BinaryExpression",
                        "operator": "-",
                        "left": {
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
                        },
                        "right": {
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
                        "type": "BinaryExpression",
                        "operator": "-",
                        "left": {
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
                        },
                        "right": {
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
                      }
                    ]
                  },
                  "alternate": {
                    "type": "ConditionalExpression",
                    "test": {
                      "type": "BinaryExpression",
                      "operator": "===",
                      "left": {
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
                      },
                      "right": {
                        "type": "Identifier",
                        "name": "lSite"
                      }
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
                          "name": "atan2"
                        }
                      },
                      "arguments": [
                        {
                          "type": "BinaryExpression",
                          "operator": "-",
                          "left": {
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "name": "vb"
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
                              "type": "Identifier",
                              "name": "va"
                            },
                            "property": {
                              "type": "Identifier",
                              "name": "x"
                            }
                          }
                        },
                        {
                          "type": "BinaryExpression",
                          "operator": "-",
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
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "name": "vb"
                            },
                            "property": {
                              "type": "Identifier",
                              "name": "y"
                            }
                          }
                        }
                      ]
                    },
                    "alternate": {
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
                          "name": "atan2"
                        }
                      },
                      "arguments": [
                        {
                          "type": "BinaryExpression",
                          "operator": "-",
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
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "name": "vb"
                            },
                            "property": {
                              "type": "Identifier",
                              "name": "x"
                            }
                          }
                        },
                        {
                          "type": "BinaryExpression",
                          "operator": "-",
                          "left": {
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "name": "vb"
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
                              "type": "Identifier",
                              "name": "va"
                            },
                            "property": {
                              "type": "Identifier",
                              "name": "y"
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
      },
      {
        "type": "EmptyStatement"
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
              "name": "d3_geom_voronoiHalfEdge"
            },
            "property": {
              "type": "Identifier",
              "name": "prototype"
            }
          },
          "right": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "key": {
                  "type": "Identifier",
                  "name": "start"
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
                          "type": "ConditionalExpression",
                          "test": {
                            "type": "BinaryExpression",
                            "operator": "===",
                            "left": {
                              "type": "MemberExpression",
                              "computed": false,
                              "object": {
                                "type": "MemberExpression",
                                "computed": false,
                                "object": {
                                  "type": "ThisExpression"
                                },
                                "property": {
                                  "type": "Identifier",
                                  "name": "edge"
                                }
                              },
                              "property": {
                                "type": "Identifier",
                                "name": "l"
                              }
                            },
                            "right": {
                              "type": "MemberExpression",
                              "computed": false,
                              "object": {
                                "type": "ThisExpression"
                              },
                              "property": {
                                "type": "Identifier",
                                "name": "site"
                              }
                            }
                          },
                          "consequent": {
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                              "type": "MemberExpression",
                              "computed": false,
                              "object": {
                                "type": "ThisExpression"
                              },
                              "property": {
                                "type": "Identifier",
                                "name": "edge"
                              }
                            },
                            "property": {
                              "type": "Identifier",
                              "name": "a"
                            }
                          },
                          "alternate": {
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                              "type": "MemberExpression",
                              "computed": false,
                              "object": {
                                "type": "ThisExpression"
                              },
                              "property": {
                                "type": "Identifier",
                                "name": "edge"
                              }
                            },
                            "property": {
                              "type": "Identifier",
                              "name": "b"
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
                "kind": "init"
              },
              {
                "type": "Property",
                "key": {
                  "type": "Identifier",
                  "name": "end"
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
                          "type": "ConditionalExpression",
                          "test": {
                            "type": "BinaryExpression",
                            "operator": "===",
                            "left": {
                              "type": "MemberExpression",
                              "computed": false,
                              "object": {
                                "type": "MemberExpression",
                                "computed": false,
                                "object": {
                                  "type": "ThisExpression"
                                },
                                "property": {
                                  "type": "Identifier",
                                  "name": "edge"
                                }
                              },
                              "property": {
                                "type": "Identifier",
                                "name": "l"
                              }
                            },
                            "right": {
                              "type": "MemberExpression",
                              "computed": false,
                              "object": {
                                "type": "ThisExpression"
                              },
                              "property": {
                                "type": "Identifier",
                                "name": "site"
                              }
                            }
                          },
                          "consequent": {
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                              "type": "MemberExpression",
                              "computed": false,
                              "object": {
                                "type": "ThisExpression"
                              },
                              "property": {
                                "type": "Identifier",
                                "name": "edge"
                              }
                            },
                            "property": {
                              "type": "Identifier",
                              "name": "b"
                            }
                          },
                          "alternate": {
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                              "type": "MemberExpression",
                              "computed": false,
                              "object": {
                                "type": "ThisExpression"
                              },
                              "property": {
                                "type": "Identifier",
                                "name": "edge"
                              }
                            },
                            "property": {
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
                },
                "kind": "init"
              }
            ]
          }
        }
      }
    ]
  },
  "src": "function d3_geom_voronoiEdge(lSite, rSite) {\n    this.l = lSite;\n    this.r = rSite;\n    this.a = this.b = null;\n}\nfunction d3_geom_voronoiCreateEdge(lSite, rSite, va, vb) {\n    var edge = new d3_geom_voronoiEdge(lSite, rSite);\n    d3_geom_voronoiEdges.push(edge);\n    if (va)\n        d3_geom_voronoiSetEdgeEnd(edge, lSite, rSite, va);\n    if (vb)\n        d3_geom_voronoiSetEdgeEnd(edge, rSite, lSite, vb);\n    d3_geom_voronoiCells[lSite.i].edges.push(new d3_geom_voronoiHalfEdge(edge, lSite, rSite));\n    d3_geom_voronoiCells[rSite.i].edges.push(new d3_geom_voronoiHalfEdge(edge, rSite, lSite));\n    return edge;\n}\nfunction d3_geom_voronoiCreateBorderEdge(lSite, va, vb) {\n    var edge = new d3_geom_voronoiEdge(lSite, null);\n    edge.a = va;\n    edge.b = vb;\n    d3_geom_voronoiEdges.push(edge);\n    return edge;\n}\nfunction d3_geom_voronoiSetEdgeEnd(edge, lSite, rSite, vertex) {\n    if (!edge.a && !edge.b) {\n        edge.a = vertex;\n        edge.l = lSite;\n        edge.r = rSite;\n    } else if (edge.l === rSite) {\n        edge.b = vertex;\n    } else {\n        edge.a = vertex;\n    }\n}\nfunction d3_geom_voronoiHalfEdge(edge, lSite, rSite) {\n    var va = edge.a, vb = edge.b;\n    this.edge = edge;\n    this.site = lSite;\n    this.angle = rSite ? Math.atan2(rSite.y - lSite.y, rSite.x - lSite.x) : edge.l === lSite ? Math.atan2(vb.x - va.x, va.y - vb.y) : Math.atan2(va.x - vb.x, vb.y - va.y);\n}\n;\nd3_geom_voronoiHalfEdge.prototype = {\n    start: function () {\n        return this.edge.l === this.site ? this.edge.a : this.edge.b;\n    },\n    end: function () {\n        return this.edge.l === this.site ? this.edge.b : this.edge.a;\n    }\n};"
}