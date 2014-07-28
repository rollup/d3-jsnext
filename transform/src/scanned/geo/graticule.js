{
  "filepath": "/geo/graticule.js",
  "shared": [],
  "dependencies": [
    "d3.range",
    "abs"
  ],
  "helpers": [
    "d3_geo_graticuleX",
    "d3_geo_graticuleY"
  ],
  "exports": [
    "d3.geo.graticule"
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
              "name": "graticule"
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
                        "name": "x1"
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
                        "name": "X1"
                      },
                      "init": null
                    },
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "name": "X0"
                      },
                      "init": null
                    },
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "name": "y1"
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
                        "name": "Y1"
                      },
                      "init": null
                    },
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "name": "Y0"
                      },
                      "init": null
                    },
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "name": "dx"
                      },
                      "init": {
                        "type": "Literal",
                        "value": 10,
                        "raw": "10"
                      }
                    },
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "name": "dy"
                      },
                      "init": {
                        "type": "Identifier",
                        "name": "dx"
                      }
                    },
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "name": "DX"
                      },
                      "init": {
                        "type": "Literal",
                        "value": 90,
                        "raw": "90"
                      }
                    },
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "name": "DY"
                      },
                      "init": {
                        "type": "Literal",
                        "value": 360,
                        "raw": "360"
                      }
                    },
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "name": "x"
                      },
                      "init": null
                    },
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "name": "y"
                      },
                      "init": null
                    },
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "name": "X"
                      },
                      "init": null
                    },
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "name": "Y"
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
                        "value": 2.5,
                        "raw": "2.5"
                      }
                    }
                  ],
                  "kind": "var"
                },
                {
                  "type": "FunctionDeclaration",
                  "id": {
                    "type": "Identifier",
                    "name": "graticule"
                  },
                  "params": [],
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
                                "name": "type"
                              },
                              "value": {
                                "type": "Literal",
                                "value": "MultiLineString",
                                "raw": "\"MultiLineString\""
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
                                "type": "CallExpression",
                                "callee": {
                                  "type": "Identifier",
                                  "name": "lines"
                                },
                                "arguments": []
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
                    "name": "lines"
                  },
                  "params": [],
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
                                          "type": "CallExpression",
                                          "callee": {
                                            "type": "MemberExpression",
                                            "computed": false,
                                            "object": {
                                              "type": "Identifier",
                                              "name": "d3"
                                            },
                                            "property": {
                                              "type": "Identifier",
                                              "name": "range"
                                            }
                                          },
                                          "arguments": [
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
                                                    "name": "ceil"
                                                  }
                                                },
                                                "arguments": [
                                                  {
                                                    "type": "BinaryExpression",
                                                    "operator": "/",
                                                    "left": {
                                                      "type": "Identifier",
                                                      "name": "X0"
                                                    },
                                                    "right": {
                                                      "type": "Identifier",
                                                      "name": "DX"
                                                    }
                                                  }
                                                ]
                                              },
                                              "right": {
                                                "type": "Identifier",
                                                "name": "DX"
                                              }
                                            },
                                            {
                                              "type": "Identifier",
                                              "name": "X1"
                                            },
                                            {
                                              "type": "Identifier",
                                              "name": "DX"
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
                                          "type": "Identifier",
                                          "name": "X"
                                        }
                                      ]
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "name": "concat"
                                    }
                                  },
                                  "arguments": [
                                    {
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
                                              "name": "d3"
                                            },
                                            "property": {
                                              "type": "Identifier",
                                              "name": "range"
                                            }
                                          },
                                          "arguments": [
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
                                                    "name": "ceil"
                                                  }
                                                },
                                                "arguments": [
                                                  {
                                                    "type": "BinaryExpression",
                                                    "operator": "/",
                                                    "left": {
                                                      "type": "Identifier",
                                                      "name": "Y0"
                                                    },
                                                    "right": {
                                                      "type": "Identifier",
                                                      "name": "DY"
                                                    }
                                                  }
                                                ]
                                              },
                                              "right": {
                                                "type": "Identifier",
                                                "name": "DY"
                                              }
                                            },
                                            {
                                              "type": "Identifier",
                                              "name": "Y1"
                                            },
                                            {
                                              "type": "Identifier",
                                              "name": "DY"
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
                                          "type": "Identifier",
                                          "name": "Y"
                                        }
                                      ]
                                    }
                                  ]
                                },
                                "property": {
                                  "type": "Identifier",
                                  "name": "concat"
                                }
                              },
                              "arguments": [
                                {
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
                                          "type": "CallExpression",
                                          "callee": {
                                            "type": "MemberExpression",
                                            "computed": false,
                                            "object": {
                                              "type": "Identifier",
                                              "name": "d3"
                                            },
                                            "property": {
                                              "type": "Identifier",
                                              "name": "range"
                                            }
                                          },
                                          "arguments": [
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
                                                    "name": "ceil"
                                                  }
                                                },
                                                "arguments": [
                                                  {
                                                    "type": "BinaryExpression",
                                                    "operator": "/",
                                                    "left": {
                                                      "type": "Identifier",
                                                      "name": "x0"
                                                    },
                                                    "right": {
                                                      "type": "Identifier",
                                                      "name": "dx"
                                                    }
                                                  }
                                                ]
                                              },
                                              "right": {
                                                "type": "Identifier",
                                                "name": "dx"
                                              }
                                            },
                                            {
                                              "type": "Identifier",
                                              "name": "x1"
                                            },
                                            {
                                              "type": "Identifier",
                                              "name": "dx"
                                            }
                                          ]
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
                                              "name": "x"
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
                                                    "type": "CallExpression",
                                                    "callee": {
                                                      "type": "Identifier",
                                                      "name": "abs"
                                                    },
                                                    "arguments": [
                                                      {
                                                        "type": "BinaryExpression",
                                                        "operator": "%",
                                                        "left": {
                                                          "type": "Identifier",
                                                          "name": "x"
                                                        },
                                                        "right": {
                                                          "type": "Identifier",
                                                          "name": "DX"
                                                        }
                                                      }
                                                    ]
                                                  },
                                                  "right": {
                                                    "type": "Identifier",
                                                    "name": "ε"
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
                                      "type": "Identifier",
                                      "name": "x"
                                    }
                                  ]
                                }
                              ]
                            },
                            "property": {
                              "type": "Identifier",
                              "name": "concat"
                            }
                          },
                          "arguments": [
                            {
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
                                      "type": "CallExpression",
                                      "callee": {
                                        "type": "MemberExpression",
                                        "computed": false,
                                        "object": {
                                          "type": "Identifier",
                                          "name": "d3"
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "name": "range"
                                        }
                                      },
                                      "arguments": [
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
                                                "name": "ceil"
                                              }
                                            },
                                            "arguments": [
                                              {
                                                "type": "BinaryExpression",
                                                "operator": "/",
                                                "left": {
                                                  "type": "Identifier",
                                                  "name": "y0"
                                                },
                                                "right": {
                                                  "type": "Identifier",
                                                  "name": "dy"
                                                }
                                              }
                                            ]
                                          },
                                          "right": {
                                            "type": "Identifier",
                                            "name": "dy"
                                          }
                                        },
                                        {
                                          "type": "Identifier",
                                          "name": "y1"
                                        },
                                        {
                                          "type": "Identifier",
                                          "name": "dy"
                                        }
                                      ]
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
                                                    "operator": "%",
                                                    "left": {
                                                      "type": "Identifier",
                                                      "name": "y"
                                                    },
                                                    "right": {
                                                      "type": "Identifier",
                                                      "name": "DY"
                                                    }
                                                  }
                                                ]
                                              },
                                              "right": {
                                                "type": "Identifier",
                                                "name": "ε"
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
                                  "type": "Identifier",
                                  "name": "y"
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
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "name": "graticule"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "lines"
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
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "MemberExpression",
                                "computed": false,
                                "object": {
                                  "type": "CallExpression",
                                  "callee": {
                                    "type": "Identifier",
                                    "name": "lines"
                                  },
                                  "arguments": []
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
                                      "name": "coordinates"
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
                                                "name": "type"
                                              },
                                              "value": {
                                                "type": "Literal",
                                                "value": "LineString",
                                                "raw": "\"LineString\""
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
                                                "type": "Identifier",
                                                "name": "coordinates"
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
                        "name": "graticule"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "outline"
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
                                        "type": "CallExpression",
                                        "callee": {
                                          "type": "MemberExpression",
                                          "computed": false,
                                          "object": {
                                            "type": "CallExpression",
                                            "callee": {
                                              "type": "Identifier",
                                              "name": "X"
                                            },
                                            "arguments": [
                                              {
                                                "type": "Identifier",
                                                "name": "X0"
                                              }
                                            ]
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "name": "concat"
                                          }
                                        },
                                        "arguments": [
                                          {
                                            "type": "CallExpression",
                                            "callee": {
                                              "type": "MemberExpression",
                                              "computed": false,
                                              "object": {
                                                "type": "CallExpression",
                                                "callee": {
                                                  "type": "Identifier",
                                                  "name": "Y"
                                                },
                                                "arguments": [
                                                  {
                                                    "type": "Identifier",
                                                    "name": "Y1"
                                                  }
                                                ]
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "name": "slice"
                                              }
                                            },
                                            "arguments": [
                                              {
                                                "type": "Literal",
                                                "value": 1,
                                                "raw": "1"
                                              }
                                            ]
                                          },
                                          {
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
                                                    "type": "CallExpression",
                                                    "callee": {
                                                      "type": "Identifier",
                                                      "name": "X"
                                                    },
                                                    "arguments": [
                                                      {
                                                        "type": "Identifier",
                                                        "name": "X1"
                                                      }
                                                    ]
                                                  },
                                                  "property": {
                                                    "type": "Identifier",
                                                    "name": "reverse"
                                                  }
                                                },
                                                "arguments": []
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "name": "slice"
                                              }
                                            },
                                            "arguments": [
                                              {
                                                "type": "Literal",
                                                "value": 1,
                                                "raw": "1"
                                              }
                                            ]
                                          },
                                          {
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
                                                    "type": "CallExpression",
                                                    "callee": {
                                                      "type": "Identifier",
                                                      "name": "Y"
                                                    },
                                                    "arguments": [
                                                      {
                                                        "type": "Identifier",
                                                        "name": "Y0"
                                                      }
                                                    ]
                                                  },
                                                  "property": {
                                                    "type": "Identifier",
                                                    "name": "reverse"
                                                  }
                                                },
                                                "arguments": []
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "name": "slice"
                                              }
                                            },
                                            "arguments": [
                                              {
                                                "type": "Literal",
                                                "value": 1,
                                                "raw": "1"
                                              }
                                            ]
                                          }
                                        ]
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
                        "name": "graticule"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "extent"
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
                                    "name": "graticule"
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "name": "minorExtent"
                                  }
                                },
                                "arguments": []
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
                                  "type": "CallExpression",
                                  "callee": {
                                    "type": "MemberExpression",
                                    "computed": false,
                                    "object": {
                                      "type": "Identifier",
                                      "name": "graticule"
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "name": "majorExtent"
                                    }
                                  },
                                  "arguments": [
                                    {
                                      "type": "Identifier",
                                      "name": "_"
                                    }
                                  ]
                                },
                                "property": {
                                  "type": "Identifier",
                                  "name": "minorExtent"
                                }
                              },
                              "arguments": [
                                {
                                  "type": "Identifier",
                                  "name": "_"
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
                        "name": "graticule"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "majorExtent"
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
                                "type": "ArrayExpression",
                                "elements": [
                                  {
                                    "type": "ArrayExpression",
                                    "elements": [
                                      {
                                        "type": "Identifier",
                                        "name": "X0"
                                      },
                                      {
                                        "type": "Identifier",
                                        "name": "Y0"
                                      }
                                    ]
                                  },
                                  {
                                    "type": "ArrayExpression",
                                    "elements": [
                                      {
                                        "type": "Identifier",
                                        "name": "X1"
                                      },
                                      {
                                        "type": "Identifier",
                                        "name": "Y1"
                                      }
                                    ]
                                  }
                                ]
                              }
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
                                    "name": "X0"
                                  },
                                  "right": {
                                    "type": "UnaryExpression",
                                    "operator": "+",
                                    "argument": {
                                      "type": "MemberExpression",
                                      "computed": true,
                                      "object": {
                                        "type": "MemberExpression",
                                        "computed": true,
                                        "object": {
                                          "type": "Identifier",
                                          "name": "_"
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
                                    "prefix": true
                                  }
                                },
                                {
                                  "type": "AssignmentExpression",
                                  "operator": "=",
                                  "left": {
                                    "type": "Identifier",
                                    "name": "X1"
                                  },
                                  "right": {
                                    "type": "UnaryExpression",
                                    "operator": "+",
                                    "argument": {
                                      "type": "MemberExpression",
                                      "computed": true,
                                      "object": {
                                        "type": "MemberExpression",
                                        "computed": true,
                                        "object": {
                                          "type": "Identifier",
                                          "name": "_"
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
                                    "prefix": true
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
                                  "operator": "=",
                                  "left": {
                                    "type": "Identifier",
                                    "name": "Y0"
                                  },
                                  "right": {
                                    "type": "UnaryExpression",
                                    "operator": "+",
                                    "argument": {
                                      "type": "MemberExpression",
                                      "computed": true,
                                      "object": {
                                        "type": "MemberExpression",
                                        "computed": true,
                                        "object": {
                                          "type": "Identifier",
                                          "name": "_"
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
                                    },
                                    "prefix": true
                                  }
                                },
                                {
                                  "type": "AssignmentExpression",
                                  "operator": "=",
                                  "left": {
                                    "type": "Identifier",
                                    "name": "Y1"
                                  },
                                  "right": {
                                    "type": "UnaryExpression",
                                    "operator": "+",
                                    "argument": {
                                      "type": "MemberExpression",
                                      "computed": true,
                                      "object": {
                                        "type": "MemberExpression",
                                        "computed": true,
                                        "object": {
                                          "type": "Identifier",
                                          "name": "_"
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
                                    },
                                    "prefix": true
                                  }
                                }
                              ]
                            }
                          },
                          {
                            "type": "IfStatement",
                            "test": {
                              "type": "BinaryExpression",
                              "operator": ">",
                              "left": {
                                "type": "Identifier",
                                "name": "X0"
                              },
                              "right": {
                                "type": "Identifier",
                                "name": "X1"
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
                                      "name": "_"
                                    },
                                    "right": {
                                      "type": "Identifier",
                                      "name": "X0"
                                    }
                                  },
                                  {
                                    "type": "AssignmentExpression",
                                    "operator": "=",
                                    "left": {
                                      "type": "Identifier",
                                      "name": "X0"
                                    },
                                    "right": {
                                      "type": "Identifier",
                                      "name": "X1"
                                    }
                                  },
                                  {
                                    "type": "AssignmentExpression",
                                    "operator": "=",
                                    "left": {
                                      "type": "Identifier",
                                      "name": "X1"
                                    },
                                    "right": {
                                      "type": "Identifier",
                                      "name": "_"
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
                              "type": "BinaryExpression",
                              "operator": ">",
                              "left": {
                                "type": "Identifier",
                                "name": "Y0"
                              },
                              "right": {
                                "type": "Identifier",
                                "name": "Y1"
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
                                      "name": "_"
                                    },
                                    "right": {
                                      "type": "Identifier",
                                      "name": "Y0"
                                    }
                                  },
                                  {
                                    "type": "AssignmentExpression",
                                    "operator": "=",
                                    "left": {
                                      "type": "Identifier",
                                      "name": "Y0"
                                    },
                                    "right": {
                                      "type": "Identifier",
                                      "name": "Y1"
                                    }
                                  },
                                  {
                                    "type": "AssignmentExpression",
                                    "operator": "=",
                                    "left": {
                                      "type": "Identifier",
                                      "name": "Y1"
                                    },
                                    "right": {
                                      "type": "Identifier",
                                      "name": "_"
                                    }
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
                                "type": "MemberExpression",
                                "computed": false,
                                "object": {
                                  "type": "Identifier",
                                  "name": "graticule"
                                },
                                "property": {
                                  "type": "Identifier",
                                  "name": "precision"
                                }
                              },
                              "arguments": [
                                {
                                  "type": "Identifier",
                                  "name": "precision"
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
                        "name": "graticule"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "minorExtent"
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
                                        "name": "y0"
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
                                  }
                                ]
                              }
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
                                    "name": "x0"
                                  },
                                  "right": {
                                    "type": "UnaryExpression",
                                    "operator": "+",
                                    "argument": {
                                      "type": "MemberExpression",
                                      "computed": true,
                                      "object": {
                                        "type": "MemberExpression",
                                        "computed": true,
                                        "object": {
                                          "type": "Identifier",
                                          "name": "_"
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
                                    "prefix": true
                                  }
                                },
                                {
                                  "type": "AssignmentExpression",
                                  "operator": "=",
                                  "left": {
                                    "type": "Identifier",
                                    "name": "x1"
                                  },
                                  "right": {
                                    "type": "UnaryExpression",
                                    "operator": "+",
                                    "argument": {
                                      "type": "MemberExpression",
                                      "computed": true,
                                      "object": {
                                        "type": "MemberExpression",
                                        "computed": true,
                                        "object": {
                                          "type": "Identifier",
                                          "name": "_"
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
                                    "prefix": true
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
                                  "operator": "=",
                                  "left": {
                                    "type": "Identifier",
                                    "name": "y0"
                                  },
                                  "right": {
                                    "type": "UnaryExpression",
                                    "operator": "+",
                                    "argument": {
                                      "type": "MemberExpression",
                                      "computed": true,
                                      "object": {
                                        "type": "MemberExpression",
                                        "computed": true,
                                        "object": {
                                          "type": "Identifier",
                                          "name": "_"
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
                                    },
                                    "prefix": true
                                  }
                                },
                                {
                                  "type": "AssignmentExpression",
                                  "operator": "=",
                                  "left": {
                                    "type": "Identifier",
                                    "name": "y1"
                                  },
                                  "right": {
                                    "type": "UnaryExpression",
                                    "operator": "+",
                                    "argument": {
                                      "type": "MemberExpression",
                                      "computed": true,
                                      "object": {
                                        "type": "MemberExpression",
                                        "computed": true,
                                        "object": {
                                          "type": "Identifier",
                                          "name": "_"
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
                                    },
                                    "prefix": true
                                  }
                                }
                              ]
                            }
                          },
                          {
                            "type": "IfStatement",
                            "test": {
                              "type": "BinaryExpression",
                              "operator": ">",
                              "left": {
                                "type": "Identifier",
                                "name": "x0"
                              },
                              "right": {
                                "type": "Identifier",
                                "name": "x1"
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
                                      "name": "_"
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
                                      "name": "x0"
                                    },
                                    "right": {
                                      "type": "Identifier",
                                      "name": "x1"
                                    }
                                  },
                                  {
                                    "type": "AssignmentExpression",
                                    "operator": "=",
                                    "left": {
                                      "type": "Identifier",
                                      "name": "x1"
                                    },
                                    "right": {
                                      "type": "Identifier",
                                      "name": "_"
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
                              "type": "BinaryExpression",
                              "operator": ">",
                              "left": {
                                "type": "Identifier",
                                "name": "y0"
                              },
                              "right": {
                                "type": "Identifier",
                                "name": "y1"
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
                                      "name": "_"
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
                                      "name": "y0"
                                    },
                                    "right": {
                                      "type": "Identifier",
                                      "name": "y1"
                                    }
                                  },
                                  {
                                    "type": "AssignmentExpression",
                                    "operator": "=",
                                    "left": {
                                      "type": "Identifier",
                                      "name": "y1"
                                    },
                                    "right": {
                                      "type": "Identifier",
                                      "name": "_"
                                    }
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
                                "type": "MemberExpression",
                                "computed": false,
                                "object": {
                                  "type": "Identifier",
                                  "name": "graticule"
                                },
                                "property": {
                                  "type": "Identifier",
                                  "name": "precision"
                                }
                              },
                              "arguments": [
                                {
                                  "type": "Identifier",
                                  "name": "precision"
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
                        "name": "graticule"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "step"
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
                                    "name": "graticule"
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "name": "minorStep"
                                  }
                                },
                                "arguments": []
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
                                  "type": "CallExpression",
                                  "callee": {
                                    "type": "MemberExpression",
                                    "computed": false,
                                    "object": {
                                      "type": "Identifier",
                                      "name": "graticule"
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "name": "majorStep"
                                    }
                                  },
                                  "arguments": [
                                    {
                                      "type": "Identifier",
                                      "name": "_"
                                    }
                                  ]
                                },
                                "property": {
                                  "type": "Identifier",
                                  "name": "minorStep"
                                }
                              },
                              "arguments": [
                                {
                                  "type": "Identifier",
                                  "name": "_"
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
                        "name": "graticule"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "majorStep"
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
                                "type": "ArrayExpression",
                                "elements": [
                                  {
                                    "type": "Identifier",
                                    "name": "DX"
                                  },
                                  {
                                    "type": "Identifier",
                                    "name": "DY"
                                  }
                                ]
                              }
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
                                    "name": "DX"
                                  },
                                  "right": {
                                    "type": "UnaryExpression",
                                    "operator": "+",
                                    "argument": {
                                      "type": "MemberExpression",
                                      "computed": true,
                                      "object": {
                                        "type": "Identifier",
                                        "name": "_"
                                      },
                                      "property": {
                                        "type": "Literal",
                                        "value": 0,
                                        "raw": "0"
                                      }
                                    },
                                    "prefix": true
                                  }
                                },
                                {
                                  "type": "AssignmentExpression",
                                  "operator": "=",
                                  "left": {
                                    "type": "Identifier",
                                    "name": "DY"
                                  },
                                  "right": {
                                    "type": "UnaryExpression",
                                    "operator": "+",
                                    "argument": {
                                      "type": "MemberExpression",
                                      "computed": true,
                                      "object": {
                                        "type": "Identifier",
                                        "name": "_"
                                      },
                                      "property": {
                                        "type": "Literal",
                                        "value": 1,
                                        "raw": "1"
                                      }
                                    },
                                    "prefix": true
                                  }
                                }
                              ]
                            }
                          },
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "Identifier",
                              "name": "graticule"
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
                        "name": "graticule"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "minorStep"
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
                                "type": "ArrayExpression",
                                "elements": [
                                  {
                                    "type": "Identifier",
                                    "name": "dx"
                                  },
                                  {
                                    "type": "Identifier",
                                    "name": "dy"
                                  }
                                ]
                              }
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
                                    "name": "dx"
                                  },
                                  "right": {
                                    "type": "UnaryExpression",
                                    "operator": "+",
                                    "argument": {
                                      "type": "MemberExpression",
                                      "computed": true,
                                      "object": {
                                        "type": "Identifier",
                                        "name": "_"
                                      },
                                      "property": {
                                        "type": "Literal",
                                        "value": 0,
                                        "raw": "0"
                                      }
                                    },
                                    "prefix": true
                                  }
                                },
                                {
                                  "type": "AssignmentExpression",
                                  "operator": "=",
                                  "left": {
                                    "type": "Identifier",
                                    "name": "dy"
                                  },
                                  "right": {
                                    "type": "UnaryExpression",
                                    "operator": "+",
                                    "argument": {
                                      "type": "MemberExpression",
                                      "computed": true,
                                      "object": {
                                        "type": "Identifier",
                                        "name": "_"
                                      },
                                      "property": {
                                        "type": "Literal",
                                        "value": 1,
                                        "raw": "1"
                                      }
                                    },
                                    "prefix": true
                                  }
                                }
                              ]
                            }
                          },
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "Identifier",
                              "name": "graticule"
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
                        "name": "graticule"
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
                            }
                          },
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
                                  "name": "d3_geo_graticuleX"
                                },
                                "arguments": [
                                  {
                                    "type": "Identifier",
                                    "name": "y0"
                                  },
                                  {
                                    "type": "Identifier",
                                    "name": "y1"
                                  },
                                  {
                                    "type": "Literal",
                                    "value": 90,
                                    "raw": "90"
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
                                "name": "y"
                              },
                              "right": {
                                "type": "CallExpression",
                                "callee": {
                                  "type": "Identifier",
                                  "name": "d3_geo_graticuleY"
                                },
                                "arguments": [
                                  {
                                    "type": "Identifier",
                                    "name": "x0"
                                  },
                                  {
                                    "type": "Identifier",
                                    "name": "x1"
                                  },
                                  {
                                    "type": "Identifier",
                                    "name": "precision"
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
                                "name": "X"
                              },
                              "right": {
                                "type": "CallExpression",
                                "callee": {
                                  "type": "Identifier",
                                  "name": "d3_geo_graticuleX"
                                },
                                "arguments": [
                                  {
                                    "type": "Identifier",
                                    "name": "Y0"
                                  },
                                  {
                                    "type": "Identifier",
                                    "name": "Y1"
                                  },
                                  {
                                    "type": "Literal",
                                    "value": 90,
                                    "raw": "90"
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
                                "name": "Y"
                              },
                              "right": {
                                "type": "CallExpression",
                                "callee": {
                                  "type": "Identifier",
                                  "name": "d3_geo_graticuleY"
                                },
                                "arguments": [
                                  {
                                    "type": "Identifier",
                                    "name": "X0"
                                  },
                                  {
                                    "type": "Identifier",
                                    "name": "X1"
                                  },
                                  {
                                    "type": "Identifier",
                                    "name": "precision"
                                  }
                                ]
                              }
                            }
                          },
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "Identifier",
                              "name": "graticule"
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
                        "type": "CallExpression",
                        "callee": {
                          "type": "MemberExpression",
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "name": "graticule"
                          },
                          "property": {
                            "type": "Identifier",
                            "name": "majorExtent"
                          }
                        },
                        "arguments": [
                          {
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
                                      "value": 180,
                                      "raw": "180"
                                    },
                                    "prefix": true
                                  },
                                  {
                                    "type": "BinaryExpression",
                                    "operator": "+",
                                    "left": {
                                      "type": "UnaryExpression",
                                      "operator": "-",
                                      "argument": {
                                        "type": "Literal",
                                        "value": 90,
                                        "raw": "90"
                                      },
                                      "prefix": true
                                    },
                                    "right": {
                                      "type": "Identifier",
                                      "name": "ε"
                                    }
                                  }
                                ]
                              },
                              {
                                "type": "ArrayExpression",
                                "elements": [
                                  {
                                    "type": "Literal",
                                    "value": 180,
                                    "raw": "180"
                                  },
                                  {
                                    "type": "BinaryExpression",
                                    "operator": "-",
                                    "left": {
                                      "type": "Literal",
                                      "value": 90,
                                      "raw": "90"
                                    },
                                    "right": {
                                      "type": "Identifier",
                                      "name": "ε"
                                    }
                                  }
                                ]
                              }
                            ]
                          }
                        ]
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "minorExtent"
                      }
                    },
                    "arguments": [
                      {
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
                                  "value": 180,
                                  "raw": "180"
                                },
                                "prefix": true
                              },
                              {
                                "type": "BinaryExpression",
                                "operator": "-",
                                "left": {
                                  "type": "UnaryExpression",
                                  "operator": "-",
                                  "argument": {
                                    "type": "Literal",
                                    "value": 80,
                                    "raw": "80"
                                  },
                                  "prefix": true
                                },
                                "right": {
                                  "type": "Identifier",
                                  "name": "ε"
                                }
                              }
                            ]
                          },
                          {
                            "type": "ArrayExpression",
                            "elements": [
                              {
                                "type": "Literal",
                                "value": 180,
                                "raw": "180"
                              },
                              {
                                "type": "BinaryExpression",
                                "operator": "+",
                                "left": {
                                  "type": "Literal",
                                  "value": 80,
                                  "raw": "80"
                                },
                                "right": {
                                  "type": "Identifier",
                                  "name": "ε"
                                }
                              }
                            ]
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
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "name": "d3_geo_graticuleX"
        },
        "params": [
          {
            "type": "Identifier",
            "name": "y0"
          },
          {
            "type": "Identifier",
            "name": "y1"
          },
          {
            "type": "Identifier",
            "name": "dy"
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
                    "name": "y"
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
                            "name": "d3"
                          },
                          "property": {
                            "type": "Identifier",
                            "name": "range"
                          }
                        },
                        "arguments": [
                          {
                            "type": "Identifier",
                            "name": "y0"
                          },
                          {
                            "type": "BinaryExpression",
                            "operator": "-",
                            "left": {
                              "type": "Identifier",
                              "name": "y1"
                            },
                            "right": {
                              "type": "Identifier",
                              "name": "ε"
                            }
                          },
                          {
                            "type": "Identifier",
                            "name": "dy"
                          }
                        ]
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "concat"
                      }
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "name": "y1"
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
                    "name": "x"
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
                            "name": "y"
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
                                    "type": "ArrayExpression",
                                    "elements": [
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
          "name": "d3_geo_graticuleY"
        },
        "params": [
          {
            "type": "Identifier",
            "name": "x0"
          },
          {
            "type": "Identifier",
            "name": "x1"
          },
          {
            "type": "Identifier",
            "name": "dx"
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
                            "name": "d3"
                          },
                          "property": {
                            "type": "Identifier",
                            "name": "range"
                          }
                        },
                        "arguments": [
                          {
                            "type": "Identifier",
                            "name": "x0"
                          },
                          {
                            "type": "BinaryExpression",
                            "operator": "-",
                            "left": {
                              "type": "Identifier",
                              "name": "x1"
                            },
                            "right": {
                              "type": "Identifier",
                              "name": "ε"
                            }
                          },
                          {
                            "type": "Identifier",
                            "name": "dx"
                          }
                        ]
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "concat"
                      }
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "name": "x1"
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
                          "type": "MemberExpression",
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "name": "x"
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
                                "name": "x"
                              }
                            ],
                            "defaults": [],
                            "body": {
                              "type": "BlockStatement",
                              "body": [
                                {
                                  "type": "ReturnStatement",
                                  "argument": {
                                    "type": "ArrayExpression",
                                    "elements": [
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
          ]
        },
        "rest": null,
        "generator": false,
        "expression": false
      }
    ]
  },
  "src": "d3.geo.graticule = function () {\n    var x1, x0, X1, X0, y1, y0, Y1, Y0, dx = 10, dy = dx, DX = 90, DY = 360, x, y, X, Y, precision = 2.5;\n    function graticule() {\n        return {\n            type: 'MultiLineString',\n            coordinates: lines()\n        };\n    }\n    function lines() {\n        return d3.range(Math.ceil(X0 / DX) * DX, X1, DX).map(X).concat(d3.range(Math.ceil(Y0 / DY) * DY, Y1, DY).map(Y)).concat(d3.range(Math.ceil(x0 / dx) * dx, x1, dx).filter(function (x) {\n            return abs(x % DX) > ε;\n        }).map(x)).concat(d3.range(Math.ceil(y0 / dy) * dy, y1, dy).filter(function (y) {\n            return abs(y % DY) > ε;\n        }).map(y));\n    }\n    graticule.lines = function () {\n        return lines().map(function (coordinates) {\n            return {\n                type: 'LineString',\n                coordinates: coordinates\n            };\n        });\n    };\n    graticule.outline = function () {\n        return {\n            type: 'Polygon',\n            coordinates: [X(X0).concat(Y(Y1).slice(1), X(X1).reverse().slice(1), Y(Y0).reverse().slice(1))]\n        };\n    };\n    graticule.extent = function (_) {\n        if (!arguments.length)\n            return graticule.minorExtent();\n        return graticule.majorExtent(_).minorExtent(_);\n    };\n    graticule.majorExtent = function (_) {\n        if (!arguments.length)\n            return [\n                [\n                    X0,\n                    Y0\n                ],\n                [\n                    X1,\n                    Y1\n                ]\n            ];\n        X0 = +_[0][0], X1 = +_[1][0];\n        Y0 = +_[0][1], Y1 = +_[1][1];\n        if (X0 > X1)\n            _ = X0, X0 = X1, X1 = _;\n        if (Y0 > Y1)\n            _ = Y0, Y0 = Y1, Y1 = _;\n        return graticule.precision(precision);\n    };\n    graticule.minorExtent = function (_) {\n        if (!arguments.length)\n            return [\n                [\n                    x0,\n                    y0\n                ],\n                [\n                    x1,\n                    y1\n                ]\n            ];\n        x0 = +_[0][0], x1 = +_[1][0];\n        y0 = +_[0][1], y1 = +_[1][1];\n        if (x0 > x1)\n            _ = x0, x0 = x1, x1 = _;\n        if (y0 > y1)\n            _ = y0, y0 = y1, y1 = _;\n        return graticule.precision(precision);\n    };\n    graticule.step = function (_) {\n        if (!arguments.length)\n            return graticule.minorStep();\n        return graticule.majorStep(_).minorStep(_);\n    };\n    graticule.majorStep = function (_) {\n        if (!arguments.length)\n            return [\n                DX,\n                DY\n            ];\n        DX = +_[0], DY = +_[1];\n        return graticule;\n    };\n    graticule.minorStep = function (_) {\n        if (!arguments.length)\n            return [\n                dx,\n                dy\n            ];\n        dx = +_[0], dy = +_[1];\n        return graticule;\n    };\n    graticule.precision = function (_) {\n        if (!arguments.length)\n            return precision;\n        precision = +_;\n        x = d3_geo_graticuleX(y0, y1, 90);\n        y = d3_geo_graticuleY(x0, x1, precision);\n        X = d3_geo_graticuleX(Y0, Y1, 90);\n        Y = d3_geo_graticuleY(X0, X1, precision);\n        return graticule;\n    };\n    return graticule.majorExtent([\n        [\n            -180,\n            -90 + ε\n        ],\n        [\n            180,\n            90 - ε\n        ]\n    ]).minorExtent([\n        [\n            -180,\n            -80 - ε\n        ],\n        [\n            180,\n            80 + ε\n        ]\n    ]);\n};\nfunction d3_geo_graticuleX(y0, y1, dy) {\n    var y = d3.range(y0, y1 - ε, dy).concat(y1);\n    return function (x) {\n        return y.map(function (y) {\n            return [\n                x,\n                y\n            ];\n        });\n    };\n}\nfunction d3_geo_graticuleY(x0, x1, dx) {\n    var x = d3.range(x0, x1 - ε, dx).concat(x1);\n    return function (y) {\n        return x.map(function (x) {\n            return [\n                x,\n                y\n            ];\n        });\n    };\n}"
}