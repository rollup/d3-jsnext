{
  "filepath": "/geo/path.js",
  "shared": [
    {
      "path": "/geo/_centroid.js",
      "properties": [
        "d3_geo_centroidW0",
        "d3_geo_centroidW1",
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
      "name": "GEO_CENTROID"
    },
    {
      "path": "/geo/_pathBounds.js",
      "properties": [
        "d3_geo_pathBoundsX0",
        "d3_geo_pathBoundsY0",
        "d3_geo_pathBoundsX1",
        "d3_geo_pathBoundsY1"
      ],
      "name": "GEO_PATHBOUNDS"
    }
  ],
  "dependencies": [
    "d3.geo.stream",
    "d3_geo_pathAreaSum",
    "d3_geo_pathArea",
    "d3_geo_pathCentroid",
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
                                "type": "MemberExpression",
                                "computed": false,
                                "object": {
                                  "type": "Identifier",
                                  "name": "GEO_CENTROID"
                                },
                                "property": {
                                  "type": "Identifier",
                                  "name": "d3_geo_centroidX0"
                                },
                                "_isReplacement": true
                              },
                              "right": {
                                "type": "AssignmentExpression",
                                "operator": "=",
                                "left": {
                                  "type": "MemberExpression",
                                  "computed": false,
                                  "object": {
                                    "type": "Identifier",
                                    "name": "GEO_CENTROID"
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "name": "d3_geo_centroidY0"
                                  },
                                  "_isReplacement": true
                                },
                                "right": {
                                  "type": "AssignmentExpression",
                                  "operator": "=",
                                  "left": {
                                    "type": "MemberExpression",
                                    "computed": false,
                                    "object": {
                                      "type": "Identifier",
                                      "name": "GEO_CENTROID"
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "name": "d3_geo_centroidZ0"
                                    },
                                    "_isReplacement": true
                                  },
                                  "right": {
                                    "type": "AssignmentExpression",
                                    "operator": "=",
                                    "left": {
                                      "type": "MemberExpression",
                                      "computed": false,
                                      "object": {
                                        "type": "Identifier",
                                        "name": "GEO_CENTROID"
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "name": "d3_geo_centroidX1"
                                      },
                                      "_isReplacement": true
                                    },
                                    "right": {
                                      "type": "AssignmentExpression",
                                      "operator": "=",
                                      "left": {
                                        "type": "MemberExpression",
                                        "computed": false,
                                        "object": {
                                          "type": "Identifier",
                                          "name": "GEO_CENTROID"
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "name": "d3_geo_centroidY1"
                                        },
                                        "_isReplacement": true
                                      },
                                      "right": {
                                        "type": "AssignmentExpression",
                                        "operator": "=",
                                        "left": {
                                          "type": "MemberExpression",
                                          "computed": false,
                                          "object": {
                                            "type": "Identifier",
                                            "name": "GEO_CENTROID"
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "name": "d3_geo_centroidZ1"
                                          },
                                          "_isReplacement": true
                                        },
                                        "right": {
                                          "type": "AssignmentExpression",
                                          "operator": "=",
                                          "left": {
                                            "type": "MemberExpression",
                                            "computed": false,
                                            "object": {
                                              "type": "Identifier",
                                              "name": "GEO_CENTROID"
                                            },
                                            "property": {
                                              "type": "Identifier",
                                              "name": "d3_geo_centroidX2"
                                            },
                                            "_isReplacement": true
                                          },
                                          "right": {
                                            "type": "AssignmentExpression",
                                            "operator": "=",
                                            "left": {
                                              "type": "MemberExpression",
                                              "computed": false,
                                              "object": {
                                                "type": "Identifier",
                                                "name": "GEO_CENTROID"
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "name": "d3_geo_centroidY2"
                                              },
                                              "_isReplacement": true
                                            },
                                            "right": {
                                              "type": "AssignmentExpression",
                                              "operator": "=",
                                              "left": {
                                                "type": "MemberExpression",
                                                "computed": false,
                                                "object": {
                                                  "type": "Identifier",
                                                  "name": "GEO_CENTROID"
                                                },
                                                "property": {
                                                  "type": "Identifier",
                                                  "name": "d3_geo_centroidZ2"
                                                },
                                                "_isReplacement": true
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
                                "type": "MemberExpression",
                                "computed": false,
                                "object": {
                                  "type": "Identifier",
                                  "name": "GEO_CENTROID"
                                },
                                "property": {
                                  "type": "Identifier",
                                  "name": "d3_geo_centroidZ2"
                                },
                                "_isReplacement": true
                              },
                              "consequent": {
                                "type": "ArrayExpression",
                                "elements": [
                                  {
                                    "type": "BinaryExpression",
                                    "operator": "/",
                                    "left": {
                                      "type": "MemberExpression",
                                      "computed": false,
                                      "object": {
                                        "type": "Identifier",
                                        "name": "GEO_CENTROID"
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "name": "d3_geo_centroidX2"
                                      },
                                      "_isReplacement": true
                                    },
                                    "right": {
                                      "type": "MemberExpression",
                                      "computed": false,
                                      "object": {
                                        "type": "Identifier",
                                        "name": "GEO_CENTROID"
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "name": "d3_geo_centroidZ2"
                                      },
                                      "_isReplacement": true
                                    }
                                  },
                                  {
                                    "type": "BinaryExpression",
                                    "operator": "/",
                                    "left": {
                                      "type": "MemberExpression",
                                      "computed": false,
                                      "object": {
                                        "type": "Identifier",
                                        "name": "GEO_CENTROID"
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "name": "d3_geo_centroidY2"
                                      },
                                      "_isReplacement": true
                                    },
                                    "right": {
                                      "type": "MemberExpression",
                                      "computed": false,
                                      "object": {
                                        "type": "Identifier",
                                        "name": "GEO_CENTROID"
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "name": "d3_geo_centroidZ2"
                                      },
                                      "_isReplacement": true
                                    }
                                  }
                                ]
                              },
                              "alternate": {
                                "type": "ConditionalExpression",
                                "test": {
                                  "type": "MemberExpression",
                                  "computed": false,
                                  "object": {
                                    "type": "Identifier",
                                    "name": "GEO_CENTROID"
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "name": "d3_geo_centroidZ1"
                                  },
                                  "_isReplacement": true
                                },
                                "consequent": {
                                  "type": "ArrayExpression",
                                  "elements": [
                                    {
                                      "type": "BinaryExpression",
                                      "operator": "/",
                                      "left": {
                                        "type": "MemberExpression",
                                        "computed": false,
                                        "object": {
                                          "type": "Identifier",
                                          "name": "GEO_CENTROID"
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "name": "d3_geo_centroidX1"
                                        },
                                        "_isReplacement": true
                                      },
                                      "right": {
                                        "type": "MemberExpression",
                                        "computed": false,
                                        "object": {
                                          "type": "Identifier",
                                          "name": "GEO_CENTROID"
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "name": "d3_geo_centroidZ1"
                                        },
                                        "_isReplacement": true
                                      }
                                    },
                                    {
                                      "type": "BinaryExpression",
                                      "operator": "/",
                                      "left": {
                                        "type": "MemberExpression",
                                        "computed": false,
                                        "object": {
                                          "type": "Identifier",
                                          "name": "GEO_CENTROID"
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "name": "d3_geo_centroidY1"
                                        },
                                        "_isReplacement": true
                                      },
                                      "right": {
                                        "type": "MemberExpression",
                                        "computed": false,
                                        "object": {
                                          "type": "Identifier",
                                          "name": "GEO_CENTROID"
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "name": "d3_geo_centroidZ1"
                                        },
                                        "_isReplacement": true
                                      }
                                    }
                                  ]
                                },
                                "alternate": {
                                  "type": "ConditionalExpression",
                                  "test": {
                                    "type": "MemberExpression",
                                    "computed": false,
                                    "object": {
                                      "type": "Identifier",
                                      "name": "GEO_CENTROID"
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "name": "d3_geo_centroidZ0"
                                    },
                                    "_isReplacement": true
                                  },
                                  "consequent": {
                                    "type": "ArrayExpression",
                                    "elements": [
                                      {
                                        "type": "BinaryExpression",
                                        "operator": "/",
                                        "left": {
                                          "type": "MemberExpression",
                                          "computed": false,
                                          "object": {
                                            "type": "Identifier",
                                            "name": "GEO_CENTROID"
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "name": "d3_geo_centroidX0"
                                          },
                                          "_isReplacement": true
                                        },
                                        "right": {
                                          "type": "MemberExpression",
                                          "computed": false,
                                          "object": {
                                            "type": "Identifier",
                                            "name": "GEO_CENTROID"
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "name": "d3_geo_centroidZ0"
                                          },
                                          "_isReplacement": true
                                        }
                                      },
                                      {
                                        "type": "BinaryExpression",
                                        "operator": "/",
                                        "left": {
                                          "type": "MemberExpression",
                                          "computed": false,
                                          "object": {
                                            "type": "Identifier",
                                            "name": "GEO_CENTROID"
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "name": "d3_geo_centroidY0"
                                          },
                                          "_isReplacement": true
                                        },
                                        "right": {
                                          "type": "MemberExpression",
                                          "computed": false,
                                          "object": {
                                            "type": "Identifier",
                                            "name": "GEO_CENTROID"
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "name": "d3_geo_centroidZ0"
                                          },
                                          "_isReplacement": true
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
                                "type": "MemberExpression",
                                "computed": false,
                                "object": {
                                  "type": "Identifier",
                                  "name": "GEO_PATHBOUNDS"
                                },
                                "property": {
                                  "type": "Identifier",
                                  "name": "d3_geo_pathBoundsX1"
                                },
                                "_isReplacement": true
                              },
                              "right": {
                                "type": "AssignmentExpression",
                                "operator": "=",
                                "left": {
                                  "type": "MemberExpression",
                                  "computed": false,
                                  "object": {
                                    "type": "Identifier",
                                    "name": "GEO_PATHBOUNDS"
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "name": "d3_geo_pathBoundsY1"
                                  },
                                  "_isReplacement": true
                                },
                                "right": {
                                  "type": "UnaryExpression",
                                  "operator": "-",
                                  "argument": {
                                    "type": "AssignmentExpression",
                                    "operator": "=",
                                    "left": {
                                      "type": "MemberExpression",
                                      "computed": false,
                                      "object": {
                                        "type": "Identifier",
                                        "name": "GEO_PATHBOUNDS"
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "name": "d3_geo_pathBoundsX0"
                                      },
                                      "_isReplacement": true
                                    },
                                    "right": {
                                      "type": "AssignmentExpression",
                                      "operator": "=",
                                      "left": {
                                        "type": "MemberExpression",
                                        "computed": false,
                                        "object": {
                                          "type": "Identifier",
                                          "name": "GEO_PATHBOUNDS"
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "name": "d3_geo_pathBoundsY0"
                                        },
                                        "_isReplacement": true
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
                                      "type": "MemberExpression",
                                      "computed": false,
                                      "object": {
                                        "type": "Identifier",
                                        "name": "GEO_PATHBOUNDS"
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "name": "d3_geo_pathBoundsX0"
                                      },
                                      "_isReplacement": true
                                    },
                                    {
                                      "type": "MemberExpression",
                                      "computed": false,
                                      "object": {
                                        "type": "Identifier",
                                        "name": "GEO_PATHBOUNDS"
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "name": "d3_geo_pathBoundsY0"
                                      },
                                      "_isReplacement": true
                                    }
                                  ]
                                },
                                {
                                  "type": "ArrayExpression",
                                  "elements": [
                                    {
                                      "type": "MemberExpression",
                                      "computed": false,
                                      "object": {
                                        "type": "Identifier",
                                        "name": "GEO_PATHBOUNDS"
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "name": "d3_geo_pathBoundsX1"
                                      },
                                      "_isReplacement": true
                                    },
                                    {
                                      "type": "MemberExpression",
                                      "computed": false,
                                      "object": {
                                        "type": "Identifier",
                                        "name": "GEO_PATHBOUNDS"
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "name": "d3_geo_pathBoundsY1"
                                      },
                                      "_isReplacement": true
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
  }
}