{
  "filepath": "/geom/voronoi/cell.js",
  "shared": [],
  "dependencies": [
    "d3_geom_voronoiCells",
    "abs",
    "d3_geom_voronoiHalfEdge",
    "d3_geom_voronoiCreateBorderEdge"
  ],
  "helpers": [
    "d3_geom_voronoiCell",
    "d3_geom_voronoiCloseCells",
    "d3_geom_voronoiHalfEdgeOrder"
  ],
  "exports": [],
  "ast": {
    "type": "Program",
    "body": [
      {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "name": "d3_geom_voronoiCell"
        },
        "params": [
          {
            "type": "Identifier",
            "name": "site"
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
                    "name": "site"
                  }
                },
                "right": {
                  "type": "Identifier",
                  "name": "site"
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
                    "name": "edges"
                  }
                },
                "right": {
                  "type": "ArrayExpression",
                  "elements": []
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
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "Identifier",
                "name": "d3_geom_voronoiCell"
              },
              "property": {
                "type": "Identifier",
                "name": "prototype"
              }
            },
            "property": {
              "type": "Identifier",
              "name": "prepare"
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
                        "name": "halfEdges"
                      },
                      "init": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "ThisExpression"
                        },
                        "property": {
                          "type": "Identifier",
                          "name": "edges"
                        }
                      }
                    },
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "name": "iHalfEdge"
                      },
                      "init": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "name": "halfEdges"
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
                        "name": "edge"
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
                      "name": "iHalfEdge"
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
                            "name": "edge"
                          },
                          "right": {
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                              "type": "MemberExpression",
                              "computed": true,
                              "object": {
                                "type": "Identifier",
                                "name": "halfEdges"
                              },
                              "property": {
                                "type": "Identifier",
                                "name": "iHalfEdge"
                              }
                            },
                            "property": {
                              "type": "Identifier",
                              "name": "edge"
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
                                "name": "a"
                              }
                            },
                            "prefix": true
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
                                "name": "halfEdges"
                              },
                              "property": {
                                "type": "Identifier",
                                "name": "splice"
                              }
                            },
                            "arguments": [
                              {
                                "type": "Identifier",
                                "name": "iHalfEdge"
                              },
                              {
                                "type": "Literal",
                                "value": 1,
                                "raw": "1"
                              }
                            ]
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
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "name": "halfEdges"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "sort"
                      }
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "name": "d3_geom_voronoiHalfEdgeOrder"
                      }
                    ]
                  }
                },
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "name": "halfEdges"
                    },
                    "property": {
                      "type": "Identifier",
                      "name": "length"
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
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "name": "d3_geom_voronoiCloseCells"
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
                    "name": "x2"
                  },
                  "init": null
                },
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "name": "y2"
                  },
                  "init": null
                },
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "name": "x3"
                  },
                  "init": null
                },
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "name": "y3"
                  },
                  "init": null
                },
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "name": "cells"
                  },
                  "init": {
                    "type": "Identifier",
                    "name": "d3_geom_voronoiCells"
                  }
                },
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "name": "iCell"
                  },
                  "init": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "name": "cells"
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
                    "name": "cell"
                  },
                  "init": null
                },
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "name": "iHalfEdge"
                  },
                  "init": null
                },
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "name": "halfEdges"
                  },
                  "init": null
                },
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "name": "nHalfEdges"
                  },
                  "init": null
                },
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "name": "start"
                  },
                  "init": null
                },
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "name": "end"
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
                  "name": "iCell"
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
                        "name": "cell"
                      },
                      "right": {
                        "type": "MemberExpression",
                        "computed": true,
                        "object": {
                          "type": "Identifier",
                          "name": "cells"
                        },
                        "property": {
                          "type": "Identifier",
                          "name": "iCell"
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
                        "type": "UnaryExpression",
                        "operator": "!",
                        "argument": {
                          "type": "Identifier",
                          "name": "cell"
                        },
                        "prefix": true
                      },
                      "right": {
                        "type": "UnaryExpression",
                        "operator": "!",
                        "argument": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "name": "cell"
                            },
                            "property": {
                              "type": "Identifier",
                              "name": "prepare"
                            }
                          },
                          "arguments": []
                        },
                        "prefix": true
                      }
                    },
                    "consequent": {
                      "type": "ContinueStatement",
                      "label": null
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
                        "name": "halfEdges"
                      },
                      "right": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "name": "cell"
                        },
                        "property": {
                          "type": "Identifier",
                          "name": "edges"
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
                        "name": "nHalfEdges"
                      },
                      "right": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "name": "halfEdges"
                        },
                        "property": {
                          "type": "Identifier",
                          "name": "length"
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
                        "name": "iHalfEdge"
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
                      "operator": "<",
                      "left": {
                        "type": "Identifier",
                        "name": "iHalfEdge"
                      },
                      "right": {
                        "type": "Identifier",
                        "name": "nHalfEdges"
                      }
                    },
                    "body": {
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
                                  "name": "end"
                                },
                                "right": {
                                  "type": "CallExpression",
                                  "callee": {
                                    "type": "MemberExpression",
                                    "computed": false,
                                    "object": {
                                      "type": "MemberExpression",
                                      "computed": true,
                                      "object": {
                                        "type": "Identifier",
                                        "name": "halfEdges"
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "name": "iHalfEdge"
                                      }
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "name": "end"
                                    }
                                  },
                                  "arguments": []
                                }
                              },
                              {
                                "type": "AssignmentExpression",
                                "operator": "=",
                                "left": {
                                  "type": "Identifier",
                                  "name": "x3"
                                },
                                "right": {
                                  "type": "MemberExpression",
                                  "computed": false,
                                  "object": {
                                    "type": "Identifier",
                                    "name": "end"
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "name": "x"
                                  }
                                }
                              },
                              {
                                "type": "AssignmentExpression",
                                "operator": "=",
                                "left": {
                                  "type": "Identifier",
                                  "name": "y3"
                                },
                                "right": {
                                  "type": "MemberExpression",
                                  "computed": false,
                                  "object": {
                                    "type": "Identifier",
                                    "name": "end"
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "name": "y"
                                  }
                                }
                              }
                            ]
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
                                  "name": "start"
                                },
                                "right": {
                                  "type": "CallExpression",
                                  "callee": {
                                    "type": "MemberExpression",
                                    "computed": false,
                                    "object": {
                                      "type": "MemberExpression",
                                      "computed": true,
                                      "object": {
                                        "type": "Identifier",
                                        "name": "halfEdges"
                                      },
                                      "property": {
                                        "type": "BinaryExpression",
                                        "operator": "%",
                                        "left": {
                                          "type": "UpdateExpression",
                                          "operator": "++",
                                          "argument": {
                                            "type": "Identifier",
                                            "name": "iHalfEdge"
                                          },
                                          "prefix": true
                                        },
                                        "right": {
                                          "type": "Identifier",
                                          "name": "nHalfEdges"
                                        }
                                      }
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "name": "start"
                                    }
                                  },
                                  "arguments": []
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
                                  "type": "MemberExpression",
                                  "computed": false,
                                  "object": {
                                    "type": "Identifier",
                                    "name": "start"
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "name": "x"
                                  }
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
                                  "type": "MemberExpression",
                                  "computed": false,
                                  "object": {
                                    "type": "Identifier",
                                    "name": "start"
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "name": "y"
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
                            "operator": "||",
                            "left": {
                              "type": "BinaryExpression",
                              "operator": ">",
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
                                      "name": "x3"
                                    },
                                    "right": {
                                      "type": "Identifier",
                                      "name": "x2"
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
                              "operator": ">",
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
                                      "name": "y3"
                                    },
                                    "right": {
                                      "type": "Identifier",
                                      "name": "y2"
                                    }
                                  }
                                ]
                              },
                              "right": {
                                "type": "Identifier",
                                "name": "ε"
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
                                      "name": "halfEdges"
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "name": "splice"
                                    }
                                  },
                                  "arguments": [
                                    {
                                      "type": "Identifier",
                                      "name": "iHalfEdge"
                                    },
                                    {
                                      "type": "Literal",
                                      "value": 0,
                                      "raw": "0"
                                    },
                                    {
                                      "type": "NewExpression",
                                      "callee": {
                                        "type": "Identifier",
                                        "name": "d3_geom_voronoiHalfEdge"
                                      },
                                      "arguments": [
                                        {
                                          "type": "CallExpression",
                                          "callee": {
                                            "type": "Identifier",
                                            "name": "d3_geom_voronoiCreateBorderEdge"
                                          },
                                          "arguments": [
                                            {
                                              "type": "MemberExpression",
                                              "computed": false,
                                              "object": {
                                                "type": "Identifier",
                                                "name": "cell"
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "name": "site"
                                              }
                                            },
                                            {
                                              "type": "Identifier",
                                              "name": "end"
                                            },
                                            {
                                              "type": "ConditionalExpression",
                                              "test": {
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
                                                          "type": "Identifier",
                                                          "name": "x3"
                                                        },
                                                        "right": {
                                                          "type": "Identifier",
                                                          "name": "x0"
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
                                                  "operator": ">",
                                                  "left": {
                                                    "type": "BinaryExpression",
                                                    "operator": "-",
                                                    "left": {
                                                      "type": "Identifier",
                                                      "name": "y1"
                                                    },
                                                    "right": {
                                                      "type": "Identifier",
                                                      "name": "y3"
                                                    }
                                                  },
                                                  "right": {
                                                    "type": "Identifier",
                                                    "name": "ε"
                                                  }
                                                }
                                              },
                                              "consequent": {
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
                                                      "type": "ConditionalExpression",
                                                      "test": {
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
                                                                "type": "Identifier",
                                                                "name": "x2"
                                                              },
                                                              "right": {
                                                                "type": "Identifier",
                                                                "name": "x0"
                                                              }
                                                            }
                                                          ]
                                                        },
                                                        "right": {
                                                          "type": "Identifier",
                                                          "name": "ε"
                                                        }
                                                      },
                                                      "consequent": {
                                                        "type": "Identifier",
                                                        "name": "y2"
                                                      },
                                                      "alternate": {
                                                        "type": "Identifier",
                                                        "name": "y1"
                                                      }
                                                    },
                                                    "kind": "init"
                                                  }
                                                ]
                                              },
                                              "alternate": {
                                                "type": "ConditionalExpression",
                                                "test": {
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
                                                            "type": "Identifier",
                                                            "name": "y3"
                                                          },
                                                          "right": {
                                                            "type": "Identifier",
                                                            "name": "y1"
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
                                                    "operator": ">",
                                                    "left": {
                                                      "type": "BinaryExpression",
                                                      "operator": "-",
                                                      "left": {
                                                        "type": "Identifier",
                                                        "name": "x1"
                                                      },
                                                      "right": {
                                                        "type": "Identifier",
                                                        "name": "x3"
                                                      }
                                                    },
                                                    "right": {
                                                      "type": "Identifier",
                                                      "name": "ε"
                                                    }
                                                  }
                                                },
                                                "consequent": {
                                                  "type": "ObjectExpression",
                                                  "properties": [
                                                    {
                                                      "type": "Property",
                                                      "key": {
                                                        "type": "Identifier",
                                                        "name": "x"
                                                      },
                                                      "value": {
                                                        "type": "ConditionalExpression",
                                                        "test": {
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
                                                                  "type": "Identifier",
                                                                  "name": "y2"
                                                                },
                                                                "right": {
                                                                  "type": "Identifier",
                                                                  "name": "y1"
                                                                }
                                                              }
                                                            ]
                                                          },
                                                          "right": {
                                                            "type": "Identifier",
                                                            "name": "ε"
                                                          }
                                                        },
                                                        "consequent": {
                                                          "type": "Identifier",
                                                          "name": "x2"
                                                        },
                                                        "alternate": {
                                                          "type": "Identifier",
                                                          "name": "x1"
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
                                                },
                                                "alternate": {
                                                  "type": "ConditionalExpression",
                                                  "test": {
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
                                                              "type": "Identifier",
                                                              "name": "x3"
                                                            },
                                                            "right": {
                                                              "type": "Identifier",
                                                              "name": "x1"
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
                                                      "operator": ">",
                                                      "left": {
                                                        "type": "BinaryExpression",
                                                        "operator": "-",
                                                        "left": {
                                                          "type": "Identifier",
                                                          "name": "y3"
                                                        },
                                                        "right": {
                                                          "type": "Identifier",
                                                          "name": "y0"
                                                        }
                                                      },
                                                      "right": {
                                                        "type": "Identifier",
                                                        "name": "ε"
                                                      }
                                                    }
                                                  },
                                                  "consequent": {
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
                                                          "type": "ConditionalExpression",
                                                          "test": {
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
                                                                    "type": "Identifier",
                                                                    "name": "x2"
                                                                  },
                                                                  "right": {
                                                                    "type": "Identifier",
                                                                    "name": "x1"
                                                                  }
                                                                }
                                                              ]
                                                            },
                                                            "right": {
                                                              "type": "Identifier",
                                                              "name": "ε"
                                                            }
                                                          },
                                                          "consequent": {
                                                            "type": "Identifier",
                                                            "name": "y2"
                                                          },
                                                          "alternate": {
                                                            "type": "Identifier",
                                                            "name": "y0"
                                                          }
                                                        },
                                                        "kind": "init"
                                                      }
                                                    ]
                                                  },
                                                  "alternate": {
                                                    "type": "ConditionalExpression",
                                                    "test": {
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
                                                                "type": "Identifier",
                                                                "name": "y3"
                                                              },
                                                              "right": {
                                                                "type": "Identifier",
                                                                "name": "y0"
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
                                                        "operator": ">",
                                                        "left": {
                                                          "type": "BinaryExpression",
                                                          "operator": "-",
                                                          "left": {
                                                            "type": "Identifier",
                                                            "name": "x3"
                                                          },
                                                          "right": {
                                                            "type": "Identifier",
                                                            "name": "x0"
                                                          }
                                                        },
                                                        "right": {
                                                          "type": "Identifier",
                                                          "name": "ε"
                                                        }
                                                      }
                                                    },
                                                    "consequent": {
                                                      "type": "ObjectExpression",
                                                      "properties": [
                                                        {
                                                          "type": "Property",
                                                          "key": {
                                                            "type": "Identifier",
                                                            "name": "x"
                                                          },
                                                          "value": {
                                                            "type": "ConditionalExpression",
                                                            "test": {
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
                                                                      "type": "Identifier",
                                                                      "name": "y2"
                                                                    },
                                                                    "right": {
                                                                      "type": "Identifier",
                                                                      "name": "y0"
                                                                    }
                                                                  }
                                                                ]
                                                              },
                                                              "right": {
                                                                "type": "Identifier",
                                                                "name": "ε"
                                                              }
                                                            },
                                                            "consequent": {
                                                              "type": "Identifier",
                                                              "name": "x2"
                                                            },
                                                            "alternate": {
                                                              "type": "Identifier",
                                                              "name": "x0"
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
                                                    },
                                                    "alternate": {
                                                      "type": "Literal",
                                                      "value": null,
                                                      "raw": "null"
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          ]
                                        },
                                        {
                                          "type": "MemberExpression",
                                          "computed": false,
                                          "object": {
                                            "type": "Identifier",
                                            "name": "cell"
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "name": "site"
                                          }
                                        },
                                        {
                                          "type": "Literal",
                                          "value": null,
                                          "raw": "null"
                                        }
                                      ]
                                    }
                                  ]
                                }
                              },
                              {
                                "type": "ExpressionStatement",
                                "expression": {
                                  "type": "UpdateExpression",
                                  "operator": "++",
                                  "argument": {
                                    "type": "Identifier",
                                    "name": "nHalfEdges"
                                  },
                                  "prefix": true
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
          "name": "d3_geom_voronoiHalfEdgeOrder"
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
                    "name": "angle"
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
                    "name": "angle"
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
  },
  "src": "function d3_geom_voronoiCell(site) {\n    this.site = site;\n    this.edges = [];\n}\nd3_geom_voronoiCell.prototype.prepare = function () {\n    var halfEdges = this.edges, iHalfEdge = halfEdges.length, edge;\n    while (iHalfEdge--) {\n        edge = halfEdges[iHalfEdge].edge;\n        if (!edge.b || !edge.a)\n            halfEdges.splice(iHalfEdge, 1);\n    }\n    halfEdges.sort(d3_geom_voronoiHalfEdgeOrder);\n    return halfEdges.length;\n};\nfunction d3_geom_voronoiCloseCells(extent) {\n    var x0 = extent[0][0], x1 = extent[1][0], y0 = extent[0][1], y1 = extent[1][1], x2, y2, x3, y3, cells = d3_geom_voronoiCells, iCell = cells.length, cell, iHalfEdge, halfEdges, nHalfEdges, start, end;\n    while (iCell--) {\n        cell = cells[iCell];\n        if (!cell || !cell.prepare())\n            continue;\n        halfEdges = cell.edges;\n        nHalfEdges = halfEdges.length;\n        iHalfEdge = 0;\n        while (iHalfEdge < nHalfEdges) {\n            end = halfEdges[iHalfEdge].end(), x3 = end.x, y3 = end.y;\n            start = halfEdges[++iHalfEdge % nHalfEdges].start(), x2 = start.x, y2 = start.y;\n            if (abs(x3 - x2) > ε || abs(y3 - y2) > ε) {\n                halfEdges.splice(iHalfEdge, 0, new d3_geom_voronoiHalfEdge(d3_geom_voronoiCreateBorderEdge(cell.site, end, abs(x3 - x0) < ε && y1 - y3 > ε ? {\n                    x: x0,\n                    y: abs(x2 - x0) < ε ? y2 : y1\n                } : abs(y3 - y1) < ε && x1 - x3 > ε ? {\n                    x: abs(y2 - y1) < ε ? x2 : x1,\n                    y: y1\n                } : abs(x3 - x1) < ε && y3 - y0 > ε ? {\n                    x: x1,\n                    y: abs(x2 - x1) < ε ? y2 : y0\n                } : abs(y3 - y0) < ε && x3 - x0 > ε ? {\n                    x: abs(y2 - y0) < ε ? x2 : x0,\n                    y: y0\n                } : null), cell.site, null));\n                ++nHalfEdges;\n            }\n        }\n    }\n}\nfunction d3_geom_voronoiHalfEdgeOrder(a, b) {\n    return b.angle - a.angle;\n}"
}