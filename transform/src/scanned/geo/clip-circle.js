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
  },
  "src": "function d3_geo_clipCircle(radius) {\n    var cr = Math.cos(radius), smallRadius = cr > 0, notHemisphere = abs(cr) > ε, interpolate = d3_geo_circleInterpolate(radius, 6 * d3_radians);\n    return d3_geo_clip(visible, clipLine, interpolate, smallRadius ? [\n        0,\n        -radius\n    ] : [\n        -π,\n        radius - π\n    ]);\n    function visible(λ, φ) {\n        return Math.cos(λ) * Math.cos(φ) > cr;\n    }\n    function clipLine(listener) {\n        var point0, c0, v0, v00, clean;\n        return {\n            lineStart: function () {\n                v00 = v0 = false;\n                clean = 1;\n            },\n            point: function (λ, φ) {\n                var point1 = [\n                        λ,\n                        φ\n                    ], point2, v = visible(λ, φ), c = smallRadius ? v ? 0 : code(λ, φ) : v ? code(λ + (λ < 0 ? π : -π), φ) : 0;\n                if (!point0 && (v00 = v0 = v))\n                    listener.lineStart();\n                if (v !== v0) {\n                    point2 = intersect(point0, point1);\n                    if (d3_geo_sphericalEqual(point0, point2) || d3_geo_sphericalEqual(point1, point2)) {\n                        point1[0] += ε;\n                        point1[1] += ε;\n                        v = visible(point1[0], point1[1]);\n                    }\n                }\n                if (v !== v0) {\n                    clean = 0;\n                    if (v) {\n                        listener.lineStart();\n                        point2 = intersect(point1, point0);\n                        listener.point(point2[0], point2[1]);\n                    } else {\n                        point2 = intersect(point0, point1);\n                        listener.point(point2[0], point2[1]);\n                        listener.lineEnd();\n                    }\n                    point0 = point2;\n                } else if (notHemisphere && point0 && smallRadius ^ v) {\n                    var t;\n                    if (!(c & c0) && (t = intersect(point1, point0, true))) {\n                        clean = 0;\n                        if (smallRadius) {\n                            listener.lineStart();\n                            listener.point(t[0][0], t[0][1]);\n                            listener.point(t[1][0], t[1][1]);\n                            listener.lineEnd();\n                        } else {\n                            listener.point(t[1][0], t[1][1]);\n                            listener.lineEnd();\n                            listener.lineStart();\n                            listener.point(t[0][0], t[0][1]);\n                        }\n                    }\n                }\n                if (v && (!point0 || !d3_geo_sphericalEqual(point0, point1))) {\n                    listener.point(point1[0], point1[1]);\n                }\n                point0 = point1, v0 = v, c0 = c;\n            },\n            lineEnd: function () {\n                if (v0)\n                    listener.lineEnd();\n                point0 = null;\n            },\n            clean: function () {\n                return clean | (v00 && v0) << 1;\n            }\n        };\n    }\n    function intersect(a, b, two) {\n        var pa = d3_geo_cartesian(a), pb = d3_geo_cartesian(b);\n        var n1 = [\n                1,\n                0,\n                0\n            ], n2 = d3_geo_cartesianCross(pa, pb), n2n2 = d3_geo_cartesianDot(n2, n2), n1n2 = n2[0], determinant = n2n2 - n1n2 * n1n2;\n        if (!determinant)\n            return !two && a;\n        var c1 = cr * n2n2 / determinant, c2 = -cr * n1n2 / determinant, n1xn2 = d3_geo_cartesianCross(n1, n2), A = d3_geo_cartesianScale(n1, c1), B = d3_geo_cartesianScale(n2, c2);\n        d3_geo_cartesianAdd(A, B);\n        var u = n1xn2, w = d3_geo_cartesianDot(A, u), uu = d3_geo_cartesianDot(u, u), t2 = w * w - uu * (d3_geo_cartesianDot(A, A) - 1);\n        if (t2 < 0)\n            return;\n        var t = Math.sqrt(t2), q = d3_geo_cartesianScale(u, (-w - t) / uu);\n        d3_geo_cartesianAdd(q, A);\n        q = d3_geo_spherical(q);\n        if (!two)\n            return q;\n        var λ0 = a[0], λ1 = b[0], φ0 = a[1], φ1 = b[1], z;\n        if (λ1 < λ0)\n            z = λ0, λ0 = λ1, λ1 = z;\n        var δλ = λ1 - λ0, polar = abs(δλ - π) < ε, meridian = polar || δλ < ε;\n        if (!polar && φ1 < φ0)\n            z = φ0, φ0 = φ1, φ1 = z;\n        if (meridian ? polar ? φ0 + φ1 > 0 ^ q[1] < (abs(q[0] - λ0) < ε ? φ0 : φ1) : φ0 <= q[1] && q[1] <= φ1 : δλ > π ^ (λ0 <= q[0] && q[0] <= λ1)) {\n            var q1 = d3_geo_cartesianScale(u, (-w + t) / uu);\n            d3_geo_cartesianAdd(q1, A);\n            return [\n                q,\n                d3_geo_spherical(q1)\n            ];\n        }\n    }\n    function code(λ, φ) {\n        var r = smallRadius ? radius : π - radius, code = 0;\n        if (λ < -r)\n            code |= 1;\n        else if (λ > r)\n            code |= 2;\n        if (φ < -r)\n            code |= 4;\n        else if (φ > r)\n            code |= 8;\n        return code;\n    }\n}"
}