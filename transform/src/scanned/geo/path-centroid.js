{
  "filepath": "/geo/path-centroid.js",
  "shared": [],
  "dependencies": [
    "d3_geo_centroidX0",
    "d3_geo_centroidY0",
    "d3_geo_centroidZ0",
    "d3_geo_centroidX1",
    "d3_geo_centroidY1",
    "d3_geo_centroidZ1",
    "d3_geo_centroidX2",
    "d3_geo_centroidY2",
    "d3_geo_centroidZ2"
  ],
  "helpers": [
    "d3_geo_pathCentroid",
    "d3_geo_pathCentroidPoint",
    "d3_geo_pathCentroidLineStart",
    "d3_geo_pathCentroidLineEnd",
    "d3_geo_pathCentroidRingStart"
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
              "name": "d3_geo_pathCentroid"
            },
            "init": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "key": {
                    "type": "Identifier",
                    "name": "point"
                  },
                  "value": {
                    "type": "Identifier",
                    "name": "d3_geo_pathCentroidPoint"
                  },
                  "kind": "init"
                },
                {
                  "type": "Property",
                  "key": {
                    "type": "Identifier",
                    "name": "lineStart"
                  },
                  "value": {
                    "type": "Identifier",
                    "name": "d3_geo_pathCentroidLineStart"
                  },
                  "kind": "init"
                },
                {
                  "type": "Property",
                  "key": {
                    "type": "Identifier",
                    "name": "lineEnd"
                  },
                  "value": {
                    "type": "Identifier",
                    "name": "d3_geo_pathCentroidLineEnd"
                  },
                  "kind": "init"
                },
                {
                  "type": "Property",
                  "key": {
                    "type": "Identifier",
                    "name": "polygonStart"
                  },
                  "value": {
                    "type": "FunctionExpression",
                    "id": null,
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
                                "type": "Identifier",
                                "name": "d3_geo_pathCentroid"
                              },
                              "property": {
                                "type": "Identifier",
                                "name": "lineStart"
                              }
                            },
                            "right": {
                              "type": "Identifier",
                              "name": "d3_geo_pathCentroidRingStart"
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
                    "name": "polygonEnd"
                  },
                  "value": {
                    "type": "FunctionExpression",
                    "id": null,
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
                                "type": "Identifier",
                                "name": "d3_geo_pathCentroid"
                              },
                              "property": {
                                "type": "Identifier",
                                "name": "point"
                              }
                            },
                            "right": {
                              "type": "Identifier",
                              "name": "d3_geo_pathCentroidPoint"
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
                                "name": "d3_geo_pathCentroid"
                              },
                              "property": {
                                "type": "Identifier",
                                "name": "lineStart"
                              }
                            },
                            "right": {
                              "type": "Identifier",
                              "name": "d3_geo_pathCentroidLineStart"
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
                                "name": "d3_geo_pathCentroid"
                              },
                              "property": {
                                "type": "Identifier",
                                "name": "lineEnd"
                              }
                            },
                            "right": {
                              "type": "Identifier",
                              "name": "d3_geo_pathCentroidLineEnd"
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
          "name": "d3_geo_pathCentroidPoint"
        },
        "params": [
          {
            "type": "Identifier",
            "name": "x"
          },
          {
            "type": "Identifier",
            "name": "y"
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
                  "type": "Identifier",
                  "name": "d3_geo_centroidX0"
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
                "operator": "+=",
                "left": {
                  "type": "Identifier",
                  "name": "d3_geo_centroidY0"
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
                "type": "UpdateExpression",
                "operator": "++",
                "argument": {
                  "type": "Identifier",
                  "name": "d3_geo_centroidZ0"
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
          "name": "d3_geo_pathCentroidLineStart"
        },
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
                    "name": "d3_geo_pathCentroid"
                  },
                  "property": {
                    "type": "Identifier",
                    "name": "point"
                  }
                },
                "right": {
                  "type": "FunctionExpression",
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "name": "x"
                    },
                    {
                      "type": "Identifier",
                      "name": "y"
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
                              "name": "d3_geo_pathCentroid"
                            },
                            "property": {
                              "type": "Identifier",
                              "name": "point"
                            }
                          },
                          "right": {
                            "type": "Identifier",
                            "name": "nextPoint"
                          }
                        }
                      },
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "Identifier",
                            "name": "d3_geo_pathCentroidPoint"
                          },
                          "arguments": [
                            {
                              "type": "AssignmentExpression",
                              "operator": "=",
                              "left": {
                                "type": "Identifier",
                                "name": "x0"
                              },
                              "right": {
                                "type": "Identifier",
                                "name": "x"
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
              }
            },
            {
              "type": "FunctionDeclaration",
              "id": {
                "type": "Identifier",
                "name": "nextPoint"
              },
              "params": [
                {
                  "type": "Identifier",
                  "name": "x"
                },
                {
                  "type": "Identifier",
                  "name": "y"
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
                            "type": "Identifier",
                            "name": "x"
                          },
                          "right": {
                            "type": "Identifier",
                            "name": "x0"
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
                            "type": "Identifier",
                            "name": "y"
                          },
                          "right": {
                            "type": "Identifier",
                            "name": "y0"
                          }
                        }
                      },
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "name": "z"
                        },
                        "init": {
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
                      "operator": "+=",
                      "left": {
                        "type": "Identifier",
                        "name": "d3_geo_centroidX1"
                      },
                      "right": {
                        "type": "BinaryExpression",
                        "operator": "/",
                        "left": {
                          "type": "BinaryExpression",
                          "operator": "*",
                          "left": {
                            "type": "Identifier",
                            "name": "z"
                          },
                          "right": {
                            "type": "BinaryExpression",
                            "operator": "+",
                            "left": {
                              "type": "Identifier",
                              "name": "x0"
                            },
                            "right": {
                              "type": "Identifier",
                              "name": "x"
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
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "+=",
                      "left": {
                        "type": "Identifier",
                        "name": "d3_geo_centroidY1"
                      },
                      "right": {
                        "type": "BinaryExpression",
                        "operator": "/",
                        "left": {
                          "type": "BinaryExpression",
                          "operator": "*",
                          "left": {
                            "type": "Identifier",
                            "name": "z"
                          },
                          "right": {
                            "type": "BinaryExpression",
                            "operator": "+",
                            "left": {
                              "type": "Identifier",
                              "name": "y0"
                            },
                            "right": {
                              "type": "Identifier",
                              "name": "y"
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
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "+=",
                      "left": {
                        "type": "Identifier",
                        "name": "d3_geo_centroidZ1"
                      },
                      "right": {
                        "type": "Identifier",
                        "name": "z"
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "name": "d3_geo_pathCentroidPoint"
                      },
                      "arguments": [
                        {
                          "type": "AssignmentExpression",
                          "operator": "=",
                          "left": {
                            "type": "Identifier",
                            "name": "x0"
                          },
                          "right": {
                            "type": "Identifier",
                            "name": "x"
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
        "rest": null,
        "generator": false,
        "expression": false
      },
      {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "name": "d3_geo_pathCentroidLineEnd"
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
                    "type": "Identifier",
                    "name": "d3_geo_pathCentroid"
                  },
                  "property": {
                    "type": "Identifier",
                    "name": "point"
                  }
                },
                "right": {
                  "type": "Identifier",
                  "name": "d3_geo_pathCentroidPoint"
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
          "name": "d3_geo_pathCentroidRingStart"
        },
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
                    "name": "x00"
                  },
                  "init": null
                },
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "name": "y00"
                  },
                  "init": null
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
                    "name": "d3_geo_pathCentroid"
                  },
                  "property": {
                    "type": "Identifier",
                    "name": "point"
                  }
                },
                "right": {
                  "type": "FunctionExpression",
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "name": "x"
                    },
                    {
                      "type": "Identifier",
                      "name": "y"
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
                              "name": "d3_geo_pathCentroid"
                            },
                            "property": {
                              "type": "Identifier",
                              "name": "point"
                            }
                          },
                          "right": {
                            "type": "Identifier",
                            "name": "nextPoint"
                          }
                        }
                      },
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "Identifier",
                            "name": "d3_geo_pathCentroidPoint"
                          },
                          "arguments": [
                            {
                              "type": "AssignmentExpression",
                              "operator": "=",
                              "left": {
                                "type": "Identifier",
                                "name": "x00"
                              },
                              "right": {
                                "type": "AssignmentExpression",
                                "operator": "=",
                                "left": {
                                  "type": "Identifier",
                                  "name": "x0"
                                },
                                "right": {
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
                                "name": "y00"
                              },
                              "right": {
                                "type": "AssignmentExpression",
                                "operator": "=",
                                "left": {
                                  "type": "Identifier",
                                  "name": "y0"
                                },
                                "right": {
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
                "name": "nextPoint"
              },
              "params": [
                {
                  "type": "Identifier",
                  "name": "x"
                },
                {
                  "type": "Identifier",
                  "name": "y"
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
                            "type": "Identifier",
                            "name": "x"
                          },
                          "right": {
                            "type": "Identifier",
                            "name": "x0"
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
                            "type": "Identifier",
                            "name": "y"
                          },
                          "right": {
                            "type": "Identifier",
                            "name": "y0"
                          }
                        }
                      },
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "name": "z"
                        },
                        "init": {
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
                      "operator": "+=",
                      "left": {
                        "type": "Identifier",
                        "name": "d3_geo_centroidX1"
                      },
                      "right": {
                        "type": "BinaryExpression",
                        "operator": "/",
                        "left": {
                          "type": "BinaryExpression",
                          "operator": "*",
                          "left": {
                            "type": "Identifier",
                            "name": "z"
                          },
                          "right": {
                            "type": "BinaryExpression",
                            "operator": "+",
                            "left": {
                              "type": "Identifier",
                              "name": "x0"
                            },
                            "right": {
                              "type": "Identifier",
                              "name": "x"
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
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "+=",
                      "left": {
                        "type": "Identifier",
                        "name": "d3_geo_centroidY1"
                      },
                      "right": {
                        "type": "BinaryExpression",
                        "operator": "/",
                        "left": {
                          "type": "BinaryExpression",
                          "operator": "*",
                          "left": {
                            "type": "Identifier",
                            "name": "z"
                          },
                          "right": {
                            "type": "BinaryExpression",
                            "operator": "+",
                            "left": {
                              "type": "Identifier",
                              "name": "y0"
                            },
                            "right": {
                              "type": "Identifier",
                              "name": "y"
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
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "+=",
                      "left": {
                        "type": "Identifier",
                        "name": "d3_geo_centroidZ1"
                      },
                      "right": {
                        "type": "Identifier",
                        "name": "z"
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
                        "name": "z"
                      },
                      "right": {
                        "type": "BinaryExpression",
                        "operator": "-",
                        "left": {
                          "type": "BinaryExpression",
                          "operator": "*",
                          "left": {
                            "type": "Identifier",
                            "name": "y0"
                          },
                          "right": {
                            "type": "Identifier",
                            "name": "x"
                          }
                        },
                        "right": {
                          "type": "BinaryExpression",
                          "operator": "*",
                          "left": {
                            "type": "Identifier",
                            "name": "x0"
                          },
                          "right": {
                            "type": "Identifier",
                            "name": "y"
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
                        "type": "Identifier",
                        "name": "d3_geo_centroidX2"
                      },
                      "right": {
                        "type": "BinaryExpression",
                        "operator": "*",
                        "left": {
                          "type": "Identifier",
                          "name": "z"
                        },
                        "right": {
                          "type": "BinaryExpression",
                          "operator": "+",
                          "left": {
                            "type": "Identifier",
                            "name": "x0"
                          },
                          "right": {
                            "type": "Identifier",
                            "name": "x"
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
                        "type": "Identifier",
                        "name": "d3_geo_centroidY2"
                      },
                      "right": {
                        "type": "BinaryExpression",
                        "operator": "*",
                        "left": {
                          "type": "Identifier",
                          "name": "z"
                        },
                        "right": {
                          "type": "BinaryExpression",
                          "operator": "+",
                          "left": {
                            "type": "Identifier",
                            "name": "y0"
                          },
                          "right": {
                            "type": "Identifier",
                            "name": "y"
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
                        "type": "Identifier",
                        "name": "d3_geo_centroidZ2"
                      },
                      "right": {
                        "type": "BinaryExpression",
                        "operator": "*",
                        "left": {
                          "type": "Identifier",
                          "name": "z"
                        },
                        "right": {
                          "type": "Literal",
                          "value": 3,
                          "raw": "3"
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
                        "name": "d3_geo_pathCentroidPoint"
                      },
                      "arguments": [
                        {
                          "type": "AssignmentExpression",
                          "operator": "=",
                          "left": {
                            "type": "Identifier",
                            "name": "x0"
                          },
                          "right": {
                            "type": "Identifier",
                            "name": "x"
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
                    "name": "d3_geo_pathCentroid"
                  },
                  "property": {
                    "type": "Identifier",
                    "name": "lineEnd"
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
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "Identifier",
                            "name": "nextPoint"
                          },
                          "arguments": [
                            {
                              "type": "Identifier",
                              "name": "x00"
                            },
                            {
                              "type": "Identifier",
                              "name": "y00"
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
        "rest": null,
        "generator": false,
        "expression": false
      }
    ]
  },
  "src": "var d3_geo_pathCentroid = {\n        point: d3_geo_pathCentroidPoint,\n        lineStart: d3_geo_pathCentroidLineStart,\n        lineEnd: d3_geo_pathCentroidLineEnd,\n        polygonStart: function () {\n            d3_geo_pathCentroid.lineStart = d3_geo_pathCentroidRingStart;\n        },\n        polygonEnd: function () {\n            d3_geo_pathCentroid.point = d3_geo_pathCentroidPoint;\n            d3_geo_pathCentroid.lineStart = d3_geo_pathCentroidLineStart;\n            d3_geo_pathCentroid.lineEnd = d3_geo_pathCentroidLineEnd;\n        }\n    };\nfunction d3_geo_pathCentroidPoint(x, y) {\n    d3_geo_centroidX0 += x;\n    d3_geo_centroidY0 += y;\n    ++d3_geo_centroidZ0;\n}\nfunction d3_geo_pathCentroidLineStart() {\n    var x0, y0;\n    d3_geo_pathCentroid.point = function (x, y) {\n        d3_geo_pathCentroid.point = nextPoint;\n        d3_geo_pathCentroidPoint(x0 = x, y0 = y);\n    };\n    function nextPoint(x, y) {\n        var dx = x - x0, dy = y - y0, z = Math.sqrt(dx * dx + dy * dy);\n        d3_geo_centroidX1 += z * (x0 + x) / 2;\n        d3_geo_centroidY1 += z * (y0 + y) / 2;\n        d3_geo_centroidZ1 += z;\n        d3_geo_pathCentroidPoint(x0 = x, y0 = y);\n    }\n}\nfunction d3_geo_pathCentroidLineEnd() {\n    d3_geo_pathCentroid.point = d3_geo_pathCentroidPoint;\n}\nfunction d3_geo_pathCentroidRingStart() {\n    var x00, y00, x0, y0;\n    d3_geo_pathCentroid.point = function (x, y) {\n        d3_geo_pathCentroid.point = nextPoint;\n        d3_geo_pathCentroidPoint(x00 = x0 = x, y00 = y0 = y);\n    };\n    function nextPoint(x, y) {\n        var dx = x - x0, dy = y - y0, z = Math.sqrt(dx * dx + dy * dy);\n        d3_geo_centroidX1 += z * (x0 + x) / 2;\n        d3_geo_centroidY1 += z * (y0 + y) / 2;\n        d3_geo_centroidZ1 += z;\n        z = y0 * x - x0 * y;\n        d3_geo_centroidX2 += z * (x0 + x);\n        d3_geo_centroidY2 += z * (y0 + y);\n        d3_geo_centroidZ2 += z * 3;\n        d3_geo_pathCentroidPoint(x0 = x, y0 = y);\n    }\n    d3_geo_pathCentroid.lineEnd = function () {\n        nextPoint(x00, y00);\n    };\n}"
}