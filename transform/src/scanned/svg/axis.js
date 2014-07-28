{
  "filepath": "/svg/axis.js",
  "shared": [],
  "dependencies": [
    "d3.scale.linear",
    "d3.select",
    "d3_identity",
    "d3.transition",
    "d3_scaleRange"
  ],
  "helpers": [
    "d3_svg_axisDefaultOrient",
    "d3_svg_axisOrients",
    "d3_svg_axisX",
    "d3_svg_axisY"
  ],
  "exports": [
    "d3.svg.axis"
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
                "name": "svg"
              }
            },
            "property": {
              "type": "Identifier",
              "name": "axis"
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
                        "name": "scale"
                      },
                      "init": {
                        "type": "CallExpression",
                        "callee": {
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
                              "name": "scale"
                            }
                          },
                          "property": {
                            "type": "Identifier",
                            "name": "linear"
                          }
                        },
                        "arguments": []
                      }
                    },
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "name": "orient"
                      },
                      "init": {
                        "type": "Identifier",
                        "name": "d3_svg_axisDefaultOrient"
                      }
                    },
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "name": "innerTickSize"
                      },
                      "init": {
                        "type": "Literal",
                        "value": 6,
                        "raw": "6"
                      }
                    },
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "name": "outerTickSize"
                      },
                      "init": {
                        "type": "Literal",
                        "value": 6,
                        "raw": "6"
                      }
                    },
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "name": "tickPadding"
                      },
                      "init": {
                        "type": "Literal",
                        "value": 3,
                        "raw": "3"
                      }
                    },
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "name": "tickArguments_"
                      },
                      "init": {
                        "type": "ArrayExpression",
                        "elements": [
                          {
                            "type": "Literal",
                            "value": 10,
                            "raw": "10"
                          }
                        ]
                      }
                    },
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "name": "tickValues"
                      },
                      "init": {
                        "type": "Literal",
                        "value": null,
                        "raw": "null"
                      }
                    },
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "name": "tickFormat_"
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
                    "name": "axis"
                  },
                  "params": [
                    {
                      "type": "Identifier",
                      "name": "g"
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
                              "name": "g"
                            },
                            "property": {
                              "type": "Identifier",
                              "name": "each"
                            }
                          },
                          "arguments": [
                            {
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
                                          "name": "g"
                                        },
                                        "init": {
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
                                              "name": "select"
                                            }
                                          },
                                          "arguments": [
                                            {
                                              "type": "ThisExpression"
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
                                          "name": "scale0"
                                        },
                                        "init": {
                                          "type": "LogicalExpression",
                                          "operator": "||",
                                          "left": {
                                            "type": "MemberExpression",
                                            "computed": false,
                                            "object": {
                                              "type": "ThisExpression"
                                            },
                                            "property": {
                                              "type": "Identifier",
                                              "name": "__chart__"
                                            }
                                          },
                                          "right": {
                                            "type": "Identifier",
                                            "name": "scale"
                                          }
                                        }
                                      },
                                      {
                                        "type": "VariableDeclarator",
                                        "id": {
                                          "type": "Identifier",
                                          "name": "scale1"
                                        },
                                        "init": {
                                          "type": "AssignmentExpression",
                                          "operator": "=",
                                          "left": {
                                            "type": "MemberExpression",
                                            "computed": false,
                                            "object": {
                                              "type": "ThisExpression"
                                            },
                                            "property": {
                                              "type": "Identifier",
                                              "name": "__chart__"
                                            }
                                          },
                                          "right": {
                                            "type": "CallExpression",
                                            "callee": {
                                              "type": "MemberExpression",
                                              "computed": false,
                                              "object": {
                                                "type": "Identifier",
                                                "name": "scale"
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "name": "copy"
                                              }
                                            },
                                            "arguments": []
                                          }
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
                                          "name": "ticks"
                                        },
                                        "init": {
                                          "type": "ConditionalExpression",
                                          "test": {
                                            "type": "BinaryExpression",
                                            "operator": "==",
                                            "left": {
                                              "type": "Identifier",
                                              "name": "tickValues"
                                            },
                                            "right": {
                                              "type": "Literal",
                                              "value": null,
                                              "raw": "null"
                                            }
                                          },
                                          "consequent": {
                                            "type": "ConditionalExpression",
                                            "test": {
                                              "type": "MemberExpression",
                                              "computed": false,
                                              "object": {
                                                "type": "Identifier",
                                                "name": "scale1"
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "name": "ticks"
                                              }
                                            },
                                            "consequent": {
                                              "type": "CallExpression",
                                              "callee": {
                                                "type": "MemberExpression",
                                                "computed": false,
                                                "object": {
                                                  "type": "MemberExpression",
                                                  "computed": false,
                                                  "object": {
                                                    "type": "Identifier",
                                                    "name": "scale1"
                                                  },
                                                  "property": {
                                                    "type": "Identifier",
                                                    "name": "ticks"
                                                  }
                                                },
                                                "property": {
                                                  "type": "Identifier",
                                                  "name": "apply"
                                                }
                                              },
                                              "arguments": [
                                                {
                                                  "type": "Identifier",
                                                  "name": "scale1"
                                                },
                                                {
                                                  "type": "Identifier",
                                                  "name": "tickArguments_"
                                                }
                                              ]
                                            },
                                            "alternate": {
                                              "type": "CallExpression",
                                              "callee": {
                                                "type": "MemberExpression",
                                                "computed": false,
                                                "object": {
                                                  "type": "Identifier",
                                                  "name": "scale1"
                                                },
                                                "property": {
                                                  "type": "Identifier",
                                                  "name": "domain"
                                                }
                                              },
                                              "arguments": []
                                            }
                                          },
                                          "alternate": {
                                            "type": "Identifier",
                                            "name": "tickValues"
                                          }
                                        }
                                      },
                                      {
                                        "type": "VariableDeclarator",
                                        "id": {
                                          "type": "Identifier",
                                          "name": "tickFormat"
                                        },
                                        "init": {
                                          "type": "ConditionalExpression",
                                          "test": {
                                            "type": "BinaryExpression",
                                            "operator": "==",
                                            "left": {
                                              "type": "Identifier",
                                              "name": "tickFormat_"
                                            },
                                            "right": {
                                              "type": "Literal",
                                              "value": null,
                                              "raw": "null"
                                            }
                                          },
                                          "consequent": {
                                            "type": "ConditionalExpression",
                                            "test": {
                                              "type": "MemberExpression",
                                              "computed": false,
                                              "object": {
                                                "type": "Identifier",
                                                "name": "scale1"
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "name": "tickFormat"
                                              }
                                            },
                                            "consequent": {
                                              "type": "CallExpression",
                                              "callee": {
                                                "type": "MemberExpression",
                                                "computed": false,
                                                "object": {
                                                  "type": "MemberExpression",
                                                  "computed": false,
                                                  "object": {
                                                    "type": "Identifier",
                                                    "name": "scale1"
                                                  },
                                                  "property": {
                                                    "type": "Identifier",
                                                    "name": "tickFormat"
                                                  }
                                                },
                                                "property": {
                                                  "type": "Identifier",
                                                  "name": "apply"
                                                }
                                              },
                                              "arguments": [
                                                {
                                                  "type": "Identifier",
                                                  "name": "scale1"
                                                },
                                                {
                                                  "type": "Identifier",
                                                  "name": "tickArguments_"
                                                }
                                              ]
                                            },
                                            "alternate": {
                                              "type": "Identifier",
                                              "name": "d3_identity"
                                            }
                                          },
                                          "alternate": {
                                            "type": "Identifier",
                                            "name": "tickFormat_"
                                          }
                                        }
                                      },
                                      {
                                        "type": "VariableDeclarator",
                                        "id": {
                                          "type": "Identifier",
                                          "name": "tick"
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
                                                  "name": "g"
                                                },
                                                "property": {
                                                  "type": "Identifier",
                                                  "name": "selectAll"
                                                }
                                              },
                                              "arguments": [
                                                {
                                                  "type": "Literal",
                                                  "value": ".tick",
                                                  "raw": "\".tick\""
                                                }
                                              ]
                                            },
                                            "property": {
                                              "type": "Identifier",
                                              "name": "data"
                                            }
                                          },
                                          "arguments": [
                                            {
                                              "type": "Identifier",
                                              "name": "ticks"
                                            },
                                            {
                                              "type": "Identifier",
                                              "name": "scale1"
                                            }
                                          ]
                                        }
                                      },
                                      {
                                        "type": "VariableDeclarator",
                                        "id": {
                                          "type": "Identifier",
                                          "name": "tickEnter"
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
                                                          "name": "tick"
                                                        },
                                                        "property": {
                                                          "type": "Identifier",
                                                          "name": "enter"
                                                        }
                                                      },
                                                      "arguments": []
                                                    },
                                                    "property": {
                                                      "type": "Identifier",
                                                      "name": "insert"
                                                    }
                                                  },
                                                  "arguments": [
                                                    {
                                                      "type": "Literal",
                                                      "value": "g",
                                                      "raw": "\"g\""
                                                    },
                                                    {
                                                      "type": "Literal",
                                                      "value": ".domain",
                                                      "raw": "\".domain\""
                                                    }
                                                  ]
                                                },
                                                "property": {
                                                  "type": "Identifier",
                                                  "name": "attr"
                                                }
                                              },
                                              "arguments": [
                                                {
                                                  "type": "Literal",
                                                  "value": "class",
                                                  "raw": "\"class\""
                                                },
                                                {
                                                  "type": "Literal",
                                                  "value": "tick",
                                                  "raw": "\"tick\""
                                                }
                                              ]
                                            },
                                            "property": {
                                              "type": "Identifier",
                                              "name": "style"
                                            }
                                          },
                                          "arguments": [
                                            {
                                              "type": "Literal",
                                              "value": "opacity",
                                              "raw": "\"opacity\""
                                            },
                                            {
                                              "type": "Identifier",
                                              "name": "ε"
                                            }
                                          ]
                                        }
                                      },
                                      {
                                        "type": "VariableDeclarator",
                                        "id": {
                                          "type": "Identifier",
                                          "name": "tickExit"
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
                                                      "name": "transition"
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
                                                          "name": "tick"
                                                        },
                                                        "property": {
                                                          "type": "Identifier",
                                                          "name": "exit"
                                                        }
                                                      },
                                                      "arguments": []
                                                    }
                                                  ]
                                                },
                                                "property": {
                                                  "type": "Identifier",
                                                  "name": "style"
                                                }
                                              },
                                              "arguments": [
                                                {
                                                  "type": "Literal",
                                                  "value": "opacity",
                                                  "raw": "\"opacity\""
                                                },
                                                {
                                                  "type": "Identifier",
                                                  "name": "ε"
                                                }
                                              ]
                                            },
                                            "property": {
                                              "type": "Identifier",
                                              "name": "remove"
                                            }
                                          },
                                          "arguments": []
                                        }
                                      },
                                      {
                                        "type": "VariableDeclarator",
                                        "id": {
                                          "type": "Identifier",
                                          "name": "tickUpdate"
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
                                                  "name": "transition"
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
                                                      "name": "tick"
                                                    },
                                                    "property": {
                                                      "type": "Identifier",
                                                      "name": "order"
                                                    }
                                                  },
                                                  "arguments": []
                                                }
                                              ]
                                            },
                                            "property": {
                                              "type": "Identifier",
                                              "name": "style"
                                            }
                                          },
                                          "arguments": [
                                            {
                                              "type": "Literal",
                                              "value": "opacity",
                                              "raw": "\"opacity\""
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
                                          "name": "tickTransform"
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
                                          "name": "range"
                                        },
                                        "init": {
                                          "type": "CallExpression",
                                          "callee": {
                                            "type": "Identifier",
                                            "name": "d3_scaleRange"
                                          },
                                          "arguments": [
                                            {
                                              "type": "Identifier",
                                              "name": "scale1"
                                            }
                                          ]
                                        }
                                      },
                                      {
                                        "type": "VariableDeclarator",
                                        "id": {
                                          "type": "Identifier",
                                          "name": "path"
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
                                                  "name": "g"
                                                },
                                                "property": {
                                                  "type": "Identifier",
                                                  "name": "selectAll"
                                                }
                                              },
                                              "arguments": [
                                                {
                                                  "type": "Literal",
                                                  "value": ".domain",
                                                  "raw": "\".domain\""
                                                }
                                              ]
                                            },
                                            "property": {
                                              "type": "Identifier",
                                              "name": "data"
                                            }
                                          },
                                          "arguments": [
                                            {
                                              "type": "ArrayExpression",
                                              "elements": [
                                                {
                                                  "type": "Literal",
                                                  "value": 0,
                                                  "raw": "0"
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
                                          "name": "pathUpdate"
                                        },
                                        "init": {
                                          "type": "SequenceExpression",
                                          "expressions": [
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
                                                          "name": "path"
                                                        },
                                                        "property": {
                                                          "type": "Identifier",
                                                          "name": "enter"
                                                        }
                                                      },
                                                      "arguments": []
                                                    },
                                                    "property": {
                                                      "type": "Identifier",
                                                      "name": "append"
                                                    }
                                                  },
                                                  "arguments": [
                                                    {
                                                      "type": "Literal",
                                                      "value": "path",
                                                      "raw": "\"path\""
                                                    }
                                                  ]
                                                },
                                                "property": {
                                                  "type": "Identifier",
                                                  "name": "attr"
                                                }
                                              },
                                              "arguments": [
                                                {
                                                  "type": "Literal",
                                                  "value": "class",
                                                  "raw": "\"class\""
                                                },
                                                {
                                                  "type": "Literal",
                                                  "value": "domain",
                                                  "raw": "\"domain\""
                                                }
                                              ]
                                            },
                                            {
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
                                                  "name": "transition"
                                                }
                                              },
                                              "arguments": [
                                                {
                                                  "type": "Identifier",
                                                  "name": "path"
                                                }
                                              ]
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
                                          "name": "tickEnter"
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "name": "append"
                                        }
                                      },
                                      "arguments": [
                                        {
                                          "type": "Literal",
                                          "value": "line",
                                          "raw": "\"line\""
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
                                          "name": "tickEnter"
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "name": "append"
                                        }
                                      },
                                      "arguments": [
                                        {
                                          "type": "Literal",
                                          "value": "text",
                                          "raw": "\"text\""
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
                                          "name": "lineEnter"
                                        },
                                        "init": {
                                          "type": "CallExpression",
                                          "callee": {
                                            "type": "MemberExpression",
                                            "computed": false,
                                            "object": {
                                              "type": "Identifier",
                                              "name": "tickEnter"
                                            },
                                            "property": {
                                              "type": "Identifier",
                                              "name": "select"
                                            }
                                          },
                                          "arguments": [
                                            {
                                              "type": "Literal",
                                              "value": "line",
                                              "raw": "\"line\""
                                            }
                                          ]
                                        }
                                      },
                                      {
                                        "type": "VariableDeclarator",
                                        "id": {
                                          "type": "Identifier",
                                          "name": "lineUpdate"
                                        },
                                        "init": {
                                          "type": "CallExpression",
                                          "callee": {
                                            "type": "MemberExpression",
                                            "computed": false,
                                            "object": {
                                              "type": "Identifier",
                                              "name": "tickUpdate"
                                            },
                                            "property": {
                                              "type": "Identifier",
                                              "name": "select"
                                            }
                                          },
                                          "arguments": [
                                            {
                                              "type": "Literal",
                                              "value": "line",
                                              "raw": "\"line\""
                                            }
                                          ]
                                        }
                                      },
                                      {
                                        "type": "VariableDeclarator",
                                        "id": {
                                          "type": "Identifier",
                                          "name": "text"
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
                                                  "name": "tick"
                                                },
                                                "property": {
                                                  "type": "Identifier",
                                                  "name": "select"
                                                }
                                              },
                                              "arguments": [
                                                {
                                                  "type": "Literal",
                                                  "value": "text",
                                                  "raw": "\"text\""
                                                }
                                              ]
                                            },
                                            "property": {
                                              "type": "Identifier",
                                              "name": "text"
                                            }
                                          },
                                          "arguments": [
                                            {
                                              "type": "Identifier",
                                              "name": "tickFormat"
                                            }
                                          ]
                                        }
                                      },
                                      {
                                        "type": "VariableDeclarator",
                                        "id": {
                                          "type": "Identifier",
                                          "name": "textEnter"
                                        },
                                        "init": {
                                          "type": "CallExpression",
                                          "callee": {
                                            "type": "MemberExpression",
                                            "computed": false,
                                            "object": {
                                              "type": "Identifier",
                                              "name": "tickEnter"
                                            },
                                            "property": {
                                              "type": "Identifier",
                                              "name": "select"
                                            }
                                          },
                                          "arguments": [
                                            {
                                              "type": "Literal",
                                              "value": "text",
                                              "raw": "\"text\""
                                            }
                                          ]
                                        }
                                      },
                                      {
                                        "type": "VariableDeclarator",
                                        "id": {
                                          "type": "Identifier",
                                          "name": "textUpdate"
                                        },
                                        "init": {
                                          "type": "CallExpression",
                                          "callee": {
                                            "type": "MemberExpression",
                                            "computed": false,
                                            "object": {
                                              "type": "Identifier",
                                              "name": "tickUpdate"
                                            },
                                            "property": {
                                              "type": "Identifier",
                                              "name": "select"
                                            }
                                          },
                                          "arguments": [
                                            {
                                              "type": "Literal",
                                              "value": "text",
                                              "raw": "\"text\""
                                            }
                                          ]
                                        }
                                      }
                                    ],
                                    "kind": "var"
                                  },
                                  {
                                    "type": "SwitchStatement",
                                    "discriminant": {
                                      "type": "Identifier",
                                      "name": "orient"
                                    },
                                    "cases": [
                                      {
                                        "type": "SwitchCase",
                                        "test": {
                                          "type": "Literal",
                                          "value": "bottom",
                                          "raw": "\"bottom\""
                                        },
                                        "consequent": [
                                          {
                                            "type": "BlockStatement",
                                            "body": [
                                              {
                                                "type": "ExpressionStatement",
                                                "expression": {
                                                  "type": "AssignmentExpression",
                                                  "operator": "=",
                                                  "left": {
                                                    "type": "Identifier",
                                                    "name": "tickTransform"
                                                  },
                                                  "right": {
                                                    "type": "Identifier",
                                                    "name": "d3_svg_axisX"
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
                                                      "name": "lineEnter"
                                                    },
                                                    "property": {
                                                      "type": "Identifier",
                                                      "name": "attr"
                                                    }
                                                  },
                                                  "arguments": [
                                                    {
                                                      "type": "Literal",
                                                      "value": "y2",
                                                      "raw": "\"y2\""
                                                    },
                                                    {
                                                      "type": "Identifier",
                                                      "name": "innerTickSize"
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
                                                      "name": "textEnter"
                                                    },
                                                    "property": {
                                                      "type": "Identifier",
                                                      "name": "attr"
                                                    }
                                                  },
                                                  "arguments": [
                                                    {
                                                      "type": "Literal",
                                                      "value": "y",
                                                      "raw": "\"y\""
                                                    },
                                                    {
                                                      "type": "BinaryExpression",
                                                      "operator": "+",
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
                                                            "name": "max"
                                                          }
                                                        },
                                                        "arguments": [
                                                          {
                                                            "type": "Identifier",
                                                            "name": "innerTickSize"
                                                          },
                                                          {
                                                            "type": "Literal",
                                                            "value": 0,
                                                            "raw": "0"
                                                          }
                                                        ]
                                                      },
                                                      "right": {
                                                        "type": "Identifier",
                                                        "name": "tickPadding"
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
                                                      "type": "CallExpression",
                                                      "callee": {
                                                        "type": "MemberExpression",
                                                        "computed": false,
                                                        "object": {
                                                          "type": "Identifier",
                                                          "name": "lineUpdate"
                                                        },
                                                        "property": {
                                                          "type": "Identifier",
                                                          "name": "attr"
                                                        }
                                                      },
                                                      "arguments": [
                                                        {
                                                          "type": "Literal",
                                                          "value": "x2",
                                                          "raw": "\"x2\""
                                                        },
                                                        {
                                                          "type": "Literal",
                                                          "value": 0,
                                                          "raw": "0"
                                                        }
                                                      ]
                                                    },
                                                    "property": {
                                                      "type": "Identifier",
                                                      "name": "attr"
                                                    }
                                                  },
                                                  "arguments": [
                                                    {
                                                      "type": "Literal",
                                                      "value": "y2",
                                                      "raw": "\"y2\""
                                                    },
                                                    {
                                                      "type": "Identifier",
                                                      "name": "innerTickSize"
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
                                                      "type": "CallExpression",
                                                      "callee": {
                                                        "type": "MemberExpression",
                                                        "computed": false,
                                                        "object": {
                                                          "type": "Identifier",
                                                          "name": "textUpdate"
                                                        },
                                                        "property": {
                                                          "type": "Identifier",
                                                          "name": "attr"
                                                        }
                                                      },
                                                      "arguments": [
                                                        {
                                                          "type": "Literal",
                                                          "value": "x",
                                                          "raw": "\"x\""
                                                        },
                                                        {
                                                          "type": "Literal",
                                                          "value": 0,
                                                          "raw": "0"
                                                        }
                                                      ]
                                                    },
                                                    "property": {
                                                      "type": "Identifier",
                                                      "name": "attr"
                                                    }
                                                  },
                                                  "arguments": [
                                                    {
                                                      "type": "Literal",
                                                      "value": "y",
                                                      "raw": "\"y\""
                                                    },
                                                    {
                                                      "type": "BinaryExpression",
                                                      "operator": "+",
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
                                                            "name": "max"
                                                          }
                                                        },
                                                        "arguments": [
                                                          {
                                                            "type": "Identifier",
                                                            "name": "innerTickSize"
                                                          },
                                                          {
                                                            "type": "Literal",
                                                            "value": 0,
                                                            "raw": "0"
                                                          }
                                                        ]
                                                      },
                                                      "right": {
                                                        "type": "Identifier",
                                                        "name": "tickPadding"
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
                                                      "type": "CallExpression",
                                                      "callee": {
                                                        "type": "MemberExpression",
                                                        "computed": false,
                                                        "object": {
                                                          "type": "Identifier",
                                                          "name": "text"
                                                        },
                                                        "property": {
                                                          "type": "Identifier",
                                                          "name": "attr"
                                                        }
                                                      },
                                                      "arguments": [
                                                        {
                                                          "type": "Literal",
                                                          "value": "dy",
                                                          "raw": "\"dy\""
                                                        },
                                                        {
                                                          "type": "Literal",
                                                          "value": ".71em",
                                                          "raw": "\".71em\""
                                                        }
                                                      ]
                                                    },
                                                    "property": {
                                                      "type": "Identifier",
                                                      "name": "style"
                                                    }
                                                  },
                                                  "arguments": [
                                                    {
                                                      "type": "Literal",
                                                      "value": "text-anchor",
                                                      "raw": "\"text-anchor\""
                                                    },
                                                    {
                                                      "type": "Literal",
                                                      "value": "middle",
                                                      "raw": "\"middle\""
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
                                                      "name": "pathUpdate"
                                                    },
                                                    "property": {
                                                      "type": "Identifier",
                                                      "name": "attr"
                                                    }
                                                  },
                                                  "arguments": [
                                                    {
                                                      "type": "Literal",
                                                      "value": "d",
                                                      "raw": "\"d\""
                                                    },
                                                    {
                                                      "type": "BinaryExpression",
                                                      "operator": "+",
                                                      "left": {
                                                        "type": "BinaryExpression",
                                                        "operator": "+",
                                                        "left": {
                                                          "type": "BinaryExpression",
                                                          "operator": "+",
                                                          "left": {
                                                            "type": "BinaryExpression",
                                                            "operator": "+",
                                                            "left": {
                                                              "type": "BinaryExpression",
                                                              "operator": "+",
                                                              "left": {
                                                                "type": "BinaryExpression",
                                                                "operator": "+",
                                                                "left": {
                                                                  "type": "BinaryExpression",
                                                                  "operator": "+",
                                                                  "left": {
                                                                    "type": "Literal",
                                                                    "value": "M",
                                                                    "raw": "\"M\""
                                                                  },
                                                                  "right": {
                                                                    "type": "MemberExpression",
                                                                    "computed": true,
                                                                    "object": {
                                                                      "type": "Identifier",
                                                                      "name": "range"
                                                                    },
                                                                    "property": {
                                                                      "type": "Literal",
                                                                      "value": 0,
                                                                      "raw": "0"
                                                                    }
                                                                  }
                                                                },
                                                                "right": {
                                                                  "type": "Literal",
                                                                  "value": ",",
                                                                  "raw": "\",\""
                                                                }
                                                              },
                                                              "right": {
                                                                "type": "Identifier",
                                                                "name": "outerTickSize"
                                                              }
                                                            },
                                                            "right": {
                                                              "type": "Literal",
                                                              "value": "V0H",
                                                              "raw": "\"V0H\""
                                                            }
                                                          },
                                                          "right": {
                                                            "type": "MemberExpression",
                                                            "computed": true,
                                                            "object": {
                                                              "type": "Identifier",
                                                              "name": "range"
                                                            },
                                                            "property": {
                                                              "type": "Literal",
                                                              "value": 1,
                                                              "raw": "1"
                                                            }
                                                          }
                                                        },
                                                        "right": {
                                                          "type": "Literal",
                                                          "value": "V",
                                                          "raw": "\"V\""
                                                        }
                                                      },
                                                      "right": {
                                                        "type": "Identifier",
                                                        "name": "outerTickSize"
                                                      }
                                                    }
                                                  ]
                                                }
                                              },
                                              {
                                                "type": "BreakStatement",
                                                "label": null
                                              }
                                            ]
                                          }
                                        ]
                                      },
                                      {
                                        "type": "SwitchCase",
                                        "test": {
                                          "type": "Literal",
                                          "value": "top",
                                          "raw": "\"top\""
                                        },
                                        "consequent": [
                                          {
                                            "type": "BlockStatement",
                                            "body": [
                                              {
                                                "type": "ExpressionStatement",
                                                "expression": {
                                                  "type": "AssignmentExpression",
                                                  "operator": "=",
                                                  "left": {
                                                    "type": "Identifier",
                                                    "name": "tickTransform"
                                                  },
                                                  "right": {
                                                    "type": "Identifier",
                                                    "name": "d3_svg_axisX"
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
                                                      "name": "lineEnter"
                                                    },
                                                    "property": {
                                                      "type": "Identifier",
                                                      "name": "attr"
                                                    }
                                                  },
                                                  "arguments": [
                                                    {
                                                      "type": "Literal",
                                                      "value": "y2",
                                                      "raw": "\"y2\""
                                                    },
                                                    {
                                                      "type": "UnaryExpression",
                                                      "operator": "-",
                                                      "argument": {
                                                        "type": "Identifier",
                                                        "name": "innerTickSize"
                                                      },
                                                      "prefix": true
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
                                                      "name": "textEnter"
                                                    },
                                                    "property": {
                                                      "type": "Identifier",
                                                      "name": "attr"
                                                    }
                                                  },
                                                  "arguments": [
                                                    {
                                                      "type": "Literal",
                                                      "value": "y",
                                                      "raw": "\"y\""
                                                    },
                                                    {
                                                      "type": "UnaryExpression",
                                                      "operator": "-",
                                                      "argument": {
                                                        "type": "BinaryExpression",
                                                        "operator": "+",
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
                                                              "name": "max"
                                                            }
                                                          },
                                                          "arguments": [
                                                            {
                                                              "type": "Identifier",
                                                              "name": "innerTickSize"
                                                            },
                                                            {
                                                              "type": "Literal",
                                                              "value": 0,
                                                              "raw": "0"
                                                            }
                                                          ]
                                                        },
                                                        "right": {
                                                          "type": "Identifier",
                                                          "name": "tickPadding"
                                                        }
                                                      },
                                                      "prefix": true
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
                                                      "type": "CallExpression",
                                                      "callee": {
                                                        "type": "MemberExpression",
                                                        "computed": false,
                                                        "object": {
                                                          "type": "Identifier",
                                                          "name": "lineUpdate"
                                                        },
                                                        "property": {
                                                          "type": "Identifier",
                                                          "name": "attr"
                                                        }
                                                      },
                                                      "arguments": [
                                                        {
                                                          "type": "Literal",
                                                          "value": "x2",
                                                          "raw": "\"x2\""
                                                        },
                                                        {
                                                          "type": "Literal",
                                                          "value": 0,
                                                          "raw": "0"
                                                        }
                                                      ]
                                                    },
                                                    "property": {
                                                      "type": "Identifier",
                                                      "name": "attr"
                                                    }
                                                  },
                                                  "arguments": [
                                                    {
                                                      "type": "Literal",
                                                      "value": "y2",
                                                      "raw": "\"y2\""
                                                    },
                                                    {
                                                      "type": "UnaryExpression",
                                                      "operator": "-",
                                                      "argument": {
                                                        "type": "Identifier",
                                                        "name": "innerTickSize"
                                                      },
                                                      "prefix": true
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
                                                      "type": "CallExpression",
                                                      "callee": {
                                                        "type": "MemberExpression",
                                                        "computed": false,
                                                        "object": {
                                                          "type": "Identifier",
                                                          "name": "textUpdate"
                                                        },
                                                        "property": {
                                                          "type": "Identifier",
                                                          "name": "attr"
                                                        }
                                                      },
                                                      "arguments": [
                                                        {
                                                          "type": "Literal",
                                                          "value": "x",
                                                          "raw": "\"x\""
                                                        },
                                                        {
                                                          "type": "Literal",
                                                          "value": 0,
                                                          "raw": "0"
                                                        }
                                                      ]
                                                    },
                                                    "property": {
                                                      "type": "Identifier",
                                                      "name": "attr"
                                                    }
                                                  },
                                                  "arguments": [
                                                    {
                                                      "type": "Literal",
                                                      "value": "y",
                                                      "raw": "\"y\""
                                                    },
                                                    {
                                                      "type": "UnaryExpression",
                                                      "operator": "-",
                                                      "argument": {
                                                        "type": "BinaryExpression",
                                                        "operator": "+",
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
                                                              "name": "max"
                                                            }
                                                          },
                                                          "arguments": [
                                                            {
                                                              "type": "Identifier",
                                                              "name": "innerTickSize"
                                                            },
                                                            {
                                                              "type": "Literal",
                                                              "value": 0,
                                                              "raw": "0"
                                                            }
                                                          ]
                                                        },
                                                        "right": {
                                                          "type": "Identifier",
                                                          "name": "tickPadding"
                                                        }
                                                      },
                                                      "prefix": true
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
                                                      "type": "CallExpression",
                                                      "callee": {
                                                        "type": "MemberExpression",
                                                        "computed": false,
                                                        "object": {
                                                          "type": "Identifier",
                                                          "name": "text"
                                                        },
                                                        "property": {
                                                          "type": "Identifier",
                                                          "name": "attr"
                                                        }
                                                      },
                                                      "arguments": [
                                                        {
                                                          "type": "Literal",
                                                          "value": "dy",
                                                          "raw": "\"dy\""
                                                        },
                                                        {
                                                          "type": "Literal",
                                                          "value": "0em",
                                                          "raw": "\"0em\""
                                                        }
                                                      ]
                                                    },
                                                    "property": {
                                                      "type": "Identifier",
                                                      "name": "style"
                                                    }
                                                  },
                                                  "arguments": [
                                                    {
                                                      "type": "Literal",
                                                      "value": "text-anchor",
                                                      "raw": "\"text-anchor\""
                                                    },
                                                    {
                                                      "type": "Literal",
                                                      "value": "middle",
                                                      "raw": "\"middle\""
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
                                                      "name": "pathUpdate"
                                                    },
                                                    "property": {
                                                      "type": "Identifier",
                                                      "name": "attr"
                                                    }
                                                  },
                                                  "arguments": [
                                                    {
                                                      "type": "Literal",
                                                      "value": "d",
                                                      "raw": "\"d\""
                                                    },
                                                    {
                                                      "type": "BinaryExpression",
                                                      "operator": "+",
                                                      "left": {
                                                        "type": "BinaryExpression",
                                                        "operator": "+",
                                                        "left": {
                                                          "type": "BinaryExpression",
                                                          "operator": "+",
                                                          "left": {
                                                            "type": "BinaryExpression",
                                                            "operator": "+",
                                                            "left": {
                                                              "type": "BinaryExpression",
                                                              "operator": "+",
                                                              "left": {
                                                                "type": "BinaryExpression",
                                                                "operator": "+",
                                                                "left": {
                                                                  "type": "BinaryExpression",
                                                                  "operator": "+",
                                                                  "left": {
                                                                    "type": "Literal",
                                                                    "value": "M",
                                                                    "raw": "\"M\""
                                                                  },
                                                                  "right": {
                                                                    "type": "MemberExpression",
                                                                    "computed": true,
                                                                    "object": {
                                                                      "type": "Identifier",
                                                                      "name": "range"
                                                                    },
                                                                    "property": {
                                                                      "type": "Literal",
                                                                      "value": 0,
                                                                      "raw": "0"
                                                                    }
                                                                  }
                                                                },
                                                                "right": {
                                                                  "type": "Literal",
                                                                  "value": ",",
                                                                  "raw": "\",\""
                                                                }
                                                              },
                                                              "right": {
                                                                "type": "UnaryExpression",
                                                                "operator": "-",
                                                                "argument": {
                                                                  "type": "Identifier",
                                                                  "name": "outerTickSize"
                                                                },
                                                                "prefix": true
                                                              }
                                                            },
                                                            "right": {
                                                              "type": "Literal",
                                                              "value": "V0H",
                                                              "raw": "\"V0H\""
                                                            }
                                                          },
                                                          "right": {
                                                            "type": "MemberExpression",
                                                            "computed": true,
                                                            "object": {
                                                              "type": "Identifier",
                                                              "name": "range"
                                                            },
                                                            "property": {
                                                              "type": "Literal",
                                                              "value": 1,
                                                              "raw": "1"
                                                            }
                                                          }
                                                        },
                                                        "right": {
                                                          "type": "Literal",
                                                          "value": "V",
                                                          "raw": "\"V\""
                                                        }
                                                      },
                                                      "right": {
                                                        "type": "UnaryExpression",
                                                        "operator": "-",
                                                        "argument": {
                                                          "type": "Identifier",
                                                          "name": "outerTickSize"
                                                        },
                                                        "prefix": true
                                                      }
                                                    }
                                                  ]
                                                }
                                              },
                                              {
                                                "type": "BreakStatement",
                                                "label": null
                                              }
                                            ]
                                          }
                                        ]
                                      },
                                      {
                                        "type": "SwitchCase",
                                        "test": {
                                          "type": "Literal",
                                          "value": "left",
                                          "raw": "\"left\""
                                        },
                                        "consequent": [
                                          {
                                            "type": "BlockStatement",
                                            "body": [
                                              {
                                                "type": "ExpressionStatement",
                                                "expression": {
                                                  "type": "AssignmentExpression",
                                                  "operator": "=",
                                                  "left": {
                                                    "type": "Identifier",
                                                    "name": "tickTransform"
                                                  },
                                                  "right": {
                                                    "type": "Identifier",
                                                    "name": "d3_svg_axisY"
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
                                                      "name": "lineEnter"
                                                    },
                                                    "property": {
                                                      "type": "Identifier",
                                                      "name": "attr"
                                                    }
                                                  },
                                                  "arguments": [
                                                    {
                                                      "type": "Literal",
                                                      "value": "x2",
                                                      "raw": "\"x2\""
                                                    },
                                                    {
                                                      "type": "UnaryExpression",
                                                      "operator": "-",
                                                      "argument": {
                                                        "type": "Identifier",
                                                        "name": "innerTickSize"
                                                      },
                                                      "prefix": true
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
                                                      "name": "textEnter"
                                                    },
                                                    "property": {
                                                      "type": "Identifier",
                                                      "name": "attr"
                                                    }
                                                  },
                                                  "arguments": [
                                                    {
                                                      "type": "Literal",
                                                      "value": "x",
                                                      "raw": "\"x\""
                                                    },
                                                    {
                                                      "type": "UnaryExpression",
                                                      "operator": "-",
                                                      "argument": {
                                                        "type": "BinaryExpression",
                                                        "operator": "+",
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
                                                              "name": "max"
                                                            }
                                                          },
                                                          "arguments": [
                                                            {
                                                              "type": "Identifier",
                                                              "name": "innerTickSize"
                                                            },
                                                            {
                                                              "type": "Literal",
                                                              "value": 0,
                                                              "raw": "0"
                                                            }
                                                          ]
                                                        },
                                                        "right": {
                                                          "type": "Identifier",
                                                          "name": "tickPadding"
                                                        }
                                                      },
                                                      "prefix": true
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
                                                      "type": "CallExpression",
                                                      "callee": {
                                                        "type": "MemberExpression",
                                                        "computed": false,
                                                        "object": {
                                                          "type": "Identifier",
                                                          "name": "lineUpdate"
                                                        },
                                                        "property": {
                                                          "type": "Identifier",
                                                          "name": "attr"
                                                        }
                                                      },
                                                      "arguments": [
                                                        {
                                                          "type": "Literal",
                                                          "value": "x2",
                                                          "raw": "\"x2\""
                                                        },
                                                        {
                                                          "type": "UnaryExpression",
                                                          "operator": "-",
                                                          "argument": {
                                                            "type": "Identifier",
                                                            "name": "innerTickSize"
                                                          },
                                                          "prefix": true
                                                        }
                                                      ]
                                                    },
                                                    "property": {
                                                      "type": "Identifier",
                                                      "name": "attr"
                                                    }
                                                  },
                                                  "arguments": [
                                                    {
                                                      "type": "Literal",
                                                      "value": "y2",
                                                      "raw": "\"y2\""
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
                                                "type": "ExpressionStatement",
                                                "expression": {
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
                                                          "name": "textUpdate"
                                                        },
                                                        "property": {
                                                          "type": "Identifier",
                                                          "name": "attr"
                                                        }
                                                      },
                                                      "arguments": [
                                                        {
                                                          "type": "Literal",
                                                          "value": "x",
                                                          "raw": "\"x\""
                                                        },
                                                        {
                                                          "type": "UnaryExpression",
                                                          "operator": "-",
                                                          "argument": {
                                                            "type": "BinaryExpression",
                                                            "operator": "+",
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
                                                                  "name": "max"
                                                                }
                                                              },
                                                              "arguments": [
                                                                {
                                                                  "type": "Identifier",
                                                                  "name": "innerTickSize"
                                                                },
                                                                {
                                                                  "type": "Literal",
                                                                  "value": 0,
                                                                  "raw": "0"
                                                                }
                                                              ]
                                                            },
                                                            "right": {
                                                              "type": "Identifier",
                                                              "name": "tickPadding"
                                                            }
                                                          },
                                                          "prefix": true
                                                        }
                                                      ]
                                                    },
                                                    "property": {
                                                      "type": "Identifier",
                                                      "name": "attr"
                                                    }
                                                  },
                                                  "arguments": [
                                                    {
                                                      "type": "Literal",
                                                      "value": "y",
                                                      "raw": "\"y\""
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
                                                "type": "ExpressionStatement",
                                                "expression": {
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
                                                          "name": "text"
                                                        },
                                                        "property": {
                                                          "type": "Identifier",
                                                          "name": "attr"
                                                        }
                                                      },
                                                      "arguments": [
                                                        {
                                                          "type": "Literal",
                                                          "value": "dy",
                                                          "raw": "\"dy\""
                                                        },
                                                        {
                                                          "type": "Literal",
                                                          "value": ".32em",
                                                          "raw": "\".32em\""
                                                        }
                                                      ]
                                                    },
                                                    "property": {
                                                      "type": "Identifier",
                                                      "name": "style"
                                                    }
                                                  },
                                                  "arguments": [
                                                    {
                                                      "type": "Literal",
                                                      "value": "text-anchor",
                                                      "raw": "\"text-anchor\""
                                                    },
                                                    {
                                                      "type": "Literal",
                                                      "value": "end",
                                                      "raw": "\"end\""
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
                                                      "name": "pathUpdate"
                                                    },
                                                    "property": {
                                                      "type": "Identifier",
                                                      "name": "attr"
                                                    }
                                                  },
                                                  "arguments": [
                                                    {
                                                      "type": "Literal",
                                                      "value": "d",
                                                      "raw": "\"d\""
                                                    },
                                                    {
                                                      "type": "BinaryExpression",
                                                      "operator": "+",
                                                      "left": {
                                                        "type": "BinaryExpression",
                                                        "operator": "+",
                                                        "left": {
                                                          "type": "BinaryExpression",
                                                          "operator": "+",
                                                          "left": {
                                                            "type": "BinaryExpression",
                                                            "operator": "+",
                                                            "left": {
                                                              "type": "BinaryExpression",
                                                              "operator": "+",
                                                              "left": {
                                                                "type": "BinaryExpression",
                                                                "operator": "+",
                                                                "left": {
                                                                  "type": "BinaryExpression",
                                                                  "operator": "+",
                                                                  "left": {
                                                                    "type": "Literal",
                                                                    "value": "M",
                                                                    "raw": "\"M\""
                                                                  },
                                                                  "right": {
                                                                    "type": "UnaryExpression",
                                                                    "operator": "-",
                                                                    "argument": {
                                                                      "type": "Identifier",
                                                                      "name": "outerTickSize"
                                                                    },
                                                                    "prefix": true
                                                                  }
                                                                },
                                                                "right": {
                                                                  "type": "Literal",
                                                                  "value": ",",
                                                                  "raw": "\",\""
                                                                }
                                                              },
                                                              "right": {
                                                                "type": "MemberExpression",
                                                                "computed": true,
                                                                "object": {
                                                                  "type": "Identifier",
                                                                  "name": "range"
                                                                },
                                                                "property": {
                                                                  "type": "Literal",
                                                                  "value": 0,
                                                                  "raw": "0"
                                                                }
                                                              }
                                                            },
                                                            "right": {
                                                              "type": "Literal",
                                                              "value": "H0V",
                                                              "raw": "\"H0V\""
                                                            }
                                                          },
                                                          "right": {
                                                            "type": "MemberExpression",
                                                            "computed": true,
                                                            "object": {
                                                              "type": "Identifier",
                                                              "name": "range"
                                                            },
                                                            "property": {
                                                              "type": "Literal",
                                                              "value": 1,
                                                              "raw": "1"
                                                            }
                                                          }
                                                        },
                                                        "right": {
                                                          "type": "Literal",
                                                          "value": "H",
                                                          "raw": "\"H\""
                                                        }
                                                      },
                                                      "right": {
                                                        "type": "UnaryExpression",
                                                        "operator": "-",
                                                        "argument": {
                                                          "type": "Identifier",
                                                          "name": "outerTickSize"
                                                        },
                                                        "prefix": true
                                                      }
                                                    }
                                                  ]
                                                }
                                              },
                                              {
                                                "type": "BreakStatement",
                                                "label": null
                                              }
                                            ]
                                          }
                                        ]
                                      },
                                      {
                                        "type": "SwitchCase",
                                        "test": {
                                          "type": "Literal",
                                          "value": "right",
                                          "raw": "\"right\""
                                        },
                                        "consequent": [
                                          {
                                            "type": "BlockStatement",
                                            "body": [
                                              {
                                                "type": "ExpressionStatement",
                                                "expression": {
                                                  "type": "AssignmentExpression",
                                                  "operator": "=",
                                                  "left": {
                                                    "type": "Identifier",
                                                    "name": "tickTransform"
                                                  },
                                                  "right": {
                                                    "type": "Identifier",
                                                    "name": "d3_svg_axisY"
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
                                                      "name": "lineEnter"
                                                    },
                                                    "property": {
                                                      "type": "Identifier",
                                                      "name": "attr"
                                                    }
                                                  },
                                                  "arguments": [
                                                    {
                                                      "type": "Literal",
                                                      "value": "x2",
                                                      "raw": "\"x2\""
                                                    },
                                                    {
                                                      "type": "Identifier",
                                                      "name": "innerTickSize"
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
                                                      "name": "textEnter"
                                                    },
                                                    "property": {
                                                      "type": "Identifier",
                                                      "name": "attr"
                                                    }
                                                  },
                                                  "arguments": [
                                                    {
                                                      "type": "Literal",
                                                      "value": "x",
                                                      "raw": "\"x\""
                                                    },
                                                    {
                                                      "type": "BinaryExpression",
                                                      "operator": "+",
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
                                                            "name": "max"
                                                          }
                                                        },
                                                        "arguments": [
                                                          {
                                                            "type": "Identifier",
                                                            "name": "innerTickSize"
                                                          },
                                                          {
                                                            "type": "Literal",
                                                            "value": 0,
                                                            "raw": "0"
                                                          }
                                                        ]
                                                      },
                                                      "right": {
                                                        "type": "Identifier",
                                                        "name": "tickPadding"
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
                                                      "type": "CallExpression",
                                                      "callee": {
                                                        "type": "MemberExpression",
                                                        "computed": false,
                                                        "object": {
                                                          "type": "Identifier",
                                                          "name": "lineUpdate"
                                                        },
                                                        "property": {
                                                          "type": "Identifier",
                                                          "name": "attr"
                                                        }
                                                      },
                                                      "arguments": [
                                                        {
                                                          "type": "Literal",
                                                          "value": "x2",
                                                          "raw": "\"x2\""
                                                        },
                                                        {
                                                          "type": "Identifier",
                                                          "name": "innerTickSize"
                                                        }
                                                      ]
                                                    },
                                                    "property": {
                                                      "type": "Identifier",
                                                      "name": "attr"
                                                    }
                                                  },
                                                  "arguments": [
                                                    {
                                                      "type": "Literal",
                                                      "value": "y2",
                                                      "raw": "\"y2\""
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
                                                "type": "ExpressionStatement",
                                                "expression": {
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
                                                          "name": "textUpdate"
                                                        },
                                                        "property": {
                                                          "type": "Identifier",
                                                          "name": "attr"
                                                        }
                                                      },
                                                      "arguments": [
                                                        {
                                                          "type": "Literal",
                                                          "value": "x",
                                                          "raw": "\"x\""
                                                        },
                                                        {
                                                          "type": "BinaryExpression",
                                                          "operator": "+",
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
                                                                "name": "max"
                                                              }
                                                            },
                                                            "arguments": [
                                                              {
                                                                "type": "Identifier",
                                                                "name": "innerTickSize"
                                                              },
                                                              {
                                                                "type": "Literal",
                                                                "value": 0,
                                                                "raw": "0"
                                                              }
                                                            ]
                                                          },
                                                          "right": {
                                                            "type": "Identifier",
                                                            "name": "tickPadding"
                                                          }
                                                        }
                                                      ]
                                                    },
                                                    "property": {
                                                      "type": "Identifier",
                                                      "name": "attr"
                                                    }
                                                  },
                                                  "arguments": [
                                                    {
                                                      "type": "Literal",
                                                      "value": "y",
                                                      "raw": "\"y\""
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
                                                "type": "ExpressionStatement",
                                                "expression": {
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
                                                          "name": "text"
                                                        },
                                                        "property": {
                                                          "type": "Identifier",
                                                          "name": "attr"
                                                        }
                                                      },
                                                      "arguments": [
                                                        {
                                                          "type": "Literal",
                                                          "value": "dy",
                                                          "raw": "\"dy\""
                                                        },
                                                        {
                                                          "type": "Literal",
                                                          "value": ".32em",
                                                          "raw": "\".32em\""
                                                        }
                                                      ]
                                                    },
                                                    "property": {
                                                      "type": "Identifier",
                                                      "name": "style"
                                                    }
                                                  },
                                                  "arguments": [
                                                    {
                                                      "type": "Literal",
                                                      "value": "text-anchor",
                                                      "raw": "\"text-anchor\""
                                                    },
                                                    {
                                                      "type": "Literal",
                                                      "value": "start",
                                                      "raw": "\"start\""
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
                                                      "name": "pathUpdate"
                                                    },
                                                    "property": {
                                                      "type": "Identifier",
                                                      "name": "attr"
                                                    }
                                                  },
                                                  "arguments": [
                                                    {
                                                      "type": "Literal",
                                                      "value": "d",
                                                      "raw": "\"d\""
                                                    },
                                                    {
                                                      "type": "BinaryExpression",
                                                      "operator": "+",
                                                      "left": {
                                                        "type": "BinaryExpression",
                                                        "operator": "+",
                                                        "left": {
                                                          "type": "BinaryExpression",
                                                          "operator": "+",
                                                          "left": {
                                                            "type": "BinaryExpression",
                                                            "operator": "+",
                                                            "left": {
                                                              "type": "BinaryExpression",
                                                              "operator": "+",
                                                              "left": {
                                                                "type": "BinaryExpression",
                                                                "operator": "+",
                                                                "left": {
                                                                  "type": "BinaryExpression",
                                                                  "operator": "+",
                                                                  "left": {
                                                                    "type": "Literal",
                                                                    "value": "M",
                                                                    "raw": "\"M\""
                                                                  },
                                                                  "right": {
                                                                    "type": "Identifier",
                                                                    "name": "outerTickSize"
                                                                  }
                                                                },
                                                                "right": {
                                                                  "type": "Literal",
                                                                  "value": ",",
                                                                  "raw": "\",\""
                                                                }
                                                              },
                                                              "right": {
                                                                "type": "MemberExpression",
                                                                "computed": true,
                                                                "object": {
                                                                  "type": "Identifier",
                                                                  "name": "range"
                                                                },
                                                                "property": {
                                                                  "type": "Literal",
                                                                  "value": 0,
                                                                  "raw": "0"
                                                                }
                                                              }
                                                            },
                                                            "right": {
                                                              "type": "Literal",
                                                              "value": "H0V",
                                                              "raw": "\"H0V\""
                                                            }
                                                          },
                                                          "right": {
                                                            "type": "MemberExpression",
                                                            "computed": true,
                                                            "object": {
                                                              "type": "Identifier",
                                                              "name": "range"
                                                            },
                                                            "property": {
                                                              "type": "Literal",
                                                              "value": 1,
                                                              "raw": "1"
                                                            }
                                                          }
                                                        },
                                                        "right": {
                                                          "type": "Literal",
                                                          "value": "H",
                                                          "raw": "\"H\""
                                                        }
                                                      },
                                                      "right": {
                                                        "type": "Identifier",
                                                        "name": "outerTickSize"
                                                      }
                                                    }
                                                  ]
                                                }
                                              },
                                              {
                                                "type": "BreakStatement",
                                                "label": null
                                              }
                                            ]
                                          }
                                        ]
                                      }
                                    ]
                                  },
                                  {
                                    "type": "IfStatement",
                                    "test": {
                                      "type": "MemberExpression",
                                      "computed": false,
                                      "object": {
                                        "type": "Identifier",
                                        "name": "scale1"
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "name": "rangeBand"
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
                                                "name": "x"
                                              },
                                              "init": {
                                                "type": "Identifier",
                                                "name": "scale1"
                                              }
                                            },
                                            {
                                              "type": "VariableDeclarator",
                                              "id": {
                                                "type": "Identifier",
                                                "name": "dx"
                                              },
                                              "init": {
                                                "type": "BinaryExpression",
                                                "operator": "/",
                                                "left": {
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
                                                      "name": "rangeBand"
                                                    }
                                                  },
                                                  "arguments": []
                                                },
                                                "right": {
                                                  "type": "Literal",
                                                  "value": 2,
                                                  "raw": "2"
                                                }
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
                                              "name": "scale0"
                                            },
                                            "right": {
                                              "type": "AssignmentExpression",
                                              "operator": "=",
                                              "left": {
                                                "type": "Identifier",
                                                "name": "scale1"
                                              },
                                              "right": {
                                                "type": "FunctionExpression",
                                                "id": null,
                                                "params": [
                                                  {
                                                    "type": "Identifier",
                                                    "name": "d"
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
                                                        "operator": "+",
                                                        "left": {
                                                          "type": "CallExpression",
                                                          "callee": {
                                                            "type": "Identifier",
                                                            "name": "x"
                                                          },
                                                          "arguments": [
                                                            {
                                                              "type": "Identifier",
                                                              "name": "d"
                                                            }
                                                          ]
                                                        },
                                                        "right": {
                                                          "type": "Identifier",
                                                          "name": "dx"
                                                        }
                                                      }
                                                    }
                                                  ]
                                                },
                                                "rest": null,
                                                "generator": false,
                                                "expression": false
                                              }
                                            }
                                          }
                                        }
                                      ]
                                    },
                                    "alternate": {
                                      "type": "IfStatement",
                                      "test": {
                                        "type": "MemberExpression",
                                        "computed": false,
                                        "object": {
                                          "type": "Identifier",
                                          "name": "scale0"
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "name": "rangeBand"
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
                                                "name": "scale0"
                                              },
                                              "right": {
                                                "type": "Identifier",
                                                "name": "scale1"
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
                                                  "name": "tickExit"
                                                },
                                                "property": {
                                                  "type": "Identifier",
                                                  "name": "call"
                                                }
                                              },
                                              "arguments": [
                                                {
                                                  "type": "Identifier",
                                                  "name": "tickTransform"
                                                },
                                                {
                                                  "type": "Identifier",
                                                  "name": "scale1"
                                                }
                                              ]
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
                                          "name": "tickEnter"
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "name": "call"
                                        }
                                      },
                                      "arguments": [
                                        {
                                          "type": "Identifier",
                                          "name": "tickTransform"
                                        },
                                        {
                                          "type": "Identifier",
                                          "name": "scale0"
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
                                          "name": "tickUpdate"
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "name": "call"
                                        }
                                      },
                                      "arguments": [
                                        {
                                          "type": "Identifier",
                                          "name": "tickTransform"
                                        },
                                        {
                                          "type": "Identifier",
                                          "name": "scale1"
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
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "name": "axis"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "scale"
                      }
                    },
                    "right": {
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
                                "name": "scale"
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
                                "name": "scale"
                              },
                              "right": {
                                "type": "Identifier",
                                "name": "x"
                              }
                            }
                          },
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "Identifier",
                              "name": "axis"
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
                        "name": "axis"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "orient"
                      }
                    },
                    "right": {
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
                                "name": "orient"
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
                                "name": "orient"
                              },
                              "right": {
                                "type": "ConditionalExpression",
                                "test": {
                                  "type": "BinaryExpression",
                                  "operator": "in",
                                  "left": {
                                    "type": "Identifier",
                                    "name": "x"
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "name": "d3_svg_axisOrients"
                                  }
                                },
                                "consequent": {
                                  "type": "BinaryExpression",
                                  "operator": "+",
                                  "left": {
                                    "type": "Identifier",
                                    "name": "x"
                                  },
                                  "right": {
                                    "type": "Literal",
                                    "value": "",
                                    "raw": "\"\""
                                  }
                                },
                                "alternate": {
                                  "type": "Identifier",
                                  "name": "d3_svg_axisDefaultOrient"
                                }
                              }
                            }
                          },
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "Identifier",
                              "name": "axis"
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
                        "name": "axis"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "ticks"
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
                                "name": "tickArguments_"
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
                                "name": "tickArguments_"
                              },
                              "right": {
                                "type": "Identifier",
                                "name": "arguments"
                              }
                            }
                          },
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "Identifier",
                              "name": "axis"
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
                        "name": "axis"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "tickValues"
                      }
                    },
                    "right": {
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
                                "name": "tickValues"
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
                                "name": "tickValues"
                              },
                              "right": {
                                "type": "Identifier",
                                "name": "x"
                              }
                            }
                          },
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "Identifier",
                              "name": "axis"
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
                        "name": "axis"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "tickFormat"
                      }
                    },
                    "right": {
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
                                "name": "tickFormat_"
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
                                "name": "tickFormat_"
                              },
                              "right": {
                                "type": "Identifier",
                                "name": "x"
                              }
                            }
                          },
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "Identifier",
                              "name": "axis"
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
                        "name": "axis"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "tickSize"
                      }
                    },
                    "right": {
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
                                  "name": "n"
                                },
                                "init": {
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
                                "name": "n"
                              },
                              "prefix": true
                            },
                            "consequent": {
                              "type": "ReturnStatement",
                              "argument": {
                                "type": "Identifier",
                                "name": "innerTickSize"
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
                                "name": "innerTickSize"
                              },
                              "right": {
                                "type": "UnaryExpression",
                                "operator": "+",
                                "argument": {
                                  "type": "Identifier",
                                  "name": "x"
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
                                "name": "outerTickSize"
                              },
                              "right": {
                                "type": "UnaryExpression",
                                "operator": "+",
                                "argument": {
                                  "type": "MemberExpression",
                                  "computed": true,
                                  "object": {
                                    "type": "Identifier",
                                    "name": "arguments"
                                  },
                                  "property": {
                                    "type": "BinaryExpression",
                                    "operator": "-",
                                    "left": {
                                      "type": "Identifier",
                                      "name": "n"
                                    },
                                    "right": {
                                      "type": "Literal",
                                      "value": 1,
                                      "raw": "1"
                                    }
                                  }
                                },
                                "prefix": true
                              }
                            }
                          },
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "Identifier",
                              "name": "axis"
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
                        "name": "axis"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "innerTickSize"
                      }
                    },
                    "right": {
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
                                "name": "innerTickSize"
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
                                "name": "innerTickSize"
                              },
                              "right": {
                                "type": "UnaryExpression",
                                "operator": "+",
                                "argument": {
                                  "type": "Identifier",
                                  "name": "x"
                                },
                                "prefix": true
                              }
                            }
                          },
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "Identifier",
                              "name": "axis"
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
                        "name": "axis"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "outerTickSize"
                      }
                    },
                    "right": {
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
                                "name": "outerTickSize"
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
                                "name": "outerTickSize"
                              },
                              "right": {
                                "type": "UnaryExpression",
                                "operator": "+",
                                "argument": {
                                  "type": "Identifier",
                                  "name": "x"
                                },
                                "prefix": true
                              }
                            }
                          },
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "Identifier",
                              "name": "axis"
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
                        "name": "axis"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "tickPadding"
                      }
                    },
                    "right": {
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
                                "name": "tickPadding"
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
                                "name": "tickPadding"
                              },
                              "right": {
                                "type": "UnaryExpression",
                                "operator": "+",
                                "argument": {
                                  "type": "Identifier",
                                  "name": "x"
                                },
                                "prefix": true
                              }
                            }
                          },
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "Identifier",
                              "name": "axis"
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
                        "name": "axis"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "tickSubdivide"
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
                              "type": "LogicalExpression",
                              "operator": "&&",
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
                                "type": "Identifier",
                                "name": "axis"
                              }
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
                    "name": "axis"
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
        "type": "VariableDeclaration",
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "name": "d3_svg_axisDefaultOrient"
            },
            "init": {
              "type": "Literal",
              "value": "bottom",
              "raw": "\"bottom\""
            }
          }
        ]
      },
      {
        "type": "VariableDeclaration",
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "name": "d3_svg_axisOrients"
            },
            "init": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "key": {
                    "type": "Identifier",
                    "name": "top"
                  },
                  "value": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1"
                  },
                  "kind": "init"
                },
                {
                  "type": "Property",
                  "key": {
                    "type": "Identifier",
                    "name": "right"
                  },
                  "value": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1"
                  },
                  "kind": "init"
                },
                {
                  "type": "Property",
                  "key": {
                    "type": "Identifier",
                    "name": "bottom"
                  },
                  "value": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1"
                  },
                  "kind": "init"
                },
                {
                  "type": "Property",
                  "key": {
                    "type": "Identifier",
                    "name": "left"
                  },
                  "value": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1"
                  },
                  "kind": "init"
                }
              ]
            }
          }
        ]
      },
      {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "name": "d3_svg_axisX"
        },
        "params": [
          {
            "type": "Identifier",
            "name": "selection"
          },
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
              "type": "ExpressionStatement",
              "expression": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "name": "selection"
                  },
                  "property": {
                    "type": "Identifier",
                    "name": "attr"
                  }
                },
                "arguments": [
                  {
                    "type": "Literal",
                    "value": "transform",
                    "raw": "\"transform\""
                  },
                  {
                    "type": "FunctionExpression",
                    "id": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "name": "d"
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
                            "operator": "+",
                            "left": {
                              "type": "BinaryExpression",
                              "operator": "+",
                              "left": {
                                "type": "Literal",
                                "value": "translate(",
                                "raw": "\"translate(\""
                              },
                              "right": {
                                "type": "CallExpression",
                                "callee": {
                                  "type": "Identifier",
                                  "name": "x"
                                },
                                "arguments": [
                                  {
                                    "type": "Identifier",
                                    "name": "d"
                                  }
                                ]
                              }
                            },
                            "right": {
                              "type": "Literal",
                              "value": ",0)",
                              "raw": "\",0)\""
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
          "name": "d3_svg_axisY"
        },
        "params": [
          {
            "type": "Identifier",
            "name": "selection"
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
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "name": "selection"
                  },
                  "property": {
                    "type": "Identifier",
                    "name": "attr"
                  }
                },
                "arguments": [
                  {
                    "type": "Literal",
                    "value": "transform",
                    "raw": "\"transform\""
                  },
                  {
                    "type": "FunctionExpression",
                    "id": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "name": "d"
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
                            "operator": "+",
                            "left": {
                              "type": "BinaryExpression",
                              "operator": "+",
                              "left": {
                                "type": "Literal",
                                "value": "translate(0,",
                                "raw": "\"translate(0,\""
                              },
                              "right": {
                                "type": "CallExpression",
                                "callee": {
                                  "type": "Identifier",
                                  "name": "y"
                                },
                                "arguments": [
                                  {
                                    "type": "Identifier",
                                    "name": "d"
                                  }
                                ]
                              }
                            },
                            "right": {
                              "type": "Literal",
                              "value": ")",
                              "raw": "\")\""
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
  "src": "d3.svg.axis = function () {\n    var scale = d3.scale.linear(), orient = d3_svg_axisDefaultOrient, innerTickSize = 6, outerTickSize = 6, tickPadding = 3, tickArguments_ = [10], tickValues = null, tickFormat_;\n    function axis(g) {\n        g.each(function () {\n            var g = d3.select(this);\n            var scale0 = this.__chart__ || scale, scale1 = this.__chart__ = scale.copy();\n            var ticks = tickValues == null ? scale1.ticks ? scale1.ticks.apply(scale1, tickArguments_) : scale1.domain() : tickValues, tickFormat = tickFormat_ == null ? scale1.tickFormat ? scale1.tickFormat.apply(scale1, tickArguments_) : d3_identity : tickFormat_, tick = g.selectAll('.tick').data(ticks, scale1), tickEnter = tick.enter().insert('g', '.domain').attr('class', 'tick').style('opacity', ε), tickExit = d3.transition(tick.exit()).style('opacity', ε).remove(), tickUpdate = d3.transition(tick.order()).style('opacity', 1), tickTransform;\n            var range = d3_scaleRange(scale1), path = g.selectAll('.domain').data([0]), pathUpdate = (path.enter().append('path').attr('class', 'domain'), d3.transition(path));\n            tickEnter.append('line');\n            tickEnter.append('text');\n            var lineEnter = tickEnter.select('line'), lineUpdate = tickUpdate.select('line'), text = tick.select('text').text(tickFormat), textEnter = tickEnter.select('text'), textUpdate = tickUpdate.select('text');\n            switch (orient) {\n            case 'bottom': {\n                    tickTransform = d3_svg_axisX;\n                    lineEnter.attr('y2', innerTickSize);\n                    textEnter.attr('y', Math.max(innerTickSize, 0) + tickPadding);\n                    lineUpdate.attr('x2', 0).attr('y2', innerTickSize);\n                    textUpdate.attr('x', 0).attr('y', Math.max(innerTickSize, 0) + tickPadding);\n                    text.attr('dy', '.71em').style('text-anchor', 'middle');\n                    pathUpdate.attr('d', 'M' + range[0] + ',' + outerTickSize + 'V0H' + range[1] + 'V' + outerTickSize);\n                    break;\n                }\n            case 'top': {\n                    tickTransform = d3_svg_axisX;\n                    lineEnter.attr('y2', -innerTickSize);\n                    textEnter.attr('y', -(Math.max(innerTickSize, 0) + tickPadding));\n                    lineUpdate.attr('x2', 0).attr('y2', -innerTickSize);\n                    textUpdate.attr('x', 0).attr('y', -(Math.max(innerTickSize, 0) + tickPadding));\n                    text.attr('dy', '0em').style('text-anchor', 'middle');\n                    pathUpdate.attr('d', 'M' + range[0] + ',' + -outerTickSize + 'V0H' + range[1] + 'V' + -outerTickSize);\n                    break;\n                }\n            case 'left': {\n                    tickTransform = d3_svg_axisY;\n                    lineEnter.attr('x2', -innerTickSize);\n                    textEnter.attr('x', -(Math.max(innerTickSize, 0) + tickPadding));\n                    lineUpdate.attr('x2', -innerTickSize).attr('y2', 0);\n                    textUpdate.attr('x', -(Math.max(innerTickSize, 0) + tickPadding)).attr('y', 0);\n                    text.attr('dy', '.32em').style('text-anchor', 'end');\n                    pathUpdate.attr('d', 'M' + -outerTickSize + ',' + range[0] + 'H0V' + range[1] + 'H' + -outerTickSize);\n                    break;\n                }\n            case 'right': {\n                    tickTransform = d3_svg_axisY;\n                    lineEnter.attr('x2', innerTickSize);\n                    textEnter.attr('x', Math.max(innerTickSize, 0) + tickPadding);\n                    lineUpdate.attr('x2', innerTickSize).attr('y2', 0);\n                    textUpdate.attr('x', Math.max(innerTickSize, 0) + tickPadding).attr('y', 0);\n                    text.attr('dy', '.32em').style('text-anchor', 'start');\n                    pathUpdate.attr('d', 'M' + outerTickSize + ',' + range[0] + 'H0V' + range[1] + 'H' + outerTickSize);\n                    break;\n                }\n            }\n            if (scale1.rangeBand) {\n                var x = scale1, dx = x.rangeBand() / 2;\n                scale0 = scale1 = function (d) {\n                    return x(d) + dx;\n                };\n            } else if (scale0.rangeBand) {\n                scale0 = scale1;\n            } else {\n                tickExit.call(tickTransform, scale1);\n            }\n            tickEnter.call(tickTransform, scale0);\n            tickUpdate.call(tickTransform, scale1);\n        });\n    }\n    axis.scale = function (x) {\n        if (!arguments.length)\n            return scale;\n        scale = x;\n        return axis;\n    };\n    axis.orient = function (x) {\n        if (!arguments.length)\n            return orient;\n        orient = x in d3_svg_axisOrients ? x + '' : d3_svg_axisDefaultOrient;\n        return axis;\n    };\n    axis.ticks = function () {\n        if (!arguments.length)\n            return tickArguments_;\n        tickArguments_ = arguments;\n        return axis;\n    };\n    axis.tickValues = function (x) {\n        if (!arguments.length)\n            return tickValues;\n        tickValues = x;\n        return axis;\n    };\n    axis.tickFormat = function (x) {\n        if (!arguments.length)\n            return tickFormat_;\n        tickFormat_ = x;\n        return axis;\n    };\n    axis.tickSize = function (x) {\n        var n = arguments.length;\n        if (!n)\n            return innerTickSize;\n        innerTickSize = +x;\n        outerTickSize = +arguments[n - 1];\n        return axis;\n    };\n    axis.innerTickSize = function (x) {\n        if (!arguments.length)\n            return innerTickSize;\n        innerTickSize = +x;\n        return axis;\n    };\n    axis.outerTickSize = function (x) {\n        if (!arguments.length)\n            return outerTickSize;\n        outerTickSize = +x;\n        return axis;\n    };\n    axis.tickPadding = function (x) {\n        if (!arguments.length)\n            return tickPadding;\n        tickPadding = +x;\n        return axis;\n    };\n    axis.tickSubdivide = function () {\n        return arguments.length && axis;\n    };\n    return axis;\n};\nvar d3_svg_axisDefaultOrient = 'bottom';\nvar d3_svg_axisOrients = {\n        top: 1,\n        right: 1,\n        bottom: 1,\n        left: 1\n    };\nfunction d3_svg_axisX(selection, x) {\n    selection.attr('transform', function (d) {\n        return 'translate(' + x(d) + ',0)';\n    });\n}\nfunction d3_svg_axisY(selection, y) {\n    selection.attr('transform', function (d) {\n        return 'translate(0,' + y(d) + ')';\n    });\n}"
}