{
  "filepath": "/geo/resample.js",
  "shared": [],
  "dependencies": [
    "d3_radians",
    "d3_geo_transformPoint",
    "d3_geo_cartesian",
    "abs"
  ],
  "helpers": [
    "d3_geo_resample"
  ],
  "exports": [],
  "ast": {
    "type": "Program",
    "body": [
      {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "name": "d3_geo_resample"
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
                    "name": "δ2"
                  },
                  "init": {
                    "type": "Literal",
                    "value": 0.5,
                    "raw": ".5"
                  }
                },
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "name": "cosMinDistance"
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
                        "type": "BinaryExpression",
                        "operator": "*",
                        "left": {
                          "type": "Literal",
                          "value": 30,
                          "raw": "30"
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
                    "name": "maxDepth"
                  },
                  "init": {
                    "type": "Literal",
                    "value": 16,
                    "raw": "16"
                  }
                }
              ],
              "kind": "var"
            },
            {
              "type": "FunctionDeclaration",
              "id": {
                "type": "Identifier",
                "name": "resample"
              },
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
                        "type": "ConditionalExpression",
                        "test": {
                          "type": "Identifier",
                          "name": "maxDepth"
                        },
                        "consequent": {
                          "type": "Identifier",
                          "name": "resampleRecursive"
                        },
                        "alternate": {
                          "type": "Identifier",
                          "name": "resampleNone"
                        }
                      },
                      "arguments": [
                        {
                          "type": "Identifier",
                          "name": "stream"
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
                "name": "resampleNone"
              },
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
                        "name": "d3_geo_transformPoint"
                      },
                      "arguments": [
                        {
                          "type": "Identifier",
                          "name": "stream"
                        },
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
                                "type": "ExpressionStatement",
                                "expression": {
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
                                      "name": "project"
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
                                      "name": "stream"
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
                                        "name": "x"
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
                                        "name": "x"
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
              "type": "FunctionDeclaration",
              "id": {
                "type": "Identifier",
                "name": "resampleRecursive"
              },
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
                          "name": "a00"
                        },
                        "init": null
                      },
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "name": "b00"
                        },
                        "init": null
                      },
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "name": "c00"
                        },
                        "init": null
                      },
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "name": "λ0"
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
                          "name": "a0"
                        },
                        "init": null
                      },
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "name": "b0"
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
                          "name": "resample"
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
                                "name": "point"
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
                                "name": "lineStart"
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
                                "name": "lineEnd"
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
                                        "type": "CallExpression",
                                        "callee": {
                                          "type": "MemberExpression",
                                          "computed": false,
                                          "object": {
                                            "type": "Identifier",
                                            "name": "stream"
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "name": "polygonStart"
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
                                          "type": "MemberExpression",
                                          "computed": false,
                                          "object": {
                                            "type": "Identifier",
                                            "name": "resample"
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "name": "lineStart"
                                          }
                                        },
                                        "right": {
                                          "type": "Identifier",
                                          "name": "ringStart"
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
                                        "type": "CallExpression",
                                        "callee": {
                                          "type": "MemberExpression",
                                          "computed": false,
                                          "object": {
                                            "type": "Identifier",
                                            "name": "stream"
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "name": "polygonEnd"
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
                                          "type": "MemberExpression",
                                          "computed": false,
                                          "object": {
                                            "type": "Identifier",
                                            "name": "resample"
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "name": "lineStart"
                                          }
                                        },
                                        "right": {
                                          "type": "Identifier",
                                          "name": "lineStart"
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
                    ],
                    "kind": "var"
                  },
                  {
                    "type": "FunctionDeclaration",
                    "id": {
                      "type": "Identifier",
                      "name": "point"
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
                            "operator": "=",
                            "left": {
                              "type": "Identifier",
                              "name": "x"
                            },
                            "right": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "Identifier",
                                "name": "project"
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
                                "name": "stream"
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
                                  "name": "x"
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
                                  "name": "x"
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
                    "rest": null,
                    "generator": false,
                    "expression": false
                  },
                  {
                    "type": "FunctionDeclaration",
                    "id": {
                      "type": "Identifier",
                      "name": "lineStart"
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
                              "name": "x0"
                            },
                            "right": {
                              "type": "Identifier",
                              "name": "NaN"
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
                                "name": "resample"
                              },
                              "property": {
                                "type": "Identifier",
                                "name": "point"
                              }
                            },
                            "right": {
                              "type": "Identifier",
                              "name": "linePoint"
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
                                "name": "stream"
                              },
                              "property": {
                                "type": "Identifier",
                                "name": "lineStart"
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
                    "type": "FunctionDeclaration",
                    "id": {
                      "type": "Identifier",
                      "name": "linePoint"
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
                                "name": "c"
                              },
                              "init": {
                                "type": "CallExpression",
                                "callee": {
                                  "type": "Identifier",
                                  "name": "d3_geo_cartesian"
                                },
                                "arguments": [
                                  {
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
                                ]
                              }
                            },
                            {
                              "type": "VariableDeclarator",
                              "id": {
                                "type": "Identifier",
                                "name": "p"
                              },
                              "init": {
                                "type": "CallExpression",
                                "callee": {
                                  "type": "Identifier",
                                  "name": "project"
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
                              "name": "resampleLineTo"
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
                                "name": "λ0"
                              },
                              {
                                "type": "Identifier",
                                "name": "a0"
                              },
                              {
                                "type": "Identifier",
                                "name": "b0"
                              },
                              {
                                "type": "Identifier",
                                "name": "c0"
                              },
                              {
                                "type": "AssignmentExpression",
                                "operator": "=",
                                "left": {
                                  "type": "Identifier",
                                  "name": "x0"
                                },
                                "right": {
                                  "type": "MemberExpression",
                                  "computed": true,
                                  "object": {
                                    "type": "Identifier",
                                    "name": "p"
                                  },
                                  "property": {
                                    "type": "Literal",
                                    "value": 0,
                                    "raw": "0"
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
                                  "computed": true,
                                  "object": {
                                    "type": "Identifier",
                                    "name": "p"
                                  },
                                  "property": {
                                    "type": "Literal",
                                    "value": 1,
                                    "raw": "1"
                                  }
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
                                  "name": "λ"
                                }
                              },
                              {
                                "type": "AssignmentExpression",
                                "operator": "=",
                                "left": {
                                  "type": "Identifier",
                                  "name": "a0"
                                },
                                "right": {
                                  "type": "MemberExpression",
                                  "computed": true,
                                  "object": {
                                    "type": "Identifier",
                                    "name": "c"
                                  },
                                  "property": {
                                    "type": "Literal",
                                    "value": 0,
                                    "raw": "0"
                                  }
                                }
                              },
                              {
                                "type": "AssignmentExpression",
                                "operator": "=",
                                "left": {
                                  "type": "Identifier",
                                  "name": "b0"
                                },
                                "right": {
                                  "type": "MemberExpression",
                                  "computed": true,
                                  "object": {
                                    "type": "Identifier",
                                    "name": "c"
                                  },
                                  "property": {
                                    "type": "Literal",
                                    "value": 1,
                                    "raw": "1"
                                  }
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
                                  "type": "MemberExpression",
                                  "computed": true,
                                  "object": {
                                    "type": "Identifier",
                                    "name": "c"
                                  },
                                  "property": {
                                    "type": "Literal",
                                    "value": 2,
                                    "raw": "2"
                                  }
                                }
                              },
                              {
                                "type": "Identifier",
                                "name": "maxDepth"
                              },
                              {
                                "type": "Identifier",
                                "name": "stream"
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
                                "name": "stream"
                              },
                              "property": {
                                "type": "Identifier",
                                "name": "point"
                              }
                            },
                            "arguments": [
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
                      "name": "lineEnd"
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
                                "name": "resample"
                              },
                              "property": {
                                "type": "Identifier",
                                "name": "point"
                              }
                            },
                            "right": {
                              "type": "Identifier",
                              "name": "point"
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
                                "name": "stream"
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
                    "rest": null,
                    "generator": false,
                    "expression": false
                  },
                  {
                    "type": "FunctionDeclaration",
                    "id": {
                      "type": "Identifier",
                      "name": "ringStart"
                    },
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
                              "name": "lineStart"
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
                              "type": "MemberExpression",
                              "computed": false,
                              "object": {
                                "type": "Identifier",
                                "name": "resample"
                              },
                              "property": {
                                "type": "Identifier",
                                "name": "point"
                              }
                            },
                            "right": {
                              "type": "Identifier",
                              "name": "ringPoint"
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
                                "name": "resample"
                              },
                              "property": {
                                "type": "Identifier",
                                "name": "lineEnd"
                              }
                            },
                            "right": {
                              "type": "Identifier",
                              "name": "ringEnd"
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
                      "name": "ringPoint"
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
                            "type": "SequenceExpression",
                            "expressions": [
                              {
                                "type": "CallExpression",
                                "callee": {
                                  "type": "Identifier",
                                  "name": "linePoint"
                                },
                                "arguments": [
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
                              },
                              {
                                "type": "AssignmentExpression",
                                "operator": "=",
                                "left": {
                                  "type": "Identifier",
                                  "name": "x00"
                                },
                                "right": {
                                  "type": "Identifier",
                                  "name": "x0"
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
                                  "type": "Identifier",
                                  "name": "y0"
                                }
                              },
                              {
                                "type": "AssignmentExpression",
                                "operator": "=",
                                "left": {
                                  "type": "Identifier",
                                  "name": "a00"
                                },
                                "right": {
                                  "type": "Identifier",
                                  "name": "a0"
                                }
                              },
                              {
                                "type": "AssignmentExpression",
                                "operator": "=",
                                "left": {
                                  "type": "Identifier",
                                  "name": "b00"
                                },
                                "right": {
                                  "type": "Identifier",
                                  "name": "b0"
                                }
                              },
                              {
                                "type": "AssignmentExpression",
                                "operator": "=",
                                "left": {
                                  "type": "Identifier",
                                  "name": "c00"
                                },
                                "right": {
                                  "type": "Identifier",
                                  "name": "c0"
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
                                "name": "resample"
                              },
                              "property": {
                                "type": "Identifier",
                                "name": "point"
                              }
                            },
                            "right": {
                              "type": "Identifier",
                              "name": "linePoint"
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
                      "name": "ringEnd"
                    },
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
                              "name": "resampleLineTo"
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
                                "name": "λ0"
                              },
                              {
                                "type": "Identifier",
                                "name": "a0"
                              },
                              {
                                "type": "Identifier",
                                "name": "b0"
                              },
                              {
                                "type": "Identifier",
                                "name": "c0"
                              },
                              {
                                "type": "Identifier",
                                "name": "x00"
                              },
                              {
                                "type": "Identifier",
                                "name": "y00"
                              },
                              {
                                "type": "Identifier",
                                "name": "λ00"
                              },
                              {
                                "type": "Identifier",
                                "name": "a00"
                              },
                              {
                                "type": "Identifier",
                                "name": "b00"
                              },
                              {
                                "type": "Identifier",
                                "name": "c00"
                              },
                              {
                                "type": "Identifier",
                                "name": "maxDepth"
                              },
                              {
                                "type": "Identifier",
                                "name": "stream"
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
                                "name": "resample"
                              },
                              "property": {
                                "type": "Identifier",
                                "name": "lineEnd"
                              }
                            },
                            "right": {
                              "type": "Identifier",
                              "name": "lineEnd"
                            }
                          }
                        },
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "CallExpression",
                            "callee": {
                              "type": "Identifier",
                              "name": "lineEnd"
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
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Identifier",
                      "name": "resample"
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
                "name": "resampleLineTo"
              },
              "params": [
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
                  "name": "λ0"
                },
                {
                  "type": "Identifier",
                  "name": "a0"
                },
                {
                  "type": "Identifier",
                  "name": "b0"
                },
                {
                  "type": "Identifier",
                  "name": "c0"
                },
                {
                  "type": "Identifier",
                  "name": "x1"
                },
                {
                  "type": "Identifier",
                  "name": "y1"
                },
                {
                  "type": "Identifier",
                  "name": "λ1"
                },
                {
                  "type": "Identifier",
                  "name": "a1"
                },
                {
                  "type": "Identifier",
                  "name": "b1"
                },
                {
                  "type": "Identifier",
                  "name": "c1"
                },
                {
                  "type": "Identifier",
                  "name": "depth"
                },
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
                            "name": "x1"
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
                            "name": "y1"
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
                          "name": "d2"
                        },
                        "init": {
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
                        "type": "BinaryExpression",
                        "operator": ">",
                        "left": {
                          "type": "Identifier",
                          "name": "d2"
                        },
                        "right": {
                          "type": "BinaryExpression",
                          "operator": "*",
                          "left": {
                            "type": "Literal",
                            "value": 4,
                            "raw": "4"
                          },
                          "right": {
                            "type": "Identifier",
                            "name": "δ2"
                          }
                        }
                      },
                      "right": {
                        "type": "UpdateExpression",
                        "operator": "--",
                        "argument": {
                          "type": "Identifier",
                          "name": "depth"
                        },
                        "prefix": false
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
                                "name": "a"
                              },
                              "init": {
                                "type": "BinaryExpression",
                                "operator": "+",
                                "left": {
                                  "type": "Identifier",
                                  "name": "a0"
                                },
                                "right": {
                                  "type": "Identifier",
                                  "name": "a1"
                                }
                              }
                            },
                            {
                              "type": "VariableDeclarator",
                              "id": {
                                "type": "Identifier",
                                "name": "b"
                              },
                              "init": {
                                "type": "BinaryExpression",
                                "operator": "+",
                                "left": {
                                  "type": "Identifier",
                                  "name": "b0"
                                },
                                "right": {
                                  "type": "Identifier",
                                  "name": "b1"
                                }
                              }
                            },
                            {
                              "type": "VariableDeclarator",
                              "id": {
                                "type": "Identifier",
                                "name": "c"
                              },
                              "init": {
                                "type": "BinaryExpression",
                                "operator": "+",
                                "left": {
                                  "type": "Identifier",
                                  "name": "c0"
                                },
                                "right": {
                                  "type": "Identifier",
                                  "name": "c1"
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
                                          "name": "a"
                                        },
                                        "right": {
                                          "type": "Identifier",
                                          "name": "a"
                                        }
                                      },
                                      "right": {
                                        "type": "BinaryExpression",
                                        "operator": "*",
                                        "left": {
                                          "type": "Identifier",
                                          "name": "b"
                                        },
                                        "right": {
                                          "type": "Identifier",
                                          "name": "b"
                                        }
                                      }
                                    },
                                    "right": {
                                      "type": "BinaryExpression",
                                      "operator": "*",
                                      "left": {
                                        "type": "Identifier",
                                        "name": "c"
                                      },
                                      "right": {
                                        "type": "Identifier",
                                        "name": "c"
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
                                "name": "φ2"
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
                                    "name": "asin"
                                  }
                                },
                                "arguments": [
                                  {
                                    "type": "AssignmentExpression",
                                    "operator": "/=",
                                    "left": {
                                      "type": "Identifier",
                                      "name": "c"
                                    },
                                    "right": {
                                      "type": "Identifier",
                                      "name": "m"
                                    }
                                  }
                                ]
                              }
                            },
                            {
                              "type": "VariableDeclarator",
                              "id": {
                                "type": "Identifier",
                                "name": "λ2"
                              },
                              "init": {
                                "type": "ConditionalExpression",
                                "test": {
                                  "type": "LogicalExpression",
                                  "operator": "||",
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
                                            "type": "CallExpression",
                                            "callee": {
                                              "type": "Identifier",
                                              "name": "abs"
                                            },
                                            "arguments": [
                                              {
                                                "type": "Identifier",
                                                "name": "c"
                                              }
                                            ]
                                          },
                                          "right": {
                                            "type": "Literal",
                                            "value": 1,
                                            "raw": "1"
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
                                            "name": "λ0"
                                          },
                                          "right": {
                                            "type": "Identifier",
                                            "name": "λ1"
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
                                  "type": "BinaryExpression",
                                  "operator": "/",
                                  "left": {
                                    "type": "BinaryExpression",
                                    "operator": "+",
                                    "left": {
                                      "type": "Identifier",
                                      "name": "λ0"
                                    },
                                    "right": {
                                      "type": "Identifier",
                                      "name": "λ1"
                                    }
                                  },
                                  "right": {
                                    "type": "Literal",
                                    "value": 2,
                                    "raw": "2"
                                  }
                                },
                                "alternate": {
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
                                      "name": "b"
                                    },
                                    {
                                      "type": "Identifier",
                                      "name": "a"
                                    }
                                  ]
                                }
                              }
                            },
                            {
                              "type": "VariableDeclarator",
                              "id": {
                                "type": "Identifier",
                                "name": "p"
                              },
                              "init": {
                                "type": "CallExpression",
                                "callee": {
                                  "type": "Identifier",
                                  "name": "project"
                                },
                                "arguments": [
                                  {
                                    "type": "Identifier",
                                    "name": "λ2"
                                  },
                                  {
                                    "type": "Identifier",
                                    "name": "φ2"
                                  }
                                ]
                              }
                            },
                            {
                              "type": "VariableDeclarator",
                              "id": {
                                "type": "Identifier",
                                "name": "x2"
                              },
                              "init": {
                                "type": "MemberExpression",
                                "computed": true,
                                "object": {
                                  "type": "Identifier",
                                  "name": "p"
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
                                "name": "y2"
                              },
                              "init": {
                                "type": "MemberExpression",
                                "computed": true,
                                "object": {
                                  "type": "Identifier",
                                  "name": "p"
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
                                "name": "dx2"
                              },
                              "init": {
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
                            },
                            {
                              "type": "VariableDeclarator",
                              "id": {
                                "type": "Identifier",
                                "name": "dy2"
                              },
                              "init": {
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
                            },
                            {
                              "type": "VariableDeclarator",
                              "id": {
                                "type": "Identifier",
                                "name": "dz"
                              },
                              "init": {
                                "type": "BinaryExpression",
                                "operator": "-",
                                "left": {
                                  "type": "BinaryExpression",
                                  "operator": "*",
                                  "left": {
                                    "type": "Identifier",
                                    "name": "dy"
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "name": "dx2"
                                  }
                                },
                                "right": {
                                  "type": "BinaryExpression",
                                  "operator": "*",
                                  "left": {
                                    "type": "Identifier",
                                    "name": "dx"
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "name": "dy2"
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
                            "operator": "||",
                            "left": {
                              "type": "LogicalExpression",
                              "operator": "||",
                              "left": {
                                "type": "BinaryExpression",
                                "operator": ">",
                                "left": {
                                  "type": "BinaryExpression",
                                  "operator": "/",
                                  "left": {
                                    "type": "BinaryExpression",
                                    "operator": "*",
                                    "left": {
                                      "type": "Identifier",
                                      "name": "dz"
                                    },
                                    "right": {
                                      "type": "Identifier",
                                      "name": "dz"
                                    }
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "name": "d2"
                                  }
                                },
                                "right": {
                                  "type": "Identifier",
                                  "name": "δ2"
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
                                        "type": "BinaryExpression",
                                        "operator": "/",
                                        "left": {
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
                                              "name": "dx2"
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
                                              "name": "dy2"
                                            }
                                          }
                                        },
                                        "right": {
                                          "type": "Identifier",
                                          "name": "d2"
                                        }
                                      },
                                      "right": {
                                        "type": "Literal",
                                        "value": 0.5,
                                        "raw": ".5"
                                      }
                                    }
                                  ]
                                },
                                "right": {
                                  "type": "Literal",
                                  "value": 0.3,
                                  "raw": ".3"
                                }
                              }
                            },
                            "right": {
                              "type": "BinaryExpression",
                              "operator": "<",
                              "left": {
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
                                      "name": "a0"
                                    },
                                    "right": {
                                      "type": "Identifier",
                                      "name": "a1"
                                    }
                                  },
                                  "right": {
                                    "type": "BinaryExpression",
                                    "operator": "*",
                                    "left": {
                                      "type": "Identifier",
                                      "name": "b0"
                                    },
                                    "right": {
                                      "type": "Identifier",
                                      "name": "b1"
                                    }
                                  }
                                },
                                "right": {
                                  "type": "BinaryExpression",
                                  "operator": "*",
                                  "left": {
                                    "type": "Identifier",
                                    "name": "c0"
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "name": "c1"
                                  }
                                }
                              },
                              "right": {
                                "type": "Identifier",
                                "name": "cosMinDistance"
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
                                    "type": "Identifier",
                                    "name": "resampleLineTo"
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
                                      "name": "λ0"
                                    },
                                    {
                                      "type": "Identifier",
                                      "name": "a0"
                                    },
                                    {
                                      "type": "Identifier",
                                      "name": "b0"
                                    },
                                    {
                                      "type": "Identifier",
                                      "name": "c0"
                                    },
                                    {
                                      "type": "Identifier",
                                      "name": "x2"
                                    },
                                    {
                                      "type": "Identifier",
                                      "name": "y2"
                                    },
                                    {
                                      "type": "Identifier",
                                      "name": "λ2"
                                    },
                                    {
                                      "type": "AssignmentExpression",
                                      "operator": "/=",
                                      "left": {
                                        "type": "Identifier",
                                        "name": "a"
                                      },
                                      "right": {
                                        "type": "Identifier",
                                        "name": "m"
                                      }
                                    },
                                    {
                                      "type": "AssignmentExpression",
                                      "operator": "/=",
                                      "left": {
                                        "type": "Identifier",
                                        "name": "b"
                                      },
                                      "right": {
                                        "type": "Identifier",
                                        "name": "m"
                                      }
                                    },
                                    {
                                      "type": "Identifier",
                                      "name": "c"
                                    },
                                    {
                                      "type": "Identifier",
                                      "name": "depth"
                                    },
                                    {
                                      "type": "Identifier",
                                      "name": "stream"
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
                                      "name": "stream"
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "name": "point"
                                    }
                                  },
                                  "arguments": [
                                    {
                                      "type": "Identifier",
                                      "name": "x2"
                                    },
                                    {
                                      "type": "Identifier",
                                      "name": "y2"
                                    }
                                  ]
                                }
                              },
                              {
                                "type": "ExpressionStatement",
                                "expression": {
                                  "type": "CallExpression",
                                  "callee": {
                                    "type": "Identifier",
                                    "name": "resampleLineTo"
                                  },
                                  "arguments": [
                                    {
                                      "type": "Identifier",
                                      "name": "x2"
                                    },
                                    {
                                      "type": "Identifier",
                                      "name": "y2"
                                    },
                                    {
                                      "type": "Identifier",
                                      "name": "λ2"
                                    },
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
                                    },
                                    {
                                      "type": "Identifier",
                                      "name": "x1"
                                    },
                                    {
                                      "type": "Identifier",
                                      "name": "y1"
                                    },
                                    {
                                      "type": "Identifier",
                                      "name": "λ1"
                                    },
                                    {
                                      "type": "Identifier",
                                      "name": "a1"
                                    },
                                    {
                                      "type": "Identifier",
                                      "name": "b1"
                                    },
                                    {
                                      "type": "Identifier",
                                      "name": "c1"
                                    },
                                    {
                                      "type": "Identifier",
                                      "name": "depth"
                                    },
                                    {
                                      "type": "Identifier",
                                      "name": "stream"
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
                    "name": "resample"
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
                                "name": "δ2"
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
                            "name": "maxDepth"
                          },
                          "right": {
                            "type": "LogicalExpression",
                            "operator": "&&",
                            "left": {
                              "type": "BinaryExpression",
                              "operator": ">",
                              "left": {
                                "type": "AssignmentExpression",
                                "operator": "=",
                                "left": {
                                  "type": "Identifier",
                                  "name": "δ2"
                                },
                                "right": {
                                  "type": "BinaryExpression",
                                  "operator": "*",
                                  "left": {
                                    "type": "Identifier",
                                    "name": "_"
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "name": "_"
                                  }
                                }
                              },
                              "right": {
                                "type": "Literal",
                                "value": 0,
                                "raw": "0"
                              }
                            },
                            "right": {
                              "type": "Literal",
                              "value": 16,
                              "raw": "16"
                            }
                          }
                        }
                      },
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "Identifier",
                          "name": "resample"
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
                "name": "resample"
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