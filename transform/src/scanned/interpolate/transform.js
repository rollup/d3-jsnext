{
  "filepath": "/interpolate/transform.js",
  "shared": [],
  "dependencies": [
    "d3.transform",
    "d3_interpolateNumber"
  ],
  "helpers": [
    "d3_interpolateTransform"
  ],
  "exports": [
    "d3.interpolateTransform"
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
              "name": "interpolateTransform"
            }
          },
          "right": {
            "type": "Identifier",
            "name": "d3_interpolateTransform"
          }
        }
      },
      {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "name": "d3_interpolateTransform"
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
                    "name": "s"
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
                    "name": "q"
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
                    "name": "n"
                  },
                  "init": null
                },
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "name": "A"
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
                        "name": "transform"
                      }
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "name": "a"
                      }
                    ]
                  }
                },
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "name": "B"
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
                        "name": "transform"
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
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "name": "ta"
                  },
                  "init": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "name": "A"
                    },
                    "property": {
                      "type": "Identifier",
                      "name": "translate"
                    }
                  }
                },
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "name": "tb"
                  },
                  "init": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "name": "B"
                    },
                    "property": {
                      "type": "Identifier",
                      "name": "translate"
                    }
                  }
                },
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "name": "ra"
                  },
                  "init": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "name": "A"
                    },
                    "property": {
                      "type": "Identifier",
                      "name": "rotate"
                    }
                  }
                },
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "name": "rb"
                  },
                  "init": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "name": "B"
                    },
                    "property": {
                      "type": "Identifier",
                      "name": "rotate"
                    }
                  }
                },
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "name": "wa"
                  },
                  "init": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "name": "A"
                    },
                    "property": {
                      "type": "Identifier",
                      "name": "skew"
                    }
                  }
                },
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "name": "wb"
                  },
                  "init": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "name": "B"
                    },
                    "property": {
                      "type": "Identifier",
                      "name": "skew"
                    }
                  }
                },
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "name": "ka"
                  },
                  "init": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "name": "A"
                    },
                    "property": {
                      "type": "Identifier",
                      "name": "scale"
                    }
                  }
                },
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "name": "kb"
                  },
                  "init": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "name": "B"
                    },
                    "property": {
                      "type": "Identifier",
                      "name": "scale"
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
                  "type": "BinaryExpression",
                  "operator": "!=",
                  "left": {
                    "type": "MemberExpression",
                    "computed": true,
                    "object": {
                      "type": "Identifier",
                      "name": "ta"
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
                      "name": "tb"
                    },
                    "property": {
                      "type": "Literal",
                      "value": 0,
                      "raw": "0"
                    }
                  }
                },
                "right": {
                  "type": "BinaryExpression",
                  "operator": "!=",
                  "left": {
                    "type": "MemberExpression",
                    "computed": true,
                    "object": {
                      "type": "Identifier",
                      "name": "ta"
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
                      "name": "tb"
                    },
                    "property": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1"
                    }
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
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "name": "s"
                        },
                        "property": {
                          "type": "Identifier",
                          "name": "push"
                        }
                      },
                      "arguments": [
                        {
                          "type": "Literal",
                          "value": "translate(",
                          "raw": "\"translate(\""
                        },
                        {
                          "type": "Literal",
                          "value": null,
                          "raw": "null"
                        },
                        {
                          "type": "Literal",
                          "value": ",",
                          "raw": "\",\""
                        },
                        {
                          "type": "Literal",
                          "value": null,
                          "raw": "null"
                        },
                        {
                          "type": "Literal",
                          "value": ")",
                          "raw": "\")\""
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
                          "name": "q"
                        },
                        "property": {
                          "type": "Identifier",
                          "name": "push"
                        }
                      },
                      "arguments": [
                        {
                          "type": "ObjectExpression",
                          "properties": [
                            {
                              "type": "Property",
                              "key": {
                                "type": "Identifier",
                                "name": "i"
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
                                "name": "x"
                              },
                              "value": {
                                "type": "CallExpression",
                                "callee": {
                                  "type": "Identifier",
                                  "name": "d3_interpolateNumber"
                                },
                                "arguments": [
                                  {
                                    "type": "MemberExpression",
                                    "computed": true,
                                    "object": {
                                      "type": "Identifier",
                                      "name": "ta"
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
                                      "name": "tb"
                                    },
                                    "property": {
                                      "type": "Literal",
                                      "value": 0,
                                      "raw": "0"
                                    }
                                  }
                                ]
                              },
                              "kind": "init"
                            }
                          ]
                        },
                        {
                          "type": "ObjectExpression",
                          "properties": [
                            {
                              "type": "Property",
                              "key": {
                                "type": "Identifier",
                                "name": "i"
                              },
                              "value": {
                                "type": "Literal",
                                "value": 3,
                                "raw": "3"
                              },
                              "kind": "init"
                            },
                            {
                              "type": "Property",
                              "key": {
                                "type": "Identifier",
                                "name": "x"
                              },
                              "value": {
                                "type": "CallExpression",
                                "callee": {
                                  "type": "Identifier",
                                  "name": "d3_interpolateNumber"
                                },
                                "arguments": [
                                  {
                                    "type": "MemberExpression",
                                    "computed": true,
                                    "object": {
                                      "type": "Identifier",
                                      "name": "ta"
                                    },
                                    "property": {
                                      "type": "Literal",
                                      "value": 1,
                                      "raw": "1"
                                    }
                                  },
                                  {
                                    "type": "MemberExpression",
                                    "computed": true,
                                    "object": {
                                      "type": "Identifier",
                                      "name": "tb"
                                    },
                                    "property": {
                                      "type": "Literal",
                                      "value": 1,
                                      "raw": "1"
                                    }
                                  }
                                ]
                              },
                              "kind": "init"
                            }
                          ]
                        }
                      ]
                    }
                  }
                ]
              },
              "alternate": {
                "type": "IfStatement",
                "test": {
                  "type": "LogicalExpression",
                  "operator": "||",
                  "left": {
                    "type": "MemberExpression",
                    "computed": true,
                    "object": {
                      "type": "Identifier",
                      "name": "tb"
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
                      "name": "tb"
                    },
                    "property": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1"
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
                          "type": "MemberExpression",
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "name": "s"
                          },
                          "property": {
                            "type": "Identifier",
                            "name": "push"
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
                                "type": "Literal",
                                "value": "translate(",
                                "raw": "\"translate(\""
                              },
                              "right": {
                                "type": "Identifier",
                                "name": "tb"
                              }
                            },
                            "right": {
                              "type": "Literal",
                              "value": ")",
                              "raw": "\")\""
                            }
                          }
                        ]
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
                            "name": "s"
                          },
                          "property": {
                            "type": "Identifier",
                            "name": "push"
                          }
                        },
                        "arguments": [
                          {
                            "type": "Literal",
                            "value": "",
                            "raw": "\"\""
                          }
                        ]
                      }
                    }
                  ]
                }
              }
            },
            {
              "type": "IfStatement",
              "test": {
                "type": "BinaryExpression",
                "operator": "!=",
                "left": {
                  "type": "Identifier",
                  "name": "ra"
                },
                "right": {
                  "type": "Identifier",
                  "name": "rb"
                }
              },
              "consequent": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "IfStatement",
                    "test": {
                      "type": "BinaryExpression",
                      "operator": ">",
                      "left": {
                        "type": "BinaryExpression",
                        "operator": "-",
                        "left": {
                          "type": "Identifier",
                          "name": "ra"
                        },
                        "right": {
                          "type": "Identifier",
                          "name": "rb"
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "value": 180,
                        "raw": "180"
                      }
                    },
                    "consequent": {
                      "type": "ExpressionStatement",
                      "expression": {
                        "type": "AssignmentExpression",
                        "operator": "+=",
                        "left": {
                          "type": "Identifier",
                          "name": "rb"
                        },
                        "right": {
                          "type": "Literal",
                          "value": 360,
                          "raw": "360"
                        }
                      }
                    },
                    "alternate": {
                      "type": "IfStatement",
                      "test": {
                        "type": "BinaryExpression",
                        "operator": ">",
                        "left": {
                          "type": "BinaryExpression",
                          "operator": "-",
                          "left": {
                            "type": "Identifier",
                            "name": "rb"
                          },
                          "right": {
                            "type": "Identifier",
                            "name": "ra"
                          }
                        },
                        "right": {
                          "type": "Literal",
                          "value": 180,
                          "raw": "180"
                        }
                      },
                      "consequent": {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "AssignmentExpression",
                          "operator": "+=",
                          "left": {
                            "type": "Identifier",
                            "name": "ra"
                          },
                          "right": {
                            "type": "Literal",
                            "value": 360,
                            "raw": "360"
                          }
                        }
                      },
                      "alternate": null
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
                          "name": "q"
                        },
                        "property": {
                          "type": "Identifier",
                          "name": "push"
                        }
                      },
                      "arguments": [
                        {
                          "type": "ObjectExpression",
                          "properties": [
                            {
                              "type": "Property",
                              "key": {
                                "type": "Identifier",
                                "name": "i"
                              },
                              "value": {
                                "type": "BinaryExpression",
                                "operator": "-",
                                "left": {
                                  "type": "CallExpression",
                                  "callee": {
                                    "type": "MemberExpression",
                                    "computed": false,
                                    "object": {
                                      "type": "Identifier",
                                      "name": "s"
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "name": "push"
                                    }
                                  },
                                  "arguments": [
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
                                            "name": "s"
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "name": "pop"
                                          }
                                        },
                                        "arguments": []
                                      },
                                      "right": {
                                        "type": "Literal",
                                        "value": "rotate(",
                                        "raw": "\"rotate(\""
                                      }
                                    },
                                    {
                                      "type": "Literal",
                                      "value": null,
                                      "raw": "null"
                                    },
                                    {
                                      "type": "Literal",
                                      "value": ")",
                                      "raw": "\")\""
                                    }
                                  ]
                                },
                                "right": {
                                  "type": "Literal",
                                  "value": 2,
                                  "raw": "2"
                                }
                              },
                              "kind": "init"
                            },
                            {
                              "type": "Property",
                              "key": {
                                "type": "Identifier",
                                "name": "x"
                              },
                              "value": {
                                "type": "CallExpression",
                                "callee": {
                                  "type": "Identifier",
                                  "name": "d3_interpolateNumber"
                                },
                                "arguments": [
                                  {
                                    "type": "Identifier",
                                    "name": "ra"
                                  },
                                  {
                                    "type": "Identifier",
                                    "name": "rb"
                                  }
                                ]
                              },
                              "kind": "init"
                            }
                          ]
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
                  "name": "rb"
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
                            "name": "s"
                          },
                          "property": {
                            "type": "Identifier",
                            "name": "push"
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
                                "operator": "+",
                                "left": {
                                  "type": "CallExpression",
                                  "callee": {
                                    "type": "MemberExpression",
                                    "computed": false,
                                    "object": {
                                      "type": "Identifier",
                                      "name": "s"
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "name": "pop"
                                    }
                                  },
                                  "arguments": []
                                },
                                "right": {
                                  "type": "Literal",
                                  "value": "rotate(",
                                  "raw": "\"rotate(\""
                                }
                              },
                              "right": {
                                "type": "Identifier",
                                "name": "rb"
                              }
                            },
                            "right": {
                              "type": "Literal",
                              "value": ")",
                              "raw": "\")\""
                            }
                          }
                        ]
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
                "type": "BinaryExpression",
                "operator": "!=",
                "left": {
                  "type": "Identifier",
                  "name": "wa"
                },
                "right": {
                  "type": "Identifier",
                  "name": "wb"
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
                          "name": "q"
                        },
                        "property": {
                          "type": "Identifier",
                          "name": "push"
                        }
                      },
                      "arguments": [
                        {
                          "type": "ObjectExpression",
                          "properties": [
                            {
                              "type": "Property",
                              "key": {
                                "type": "Identifier",
                                "name": "i"
                              },
                              "value": {
                                "type": "BinaryExpression",
                                "operator": "-",
                                "left": {
                                  "type": "CallExpression",
                                  "callee": {
                                    "type": "MemberExpression",
                                    "computed": false,
                                    "object": {
                                      "type": "Identifier",
                                      "name": "s"
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "name": "push"
                                    }
                                  },
                                  "arguments": [
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
                                            "name": "s"
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "name": "pop"
                                          }
                                        },
                                        "arguments": []
                                      },
                                      "right": {
                                        "type": "Literal",
                                        "value": "skewX(",
                                        "raw": "\"skewX(\""
                                      }
                                    },
                                    {
                                      "type": "Literal",
                                      "value": null,
                                      "raw": "null"
                                    },
                                    {
                                      "type": "Literal",
                                      "value": ")",
                                      "raw": "\")\""
                                    }
                                  ]
                                },
                                "right": {
                                  "type": "Literal",
                                  "value": 2,
                                  "raw": "2"
                                }
                              },
                              "kind": "init"
                            },
                            {
                              "type": "Property",
                              "key": {
                                "type": "Identifier",
                                "name": "x"
                              },
                              "value": {
                                "type": "CallExpression",
                                "callee": {
                                  "type": "Identifier",
                                  "name": "d3_interpolateNumber"
                                },
                                "arguments": [
                                  {
                                    "type": "Identifier",
                                    "name": "wa"
                                  },
                                  {
                                    "type": "Identifier",
                                    "name": "wb"
                                  }
                                ]
                              },
                              "kind": "init"
                            }
                          ]
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
                  "name": "wb"
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
                            "name": "s"
                          },
                          "property": {
                            "type": "Identifier",
                            "name": "push"
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
                                "operator": "+",
                                "left": {
                                  "type": "CallExpression",
                                  "callee": {
                                    "type": "MemberExpression",
                                    "computed": false,
                                    "object": {
                                      "type": "Identifier",
                                      "name": "s"
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "name": "pop"
                                    }
                                  },
                                  "arguments": []
                                },
                                "right": {
                                  "type": "Literal",
                                  "value": "skewX(",
                                  "raw": "\"skewX(\""
                                }
                              },
                              "right": {
                                "type": "Identifier",
                                "name": "wb"
                              }
                            },
                            "right": {
                              "type": "Literal",
                              "value": ")",
                              "raw": "\")\""
                            }
                          }
                        ]
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
                "type": "LogicalExpression",
                "operator": "||",
                "left": {
                  "type": "BinaryExpression",
                  "operator": "!=",
                  "left": {
                    "type": "MemberExpression",
                    "computed": true,
                    "object": {
                      "type": "Identifier",
                      "name": "ka"
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
                      "name": "kb"
                    },
                    "property": {
                      "type": "Literal",
                      "value": 0,
                      "raw": "0"
                    }
                  }
                },
                "right": {
                  "type": "BinaryExpression",
                  "operator": "!=",
                  "left": {
                    "type": "MemberExpression",
                    "computed": true,
                    "object": {
                      "type": "Identifier",
                      "name": "ka"
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
                      "name": "kb"
                    },
                    "property": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1"
                    }
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
                        "name": "n"
                      },
                      "right": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "MemberExpression",
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "name": "s"
                          },
                          "property": {
                            "type": "Identifier",
                            "name": "push"
                          }
                        },
                        "arguments": [
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
                                  "name": "s"
                                },
                                "property": {
                                  "type": "Identifier",
                                  "name": "pop"
                                }
                              },
                              "arguments": []
                            },
                            "right": {
                              "type": "Literal",
                              "value": "scale(",
                              "raw": "\"scale(\""
                            }
                          },
                          {
                            "type": "Literal",
                            "value": null,
                            "raw": "null"
                          },
                          {
                            "type": "Literal",
                            "value": ",",
                            "raw": "\",\""
                          },
                          {
                            "type": "Literal",
                            "value": null,
                            "raw": "null"
                          },
                          {
                            "type": "Literal",
                            "value": ")",
                            "raw": "\")\""
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
                          "name": "q"
                        },
                        "property": {
                          "type": "Identifier",
                          "name": "push"
                        }
                      },
                      "arguments": [
                        {
                          "type": "ObjectExpression",
                          "properties": [
                            {
                              "type": "Property",
                              "key": {
                                "type": "Identifier",
                                "name": "i"
                              },
                              "value": {
                                "type": "BinaryExpression",
                                "operator": "-",
                                "left": {
                                  "type": "Identifier",
                                  "name": "n"
                                },
                                "right": {
                                  "type": "Literal",
                                  "value": 4,
                                  "raw": "4"
                                }
                              },
                              "kind": "init"
                            },
                            {
                              "type": "Property",
                              "key": {
                                "type": "Identifier",
                                "name": "x"
                              },
                              "value": {
                                "type": "CallExpression",
                                "callee": {
                                  "type": "Identifier",
                                  "name": "d3_interpolateNumber"
                                },
                                "arguments": [
                                  {
                                    "type": "MemberExpression",
                                    "computed": true,
                                    "object": {
                                      "type": "Identifier",
                                      "name": "ka"
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
                                      "name": "kb"
                                    },
                                    "property": {
                                      "type": "Literal",
                                      "value": 0,
                                      "raw": "0"
                                    }
                                  }
                                ]
                              },
                              "kind": "init"
                            }
                          ]
                        },
                        {
                          "type": "ObjectExpression",
                          "properties": [
                            {
                              "type": "Property",
                              "key": {
                                "type": "Identifier",
                                "name": "i"
                              },
                              "value": {
                                "type": "BinaryExpression",
                                "operator": "-",
                                "left": {
                                  "type": "Identifier",
                                  "name": "n"
                                },
                                "right": {
                                  "type": "Literal",
                                  "value": 2,
                                  "raw": "2"
                                }
                              },
                              "kind": "init"
                            },
                            {
                              "type": "Property",
                              "key": {
                                "type": "Identifier",
                                "name": "x"
                              },
                              "value": {
                                "type": "CallExpression",
                                "callee": {
                                  "type": "Identifier",
                                  "name": "d3_interpolateNumber"
                                },
                                "arguments": [
                                  {
                                    "type": "MemberExpression",
                                    "computed": true,
                                    "object": {
                                      "type": "Identifier",
                                      "name": "ka"
                                    },
                                    "property": {
                                      "type": "Literal",
                                      "value": 1,
                                      "raw": "1"
                                    }
                                  },
                                  {
                                    "type": "MemberExpression",
                                    "computed": true,
                                    "object": {
                                      "type": "Identifier",
                                      "name": "kb"
                                    },
                                    "property": {
                                      "type": "Literal",
                                      "value": 1,
                                      "raw": "1"
                                    }
                                  }
                                ]
                              },
                              "kind": "init"
                            }
                          ]
                        }
                      ]
                    }
                  }
                ]
              },
              "alternate": {
                "type": "IfStatement",
                "test": {
                  "type": "LogicalExpression",
                  "operator": "||",
                  "left": {
                    "type": "BinaryExpression",
                    "operator": "!=",
                    "left": {
                      "type": "MemberExpression",
                      "computed": true,
                      "object": {
                        "type": "Identifier",
                        "name": "kb"
                      },
                      "property": {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0"
                      }
                    },
                    "right": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1"
                    }
                  },
                  "right": {
                    "type": "BinaryExpression",
                    "operator": "!=",
                    "left": {
                      "type": "MemberExpression",
                      "computed": true,
                      "object": {
                        "type": "Identifier",
                        "name": "kb"
                      },
                      "property": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1"
                      }
                    },
                    "right": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1"
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
                          "type": "MemberExpression",
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "name": "s"
                          },
                          "property": {
                            "type": "Identifier",
                            "name": "push"
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
                                "operator": "+",
                                "left": {
                                  "type": "CallExpression",
                                  "callee": {
                                    "type": "MemberExpression",
                                    "computed": false,
                                    "object": {
                                      "type": "Identifier",
                                      "name": "s"
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "name": "pop"
                                    }
                                  },
                                  "arguments": []
                                },
                                "right": {
                                  "type": "Literal",
                                  "value": "scale(",
                                  "raw": "\"scale(\""
                                }
                              },
                              "right": {
                                "type": "Identifier",
                                "name": "kb"
                              }
                            },
                            "right": {
                              "type": "Literal",
                              "value": ")",
                              "raw": "\")\""
                            }
                          }
                        ]
                      }
                    }
                  ]
                },
                "alternate": null
              }
            },
            {
              "type": "ExpressionStatement",
              "expression": {
                "type": "AssignmentExpression",
                "operator": "=",
                "left": {
                  "type": "Identifier",
                  "name": "n"
                },
                "right": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "name": "q"
                  },
                  "property": {
                    "type": "Identifier",
                    "name": "length"
                  }
                }
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
                    "name": "t"
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
                            "name": "o"
                          },
                          "init": null
                        }
                      ],
                      "kind": "var"
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
                          "type": "AssignmentExpression",
                          "operator": "=",
                          "left": {
                            "type": "MemberExpression",
                            "computed": true,
                            "object": {
                              "type": "Identifier",
                              "name": "s"
                            },
                            "property": {
                              "type": "MemberExpression",
                              "computed": false,
                              "object": {
                                "type": "AssignmentExpression",
                                "operator": "=",
                                "left": {
                                  "type": "Identifier",
                                  "name": "o"
                                },
                                "right": {
                                  "type": "MemberExpression",
                                  "computed": true,
                                  "object": {
                                    "type": "Identifier",
                                    "name": "q"
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "name": "i"
                                  }
                                }
                              },
                              "property": {
                                "type": "Identifier",
                                "name": "i"
                              }
                            }
                          },
                          "right": {
                            "type": "CallExpression",
                            "callee": {
                              "type": "MemberExpression",
                              "computed": false,
                              "object": {
                                "type": "Identifier",
                                "name": "o"
                              },
                              "property": {
                                "type": "Identifier",
                                "name": "x"
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
                            "type": "Identifier",
                            "name": "s"
                          },
                          "property": {
                            "type": "Identifier",
                            "name": "join"
                          }
                        },
                        "arguments": [
                          {
                            "type": "Literal",
                            "value": "",
                            "raw": "\"\""
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
  "src": "d3.interpolateTransform = d3_interpolateTransform;\nfunction d3_interpolateTransform(a, b) {\n    var s = [], q = [], n, A = d3.transform(a), B = d3.transform(b), ta = A.translate, tb = B.translate, ra = A.rotate, rb = B.rotate, wa = A.skew, wb = B.skew, ka = A.scale, kb = B.scale;\n    if (ta[0] != tb[0] || ta[1] != tb[1]) {\n        s.push('translate(', null, ',', null, ')');\n        q.push({\n            i: 1,\n            x: d3_interpolateNumber(ta[0], tb[0])\n        }, {\n            i: 3,\n            x: d3_interpolateNumber(ta[1], tb[1])\n        });\n    } else if (tb[0] || tb[1]) {\n        s.push('translate(' + tb + ')');\n    } else {\n        s.push('');\n    }\n    if (ra != rb) {\n        if (ra - rb > 180)\n            rb += 360;\n        else if (rb - ra > 180)\n            ra += 360;\n        q.push({\n            i: s.push(s.pop() + 'rotate(', null, ')') - 2,\n            x: d3_interpolateNumber(ra, rb)\n        });\n    } else if (rb) {\n        s.push(s.pop() + 'rotate(' + rb + ')');\n    }\n    if (wa != wb) {\n        q.push({\n            i: s.push(s.pop() + 'skewX(', null, ')') - 2,\n            x: d3_interpolateNumber(wa, wb)\n        });\n    } else if (wb) {\n        s.push(s.pop() + 'skewX(' + wb + ')');\n    }\n    if (ka[0] != kb[0] || ka[1] != kb[1]) {\n        n = s.push(s.pop() + 'scale(', null, ',', null, ')');\n        q.push({\n            i: n - 4,\n            x: d3_interpolateNumber(ka[0], kb[0])\n        }, {\n            i: n - 2,\n            x: d3_interpolateNumber(ka[1], kb[1])\n        });\n    } else if (kb[0] != 1 || kb[1] != 1) {\n        s.push(s.pop() + 'scale(' + kb + ')');\n    }\n    n = q.length;\n    return function (t) {\n        var i = -1, o;\n        while (++i < n)\n            s[(o = q[i]).i] = o.x(t);\n        return s.join('');\n    };\n}"
}