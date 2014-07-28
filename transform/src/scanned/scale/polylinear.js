{
  "filepath": "/scale/polylinear.js",
  "shared": [],
  "dependencies": [
    "d3.bisect"
  ],
  "helpers": [
    "d3_scale_polylinear"
  ],
  "exports": [],
  "ast": {
    "type": "Program",
    "body": [
      {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "name": "d3_scale_polylinear"
        },
        "params": [
          {
            "type": "Identifier",
            "name": "domain"
          },
          {
            "type": "Identifier",
            "name": "range"
          },
          {
            "type": "Identifier",
            "name": "uninterpolate"
          },
          {
            "type": "Identifier",
            "name": "interpolate"
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
                    "name": "u"
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
                    "name": "i"
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
                    "name": "j"
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
                    "name": "k"
                  },
                  "init": {
                    "type": "BinaryExpression",
                    "operator": "-",
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
                          "name": "min"
                        }
                      },
                      "arguments": [
                        {
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
                        {
                          "type": "MemberExpression",
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "name": "range"
                          },
                          "property": {
                            "type": "Identifier",
                            "name": "length"
                          }
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
              ],
              "kind": "var"
            },
            {
              "type": "IfStatement",
              "test": {
                "type": "BinaryExpression",
                "operator": "<",
                "left": {
                  "type": "MemberExpression",
                  "computed": true,
                  "object": {
                    "type": "Identifier",
                    "name": "domain"
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
                    "name": "domain"
                  },
                  "property": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0"
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
                        "name": "domain"
                      },
                      "right": {
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
                                "name": "domain"
                              },
                              "property": {
                                "type": "Identifier",
                                "name": "slice"
                              }
                            },
                            "arguments": []
                          },
                          "property": {
                            "type": "Identifier",
                            "name": "reverse"
                          }
                        },
                        "arguments": []
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
                        "name": "range"
                      },
                      "right": {
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
                                "name": "range"
                              },
                              "property": {
                                "type": "Identifier",
                                "name": "slice"
                              }
                            },
                            "arguments": []
                          },
                          "property": {
                            "type": "Identifier",
                            "name": "reverse"
                          }
                        },
                        "arguments": []
                      }
                    }
                  }
                ]
              },
              "alternate": null
            },
            {
              "type": "WhileStatement",
              "test": {
                "type": "BinaryExpression",
                "operator": "<=",
                "left": {
                  "type": "UpdateExpression",
                  "operator": "++",
                  "argument": {
                    "type": "Identifier",
                    "name": "j"
                  },
                  "prefix": true
                },
                "right": {
                  "type": "Identifier",
                  "name": "k"
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
                          "name": "u"
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
                            "type": "Identifier",
                            "name": "uninterpolate"
                          },
                          "arguments": [
                            {
                              "type": "MemberExpression",
                              "computed": true,
                              "object": {
                                "type": "Identifier",
                                "name": "domain"
                              },
                              "property": {
                                "type": "BinaryExpression",
                                "operator": "-",
                                "left": {
                                  "type": "Identifier",
                                  "name": "j"
                                },
                                "right": {
                                  "type": "Literal",
                                  "value": 1,
                                  "raw": "1"
                                }
                              }
                            },
                            {
                              "type": "MemberExpression",
                              "computed": true,
                              "object": {
                                "type": "Identifier",
                                "name": "domain"
                              },
                              "property": {
                                "type": "Identifier",
                                "name": "j"
                              }
                            }
                          ]
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
                          "name": "i"
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
                            "type": "Identifier",
                            "name": "interpolate"
                          },
                          "arguments": [
                            {
                              "type": "MemberExpression",
                              "computed": true,
                              "object": {
                                "type": "Identifier",
                                "name": "range"
                              },
                              "property": {
                                "type": "BinaryExpression",
                                "operator": "-",
                                "left": {
                                  "type": "Identifier",
                                  "name": "j"
                                },
                                "right": {
                                  "type": "Literal",
                                  "value": 1,
                                  "raw": "1"
                                }
                              }
                            },
                            {
                              "type": "MemberExpression",
                              "computed": true,
                              "object": {
                                "type": "Identifier",
                                "name": "range"
                              },
                              "property": {
                                "type": "Identifier",
                                "name": "j"
                              }
                            }
                          ]
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
                      "type": "VariableDeclaration",
                      "declarations": [
                        {
                          "type": "VariableDeclarator",
                          "id": {
                            "type": "Identifier",
                            "name": "j"
                          },
                          "init": {
                            "type": "BinaryExpression",
                            "operator": "-",
                            "left": {
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
                                  "name": "bisect"
                                }
                              },
                              "arguments": [
                                {
                                  "type": "Identifier",
                                  "name": "domain"
                                },
                                {
                                  "type": "Identifier",
                                  "name": "x"
                                },
                                {
                                  "type": "Literal",
                                  "value": 1,
                                  "raw": "1"
                                },
                                {
                                  "type": "Identifier",
                                  "name": "k"
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
                      ],
                      "kind": "var"
                    },
                    {
                      "type": "ReturnStatement",
                      "argument": {
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
                            "name": "j"
                          }
                        },
                        "arguments": [
                          {
                            "type": "CallExpression",
                            "callee": {
                              "type": "MemberExpression",
                              "computed": true,
                              "object": {
                                "type": "Identifier",
                                "name": "u"
                              },
                              "property": {
                                "type": "Identifier",
                                "name": "j"
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
  "src": "function d3_scale_polylinear(domain, range, uninterpolate, interpolate) {\n    var u = [], i = [], j = 0, k = Math.min(domain.length, range.length) - 1;\n    if (domain[k] < domain[0]) {\n        domain = domain.slice().reverse();\n        range = range.slice().reverse();\n    }\n    while (++j <= k) {\n        u.push(uninterpolate(domain[j - 1], domain[j]));\n        i.push(interpolate(range[j - 1], range[j]));\n    }\n    return function (x) {\n        var j = d3.bisect(domain, x, 1, k) - 1;\n        return i[j](u[j](x));\n    };\n}"
}