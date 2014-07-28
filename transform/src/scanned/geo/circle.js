{
  "filepath": "/geo/circle.js",
  "shared": [],
  "dependencies": [
    "d3_geo_rotation",
    "d3_radians",
    "d3_degrees",
    "d3_geo_spherical",
    "d3_geo_cartesian",
    "d3_geo_cartesianNormalize",
    "d3_acos"
  ],
  "helpers": [
    "d3_geo_circleInterpolate",
    "d3_geo_circleAngle"
  ],
  "exports": [
    "d3.geo.circle"
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
              "name": "circle"
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
                        "name": "origin"
                      },
                      "init": {
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
                      }
                    },
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "name": "angle"
                      },
                      "init": null
                    },
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "name": "precision"
                      },
                      "init": {
                        "type": "Literal",
                        "value": 6,
                        "raw": "6"
                      }
                    },
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "name": "interpolate"
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
                    "name": "circle"
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
                              "name": "center"
                            },
                            "init": {
                              "type": "ConditionalExpression",
                              "test": {
                                "type": "BinaryExpression",
                                "operator": "===",
                                "left": {
                                  "type": "UnaryExpression",
                                  "operator": "typeof",
                                  "argument": {
                                    "type": "Identifier",
                                    "name": "origin"
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
                                "type": "CallExpression",
                                "callee": {
                                  "type": "MemberExpression",
                                  "computed": false,
                                  "object": {
                                    "type": "Identifier",
                                    "name": "origin"
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
                              "alternate": {
                                "type": "Identifier",
                                "name": "origin"
                              }
                            }
                          },
                          {
                            "type": "VariableDeclarator",
                            "id": {
                              "type": "Identifier",
                              "name": "rotate"
                            },
                            "init": {
                              "type": "MemberExpression",
                              "computed": false,
                              "object": {
                                "type": "CallExpression",
                                "callee": {
                                  "type": "Identifier",
                                  "name": "d3_geo_rotation"
                                },
                                "arguments": [
                                  {
                                    "type": "BinaryExpression",
                                    "operator": "*",
                                    "left": {
                                      "type": "UnaryExpression",
                                      "operator": "-",
                                      "argument": {
                                        "type": "MemberExpression",
                                        "computed": true,
                                        "object": {
                                          "type": "Identifier",
                                          "name": "center"
                                        },
                                        "property": {
                                          "type": "Literal",
                                          "value": 0,
                                          "raw": "0"
                                        }
                                      },
                                      "prefix": true
                                    },
                                    "right": {
                                      "type": "Identifier",
                                      "name": "d3_radians"
                                    }
                                  },
                                  {
                                    "type": "BinaryExpression",
                                    "operator": "*",
                                    "left": {
                                      "type": "UnaryExpression",
                                      "operator": "-",
                                      "argument": {
                                        "type": "MemberExpression",
                                        "computed": true,
                                        "object": {
                                          "type": "Identifier",
                                          "name": "center"
                                        },
                                        "property": {
                                          "type": "Literal",
                                          "value": 1,
                                          "raw": "1"
                                        }
                                      },
                                      "prefix": true
                                    },
                                    "right": {
                                      "type": "Identifier",
                                      "name": "d3_radians"
                                    }
                                  },
                                  {
                                    "type": "Literal",
                                    "value": 0,
                                    "raw": "0"
                                  }
                                ]
                              },
                              "property": {
                                "type": "Identifier",
                                "name": "invert"
                              }
                            }
                          },
                          {
                            "type": "VariableDeclarator",
                            "id": {
                              "type": "Identifier",
                              "name": "ring"
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
                            "type": "Identifier",
                            "name": "interpolate"
                          },
                          "arguments": [
                            {
                              "type": "Literal",
                              "value": null,
                              "raw": "null"
                            },
                            {
                              "type": "Literal",
                              "value": null,
                              "raw": "null"
                            },
                            {
                              "type": "Literal",
                              "value": 1,
                              "raw": "1"
                            },
                            {
                              "type": "ObjectExpression",
                              "properties": [
                                {
                                  "type": "Property",
                                  "key": {
                                    "type": "Identifier",
                                    "name": "point"
                                  },
                                  "value": {
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
                                            "type": "CallExpression",
                                            "callee": {
                                              "type": "MemberExpression",
                                              "computed": false,
                                              "object": {
                                                "type": "Identifier",
                                                "name": "ring"
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "name": "push"
                                              }
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
                                                  "type": "CallExpression",
                                                  "callee": {
                                                    "type": "Identifier",
                                                    "name": "rotate"
                                                  },
                                                  "arguments": [
                                                    {
                                                      "type": "Identifier",
                                                      "name": "x"
                                                    },
                                                    {
                                                      "type": "Identifier",
                                                      "name": "y"
                                                    }
                                                  ]
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
                                                "operator": "*=",
                                                "left": {
                                                  "type": "MemberExpression",
                                                  "computed": true,
                                                  "object": {
                                                    "type": "Identifier",
                                                    "name": "x"
                                                  },
                                                  "property": {
                                                    "type": "Literal",
                                                    "value": 0,
                                                    "raw": "0"
                                                  }
                                                },
                                                "right": {
                                                  "type": "Identifier",
                                                  "name": "d3_degrees"
                                                }
                                              },
                                              {
                                                "type": "AssignmentExpression",
                                                "operator": "*=",
                                                "left": {
                                                  "type": "MemberExpression",
                                                  "computed": true,
                                                  "object": {
                                                    "type": "Identifier",
                                                    "name": "x"
                                                  },
                                                  "property": {
                                                    "type": "Literal",
                                                    "value": 1,
                                                    "raw": "1"
                                                  }
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
                                  },
                                  "kind": "init"
                                }
                              ]
                            }
                          ]
                        }
                      },
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "ObjectExpression",
                          "properties": [
                            {
                              "type": "Property",
                              "key": {
                                "type": "Identifier",
                                "name": "type"
                              },
                              "value": {
                                "type": "Literal",
                                "value": "Polygon",
                                "raw": "\"Polygon\""
                              },
                              "kind": "init"
                            },
                            {
                              "type": "Property",
                              "key": {
                                "type": "Identifier",
                                "name": "coordinates"
                              },
                              "value": {
                                "type": "ArrayExpression",
                                "elements": [
                                  {
                                    "type": "Identifier",
                                    "name": "ring"
                                  }
                                ]
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
                        "name": "circle"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "origin"
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
                                "name": "origin"
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
                                "name": "origin"
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
                              "name": "circle"
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
                        "name": "circle"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "angle"
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
                                "name": "angle"
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
                                "name": "interpolate"
                              },
                              "right": {
                                "type": "CallExpression",
                                "callee": {
                                  "type": "Identifier",
                                  "name": "d3_geo_circleInterpolate"
                                },
                                "arguments": [
                                  {
                                    "type": "BinaryExpression",
                                    "operator": "*",
                                    "left": {
                                      "type": "AssignmentExpression",
                                      "operator": "=",
                                      "left": {
                                        "type": "Identifier",
                                        "name": "angle"
                                      },
                                      "right": {
                                        "type": "UnaryExpression",
                                        "operator": "+",
                                        "argument": {
                                          "type": "Identifier",
                                          "name": "x"
                                        },
                                        "prefix": true
                                      }
                                    },
                                    "right": {
                                      "type": "Identifier",
                                      "name": "d3_radians"
                                    }
                                  },
                                  {
                                    "type": "BinaryExpression",
                                    "operator": "*",
                                    "left": {
                                      "type": "Identifier",
                                      "name": "precision"
                                    },
                                    "right": {
                                      "type": "Identifier",
                                      "name": "d3_radians"
                                    }
                                  }
                                ]
                              }
                            }
                          },
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "Identifier",
                              "name": "circle"
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
                        "name": "circle"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "precision"
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
                                "name": "precision"
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
                                "name": "interpolate"
                              },
                              "right": {
                                "type": "CallExpression",
                                "callee": {
                                  "type": "Identifier",
                                  "name": "d3_geo_circleInterpolate"
                                },
                                "arguments": [
                                  {
                                    "type": "BinaryExpression",
                                    "operator": "*",
                                    "left": {
                                      "type": "Identifier",
                                      "name": "angle"
                                    },
                                    "right": {
                                      "type": "Identifier",
                                      "name": "d3_radians"
                                    }
                                  },
                                  {
                                    "type": "BinaryExpression",
                                    "operator": "*",
                                    "left": {
                                      "type": "AssignmentExpression",
                                      "operator": "=",
                                      "left": {
                                        "type": "Identifier",
                                        "name": "precision"
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
                                    },
                                    "right": {
                                      "type": "Identifier",
                                      "name": "d3_radians"
                                    }
                                  }
                                ]
                              }
                            }
                          },
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "Identifier",
                              "name": "circle"
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
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "name": "circle"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "angle"
                      }
                    },
                    "arguments": [
                      {
                        "type": "Literal",
                        "value": 90,
                        "raw": "90"
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
          "name": "d3_geo_circleInterpolate"
        },
        "params": [
          {
            "type": "Identifier",
            "name": "radius"
          },
          {
            "type": "Identifier",
            "name": "precision"
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
                    "name": "cr"
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
                        "type": "Identifier",
                        "name": "radius"
                      }
                    ]
                  }
                },
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "name": "sr"
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
                        "name": "radius"
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
                    "name": "from"
                  },
                  {
                    "type": "Identifier",
                    "name": "to"
                  },
                  {
                    "type": "Identifier",
                    "name": "direction"
                  },
                  {
                    "type": "Identifier",
                    "name": "listener"
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
                            "name": "step"
                          },
                          "init": {
                            "type": "BinaryExpression",
                            "operator": "*",
                            "left": {
                              "type": "Identifier",
                              "name": "direction"
                            },
                            "right": {
                              "type": "Identifier",
                              "name": "precision"
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
                        "operator": "!=",
                        "left": {
                          "type": "Identifier",
                          "name": "from"
                        },
                        "right": {
                          "type": "Literal",
                          "value": null,
                          "raw": "null"
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
                                "name": "from"
                              },
                              "right": {
                                "type": "CallExpression",
                                "callee": {
                                  "type": "Identifier",
                                  "name": "d3_geo_circleAngle"
                                },
                                "arguments": [
                                  {
                                    "type": "Identifier",
                                    "name": "cr"
                                  },
                                  {
                                    "type": "Identifier",
                                    "name": "from"
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
                                "name": "to"
                              },
                              "right": {
                                "type": "CallExpression",
                                "callee": {
                                  "type": "Identifier",
                                  "name": "d3_geo_circleAngle"
                                },
                                "arguments": [
                                  {
                                    "type": "Identifier",
                                    "name": "cr"
                                  },
                                  {
                                    "type": "Identifier",
                                    "name": "to"
                                  }
                                ]
                              }
                            }
                          },
                          {
                            "type": "IfStatement",
                            "test": {
                              "type": "ConditionalExpression",
                              "test": {
                                "type": "BinaryExpression",
                                "operator": ">",
                                "left": {
                                  "type": "Identifier",
                                  "name": "direction"
                                },
                                "right": {
                                  "type": "Literal",
                                  "value": 0,
                                  "raw": "0"
                                }
                              },
                              "consequent": {
                                "type": "BinaryExpression",
                                "operator": "<",
                                "left": {
                                  "type": "Identifier",
                                  "name": "from"
                                },
                                "right": {
                                  "type": "Identifier",
                                  "name": "to"
                                }
                              },
                              "alternate": {
                                "type": "BinaryExpression",
                                "operator": ">",
                                "left": {
                                  "type": "Identifier",
                                  "name": "from"
                                },
                                "right": {
                                  "type": "Identifier",
                                  "name": "to"
                                }
                              }
                            },
                            "consequent": {
                              "type": "ExpressionStatement",
                              "expression": {
                                "type": "AssignmentExpression",
                                "operator": "+=",
                                "left": {
                                  "type": "Identifier",
                                  "name": "from"
                                },
                                "right": {
                                  "type": "BinaryExpression",
                                  "operator": "*",
                                  "left": {
                                    "type": "Identifier",
                                    "name": "direction"
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "name": "τ"
                                  }
                                }
                              }
                            },
                            "alternate": null
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
                                "type": "Identifier",
                                "name": "from"
                              },
                              "right": {
                                "type": "BinaryExpression",
                                "operator": "+",
                                "left": {
                                  "type": "Identifier",
                                  "name": "radius"
                                },
                                "right": {
                                  "type": "BinaryExpression",
                                  "operator": "*",
                                  "left": {
                                    "type": "Identifier",
                                    "name": "direction"
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "name": "τ"
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
                                "type": "Identifier",
                                "name": "to"
                              },
                              "right": {
                                "type": "BinaryExpression",
                                "operator": "-",
                                "left": {
                                  "type": "Identifier",
                                  "name": "radius"
                                },
                                "right": {
                                  "type": "BinaryExpression",
                                  "operator": "*",
                                  "left": {
                                    "type": "Literal",
                                    "value": 0.5,
                                    "raw": ".5"
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "name": "step"
                                  }
                                }
                              }
                            }
                          }
                        ]
                      }
                    },
                    {
                      "type": "ForStatement",
                      "init": {
                        "type": "VariableDeclaration",
                        "declarations": [
                          {
                            "type": "VariableDeclarator",
                            "id": {
                              "type": "Identifier",
                              "name": "point"
                            },
                            "init": null
                          },
                          {
                            "type": "VariableDeclarator",
                            "id": {
                              "type": "Identifier",
                              "name": "t"
                            },
                            "init": {
                              "type": "Identifier",
                              "name": "from"
                            }
                          }
                        ],
                        "kind": "var"
                      },
                      "test": {
                        "type": "ConditionalExpression",
                        "test": {
                          "type": "BinaryExpression",
                          "operator": ">",
                          "left": {
                            "type": "Identifier",
                            "name": "direction"
                          },
                          "right": {
                            "type": "Literal",
                            "value": 0,
                            "raw": "0"
                          }
                        },
                        "consequent": {
                          "type": "BinaryExpression",
                          "operator": ">",
                          "left": {
                            "type": "Identifier",
                            "name": "t"
                          },
                          "right": {
                            "type": "Identifier",
                            "name": "to"
                          }
                        },
                        "alternate": {
                          "type": "BinaryExpression",
                          "operator": "<",
                          "left": {
                            "type": "Identifier",
                            "name": "t"
                          },
                          "right": {
                            "type": "Identifier",
                            "name": "to"
                          }
                        }
                      },
                      "update": {
                        "type": "AssignmentExpression",
                        "operator": "-=",
                        "left": {
                          "type": "Identifier",
                          "name": "t"
                        },
                        "right": {
                          "type": "Identifier",
                          "name": "step"
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
                                "type": "MemberExpression",
                                "computed": false,
                                "object": {
                                  "type": "Identifier",
                                  "name": "listener"
                                },
                                "property": {
                                  "type": "Identifier",
                                  "name": "point"
                                }
                              },
                              "arguments": [
                                {
                                  "type": "MemberExpression",
                                  "computed": true,
                                  "object": {
                                    "type": "AssignmentExpression",
                                    "operator": "=",
                                    "left": {
                                      "type": "Identifier",
                                      "name": "point"
                                    },
                                    "right": {
                                      "type": "CallExpression",
                                      "callee": {
                                        "type": "Identifier",
                                        "name": "d3_geo_spherical"
                                      },
                                      "arguments": [
                                        {
                                          "type": "ArrayExpression",
                                          "elements": [
                                            {
                                              "type": "Identifier",
                                              "name": "cr"
                                            },
                                            {
                                              "type": "BinaryExpression",
                                              "operator": "*",
                                              "left": {
                                                "type": "UnaryExpression",
                                                "operator": "-",
                                                "argument": {
                                                  "type": "Identifier",
                                                  "name": "sr"
                                                },
                                                "prefix": true
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
                                                    "name": "t"
                                                  }
                                                ]
                                              }
                                            },
                                            {
                                              "type": "BinaryExpression",
                                              "operator": "*",
                                              "left": {
                                                "type": "UnaryExpression",
                                                "operator": "-",
                                                "argument": {
                                                  "type": "Identifier",
                                                  "name": "sr"
                                                },
                                                "prefix": true
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
                                                    "name": "t"
                                                  }
                                                ]
                                              }
                                            }
                                          ]
                                        }
                                      ]
                                    }
                                  },
                                  "property": {
                                    "type": "Literal",
                                    "value": 0,
                                    "raw": "0"
                                  }
                                },
                                {
                                  "type": "MemberExpression",
                                  "computed": true,
                                  "object": {
                                    "type": "Identifier",
                                    "name": "point"
                                  },
                                  "property": {
                                    "type": "Literal",
                                    "value": 1,
                                    "raw": "1"
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
      },
      {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "name": "d3_geo_circleAngle"
        },
        "params": [
          {
            "type": "Identifier",
            "name": "cr"
          },
          {
            "type": "Identifier",
            "name": "point"
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
                    "name": "a"
                  },
                  "init": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "name": "d3_geo_cartesian"
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "name": "point"
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
                "operator": "-=",
                "left": {
                  "type": "MemberExpression",
                  "computed": true,
                  "object": {
                    "type": "Identifier",
                    "name": "a"
                  },
                  "property": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0"
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
                  "type": "Identifier",
                  "name": "d3_geo_cartesianNormalize"
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
              "type": "VariableDeclaration",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "name": "angle"
                  },
                  "init": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "name": "d3_acos"
                    },
                    "arguments": [
                      {
                        "type": "UnaryExpression",
                        "operator": "-",
                        "argument": {
                          "type": "MemberExpression",
                          "computed": true,
                          "object": {
                            "type": "Identifier",
                            "name": "a"
                          },
                          "property": {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1"
                          }
                        },
                        "prefix": true
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
                "type": "BinaryExpression",
                "operator": "%",
                "left": {
                  "type": "BinaryExpression",
                  "operator": "-",
                  "left": {
                    "type": "BinaryExpression",
                    "operator": "+",
                    "left": {
                      "type": "ConditionalExpression",
                      "test": {
                        "type": "BinaryExpression",
                        "operator": "<",
                        "left": {
                          "type": "UnaryExpression",
                          "operator": "-",
                          "argument": {
                            "type": "MemberExpression",
                            "computed": true,
                            "object": {
                              "type": "Identifier",
                              "name": "a"
                            },
                            "property": {
                              "type": "Literal",
                              "value": 2,
                              "raw": "2"
                            }
                          },
                          "prefix": true
                        },
                        "right": {
                          "type": "Literal",
                          "value": 0,
                          "raw": "0"
                        }
                      },
                      "consequent": {
                        "type": "UnaryExpression",
                        "operator": "-",
                        "argument": {
                          "type": "Identifier",
                          "name": "angle"
                        },
                        "prefix": true
                      },
                      "alternate": {
                        "type": "Identifier",
                        "name": "angle"
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
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "name": "Math"
                        },
                        "property": {
                          "type": "Identifier",
                          "name": "PI"
                        }
                      }
                    }
                  },
                  "right": {
                    "type": "Identifier",
                    "name": "ε"
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
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "name": "Math"
                    },
                    "property": {
                      "type": "Identifier",
                      "name": "PI"
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
  "src": "d3.geo.circle = function () {\n    var origin = [\n            0,\n            0\n        ], angle, precision = 6, interpolate;\n    function circle() {\n        var center = typeof origin === 'function' ? origin.apply(this, arguments) : origin, rotate = d3_geo_rotation(-center[0] * d3_radians, -center[1] * d3_radians, 0).invert, ring = [];\n        interpolate(null, null, 1, {\n            point: function (x, y) {\n                ring.push(x = rotate(x, y));\n                x[0] *= d3_degrees, x[1] *= d3_degrees;\n            }\n        });\n        return {\n            type: 'Polygon',\n            coordinates: [ring]\n        };\n    }\n    circle.origin = function (x) {\n        if (!arguments.length)\n            return origin;\n        origin = x;\n        return circle;\n    };\n    circle.angle = function (x) {\n        if (!arguments.length)\n            return angle;\n        interpolate = d3_geo_circleInterpolate((angle = +x) * d3_radians, precision * d3_radians);\n        return circle;\n    };\n    circle.precision = function (_) {\n        if (!arguments.length)\n            return precision;\n        interpolate = d3_geo_circleInterpolate(angle * d3_radians, (precision = +_) * d3_radians);\n        return circle;\n    };\n    return circle.angle(90);\n};\nfunction d3_geo_circleInterpolate(radius, precision) {\n    var cr = Math.cos(radius), sr = Math.sin(radius);\n    return function (from, to, direction, listener) {\n        var step = direction * precision;\n        if (from != null) {\n            from = d3_geo_circleAngle(cr, from);\n            to = d3_geo_circleAngle(cr, to);\n            if (direction > 0 ? from < to : from > to)\n                from += direction * τ;\n        } else {\n            from = radius + direction * τ;\n            to = radius - 0.5 * step;\n        }\n        for (var point, t = from; direction > 0 ? t > to : t < to; t -= step) {\n            listener.point((point = d3_geo_spherical([\n                cr,\n                -sr * Math.cos(t),\n                -sr * Math.sin(t)\n            ]))[0], point[1]);\n        }\n    };\n}\nfunction d3_geo_circleAngle(cr, point) {\n    var a = d3_geo_cartesian(point);\n    a[0] -= cr;\n    d3_geo_cartesianNormalize(a);\n    var angle = d3_acos(-a[1]);\n    return ((-a[2] < 0 ? -angle : angle) + 2 * Math.PI - ε) % (2 * Math.PI);\n}"
}