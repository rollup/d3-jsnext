{
  "filepath": "/geo/path.js",
  "shared": [],
  "dependencies": [
    "d3.geo.stream",
    "d3_geo_pathAreaSum",
    "d3_geo_pathArea",
    "d3_geo_centroidX0",
    "d3_geo_centroidY0",
    "d3_geo_centroidZ0",
    "d3_geo_centroidX1",
    "d3_geo_centroidY1",
    "d3_geo_centroidZ1",
    "d3_geo_centroidX2",
    "d3_geo_centroidY2",
    "d3_geo_centroidZ2",
    "d3_geo_pathCentroid",
    "d3_geo_pathBoundsX1",
    "d3_geo_pathBoundsY1",
    "d3_geo_pathBoundsX0",
    "d3_geo_pathBoundsY0",
    "d3_geo_pathBounds",
    "d3_identity",
    "d3_geo_pathBuffer",
    "d3_geo_pathContext",
    "d3.geo.albersUsa",
    "d3_geo_resample",
    "d3_degrees",
    "d3_geo_projectionRadians"
  ],
  "helpers": [
    "d3_geo_pathProjectStream"
  ],
  "exports": [
    "d3.geo.path"
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
                "name": "geo"
              }
            },
            "property": {
              "type": "Identifier",
              "name": "path"
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
                        "name": "pointRadius"
                      },
                      "init": {
                        "type": "Literal",
                        "value": 4.5,
                        "raw": "4.5"
                      }
                    },
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "name": "projection"
                      },
                      "init": null
                    },
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "name": "context"
                      },
                      "init": null
                    },
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "name": "projectStream"
                      },
                      "init": null
                    },
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "name": "contextStream"
                      },
                      "init": null
                    },
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "name": "cacheStream"
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
                    "name": "path"
                  },
                  "params": [
                    {
                      "type": "Identifier",
                      "name": "object"
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
                          "name": "object"
                        },
                        "consequent": {
                          "type": "BlockStatement",
                          "body": [
                            {
                              "type": "IfStatement",
                              "test": {
                                "type": "BinaryExpression",
                                "operator": "===",
                                "left": {
                                  "type": "UnaryExpression",
                                  "operator": "typeof",
                                  "argument": {
                                    "type": "Identifier",
                                    "name": "pointRadius"
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
                                "type": "ExpressionStatement",
                                "expression": {
                                  "type": "CallExpression",
                                  "callee": {
                                    "type": "MemberExpression",
                                    "computed": false,
                                    "object": {
                                      "type": "Identifier",
                                      "name": "contextStream"
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "name": "pointRadius"
                                    }
                                  },
                                  "arguments": [
                                    {
                                      "type": "UnaryExpression",
                                      "operator": "+",
                                      "argument": {
                                        "type": "CallExpression",
                                        "callee": {
                                          "type": "MemberExpression",
                                          "computed": false,
                                          "object": {
                                            "type": "Identifier",
                                            "name": "pointRadius"
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "name": "apply"
                                          }
                                        },
                                        "arguments": [
                                          {
                                            "type": "ThisExpression"
                                          },
                                          {
                                            "type": "Identifier",
                                            "name": "arguments"
                                          }
                                        ]
                                      },
                                      "prefix": true
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
                                "operator": "||",
                                "left": {
                                  "type": "UnaryExpression",
                                  "operator": "!",
                                  "argument": {
                                    "type": "Identifier",
                                    "name": "cacheStream"
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
                                      "name": "cacheStream"
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "name": "valid"
                                    }
                                  },
                                  "prefix": true
                                }
                              },
                              "consequent": {
                                "type": "ExpressionStatement",
                                "expression": {
                                  "type": "AssignmentExpression",
                                  "operator": "=",
                                  "left": {
                                    "type": "Identifier",
                                    "name": "cacheStream"
                                  },
                                  "right": {
                                    "type": "CallExpression",
                                    "callee": {
                                      "type": "Identifier",
                                      "name": "projectStream"
                                    },
                                    "arguments": [
                                      {
                                        "type": "Identifier",
                                        "name": "contextStream"
                                      }
                                    ]
                                  }
                                }
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
                                    "type": "MemberExpression",
                                    "computed": false,
                                    "object": {
                                      "type": "Identifier",
                                      "name": "d3"
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "name": "geo"
                                    }
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "name": "stream"
                                  }
                                },
                                "arguments": [
                                  {
                                    "type": "Identifier",
                                    "name": "object"
                                  },
                                  {
                                    "type": "Identifier",
                                    "name": "cacheStream"
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
                          "type": "CallExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "name": "contextStream"
                            },
                            "property": {
                              "type": "Identifier",
                              "name": "result"
                            }
                          },
                          "arguments": []
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
                        "name": "path"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "area"
                      }
                    },
                    "right": {
                      "type": "FunctionExpression",
                      "id": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "name": "object"
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
                                "name": "d3_geo_pathAreaSum"
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
                                    "name": "geo"
                                  }
                                },
                                "property": {
                                  "type": "Identifier",
                                  "name": "stream"
                                }
                              },
                              "arguments": [
                                {
                                  "type": "Identifier",
                                  "name": "object"
                                },
                                {
                                  "type": "CallExpression",
                                  "callee": {
                                    "type": "Identifier",
                                    "name": "projectStream"
                                  },
                                  "arguments": [
                                    {
                                      "type": "Identifier",
                                      "name": "d3_geo_pathArea"
                                    }
                                  ]
                                }
                              ]
                            }
                          },
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "Identifier",
                              "name": "d3_geo_pathAreaSum"
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
                        "name": "path"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "centroid"
                      }
                    },
                    "right": {
                      "type": "FunctionExpression",
                      "id": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "name": "object"
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
                                "name": "d3_geo_centroidX0"
                              },
                              "right": {
                                "type": "AssignmentExpression",
                                "operator": "=",
                                "left": {
                                  "type": "Identifier",
                                  "name": "d3_geo_centroidY0"
                                },
                                "right": {
                                  "type": "AssignmentExpression",
                                  "operator": "=",
                                  "left": {
                                    "type": "Identifier",
                                    "name": "d3_geo_centroidZ0"
                                  },
                                  "right": {
                                    "type": "AssignmentExpression",
                                    "operator": "=",
                                    "left": {
                                      "type": "Identifier",
                                      "name": "d3_geo_centroidX1"
                                    },
                                    "right": {
                                      "type": "AssignmentExpression",
                                      "operator": "=",
                                      "left": {
                                        "type": "Identifier",
                                        "name": "d3_geo_centroidY1"
                                      },
                                      "right": {
                                        "type": "AssignmentExpression",
                                        "operator": "=",
                                        "left": {
                                          "type": "Identifier",
                                          "name": "d3_geo_centroidZ1"
                                        },
                                        "right": {
                                          "type": "AssignmentExpression",
                                          "operator": "=",
                                          "left": {
                                            "type": "Identifier",
                                            "name": "d3_geo_centroidX2"
                                          },
                                          "right": {
                                            "type": "AssignmentExpression",
                                            "operator": "=",
                                            "left": {
                                              "type": "Identifier",
                                              "name": "d3_geo_centroidY2"
                                            },
                                            "right": {
                                              "type": "AssignmentExpression",
                                              "operator": "=",
                                              "left": {
                                                "type": "Identifier",
                                                "name": "d3_geo_centroidZ2"
                                              },
                                              "right": {
                                                "type": "Literal",
                                                "value": 0,
                                                "raw": "0"
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
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
                                  "type": "MemberExpression",
                                  "computed": false,
                                  "object": {
                                    "type": "Identifier",
                                    "name": "d3"
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "name": "geo"
                                  }
                                },
                                "property": {
                                  "type": "Identifier",
                                  "name": "stream"
                                }
                              },
                              "arguments": [
                                {
                                  "type": "Identifier",
                                  "name": "object"
                                },
                                {
                                  "type": "CallExpression",
                                  "callee": {
                                    "type": "Identifier",
                                    "name": "projectStream"
                                  },
                                  "arguments": [
                                    {
                                      "type": "Identifier",
                                      "name": "d3_geo_pathCentroid"
                                    }
                                  ]
                                }
                              ]
                            }
                          },
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "ConditionalExpression",
                              "test": {
                                "type": "Identifier",
                                "name": "d3_geo_centroidZ2"
                              },
                              "consequent": {
                                "type": "ArrayExpression",
                                "elements": [
                                  {
                                    "type": "BinaryExpression",
                                    "operator": "/",
                                    "left": {
                                      "type": "Identifier",
                                      "name": "d3_geo_centroidX2"
                                    },
                                    "right": {
                                      "type": "Identifier",
                                      "name": "d3_geo_centroidZ2"
                                    }
                                  },
                                  {
                                    "type": "BinaryExpression",
                                    "operator": "/",
                                    "left": {
                                      "type": "Identifier",
                                      "name": "d3_geo_centroidY2"
                                    },
                                    "right": {
                                      "type": "Identifier",
                                      "name": "d3_geo_centroidZ2"
                                    }
                                  }
                                ]
                              },
                              "alternate": {
                                "type": "ConditionalExpression",
                                "test": {
                                  "type": "Identifier",
                                  "name": "d3_geo_centroidZ1"
                                },
                                "consequent": {
                                  "type": "ArrayExpression",
                                  "elements": [
                                    {
                                      "type": "BinaryExpression",
                                      "operator": "/",
                                      "left": {
                                        "type": "Identifier",
                                        "name": "d3_geo_centroidX1"
                                      },
                                      "right": {
                                        "type": "Identifier",
                                        "name": "d3_geo_centroidZ1"
                                      }
                                    },
                                    {
                                      "type": "BinaryExpression",
                                      "operator": "/",
                                      "left": {
                                        "type": "Identifier",
                                        "name": "d3_geo_centroidY1"
                                      },
                                      "right": {
                                        "type": "Identifier",
                                        "name": "d3_geo_centroidZ1"
                                      }
                                    }
                                  ]
                                },
                                "alternate": {
                                  "type": "ConditionalExpression",
                                  "test": {
                                    "type": "Identifier",
                                    "name": "d3_geo_centroidZ0"
                                  },
                                  "consequent": {
                                    "type": "ArrayExpression",
                                    "elements": [
                                      {
                                        "type": "BinaryExpression",
                                        "operator": "/",
                                        "left": {
                                          "type": "Identifier",
                                          "name": "d3_geo_centroidX0"
                                        },
                                        "right": {
                                          "type": "Identifier",
                                          "name": "d3_geo_centroidZ0"
                                        }
                                      },
                                      {
                                        "type": "BinaryExpression",
                                        "operator": "/",
                                        "left": {
                                          "type": "Identifier",
                                          "name": "d3_geo_centroidY0"
                                        },
                                        "right": {
                                          "type": "Identifier",
                                          "name": "d3_geo_centroidZ0"
                                        }
                                      }
                                    ]
                                  },
                                  "alternate": {
                                    "type": "ArrayExpression",
                                    "elements": [
                                      {
                                        "type": "Identifier",
                                        "name": "NaN"
                                      },
                                      {
                                        "type": "Identifier",
                                        "name": "NaN"
                                      }
                                    ]
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
                        "name": "path"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "bounds"
                      }
                    },
                    "right": {
                      "type": "FunctionExpression",
                      "id": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "name": "object"
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
                                "name": "d3_geo_pathBoundsX1"
                              },
                              "right": {
                                "type": "AssignmentExpression",
                                "operator": "=",
                                "left": {
                                  "type": "Identifier",
                                  "name": "d3_geo_pathBoundsY1"
                                },
                                "right": {
                                  "type": "UnaryExpression",
                                  "operator": "-",
                                  "argument": {
                                    "type": "AssignmentExpression",
                                    "operator": "=",
                                    "left": {
                                      "type": "Identifier",
                                      "name": "d3_geo_pathBoundsX0"
                                    },
                                    "right": {
                                      "type": "AssignmentExpression",
                                      "operator": "=",
                                      "left": {
                                        "type": "Identifier",
                                        "name": "d3_geo_pathBoundsY0"
                                      },
                                      "right": {
                                        "type": "Identifier",
                                        "name": "Infinity"
                                      }
                                    }
                                  },
                                  "prefix": true
                                }
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
                                  "type": "MemberExpression",
                                  "computed": false,
                                  "object": {
                                    "type": "Identifier",
                                    "name": "d3"
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "name": "geo"
                                  }
                                },
                                "property": {
                                  "type": "Identifier",
                                  "name": "stream"
                                }
                              },
                              "arguments": [
                                {
                                  "type": "Identifier",
                                  "name": "object"
                                },
                                {
                                  "type": "CallExpression",
                                  "callee": {
                                    "type": "Identifier",
                                    "name": "projectStream"
                                  },
                                  "arguments": [
                                    {
                                      "type": "Identifier",
                                      "name": "d3_geo_pathBounds"
                                    }
                                  ]
                                }
                              ]
                            }
                          },
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "ArrayExpression",
                              "elements": [
                                {
                                  "type": "ArrayExpression",
                                  "elements": [
                                    {
                                      "type": "Identifier",
                                      "name": "d3_geo_pathBoundsX0"
                                    },
                                    {
                                      "type": "Identifier",
                                      "name": "d3_geo_pathBoundsY0"
                                    }
                                  ]
                                },
                                {
                                  "type": "ArrayExpression",
                                  "elements": [
                                    {
                                      "type": "Identifier",
                                      "name": "d3_geo_pathBoundsX1"
                                    },
                                    {
                                      "type": "Identifier",
                                      "name": "d3_geo_pathBoundsY1"
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
                        "name": "path"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "projection"
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
                                "name": "projection"
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
                                "name": "projectStream"
                              },
                              "right": {
                                "type": "ConditionalExpression",
                                "test": {
                                  "type": "AssignmentExpression",
                                  "operator": "=",
                                  "left": {
                                    "type": "Identifier",
                                    "name": "projection"
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "name": "_"
                                  }
                                },
                                "consequent": {
                                  "type": "LogicalExpression",
                                  "operator": "||",
                                  "left": {
                                    "type": "MemberExpression",
                                    "computed": false,
                                    "object": {
                                      "type": "Identifier",
                                      "name": "_"
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "name": "stream"
                                    }
                                  },
                                  "right": {
                                    "type": "CallExpression",
                                    "callee": {
                                      "type": "Identifier",
                                      "name": "d3_geo_pathProjectStream"
                                    },
                                    "arguments": [
                                      {
                                        "type": "Identifier",
                                        "name": "_"
                                      }
                                    ]
                                  }
                                },
                                "alternate": {
                                  "type": "Identifier",
                                  "name": "d3_identity"
                                }
                              }
                            }
                          },
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "Identifier",
                                "name": "reset"
                              },
                              "arguments": []
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
                        "name": "path"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "context"
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
                                "name": "context"
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
                                "name": "contextStream"
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
                                      "name": "context"
                                    },
                                    "right": {
                                      "type": "Identifier",
                                      "name": "_"
                                    }
                                  },
                                  "right": {
                                    "type": "Literal",
                                    "value": null,
                                    "raw": "null"
                                  }
                                },
                                "consequent": {
                                  "type": "NewExpression",
                                  "callee": {
                                    "type": "Identifier",
                                    "name": "d3_geo_pathBuffer"
                                  },
                                  "arguments": []
                                },
                                "alternate": {
                                  "type": "NewExpression",
                                  "callee": {
                                    "type": "Identifier",
                                    "name": "d3_geo_pathContext"
                                  },
                                  "arguments": [
                                    {
                                      "type": "Identifier",
                                      "name": "_"
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
                              "operator": "!==",
                              "left": {
                                "type": "UnaryExpression",
                                "operator": "typeof",
                                "argument": {
                                  "type": "Identifier",
                                  "name": "pointRadius"
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
                              "type": "ExpressionStatement",
                              "expression": {
                                "type": "CallExpression",
                                "callee": {
                                  "type": "MemberExpression",
                                  "computed": false,
                                  "object": {
                                    "type": "Identifier",
                                    "name": "contextStream"
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "name": "pointRadius"
                                  }
                                },
                                "arguments": [
                                  {
                                    "type": "Identifier",
                                    "name": "pointRadius"
                                  }
                                ]
                              }
                            },
                            "alternate": null
                          },
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "Identifier",
                                "name": "reset"
                              },
                              "arguments": []
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
                        "name": "path"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "pointRadius"
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
                                "name": "pointRadius"
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
                                "name": "pointRadius"
                              },
                              "right": {
                                "type": "ConditionalExpression",
                                "test": {
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
                                },
                                "consequent": {
                                  "type": "Identifier",
                                  "name": "_"
                                },
                                "alternate": {
                                  "type": "SequenceExpression",
                                  "expressions": [
                                    {
                                      "type": "CallExpression",
                                      "callee": {
                                        "type": "MemberExpression",
                                        "computed": false,
                                        "object": {
                                          "type": "Identifier",
                                          "name": "contextStream"
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "name": "pointRadius"
                                        }
                                      },
                                      "arguments": [
                                        {
                                          "type": "UnaryExpression",
                                          "operator": "+",
                                          "argument": {
                                            "type": "Identifier",
                                            "name": "_"
                                          },
                                          "prefix": true
                                        }
                                      ]
                                    },
                                    {
                                      "type": "UnaryExpression",
                                      "operator": "+",
                                      "argument": {
                                        "type": "Identifier",
                                        "name": "_"
                                      },
                                      "prefix": true
                                    }
                                  ]
                                }
                              }
                            }
                          },
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "Identifier",
                              "name": "path"
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
                    "name": "reset"
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
                            "type": "Identifier",
                            "name": "cacheStream"
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
                          "name": "path"
                        }
                      }
                    ]
                  },
                  "rest": null,
                  "generator": false,
                  "expression": false
                },
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
                            "type": "Identifier",
                            "name": "path"
                          },
                          "property": {
                            "type": "Identifier",
                            "name": "projection"
                          }
                        },
                        "arguments": [
                          {
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
                                  "name": "geo"
                                }
                              },
                              "property": {
                                "type": "Identifier",
                                "name": "albersUsa"
                              }
                            },
                            "arguments": []
                          }
                        ]
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "context"
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
          "name": "d3_geo_pathProjectStream"
        },
        "params": [
          {
            "type": "Identifier",
            "name": "project"
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
                    "name": "resample"
                  },
                  "init": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "name": "d3_geo_resample"
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
                            "name": "y"
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
                                  "name": "project"
                                },
                                "arguments": [
                                  {
                                    "type": "ArrayExpression",
                                    "elements": [
                                      {
                                        "type": "BinaryExpression",
                                        "operator": "*",
                                        "left": {
                                          "type": "Identifier",
                                          "name": "x"
                                        },
                                        "right": {
                                          "type": "Identifier",
                                          "name": "d3_degrees"
                                        }
                                      },
                                      {
                                        "type": "BinaryExpression",
                                        "operator": "*",
                                        "left": {
                                          "type": "Identifier",
                                          "name": "y"
                                        },
                                        "right": {
                                          "type": "Identifier",
                                          "name": "d3_degrees"
                                        }
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
                  }
                }
              ],
              "kind": "var"
            },
            {
              "type": "ReturnStatement",
              "argument": {
                "type": "FunctionExpression",
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "name": "stream"
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
                          "name": "d3_geo_projectionRadians"
                        },
                        "arguments": [
                          {
                            "type": "CallExpression",
                            "callee": {
                              "type": "Identifier",
                              "name": "resample"
                            },
                            "arguments": [
                              {
                                "type": "Identifier",
                                "name": "stream"
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
            }
          ]
        },
        "rest": null,
        "generator": false,
        "expression": false
      }
    ]
  },
  "src": "d3.geo.path = function () {\n    var pointRadius = 4.5, projection, context, projectStream, contextStream, cacheStream;\n    function path(object) {\n        if (object) {\n            if (typeof pointRadius === 'function')\n                contextStream.pointRadius(+pointRadius.apply(this, arguments));\n            if (!cacheStream || !cacheStream.valid)\n                cacheStream = projectStream(contextStream);\n            d3.geo.stream(object, cacheStream);\n        }\n        return contextStream.result();\n    }\n    path.area = function (object) {\n        d3_geo_pathAreaSum = 0;\n        d3.geo.stream(object, projectStream(d3_geo_pathArea));\n        return d3_geo_pathAreaSum;\n    };\n    path.centroid = function (object) {\n        d3_geo_centroidX0 = d3_geo_centroidY0 = d3_geo_centroidZ0 = d3_geo_centroidX1 = d3_geo_centroidY1 = d3_geo_centroidZ1 = d3_geo_centroidX2 = d3_geo_centroidY2 = d3_geo_centroidZ2 = 0;\n        d3.geo.stream(object, projectStream(d3_geo_pathCentroid));\n        return d3_geo_centroidZ2 ? [\n            d3_geo_centroidX2 / d3_geo_centroidZ2,\n            d3_geo_centroidY2 / d3_geo_centroidZ2\n        ] : d3_geo_centroidZ1 ? [\n            d3_geo_centroidX1 / d3_geo_centroidZ1,\n            d3_geo_centroidY1 / d3_geo_centroidZ1\n        ] : d3_geo_centroidZ0 ? [\n            d3_geo_centroidX0 / d3_geo_centroidZ0,\n            d3_geo_centroidY0 / d3_geo_centroidZ0\n        ] : [\n            NaN,\n            NaN\n        ];\n    };\n    path.bounds = function (object) {\n        d3_geo_pathBoundsX1 = d3_geo_pathBoundsY1 = -(d3_geo_pathBoundsX0 = d3_geo_pathBoundsY0 = Infinity);\n        d3.geo.stream(object, projectStream(d3_geo_pathBounds));\n        return [\n            [\n                d3_geo_pathBoundsX0,\n                d3_geo_pathBoundsY0\n            ],\n            [\n                d3_geo_pathBoundsX1,\n                d3_geo_pathBoundsY1\n            ]\n        ];\n    };\n    path.projection = function (_) {\n        if (!arguments.length)\n            return projection;\n        projectStream = (projection = _) ? _.stream || d3_geo_pathProjectStream(_) : d3_identity;\n        return reset();\n    };\n    path.context = function (_) {\n        if (!arguments.length)\n            return context;\n        contextStream = (context = _) == null ? new d3_geo_pathBuffer() : new d3_geo_pathContext(_);\n        if (typeof pointRadius !== 'function')\n            contextStream.pointRadius(pointRadius);\n        return reset();\n    };\n    path.pointRadius = function (_) {\n        if (!arguments.length)\n            return pointRadius;\n        pointRadius = typeof _ === 'function' ? _ : (contextStream.pointRadius(+_), +_);\n        return path;\n    };\n    function reset() {\n        cacheStream = null;\n        return path;\n    }\n    return path.projection(d3.geo.albersUsa()).context(null);\n};\nfunction d3_geo_pathProjectStream(project) {\n    var resample = d3_geo_resample(function (x, y) {\n            return project([\n                x * d3_degrees,\n                y * d3_degrees\n            ]);\n        });\n    return function (stream) {\n        return d3_geo_projectionRadians(resample(stream));\n    };\n}"
}