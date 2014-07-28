{
  "filepath": "/geo/centroid.js",
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
    }
  ],
  "dependencies": [
    "d3.geo.stream",
    "d3_degrees",
    "d3_asin",
    "d3_noop",
    "d3_radians",
    "d3_acos"
  ],
  "helpers": [
    "d3_geo_centroid",
    "d3_geo_centroidPoint",
    "d3_geo_centroidPointXYZ",
    "d3_geo_centroidLineStart",
    "d3_geo_centroidLineEnd",
    "d3_geo_centroidRingStart"
  ],
  "exports": [
    "d3.geo.centroid"
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
                        "name": "d3_geo_centroidW0"
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
                          "name": "d3_geo_centroidW1"
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
                        "type": "Identifier",
                        "name": "d3_geo_centroid"
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
                        "name": "x"
                      },
                      "init": {
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
                      }
                    },
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "name": "y"
                      },
                      "init": {
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
                      }
                    },
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "name": "z"
                      },
                      "init": {
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
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "name": "m"
                      },
                      "init": {
                        "type": "BinaryExpression",
                        "operator": "+",
                        "left": {
                          "type": "BinaryExpression",
                          "operator": "+",
                          "left": {
                            "type": "BinaryExpression",
                            "operator": "*",
                            "left": {
                              "type": "Identifier",
                              "name": "x"
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
                              "name": "y"
                            },
                            "right": {
                              "type": "Identifier",
                              "name": "y"
                            }
                          }
                        },
                        "right": {
                          "type": "BinaryExpression",
                          "operator": "*",
                          "left": {
                            "type": "Identifier",
                            "name": "z"
                          },
                          "right": {
                            "type": "Identifier",
                            "name": "z"
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
                    "type": "BinaryExpression",
                    "operator": "<",
                    "left": {
                      "type": "Identifier",
                      "name": "m"
                    },
                    "right": {
                      "type": "Identifier",
                      "name": "ε2"
                    }
                  },
                  "consequent": {
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
                                "name": "x"
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
                                  "name": "d3_geo_centroidX1"
                                },
                                "_isReplacement": true
                              }
                            },
                            {
                              "type": "AssignmentExpression",
                              "operator": "=",
                              "left": {
                                "type": "Identifier",
                                "name": "y"
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
                                  "name": "d3_geo_centroidY1"
                                },
                                "_isReplacement": true
                              }
                            },
                            {
                              "type": "AssignmentExpression",
                              "operator": "=",
                              "left": {
                                "type": "Identifier",
                                "name": "z"
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
                        }
                      },
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
                              "name": "GEO_CENTROID"
                            },
                            "property": {
                              "type": "Identifier",
                              "name": "d3_geo_centroidW1"
                            },
                            "_isReplacement": true
                          },
                          "right": {
                            "type": "Identifier",
                            "name": "ε"
                          }
                        },
                        "consequent": {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "SequenceExpression",
                            "expressions": [
                              {
                                "type": "AssignmentExpression",
                                "operator": "=",
                                "left": {
                                  "type": "Identifier",
                                  "name": "x"
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
                                    "name": "d3_geo_centroidX0"
                                  },
                                  "_isReplacement": true
                                }
                              },
                              {
                                "type": "AssignmentExpression",
                                "operator": "=",
                                "left": {
                                  "type": "Identifier",
                                  "name": "y"
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
                                    "name": "d3_geo_centroidY0"
                                  },
                                  "_isReplacement": true
                                }
                              },
                              {
                                "type": "AssignmentExpression",
                                "operator": "=",
                                "left": {
                                  "type": "Identifier",
                                  "name": "z"
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
                            "name": "m"
                          },
                          "right": {
                            "type": "BinaryExpression",
                            "operator": "+",
                            "left": {
                              "type": "BinaryExpression",
                              "operator": "+",
                              "left": {
                                "type": "BinaryExpression",
                                "operator": "*",
                                "left": {
                                  "type": "Identifier",
                                  "name": "x"
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
                                  "name": "y"
                                },
                                "right": {
                                  "type": "Identifier",
                                  "name": "y"
                                }
                              }
                            },
                            "right": {
                              "type": "BinaryExpression",
                              "operator": "*",
                              "left": {
                                "type": "Identifier",
                                "name": "z"
                              },
                              "right": {
                                "type": "Identifier",
                                "name": "z"
                              }
                            }
                          }
                        }
                      },
                      {
                        "type": "IfStatement",
                        "test": {
                          "type": "BinaryExpression",
                          "operator": "<",
                          "left": {
                            "type": "Identifier",
                            "name": "m"
                          },
                          "right": {
                            "type": "Identifier",
                            "name": "ε2"
                          }
                        },
                        "consequent": {
                          "type": "ReturnStatement",
                          "argument": {
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
                    "type": "ArrayExpression",
                    "elements": [
                      {
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
                              "name": "atan2"
                            }
                          },
                          "arguments": [
                            {
                              "type": "Identifier",
                              "name": "y"
                            },
                            {
                              "type": "Identifier",
                              "name": "x"
                            }
                          ]
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
                          "type": "CallExpression",
                          "callee": {
                            "type": "Identifier",
                            "name": "d3_asin"
                          },
                          "arguments": [
                            {
                              "type": "BinaryExpression",
                              "operator": "/",
                              "left": {
                                "type": "Identifier",
                                "name": "z"
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
                                    "type": "Identifier",
                                    "name": "m"
                                  }
                                ]
                              }
                            }
                          ]
                        },
                        "right": {
                          "type": "Identifier",
                          "name": "d3_degrees"
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
        "type": "EmptyStatement",
        "_isReplacement": true
      },
      {
        "type": "EmptyStatement",
        "_isReplacement": true
      },
      {
        "type": "EmptyStatement",
        "_isReplacement": true
      },
      {
        "type": "EmptyStatement",
        "_isReplacement": true
      },
      {
        "type": "EmptyStatement",
        "_isReplacement": true
      },
      {
        "type": "EmptyStatement",
        "_isReplacement": true
      },
      {
        "type": "EmptyStatement",
        "_isReplacement": true
      },
      {
        "type": "EmptyStatement",
        "_isReplacement": true
      },
      {
        "type": "EmptyStatement",
        "_isReplacement": true
      },
      {
        "type": "EmptyStatement",
        "_isReplacement": true
      },
      {
        "type": "EmptyStatement",
        "_isReplacement": true
      },
      {
        "type": "VariableDeclaration",
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "name": "d3_geo_centroid"
            },
            "init": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "key": {
                    "type": "Identifier",
                    "name": "sphere"
                  },
                  "value": {
                    "type": "Identifier",
                    "name": "d3_noop"
                  },
                  "kind": "init"
                },
                {
                  "type": "Property",
                  "key": {
                    "type": "Identifier",
                    "name": "point"
                  },
                  "value": {
                    "type": "Identifier",
                    "name": "d3_geo_centroidPoint"
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
                    "name": "d3_geo_centroidLineStart"
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
                    "name": "d3_geo_centroidLineEnd"
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
                                "name": "d3_geo_centroid"
                              },
                              "property": {
                                "type": "Identifier",
                                "name": "lineStart"
                              }
                            },
                            "right": {
                              "type": "Identifier",
                              "name": "d3_geo_centroidRingStart"
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
                                "name": "d3_geo_centroid"
                              },
                              "property": {
                                "type": "Identifier",
                                "name": "lineStart"
                              }
                            },
                            "right": {
                              "type": "Identifier",
                              "name": "d3_geo_centroidLineStart"
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
          "name": "d3_geo_centroidPoint"
        },
        "params": [
          {
            "type": "Identifier",
            "name": "λ"
          },
          {
            "type": "Identifier",
            "name": "φ"
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
                  "type": "Identifier",
                  "name": "λ"
                },
                "right": {
                  "type": "Identifier",
                  "name": "d3_radians"
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
                    "name": "cosφ"
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
                        "name": "cos"
                      }
                    },
                    "arguments": [
                      {
                        "type": "AssignmentExpression",
                        "operator": "*=",
                        "left": {
                          "type": "Identifier",
                          "name": "φ"
                        },
                        "right": {
                          "type": "Identifier",
                          "name": "d3_radians"
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
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "name": "d3_geo_centroidPointXYZ"
                },
                "arguments": [
                  {
                    "type": "BinaryExpression",
                    "operator": "*",
                    "left": {
                      "type": "Identifier",
                      "name": "cosφ"
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
                          "name": "cos"
                        }
                      },
                      "arguments": [
                        {
                          "type": "Identifier",
                          "name": "λ"
                        }
                      ]
                    }
                  },
                  {
                    "type": "BinaryExpression",
                    "operator": "*",
                    "left": {
                      "type": "Identifier",
                      "name": "cosφ"
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
                          "name": "sin"
                        }
                      },
                      "arguments": [
                        {
                          "type": "Identifier",
                          "name": "λ"
                        }
                      ]
                    }
                  },
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
                        "name": "sin"
                      }
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "name": "φ"
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
      },
      {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "name": "d3_geo_centroidPointXYZ"
        },
        "params": [
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
            "name": "z"
          }
        ],
        "defaults": [],
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "ExpressionStatement",
              "expression": {
                "type": "UpdateExpression",
                "operator": "++",
                "argument": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "name": "GEO_CENTROID"
                  },
                  "property": {
                    "type": "Identifier",
                    "name": "d3_geo_centroidW0"
                  },
                  "_isReplacement": true
                },
                "prefix": true
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
                    "name": "GEO_CENTROID"
                  },
                  "property": {
                    "type": "Identifier",
                    "name": "d3_geo_centroidX0"
                  },
                  "_isReplacement": true
                },
                "right": {
                  "type": "BinaryExpression",
                  "operator": "/",
                  "left": {
                    "type": "BinaryExpression",
                    "operator": "-",
                    "left": {
                      "type": "Identifier",
                      "name": "x"
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
                        "name": "d3_geo_centroidX0"
                      },
                      "_isReplacement": true
                    }
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
                      "name": "d3_geo_centroidW0"
                    },
                    "_isReplacement": true
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
                    "name": "GEO_CENTROID"
                  },
                  "property": {
                    "type": "Identifier",
                    "name": "d3_geo_centroidY0"
                  },
                  "_isReplacement": true
                },
                "right": {
                  "type": "BinaryExpression",
                  "operator": "/",
                  "left": {
                    "type": "BinaryExpression",
                    "operator": "-",
                    "left": {
                      "type": "Identifier",
                      "name": "y"
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
                        "name": "d3_geo_centroidY0"
                      },
                      "_isReplacement": true
                    }
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
                      "name": "d3_geo_centroidW0"
                    },
                    "_isReplacement": true
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
                    "name": "GEO_CENTROID"
                  },
                  "property": {
                    "type": "Identifier",
                    "name": "d3_geo_centroidZ0"
                  },
                  "_isReplacement": true
                },
                "right": {
                  "type": "BinaryExpression",
                  "operator": "/",
                  "left": {
                    "type": "BinaryExpression",
                    "operator": "-",
                    "left": {
                      "type": "Identifier",
                      "name": "z"
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
                  "right": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "name": "GEO_CENTROID"
                    },
                    "property": {
                      "type": "Identifier",
                      "name": "d3_geo_centroidW0"
                    },
                    "_isReplacement": true
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
          "name": "d3_geo_centroidLineStart"
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
                },
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "name": "z0"
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
                    "name": "d3_geo_centroid"
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
                      "name": "λ"
                    },
                    {
                      "type": "Identifier",
                      "name": "φ"
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
                            "type": "Identifier",
                            "name": "λ"
                          },
                          "right": {
                            "type": "Identifier",
                            "name": "d3_radians"
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
                              "name": "cosφ"
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
                                  "name": "cos"
                                }
                              },
                              "arguments": [
                                {
                                  "type": "AssignmentExpression",
                                  "operator": "*=",
                                  "left": {
                                    "type": "Identifier",
                                    "name": "φ"
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "name": "d3_radians"
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
                          "operator": "=",
                          "left": {
                            "type": "Identifier",
                            "name": "x0"
                          },
                          "right": {
                            "type": "BinaryExpression",
                            "operator": "*",
                            "left": {
                              "type": "Identifier",
                              "name": "cosφ"
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
                                  "name": "cos"
                                }
                              },
                              "arguments": [
                                {
                                  "type": "Identifier",
                                  "name": "λ"
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
                            "type": "Identifier",
                            "name": "y0"
                          },
                          "right": {
                            "type": "BinaryExpression",
                            "operator": "*",
                            "left": {
                              "type": "Identifier",
                              "name": "cosφ"
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
                                  "name": "sin"
                                }
                              },
                              "arguments": [
                                {
                                  "type": "Identifier",
                                  "name": "λ"
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
                            "type": "Identifier",
                            "name": "z0"
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
                                "name": "sin"
                              }
                            },
                            "arguments": [
                              {
                                "type": "Identifier",
                                "name": "φ"
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
                              "name": "d3_geo_centroid"
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
                            "name": "d3_geo_centroidPointXYZ"
                          },
                          "arguments": [
                            {
                              "type": "Identifier",
                              "name": "x0"
                            },
                            {
                              "type": "Identifier",
                              "name": "y0"
                            },
                            {
                              "type": "Identifier",
                              "name": "z0"
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
                  "name": "λ"
                },
                {
                  "type": "Identifier",
                  "name": "φ"
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
                        "type": "Identifier",
                        "name": "λ"
                      },
                      "right": {
                        "type": "Identifier",
                        "name": "d3_radians"
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
                          "name": "cosφ"
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
                              "name": "cos"
                            }
                          },
                          "arguments": [
                            {
                              "type": "AssignmentExpression",
                              "operator": "*=",
                              "left": {
                                "type": "Identifier",
                                "name": "φ"
                              },
                              "right": {
                                "type": "Identifier",
                                "name": "d3_radians"
                              }
                            }
                          ]
                        }
                      },
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "name": "x"
                        },
                        "init": {
                          "type": "BinaryExpression",
                          "operator": "*",
                          "left": {
                            "type": "Identifier",
                            "name": "cosφ"
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
                                "name": "cos"
                              }
                            },
                            "arguments": [
                              {
                                "type": "Identifier",
                                "name": "λ"
                              }
                            ]
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
                          "operator": "*",
                          "left": {
                            "type": "Identifier",
                            "name": "cosφ"
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
                                "name": "sin"
                              }
                            },
                            "arguments": [
                              {
                                "type": "Identifier",
                                "name": "λ"
                              }
                            ]
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
                              "name": "sin"
                            }
                          },
                          "arguments": [
                            {
                              "type": "Identifier",
                              "name": "φ"
                            }
                          ]
                        }
                      },
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "name": "w"
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
                              "name": "atan2"
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
                                  "name": "sqrt"
                                }
                              },
                              "arguments": [
                                {
                                  "type": "BinaryExpression",
                                  "operator": "+",
                                  "left": {
                                    "type": "BinaryExpression",
                                    "operator": "+",
                                    "left": {
                                      "type": "BinaryExpression",
                                      "operator": "*",
                                      "left": {
                                        "type": "AssignmentExpression",
                                        "operator": "=",
                                        "left": {
                                          "type": "Identifier",
                                          "name": "w"
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
                                              "name": "z"
                                            }
                                          },
                                          "right": {
                                            "type": "BinaryExpression",
                                            "operator": "*",
                                            "left": {
                                              "type": "Identifier",
                                              "name": "z0"
                                            },
                                            "right": {
                                              "type": "Identifier",
                                              "name": "y"
                                            }
                                          }
                                        }
                                      },
                                      "right": {
                                        "type": "Identifier",
                                        "name": "w"
                                      }
                                    },
                                    "right": {
                                      "type": "BinaryExpression",
                                      "operator": "*",
                                      "left": {
                                        "type": "AssignmentExpression",
                                        "operator": "=",
                                        "left": {
                                          "type": "Identifier",
                                          "name": "w"
                                        },
                                        "right": {
                                          "type": "BinaryExpression",
                                          "operator": "-",
                                          "left": {
                                            "type": "BinaryExpression",
                                            "operator": "*",
                                            "left": {
                                              "type": "Identifier",
                                              "name": "z0"
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
                                              "name": "z"
                                            }
                                          }
                                        }
                                      },
                                      "right": {
                                        "type": "Identifier",
                                        "name": "w"
                                      }
                                    }
                                  },
                                  "right": {
                                    "type": "BinaryExpression",
                                    "operator": "*",
                                    "left": {
                                      "type": "AssignmentExpression",
                                      "operator": "=",
                                      "left": {
                                        "type": "Identifier",
                                        "name": "w"
                                      },
                                      "right": {
                                        "type": "BinaryExpression",
                                        "operator": "-",
                                        "left": {
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
                                        },
                                        "right": {
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
                                        }
                                      }
                                    },
                                    "right": {
                                      "type": "Identifier",
                                      "name": "w"
                                    }
                                  }
                                }
                              ]
                            },
                            {
                              "type": "BinaryExpression",
                              "operator": "+",
                              "left": {
                                "type": "BinaryExpression",
                                "operator": "+",
                                "left": {
                                  "type": "BinaryExpression",
                                  "operator": "*",
                                  "left": {
                                    "type": "Identifier",
                                    "name": "x0"
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
                                    "name": "y0"
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "name": "y"
                                  }
                                }
                              },
                              "right": {
                                "type": "BinaryExpression",
                                "operator": "*",
                                "left": {
                                  "type": "Identifier",
                                  "name": "z0"
                                },
                                "right": {
                                  "type": "Identifier",
                                  "name": "z"
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
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "name": "GEO_CENTROID"
                        },
                        "property": {
                          "type": "Identifier",
                          "name": "d3_geo_centroidW1"
                        },
                        "_isReplacement": true
                      },
                      "right": {
                        "type": "Identifier",
                        "name": "w"
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
                          "name": "GEO_CENTROID"
                        },
                        "property": {
                          "type": "Identifier",
                          "name": "d3_geo_centroidX1"
                        },
                        "_isReplacement": true
                      },
                      "right": {
                        "type": "BinaryExpression",
                        "operator": "*",
                        "left": {
                          "type": "Identifier",
                          "name": "w"
                        },
                        "right": {
                          "type": "BinaryExpression",
                          "operator": "+",
                          "left": {
                            "type": "Identifier",
                            "name": "x0"
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
                          "name": "GEO_CENTROID"
                        },
                        "property": {
                          "type": "Identifier",
                          "name": "d3_geo_centroidY1"
                        },
                        "_isReplacement": true
                      },
                      "right": {
                        "type": "BinaryExpression",
                        "operator": "*",
                        "left": {
                          "type": "Identifier",
                          "name": "w"
                        },
                        "right": {
                          "type": "BinaryExpression",
                          "operator": "+",
                          "left": {
                            "type": "Identifier",
                            "name": "y0"
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
                          "name": "GEO_CENTROID"
                        },
                        "property": {
                          "type": "Identifier",
                          "name": "d3_geo_centroidZ1"
                        },
                        "_isReplacement": true
                      },
                      "right": {
                        "type": "BinaryExpression",
                        "operator": "*",
                        "left": {
                          "type": "Identifier",
                          "name": "w"
                        },
                        "right": {
                          "type": "BinaryExpression",
                          "operator": "+",
                          "left": {
                            "type": "Identifier",
                            "name": "z0"
                          },
                          "right": {
                            "type": "AssignmentExpression",
                            "operator": "=",
                            "left": {
                              "type": "Identifier",
                              "name": "z0"
                            },
                            "right": {
                              "type": "Identifier",
                              "name": "z"
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
                        "type": "Identifier",
                        "name": "d3_geo_centroidPointXYZ"
                      },
                      "arguments": [
                        {
                          "type": "Identifier",
                          "name": "x0"
                        },
                        {
                          "type": "Identifier",
                          "name": "y0"
                        },
                        {
                          "type": "Identifier",
                          "name": "z0"
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
          "name": "d3_geo_centroidLineEnd"
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
                    "name": "d3_geo_centroid"
                  },
                  "property": {
                    "type": "Identifier",
                    "name": "point"
                  }
                },
                "right": {
                  "type": "Identifier",
                  "name": "d3_geo_centroidPoint"
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
          "name": "d3_geo_centroidRingStart"
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
                    "name": "λ00"
                  },
                  "init": null
                },
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "name": "φ00"
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
                },
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "name": "z0"
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
                    "name": "d3_geo_centroid"
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
                      "name": "λ"
                    },
                    {
                      "type": "Identifier",
                      "name": "φ"
                    }
                  ],
                  "defaults": [],
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
                                "name": "λ00"
                              },
                              "right": {
                                "type": "Identifier",
                                "name": "λ"
                              }
                            },
                            {
                              "type": "AssignmentExpression",
                              "operator": "=",
                              "left": {
                                "type": "Identifier",
                                "name": "φ00"
                              },
                              "right": {
                                "type": "Identifier",
                                "name": "φ"
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
                              "name": "d3_geo_centroid"
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
                          "type": "AssignmentExpression",
                          "operator": "*=",
                          "left": {
                            "type": "Identifier",
                            "name": "λ"
                          },
                          "right": {
                            "type": "Identifier",
                            "name": "d3_radians"
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
                              "name": "cosφ"
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
                                  "name": "cos"
                                }
                              },
                              "arguments": [
                                {
                                  "type": "AssignmentExpression",
                                  "operator": "*=",
                                  "left": {
                                    "type": "Identifier",
                                    "name": "φ"
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "name": "d3_radians"
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
                          "operator": "=",
                          "left": {
                            "type": "Identifier",
                            "name": "x0"
                          },
                          "right": {
                            "type": "BinaryExpression",
                            "operator": "*",
                            "left": {
                              "type": "Identifier",
                              "name": "cosφ"
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
                                  "name": "cos"
                                }
                              },
                              "arguments": [
                                {
                                  "type": "Identifier",
                                  "name": "λ"
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
                            "type": "Identifier",
                            "name": "y0"
                          },
                          "right": {
                            "type": "BinaryExpression",
                            "operator": "*",
                            "left": {
                              "type": "Identifier",
                              "name": "cosφ"
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
                                  "name": "sin"
                                }
                              },
                              "arguments": [
                                {
                                  "type": "Identifier",
                                  "name": "λ"
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
                            "type": "Identifier",
                            "name": "z0"
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
                                "name": "sin"
                              }
                            },
                            "arguments": [
                              {
                                "type": "Identifier",
                                "name": "φ"
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
                            "name": "d3_geo_centroidPointXYZ"
                          },
                          "arguments": [
                            {
                              "type": "Identifier",
                              "name": "x0"
                            },
                            {
                              "type": "Identifier",
                              "name": "y0"
                            },
                            {
                              "type": "Identifier",
                              "name": "z0"
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
                    "name": "d3_geo_centroid"
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
                              "name": "λ00"
                            },
                            {
                              "type": "Identifier",
                              "name": "φ00"
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
                              "name": "d3_geo_centroid"
                            },
                            "property": {
                              "type": "Identifier",
                              "name": "lineEnd"
                            }
                          },
                          "right": {
                            "type": "Identifier",
                            "name": "d3_geo_centroidLineEnd"
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
                              "name": "d3_geo_centroid"
                            },
                            "property": {
                              "type": "Identifier",
                              "name": "point"
                            }
                          },
                          "right": {
                            "type": "Identifier",
                            "name": "d3_geo_centroidPoint"
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
                "name": "nextPoint"
              },
              "params": [
                {
                  "type": "Identifier",
                  "name": "λ"
                },
                {
                  "type": "Identifier",
                  "name": "φ"
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
                        "type": "Identifier",
                        "name": "λ"
                      },
                      "right": {
                        "type": "Identifier",
                        "name": "d3_radians"
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
                          "name": "cosφ"
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
                              "name": "cos"
                            }
                          },
                          "arguments": [
                            {
                              "type": "AssignmentExpression",
                              "operator": "*=",
                              "left": {
                                "type": "Identifier",
                                "name": "φ"
                              },
                              "right": {
                                "type": "Identifier",
                                "name": "d3_radians"
                              }
                            }
                          ]
                        }
                      },
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "name": "x"
                        },
                        "init": {
                          "type": "BinaryExpression",
                          "operator": "*",
                          "left": {
                            "type": "Identifier",
                            "name": "cosφ"
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
                                "name": "cos"
                              }
                            },
                            "arguments": [
                              {
                                "type": "Identifier",
                                "name": "λ"
                              }
                            ]
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
                          "operator": "*",
                          "left": {
                            "type": "Identifier",
                            "name": "cosφ"
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
                                "name": "sin"
                              }
                            },
                            "arguments": [
                              {
                                "type": "Identifier",
                                "name": "λ"
                              }
                            ]
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
                              "name": "sin"
                            }
                          },
                          "arguments": [
                            {
                              "type": "Identifier",
                              "name": "φ"
                            }
                          ]
                        }
                      },
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "name": "cx"
                        },
                        "init": {
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
                              "name": "z"
                            }
                          },
                          "right": {
                            "type": "BinaryExpression",
                            "operator": "*",
                            "left": {
                              "type": "Identifier",
                              "name": "z0"
                            },
                            "right": {
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
                          "name": "cy"
                        },
                        "init": {
                          "type": "BinaryExpression",
                          "operator": "-",
                          "left": {
                            "type": "BinaryExpression",
                            "operator": "*",
                            "left": {
                              "type": "Identifier",
                              "name": "z0"
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
                              "name": "z"
                            }
                          }
                        }
                      },
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "name": "cz"
                        },
                        "init": {
                          "type": "BinaryExpression",
                          "operator": "-",
                          "left": {
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
                          },
                          "right": {
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
                          }
                        }
                      },
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "name": "m"
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
                                "operator": "+",
                                "left": {
                                  "type": "BinaryExpression",
                                  "operator": "*",
                                  "left": {
                                    "type": "Identifier",
                                    "name": "cx"
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "name": "cx"
                                  }
                                },
                                "right": {
                                  "type": "BinaryExpression",
                                  "operator": "*",
                                  "left": {
                                    "type": "Identifier",
                                    "name": "cy"
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "name": "cy"
                                  }
                                }
                              },
                              "right": {
                                "type": "BinaryExpression",
                                "operator": "*",
                                "left": {
                                  "type": "Identifier",
                                  "name": "cz"
                                },
                                "right": {
                                  "type": "Identifier",
                                  "name": "cz"
                                }
                              }
                            }
                          ]
                        }
                      },
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "name": "u"
                        },
                        "init": {
                          "type": "BinaryExpression",
                          "operator": "+",
                          "left": {
                            "type": "BinaryExpression",
                            "operator": "+",
                            "left": {
                              "type": "BinaryExpression",
                              "operator": "*",
                              "left": {
                                "type": "Identifier",
                                "name": "x0"
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
                                "name": "y0"
                              },
                              "right": {
                                "type": "Identifier",
                                "name": "y"
                              }
                            }
                          },
                          "right": {
                            "type": "BinaryExpression",
                            "operator": "*",
                            "left": {
                              "type": "Identifier",
                              "name": "z0"
                            },
                            "right": {
                              "type": "Identifier",
                              "name": "z"
                            }
                          }
                        }
                      },
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "name": "v"
                        },
                        "init": {
                          "type": "LogicalExpression",
                          "operator": "&&",
                          "left": {
                            "type": "Identifier",
                            "name": "m"
                          },
                          "right": {
                            "type": "BinaryExpression",
                            "operator": "/",
                            "left": {
                              "type": "UnaryExpression",
                              "operator": "-",
                              "argument": {
                                "type": "CallExpression",
                                "callee": {
                                  "type": "Identifier",
                                  "name": "d3_acos"
                                },
                                "arguments": [
                                  {
                                    "type": "Identifier",
                                    "name": "u"
                                  }
                                ]
                              },
                              "prefix": true
                            },
                            "right": {
                              "type": "Identifier",
                              "name": "m"
                            }
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
                              "name": "atan2"
                            }
                          },
                          "arguments": [
                            {
                              "type": "Identifier",
                              "name": "m"
                            },
                            {
                              "type": "Identifier",
                              "name": "u"
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
                        "type": "BinaryExpression",
                        "operator": "*",
                        "left": {
                          "type": "Identifier",
                          "name": "v"
                        },
                        "right": {
                          "type": "Identifier",
                          "name": "cx"
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
                          "name": "GEO_CENTROID"
                        },
                        "property": {
                          "type": "Identifier",
                          "name": "d3_geo_centroidY2"
                        },
                        "_isReplacement": true
                      },
                      "right": {
                        "type": "BinaryExpression",
                        "operator": "*",
                        "left": {
                          "type": "Identifier",
                          "name": "v"
                        },
                        "right": {
                          "type": "Identifier",
                          "name": "cy"
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
                          "name": "GEO_CENTROID"
                        },
                        "property": {
                          "type": "Identifier",
                          "name": "d3_geo_centroidZ2"
                        },
                        "_isReplacement": true
                      },
                      "right": {
                        "type": "BinaryExpression",
                        "operator": "*",
                        "left": {
                          "type": "Identifier",
                          "name": "v"
                        },
                        "right": {
                          "type": "Identifier",
                          "name": "cz"
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
                          "name": "GEO_CENTROID"
                        },
                        "property": {
                          "type": "Identifier",
                          "name": "d3_geo_centroidW1"
                        },
                        "_isReplacement": true
                      },
                      "right": {
                        "type": "Identifier",
                        "name": "w"
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
                          "name": "GEO_CENTROID"
                        },
                        "property": {
                          "type": "Identifier",
                          "name": "d3_geo_centroidX1"
                        },
                        "_isReplacement": true
                      },
                      "right": {
                        "type": "BinaryExpression",
                        "operator": "*",
                        "left": {
                          "type": "Identifier",
                          "name": "w"
                        },
                        "right": {
                          "type": "BinaryExpression",
                          "operator": "+",
                          "left": {
                            "type": "Identifier",
                            "name": "x0"
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
                          "name": "GEO_CENTROID"
                        },
                        "property": {
                          "type": "Identifier",
                          "name": "d3_geo_centroidY1"
                        },
                        "_isReplacement": true
                      },
                      "right": {
                        "type": "BinaryExpression",
                        "operator": "*",
                        "left": {
                          "type": "Identifier",
                          "name": "w"
                        },
                        "right": {
                          "type": "BinaryExpression",
                          "operator": "+",
                          "left": {
                            "type": "Identifier",
                            "name": "y0"
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
                          "name": "GEO_CENTROID"
                        },
                        "property": {
                          "type": "Identifier",
                          "name": "d3_geo_centroidZ1"
                        },
                        "_isReplacement": true
                      },
                      "right": {
                        "type": "BinaryExpression",
                        "operator": "*",
                        "left": {
                          "type": "Identifier",
                          "name": "w"
                        },
                        "right": {
                          "type": "BinaryExpression",
                          "operator": "+",
                          "left": {
                            "type": "Identifier",
                            "name": "z0"
                          },
                          "right": {
                            "type": "AssignmentExpression",
                            "operator": "=",
                            "left": {
                              "type": "Identifier",
                              "name": "z0"
                            },
                            "right": {
                              "type": "Identifier",
                              "name": "z"
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
                        "type": "Identifier",
                        "name": "d3_geo_centroidPointXYZ"
                      },
                      "arguments": [
                        {
                          "type": "Identifier",
                          "name": "x0"
                        },
                        {
                          "type": "Identifier",
                          "name": "y0"
                        },
                        {
                          "type": "Identifier",
                          "name": "z0"
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
      }
    ]
  }
}