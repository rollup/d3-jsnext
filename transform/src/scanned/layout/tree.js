{
  "filepath": "/layout/tree.js",
  "shared": [],
  "dependencies": [
    "d3.layout.hierarchy",
    "d3_layout_hierarchyVisitAfter",
    "d3_layout_hierarchyVisitBefore",
    "d3_layout_hierarchyRebind"
  ],
  "helpers": [
    "d3_layout_treeSeparation",
    "d3_layout_treeLeft",
    "d3_layout_treeRight",
    "d3_layout_treeMove",
    "d3_layout_treeShift",
    "d3_layout_treeAncestor"
  ],
  "exports": [
    "d3.layout.tree"
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
              "name": "tree"
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
                              },
                              "property": {
                                "type": "Identifier",
                                "name": "sort"
                              }
                            },
                            "arguments": [
                              {
                                "type": "Literal",
                                "value": null,
                                "raw": "null"
                              }
                            ]
                          },
                          "property": {
                            "type": "Identifier",
                            "name": "value"
                          }
                        },
                        "arguments": [
                          {
                            "type": "Literal",
                            "value": null,
                            "raw": "null"
                          }
                        ]
                      }
                    },
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "name": "separation"
                      },
                      "init": {
                        "type": "Identifier",
                        "name": "d3_layout_treeSeparation"
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
                        "name": "nodeSize"
                      },
                      "init": {
                        "type": "Literal",
                        "value": null,
                        "raw": "null"
                      }
                    }
                  ],
                  "kind": "var"
                },
                {
                  "type": "FunctionDeclaration",
                  "id": {
                    "type": "Identifier",
                    "name": "tree"
                  },
                  "params": [
                    {
                      "type": "Identifier",
                      "name": "d"
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
                        "type": "VariableDeclaration",
                        "declarations": [
                          {
                            "type": "VariableDeclarator",
                            "id": {
                              "type": "Identifier",
                              "name": "nodes"
                            },
                            "init": {
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
                                  "name": "call"
                                }
                              },
                              "arguments": [
                                {
                                  "type": "ThisExpression"
                                },
                                {
                                  "type": "Identifier",
                                  "name": "d"
                                },
                                {
                                  "type": "Identifier",
                                  "name": "i"
                                }
                              ]
                            }
                          },
                          {
                            "type": "VariableDeclarator",
                            "id": {
                              "type": "Identifier",
                              "name": "root0"
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
                          },
                          {
                            "type": "VariableDeclarator",
                            "id": {
                              "type": "Identifier",
                              "name": "root1"
                            },
                            "init": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "Identifier",
                                "name": "wrapTree"
                              },
                              "arguments": [
                                {
                                  "type": "Identifier",
                                  "name": "root0"
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
                          "type": "SequenceExpression",
                          "expressions": [
                            {
                              "type": "CallExpression",
                              "callee": {
                                "type": "Identifier",
                                "name": "d3_layout_hierarchyVisitAfter"
                              },
                              "arguments": [
                                {
                                  "type": "Identifier",
                                  "name": "root1"
                                },
                                {
                                  "type": "Identifier",
                                  "name": "firstWalk"
                                }
                              ]
                            },
                            {
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
                                    "name": "root1"
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "name": "parent"
                                  }
                                },
                                "property": {
                                  "type": "Identifier",
                                  "name": "m"
                                }
                              },
                              "right": {
                                "type": "UnaryExpression",
                                "operator": "-",
                                "argument": {
                                  "type": "MemberExpression",
                                  "computed": false,
                                  "object": {
                                    "type": "Identifier",
                                    "name": "root1"
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "name": "z"
                                  }
                                },
                                "prefix": true
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
                            "name": "d3_layout_hierarchyVisitBefore"
                          },
                          "arguments": [
                            {
                              "type": "Identifier",
                              "name": "root1"
                            },
                            {
                              "type": "Identifier",
                              "name": "secondWalk"
                            }
                          ]
                        }
                      },
                      {
                        "type": "IfStatement",
                        "test": {
                          "type": "Identifier",
                          "name": "nodeSize"
                        },
                        "consequent": {
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
                                "name": "root0"
                              },
                              {
                                "type": "Identifier",
                                "name": "sizeNode"
                              }
                            ]
                          }
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
                                    "name": "left"
                                  },
                                  "init": {
                                    "type": "Identifier",
                                    "name": "root0"
                                  }
                                },
                                {
                                  "type": "VariableDeclarator",
                                  "id": {
                                    "type": "Identifier",
                                    "name": "right"
                                  },
                                  "init": {
                                    "type": "Identifier",
                                    "name": "root0"
                                  }
                                },
                                {
                                  "type": "VariableDeclarator",
                                  "id": {
                                    "type": "Identifier",
                                    "name": "bottom"
                                  },
                                  "init": {
                                    "type": "Identifier",
                                    "name": "root0"
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
                                  "name": "d3_layout_hierarchyVisitBefore"
                                },
                                "arguments": [
                                  {
                                    "type": "Identifier",
                                    "name": "root0"
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
                                            "type": "BinaryExpression",
                                            "operator": "<",
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
                                              "computed": false,
                                              "object": {
                                                "type": "Identifier",
                                                "name": "left"
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "name": "x"
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
                                                "name": "left"
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
                                          "type": "IfStatement",
                                          "test": {
                                            "type": "BinaryExpression",
                                            "operator": ">",
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
                                              "computed": false,
                                              "object": {
                                                "type": "Identifier",
                                                "name": "right"
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "name": "x"
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
                                                "name": "right"
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
                                          "type": "IfStatement",
                                          "test": {
                                            "type": "BinaryExpression",
                                            "operator": ">",
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
                                              "type": "MemberExpression",
                                              "computed": false,
                                              "object": {
                                                "type": "Identifier",
                                                "name": "bottom"
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "name": "depth"
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
                                                "name": "bottom"
                                              },
                                              "right": {
                                                "type": "Identifier",
                                                "name": "node"
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
                              "type": "VariableDeclaration",
                              "declarations": [
                                {
                                  "type": "VariableDeclarator",
                                  "id": {
                                    "type": "Identifier",
                                    "name": "tx"
                                  },
                                  "init": {
                                    "type": "BinaryExpression",
                                    "operator": "-",
                                    "left": {
                                      "type": "BinaryExpression",
                                      "operator": "/",
                                      "left": {
                                        "type": "CallExpression",
                                        "callee": {
                                          "type": "Identifier",
                                          "name": "separation"
                                        },
                                        "arguments": [
                                          {
                                            "type": "Identifier",
                                            "name": "left"
                                          },
                                          {
                                            "type": "Identifier",
                                            "name": "right"
                                          }
                                        ]
                                      },
                                      "right": {
                                        "type": "Literal",
                                        "value": 2,
                                        "raw": "2"
                                      }
                                    },
                                    "right": {
                                      "type": "MemberExpression",
                                      "computed": false,
                                      "object": {
                                        "type": "Identifier",
                                        "name": "left"
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "name": "x"
                                      }
                                    }
                                  }
                                },
                                {
                                  "type": "VariableDeclarator",
                                  "id": {
                                    "type": "Identifier",
                                    "name": "kx"
                                  },
                                  "init": {
                                    "type": "BinaryExpression",
                                    "operator": "/",
                                    "left": {
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
                                    },
                                    "right": {
                                      "type": "BinaryExpression",
                                      "operator": "+",
                                      "left": {
                                        "type": "BinaryExpression",
                                        "operator": "+",
                                        "left": {
                                          "type": "MemberExpression",
                                          "computed": false,
                                          "object": {
                                            "type": "Identifier",
                                            "name": "right"
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "name": "x"
                                          }
                                        },
                                        "right": {
                                          "type": "BinaryExpression",
                                          "operator": "/",
                                          "left": {
                                            "type": "CallExpression",
                                            "callee": {
                                              "type": "Identifier",
                                              "name": "separation"
                                            },
                                            "arguments": [
                                              {
                                                "type": "Identifier",
                                                "name": "right"
                                              },
                                              {
                                                "type": "Identifier",
                                                "name": "left"
                                              }
                                            ]
                                          },
                                          "right": {
                                            "type": "Literal",
                                            "value": 2,
                                            "raw": "2"
                                          }
                                        }
                                      },
                                      "right": {
                                        "type": "Identifier",
                                        "name": "tx"
                                      }
                                    }
                                  }
                                },
                                {
                                  "type": "VariableDeclarator",
                                  "id": {
                                    "type": "Identifier",
                                    "name": "ky"
                                  },
                                  "init": {
                                    "type": "BinaryExpression",
                                    "operator": "/",
                                    "left": {
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
                                    },
                                    "right": {
                                      "type": "LogicalExpression",
                                      "operator": "||",
                                      "left": {
                                        "type": "MemberExpression",
                                        "computed": false,
                                        "object": {
                                          "type": "Identifier",
                                          "name": "bottom"
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
                              ],
                              "kind": "var"
                            },
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
                                    "name": "root0"
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
                                                "name": "x"
                                              }
                                            },
                                            "right": {
                                              "type": "BinaryExpression",
                                              "operator": "*",
                                              "left": {
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
                                                  "type": "Identifier",
                                                  "name": "tx"
                                                }
                                              },
                                              "right": {
                                                "type": "Identifier",
                                                "name": "kx"
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
                                                "name": "y"
                                              }
                                            },
                                            "right": {
                                              "type": "BinaryExpression",
                                              "operator": "*",
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
                                                "type": "Identifier",
                                                "name": "ky"
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
                  "type": "FunctionDeclaration",
                  "id": {
                    "type": "Identifier",
                    "name": "wrapTree"
                  },
                  "params": [
                    {
                      "type": "Identifier",
                      "name": "root0"
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
                              "name": "root1"
                            },
                            "init": {
                              "type": "ObjectExpression",
                              "properties": [
                                {
                                  "type": "Property",
                                  "key": {
                                    "type": "Identifier",
                                    "name": "A"
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
                                    "name": "children"
                                  },
                                  "value": {
                                    "type": "ArrayExpression",
                                    "elements": [
                                      {
                                        "type": "Identifier",
                                        "name": "root0"
                                      }
                                    ]
                                  },
                                  "kind": "init"
                                }
                              ]
                            }
                          },
                          {
                            "type": "VariableDeclarator",
                            "id": {
                              "type": "Identifier",
                              "name": "queue"
                            },
                            "init": {
                              "type": "ArrayExpression",
                              "elements": [
                                {
                                  "type": "Identifier",
                                  "name": "root1"
                                }
                              ]
                            }
                          },
                          {
                            "type": "VariableDeclarator",
                            "id": {
                              "type": "Identifier",
                              "name": "node1"
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
                          "operator": "!=",
                          "left": {
                            "type": "AssignmentExpression",
                            "operator": "=",
                            "left": {
                              "type": "Identifier",
                              "name": "node1"
                            },
                            "right": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "MemberExpression",
                                "computed": false,
                                "object": {
                                  "type": "Identifier",
                                  "name": "queue"
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
                              "type": "ForStatement",
                              "init": {
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
                                        "name": "node1"
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "name": "children"
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
                                      "name": "i"
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
                                "prefix": true
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
                                          "name": "queue"
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
                                            "type": "MemberExpression",
                                            "computed": false,
                                            "object": {
                                              "type": "AssignmentExpression",
                                              "operator": "=",
                                              "left": {
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
                                              },
                                              "right": {
                                                "type": "AssignmentExpression",
                                                "operator": "=",
                                                "left": {
                                                  "type": "Identifier",
                                                  "name": "child"
                                                },
                                                "right": {
                                                  "type": "ObjectExpression",
                                                  "properties": [
                                                    {
                                                      "type": "Property",
                                                      "key": {
                                                        "type": "Identifier",
                                                        "name": "_"
                                                      },
                                                      "value": {
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
                                                      },
                                                      "kind": "init"
                                                    },
                                                    {
                                                      "type": "Property",
                                                      "key": {
                                                        "type": "Identifier",
                                                        "name": "parent"
                                                      },
                                                      "value": {
                                                        "type": "Identifier",
                                                        "name": "node1"
                                                      },
                                                      "kind": "init"
                                                    },
                                                    {
                                                      "type": "Property",
                                                      "key": {
                                                        "type": "Identifier",
                                                        "name": "children"
                                                      },
                                                      "value": {
                                                        "type": "LogicalExpression",
                                                        "operator": "||",
                                                        "left": {
                                                          "type": "LogicalExpression",
                                                          "operator": "&&",
                                                          "left": {
                                                            "type": "AssignmentExpression",
                                                            "operator": "=",
                                                            "left": {
                                                              "type": "Identifier",
                                                              "name": "child"
                                                            },
                                                            "right": {
                                                              "type": "MemberExpression",
                                                              "computed": false,
                                                              "object": {
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
                                                              },
                                                              "property": {
                                                                "type": "Identifier",
                                                                "name": "children"
                                                              }
                                                            }
                                                          },
                                                          "right": {
                                                            "type": "CallExpression",
                                                            "callee": {
                                                              "type": "MemberExpression",
                                                              "computed": false,
                                                              "object": {
                                                                "type": "Identifier",
                                                                "name": "child"
                                                              },
                                                              "property": {
                                                                "type": "Identifier",
                                                                "name": "slice"
                                                              }
                                                            },
                                                            "arguments": []
                                                          }
                                                        },
                                                        "right": {
                                                          "type": "ArrayExpression",
                                                          "elements": []
                                                        }
                                                      },
                                                      "kind": "init"
                                                    },
                                                    {
                                                      "type": "Property",
                                                      "key": {
                                                        "type": "Identifier",
                                                        "name": "A"
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
                                                        "name": "a"
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
                                                        "name": "z"
                                                      },
                                                      "value": {
                                                        "type": "Literal",
                                                        "value": 0,
                                                        "raw": "0"
                                                      },
                                                      "kind": "init"
                                                    },
                                                    {
                                                      "type": "Property",
                                                      "key": {
                                                        "type": "Identifier",
                                                        "name": "m"
                                                      },
                                                      "value": {
                                                        "type": "Literal",
                                                        "value": 0,
                                                        "raw": "0"
                                                      },
                                                      "kind": "init"
                                                    },
                                                    {
                                                      "type": "Property",
                                                      "key": {
                                                        "type": "Identifier",
                                                        "name": "c"
                                                      },
                                                      "value": {
                                                        "type": "Literal",
                                                        "value": 0,
                                                        "raw": "0"
                                                      },
                                                      "kind": "init"
                                                    },
                                                    {
                                                      "type": "Property",
                                                      "key": {
                                                        "type": "Identifier",
                                                        "name": "s"
                                                      },
                                                      "value": {
                                                        "type": "Literal",
                                                        "value": 0,
                                                        "raw": "0"
                                                      },
                                                      "kind": "init"
                                                    },
                                                    {
                                                      "type": "Property",
                                                      "key": {
                                                        "type": "Identifier",
                                                        "name": "t"
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
                                                        "name": "i"
                                                      },
                                                      "value": {
                                                        "type": "Identifier",
                                                        "name": "i"
                                                      },
                                                      "kind": "init"
                                                    }
                                                  ]
                                                }
                                              }
                                            },
                                            "property": {
                                              "type": "Identifier",
                                              "name": "a"
                                            }
                                          },
                                          "right": {
                                            "type": "Identifier",
                                            "name": "child"
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
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "MemberExpression",
                          "computed": true,
                          "object": {
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "name": "root1"
                            },
                            "property": {
                              "type": "Identifier",
                              "name": "children"
                            }
                          },
                          "property": {
                            "type": "Literal",
                            "value": 0,
                            "raw": "0"
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
                    "name": "firstWalk"
                  },
                  "params": [
                    {
                      "type": "Identifier",
                      "name": "v"
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
                                "name": "v"
                              },
                              "property": {
                                "type": "Identifier",
                                "name": "children"
                              }
                            }
                          },
                          {
                            "type": "VariableDeclarator",
                            "id": {
                              "type": "Identifier",
                              "name": "siblings"
                            },
                            "init": {
                              "type": "MemberExpression",
                              "computed": false,
                              "object": {
                                "type": "MemberExpression",
                                "computed": false,
                                "object": {
                                  "type": "Identifier",
                                  "name": "v"
                                },
                                "property": {
                                  "type": "Identifier",
                                  "name": "parent"
                                }
                              },
                              "property": {
                                "type": "Identifier",
                                "name": "children"
                              }
                            }
                          },
                          {
                            "type": "VariableDeclarator",
                            "id": {
                              "type": "Identifier",
                              "name": "w"
                            },
                            "init": {
                              "type": "ConditionalExpression",
                              "test": {
                                "type": "MemberExpression",
                                "computed": false,
                                "object": {
                                  "type": "Identifier",
                                  "name": "v"
                                },
                                "property": {
                                  "type": "Identifier",
                                  "name": "i"
                                }
                              },
                              "consequent": {
                                "type": "MemberExpression",
                                "computed": true,
                                "object": {
                                  "type": "Identifier",
                                  "name": "siblings"
                                },
                                "property": {
                                  "type": "BinaryExpression",
                                  "operator": "-",
                                  "left": {
                                    "type": "MemberExpression",
                                    "computed": false,
                                    "object": {
                                      "type": "Identifier",
                                      "name": "v"
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "name": "i"
                                    }
                                  },
                                  "right": {
                                    "type": "Literal",
                                    "value": 1,
                                    "raw": "1"
                                  }
                                }
                              },
                              "alternate": {
                                "type": "Literal",
                                "value": null,
                                "raw": "null"
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
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "name": "children"
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
                                  "name": "d3_layout_treeShift"
                                },
                                "arguments": [
                                  {
                                    "type": "Identifier",
                                    "name": "v"
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
                                    "name": "midpoint"
                                  },
                                  "init": {
                                    "type": "BinaryExpression",
                                    "operator": "/",
                                    "left": {
                                      "type": "BinaryExpression",
                                      "operator": "+",
                                      "left": {
                                        "type": "MemberExpression",
                                        "computed": false,
                                        "object": {
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
                                        "property": {
                                          "type": "Identifier",
                                          "name": "z"
                                        }
                                      },
                                      "right": {
                                        "type": "MemberExpression",
                                        "computed": false,
                                        "object": {
                                          "type": "MemberExpression",
                                          "computed": true,
                                          "object": {
                                            "type": "Identifier",
                                            "name": "children"
                                          },
                                          "property": {
                                            "type": "BinaryExpression",
                                            "operator": "-",
                                            "left": {
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
                                            },
                                            "right": {
                                              "type": "Literal",
                                              "value": 1,
                                              "raw": "1"
                                            }
                                          }
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "name": "z"
                                        }
                                      }
                                    },
                                    "right": {
                                      "type": "Literal",
                                      "value": 2,
                                      "raw": "2"
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
                                "name": "w"
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
                                          "name": "v"
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "name": "z"
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
                                            "name": "w"
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "name": "z"
                                          }
                                        },
                                        "right": {
                                          "type": "CallExpression",
                                          "callee": {
                                            "type": "Identifier",
                                            "name": "separation"
                                          },
                                          "arguments": [
                                            {
                                              "type": "MemberExpression",
                                              "computed": false,
                                              "object": {
                                                "type": "Identifier",
                                                "name": "v"
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "name": "_"
                                              }
                                            },
                                            {
                                              "type": "MemberExpression",
                                              "computed": false,
                                              "object": {
                                                "type": "Identifier",
                                                "name": "w"
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "name": "_"
                                              }
                                            }
                                          ]
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
                                          "name": "v"
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "name": "m"
                                        }
                                      },
                                      "right": {
                                        "type": "BinaryExpression",
                                        "operator": "-",
                                        "left": {
                                          "type": "MemberExpression",
                                          "computed": false,
                                          "object": {
                                            "type": "Identifier",
                                            "name": "v"
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "name": "z"
                                          }
                                        },
                                        "right": {
                                          "type": "Identifier",
                                          "name": "midpoint"
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
                                          "name": "v"
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "name": "z"
                                        }
                                      },
                                      "right": {
                                        "type": "Identifier",
                                        "name": "midpoint"
                                      }
                                    }
                                  }
                                ]
                              }
                            }
                          ]
                        },
                        "alternate": {
                          "type": "IfStatement",
                          "test": {
                            "type": "Identifier",
                            "name": "w"
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
                                      "name": "v"
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "name": "z"
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
                                        "name": "w"
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "name": "z"
                                      }
                                    },
                                    "right": {
                                      "type": "CallExpression",
                                      "callee": {
                                        "type": "Identifier",
                                        "name": "separation"
                                      },
                                      "arguments": [
                                        {
                                          "type": "MemberExpression",
                                          "computed": false,
                                          "object": {
                                            "type": "Identifier",
                                            "name": "v"
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "name": "_"
                                          }
                                        },
                                        {
                                          "type": "MemberExpression",
                                          "computed": false,
                                          "object": {
                                            "type": "Identifier",
                                            "name": "w"
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "name": "_"
                                          }
                                        }
                                      ]
                                    }
                                  }
                                }
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
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                              "type": "MemberExpression",
                              "computed": false,
                              "object": {
                                "type": "Identifier",
                                "name": "v"
                              },
                              "property": {
                                "type": "Identifier",
                                "name": "parent"
                              }
                            },
                            "property": {
                              "type": "Identifier",
                              "name": "A"
                            }
                          },
                          "right": {
                            "type": "CallExpression",
                            "callee": {
                              "type": "Identifier",
                              "name": "apportion"
                            },
                            "arguments": [
                              {
                                "type": "Identifier",
                                "name": "v"
                              },
                              {
                                "type": "Identifier",
                                "name": "w"
                              },
                              {
                                "type": "LogicalExpression",
                                "operator": "||",
                                "left": {
                                  "type": "MemberExpression",
                                  "computed": false,
                                  "object": {
                                    "type": "MemberExpression",
                                    "computed": false,
                                    "object": {
                                      "type": "Identifier",
                                      "name": "v"
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "name": "parent"
                                    }
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "name": "A"
                                  }
                                },
                                "right": {
                                  "type": "MemberExpression",
                                  "computed": true,
                                  "object": {
                                    "type": "Identifier",
                                    "name": "siblings"
                                  },
                                  "property": {
                                    "type": "Literal",
                                    "value": 0,
                                    "raw": "0"
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
                    "name": "secondWalk"
                  },
                  "params": [
                    {
                      "type": "Identifier",
                      "name": "v"
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
                              "type": "MemberExpression",
                              "computed": false,
                              "object": {
                                "type": "Identifier",
                                "name": "v"
                              },
                              "property": {
                                "type": "Identifier",
                                "name": "_"
                              }
                            },
                            "property": {
                              "type": "Identifier",
                              "name": "x"
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
                                "name": "v"
                              },
                              "property": {
                                "type": "Identifier",
                                "name": "z"
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
                                  "name": "v"
                                },
                                "property": {
                                  "type": "Identifier",
                                  "name": "parent"
                                }
                              },
                              "property": {
                                "type": "Identifier",
                                "name": "m"
                              }
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
                              "name": "v"
                            },
                            "property": {
                              "type": "Identifier",
                              "name": "m"
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
                                "name": "v"
                              },
                              "property": {
                                "type": "Identifier",
                                "name": "parent"
                              }
                            },
                            "property": {
                              "type": "Identifier",
                              "name": "m"
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
                    "name": "apportion"
                  },
                  "params": [
                    {
                      "type": "Identifier",
                      "name": "v"
                    },
                    {
                      "type": "Identifier",
                      "name": "w"
                    },
                    {
                      "type": "Identifier",
                      "name": "ancestor"
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
                          "name": "w"
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
                                    "name": "vip"
                                  },
                                  "init": {
                                    "type": "Identifier",
                                    "name": "v"
                                  }
                                },
                                {
                                  "type": "VariableDeclarator",
                                  "id": {
                                    "type": "Identifier",
                                    "name": "vop"
                                  },
                                  "init": {
                                    "type": "Identifier",
                                    "name": "v"
                                  }
                                },
                                {
                                  "type": "VariableDeclarator",
                                  "id": {
                                    "type": "Identifier",
                                    "name": "vim"
                                  },
                                  "init": {
                                    "type": "Identifier",
                                    "name": "w"
                                  }
                                },
                                {
                                  "type": "VariableDeclarator",
                                  "id": {
                                    "type": "Identifier",
                                    "name": "vom"
                                  },
                                  "init": {
                                    "type": "MemberExpression",
                                    "computed": true,
                                    "object": {
                                      "type": "MemberExpression",
                                      "computed": false,
                                      "object": {
                                        "type": "MemberExpression",
                                        "computed": false,
                                        "object": {
                                          "type": "Identifier",
                                          "name": "vip"
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "name": "parent"
                                        }
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "name": "children"
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
                                    "name": "sip"
                                  },
                                  "init": {
                                    "type": "MemberExpression",
                                    "computed": false,
                                    "object": {
                                      "type": "Identifier",
                                      "name": "vip"
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "name": "m"
                                    }
                                  }
                                },
                                {
                                  "type": "VariableDeclarator",
                                  "id": {
                                    "type": "Identifier",
                                    "name": "sop"
                                  },
                                  "init": {
                                    "type": "MemberExpression",
                                    "computed": false,
                                    "object": {
                                      "type": "Identifier",
                                      "name": "vop"
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "name": "m"
                                    }
                                  }
                                },
                                {
                                  "type": "VariableDeclarator",
                                  "id": {
                                    "type": "Identifier",
                                    "name": "sim"
                                  },
                                  "init": {
                                    "type": "MemberExpression",
                                    "computed": false,
                                    "object": {
                                      "type": "Identifier",
                                      "name": "vim"
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "name": "m"
                                    }
                                  }
                                },
                                {
                                  "type": "VariableDeclarator",
                                  "id": {
                                    "type": "Identifier",
                                    "name": "som"
                                  },
                                  "init": {
                                    "type": "MemberExpression",
                                    "computed": false,
                                    "object": {
                                      "type": "Identifier",
                                      "name": "vom"
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "name": "m"
                                    }
                                  }
                                },
                                {
                                  "type": "VariableDeclarator",
                                  "id": {
                                    "type": "Identifier",
                                    "name": "shift"
                                  },
                                  "init": null
                                }
                              ],
                              "kind": "var"
                            },
                            {
                              "type": "WhileStatement",
                              "test": {
                                "type": "SequenceExpression",
                                "expressions": [
                                  {
                                    "type": "AssignmentExpression",
                                    "operator": "=",
                                    "left": {
                                      "type": "Identifier",
                                      "name": "vim"
                                    },
                                    "right": {
                                      "type": "CallExpression",
                                      "callee": {
                                        "type": "Identifier",
                                        "name": "d3_layout_treeRight"
                                      },
                                      "arguments": [
                                        {
                                          "type": "Identifier",
                                          "name": "vim"
                                        }
                                      ]
                                    }
                                  },
                                  {
                                    "type": "AssignmentExpression",
                                    "operator": "=",
                                    "left": {
                                      "type": "Identifier",
                                      "name": "vip"
                                    },
                                    "right": {
                                      "type": "CallExpression",
                                      "callee": {
                                        "type": "Identifier",
                                        "name": "d3_layout_treeLeft"
                                      },
                                      "arguments": [
                                        {
                                          "type": "Identifier",
                                          "name": "vip"
                                        }
                                      ]
                                    }
                                  },
                                  {
                                    "type": "LogicalExpression",
                                    "operator": "&&",
                                    "left": {
                                      "type": "Identifier",
                                      "name": "vim"
                                    },
                                    "right": {
                                      "type": "Identifier",
                                      "name": "vip"
                                    }
                                  }
                                ]
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
                                        "name": "vom"
                                      },
                                      "right": {
                                        "type": "CallExpression",
                                        "callee": {
                                          "type": "Identifier",
                                          "name": "d3_layout_treeLeft"
                                        },
                                        "arguments": [
                                          {
                                            "type": "Identifier",
                                            "name": "vom"
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
                                        "name": "vop"
                                      },
                                      "right": {
                                        "type": "CallExpression",
                                        "callee": {
                                          "type": "Identifier",
                                          "name": "d3_layout_treeRight"
                                        },
                                        "arguments": [
                                          {
                                            "type": "Identifier",
                                            "name": "vop"
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
                                          "name": "vop"
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "name": "a"
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
                                      "operator": "=",
                                      "left": {
                                        "type": "Identifier",
                                        "name": "shift"
                                      },
                                      "right": {
                                        "type": "BinaryExpression",
                                        "operator": "+",
                                        "left": {
                                          "type": "BinaryExpression",
                                          "operator": "-",
                                          "left": {
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
                                                  "name": "vim"
                                                },
                                                "property": {
                                                  "type": "Identifier",
                                                  "name": "z"
                                                }
                                              },
                                              "right": {
                                                "type": "Identifier",
                                                "name": "sim"
                                              }
                                            },
                                            "right": {
                                              "type": "MemberExpression",
                                              "computed": false,
                                              "object": {
                                                "type": "Identifier",
                                                "name": "vip"
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "name": "z"
                                              }
                                            }
                                          },
                                          "right": {
                                            "type": "Identifier",
                                            "name": "sip"
                                          }
                                        },
                                        "right": {
                                          "type": "CallExpression",
                                          "callee": {
                                            "type": "Identifier",
                                            "name": "separation"
                                          },
                                          "arguments": [
                                            {
                                              "type": "MemberExpression",
                                              "computed": false,
                                              "object": {
                                                "type": "Identifier",
                                                "name": "vim"
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "name": "_"
                                              }
                                            },
                                            {
                                              "type": "MemberExpression",
                                              "computed": false,
                                              "object": {
                                                "type": "Identifier",
                                                "name": "vip"
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "name": "_"
                                              }
                                            }
                                          ]
                                        }
                                      }
                                    }
                                  },
                                  {
                                    "type": "IfStatement",
                                    "test": {
                                      "type": "BinaryExpression",
                                      "operator": ">",
                                      "left": {
                                        "type": "Identifier",
                                        "name": "shift"
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
                                            "type": "CallExpression",
                                            "callee": {
                                              "type": "Identifier",
                                              "name": "d3_layout_treeMove"
                                            },
                                            "arguments": [
                                              {
                                                "type": "CallExpression",
                                                "callee": {
                                                  "type": "Identifier",
                                                  "name": "d3_layout_treeAncestor"
                                                },
                                                "arguments": [
                                                  {
                                                    "type": "Identifier",
                                                    "name": "vim"
                                                  },
                                                  {
                                                    "type": "Identifier",
                                                    "name": "v"
                                                  },
                                                  {
                                                    "type": "Identifier",
                                                    "name": "ancestor"
                                                  }
                                                ]
                                              },
                                              {
                                                "type": "Identifier",
                                                "name": "v"
                                              },
                                              {
                                                "type": "Identifier",
                                                "name": "shift"
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
                                              "type": "Identifier",
                                              "name": "sip"
                                            },
                                            "right": {
                                              "type": "Identifier",
                                              "name": "shift"
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
                                              "name": "sop"
                                            },
                                            "right": {
                                              "type": "Identifier",
                                              "name": "shift"
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
                                      "operator": "+=",
                                      "left": {
                                        "type": "Identifier",
                                        "name": "sim"
                                      },
                                      "right": {
                                        "type": "MemberExpression",
                                        "computed": false,
                                        "object": {
                                          "type": "Identifier",
                                          "name": "vim"
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "name": "m"
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
                                        "type": "Identifier",
                                        "name": "sip"
                                      },
                                      "right": {
                                        "type": "MemberExpression",
                                        "computed": false,
                                        "object": {
                                          "type": "Identifier",
                                          "name": "vip"
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "name": "m"
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
                                        "type": "Identifier",
                                        "name": "som"
                                      },
                                      "right": {
                                        "type": "MemberExpression",
                                        "computed": false,
                                        "object": {
                                          "type": "Identifier",
                                          "name": "vom"
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "name": "m"
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
                                        "type": "Identifier",
                                        "name": "sop"
                                      },
                                      "right": {
                                        "type": "MemberExpression",
                                        "computed": false,
                                        "object": {
                                          "type": "Identifier",
                                          "name": "vop"
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "name": "m"
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
                                "type": "LogicalExpression",
                                "operator": "&&",
                                "left": {
                                  "type": "Identifier",
                                  "name": "vim"
                                },
                                "right": {
                                  "type": "UnaryExpression",
                                  "operator": "!",
                                  "argument": {
                                    "type": "CallExpression",
                                    "callee": {
                                      "type": "Identifier",
                                      "name": "d3_layout_treeRight"
                                    },
                                    "arguments": [
                                      {
                                        "type": "Identifier",
                                        "name": "vop"
                                      }
                                    ]
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
                                          "name": "vop"
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "name": "t"
                                        }
                                      },
                                      "right": {
                                        "type": "Identifier",
                                        "name": "vim"
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
                                          "name": "vop"
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "name": "m"
                                        }
                                      },
                                      "right": {
                                        "type": "BinaryExpression",
                                        "operator": "-",
                                        "left": {
                                          "type": "Identifier",
                                          "name": "sim"
                                        },
                                        "right": {
                                          "type": "Identifier",
                                          "name": "sop"
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
                                "operator": "&&",
                                "left": {
                                  "type": "Identifier",
                                  "name": "vip"
                                },
                                "right": {
                                  "type": "UnaryExpression",
                                  "operator": "!",
                                  "argument": {
                                    "type": "CallExpression",
                                    "callee": {
                                      "type": "Identifier",
                                      "name": "d3_layout_treeLeft"
                                    },
                                    "arguments": [
                                      {
                                        "type": "Identifier",
                                        "name": "vom"
                                      }
                                    ]
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
                                          "name": "vom"
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "name": "t"
                                        }
                                      },
                                      "right": {
                                        "type": "Identifier",
                                        "name": "vip"
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
                                          "name": "vom"
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "name": "m"
                                        }
                                      },
                                      "right": {
                                        "type": "BinaryExpression",
                                        "operator": "-",
                                        "left": {
                                          "type": "Identifier",
                                          "name": "sip"
                                        },
                                        "right": {
                                          "type": "Identifier",
                                          "name": "som"
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
                                        "name": "ancestor"
                                      },
                                      "right": {
                                        "type": "Identifier",
                                        "name": "v"
                                      }
                                    }
                                  }
                                ]
                              },
                              "alternate": null
                            }
                          ]
                        },
                        "alternate": null
                      },
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "Identifier",
                          "name": "ancestor"
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
                    "name": "sizeNode"
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
                          "operator": "*=",
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
                              "name": "node"
                            },
                            "property": {
                              "type": "Identifier",
                              "name": "y"
                            }
                          },
                          "right": {
                            "type": "BinaryExpression",
                            "operator": "*",
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
                        "name": "tree"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "separation"
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
                                "name": "separation"
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
                                "name": "separation"
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
                              "name": "tree"
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
                        "name": "tree"
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
                                "type": "ConditionalExpression",
                                "test": {
                                  "type": "Identifier",
                                  "name": "nodeSize"
                                },
                                "consequent": {
                                  "type": "Literal",
                                  "value": null,
                                  "raw": "null"
                                },
                                "alternate": {
                                  "type": "Identifier",
                                  "name": "size"
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
                                "name": "nodeSize"
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
                                      "name": "size"
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
                                  "name": "sizeNode"
                                },
                                "alternate": {
                                  "type": "Literal",
                                  "value": null,
                                  "raw": "null"
                                }
                              }
                            }
                          },
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "Identifier",
                              "name": "tree"
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
                        "name": "tree"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "nodeSize"
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
                                "type": "ConditionalExpression",
                                "test": {
                                  "type": "Identifier",
                                  "name": "nodeSize"
                                },
                                "consequent": {
                                  "type": "Identifier",
                                  "name": "size"
                                },
                                "alternate": {
                                  "type": "Literal",
                                  "value": null,
                                  "raw": "null"
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
                                "name": "nodeSize"
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
                                      "name": "size"
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
                                  "type": "Literal",
                                  "value": null,
                                  "raw": "null"
                                },
                                "alternate": {
                                  "type": "Identifier",
                                  "name": "sizeNode"
                                }
                              }
                            }
                          },
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "Identifier",
                              "name": "tree"
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
                        "name": "tree"
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
          "name": "d3_layout_treeSeparation"
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
                "type": "ConditionalExpression",
                "test": {
                  "type": "BinaryExpression",
                  "operator": "==",
                  "left": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "name": "a"
                    },
                    "property": {
                      "type": "Identifier",
                      "name": "parent"
                    }
                  },
                  "right": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "name": "b"
                    },
                    "property": {
                      "type": "Identifier",
                      "name": "parent"
                    }
                  }
                },
                "consequent": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1"
                },
                "alternate": {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2"
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
          "name": "d3_layout_treeLeft"
        },
        "params": [
          {
            "type": "Identifier",
            "name": "v"
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
                      "name": "v"
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
              "type": "ReturnStatement",
              "argument": {
                "type": "ConditionalExpression",
                "test": {
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
                },
                "consequent": {
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
                "alternate": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "name": "v"
                  },
                  "property": {
                    "type": "Identifier",
                    "name": "t"
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
          "name": "d3_layout_treeRight"
        },
        "params": [
          {
            "type": "Identifier",
            "name": "v"
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
                      "name": "v"
                    },
                    "property": {
                      "type": "Identifier",
                      "name": "children"
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
              "type": "ReturnStatement",
              "argument": {
                "type": "ConditionalExpression",
                "test": {
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
                },
                "consequent": {
                  "type": "MemberExpression",
                  "computed": true,
                  "object": {
                    "type": "Identifier",
                    "name": "children"
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
                },
                "alternate": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "name": "v"
                  },
                  "property": {
                    "type": "Identifier",
                    "name": "t"
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
          "name": "d3_layout_treeMove"
        },
        "params": [
          {
            "type": "Identifier",
            "name": "wm"
          },
          {
            "type": "Identifier",
            "name": "wp"
          },
          {
            "type": "Identifier",
            "name": "shift"
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
                    "name": "change"
                  },
                  "init": {
                    "type": "BinaryExpression",
                    "operator": "/",
                    "left": {
                      "type": "Identifier",
                      "name": "shift"
                    },
                    "right": {
                      "type": "BinaryExpression",
                      "operator": "-",
                      "left": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "name": "wp"
                        },
                        "property": {
                          "type": "Identifier",
                          "name": "i"
                        }
                      },
                      "right": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "name": "wm"
                        },
                        "property": {
                          "type": "Identifier",
                          "name": "i"
                        }
                      }
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
                "operator": "-=",
                "left": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "name": "wp"
                  },
                  "property": {
                    "type": "Identifier",
                    "name": "c"
                  }
                },
                "right": {
                  "type": "Identifier",
                  "name": "change"
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
                    "name": "wp"
                  },
                  "property": {
                    "type": "Identifier",
                    "name": "s"
                  }
                },
                "right": {
                  "type": "Identifier",
                  "name": "shift"
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
                    "name": "wm"
                  },
                  "property": {
                    "type": "Identifier",
                    "name": "c"
                  }
                },
                "right": {
                  "type": "Identifier",
                  "name": "change"
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
                    "name": "wp"
                  },
                  "property": {
                    "type": "Identifier",
                    "name": "z"
                  }
                },
                "right": {
                  "type": "Identifier",
                  "name": "shift"
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
                    "name": "wp"
                  },
                  "property": {
                    "type": "Identifier",
                    "name": "m"
                  }
                },
                "right": {
                  "type": "Identifier",
                  "name": "shift"
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
          "name": "d3_layout_treeShift"
        },
        "params": [
          {
            "type": "Identifier",
            "name": "v"
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
                    "name": "shift"
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
                    "name": "change"
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
                    "name": "children"
                  },
                  "init": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "name": "v"
                    },
                    "property": {
                      "type": "Identifier",
                      "name": "children"
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
                    "name": "w"
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
                    "name": "i"
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
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "name": "w"
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
                          "name": "w"
                        },
                        "property": {
                          "type": "Identifier",
                          "name": "z"
                        }
                      },
                      "right": {
                        "type": "Identifier",
                        "name": "shift"
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
                          "name": "w"
                        },
                        "property": {
                          "type": "Identifier",
                          "name": "m"
                        }
                      },
                      "right": {
                        "type": "Identifier",
                        "name": "shift"
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
                        "name": "shift"
                      },
                      "right": {
                        "type": "BinaryExpression",
                        "operator": "+",
                        "left": {
                          "type": "MemberExpression",
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "name": "w"
                          },
                          "property": {
                            "type": "Identifier",
                            "name": "s"
                          }
                        },
                        "right": {
                          "type": "AssignmentExpression",
                          "operator": "+=",
                          "left": {
                            "type": "Identifier",
                            "name": "change"
                          },
                          "right": {
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "name": "w"
                            },
                            "property": {
                              "type": "Identifier",
                              "name": "c"
                            }
                          }
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
          "name": "d3_layout_treeAncestor"
        },
        "params": [
          {
            "type": "Identifier",
            "name": "vim"
          },
          {
            "type": "Identifier",
            "name": "v"
          },
          {
            "type": "Identifier",
            "name": "ancestor"
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
                  "operator": "===",
                  "left": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "name": "vim"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "a"
                      }
                    },
                    "property": {
                      "type": "Identifier",
                      "name": "parent"
                    }
                  },
                  "right": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "name": "v"
                    },
                    "property": {
                      "type": "Identifier",
                      "name": "parent"
                    }
                  }
                },
                "consequent": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "name": "vim"
                  },
                  "property": {
                    "type": "Identifier",
                    "name": "a"
                  }
                },
                "alternate": {
                  "type": "Identifier",
                  "name": "ancestor"
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
  "src": "d3.layout.tree = function () {\n    var hierarchy = d3.layout.hierarchy().sort(null).value(null), separation = d3_layout_treeSeparation, size = [\n            1,\n            1\n        ], nodeSize = null;\n    function tree(d, i) {\n        var nodes = hierarchy.call(this, d, i), root0 = nodes[0], root1 = wrapTree(root0);\n        d3_layout_hierarchyVisitAfter(root1, firstWalk), root1.parent.m = -root1.z;\n        d3_layout_hierarchyVisitBefore(root1, secondWalk);\n        if (nodeSize)\n            d3_layout_hierarchyVisitBefore(root0, sizeNode);\n        else {\n            var left = root0, right = root0, bottom = root0;\n            d3_layout_hierarchyVisitBefore(root0, function (node) {\n                if (node.x < left.x)\n                    left = node;\n                if (node.x > right.x)\n                    right = node;\n                if (node.depth > bottom.depth)\n                    bottom = node;\n            });\n            var tx = separation(left, right) / 2 - left.x, kx = size[0] / (right.x + separation(right, left) / 2 + tx), ky = size[1] / (bottom.depth || 1);\n            d3_layout_hierarchyVisitBefore(root0, function (node) {\n                node.x = (node.x + tx) * kx;\n                node.y = node.depth * ky;\n            });\n        }\n        return nodes;\n    }\n    function wrapTree(root0) {\n        var root1 = {\n                A: null,\n                children: [root0]\n            }, queue = [root1], node1;\n        while ((node1 = queue.pop()) != null) {\n            for (var children = node1.children, child, i = 0, n = children.length; i < n; ++i) {\n                queue.push((children[i] = child = {\n                    _: children[i],\n                    parent: node1,\n                    children: (child = children[i].children) && child.slice() || [],\n                    A: null,\n                    a: null,\n                    z: 0,\n                    m: 0,\n                    c: 0,\n                    s: 0,\n                    t: null,\n                    i: i\n                }).a = child);\n            }\n        }\n        return root1.children[0];\n    }\n    function firstWalk(v) {\n        var children = v.children, siblings = v.parent.children, w = v.i ? siblings[v.i - 1] : null;\n        if (children.length) {\n            d3_layout_treeShift(v);\n            var midpoint = (children[0].z + children[children.length - 1].z) / 2;\n            if (w) {\n                v.z = w.z + separation(v._, w._);\n                v.m = v.z - midpoint;\n            } else {\n                v.z = midpoint;\n            }\n        } else if (w) {\n            v.z = w.z + separation(v._, w._);\n        }\n        v.parent.A = apportion(v, w, v.parent.A || siblings[0]);\n    }\n    function secondWalk(v) {\n        v._.x = v.z + v.parent.m;\n        v.m += v.parent.m;\n    }\n    function apportion(v, w, ancestor) {\n        if (w) {\n            var vip = v, vop = v, vim = w, vom = vip.parent.children[0], sip = vip.m, sop = vop.m, sim = vim.m, som = vom.m, shift;\n            while (vim = d3_layout_treeRight(vim), vip = d3_layout_treeLeft(vip), vim && vip) {\n                vom = d3_layout_treeLeft(vom);\n                vop = d3_layout_treeRight(vop);\n                vop.a = v;\n                shift = vim.z + sim - vip.z - sip + separation(vim._, vip._);\n                if (shift > 0) {\n                    d3_layout_treeMove(d3_layout_treeAncestor(vim, v, ancestor), v, shift);\n                    sip += shift;\n                    sop += shift;\n                }\n                sim += vim.m;\n                sip += vip.m;\n                som += vom.m;\n                sop += vop.m;\n            }\n            if (vim && !d3_layout_treeRight(vop)) {\n                vop.t = vim;\n                vop.m += sim - sop;\n            }\n            if (vip && !d3_layout_treeLeft(vom)) {\n                vom.t = vip;\n                vom.m += sip - som;\n                ancestor = v;\n            }\n        }\n        return ancestor;\n    }\n    function sizeNode(node) {\n        node.x *= size[0];\n        node.y = node.depth * size[1];\n    }\n    tree.separation = function (x) {\n        if (!arguments.length)\n            return separation;\n        separation = x;\n        return tree;\n    };\n    tree.size = function (x) {\n        if (!arguments.length)\n            return nodeSize ? null : size;\n        nodeSize = (size = x) == null ? sizeNode : null;\n        return tree;\n    };\n    tree.nodeSize = function (x) {\n        if (!arguments.length)\n            return nodeSize ? size : null;\n        nodeSize = (size = x) == null ? null : sizeNode;\n        return tree;\n    };\n    return d3_layout_hierarchyRebind(tree, hierarchy);\n};\nfunction d3_layout_treeSeparation(a, b) {\n    return a.parent == b.parent ? 1 : 2;\n}\nfunction d3_layout_treeLeft(v) {\n    var children = v.children;\n    return children.length ? children[0] : v.t;\n}\nfunction d3_layout_treeRight(v) {\n    var children = v.children, n;\n    return (n = children.length) ? children[n - 1] : v.t;\n}\nfunction d3_layout_treeMove(wm, wp, shift) {\n    var change = shift / (wp.i - wm.i);\n    wp.c -= change;\n    wp.s += shift;\n    wm.c += change;\n    wp.z += shift;\n    wp.m += shift;\n}\nfunction d3_layout_treeShift(v) {\n    var shift = 0, change = 0, children = v.children, i = children.length, w;\n    while (--i >= 0) {\n        w = children[i];\n        w.z += shift;\n        w.m += shift;\n        shift += w.s + (change += w.c);\n    }\n}\nfunction d3_layout_treeAncestor(vim, v, ancestor) {\n    return vim.a.parent === v.parent ? vim.a : ancestor;\n}"
}