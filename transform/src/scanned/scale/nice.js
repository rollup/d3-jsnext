{
  "filepath": "/scale/nice.js",
  "shared": [],
  "dependencies": [
    "d3_identity"
  ],
  "helpers": [
    "d3_scale_nice",
    "d3_scale_niceStep",
    "d3_scale_niceIdentity"
  ],
  "exports": [],
  "ast": {
    "type": "Program",
    "body": [
      {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "name": "d3_scale_nice"
        },
        "params": [
          {
            "type": "Identifier",
            "name": "domain"
          },
          {
            "type": "Identifier",
            "name": "nice"
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
                    "name": "i0"
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
                    "name": "i1"
                  },
                  "init": {
                    "type": "BinaryExpression",
                    "operator": "-",
                    "left": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "name": "domain"
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
                    "name": "x0"
                  },
                  "init": {
                    "type": "MemberExpression",
                    "computed": true,
                    "object": {
                      "type": "Identifier",
                      "name": "domain"
                    },
                    "property": {
                      "type": "Identifier",
                      "name": "i0"
                    }
                  }
                },
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "name": "x1"
                  },
                  "init": {
                    "type": "MemberExpression",
                    "computed": true,
                    "object": {
                      "type": "Identifier",
                      "name": "domain"
                    },
                    "property": {
                      "type": "Identifier",
                      "name": "i1"
                    }
                  }
                },
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "name": "dx"
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
                  "name": "x1"
                },
                "right": {
                  "type": "Identifier",
                  "name": "x0"
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
                            "name": "dx"
                          },
                          "right": {
                            "type": "Identifier",
                            "name": "i0"
                          }
                        },
                        {
                          "type": "AssignmentExpression",
                          "operator": "=",
                          "left": {
                            "type": "Identifier",
                            "name": "i0"
                          },
                          "right": {
                            "type": "Identifier",
                            "name": "i1"
                          }
                        },
                        {
                          "type": "AssignmentExpression",
                          "operator": "=",
                          "left": {
                            "type": "Identifier",
                            "name": "i1"
                          },
                          "right": {
                            "type": "Identifier",
                            "name": "dx"
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
                            "name": "dx"
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
                            "name": "dx"
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
                "type": "AssignmentExpression",
                "operator": "=",
                "left": {
                  "type": "MemberExpression",
                  "computed": true,
                  "object": {
                    "type": "Identifier",
                    "name": "domain"
                  },
                  "property": {
                    "type": "Identifier",
                    "name": "i0"
                  }
                },
                "right": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "name": "nice"
                    },
                    "property": {
                      "type": "Identifier",
                      "name": "floor"
                    }
                  },
                  "arguments": [
                    {
                      "type": "Identifier",
                      "name": "x0"
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
                  "computed": true,
                  "object": {
                    "type": "Identifier",
                    "name": "domain"
                  },
                  "property": {
                    "type": "Identifier",
                    "name": "i1"
                  }
                },
                "right": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "name": "nice"
                    },
                    "property": {
                      "type": "Identifier",
                      "name": "ceil"
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
            },
            {
              "type": "ReturnStatement",
              "argument": {
                "type": "Identifier",
                "name": "domain"
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
          "name": "d3_scale_niceStep"
        },
        "params": [
          {
            "type": "Identifier",
            "name": "step"
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
                  "type": "Identifier",
                  "name": "step"
                },
                "consequent": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "key": {
                        "type": "Identifier",
                        "name": "floor"
                      },
                      "value": {
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
                                      "name": "floor"
                                    }
                                  },
                                  "arguments": [
                                    {
                                      "type": "BinaryExpression",
                                      "operator": "/",
                                      "left": {
                                        "type": "Identifier",
                                        "name": "x"
                                      },
                                      "right": {
                                        "type": "Identifier",
                                        "name": "step"
                                      }
                                    }
                                  ]
                                },
                                "right": {
                                  "type": "Identifier",
                                  "name": "step"
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
                        "name": "ceil"
                      },
                      "value": {
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
                                        "name": "x"
                                      },
                                      "right": {
                                        "type": "Identifier",
                                        "name": "step"
                                      }
                                    }
                                  ]
                                },
                                "right": {
                                  "type": "Identifier",
                                  "name": "step"
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
                },
                "alternate": {
                  "type": "Identifier",
                  "name": "d3_scale_niceIdentity"
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
        "type": "VariableDeclaration",
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "name": "d3_scale_niceIdentity"
            },
            "init": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "key": {
                    "type": "Identifier",
                    "name": "floor"
                  },
                  "value": {
                    "type": "Identifier",
                    "name": "d3_identity"
                  },
                  "kind": "init"
                },
                {
                  "type": "Property",
                  "key": {
                    "type": "Identifier",
                    "name": "ceil"
                  },
                  "value": {
                    "type": "Identifier",
                    "name": "d3_identity"
                  },
                  "kind": "init"
                }
              ]
            }
          }
        ]
      }
    ]
  },
  "src": "function d3_scale_nice(domain, nice) {\n    var i0 = 0, i1 = domain.length - 1, x0 = domain[i0], x1 = domain[i1], dx;\n    if (x1 < x0) {\n        dx = i0, i0 = i1, i1 = dx;\n        dx = x0, x0 = x1, x1 = dx;\n    }\n    domain[i0] = nice.floor(x0);\n    domain[i1] = nice.ceil(x1);\n    return domain;\n}\nfunction d3_scale_niceStep(step) {\n    return step ? {\n        floor: function (x) {\n            return Math.floor(x / step) * step;\n        },\n        ceil: function (x) {\n            return Math.ceil(x / step) * step;\n        }\n    } : d3_scale_niceIdentity;\n}\nvar d3_scale_niceIdentity = {\n        floor: d3_identity,\n        ceil: d3_identity\n    };"
}