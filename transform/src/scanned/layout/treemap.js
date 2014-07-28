{
  "filepath": "/layout/treemap.js",
  "shared": [],
  "dependencies": [
    "d3.layout.hierarchy",
    "d3_layout_hierarchyRebind"
  ],
  "helpers": [
    "d3_layout_treemapPadNull",
    "d3_layout_treemapPad"
  ],
  "exports": [
    "d3.layout.treemap"
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
                "name": "layout"
              }
            },
            "property": {
              "type": "Identifier",
              "name": "treemap"
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
                        "name": "hierarchy"
                      },
                      "init": {
                        "type": "CallExpression",
                        "callee": {
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
                              "name": "layout"
                            }
                          },
                          "property": {
                            "type": "Identifier",
                            "name": "hierarchy"
                          }
                        },
                        "arguments": []
                      }
                    },
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "name": "round"
                      },
                      "init": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "name": "Math"
                        },
                        "property": {
                          "type": "Identifier",
                          "name": "round"
                        }
                      }
                    },
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "name": "size"
                      },
                      "init": {
                        "type": "ArrayExpression",
                        "elements": [
                          {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1"
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
                        "name": "padding"
                      },
                      "init": {
                        "type": "Literal",
                        "value": null,
                        "raw": "null"
                      }
                    },
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "name": "pad"
                      },
                      "init": {
                        "type": "Identifier",
                        "name": "d3_layout_treemapPadNull"
                      }
                    },
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "name": "sticky"
                      },
                      "init": {
                        "type": "Literal",
                        "value": false,
                        "raw": "false"
                      }
                    },
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "name": "stickies"
                      },
                      "init": null
                    },
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "name": "mode"
                      },
                      "init": {
                        "type": "Literal",
                        "value": "squarify",
                        "raw": "\"squarify\""
                      }
                    },
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "name": "ratio"
                      },
                      "init": {
                        "type": "BinaryExpression",
                        "operator": "*",
                        "left": {
                          "type": "Literal",
                          "value": 0.5,
                          "raw": "0.5"
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
                                "value": 5,
                                "raw": "5"
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
                  "type": "FunctionDeclaration",
                  "id": {
                    "type": "Identifier",
                    "name": "scale"
                  },
                  "params": [
                    {
                      "type": "Identifier",
                      "name": "children"
                    },
                    {
                      "type": "Identifier",
                      "name": "k"
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
                                "name": "children"
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
                              "name": "child"
                            },
                            "init": null
                          },
                          {
                            "type": "VariableDeclarator",
                            "id": {
                              "type": "Identifier",
                              "name": "area"
                            },
                            "init": null
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
                                "type": "AssignmentExpression",
                                "operator": "=",
                                "left": {
                                  "type": "Identifier",
                                  "name": "area"
                                },
                                "right": {
                                  "type": "BinaryExpression",
                                  "operator": "*",
                                  "left": {
                                    "type": "MemberExpression",
                                    "computed": false,
                                    "object": {
                                      "type": "AssignmentExpression",
                                      "operator": "=",
                                      "left": {
                                        "type": "Identifier",
                                        "name": "child"
                                      },
                                      "right": {
                                        "type": "MemberExpression",
                                        "computed": true,
                                        "object": {
                                          "type": "Identifier",
                                          "name": "children"
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "name": "i"
                                        }
                                      }
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "name": "value"
                                    }
                                  },
                                  "right": {
                                    "type": "ConditionalExpression",
                                    "test": {
                                      "type": "BinaryExpression",
                                      "operator": "<",
                                      "left": {
                                        "type": "Identifier",
                                        "name": "k"
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
                                      "type": "Identifier",
                                      "name": "k"
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
                                    "name": "child"
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "name": "area"
                                  }
                                },
                                "right": {
                                  "type": "ConditionalExpression",
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
                                          "name": "area"
                                        }
                                      ]
                                    },
                                    "right": {
                                      "type": "BinaryExpression",
                                      "operator": "<=",
                                      "left": {
                                        "type": "Identifier",
                                        "name": "area"
                                      },
                                      "right": {
                                        "type": "Literal",
                                        "value": 0,
                                        "raw": "0"
                                      }
                                    }
                                  },
                                  "consequent": {
                                    "type": "Literal",
                                    "value": 0,
                                    "raw": "0"
                                  },
                                  "alternate": {
                                    "type": "Identifier",
                                    "name": "area"
                                  }
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
                    "name": "squarify"
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
                        "type": "VariableDeclaration",
                        "declarations": [
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
                                "name": "children"
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
                            "type": "Identifier",
                            "name": "children"
                          },
                          "right": {
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "name": "children"
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
                              "type": "VariableDeclaration",
                              "declarations": [
                                {
                                  "type": "VariableDeclarator",
                                  "id": {
                                    "type": "Identifier",
                                    "name": "rect"
                                  },
                                  "init": {
                                    "type": "CallExpression",
                                    "callee": {
                                      "type": "Identifier",
                                      "name": "pad"
                                    },
                                    "arguments": [
                                      {
                                        "type": "Identifier",
                                        "name": "node"
                                      }
                                    ]
                                  }
                                },
                                {
                                  "type": "VariableDeclarator",
                                  "id": {
                                    "type": "Identifier",
                                    "name": "row"
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
                                    "name": "remaining"
                                  },
                                  "init": {
                                    "type": "CallExpression",
                                    "callee": {
                                      "type": "MemberExpression",
                                      "computed": false,
                                      "object": {
                                        "type": "Identifier",
                                        "name": "children"
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "name": "slice"
                                      }
                                    },
                                    "arguments": []
                                  }
                                },
                                {
                                  "type": "VariableDeclarator",
                                  "id": {
                                    "type": "Identifier",
                                    "name": "child"
                                  },
                                  "init": null
                                },
                                {
                                  "type": "VariableDeclarator",
                                  "id": {
                                    "type": "Identifier",
                                    "name": "best"
                                  },
                                  "init": {
                                    "type": "Identifier",
                                    "name": "Infinity"
                                  }
                                },
                                {
                                  "type": "VariableDeclarator",
                                  "id": {
                                    "type": "Identifier",
                                    "name": "score"
                                  },
                                  "init": null
                                },
                                {
                                  "type": "VariableDeclarator",
                                  "id": {
                                    "type": "Identifier",
                                    "name": "u"
                                  },
                                  "init": {
                                    "type": "ConditionalExpression",
                                    "test": {
                                      "type": "BinaryExpression",
                                      "operator": "===",
                                      "left": {
                                        "type": "Identifier",
                                        "name": "mode"
                                      },
                                      "right": {
                                        "type": "Literal",
                                        "value": "slice",
                                        "raw": "\"slice\""
                                      }
                                    },
                                    "consequent": {
                                      "type": "MemberExpression",
                                      "computed": false,
                                      "object": {
                                        "type": "Identifier",
                                        "name": "rect"
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "name": "dx"
                                      }
                                    },
                                    "alternate": {
                                      "type": "ConditionalExpression",
                                      "test": {
                                        "type": "BinaryExpression",
                                        "operator": "===",
                                        "left": {
                                          "type": "Identifier",
                                          "name": "mode"
                                        },
                                        "right": {
                                          "type": "Literal",
                                          "value": "dice",
                                          "raw": "\"dice\""
                                        }
                                      },
                                      "consequent": {
                                        "type": "MemberExpression",
                                        "computed": false,
                                        "object": {
                                          "type": "Identifier",
                                          "name": "rect"
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "name": "dy"
                                        }
                                      },
                                      "alternate": {
                                        "type": "ConditionalExpression",
                                        "test": {
                                          "type": "BinaryExpression",
                                          "operator": "===",
                                          "left": {
                                            "type": "Identifier",
                                            "name": "mode"
                                          },
                                          "right": {
                                            "type": "Literal",
                                            "value": "slice-dice",
                                            "raw": "\"slice-dice\""
                                          }
                                        },
                                        "consequent": {
                                          "type": "ConditionalExpression",
                                          "test": {
                                            "type": "BinaryExpression",
                                            "operator": "&",
                                            "left": {
                                              "type": "MemberExpression",
                                              "computed": false,
                                              "object": {
                                                "type": "Identifier",
                                                "name": "node"
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "name": "depth"
                                              }
                                            },
                                            "right": {
                                              "type": "Literal",
                                              "value": 1,
                                              "raw": "1"
                                            }
                                          },
                                          "consequent": {
                                            "type": "MemberExpression",
                                            "computed": false,
                                            "object": {
                                              "type": "Identifier",
                                              "name": "rect"
                                            },
                                            "property": {
                                              "type": "Identifier",
                                              "name": "dy"
                                            }
                                          },
                                          "alternate": {
                                            "type": "MemberExpression",
                                            "computed": false,
                                            "object": {
                                              "type": "Identifier",
                                              "name": "rect"
                                            },
                                            "property": {
                                              "type": "Identifier",
                                              "name": "dx"
                                            }
                                          }
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
                                              "name": "min"
                                            }
                                          },
                                          "arguments": [
                                            {
                                              "type": "MemberExpression",
                                              "computed": false,
                                              "object": {
                                                "type": "Identifier",
                                                "name": "rect"
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "name": "dx"
                                              }
                                            },
                                            {
                                              "type": "MemberExpression",
                                              "computed": false,
                                              "object": {
                                                "type": "Identifier",
                                                "name": "rect"
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "name": "dy"
                                              }
                                            }
                                          ]
                                        }
                                      }
                                    }
                                  }
                                },
                                {
                                  "type": "VariableDeclarator",
                                  "id": {
                                    "type": "Identifier",
                                    "name": "n"
                                  },
                                  "init": null
                                }
                              ],
                              "kind": "var"
                            },
                            {
                              "type": "ExpressionStatement",
                              "expression": {
                                "type": "CallExpression",
                                "callee": {
                                  "type": "Identifier",
                                  "name": "scale"
                                },
                                "arguments": [
                                  {
                                    "type": "Identifier",
                                    "name": "remaining"
                                  },
                                  {
                                    "type": "BinaryExpression",
                                    "operator": "/",
                                    "left": {
                                      "type": "BinaryExpression",
                                      "operator": "*",
                                      "left": {
                                        "type": "MemberExpression",
                                        "computed": false,
                                        "object": {
                                          "type": "Identifier",
                                          "name": "rect"
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "name": "dx"
                                        }
                                      },
                                      "right": {
                                        "type": "MemberExpression",
                                        "computed": false,
                                        "object": {
                                          "type": "Identifier",
                                          "name": "rect"
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "name": "dy"
                                        }
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
                                        "name": "value"
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
                                    "name": "row"
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "name": "area"
                                  }
                                },
                                "right": {
                                  "type": "Literal",
                                  "value": 0,
                                  "raw": "0"
                                }
                              }
                            },
                            {
                              "type": "WhileStatement",
                              "test": {
                                "type": "BinaryExpression",
                                "operator": ">",
                                "left": {
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
                                      "name": "remaining"
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "name": "length"
                                    }
                                  }
                                },
                                "right": {
                                  "type": "Literal",
                                  "value": 0,
                                  "raw": "0"
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
                                          "name": "row"
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "name": "push"
                                        }
                                      },
                                      "arguments": [
                                        {
                                          "type": "AssignmentExpression",
                                          "operator": "=",
                                          "left": {
                                            "type": "Identifier",
                                            "name": "child"
                                          },
                                          "right": {
                                            "type": "MemberExpression",
                                            "computed": true,
                                            "object": {
                                              "type": "Identifier",
                                              "name": "remaining"
                                            },
                                            "property": {
                                              "type": "BinaryExpression",
                                              "operator": "-",
                                              "left": {
                                                "type": "Identifier",
                                                "name": "n"
                                              },
                                              "right": {
                                                "type": "Literal",
                                                "value": 1,
                                                "raw": "1"
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
                                      "operator": "+=",
                                      "left": {
                                        "type": "MemberExpression",
                                        "computed": false,
                                        "object": {
                                          "type": "Identifier",
                                          "name": "row"
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "name": "area"
                                        }
                                      },
                                      "right": {
                                        "type": "MemberExpression",
                                        "computed": false,
                                        "object": {
                                          "type": "Identifier",
                                          "name": "child"
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "name": "area"
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
                                        "operator": "!==",
                                        "left": {
                                          "type": "Identifier",
                                          "name": "mode"
                                        },
                                        "right": {
                                          "type": "Literal",
                                          "value": "squarify",
                                          "raw": "\"squarify\""
                                        }
                                      },
                                      "right": {
                                        "type": "BinaryExpression",
                                        "operator": "<=",
                                        "left": {
                                          "type": "AssignmentExpression",
                                          "operator": "=",
                                          "left": {
                                            "type": "Identifier",
                                            "name": "score"
                                          },
                                          "right": {
                                            "type": "CallExpression",
                                            "callee": {
                                              "type": "Identifier",
                                              "name": "worst"
                                            },
                                            "arguments": [
                                              {
                                                "type": "Identifier",
                                                "name": "row"
                                              },
                                              {
                                                "type": "Identifier",
                                                "name": "u"
                                              }
                                            ]
                                          }
                                        },
                                        "right": {
                                          "type": "Identifier",
                                          "name": "best"
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
                                              "type": "MemberExpression",
                                              "computed": false,
                                              "object": {
                                                "type": "Identifier",
                                                "name": "remaining"
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "name": "pop"
                                              }
                                            },
                                            "arguments": []
                                          }
                                        },
                                        {
                                          "type": "ExpressionStatement",
                                          "expression": {
                                            "type": "AssignmentExpression",
                                            "operator": "=",
                                            "left": {
                                              "type": "Identifier",
                                              "name": "best"
                                            },
                                            "right": {
                                              "type": "Identifier",
                                              "name": "score"
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
                                            "operator": "-=",
                                            "left": {
                                              "type": "MemberExpression",
                                              "computed": false,
                                              "object": {
                                                "type": "Identifier",
                                                "name": "row"
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "name": "area"
                                              }
                                            },
                                            "right": {
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
                                                    "name": "pop"
                                                  }
                                                },
                                                "arguments": []
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "name": "area"
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
                                              "name": "position"
                                            },
                                            "arguments": [
                                              {
                                                "type": "Identifier",
                                                "name": "row"
                                              },
                                              {
                                                "type": "Identifier",
                                                "name": "u"
                                              },
                                              {
                                                "type": "Identifier",
                                                "name": "rect"
                                              },
                                              {
                                                "type": "Literal",
                                                "value": false,
                                                "raw": "false"
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
                                              "name": "u"
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
                                                  "name": "min"
                                                }
                                              },
                                              "arguments": [
                                                {
                                                  "type": "MemberExpression",
                                                  "computed": false,
                                                  "object": {
                                                    "type": "Identifier",
                                                    "name": "rect"
                                                  },
                                                  "property": {
                                                    "type": "Identifier",
                                                    "name": "dx"
                                                  }
                                                },
                                                {
                                                  "type": "MemberExpression",
                                                  "computed": false,
                                                  "object": {
                                                    "type": "Identifier",
                                                    "name": "rect"
                                                  },
                                                  "property": {
                                                    "type": "Identifier",
                                                    "name": "dy"
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
                                                "name": "row"
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "name": "length"
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
                                                  "name": "row"
                                                },
                                                "property": {
                                                  "type": "Identifier",
                                                  "name": "area"
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
                                        {
                                          "type": "ExpressionStatement",
                                          "expression": {
                                            "type": "AssignmentExpression",
                                            "operator": "=",
                                            "left": {
                                              "type": "Identifier",
                                              "name": "best"
                                            },
                                            "right": {
                                              "type": "Identifier",
                                              "name": "Infinity"
                                            }
                                          }
                                        }
                                      ]
                                    }
                                  }
                                ]
                              }
                            },
                            {
                              "type": "IfStatement",
                              "test": {
                                "type": "MemberExpression",
                                "computed": false,
                                "object": {
                                  "type": "Identifier",
                                  "name": "row"
                                },
                                "property": {
                                  "type": "Identifier",
                                  "name": "length"
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
                                        "name": "position"
                                      },
                                      "arguments": [
                                        {
                                          "type": "Identifier",
                                          "name": "row"
                                        },
                                        {
                                          "type": "Identifier",
                                          "name": "u"
                                        },
                                        {
                                          "type": "Identifier",
                                          "name": "rect"
                                        },
                                        {
                                          "type": "Literal",
                                          "value": true,
                                          "raw": "true"
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
                                          "name": "row"
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "name": "length"
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
                                            "name": "row"
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "name": "area"
                                          }
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
                              "type": "ExpressionStatement",
                              "expression": {
                                "type": "CallExpression",
                                "callee": {
                                  "type": "MemberExpression",
                                  "computed": false,
                                  "object": {
                                    "type": "Identifier",
                                    "name": "children"
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "name": "forEach"
                                  }
                                },
                                "arguments": [
                                  {
                                    "type": "Identifier",
                                    "name": "squarify"
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
                  "rest": null,
                  "generator": false,
                  "expression": false
                },
                {
                  "type": "FunctionDeclaration",
                  "id": {
                    "type": "Identifier",
                    "name": "stickify"
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
                        "type": "VariableDeclaration",
                        "declarations": [
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
                                "name": "children"
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
                            "type": "Identifier",
                            "name": "children"
                          },
                          "right": {
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "name": "children"
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
                              "type": "VariableDeclaration",
                              "declarations": [
                                {
                                  "type": "VariableDeclarator",
                                  "id": {
                                    "type": "Identifier",
                                    "name": "rect"
                                  },
                                  "init": {
                                    "type": "CallExpression",
                                    "callee": {
                                      "type": "Identifier",
                                      "name": "pad"
                                    },
                                    "arguments": [
                                      {
                                        "type": "Identifier",
                                        "name": "node"
                                      }
                                    ]
                                  }
                                },
                                {
                                  "type": "VariableDeclarator",
                                  "id": {
                                    "type": "Identifier",
                                    "name": "remaining"
                                  },
                                  "init": {
                                    "type": "CallExpression",
                                    "callee": {
                                      "type": "MemberExpression",
                                      "computed": false,
                                      "object": {
                                        "type": "Identifier",
                                        "name": "children"
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "name": "slice"
                                      }
                                    },
                                    "arguments": []
                                  }
                                },
                                {
                                  "type": "VariableDeclarator",
                                  "id": {
                                    "type": "Identifier",
                                    "name": "child"
                                  },
                                  "init": null
                                },
                                {
                                  "type": "VariableDeclarator",
                                  "id": {
                                    "type": "Identifier",
                                    "name": "row"
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
                                  "type": "Identifier",
                                  "name": "scale"
                                },
                                "arguments": [
                                  {
                                    "type": "Identifier",
                                    "name": "remaining"
                                  },
                                  {
                                    "type": "BinaryExpression",
                                    "operator": "/",
                                    "left": {
                                      "type": "BinaryExpression",
                                      "operator": "*",
                                      "left": {
                                        "type": "MemberExpression",
                                        "computed": false,
                                        "object": {
                                          "type": "Identifier",
                                          "name": "rect"
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "name": "dx"
                                        }
                                      },
                                      "right": {
                                        "type": "MemberExpression",
                                        "computed": false,
                                        "object": {
                                          "type": "Identifier",
                                          "name": "rect"
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "name": "dy"
                                        }
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
                                        "name": "value"
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
                                    "name": "row"
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "name": "area"
                                  }
                                },
                                "right": {
                                  "type": "Literal",
                                  "value": 0,
                                  "raw": "0"
                                }
                              }
                            },
                            {
                              "type": "WhileStatement",
                              "test": {
                                "type": "AssignmentExpression",
                                "operator": "=",
                                "left": {
                                  "type": "Identifier",
                                  "name": "child"
                                },
                                "right": {
                                  "type": "CallExpression",
                                  "callee": {
                                    "type": "MemberExpression",
                                    "computed": false,
                                    "object": {
                                      "type": "Identifier",
                                      "name": "remaining"
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "name": "pop"
                                    }
                                  },
                                  "arguments": []
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
                                          "name": "row"
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "name": "push"
                                        }
                                      },
                                      "arguments": [
                                        {
                                          "type": "Identifier",
                                          "name": "child"
                                        }
                                      ]
                                    }
                                  },
                                  {
                                    "type": "ExpressionStatement",
                                    "expression": {
                                      "type": "AssignmentExpression",
                                      "operator": "+=",
                                      "left": {
                                        "type": "MemberExpression",
                                        "computed": false,
                                        "object": {
                                          "type": "Identifier",
                                          "name": "row"
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "name": "area"
                                        }
                                      },
                                      "right": {
                                        "type": "MemberExpression",
                                        "computed": false,
                                        "object": {
                                          "type": "Identifier",
                                          "name": "child"
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "name": "area"
                                        }
                                      }
                                    }
                                  },
                                  {
                                    "type": "IfStatement",
                                    "test": {
                                      "type": "BinaryExpression",
                                      "operator": "!=",
                                      "left": {
                                        "type": "MemberExpression",
                                        "computed": false,
                                        "object": {
                                          "type": "Identifier",
                                          "name": "child"
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "name": "z"
                                        }
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
                                            "type": "CallExpression",
                                            "callee": {
                                              "type": "Identifier",
                                              "name": "position"
                                            },
                                            "arguments": [
                                              {
                                                "type": "Identifier",
                                                "name": "row"
                                              },
                                              {
                                                "type": "ConditionalExpression",
                                                "test": {
                                                  "type": "MemberExpression",
                                                  "computed": false,
                                                  "object": {
                                                    "type": "Identifier",
                                                    "name": "child"
                                                  },
                                                  "property": {
                                                    "type": "Identifier",
                                                    "name": "z"
                                                  }
                                                },
                                                "consequent": {
                                                  "type": "MemberExpression",
                                                  "computed": false,
                                                  "object": {
                                                    "type": "Identifier",
                                                    "name": "rect"
                                                  },
                                                  "property": {
                                                    "type": "Identifier",
                                                    "name": "dx"
                                                  }
                                                },
                                                "alternate": {
                                                  "type": "MemberExpression",
                                                  "computed": false,
                                                  "object": {
                                                    "type": "Identifier",
                                                    "name": "rect"
                                                  },
                                                  "property": {
                                                    "type": "Identifier",
                                                    "name": "dy"
                                                  }
                                                }
                                              },
                                              {
                                                "type": "Identifier",
                                                "name": "rect"
                                              },
                                              {
                                                "type": "UnaryExpression",
                                                "operator": "!",
                                                "argument": {
                                                  "type": "MemberExpression",
                                                  "computed": false,
                                                  "object": {
                                                    "type": "Identifier",
                                                    "name": "remaining"
                                                  },
                                                  "property": {
                                                    "type": "Identifier",
                                                    "name": "length"
                                                  }
                                                },
                                                "prefix": true
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
                                                "name": "row"
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "name": "length"
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
                                                  "name": "row"
                                                },
                                                "property": {
                                                  "type": "Identifier",
                                                  "name": "area"
                                                }
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
                                    "name": "children"
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "name": "forEach"
                                  }
                                },
                                "arguments": [
                                  {
                                    "type": "Identifier",
                                    "name": "stickify"
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
                  "rest": null,
                  "generator": false,
                  "expression": false
                },
                {
                  "type": "FunctionDeclaration",
                  "id": {
                    "type": "Identifier",
                    "name": "worst"
                  },
                  "params": [
                    {
                      "type": "Identifier",
                      "name": "row"
                    },
                    {
                      "type": "Identifier",
                      "name": "u"
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
                            "init": {
                              "type": "MemberExpression",
                              "computed": false,
                              "object": {
                                "type": "Identifier",
                                "name": "row"
                              },
                              "property": {
                                "type": "Identifier",
                                "name": "area"
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
                          },
                          {
                            "type": "VariableDeclarator",
                            "id": {
                              "type": "Identifier",
                              "name": "rmax"
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
                              "name": "rmin"
                            },
                            "init": {
                              "type": "Identifier",
                              "name": "Infinity"
                            }
                          },
                          {
                            "type": "VariableDeclarator",
                            "id": {
                              "type": "Identifier",
                              "name": "i"
                            },
                            "init": {
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
                                "name": "row"
                              },
                              "property": {
                                "type": "Identifier",
                                "name": "length"
                              }
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
                              "type": "IfStatement",
                              "test": {
                                "type": "UnaryExpression",
                                "operator": "!",
                                "argument": {
                                  "type": "AssignmentExpression",
                                  "operator": "=",
                                  "left": {
                                    "type": "Identifier",
                                    "name": "r"
                                  },
                                  "right": {
                                    "type": "MemberExpression",
                                    "computed": false,
                                    "object": {
                                      "type": "MemberExpression",
                                      "computed": true,
                                      "object": {
                                        "type": "Identifier",
                                        "name": "row"
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "name": "i"
                                      }
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "name": "area"
                                    }
                                  }
                                },
                                "prefix": true
                              },
                              "consequent": {
                                "type": "ContinueStatement",
                                "label": null
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
                                  "name": "rmin"
                                }
                              },
                              "consequent": {
                                "type": "ExpressionStatement",
                                "expression": {
                                  "type": "AssignmentExpression",
                                  "operator": "=",
                                  "left": {
                                    "type": "Identifier",
                                    "name": "rmin"
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "name": "r"
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
                                  "name": "r"
                                },
                                "right": {
                                  "type": "Identifier",
                                  "name": "rmax"
                                }
                              },
                              "consequent": {
                                "type": "ExpressionStatement",
                                "expression": {
                                  "type": "AssignmentExpression",
                                  "operator": "=",
                                  "left": {
                                    "type": "Identifier",
                                    "name": "rmax"
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
                        }
                      },
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "AssignmentExpression",
                          "operator": "*=",
                          "left": {
                            "type": "Identifier",
                            "name": "s"
                          },
                          "right": {
                            "type": "Identifier",
                            "name": "s"
                          }
                        }
                      },
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "AssignmentExpression",
                          "operator": "*=",
                          "left": {
                            "type": "Identifier",
                            "name": "u"
                          },
                          "right": {
                            "type": "Identifier",
                            "name": "u"
                          }
                        }
                      },
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "ConditionalExpression",
                          "test": {
                            "type": "Identifier",
                            "name": "s"
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
                                "name": "max"
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
                                    "operator": "*",
                                    "left": {
                                      "type": "Identifier",
                                      "name": "u"
                                    },
                                    "right": {
                                      "type": "Identifier",
                                      "name": "rmax"
                                    }
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "name": "ratio"
                                  }
                                },
                                "right": {
                                  "type": "Identifier",
                                  "name": "s"
                                }
                              },
                              {
                                "type": "BinaryExpression",
                                "operator": "/",
                                "left": {
                                  "type": "Identifier",
                                  "name": "s"
                                },
                                "right": {
                                  "type": "BinaryExpression",
                                  "operator": "*",
                                  "left": {
                                    "type": "BinaryExpression",
                                    "operator": "*",
                                    "left": {
                                      "type": "Identifier",
                                      "name": "u"
                                    },
                                    "right": {
                                      "type": "Identifier",
                                      "name": "rmin"
                                    }
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "name": "ratio"
                                  }
                                }
                              }
                            ]
                          },
                          "alternate": {
                            "type": "Identifier",
                            "name": "Infinity"
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
                    "name": "position"
                  },
                  "params": [
                    {
                      "type": "Identifier",
                      "name": "row"
                    },
                    {
                      "type": "Identifier",
                      "name": "u"
                    },
                    {
                      "type": "Identifier",
                      "name": "rect"
                    },
                    {
                      "type": "Identifier",
                      "name": "flush"
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
                                "name": "row"
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
                              "name": "x"
                            },
                            "init": {
                              "type": "MemberExpression",
                              "computed": false,
                              "object": {
                                "type": "Identifier",
                                "name": "rect"
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
                              "name": "y"
                            },
                            "init": {
                              "type": "MemberExpression",
                              "computed": false,
                              "object": {
                                "type": "Identifier",
                                "name": "rect"
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
                              "name": "v"
                            },
                            "init": {
                              "type": "ConditionalExpression",
                              "test": {
                                "type": "Identifier",
                                "name": "u"
                              },
                              "consequent": {
                                "type": "CallExpression",
                                "callee": {
                                  "type": "Identifier",
                                  "name": "round"
                                },
                                "arguments": [
                                  {
                                    "type": "BinaryExpression",
                                    "operator": "/",
                                    "left": {
                                      "type": "MemberExpression",
                                      "computed": false,
                                      "object": {
                                        "type": "Identifier",
                                        "name": "row"
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "name": "area"
                                      }
                                    },
                                    "right": {
                                      "type": "Identifier",
                                      "name": "u"
                                    }
                                  }
                                ]
                              },
                              "alternate": {
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
                              "name": "o"
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
                          "operator": "==",
                          "left": {
                            "type": "Identifier",
                            "name": "u"
                          },
                          "right": {
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "name": "rect"
                            },
                            "property": {
                              "type": "Identifier",
                              "name": "dx"
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
                                  "type": "Identifier",
                                  "name": "flush"
                                },
                                "right": {
                                  "type": "BinaryExpression",
                                  "operator": ">",
                                  "left": {
                                    "type": "Identifier",
                                    "name": "v"
                                  },
                                  "right": {
                                    "type": "MemberExpression",
                                    "computed": false,
                                    "object": {
                                      "type": "Identifier",
                                      "name": "rect"
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "name": "dy"
                                    }
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
                                    "name": "v"
                                  },
                                  "right": {
                                    "type": "MemberExpression",
                                    "computed": false,
                                    "object": {
                                      "type": "Identifier",
                                      "name": "rect"
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "name": "dy"
                                    }
                                  }
                                }
                              },
                              "alternate": null
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
                                      "type": "AssignmentExpression",
                                      "operator": "=",
                                      "left": {
                                        "type": "Identifier",
                                        "name": "o"
                                      },
                                      "right": {
                                        "type": "MemberExpression",
                                        "computed": true,
                                        "object": {
                                          "type": "Identifier",
                                          "name": "row"
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "name": "i"
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
                                          "name": "o"
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
                                          "name": "o"
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
                                          "name": "o"
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "name": "dy"
                                        }
                                      },
                                      "right": {
                                        "type": "Identifier",
                                        "name": "v"
                                      }
                                    }
                                  },
                                  {
                                    "type": "ExpressionStatement",
                                    "expression": {
                                      "type": "AssignmentExpression",
                                      "operator": "+=",
                                      "left": {
                                        "type": "Identifier",
                                        "name": "x"
                                      },
                                      "right": {
                                        "type": "AssignmentExpression",
                                        "operator": "=",
                                        "left": {
                                          "type": "MemberExpression",
                                          "computed": false,
                                          "object": {
                                            "type": "Identifier",
                                            "name": "o"
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "name": "dx"
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
                                              "name": "min"
                                            }
                                          },
                                          "arguments": [
                                            {
                                              "type": "BinaryExpression",
                                              "operator": "-",
                                              "left": {
                                                "type": "BinaryExpression",
                                                "operator": "+",
                                                "left": {
                                                  "type": "MemberExpression",
                                                  "computed": false,
                                                  "object": {
                                                    "type": "Identifier",
                                                    "name": "rect"
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
                                                    "name": "rect"
                                                  },
                                                  "property": {
                                                    "type": "Identifier",
                                                    "name": "dx"
                                                  }
                                                }
                                              },
                                              "right": {
                                                "type": "Identifier",
                                                "name": "x"
                                              }
                                            },
                                            {
                                              "type": "ConditionalExpression",
                                              "test": {
                                                "type": "Identifier",
                                                "name": "v"
                                              },
                                              "consequent": {
                                                "type": "CallExpression",
                                                "callee": {
                                                  "type": "Identifier",
                                                  "name": "round"
                                                },
                                                "arguments": [
                                                  {
                                                    "type": "BinaryExpression",
                                                    "operator": "/",
                                                    "left": {
                                                      "type": "MemberExpression",
                                                      "computed": false,
                                                      "object": {
                                                        "type": "Identifier",
                                                        "name": "o"
                                                      },
                                                      "property": {
                                                        "type": "Identifier",
                                                        "name": "area"
                                                      }
                                                    },
                                                    "right": {
                                                      "type": "Identifier",
                                                      "name": "v"
                                                    }
                                                  }
                                                ]
                                              },
                                              "alternate": {
                                                "type": "Literal",
                                                "value": 0,
                                                "raw": "0"
                                              }
                                            }
                                          ]
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
                                    "type": "Identifier",
                                    "name": "o"
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "name": "z"
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
                                "operator": "+=",
                                "left": {
                                  "type": "MemberExpression",
                                  "computed": false,
                                  "object": {
                                    "type": "Identifier",
                                    "name": "o"
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "name": "dx"
                                  }
                                },
                                "right": {
                                  "type": "BinaryExpression",
                                  "operator": "-",
                                  "left": {
                                    "type": "BinaryExpression",
                                    "operator": "+",
                                    "left": {
                                      "type": "MemberExpression",
                                      "computed": false,
                                      "object": {
                                        "type": "Identifier",
                                        "name": "rect"
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
                                        "name": "rect"
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "name": "dx"
                                      }
                                    }
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "name": "x"
                                  }
                                }
                              }
                            },
                            {
                              "type": "ExpressionStatement",
                              "expression": {
                                "type": "AssignmentExpression",
                                "operator": "+=",
                                "left": {
                                  "type": "MemberExpression",
                                  "computed": false,
                                  "object": {
                                    "type": "Identifier",
                                    "name": "rect"
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "name": "y"
                                  }
                                },
                                "right": {
                                  "type": "Identifier",
                                  "name": "v"
                                }
                              }
                            },
                            {
                              "type": "ExpressionStatement",
                              "expression": {
                                "type": "AssignmentExpression",
                                "operator": "-=",
                                "left": {
                                  "type": "MemberExpression",
                                  "computed": false,
                                  "object": {
                                    "type": "Identifier",
                                    "name": "rect"
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "name": "dy"
                                  }
                                },
                                "right": {
                                  "type": "Identifier",
                                  "name": "v"
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
                                "type": "LogicalExpression",
                                "operator": "||",
                                "left": {
                                  "type": "Identifier",
                                  "name": "flush"
                                },
                                "right": {
                                  "type": "BinaryExpression",
                                  "operator": ">",
                                  "left": {
                                    "type": "Identifier",
                                    "name": "v"
                                  },
                                  "right": {
                                    "type": "MemberExpression",
                                    "computed": false,
                                    "object": {
                                      "type": "Identifier",
                                      "name": "rect"
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "name": "dx"
                                    }
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
                                    "name": "v"
                                  },
                                  "right": {
                                    "type": "MemberExpression",
                                    "computed": false,
                                    "object": {
                                      "type": "Identifier",
                                      "name": "rect"
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "name": "dx"
                                    }
                                  }
                                }
                              },
                              "alternate": null
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
                                      "type": "AssignmentExpression",
                                      "operator": "=",
                                      "left": {
                                        "type": "Identifier",
                                        "name": "o"
                                      },
                                      "right": {
                                        "type": "MemberExpression",
                                        "computed": true,
                                        "object": {
                                          "type": "Identifier",
                                          "name": "row"
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "name": "i"
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
                                          "name": "o"
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
                                          "name": "o"
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
                                          "name": "o"
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "name": "dx"
                                        }
                                      },
                                      "right": {
                                        "type": "Identifier",
                                        "name": "v"
                                      }
                                    }
                                  },
                                  {
                                    "type": "ExpressionStatement",
                                    "expression": {
                                      "type": "AssignmentExpression",
                                      "operator": "+=",
                                      "left": {
                                        "type": "Identifier",
                                        "name": "y"
                                      },
                                      "right": {
                                        "type": "AssignmentExpression",
                                        "operator": "=",
                                        "left": {
                                          "type": "MemberExpression",
                                          "computed": false,
                                          "object": {
                                            "type": "Identifier",
                                            "name": "o"
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "name": "dy"
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
                                              "name": "min"
                                            }
                                          },
                                          "arguments": [
                                            {
                                              "type": "BinaryExpression",
                                              "operator": "-",
                                              "left": {
                                                "type": "BinaryExpression",
                                                "operator": "+",
                                                "left": {
                                                  "type": "MemberExpression",
                                                  "computed": false,
                                                  "object": {
                                                    "type": "Identifier",
                                                    "name": "rect"
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
                                                    "name": "rect"
                                                  },
                                                  "property": {
                                                    "type": "Identifier",
                                                    "name": "dy"
                                                  }
                                                }
                                              },
                                              "right": {
                                                "type": "Identifier",
                                                "name": "y"
                                              }
                                            },
                                            {
                                              "type": "ConditionalExpression",
                                              "test": {
                                                "type": "Identifier",
                                                "name": "v"
                                              },
                                              "consequent": {
                                                "type": "CallExpression",
                                                "callee": {
                                                  "type": "Identifier",
                                                  "name": "round"
                                                },
                                                "arguments": [
                                                  {
                                                    "type": "BinaryExpression",
                                                    "operator": "/",
                                                    "left": {
                                                      "type": "MemberExpression",
                                                      "computed": false,
                                                      "object": {
                                                        "type": "Identifier",
                                                        "name": "o"
                                                      },
                                                      "property": {
                                                        "type": "Identifier",
                                                        "name": "area"
                                                      }
                                                    },
                                                    "right": {
                                                      "type": "Identifier",
                                                      "name": "v"
                                                    }
                                                  }
                                                ]
                                              },
                                              "alternate": {
                                                "type": "Literal",
                                                "value": 0,
                                                "raw": "0"
                                              }
                                            }
                                          ]
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
                                    "type": "Identifier",
                                    "name": "o"
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "name": "z"
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
                                "operator": "+=",
                                "left": {
                                  "type": "MemberExpression",
                                  "computed": false,
                                  "object": {
                                    "type": "Identifier",
                                    "name": "o"
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "name": "dy"
                                  }
                                },
                                "right": {
                                  "type": "BinaryExpression",
                                  "operator": "-",
                                  "left": {
                                    "type": "BinaryExpression",
                                    "operator": "+",
                                    "left": {
                                      "type": "MemberExpression",
                                      "computed": false,
                                      "object": {
                                        "type": "Identifier",
                                        "name": "rect"
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
                                        "name": "rect"
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "name": "dy"
                                      }
                                    }
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "name": "y"
                                  }
                                }
                              }
                            },
                            {
                              "type": "ExpressionStatement",
                              "expression": {
                                "type": "AssignmentExpression",
                                "operator": "+=",
                                "left": {
                                  "type": "MemberExpression",
                                  "computed": false,
                                  "object": {
                                    "type": "Identifier",
                                    "name": "rect"
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "name": "x"
                                  }
                                },
                                "right": {
                                  "type": "Identifier",
                                  "name": "v"
                                }
                              }
                            },
                            {
                              "type": "ExpressionStatement",
                              "expression": {
                                "type": "AssignmentExpression",
                                "operator": "-=",
                                "left": {
                                  "type": "MemberExpression",
                                  "computed": false,
                                  "object": {
                                    "type": "Identifier",
                                    "name": "rect"
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "name": "dx"
                                  }
                                },
                                "right": {
                                  "type": "Identifier",
                                  "name": "v"
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
                    "name": "treemap"
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
                        "type": "VariableDeclaration",
                        "declarations": [
                          {
                            "type": "VariableDeclarator",
                            "id": {
                              "type": "Identifier",
                              "name": "nodes"
                            },
                            "init": {
                              "type": "LogicalExpression",
                              "operator": "||",
                              "left": {
                                "type": "Identifier",
                                "name": "stickies"
                              },
                              "right": {
                                "type": "CallExpression",
                                "callee": {
                                  "type": "Identifier",
                                  "name": "hierarchy"
                                },
                                "arguments": [
                                  {
                                    "type": "Identifier",
                                    "name": "d"
                                  }
                                ]
                              }
                            }
                          },
                          {
                            "type": "VariableDeclarator",
                            "id": {
                              "type": "Identifier",
                              "name": "root"
                            },
                            "init": {
                              "type": "MemberExpression",
                              "computed": true,
                              "object": {
                                "type": "Identifier",
                                "name": "nodes"
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
                              "name": "x"
                            }
                          },
                          "right": {
                            "type": "Literal",
                            "value": 0,
                            "raw": "0"
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
                              "name": "y"
                            }
                          },
                          "right": {
                            "type": "Literal",
                            "value": 0,
                            "raw": "0"
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
                              "name": "dx"
                            }
                          },
                          "right": {
                            "type": "MemberExpression",
                            "computed": true,
                            "object": {
                              "type": "Identifier",
                              "name": "size"
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
                              "name": "dy"
                            }
                          },
                          "right": {
                            "type": "MemberExpression",
                            "computed": true,
                            "object": {
                              "type": "Identifier",
                              "name": "size"
                            },
                            "property": {
                              "type": "Literal",
                              "value": 1,
                              "raw": "1"
                            }
                          }
                        }
                      },
                      {
                        "type": "IfStatement",
                        "test": {
                          "type": "Identifier",
                          "name": "stickies"
                        },
                        "consequent": {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "CallExpression",
                            "callee": {
                              "type": "MemberExpression",
                              "computed": false,
                              "object": {
                                "type": "Identifier",
                                "name": "hierarchy"
                              },
                              "property": {
                                "type": "Identifier",
                                "name": "revalue"
                              }
                            },
                            "arguments": [
                              {
                                "type": "Identifier",
                                "name": "root"
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
                            "type": "Identifier",
                            "name": "scale"
                          },
                          "arguments": [
                            {
                              "type": "ArrayExpression",
                              "elements": [
                                {
                                  "type": "Identifier",
                                  "name": "root"
                                }
                              ]
                            },
                            {
                              "type": "BinaryExpression",
                              "operator": "/",
                              "left": {
                                "type": "BinaryExpression",
                                "operator": "*",
                                "left": {
                                  "type": "MemberExpression",
                                  "computed": false,
                                  "object": {
                                    "type": "Identifier",
                                    "name": "root"
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "name": "dx"
                                  }
                                },
                                "right": {
                                  "type": "MemberExpression",
                                  "computed": false,
                                  "object": {
                                    "type": "Identifier",
                                    "name": "root"
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "name": "dy"
                                  }
                                }
                              },
                              "right": {
                                "type": "MemberExpression",
                                "computed": false,
                                "object": {
                                  "type": "Identifier",
                                  "name": "root"
                                },
                                "property": {
                                  "type": "Identifier",
                                  "name": "value"
                                }
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
                            "type": "ConditionalExpression",
                            "test": {
                              "type": "Identifier",
                              "name": "stickies"
                            },
                            "consequent": {
                              "type": "Identifier",
                              "name": "stickify"
                            },
                            "alternate": {
                              "type": "Identifier",
                              "name": "squarify"
                            }
                          },
                          "arguments": [
                            {
                              "type": "Identifier",
                              "name": "root"
                            }
                          ]
                        }
                      },
                      {
                        "type": "IfStatement",
                        "test": {
                          "type": "Identifier",
                          "name": "sticky"
                        },
                        "consequent": {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "AssignmentExpression",
                            "operator": "=",
                            "left": {
                              "type": "Identifier",
                              "name": "stickies"
                            },
                            "right": {
                              "type": "Identifier",
                              "name": "nodes"
                            }
                          }
                        },
                        "alternate": null
                      },
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "Identifier",
                          "name": "nodes"
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
                        "name": "treemap"
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
                                "type": "Identifier",
                                "name": "x"
                              }
                            }
                          },
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "Identifier",
                              "name": "treemap"
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
                        "name": "treemap"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "padding"
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
                                "name": "padding"
                              }
                            },
                            "alternate": null
                          },
                          {
                            "type": "FunctionDeclaration",
                            "id": {
                              "type": "Identifier",
                              "name": "padFunction"
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
                                  "type": "VariableDeclaration",
                                  "declarations": [
                                    {
                                      "type": "VariableDeclarator",
                                      "id": {
                                        "type": "Identifier",
                                        "name": "p"
                                      },
                                      "init": {
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
                                            "name": "call"
                                          }
                                        },
                                        "arguments": [
                                          {
                                            "type": "Identifier",
                                            "name": "treemap"
                                          },
                                          {
                                            "type": "Identifier",
                                            "name": "node"
                                          },
                                          {
                                            "type": "MemberExpression",
                                            "computed": false,
                                            "object": {
                                              "type": "Identifier",
                                              "name": "node"
                                            },
                                            "property": {
                                              "type": "Identifier",
                                              "name": "depth"
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
                                    "type": "ConditionalExpression",
                                    "test": {
                                      "type": "BinaryExpression",
                                      "operator": "==",
                                      "left": {
                                        "type": "Identifier",
                                        "name": "p"
                                      },
                                      "right": {
                                        "type": "Literal",
                                        "value": null,
                                        "raw": "null"
                                      }
                                    },
                                    "consequent": {
                                      "type": "CallExpression",
                                      "callee": {
                                        "type": "Identifier",
                                        "name": "d3_layout_treemapPadNull"
                                      },
                                      "arguments": [
                                        {
                                          "type": "Identifier",
                                          "name": "node"
                                        }
                                      ]
                                    },
                                    "alternate": {
                                      "type": "CallExpression",
                                      "callee": {
                                        "type": "Identifier",
                                        "name": "d3_layout_treemapPad"
                                      },
                                      "arguments": [
                                        {
                                          "type": "Identifier",
                                          "name": "node"
                                        },
                                        {
                                          "type": "ConditionalExpression",
                                          "test": {
                                            "type": "BinaryExpression",
                                            "operator": "===",
                                            "left": {
                                              "type": "UnaryExpression",
                                              "operator": "typeof",
                                              "argument": {
                                                "type": "Identifier",
                                                "name": "p"
                                              },
                                              "prefix": true
                                            },
                                            "right": {
                                              "type": "Literal",
                                              "value": "number",
                                              "raw": "\"number\""
                                            }
                                          },
                                          "consequent": {
                                            "type": "ArrayExpression",
                                            "elements": [
                                              {
                                                "type": "Identifier",
                                                "name": "p"
                                              },
                                              {
                                                "type": "Identifier",
                                                "name": "p"
                                              },
                                              {
                                                "type": "Identifier",
                                                "name": "p"
                                              },
                                              {
                                                "type": "Identifier",
                                                "name": "p"
                                              }
                                            ]
                                          },
                                          "alternate": {
                                            "type": "Identifier",
                                            "name": "p"
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
                              "name": "padConstant"
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
                                  "type": "ReturnStatement",
                                  "argument": {
                                    "type": "CallExpression",
                                    "callee": {
                                      "type": "Identifier",
                                      "name": "d3_layout_treemapPad"
                                    },
                                    "arguments": [
                                      {
                                        "type": "Identifier",
                                        "name": "node"
                                      },
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
                          {
                            "type": "VariableDeclaration",
                            "declarations": [
                              {
                                "type": "VariableDeclarator",
                                "id": {
                                  "type": "Identifier",
                                  "name": "type"
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
                                "name": "pad"
                              },
                              "right": {
                                "type": "ConditionalExpression",
                                "test": {
                                  "type": "BinaryExpression",
                                  "operator": "==",
                                  "left": {
                                    "type": "AssignmentExpression",
                                    "operator": "=",
                                    "left": {
                                      "type": "Identifier",
                                      "name": "padding"
                                    },
                                    "right": {
                                      "type": "Identifier",
                                      "name": "x"
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
                                  "name": "d3_layout_treemapPadNull"
                                },
                                "alternate": {
                                  "type": "ConditionalExpression",
                                  "test": {
                                    "type": "BinaryExpression",
                                    "operator": "===",
                                    "left": {
                                      "type": "AssignmentExpression",
                                      "operator": "=",
                                      "left": {
                                        "type": "Identifier",
                                        "name": "type"
                                      },
                                      "right": {
                                        "type": "UnaryExpression",
                                        "operator": "typeof",
                                        "argument": {
                                          "type": "Identifier",
                                          "name": "x"
                                        },
                                        "prefix": true
                                      }
                                    },
                                    "right": {
                                      "type": "Literal",
                                      "value": "function",
                                      "raw": "\"function\""
                                    }
                                  },
                                  "consequent": {
                                    "type": "Identifier",
                                    "name": "padFunction"
                                  },
                                  "alternate": {
                                    "type": "ConditionalExpression",
                                    "test": {
                                      "type": "BinaryExpression",
                                      "operator": "===",
                                      "left": {
                                        "type": "Identifier",
                                        "name": "type"
                                      },
                                      "right": {
                                        "type": "Literal",
                                        "value": "number",
                                        "raw": "\"number\""
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
                                            "type": "ArrayExpression",
                                            "elements": [
                                              {
                                                "type": "Identifier",
                                                "name": "x"
                                              },
                                              {
                                                "type": "Identifier",
                                                "name": "x"
                                              },
                                              {
                                                "type": "Identifier",
                                                "name": "x"
                                              },
                                              {
                                                "type": "Identifier",
                                                "name": "x"
                                              }
                                            ]
                                          }
                                        },
                                        {
                                          "type": "Identifier",
                                          "name": "padConstant"
                                        }
                                      ]
                                    },
                                    "alternate": {
                                      "type": "Identifier",
                                      "name": "padConstant"
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
                              "name": "treemap"
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
                        "name": "treemap"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "round"
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
                                "type": "BinaryExpression",
                                "operator": "!=",
                                "left": {
                                  "type": "Identifier",
                                  "name": "round"
                                },
                                "right": {
                                  "type": "Identifier",
                                  "name": "Number"
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
                                "type": "Identifier",
                                "name": "round"
                              },
                              "right": {
                                "type": "ConditionalExpression",
                                "test": {
                                  "type": "Identifier",
                                  "name": "x"
                                },
                                "consequent": {
                                  "type": "MemberExpression",
                                  "computed": false,
                                  "object": {
                                    "type": "Identifier",
                                    "name": "Math"
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "name": "round"
                                  }
                                },
                                "alternate": {
                                  "type": "Identifier",
                                  "name": "Number"
                                }
                              }
                            }
                          },
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "Identifier",
                              "name": "treemap"
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
                        "name": "treemap"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "sticky"
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
                                "name": "sticky"
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
                                "name": "sticky"
                              },
                              "right": {
                                "type": "Identifier",
                                "name": "x"
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
                                "name": "stickies"
                              },
                              "right": {
                                "type": "Literal",
                                "value": null,
                                "raw": "null"
                              }
                            }
                          },
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "Identifier",
                              "name": "treemap"
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
                        "name": "treemap"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "ratio"
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
                                "name": "ratio"
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
                                "name": "ratio"
                              },
                              "right": {
                                "type": "Identifier",
                                "name": "x"
                              }
                            }
                          },
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "Identifier",
                              "name": "treemap"
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
                        "name": "treemap"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "mode"
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
                                "name": "mode"
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
                                "name": "mode"
                              },
                              "right": {
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
                          },
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "Identifier",
                              "name": "treemap"
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
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "name": "d3_layout_hierarchyRebind"
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "name": "treemap"
                      },
                      {
                        "type": "Identifier",
                        "name": "hierarchy"
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
          "name": "d3_layout_treemapPadNull"
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
              "type": "ReturnStatement",
              "argument": {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "key": {
                      "type": "Identifier",
                      "name": "x"
                    },
                    "value": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "name": "node"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "x"
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
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "name": "node"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "y"
                      }
                    },
                    "kind": "init"
                  },
                  {
                    "type": "Property",
                    "key": {
                      "type": "Identifier",
                      "name": "dx"
                    },
                    "value": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "name": "node"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "dx"
                      }
                    },
                    "kind": "init"
                  },
                  {
                    "type": "Property",
                    "key": {
                      "type": "Identifier",
                      "name": "dy"
                    },
                    "value": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "name": "node"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "dy"
                      }
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
          "name": "d3_layout_treemapPad"
        },
        "params": [
          {
            "type": "Identifier",
            "name": "node"
          },
          {
            "type": "Identifier",
            "name": "padding"
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
                    "type": "BinaryExpression",
                    "operator": "+",
                    "left": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "name": "node"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "x"
                      }
                    },
                    "right": {
                      "type": "MemberExpression",
                      "computed": true,
                      "object": {
                        "type": "Identifier",
                        "name": "padding"
                      },
                      "property": {
                        "type": "Literal",
                        "value": 3,
                        "raw": "3"
                      }
                    }
                  }
                },
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "name": "y"
                  },
                  "init": {
                    "type": "BinaryExpression",
                    "operator": "+",
                    "left": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "name": "node"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "y"
                      }
                    },
                    "right": {
                      "type": "MemberExpression",
                      "computed": true,
                      "object": {
                        "type": "Identifier",
                        "name": "padding"
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
                    "name": "dx"
                  },
                  "init": {
                    "type": "BinaryExpression",
                    "operator": "-",
                    "left": {
                      "type": "BinaryExpression",
                      "operator": "-",
                      "left": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "name": "node"
                        },
                        "property": {
                          "type": "Identifier",
                          "name": "dx"
                        }
                      },
                      "right": {
                        "type": "MemberExpression",
                        "computed": true,
                        "object": {
                          "type": "Identifier",
                          "name": "padding"
                        },
                        "property": {
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
                        "name": "padding"
                      },
                      "property": {
                        "type": "Literal",
                        "value": 3,
                        "raw": "3"
                      }
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
                      "type": "BinaryExpression",
                      "operator": "-",
                      "left": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "name": "node"
                        },
                        "property": {
                          "type": "Identifier",
                          "name": "dy"
                        }
                      },
                      "right": {
                        "type": "MemberExpression",
                        "computed": true,
                        "object": {
                          "type": "Identifier",
                          "name": "padding"
                        },
                        "property": {
                          "type": "Literal",
                          "value": 0,
                          "raw": "0"
                        }
                      }
                    },
                    "right": {
                      "type": "MemberExpression",
                      "computed": true,
                      "object": {
                        "type": "Identifier",
                        "name": "padding"
                      },
                      "property": {
                        "type": "Literal",
                        "value": 2,
                        "raw": "2"
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
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "+=",
                      "left": {
                        "type": "Identifier",
                        "name": "x"
                      },
                      "right": {
                        "type": "BinaryExpression",
                        "operator": "/",
                        "left": {
                          "type": "Identifier",
                          "name": "dx"
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
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "name": "dx"
                      },
                      "right": {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0"
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
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "+=",
                      "left": {
                        "type": "Identifier",
                        "name": "y"
                      },
                      "right": {
                        "type": "BinaryExpression",
                        "operator": "/",
                        "left": {
                          "type": "Identifier",
                          "name": "dy"
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
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "name": "dy"
                      },
                      "right": {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0"
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
                      "name": "x"
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
                      "name": "y"
                    },
                    "kind": "init"
                  },
                  {
                    "type": "Property",
                    "key": {
                      "type": "Identifier",
                      "name": "dx"
                    },
                    "value": {
                      "type": "Identifier",
                      "name": "dx"
                    },
                    "kind": "init"
                  },
                  {
                    "type": "Property",
                    "key": {
                      "type": "Identifier",
                      "name": "dy"
                    },
                    "value": {
                      "type": "Identifier",
                      "name": "dy"
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
      }
    ]
  },
  "src": "d3.layout.treemap = function () {\n    var hierarchy = d3.layout.hierarchy(), round = Math.round, size = [\n            1,\n            1\n        ], padding = null, pad = d3_layout_treemapPadNull, sticky = false, stickies, mode = 'squarify', ratio = 0.5 * (1 + Math.sqrt(5));\n    function scale(children, k) {\n        var i = -1, n = children.length, child, area;\n        while (++i < n) {\n            area = (child = children[i]).value * (k < 0 ? 0 : k);\n            child.area = isNaN(area) || area <= 0 ? 0 : area;\n        }\n    }\n    function squarify(node) {\n        var children = node.children;\n        if (children && children.length) {\n            var rect = pad(node), row = [], remaining = children.slice(), child, best = Infinity, score, u = mode === 'slice' ? rect.dx : mode === 'dice' ? rect.dy : mode === 'slice-dice' ? node.depth & 1 ? rect.dy : rect.dx : Math.min(rect.dx, rect.dy), n;\n            scale(remaining, rect.dx * rect.dy / node.value);\n            row.area = 0;\n            while ((n = remaining.length) > 0) {\n                row.push(child = remaining[n - 1]);\n                row.area += child.area;\n                if (mode !== 'squarify' || (score = worst(row, u)) <= best) {\n                    remaining.pop();\n                    best = score;\n                } else {\n                    row.area -= row.pop().area;\n                    position(row, u, rect, false);\n                    u = Math.min(rect.dx, rect.dy);\n                    row.length = row.area = 0;\n                    best = Infinity;\n                }\n            }\n            if (row.length) {\n                position(row, u, rect, true);\n                row.length = row.area = 0;\n            }\n            children.forEach(squarify);\n        }\n    }\n    function stickify(node) {\n        var children = node.children;\n        if (children && children.length) {\n            var rect = pad(node), remaining = children.slice(), child, row = [];\n            scale(remaining, rect.dx * rect.dy / node.value);\n            row.area = 0;\n            while (child = remaining.pop()) {\n                row.push(child);\n                row.area += child.area;\n                if (child.z != null) {\n                    position(row, child.z ? rect.dx : rect.dy, rect, !remaining.length);\n                    row.length = row.area = 0;\n                }\n            }\n            children.forEach(stickify);\n        }\n    }\n    function worst(row, u) {\n        var s = row.area, r, rmax = 0, rmin = Infinity, i = -1, n = row.length;\n        while (++i < n) {\n            if (!(r = row[i].area))\n                continue;\n            if (r < rmin)\n                rmin = r;\n            if (r > rmax)\n                rmax = r;\n        }\n        s *= s;\n        u *= u;\n        return s ? Math.max(u * rmax * ratio / s, s / (u * rmin * ratio)) : Infinity;\n    }\n    function position(row, u, rect, flush) {\n        var i = -1, n = row.length, x = rect.x, y = rect.y, v = u ? round(row.area / u) : 0, o;\n        if (u == rect.dx) {\n            if (flush || v > rect.dy)\n                v = rect.dy;\n            while (++i < n) {\n                o = row[i];\n                o.x = x;\n                o.y = y;\n                o.dy = v;\n                x += o.dx = Math.min(rect.x + rect.dx - x, v ? round(o.area / v) : 0);\n            }\n            o.z = true;\n            o.dx += rect.x + rect.dx - x;\n            rect.y += v;\n            rect.dy -= v;\n        } else {\n            if (flush || v > rect.dx)\n                v = rect.dx;\n            while (++i < n) {\n                o = row[i];\n                o.x = x;\n                o.y = y;\n                o.dx = v;\n                y += o.dy = Math.min(rect.y + rect.dy - y, v ? round(o.area / v) : 0);\n            }\n            o.z = false;\n            o.dy += rect.y + rect.dy - y;\n            rect.x += v;\n            rect.dx -= v;\n        }\n    }\n    function treemap(d) {\n        var nodes = stickies || hierarchy(d), root = nodes[0];\n        root.x = 0;\n        root.y = 0;\n        root.dx = size[0];\n        root.dy = size[1];\n        if (stickies)\n            hierarchy.revalue(root);\n        scale([root], root.dx * root.dy / root.value);\n        (stickies ? stickify : squarify)(root);\n        if (sticky)\n            stickies = nodes;\n        return nodes;\n    }\n    treemap.size = function (x) {\n        if (!arguments.length)\n            return size;\n        size = x;\n        return treemap;\n    };\n    treemap.padding = function (x) {\n        if (!arguments.length)\n            return padding;\n        function padFunction(node) {\n            var p = x.call(treemap, node, node.depth);\n            return p == null ? d3_layout_treemapPadNull(node) : d3_layout_treemapPad(node, typeof p === 'number' ? [\n                p,\n                p,\n                p,\n                p\n            ] : p);\n        }\n        function padConstant(node) {\n            return d3_layout_treemapPad(node, x);\n        }\n        var type;\n        pad = (padding = x) == null ? d3_layout_treemapPadNull : (type = typeof x) === 'function' ? padFunction : type === 'number' ? (x = [\n            x,\n            x,\n            x,\n            x\n        ], padConstant) : padConstant;\n        return treemap;\n    };\n    treemap.round = function (x) {\n        if (!arguments.length)\n            return round != Number;\n        round = x ? Math.round : Number;\n        return treemap;\n    };\n    treemap.sticky = function (x) {\n        if (!arguments.length)\n            return sticky;\n        sticky = x;\n        stickies = null;\n        return treemap;\n    };\n    treemap.ratio = function (x) {\n        if (!arguments.length)\n            return ratio;\n        ratio = x;\n        return treemap;\n    };\n    treemap.mode = function (x) {\n        if (!arguments.length)\n            return mode;\n        mode = x + '';\n        return treemap;\n    };\n    return d3_layout_hierarchyRebind(treemap, hierarchy);\n};\nfunction d3_layout_treemapPadNull(node) {\n    return {\n        x: node.x,\n        y: node.y,\n        dx: node.dx,\n        dy: node.dy\n    };\n}\nfunction d3_layout_treemapPad(node, padding) {\n    var x = node.x + padding[3], y = node.y + padding[0], dx = node.dx - padding[1] - padding[3], dy = node.dy - padding[0] - padding[2];\n    if (dx < 0) {\n        x += dx / 2;\n        dx = 0;\n    }\n    if (dy < 0) {\n        y += dy / 2;\n        dy = 0;\n    }\n    return {\n        x: x,\n        y: y,\n        dx: dx,\n        dy: dy\n    };\n}"
}