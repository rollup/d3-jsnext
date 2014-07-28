{
  "filepath": "/geom/voronoi/index.js",
  "shared": [],
  "dependencies": [
    "d3_geom_voronoiRedBlackTree",
    "d3_geom_voronoiCell",
    "d3_geom_voronoiAddBeach",
    "d3_geom_voronoiRemoveBeach",
    "d3_geom_voronoiClipEdges",
    "d3_geom_voronoiCloseCells"
  ],
  "helpers": [
    "d3_geom_voronoiEdges",
    "d3_geom_voronoiCells",
    "d3_geom_voronoiBeaches",
    "d3_geom_voronoiBeachPool",
    "d3_geom_voronoiFirstCircle",
    "d3_geom_voronoiCircles",
    "d3_geom_voronoiCirclePool",
    "d3_geom_voronoi",
    "d3_geom_voronoiVertexOrder"
  ],
  "exports": [],
  "ast": {
    "type": "Program",
    "body": [
      {
        "type": "VariableDeclaration",
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "name": "d3_geom_voronoiEdges"
            },
            "init": null
          }
        ]
      },
      {
        "type": "VariableDeclaration",
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "name": "d3_geom_voronoiCells"
            },
            "init": null
          }
        ]
      },
      {
        "type": "VariableDeclaration",
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "name": "d3_geom_voronoiBeaches"
            },
            "init": null
          }
        ]
      },
      {
        "type": "VariableDeclaration",
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "name": "d3_geom_voronoiBeachPool"
            },
            "init": {
              "type": "ArrayExpression",
              "elements": []
            }
          }
        ]
      },
      {
        "type": "VariableDeclaration",
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "name": "d3_geom_voronoiFirstCircle"
            },
            "init": null
          }
        ]
      },
      {
        "type": "VariableDeclaration",
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "name": "d3_geom_voronoiCircles"
            },
            "init": null
          }
        ]
      },
      {
        "type": "VariableDeclaration",
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "name": "d3_geom_voronoiCirclePool"
            },
            "init": {
              "type": "ArrayExpression",
              "elements": []
            }
          }
        ]
      },
      {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "name": "d3_geom_voronoi"
        },
        "params": [
          {
            "type": "Identifier",
            "name": "sites"
          },
          {
            "type": "Identifier",
            "name": "bbox"
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
                    "name": "site"
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
                            "type": "Identifier",
                            "name": "sites"
                          },
                          "property": {
                            "type": "Identifier",
                            "name": "sort"
                          }
                        },
                        "arguments": [
                          {
                            "type": "Identifier",
                            "name": "d3_geom_voronoiVertexOrder"
                          }
                        ]
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
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "name": "x0"
                  },
                  "init": null
                },
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "name": "y0"
                  },
                  "init": null
                },
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "name": "circle"
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
                  "name": "d3_geom_voronoiEdges"
                },
                "right": {
                  "type": "ArrayExpression",
                  "elements": []
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
                  "name": "d3_geom_voronoiCells"
                },
                "right": {
                  "type": "NewExpression",
                  "callee": {
                    "type": "Identifier",
                    "name": "Array"
                  },
                  "arguments": [
                    {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "name": "sites"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "length"
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
                  "type": "Identifier",
                  "name": "d3_geom_voronoiBeaches"
                },
                "right": {
                  "type": "NewExpression",
                  "callee": {
                    "type": "Identifier",
                    "name": "d3_geom_voronoiRedBlackTree"
                  },
                  "arguments": []
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
                  "name": "d3_geom_voronoiCircles"
                },
                "right": {
                  "type": "NewExpression",
                  "callee": {
                    "type": "Identifier",
                    "name": "d3_geom_voronoiRedBlackTree"
                  },
                  "arguments": []
                }
              }
            },
            {
              "type": "WhileStatement",
              "test": {
                "type": "Literal",
                "value": true,
                "raw": "true"
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
                        "name": "circle"
                      },
                      "right": {
                        "type": "Identifier",
                        "name": "d3_geom_voronoiFirstCircle"
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
                        "name": "site"
                      },
                      "right": {
                        "type": "LogicalExpression",
                        "operator": "||",
                        "left": {
                          "type": "LogicalExpression",
                          "operator": "||",
                          "left": {
                            "type": "UnaryExpression",
                            "operator": "!",
                            "argument": {
                              "type": "Identifier",
                              "name": "circle"
                            },
                            "prefix": true
                          },
                          "right": {
                            "type": "BinaryExpression",
                            "operator": "<",
                            "left": {
                              "type": "MemberExpression",
                              "computed": false,
                              "object": {
                                "type": "Identifier",
                                "name": "site"
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
                                "name": "circle"
                              },
                              "property": {
                                "type": "Identifier",
                                "name": "y"
                              }
                            }
                          }
                        },
                        "right": {
                          "type": "LogicalExpression",
                          "operator": "&&",
                          "left": {
                            "type": "BinaryExpression",
                            "operator": "===",
                            "left": {
                              "type": "MemberExpression",
                              "computed": false,
                              "object": {
                                "type": "Identifier",
                                "name": "site"
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
                                "name": "circle"
                              },
                              "property": {
                                "type": "Identifier",
                                "name": "y"
                              }
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
                                "name": "site"
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
                                "name": "circle"
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
                              "operator": "!==",
                              "left": {
                                "type": "MemberExpression",
                                "computed": false,
                                "object": {
                                  "type": "Identifier",
                                  "name": "site"
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
                              "operator": "!==",
                              "left": {
                                "type": "MemberExpression",
                                "computed": false,
                                "object": {
                                  "type": "Identifier",
                                  "name": "site"
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
                                        "name": "site"
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "name": "i"
                                      }
                                    }
                                  },
                                  "right": {
                                    "type": "NewExpression",
                                    "callee": {
                                      "type": "Identifier",
                                      "name": "d3_geom_voronoiCell"
                                    },
                                    "arguments": [
                                      {
                                        "type": "Identifier",
                                        "name": "site"
                                      }
                                    ]
                                  }
                                }
                              },
                              {
                                "type": "ExpressionStatement",
                                "expression": {
                                  "type": "CallExpression",
                                  "callee": {
                                    "type": "Identifier",
                                    "name": "d3_geom_voronoiAddBeach"
                                  },
                                  "arguments": [
                                    {
                                      "type": "Identifier",
                                      "name": "site"
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
                                        "name": "x0"
                                      },
                                      "right": {
                                        "type": "MemberExpression",
                                        "computed": false,
                                        "object": {
                                          "type": "Identifier",
                                          "name": "site"
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
                                        "name": "y0"
                                      },
                                      "right": {
                                        "type": "MemberExpression",
                                        "computed": false,
                                        "object": {
                                          "type": "Identifier",
                                          "name": "site"
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
                              "type": "Identifier",
                              "name": "site"
                            },
                            "right": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "MemberExpression",
                                "computed": false,
                                "object": {
                                  "type": "Identifier",
                                  "name": "sites"
                                },
                                "property": {
                                  "type": "Identifier",
                                  "name": "pop"
                                }
                              },
                              "arguments": []
                            }
                          }
                        }
                      ]
                    },
                    "alternate": {
                      "type": "IfStatement",
                      "test": {
                        "type": "Identifier",
                        "name": "circle"
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
                                "name": "d3_geom_voronoiRemoveBeach"
                              },
                              "arguments": [
                                {
                                  "type": "MemberExpression",
                                  "computed": false,
                                  "object": {
                                    "type": "Identifier",
                                    "name": "circle"
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "name": "arc"
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
                            "type": "BreakStatement",
                            "label": null
                          }
                        ]
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
                "name": "bbox"
              },
              "consequent": {
                "type": "ExpressionStatement",
                "expression": {
                  "type": "SequenceExpression",
                  "expressions": [
                    {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "name": "d3_geom_voronoiClipEdges"
                      },
                      "arguments": [
                        {
                          "type": "Identifier",
                          "name": "bbox"
                        }
                      ]
                    },
                    {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "name": "d3_geom_voronoiCloseCells"
                      },
                      "arguments": [
                        {
                          "type": "Identifier",
                          "name": "bbox"
                        }
                      ]
                    }
                  ]
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
                    "name": "diagram"
                  },
                  "init": {
                    "type": "ObjectExpression",
                    "properties": [
                      {
                        "type": "Property",
                        "key": {
                          "type": "Identifier",
                          "name": "cells"
                        },
                        "value": {
                          "type": "Identifier",
                          "name": "d3_geom_voronoiCells"
                        },
                        "kind": "init"
                      },
                      {
                        "type": "Property",
                        "key": {
                          "type": "Identifier",
                          "name": "edges"
                        },
                        "value": {
                          "type": "Identifier",
                          "name": "d3_geom_voronoiEdges"
                        },
                        "kind": "init"
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
                  "type": "Identifier",
                  "name": "d3_geom_voronoiBeaches"
                },
                "right": {
                  "type": "AssignmentExpression",
                  "operator": "=",
                  "left": {
                    "type": "Identifier",
                    "name": "d3_geom_voronoiCircles"
                  },
                  "right": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "name": "d3_geom_voronoiEdges"
                    },
                    "right": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "name": "d3_geom_voronoiCells"
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
            },
            {
              "type": "ReturnStatement",
              "argument": {
                "type": "Identifier",
                "name": "diagram"
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
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "name": "d3_geom_voronoiVertexOrder"
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
                "type": "LogicalExpression",
                "operator": "||",
                "left": {
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
                },
                "right": {
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
  "src": "var d3_geom_voronoiEdges;\nvar d3_geom_voronoiCells;\nvar d3_geom_voronoiBeaches;\nvar d3_geom_voronoiBeachPool = [];\nvar d3_geom_voronoiFirstCircle;\nvar d3_geom_voronoiCircles;\nvar d3_geom_voronoiCirclePool = [];\nfunction d3_geom_voronoi(sites, bbox) {\n    var site = sites.sort(d3_geom_voronoiVertexOrder).pop(), x0, y0, circle;\n    d3_geom_voronoiEdges = [];\n    d3_geom_voronoiCells = new Array(sites.length);\n    d3_geom_voronoiBeaches = new d3_geom_voronoiRedBlackTree();\n    d3_geom_voronoiCircles = new d3_geom_voronoiRedBlackTree();\n    while (true) {\n        circle = d3_geom_voronoiFirstCircle;\n        if (site && (!circle || site.y < circle.y || site.y === circle.y && site.x < circle.x)) {\n            if (site.x !== x0 || site.y !== y0) {\n                d3_geom_voronoiCells[site.i] = new d3_geom_voronoiCell(site);\n                d3_geom_voronoiAddBeach(site);\n                x0 = site.x, y0 = site.y;\n            }\n            site = sites.pop();\n        } else if (circle) {\n            d3_geom_voronoiRemoveBeach(circle.arc);\n        } else {\n            break;\n        }\n    }\n    if (bbox)\n        d3_geom_voronoiClipEdges(bbox), d3_geom_voronoiCloseCells(bbox);\n    var diagram = {\n            cells: d3_geom_voronoiCells,\n            edges: d3_geom_voronoiEdges\n        };\n    d3_geom_voronoiBeaches = d3_geom_voronoiCircles = d3_geom_voronoiEdges = d3_geom_voronoiCells = null;\n    return diagram;\n}\n;\nfunction d3_geom_voronoiVertexOrder(a, b) {\n    return b.y - a.y || b.x - a.x;\n}"
}