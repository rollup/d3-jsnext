{
  "filepath": "/geom/voronoi.js",
  "shared": [],
  "dependencies": [
    "d3_geom_pointX",
    "d3_geom_pointY",
    "d3_geom_voronoi",
    "d3_geom_voronoiHalfEdgeOrder",
    "d3_functor"
  ],
  "helpers": [
    "d3_geom_voronoiClipExtent",
    "d3_geom_voronoiTriangleArea"
  ],
  "exports": [
    "d3.geom.voronoi"
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
                "name": "geom"
              }
            },
            "property": {
              "type": "Identifier",
              "name": "voronoi"
            }
          },
          "right": {
            "type": "FunctionExpression",
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "name": "points"
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
                        "type": "Identifier",
                        "name": "d3_geom_pointX"
                      }
                    },
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "name": "y"
                      },
                      "init": {
                        "type": "Identifier",
                        "name": "d3_geom_pointY"
                      }
                    },
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "name": "fx"
                      },
                      "init": {
                        "type": "Identifier",
                        "name": "x"
                      }
                    },
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "name": "fy"
                      },
                      "init": {
                        "type": "Identifier",
                        "name": "y"
                      }
                    },
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "name": "clipExtent"
                      },
                      "init": {
                        "type": "Identifier",
                        "name": "d3_geom_voronoiClipExtent"
                      }
                    }
                  ],
                  "kind": "var"
                },
                {
                  "type": "IfStatement",
                  "test": {
                    "type": "Identifier",
                    "name": "points"
                  },
                  "consequent": {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "name": "voronoi"
                      },
                      "arguments": [
                        {
                          "type": "Identifier",
                          "name": "points"
                        }
                      ]
                    }
                  },
                  "alternate": null
                },
                {
                  "type": "FunctionDeclaration",
                  "id": {
                    "type": "Identifier",
                    "name": "voronoi"
                  },
                  "params": [
                    {
                      "type": "Identifier",
                      "name": "data"
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
                              "name": "polygons"
                            },
                            "init": {
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
                                    "name": "data"
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "name": "length"
                                  }
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
                              "type": "MemberExpression",
                              "computed": true,
                              "object": {
                                "type": "MemberExpression",
                                "computed": true,
                                "object": {
                                  "type": "Identifier",
                                  "name": "clipExtent"
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
                                  "name": "clipExtent"
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
                                  "name": "clipExtent"
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
                                  "name": "clipExtent"
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
                              "type": "MemberExpression",
                              "computed": false,
                              "object": {
                                "type": "CallExpression",
                                "callee": {
                                  "type": "Identifier",
                                  "name": "d3_geom_voronoi"
                                },
                                "arguments": [
                                  {
                                    "type": "CallExpression",
                                    "callee": {
                                      "type": "Identifier",
                                      "name": "sites"
                                    },
                                    "arguments": [
                                      {
                                        "type": "Identifier",
                                        "name": "data"
                                      }
                                    ]
                                  },
                                  {
                                    "type": "Identifier",
                                    "name": "clipExtent"
                                  }
                                ]
                              },
                              "property": {
                                "type": "Identifier",
                                "name": "cells"
                              }
                            },
                            "property": {
                              "type": "Identifier",
                              "name": "forEach"
                            }
                          },
                          "arguments": [
                            {
                              "type": "FunctionExpression",
                              "id": null,
                              "params": [
                                {
                                  "type": "Identifier",
                                  "name": "cell"
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
                                          "name": "edges"
                                        },
                                        "init": {
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
                                      },
                                      {
                                        "type": "VariableDeclarator",
                                        "id": {
                                          "type": "Identifier",
                                          "name": "site"
                                        },
                                        "init": {
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
                                        }
                                      },
                                      {
                                        "type": "VariableDeclarator",
                                        "id": {
                                          "type": "Identifier",
                                          "name": "polygon"
                                        },
                                        "init": {
                                          "type": "AssignmentExpression",
                                          "operator": "=",
                                          "left": {
                                            "type": "MemberExpression",
                                            "computed": true,
                                            "object": {
                                              "type": "Identifier",
                                              "name": "polygons"
                                            },
                                            "property": {
                                              "type": "Identifier",
                                              "name": "i"
                                            }
                                          },
                                          "right": {
                                            "type": "ConditionalExpression",
                                            "test": {
                                              "type": "MemberExpression",
                                              "computed": false,
                                              "object": {
                                                "type": "Identifier",
                                                "name": "edges"
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "name": "length"
                                              }
                                            },
                                            "consequent": {
                                              "type": "CallExpression",
                                              "callee": {
                                                "type": "MemberExpression",
                                                "computed": false,
                                                "object": {
                                                  "type": "Identifier",
                                                  "name": "edges"
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
                                                      "name": "e"
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
                                                              "type": "CallExpression",
                                                              "callee": {
                                                                "type": "MemberExpression",
                                                                "computed": false,
                                                                "object": {
                                                                  "type": "Identifier",
                                                                  "name": "e"
                                                                },
                                                                "property": {
                                                                  "type": "Identifier",
                                                                  "name": "start"
                                                                }
                                                              },
                                                              "arguments": []
                                                            }
                                                          }
                                                        ],
                                                        "kind": "var"
                                                      },
                                                      {
                                                        "type": "ReturnStatement",
                                                        "argument": {
                                                          "type": "ArrayExpression",
                                                          "elements": [
                                                            {
                                                              "type": "MemberExpression",
                                                              "computed": false,
                                                              "object": {
                                                                "type": "Identifier",
                                                                "name": "s"
                                                              },
                                                              "property": {
                                                                "type": "Identifier",
                                                                "name": "x"
                                                              }
                                                            },
                                                            {
                                                              "type": "MemberExpression",
                                                              "computed": false,
                                                              "object": {
                                                                "type": "Identifier",
                                                                "name": "s"
                                                              },
                                                              "property": {
                                                                "type": "Identifier",
                                                                "name": "y"
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
                                            "alternate": {
                                              "type": "ConditionalExpression",
                                              "test": {
                                                "type": "LogicalExpression",
                                                "operator": "&&",
                                                "left": {
                                                  "type": "LogicalExpression",
                                                  "operator": "&&",
                                                  "left": {
                                                    "type": "LogicalExpression",
                                                    "operator": "&&",
                                                    "left": {
                                                      "type": "BinaryExpression",
                                                      "operator": ">=",
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
                                                      "operator": "<=",
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
                                                        "name": "x1"
                                                      }
                                                    }
                                                  },
                                                  "right": {
                                                    "type": "BinaryExpression",
                                                    "operator": ">=",
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
                                                "right": {
                                                  "type": "BinaryExpression",
                                                  "operator": "<=",
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
                                                    "name": "y1"
                                                  }
                                                }
                                              },
                                              "consequent": {
                                                "type": "ArrayExpression",
                                                "elements": [
                                                  {
                                                    "type": "ArrayExpression",
                                                    "elements": [
                                                      {
                                                        "type": "Identifier",
                                                        "name": "x0"
                                                      },
                                                      {
                                                        "type": "Identifier",
                                                        "name": "y1"
                                                      }
                                                    ]
                                                  },
                                                  {
                                                    "type": "ArrayExpression",
                                                    "elements": [
                                                      {
                                                        "type": "Identifier",
                                                        "name": "x1"
                                                      },
                                                      {
                                                        "type": "Identifier",
                                                        "name": "y1"
                                                      }
                                                    ]
                                                  },
                                                  {
                                                    "type": "ArrayExpression",
                                                    "elements": [
                                                      {
                                                        "type": "Identifier",
                                                        "name": "x1"
                                                      },
                                                      {
                                                        "type": "Identifier",
                                                        "name": "y0"
                                                      }
                                                    ]
                                                  },
                                                  {
                                                    "type": "ArrayExpression",
                                                    "elements": [
                                                      {
                                                        "type": "Identifier",
                                                        "name": "x0"
                                                      },
                                                      {
                                                        "type": "Identifier",
                                                        "name": "y0"
                                                      }
                                                    ]
                                                  }
                                                ]
                                              },
                                              "alternate": {
                                                "type": "ArrayExpression",
                                                "elements": []
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
                                      "operator": "=",
                                      "left": {
                                        "type": "MemberExpression",
                                        "computed": false,
                                        "object": {
                                          "type": "Identifier",
                                          "name": "polygon"
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "name": "point"
                                        }
                                      },
                                      "right": {
                                        "type": "MemberExpression",
                                        "computed": true,
                                        "object": {
                                          "type": "Identifier",
                                          "name": "data"
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "name": "i"
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
                      },
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "Identifier",
                          "name": "polygons"
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
                    "name": "sites"
                  },
                  "params": [
                    {
                      "type": "Identifier",
                      "name": "data"
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
                              "name": "data"
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
                                            "type": "BinaryExpression",
                                            "operator": "*",
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
                                                  "name": "round"
                                                }
                                              },
                                              "arguments": [
                                                {
                                                  "type": "BinaryExpression",
                                                  "operator": "/",
                                                  "left": {
                                                    "type": "CallExpression",
                                                    "callee": {
                                                      "type": "Identifier",
                                                      "name": "fx"
                                                    },
                                                    "arguments": [
                                                      {
                                                        "type": "Identifier",
                                                        "name": "d"
                                                      },
                                                      {
                                                        "type": "Identifier",
                                                        "name": "i"
                                                      }
                                                    ]
                                                  },
                                                  "right": {
                                                    "type": "Identifier",
                                                    "name": "ε"
                                                  }
                                                }
                                              ]
                                            },
                                            "right": {
                                              "type": "Identifier",
                                              "name": "ε"
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
                                            "type": "BinaryExpression",
                                            "operator": "*",
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
                                                  "name": "round"
                                                }
                                              },
                                              "arguments": [
                                                {
                                                  "type": "BinaryExpression",
                                                  "operator": "/",
                                                  "left": {
                                                    "type": "CallExpression",
                                                    "callee": {
                                                      "type": "Identifier",
                                                      "name": "fy"
                                                    },
                                                    "arguments": [
                                                      {
                                                        "type": "Identifier",
                                                        "name": "d"
                                                      },
                                                      {
                                                        "type": "Identifier",
                                                        "name": "i"
                                                      }
                                                    ]
                                                  },
                                                  "right": {
                                                    "type": "Identifier",
                                                    "name": "ε"
                                                  }
                                                }
                                              ]
                                            },
                                            "right": {
                                              "type": "Identifier",
                                              "name": "ε"
                                            }
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
                        "name": "voronoi"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "links"
                      }
                    },
                    "right": {
                      "type": "FunctionExpression",
                      "id": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "name": "data"
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
                                  "type": "CallExpression",
                                  "callee": {
                                    "type": "MemberExpression",
                                    "computed": false,
                                    "object": {
                                      "type": "MemberExpression",
                                      "computed": false,
                                      "object": {
                                        "type": "CallExpression",
                                        "callee": {
                                          "type": "Identifier",
                                          "name": "d3_geom_voronoi"
                                        },
                                        "arguments": [
                                          {
                                            "type": "CallExpression",
                                            "callee": {
                                              "type": "Identifier",
                                              "name": "sites"
                                            },
                                            "arguments": [
                                              {
                                                "type": "Identifier",
                                                "name": "data"
                                              }
                                            ]
                                          }
                                        ]
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "name": "edges"
                                      }
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "name": "filter"
                                    }
                                  },
                                  "arguments": [
                                    {
                                      "type": "FunctionExpression",
                                      "id": null,
                                      "params": [
                                        {
                                          "type": "Identifier",
                                          "name": "edge"
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
                                              "operator": "&&",
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
                                      "name": "edge"
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
                                                "type": "MemberExpression",
                                                "computed": true,
                                                "object": {
                                                  "type": "Identifier",
                                                  "name": "data"
                                                },
                                                "property": {
                                                  "type": "MemberExpression",
                                                  "computed": false,
                                                  "object": {
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
                                                  "property": {
                                                    "type": "Identifier",
                                                    "name": "i"
                                                  }
                                                }
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
                                                "type": "MemberExpression",
                                                "computed": true,
                                                "object": {
                                                  "type": "Identifier",
                                                  "name": "data"
                                                },
                                                "property": {
                                                  "type": "MemberExpression",
                                                  "computed": false,
                                                  "object": {
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
                                                  "property": {
                                                    "type": "Identifier",
                                                    "name": "i"
                                                  }
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
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "name": "voronoi"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "triangles"
                      }
                    },
                    "right": {
                      "type": "FunctionExpression",
                      "id": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "name": "data"
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
                                  "name": "triangles"
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
                                "type": "MemberExpression",
                                "computed": false,
                                "object": {
                                  "type": "MemberExpression",
                                  "computed": false,
                                  "object": {
                                    "type": "CallExpression",
                                    "callee": {
                                      "type": "Identifier",
                                      "name": "d3_geom_voronoi"
                                    },
                                    "arguments": [
                                      {
                                        "type": "CallExpression",
                                        "callee": {
                                          "type": "Identifier",
                                          "name": "sites"
                                        },
                                        "arguments": [
                                          {
                                            "type": "Identifier",
                                            "name": "data"
                                          }
                                        ]
                                      }
                                    ]
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "name": "cells"
                                  }
                                },
                                "property": {
                                  "type": "Identifier",
                                  "name": "forEach"
                                }
                              },
                              "arguments": [
                                {
                                  "type": "FunctionExpression",
                                  "id": null,
                                  "params": [
                                    {
                                      "type": "Identifier",
                                      "name": "cell"
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
                                              "name": "site"
                                            },
                                            "init": {
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
                                            }
                                          },
                                          {
                                            "type": "VariableDeclarator",
                                            "id": {
                                              "type": "Identifier",
                                              "name": "edges"
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
                                                    "name": "cell"
                                                  },
                                                  "property": {
                                                    "type": "Identifier",
                                                    "name": "edges"
                                                  }
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
                                            "type": "VariableDeclarator",
                                            "id": {
                                              "type": "Identifier",
                                              "name": "j"
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
                                              "name": "m"
                                            },
                                            "init": {
                                              "type": "MemberExpression",
                                              "computed": false,
                                              "object": {
                                                "type": "Identifier",
                                                "name": "edges"
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
                                              "name": "e0"
                                            },
                                            "init": null
                                          },
                                          {
                                            "type": "VariableDeclarator",
                                            "id": {
                                              "type": "Identifier",
                                              "name": "s0"
                                            },
                                            "init": null
                                          },
                                          {
                                            "type": "VariableDeclarator",
                                            "id": {
                                              "type": "Identifier",
                                              "name": "e1"
                                            },
                                            "init": {
                                              "type": "MemberExpression",
                                              "computed": false,
                                              "object": {
                                                "type": "MemberExpression",
                                                "computed": true,
                                                "object": {
                                                  "type": "Identifier",
                                                  "name": "edges"
                                                },
                                                "property": {
                                                  "type": "BinaryExpression",
                                                  "operator": "-",
                                                  "left": {
                                                    "type": "Identifier",
                                                    "name": "m"
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
                                                "name": "edge"
                                              }
                                            }
                                          },
                                          {
                                            "type": "VariableDeclarator",
                                            "id": {
                                              "type": "Identifier",
                                              "name": "s1"
                                            },
                                            "init": {
                                              "type": "ConditionalExpression",
                                              "test": {
                                                "type": "BinaryExpression",
                                                "operator": "===",
                                                "left": {
                                                  "type": "MemberExpression",
                                                  "computed": false,
                                                  "object": {
                                                    "type": "Identifier",
                                                    "name": "e1"
                                                  },
                                                  "property": {
                                                    "type": "Identifier",
                                                    "name": "l"
                                                  }
                                                },
                                                "right": {
                                                  "type": "Identifier",
                                                  "name": "site"
                                                }
                                              },
                                              "consequent": {
                                                "type": "MemberExpression",
                                                "computed": false,
                                                "object": {
                                                  "type": "Identifier",
                                                  "name": "e1"
                                                },
                                                "property": {
                                                  "type": "Identifier",
                                                  "name": "r"
                                                }
                                              },
                                              "alternate": {
                                                "type": "MemberExpression",
                                                "computed": false,
                                                "object": {
                                                  "type": "Identifier",
                                                  "name": "e1"
                                                },
                                                "property": {
                                                  "type": "Identifier",
                                                  "name": "l"
                                                }
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
                                              "name": "j"
                                            },
                                            "prefix": true
                                          },
                                          "right": {
                                            "type": "Identifier",
                                            "name": "m"
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
                                                  "name": "e0"
                                                },
                                                "right": {
                                                  "type": "Identifier",
                                                  "name": "e1"
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
                                                  "name": "s0"
                                                },
                                                "right": {
                                                  "type": "Identifier",
                                                  "name": "s1"
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
                                                  "name": "e1"
                                                },
                                                "right": {
                                                  "type": "MemberExpression",
                                                  "computed": false,
                                                  "object": {
                                                    "type": "MemberExpression",
                                                    "computed": true,
                                                    "object": {
                                                      "type": "Identifier",
                                                      "name": "edges"
                                                    },
                                                    "property": {
                                                      "type": "Identifier",
                                                      "name": "j"
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
                                              "type": "ExpressionStatement",
                                              "expression": {
                                                "type": "AssignmentExpression",
                                                "operator": "=",
                                                "left": {
                                                  "type": "Identifier",
                                                  "name": "s1"
                                                },
                                                "right": {
                                                  "type": "ConditionalExpression",
                                                  "test": {
                                                    "type": "BinaryExpression",
                                                    "operator": "===",
                                                    "left": {
                                                      "type": "MemberExpression",
                                                      "computed": false,
                                                      "object": {
                                                        "type": "Identifier",
                                                        "name": "e1"
                                                      },
                                                      "property": {
                                                        "type": "Identifier",
                                                        "name": "l"
                                                      }
                                                    },
                                                    "right": {
                                                      "type": "Identifier",
                                                      "name": "site"
                                                    }
                                                  },
                                                  "consequent": {
                                                    "type": "MemberExpression",
                                                    "computed": false,
                                                    "object": {
                                                      "type": "Identifier",
                                                      "name": "e1"
                                                    },
                                                    "property": {
                                                      "type": "Identifier",
                                                      "name": "r"
                                                    }
                                                  },
                                                  "alternate": {
                                                    "type": "MemberExpression",
                                                    "computed": false,
                                                    "object": {
                                                      "type": "Identifier",
                                                      "name": "e1"
                                                    },
                                                    "property": {
                                                      "type": "Identifier",
                                                      "name": "l"
                                                    }
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
                                                  "type": "LogicalExpression",
                                                  "operator": "&&",
                                                  "left": {
                                                    "type": "BinaryExpression",
                                                    "operator": "<",
                                                    "left": {
                                                      "type": "Identifier",
                                                      "name": "i"
                                                    },
                                                    "right": {
                                                      "type": "MemberExpression",
                                                      "computed": false,
                                                      "object": {
                                                        "type": "Identifier",
                                                        "name": "s0"
                                                      },
                                                      "property": {
                                                        "type": "Identifier",
                                                        "name": "i"
                                                      }
                                                    }
                                                  },
                                                  "right": {
                                                    "type": "BinaryExpression",
                                                    "operator": "<",
                                                    "left": {
                                                      "type": "Identifier",
                                                      "name": "i"
                                                    },
                                                    "right": {
                                                      "type": "MemberExpression",
                                                      "computed": false,
                                                      "object": {
                                                        "type": "Identifier",
                                                        "name": "s1"
                                                      },
                                                      "property": {
                                                        "type": "Identifier",
                                                        "name": "i"
                                                      }
                                                    }
                                                  }
                                                },
                                                "right": {
                                                  "type": "BinaryExpression",
                                                  "operator": "<",
                                                  "left": {
                                                    "type": "CallExpression",
                                                    "callee": {
                                                      "type": "Identifier",
                                                      "name": "d3_geom_voronoiTriangleArea"
                                                    },
                                                    "arguments": [
                                                      {
                                                        "type": "Identifier",
                                                        "name": "site"
                                                      },
                                                      {
                                                        "type": "Identifier",
                                                        "name": "s0"
                                                      },
                                                      {
                                                        "type": "Identifier",
                                                        "name": "s1"
                                                      }
                                                    ]
                                                  },
                                                  "right": {
                                                    "type": "Literal",
                                                    "value": 0,
                                                    "raw": "0"
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
                                                          "name": "triangles"
                                                        },
                                                        "property": {
                                                          "type": "Identifier",
                                                          "name": "push"
                                                        }
                                                      },
                                                      "arguments": [
                                                        {
                                                          "type": "ArrayExpression",
                                                          "elements": [
                                                            {
                                                              "type": "MemberExpression",
                                                              "computed": true,
                                                              "object": {
                                                                "type": "Identifier",
                                                                "name": "data"
                                                              },
                                                              "property": {
                                                                "type": "Identifier",
                                                                "name": "i"
                                                              }
                                                            },
                                                            {
                                                              "type": "MemberExpression",
                                                              "computed": true,
                                                              "object": {
                                                                "type": "Identifier",
                                                                "name": "data"
                                                              },
                                                              "property": {
                                                                "type": "MemberExpression",
                                                                "computed": false,
                                                                "object": {
                                                                  "type": "Identifier",
                                                                  "name": "s0"
                                                                },
                                                                "property": {
                                                                  "type": "Identifier",
                                                                  "name": "i"
                                                                }
                                                              }
                                                            },
                                                            {
                                                              "type": "MemberExpression",
                                                              "computed": true,
                                                              "object": {
                                                                "type": "Identifier",
                                                                "name": "data"
                                                              },
                                                              "property": {
                                                                "type": "MemberExpression",
                                                                "computed": false,
                                                                "object": {
                                                                  "type": "Identifier",
                                                                  "name": "s1"
                                                                },
                                                                "property": {
                                                                  "type": "Identifier",
                                                                  "name": "i"
                                                                }
                                                              }
                                                            }
                                                          ]
                                                        }
                                                      ]
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
                                }
                              ]
                            }
                          },
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "Identifier",
                              "name": "triangles"
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
                        "name": "voronoi"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "x"
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
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "ConditionalExpression",
                              "test": {
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
                              "consequent": {
                                "type": "SequenceExpression",
                                "expressions": [
                                  {
                                    "type": "AssignmentExpression",
                                    "operator": "=",
                                    "left": {
                                      "type": "Identifier",
                                      "name": "fx"
                                    },
                                    "right": {
                                      "type": "CallExpression",
                                      "callee": {
                                        "type": "Identifier",
                                        "name": "d3_functor"
                                      },
                                      "arguments": [
                                        {
                                          "type": "AssignmentExpression",
                                          "operator": "=",
                                          "left": {
                                            "type": "Identifier",
                                            "name": "x"
                                          },
                                          "right": {
                                            "type": "Identifier",
                                            "name": "_"
                                          }
                                        }
                                      ]
                                    }
                                  },
                                  {
                                    "type": "Identifier",
                                    "name": "voronoi"
                                  }
                                ]
                              },
                              "alternate": {
                                "type": "Identifier",
                                "name": "x"
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
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "name": "voronoi"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "y"
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
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "ConditionalExpression",
                              "test": {
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
                              "consequent": {
                                "type": "SequenceExpression",
                                "expressions": [
                                  {
                                    "type": "AssignmentExpression",
                                    "operator": "=",
                                    "left": {
                                      "type": "Identifier",
                                      "name": "fy"
                                    },
                                    "right": {
                                      "type": "CallExpression",
                                      "callee": {
                                        "type": "Identifier",
                                        "name": "d3_functor"
                                      },
                                      "arguments": [
                                        {
                                          "type": "AssignmentExpression",
                                          "operator": "=",
                                          "left": {
                                            "type": "Identifier",
                                            "name": "y"
                                          },
                                          "right": {
                                            "type": "Identifier",
                                            "name": "_"
                                          }
                                        }
                                      ]
                                    }
                                  },
                                  {
                                    "type": "Identifier",
                                    "name": "voronoi"
                                  }
                                ]
                              },
                              "alternate": {
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
                        "name": "voronoi"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "clipExtent"
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
                                "type": "ConditionalExpression",
                                "test": {
                                  "type": "BinaryExpression",
                                  "operator": "===",
                                  "left": {
                                    "type": "Identifier",
                                    "name": "clipExtent"
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "name": "d3_geom_voronoiClipExtent"
                                  }
                                },
                                "consequent": {
                                  "type": "Literal",
                                  "value": null,
                                  "raw": "null"
                                },
                                "alternate": {
                                  "type": "Identifier",
                                  "name": "clipExtent"
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
                                "name": "clipExtent"
                              },
                              "right": {
                                "type": "ConditionalExpression",
                                "test": {
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
                                "consequent": {
                                  "type": "Identifier",
                                  "name": "d3_geom_voronoiClipExtent"
                                },
                                "alternate": {
                                  "type": "Identifier",
                                  "name": "_"
                                }
                              }
                            }
                          },
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "Identifier",
                              "name": "voronoi"
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
                        "name": "voronoi"
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
                                "type": "ConditionalExpression",
                                "test": {
                                  "type": "BinaryExpression",
                                  "operator": "===",
                                  "left": {
                                    "type": "Identifier",
                                    "name": "clipExtent"
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "name": "d3_geom_voronoiClipExtent"
                                  }
                                },
                                "consequent": {
                                  "type": "Literal",
                                  "value": null,
                                  "raw": "null"
                                },
                                "alternate": {
                                  "type": "LogicalExpression",
                                  "operator": "&&",
                                  "left": {
                                    "type": "Identifier",
                                    "name": "clipExtent"
                                  },
                                  "right": {
                                    "type": "MemberExpression",
                                    "computed": true,
                                    "object": {
                                      "type": "Identifier",
                                      "name": "clipExtent"
                                    },
                                    "property": {
                                      "type": "Literal",
                                      "value": 1,
                                      "raw": "1"
                                    }
                                  }
                                }
                              }
                            },
                            "alternate": null
                          },
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "MemberExpression",
                                "computed": false,
                                "object": {
                                  "type": "Identifier",
                                  "name": "voronoi"
                                },
                                "property": {
                                  "type": "Identifier",
                                  "name": "clipExtent"
                                }
                              },
                              "arguments": [
                                {
                                  "type": "LogicalExpression",
                                  "operator": "&&",
                                  "left": {
                                    "type": "Identifier",
                                    "name": "_"
                                  },
                                  "right": {
                                    "type": "ArrayExpression",
                                    "elements": [
                                      {
                                        "type": "ArrayExpression",
                                        "elements": [
                                          {
                                            "type": "Literal",
                                            "value": 0,
                                            "raw": "0"
                                          },
                                          {
                                            "type": "Literal",
                                            "value": 0,
                                            "raw": "0"
                                          }
                                        ]
                                      },
                                      {
                                        "type": "Identifier",
                                        "name": "_"
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
                    }
                  }
                },
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Identifier",
                    "name": "voronoi"
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
        "type": "VariableDeclaration",
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "name": "d3_geom_voronoiClipExtent"
            },
            "init": {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "UnaryExpression",
                      "operator": "-",
                      "argument": {
                        "type": "Literal",
                        "value": 1000000,
                        "raw": "1e6"
                      },
                      "prefix": true
                    },
                    {
                      "type": "UnaryExpression",
                      "operator": "-",
                      "argument": {
                        "type": "Literal",
                        "value": 1000000,
                        "raw": "1e6"
                      },
                      "prefix": true
                    }
                  ]
                },
                {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "Literal",
                      "value": 1000000,
                      "raw": "1e6"
                    },
                    {
                      "type": "Literal",
                      "value": 1000000,
                      "raw": "1e6"
                    }
                  ]
                }
              ]
            }
          }
        ]
      },
      {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "name": "d3_geom_voronoiTriangleArea"
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
              "type": "ReturnStatement",
              "argument": {
                "type": "BinaryExpression",
                "operator": "-",
                "left": {
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
                        "name": "a"
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
                        "name": "a"
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
                        "name": "x"
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
  "src": "d3.geom.voronoi = function (points) {\n    var x = d3_geom_pointX, y = d3_geom_pointY, fx = x, fy = y, clipExtent = d3_geom_voronoiClipExtent;\n    if (points)\n        return voronoi(points);\n    function voronoi(data) {\n        var polygons = new Array(data.length), x0 = clipExtent[0][0], y0 = clipExtent[0][1], x1 = clipExtent[1][0], y1 = clipExtent[1][1];\n        d3_geom_voronoi(sites(data), clipExtent).cells.forEach(function (cell, i) {\n            var edges = cell.edges, site = cell.site, polygon = polygons[i] = edges.length ? edges.map(function (e) {\n                    var s = e.start();\n                    return [\n                        s.x,\n                        s.y\n                    ];\n                }) : site.x >= x0 && site.x <= x1 && site.y >= y0 && site.y <= y1 ? [\n                    [\n                        x0,\n                        y1\n                    ],\n                    [\n                        x1,\n                        y1\n                    ],\n                    [\n                        x1,\n                        y0\n                    ],\n                    [\n                        x0,\n                        y0\n                    ]\n                ] : [];\n            polygon.point = data[i];\n        });\n        return polygons;\n    }\n    function sites(data) {\n        return data.map(function (d, i) {\n            return {\n                x: Math.round(fx(d, i) / ε) * ε,\n                y: Math.round(fy(d, i) / ε) * ε,\n                i: i\n            };\n        });\n    }\n    voronoi.links = function (data) {\n        return d3_geom_voronoi(sites(data)).edges.filter(function (edge) {\n            return edge.l && edge.r;\n        }).map(function (edge) {\n            return {\n                source: data[edge.l.i],\n                target: data[edge.r.i]\n            };\n        });\n    };\n    voronoi.triangles = function (data) {\n        var triangles = [];\n        d3_geom_voronoi(sites(data)).cells.forEach(function (cell, i) {\n            var site = cell.site, edges = cell.edges.sort(d3_geom_voronoiHalfEdgeOrder), j = -1, m = edges.length, e0, s0, e1 = edges[m - 1].edge, s1 = e1.l === site ? e1.r : e1.l;\n            while (++j < m) {\n                e0 = e1;\n                s0 = s1;\n                e1 = edges[j].edge;\n                s1 = e1.l === site ? e1.r : e1.l;\n                if (i < s0.i && i < s1.i && d3_geom_voronoiTriangleArea(site, s0, s1) < 0) {\n                    triangles.push([\n                        data[i],\n                        data[s0.i],\n                        data[s1.i]\n                    ]);\n                }\n            }\n        });\n        return triangles;\n    };\n    voronoi.x = function (_) {\n        return arguments.length ? (fx = d3_functor(x = _), voronoi) : x;\n    };\n    voronoi.y = function (_) {\n        return arguments.length ? (fy = d3_functor(y = _), voronoi) : y;\n    };\n    voronoi.clipExtent = function (_) {\n        if (!arguments.length)\n            return clipExtent === d3_geom_voronoiClipExtent ? null : clipExtent;\n        clipExtent = _ == null ? d3_geom_voronoiClipExtent : _;\n        return voronoi;\n    };\n    voronoi.size = function (_) {\n        if (!arguments.length)\n            return clipExtent === d3_geom_voronoiClipExtent ? null : clipExtent && clipExtent[1];\n        return voronoi.clipExtent(_ && [\n            [\n                0,\n                0\n            ],\n            _\n        ]);\n    };\n    return voronoi;\n};\nvar d3_geom_voronoiClipExtent = [\n        [\n            -1000000,\n            -1000000\n        ],\n        [\n            1000000,\n            1000000\n        ]\n    ];\nfunction d3_geom_voronoiTriangleArea(a, b, c) {\n    return (a.x - c.x) * (b.y - a.y) - (a.x - b.x) * (c.y - a.y);\n}"
}