{
  "filepath": "/scale/pow.js",
  "shared": [],
  "dependencies": [
    "d3.scale.linear",
    "d3_scale_linearTicks",
    "d3_scale_linearTickFormat",
    "d3_scale_linearNice",
    "d3_scale_linearRebind"
  ],
  "helpers": [
    "d3_scale_pow",
    "d3_scale_powPow"
  ],
  "exports": [
    "d3.scale.pow"
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
                "name": "scale"
              }
            },
            "property": {
              "type": "Identifier",
              "name": "pow"
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
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "name": "d3_scale_pow"
                    },
                    "arguments": [
                      {
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
                      },
                      {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1"
                      },
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
                            "value": 1,
                            "raw": "1"
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
          "name": "d3_scale_pow"
        },
        "params": [
          {
            "type": "Identifier",
            "name": "linear"
          },
          {
            "type": "Identifier",
            "name": "exponent"
          },
          {
            "type": "Identifier",
            "name": "domain"
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
                    "name": "powp"
                  },
                  "init": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "name": "d3_scale_powPow"
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "name": "exponent"
                      }
                    ]
                  }
                },
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "name": "powb"
                  },
                  "init": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "name": "d3_scale_powPow"
                    },
                    "arguments": [
                      {
                        "type": "BinaryExpression",
                        "operator": "/",
                        "left": {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1"
                        },
                        "right": {
                          "type": "Identifier",
                          "name": "exponent"
                        }
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
                "name": "scale"
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
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "name": "linear"
                      },
                      "arguments": [
                        {
                          "type": "CallExpression",
                          "callee": {
                            "type": "Identifier",
                            "name": "powp"
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
                    "name": "scale"
                  },
                  "property": {
                    "type": "Identifier",
                    "name": "invert"
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
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "Identifier",
                            "name": "powb"
                          },
                          "arguments": [
                            {
                              "type": "CallExpression",
                              "callee": {
                                "type": "MemberExpression",
                                "computed": false,
                                "object": {
                                  "type": "Identifier",
                                  "name": "linear"
                                },
                                "property": {
                                  "type": "Identifier",
                                  "name": "invert"
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
                    "name": "scale"
                  },
                  "property": {
                    "type": "Identifier",
                    "name": "domain"
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
                            "name": "domain"
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
                              "name": "linear"
                            },
                            "property": {
                              "type": "Identifier",
                              "name": "domain"
                            }
                          },
                          "arguments": [
                            {
                              "type": "CallExpression",
                              "callee": {
                                "type": "MemberExpression",
                                "computed": false,
                                "object": {
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
                                        "type": "Identifier",
                                        "name": "x"
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "name": "map"
                                      }
                                    },
                                    "arguments": [
                                      {
                                        "type": "Identifier",
                                        "name": "Number"
                                      }
                                    ]
                                  }
                                },
                                "property": {
                                  "type": "Identifier",
                                  "name": "map"
                                }
                              },
                              "arguments": [
                                {
                                  "type": "Identifier",
                                  "name": "powp"
                                }
                              ]
                            }
                          ]
                        }
                      },
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "Identifier",
                          "name": "scale"
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
                    "name": "scale"
                  },
                  "property": {
                    "type": "Identifier",
                    "name": "ticks"
                  }
                },
                "right": {
                  "type": "FunctionExpression",
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "name": "m"
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
                            "name": "d3_scale_linearTicks"
                          },
                          "arguments": [
                            {
                              "type": "Identifier",
                              "name": "domain"
                            },
                            {
                              "type": "Identifier",
                              "name": "m"
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
              "type": "ExpressionStatement",
              "expression": {
                "type": "AssignmentExpression",
                "operator": "=",
                "left": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "name": "scale"
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
                      "name": "m"
                    },
                    {
                      "type": "Identifier",
                      "name": "format"
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
                            "name": "d3_scale_linearTickFormat"
                          },
                          "arguments": [
                            {
                              "type": "Identifier",
                              "name": "domain"
                            },
                            {
                              "type": "Identifier",
                              "name": "m"
                            },
                            {
                              "type": "Identifier",
                              "name": "format"
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
              "type": "ExpressionStatement",
              "expression": {
                "type": "AssignmentExpression",
                "operator": "=",
                "left": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "name": "scale"
                  },
                  "property": {
                    "type": "Identifier",
                    "name": "nice"
                  }
                },
                "right": {
                  "type": "FunctionExpression",
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "name": "m"
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
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "name": "scale"
                            },
                            "property": {
                              "type": "Identifier",
                              "name": "domain"
                            }
                          },
                          "arguments": [
                            {
                              "type": "CallExpression",
                              "callee": {
                                "type": "Identifier",
                                "name": "d3_scale_linearNice"
                              },
                              "arguments": [
                                {
                                  "type": "Identifier",
                                  "name": "domain"
                                },
                                {
                                  "type": "Identifier",
                                  "name": "m"
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
              "type": "ExpressionStatement",
              "expression": {
                "type": "AssignmentExpression",
                "operator": "=",
                "left": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "name": "scale"
                  },
                  "property": {
                    "type": "Identifier",
                    "name": "exponent"
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
                            "name": "exponent"
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
                            "name": "powp"
                          },
                          "right": {
                            "type": "CallExpression",
                            "callee": {
                              "type": "Identifier",
                              "name": "d3_scale_powPow"
                            },
                            "arguments": [
                              {
                                "type": "AssignmentExpression",
                                "operator": "=",
                                "left": {
                                  "type": "Identifier",
                                  "name": "exponent"
                                },
                                "right": {
                                  "type": "Identifier",
                                  "name": "x"
                                }
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
                            "name": "powb"
                          },
                          "right": {
                            "type": "CallExpression",
                            "callee": {
                              "type": "Identifier",
                              "name": "d3_scale_powPow"
                            },
                            "arguments": [
                              {
                                "type": "BinaryExpression",
                                "operator": "/",
                                "left": {
                                  "type": "Literal",
                                  "value": 1,
                                  "raw": "1"
                                },
                                "right": {
                                  "type": "Identifier",
                                  "name": "exponent"
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
                              "name": "linear"
                            },
                            "property": {
                              "type": "Identifier",
                              "name": "domain"
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
                                  "name": "domain"
                                },
                                "property": {
                                  "type": "Identifier",
                                  "name": "map"
                                }
                              },
                              "arguments": [
                                {
                                  "type": "Identifier",
                                  "name": "powp"
                                }
                              ]
                            }
                          ]
                        }
                      },
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "Identifier",
                          "name": "scale"
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
                    "name": "scale"
                  },
                  "property": {
                    "type": "Identifier",
                    "name": "copy"
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
                          "type": "CallExpression",
                          "callee": {
                            "type": "Identifier",
                            "name": "d3_scale_pow"
                          },
                          "arguments": [
                            {
                              "type": "CallExpression",
                              "callee": {
                                "type": "MemberExpression",
                                "computed": false,
                                "object": {
                                  "type": "Identifier",
                                  "name": "linear"
                                },
                                "property": {
                                  "type": "Identifier",
                                  "name": "copy"
                                }
                              },
                              "arguments": []
                            },
                            {
                              "type": "Identifier",
                              "name": "exponent"
                            },
                            {
                              "type": "Identifier",
                              "name": "domain"
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
              "type": "ReturnStatement",
              "argument": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "name": "d3_scale_linearRebind"
                },
                "arguments": [
                  {
                    "type": "Identifier",
                    "name": "scale"
                  },
                  {
                    "type": "Identifier",
                    "name": "linear"
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
          "name": "d3_scale_powPow"
        },
        "params": [
          {
            "type": "Identifier",
            "name": "e"
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
                        "type": "ConditionalExpression",
                        "test": {
                          "type": "BinaryExpression",
                          "operator": "<",
                          "left": {
                            "type": "Identifier",
                            "name": "x"
                          },
                          "right": {
                            "type": "Literal",
                            "value": 0,
                            "raw": "0"
                          }
                        },
                        "consequent": {
                          "type": "UnaryExpression",
                          "operator": "-",
                          "argument": {
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
                                "type": "UnaryExpression",
                                "operator": "-",
                                "argument": {
                                  "type": "Identifier",
                                  "name": "x"
                                },
                                "prefix": true
                              },
                              {
                                "type": "Identifier",
                                "name": "e"
                              }
                            ]
                          },
                          "prefix": true
                        },
                        "alternate": {
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
                              "type": "Identifier",
                              "name": "x"
                            },
                            {
                              "type": "Identifier",
                              "name": "e"
                            }
                          ]
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
          ]
        },
        "rest": null,
        "generator": false,
        "expression": false
      }
    ]
  },
  "src": "d3.scale.pow = function () {\n    return d3_scale_pow(d3.scale.linear(), 1, [\n        0,\n        1\n    ]);\n};\nfunction d3_scale_pow(linear, exponent, domain) {\n    var powp = d3_scale_powPow(exponent), powb = d3_scale_powPow(1 / exponent);\n    function scale(x) {\n        return linear(powp(x));\n    }\n    scale.invert = function (x) {\n        return powb(linear.invert(x));\n    };\n    scale.domain = function (x) {\n        if (!arguments.length)\n            return domain;\n        linear.domain((domain = x.map(Number)).map(powp));\n        return scale;\n    };\n    scale.ticks = function (m) {\n        return d3_scale_linearTicks(domain, m);\n    };\n    scale.tickFormat = function (m, format) {\n        return d3_scale_linearTickFormat(domain, m, format);\n    };\n    scale.nice = function (m) {\n        return scale.domain(d3_scale_linearNice(domain, m));\n    };\n    scale.exponent = function (x) {\n        if (!arguments.length)\n            return exponent;\n        powp = d3_scale_powPow(exponent = x);\n        powb = d3_scale_powPow(1 / exponent);\n        linear.domain(domain.map(powp));\n        return scale;\n    };\n    scale.copy = function () {\n        return d3_scale_pow(linear.copy(), exponent, domain);\n    };\n    return d3_scale_linearRebind(scale, linear);\n}\nfunction d3_scale_powPow(e) {\n    return function (x) {\n        return x < 0 ? -Math.pow(-x, e) : Math.pow(x, e);\n    };\n}"
}