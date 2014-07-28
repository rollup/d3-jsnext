{
  "filepath": "/geo/clip-extent.js",
  "shared": [],
  "dependencies": [
    "d3_geo_clipBufferListener",
    "d3_geom_clipLine",
    "d3.merge",
    "d3_geo_clipPolygon",
    "d3_cross2d",
    "abs"
  ],
  "helpers": [
    "d3_geo_clipExtentMAX",
    "d3_geo_clipExtent"
  ],
  "exports": [
    "d3.geo.clipExtent"
  ],
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
              "name": "d3_geo_clipExtentMAX"
            },
            "init": {
              "type": "Literal",
              "value": 1000000000,
              "raw": "1e9"
            }
          }
        ]
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
              "name": "clipExtent"
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
                        "name": "x1"
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
                        "name": "stream"
                      },
                      "init": null
                    },
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "name": "clip"
                      },
                      "init": null
                    },
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "name": "clipExtent"
                      },
                      "init": {
                        "type": "ObjectExpression",
                        "properties": [
                          {
                            "type": "Property",
                            "key": {
                              "type": "Identifier",
                              "name": "stream"
                            },
                            "value": {
                              "type": "FunctionExpression",
                              "id": null,
                              "params": [
                                {
                                  "type": "Identifier",
                                  "name": "output"
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
                                      "name": "stream"
                                    },
                                    "consequent": {
                                      "type": "ExpressionStatement",
                                      "expression": {
                                        "type": "AssignmentExpression",
                                        "operator": "=",
                                        "left": {
                                          "type": "MemberExpression",
                                          "computed": false,
                                          "object": {
                                            "type": "Identifier",
                                            "name": "stream"
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "name": "valid"
                                          }
                                        },
                                        "right": {
                                          "type": "Literal",
                                          "value": false,
                                          "raw": "false"
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
                                        "name": "stream"
                                      },
                                      "right": {
                                        "type": "CallExpression",
                                        "callee": {
                                          "type": "Identifier",
                                          "name": "clip"
                                        },
                                        "arguments": [
                                          {
                                            "type": "Identifier",
                                            "name": "output"
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
                                          "name": "stream"
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "name": "valid"
                                        }
                                      },
                                      "right": {
                                        "type": "Literal",
                                        "value": true,
                                        "raw": "true"
                                      }
                                    }
                                  },
                                  {
                                    "type": "ReturnStatement",
                                    "argument": {
                                      "type": "Identifier",
                                      "name": "stream"
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
                              "name": "extent"
                            },
                            "value": {
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
                                      "type": "AssignmentExpression",
                                      "operator": "=",
                                      "left": {
                                        "type": "Identifier",
                                        "name": "clip"
                                      },
                                      "right": {
                                        "type": "CallExpression",
                                        "callee": {
                                          "type": "Identifier",
                                          "name": "d3_geo_clipExtent"
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
                                    }
                                  },
                                  {
                                    "type": "IfStatement",
                                    "test": {
                                      "type": "Identifier",
                                      "name": "stream"
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
                                              "type": "MemberExpression",
                                              "computed": false,
                                              "object": {
                                                "type": "Identifier",
                                                "name": "stream"
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "name": "valid"
                                              }
                                            },
                                            "right": {
                                              "type": "Literal",
                                              "value": false,
                                              "raw": "false"
                                            }
                                          },
                                          {
                                            "type": "AssignmentExpression",
                                            "operator": "=",
                                            "left": {
                                              "type": "Identifier",
                                              "name": "stream"
                                            },
                                            "right": {
                                              "type": "Literal",
                                              "value": null,
                                              "raw": "null"
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
                                      "type": "Identifier",
                                      "name": "clipExtent"
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
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "name": "clipExtent"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "extent"
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
                            "type": "ArrayExpression",
                            "elements": [
                              {
                                "type": "Literal",
                                "value": 960,
                                "raw": "960"
                              },
                              {
                                "type": "Literal",
                                "value": 500,
                                "raw": "500"
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
          "name": "d3_geo_clipExtent"
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
            "name": "x1"
          },
          {
            "type": "Identifier",
            "name": "y1"
          }
        ],
        "defaults": [],
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "ReturnStatement",
              "argument": {
                "type": "FunctionExpression",
                "id": null,
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
                            "name": "listener_"
                          },
                          "init": {
                            "type": "Identifier",
                            "name": "listener"
                          }
                        },
                        {
                          "type": "VariableDeclarator",
                          "id": {
                            "type": "Identifier",
                            "name": "bufferListener"
                          },
                          "init": {
                            "type": "CallExpression",
                            "callee": {
                              "type": "Identifier",
                              "name": "d3_geo_clipBufferListener"
                            },
                            "arguments": []
                          }
                        },
                        {
                          "type": "VariableDeclarator",
                          "id": {
                            "type": "Identifier",
                            "name": "clipLine"
                          },
                          "init": {
                            "type": "CallExpression",
                            "callee": {
                              "type": "Identifier",
                              "name": "d3_geom_clipLine"
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
                                "name": "x1"
                              },
                              {
                                "type": "Identifier",
                                "name": "y1"
                              }
                            ]
                          }
                        },
                        {
                          "type": "VariableDeclarator",
                          "id": {
                            "type": "Identifier",
                            "name": "segments"
                          },
                          "init": null
                        },
                        {
                          "type": "VariableDeclarator",
                          "id": {
                            "type": "Identifier",
                            "name": "polygon"
                          },
                          "init": null
                        },
                        {
                          "type": "VariableDeclarator",
                          "id": {
                            "type": "Identifier",
                            "name": "ring"
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
                            "name": "clip"
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
                                          "type": "AssignmentExpression",
                                          "operator": "=",
                                          "left": {
                                            "type": "Identifier",
                                            "name": "listener"
                                          },
                                          "right": {
                                            "type": "Identifier",
                                            "name": "bufferListener"
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
                                            "name": "segments"
                                          },
                                          "right": {
                                            "type": "ArrayExpression",
                                            "elements": []
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
                                            "name": "polygon"
                                          },
                                          "right": {
                                            "type": "ArrayExpression",
                                            "elements": []
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
                                            "value": true,
                                            "raw": "true"
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
                                            "type": "Identifier",
                                            "name": "listener"
                                          },
                                          "right": {
                                            "type": "Identifier",
                                            "name": "listener_"
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
                                            "name": "segments"
                                          },
                                          "right": {
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
                                                "name": "merge"
                                              }
                                            },
                                            "arguments": [
                                              {
                                                "type": "Identifier",
                                                "name": "segments"
                                              }
                                            ]
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
                                              "name": "clipStartInside"
                                            },
                                            "init": {
                                              "type": "CallExpression",
                                              "callee": {
                                                "type": "Identifier",
                                                "name": "insidePolygon"
                                              },
                                              "arguments": [
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
                                                }
                                              ]
                                            }
                                          },
                                          {
                                            "type": "VariableDeclarator",
                                            "id": {
                                              "type": "Identifier",
                                              "name": "inside"
                                            },
                                            "init": {
                                              "type": "LogicalExpression",
                                              "operator": "&&",
                                              "left": {
                                                "type": "Identifier",
                                                "name": "clean"
                                              },
                                              "right": {
                                                "type": "Identifier",
                                                "name": "clipStartInside"
                                              }
                                            }
                                          },
                                          {
                                            "type": "VariableDeclarator",
                                            "id": {
                                              "type": "Identifier",
                                              "name": "visible"
                                            },
                                            "init": {
                                              "type": "MemberExpression",
                                              "computed": false,
                                              "object": {
                                                "type": "Identifier",
                                                "name": "segments"
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "name": "length"
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
                                            "type": "Identifier",
                                            "name": "inside"
                                          },
                                          "right": {
                                            "type": "Identifier",
                                            "name": "visible"
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
                                                    "name": "polygonStart"
                                                  }
                                                },
                                                "arguments": []
                                              }
                                            },
                                            {
                                              "type": "IfStatement",
                                              "test": {
                                                "type": "Identifier",
                                                "name": "inside"
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
                                                          "type": "Identifier",
                                                          "name": "listener"
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
                                              "alternate": null
                                            },
                                            {
                                              "type": "IfStatement",
                                              "test": {
                                                "type": "Identifier",
                                                "name": "visible"
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
                                                        "name": "d3_geo_clipPolygon"
                                                      },
                                                      "arguments": [
                                                        {
                                                          "type": "Identifier",
                                                          "name": "segments"
                                                        },
                                                        {
                                                          "type": "Identifier",
                                                          "name": "compare"
                                                        },
                                                        {
                                                          "type": "Identifier",
                                                          "name": "clipStartInside"
                                                        },
                                                        {
                                                          "type": "Identifier",
                                                          "name": "interpolate"
                                                        },
                                                        {
                                                          "type": "Identifier",
                                                          "name": "listener"
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
                                                    "name": "polygonEnd"
                                                  }
                                                },
                                                "arguments": []
                                              }
                                            }
                                          ]
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
                                            "name": "segments"
                                          },
                                          "right": {
                                            "type": "AssignmentExpression",
                                            "operator": "=",
                                            "left": {
                                              "type": "Identifier",
                                              "name": "polygon"
                                            },
                                            "right": {
                                              "type": "AssignmentExpression",
                                              "operator": "=",
                                              "left": {
                                                "type": "Identifier",
                                                "name": "ring"
                                              },
                                              "right": {
                                                "type": "Literal",
                                                "value": null,
                                                "raw": "null"
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
                        "name": "insidePolygon"
                      },
                      "params": [
                        {
                          "type": "Identifier",
                          "name": "p"
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
                                  "name": "wn"
                                },
                                "init": {
                                  "type": "Literal",
                                  "value": 0,
                                  "raw": "0"
                                }
                              },
                              {
                                "type": "VariableDeclarator",
                                "id": {
                                  "type": "Identifier",
                                  "name": "n"
                                },
                                "init": {
                                  "type": "MemberExpression",
                                  "computed": false,
                                  "object": {
                                    "type": "Identifier",
                                    "name": "polygon"
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
                                  "name": "y"
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
                              }
                            ],
                            "kind": "var"
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
                                    "name": "i"
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
                            "test": {
                              "type": "BinaryExpression",
                              "operator": "<",
                              "left": {
                                "type": "Identifier",
                                "name": "i"
                              },
                              "right": {
                                "type": "Identifier",
                                "name": "n"
                              }
                            },
                            "update": {
                              "type": "UpdateExpression",
                              "operator": "++",
                              "argument": {
                                "type": "Identifier",
                                "name": "i"
                              },
                              "prefix": true
                            },
                            "body": {
                              "type": "BlockStatement",
                              "body": [
                                {
                                  "type": "ForStatement",
                                  "init": {
                                    "type": "VariableDeclaration",
                                    "declarations": [
                                      {
                                        "type": "VariableDeclarator",
                                        "id": {
                                          "type": "Identifier",
                                          "name": "j"
                                        },
                                        "init": {
                                          "type": "Literal",
                                          "value": 1,
                                          "raw": "1"
                                        }
                                      },
                                      {
                                        "type": "VariableDeclarator",
                                        "id": {
                                          "type": "Identifier",
                                          "name": "v"
                                        },
                                        "init": {
                                          "type": "MemberExpression",
                                          "computed": true,
                                          "object": {
                                            "type": "Identifier",
                                            "name": "polygon"
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "name": "i"
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
                                          "type": "MemberExpression",
                                          "computed": false,
                                          "object": {
                                            "type": "Identifier",
                                            "name": "v"
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
                                          "name": "a"
                                        },
                                        "init": {
                                          "type": "MemberExpression",
                                          "computed": true,
                                          "object": {
                                            "type": "Identifier",
                                            "name": "v"
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
                                          "name": "b"
                                        },
                                        "init": null
                                      }
                                    ],
                                    "kind": "var"
                                  },
                                  "test": {
                                    "type": "BinaryExpression",
                                    "operator": "<",
                                    "left": {
                                      "type": "Identifier",
                                      "name": "j"
                                    },
                                    "right": {
                                      "type": "Identifier",
                                      "name": "m"
                                    }
                                  },
                                  "update": {
                                    "type": "UpdateExpression",
                                    "operator": "++",
                                    "argument": {
                                      "type": "Identifier",
                                      "name": "j"
                                    },
                                    "prefix": true
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
                                            "name": "b"
                                          },
                                          "right": {
                                            "type": "MemberExpression",
                                            "computed": true,
                                            "object": {
                                              "type": "Identifier",
                                              "name": "v"
                                            },
                                            "property": {
                                              "type": "Identifier",
                                              "name": "j"
                                            }
                                          }
                                        }
                                      },
                                      {
                                        "type": "IfStatement",
                                        "test": {
                                          "type": "BinaryExpression",
                                          "operator": "<=",
                                          "left": {
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
                                          "right": {
                                            "type": "Identifier",
                                            "name": "y"
                                          }
                                        },
                                        "consequent": {
                                          "type": "BlockStatement",
                                          "body": [
                                            {
                                              "type": "IfStatement",
                                              "test": {
                                                "type": "LogicalExpression",
                                                "operator": "&&",
                                                "left": {
                                                  "type": "BinaryExpression",
                                                  "operator": ">",
                                                  "left": {
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
                                                  },
                                                  "right": {
                                                    "type": "Identifier",
                                                    "name": "y"
                                                  }
                                                },
                                                "right": {
                                                  "type": "BinaryExpression",
                                                  "operator": ">",
                                                  "left": {
                                                    "type": "CallExpression",
                                                    "callee": {
                                                      "type": "Identifier",
                                                      "name": "d3_cross2d"
                                                    },
                                                    "arguments": [
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
                                                        "name": "p"
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
                                                "type": "ExpressionStatement",
                                                "expression": {
                                                  "type": "UpdateExpression",
                                                  "operator": "++",
                                                  "argument": {
                                                    "type": "Identifier",
                                                    "name": "wn"
                                                  },
                                                  "prefix": true
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
                                              "type": "IfStatement",
                                              "test": {
                                                "type": "LogicalExpression",
                                                "operator": "&&",
                                                "left": {
                                                  "type": "BinaryExpression",
                                                  "operator": "<=",
                                                  "left": {
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
                                                  },
                                                  "right": {
                                                    "type": "Identifier",
                                                    "name": "y"
                                                  }
                                                },
                                                "right": {
                                                  "type": "BinaryExpression",
                                                  "operator": "<",
                                                  "left": {
                                                    "type": "CallExpression",
                                                    "callee": {
                                                      "type": "Identifier",
                                                      "name": "d3_cross2d"
                                                    },
                                                    "arguments": [
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
                                                        "name": "p"
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
                                                "type": "ExpressionStatement",
                                                "expression": {
                                                  "type": "UpdateExpression",
                                                  "operator": "--",
                                                  "argument": {
                                                    "type": "Identifier",
                                                    "name": "wn"
                                                  },
                                                  "prefix": true
                                                }
                                              },
                                              "alternate": null
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
                                            "name": "a"
                                          },
                                          "right": {
                                            "type": "Identifier",
                                            "name": "b"
                                          }
                                        }
                                      }
                                    ]
                                  }
                                }
                              ]
                            }
                          },
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "BinaryExpression",
                              "operator": "!==",
                              "left": {
                                "type": "Identifier",
                                "name": "wn"
                              },
                              "right": {
                                "type": "Literal",
                                "value": 0,
                                "raw": "0"
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
                        "name": "interpolate"
                      },
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
                                  "name": "a"
                                },
                                "init": {
                                  "type": "Literal",
                                  "value": 0,
                                  "raw": "0"
                                }
                              },
                              {
                                "type": "VariableDeclarator",
                                "id": {
                                  "type": "Identifier",
                                  "name": "a1"
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
                              "type": "LogicalExpression",
                              "operator": "||",
                              "left": {
                                "type": "LogicalExpression",
                                "operator": "||",
                                "left": {
                                  "type": "BinaryExpression",
                                  "operator": "==",
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
                                "right": {
                                  "type": "BinaryExpression",
                                  "operator": "!==",
                                  "left": {
                                    "type": "AssignmentExpression",
                                    "operator": "=",
                                    "left": {
                                      "type": "Identifier",
                                      "name": "a"
                                    },
                                    "right": {
                                      "type": "CallExpression",
                                      "callee": {
                                        "type": "Identifier",
                                        "name": "corner"
                                      },
                                      "arguments": [
                                        {
                                          "type": "Identifier",
                                          "name": "from"
                                        },
                                        {
                                          "type": "Identifier",
                                          "name": "direction"
                                        }
                                      ]
                                    }
                                  },
                                  "right": {
                                    "type": "AssignmentExpression",
                                    "operator": "=",
                                    "left": {
                                      "type": "Identifier",
                                      "name": "a1"
                                    },
                                    "right": {
                                      "type": "CallExpression",
                                      "callee": {
                                        "type": "Identifier",
                                        "name": "corner"
                                      },
                                      "arguments": [
                                        {
                                          "type": "Identifier",
                                          "name": "to"
                                        },
                                        {
                                          "type": "Identifier",
                                          "name": "direction"
                                        }
                                      ]
                                    }
                                  }
                                }
                              },
                              "right": {
                                "type": "BinaryExpression",
                                "operator": "^",
                                "left": {
                                  "type": "BinaryExpression",
                                  "operator": "<",
                                  "left": {
                                    "type": "CallExpression",
                                    "callee": {
                                      "type": "Identifier",
                                      "name": "comparePoints"
                                    },
                                    "arguments": [
                                      {
                                        "type": "Identifier",
                                        "name": "from"
                                      },
                                      {
                                        "type": "Identifier",
                                        "name": "to"
                                      }
                                    ]
                                  },
                                  "right": {
                                    "type": "Literal",
                                    "value": 0,
                                    "raw": "0"
                                  }
                                },
                                "right": {
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
                                }
                              }
                            },
                            "consequent": {
                              "type": "BlockStatement",
                              "body": [
                                {
                                  "type": "DoWhileStatement",
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
                                              "type": "ConditionalExpression",
                                              "test": {
                                                "type": "LogicalExpression",
                                                "operator": "||",
                                                "left": {
                                                  "type": "BinaryExpression",
                                                  "operator": "===",
                                                  "left": {
                                                    "type": "Identifier",
                                                    "name": "a"
                                                  },
                                                  "right": {
                                                    "type": "Literal",
                                                    "value": 0,
                                                    "raw": "0"
                                                  }
                                                },
                                                "right": {
                                                  "type": "BinaryExpression",
                                                  "operator": "===",
                                                  "left": {
                                                    "type": "Identifier",
                                                    "name": "a"
                                                  },
                                                  "right": {
                                                    "type": "Literal",
                                                    "value": 3,
                                                    "raw": "3"
                                                  }
                                                }
                                              },
                                              "consequent": {
                                                "type": "Identifier",
                                                "name": "x0"
                                              },
                                              "alternate": {
                                                "type": "Identifier",
                                                "name": "x1"
                                              }
                                            },
                                            {
                                              "type": "ConditionalExpression",
                                              "test": {
                                                "type": "BinaryExpression",
                                                "operator": ">",
                                                "left": {
                                                  "type": "Identifier",
                                                  "name": "a"
                                                },
                                                "right": {
                                                  "type": "Literal",
                                                  "value": 1,
                                                  "raw": "1"
                                                }
                                              },
                                              "consequent": {
                                                "type": "Identifier",
                                                "name": "y1"
                                              },
                                              "alternate": {
                                                "type": "Identifier",
                                                "name": "y0"
                                              }
                                            }
                                          ]
                                        }
                                      }
                                    ]
                                  },
                                  "test": {
                                    "type": "BinaryExpression",
                                    "operator": "!==",
                                    "left": {
                                      "type": "AssignmentExpression",
                                      "operator": "=",
                                      "left": {
                                        "type": "Identifier",
                                        "name": "a"
                                      },
                                      "right": {
                                        "type": "BinaryExpression",
                                        "operator": "%",
                                        "left": {
                                          "type": "BinaryExpression",
                                          "operator": "+",
                                          "left": {
                                            "type": "BinaryExpression",
                                            "operator": "+",
                                            "left": {
                                              "type": "Identifier",
                                              "name": "a"
                                            },
                                            "right": {
                                              "type": "Identifier",
                                              "name": "direction"
                                            }
                                          },
                                          "right": {
                                            "type": "Literal",
                                            "value": 4,
                                            "raw": "4"
                                          }
                                        },
                                        "right": {
                                          "type": "Literal",
                                          "value": 4,
                                          "raw": "4"
                                        }
                                      }
                                    },
                                    "right": {
                                      "type": "Identifier",
                                      "name": "a1"
                                    }
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
                                          "type": "Identifier",
                                          "name": "to"
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
                                          "name": "to"
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
                    },
                    {
                      "type": "FunctionDeclaration",
                      "id": {
                        "type": "Identifier",
                        "name": "pointVisible"
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
                            "type": "ReturnStatement",
                            "argument": {
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
                                    "operator": "<=",
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
                                    "operator": "<=",
                                    "left": {
                                      "type": "Identifier",
                                      "name": "x"
                                    },
                                    "right": {
                                      "type": "Identifier",
                                      "name": "x1"
                                    }
                                  }
                                },
                                "right": {
                                  "type": "BinaryExpression",
                                  "operator": "<=",
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
                                "operator": "<=",
                                "left": {
                                  "type": "Identifier",
                                  "name": "y"
                                },
                                "right": {
                                  "type": "Identifier",
                                  "name": "y1"
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
                            "type": "IfStatement",
                            "test": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "Identifier",
                                "name": "pointVisible"
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
                                    "name": "point"
                                  }
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
                      "type": "VariableDeclaration",
                      "declarations": [
                        {
                          "type": "VariableDeclarator",
                          "id": {
                            "type": "Identifier",
                            "name": "x__"
                          },
                          "init": null
                        },
                        {
                          "type": "VariableDeclarator",
                          "id": {
                            "type": "Identifier",
                            "name": "y__"
                          },
                          "init": null
                        },
                        {
                          "type": "VariableDeclarator",
                          "id": {
                            "type": "Identifier",
                            "name": "v__"
                          },
                          "init": null
                        },
                        {
                          "type": "VariableDeclarator",
                          "id": {
                            "type": "Identifier",
                            "name": "x_"
                          },
                          "init": null
                        },
                        {
                          "type": "VariableDeclarator",
                          "id": {
                            "type": "Identifier",
                            "name": "y_"
                          },
                          "init": null
                        },
                        {
                          "type": "VariableDeclarator",
                          "id": {
                            "type": "Identifier",
                            "name": "v_"
                          },
                          "init": null
                        },
                        {
                          "type": "VariableDeclarator",
                          "id": {
                            "type": "Identifier",
                            "name": "first"
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
                                "type": "MemberExpression",
                                "computed": false,
                                "object": {
                                  "type": "Identifier",
                                  "name": "clip"
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
                            "type": "IfStatement",
                            "test": {
                              "type": "Identifier",
                              "name": "polygon"
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
                                    "name": "polygon"
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
                                      "name": "ring"
                                    },
                                    "right": {
                                      "type": "ArrayExpression",
                                      "elements": []
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
                                "name": "first"
                              },
                              "right": {
                                "type": "Literal",
                                "value": true,
                                "raw": "true"
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
                                "name": "v_"
                              },
                              "right": {
                                "type": "Literal",
                                "value": false,
                                "raw": "false"
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
                                "name": "x_"
                              },
                              "right": {
                                "type": "AssignmentExpression",
                                "operator": "=",
                                "left": {
                                  "type": "Identifier",
                                  "name": "y_"
                                },
                                "right": {
                                  "type": "Identifier",
                                  "name": "NaN"
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
                        "name": "lineEnd"
                      },
                      "params": [],
                      "defaults": [],
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "IfStatement",
                            "test": {
                              "type": "Identifier",
                              "name": "segments"
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
                                      "name": "linePoint"
                                    },
                                    "arguments": [
                                      {
                                        "type": "Identifier",
                                        "name": "x__"
                                      },
                                      {
                                        "type": "Identifier",
                                        "name": "y__"
                                      }
                                    ]
                                  }
                                },
                                {
                                  "type": "IfStatement",
                                  "test": {
                                    "type": "LogicalExpression",
                                    "operator": "&&",
                                    "left": {
                                      "type": "Identifier",
                                      "name": "v__"
                                    },
                                    "right": {
                                      "type": "Identifier",
                                      "name": "v_"
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
                                          "name": "bufferListener"
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "name": "rejoin"
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
                                    "type": "CallExpression",
                                    "callee": {
                                      "type": "MemberExpression",
                                      "computed": false,
                                      "object": {
                                        "type": "Identifier",
                                        "name": "segments"
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "name": "push"
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
                                            "name": "bufferListener"
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "name": "buffer"
                                          }
                                        },
                                        "arguments": []
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
                              "type": "AssignmentExpression",
                              "operator": "=",
                              "left": {
                                "type": "MemberExpression",
                                "computed": false,
                                "object": {
                                  "type": "Identifier",
                                  "name": "clip"
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
                            "type": "IfStatement",
                            "test": {
                              "type": "Identifier",
                              "name": "v_"
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
                                  "type": "MemberExpression",
                                  "computed": false,
                                  "object": {
                                    "type": "Identifier",
                                    "name": "Math"
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "name": "max"
                                  }
                                },
                                "arguments": [
                                  {
                                    "type": "UnaryExpression",
                                    "operator": "-",
                                    "argument": {
                                      "type": "Identifier",
                                      "name": "d3_geo_clipExtentMAX"
                                    },
                                    "prefix": true
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
                                        "name": "min"
                                      }
                                    },
                                    "arguments": [
                                      {
                                        "type": "Identifier",
                                        "name": "d3_geo_clipExtentMAX"
                                      },
                                      {
                                        "type": "Identifier",
                                        "name": "x"
                                      }
                                    ]
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
                                  "type": "MemberExpression",
                                  "computed": false,
                                  "object": {
                                    "type": "Identifier",
                                    "name": "Math"
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "name": "max"
                                  }
                                },
                                "arguments": [
                                  {
                                    "type": "UnaryExpression",
                                    "operator": "-",
                                    "argument": {
                                      "type": "Identifier",
                                      "name": "d3_geo_clipExtentMAX"
                                    },
                                    "prefix": true
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
                                        "name": "min"
                                      }
                                    },
                                    "arguments": [
                                      {
                                        "type": "Identifier",
                                        "name": "d3_geo_clipExtentMAX"
                                      },
                                      {
                                        "type": "Identifier",
                                        "name": "y"
                                      }
                                    ]
                                  }
                                ]
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
                                  "name": "v"
                                },
                                "init": {
                                  "type": "CallExpression",
                                  "callee": {
                                    "type": "Identifier",
                                    "name": "pointVisible"
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
                            ],
                            "kind": "var"
                          },
                          {
                            "type": "IfStatement",
                            "test": {
                              "type": "Identifier",
                              "name": "polygon"
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
                                    "name": "ring"
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
                                        "type": "Identifier",
                                        "name": "x"
                                      },
                                      {
                                        "type": "Identifier",
                                        "name": "y"
                                      }
                                    ]
                                  }
                                ]
                              }
                            },
                            "alternate": null
                          },
                          {
                            "type": "IfStatement",
                            "test": {
                              "type": "Identifier",
                              "name": "first"
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
                                          "name": "x__"
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
                                          "name": "y__"
                                        },
                                        "right": {
                                          "type": "Identifier",
                                          "name": "y"
                                        }
                                      },
                                      {
                                        "type": "AssignmentExpression",
                                        "operator": "=",
                                        "left": {
                                          "type": "Identifier",
                                          "name": "v__"
                                        },
                                        "right": {
                                          "type": "Identifier",
                                          "name": "v"
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
                                      "name": "first"
                                    },
                                    "right": {
                                      "type": "Literal",
                                      "value": false,
                                      "raw": "false"
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
                                  "alternate": null
                                }
                              ]
                            },
                            "alternate": {
                              "type": "BlockStatement",
                              "body": [
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
                                      "type": "Identifier",
                                      "name": "v_"
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
                                          "name": "point"
                                        }
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
                                  },
                                  "alternate": {
                                    "type": "BlockStatement",
                                    "body": [
                                      {
                                        "type": "VariableDeclaration",
                                        "declarations": [
                                          {
                                            "type": "VariableDeclarator",
                                            "id": {
                                              "type": "Identifier",
                                              "name": "l"
                                            },
                                            "init": {
                                              "type": "ObjectExpression",
                                              "properties": [
                                                {
                                                  "type": "Property",
                                                  "key": {
                                                    "type": "Identifier",
                                                    "name": "a"
                                                  },
                                                  "value": {
                                                    "type": "ObjectExpression",
                                                    "properties": [
                                                      {
                                                        "type": "Property",
                                                        "key": {
                                                          "type": "Identifier",
                                                          "name": "x"
                                                        },
                                                        "value": {
                                                          "type": "Identifier",
                                                          "name": "x_"
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
                                                          "type": "Identifier",
                                                          "name": "y_"
                                                        },
                                                        "kind": "init"
                                                      }
                                                    ]
                                                  },
                                                  "kind": "init"
                                                },
                                                {
                                                  "type": "Property",
                                                  "key": {
                                                    "type": "Identifier",
                                                    "name": "b"
                                                  },
                                                  "value": {
                                                    "type": "ObjectExpression",
                                                    "properties": [
                                                      {
                                                        "type": "Property",
                                                        "key": {
                                                          "type": "Identifier",
                                                          "name": "x"
                                                        },
                                                        "value": {
                                                          "type": "Identifier",
                                                          "name": "x"
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
                                                          "type": "Identifier",
                                                          "name": "y"
                                                        },
                                                        "kind": "init"
                                                      }
                                                    ]
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
                                        "type": "IfStatement",
                                        "test": {
                                          "type": "CallExpression",
                                          "callee": {
                                            "type": "Identifier",
                                            "name": "clipLine"
                                          },
                                          "arguments": [
                                            {
                                              "type": "Identifier",
                                              "name": "l"
                                            }
                                          ]
                                        },
                                        "consequent": {
                                          "type": "BlockStatement",
                                          "body": [
                                            {
                                              "type": "IfStatement",
                                              "test": {
                                                "type": "UnaryExpression",
                                                "operator": "!",
                                                "argument": {
                                                  "type": "Identifier",
                                                  "name": "v_"
                                                },
                                                "prefix": true
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
                                                          "computed": false,
                                                          "object": {
                                                            "type": "MemberExpression",
                                                            "computed": false,
                                                            "object": {
                                                              "type": "Identifier",
                                                              "name": "l"
                                                            },
                                                            "property": {
                                                              "type": "Identifier",
                                                              "name": "a"
                                                            }
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
                                                            "type": "MemberExpression",
                                                            "computed": false,
                                                            "object": {
                                                              "type": "Identifier",
                                                              "name": "l"
                                                            },
                                                            "property": {
                                                              "type": "Identifier",
                                                              "name": "a"
                                                            }
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
                                                    "computed": false,
                                                    "object": {
                                                      "type": "MemberExpression",
                                                      "computed": false,
                                                      "object": {
                                                        "type": "Identifier",
                                                        "name": "l"
                                                      },
                                                      "property": {
                                                        "type": "Identifier",
                                                        "name": "b"
                                                      }
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
                                                      "type": "MemberExpression",
                                                      "computed": false,
                                                      "object": {
                                                        "type": "Identifier",
                                                        "name": "l"
                                                      },
                                                      "property": {
                                                        "type": "Identifier",
                                                        "name": "b"
                                                      }
                                                    },
                                                    "property": {
                                                      "type": "Identifier",
                                                      "name": "y"
                                                    }
                                                  }
                                                ]
                                              }
                                            },
                                            {
                                              "type": "IfStatement",
                                              "test": {
                                                "type": "UnaryExpression",
                                                "operator": "!",
                                                "argument": {
                                                  "type": "Identifier",
                                                  "name": "v"
                                                },
                                                "prefix": true
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
                                                  "name": "clean"
                                                },
                                                "right": {
                                                  "type": "Literal",
                                                  "value": false,
                                                  "raw": "false"
                                                }
                                              }
                                            }
                                          ]
                                        },
                                        "alternate": {
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
                                                      "type": "Identifier",
                                                      "name": "x"
                                                    },
                                                    {
                                                      "type": "Identifier",
                                                      "name": "y"
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
                                                    "name": "clean"
                                                  },
                                                  "right": {
                                                    "type": "Literal",
                                                    "value": false,
                                                    "raw": "false"
                                                  }
                                                }
                                              }
                                            ]
                                          },
                                          "alternate": null
                                        }
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
                                  "operator": "=",
                                  "left": {
                                    "type": "Identifier",
                                    "name": "x_"
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
                                    "name": "y_"
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "name": "y"
                                  }
                                },
                                {
                                  "type": "AssignmentExpression",
                                  "operator": "=",
                                  "left": {
                                    "type": "Identifier",
                                    "name": "v_"
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "name": "v"
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
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "Identifier",
                        "name": "clip"
                      }
                    }
                  ]
                },
                "rest": null,
                "generator": false,
                "expression": false
              }
            },
            {
              "type": "FunctionDeclaration",
              "id": {
                "type": "Identifier",
                "name": "corner"
              },
              "params": [
                {
                  "type": "Identifier",
                  "name": "p"
                },
                {
                  "type": "Identifier",
                  "name": "direction"
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
                                  "name": "p"
                                },
                                "property": {
                                  "type": "Literal",
                                  "value": 0,
                                  "raw": "0"
                                }
                              },
                              "right": {
                                "type": "Identifier",
                                "name": "x0"
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
                          "type": "Literal",
                          "value": 0,
                          "raw": "0"
                        },
                        "alternate": {
                          "type": "Literal",
                          "value": 3,
                          "raw": "3"
                        }
                      },
                      "alternate": {
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
                                    "name": "p"
                                  },
                                  "property": {
                                    "type": "Literal",
                                    "value": 0,
                                    "raw": "0"
                                  }
                                },
                                "right": {
                                  "type": "Identifier",
                                  "name": "x1"
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
                            "type": "Literal",
                            "value": 2,
                            "raw": "2"
                          },
                          "alternate": {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1"
                          }
                        },
                        "alternate": {
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
                                      "name": "p"
                                    },
                                    "property": {
                                      "type": "Literal",
                                      "value": 1,
                                      "raw": "1"
                                    }
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "name": "y0"
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
                              "type": "Literal",
                              "value": 1,
                              "raw": "1"
                            },
                            "alternate": {
                              "type": "Literal",
                              "value": 0,
                              "raw": "0"
                            }
                          },
                          "alternate": {
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
                              "type": "Literal",
                              "value": 3,
                              "raw": "3"
                            },
                            "alternate": {
                              "type": "Literal",
                              "value": 2,
                              "raw": "2"
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
            },
            {
              "type": "FunctionDeclaration",
              "id": {
                "type": "Identifier",
                "name": "compare"
              },
              "params": [
                {
                  "type": "Identifier",
                  "name": "a"
                },
                {
                  "type": "Identifier",
                  "name": "b"
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
                        "name": "comparePoints"
                      },
                      "arguments": [
                        {
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
                        {
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
                "name": "comparePoints"
              },
              "params": [
                {
                  "type": "Identifier",
                  "name": "a"
                },
                {
                  "type": "Identifier",
                  "name": "b"
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
                          "name": "ca"
                        },
                        "init": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "Identifier",
                            "name": "corner"
                          },
                          "arguments": [
                            {
                              "type": "Identifier",
                              "name": "a"
                            },
                            {
                              "type": "Literal",
                              "value": 1,
                              "raw": "1"
                            }
                          ]
                        }
                      },
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "name": "cb"
                        },
                        "init": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "Identifier",
                            "name": "corner"
                          },
                          "arguments": [
                            {
                              "type": "Identifier",
                              "name": "b"
                            },
                            {
                              "type": "Literal",
                              "value": 1,
                              "raw": "1"
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
                      "type": "ConditionalExpression",
                      "test": {
                        "type": "BinaryExpression",
                        "operator": "!==",
                        "left": {
                          "type": "Identifier",
                          "name": "ca"
                        },
                        "right": {
                          "type": "Identifier",
                          "name": "cb"
                        }
                      },
                      "consequent": {
                        "type": "BinaryExpression",
                        "operator": "-",
                        "left": {
                          "type": "Identifier",
                          "name": "ca"
                        },
                        "right": {
                          "type": "Identifier",
                          "name": "cb"
                        }
                      },
                      "alternate": {
                        "type": "ConditionalExpression",
                        "test": {
                          "type": "BinaryExpression",
                          "operator": "===",
                          "left": {
                            "type": "Identifier",
                            "name": "ca"
                          },
                          "right": {
                            "type": "Literal",
                            "value": 0,
                            "raw": "0"
                          }
                        },
                        "consequent": {
                          "type": "BinaryExpression",
                          "operator": "-",
                          "left": {
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
                          },
                          "right": {
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
                        "alternate": {
                          "type": "ConditionalExpression",
                          "test": {
                            "type": "BinaryExpression",
                            "operator": "===",
                            "left": {
                              "type": "Identifier",
                              "name": "ca"
                            },
                            "right": {
                              "type": "Literal",
                              "value": 1,
                              "raw": "1"
                            }
                          },
                          "consequent": {
                            "type": "BinaryExpression",
                            "operator": "-",
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
                          "alternate": {
                            "type": "ConditionalExpression",
                            "test": {
                              "type": "BinaryExpression",
                              "operator": "===",
                              "left": {
                                "type": "Identifier",
                                "name": "ca"
                              },
                              "right": {
                                "type": "Literal",
                                "value": 2,
                                "raw": "2"
                              }
                            },
                            "consequent": {
                              "type": "BinaryExpression",
                              "operator": "-",
                              "left": {
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
                              "right": {
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
                            "alternate": {
                              "type": "BinaryExpression",
                              "operator": "-",
                              "left": {
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
                              },
                              "right": {
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
        "rest": null,
        "generator": false,
        "expression": false
      }
    ]
  },
  "src": "var d3_geo_clipExtentMAX = 1000000000;\nd3.geo.clipExtent = function () {\n    var x0, y0, x1, y1, stream, clip, clipExtent = {\n            stream: function (output) {\n                if (stream)\n                    stream.valid = false;\n                stream = clip(output);\n                stream.valid = true;\n                return stream;\n            },\n            extent: function (_) {\n                if (!arguments.length)\n                    return [\n                        [\n                            x0,\n                            y0\n                        ],\n                        [\n                            x1,\n                            y1\n                        ]\n                    ];\n                clip = d3_geo_clipExtent(x0 = +_[0][0], y0 = +_[0][1], x1 = +_[1][0], y1 = +_[1][1]);\n                if (stream)\n                    stream.valid = false, stream = null;\n                return clipExtent;\n            }\n        };\n    return clipExtent.extent([\n        [\n            0,\n            0\n        ],\n        [\n            960,\n            500\n        ]\n    ]);\n};\nfunction d3_geo_clipExtent(x0, y0, x1, y1) {\n    return function (listener) {\n        var listener_ = listener, bufferListener = d3_geo_clipBufferListener(), clipLine = d3_geom_clipLine(x0, y0, x1, y1), segments, polygon, ring;\n        var clip = {\n                point: point,\n                lineStart: lineStart,\n                lineEnd: lineEnd,\n                polygonStart: function () {\n                    listener = bufferListener;\n                    segments = [];\n                    polygon = [];\n                    clean = true;\n                },\n                polygonEnd: function () {\n                    listener = listener_;\n                    segments = d3.merge(segments);\n                    var clipStartInside = insidePolygon([\n                            x0,\n                            y1\n                        ]), inside = clean && clipStartInside, visible = segments.length;\n                    if (inside || visible) {\n                        listener.polygonStart();\n                        if (inside) {\n                            listener.lineStart();\n                            interpolate(null, null, 1, listener);\n                            listener.lineEnd();\n                        }\n                        if (visible) {\n                            d3_geo_clipPolygon(segments, compare, clipStartInside, interpolate, listener);\n                        }\n                        listener.polygonEnd();\n                    }\n                    segments = polygon = ring = null;\n                }\n            };\n        function insidePolygon(p) {\n            var wn = 0, n = polygon.length, y = p[1];\n            for (var i = 0; i < n; ++i) {\n                for (var j = 1, v = polygon[i], m = v.length, a = v[0], b; j < m; ++j) {\n                    b = v[j];\n                    if (a[1] <= y) {\n                        if (b[1] > y && d3_cross2d(a, b, p) > 0)\n                            ++wn;\n                    } else {\n                        if (b[1] <= y && d3_cross2d(a, b, p) < 0)\n                            --wn;\n                    }\n                    a = b;\n                }\n            }\n            return wn !== 0;\n        }\n        function interpolate(from, to, direction, listener) {\n            var a = 0, a1 = 0;\n            if (from == null || (a = corner(from, direction)) !== (a1 = corner(to, direction)) || comparePoints(from, to) < 0 ^ direction > 0) {\n                do {\n                    listener.point(a === 0 || a === 3 ? x0 : x1, a > 1 ? y1 : y0);\n                } while ((a = (a + direction + 4) % 4) !== a1);\n            } else {\n                listener.point(to[0], to[1]);\n            }\n        }\n        function pointVisible(x, y) {\n            return x0 <= x && x <= x1 && y0 <= y && y <= y1;\n        }\n        function point(x, y) {\n            if (pointVisible(x, y))\n                listener.point(x, y);\n        }\n        var x__, y__, v__, x_, y_, v_, first, clean;\n        function lineStart() {\n            clip.point = linePoint;\n            if (polygon)\n                polygon.push(ring = []);\n            first = true;\n            v_ = false;\n            x_ = y_ = NaN;\n        }\n        function lineEnd() {\n            if (segments) {\n                linePoint(x__, y__);\n                if (v__ && v_)\n                    bufferListener.rejoin();\n                segments.push(bufferListener.buffer());\n            }\n            clip.point = point;\n            if (v_)\n                listener.lineEnd();\n        }\n        function linePoint(x, y) {\n            x = Math.max(-d3_geo_clipExtentMAX, Math.min(d3_geo_clipExtentMAX, x));\n            y = Math.max(-d3_geo_clipExtentMAX, Math.min(d3_geo_clipExtentMAX, y));\n            var v = pointVisible(x, y);\n            if (polygon)\n                ring.push([\n                    x,\n                    y\n                ]);\n            if (first) {\n                x__ = x, y__ = y, v__ = v;\n                first = false;\n                if (v) {\n                    listener.lineStart();\n                    listener.point(x, y);\n                }\n            } else {\n                if (v && v_)\n                    listener.point(x, y);\n                else {\n                    var l = {\n                            a: {\n                                x: x_,\n                                y: y_\n                            },\n                            b: {\n                                x: x,\n                                y: y\n                            }\n                        };\n                    if (clipLine(l)) {\n                        if (!v_) {\n                            listener.lineStart();\n                            listener.point(l.a.x, l.a.y);\n                        }\n                        listener.point(l.b.x, l.b.y);\n                        if (!v)\n                            listener.lineEnd();\n                        clean = false;\n                    } else if (v) {\n                        listener.lineStart();\n                        listener.point(x, y);\n                        clean = false;\n                    }\n                }\n            }\n            x_ = x, y_ = y, v_ = v;\n        }\n        return clip;\n    };\n    function corner(p, direction) {\n        return abs(p[0] - x0) < ε ? direction > 0 ? 0 : 3 : abs(p[0] - x1) < ε ? direction > 0 ? 2 : 1 : abs(p[1] - y0) < ε ? direction > 0 ? 1 : 0 : direction > 0 ? 3 : 2;\n    }\n    function compare(a, b) {\n        return comparePoints(a.x, b.x);\n    }\n    function comparePoints(a, b) {\n        var ca = corner(a, 1), cb = corner(b, 1);\n        return ca !== cb ? ca - cb : ca === 0 ? b[1] - a[1] : ca === 1 ? a[0] - b[0] : ca === 2 ? a[1] - b[1] : b[0] - a[0];\n    }\n}"
}