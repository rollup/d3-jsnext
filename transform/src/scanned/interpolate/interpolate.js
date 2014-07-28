{
  "filepath": "/interpolate/interpolate.js",
  "shared": [],
  "dependencies": [
    "d3.interpolators.length",
    "d3.interpolators.i",
    "d3_rgb_names",
    "d3_interpolateRgb",
    "d3_interpolateString",
    "d3_color",
    "d3_interpolateArray",
    "d3_interpolateObject",
    "d3_interpolateNumber"
  ],
  "helpers": [
    "d3_interpolate"
  ],
  "exports": [
    "d3.interpolate",
    "d3.interpolators"
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
              "type": "Identifier",
              "name": "d3"
            },
            "property": {
              "type": "Identifier",
              "name": "interpolate"
            }
          },
          "right": {
            "type": "Identifier",
            "name": "d3_interpolate"
          }
        }
      },
      {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "name": "d3_interpolate"
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
                    "name": "i"
                  },
                  "init": {
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
                        "name": "interpolators"
                      }
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
                    "name": "f"
                  },
                  "init": null
                }
              ],
              "kind": "var"
            },
            {
              "type": "WhileStatement",
              "test": {
                "type": "LogicalExpression",
                "operator": "&&",
                "left": {
                  "type": "BinaryExpression",
                  "operator": ">=",
                  "left": {
                    "type": "UpdateExpression",
                    "operator": "--",
                    "argument": {
                      "type": "Identifier",
                      "name": "i"
                    },
                    "prefix": true
                  },
                  "right": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0"
                  }
                },
                "right": {
                  "type": "UnaryExpression",
                  "operator": "!",
                  "argument": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "name": "f"
                    },
                    "right": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "computed": true,
                        "object": {
                          "type": "MemberExpression",
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "name": "d3"
                          },
                          "property": {
                            "type": "Identifier",
                            "name": "interpolators"
                          }
                        },
                        "property": {
                          "type": "Identifier",
                          "name": "i"
                        }
                      },
                      "arguments": [
                        {
                          "type": "Identifier",
                          "name": "a"
                        },
                        {
                          "type": "Identifier",
                          "name": "b"
                        }
                      ]
                    }
                  },
                  "prefix": true
                }
              },
              "body": {
                "type": "EmptyStatement"
              }
            },
            {
              "type": "ReturnStatement",
              "argument": {
                "type": "Identifier",
                "name": "f"
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
              "name": "d3"
            },
            "property": {
              "type": "Identifier",
              "name": "interpolators"
            }
          },
          "right": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "FunctionExpression",
                "id": null,
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
                            "name": "t"
                          },
                          "init": {
                            "type": "UnaryExpression",
                            "operator": "typeof",
                            "argument": {
                              "type": "Identifier",
                              "name": "b"
                            },
                            "prefix": true
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
                          "type": "ConditionalExpression",
                          "test": {
                            "type": "BinaryExpression",
                            "operator": "===",
                            "left": {
                              "type": "Identifier",
                              "name": "t"
                            },
                            "right": {
                              "type": "Literal",
                              "value": "string",
                              "raw": "\"string\""
                            }
                          },
                          "consequent": {
                            "type": "ConditionalExpression",
                            "test": {
                              "type": "LogicalExpression",
                              "operator": "||",
                              "left": {
                                "type": "CallExpression",
                                "callee": {
                                  "type": "MemberExpression",
                                  "computed": false,
                                  "object": {
                                    "type": "Identifier",
                                    "name": "d3_rgb_names"
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "name": "has"
                                  }
                                },
                                "arguments": [
                                  {
                                    "type": "Identifier",
                                    "name": "b"
                                  }
                                ]
                              },
                              "right": {
                                "type": "CallExpression",
                                "callee": {
                                  "type": "MemberExpression",
                                  "computed": false,
                                  "object": {
                                    "type": "Literal",
                                    "value": {},
                                    "raw": "/^(#|rgb\\(|hsl\\()/"
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "name": "test"
                                  }
                                },
                                "arguments": [
                                  {
                                    "type": "Identifier",
                                    "name": "b"
                                  }
                                ]
                              }
                            },
                            "consequent": {
                              "type": "Identifier",
                              "name": "d3_interpolateRgb"
                            },
                            "alternate": {
                              "type": "Identifier",
                              "name": "d3_interpolateString"
                            }
                          },
                          "alternate": {
                            "type": "ConditionalExpression",
                            "test": {
                              "type": "BinaryExpression",
                              "operator": "instanceof",
                              "left": {
                                "type": "Identifier",
                                "name": "b"
                              },
                              "right": {
                                "type": "Identifier",
                                "name": "d3_color"
                              }
                            },
                            "consequent": {
                              "type": "Identifier",
                              "name": "d3_interpolateRgb"
                            },
                            "alternate": {
                              "type": "ConditionalExpression",
                              "test": {
                                "type": "CallExpression",
                                "callee": {
                                  "type": "MemberExpression",
                                  "computed": false,
                                  "object": {
                                    "type": "Identifier",
                                    "name": "Array"
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "name": "isArray"
                                  }
                                },
                                "arguments": [
                                  {
                                    "type": "Identifier",
                                    "name": "b"
                                  }
                                ]
                              },
                              "consequent": {
                                "type": "Identifier",
                                "name": "d3_interpolateArray"
                              },
                              "alternate": {
                                "type": "ConditionalExpression",
                                "test": {
                                  "type": "LogicalExpression",
                                  "operator": "&&",
                                  "left": {
                                    "type": "BinaryExpression",
                                    "operator": "===",
                                    "left": {
                                      "type": "Identifier",
                                      "name": "t"
                                    },
                                    "right": {
                                      "type": "Literal",
                                      "value": "object",
                                      "raw": "\"object\""
                                    }
                                  },
                                  "right": {
                                    "type": "CallExpression",
                                    "callee": {
                                      "type": "Identifier",
                                      "name": "isNaN"
                                    },
                                    "arguments": [
                                      {
                                        "type": "Identifier",
                                        "name": "b"
                                      }
                                    ]
                                  }
                                },
                                "consequent": {
                                  "type": "Identifier",
                                  "name": "d3_interpolateObject"
                                },
                                "alternate": {
                                  "type": "Identifier",
                                  "name": "d3_interpolateNumber"
                                }
                              }
                            }
                          }
                        },
                        "arguments": [
                          {
                            "type": "Identifier",
                            "name": "a"
                          },
                          {
                            "type": "Identifier",
                            "name": "b"
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
      }
    ]
  }
}