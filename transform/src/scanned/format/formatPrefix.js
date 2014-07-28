{
  "filepath": "/format/formatPrefix.js",
  "shared": [],
  "dependencies": [
    "d3.round",
    "d3_format_precision",
    "abs"
  ],
  "helpers": [
    "d3_formatPrefixes",
    "d3_formatPrefix"
  ],
  "exports": [
    "d3.formatPrefix"
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
              "name": "d3_formatPrefixes"
            },
            "init": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "Literal",
                      "value": "y",
                      "raw": "\"y\""
                    },
                    {
                      "type": "Literal",
                      "value": "z",
                      "raw": "\"z\""
                    },
                    {
                      "type": "Literal",
                      "value": "a",
                      "raw": "\"a\""
                    },
                    {
                      "type": "Literal",
                      "value": "f",
                      "raw": "\"f\""
                    },
                    {
                      "type": "Literal",
                      "value": "p",
                      "raw": "\"p\""
                    },
                    {
                      "type": "Literal",
                      "value": "n",
                      "raw": "\"n\""
                    },
                    {
                      "type": "Literal",
                      "value": "µ",
                      "raw": "\"µ\""
                    },
                    {
                      "type": "Literal",
                      "value": "m",
                      "raw": "\"m\""
                    },
                    {
                      "type": "Literal",
                      "value": "",
                      "raw": "\"\""
                    },
                    {
                      "type": "Literal",
                      "value": "k",
                      "raw": "\"k\""
                    },
                    {
                      "type": "Literal",
                      "value": "M",
                      "raw": "\"M\""
                    },
                    {
                      "type": "Literal",
                      "value": "G",
                      "raw": "\"G\""
                    },
                    {
                      "type": "Literal",
                      "value": "T",
                      "raw": "\"T\""
                    },
                    {
                      "type": "Literal",
                      "value": "P",
                      "raw": "\"P\""
                    },
                    {
                      "type": "Literal",
                      "value": "E",
                      "raw": "\"E\""
                    },
                    {
                      "type": "Literal",
                      "value": "Z",
                      "raw": "\"Z\""
                    },
                    {
                      "type": "Literal",
                      "value": "Y",
                      "raw": "\"Y\""
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
                  "name": "d3_formatPrefix"
                }
              ]
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
              "type": "Identifier",
              "name": "d3"
            },
            "property": {
              "type": "Identifier",
              "name": "formatPrefix"
            }
          },
          "right": {
            "type": "FunctionExpression",
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "name": "value"
              },
              {
                "type": "Identifier",
                "name": "precision"
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
                    "type": "Identifier",
                    "name": "value"
                  },
                  "consequent": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "IfStatement",
                        "test": {
                          "type": "BinaryExpression",
                          "operator": "<",
                          "left": {
                            "type": "Identifier",
                            "name": "value"
                          },
                          "right": {
                            "type": "Literal",
                            "value": 0,
                            "raw": "0"
                          }
                        },
                        "consequent": {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "AssignmentExpression",
                            "operator": "*=",
                            "left": {
                              "type": "Identifier",
                              "name": "value"
                            },
                            "right": {
                              "type": "UnaryExpression",
                              "operator": "-",
                              "argument": {
                                "type": "Literal",
                                "value": 1,
                                "raw": "1"
                              },
                              "prefix": true
                            }
                          }
                        },
                        "alternate": null
                      },
                      {
                        "type": "IfStatement",
                        "test": {
                          "type": "Identifier",
                          "name": "precision"
                        },
                        "consequent": {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "AssignmentExpression",
                            "operator": "=",
                            "left": {
                              "type": "Identifier",
                              "name": "value"
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
                                  "name": "round"
                                }
                              },
                              "arguments": [
                                {
                                  "type": "Identifier",
                                  "name": "value"
                                },
                                {
                                  "type": "CallExpression",
                                  "callee": {
                                    "type": "Identifier",
                                    "name": "d3_format_precision"
                                  },
                                  "arguments": [
                                    {
                                      "type": "Identifier",
                                      "name": "value"
                                    },
                                    {
                                      "type": "Identifier",
                                      "name": "precision"
                                    }
                                  ]
                                }
                              ]
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
                            "name": "i"
                          },
                          "right": {
                            "type": "BinaryExpression",
                            "operator": "+",
                            "left": {
                              "type": "Literal",
                              "value": 1,
                              "raw": "1"
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
                                  "name": "floor"
                                }
                              },
                              "arguments": [
                                {
                                  "type": "BinaryExpression",
                                  "operator": "+",
                                  "left": {
                                    "type": "Literal",
                                    "value": 1e-12,
                                    "raw": "1e-12"
                                  },
                                  "right": {
                                    "type": "BinaryExpression",
                                    "operator": "/",
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
                                          "name": "log"
                                        }
                                      },
                                      "arguments": [
                                        {
                                          "type": "Identifier",
                                          "name": "value"
                                        }
                                      ]
                                    },
                                    "right": {
                                      "type": "MemberExpression",
                                      "computed": false,
                                      "object": {
                                        "type": "Identifier",
                                        "name": "Math"
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "name": "LN10"
                                      }
                                    }
                                  }
                                }
                              ]
                            }
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
                            "name": "i"
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
                                  "type": "Literal",
                                  "value": 24,
                                  "raw": "24"
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
                                    "type": "Literal",
                                    "value": 24,
                                    "raw": "24"
                                  },
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
                                          "name": "floor"
                                        }
                                      },
                                      "arguments": [
                                        {
                                          "type": "BinaryExpression",
                                          "operator": "/",
                                          "left": {
                                            "type": "BinaryExpression",
                                            "operator": "-",
                                            "left": {
                                              "type": "Identifier",
                                              "name": "i"
                                            },
                                            "right": {
                                              "type": "Literal",
                                              "value": 1,
                                              "raw": "1"
                                            }
                                          },
                                          "right": {
                                            "type": "Literal",
                                            "value": 3,
                                            "raw": "3"
                                          }
                                        }
                                      ]
                                    },
                                    "right": {
                                      "type": "Literal",
                                      "value": 3,
                                      "raw": "3"
                                    }
                                  }
                                ]
                              }
                            ]
                          }
                        }
                      }
                    ]
                  },
                  "alternate": null
                },
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "MemberExpression",
                    "computed": true,
                    "object": {
                      "type": "Identifier",
                      "name": "d3_formatPrefixes"
                    },
                    "property": {
                      "type": "BinaryExpression",
                      "operator": "+",
                      "left": {
                        "type": "Literal",
                        "value": 8,
                        "raw": "8"
                      },
                      "right": {
                        "type": "BinaryExpression",
                        "operator": "/",
                        "left": {
                          "type": "Identifier",
                          "name": "i"
                        },
                        "right": {
                          "type": "Literal",
                          "value": 3,
                          "raw": "3"
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
        }
      },
      {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "name": "d3_formatPrefix"
        },
        "params": [
          {
            "type": "Identifier",
            "name": "d"
          },
          {
            "type": "Identifier",
            "name": "i"
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
                        "name": "pow"
                      }
                    },
                    "arguments": [
                      {
                        "type": "Literal",
                        "value": 10,
                        "raw": "10"
                      },
                      {
                        "type": "BinaryExpression",
                        "operator": "*",
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
                                "type": "Literal",
                                "value": 8,
                                "raw": "8"
                              },
                              "right": {
                                "type": "Identifier",
                                "name": "i"
                              }
                            }
                          ]
                        },
                        "right": {
                          "type": "Literal",
                          "value": 3,
                          "raw": "3"
                        }
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
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "key": {
                      "type": "Identifier",
                      "name": "scale"
                    },
                    "value": {
                      "type": "ConditionalExpression",
                      "test": {
                        "type": "BinaryExpression",
                        "operator": ">",
                        "left": {
                          "type": "Identifier",
                          "name": "i"
                        },
                        "right": {
                          "type": "Literal",
                          "value": 8,
                          "raw": "8"
                        }
                      },
                      "consequent": {
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
                                "operator": "/",
                                "left": {
                                  "type": "Identifier",
                                  "name": "d"
                                },
                                "right": {
                                  "type": "Identifier",
                                  "name": "k"
                                }
                              }
                            }
                          ]
                        },
                        "rest": null,
                        "generator": false,
                        "expression": false
                      },
                      "alternate": {
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
                                "operator": "*",
                                "left": {
                                  "type": "Identifier",
                                  "name": "d"
                                },
                                "right": {
                                  "type": "Identifier",
                                  "name": "k"
                                }
                              }
                            }
                          ]
                        },
                        "rest": null,
                        "generator": false,
                        "expression": false
                      }
                    },
                    "kind": "init"
                  },
                  {
                    "type": "Property",
                    "key": {
                      "type": "Identifier",
                      "name": "symbol"
                    },
                    "value": {
                      "type": "Identifier",
                      "name": "d"
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
  },
  "src": "var d3_formatPrefixes = [\n        'y',\n        'z',\n        'a',\n        'f',\n        'p',\n        'n',\n        '\\xB5',\n        'm',\n        '',\n        'k',\n        'M',\n        'G',\n        'T',\n        'P',\n        'E',\n        'Z',\n        'Y'\n    ].map(d3_formatPrefix);\nd3.formatPrefix = function (value, precision) {\n    var i = 0;\n    if (value) {\n        if (value < 0)\n            value *= -1;\n        if (precision)\n            value = d3.round(value, d3_format_precision(value, precision));\n        i = 1 + Math.floor(1e-12 + Math.log(value) / Math.LN10);\n        i = Math.max(-24, Math.min(24, Math.floor((i - 1) / 3) * 3));\n    }\n    return d3_formatPrefixes[8 + i / 3];\n};\nfunction d3_formatPrefix(d, i) {\n    var k = Math.pow(10, abs(8 - i) * 3);\n    return {\n        scale: i > 8 ? function (d) {\n            return d / k;\n        } : function (d) {\n            return d * k;\n        },\n        symbol: d\n    };\n}"
}