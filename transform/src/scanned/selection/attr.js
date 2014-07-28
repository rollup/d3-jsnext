{
  "filepath": "/selection/attr.js",
  "shared": [],
  "dependencies": [
    "d3_selectionPrototype",
    "d3.ns.qualify"
  ],
  "helpers": [
    "d3_selection_attr"
  ],
  "exports": [],
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
              "name": "d3_selectionPrototype"
            },
            "property": {
              "type": "Identifier",
              "name": "attr"
            }
          },
          "right": {
            "type": "FunctionExpression",
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "name": "name"
              },
              {
                "type": "Identifier",
                "name": "value"
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
                      "value": 2,
                      "raw": "2"
                    }
                  },
                  "consequent": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "IfStatement",
                        "test": {
                          "type": "BinaryExpression",
                          "operator": "===",
                          "left": {
                            "type": "UnaryExpression",
                            "operator": "typeof",
                            "argument": {
                              "type": "Identifier",
                              "name": "name"
                            },
                            "prefix": true
                          },
                          "right": {
                            "type": "Literal",
                            "value": "string",
                            "raw": "\"string\""
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
                                    "name": "node"
                                  },
                                  "init": {
                                    "type": "CallExpression",
                                    "callee": {
                                      "type": "MemberExpression",
                                      "computed": false,
                                      "object": {
                                        "type": "ThisExpression"
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "name": "node"
                                      }
                                    },
                                    "arguments": []
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
                                  "name": "name"
                                },
                                "right": {
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
                                        "name": "ns"
                                      }
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "name": "qualify"
                                    }
                                  },
                                  "arguments": [
                                    {
                                      "type": "Identifier",
                                      "name": "name"
                                    }
                                  ]
                                }
                              }
                            },
                            {
                              "type": "ReturnStatement",
                              "argument": {
                                "type": "ConditionalExpression",
                                "test": {
                                  "type": "MemberExpression",
                                  "computed": false,
                                  "object": {
                                    "type": "Identifier",
                                    "name": "name"
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "name": "local"
                                  }
                                },
                                "consequent": {
                                  "type": "CallExpression",
                                  "callee": {
                                    "type": "MemberExpression",
                                    "computed": false,
                                    "object": {
                                      "type": "Identifier",
                                      "name": "node"
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "name": "getAttributeNS"
                                    }
                                  },
                                  "arguments": [
                                    {
                                      "type": "MemberExpression",
                                      "computed": false,
                                      "object": {
                                        "type": "Identifier",
                                        "name": "name"
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "name": "space"
                                      }
                                    },
                                    {
                                      "type": "MemberExpression",
                                      "computed": false,
                                      "object": {
                                        "type": "Identifier",
                                        "name": "name"
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "name": "local"
                                      }
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
                                      "name": "node"
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "name": "getAttribute"
                                    }
                                  },
                                  "arguments": [
                                    {
                                      "type": "Identifier",
                                      "name": "name"
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
                        "type": "ForInStatement",
                        "left": {
                          "type": "Identifier",
                          "name": "value"
                        },
                        "right": {
                          "type": "Identifier",
                          "name": "name"
                        },
                        "body": {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "CallExpression",
                            "callee": {
                              "type": "MemberExpression",
                              "computed": false,
                              "object": {
                                "type": "ThisExpression"
                              },
                              "property": {
                                "type": "Identifier",
                                "name": "each"
                              }
                            },
                            "arguments": [
                              {
                                "type": "CallExpression",
                                "callee": {
                                  "type": "Identifier",
                                  "name": "d3_selection_attr"
                                },
                                "arguments": [
                                  {
                                    "type": "Identifier",
                                    "name": "value"
                                  },
                                  {
                                    "type": "MemberExpression",
                                    "computed": true,
                                    "object": {
                                      "type": "Identifier",
                                      "name": "name"
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "name": "value"
                                    }
                                  }
                                ]
                              }
                            ]
                          }
                        },
                        "each": false
                      },
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "ThisExpression"
                        }
                      }
                    ]
                  },
                  "alternate": null
                },
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "ThisExpression"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "each"
                      }
                    },
                    "arguments": [
                      {
                        "type": "CallExpression",
                        "callee": {
                          "type": "Identifier",
                          "name": "d3_selection_attr"
                        },
                        "arguments": [
                          {
                            "type": "Identifier",
                            "name": "name"
                          },
                          {
                            "type": "Identifier",
                            "name": "value"
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
          "name": "d3_selection_attr"
        },
        "params": [
          {
            "type": "Identifier",
            "name": "name"
          },
          {
            "type": "Identifier",
            "name": "value"
          }
        ],
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
                  "type": "Identifier",
                  "name": "name"
                },
                "right": {
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
                        "name": "ns"
                      }
                    },
                    "property": {
                      "type": "Identifier",
                      "name": "qualify"
                    }
                  },
                  "arguments": [
                    {
                      "type": "Identifier",
                      "name": "name"
                    }
                  ]
                }
              }
            },
            {
              "type": "FunctionDeclaration",
              "id": {
                "type": "Identifier",
                "name": "attrNull"
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
                          "type": "ThisExpression"
                        },
                        "property": {
                          "type": "Identifier",
                          "name": "removeAttribute"
                        }
                      },
                      "arguments": [
                        {
                          "type": "Identifier",
                          "name": "name"
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
                "name": "attrNullNS"
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
                          "type": "ThisExpression"
                        },
                        "property": {
                          "type": "Identifier",
                          "name": "removeAttributeNS"
                        }
                      },
                      "arguments": [
                        {
                          "type": "MemberExpression",
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "name": "name"
                          },
                          "property": {
                            "type": "Identifier",
                            "name": "space"
                          }
                        },
                        {
                          "type": "MemberExpression",
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "name": "name"
                          },
                          "property": {
                            "type": "Identifier",
                            "name": "local"
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
                "name": "attrConstant"
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
                          "type": "ThisExpression"
                        },
                        "property": {
                          "type": "Identifier",
                          "name": "setAttribute"
                        }
                      },
                      "arguments": [
                        {
                          "type": "Identifier",
                          "name": "name"
                        },
                        {
                          "type": "Identifier",
                          "name": "value"
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
                "name": "attrConstantNS"
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
                          "type": "ThisExpression"
                        },
                        "property": {
                          "type": "Identifier",
                          "name": "setAttributeNS"
                        }
                      },
                      "arguments": [
                        {
                          "type": "MemberExpression",
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "name": "name"
                          },
                          "property": {
                            "type": "Identifier",
                            "name": "space"
                          }
                        },
                        {
                          "type": "MemberExpression",
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "name": "name"
                          },
                          "property": {
                            "type": "Identifier",
                            "name": "local"
                          }
                        },
                        {
                          "type": "Identifier",
                          "name": "value"
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
                "name": "attrFunction"
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
                          "name": "x"
                        },
                        "init": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "name": "value"
                            },
                            "property": {
                              "type": "Identifier",
                              "name": "apply"
                            }
                          },
                          "arguments": [
                            {
                              "type": "ThisExpression"
                            },
                            {
                              "type": "Identifier",
                              "name": "arguments"
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
                      "type": "BinaryExpression",
                      "operator": "==",
                      "left": {
                        "type": "Identifier",
                        "name": "x"
                      },
                      "right": {
                        "type": "Literal",
                        "value": null,
                        "raw": "null"
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
                            "type": "ThisExpression"
                          },
                          "property": {
                            "type": "Identifier",
                            "name": "removeAttribute"
                          }
                        },
                        "arguments": [
                          {
                            "type": "Identifier",
                            "name": "name"
                          }
                        ]
                      }
                    },
                    "alternate": {
                      "type": "ExpressionStatement",
                      "expression": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "MemberExpression",
                          "computed": false,
                          "object": {
                            "type": "ThisExpression"
                          },
                          "property": {
                            "type": "Identifier",
                            "name": "setAttribute"
                          }
                        },
                        "arguments": [
                          {
                            "type": "Identifier",
                            "name": "name"
                          },
                          {
                            "type": "Identifier",
                            "name": "x"
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
            },
            {
              "type": "FunctionDeclaration",
              "id": {
                "type": "Identifier",
                "name": "attrFunctionNS"
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
                          "name": "x"
                        },
                        "init": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "name": "value"
                            },
                            "property": {
                              "type": "Identifier",
                              "name": "apply"
                            }
                          },
                          "arguments": [
                            {
                              "type": "ThisExpression"
                            },
                            {
                              "type": "Identifier",
                              "name": "arguments"
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
                      "type": "BinaryExpression",
                      "operator": "==",
                      "left": {
                        "type": "Identifier",
                        "name": "x"
                      },
                      "right": {
                        "type": "Literal",
                        "value": null,
                        "raw": "null"
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
                            "type": "ThisExpression"
                          },
                          "property": {
                            "type": "Identifier",
                            "name": "removeAttributeNS"
                          }
                        },
                        "arguments": [
                          {
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "name": "name"
                            },
                            "property": {
                              "type": "Identifier",
                              "name": "space"
                            }
                          },
                          {
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "name": "name"
                            },
                            "property": {
                              "type": "Identifier",
                              "name": "local"
                            }
                          }
                        ]
                      }
                    },
                    "alternate": {
                      "type": "ExpressionStatement",
                      "expression": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "MemberExpression",
                          "computed": false,
                          "object": {
                            "type": "ThisExpression"
                          },
                          "property": {
                            "type": "Identifier",
                            "name": "setAttributeNS"
                          }
                        },
                        "arguments": [
                          {
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "name": "name"
                            },
                            "property": {
                              "type": "Identifier",
                              "name": "space"
                            }
                          },
                          {
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "name": "name"
                            },
                            "property": {
                              "type": "Identifier",
                              "name": "local"
                            }
                          },
                          {
                            "type": "Identifier",
                            "name": "x"
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
            },
            {
              "type": "ReturnStatement",
              "argument": {
                "type": "ConditionalExpression",
                "test": {
                  "type": "BinaryExpression",
                  "operator": "==",
                  "left": {
                    "type": "Identifier",
                    "name": "value"
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
                      "name": "name"
                    },
                    "property": {
                      "type": "Identifier",
                      "name": "local"
                    }
                  },
                  "consequent": {
                    "type": "Identifier",
                    "name": "attrNullNS"
                  },
                  "alternate": {
                    "type": "Identifier",
                    "name": "attrNull"
                  }
                },
                "alternate": {
                  "type": "ConditionalExpression",
                  "test": {
                    "type": "BinaryExpression",
                    "operator": "===",
                    "left": {
                      "type": "UnaryExpression",
                      "operator": "typeof",
                      "argument": {
                        "type": "Identifier",
                        "name": "value"
                      },
                      "prefix": true
                    },
                    "right": {
                      "type": "Literal",
                      "value": "function",
                      "raw": "\"function\""
                    }
                  },
                  "consequent": {
                    "type": "ConditionalExpression",
                    "test": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "name": "name"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "local"
                      }
                    },
                    "consequent": {
                      "type": "Identifier",
                      "name": "attrFunctionNS"
                    },
                    "alternate": {
                      "type": "Identifier",
                      "name": "attrFunction"
                    }
                  },
                  "alternate": {
                    "type": "ConditionalExpression",
                    "test": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "name": "name"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "local"
                      }
                    },
                    "consequent": {
                      "type": "Identifier",
                      "name": "attrConstantNS"
                    },
                    "alternate": {
                      "type": "Identifier",
                      "name": "attrConstant"
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
  "src": "d3_selectionPrototype.attr = function (name, value) {\n    if (arguments.length < 2) {\n        if (typeof name === 'string') {\n            var node = this.node();\n            name = d3.ns.qualify(name);\n            return name.local ? node.getAttributeNS(name.space, name.local) : node.getAttribute(name);\n        }\n        for (value in name)\n            this.each(d3_selection_attr(value, name[value]));\n        return this;\n    }\n    return this.each(d3_selection_attr(name, value));\n};\nfunction d3_selection_attr(name, value) {\n    name = d3.ns.qualify(name);\n    function attrNull() {\n        this.removeAttribute(name);\n    }\n    function attrNullNS() {\n        this.removeAttributeNS(name.space, name.local);\n    }\n    function attrConstant() {\n        this.setAttribute(name, value);\n    }\n    function attrConstantNS() {\n        this.setAttributeNS(name.space, name.local, value);\n    }\n    function attrFunction() {\n        var x = value.apply(this, arguments);\n        if (x == null)\n            this.removeAttribute(name);\n        else\n            this.setAttribute(name, x);\n    }\n    function attrFunctionNS() {\n        var x = value.apply(this, arguments);\n        if (x == null)\n            this.removeAttributeNS(name.space, name.local);\n        else\n            this.setAttributeNS(name.space, name.local, x);\n    }\n    return value == null ? name.local ? attrNullNS : attrNull : typeof value === 'function' ? name.local ? attrFunctionNS : attrFunction : name.local ? attrConstantNS : attrConstant;\n}"
}