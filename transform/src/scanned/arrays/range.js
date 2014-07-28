{
  "filepath": "/arrays/range.js",
  "shared": [],
  "dependencies": [
    "abs"
  ],
  "helpers": [
    "d3_range_integerScale"
  ],
  "exports": [
    "d3.range"
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
              "name": "range"
            }
          },
          "right": {
            "type": "FunctionExpression",
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "name": "start"
              },
              {
                "type": "Identifier",
                "name": "stop"
              },
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
                  "type": "IfStatement",
                  "test": {
                    "type": "BinaryExpression",
                    "operator": "<",
                    "left": {
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
                    "right": {
                      "type": "Literal",
                      "value": 3,
                      "raw": "3"
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
                            "name": "step"
                          },
                          "right": {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1"
                          }
                        }
                      },
                      {
                        "type": "IfStatement",
                        "test": {
                          "type": "BinaryExpression",
                          "operator": "<",
                          "left": {
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
                          "right": {
                            "type": "Literal",
                            "value": 2,
                            "raw": "2"
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
                                  "name": "stop"
                                },
                                "right": {
                                  "type": "Identifier",
                                  "name": "start"
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
                                  "name": "start"
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
                    "operator": "===",
                    "left": {
                      "type": "BinaryExpression",
                      "operator": "/",
                      "left": {
                        "type": "BinaryExpression",
                        "operator": "-",
                        "left": {
                          "type": "Identifier",
                          "name": "stop"
                        },
                        "right": {
                          "type": "Identifier",
                          "name": "start"
                        }
                      },
                      "right": {
                        "type": "Identifier",
                        "name": "step"
                      }
                    },
                    "right": {
                      "type": "Identifier",
                      "name": "Infinity"
                    }
                  },
                  "consequent": {
                    "type": "ThrowStatement",
                    "argument": {
                      "type": "NewExpression",
                      "callee": {
                        "type": "Identifier",
                        "name": "Error"
                      },
                      "arguments": [
                        {
                          "type": "Literal",
                          "value": "infinite range",
                          "raw": "\"infinite range\""
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
                        "name": "range"
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
                        "name": "k"
                      },
                      "init": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "Identifier",
                          "name": "d3_range_integerScale"
                        },
                        "arguments": [
                          {
                            "type": "CallExpression",
                            "callee": {
                              "type": "Identifier",
                              "name": "abs"
                            },
                            "arguments": [
                              {
                                "type": "Identifier",
                                "name": "step"
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
                        "name": "j"
                      },
                      "init": null
                    }
                  ],
                  "kind": "var"
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "SequenceExpression",
                    "expressions": [
                      {
                        "type": "AssignmentExpression",
                        "operator": "*=",
                        "left": {
                          "type": "Identifier",
                          "name": "start"
                        },
                        "right": {
                          "type": "Identifier",
                          "name": "k"
                        }
                      },
                      {
                        "type": "AssignmentExpression",
                        "operator": "*=",
                        "left": {
                          "type": "Identifier",
                          "name": "stop"
                        },
                        "right": {
                          "type": "Identifier",
                          "name": "k"
                        }
                      },
                      {
                        "type": "AssignmentExpression",
                        "operator": "*=",
                        "left": {
                          "type": "Identifier",
                          "name": "step"
                        },
                        "right": {
                          "type": "Identifier",
                          "name": "k"
                        }
                      }
                    ]
                  }
                },
                {
                  "type": "IfStatement",
                  "test": {
                    "type": "BinaryExpression",
                    "operator": "<",
                    "left": {
                      "type": "Identifier",
                      "name": "step"
                    },
                    "right": {
                      "type": "Literal",
                      "value": 0,
                      "raw": "0"
                    }
                  },
                  "consequent": {
                    "type": "WhileStatement",
                    "test": {
                      "type": "BinaryExpression",
                      "operator": ">",
                      "left": {
                        "type": "AssignmentExpression",
                        "operator": "=",
                        "left": {
                          "type": "Identifier",
                          "name": "j"
                        },
                        "right": {
                          "type": "BinaryExpression",
                          "operator": "+",
                          "left": {
                            "type": "Identifier",
                            "name": "start"
                          },
                          "right": {
                            "type": "BinaryExpression",
                            "operator": "*",
                            "left": {
                              "type": "Identifier",
                              "name": "step"
                            },
                            "right": {
                              "type": "UpdateExpression",
                              "operator": "++",
                              "argument": {
                                "type": "Identifier",
                                "name": "i"
                              },
                              "prefix": true
                            }
                          }
                        }
                      },
                      "right": {
                        "type": "Identifier",
                        "name": "stop"
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
                            "name": "range"
                          },
                          "property": {
                            "type": "Identifier",
                            "name": "push"
                          }
                        },
                        "arguments": [
                          {
                            "type": "BinaryExpression",
                            "operator": "/",
                            "left": {
                              "type": "Identifier",
                              "name": "j"
                            },
                            "right": {
                              "type": "Identifier",
                              "name": "k"
                            }
                          }
                        ]
                      }
                    }
                  },
                  "alternate": {
                    "type": "WhileStatement",
                    "test": {
                      "type": "BinaryExpression",
                      "operator": "<",
                      "left": {
                        "type": "AssignmentExpression",
                        "operator": "=",
                        "left": {
                          "type": "Identifier",
                          "name": "j"
                        },
                        "right": {
                          "type": "BinaryExpression",
                          "operator": "+",
                          "left": {
                            "type": "Identifier",
                            "name": "start"
                          },
                          "right": {
                            "type": "BinaryExpression",
                            "operator": "*",
                            "left": {
                              "type": "Identifier",
                              "name": "step"
                            },
                            "right": {
                              "type": "UpdateExpression",
                              "operator": "++",
                              "argument": {
                                "type": "Identifier",
                                "name": "i"
                              },
                              "prefix": true
                            }
                          }
                        }
                      },
                      "right": {
                        "type": "Identifier",
                        "name": "stop"
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
                            "name": "range"
                          },
                          "property": {
                            "type": "Identifier",
                            "name": "push"
                          }
                        },
                        "arguments": [
                          {
                            "type": "BinaryExpression",
                            "operator": "/",
                            "left": {
                              "type": "Identifier",
                              "name": "j"
                            },
                            "right": {
                              "type": "Identifier",
                              "name": "k"
                            }
                          }
                        ]
                      }
                    }
                  }
                },
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Identifier",
                    "name": "range"
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
          "name": "d3_range_integerScale"
        },
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
                    "name": "k"
                  },
                  "init": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1"
                  }
                }
              ],
              "kind": "var"
            },
            {
              "type": "WhileStatement",
              "test": {
                "type": "BinaryExpression",
                "operator": "%",
                "left": {
                  "type": "BinaryExpression",
                  "operator": "*",
                  "left": {
                    "type": "Identifier",
                    "name": "x"
                  },
                  "right": {
                    "type": "Identifier",
                    "name": "k"
                  }
                },
                "right": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1"
                }
              },
              "body": {
                "type": "ExpressionStatement",
                "expression": {
                  "type": "AssignmentExpression",
                  "operator": "*=",
                  "left": {
                    "type": "Identifier",
                    "name": "k"
                  },
                  "right": {
                    "type": "Literal",
                    "value": 10,
                    "raw": "10"
                  }
                }
              }
            },
            {
              "type": "ReturnStatement",
              "argument": {
                "type": "Identifier",
                "name": "k"
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
  "src": "d3.range = function (start, stop, step) {\n    if (arguments.length < 3) {\n        step = 1;\n        if (arguments.length < 2) {\n            stop = start;\n            start = 0;\n        }\n    }\n    if ((stop - start) / step === Infinity)\n        throw new Error('infinite range');\n    var range = [], k = d3_range_integerScale(abs(step)), i = -1, j;\n    start *= k, stop *= k, step *= k;\n    if (step < 0)\n        while ((j = start + step * ++i) > stop)\n            range.push(j / k);\n    else\n        while ((j = start + step * ++i) < stop)\n            range.push(j / k);\n    return range;\n};\nfunction d3_range_integerScale(x) {\n    var k = 1;\n    while (x * k % 1)\n        k *= 10;\n    return k;\n}"
}