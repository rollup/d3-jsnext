{
  "filepath": "/interpolate/object.js",
  "shared": [],
  "dependencies": [
    "d3_interpolate"
  ],
  "helpers": [
    "d3_interpolateObject"
  ],
  "exports": [
    "d3.interpolateObject"
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
              "name": "interpolateObject"
            }
          },
          "right": {
            "type": "Identifier",
            "name": "d3_interpolateObject"
          }
        }
      },
      {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "name": "d3_interpolateObject"
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
                    "type": "ObjectExpression",
                    "properties": []
                  }
                },
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "name": "c"
                  },
                  "init": {
                    "type": "ObjectExpression",
                    "properties": []
                  }
                },
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "name": "k"
                  },
                  "init": null
                }
              ],
              "kind": "var"
            },
            {
              "type": "ForInStatement",
              "left": {
                "type": "Identifier",
                "name": "k"
              },
              "right": {
                "type": "Identifier",
                "name": "a"
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "IfStatement",
                    "test": {
                      "type": "BinaryExpression",
                      "operator": "in",
                      "left": {
                        "type": "Identifier",
                        "name": "k"
                      },
                      "right": {
                        "type": "Identifier",
                        "name": "b"
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
                              "type": "MemberExpression",
                              "computed": true,
                              "object": {
                                "type": "Identifier",
                                "name": "i"
                              },
                              "property": {
                                "type": "Identifier",
                                "name": "k"
                              }
                            },
                            "right": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "Identifier",
                                "name": "d3_interpolate"
                              },
                              "arguments": [
                                {
                                  "type": "MemberExpression",
                                  "computed": true,
                                  "object": {
                                    "type": "Identifier",
                                    "name": "a"
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "name": "k"
                                  }
                                },
                                {
                                  "type": "MemberExpression",
                                  "computed": true,
                                  "object": {
                                    "type": "Identifier",
                                    "name": "b"
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "name": "k"
                                  }
                                }
                              ]
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
                            "type": "AssignmentExpression",
                            "operator": "=",
                            "left": {
                              "type": "MemberExpression",
                              "computed": true,
                              "object": {
                                "type": "Identifier",
                                "name": "c"
                              },
                              "property": {
                                "type": "Identifier",
                                "name": "k"
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
                                "type": "Identifier",
                                "name": "k"
                              }
                            }
                          }
                        }
                      ]
                    }
                  }
                ]
              },
              "each": false
            },
            {
              "type": "ForInStatement",
              "left": {
                "type": "Identifier",
                "name": "k"
              },
              "right": {
                "type": "Identifier",
                "name": "b"
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "IfStatement",
                    "test": {
                      "type": "UnaryExpression",
                      "operator": "!",
                      "argument": {
                        "type": "BinaryExpression",
                        "operator": "in",
                        "left": {
                          "type": "Identifier",
                          "name": "k"
                        },
                        "right": {
                          "type": "Identifier",
                          "name": "a"
                        }
                      },
                      "prefix": true
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
                              "type": "MemberExpression",
                              "computed": true,
                              "object": {
                                "type": "Identifier",
                                "name": "c"
                              },
                              "property": {
                                "type": "Identifier",
                                "name": "k"
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
                                "type": "Identifier",
                                "name": "k"
                              }
                            }
                          }
                        }
                      ]
                    },
                    "alternate": null
                  }
                ]
              },
              "each": false
            },
            {
              "type": "ReturnStatement",
              "argument": {
                "type": "FunctionExpression",
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "name": "t"
                  }
                ],
                "defaults": [],
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ForInStatement",
                      "left": {
                        "type": "Identifier",
                        "name": "k"
                      },
                      "right": {
                        "type": "Identifier",
                        "name": "i"
                      },
                      "body": {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "AssignmentExpression",
                          "operator": "=",
                          "left": {
                            "type": "MemberExpression",
                            "computed": true,
                            "object": {
                              "type": "Identifier",
                              "name": "c"
                            },
                            "property": {
                              "type": "Identifier",
                              "name": "k"
                            }
                          },
                          "right": {
                            "type": "CallExpression",
                            "callee": {
                              "type": "MemberExpression",
                              "computed": true,
                              "object": {
                                "type": "Identifier",
                                "name": "i"
                              },
                              "property": {
                                "type": "Identifier",
                                "name": "k"
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
                      },
                      "each": false
                    },
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "Identifier",
                        "name": "c"
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