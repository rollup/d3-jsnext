{
  "filepath": "/layout/cluster.js",
  "shared": [],
  "dependencies": [
    "d3.layout.hierarchy",
    "d3_layout_treeSeparation",
    "d3_layout_hierarchyVisitAfter",
    "d3_layout_hierarchyRebind",
    "d3.max"
  ],
  "helpers": [
    "d3_layout_clusterY",
    "d3_layout_clusterX",
    "d3_layout_clusterLeft",
    "d3_layout_clusterRight"
  ],
  "exports": [
    "d3.layout.cluster"
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
              "name": "cluster"
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
                        "value": false,
                        "raw": "false"
                      }
                    }
                  ],
                  "kind": "var"
                },
                {
                  "type": "FunctionDeclaration",
                  "id": {
                    "type": "Identifier",
                    "name": "cluster"
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
                          },
                          {
                            "type": "VariableDeclarator",
                            "id": {
                              "type": "Identifier",
                              "name": "previousNode"
                            },
                            "init": null
                          },
                          {
                            "type": "VariableDeclarator",
                            "id": {
                              "type": "Identifier",
                              "name": "x"
                            },
                            "init": {
                              "type": "Literal",
                              "value": 0,
                              "raw": "0"
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
                                              "type": "CallExpression",
                                              "callee": {
                                                "type": "Identifier",
                                                "name": "d3_layout_clusterX"
                                              },
                                              "arguments": [
                                                {
                                                  "type": "Identifier",
                                                  "name": "children"
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
                                                "name": "y"
                                              }
                                            },
                                            "right": {
                                              "type": "CallExpression",
                                              "callee": {
                                                "type": "Identifier",
                                                "name": "d3_layout_clusterY"
                                              },
                                              "arguments": [
                                                {
                                                  "type": "Identifier",
                                                  "name": "children"
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
                                              "type": "ConditionalExpression",
                                              "test": {
                                                "type": "Identifier",
                                                "name": "previousNode"
                                              },
                                              "consequent": {
                                                "type": "AssignmentExpression",
                                                "operator": "+=",
                                                "left": {
                                                  "type": "Identifier",
                                                  "name": "x"
                                                },
                                                "right": {
                                                  "type": "CallExpression",
                                                  "callee": {
                                                    "type": "Identifier",
                                                    "name": "separation"
                                                  },
                                                  "arguments": [
                                                    {
                                                      "type": "Identifier",
                                                      "name": "node"
                                                    },
                                                    {
                                                      "type": "Identifier",
                                                      "name": "previousNode"
                                                    }
                                                  ]
                                                }
                                              },
                                              "alternate": {
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
                                              "type": "Identifier",
                                              "name": "previousNode"
                                            },
                                            "right": {
                                              "type": "Identifier",
                                              "name": "node"
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
                              "name": "left"
                            },
                            "init": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "Identifier",
                                "name": "d3_layout_clusterLeft"
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
                            "type": "VariableDeclarator",
                            "id": {
                              "type": "Identifier",
                              "name": "right"
                            },
                            "init": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "Identifier",
                                "name": "d3_layout_clusterRight"
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
                            "type": "VariableDeclarator",
                            "id": {
                              "type": "Identifier",
                              "name": "x0"
                            },
                            "init": {
                              "type": "BinaryExpression",
                              "operator": "-",
                              "left": {
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
                            "name": "d3_layout_hierarchyVisitAfter"
                          },
                          "arguments": [
                            {
                              "type": "Identifier",
                              "name": "root"
                            },
                            {
                              "type": "ConditionalExpression",
                              "test": {
                                "type": "Identifier",
                                "name": "nodeSize"
                              },
                              "consequent": {
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
                                                "name": "x"
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
                                                "name": "x"
                                              }
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
                                            "type": "BinaryExpression",
                                            "operator": "-",
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
                              "alternate": {
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
                                            "operator": "/",
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
                                                  "name": "x"
                                                }
                                              },
                                              "right": {
                                                "type": "Identifier",
                                                "name": "x0"
                                              }
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
                                                "name": "x0"
                                              }
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
                                            "type": "BinaryExpression",
                                            "operator": "-",
                                            "left": {
                                              "type": "Literal",
                                              "value": 1,
                                              "raw": "1"
                                            },
                                            "right": {
                                              "type": "ConditionalExpression",
                                              "test": {
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
                                              "consequent": {
                                                "type": "BinaryExpression",
                                                "operator": "/",
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
                                                  "computed": false,
                                                  "object": {
                                                    "type": "Identifier",
                                                    "name": "root"
                                                  },
                                                  "property": {
                                                    "type": "Identifier",
                                                    "name": "y"
                                                  }
                                                }
                                              },
                                              "alternate": {
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
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "name": "cluster"
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
                              "name": "cluster"
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
                        "name": "cluster"
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
                              }
                            }
                          },
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "Identifier",
                              "name": "cluster"
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
                        "name": "cluster"
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
                                "type": "BinaryExpression",
                                "operator": "!=",
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
                              }
                            }
                          },
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "Identifier",
                              "name": "cluster"
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
                        "name": "cluster"
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
          "name": "d3_layout_clusterY"
        },
        "params": [
          {
            "type": "Identifier",
            "name": "children"
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
                      "name": "max"
                    }
                  },
                  "arguments": [
                    {
                      "type": "Identifier",
                      "name": "children"
                    },
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
                              "type": "MemberExpression",
                              "computed": false,
                              "object": {
                                "type": "Identifier",
                                "name": "child"
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
          "name": "d3_layout_clusterX"
        },
        "params": [
          {
            "type": "Identifier",
            "name": "children"
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
                "operator": "/",
                "left": {
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
                      "name": "reduce"
                    }
                  },
                  "arguments": [
                    {
                      "type": "FunctionExpression",
                      "id": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "name": "x"
                        },
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
                              "type": "BinaryExpression",
                              "operator": "+",
                              "left": {
                                "type": "Identifier",
                                "name": "x"
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
                                  "name": "x"
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
                      "type": "Literal",
                      "value": 0,
                      "raw": "0"
                    }
                  ]
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
          "name": "d3_layout_clusterLeft"
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
              "type": "ReturnStatement",
              "argument": {
                "type": "ConditionalExpression",
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
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "name": "d3_layout_clusterLeft"
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
                        "type": "Literal",
                        "value": 0,
                        "raw": "0"
                      }
                    }
                  ]
                },
                "alternate": {
                  "type": "Identifier",
                  "name": "node"
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
          "name": "d3_layout_clusterRight"
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
                  "type": "LogicalExpression",
                  "operator": "&&",
                  "left": {
                    "type": "Identifier",
                    "name": "children"
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
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "name": "d3_layout_clusterRight"
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
                  ]
                },
                "alternate": {
                  "type": "Identifier",
                  "name": "node"
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
  "src": "d3.layout.cluster = function () {\n    var hierarchy = d3.layout.hierarchy().sort(null).value(null), separation = d3_layout_treeSeparation, size = [\n            1,\n            1\n        ], nodeSize = false;\n    function cluster(d, i) {\n        var nodes = hierarchy.call(this, d, i), root = nodes[0], previousNode, x = 0;\n        d3_layout_hierarchyVisitAfter(root, function (node) {\n            var children = node.children;\n            if (children && children.length) {\n                node.x = d3_layout_clusterX(children);\n                node.y = d3_layout_clusterY(children);\n            } else {\n                node.x = previousNode ? x += separation(node, previousNode) : 0;\n                node.y = 0;\n                previousNode = node;\n            }\n        });\n        var left = d3_layout_clusterLeft(root), right = d3_layout_clusterRight(root), x0 = left.x - separation(left, right) / 2, x1 = right.x + separation(right, left) / 2;\n        d3_layout_hierarchyVisitAfter(root, nodeSize ? function (node) {\n            node.x = (node.x - root.x) * size[0];\n            node.y = (root.y - node.y) * size[1];\n        } : function (node) {\n            node.x = (node.x - x0) / (x1 - x0) * size[0];\n            node.y = (1 - (root.y ? node.y / root.y : 1)) * size[1];\n        });\n        return nodes;\n    }\n    cluster.separation = function (x) {\n        if (!arguments.length)\n            return separation;\n        separation = x;\n        return cluster;\n    };\n    cluster.size = function (x) {\n        if (!arguments.length)\n            return nodeSize ? null : size;\n        nodeSize = (size = x) == null;\n        return cluster;\n    };\n    cluster.nodeSize = function (x) {\n        if (!arguments.length)\n            return nodeSize ? size : null;\n        nodeSize = (size = x) != null;\n        return cluster;\n    };\n    return d3_layout_hierarchyRebind(cluster, hierarchy);\n};\nfunction d3_layout_clusterY(children) {\n    return 1 + d3.max(children, function (child) {\n        return child.y;\n    });\n}\nfunction d3_layout_clusterX(children) {\n    return children.reduce(function (x, child) {\n        return x + child.x;\n    }, 0) / children.length;\n}\nfunction d3_layout_clusterLeft(node) {\n    var children = node.children;\n    return children && children.length ? d3_layout_clusterLeft(children[0]) : node;\n}\nfunction d3_layout_clusterRight(node) {\n    var children = node.children, n;\n    return children && (n = children.length) ? d3_layout_clusterRight(children[n - 1]) : node;\n}"
}