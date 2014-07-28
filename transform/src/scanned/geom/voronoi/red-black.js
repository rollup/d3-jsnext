{
  "filepath": "/geom/voronoi/red-black.js",
  "shared": [],
  "dependencies": [],
  "helpers": [
    "d3_geom_voronoiRedBlackTree",
    "d3_geom_voronoiRedBlackNode",
    "d3_geom_voronoiRedBlackRotateLeft",
    "d3_geom_voronoiRedBlackRotateRight",
    "d3_geom_voronoiRedBlackFirst"
  ],
  "exports": [],
  "ast": {
    "type": "Program",
    "body": [
      {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "name": "d3_geom_voronoiRedBlackTree"
        },
        "params": [],
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
                    "name": "_"
                  }
                },
                "right": {
                  "type": "Literal",
                  "value": null,
                  "raw": "null"
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
          "name": "d3_geom_voronoiRedBlackNode"
        },
        "params": [
          {
            "type": "Identifier",
            "name": "node"
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
                    "type": "Identifier",
                    "name": "node"
                  },
                  "property": {
                    "type": "Identifier",
                    "name": "U"
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
                      "name": "node"
                    },
                    "property": {
                      "type": "Identifier",
                      "name": "C"
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
                        "name": "node"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "L"
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
                          "name": "node"
                        },
                        "property": {
                          "type": "Identifier",
                          "name": "R"
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
                            "name": "node"
                          },
                          "property": {
                            "type": "Identifier",
                            "name": "P"
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
                              "name": "node"
                            },
                            "property": {
                              "type": "Identifier",
                              "name": "N"
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
        "type": "ExpressionStatement",
        "expression": {
          "type": "AssignmentExpression",
          "operator": "=",
          "left": {
            "type": "MemberExpression",
            "computed": false,
            "object": {
              "type": "Identifier",
              "name": "d3_geom_voronoiRedBlackTree"
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
                  "name": "insert"
                },
                "value": {
                  "type": "FunctionExpression",
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "name": "after"
                    },
                    {
                      "type": "Identifier",
                      "name": "node"
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
                              "name": "parent"
                            },
                            "init": null
                          },
                          {
                            "type": "VariableDeclarator",
                            "id": {
                              "type": "Identifier",
                              "name": "grandpa"
                            },
                            "init": null
                          },
                          {
                            "type": "VariableDeclarator",
                            "id": {
                              "type": "Identifier",
                              "name": "uncle"
                            },
                            "init": null
                          }
                        ],
                        "kind": "var"
                      },
                      {
                        "type": "IfStatement",
                        "test": {
                          "type": "Identifier",
                          "name": "after"
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
                                    "name": "node"
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "name": "P"
                                  }
                                },
                                "right": {
                                  "type": "Identifier",
                                  "name": "after"
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
                                    "name": "node"
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "name": "N"
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
                                    "name": "N"
                                  }
                                }
                              }
                            },
                            {
                              "type": "IfStatement",
                              "test": {
                                "type": "MemberExpression",
                                "computed": false,
                                "object": {
                                  "type": "Identifier",
                                  "name": "after"
                                },
                                "property": {
                                  "type": "Identifier",
                                  "name": "N"
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
                                      "type": "MemberExpression",
                                      "computed": false,
                                      "object": {
                                        "type": "Identifier",
                                        "name": "after"
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "name": "N"
                                      }
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "name": "P"
                                    }
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "name": "node"
                                  }
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
                                  "type": "MemberExpression",
                                  "computed": false,
                                  "object": {
                                    "type": "Identifier",
                                    "name": "after"
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "name": "N"
                                  }
                                },
                                "right": {
                                  "type": "Identifier",
                                  "name": "node"
                                }
                              }
                            },
                            {
                              "type": "IfStatement",
                              "test": {
                                "type": "MemberExpression",
                                "computed": false,
                                "object": {
                                  "type": "Identifier",
                                  "name": "after"
                                },
                                "property": {
                                  "type": "Identifier",
                                  "name": "R"
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
                                        "name": "after"
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
                                          "name": "R"
                                        }
                                      }
                                    }
                                  },
                                  {
                                    "type": "WhileStatement",
                                    "test": {
                                      "type": "MemberExpression",
                                      "computed": false,
                                      "object": {
                                        "type": "Identifier",
                                        "name": "after"
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "name": "L"
                                      }
                                    },
                                    "body": {
                                      "type": "ExpressionStatement",
                                      "expression": {
                                        "type": "AssignmentExpression",
                                        "operator": "=",
                                        "left": {
                                          "type": "Identifier",
                                          "name": "after"
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
                                            "name": "L"
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
                                        "type": "MemberExpression",
                                        "computed": false,
                                        "object": {
                                          "type": "Identifier",
                                          "name": "after"
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "name": "L"
                                        }
                                      },
                                      "right": {
                                        "type": "Identifier",
                                        "name": "node"
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
                                          "name": "after"
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "name": "R"
                                        }
                                      },
                                      "right": {
                                        "type": "Identifier",
                                        "name": "node"
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
                                  "name": "parent"
                                },
                                "right": {
                                  "type": "Identifier",
                                  "name": "after"
                                }
                              }
                            }
                          ]
                        },
                        "alternate": {
                          "type": "IfStatement",
                          "test": {
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                              "type": "ThisExpression"
                            },
                            "property": {
                              "type": "Identifier",
                              "name": "_"
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
                                    "name": "after"
                                  },
                                  "right": {
                                    "type": "CallExpression",
                                    "callee": {
                                      "type": "Identifier",
                                      "name": "d3_geom_voronoiRedBlackFirst"
                                    },
                                    "arguments": [
                                      {
                                        "type": "MemberExpression",
                                        "computed": false,
                                        "object": {
                                          "type": "ThisExpression"
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "name": "_"
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
                                    "type": "MemberExpression",
                                    "computed": false,
                                    "object": {
                                      "type": "Identifier",
                                      "name": "node"
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "name": "P"
                                    }
                                  },
                                  "right": {
                                    "type": "Literal",
                                    "value": null,
                                    "raw": "null"
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
                                      "name": "node"
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "name": "N"
                                    }
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "name": "after"
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
                                      "name": "after"
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "name": "P"
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
                                        "name": "after"
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "name": "L"
                                      }
                                    },
                                    "right": {
                                      "type": "Identifier",
                                      "name": "node"
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
                                    "name": "parent"
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "name": "after"
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
                                      "name": "node"
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "name": "P"
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
                                        "name": "node"
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "name": "N"
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
                                      "name": "_"
                                    }
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "name": "node"
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
                                    "name": "parent"
                                  },
                                  "right": {
                                    "type": "Literal",
                                    "value": null,
                                    "raw": "null"
                                  }
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
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "name": "node"
                            },
                            "property": {
                              "type": "Identifier",
                              "name": "L"
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
                                "name": "node"
                              },
                              "property": {
                                "type": "Identifier",
                                "name": "R"
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
                          "type": "AssignmentExpression",
                          "operator": "=",
                          "left": {
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "name": "node"
                            },
                            "property": {
                              "type": "Identifier",
                              "name": "U"
                            }
                          },
                          "right": {
                            "type": "Identifier",
                            "name": "parent"
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
                              "name": "node"
                            },
                            "property": {
                              "type": "Identifier",
                              "name": "C"
                            }
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
                            "name": "after"
                          },
                          "right": {
                            "type": "Identifier",
                            "name": "node"
                          }
                        }
                      },
                      {
                        "type": "WhileStatement",
                        "test": {
                          "type": "LogicalExpression",
                          "operator": "&&",
                          "left": {
                            "type": "Identifier",
                            "name": "parent"
                          },
                          "right": {
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "name": "parent"
                            },
                            "property": {
                              "type": "Identifier",
                              "name": "C"
                            }
                          }
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
                                  "name": "grandpa"
                                },
                                "right": {
                                  "type": "MemberExpression",
                                  "computed": false,
                                  "object": {
                                    "type": "Identifier",
                                    "name": "parent"
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "name": "U"
                                  }
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
                                  "name": "parent"
                                },
                                "right": {
                                  "type": "MemberExpression",
                                  "computed": false,
                                  "object": {
                                    "type": "Identifier",
                                    "name": "grandpa"
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "name": "L"
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
                                        "name": "uncle"
                                      },
                                      "right": {
                                        "type": "MemberExpression",
                                        "computed": false,
                                        "object": {
                                          "type": "Identifier",
                                          "name": "grandpa"
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "name": "R"
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
                                        "type": "Identifier",
                                        "name": "uncle"
                                      },
                                      "right": {
                                        "type": "MemberExpression",
                                        "computed": false,
                                        "object": {
                                          "type": "Identifier",
                                          "name": "uncle"
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "name": "C"
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
                                                "name": "parent"
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "name": "C"
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
                                                  "name": "uncle"
                                                },
                                                "property": {
                                                  "type": "Identifier",
                                                  "name": "C"
                                                }
                                              },
                                              "right": {
                                                "type": "Literal",
                                                "value": false,
                                                "raw": "false"
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
                                              "type": "MemberExpression",
                                              "computed": false,
                                              "object": {
                                                "type": "Identifier",
                                                "name": "grandpa"
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "name": "C"
                                              }
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
                                              "name": "after"
                                            },
                                            "right": {
                                              "type": "Identifier",
                                              "name": "grandpa"
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
                                            "type": "BinaryExpression",
                                            "operator": "===",
                                            "left": {
                                              "type": "Identifier",
                                              "name": "after"
                                            },
                                            "right": {
                                              "type": "MemberExpression",
                                              "computed": false,
                                              "object": {
                                                "type": "Identifier",
                                                "name": "parent"
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "name": "R"
                                              }
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
                                                    "name": "d3_geom_voronoiRedBlackRotateLeft"
                                                  },
                                                  "arguments": [
                                                    {
                                                      "type": "ThisExpression"
                                                    },
                                                    {
                                                      "type": "Identifier",
                                                      "name": "parent"
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
                                                    "name": "after"
                                                  },
                                                  "right": {
                                                    "type": "Identifier",
                                                    "name": "parent"
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
                                                    "name": "parent"
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
                                                      "name": "U"
                                                    }
                                                  }
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
                                              "type": "MemberExpression",
                                              "computed": false,
                                              "object": {
                                                "type": "Identifier",
                                                "name": "parent"
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "name": "C"
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
                                              "type": "MemberExpression",
                                              "computed": false,
                                              "object": {
                                                "type": "Identifier",
                                                "name": "grandpa"
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "name": "C"
                                              }
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
                                            "type": "CallExpression",
                                            "callee": {
                                              "type": "Identifier",
                                              "name": "d3_geom_voronoiRedBlackRotateRight"
                                            },
                                            "arguments": [
                                              {
                                                "type": "ThisExpression"
                                              },
                                              {
                                                "type": "Identifier",
                                                "name": "grandpa"
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
                                      "type": "AssignmentExpression",
                                      "operator": "=",
                                      "left": {
                                        "type": "Identifier",
                                        "name": "uncle"
                                      },
                                      "right": {
                                        "type": "MemberExpression",
                                        "computed": false,
                                        "object": {
                                          "type": "Identifier",
                                          "name": "grandpa"
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "name": "L"
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
                                        "type": "Identifier",
                                        "name": "uncle"
                                      },
                                      "right": {
                                        "type": "MemberExpression",
                                        "computed": false,
                                        "object": {
                                          "type": "Identifier",
                                          "name": "uncle"
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "name": "C"
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
                                                "name": "parent"
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "name": "C"
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
                                                  "name": "uncle"
                                                },
                                                "property": {
                                                  "type": "Identifier",
                                                  "name": "C"
                                                }
                                              },
                                              "right": {
                                                "type": "Literal",
                                                "value": false,
                                                "raw": "false"
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
                                              "type": "MemberExpression",
                                              "computed": false,
                                              "object": {
                                                "type": "Identifier",
                                                "name": "grandpa"
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "name": "C"
                                              }
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
                                              "name": "after"
                                            },
                                            "right": {
                                              "type": "Identifier",
                                              "name": "grandpa"
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
                                            "type": "BinaryExpression",
                                            "operator": "===",
                                            "left": {
                                              "type": "Identifier",
                                              "name": "after"
                                            },
                                            "right": {
                                              "type": "MemberExpression",
                                              "computed": false,
                                              "object": {
                                                "type": "Identifier",
                                                "name": "parent"
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "name": "L"
                                              }
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
                                                    "name": "d3_geom_voronoiRedBlackRotateRight"
                                                  },
                                                  "arguments": [
                                                    {
                                                      "type": "ThisExpression"
                                                    },
                                                    {
                                                      "type": "Identifier",
                                                      "name": "parent"
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
                                                    "name": "after"
                                                  },
                                                  "right": {
                                                    "type": "Identifier",
                                                    "name": "parent"
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
                                                    "name": "parent"
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
                                                      "name": "U"
                                                    }
                                                  }
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
                                              "type": "MemberExpression",
                                              "computed": false,
                                              "object": {
                                                "type": "Identifier",
                                                "name": "parent"
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "name": "C"
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
                                              "type": "MemberExpression",
                                              "computed": false,
                                              "object": {
                                                "type": "Identifier",
                                                "name": "grandpa"
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "name": "C"
                                              }
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
                                            "type": "CallExpression",
                                            "callee": {
                                              "type": "Identifier",
                                              "name": "d3_geom_voronoiRedBlackRotateLeft"
                                            },
                                            "arguments": [
                                              {
                                                "type": "ThisExpression"
                                              },
                                              {
                                                "type": "Identifier",
                                                "name": "grandpa"
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
                                  "type": "Identifier",
                                  "name": "parent"
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
                                    "name": "U"
                                  }
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
                                "name": "_"
                              }
                            },
                            "property": {
                              "type": "Identifier",
                              "name": "C"
                            }
                          },
                          "right": {
                            "type": "Literal",
                            "value": false,
                            "raw": "false"
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
                  "name": "remove"
                },
                "value": {
                  "type": "FunctionExpression",
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "name": "node"
                    }
                  ],
                  "defaults": [],
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "IfStatement",
                        "test": {
                          "type": "MemberExpression",
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "name": "node"
                          },
                          "property": {
                            "type": "Identifier",
                            "name": "N"
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
                                "type": "MemberExpression",
                                "computed": false,
                                "object": {
                                  "type": "Identifier",
                                  "name": "node"
                                },
                                "property": {
                                  "type": "Identifier",
                                  "name": "N"
                                }
                              },
                              "property": {
                                "type": "Identifier",
                                "name": "P"
                              }
                            },
                            "right": {
                              "type": "MemberExpression",
                              "computed": false,
                              "object": {
                                "type": "Identifier",
                                "name": "node"
                              },
                              "property": {
                                "type": "Identifier",
                                "name": "P"
                              }
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
                            "name": "node"
                          },
                          "property": {
                            "type": "Identifier",
                            "name": "P"
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
                                "type": "MemberExpression",
                                "computed": false,
                                "object": {
                                  "type": "Identifier",
                                  "name": "node"
                                },
                                "property": {
                                  "type": "Identifier",
                                  "name": "P"
                                }
                              },
                              "property": {
                                "type": "Identifier",
                                "name": "N"
                              }
                            },
                            "right": {
                              "type": "MemberExpression",
                              "computed": false,
                              "object": {
                                "type": "Identifier",
                                "name": "node"
                              },
                              "property": {
                                "type": "Identifier",
                                "name": "N"
                              }
                            }
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
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "name": "node"
                            },
                            "property": {
                              "type": "Identifier",
                              "name": "N"
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
                                "name": "node"
                              },
                              "property": {
                                "type": "Identifier",
                                "name": "P"
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
                        "type": "VariableDeclaration",
                        "declarations": [
                          {
                            "type": "VariableDeclarator",
                            "id": {
                              "type": "Identifier",
                              "name": "parent"
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
                                "name": "U"
                              }
                            }
                          },
                          {
                            "type": "VariableDeclarator",
                            "id": {
                              "type": "Identifier",
                              "name": "sibling"
                            },
                            "init": null
                          },
                          {
                            "type": "VariableDeclarator",
                            "id": {
                              "type": "Identifier",
                              "name": "left"
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
                                "name": "L"
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
                              "type": "MemberExpression",
                              "computed": false,
                              "object": {
                                "type": "Identifier",
                                "name": "node"
                              },
                              "property": {
                                "type": "Identifier",
                                "name": "R"
                              }
                            }
                          },
                          {
                            "type": "VariableDeclarator",
                            "id": {
                              "type": "Identifier",
                              "name": "next"
                            },
                            "init": null
                          },
                          {
                            "type": "VariableDeclarator",
                            "id": {
                              "type": "Identifier",
                              "name": "red"
                            },
                            "init": null
                          }
                        ],
                        "kind": "var"
                      },
                      {
                        "type": "IfStatement",
                        "test": {
                          "type": "UnaryExpression",
                          "operator": "!",
                          "argument": {
                            "type": "Identifier",
                            "name": "left"
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
                              "name": "next"
                            },
                            "right": {
                              "type": "Identifier",
                              "name": "right"
                            }
                          }
                        },
                        "alternate": {
                          "type": "IfStatement",
                          "test": {
                            "type": "UnaryExpression",
                            "operator": "!",
                            "argument": {
                              "type": "Identifier",
                              "name": "right"
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
                                "name": "next"
                              },
                              "right": {
                                "type": "Identifier",
                                "name": "left"
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
                                "name": "next"
                              },
                              "right": {
                                "type": "CallExpression",
                                "callee": {
                                  "type": "Identifier",
                                  "name": "d3_geom_voronoiRedBlackFirst"
                                },
                                "arguments": [
                                  {
                                    "type": "Identifier",
                                    "name": "right"
                                  }
                                ]
                              }
                            }
                          }
                        }
                      },
                      {
                        "type": "IfStatement",
                        "test": {
                          "type": "Identifier",
                          "name": "parent"
                        },
                        "consequent": {
                          "type": "BlockStatement",
                          "body": [
                            {
                              "type": "IfStatement",
                              "test": {
                                "type": "BinaryExpression",
                                "operator": "===",
                                "left": {
                                  "type": "MemberExpression",
                                  "computed": false,
                                  "object": {
                                    "type": "Identifier",
                                    "name": "parent"
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "name": "L"
                                  }
                                },
                                "right": {
                                  "type": "Identifier",
                                  "name": "node"
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
                                      "name": "parent"
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "name": "L"
                                    }
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "name": "next"
                                  }
                                }
                              },
                              "alternate": {
                                "type": "ExpressionStatement",
                                "expression": {
                                  "type": "AssignmentExpression",
                                  "operator": "=",
                                  "left": {
                                    "type": "MemberExpression",
                                    "computed": false,
                                    "object": {
                                      "type": "Identifier",
                                      "name": "parent"
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "name": "R"
                                    }
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "name": "next"
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
                                "operator": "=",
                                "left": {
                                  "type": "MemberExpression",
                                  "computed": false,
                                  "object": {
                                    "type": "ThisExpression"
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "name": "_"
                                  }
                                },
                                "right": {
                                  "type": "Identifier",
                                  "name": "next"
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
                            "name": "left"
                          },
                          "right": {
                            "type": "Identifier",
                            "name": "right"
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
                                  "name": "red"
                                },
                                "right": {
                                  "type": "MemberExpression",
                                  "computed": false,
                                  "object": {
                                    "type": "Identifier",
                                    "name": "next"
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "name": "C"
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
                                  "type": "MemberExpression",
                                  "computed": false,
                                  "object": {
                                    "type": "Identifier",
                                    "name": "next"
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "name": "C"
                                  }
                                },
                                "right": {
                                  "type": "MemberExpression",
                                  "computed": false,
                                  "object": {
                                    "type": "Identifier",
                                    "name": "node"
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "name": "C"
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
                                  "type": "MemberExpression",
                                  "computed": false,
                                  "object": {
                                    "type": "Identifier",
                                    "name": "next"
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "name": "L"
                                  }
                                },
                                "right": {
                                  "type": "Identifier",
                                  "name": "left"
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
                                    "name": "left"
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "name": "U"
                                  }
                                },
                                "right": {
                                  "type": "Identifier",
                                  "name": "next"
                                }
                              }
                            },
                            {
                              "type": "IfStatement",
                              "test": {
                                "type": "BinaryExpression",
                                "operator": "!==",
                                "left": {
                                  "type": "Identifier",
                                  "name": "next"
                                },
                                "right": {
                                  "type": "Identifier",
                                  "name": "right"
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
                                        "name": "parent"
                                      },
                                      "right": {
                                        "type": "MemberExpression",
                                        "computed": false,
                                        "object": {
                                          "type": "Identifier",
                                          "name": "next"
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "name": "U"
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
                                        "type": "MemberExpression",
                                        "computed": false,
                                        "object": {
                                          "type": "Identifier",
                                          "name": "next"
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "name": "U"
                                        }
                                      },
                                      "right": {
                                        "type": "MemberExpression",
                                        "computed": false,
                                        "object": {
                                          "type": "Identifier",
                                          "name": "node"
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "name": "U"
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
                                        "name": "node"
                                      },
                                      "right": {
                                        "type": "MemberExpression",
                                        "computed": false,
                                        "object": {
                                          "type": "Identifier",
                                          "name": "next"
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "name": "R"
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
                                        "type": "MemberExpression",
                                        "computed": false,
                                        "object": {
                                          "type": "Identifier",
                                          "name": "parent"
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "name": "L"
                                        }
                                      },
                                      "right": {
                                        "type": "Identifier",
                                        "name": "node"
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
                                          "name": "next"
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "name": "R"
                                        }
                                      },
                                      "right": {
                                        "type": "Identifier",
                                        "name": "right"
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
                                          "name": "right"
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "name": "U"
                                        }
                                      },
                                      "right": {
                                        "type": "Identifier",
                                        "name": "next"
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
                                          "name": "next"
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "name": "U"
                                        }
                                      },
                                      "right": {
                                        "type": "Identifier",
                                        "name": "parent"
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
                                        "name": "parent"
                                      },
                                      "right": {
                                        "type": "Identifier",
                                        "name": "next"
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
                                        "name": "node"
                                      },
                                      "right": {
                                        "type": "MemberExpression",
                                        "computed": false,
                                        "object": {
                                          "type": "Identifier",
                                          "name": "next"
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "name": "R"
                                        }
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
                                  "name": "red"
                                },
                                "right": {
                                  "type": "MemberExpression",
                                  "computed": false,
                                  "object": {
                                    "type": "Identifier",
                                    "name": "node"
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "name": "C"
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
                                  "name": "node"
                                },
                                "right": {
                                  "type": "Identifier",
                                  "name": "next"
                                }
                              }
                            }
                          ]
                        }
                      },
                      {
                        "type": "IfStatement",
                        "test": {
                          "type": "Identifier",
                          "name": "node"
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
                                "name": "node"
                              },
                              "property": {
                                "type": "Identifier",
                                "name": "U"
                              }
                            },
                            "right": {
                              "type": "Identifier",
                              "name": "parent"
                            }
                          }
                        },
                        "alternate": null
                      },
                      {
                        "type": "IfStatement",
                        "test": {
                          "type": "Identifier",
                          "name": "red"
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
                          "type": "LogicalExpression",
                          "operator": "&&",
                          "left": {
                            "type": "Identifier",
                            "name": "node"
                          },
                          "right": {
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "name": "node"
                            },
                            "property": {
                              "type": "Identifier",
                              "name": "C"
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
                                    "name": "node"
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "name": "C"
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
                              "type": "ReturnStatement",
                              "argument": null
                            }
                          ]
                        },
                        "alternate": null
                      },
                      {
                        "type": "DoWhileStatement",
                        "body": {
                          "type": "BlockStatement",
                          "body": [
                            {
                              "type": "IfStatement",
                              "test": {
                                "type": "BinaryExpression",
                                "operator": "===",
                                "left": {
                                  "type": "Identifier",
                                  "name": "node"
                                },
                                "right": {
                                  "type": "MemberExpression",
                                  "computed": false,
                                  "object": {
                                    "type": "ThisExpression"
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "name": "_"
                                  }
                                }
                              },
                              "consequent": {
                                "type": "BreakStatement",
                                "label": null
                              },
                              "alternate": null
                            },
                            {
                              "type": "IfStatement",
                              "test": {
                                "type": "BinaryExpression",
                                "operator": "===",
                                "left": {
                                  "type": "Identifier",
                                  "name": "node"
                                },
                                "right": {
                                  "type": "MemberExpression",
                                  "computed": false,
                                  "object": {
                                    "type": "Identifier",
                                    "name": "parent"
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "name": "L"
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
                                        "name": "sibling"
                                      },
                                      "right": {
                                        "type": "MemberExpression",
                                        "computed": false,
                                        "object": {
                                          "type": "Identifier",
                                          "name": "parent"
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "name": "R"
                                        }
                                      }
                                    }
                                  },
                                  {
                                    "type": "IfStatement",
                                    "test": {
                                      "type": "MemberExpression",
                                      "computed": false,
                                      "object": {
                                        "type": "Identifier",
                                        "name": "sibling"
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "name": "C"
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
                                                "name": "sibling"
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "name": "C"
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
                                              "type": "MemberExpression",
                                              "computed": false,
                                              "object": {
                                                "type": "Identifier",
                                                "name": "parent"
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "name": "C"
                                              }
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
                                            "type": "CallExpression",
                                            "callee": {
                                              "type": "Identifier",
                                              "name": "d3_geom_voronoiRedBlackRotateLeft"
                                            },
                                            "arguments": [
                                              {
                                                "type": "ThisExpression"
                                              },
                                              {
                                                "type": "Identifier",
                                                "name": "parent"
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
                                              "name": "sibling"
                                            },
                                            "right": {
                                              "type": "MemberExpression",
                                              "computed": false,
                                              "object": {
                                                "type": "Identifier",
                                                "name": "parent"
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "name": "R"
                                              }
                                            }
                                          }
                                        }
                                      ]
                                    },
                                    "alternate": null
                                  },
                                  {
                                    "type": "IfStatement",
                                    "test": {
                                      "type": "LogicalExpression",
                                      "operator": "||",
                                      "left": {
                                        "type": "LogicalExpression",
                                        "operator": "&&",
                                        "left": {
                                          "type": "MemberExpression",
                                          "computed": false,
                                          "object": {
                                            "type": "Identifier",
                                            "name": "sibling"
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "name": "L"
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
                                              "name": "sibling"
                                            },
                                            "property": {
                                              "type": "Identifier",
                                              "name": "L"
                                            }
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "name": "C"
                                          }
                                        }
                                      },
                                      "right": {
                                        "type": "LogicalExpression",
                                        "operator": "&&",
                                        "left": {
                                          "type": "MemberExpression",
                                          "computed": false,
                                          "object": {
                                            "type": "Identifier",
                                            "name": "sibling"
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "name": "R"
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
                                              "name": "sibling"
                                            },
                                            "property": {
                                              "type": "Identifier",
                                              "name": "R"
                                            }
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "name": "C"
                                          }
                                        }
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
                                              "type": "UnaryExpression",
                                              "operator": "!",
                                              "argument": {
                                                "type": "MemberExpression",
                                                "computed": false,
                                                "object": {
                                                  "type": "Identifier",
                                                  "name": "sibling"
                                                },
                                                "property": {
                                                  "type": "Identifier",
                                                  "name": "R"
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
                                                  "type": "MemberExpression",
                                                  "computed": false,
                                                  "object": {
                                                    "type": "Identifier",
                                                    "name": "sibling"
                                                  },
                                                  "property": {
                                                    "type": "Identifier",
                                                    "name": "R"
                                                  }
                                                },
                                                "property": {
                                                  "type": "Identifier",
                                                  "name": "C"
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
                                                      "type": "MemberExpression",
                                                      "computed": false,
                                                      "object": {
                                                        "type": "Identifier",
                                                        "name": "sibling"
                                                      },
                                                      "property": {
                                                        "type": "Identifier",
                                                        "name": "L"
                                                      }
                                                    },
                                                    "property": {
                                                      "type": "Identifier",
                                                      "name": "C"
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
                                                    "type": "MemberExpression",
                                                    "computed": false,
                                                    "object": {
                                                      "type": "Identifier",
                                                      "name": "sibling"
                                                    },
                                                    "property": {
                                                      "type": "Identifier",
                                                      "name": "C"
                                                    }
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
                                                  "type": "CallExpression",
                                                  "callee": {
                                                    "type": "Identifier",
                                                    "name": "d3_geom_voronoiRedBlackRotateRight"
                                                  },
                                                  "arguments": [
                                                    {
                                                      "type": "ThisExpression"
                                                    },
                                                    {
                                                      "type": "Identifier",
                                                      "name": "sibling"
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
                                                    "name": "sibling"
                                                  },
                                                  "right": {
                                                    "type": "MemberExpression",
                                                    "computed": false,
                                                    "object": {
                                                      "type": "Identifier",
                                                      "name": "parent"
                                                    },
                                                    "property": {
                                                      "type": "Identifier",
                                                      "name": "R"
                                                    }
                                                  }
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
                                              "type": "MemberExpression",
                                              "computed": false,
                                              "object": {
                                                "type": "Identifier",
                                                "name": "sibling"
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "name": "C"
                                              }
                                            },
                                            "right": {
                                              "type": "MemberExpression",
                                              "computed": false,
                                              "object": {
                                                "type": "Identifier",
                                                "name": "parent"
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "name": "C"
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
                                              "type": "MemberExpression",
                                              "computed": false,
                                              "object": {
                                                "type": "Identifier",
                                                "name": "parent"
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "name": "C"
                                              }
                                            },
                                            "right": {
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
                                                    "name": "sibling"
                                                  },
                                                  "property": {
                                                    "type": "Identifier",
                                                    "name": "R"
                                                  }
                                                },
                                                "property": {
                                                  "type": "Identifier",
                                                  "name": "C"
                                                }
                                              },
                                              "right": {
                                                "type": "Literal",
                                                "value": false,
                                                "raw": "false"
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
                                              "name": "d3_geom_voronoiRedBlackRotateLeft"
                                            },
                                            "arguments": [
                                              {
                                                "type": "ThisExpression"
                                              },
                                              {
                                                "type": "Identifier",
                                                "name": "parent"
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
                                              "name": "node"
                                            },
                                            "right": {
                                              "type": "MemberExpression",
                                              "computed": false,
                                              "object": {
                                                "type": "ThisExpression"
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "name": "_"
                                              }
                                            }
                                          }
                                        },
                                        {
                                          "type": "BreakStatement",
                                          "label": null
                                        }
                                      ]
                                    },
                                    "alternate": null
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
                                        "name": "sibling"
                                      },
                                      "right": {
                                        "type": "MemberExpression",
                                        "computed": false,
                                        "object": {
                                          "type": "Identifier",
                                          "name": "parent"
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "name": "L"
                                        }
                                      }
                                    }
                                  },
                                  {
                                    "type": "IfStatement",
                                    "test": {
                                      "type": "MemberExpression",
                                      "computed": false,
                                      "object": {
                                        "type": "Identifier",
                                        "name": "sibling"
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "name": "C"
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
                                                "name": "sibling"
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "name": "C"
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
                                              "type": "MemberExpression",
                                              "computed": false,
                                              "object": {
                                                "type": "Identifier",
                                                "name": "parent"
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "name": "C"
                                              }
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
                                            "type": "CallExpression",
                                            "callee": {
                                              "type": "Identifier",
                                              "name": "d3_geom_voronoiRedBlackRotateRight"
                                            },
                                            "arguments": [
                                              {
                                                "type": "ThisExpression"
                                              },
                                              {
                                                "type": "Identifier",
                                                "name": "parent"
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
                                              "name": "sibling"
                                            },
                                            "right": {
                                              "type": "MemberExpression",
                                              "computed": false,
                                              "object": {
                                                "type": "Identifier",
                                                "name": "parent"
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "name": "L"
                                              }
                                            }
                                          }
                                        }
                                      ]
                                    },
                                    "alternate": null
                                  },
                                  {
                                    "type": "IfStatement",
                                    "test": {
                                      "type": "LogicalExpression",
                                      "operator": "||",
                                      "left": {
                                        "type": "LogicalExpression",
                                        "operator": "&&",
                                        "left": {
                                          "type": "MemberExpression",
                                          "computed": false,
                                          "object": {
                                            "type": "Identifier",
                                            "name": "sibling"
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "name": "L"
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
                                              "name": "sibling"
                                            },
                                            "property": {
                                              "type": "Identifier",
                                              "name": "L"
                                            }
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "name": "C"
                                          }
                                        }
                                      },
                                      "right": {
                                        "type": "LogicalExpression",
                                        "operator": "&&",
                                        "left": {
                                          "type": "MemberExpression",
                                          "computed": false,
                                          "object": {
                                            "type": "Identifier",
                                            "name": "sibling"
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "name": "R"
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
                                              "name": "sibling"
                                            },
                                            "property": {
                                              "type": "Identifier",
                                              "name": "R"
                                            }
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "name": "C"
                                          }
                                        }
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
                                              "type": "UnaryExpression",
                                              "operator": "!",
                                              "argument": {
                                                "type": "MemberExpression",
                                                "computed": false,
                                                "object": {
                                                  "type": "Identifier",
                                                  "name": "sibling"
                                                },
                                                "property": {
                                                  "type": "Identifier",
                                                  "name": "L"
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
                                                  "type": "MemberExpression",
                                                  "computed": false,
                                                  "object": {
                                                    "type": "Identifier",
                                                    "name": "sibling"
                                                  },
                                                  "property": {
                                                    "type": "Identifier",
                                                    "name": "L"
                                                  }
                                                },
                                                "property": {
                                                  "type": "Identifier",
                                                  "name": "C"
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
                                                      "type": "MemberExpression",
                                                      "computed": false,
                                                      "object": {
                                                        "type": "Identifier",
                                                        "name": "sibling"
                                                      },
                                                      "property": {
                                                        "type": "Identifier",
                                                        "name": "R"
                                                      }
                                                    },
                                                    "property": {
                                                      "type": "Identifier",
                                                      "name": "C"
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
                                                    "type": "MemberExpression",
                                                    "computed": false,
                                                    "object": {
                                                      "type": "Identifier",
                                                      "name": "sibling"
                                                    },
                                                    "property": {
                                                      "type": "Identifier",
                                                      "name": "C"
                                                    }
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
                                                  "type": "CallExpression",
                                                  "callee": {
                                                    "type": "Identifier",
                                                    "name": "d3_geom_voronoiRedBlackRotateLeft"
                                                  },
                                                  "arguments": [
                                                    {
                                                      "type": "ThisExpression"
                                                    },
                                                    {
                                                      "type": "Identifier",
                                                      "name": "sibling"
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
                                                    "name": "sibling"
                                                  },
                                                  "right": {
                                                    "type": "MemberExpression",
                                                    "computed": false,
                                                    "object": {
                                                      "type": "Identifier",
                                                      "name": "parent"
                                                    },
                                                    "property": {
                                                      "type": "Identifier",
                                                      "name": "L"
                                                    }
                                                  }
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
                                              "type": "MemberExpression",
                                              "computed": false,
                                              "object": {
                                                "type": "Identifier",
                                                "name": "sibling"
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "name": "C"
                                              }
                                            },
                                            "right": {
                                              "type": "MemberExpression",
                                              "computed": false,
                                              "object": {
                                                "type": "Identifier",
                                                "name": "parent"
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "name": "C"
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
                                              "type": "MemberExpression",
                                              "computed": false,
                                              "object": {
                                                "type": "Identifier",
                                                "name": "parent"
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "name": "C"
                                              }
                                            },
                                            "right": {
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
                                                    "name": "sibling"
                                                  },
                                                  "property": {
                                                    "type": "Identifier",
                                                    "name": "L"
                                                  }
                                                },
                                                "property": {
                                                  "type": "Identifier",
                                                  "name": "C"
                                                }
                                              },
                                              "right": {
                                                "type": "Literal",
                                                "value": false,
                                                "raw": "false"
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
                                              "name": "d3_geom_voronoiRedBlackRotateRight"
                                            },
                                            "arguments": [
                                              {
                                                "type": "ThisExpression"
                                              },
                                              {
                                                "type": "Identifier",
                                                "name": "parent"
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
                                              "name": "node"
                                            },
                                            "right": {
                                              "type": "MemberExpression",
                                              "computed": false,
                                              "object": {
                                                "type": "ThisExpression"
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "name": "_"
                                              }
                                            }
                                          }
                                        },
                                        {
                                          "type": "BreakStatement",
                                          "label": null
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
                                  "type": "MemberExpression",
                                  "computed": false,
                                  "object": {
                                    "type": "Identifier",
                                    "name": "sibling"
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "name": "C"
                                  }
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
                                  "name": "node"
                                },
                                "right": {
                                  "type": "Identifier",
                                  "name": "parent"
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
                                  "name": "parent"
                                },
                                "right": {
                                  "type": "MemberExpression",
                                  "computed": false,
                                  "object": {
                                    "type": "Identifier",
                                    "name": "parent"
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "name": "U"
                                  }
                                }
                              }
                            }
                          ]
                        },
                        "test": {
                          "type": "UnaryExpression",
                          "operator": "!",
                          "argument": {
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "name": "node"
                            },
                            "property": {
                              "type": "Identifier",
                              "name": "C"
                            }
                          },
                          "prefix": true
                        }
                      },
                      {
                        "type": "IfStatement",
                        "test": {
                          "type": "Identifier",
                          "name": "node"
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
                                "name": "node"
                              },
                              "property": {
                                "type": "Identifier",
                                "name": "C"
                              }
                            },
                            "right": {
                              "type": "Literal",
                              "value": false,
                              "raw": "false"
                            }
                          }
                        },
                        "alternate": null
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
      },
      {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "name": "d3_geom_voronoiRedBlackRotateLeft"
        },
        "params": [
          {
            "type": "Identifier",
            "name": "tree"
          },
          {
            "type": "Identifier",
            "name": "node"
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
                    "name": "p"
                  },
                  "init": {
                    "type": "Identifier",
                    "name": "node"
                  }
                },
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "name": "q"
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
                      "name": "R"
                    }
                  }
                },
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "name": "parent"
                  },
                  "init": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "name": "p"
                    },
                    "property": {
                      "type": "Identifier",
                      "name": "U"
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
                "name": "parent"
              },
              "consequent": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "IfStatement",
                    "test": {
                      "type": "BinaryExpression",
                      "operator": "===",
                      "left": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "name": "parent"
                        },
                        "property": {
                          "type": "Identifier",
                          "name": "L"
                        }
                      },
                      "right": {
                        "type": "Identifier",
                        "name": "p"
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
                            "name": "parent"
                          },
                          "property": {
                            "type": "Identifier",
                            "name": "L"
                          }
                        },
                        "right": {
                          "type": "Identifier",
                          "name": "q"
                        }
                      }
                    },
                    "alternate": {
                      "type": "ExpressionStatement",
                      "expression": {
                        "type": "AssignmentExpression",
                        "operator": "=",
                        "left": {
                          "type": "MemberExpression",
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "name": "parent"
                          },
                          "property": {
                            "type": "Identifier",
                            "name": "R"
                          }
                        },
                        "right": {
                          "type": "Identifier",
                          "name": "q"
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
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "name": "tree"
                        },
                        "property": {
                          "type": "Identifier",
                          "name": "_"
                        }
                      },
                      "right": {
                        "type": "Identifier",
                        "name": "q"
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
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "name": "q"
                  },
                  "property": {
                    "type": "Identifier",
                    "name": "U"
                  }
                },
                "right": {
                  "type": "Identifier",
                  "name": "parent"
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
                    "name": "p"
                  },
                  "property": {
                    "type": "Identifier",
                    "name": "U"
                  }
                },
                "right": {
                  "type": "Identifier",
                  "name": "q"
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
                    "name": "p"
                  },
                  "property": {
                    "type": "Identifier",
                    "name": "R"
                  }
                },
                "right": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "name": "q"
                  },
                  "property": {
                    "type": "Identifier",
                    "name": "L"
                  }
                }
              }
            },
            {
              "type": "IfStatement",
              "test": {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "name": "p"
                },
                "property": {
                  "type": "Identifier",
                  "name": "R"
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
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "name": "p"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "R"
                      }
                    },
                    "property": {
                      "type": "Identifier",
                      "name": "U"
                    }
                  },
                  "right": {
                    "type": "Identifier",
                    "name": "p"
                  }
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
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "name": "q"
                  },
                  "property": {
                    "type": "Identifier",
                    "name": "L"
                  }
                },
                "right": {
                  "type": "Identifier",
                  "name": "p"
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
          "name": "d3_geom_voronoiRedBlackRotateRight"
        },
        "params": [
          {
            "type": "Identifier",
            "name": "tree"
          },
          {
            "type": "Identifier",
            "name": "node"
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
                    "name": "p"
                  },
                  "init": {
                    "type": "Identifier",
                    "name": "node"
                  }
                },
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "name": "q"
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
                      "name": "L"
                    }
                  }
                },
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "name": "parent"
                  },
                  "init": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "name": "p"
                    },
                    "property": {
                      "type": "Identifier",
                      "name": "U"
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
                "name": "parent"
              },
              "consequent": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "IfStatement",
                    "test": {
                      "type": "BinaryExpression",
                      "operator": "===",
                      "left": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "name": "parent"
                        },
                        "property": {
                          "type": "Identifier",
                          "name": "L"
                        }
                      },
                      "right": {
                        "type": "Identifier",
                        "name": "p"
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
                            "name": "parent"
                          },
                          "property": {
                            "type": "Identifier",
                            "name": "L"
                          }
                        },
                        "right": {
                          "type": "Identifier",
                          "name": "q"
                        }
                      }
                    },
                    "alternate": {
                      "type": "ExpressionStatement",
                      "expression": {
                        "type": "AssignmentExpression",
                        "operator": "=",
                        "left": {
                          "type": "MemberExpression",
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "name": "parent"
                          },
                          "property": {
                            "type": "Identifier",
                            "name": "R"
                          }
                        },
                        "right": {
                          "type": "Identifier",
                          "name": "q"
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
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "name": "tree"
                        },
                        "property": {
                          "type": "Identifier",
                          "name": "_"
                        }
                      },
                      "right": {
                        "type": "Identifier",
                        "name": "q"
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
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "name": "q"
                  },
                  "property": {
                    "type": "Identifier",
                    "name": "U"
                  }
                },
                "right": {
                  "type": "Identifier",
                  "name": "parent"
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
                    "name": "p"
                  },
                  "property": {
                    "type": "Identifier",
                    "name": "U"
                  }
                },
                "right": {
                  "type": "Identifier",
                  "name": "q"
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
                    "name": "p"
                  },
                  "property": {
                    "type": "Identifier",
                    "name": "L"
                  }
                },
                "right": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "name": "q"
                  },
                  "property": {
                    "type": "Identifier",
                    "name": "R"
                  }
                }
              }
            },
            {
              "type": "IfStatement",
              "test": {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "name": "p"
                },
                "property": {
                  "type": "Identifier",
                  "name": "L"
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
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "name": "p"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "L"
                      }
                    },
                    "property": {
                      "type": "Identifier",
                      "name": "U"
                    }
                  },
                  "right": {
                    "type": "Identifier",
                    "name": "p"
                  }
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
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "name": "q"
                  },
                  "property": {
                    "type": "Identifier",
                    "name": "R"
                  }
                },
                "right": {
                  "type": "Identifier",
                  "name": "p"
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
          "name": "d3_geom_voronoiRedBlackFirst"
        },
        "params": [
          {
            "type": "Identifier",
            "name": "node"
          }
        ],
        "defaults": [],
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "WhileStatement",
              "test": {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "name": "node"
                },
                "property": {
                  "type": "Identifier",
                  "name": "L"
                }
              },
              "body": {
                "type": "ExpressionStatement",
                "expression": {
                  "type": "AssignmentExpression",
                  "operator": "=",
                  "left": {
                    "type": "Identifier",
                    "name": "node"
                  },
                  "right": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "name": "node"
                    },
                    "property": {
                      "type": "Identifier",
                      "name": "L"
                    }
                  }
                }
              }
            },
            {
              "type": "ReturnStatement",
              "argument": {
                "type": "Identifier",
                "name": "node"
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
  "src": "function d3_geom_voronoiRedBlackTree() {\n    this._ = null;\n}\nfunction d3_geom_voronoiRedBlackNode(node) {\n    node.U = node.C = node.L = node.R = node.P = node.N = null;\n}\nd3_geom_voronoiRedBlackTree.prototype = {\n    insert: function (after, node) {\n        var parent, grandpa, uncle;\n        if (after) {\n            node.P = after;\n            node.N = after.N;\n            if (after.N)\n                after.N.P = node;\n            after.N = node;\n            if (after.R) {\n                after = after.R;\n                while (after.L)\n                    after = after.L;\n                after.L = node;\n            } else {\n                after.R = node;\n            }\n            parent = after;\n        } else if (this._) {\n            after = d3_geom_voronoiRedBlackFirst(this._);\n            node.P = null;\n            node.N = after;\n            after.P = after.L = node;\n            parent = after;\n        } else {\n            node.P = node.N = null;\n            this._ = node;\n            parent = null;\n        }\n        node.L = node.R = null;\n        node.U = parent;\n        node.C = true;\n        after = node;\n        while (parent && parent.C) {\n            grandpa = parent.U;\n            if (parent === grandpa.L) {\n                uncle = grandpa.R;\n                if (uncle && uncle.C) {\n                    parent.C = uncle.C = false;\n                    grandpa.C = true;\n                    after = grandpa;\n                } else {\n                    if (after === parent.R) {\n                        d3_geom_voronoiRedBlackRotateLeft(this, parent);\n                        after = parent;\n                        parent = after.U;\n                    }\n                    parent.C = false;\n                    grandpa.C = true;\n                    d3_geom_voronoiRedBlackRotateRight(this, grandpa);\n                }\n            } else {\n                uncle = grandpa.L;\n                if (uncle && uncle.C) {\n                    parent.C = uncle.C = false;\n                    grandpa.C = true;\n                    after = grandpa;\n                } else {\n                    if (after === parent.L) {\n                        d3_geom_voronoiRedBlackRotateRight(this, parent);\n                        after = parent;\n                        parent = after.U;\n                    }\n                    parent.C = false;\n                    grandpa.C = true;\n                    d3_geom_voronoiRedBlackRotateLeft(this, grandpa);\n                }\n            }\n            parent = after.U;\n        }\n        this._.C = false;\n    },\n    remove: function (node) {\n        if (node.N)\n            node.N.P = node.P;\n        if (node.P)\n            node.P.N = node.N;\n        node.N = node.P = null;\n        var parent = node.U, sibling, left = node.L, right = node.R, next, red;\n        if (!left)\n            next = right;\n        else if (!right)\n            next = left;\n        else\n            next = d3_geom_voronoiRedBlackFirst(right);\n        if (parent) {\n            if (parent.L === node)\n                parent.L = next;\n            else\n                parent.R = next;\n        } else {\n            this._ = next;\n        }\n        if (left && right) {\n            red = next.C;\n            next.C = node.C;\n            next.L = left;\n            left.U = next;\n            if (next !== right) {\n                parent = next.U;\n                next.U = node.U;\n                node = next.R;\n                parent.L = node;\n                next.R = right;\n                right.U = next;\n            } else {\n                next.U = parent;\n                parent = next;\n                node = next.R;\n            }\n        } else {\n            red = node.C;\n            node = next;\n        }\n        if (node)\n            node.U = parent;\n        if (red)\n            return;\n        if (node && node.C) {\n            node.C = false;\n            return;\n        }\n        do {\n            if (node === this._)\n                break;\n            if (node === parent.L) {\n                sibling = parent.R;\n                if (sibling.C) {\n                    sibling.C = false;\n                    parent.C = true;\n                    d3_geom_voronoiRedBlackRotateLeft(this, parent);\n                    sibling = parent.R;\n                }\n                if (sibling.L && sibling.L.C || sibling.R && sibling.R.C) {\n                    if (!sibling.R || !sibling.R.C) {\n                        sibling.L.C = false;\n                        sibling.C = true;\n                        d3_geom_voronoiRedBlackRotateRight(this, sibling);\n                        sibling = parent.R;\n                    }\n                    sibling.C = parent.C;\n                    parent.C = sibling.R.C = false;\n                    d3_geom_voronoiRedBlackRotateLeft(this, parent);\n                    node = this._;\n                    break;\n                }\n            } else {\n                sibling = parent.L;\n                if (sibling.C) {\n                    sibling.C = false;\n                    parent.C = true;\n                    d3_geom_voronoiRedBlackRotateRight(this, parent);\n                    sibling = parent.L;\n                }\n                if (sibling.L && sibling.L.C || sibling.R && sibling.R.C) {\n                    if (!sibling.L || !sibling.L.C) {\n                        sibling.R.C = false;\n                        sibling.C = true;\n                        d3_geom_voronoiRedBlackRotateLeft(this, sibling);\n                        sibling = parent.L;\n                    }\n                    sibling.C = parent.C;\n                    parent.C = sibling.L.C = false;\n                    d3_geom_voronoiRedBlackRotateRight(this, parent);\n                    node = this._;\n                    break;\n                }\n            }\n            sibling.C = true;\n            node = parent;\n            parent = parent.U;\n        } while (!node.C);\n        if (node)\n            node.C = false;\n    }\n};\nfunction d3_geom_voronoiRedBlackRotateLeft(tree, node) {\n    var p = node, q = node.R, parent = p.U;\n    if (parent) {\n        if (parent.L === p)\n            parent.L = q;\n        else\n            parent.R = q;\n    } else {\n        tree._ = q;\n    }\n    q.U = parent;\n    p.U = q;\n    p.R = q.L;\n    if (p.R)\n        p.R.U = p;\n    q.L = p;\n}\nfunction d3_geom_voronoiRedBlackRotateRight(tree, node) {\n    var p = node, q = node.L, parent = p.U;\n    if (parent) {\n        if (parent.L === p)\n            parent.L = q;\n        else\n            parent.R = q;\n    } else {\n        tree._ = q;\n    }\n    q.U = parent;\n    p.U = q;\n    p.L = q.R;\n    if (p.L)\n        p.L.U = p;\n    q.R = p;\n}\nfunction d3_geom_voronoiRedBlackFirst(node) {\n    while (node.L)\n        node = node.L;\n    return node;\n}"
}