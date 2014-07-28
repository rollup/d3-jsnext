{
  "filepath": "/geo/clip.js",
  "shared": [],
  "dependencies": [
    "d3.merge",
    "d3_geo_pointInPolygon",
    "d3_geo_clipPolygon",
    "d3_noop"
  ],
  "helpers": [
    "d3_geo_clip",
    "d3_geo_clipSegmentLength1",
    "d3_geo_clipBufferListener",
    "d3_geo_clipSort"
  ],
  "exports": [],
  "ast": {
    "type": "Program",
    "body": [
      {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "name": "d3_geo_clip"
        },
        "params": [
          {
            "type": "Identifier",
            "name": "pointVisible"
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
            "type": "Identifier",
            "name": "clipStart"
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
                    "name": "rotate"
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
                            "name": "line"
                          },
                          "init": {
                            "type": "CallExpression",
                            "callee": {
                              "type": "Identifier",
                              "name": "clipLine"
                            },
                            "arguments": [
                              {
                                "type": "Identifier",
                                "name": "listener"
                              }
                            ]
                          }
                        },
                        {
                          "type": "VariableDeclarator",
                          "id": {
                            "type": "Identifier",
                            "name": "rotatedClipStart"
                          },
                          "init": {
                            "type": "CallExpression",
                            "callee": {
                              "type": "MemberExpression",
                              "computed": false,
                              "object": {
                                "type": "Identifier",
                                "name": "rotate"
                              },
                              "property": {
                                "type": "Identifier",
                                "name": "invert"
                              }
                            },
                            "arguments": [
                              {
                                "type": "MemberExpression",
                                "computed": true,
                                "object": {
                                  "type": "Identifier",
                                  "name": "clipStart"
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
                                  "name": "clipStart"
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
                                            "name": "pointRing"
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
                                              "name": "clip"
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
                                              "name": "lineEnd"
                                            }
                                          },
                                          "right": {
                                            "type": "Identifier",
                                            "name": "ringEnd"
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
                                              "name": "lineStart"
                                            }
                                          },
                                          "right": {
                                            "type": "Identifier",
                                            "name": "lineStart"
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
                                              "name": "clip"
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
                                                "name": "d3_geo_pointInPolygon"
                                              },
                                              "arguments": [
                                                {
                                                  "type": "Identifier",
                                                  "name": "rotatedClipStart"
                                                },
                                                {
                                                  "type": "Identifier",
                                                  "name": "polygon"
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
                                                  "name": "polygonStarted"
                                                },
                                                "prefix": true
                                              },
                                              "consequent": {
                                                "type": "ExpressionStatement",
                                                "expression": {
                                                  "type": "SequenceExpression",
                                                  "expressions": [
                                                    {
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
                                                    },
                                                    {
                                                      "type": "AssignmentExpression",
                                                      "operator": "=",
                                                      "left": {
                                                        "type": "Identifier",
                                                        "name": "polygonStarted"
                                                      },
                                                      "right": {
                                                        "type": "Literal",
                                                        "value": true,
                                                        "raw": "true"
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
                                                    "name": "d3_geo_clipSort"
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
                                        "alternate": {
                                          "type": "IfStatement",
                                          "test": {
                                            "type": "Identifier",
                                            "name": "clipStartInside"
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
                                                    "name": "polygonStarted"
                                                  },
                                                  "prefix": true
                                                },
                                                "consequent": {
                                                  "type": "ExpressionStatement",
                                                  "expression": {
                                                    "type": "SequenceExpression",
                                                    "expressions": [
                                                      {
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
                                                      },
                                                      {
                                                        "type": "AssignmentExpression",
                                                        "operator": "=",
                                                        "left": {
                                                          "type": "Identifier",
                                                          "name": "polygonStarted"
                                                        },
                                                        "right": {
                                                          "type": "Literal",
                                                          "value": true,
                                                          "raw": "true"
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
                                        }
                                      },
                                      {
                                        "type": "IfStatement",
                                        "test": {
                                          "type": "Identifier",
                                          "name": "polygonStarted"
                                        },
                                        "consequent": {
                                          "type": "ExpressionStatement",
                                          "expression": {
                                            "type": "SequenceExpression",
                                            "expressions": [
                                              {
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
                                              },
                                              {
                                                "type": "AssignmentExpression",
                                                "operator": "=",
                                                "left": {
                                                  "type": "Identifier",
                                                  "name": "polygonStarted"
                                                },
                                                "right": {
                                                  "type": "Literal",
                                                  "value": false,
                                                  "raw": "false"
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
                                              "type": "Literal",
                                              "value": null,
                                              "raw": "null"
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
                              },
                              {
                                "type": "Property",
                                "key": {
                                  "type": "Identifier",
                                  "name": "sphere"
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
                                  "name": "point"
                                },
                                "init": {
                                  "type": "CallExpression",
                                  "callee": {
                                    "type": "Identifier",
                                    "name": "rotate"
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
                            "type": "IfStatement",
                            "test": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "Identifier",
                                "name": "pointVisible"
                              },
                              "arguments": [
                                {
                                  "type": "AssignmentExpression",
                                  "operator": "=",
                                  "left": {
                                    "type": "Identifier",
                                    "name": "λ"
                                  },
                                  "right": {
                                    "type": "MemberExpression",
                                    "computed": true,
                                    "object": {
                                      "type": "Identifier",
                                      "name": "point"
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
                                    "name": "φ"
                                  },
                                  "right": {
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
                                    "name": "λ"
                                  },
                                  {
                                    "type": "Identifier",
                                    "name": "φ"
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
                      "type": "FunctionDeclaration",
                      "id": {
                        "type": "Identifier",
                        "name": "pointLine"
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
                                  "name": "point"
                                },
                                "init": {
                                  "type": "CallExpression",
                                  "callee": {
                                    "type": "Identifier",
                                    "name": "rotate"
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
                                "type": "MemberExpression",
                                "computed": false,
                                "object": {
                                  "type": "Identifier",
                                  "name": "line"
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
                                    "name": "point"
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
                                "name": "pointLine"
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
                                  "name": "line"
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
                            "type": "ExpressionStatement",
                            "expression": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "MemberExpression",
                                "computed": false,
                                "object": {
                                  "type": "Identifier",
                                  "name": "line"
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
                      "type": "VariableDeclaration",
                      "declarations": [
                        {
                          "type": "VariableDeclarator",
                          "id": {
                            "type": "Identifier",
                            "name": "segments"
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
                            "name": "buffer"
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
                            "name": "ringListener"
                          },
                          "init": {
                            "type": "CallExpression",
                            "callee": {
                              "type": "Identifier",
                              "name": "clipLine"
                            },
                            "arguments": [
                              {
                                "type": "Identifier",
                                "name": "buffer"
                              }
                            ]
                          }
                        },
                        {
                          "type": "VariableDeclarator",
                          "id": {
                            "type": "Identifier",
                            "name": "polygonStarted"
                          },
                          "init": {
                            "type": "Literal",
                            "value": false,
                            "raw": "false"
                          }
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
                      "type": "FunctionDeclaration",
                      "id": {
                        "type": "Identifier",
                        "name": "pointRing"
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
                            "type": "VariableDeclaration",
                            "declarations": [
                              {
                                "type": "VariableDeclarator",
                                "id": {
                                  "type": "Identifier",
                                  "name": "point"
                                },
                                "init": {
                                  "type": "CallExpression",
                                  "callee": {
                                    "type": "Identifier",
                                    "name": "rotate"
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
                                "type": "MemberExpression",
                                "computed": false,
                                "object": {
                                  "type": "Identifier",
                                  "name": "ringListener"
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
                                    "name": "point"
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
                                "type": "MemberExpression",
                                "computed": false,
                                "object": {
                                  "type": "Identifier",
                                  "name": "ringListener"
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
                                "name": "ring"
                              },
                              "right": {
                                "type": "ArrayExpression",
                                "elements": []
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
                                "name": "pointRing"
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
                                      "name": "ring"
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
                                      "name": "ring"
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
                                  "name": "ringListener"
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
                            "type": "VariableDeclaration",
                            "declarations": [
                              {
                                "type": "VariableDeclarator",
                                "id": {
                                  "type": "Identifier",
                                  "name": "clean"
                                },
                                "init": {
                                  "type": "CallExpression",
                                  "callee": {
                                    "type": "MemberExpression",
                                    "computed": false,
                                    "object": {
                                      "type": "Identifier",
                                      "name": "ringListener"
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "name": "clean"
                                    }
                                  },
                                  "arguments": []
                                }
                              },
                              {
                                "type": "VariableDeclarator",
                                "id": {
                                  "type": "Identifier",
                                  "name": "ringSegments"
                                },
                                "init": {
                                  "type": "CallExpression",
                                  "callee": {
                                    "type": "MemberExpression",
                                    "computed": false,
                                    "object": {
                                      "type": "Identifier",
                                      "name": "buffer"
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "name": "buffer"
                                    }
                                  },
                                  "arguments": []
                                }
                              },
                              {
                                "type": "VariableDeclarator",
                                "id": {
                                  "type": "Identifier",
                                  "name": "segment"
                                },
                                "init": null
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
                                    "name": "ringSegments"
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
                                  "name": "pop"
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
                                  "name": "polygon"
                                },
                                "property": {
                                  "type": "Identifier",
                                  "name": "push"
                                }
                              },
                              "arguments": [
                                {
                                  "type": "Identifier",
                                  "name": "ring"
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
                                "name": "ring"
                              },
                              "right": {
                                "type": "Literal",
                                "value": null,
                                "raw": "null"
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
                                "name": "n"
                              },
                              "prefix": true
                            },
                            "consequent": {
                              "type": "ReturnStatement",
                              "argument": null
                            },
                            "alternate": null
                          },
                          {
                            "type": "IfStatement",
                            "test": {
                              "type": "BinaryExpression",
                              "operator": "&",
                              "left": {
                                "type": "Identifier",
                                "name": "clean"
                              },
                              "right": {
                                "type": "Literal",
                                "value": 1,
                                "raw": "1"
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
                                      "name": "segment"
                                    },
                                    "right": {
                                      "type": "MemberExpression",
                                      "computed": true,
                                      "object": {
                                        "type": "Identifier",
                                        "name": "ringSegments"
                                      },
                                      "property": {
                                        "type": "Literal",
                                        "value": 0,
                                        "raw": "0"
                                      }
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
                                        "name": "n"
                                      },
                                      "init": {
                                        "type": "BinaryExpression",
                                        "operator": "-",
                                        "left": {
                                          "type": "MemberExpression",
                                          "computed": false,
                                          "object": {
                                            "type": "Identifier",
                                            "name": "segment"
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "name": "length"
                                          }
                                        },
                                        "right": {
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
                                        "name": "i"
                                      },
                                      "init": {
                                        "type": "UnaryExpression",
                                        "operator": "-",
                                        "argument": {
                                          "type": "Literal",
                                          "value": 1,
                                          "raw": "1"
                                        },
                                        "prefix": true
                                      }
                                    },
                                    {
                                      "type": "VariableDeclarator",
                                      "id": {
                                        "type": "Identifier",
                                        "name": "point"
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
                                    "operator": ">",
                                    "left": {
                                      "type": "Identifier",
                                      "name": "n"
                                    },
                                    "right": {
                                      "type": "Literal",
                                      "value": 0,
                                      "raw": "0"
                                    }
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
                                            "name": "polygonStarted"
                                          },
                                          "prefix": true
                                        },
                                        "consequent": {
                                          "type": "ExpressionStatement",
                                          "expression": {
                                            "type": "SequenceExpression",
                                            "expressions": [
                                              {
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
                                              },
                                              {
                                                "type": "AssignmentExpression",
                                                "operator": "=",
                                                "left": {
                                                  "type": "Identifier",
                                                  "name": "polygonStarted"
                                                },
                                                "right": {
                                                  "type": "Literal",
                                                  "value": true,
                                                  "raw": "true"
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
                                        "type": "WhileStatement",
                                        "test": {
                                          "type": "BinaryExpression",
                                          "operator": "<",
                                          "left": {
                                            "type": "UpdateExpression",
                                            "operator": "++",
                                            "argument": {
                                              "type": "Identifier",
                                              "name": "i"
                                            },
                                            "prefix": true
                                          },
                                          "right": {
                                            "type": "Identifier",
                                            "name": "n"
                                          }
                                        },
                                        "body": {
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
                                                    "type": "MemberExpression",
                                                    "computed": true,
                                                    "object": {
                                                      "type": "Identifier",
                                                      "name": "segment"
                                                    },
                                                    "property": {
                                                      "type": "Identifier",
                                                      "name": "i"
                                                    }
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
                                  "type": "ReturnStatement",
                                  "argument": null
                                }
                              ]
                            },
                            "alternate": null
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
                                  "name": "n"
                                },
                                "right": {
                                  "type": "Literal",
                                  "value": 1,
                                  "raw": "1"
                                }
                              },
                              "right": {
                                "type": "BinaryExpression",
                                "operator": "&",
                                "left": {
                                  "type": "Identifier",
                                  "name": "clean"
                                },
                                "right": {
                                  "type": "Literal",
                                  "value": 2,
                                  "raw": "2"
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
                                    "name": "ringSegments"
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
                                        "type": "CallExpression",
                                        "callee": {
                                          "type": "MemberExpression",
                                          "computed": false,
                                          "object": {
                                            "type": "Identifier",
                                            "name": "ringSegments"
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "name": "pop"
                                          }
                                        },
                                        "arguments": []
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
                                            "type": "Identifier",
                                            "name": "ringSegments"
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "name": "shift"
                                          }
                                        },
                                        "arguments": []
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
                                      "name": "ringSegments"
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "name": "filter"
                                    }
                                  },
                                  "arguments": [
                                    {
                                      "type": "Identifier",
                                      "name": "d3_geo_clipSegmentLength1"
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
          "name": "d3_geo_clipSegmentLength1"
        },
        "params": [
          {
            "type": "Identifier",
            "name": "segment"
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
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "name": "segment"
                  },
                  "property": {
                    "type": "Identifier",
                    "name": "length"
                  }
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
      {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "name": "d3_geo_clipBufferListener"
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
                    "name": "lines"
                  },
                  "init": {
                    "type": "ArrayExpression",
                    "elements": []
                  }
                },
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "name": "line"
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
                              "type": "CallExpression",
                              "callee": {
                                "type": "MemberExpression",
                                "computed": false,
                                "object": {
                                  "type": "Identifier",
                                  "name": "lines"
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
                                    "name": "line"
                                  },
                                  "right": {
                                    "type": "ArrayExpression",
                                    "elements": []
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
                            "type": "ExpressionStatement",
                            "expression": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "MemberExpression",
                                "computed": false,
                                "object": {
                                  "type": "Identifier",
                                  "name": "line"
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
                      "type": "Identifier",
                      "name": "d3_noop"
                    },
                    "kind": "init"
                  },
                  {
                    "type": "Property",
                    "key": {
                      "type": "Identifier",
                      "name": "buffer"
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
                            "type": "VariableDeclaration",
                            "declarations": [
                              {
                                "type": "VariableDeclarator",
                                "id": {
                                  "type": "Identifier",
                                  "name": "buffer"
                                },
                                "init": {
                                  "type": "Identifier",
                                  "name": "lines"
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
                                "name": "lines"
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
                                "name": "line"
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
                              "name": "buffer"
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
                      "name": "rejoin"
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
                              "type": "BinaryExpression",
                              "operator": ">",
                              "left": {
                                "type": "MemberExpression",
                                "computed": false,
                                "object": {
                                  "type": "Identifier",
                                  "name": "lines"
                                },
                                "property": {
                                  "type": "Identifier",
                                  "name": "length"
                                }
                              },
                              "right": {
                                "type": "Literal",
                                "value": 1,
                                "raw": "1"
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
                                    "name": "lines"
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
                                        "type": "CallExpression",
                                        "callee": {
                                          "type": "MemberExpression",
                                          "computed": false,
                                          "object": {
                                            "type": "Identifier",
                                            "name": "lines"
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "name": "pop"
                                          }
                                        },
                                        "arguments": []
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
                                            "type": "Identifier",
                                            "name": "lines"
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "name": "shift"
                                          }
                                        },
                                        "arguments": []
                                      }
                                    ]
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
          "name": "d3_geo_clipSort"
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
                "type": "BinaryExpression",
                "operator": "-",
                "left": {
                  "type": "ConditionalExpression",
                  "test": {
                    "type": "BinaryExpression",
                    "operator": "<",
                    "left": {
                      "type": "MemberExpression",
                      "computed": true,
                      "object": {
                        "type": "AssignmentExpression",
                        "operator": "=",
                        "left": {
                          "type": "Identifier",
                          "name": "a"
                        },
                        "right": {
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
                        }
                      },
                      "property": {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0"
                      }
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
                        "type": "Identifier",
                        "name": "halfπ"
                      }
                    },
                    "right": {
                      "type": "Identifier",
                      "name": "ε"
                    }
                  },
                  "alternate": {
                    "type": "BinaryExpression",
                    "operator": "-",
                    "left": {
                      "type": "Identifier",
                      "name": "halfπ"
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
                  }
                },
                "right": {
                  "type": "ConditionalExpression",
                  "test": {
                    "type": "BinaryExpression",
                    "operator": "<",
                    "left": {
                      "type": "MemberExpression",
                      "computed": true,
                      "object": {
                        "type": "AssignmentExpression",
                        "operator": "=",
                        "left": {
                          "type": "Identifier",
                          "name": "b"
                        },
                        "right": {
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
                      },
                      "property": {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0"
                      }
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
                        "type": "Identifier",
                        "name": "halfπ"
                      }
                    },
                    "right": {
                      "type": "Identifier",
                      "name": "ε"
                    }
                  },
                  "alternate": {
                    "type": "BinaryExpression",
                    "operator": "-",
                    "left": {
                      "type": "Identifier",
                      "name": "halfπ"
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
  "src": "function d3_geo_clip(pointVisible, clipLine, interpolate, clipStart) {\n    return function (rotate, listener) {\n        var line = clipLine(listener), rotatedClipStart = rotate.invert(clipStart[0], clipStart[1]);\n        var clip = {\n                point: point,\n                lineStart: lineStart,\n                lineEnd: lineEnd,\n                polygonStart: function () {\n                    clip.point = pointRing;\n                    clip.lineStart = ringStart;\n                    clip.lineEnd = ringEnd;\n                    segments = [];\n                    polygon = [];\n                },\n                polygonEnd: function () {\n                    clip.point = point;\n                    clip.lineStart = lineStart;\n                    clip.lineEnd = lineEnd;\n                    segments = d3.merge(segments);\n                    var clipStartInside = d3_geo_pointInPolygon(rotatedClipStart, polygon);\n                    if (segments.length) {\n                        if (!polygonStarted)\n                            listener.polygonStart(), polygonStarted = true;\n                        d3_geo_clipPolygon(segments, d3_geo_clipSort, clipStartInside, interpolate, listener);\n                    } else if (clipStartInside) {\n                        if (!polygonStarted)\n                            listener.polygonStart(), polygonStarted = true;\n                        listener.lineStart();\n                        interpolate(null, null, 1, listener);\n                        listener.lineEnd();\n                    }\n                    if (polygonStarted)\n                        listener.polygonEnd(), polygonStarted = false;\n                    segments = polygon = null;\n                },\n                sphere: function () {\n                    listener.polygonStart();\n                    listener.lineStart();\n                    interpolate(null, null, 1, listener);\n                    listener.lineEnd();\n                    listener.polygonEnd();\n                }\n            };\n        function point(λ, φ) {\n            var point = rotate(λ, φ);\n            if (pointVisible(λ = point[0], φ = point[1]))\n                listener.point(λ, φ);\n        }\n        function pointLine(λ, φ) {\n            var point = rotate(λ, φ);\n            line.point(point[0], point[1]);\n        }\n        function lineStart() {\n            clip.point = pointLine;\n            line.lineStart();\n        }\n        function lineEnd() {\n            clip.point = point;\n            line.lineEnd();\n        }\n        var segments;\n        var buffer = d3_geo_clipBufferListener(), ringListener = clipLine(buffer), polygonStarted = false, polygon, ring;\n        function pointRing(λ, φ) {\n            ring.push([\n                λ,\n                φ\n            ]);\n            var point = rotate(λ, φ);\n            ringListener.point(point[0], point[1]);\n        }\n        function ringStart() {\n            ringListener.lineStart();\n            ring = [];\n        }\n        function ringEnd() {\n            pointRing(ring[0][0], ring[0][1]);\n            ringListener.lineEnd();\n            var clean = ringListener.clean(), ringSegments = buffer.buffer(), segment, n = ringSegments.length;\n            ring.pop();\n            polygon.push(ring);\n            ring = null;\n            if (!n)\n                return;\n            if (clean & 1) {\n                segment = ringSegments[0];\n                var n = segment.length - 1, i = -1, point;\n                if (n > 0) {\n                    if (!polygonStarted)\n                        listener.polygonStart(), polygonStarted = true;\n                    listener.lineStart();\n                    while (++i < n)\n                        listener.point((point = segment[i])[0], point[1]);\n                    listener.lineEnd();\n                }\n                return;\n            }\n            if (n > 1 && clean & 2)\n                ringSegments.push(ringSegments.pop().concat(ringSegments.shift()));\n            segments.push(ringSegments.filter(d3_geo_clipSegmentLength1));\n        }\n        return clip;\n    };\n}\nfunction d3_geo_clipSegmentLength1(segment) {\n    return segment.length > 1;\n}\nfunction d3_geo_clipBufferListener() {\n    var lines = [], line;\n    return {\n        lineStart: function () {\n            lines.push(line = []);\n        },\n        point: function (λ, φ) {\n            line.push([\n                λ,\n                φ\n            ]);\n        },\n        lineEnd: d3_noop,\n        buffer: function () {\n            var buffer = lines;\n            lines = [];\n            line = null;\n            return buffer;\n        },\n        rejoin: function () {\n            if (lines.length > 1)\n                lines.push(lines.pop().concat(lines.shift()));\n        }\n    };\n}\nfunction d3_geo_clipSort(a, b) {\n    return ((a = a.x)[0] < 0 ? a[1] - halfπ - ε : halfπ - a[1]) - ((b = b.x)[0] < 0 ? b[1] - halfπ - ε : halfπ - b[1]);\n}"
}