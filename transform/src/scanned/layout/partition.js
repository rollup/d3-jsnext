{
  "filepath": "/layout/partition.js",
  "shared": [],
  "dependencies": [
    "d3.layout.hierarchy",
    "d3_layout_hierarchyRebind"
  ],
  "helpers": [],
  "exports": [
    "d3.layout.partition"
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
              "name": "partition"
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
                    }
                  ],
                  "kind": "var"
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
                      "name": "node"
                    },
                    {
                      "type": "Identifier",
                      "name": "x"
                    },
                    {
                      "type": "Identifier",
                      "name": "dx"
                    },
                    {
                      "type": "Identifier",
                      "name": "dy"
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
                              "name": "dy"
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
                              "name": "dx"
                            }
                          },
                          "right": {
                            "type": "Identifier",
                            "name": "dx"
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
                              "name": "dy"
                            }
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
                                    "name": "c"
                                  },
                                  "init": null
                                },
                                {
                                  "type": "VariableDeclarator",
                                  "id": {
                                    "type": "Identifier",
                                    "name": "d"
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
                                  "name": "dx"
                                },
                                "right": {
                                  "type": "ConditionalExpression",
                                  "test": {
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
                                  "consequent": {
                                    "type": "BinaryExpression",
                                    "operator": "/",
                                    "left": {
                                      "type": "Identifier",
                                      "name": "dx"
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
                                        "name": "position"
                                      },
                                      "arguments": [
                                        {
                                          "type": "AssignmentExpression",
                                          "operator": "=",
                                          "left": {
                                            "type": "Identifier",
                                            "name": "c"
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
                                        {
                                          "type": "Identifier",
                                          "name": "x"
                                        },
                                        {
                                          "type": "AssignmentExpression",
                                          "operator": "=",
                                          "left": {
                                            "type": "Identifier",
                                            "name": "d"
                                          },
                                          "right": {
                                            "type": "BinaryExpression",
                                            "operator": "*",
                                            "left": {
                                              "type": "MemberExpression",
                                              "computed": false,
                                              "object": {
                                                "type": "Identifier",
                                                "name": "c"
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "name": "value"
                                              }
                                            },
                                            "right": {
                                              "type": "Identifier",
                                              "name": "dx"
                                            }
                                          }
                                        },
                                        {
                                          "type": "Identifier",
                                          "name": "dy"
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
                                        "name": "x"
                                      },
                                      "right": {
                                        "type": "Identifier",
                                        "name": "d"
                                      }
                                    }
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
                    "name": "depth"
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
                              "name": "d"
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
                        "type": "IfStatement",
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
                                  "type": "AssignmentExpression",
                                  "operator": "=",
                                  "left": {
                                    "type": "Identifier",
                                    "name": "d"
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
                                        "name": "max"
                                      }
                                    },
                                    "arguments": [
                                      {
                                        "type": "Identifier",
                                        "name": "d"
                                      },
                                      {
                                        "type": "CallExpression",
                                        "callee": {
                                          "type": "Identifier",
                                          "name": "depth"
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
                                    ]
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
                          "type": "BinaryExpression",
                          "operator": "+",
                          "left": {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1"
                          },
                          "right": {
                            "type": "Identifier",
                            "name": "d"
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
                    "name": "partition"
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
                            "name": "position"
                          },
                          "arguments": [
                            {
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
                            },
                            {
                              "type": "Literal",
                              "value": 0,
                              "raw": "0"
                            },
                            {
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
                            {
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
                                "type": "CallExpression",
                                "callee": {
                                  "type": "Identifier",
                                  "name": "depth"
                                },
                                "arguments": [
                                  {
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
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "name": "partition"
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
                              "name": "partition"
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
                        "name": "partition"
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
      }
    ]
  },
  "src": "d3.layout.partition = function () {\n    var hierarchy = d3.layout.hierarchy(), size = [\n            1,\n            1\n        ];\n    function position(node, x, dx, dy) {\n        var children = node.children;\n        node.x = x;\n        node.y = node.depth * dy;\n        node.dx = dx;\n        node.dy = dy;\n        if (children && (n = children.length)) {\n            var i = -1, n, c, d;\n            dx = node.value ? dx / node.value : 0;\n            while (++i < n) {\n                position(c = children[i], x, d = c.value * dx, dy);\n                x += d;\n            }\n        }\n    }\n    function depth(node) {\n        var children = node.children, d = 0;\n        if (children && (n = children.length)) {\n            var i = -1, n;\n            while (++i < n)\n                d = Math.max(d, depth(children[i]));\n        }\n        return 1 + d;\n    }\n    function partition(d, i) {\n        var nodes = hierarchy.call(this, d, i);\n        position(nodes[0], 0, size[0], size[1] / depth(nodes[0]));\n        return nodes;\n    }\n    partition.size = function (x) {\n        if (!arguments.length)\n            return size;\n        size = x;\n        return partition;\n    };\n    return d3_layout_hierarchyRebind(partition, hierarchy);\n};"
}