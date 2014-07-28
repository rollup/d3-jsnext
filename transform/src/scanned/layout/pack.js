{
  "filepath": "/layout/pack.js",
  "shared": [],
  "dependencies": [
    "d3.layout.hierarchy",
    "d3_layout_hierarchyVisitAfter",
    "d3_layout_hierarchyRebind"
  ],
  "helpers": [
    "d3_layout_packSort",
    "d3_layout_packInsert",
    "d3_layout_packSplice",
    "d3_layout_packIntersects",
    "d3_layout_packSiblings",
    "d3_layout_packLink",
    "d3_layout_packUnlink",
    "d3_layout_packTransform",
    "d3_layout_packPlace"
  ],
  "exports": [
    "d3.layout.pack"
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
              "name": "pack"
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
                            "type": "Identifier",
                            "name": "d3_layout_packSort"
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
                        "value": 0,
                        "raw": "0"
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
                        "name": "radius"
                      },
                      "init": null
                    }
                  ],
                  "kind": "var"
                },
                {
                  "type": "FunctionDeclaration",
                  "id": {
                    "type": "Identifier",
                    "name": "pack"
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
                              "name": "w"
                            },
                            "init": {
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
                          },
                          {
                            "type": "VariableDeclarator",
                            "id": {
                              "type": "Identifier",
                              "name": "h"
                            },
                            "init": {
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
                          },
                          {
                            "type": "VariableDeclarator",
                            "id": {
                              "type": "Identifier",
                              "name": "r"
                            },
                            "init": {
                              "type": "ConditionalExpression",
                              "test": {
                                "type": "BinaryExpression",
                                "operator": "==",
                                "left": {
                                  "type": "Identifier",
                                  "name": "radius"
                                },
                                "right": {
                                  "type": "Literal",
                                  "value": null,
                                  "raw": "null"
                                }
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
                                  "name": "sqrt"
                                }
                              },
                              "alternate": {
                                "type": "ConditionalExpression",
                                "test": {
                                  "type": "BinaryExpression",
                                  "operator": "===",
                                  "left": {
                                    "type": "UnaryExpression",
                                    "operator": "typeof",
                                    "argument": {
                                      "type": "Identifier",
                                      "name": "radius"
                                    },
                                    "prefix": true
                                  },
                                  "right": {
                                    "type": "Literal",
                                    "value": "function",
                                    "raw": "\"function\""
                                  }
                                },
                                "consequent": {
                                  "type": "Identifier",
                                  "name": "radius"
                                },
                                "alternate": {
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
                                          "type": "Identifier",
                                          "name": "radius"
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
                                      "type": "AssignmentExpression",
                                      "operator": "=",
                                      "left": {
                                        "type": "MemberExpression",
                                        "computed": false,
                                        "object": {
                                          "type": "Identifier",
                                          "name": "d"
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "name": "r"
                                        }
                                      },
                                      "right": {
                                        "type": "UnaryExpression",
                                        "operator": "+",
                                        "argument": {
                                          "type": "CallExpression",
                                          "callee": {
                                            "type": "Identifier",
                                            "name": "r"
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
                                                "name": "value"
                                              }
                                            }
                                          ]
                                        },
                                        "prefix": true
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
                              "type": "Identifier",
                              "name": "d3_layout_packSiblings"
                            }
                          ]
                        }
                      },
                      {
                        "type": "IfStatement",
                        "test": {
                          "type": "Identifier",
                          "name": "padding"
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
                                    "name": "dr"
                                  },
                                  "init": {
                                    "type": "BinaryExpression",
                                    "operator": "/",
                                    "left": {
                                      "type": "BinaryExpression",
                                      "operator": "*",
                                      "left": {
                                        "type": "Identifier",
                                        "name": "padding"
                                      },
                                      "right": {
                                        "type": "ConditionalExpression",
                                        "test": {
                                          "type": "Identifier",
                                          "name": "radius"
                                        },
                                        "consequent": {
                                          "type": "Literal",
                                          "value": 1,
                                          "raw": "1"
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
                                                  "type": "Literal",
                                                  "value": 2,
                                                  "raw": "2"
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
                                                    "name": "r"
                                                  }
                                                }
                                              },
                                              "right": {
                                                "type": "Identifier",
                                                "name": "w"
                                              }
                                            },
                                            {
                                              "type": "BinaryExpression",
                                              "operator": "/",
                                              "left": {
                                                "type": "BinaryExpression",
                                                "operator": "*",
                                                "left": {
                                                  "type": "Literal",
                                                  "value": 2,
                                                  "raw": "2"
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
                                                    "name": "r"
                                                  }
                                                }
                                              },
                                              "right": {
                                                "type": "Identifier",
                                                "name": "h"
                                              }
                                            }
                                          ]
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
                                            "type": "AssignmentExpression",
                                            "operator": "+=",
                                            "left": {
                                              "type": "MemberExpression",
                                              "computed": false,
                                              "object": {
                                                "type": "Identifier",
                                                "name": "d"
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "name": "r"
                                              }
                                            },
                                            "right": {
                                              "type": "Identifier",
                                              "name": "dr"
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
                                    "type": "Identifier",
                                    "name": "d3_layout_packSiblings"
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
                                            "type": "AssignmentExpression",
                                            "operator": "-=",
                                            "left": {
                                              "type": "MemberExpression",
                                              "computed": false,
                                              "object": {
                                                "type": "Identifier",
                                                "name": "d"
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "name": "r"
                                              }
                                            },
                                            "right": {
                                              "type": "Identifier",
                                              "name": "dr"
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
                        },
                        "alternate": null
                      },
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "Identifier",
                            "name": "d3_layout_packTransform"
                          },
                          "arguments": [
                            {
                              "type": "Identifier",
                              "name": "root"
                            },
                            {
                              "type": "BinaryExpression",
                              "operator": "/",
                              "left": {
                                "type": "Identifier",
                                "name": "w"
                              },
                              "right": {
                                "type": "Literal",
                                "value": 2,
                                "raw": "2"
                              }
                            },
                            {
                              "type": "BinaryExpression",
                              "operator": "/",
                              "left": {
                                "type": "Identifier",
                                "name": "h"
                              },
                              "right": {
                                "type": "Literal",
                                "value": 2,
                                "raw": "2"
                              }
                            },
                            {
                              "type": "ConditionalExpression",
                              "test": {
                                "type": "Identifier",
                                "name": "radius"
                              },
                              "consequent": {
                                "type": "Literal",
                                "value": 1,
                                "raw": "1"
                              },
                              "alternate": {
                                "type": "BinaryExpression",
                                "operator": "/",
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
                                          "type": "Literal",
                                          "value": 2,
                                          "raw": "2"
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
                                            "name": "r"
                                          }
                                        }
                                      },
                                      "right": {
                                        "type": "Identifier",
                                        "name": "w"
                                      }
                                    },
                                    {
                                      "type": "BinaryExpression",
                                      "operator": "/",
                                      "left": {
                                        "type": "BinaryExpression",
                                        "operator": "*",
                                        "left": {
                                          "type": "Literal",
                                          "value": 2,
                                          "raw": "2"
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
                                            "name": "r"
                                          }
                                        }
                                      },
                                      "right": {
                                        "type": "Identifier",
                                        "name": "h"
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
                        "name": "pack"
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
                                "name": "_"
                              }
                            }
                          },
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "Identifier",
                              "name": "pack"
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
                        "name": "pack"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "radius"
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
                                "type": "Identifier",
                                "name": "radius"
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
                                "name": "radius"
                              },
                              "right": {
                                "type": "ConditionalExpression",
                                "test": {
                                  "type": "LogicalExpression",
                                  "operator": "||",
                                  "left": {
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
                                  "right": {
                                    "type": "BinaryExpression",
                                    "operator": "===",
                                    "left": {
                                      "type": "UnaryExpression",
                                      "operator": "typeof",
                                      "argument": {
                                        "type": "Identifier",
                                        "name": "_"
                                      },
                                      "prefix": true
                                    },
                                    "right": {
                                      "type": "Literal",
                                      "value": "function",
                                      "raw": "\"function\""
                                    }
                                  }
                                },
                                "consequent": {
                                  "type": "Identifier",
                                  "name": "_"
                                },
                                "alternate": {
                                  "type": "UnaryExpression",
                                  "operator": "+",
                                  "argument": {
                                    "type": "Identifier",
                                    "name": "_"
                                  },
                                  "prefix": true
                                }
                              }
                            }
                          },
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "Identifier",
                              "name": "pack"
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
                        "name": "pack"
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
                                "type": "Identifier",
                                "name": "padding"
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
                                "name": "padding"
                              },
                              "right": {
                                "type": "UnaryExpression",
                                "operator": "+",
                                "argument": {
                                  "type": "Identifier",
                                  "name": "_"
                                },
                                "prefix": true
                              }
                            }
                          },
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "Identifier",
                              "name": "pack"
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
                        "name": "pack"
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
          "name": "d3_layout_packSort"
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
                    "name": "a"
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
                    "name": "b"
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
          "name": "d3_layout_packInsert"
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
              "type": "VariableDeclaration",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "name": "c"
                  },
                  "init": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "name": "a"
                    },
                    "property": {
                      "type": "Identifier",
                      "name": "_pack_next"
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
                    "name": "a"
                  },
                  "property": {
                    "type": "Identifier",
                    "name": "_pack_next"
                  }
                },
                "right": {
                  "type": "Identifier",
                  "name": "b"
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
                    "name": "b"
                  },
                  "property": {
                    "type": "Identifier",
                    "name": "_pack_prev"
                  }
                },
                "right": {
                  "type": "Identifier",
                  "name": "a"
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
                    "name": "b"
                  },
                  "property": {
                    "type": "Identifier",
                    "name": "_pack_next"
                  }
                },
                "right": {
                  "type": "Identifier",
                  "name": "c"
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
                    "name": "c"
                  },
                  "property": {
                    "type": "Identifier",
                    "name": "_pack_prev"
                  }
                },
                "right": {
                  "type": "Identifier",
                  "name": "b"
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
          "name": "d3_layout_packSplice"
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
              "type": "ExpressionStatement",
              "expression": {
                "type": "AssignmentExpression",
                "operator": "=",
                "left": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "name": "a"
                  },
                  "property": {
                    "type": "Identifier",
                    "name": "_pack_next"
                  }
                },
                "right": {
                  "type": "Identifier",
                  "name": "b"
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
                    "name": "b"
                  },
                  "property": {
                    "type": "Identifier",
                    "name": "_pack_prev"
                  }
                },
                "right": {
                  "type": "Identifier",
                  "name": "a"
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
          "name": "d3_layout_packIntersects"
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
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "name": "b"
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
                        "name": "a"
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
                    "name": "dy"
                  },
                  "init": {
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
                        "name": "y"
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
                        "name": "y"
                      }
                    }
                  }
                },
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "name": "dr"
                  },
                  "init": {
                    "type": "BinaryExpression",
                    "operator": "+",
                    "left": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "name": "a"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "r"
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
                        "name": "r"
                      }
                    }
                  }
                }
              ],
              "kind": "var"
            },
            {
              "type": "ReturnStatement",
              "argument": {
                "type": "BinaryExpression",
                "operator": ">",
                "left": {
                  "type": "BinaryExpression",
                  "operator": "*",
                  "left": {
                    "type": "BinaryExpression",
                    "operator": "*",
                    "left": {
                      "type": "Literal",
                      "value": 0.999,
                      "raw": ".999"
                    },
                    "right": {
                      "type": "Identifier",
                      "name": "dr"
                    }
                  },
                  "right": {
                    "type": "Identifier",
                    "name": "dr"
                  }
                },
                "right": {
                  "type": "BinaryExpression",
                  "operator": "+",
                  "left": {
                    "type": "BinaryExpression",
                    "operator": "*",
                    "left": {
                      "type": "Identifier",
                      "name": "dx"
                    },
                    "right": {
                      "type": "Identifier",
                      "name": "dx"
                    }
                  },
                  "right": {
                    "type": "BinaryExpression",
                    "operator": "*",
                    "left": {
                      "type": "Identifier",
                      "name": "dy"
                    },
                    "right": {
                      "type": "Identifier",
                      "name": "dy"
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
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "name": "d3_layout_packSiblings"
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
              "type": "IfStatement",
              "test": {
                "type": "LogicalExpression",
                "operator": "||",
                "left": {
                  "type": "UnaryExpression",
                  "operator": "!",
                  "argument": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "name": "nodes"
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
                  "prefix": true
                },
                "right": {
                  "type": "UnaryExpression",
                  "operator": "!",
                  "argument": {
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
                        "name": "nodes"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "length"
                      }
                    }
                  },
                  "prefix": true
                }
              },
              "consequent": {
                "type": "ReturnStatement",
                "argument": null
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
                    "name": "nodes"
                  },
                  "init": null
                },
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "name": "xMin"
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
                    "name": "xMax"
                  },
                  "init": {
                    "type": "UnaryExpression",
                    "operator": "-",
                    "argument": {
                      "type": "Identifier",
                      "name": "Infinity"
                    },
                    "prefix": true
                  }
                },
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "name": "yMin"
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
                    "name": "yMax"
                  },
                  "init": {
                    "type": "UnaryExpression",
                    "operator": "-",
                    "argument": {
                      "type": "Identifier",
                      "name": "Infinity"
                    },
                    "prefix": true
                  }
                },
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "name": "a"
                  },
                  "init": null
                },
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "name": "b"
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
                    "name": "i"
                  },
                  "init": null
                },
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "name": "j"
                  },
                  "init": null
                },
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "name": "k"
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
                }
              ],
              "kind": "var"
            },
            {
              "type": "FunctionDeclaration",
              "id": {
                "type": "Identifier",
                "name": "bound"
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
                        "type": "Identifier",
                        "name": "xMin"
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
                                "name": "node"
                              },
                              "property": {
                                "type": "Identifier",
                                "name": "r"
                              }
                            }
                          },
                          {
                            "type": "Identifier",
                            "name": "xMin"
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
                        "name": "xMax"
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
                              "computed": false,
                              "object": {
                                "type": "Identifier",
                                "name": "node"
                              },
                              "property": {
                                "type": "Identifier",
                                "name": "r"
                              }
                            }
                          },
                          {
                            "type": "Identifier",
                            "name": "xMax"
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
                        "name": "yMin"
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
                                "name": "node"
                              },
                              "property": {
                                "type": "Identifier",
                                "name": "r"
                              }
                            }
                          },
                          {
                            "type": "Identifier",
                            "name": "yMin"
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
                        "name": "yMax"
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
                              "computed": false,
                              "object": {
                                "type": "Identifier",
                                "name": "node"
                              },
                              "property": {
                                "type": "Identifier",
                                "name": "r"
                              }
                            }
                          },
                          {
                            "type": "Identifier",
                            "name": "yMax"
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
                    "name": "forEach"
                  }
                },
                "arguments": [
                  {
                    "type": "Identifier",
                    "name": "d3_layout_packLink"
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
                  "name": "a"
                },
                "right": {
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
                    "name": "a"
                  },
                  "property": {
                    "type": "Identifier",
                    "name": "x"
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
                      "name": "a"
                    },
                    "property": {
                      "type": "Identifier",
                      "name": "r"
                    }
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
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "name": "a"
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
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "name": "bound"
                },
                "arguments": [
                  {
                    "type": "Identifier",
                    "name": "a"
                  }
                ]
              }
            },
            {
              "type": "IfStatement",
              "test": {
                "type": "BinaryExpression",
                "operator": ">",
                "left": {
                  "type": "Identifier",
                  "name": "n"
                },
                "right": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1"
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
                        "name": "b"
                      },
                      "right": {
                        "type": "MemberExpression",
                        "computed": true,
                        "object": {
                          "type": "Identifier",
                          "name": "nodes"
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
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "name": "b"
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
                          "name": "b"
                        },
                        "property": {
                          "type": "Identifier",
                          "name": "r"
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
                          "name": "b"
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
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "name": "bound"
                      },
                      "arguments": [
                        {
                          "type": "Identifier",
                          "name": "b"
                        }
                      ]
                    }
                  },
                  {
                    "type": "IfStatement",
                    "test": {
                      "type": "BinaryExpression",
                      "operator": ">",
                      "left": {
                        "type": "Identifier",
                        "name": "n"
                      },
                      "right": {
                        "type": "Literal",
                        "value": 2,
                        "raw": "2"
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
                              "name": "c"
                            },
                            "right": {
                              "type": "MemberExpression",
                              "computed": true,
                              "object": {
                                "type": "Identifier",
                                "name": "nodes"
                              },
                              "property": {
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
                            "type": "CallExpression",
                            "callee": {
                              "type": "Identifier",
                              "name": "d3_layout_packPlace"
                            },
                            "arguments": [
                              {
                                "type": "Identifier",
                                "name": "a"
                              },
                              {
                                "type": "Identifier",
                                "name": "b"
                              },
                              {
                                "type": "Identifier",
                                "name": "c"
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
                              "name": "bound"
                            },
                            "arguments": [
                              {
                                "type": "Identifier",
                                "name": "c"
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
                              "name": "d3_layout_packInsert"
                            },
                            "arguments": [
                              {
                                "type": "Identifier",
                                "name": "a"
                              },
                              {
                                "type": "Identifier",
                                "name": "c"
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
                                "name": "a"
                              },
                              "property": {
                                "type": "Identifier",
                                "name": "_pack_prev"
                              }
                            },
                            "right": {
                              "type": "Identifier",
                              "name": "c"
                            }
                          }
                        },
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "CallExpression",
                            "callee": {
                              "type": "Identifier",
                              "name": "d3_layout_packInsert"
                            },
                            "arguments": [
                              {
                                "type": "Identifier",
                                "name": "c"
                              },
                              {
                                "type": "Identifier",
                                "name": "b"
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
                              "name": "b"
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
                                "name": "_pack_next"
                              }
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
                              "type": "Literal",
                              "value": 3,
                              "raw": "3"
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
                                    "type": "Identifier",
                                    "name": "d3_layout_packPlace"
                                  },
                                  "arguments": [
                                    {
                                      "type": "Identifier",
                                      "name": "a"
                                    },
                                    {
                                      "type": "Identifier",
                                      "name": "b"
                                    },
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
                                          "name": "nodes"
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "name": "i"
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
                                      "name": "isect"
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
                                      "name": "s1"
                                    },
                                    "init": {
                                      "type": "Literal",
                                      "value": 1,
                                      "raw": "1"
                                    }
                                  },
                                  {
                                    "type": "VariableDeclarator",
                                    "id": {
                                      "type": "Identifier",
                                      "name": "s2"
                                    },
                                    "init": {
                                      "type": "Literal",
                                      "value": 1,
                                      "raw": "1"
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
                                    "name": "j"
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
                                      "name": "_pack_next"
                                    }
                                  }
                                },
                                "test": {
                                  "type": "BinaryExpression",
                                  "operator": "!==",
                                  "left": {
                                    "type": "Identifier",
                                    "name": "j"
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "name": "b"
                                  }
                                },
                                "update": {
                                  "type": "SequenceExpression",
                                  "expressions": [
                                    {
                                      "type": "AssignmentExpression",
                                      "operator": "=",
                                      "left": {
                                        "type": "Identifier",
                                        "name": "j"
                                      },
                                      "right": {
                                        "type": "MemberExpression",
                                        "computed": false,
                                        "object": {
                                          "type": "Identifier",
                                          "name": "j"
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "name": "_pack_next"
                                        }
                                      }
                                    },
                                    {
                                      "type": "UpdateExpression",
                                      "operator": "++",
                                      "argument": {
                                        "type": "Identifier",
                                        "name": "s1"
                                      },
                                      "prefix": false
                                    }
                                  ]
                                },
                                "body": {
                                  "type": "BlockStatement",
                                  "body": [
                                    {
                                      "type": "IfStatement",
                                      "test": {
                                        "type": "CallExpression",
                                        "callee": {
                                          "type": "Identifier",
                                          "name": "d3_layout_packIntersects"
                                        },
                                        "arguments": [
                                          {
                                            "type": "Identifier",
                                            "name": "j"
                                          },
                                          {
                                            "type": "Identifier",
                                            "name": "c"
                                          }
                                        ]
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
                                                "name": "isect"
                                              },
                                              "right": {
                                                "type": "Literal",
                                                "value": 1,
                                                "raw": "1"
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
                                "type": "IfStatement",
                                "test": {
                                  "type": "BinaryExpression",
                                  "operator": "==",
                                  "left": {
                                    "type": "Identifier",
                                    "name": "isect"
                                  },
                                  "right": {
                                    "type": "Literal",
                                    "value": 1,
                                    "raw": "1"
                                  }
                                },
                                "consequent": {
                                  "type": "BlockStatement",
                                  "body": [
                                    {
                                      "type": "ForStatement",
                                      "init": {
                                        "type": "AssignmentExpression",
                                        "operator": "=",
                                        "left": {
                                          "type": "Identifier",
                                          "name": "k"
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
                                            "name": "_pack_prev"
                                          }
                                        }
                                      },
                                      "test": {
                                        "type": "BinaryExpression",
                                        "operator": "!==",
                                        "left": {
                                          "type": "Identifier",
                                          "name": "k"
                                        },
                                        "right": {
                                          "type": "MemberExpression",
                                          "computed": false,
                                          "object": {
                                            "type": "Identifier",
                                            "name": "j"
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "name": "_pack_prev"
                                          }
                                        }
                                      },
                                      "update": {
                                        "type": "SequenceExpression",
                                        "expressions": [
                                          {
                                            "type": "AssignmentExpression",
                                            "operator": "=",
                                            "left": {
                                              "type": "Identifier",
                                              "name": "k"
                                            },
                                            "right": {
                                              "type": "MemberExpression",
                                              "computed": false,
                                              "object": {
                                                "type": "Identifier",
                                                "name": "k"
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "name": "_pack_prev"
                                              }
                                            }
                                          },
                                          {
                                            "type": "UpdateExpression",
                                            "operator": "++",
                                            "argument": {
                                              "type": "Identifier",
                                              "name": "s2"
                                            },
                                            "prefix": false
                                          }
                                        ]
                                      },
                                      "body": {
                                        "type": "BlockStatement",
                                        "body": [
                                          {
                                            "type": "IfStatement",
                                            "test": {
                                              "type": "CallExpression",
                                              "callee": {
                                                "type": "Identifier",
                                                "name": "d3_layout_packIntersects"
                                              },
                                              "arguments": [
                                                {
                                                  "type": "Identifier",
                                                  "name": "k"
                                                },
                                                {
                                                  "type": "Identifier",
                                                  "name": "c"
                                                }
                                              ]
                                            },
                                            "consequent": {
                                              "type": "BlockStatement",
                                              "body": [
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
                                    }
                                  ]
                                },
                                "alternate": null
                              },
                              {
                                "type": "IfStatement",
                                "test": {
                                  "type": "Identifier",
                                  "name": "isect"
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
                                            "name": "s1"
                                          },
                                          "right": {
                                            "type": "Identifier",
                                            "name": "s2"
                                          }
                                        },
                                        "right": {
                                          "type": "LogicalExpression",
                                          "operator": "&&",
                                          "left": {
                                            "type": "BinaryExpression",
                                            "operator": "==",
                                            "left": {
                                              "type": "Identifier",
                                              "name": "s1"
                                            },
                                            "right": {
                                              "type": "Identifier",
                                              "name": "s2"
                                            }
                                          },
                                          "right": {
                                            "type": "BinaryExpression",
                                            "operator": "<",
                                            "left": {
                                              "type": "MemberExpression",
                                              "computed": false,
                                              "object": {
                                                "type": "Identifier",
                                                "name": "b"
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "name": "r"
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
                                                "name": "r"
                                              }
                                            }
                                          }
                                        }
                                      },
                                      "consequent": {
                                        "type": "ExpressionStatement",
                                        "expression": {
                                          "type": "CallExpression",
                                          "callee": {
                                            "type": "Identifier",
                                            "name": "d3_layout_packSplice"
                                          },
                                          "arguments": [
                                            {
                                              "type": "Identifier",
                                              "name": "a"
                                            },
                                            {
                                              "type": "AssignmentExpression",
                                              "operator": "=",
                                              "left": {
                                                "type": "Identifier",
                                                "name": "b"
                                              },
                                              "right": {
                                                "type": "Identifier",
                                                "name": "j"
                                              }
                                            }
                                          ]
                                        }
                                      },
                                      "alternate": {
                                        "type": "ExpressionStatement",
                                        "expression": {
                                          "type": "CallExpression",
                                          "callee": {
                                            "type": "Identifier",
                                            "name": "d3_layout_packSplice"
                                          },
                                          "arguments": [
                                            {
                                              "type": "AssignmentExpression",
                                              "operator": "=",
                                              "left": {
                                                "type": "Identifier",
                                                "name": "a"
                                              },
                                              "right": {
                                                "type": "Identifier",
                                                "name": "k"
                                              }
                                            },
                                            {
                                              "type": "Identifier",
                                              "name": "b"
                                            }
                                          ]
                                        }
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
                                        "prefix": false
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
                                          "name": "d3_layout_packInsert"
                                        },
                                        "arguments": [
                                          {
                                            "type": "Identifier",
                                            "name": "a"
                                          },
                                          {
                                            "type": "Identifier",
                                            "name": "c"
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
                                          "name": "b"
                                        },
                                        "right": {
                                          "type": "Identifier",
                                          "name": "c"
                                        }
                                      }
                                    },
                                    {
                                      "type": "ExpressionStatement",
                                      "expression": {
                                        "type": "CallExpression",
                                        "callee": {
                                          "type": "Identifier",
                                          "name": "bound"
                                        },
                                        "arguments": [
                                          {
                                            "type": "Identifier",
                                            "name": "c"
                                          }
                                        ]
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
                    "alternate": null
                  }
                ]
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
                    "name": "cx"
                  },
                  "init": {
                    "type": "BinaryExpression",
                    "operator": "/",
                    "left": {
                      "type": "BinaryExpression",
                      "operator": "+",
                      "left": {
                        "type": "Identifier",
                        "name": "xMin"
                      },
                      "right": {
                        "type": "Identifier",
                        "name": "xMax"
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
                    "name": "cy"
                  },
                  "init": {
                    "type": "BinaryExpression",
                    "operator": "/",
                    "left": {
                      "type": "BinaryExpression",
                      "operator": "+",
                      "left": {
                        "type": "Identifier",
                        "name": "yMin"
                      },
                      "right": {
                        "type": "Identifier",
                        "name": "yMax"
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
                    "name": "cr"
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
                          "name": "nodes"
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
                      "operator": "-=",
                      "left": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "name": "c"
                        },
                        "property": {
                          "type": "Identifier",
                          "name": "x"
                        }
                      },
                      "right": {
                        "type": "Identifier",
                        "name": "cx"
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
                          "name": "c"
                        },
                        "property": {
                          "type": "Identifier",
                          "name": "y"
                        }
                      },
                      "right": {
                        "type": "Identifier",
                        "name": "cy"
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
                        "name": "cr"
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
                            "name": "cr"
                          },
                          {
                            "type": "BinaryExpression",
                            "operator": "+",
                            "left": {
                              "type": "MemberExpression",
                              "computed": false,
                              "object": {
                                "type": "Identifier",
                                "name": "c"
                              },
                              "property": {
                                "type": "Identifier",
                                "name": "r"
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
                                  "name": "sqrt"
                                }
                              },
                              "arguments": [
                                {
                                  "type": "BinaryExpression",
                                  "operator": "+",
                                  "left": {
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
                                        "name": "x"
                                      }
                                    },
                                    "right": {
                                      "type": "MemberExpression",
                                      "computed": false,
                                      "object": {
                                        "type": "Identifier",
                                        "name": "c"
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "name": "x"
                                      }
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
                                        "name": "c"
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
                                        "name": "c"
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "name": "y"
                                      }
                                    }
                                  }
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
                    "name": "r"
                  }
                },
                "right": {
                  "type": "Identifier",
                  "name": "cr"
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
                    "name": "nodes"
                  },
                  "property": {
                    "type": "Identifier",
                    "name": "forEach"
                  }
                },
                "arguments": [
                  {
                    "type": "Identifier",
                    "name": "d3_layout_packUnlink"
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
          "name": "d3_layout_packLink"
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
                    "name": "_pack_next"
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
                      "name": "_pack_prev"
                    }
                  },
                  "right": {
                    "type": "Identifier",
                    "name": "node"
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
          "name": "d3_layout_packUnlink"
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
                    "name": "_pack_next"
                  }
                },
                "prefix": true
              }
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
                    "name": "_pack_prev"
                  }
                },
                "prefix": true
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
          "name": "d3_layout_packTransform"
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
            "name": "y"
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
                  "type": "AssignmentExpression",
                  "operator": "+=",
                  "left": {
                    "type": "Identifier",
                    "name": "x"
                  },
                  "right": {
                    "type": "BinaryExpression",
                    "operator": "*",
                    "left": {
                      "type": "Identifier",
                      "name": "k"
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
                        "name": "x"
                      }
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
                  "type": "AssignmentExpression",
                  "operator": "+=",
                  "left": {
                    "type": "Identifier",
                    "name": "y"
                  },
                  "right": {
                    "type": "BinaryExpression",
                    "operator": "*",
                    "left": {
                      "type": "Identifier",
                      "name": "k"
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
                  }
                }
              }
            },
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
                    "name": "r"
                  }
                },
                "right": {
                  "type": "Identifier",
                  "name": "k"
                }
              }
            },
            {
              "type": "IfStatement",
              "test": {
                "type": "Identifier",
                "name": "children"
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
                          "type": "Identifier",
                          "name": "d3_layout_packTransform"
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
                            "name": "k"
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
        },
        "rest": null,
        "generator": false,
        "expression": false
      },
      {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "name": "d3_layout_packPlace"
        },
        "params": [
          {
            "type": "Identifier",
            "name": "a"
          },
          {
            "type": "Identifier",
            "name": "b"
          },
          {
            "type": "Identifier",
            "name": "c"
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
                    "name": "db"
                  },
                  "init": {
                    "type": "BinaryExpression",
                    "operator": "+",
                    "left": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "name": "a"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "r"
                      }
                    },
                    "right": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "name": "c"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "r"
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
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "name": "b"
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
                        "name": "a"
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
                    "name": "dy"
                  },
                  "init": {
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
                        "name": "y"
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
                        "name": "y"
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
                "type": "LogicalExpression",
                "operator": "&&",
                "left": {
                  "type": "Identifier",
                  "name": "db"
                },
                "right": {
                  "type": "LogicalExpression",
                  "operator": "||",
                  "left": {
                    "type": "Identifier",
                    "name": "dx"
                  },
                  "right": {
                    "type": "Identifier",
                    "name": "dy"
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
                          "name": "da"
                        },
                        "init": {
                          "type": "BinaryExpression",
                          "operator": "+",
                          "left": {
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "name": "b"
                            },
                            "property": {
                              "type": "Identifier",
                              "name": "r"
                            }
                          },
                          "right": {
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "name": "c"
                            },
                            "property": {
                              "type": "Identifier",
                              "name": "r"
                            }
                          }
                        }
                      },
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "name": "dc"
                        },
                        "init": {
                          "type": "BinaryExpression",
                          "operator": "+",
                          "left": {
                            "type": "BinaryExpression",
                            "operator": "*",
                            "left": {
                              "type": "Identifier",
                              "name": "dx"
                            },
                            "right": {
                              "type": "Identifier",
                              "name": "dx"
                            }
                          },
                          "right": {
                            "type": "BinaryExpression",
                            "operator": "*",
                            "left": {
                              "type": "Identifier",
                              "name": "dy"
                            },
                            "right": {
                              "type": "Identifier",
                              "name": "dy"
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
                      "operator": "*=",
                      "left": {
                        "type": "Identifier",
                        "name": "da"
                      },
                      "right": {
                        "type": "Identifier",
                        "name": "da"
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
                        "name": "db"
                      },
                      "right": {
                        "type": "Identifier",
                        "name": "db"
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
                          "name": "x"
                        },
                        "init": {
                          "type": "BinaryExpression",
                          "operator": "+",
                          "left": {
                            "type": "Literal",
                            "value": 0.5,
                            "raw": ".5"
                          },
                          "right": {
                            "type": "BinaryExpression",
                            "operator": "/",
                            "left": {
                              "type": "BinaryExpression",
                              "operator": "-",
                              "left": {
                                "type": "Identifier",
                                "name": "db"
                              },
                              "right": {
                                "type": "Identifier",
                                "name": "da"
                              }
                            },
                            "right": {
                              "type": "BinaryExpression",
                              "operator": "*",
                              "left": {
                                "type": "Literal",
                                "value": 2,
                                "raw": "2"
                              },
                              "right": {
                                "type": "Identifier",
                                "name": "dc"
                              }
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
                          "operator": "/",
                          "left": {
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
                                    "type": "Literal",
                                    "value": 0,
                                    "raw": "0"
                                  },
                                  {
                                    "type": "BinaryExpression",
                                    "operator": "-",
                                    "left": {
                                      "type": "BinaryExpression",
                                      "operator": "-",
                                      "left": {
                                        "type": "BinaryExpression",
                                        "operator": "*",
                                        "left": {
                                          "type": "BinaryExpression",
                                          "operator": "*",
                                          "left": {
                                            "type": "Literal",
                                            "value": 2,
                                            "raw": "2"
                                          },
                                          "right": {
                                            "type": "Identifier",
                                            "name": "da"
                                          }
                                        },
                                        "right": {
                                          "type": "BinaryExpression",
                                          "operator": "+",
                                          "left": {
                                            "type": "Identifier",
                                            "name": "db"
                                          },
                                          "right": {
                                            "type": "Identifier",
                                            "name": "dc"
                                          }
                                        }
                                      },
                                      "right": {
                                        "type": "BinaryExpression",
                                        "operator": "*",
                                        "left": {
                                          "type": "AssignmentExpression",
                                          "operator": "-=",
                                          "left": {
                                            "type": "Identifier",
                                            "name": "db"
                                          },
                                          "right": {
                                            "type": "Identifier",
                                            "name": "dc"
                                          }
                                        },
                                        "right": {
                                          "type": "Identifier",
                                          "name": "db"
                                        }
                                      }
                                    },
                                    "right": {
                                      "type": "BinaryExpression",
                                      "operator": "*",
                                      "left": {
                                        "type": "Identifier",
                                        "name": "da"
                                      },
                                      "right": {
                                        "type": "Identifier",
                                        "name": "da"
                                      }
                                    }
                                  }
                                ]
                              }
                            ]
                          },
                          "right": {
                            "type": "BinaryExpression",
                            "operator": "*",
                            "left": {
                              "type": "Literal",
                              "value": 2,
                              "raw": "2"
                            },
                            "right": {
                              "type": "Identifier",
                              "name": "dc"
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
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "name": "c"
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
                          "type": "BinaryExpression",
                          "operator": "+",
                          "left": {
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "name": "a"
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
                              "type": "Identifier",
                              "name": "x"
                            },
                            "right": {
                              "type": "Identifier",
                              "name": "dx"
                            }
                          }
                        },
                        "right": {
                          "type": "BinaryExpression",
                          "operator": "*",
                          "left": {
                            "type": "Identifier",
                            "name": "y"
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
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "name": "c"
                        },
                        "property": {
                          "type": "Identifier",
                          "name": "y"
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
                              "name": "a"
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
                              "type": "Identifier",
                              "name": "x"
                            },
                            "right": {
                              "type": "Identifier",
                              "name": "dy"
                            }
                          }
                        },
                        "right": {
                          "type": "BinaryExpression",
                          "operator": "*",
                          "left": {
                            "type": "Identifier",
                            "name": "y"
                          },
                          "right": {
                            "type": "Identifier",
                            "name": "dx"
                          }
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
                          "name": "c"
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
                            "name": "a"
                          },
                          "property": {
                            "type": "Identifier",
                            "name": "x"
                          }
                        },
                        "right": {
                          "type": "Identifier",
                          "name": "db"
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
                          "name": "c"
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
                          "name": "a"
                        },
                        "property": {
                          "type": "Identifier",
                          "name": "y"
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
      }
    ]
  },
  "src": "d3.layout.pack = function () {\n    var hierarchy = d3.layout.hierarchy().sort(d3_layout_packSort), padding = 0, size = [\n            1,\n            1\n        ], radius;\n    function pack(d, i) {\n        var nodes = hierarchy.call(this, d, i), root = nodes[0], w = size[0], h = size[1], r = radius == null ? Math.sqrt : typeof radius === 'function' ? radius : function () {\n                return radius;\n            };\n        root.x = root.y = 0;\n        d3_layout_hierarchyVisitAfter(root, function (d) {\n            d.r = +r(d.value);\n        });\n        d3_layout_hierarchyVisitAfter(root, d3_layout_packSiblings);\n        if (padding) {\n            var dr = padding * (radius ? 1 : Math.max(2 * root.r / w, 2 * root.r / h)) / 2;\n            d3_layout_hierarchyVisitAfter(root, function (d) {\n                d.r += dr;\n            });\n            d3_layout_hierarchyVisitAfter(root, d3_layout_packSiblings);\n            d3_layout_hierarchyVisitAfter(root, function (d) {\n                d.r -= dr;\n            });\n        }\n        d3_layout_packTransform(root, w / 2, h / 2, radius ? 1 : 1 / Math.max(2 * root.r / w, 2 * root.r / h));\n        return nodes;\n    }\n    pack.size = function (_) {\n        if (!arguments.length)\n            return size;\n        size = _;\n        return pack;\n    };\n    pack.radius = function (_) {\n        if (!arguments.length)\n            return radius;\n        radius = _ == null || typeof _ === 'function' ? _ : +_;\n        return pack;\n    };\n    pack.padding = function (_) {\n        if (!arguments.length)\n            return padding;\n        padding = +_;\n        return pack;\n    };\n    return d3_layout_hierarchyRebind(pack, hierarchy);\n};\nfunction d3_layout_packSort(a, b) {\n    return a.value - b.value;\n}\nfunction d3_layout_packInsert(a, b) {\n    var c = a._pack_next;\n    a._pack_next = b;\n    b._pack_prev = a;\n    b._pack_next = c;\n    c._pack_prev = b;\n}\nfunction d3_layout_packSplice(a, b) {\n    a._pack_next = b;\n    b._pack_prev = a;\n}\nfunction d3_layout_packIntersects(a, b) {\n    var dx = b.x - a.x, dy = b.y - a.y, dr = a.r + b.r;\n    return 0.999 * dr * dr > dx * dx + dy * dy;\n}\nfunction d3_layout_packSiblings(node) {\n    if (!(nodes = node.children) || !(n = nodes.length))\n        return;\n    var nodes, xMin = Infinity, xMax = -Infinity, yMin = Infinity, yMax = -Infinity, a, b, c, i, j, k, n;\n    function bound(node) {\n        xMin = Math.min(node.x - node.r, xMin);\n        xMax = Math.max(node.x + node.r, xMax);\n        yMin = Math.min(node.y - node.r, yMin);\n        yMax = Math.max(node.y + node.r, yMax);\n    }\n    nodes.forEach(d3_layout_packLink);\n    a = nodes[0];\n    a.x = -a.r;\n    a.y = 0;\n    bound(a);\n    if (n > 1) {\n        b = nodes[1];\n        b.x = b.r;\n        b.y = 0;\n        bound(b);\n        if (n > 2) {\n            c = nodes[2];\n            d3_layout_packPlace(a, b, c);\n            bound(c);\n            d3_layout_packInsert(a, c);\n            a._pack_prev = c;\n            d3_layout_packInsert(c, b);\n            b = a._pack_next;\n            for (i = 3; i < n; i++) {\n                d3_layout_packPlace(a, b, c = nodes[i]);\n                var isect = 0, s1 = 1, s2 = 1;\n                for (j = b._pack_next; j !== b; j = j._pack_next, s1++) {\n                    if (d3_layout_packIntersects(j, c)) {\n                        isect = 1;\n                        break;\n                    }\n                }\n                if (isect == 1) {\n                    for (k = a._pack_prev; k !== j._pack_prev; k = k._pack_prev, s2++) {\n                        if (d3_layout_packIntersects(k, c)) {\n                            break;\n                        }\n                    }\n                }\n                if (isect) {\n                    if (s1 < s2 || s1 == s2 && b.r < a.r)\n                        d3_layout_packSplice(a, b = j);\n                    else\n                        d3_layout_packSplice(a = k, b);\n                    i--;\n                } else {\n                    d3_layout_packInsert(a, c);\n                    b = c;\n                    bound(c);\n                }\n            }\n        }\n    }\n    var cx = (xMin + xMax) / 2, cy = (yMin + yMax) / 2, cr = 0;\n    for (i = 0; i < n; i++) {\n        c = nodes[i];\n        c.x -= cx;\n        c.y -= cy;\n        cr = Math.max(cr, c.r + Math.sqrt(c.x * c.x + c.y * c.y));\n    }\n    node.r = cr;\n    nodes.forEach(d3_layout_packUnlink);\n}\nfunction d3_layout_packLink(node) {\n    node._pack_next = node._pack_prev = node;\n}\nfunction d3_layout_packUnlink(node) {\n    delete node._pack_next;\n    delete node._pack_prev;\n}\nfunction d3_layout_packTransform(node, x, y, k) {\n    var children = node.children;\n    node.x = x += k * node.x;\n    node.y = y += k * node.y;\n    node.r *= k;\n    if (children) {\n        var i = -1, n = children.length;\n        while (++i < n)\n            d3_layout_packTransform(children[i], x, y, k);\n    }\n}\nfunction d3_layout_packPlace(a, b, c) {\n    var db = a.r + c.r, dx = b.x - a.x, dy = b.y - a.y;\n    if (db && (dx || dy)) {\n        var da = b.r + c.r, dc = dx * dx + dy * dy;\n        da *= da;\n        db *= db;\n        var x = 0.5 + (db - da) / (2 * dc), y = Math.sqrt(Math.max(0, 2 * da * (db + dc) - (db -= dc) * db - da * da)) / (2 * dc);\n        c.x = a.x + x * dx + y * dy;\n        c.y = a.y + x * dy - y * dx;\n    } else {\n        c.x = a.x + db;\n        c.y = a.y;\n    }\n}"
}