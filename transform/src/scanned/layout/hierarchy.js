{
  "filepath": "/layout/hierarchy.js",
  "shared": [],
  "dependencies": [
    "d3.rebind",
    "d3.merge"
  ],
  "helpers": [
    "d3_layout_hierarchyRebind",
    "d3_layout_hierarchyVisitBefore",
    "d3_layout_hierarchyVisitAfter",
    "d3_layout_hierarchyChildren",
    "d3_layout_hierarchyValue",
    "d3_layout_hierarchySort",
    "d3_layout_hierarchyLinks"
  ],
  "exports": [
    "d3.layout.hierarchy"
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
              "name": "hierarchy"
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
                        "name": "sort"
                      },
                      "init": {
                        "type": "Identifier",
                        "name": "d3_layout_hierarchySort"
                      }
                    },
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "name": "children"
                      },
                      "init": {
                        "type": "Identifier",
                        "name": "d3_layout_hierarchyChildren"
                      }
                    },
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "name": "value"
                      },
                      "init": {
                        "type": "Identifier",
                        "name": "d3_layout_hierarchyValue"
                      }
                    }
                  ],
                  "kind": "var"
                },
                {
                  "type": "FunctionDeclaration",
                  "id": {
                    "type": "Identifier",
                    "name": "hierarchy"
                  },
                  "params": [
                    {
                      "type": "Identifier",
                      "name": "root"
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
                              "name": "stack"
                            },
                            "init": {
                              "type": "ArrayExpression",
                              "elements": [
                                {
                                  "type": "Identifier",
                                  "name": "root"
                                }
                              ]
                            }
                          },
                          {
                            "type": "VariableDeclarator",
                            "id": {
                              "type": "Identifier",
                              "name": "nodes"
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
                              "name": "node"
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
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "name": "root"
                            },
                            "property": {
                              "type": "Identifier",
                              "name": "depth"
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
                          "operator": "!=",
                          "left": {
                            "type": "AssignmentExpression",
                            "operator": "=",
                            "left": {
                              "type": "Identifier",
                              "name": "node"
                            },
                            "right": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "MemberExpression",
                                "computed": false,
                                "object": {
                                  "type": "Identifier",
                                  "name": "stack"
                                },
                                "property": {
                                  "type": "Identifier",
                                  "name": "pop"
                                }
                              },
                              "arguments": []
                            }
                          },
                          "right": {
                            "type": "Literal",
                            "value": null,
                            "raw": "null"
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
                                    "name": "nodes"
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "name": "push"
                                  }
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
                              "type": "IfStatement",
                              "test": {
                                "type": "LogicalExpression",
                                "operator": "&&",
                                "left": {
                                  "type": "AssignmentExpression",
                                  "operator": "=",
                                  "left": {
                                    "type": "Identifier",
                                    "name": "childs"
                                  },
                                  "right": {
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
                                        "name": "call"
                                      }
                                    },
                                    "arguments": [
                                      {
                                        "type": "Identifier",
                                        "name": "hierarchy"
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
                                },
                                "right": {
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
                                      "name": "childs"
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "name": "length"
                                    }
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
                                          "name": "n"
                                        },
                                        "init": null
                                      },
                                      {
                                        "type": "VariableDeclarator",
                                        "id": {
                                          "type": "Identifier",
                                          "name": "childs"
                                        },
                                        "init": null
                                      },
                                      {
                                        "type": "VariableDeclarator",
                                        "id": {
                                          "type": "Identifier",
                                          "name": "child"
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
                                      "operator": ">=",
                                      "left": {
                                        "type": "UpdateExpression",
                                        "operator": "--",
                                        "argument": {
                                          "type": "Identifier",
                                          "name": "n"
                                        },
                                        "prefix": true
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
                                                "name": "stack"
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
                                                    "name": "childs"
                                                  },
                                                  "property": {
                                                    "type": "Identifier",
                                                    "name": "n"
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
                                                "name": "child"
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "name": "parent"
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
                                                "name": "child"
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "name": "depth"
                                              }
                                            },
                                            "right": {
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
                                                  "name": "depth"
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
                                      ]
                                    }
                                  },
                                  {
                                    "type": "IfStatement",
                                    "test": {
                                      "type": "Identifier",
                                      "name": "value"
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
                                            "name": "value"
                                          }
                                        },
                                        "right": {
                                          "type": "Literal",
                                          "value": 0,
                                          "raw": "0"
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
                                          "name": "children"
                                        }
                                      },
                                      "right": {
                                        "type": "Identifier",
                                        "name": "childs"
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
                                      "type": "Identifier",
                                      "name": "value"
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
                                            "name": "value"
                                          }
                                        },
                                        "right": {
                                          "type": "LogicalExpression",
                                          "operator": "||",
                                          "left": {
                                            "type": "UnaryExpression",
                                            "operator": "+",
                                            "argument": {
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
                                                  "name": "call"
                                                }
                                              },
                                              "arguments": [
                                                {
                                                  "type": "Identifier",
                                                  "name": "hierarchy"
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
                                            },
                                            "prefix": true
                                          },
                                          "right": {
                                            "type": "Literal",
                                            "value": 0,
                                            "raw": "0"
                                          }
                                        }
                                      }
                                    },
                                    "alternate": null
                                  },
                                  {
                                    "type": "ExpressionStatement",
                                    "expression": {
                                      "type": "UnaryExpression",
                                      "operator": "delete",
                                      "argument": {
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
                                      },
                                      "prefix": true
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
                          "type": "CallExpression",
                          "callee": {
                            "type": "Identifier",
                            "name": "d3_layout_hierarchyVisitAfter"
                          },
                          "arguments": [
                            {
                              "type": "Identifier",
                              "name": "root"
                            },
                            {
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
                                    "type": "VariableDeclaration",
                                    "declarations": [
                                      {
                                        "type": "VariableDeclarator",
                                        "id": {
                                          "type": "Identifier",
                                          "name": "childs"
                                        },
                                        "init": null
                                      },
                                      {
                                        "type": "VariableDeclarator",
                                        "id": {
                                          "type": "Identifier",
                                          "name": "parent"
                                        },
                                        "init": null
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
                                        "name": "sort"
                                      },
                                      "right": {
                                        "type": "AssignmentExpression",
                                        "operator": "=",
                                        "left": {
                                          "type": "Identifier",
                                          "name": "childs"
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
                                            "name": "children"
                                          }
                                        }
                                      }
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
                                            "name": "childs"
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "name": "sort"
                                          }
                                        },
                                        "arguments": [
                                          {
                                            "type": "Identifier",
                                            "name": "sort"
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
                                        "type": "Identifier",
                                        "name": "value"
                                      },
                                      "right": {
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
                                            "name": "node"
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "name": "parent"
                                          }
                                        }
                                      }
                                    },
                                    "consequent": {
                                      "type": "ExpressionStatement",
                                      "expression": {
                                        "type": "AssignmentExpression",
                                        "operator": "+=",
                                        "left": {
                                          "type": "MemberExpression",
                                          "computed": false,
                                          "object": {
                                            "type": "Identifier",
                                            "name": "parent"
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "name": "value"
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
                        }
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
                        "name": "hierarchy"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "sort"
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
                                "name": "sort"
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
                                "name": "sort"
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
                              "name": "hierarchy"
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
                        "name": "hierarchy"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "children"
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
                                "name": "children"
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
                                "name": "children"
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
                              "name": "hierarchy"
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
                        "name": "hierarchy"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "value"
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
                                "name": "value"
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
                                "name": "value"
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
                              "name": "hierarchy"
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
                        "name": "hierarchy"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "revalue"
                      }
                    },
                    "right": {
                      "type": "FunctionExpression",
                      "id": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "name": "root"
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
                              "name": "value"
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
                                      "name": "d3_layout_hierarchyVisitBefore"
                                    },
                                    "arguments": [
                                      {
                                        "type": "Identifier",
                                        "name": "root"
                                      },
                                      {
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
                                                  "name": "children"
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
                                                      "name": "node"
                                                    },
                                                    "property": {
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
                                  }
                                },
                                {
                                  "type": "ExpressionStatement",
                                  "expression": {
                                    "type": "CallExpression",
                                    "callee": {
                                      "type": "Identifier",
                                      "name": "d3_layout_hierarchyVisitAfter"
                                    },
                                    "arguments": [
                                      {
                                        "type": "Identifier",
                                        "name": "root"
                                      },
                                      {
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
                                              "type": "VariableDeclaration",
                                              "declarations": [
                                                {
                                                  "type": "VariableDeclarator",
                                                  "id": {
                                                    "type": "Identifier",
                                                    "name": "parent"
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
                                                },
                                                "prefix": true
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
                                                      "name": "value"
                                                    }
                                                  },
                                                  "right": {
                                                    "type": "LogicalExpression",
                                                    "operator": "||",
                                                    "left": {
                                                      "type": "UnaryExpression",
                                                      "operator": "+",
                                                      "argument": {
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
                                                            "name": "call"
                                                          }
                                                        },
                                                        "arguments": [
                                                          {
                                                            "type": "Identifier",
                                                            "name": "hierarchy"
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
                                                      },
                                                      "prefix": true
                                                    },
                                                    "right": {
                                                      "type": "Literal",
                                                      "value": 0,
                                                      "raw": "0"
                                                    }
                                                  }
                                                }
                                              },
                                              "alternate": null
                                            },
                                            {
                                              "type": "IfStatement",
                                              "test": {
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
                                                    "name": "node"
                                                  },
                                                  "property": {
                                                    "type": "Identifier",
                                                    "name": "parent"
                                                  }
                                                }
                                              },
                                              "consequent": {
                                                "type": "ExpressionStatement",
                                                "expression": {
                                                  "type": "AssignmentExpression",
                                                  "operator": "+=",
                                                  "left": {
                                                    "type": "MemberExpression",
                                                    "computed": false,
                                                    "object": {
                                                      "type": "Identifier",
                                                      "name": "parent"
                                                    },
                                                    "property": {
                                                      "type": "Identifier",
                                                      "name": "value"
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
                                  }
                                }
                              ]
                            },
                            "alternate": null
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
                    }
                  }
                },
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Identifier",
                    "name": "hierarchy"
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
          "name": "d3_layout_hierarchyRebind"
        },
        "params": [
          {
            "type": "Identifier",
            "name": "object"
          },
          {
            "type": "Identifier",
            "name": "hierarchy"
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
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "name": "d3"
                  },
                  "property": {
                    "type": "Identifier",
                    "name": "rebind"
                  }
                },
                "arguments": [
                  {
                    "type": "Identifier",
                    "name": "object"
                  },
                  {
                    "type": "Identifier",
                    "name": "hierarchy"
                  },
                  {
                    "type": "Literal",
                    "value": "sort",
                    "raw": "\"sort\""
                  },
                  {
                    "type": "Literal",
                    "value": "children",
                    "raw": "\"children\""
                  },
                  {
                    "type": "Literal",
                    "value": "value",
                    "raw": "\"value\""
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
                    "name": "object"
                  },
                  "property": {
                    "type": "Identifier",
                    "name": "nodes"
                  }
                },
                "right": {
                  "type": "Identifier",
                  "name": "object"
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
                    "name": "object"
                  },
                  "property": {
                    "type": "Identifier",
                    "name": "links"
                  }
                },
                "right": {
                  "type": "Identifier",
                  "name": "d3_layout_hierarchyLinks"
                }
              }
            },
            {
              "type": "ReturnStatement",
              "argument": {
                "type": "Identifier",
                "name": "object"
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
          "name": "d3_layout_hierarchyVisitBefore"
        },
        "params": [
          {
            "type": "Identifier",
            "name": "node"
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
              "type": "VariableDeclaration",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "name": "nodes"
                  },
                  "init": {
                    "type": "ArrayExpression",
                    "elements": [
                      {
                        "type": "Identifier",
                        "name": "node"
                      }
                    ]
                  }
                }
              ],
              "kind": "var"
            },
            {
              "type": "WhileStatement",
              "test": {
                "type": "BinaryExpression",
                "operator": "!=",
                "left": {
                  "type": "AssignmentExpression",
                  "operator": "=",
                  "left": {
                    "type": "Identifier",
                    "name": "node"
                  },
                  "right": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "name": "nodes"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "pop"
                      }
                    },
                    "arguments": []
                  }
                },
                "right": {
                  "type": "Literal",
                  "value": null,
                  "raw": "null"
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
                        "name": "callback"
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
                    "type": "IfStatement",
                    "test": {
                      "type": "LogicalExpression",
                      "operator": "&&",
                      "left": {
                        "type": "AssignmentExpression",
                        "operator": "=",
                        "left": {
                          "type": "Identifier",
                          "name": "children"
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
                            "name": "children"
                          }
                        }
                      },
                      "right": {
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
                            "name": "children"
                          },
                          "property": {
                            "type": "Identifier",
                            "name": "length"
                          }
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
                                "name": "n"
                              },
                              "init": null
                            },
                            {
                              "type": "VariableDeclarator",
                              "id": {
                                "type": "Identifier",
                                "name": "children"
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
                            "operator": ">=",
                            "left": {
                              "type": "UpdateExpression",
                              "operator": "--",
                              "argument": {
                                "type": "Identifier",
                                "name": "n"
                              },
                              "prefix": true
                            },
                            "right": {
                              "type": "Literal",
                              "value": 0,
                              "raw": "0"
                            }
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
                                  "name": "nodes"
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
                                    "name": "children"
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "name": "n"
                                  }
                                }
                              ]
                            }
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
          "name": "d3_layout_hierarchyVisitAfter"
        },
        "params": [
          {
            "type": "Identifier",
            "name": "node"
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
              "type": "VariableDeclaration",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "name": "nodes"
                  },
                  "init": {
                    "type": "ArrayExpression",
                    "elements": [
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
                    "name": "nodes2"
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
                "type": "BinaryExpression",
                "operator": "!=",
                "left": {
                  "type": "AssignmentExpression",
                  "operator": "=",
                  "left": {
                    "type": "Identifier",
                    "name": "node"
                  },
                  "right": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "name": "nodes"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "pop"
                      }
                    },
                    "arguments": []
                  }
                },
                "right": {
                  "type": "Literal",
                  "value": null,
                  "raw": "null"
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
                          "name": "nodes2"
                        },
                        "property": {
                          "type": "Identifier",
                          "name": "push"
                        }
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
                    "type": "IfStatement",
                    "test": {
                      "type": "LogicalExpression",
                      "operator": "&&",
                      "left": {
                        "type": "AssignmentExpression",
                        "operator": "=",
                        "left": {
                          "type": "Identifier",
                          "name": "children"
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
                            "name": "children"
                          }
                        }
                      },
                      "right": {
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
                            "name": "children"
                          },
                          "property": {
                            "type": "Identifier",
                            "name": "length"
                          }
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
                              "init": null
                            },
                            {
                              "type": "VariableDeclarator",
                              "id": {
                                "type": "Identifier",
                                "name": "children"
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
                            "type": "ExpressionStatement",
                            "expression": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "MemberExpression",
                                "computed": false,
                                "object": {
                                  "type": "Identifier",
                                  "name": "nodes"
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
                                    "name": "children"
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "name": "i"
                                  }
                                }
                              ]
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
              "type": "WhileStatement",
              "test": {
                "type": "BinaryExpression",
                "operator": "!=",
                "left": {
                  "type": "AssignmentExpression",
                  "operator": "=",
                  "left": {
                    "type": "Identifier",
                    "name": "node"
                  },
                  "right": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "name": "nodes2"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "pop"
                      }
                    },
                    "arguments": []
                  }
                },
                "right": {
                  "type": "Literal",
                  "value": null,
                  "raw": "null"
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
                        "name": "callback"
                      },
                      "arguments": [
                        {
                          "type": "Identifier",
                          "name": "node"
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
          "name": "d3_layout_hierarchyChildren"
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
                  "name": "children"
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
          "name": "d3_layout_hierarchyValue"
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
                  "name": "value"
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
          "name": "d3_layout_hierarchySort"
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
                "type": "BinaryExpression",
                "operator": "-",
                "left": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "name": "b"
                  },
                  "property": {
                    "type": "Identifier",
                    "name": "value"
                  }
                },
                "right": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "name": "a"
                  },
                  "property": {
                    "type": "Identifier",
                    "name": "value"
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
          "name": "d3_layout_hierarchyLinks"
        },
        "params": [
          {
            "type": "Identifier",
            "name": "nodes"
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
                    "name": "d3"
                  },
                  "property": {
                    "type": "Identifier",
                    "name": "merge"
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
                        "name": "nodes"
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
                            "name": "parent"
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
                                    "type": "LogicalExpression",
                                    "operator": "||",
                                    "left": {
                                      "type": "MemberExpression",
                                      "computed": false,
                                      "object": {
                                        "type": "Identifier",
                                        "name": "parent"
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "name": "children"
                                      }
                                    },
                                    "right": {
                                      "type": "ArrayExpression",
                                      "elements": []
                                    }
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
                                        "name": "child"
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
                                                  "name": "source"
                                                },
                                                "value": {
                                                  "type": "Identifier",
                                                  "name": "parent"
                                                },
                                                "kind": "init"
                                              },
                                              {
                                                "type": "Property",
                                                "key": {
                                                  "type": "Identifier",
                                                  "name": "target"
                                                },
                                                "value": {
                                                  "type": "Identifier",
                                                  "name": "child"
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
  "src": "d3.layout.hierarchy = function () {\n    var sort = d3_layout_hierarchySort, children = d3_layout_hierarchyChildren, value = d3_layout_hierarchyValue;\n    function hierarchy(root) {\n        var stack = [root], nodes = [], node;\n        root.depth = 0;\n        while ((node = stack.pop()) != null) {\n            nodes.push(node);\n            if ((childs = children.call(hierarchy, node, node.depth)) && (n = childs.length)) {\n                var n, childs, child;\n                while (--n >= 0) {\n                    stack.push(child = childs[n]);\n                    child.parent = node;\n                    child.depth = node.depth + 1;\n                }\n                if (value)\n                    node.value = 0;\n                node.children = childs;\n            } else {\n                if (value)\n                    node.value = +value.call(hierarchy, node, node.depth) || 0;\n                delete node.children;\n            }\n        }\n        d3_layout_hierarchyVisitAfter(root, function (node) {\n            var childs, parent;\n            if (sort && (childs = node.children))\n                childs.sort(sort);\n            if (value && (parent = node.parent))\n                parent.value += node.value;\n        });\n        return nodes;\n    }\n    hierarchy.sort = function (x) {\n        if (!arguments.length)\n            return sort;\n        sort = x;\n        return hierarchy;\n    };\n    hierarchy.children = function (x) {\n        if (!arguments.length)\n            return children;\n        children = x;\n        return hierarchy;\n    };\n    hierarchy.value = function (x) {\n        if (!arguments.length)\n            return value;\n        value = x;\n        return hierarchy;\n    };\n    hierarchy.revalue = function (root) {\n        if (value) {\n            d3_layout_hierarchyVisitBefore(root, function (node) {\n                if (node.children)\n                    node.value = 0;\n            });\n            d3_layout_hierarchyVisitAfter(root, function (node) {\n                var parent;\n                if (!node.children)\n                    node.value = +value.call(hierarchy, node, node.depth) || 0;\n                if (parent = node.parent)\n                    parent.value += node.value;\n            });\n        }\n        return root;\n    };\n    return hierarchy;\n};\nfunction d3_layout_hierarchyRebind(object, hierarchy) {\n    d3.rebind(object, hierarchy, 'sort', 'children', 'value');\n    object.nodes = object;\n    object.links = d3_layout_hierarchyLinks;\n    return object;\n}\nfunction d3_layout_hierarchyVisitBefore(node, callback) {\n    var nodes = [node];\n    while ((node = nodes.pop()) != null) {\n        callback(node);\n        if ((children = node.children) && (n = children.length)) {\n            var n, children;\n            while (--n >= 0)\n                nodes.push(children[n]);\n        }\n    }\n}\nfunction d3_layout_hierarchyVisitAfter(node, callback) {\n    var nodes = [node], nodes2 = [];\n    while ((node = nodes.pop()) != null) {\n        nodes2.push(node);\n        if ((children = node.children) && (n = children.length)) {\n            var i = -1, n, children;\n            while (++i < n)\n                nodes.push(children[i]);\n        }\n    }\n    while ((node = nodes2.pop()) != null) {\n        callback(node);\n    }\n}\nfunction d3_layout_hierarchyChildren(d) {\n    return d.children;\n}\nfunction d3_layout_hierarchyValue(d) {\n    return d.value;\n}\nfunction d3_layout_hierarchySort(a, b) {\n    return b.value - a.value;\n}\nfunction d3_layout_hierarchyLinks(nodes) {\n    return d3.merge(nodes.map(function (parent) {\n        return (parent.children || []).map(function (child) {\n            return {\n                source: parent,\n                target: child\n            };\n        });\n    }));\n}"
}