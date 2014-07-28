{
  "filepath": "/geo/clip-circle.js",
  "shared": [],
  "dependencies": [
    "abs",
    "d3_geo_circleInterpolate",
    "d3_radians",
    "d3_geo_clip",
    "d3_geo_sphericalEqual",
    "d3_geo_cartesian",
    "d3_geo_cartesianCross",
    "d3_geo_cartesianDot",
    "d3_geo_cartesianScale",
    "d3_geo_cartesianAdd",
    "d3_geo_spherical"
  ],
  "helpers": [
    "d3_geo_clipCircle"
  ],
  "exports": [],
  "ast": {
    "type": "Program",
    "body": [
      {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "name": "d3_geo_clipCircle"
        },
        "params": [
          {
            "type": "Identifier",
            "name": "radius"
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
                    "name": "smallRadius"
                  },
                  "init": {
                    "type": "BinaryExpression",
                    "operator": ">",
                    "left": {
                      "type": "Identifier",
                      "name": "cr"
                    },
                    "right": {
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
                    "name": "notHemisphere"
                  },
                  "init": {
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
                          "type": "Identifier",
                          "name": "cr"
                        }
                      ]
                    },
                    "right": {
                      "type": "Identifier",
                      "name": "ε"
                    }
                  }
                },
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "name": "interpolate"
                  },
                  "init": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "name": "d3_geo_circleInterpolate"
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "name": "radius"
                      },
                      {
                        "type": "BinaryExpression",
                        "operator": "*",
                        "left": {
                          "type": "Literal",
                          "value": 6,
                          "raw": "6"
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
              "type": "ReturnStatement",
              "argument": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "name": "d3_geo_clip"
                },
                "arguments": [
                  {
                    "type": "Identifier",
                    "name": "visible"
                  },
                  {
                    "type": "Identifier",
                    "name": "clipLine"
                  },
                  {
                    "type": "Identifier",
                    "name": "interpolate"
                  },
                  {
                    "type": "ConditionalExpression",
                    "test": {
                      "type": "Identifier",
                      "name": "smallRadius"
                    },
                    "consequent": {
                      "type": "ArrayExpression",
                      "elements": [
                        {
                          "type": "Literal",
                          "value": 0,
                          "raw": "0"
                        },
                        {
                          "type": "UnaryExpression",
                          "operator": "-",
                          "argument": {
                            "type": "Identifier",
                            "name": "radius"
                          },
                          "prefix": true
                        }
                      ]
                    },
                    "alternate": {
                      "type": "ArrayExpression",
                      "elements": [
                        {
                          "type": "UnaryExpression",
                          "operator": "-",
                          "argument": {
                            "type": "Identifier",
                            "name": "π"
                          },
                          "prefix": true
                        },
                        {
                          "type": "BinaryExpression",
                          "operator": "-",
                          "left": {
                            "type": "Identifier",
                            "name": "radius"
                          },
                          "right": {
                            "type": "Identifier",
                            "name": "π"
                          }
                        }
                      ]
                    }
                  }
                ]
              }
            },
            {
              "type": "FunctionDeclaration",
              "id": {
                "type": "Identifier",
                "name": "visible"
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
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "BinaryExpression",
                      "operator": ">",
                      "left": {
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
                              "name": "cos"
                            }
                          },
                          "arguments": [
                            {
                              "type": "Identifier",
                              "name": "λ"
                            }
                          ]
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
                              "name": "φ"
                            }
                          ]
                        }
                      },
                      "right": {
                        "type": "Identifier",
                        "name": "cr"
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
                "name": "clipLine"
              },
              "params": [
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
                          "name": "point0"
                        },
                        "init": null
                      },
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "name": "c0"
                        },
                        "init": null
                      },
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "name": "v0"
                        },
                        "init": null
                      },
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "name": "v00"
                        },
                        "init": null
                      },
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "name": "clean"
                        },
                        "init": null
                      }
                    ],
                    "kind": "var"
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
                            "name": "lineStart"
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
                                      "type": "Identifier",
                                      "name": "v00"
                                    },
                                    "right": {
                                      "type": "AssignmentExpression",
                                      "operator": "=",
                                      "left": {
                                        "type": "Identifier",
                                        "name": "v0"
                                      },
                                      "right": {
                                        "type": "Literal",
                                        "value": false,
                                        "raw": "false"
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
                                      "name": "clean"
                                    },
                                    "right": {
                                      "type": "Literal",
                                      "value": 1,
                                      "raw": "1"
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
                            "name": "point"
                          },
                          "value": {
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
                                  "type": "VariableDeclaration",
                                  "declarations": [
                                    {
                                      "type": "VariableDeclarator",
                                      "id": {
                                        "type": "Identifier",
                                        "name": "point1"
                                      },
                                      "init": {
                                        "type": "ArrayExpression",
                                        "elements": [
                                          {
                                            "type": "Identifier",
                                            "name": "λ"
                                          },
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
                                        "name": "point2"
                                      },
                                      "init": null
                                    },
                                    {
                                      "type": "VariableDeclarator",
                                      "id": {
                                        "type": "Identifier",
                                        "name": "v"
                                      },
                                      "init": {
                                        "type": "CallExpression",
                                        "callee": {
                                          "type": "Identifier",
                                          "name": "visible"
                                        },
                                        "arguments": [
                                          {
                                            "type": "Identifier",
                                            "name": "λ"
                                          },
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
                                        "name": "c"
                                      },
                                      "init": {
                                        "type": "ConditionalExpression",
                                        "test": {
                                          "type": "Identifier",
                                          "name": "smallRadius"
                                        },
                                        "consequent": {
                                          "type": "ConditionalExpression",
                                          "test": {
                                            "type": "Identifier",
                                            "name": "v"
                                          },
                                          "consequent": {
                                            "type": "Literal",
                                            "value": 0,
                                            "raw": "0"
                                          },
                                          "alternate": {
                                            "type": "CallExpression",
                                            "callee": {
                                              "type": "Identifier",
                                              "name": "code"
                                            },
                                            "arguments": [
                                              {
                                                "type": "Identifier",
                                                "name": "λ"
                                              },
                                              {
                                                "type": "Identifier",
                                                "name": "φ"
                                              }
                                            ]
                                          }
                                        },
                                        "alternate": {
                                          "type": "ConditionalExpression",
                                          "test": {
                                            "type": "Identifier",
                                            "name": "v"
                                          },
                                          "consequent": {
                                            "type": "CallExpression",
                                            "callee": {
                                              "type": "Identifier",
                                              "name": "code"
                                            },
                                            "arguments": [
                                              {
                                                "type": "BinaryExpression",
                                                "operator": "+",
                                                "left": {
                                                  "type": "Identifier",
                                                  "name": "λ"
                                                },
                                                "right": {
                                                  "type": "ConditionalExpression",
                                                  "test": {
                                                    "type": "BinaryExpression",
                                                    "operator": "<",
                                                    "left": {
                                                      "type": "Identifier",
                                                      "name": "λ"
                                                    },
                                                    "right": {
                                                      "type": "Literal",
                                                      "value": 0,
                                                      "raw": "0"
                                                    }
                                                  },
                                                  "consequent": {
                                                    "type": "Identifier",
                                                    "name": "π"
                                                  },
                                                  "alternate": {
                                                    "type": "UnaryExpression",
                                                    "operator": "-",
                                                    "argument": {
                                                      "type": "Identifier",
                                                      "name": "π"
                                                    },
                                                    "prefix": true
                                                  }
                                                }
                                              },
                                              {
                                                "type": "Identifier",
                                                "name": "φ"
                                              }
                                            ]
                                          },
                                          "alternate": {
                                            "type": "Literal",
                                            "value": 0,
                                            "raw": "0"
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
                                      "type": "UnaryExpression",
                                      "operator": "!",
                                      "argument": {
                                        "type": "Identifier",
                                        "name": "point0"
                                      },
                                      "prefix": true
                                    },
                                    "right": {
                                      "type": "AssignmentExpression",
                                      "operator": "=",
                                      "left": {
                                        "type": "Identifier",
                                        "name": "v00"
                                      },
                                      "right": {
                                        "type": "AssignmentExpression",
                                        "operator": "=",
                                        "left": {
                                          "type": "Identifier",
                                          "name": "v0"
                                        },
                                        "right": {
                                          "type": "Identifier",
                                          "name": "v"
                                        }
                                      }
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
                                          "name": "listener"
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "name": "lineStart"
                                        }
                                      },
                                      "arguments": []
                                    }
                                  },
                                  "alternate": null
                                },
                                {
                                  "type": "IfStatement",
                                  "test": {
                                    "type": "BinaryExpression",
                                    "operator": "!==",
                                    "left": {
                                      "type": "Identifier",
                                      "name": "v"
                                    },
                                    "right": {
                                      "type": "Identifier",
                                      "name": "v0"
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
                                            "name": "point2"
                                          },
                                          "right": {
                                            "type": "CallExpression",
                                            "callee": {
                                              "type": "Identifier",
                                              "name": "intersect"
                                            },
                                            "arguments": [
                                              {
                                                "type": "Identifier",
                                                "name": "point0"
                                              },
                                              {
                                                "type": "Identifier",
                                                "name": "point1"
                                              }
                                            ]
                                          }
                                        }
                                      },
                                      {
                                        "type": "IfStatement",
                                        "test": {
                                          "type": "LogicalExpression",
                                          "operator": "||",
                                          "left": {
                                            "type": "CallExpression",
                                            "callee": {
                                              "type": "Identifier",
                                              "name": "d3_geo_sphericalEqual"
                                            },
                                            "arguments": [
                                              {
                                                "type": "Identifier",
                                                "name": "point0"
                                              },
                                              {
                                                "type": "Identifier",
                                                "name": "point2"
                                              }
                                            ]
                                          },
                                          "right": {
                                            "type": "CallExpression",
                                            "callee": {
                                              "type": "Identifier",
                                              "name": "d3_geo_sphericalEqual"
                                            },
                                            "arguments": [
                                              {
                                                "type": "Identifier",
                                                "name": "point1"
                                              },
                                              {
                                                "type": "Identifier",
                                                "name": "point2"
                                              }
                                            ]
                                          }
                                        },
                                        "consequent": {
                                          "type": "BlockStatement",
                                          "body": [
                                            {
                                              "type": "ExpressionStatement",
                                              "expression": {
                                                "type": "AssignmentExpression",
                                                "operator": "+=",
                                                "left": {
                                                  "type": "MemberExpression",
                                                  "computed": true,
                                                  "object": {
                                                    "type": "Identifier",
                                                    "name": "point1"
                                                  },
                                                  "property": {
                                                    "type": "Literal",
                                                    "value": 0,
                                                    "raw": "0"
                                                  }
                                                },
                                                "right": {
                                                  "type": "Identifier",
                                                  "name": "ε"
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
                                                  "computed": true,
                                                  "object": {
                                                    "type": "Identifier",
                                                    "name": "point1"
                                                  },
                                                  "property": {
                                                    "type": "Literal",
                                                    "value": 1,
                                                    "raw": "1"
                                                  }
                                                },
                                                "right": {
                                                  "type": "Identifier",
                                                  "name": "ε"
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
                                                  "name": "v"
                                                },
                                                "right": {
                                                  "type": "CallExpression",
                                                  "callee": {
                                                    "type": "Identifier",
                                                    "name": "visible"
                                                  },
                                                  "arguments": [
                                                    {
                                                      "type": "MemberExpression",
                                                      "computed": true,
                                                      "object": {
                                                        "type": "Identifier",
                                                        "name": "point1"
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
                                                        "name": "point1"
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
                                  "type": "IfStatement",
                                  "test": {
                                    "type": "BinaryExpression",
                                    "operator": "!==",
                                    "left": {
                                      "type": "Identifier",
                                      "name": "v"
                                    },
                                    "right": {
                                      "type": "Identifier",
                                      "name": "v0"
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
                                            "name": "clean"
                                          },
                                          "right": {
                                            "type": "Literal",
                                            "value": 0,
                                            "raw": "0"
                                          }
                                        }
                                      },
                                      {
                                        "type": "IfStatement",
                                        "test": {
                                          "type": "Identifier",
                                          "name": "v"
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
                                                    "name": "listener"
                                                  },
                                                  "property": {
                                                    "type": "Identifier",
                                                    "name": "lineStart"
                                                  }
                                                },
                                                "arguments": []
                                              }
                                            },
                                            {
                                              "type": "ExpressionStatement",
                                              "expression": {
                                                "type": "AssignmentExpression",
                                                "operator": "=",
                                                "left": {
                                                  "type": "Identifier",
                                                  "name": "point2"
                                                },
                                                "right": {
                                                  "type": "CallExpression",
                                                  "callee": {
                                                    "type": "Identifier",
                                                    "name": "intersect"
                                                  },
                                                  "arguments": [
                                                    {
                                                      "type": "Identifier",
                                                      "name": "point1"
                                                    },
                                                    {
                                                      "type": "Identifier",
                                                      "name": "point0"
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
                                                      "type": "Identifier",
                                                      "name": "point2"
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
                                                      "name": "point2"
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
                                                  "name": "point2"
                                                },
                                                "right": {
                                                  "type": "CallExpression",
                                                  "callee": {
                                                    "type": "Identifier",
                                                    "name": "intersect"
                                                  },
                                                  "arguments": [
                                                    {
                                                      "type": "Identifier",
                                                      "name": "point0"
                                                    },
                                                    {
                                                      "type": "Identifier",
                                                      "name": "point1"
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
                                                      "type": "Identifier",
                                                      "name": "point2"
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
                                                      "name": "point2"
                                                    },
                                                    "property": {
                                                      "type": "Literal",
                                                      "value": 1,
                                                      "raw": "1"
                                                    }
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
                                                    "name": "listener"
                                                  },
                                                  "property": {
                                                    "type": "Identifier",
                                                    "name": "lineEnd"
                                                  }
                                                },
                                                "arguments": []
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
                                            "type": "Identifier",
                                            "name": "point0"
                                          },
                                          "right": {
                                            "type": "Identifier",
                                            "name": "point2"
                                          }
                                        }
                                      }
                                    ]
                                  },
                                  "alternate": {
                                    "type": "IfStatement",
                                    "test": {
                                      "type": "LogicalExpression",
                                      "operator": "&&",
                                      "left": {
                                        "type": "LogicalExpression",
                                        "operator": "&&",
                                        "left": {
                                          "type": "Identifier",
                                          "name": "notHemisphere"
                                        },
                                        "right": {
                                          "type": "Identifier",
                                          "name": "point0"
                                        }
                                      },
                                      "right": {
                                        "type": "BinaryExpression",
                                        "operator": "^",
                                        "left": {
                                          "type": "Identifier",
                                          "name": "smallRadius"
                                        },
                                        "right": {
                                          "type": "Identifier",
                                          "name": "v"
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
                                                "name": "t"
                                              },
                                              "init": null
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
                                              "type": "UnaryExpression",
                                              "operator": "!",
                                              "argument": {
                                                "type": "BinaryExpression",
                                                "operator": "&",
                                                "left": {
                                                  "type": "Identifier",
                                                  "name": "c"
                                                },
                                                "right": {
                                                  "type": "Identifier",
                                                  "name": "c0"
                                                }
                                              },
                                              "prefix": true
                                            },
                                            "right": {
                                              "type": "AssignmentExpression",
                                              "operator": "=",
                                              "left": {
                                                "type": "Identifier",
                                                "name": "t"
                                              },
                                              "right": {
                                                "type": "CallExpression",
                                                "callee": {
                                                  "type": "Identifier",
                                                  "name": "intersect"
                                                },
                                                "arguments": [
                                                  {
                                                    "type": "Identifier",
                                                    "name": "point1"
                                                  },
                                                  {
                                                    "type": "Identifier",
                                                    "name": "point0"
                                                  },
                                                  {
                                                    "type": "Literal",
                                                    "value": true,
                                                    "raw": "true"
                                                  }
                                                ]
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
                                                    "type": "Identifier",
                                                    "name": "clean"
                                                  },
                                                  "right": {
                                                    "type": "Literal",
                                                    "value": 0,
                                                    "raw": "0"
                                                  }
                                                }
                                              },
                                              {
                                                "type": "IfStatement",
                                                "test": {
                                                  "type": "Identifier",
                                                  "name": "smallRadius"
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
                                                            "name": "listener"
                                                          },
                                                          "property": {
                                                            "type": "Identifier",
                                                            "name": "lineStart"
                                                          }
                                                        },
                                                        "arguments": []
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
                                                              "type": "MemberExpression",
                                                              "computed": true,
                                                              "object": {
                                                                "type": "Identifier",
                                                                "name": "t"
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
                                                          },
                                                          {
                                                            "type": "MemberExpression",
                                                            "computed": true,
                                                            "object": {
                                                              "type": "MemberExpression",
                                                              "computed": true,
                                                              "object": {
                                                                "type": "Identifier",
                                                                "name": "t"
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
                                                              "type": "MemberExpression",
                                                              "computed": true,
                                                              "object": {
                                                                "type": "Identifier",
                                                                "name": "t"
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
                                                          },
                                                          {
                                                            "type": "MemberExpression",
                                                            "computed": true,
                                                            "object": {
                                                              "type": "MemberExpression",
                                                              "computed": true,
                                                              "object": {
                                                                "type": "Identifier",
                                                                "name": "t"
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
                                                            "name": "listener"
                                                          },
                                                          "property": {
                                                            "type": "Identifier",
                                                            "name": "lineEnd"
                                                          }
                                                        },
                                                        "arguments": []
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
                                                              "type": "MemberExpression",
                                                              "computed": true,
                                                              "object": {
                                                                "type": "Identifier",
                                                                "name": "t"
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
                                                          },
                                                          {
                                                            "type": "MemberExpression",
                                                            "computed": true,
                                                            "object": {
                                                              "type": "MemberExpression",
                                                              "computed": true,
                                                              "object": {
                                                                "type": "Identifier",
                                                                "name": "t"
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
                                                            "name": "listener"
                                                          },
                                                          "property": {
                                                            "type": "Identifier",
                                                            "name": "lineEnd"
                                                          }
                                                        },
                                                        "arguments": []
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
                                                            "name": "listener"
                                                          },
                                                          "property": {
                                                            "type": "Identifier",
                                                            "name": "lineStart"
                                                          }
                                                        },
                                                        "arguments": []
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
                                                              "type": "MemberExpression",
                                                              "computed": true,
                                                              "object": {
                                                                "type": "Identifier",
                                                                "name": "t"
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
                                                          },
                                                          {
                                                            "type": "MemberExpression",
                                                            "computed": true,
                                                            "object": {
                                                              "type": "MemberExpression",
                                                              "computed": true,
                                                              "object": {
                                                                "type": "Identifier",
                                                                "name": "t"
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
                                  }
                                },
                                {
                                  "type": "IfStatement",
                                  "test": {
                                    "type": "LogicalExpression",
                                    "operator": "&&",
                                    "left": {
                                      "type": "Identifier",
                                      "name": "v"
                                    },
                                    "right": {
                                      "type": "LogicalExpression",
                                      "operator": "||",
                                      "left": {
                                        "type": "UnaryExpression",
                                        "operator": "!",
                                        "argument": {
                                          "type": "Identifier",
                                          "name": "point0"
                                        },
                                        "prefix": true
                                      },
                                      "right": {
                                        "type": "UnaryExpression",
                                        "operator": "!",
                                        "argument": {
                                          "type": "CallExpression",
                                          "callee": {
                                            "type": "Identifier",
                                            "name": "d3_geo_sphericalEqual"
                                          },
                                          "arguments": [
                                            {
                                              "type": "Identifier",
                                              "name": "point0"
                                            },
                                            {
                                              "type": "Identifier",
                                              "name": "point1"
                                            }
                                          ]
                                        },
                                        "prefix": true
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
                                                "type": "Identifier",
                                                "name": "point1"
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
                                                "name": "point1"
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
                                  },
                                  "alternate": null
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
                                          "name": "point0"
                                        },
                                        "right": {
                                          "type": "Identifier",
                                          "name": "point1"
                                        }
                                      },
                                      {
                                        "type": "AssignmentExpression",
                                        "operator": "=",
                                        "left": {
                                          "type": "Identifier",
                                          "name": "v0"
                                        },
                                        "right": {
                                          "type": "Identifier",
                                          "name": "v"
                                        }
                                      },
                                      {
                                        "type": "AssignmentExpression",
                                        "operator": "=",
                                        "left": {
                                          "type": "Identifier",
                                          "name": "c0"
                                        },
                                        "right": {
                                          "type": "Identifier",
                                          "name": "c"
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
                        },
                        {
                          "type": "Property",
                          "key": {
                            "type": "Identifier",
                            "name": "lineEnd"
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
                                  "type": "IfStatement",
                                  "test": {
                                    "type": "Identifier",
                                    "name": "v0"
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
                                          "name": "listener"
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "name": "lineEnd"
                                        }
                                      },
                                      "arguments": []
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
                                      "name": "point0"
                                    },
                                    "right": {
                                      "type": "Literal",
                                      "value": null,
                                      "raw": "null"
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
                            "name": "clean"
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
                                  "type": "ReturnStatement",
                                  "argument": {
                                    "type": "BinaryExpression",
                                    "operator": "|",
                                    "left": {
                                      "type": "Identifier",
                                      "name": "clean"
                                    },
                                    "right": {
                                      "type": "BinaryExpression",
                                      "operator": "<<",
                                      "left": {
                                        "type": "LogicalExpression",
                                        "operator": "&&",
                                        "left": {
                                          "type": "Identifier",
                                          "name": "v00"
                                        },
                                        "right": {
                                          "type": "Identifier",
                                          "name": "v0"
                                        }
                                      },
                                      "right": {
                                        "type": "Literal",
                                        "value": 1,
                                        "raw": "1"
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
              "type": "FunctionDeclaration",
              "id": {
                "type": "Identifier",
                "name": "intersect"
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
                  "name": "two"
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
                          "name": "pa"
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
                              "name": "a"
                            }
                          ]
                        }
                      },
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "name": "pb"
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
                              "name": "b"
                            }
                          ]
                        }
                      }
                    ],
                    "kind": "var"
                  },
                  {
                    "type": "VariableDeclaration",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "name": "n1"
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
                          "name": "n2"
                        },
                        "init": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "Identifier",
                            "name": "d3_geo_cartesianCross"
                          },
                          "arguments": [
                            {
                              "type": "Identifier",
                              "name": "pa"
                            },
                            {
                              "type": "Identifier",
                              "name": "pb"
                            }
                          ]
                        }
                      },
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "name": "n2n2"
                        },
                        "init": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "Identifier",
                            "name": "d3_geo_cartesianDot"
                          },
                          "arguments": [
                            {
                              "type": "Identifier",
                              "name": "n2"
                            },
                            {
                              "type": "Identifier",
                              "name": "n2"
                            }
                          ]
                        }
                      },
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "name": "n1n2"
                        },
                        "init": {
                          "type": "MemberExpression",
                          "computed": true,
                          "object": {
                            "type": "Identifier",
                            "name": "n2"
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
                          "name": "determinant"
                        },
                        "init": {
                          "type": "BinaryExpression",
                          "operator": "-",
                          "left": {
                            "type": "Identifier",
                            "name": "n2n2"
                          },
                          "right": {
                            "type": "BinaryExpression",
                            "operator": "*",
                            "left": {
                              "type": "Identifier",
                              "name": "n1n2"
                            },
                            "right": {
                              "type": "Identifier",
                              "name": "n1n2"
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
                      "type": "UnaryExpression",
                      "operator": "!",
                      "argument": {
                        "type": "Identifier",
                        "name": "determinant"
                      },
                      "prefix": true
                    },
                    "consequent": {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "LogicalExpression",
                        "operator": "&&",
                        "left": {
                          "type": "UnaryExpression",
                          "operator": "!",
                          "argument": {
                            "type": "Identifier",
                            "name": "two"
                          },
                          "prefix": true
                        },
                        "right": {
                          "type": "Identifier",
                          "name": "a"
                        }
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
                          "name": "c1"
                        },
                        "init": {
                          "type": "BinaryExpression",
                          "operator": "/",
                          "left": {
                            "type": "BinaryExpression",
                            "operator": "*",
                            "left": {
                              "type": "Identifier",
                              "name": "cr"
                            },
                            "right": {
                              "type": "Identifier",
                              "name": "n2n2"
                            }
                          },
                          "right": {
                            "type": "Identifier",
                            "name": "determinant"
                          }
                        }
                      },
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "name": "c2"
                        },
                        "init": {
                          "type": "BinaryExpression",
                          "operator": "/",
                          "left": {
                            "type": "BinaryExpression",
                            "operator": "*",
                            "left": {
                              "type": "UnaryExpression",
                              "operator": "-",
                              "argument": {
                                "type": "Identifier",
                                "name": "cr"
                              },
                              "prefix": true
                            },
                            "right": {
                              "type": "Identifier",
                              "name": "n1n2"
                            }
                          },
                          "right": {
                            "type": "Identifier",
                            "name": "determinant"
                          }
                        }
                      },
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "name": "n1xn2"
                        },
                        "init": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "Identifier",
                            "name": "d3_geo_cartesianCross"
                          },
                          "arguments": [
                            {
                              "type": "Identifier",
                              "name": "n1"
                            },
                            {
                              "type": "Identifier",
                              "name": "n2"
                            }
                          ]
                        }
                      },
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "name": "A"
                        },
                        "init": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "Identifier",
                            "name": "d3_geo_cartesianScale"
                          },
                          "arguments": [
                            {
                              "type": "Identifier",
                              "name": "n1"
                            },
                            {
                              "type": "Identifier",
                              "name": "c1"
                            }
                          ]
                        }
                      },
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "name": "B"
                        },
                        "init": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "Identifier",
                            "name": "d3_geo_cartesianScale"
                          },
                          "arguments": [
                            {
                              "type": "Identifier",
                              "name": "n2"
                            },
                            {
                              "type": "Identifier",
                              "name": "c2"
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
                        "name": "d3_geo_cartesianAdd"
                      },
                      "arguments": [
                        {
                          "type": "Identifier",
                          "name": "A"
                        },
                        {
                          "type": "Identifier",
                          "name": "B"
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
                          "name": "u"
                        },
                        "init": {
                          "type": "Identifier",
                          "name": "n1xn2"
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
                            "type": "Identifier",
                            "name": "d3_geo_cartesianDot"
                          },
                          "arguments": [
                            {
                              "type": "Identifier",
                              "name": "A"
                            },
                            {
                              "type": "Identifier",
                              "name": "u"
                            }
                          ]
                        }
                      },
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "name": "uu"
                        },
                        "init": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "Identifier",
                            "name": "d3_geo_cartesianDot"
                          },
                          "arguments": [
                            {
                              "type": "Identifier",
                              "name": "u"
                            },
                            {
                              "type": "Identifier",
                              "name": "u"
                            }
                          ]
                        }
                      },
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "name": "t2"
                        },
                        "init": {
                          "type": "BinaryExpression",
                          "operator": "-",
                          "left": {
                            "type": "BinaryExpression",
                            "operator": "*",
                            "left": {
                              "type": "Identifier",
                              "name": "w"
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
                              "type": "Identifier",
                              "name": "uu"
                            },
                            "right": {
                              "type": "BinaryExpression",
                              "operator": "-",
                              "left": {
                                "type": "CallExpression",
                                "callee": {
                                  "type": "Identifier",
                                  "name": "d3_geo_cartesianDot"
                                },
                                "arguments": [
                                  {
                                    "type": "Identifier",
                                    "name": "A"
                                  },
                                  {
                                    "type": "Identifier",
                                    "name": "A"
                                  }
                                ]
                              },
                              "right": {
                                "type": "Literal",
                                "value": 1,
                                "raw": "1"
                              }
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
                        "name": "t2"
                      },
                      "right": {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0"
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
                          "name": "t"
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
                              "type": "Identifier",
                              "name": "t2"
                            }
                          ]
                        }
                      },
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "name": "q"
                        },
                        "init": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "Identifier",
                            "name": "d3_geo_cartesianScale"
                          },
                          "arguments": [
                            {
                              "type": "Identifier",
                              "name": "u"
                            },
                            {
                              "type": "BinaryExpression",
                              "operator": "/",
                              "left": {
                                "type": "BinaryExpression",
                                "operator": "-",
                                "left": {
                                  "type": "UnaryExpression",
                                  "operator": "-",
                                  "argument": {
                                    "type": "Identifier",
                                    "name": "w"
                                  },
                                  "prefix": true
                                },
                                "right": {
                                  "type": "Identifier",
                                  "name": "t"
                                }
                              },
                              "right": {
                                "type": "Identifier",
                                "name": "uu"
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
                        "name": "d3_geo_cartesianAdd"
                      },
                      "arguments": [
                        {
                          "type": "Identifier",
                          "name": "q"
                        },
                        {
                          "type": "Identifier",
                          "name": "A"
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
                        "name": "q"
                      },
                      "right": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "Identifier",
                          "name": "d3_geo_spherical"
                        },
                        "arguments": [
                          {
                            "type": "Identifier",
                            "name": "q"
                          }
                        ]
                      }
                    }
                  },
                  {
                    "type": "IfStatement",
                    "test": {
                      "type": "UnaryExpression",
                      "operator": "!",
                      "argument": {
                        "type": "Identifier",
                        "name": "two"
                      },
                      "prefix": true
                    },
                    "consequent": {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "Identifier",
                        "name": "q"
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
                          "name": "λ0"
                        },
                        "init": {
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
                        }
                      },
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "name": "λ1"
                        },
                        "init": {
                          "type": "MemberExpression",
                          "computed": true,
                          "object": {
                            "type": "Identifier",
                            "name": "b"
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
                          "name": "φ0"
                        },
                        "init": {
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
                        }
                      },
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "name": "φ1"
                        },
                        "init": {
                          "type": "MemberExpression",
                          "computed": true,
                          "object": {
                            "type": "Identifier",
                            "name": "b"
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
                          "name": "z"
                        },
                        "init": null
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
                        "name": "λ1"
                      },
                      "right": {
                        "type": "Identifier",
                        "name": "λ0"
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
                              "name": "z"
                            },
                            "right": {
                              "type": "Identifier",
                              "name": "λ0"
                            }
                          },
                          {
                            "type": "AssignmentExpression",
                            "operator": "=",
                            "left": {
                              "type": "Identifier",
                              "name": "λ0"
                            },
                            "right": {
                              "type": "Identifier",
                              "name": "λ1"
                            }
                          },
                          {
                            "type": "AssignmentExpression",
                            "operator": "=",
                            "left": {
                              "type": "Identifier",
                              "name": "λ1"
                            },
                            "right": {
                              "type": "Identifier",
                              "name": "z"
                            }
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
                          "name": "δλ"
                        },
                        "init": {
                          "type": "BinaryExpression",
                          "operator": "-",
                          "left": {
                            "type": "Identifier",
                            "name": "λ1"
                          },
                          "right": {
                            "type": "Identifier",
                            "name": "λ0"
                          }
                        }
                      },
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "name": "polar"
                        },
                        "init": {
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
                                  "name": "δλ"
                                },
                                "right": {
                                  "type": "Identifier",
                                  "name": "π"
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
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "name": "meridian"
                        },
                        "init": {
                          "type": "LogicalExpression",
                          "operator": "||",
                          "left": {
                            "type": "Identifier",
                            "name": "polar"
                          },
                          "right": {
                            "type": "BinaryExpression",
                            "operator": "<",
                            "left": {
                              "type": "Identifier",
                              "name": "δλ"
                            },
                            "right": {
                              "type": "Identifier",
                              "name": "ε"
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
                        "type": "UnaryExpression",
                        "operator": "!",
                        "argument": {
                          "type": "Identifier",
                          "name": "polar"
                        },
                        "prefix": true
                      },
                      "right": {
                        "type": "BinaryExpression",
                        "operator": "<",
                        "left": {
                          "type": "Identifier",
                          "name": "φ1"
                        },
                        "right": {
                          "type": "Identifier",
                          "name": "φ0"
                        }
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
                              "name": "z"
                            },
                            "right": {
                              "type": "Identifier",
                              "name": "φ0"
                            }
                          },
                          {
                            "type": "AssignmentExpression",
                            "operator": "=",
                            "left": {
                              "type": "Identifier",
                              "name": "φ0"
                            },
                            "right": {
                              "type": "Identifier",
                              "name": "φ1"
                            }
                          },
                          {
                            "type": "AssignmentExpression",
                            "operator": "=",
                            "left": {
                              "type": "Identifier",
                              "name": "φ1"
                            },
                            "right": {
                              "type": "Identifier",
                              "name": "z"
                            }
                          }
                        ]
                      }
                    },
                    "alternate": null
                  },
                  {
                    "type": "IfStatement",
                    "test": {
                      "type": "ConditionalExpression",
                      "test": {
                        "type": "Identifier",
                        "name": "meridian"
                      },
                      "consequent": {
                        "type": "ConditionalExpression",
                        "test": {
                          "type": "Identifier",
                          "name": "polar"
                        },
                        "consequent": {
                          "type": "BinaryExpression",
                          "operator": "^",
                          "left": {
                            "type": "BinaryExpression",
                            "operator": ">",
                            "left": {
                              "type": "BinaryExpression",
                              "operator": "+",
                              "left": {
                                "type": "Identifier",
                                "name": "φ0"
                              },
                              "right": {
                                "type": "Identifier",
                                "name": "φ1"
                              }
                            },
                            "right": {
                              "type": "Literal",
                              "value": 0,
                              "raw": "0"
                            }
                          },
                          "right": {
                            "type": "BinaryExpression",
                            "operator": "<",
                            "left": {
                              "type": "MemberExpression",
                              "computed": true,
                              "object": {
                                "type": "Identifier",
                                "name": "q"
                              },
                              "property": {
                                "type": "Literal",
                                "value": 1,
                                "raw": "1"
                              }
                            },
                            "right": {
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
                                        "type": "MemberExpression",
                                        "computed": true,
                                        "object": {
                                          "type": "Identifier",
                                          "name": "q"
                                        },
                                        "property": {
                                          "type": "Literal",
                                          "value": 0,
                                          "raw": "0"
                                        }
                                      },
                                      "right": {
                                        "type": "Identifier",
                                        "name": "λ0"
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
                                "name": "φ0"
                              },
                              "alternate": {
                                "type": "Identifier",
                                "name": "φ1"
                              }
                            }
                          }
                        },
                        "alternate": {
                          "type": "LogicalExpression",
                          "operator": "&&",
                          "left": {
                            "type": "BinaryExpression",
                            "operator": "<=",
                            "left": {
                              "type": "Identifier",
                              "name": "φ0"
                            },
                            "right": {
                              "type": "MemberExpression",
                              "computed": true,
                              "object": {
                                "type": "Identifier",
                                "name": "q"
                              },
                              "property": {
                                "type": "Literal",
                                "value": 1,
                                "raw": "1"
                              }
                            }
                          },
                          "right": {
                            "type": "BinaryExpression",
                            "operator": "<=",
                            "left": {
                              "type": "MemberExpression",
                              "computed": true,
                              "object": {
                                "type": "Identifier",
                                "name": "q"
                              },
                              "property": {
                                "type": "Literal",
                                "value": 1,
                                "raw": "1"
                              }
                            },
                            "right": {
                              "type": "Identifier",
                              "name": "φ1"
                            }
                          }
                        }
                      },
                      "alternate": {
                        "type": "BinaryExpression",
                        "operator": "^",
                        "left": {
                          "type": "BinaryExpression",
                          "operator": ">",
                          "left": {
                            "type": "Identifier",
                            "name": "δλ"
                          },
                          "right": {
                            "type": "Identifier",
                            "name": "π"
                          }
                        },
                        "right": {
                          "type": "LogicalExpression",
                          "operator": "&&",
                          "left": {
                            "type": "BinaryExpression",
                            "operator": "<=",
                            "left": {
                              "type": "Identifier",
                              "name": "λ0"
                            },
                            "right": {
                              "type": "MemberExpression",
                              "computed": true,
                              "object": {
                                "type": "Identifier",
                                "name": "q"
                              },
                              "property": {
                                "type": "Literal",
                                "value": 0,
                                "raw": "0"
                              }
                            }
                          },
                          "right": {
                            "type": "BinaryExpression",
                            "operator": "<=",
                            "left": {
                              "type": "MemberExpression",
                              "computed": true,
                              "object": {
                                "type": "Identifier",
                                "name": "q"
                              },
                              "property": {
                                "type": "Literal",
                                "value": 0,
                                "raw": "0"
                              }
                            },
                            "right": {
                              "type": "Identifier",
                              "name": "λ1"
                            }
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
                                "name": "q1"
                              },
                              "init": {
                                "type": "CallExpression",
                                "callee": {
                                  "type": "Identifier",
                                  "name": "d3_geo_cartesianScale"
                                },
                                "arguments": [
                                  {
                                    "type": "Identifier",
                                    "name": "u"
                                  },
                                  {
                                    "type": "BinaryExpression",
                                    "operator": "/",
                                    "left": {
                                      "type": "BinaryExpression",
                                      "operator": "+",
                                      "left": {
                                        "type": "UnaryExpression",
                                        "operator": "-",
                                        "argument": {
                                          "type": "Identifier",
                                          "name": "w"
                                        },
                                        "prefix": true
                                      },
                                      "right": {
                                        "type": "Identifier",
                                        "name": "t"
                                      }
                                    },
                                    "right": {
                                      "type": "Identifier",
                                      "name": "uu"
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
                              "name": "d3_geo_cartesianAdd"
                            },
                            "arguments": [
                              {
                                "type": "Identifier",
                                "name": "q1"
                              },
                              {
                                "type": "Identifier",
                                "name": "A"
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
                                "type": "Identifier",
                                "name": "q"
                              },
                              {
                                "type": "CallExpression",
                                "callee": {
                                  "type": "Identifier",
                                  "name": "d3_geo_spherical"
                                },
                                "arguments": [
                                  {
                                    "type": "Identifier",
                                    "name": "q1"
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
              },
              "rest": null,
              "generator": false,
              "expression": false
            },
            {
              "type": "FunctionDeclaration",
              "id": {
                "type": "Identifier",
                "name": "code"
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
                    "type": "VariableDeclaration",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "name": "r"
                        },
                        "init": {
                          "type": "ConditionalExpression",
                          "test": {
                            "type": "Identifier",
                            "name": "smallRadius"
                          },
                          "consequent": {
                            "type": "Identifier",
                            "name": "radius"
                          },
                          "alternate": {
                            "type": "BinaryExpression",
                            "operator": "-",
                            "left": {
                              "type": "Identifier",
                              "name": "π"
                            },
                            "right": {
                              "type": "Identifier",
                              "name": "radius"
                            }
                          }
                        }
                      },
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "name": "code"
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
                      "type": "BinaryExpression",
                      "operator": "<",
                      "left": {
                        "type": "Identifier",
                        "name": "λ"
                      },
                      "right": {
                        "type": "UnaryExpression",
                        "operator": "-",
                        "argument": {
                          "type": "Identifier",
                          "name": "r"
                        },
                        "prefix": true
                      }
                    },
                    "consequent": {
                      "type": "ExpressionStatement",
                      "expression": {
                        "type": "AssignmentExpression",
                        "operator": "|=",
                        "left": {
                          "type": "Identifier",
                          "name": "code"
                        },
                        "right": {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1"
                        }
                      }
                    },
                    "alternate": {
                      "type": "IfStatement",
                      "test": {
                        "type": "BinaryExpression",
                        "operator": ">",
                        "left": {
                          "type": "Identifier",
                          "name": "λ"
                        },
                        "right": {
                          "type": "Identifier",
                          "name": "r"
                        }
                      },
                      "consequent": {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "AssignmentExpression",
                          "operator": "|=",
                          "left": {
                            "type": "Identifier",
                            "name": "code"
                          },
                          "right": {
                            "type": "Literal",
                            "value": 2,
                            "raw": "2"
                          }
                        }
                      },
                      "alternate": null
                    }
                  },
                  {
                    "type": "IfStatement",
                    "test": {
                      "type": "BinaryExpression",
                      "operator": "<",
                      "left": {
                        "type": "Identifier",
                        "name": "φ"
                      },
                      "right": {
                        "type": "UnaryExpression",
                        "operator": "-",
                        "argument": {
                          "type": "Identifier",
                          "name": "r"
                        },
                        "prefix": true
                      }
                    },
                    "consequent": {
                      "type": "ExpressionStatement",
                      "expression": {
                        "type": "AssignmentExpression",
                        "operator": "|=",
                        "left": {
                          "type": "Identifier",
                          "name": "code"
                        },
                        "right": {
                          "type": "Literal",
                          "value": 4,
                          "raw": "4"
                        }
                      }
                    },
                    "alternate": {
                      "type": "IfStatement",
                      "test": {
                        "type": "BinaryExpression",
                        "operator": ">",
                        "left": {
                          "type": "Identifier",
                          "name": "φ"
                        },
                        "right": {
                          "type": "Identifier",
                          "name": "r"
                        }
                      },
                      "consequent": {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "AssignmentExpression",
                          "operator": "|=",
                          "left": {
                            "type": "Identifier",
                            "name": "code"
                          },
                          "right": {
                            "type": "Literal",
                            "value": 8,
                            "raw": "8"
                          }
                        }
                      },
                      "alternate": null
                    }
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Identifier",
                      "name": "code"
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