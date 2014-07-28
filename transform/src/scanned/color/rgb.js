{
  "filepath": "/color/rgb.js",
  "shared": [],
  "dependencies": [
    "d3_hsl_rgb",
    "d3_color",
    "d3_hsl",
    "d3_xyz_lab",
    "d3_lab_X",
    "d3_lab_Y",
    "d3_lab_Z",
    "d3_lab",
    "d3.map"
  ],
  "helpers": [
    "d3_rgb",
    "d3_rgbNumber",
    "d3_rgbString",
    "d3_rgbPrototype",
    "d3_rgb_hex",
    "d3_rgb_parse",
    "d3_rgb_hsl",
    "d3_rgb_lab",
    "d3_rgb_xyz",
    "d3_rgb_parseNumber",
    "d3_rgb_names"
  ],
  "exports": [
    "d3.rgb"
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
              "name": "rgb"
            }
          },
          "right": {
            "type": "Identifier",
            "name": "d3_rgb"
          }
        }
      },
      {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "name": "d3_rgb"
        },
        "params": [
          {
            "type": "Identifier",
            "name": "r"
          },
          {
            "type": "Identifier",
            "name": "g"
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
              "type": "ReturnStatement",
              "argument": {
                "type": "ConditionalExpression",
                "test": {
                  "type": "BinaryExpression",
                  "operator": "instanceof",
                  "left": {
                    "type": "ThisExpression"
                  },
                  "right": {
                    "type": "Identifier",
                    "name": "d3_rgb"
                  }
                },
                "consequent": {
                  "type": "UnaryExpression",
                  "operator": "void",
                  "argument": {
                    "type": "SequenceExpression",
                    "expressions": [
                      {
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
                            "name": "r"
                          }
                        },
                        "right": {
                          "type": "UnaryExpression",
                          "operator": "~",
                          "argument": {
                            "type": "UnaryExpression",
                            "operator": "~",
                            "argument": {
                              "type": "Identifier",
                              "name": "r"
                            },
                            "prefix": true
                          },
                          "prefix": true
                        }
                      },
                      {
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
                            "name": "g"
                          }
                        },
                        "right": {
                          "type": "UnaryExpression",
                          "operator": "~",
                          "argument": {
                            "type": "UnaryExpression",
                            "operator": "~",
                            "argument": {
                              "type": "Identifier",
                              "name": "g"
                            },
                            "prefix": true
                          },
                          "prefix": true
                        }
                      },
                      {
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
                            "name": "b"
                          }
                        },
                        "right": {
                          "type": "UnaryExpression",
                          "operator": "~",
                          "argument": {
                            "type": "UnaryExpression",
                            "operator": "~",
                            "argument": {
                              "type": "Identifier",
                              "name": "b"
                            },
                            "prefix": true
                          },
                          "prefix": true
                        }
                      }
                    ]
                  },
                  "prefix": true
                },
                "alternate": {
                  "type": "ConditionalExpression",
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
                    "type": "ConditionalExpression",
                    "test": {
                      "type": "BinaryExpression",
                      "operator": "instanceof",
                      "left": {
                        "type": "Identifier",
                        "name": "r"
                      },
                      "right": {
                        "type": "Identifier",
                        "name": "d3_rgb"
                      }
                    },
                    "consequent": {
                      "type": "NewExpression",
                      "callee": {
                        "type": "Identifier",
                        "name": "d3_rgb"
                      },
                      "arguments": [
                        {
                          "type": "MemberExpression",
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "name": "r"
                          },
                          "property": {
                            "type": "Identifier",
                            "name": "r"
                          }
                        },
                        {
                          "type": "MemberExpression",
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "name": "r"
                          },
                          "property": {
                            "type": "Identifier",
                            "name": "g"
                          }
                        },
                        {
                          "type": "MemberExpression",
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "name": "r"
                          },
                          "property": {
                            "type": "Identifier",
                            "name": "b"
                          }
                        }
                      ]
                    },
                    "alternate": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "name": "d3_rgb_parse"
                      },
                      "arguments": [
                        {
                          "type": "BinaryExpression",
                          "operator": "+",
                          "left": {
                            "type": "Literal",
                            "value": "",
                            "raw": "\"\""
                          },
                          "right": {
                            "type": "Identifier",
                            "name": "r"
                          }
                        },
                        {
                          "type": "Identifier",
                          "name": "d3_rgb"
                        },
                        {
                          "type": "Identifier",
                          "name": "d3_hsl_rgb"
                        }
                      ]
                    }
                  },
                  "alternate": {
                    "type": "NewExpression",
                    "callee": {
                      "type": "Identifier",
                      "name": "d3_rgb"
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "name": "r"
                      },
                      {
                        "type": "Identifier",
                        "name": "g"
                      },
                      {
                        "type": "Identifier",
                        "name": "b"
                      }
                    ]
                  }
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
          "name": "d3_rgbNumber"
        },
        "params": [
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
              "type": "ReturnStatement",
              "argument": {
                "type": "NewExpression",
                "callee": {
                  "type": "Identifier",
                  "name": "d3_rgb"
                },
                "arguments": [
                  {
                    "type": "BinaryExpression",
                    "operator": ">>",
                    "left": {
                      "type": "Identifier",
                      "name": "value"
                    },
                    "right": {
                      "type": "Literal",
                      "value": 16,
                      "raw": "16"
                    }
                  },
                  {
                    "type": "BinaryExpression",
                    "operator": "&",
                    "left": {
                      "type": "BinaryExpression",
                      "operator": ">>",
                      "left": {
                        "type": "Identifier",
                        "name": "value"
                      },
                      "right": {
                        "type": "Literal",
                        "value": 8,
                        "raw": "8"
                      }
                    },
                    "right": {
                      "type": "Literal",
                      "value": 255,
                      "raw": "0xff"
                    }
                  },
                  {
                    "type": "BinaryExpression",
                    "operator": "&",
                    "left": {
                      "type": "Identifier",
                      "name": "value"
                    },
                    "right": {
                      "type": "Literal",
                      "value": 255,
                      "raw": "0xff"
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
          "name": "d3_rgbString"
        },
        "params": [
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
              "type": "ReturnStatement",
              "argument": {
                "type": "BinaryExpression",
                "operator": "+",
                "left": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "name": "d3_rgbNumber"
                  },
                  "arguments": [
                    {
                      "type": "Identifier",
                      "name": "value"
                    }
                  ]
                },
                "right": {
                  "type": "Literal",
                  "value": "",
                  "raw": "\"\""
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
              "name": "d3_rgbPrototype"
            },
            "init": {
              "type": "NewExpression",
              "callee": {
                "type": "Identifier",
                "name": "d3_color"
              },
              "arguments": []
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
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "Identifier",
                "name": "d3_rgb"
              },
              "property": {
                "type": "Identifier",
                "name": "prototype"
              }
            },
            "init": {
              "type": "NewExpression",
              "callee": {
                "type": "Identifier",
                "name": "d3_color"
              },
              "arguments": []
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
              "name": "d3_rgbPrototype"
            },
            "property": {
              "type": "Identifier",
              "name": "brighter"
            }
          },
          "right": {
            "type": "FunctionExpression",
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "name": "k"
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
                      "name": "k"
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
                          "name": "pow"
                        }
                      },
                      "arguments": [
                        {
                          "type": "Literal",
                          "value": 0.7,
                          "raw": "0.7"
                        },
                        {
                          "type": "ConditionalExpression",
                          "test": {
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
                          "consequent": {
                            "type": "Identifier",
                            "name": "k"
                          },
                          "alternate": {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1"
                          }
                        }
                      ]
                    }
                  }
                },
                {
                  "type": "VariableDeclaration",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "name": "r"
                      },
                      "init": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "ThisExpression"
                        },
                        "property": {
                          "type": "Identifier",
                          "name": "r"
                        }
                      }
                    },
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "name": "g"
                      },
                      "init": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "ThisExpression"
                        },
                        "property": {
                          "type": "Identifier",
                          "name": "g"
                        }
                      }
                    },
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "name": "b"
                      },
                      "init": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "ThisExpression"
                        },
                        "property": {
                          "type": "Identifier",
                          "name": "b"
                        }
                      }
                    },
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "name": "i"
                      },
                      "init": {
                        "type": "Literal",
                        "value": 30,
                        "raw": "30"
                      }
                    }
                  ],
                  "kind": "var"
                },
                {
                  "type": "IfStatement",
                  "test": {
                    "type": "LogicalExpression",
                    "operator": "&&",
                    "left": {
                      "type": "LogicalExpression",
                      "operator": "&&",
                      "left": {
                        "type": "UnaryExpression",
                        "operator": "!",
                        "argument": {
                          "type": "Identifier",
                          "name": "r"
                        },
                        "prefix": true
                      },
                      "right": {
                        "type": "UnaryExpression",
                        "operator": "!",
                        "argument": {
                          "type": "Identifier",
                          "name": "g"
                        },
                        "prefix": true
                      }
                    },
                    "right": {
                      "type": "UnaryExpression",
                      "operator": "!",
                      "argument": {
                        "type": "Identifier",
                        "name": "b"
                      },
                      "prefix": true
                    }
                  },
                  "consequent": {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "NewExpression",
                      "callee": {
                        "type": "Identifier",
                        "name": "d3_rgb"
                      },
                      "arguments": [
                        {
                          "type": "Identifier",
                          "name": "i"
                        },
                        {
                          "type": "Identifier",
                          "name": "i"
                        },
                        {
                          "type": "Identifier",
                          "name": "i"
                        }
                      ]
                    }
                  },
                  "alternate": null
                },
                {
                  "type": "IfStatement",
                  "test": {
                    "type": "LogicalExpression",
                    "operator": "&&",
                    "left": {
                      "type": "Identifier",
                      "name": "r"
                    },
                    "right": {
                      "type": "BinaryExpression",
                      "operator": "<",
                      "left": {
                        "type": "Identifier",
                        "name": "r"
                      },
                      "right": {
                        "type": "Identifier",
                        "name": "i"
                      }
                    }
                  },
                  "consequent": {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "name": "r"
                      },
                      "right": {
                        "type": "Identifier",
                        "name": "i"
                      }
                    }
                  },
                  "alternate": null
                },
                {
                  "type": "IfStatement",
                  "test": {
                    "type": "LogicalExpression",
                    "operator": "&&",
                    "left": {
                      "type": "Identifier",
                      "name": "g"
                    },
                    "right": {
                      "type": "BinaryExpression",
                      "operator": "<",
                      "left": {
                        "type": "Identifier",
                        "name": "g"
                      },
                      "right": {
                        "type": "Identifier",
                        "name": "i"
                      }
                    }
                  },
                  "consequent": {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "name": "g"
                      },
                      "right": {
                        "type": "Identifier",
                        "name": "i"
                      }
                    }
                  },
                  "alternate": null
                },
                {
                  "type": "IfStatement",
                  "test": {
                    "type": "LogicalExpression",
                    "operator": "&&",
                    "left": {
                      "type": "Identifier",
                      "name": "b"
                    },
                    "right": {
                      "type": "BinaryExpression",
                      "operator": "<",
                      "left": {
                        "type": "Identifier",
                        "name": "b"
                      },
                      "right": {
                        "type": "Identifier",
                        "name": "i"
                      }
                    }
                  },
                  "consequent": {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "name": "b"
                      },
                      "right": {
                        "type": "Identifier",
                        "name": "i"
                      }
                    }
                  },
                  "alternate": null
                },
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "NewExpression",
                    "callee": {
                      "type": "Identifier",
                      "name": "d3_rgb"
                    },
                    "arguments": [
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
                            "value": 255,
                            "raw": "255"
                          },
                          {
                            "type": "BinaryExpression",
                            "operator": "/",
                            "left": {
                              "type": "Identifier",
                              "name": "r"
                            },
                            "right": {
                              "type": "Identifier",
                              "name": "k"
                            }
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
                            "value": 255,
                            "raw": "255"
                          },
                          {
                            "type": "BinaryExpression",
                            "operator": "/",
                            "left": {
                              "type": "Identifier",
                              "name": "g"
                            },
                            "right": {
                              "type": "Identifier",
                              "name": "k"
                            }
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
                            "value": 255,
                            "raw": "255"
                          },
                          {
                            "type": "BinaryExpression",
                            "operator": "/",
                            "left": {
                              "type": "Identifier",
                              "name": "b"
                            },
                            "right": {
                              "type": "Identifier",
                              "name": "k"
                            }
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
              "name": "d3_rgbPrototype"
            },
            "property": {
              "type": "Identifier",
              "name": "darker"
            }
          },
          "right": {
            "type": "FunctionExpression",
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "name": "k"
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
                      "name": "k"
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
                          "name": "pow"
                        }
                      },
                      "arguments": [
                        {
                          "type": "Literal",
                          "value": 0.7,
                          "raw": "0.7"
                        },
                        {
                          "type": "ConditionalExpression",
                          "test": {
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
                          "consequent": {
                            "type": "Identifier",
                            "name": "k"
                          },
                          "alternate": {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1"
                          }
                        }
                      ]
                    }
                  }
                },
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "NewExpression",
                    "callee": {
                      "type": "Identifier",
                      "name": "d3_rgb"
                    },
                    "arguments": [
                      {
                        "type": "BinaryExpression",
                        "operator": "*",
                        "left": {
                          "type": "Identifier",
                          "name": "k"
                        },
                        "right": {
                          "type": "MemberExpression",
                          "computed": false,
                          "object": {
                            "type": "ThisExpression"
                          },
                          "property": {
                            "type": "Identifier",
                            "name": "r"
                          }
                        }
                      },
                      {
                        "type": "BinaryExpression",
                        "operator": "*",
                        "left": {
                          "type": "Identifier",
                          "name": "k"
                        },
                        "right": {
                          "type": "MemberExpression",
                          "computed": false,
                          "object": {
                            "type": "ThisExpression"
                          },
                          "property": {
                            "type": "Identifier",
                            "name": "g"
                          }
                        }
                      },
                      {
                        "type": "BinaryExpression",
                        "operator": "*",
                        "left": {
                          "type": "Identifier",
                          "name": "k"
                        },
                        "right": {
                          "type": "MemberExpression",
                          "computed": false,
                          "object": {
                            "type": "ThisExpression"
                          },
                          "property": {
                            "type": "Identifier",
                            "name": "b"
                          }
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
              "name": "d3_rgbPrototype"
            },
            "property": {
              "type": "Identifier",
              "name": "hsl"
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
                      "name": "d3_rgb_hsl"
                    },
                    "arguments": [
                      {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "ThisExpression"
                        },
                        "property": {
                          "type": "Identifier",
                          "name": "r"
                        }
                      },
                      {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "ThisExpression"
                        },
                        "property": {
                          "type": "Identifier",
                          "name": "g"
                        }
                      },
                      {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "ThisExpression"
                        },
                        "property": {
                          "type": "Identifier",
                          "name": "b"
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
              "name": "d3_rgbPrototype"
            },
            "property": {
              "type": "Identifier",
              "name": "toString"
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
                          "value": "#",
                          "raw": "\"#\""
                        },
                        "right": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "Identifier",
                            "name": "d3_rgb_hex"
                          },
                          "arguments": [
                            {
                              "type": "MemberExpression",
                              "computed": false,
                              "object": {
                                "type": "ThisExpression"
                              },
                              "property": {
                                "type": "Identifier",
                                "name": "r"
                              }
                            }
                          ]
                        }
                      },
                      "right": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "Identifier",
                          "name": "d3_rgb_hex"
                        },
                        "arguments": [
                          {
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                              "type": "ThisExpression"
                            },
                            "property": {
                              "type": "Identifier",
                              "name": "g"
                            }
                          }
                        ]
                      }
                    },
                    "right": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "name": "d3_rgb_hex"
                      },
                      "arguments": [
                        {
                          "type": "MemberExpression",
                          "computed": false,
                          "object": {
                            "type": "ThisExpression"
                          },
                          "property": {
                            "type": "Identifier",
                            "name": "b"
                          }
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
      },
      {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "name": "d3_rgb_hex"
        },
        "params": [
          {
            "type": "Identifier",
            "name": "v"
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
                    "name": "v"
                  },
                  "right": {
                    "type": "Literal",
                    "value": 16,
                    "raw": "0x10"
                  }
                },
                "consequent": {
                  "type": "BinaryExpression",
                  "operator": "+",
                  "left": {
                    "type": "Literal",
                    "value": "0",
                    "raw": "\"0\""
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
                            "name": "Math"
                          },
                          "property": {
                            "type": "Identifier",
                            "name": "max"
                          }
                        },
                        "arguments": [
                          {
                            "type": "Literal",
                            "value": 0,
                            "raw": "0"
                          },
                          {
                            "type": "Identifier",
                            "name": "v"
                          }
                        ]
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "toString"
                      }
                    },
                    "arguments": [
                      {
                        "type": "Literal",
                        "value": 16,
                        "raw": "16"
                      }
                    ]
                  }
                },
                "alternate": {
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
                          "value": 255,
                          "raw": "255"
                        },
                        {
                          "type": "Identifier",
                          "name": "v"
                        }
                      ]
                    },
                    "property": {
                      "type": "Identifier",
                      "name": "toString"
                    }
                  },
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": 16,
                      "raw": "16"
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
          "name": "d3_rgb_parse"
        },
        "params": [
          {
            "type": "Identifier",
            "name": "format"
          },
          {
            "type": "Identifier",
            "name": "rgb"
          },
          {
            "type": "Identifier",
            "name": "hsl"
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
                    "name": "r"
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
                    "name": "g"
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
                    "name": "b"
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
                    "name": "m1"
                  },
                  "init": null
                },
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "name": "m2"
                  },
                  "init": null
                },
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "name": "color"
                  },
                  "init": null
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
                  "name": "m1"
                },
                "right": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "Literal",
                      "value": {},
                      "raw": "/([a-z]+)\\((.*)\\)/i"
                    },
                    "property": {
                      "type": "Identifier",
                      "name": "exec"
                    }
                  },
                  "arguments": [
                    {
                      "type": "Identifier",
                      "name": "format"
                    }
                  ]
                }
              }
            },
            {
              "type": "IfStatement",
              "test": {
                "type": "Identifier",
                "name": "m1"
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
                        "name": "m2"
                      },
                      "right": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "MemberExpression",
                          "computed": false,
                          "object": {
                            "type": "MemberExpression",
                            "computed": true,
                            "object": {
                              "type": "Identifier",
                              "name": "m1"
                            },
                            "property": {
                              "type": "Literal",
                              "value": 2,
                              "raw": "2"
                            }
                          },
                          "property": {
                            "type": "Identifier",
                            "name": "split"
                          }
                        },
                        "arguments": [
                          {
                            "type": "Literal",
                            "value": ",",
                            "raw": "\",\""
                          }
                        ]
                      }
                    }
                  },
                  {
                    "type": "SwitchStatement",
                    "discriminant": {
                      "type": "MemberExpression",
                      "computed": true,
                      "object": {
                        "type": "Identifier",
                        "name": "m1"
                      },
                      "property": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1"
                      }
                    },
                    "cases": [
                      {
                        "type": "SwitchCase",
                        "test": {
                          "type": "Literal",
                          "value": "hsl",
                          "raw": "\"hsl\""
                        },
                        "consequent": [
                          {
                            "type": "BlockStatement",
                            "body": [
                              {
                                "type": "ReturnStatement",
                                "argument": {
                                  "type": "CallExpression",
                                  "callee": {
                                    "type": "Identifier",
                                    "name": "hsl"
                                  },
                                  "arguments": [
                                    {
                                      "type": "CallExpression",
                                      "callee": {
                                        "type": "Identifier",
                                        "name": "parseFloat"
                                      },
                                      "arguments": [
                                        {
                                          "type": "MemberExpression",
                                          "computed": true,
                                          "object": {
                                            "type": "Identifier",
                                            "name": "m2"
                                          },
                                          "property": {
                                            "type": "Literal",
                                            "value": 0,
                                            "raw": "0"
                                          }
                                        }
                                      ]
                                    },
                                    {
                                      "type": "BinaryExpression",
                                      "operator": "/",
                                      "left": {
                                        "type": "CallExpression",
                                        "callee": {
                                          "type": "Identifier",
                                          "name": "parseFloat"
                                        },
                                        "arguments": [
                                          {
                                            "type": "MemberExpression",
                                            "computed": true,
                                            "object": {
                                              "type": "Identifier",
                                              "name": "m2"
                                            },
                                            "property": {
                                              "type": "Literal",
                                              "value": 1,
                                              "raw": "1"
                                            }
                                          }
                                        ]
                                      },
                                      "right": {
                                        "type": "Literal",
                                        "value": 100,
                                        "raw": "100"
                                      }
                                    },
                                    {
                                      "type": "BinaryExpression",
                                      "operator": "/",
                                      "left": {
                                        "type": "CallExpression",
                                        "callee": {
                                          "type": "Identifier",
                                          "name": "parseFloat"
                                        },
                                        "arguments": [
                                          {
                                            "type": "MemberExpression",
                                            "computed": true,
                                            "object": {
                                              "type": "Identifier",
                                              "name": "m2"
                                            },
                                            "property": {
                                              "type": "Literal",
                                              "value": 2,
                                              "raw": "2"
                                            }
                                          }
                                        ]
                                      },
                                      "right": {
                                        "type": "Literal",
                                        "value": 100,
                                        "raw": "100"
                                      }
                                    }
                                  ]
                                }
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "type": "SwitchCase",
                        "test": {
                          "type": "Literal",
                          "value": "rgb",
                          "raw": "\"rgb\""
                        },
                        "consequent": [
                          {
                            "type": "BlockStatement",
                            "body": [
                              {
                                "type": "ReturnStatement",
                                "argument": {
                                  "type": "CallExpression",
                                  "callee": {
                                    "type": "Identifier",
                                    "name": "rgb"
                                  },
                                  "arguments": [
                                    {
                                      "type": "CallExpression",
                                      "callee": {
                                        "type": "Identifier",
                                        "name": "d3_rgb_parseNumber"
                                      },
                                      "arguments": [
                                        {
                                          "type": "MemberExpression",
                                          "computed": true,
                                          "object": {
                                            "type": "Identifier",
                                            "name": "m2"
                                          },
                                          "property": {
                                            "type": "Literal",
                                            "value": 0,
                                            "raw": "0"
                                          }
                                        }
                                      ]
                                    },
                                    {
                                      "type": "CallExpression",
                                      "callee": {
                                        "type": "Identifier",
                                        "name": "d3_rgb_parseNumber"
                                      },
                                      "arguments": [
                                        {
                                          "type": "MemberExpression",
                                          "computed": true,
                                          "object": {
                                            "type": "Identifier",
                                            "name": "m2"
                                          },
                                          "property": {
                                            "type": "Literal",
                                            "value": 1,
                                            "raw": "1"
                                          }
                                        }
                                      ]
                                    },
                                    {
                                      "type": "CallExpression",
                                      "callee": {
                                        "type": "Identifier",
                                        "name": "d3_rgb_parseNumber"
                                      },
                                      "arguments": [
                                        {
                                          "type": "MemberExpression",
                                          "computed": true,
                                          "object": {
                                            "type": "Identifier",
                                            "name": "m2"
                                          },
                                          "property": {
                                            "type": "Literal",
                                            "value": 2,
                                            "raw": "2"
                                          }
                                        }
                                      ]
                                    }
                                  ]
                                }
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              "alternate": null
            },
            {
              "type": "IfStatement",
              "test": {
                "type": "AssignmentExpression",
                "operator": "=",
                "left": {
                  "type": "Identifier",
                  "name": "color"
                },
                "right": {
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
                      "name": "get"
                    }
                  },
                  "arguments": [
                    {
                      "type": "Identifier",
                      "name": "format"
                    }
                  ]
                }
              },
              "consequent": {
                "type": "ReturnStatement",
                "argument": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "name": "rgb"
                  },
                  "arguments": [
                    {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "name": "color"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "r"
                      }
                    },
                    {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "name": "color"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "g"
                      }
                    },
                    {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "name": "color"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "b"
                      }
                    }
                  ]
                }
              },
              "alternate": null
            },
            {
              "type": "IfStatement",
              "test": {
                "type": "LogicalExpression",
                "operator": "&&",
                "left": {
                  "type": "LogicalExpression",
                  "operator": "&&",
                  "left": {
                    "type": "BinaryExpression",
                    "operator": "!=",
                    "left": {
                      "type": "Identifier",
                      "name": "format"
                    },
                    "right": {
                      "type": "Literal",
                      "value": null,
                      "raw": "null"
                    }
                  },
                  "right": {
                    "type": "BinaryExpression",
                    "operator": "===",
                    "left": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "name": "format"
                        },
                        "property": {
                          "type": "Identifier",
                          "name": "charAt"
                        }
                      },
                      "arguments": [
                        {
                          "type": "Literal",
                          "value": 0,
                          "raw": "0"
                        }
                      ]
                    },
                    "right": {
                      "type": "Literal",
                      "value": "#",
                      "raw": "\"#\""
                    }
                  }
                },
                "right": {
                  "type": "UnaryExpression",
                  "operator": "!",
                  "argument": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "name": "isNaN"
                    },
                    "arguments": [
                      {
                        "type": "AssignmentExpression",
                        "operator": "=",
                        "left": {
                          "type": "Identifier",
                          "name": "color"
                        },
                        "right": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "Identifier",
                            "name": "parseInt"
                          },
                          "arguments": [
                            {
                              "type": "CallExpression",
                              "callee": {
                                "type": "MemberExpression",
                                "computed": false,
                                "object": {
                                  "type": "Identifier",
                                  "name": "format"
                                },
                                "property": {
                                  "type": "Identifier",
                                  "name": "substring"
                                }
                              },
                              "arguments": [
                                {
                                  "type": "Literal",
                                  "value": 1,
                                  "raw": "1"
                                }
                              ]
                            },
                            {
                              "type": "Literal",
                              "value": 16,
                              "raw": "16"
                            }
                          ]
                        }
                      }
                    ]
                  },
                  "prefix": true
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
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "name": "format"
                        },
                        "property": {
                          "type": "Identifier",
                          "name": "length"
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "value": 4,
                        "raw": "4"
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
                              "name": "r"
                            },
                            "right": {
                              "type": "BinaryExpression",
                              "operator": ">>",
                              "left": {
                                "type": "BinaryExpression",
                                "operator": "&",
                                "left": {
                                  "type": "Identifier",
                                  "name": "color"
                                },
                                "right": {
                                  "type": "Literal",
                                  "value": 3840,
                                  "raw": "0xf00"
                                }
                              },
                              "right": {
                                "type": "Literal",
                                "value": 4,
                                "raw": "4"
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
                              "name": "r"
                            },
                            "right": {
                              "type": "BinaryExpression",
                              "operator": "|",
                              "left": {
                                "type": "BinaryExpression",
                                "operator": ">>",
                                "left": {
                                  "type": "Identifier",
                                  "name": "r"
                                },
                                "right": {
                                  "type": "Literal",
                                  "value": 4,
                                  "raw": "4"
                                }
                              },
                              "right": {
                                "type": "Identifier",
                                "name": "r"
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
                              "name": "g"
                            },
                            "right": {
                              "type": "BinaryExpression",
                              "operator": "&",
                              "left": {
                                "type": "Identifier",
                                "name": "color"
                              },
                              "right": {
                                "type": "Literal",
                                "value": 240,
                                "raw": "0xf0"
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
                              "name": "g"
                            },
                            "right": {
                              "type": "BinaryExpression",
                              "operator": "|",
                              "left": {
                                "type": "BinaryExpression",
                                "operator": ">>",
                                "left": {
                                  "type": "Identifier",
                                  "name": "g"
                                },
                                "right": {
                                  "type": "Literal",
                                  "value": 4,
                                  "raw": "4"
                                }
                              },
                              "right": {
                                "type": "Identifier",
                                "name": "g"
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
                              "name": "b"
                            },
                            "right": {
                              "type": "BinaryExpression",
                              "operator": "&",
                              "left": {
                                "type": "Identifier",
                                "name": "color"
                              },
                              "right": {
                                "type": "Literal",
                                "value": 15,
                                "raw": "0xf"
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
                              "name": "b"
                            },
                            "right": {
                              "type": "BinaryExpression",
                              "operator": "|",
                              "left": {
                                "type": "BinaryExpression",
                                "operator": "<<",
                                "left": {
                                  "type": "Identifier",
                                  "name": "b"
                                },
                                "right": {
                                  "type": "Literal",
                                  "value": 4,
                                  "raw": "4"
                                }
                              },
                              "right": {
                                "type": "Identifier",
                                "name": "b"
                              }
                            }
                          }
                        }
                      ]
                    },
                    "alternate": {
                      "type": "IfStatement",
                      "test": {
                        "type": "BinaryExpression",
                        "operator": "===",
                        "left": {
                          "type": "MemberExpression",
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "name": "format"
                          },
                          "property": {
                            "type": "Identifier",
                            "name": "length"
                          }
                        },
                        "right": {
                          "type": "Literal",
                          "value": 7,
                          "raw": "7"
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
                                "name": "r"
                              },
                              "right": {
                                "type": "BinaryExpression",
                                "operator": ">>",
                                "left": {
                                  "type": "BinaryExpression",
                                  "operator": "&",
                                  "left": {
                                    "type": "Identifier",
                                    "name": "color"
                                  },
                                  "right": {
                                    "type": "Literal",
                                    "value": 16711680,
                                    "raw": "0xff0000"
                                  }
                                },
                                "right": {
                                  "type": "Literal",
                                  "value": 16,
                                  "raw": "16"
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
                                "name": "g"
                              },
                              "right": {
                                "type": "BinaryExpression",
                                "operator": ">>",
                                "left": {
                                  "type": "BinaryExpression",
                                  "operator": "&",
                                  "left": {
                                    "type": "Identifier",
                                    "name": "color"
                                  },
                                  "right": {
                                    "type": "Literal",
                                    "value": 65280,
                                    "raw": "0xff00"
                                  }
                                },
                                "right": {
                                  "type": "Literal",
                                  "value": 8,
                                  "raw": "8"
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
                                "name": "b"
                              },
                              "right": {
                                "type": "BinaryExpression",
                                "operator": "&",
                                "left": {
                                  "type": "Identifier",
                                  "name": "color"
                                },
                                "right": {
                                  "type": "Literal",
                                  "value": 255,
                                  "raw": "0xff"
                                }
                              }
                            }
                          }
                        ]
                      },
                      "alternate": null
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
                  "type": "Identifier",
                  "name": "rgb"
                },
                "arguments": [
                  {
                    "type": "Identifier",
                    "name": "r"
                  },
                  {
                    "type": "Identifier",
                    "name": "g"
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
      },
      {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "name": "d3_rgb_hsl"
        },
        "params": [
          {
            "type": "Identifier",
            "name": "r"
          },
          {
            "type": "Identifier",
            "name": "g"
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
                    "name": "min"
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
                        "name": "min"
                      }
                    },
                    "arguments": [
                      {
                        "type": "AssignmentExpression",
                        "operator": "/=",
                        "left": {
                          "type": "Identifier",
                          "name": "r"
                        },
                        "right": {
                          "type": "Literal",
                          "value": 255,
                          "raw": "255"
                        }
                      },
                      {
                        "type": "AssignmentExpression",
                        "operator": "/=",
                        "left": {
                          "type": "Identifier",
                          "name": "g"
                        },
                        "right": {
                          "type": "Literal",
                          "value": 255,
                          "raw": "255"
                        }
                      },
                      {
                        "type": "AssignmentExpression",
                        "operator": "/=",
                        "left": {
                          "type": "Identifier",
                          "name": "b"
                        },
                        "right": {
                          "type": "Literal",
                          "value": 255,
                          "raw": "255"
                        }
                      }
                    ]
                  }
                },
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "name": "max"
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
                        "name": "max"
                      }
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "name": "r"
                      },
                      {
                        "type": "Identifier",
                        "name": "g"
                      },
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
                    "name": "d"
                  },
                  "init": {
                    "type": "BinaryExpression",
                    "operator": "-",
                    "left": {
                      "type": "Identifier",
                      "name": "max"
                    },
                    "right": {
                      "type": "Identifier",
                      "name": "min"
                    }
                  }
                },
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "name": "h"
                  },
                  "init": null
                },
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "name": "s"
                  },
                  "init": null
                },
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "name": "l"
                  },
                  "init": {
                    "type": "BinaryExpression",
                    "operator": "/",
                    "left": {
                      "type": "BinaryExpression",
                      "operator": "+",
                      "left": {
                        "type": "Identifier",
                        "name": "max"
                      },
                      "right": {
                        "type": "Identifier",
                        "name": "min"
                      }
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
              "type": "IfStatement",
              "test": {
                "type": "Identifier",
                "name": "d"
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
                        "name": "s"
                      },
                      "right": {
                        "type": "ConditionalExpression",
                        "test": {
                          "type": "BinaryExpression",
                          "operator": "<",
                          "left": {
                            "type": "Identifier",
                            "name": "l"
                          },
                          "right": {
                            "type": "Literal",
                            "value": 0.5,
                            "raw": ".5"
                          }
                        },
                        "consequent": {
                          "type": "BinaryExpression",
                          "operator": "/",
                          "left": {
                            "type": "Identifier",
                            "name": "d"
                          },
                          "right": {
                            "type": "BinaryExpression",
                            "operator": "+",
                            "left": {
                              "type": "Identifier",
                              "name": "max"
                            },
                            "right": {
                              "type": "Identifier",
                              "name": "min"
                            }
                          }
                        },
                        "alternate": {
                          "type": "BinaryExpression",
                          "operator": "/",
                          "left": {
                            "type": "Identifier",
                            "name": "d"
                          },
                          "right": {
                            "type": "BinaryExpression",
                            "operator": "-",
                            "left": {
                              "type": "BinaryExpression",
                              "operator": "-",
                              "left": {
                                "type": "Literal",
                                "value": 2,
                                "raw": "2"
                              },
                              "right": {
                                "type": "Identifier",
                                "name": "max"
                              }
                            },
                            "right": {
                              "type": "Identifier",
                              "name": "min"
                            }
                          }
                        }
                      }
                    }
                  },
                  {
                    "type": "IfStatement",
                    "test": {
                      "type": "BinaryExpression",
                      "operator": "==",
                      "left": {
                        "type": "Identifier",
                        "name": "r"
                      },
                      "right": {
                        "type": "Identifier",
                        "name": "max"
                      }
                    },
                    "consequent": {
                      "type": "ExpressionStatement",
                      "expression": {
                        "type": "AssignmentExpression",
                        "operator": "=",
                        "left": {
                          "type": "Identifier",
                          "name": "h"
                        },
                        "right": {
                          "type": "BinaryExpression",
                          "operator": "+",
                          "left": {
                            "type": "BinaryExpression",
                            "operator": "/",
                            "left": {
                              "type": "BinaryExpression",
                              "operator": "-",
                              "left": {
                                "type": "Identifier",
                                "name": "g"
                              },
                              "right": {
                                "type": "Identifier",
                                "name": "b"
                              }
                            },
                            "right": {
                              "type": "Identifier",
                              "name": "d"
                            }
                          },
                          "right": {
                            "type": "ConditionalExpression",
                            "test": {
                              "type": "BinaryExpression",
                              "operator": "<",
                              "left": {
                                "type": "Identifier",
                                "name": "g"
                              },
                              "right": {
                                "type": "Identifier",
                                "name": "b"
                              }
                            },
                            "consequent": {
                              "type": "Literal",
                              "value": 6,
                              "raw": "6"
                            },
                            "alternate": {
                              "type": "Literal",
                              "value": 0,
                              "raw": "0"
                            }
                          }
                        }
                      }
                    },
                    "alternate": {
                      "type": "IfStatement",
                      "test": {
                        "type": "BinaryExpression",
                        "operator": "==",
                        "left": {
                          "type": "Identifier",
                          "name": "g"
                        },
                        "right": {
                          "type": "Identifier",
                          "name": "max"
                        }
                      },
                      "consequent": {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "AssignmentExpression",
                          "operator": "=",
                          "left": {
                            "type": "Identifier",
                            "name": "h"
                          },
                          "right": {
                            "type": "BinaryExpression",
                            "operator": "+",
                            "left": {
                              "type": "BinaryExpression",
                              "operator": "/",
                              "left": {
                                "type": "BinaryExpression",
                                "operator": "-",
                                "left": {
                                  "type": "Identifier",
                                  "name": "b"
                                },
                                "right": {
                                  "type": "Identifier",
                                  "name": "r"
                                }
                              },
                              "right": {
                                "type": "Identifier",
                                "name": "d"
                              }
                            },
                            "right": {
                              "type": "Literal",
                              "value": 2,
                              "raw": "2"
                            }
                          }
                        }
                      },
                      "alternate": {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "AssignmentExpression",
                          "operator": "=",
                          "left": {
                            "type": "Identifier",
                            "name": "h"
                          },
                          "right": {
                            "type": "BinaryExpression",
                            "operator": "+",
                            "left": {
                              "type": "BinaryExpression",
                              "operator": "/",
                              "left": {
                                "type": "BinaryExpression",
                                "operator": "-",
                                "left": {
                                  "type": "Identifier",
                                  "name": "r"
                                },
                                "right": {
                                  "type": "Identifier",
                                  "name": "g"
                                }
                              },
                              "right": {
                                "type": "Identifier",
                                "name": "d"
                              }
                            },
                            "right": {
                              "type": "Literal",
                              "value": 4,
                              "raw": "4"
                            }
                          }
                        }
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "*=",
                      "left": {
                        "type": "Identifier",
                        "name": "h"
                      },
                      "right": {
                        "type": "Literal",
                        "value": 60,
                        "raw": "60"
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
                        "type": "Identifier",
                        "name": "h"
                      },
                      "right": {
                        "type": "Identifier",
                        "name": "NaN"
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
                        "name": "s"
                      },
                      "right": {
                        "type": "ConditionalExpression",
                        "test": {
                          "type": "LogicalExpression",
                          "operator": "&&",
                          "left": {
                            "type": "BinaryExpression",
                            "operator": ">",
                            "left": {
                              "type": "Identifier",
                              "name": "l"
                            },
                            "right": {
                              "type": "Literal",
                              "value": 0,
                              "raw": "0"
                            }
                          },
                          "right": {
                            "type": "BinaryExpression",
                            "operator": "<",
                            "left": {
                              "type": "Identifier",
                              "name": "l"
                            },
                            "right": {
                              "type": "Literal",
                              "value": 1,
                              "raw": "1"
                            }
                          }
                        },
                        "consequent": {
                          "type": "Literal",
                          "value": 0,
                          "raw": "0"
                        },
                        "alternate": {
                          "type": "Identifier",
                          "name": "h"
                        }
                      }
                    }
                  }
                ]
              }
            },
            {
              "type": "ReturnStatement",
              "argument": {
                "type": "NewExpression",
                "callee": {
                  "type": "Identifier",
                  "name": "d3_hsl"
                },
                "arguments": [
                  {
                    "type": "Identifier",
                    "name": "h"
                  },
                  {
                    "type": "Identifier",
                    "name": "s"
                  },
                  {
                    "type": "Identifier",
                    "name": "l"
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
          "name": "d3_rgb_lab"
        },
        "params": [
          {
            "type": "Identifier",
            "name": "r"
          },
          {
            "type": "Identifier",
            "name": "g"
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
              "type": "ExpressionStatement",
              "expression": {
                "type": "AssignmentExpression",
                "operator": "=",
                "left": {
                  "type": "Identifier",
                  "name": "r"
                },
                "right": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "name": "d3_rgb_xyz"
                  },
                  "arguments": [
                    {
                      "type": "Identifier",
                      "name": "r"
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
                  "name": "g"
                },
                "right": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "name": "d3_rgb_xyz"
                  },
                  "arguments": [
                    {
                      "type": "Identifier",
                      "name": "g"
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
                  "name": "b"
                },
                "right": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "name": "d3_rgb_xyz"
                  },
                  "arguments": [
                    {
                      "type": "Identifier",
                      "name": "b"
                    }
                  ]
                }
              }
            },
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
                      "type": "Identifier",
                      "name": "d3_xyz_lab"
                    },
                    "arguments": [
                      {
                        "type": "BinaryExpression",
                        "operator": "/",
                        "left": {
                          "type": "BinaryExpression",
                          "operator": "+",
                          "left": {
                            "type": "BinaryExpression",
                            "operator": "+",
                            "left": {
                              "type": "BinaryExpression",
                              "operator": "*",
                              "left": {
                                "type": "Literal",
                                "value": 0.4124564,
                                "raw": "0.4124564"
                              },
                              "right": {
                                "type": "Identifier",
                                "name": "r"
                              }
                            },
                            "right": {
                              "type": "BinaryExpression",
                              "operator": "*",
                              "left": {
                                "type": "Literal",
                                "value": 0.3575761,
                                "raw": "0.3575761"
                              },
                              "right": {
                                "type": "Identifier",
                                "name": "g"
                              }
                            }
                          },
                          "right": {
                            "type": "BinaryExpression",
                            "operator": "*",
                            "left": {
                              "type": "Literal",
                              "value": 0.1804375,
                              "raw": "0.1804375"
                            },
                            "right": {
                              "type": "Identifier",
                              "name": "b"
                            }
                          }
                        },
                        "right": {
                          "type": "Identifier",
                          "name": "d3_lab_X"
                        }
                      }
                    ]
                  }
                },
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "name": "y"
                  },
                  "init": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "name": "d3_xyz_lab"
                    },
                    "arguments": [
                      {
                        "type": "BinaryExpression",
                        "operator": "/",
                        "left": {
                          "type": "BinaryExpression",
                          "operator": "+",
                          "left": {
                            "type": "BinaryExpression",
                            "operator": "+",
                            "left": {
                              "type": "BinaryExpression",
                              "operator": "*",
                              "left": {
                                "type": "Literal",
                                "value": 0.2126729,
                                "raw": "0.2126729"
                              },
                              "right": {
                                "type": "Identifier",
                                "name": "r"
                              }
                            },
                            "right": {
                              "type": "BinaryExpression",
                              "operator": "*",
                              "left": {
                                "type": "Literal",
                                "value": 0.7151522,
                                "raw": "0.7151522"
                              },
                              "right": {
                                "type": "Identifier",
                                "name": "g"
                              }
                            }
                          },
                          "right": {
                            "type": "BinaryExpression",
                            "operator": "*",
                            "left": {
                              "type": "Literal",
                              "value": 0.072175,
                              "raw": "0.0721750"
                            },
                            "right": {
                              "type": "Identifier",
                              "name": "b"
                            }
                          }
                        },
                        "right": {
                          "type": "Identifier",
                          "name": "d3_lab_Y"
                        }
                      }
                    ]
                  }
                },
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "name": "z"
                  },
                  "init": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "name": "d3_xyz_lab"
                    },
                    "arguments": [
                      {
                        "type": "BinaryExpression",
                        "operator": "/",
                        "left": {
                          "type": "BinaryExpression",
                          "operator": "+",
                          "left": {
                            "type": "BinaryExpression",
                            "operator": "+",
                            "left": {
                              "type": "BinaryExpression",
                              "operator": "*",
                              "left": {
                                "type": "Literal",
                                "value": 0.0193339,
                                "raw": "0.0193339"
                              },
                              "right": {
                                "type": "Identifier",
                                "name": "r"
                              }
                            },
                            "right": {
                              "type": "BinaryExpression",
                              "operator": "*",
                              "left": {
                                "type": "Literal",
                                "value": 0.119192,
                                "raw": "0.1191920"
                              },
                              "right": {
                                "type": "Identifier",
                                "name": "g"
                              }
                            }
                          },
                          "right": {
                            "type": "BinaryExpression",
                            "operator": "*",
                            "left": {
                              "type": "Literal",
                              "value": 0.9503041,
                              "raw": "0.9503041"
                            },
                            "right": {
                              "type": "Identifier",
                              "name": "b"
                            }
                          }
                        },
                        "right": {
                          "type": "Identifier",
                          "name": "d3_lab_Z"
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
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "name": "d3_lab"
                },
                "arguments": [
                  {
                    "type": "BinaryExpression",
                    "operator": "-",
                    "left": {
                      "type": "BinaryExpression",
                      "operator": "*",
                      "left": {
                        "type": "Literal",
                        "value": 116,
                        "raw": "116"
                      },
                      "right": {
                        "type": "Identifier",
                        "name": "y"
                      }
                    },
                    "right": {
                      "type": "Literal",
                      "value": 16,
                      "raw": "16"
                    }
                  },
                  {
                    "type": "BinaryExpression",
                    "operator": "*",
                    "left": {
                      "type": "Literal",
                      "value": 500,
                      "raw": "500"
                    },
                    "right": {
                      "type": "BinaryExpression",
                      "operator": "-",
                      "left": {
                        "type": "Identifier",
                        "name": "x"
                      },
                      "right": {
                        "type": "Identifier",
                        "name": "y"
                      }
                    }
                  },
                  {
                    "type": "BinaryExpression",
                    "operator": "*",
                    "left": {
                      "type": "Literal",
                      "value": 200,
                      "raw": "200"
                    },
                    "right": {
                      "type": "BinaryExpression",
                      "operator": "-",
                      "left": {
                        "type": "Identifier",
                        "name": "y"
                      },
                      "right": {
                        "type": "Identifier",
                        "name": "z"
                      }
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
          "name": "d3_rgb_xyz"
        },
        "params": [
          {
            "type": "Identifier",
            "name": "r"
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
                  "operator": "<=",
                  "left": {
                    "type": "AssignmentExpression",
                    "operator": "/=",
                    "left": {
                      "type": "Identifier",
                      "name": "r"
                    },
                    "right": {
                      "type": "Literal",
                      "value": 255,
                      "raw": "255"
                    }
                  },
                  "right": {
                    "type": "Literal",
                    "value": 0.04045,
                    "raw": "0.04045"
                  }
                },
                "consequent": {
                  "type": "BinaryExpression",
                  "operator": "/",
                  "left": {
                    "type": "Identifier",
                    "name": "r"
                  },
                  "right": {
                    "type": "Literal",
                    "value": 12.92,
                    "raw": "12.92"
                  }
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
                      "type": "BinaryExpression",
                      "operator": "/",
                      "left": {
                        "type": "BinaryExpression",
                        "operator": "+",
                        "left": {
                          "type": "Identifier",
                          "name": "r"
                        },
                        "right": {
                          "type": "Literal",
                          "value": 0.055,
                          "raw": "0.055"
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "value": 1.055,
                        "raw": "1.055"
                      }
                    },
                    {
                      "type": "Literal",
                      "value": 2.4,
                      "raw": "2.4"
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
          "name": "d3_rgb_parseNumber"
        },
        "params": [
          {
            "type": "Identifier",
            "name": "c"
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
                    "name": "f"
                  },
                  "init": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "name": "parseFloat"
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "name": "c"
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
                "type": "ConditionalExpression",
                "test": {
                  "type": "BinaryExpression",
                  "operator": "===",
                  "left": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "name": "c"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "charAt"
                      }
                    },
                    "arguments": [
                      {
                        "type": "BinaryExpression",
                        "operator": "-",
                        "left": {
                          "type": "MemberExpression",
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "name": "c"
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
                    ]
                  },
                  "right": {
                    "type": "Literal",
                    "value": "%",
                    "raw": "\"%\""
                  }
                },
                "consequent": {
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
                      "name": "round"
                    }
                  },
                  "arguments": [
                    {
                      "type": "BinaryExpression",
                      "operator": "*",
                      "left": {
                        "type": "Identifier",
                        "name": "f"
                      },
                      "right": {
                        "type": "Literal",
                        "value": 2.55,
                        "raw": "2.55"
                      }
                    }
                  ]
                },
                "alternate": {
                  "type": "Identifier",
                  "name": "f"
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
              "name": "d3_rgb_names"
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
                  "name": "map"
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
                        "name": "aliceblue"
                      },
                      "value": {
                        "type": "Literal",
                        "value": 15792383,
                        "raw": "0xf0f8ff"
                      },
                      "kind": "init"
                    },
                    {
                      "type": "Property",
                      "key": {
                        "type": "Identifier",
                        "name": "antiquewhite"
                      },
                      "value": {
                        "type": "Literal",
                        "value": 16444375,
                        "raw": "0xfaebd7"
                      },
                      "kind": "init"
                    },
                    {
                      "type": "Property",
                      "key": {
                        "type": "Identifier",
                        "name": "aqua"
                      },
                      "value": {
                        "type": "Literal",
                        "value": 65535,
                        "raw": "0x00ffff"
                      },
                      "kind": "init"
                    },
                    {
                      "type": "Property",
                      "key": {
                        "type": "Identifier",
                        "name": "aquamarine"
                      },
                      "value": {
                        "type": "Literal",
                        "value": 8388564,
                        "raw": "0x7fffd4"
                      },
                      "kind": "init"
                    },
                    {
                      "type": "Property",
                      "key": {
                        "type": "Identifier",
                        "name": "azure"
                      },
                      "value": {
                        "type": "Literal",
                        "value": 15794175,
                        "raw": "0xf0ffff"
                      },
                      "kind": "init"
                    },
                    {
                      "type": "Property",
                      "key": {
                        "type": "Identifier",
                        "name": "beige"
                      },
                      "value": {
                        "type": "Literal",
                        "value": 16119260,
                        "raw": "0xf5f5dc"
                      },
                      "kind": "init"
                    },
                    {
                      "type": "Property",
                      "key": {
                        "type": "Identifier",
                        "name": "bisque"
                      },
                      "value": {
                        "type": "Literal",
                        "value": 16770244,
                        "raw": "0xffe4c4"
                      },
                      "kind": "init"
                    },
                    {
                      "type": "Property",
                      "key": {
                        "type": "Identifier",
                        "name": "black"
                      },
                      "value": {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0x000000"
                      },
                      "kind": "init"
                    },
                    {
                      "type": "Property",
                      "key": {
                        "type": "Identifier",
                        "name": "blanchedalmond"
                      },
                      "value": {
                        "type": "Literal",
                        "value": 16772045,
                        "raw": "0xffebcd"
                      },
                      "kind": "init"
                    },
                    {
                      "type": "Property",
                      "key": {
                        "type": "Identifier",
                        "name": "blue"
                      },
                      "value": {
                        "type": "Literal",
                        "value": 255,
                        "raw": "0x0000ff"
                      },
                      "kind": "init"
                    },
                    {
                      "type": "Property",
                      "key": {
                        "type": "Identifier",
                        "name": "blueviolet"
                      },
                      "value": {
                        "type": "Literal",
                        "value": 9055202,
                        "raw": "0x8a2be2"
                      },
                      "kind": "init"
                    },
                    {
                      "type": "Property",
                      "key": {
                        "type": "Identifier",
                        "name": "brown"
                      },
                      "value": {
                        "type": "Literal",
                        "value": 10824234,
                        "raw": "0xa52a2a"
                      },
                      "kind": "init"
                    },
                    {
                      "type": "Property",
                      "key": {
                        "type": "Identifier",
                        "name": "burlywood"
                      },
                      "value": {
                        "type": "Literal",
                        "value": 14596231,
                        "raw": "0xdeb887"
                      },
                      "kind": "init"
                    },
                    {
                      "type": "Property",
                      "key": {
                        "type": "Identifier",
                        "name": "cadetblue"
                      },
                      "value": {
                        "type": "Literal",
                        "value": 6266528,
                        "raw": "0x5f9ea0"
                      },
                      "kind": "init"
                    },
                    {
                      "type": "Property",
                      "key": {
                        "type": "Identifier",
                        "name": "chartreuse"
                      },
                      "value": {
                        "type": "Literal",
                        "value": 8388352,
                        "raw": "0x7fff00"
                      },
                      "kind": "init"
                    },
                    {
                      "type": "Property",
                      "key": {
                        "type": "Identifier",
                        "name": "chocolate"
                      },
                      "value": {
                        "type": "Literal",
                        "value": 13789470,
                        "raw": "0xd2691e"
                      },
                      "kind": "init"
                    },
                    {
                      "type": "Property",
                      "key": {
                        "type": "Identifier",
                        "name": "coral"
                      },
                      "value": {
                        "type": "Literal",
                        "value": 16744272,
                        "raw": "0xff7f50"
                      },
                      "kind": "init"
                    },
                    {
                      "type": "Property",
                      "key": {
                        "type": "Identifier",
                        "name": "cornflowerblue"
                      },
                      "value": {
                        "type": "Literal",
                        "value": 6591981,
                        "raw": "0x6495ed"
                      },
                      "kind": "init"
                    },
                    {
                      "type": "Property",
                      "key": {
                        "type": "Identifier",
                        "name": "cornsilk"
                      },
                      "value": {
                        "type": "Literal",
                        "value": 16775388,
                        "raw": "0xfff8dc"
                      },
                      "kind": "init"
                    },
                    {
                      "type": "Property",
                      "key": {
                        "type": "Identifier",
                        "name": "crimson"
                      },
                      "value": {
                        "type": "Literal",
                        "value": 14423100,
                        "raw": "0xdc143c"
                      },
                      "kind": "init"
                    },
                    {
                      "type": "Property",
                      "key": {
                        "type": "Identifier",
                        "name": "cyan"
                      },
                      "value": {
                        "type": "Literal",
                        "value": 65535,
                        "raw": "0x00ffff"
                      },
                      "kind": "init"
                    },
                    {
                      "type": "Property",
                      "key": {
                        "type": "Identifier",
                        "name": "darkblue"
                      },
                      "value": {
                        "type": "Literal",
                        "value": 139,
                        "raw": "0x00008b"
                      },
                      "kind": "init"
                    },
                    {
                      "type": "Property",
                      "key": {
                        "type": "Identifier",
                        "name": "darkcyan"
                      },
                      "value": {
                        "type": "Literal",
                        "value": 35723,
                        "raw": "0x008b8b"
                      },
                      "kind": "init"
                    },
                    {
                      "type": "Property",
                      "key": {
                        "type": "Identifier",
                        "name": "darkgoldenrod"
                      },
                      "value": {
                        "type": "Literal",
                        "value": 12092939,
                        "raw": "0xb8860b"
                      },
                      "kind": "init"
                    },
                    {
                      "type": "Property",
                      "key": {
                        "type": "Identifier",
                        "name": "darkgray"
                      },
                      "value": {
                        "type": "Literal",
                        "value": 11119017,
                        "raw": "0xa9a9a9"
                      },
                      "kind": "init"
                    },
                    {
                      "type": "Property",
                      "key": {
                        "type": "Identifier",
                        "name": "darkgreen"
                      },
                      "value": {
                        "type": "Literal",
                        "value": 25600,
                        "raw": "0x006400"
                      },
                      "kind": "init"
                    },
                    {
                      "type": "Property",
                      "key": {
                        "type": "Identifier",
                        "name": "darkgrey"
                      },
                      "value": {
                        "type": "Literal",
                        "value": 11119017,
                        "raw": "0xa9a9a9"
                      },
                      "kind": "init"
                    },
                    {
                      "type": "Property",
                      "key": {
                        "type": "Identifier",
                        "name": "darkkhaki"
                      },
                      "value": {
                        "type": "Literal",
                        "value": 12433259,
                        "raw": "0xbdb76b"
                      },
                      "kind": "init"
                    },
                    {
                      "type": "Property",
                      "key": {
                        "type": "Identifier",
                        "name": "darkmagenta"
                      },
                      "value": {
                        "type": "Literal",
                        "value": 9109643,
                        "raw": "0x8b008b"
                      },
                      "kind": "init"
                    },
                    {
                      "type": "Property",
                      "key": {
                        "type": "Identifier",
                        "name": "darkolivegreen"
                      },
                      "value": {
                        "type": "Literal",
                        "value": 5597999,
                        "raw": "0x556b2f"
                      },
                      "kind": "init"
                    },
                    {
                      "type": "Property",
                      "key": {
                        "type": "Identifier",
                        "name": "darkorange"
                      },
                      "value": {
                        "type": "Literal",
                        "value": 16747520,
                        "raw": "0xff8c00"
                      },
                      "kind": "init"
                    },
                    {
                      "type": "Property",
                      "key": {
                        "type": "Identifier",
                        "name": "darkorchid"
                      },
                      "value": {
                        "type": "Literal",
                        "value": 10040012,
                        "raw": "0x9932cc"
                      },
                      "kind": "init"
                    },
                    {
                      "type": "Property",
                      "key": {
                        "type": "Identifier",
                        "name": "darkred"
                      },
                      "value": {
                        "type": "Literal",
                        "value": 9109504,
                        "raw": "0x8b0000"
                      },
                      "kind": "init"
                    },
                    {
                      "type": "Property",
                      "key": {
                        "type": "Identifier",
                        "name": "darksalmon"
                      },
                      "value": {
                        "type": "Literal",
                        "value": 15308410,
                        "raw": "0xe9967a"
                      },
                      "kind": "init"
                    },
                    {
                      "type": "Property",
                      "key": {
                        "type": "Identifier",
                        "name": "darkseagreen"
                      },
                      "value": {
                        "type": "Literal",
                        "value": 9419919,
                        "raw": "0x8fbc8f"
                      },
                      "kind": "init"
                    },
                    {
                      "type": "Property",
                      "key": {
                        "type": "Identifier",
                        "name": "darkslateblue"
                      },
                      "value": {
                        "type": "Literal",
                        "value": 4734347,
                        "raw": "0x483d8b"
                      },
                      "kind": "init"
                    },
                    {
                      "type": "Property",
                      "key": {
                        "type": "Identifier",
                        "name": "darkslategray"
                      },
                      "value": {
                        "type": "Literal",
                        "value": 3100495,
                        "raw": "0x2f4f4f"
                      },
                      "kind": "init"
                    },
                    {
                      "type": "Property",
                      "key": {
                        "type": "Identifier",
                        "name": "darkslategrey"
                      },
                      "value": {
                        "type": "Literal",
                        "value": 3100495,
                        "raw": "0x2f4f4f"
                      },
                      "kind": "init"
                    },
                    {
                      "type": "Property",
                      "key": {
                        "type": "Identifier",
                        "name": "darkturquoise"
                      },
                      "value": {
                        "type": "Literal",
                        "value": 52945,
                        "raw": "0x00ced1"
                      },
                      "kind": "init"
                    },
                    {
                      "type": "Property",
                      "key": {
                        "type": "Identifier",
                        "name": "darkviolet"
                      },
                      "value": {
                        "type": "Literal",
                        "value": 9699539,
                        "raw": "0x9400d3"
                      },
                      "kind": "init"
                    },
                    {
                      "type": "Property",
                      "key": {
                        "type": "Identifier",
                        "name": "deeppink"
                      },
                      "value": {
                        "type": "Literal",
                        "value": 16716947,
                        "raw": "0xff1493"
                      },
                      "kind": "init"
                    },
                    {
                      "type": "Property",
                      "key": {
                        "type": "Identifier",
                        "name": "deepskyblue"
                      },
                      "value": {
                        "type": "Literal",
                        "value": 49151,
                        "raw": "0x00bfff"
                      },
                      "kind": "init"
                    },
                    {
                      "type": "Property",
                      "key": {
                        "type": "Identifier",
                        "name": "dimgray"
                      },
                      "value": {
                        "type": "Literal",
                        "value": 6908265,
                        "raw": "0x696969"
                      },
                      "kind": "init"
                    },
                    {
                      "type": "Property",
                      "key": {
                        "type": "Identifier",
                        "name": "dimgrey"
                      },
                      "value": {
                        "type": "Literal",
                        "value": 6908265,
                        "raw": "0x696969"
                      },
                      "kind": "init"
                    },
                    {
                      "type": "Property",
                      "key": {
                        "type": "Identifier",
                        "name": "dodgerblue"
                      },
                      "value": {
                        "type": "Literal",
                        "value": 2003199,
                        "raw": "0x1e90ff"
                      },
                      "kind": "init"
                    },
                    {
                      "type": "Property",
                      "key": {
                        "type": "Identifier",
                        "name": "firebrick"
                      },
                      "value": {
                        "type": "Literal",
                        "value": 11674146,
                        "raw": "0xb22222"
                      },
                      "kind": "init"
                    },
                    {
                      "type": "Property",
                      "key": {
                        "type": "Identifier",
                        "name": "floralwhite"
                      },
                      "value": {
                        "type": "Literal",
                        "value": 16775920,
                        "raw": "0xfffaf0"
                      },
                      "kind": "init"
                    },
                    {
                      "type": "Property",
                      "key": {
                        "type": "Identifier",
                        "name": "forestgreen"
                      },
                      "value": {
                        "type": "Literal",
                        "value": 2263842,
                        "raw": "0x228b22"
                      },
                      "kind": "init"
                    },
                    {
                      "type": "Property",
                      "key": {
                        "type": "Identifier",
                        "name": "fuchsia"
                      },
                      "value": {
                        "type": "Literal",
                        "value": 16711935,
                        "raw": "0xff00ff"
                      },
                      "kind": "init"
                    },
                    {
                      "type": "Property",
                      "key": {
                        "type": "Identifier",
                        "name": "gainsboro"
                      },
                      "value": {
                        "type": "Literal",
                        "value": 14474460,
                        "raw": "0xdcdcdc"
                      },
                      "kind": "init"
                    },
                    {
                      "type": "Property",
                      "key": {
                        "type": "Identifier",
                        "name": "ghostwhite"
                      },
                      "value": {
                        "type": "Literal",
                        "value": 16316671,
                        "raw": "0xf8f8ff"
                      },
                      "kind": "init"
                    },
                    {
                      "type": "Property",
                      "key": {
                        "type": "Identifier",
                        "name": "gold"
                      },
                      "value": {
                        "type": "Literal",
                        "value": 16766720,
                        "raw": "0xffd700"
                      },
                      "kind": "init"
                    },
                    {
                      "type": "Property",
                      "key": {
                        "type": "Identifier",
                        "name": "goldenrod"
                      },
                      "value": {
                        "type": "Literal",
                        "value": 14329120,
                        "raw": "0xdaa520"
                      },
                      "kind": "init"
                    },
                    {
                      "type": "Property",
                      "key": {
                        "type": "Identifier",
                        "name": "gray"
                      },
                      "value": {
                        "type": "Literal",
                        "value": 8421504,
                        "raw": "0x808080"
                      },
                      "kind": "init"
                    },
                    {
                      "type": "Property",
                      "key": {
                        "type": "Identifier",
                        "name": "green"
                      },
                      "value": {
                        "type": "Literal",
                        "value": 32768,
                        "raw": "0x008000"
                      },
                      "kind": "init"
                    },
                    {
                      "type": "Property",
                      "key": {
                        "type": "Identifier",
                        "name": "greenyellow"
                      },
                      "value": {
                        "type": "Literal",
                        "value": 11403055,
                        "raw": "0xadff2f"
                      },
                      "kind": "init"
                    },
                    {
                      "type": "Property",
                      "key": {
                        "type": "Identifier",
                        "name": "grey"
                      },
                      "value": {
                        "type": "Literal",
                        "value": 8421504,
                        "raw": "0x808080"
                      },
                      "kind": "init"
                    },
                    {
                      "type": "Property",
                      "key": {
                        "type": "Identifier",
                        "name": "honeydew"
                      },
                      "value": {
                        "type": "Literal",
                        "value": 15794160,
                        "raw": "0xf0fff0"
                      },
                      "kind": "init"
                    },
                    {
                      "type": "Property",
                      "key": {
                        "type": "Identifier",
                        "name": "hotpink"
                      },
                      "value": {
                        "type": "Literal",
                        "value": 16738740,
                        "raw": "0xff69b4"
                      },
                      "kind": "init"
                    },
                    {
                      "type": "Property",
                      "key": {
                        "type": "Identifier",
                        "name": "indianred"
                      },
                      "value": {
                        "type": "Literal",
                        "value": 13458524,
                        "raw": "0xcd5c5c"
                      },
                      "kind": "init"
                    },
                    {
                      "type": "Property",
                      "key": {
                        "type": "Identifier",
                        "name": "indigo"
                      },
                      "value": {
                        "type": "Literal",
                        "value": 4915330,
                        "raw": "0x4b0082"
                      },
                      "kind": "init"
                    },
                    {
                      "type": "Property",
                      "key": {
                        "type": "Identifier",
                        "name": "ivory"
                      },
                      "value": {
                        "type": "Literal",
                        "value": 16777200,
                        "raw": "0xfffff0"
                      },
                      "kind": "init"
                    },
                    {
                      "type": "Property",
                      "key": {
                        "type": "Identifier",
                        "name": "khaki"
                      },
                      "value": {
                        "type": "Literal",
                        "value": 15787660,
                        "raw": "0xf0e68c"
                      },
                      "kind": "init"
                    },
                    {
                      "type": "Property",
                      "key": {
                        "type": "Identifier",
                        "name": "lavender"
                      },
                      "value": {
                        "type": "Literal",
                        "value": 15132410,
                        "raw": "0xe6e6fa"
                      },
                      "kind": "init"
                    },
                    {
                      "type": "Property",
                      "key": {
                        "type": "Identifier",
                        "name": "lavenderblush"
                      },
                      "value": {
                        "type": "Literal",
                        "value": 16773365,
                        "raw": "0xfff0f5"
                      },
                      "kind": "init"
                    },
                    {
                      "type": "Property",
                      "key": {
                        "type": "Identifier",
                        "name": "lawngreen"
                      },
                      "value": {
                        "type": "Literal",
                        "value": 8190976,
                        "raw": "0x7cfc00"
                      },
                      "kind": "init"
                    },
                    {
                      "type": "Property",
                      "key": {
                        "type": "Identifier",
                        "name": "lemonchiffon"
                      },
                      "value": {
                        "type": "Literal",
                        "value": 16775885,
                        "raw": "0xfffacd"
                      },
                      "kind": "init"
                    },
                    {
                      "type": "Property",
                      "key": {
                        "type": "Identifier",
                        "name": "lightblue"
                      },
                      "value": {
                        "type": "Literal",
                        "value": 11393254,
                        "raw": "0xadd8e6"
                      },
                      "kind": "init"
                    },
                    {
                      "type": "Property",
                      "key": {
                        "type": "Identifier",
                        "name": "lightcoral"
                      },
                      "value": {
                        "type": "Literal",
                        "value": 15761536,
                        "raw": "0xf08080"
                      },
                      "kind": "init"
                    },
                    {
                      "type": "Property",
                      "key": {
                        "type": "Identifier",
                        "name": "lightcyan"
                      },
                      "value": {
                        "type": "Literal",
                        "value": 14745599,
                        "raw": "0xe0ffff"
                      },
                      "kind": "init"
                    },
                    {
                      "type": "Property",
                      "key": {
                        "type": "Identifier",
                        "name": "lightgoldenrodyellow"
                      },
                      "value": {
                        "type": "Literal",
                        "value": 16448210,
                        "raw": "0xfafad2"
                      },
                      "kind": "init"
                    },
                    {
                      "type": "Property",
                      "key": {
                        "type": "Identifier",
                        "name": "lightgray"
                      },
                      "value": {
                        "type": "Literal",
                        "value": 13882323,
                        "raw": "0xd3d3d3"
                      },
                      "kind": "init"
                    },
                    {
                      "type": "Property",
                      "key": {
                        "type": "Identifier",
                        "name": "lightgreen"
                      },
                      "value": {
                        "type": "Literal",
                        "value": 9498256,
                        "raw": "0x90ee90"
                      },
                      "kind": "init"
                    },
                    {
                      "type": "Property",
                      "key": {
                        "type": "Identifier",
                        "name": "lightgrey"
                      },
                      "value": {
                        "type": "Literal",
                        "value": 13882323,
                        "raw": "0xd3d3d3"
                      },
                      "kind": "init"
                    },
                    {
                      "type": "Property",
                      "key": {
                        "type": "Identifier",
                        "name": "lightpink"
                      },
                      "value": {
                        "type": "Literal",
                        "value": 16758465,
                        "raw": "0xffb6c1"
                      },
                      "kind": "init"
                    },
                    {
                      "type": "Property",
                      "key": {
                        "type": "Identifier",
                        "name": "lightsalmon"
                      },
                      "value": {
                        "type": "Literal",
                        "value": 16752762,
                        "raw": "0xffa07a"
                      },
                      "kind": "init"
                    },
                    {
                      "type": "Property",
                      "key": {
                        "type": "Identifier",
                        "name": "lightseagreen"
                      },
                      "value": {
                        "type": "Literal",
                        "value": 2142890,
                        "raw": "0x20b2aa"
                      },
                      "kind": "init"
                    },
                    {
                      "type": "Property",
                      "key": {
                        "type": "Identifier",
                        "name": "lightskyblue"
                      },
                      "value": {
                        "type": "Literal",
                        "value": 8900346,
                        "raw": "0x87cefa"
                      },
                      "kind": "init"
                    },
                    {
                      "type": "Property",
                      "key": {
                        "type": "Identifier",
                        "name": "lightslategray"
                      },
                      "value": {
                        "type": "Literal",
                        "value": 7833753,
                        "raw": "0x778899"
                      },
                      "kind": "init"
                    },
                    {
                      "type": "Property",
                      "key": {
                        "type": "Identifier",
                        "name": "lightslategrey"
                      },
                      "value": {
                        "type": "Literal",
                        "value": 7833753,
                        "raw": "0x778899"
                      },
                      "kind": "init"
                    },
                    {
                      "type": "Property",
                      "key": {
                        "type": "Identifier",
                        "name": "lightsteelblue"
                      },
                      "value": {
                        "type": "Literal",
                        "value": 11584734,
                        "raw": "0xb0c4de"
                      },
                      "kind": "init"
                    },
                    {
                      "type": "Property",
                      "key": {
                        "type": "Identifier",
                        "name": "lightyellow"
                      },
                      "value": {
                        "type": "Literal",
                        "value": 16777184,
                        "raw": "0xffffe0"
                      },
                      "kind": "init"
                    },
                    {
                      "type": "Property",
                      "key": {
                        "type": "Identifier",
                        "name": "lime"
                      },
                      "value": {
                        "type": "Literal",
                        "value": 65280,
                        "raw": "0x00ff00"
                      },
                      "kind": "init"
                    },
                    {
                      "type": "Property",
                      "key": {
                        "type": "Identifier",
                        "name": "limegreen"
                      },
                      "value": {
                        "type": "Literal",
                        "value": 3329330,
                        "raw": "0x32cd32"
                      },
                      "kind": "init"
                    },
                    {
                      "type": "Property",
                      "key": {
                        "type": "Identifier",
                        "name": "linen"
                      },
                      "value": {
                        "type": "Literal",
                        "value": 16445670,
                        "raw": "0xfaf0e6"
                      },
                      "kind": "init"
                    },
                    {
                      "type": "Property",
                      "key": {
                        "type": "Identifier",
                        "name": "magenta"
                      },
                      "value": {
                        "type": "Literal",
                        "value": 16711935,
                        "raw": "0xff00ff"
                      },
                      "kind": "init"
                    },
                    {
                      "type": "Property",
                      "key": {
                        "type": "Identifier",
                        "name": "maroon"
                      },
                      "value": {
                        "type": "Literal",
                        "value": 8388608,
                        "raw": "0x800000"
                      },
                      "kind": "init"
                    },
                    {
                      "type": "Property",
                      "key": {
                        "type": "Identifier",
                        "name": "mediumaquamarine"
                      },
                      "value": {
                        "type": "Literal",
                        "value": 6737322,
                        "raw": "0x66cdaa"
                      },
                      "kind": "init"
                    },
                    {
                      "type": "Property",
                      "key": {
                        "type": "Identifier",
                        "name": "mediumblue"
                      },
                      "value": {
                        "type": "Literal",
                        "value": 205,
                        "raw": "0x0000cd"
                      },
                      "kind": "init"
                    },
                    {
                      "type": "Property",
                      "key": {
                        "type": "Identifier",
                        "name": "mediumorchid"
                      },
                      "value": {
                        "type": "Literal",
                        "value": 12211667,
                        "raw": "0xba55d3"
                      },
                      "kind": "init"
                    },
                    {
                      "type": "Property",
                      "key": {
                        "type": "Identifier",
                        "name": "mediumpurple"
                      },
                      "value": {
                        "type": "Literal",
                        "value": 9662683,
                        "raw": "0x9370db"
                      },
                      "kind": "init"
                    },
                    {
                      "type": "Property",
                      "key": {
                        "type": "Identifier",
                        "name": "mediumseagreen"
                      },
                      "value": {
                        "type": "Literal",
                        "value": 3978097,
                        "raw": "0x3cb371"
                      },
                      "kind": "init"
                    },
                    {
                      "type": "Property",
                      "key": {
                        "type": "Identifier",
                        "name": "mediumslateblue"
                      },
                      "value": {
                        "type": "Literal",
                        "value": 8087790,
                        "raw": "0x7b68ee"
                      },
                      "kind": "init"
                    },
                    {
                      "type": "Property",
                      "key": {
                        "type": "Identifier",
                        "name": "mediumspringgreen"
                      },
                      "value": {
                        "type": "Literal",
                        "value": 64154,
                        "raw": "0x00fa9a"
                      },
                      "kind": "init"
                    },
                    {
                      "type": "Property",
                      "key": {
                        "type": "Identifier",
                        "name": "mediumturquoise"
                      },
                      "value": {
                        "type": "Literal",
                        "value": 4772300,
                        "raw": "0x48d1cc"
                      },
                      "kind": "init"
                    },
                    {
                      "type": "Property",
                      "key": {
                        "type": "Identifier",
                        "name": "mediumvioletred"
                      },
                      "value": {
                        "type": "Literal",
                        "value": 13047173,
                        "raw": "0xc71585"
                      },
                      "kind": "init"
                    },
                    {
                      "type": "Property",
                      "key": {
                        "type": "Identifier",
                        "name": "midnightblue"
                      },
                      "value": {
                        "type": "Literal",
                        "value": 1644912,
                        "raw": "0x191970"
                      },
                      "kind": "init"
                    },
                    {
                      "type": "Property",
                      "key": {
                        "type": "Identifier",
                        "name": "mintcream"
                      },
                      "value": {
                        "type": "Literal",
                        "value": 16121850,
                        "raw": "0xf5fffa"
                      },
                      "kind": "init"
                    },
                    {
                      "type": "Property",
                      "key": {
                        "type": "Identifier",
                        "name": "mistyrose"
                      },
                      "value": {
                        "type": "Literal",
                        "value": 16770273,
                        "raw": "0xffe4e1"
                      },
                      "kind": "init"
                    },
                    {
                      "type": "Property",
                      "key": {
                        "type": "Identifier",
                        "name": "moccasin"
                      },
                      "value": {
                        "type": "Literal",
                        "value": 16770229,
                        "raw": "0xffe4b5"
                      },
                      "kind": "init"
                    },
                    {
                      "type": "Property",
                      "key": {
                        "type": "Identifier",
                        "name": "navajowhite"
                      },
                      "value": {
                        "type": "Literal",
                        "value": 16768685,
                        "raw": "0xffdead"
                      },
                      "kind": "init"
                    },
                    {
                      "type": "Property",
                      "key": {
                        "type": "Identifier",
                        "name": "navy"
                      },
                      "value": {
                        "type": "Literal",
                        "value": 128,
                        "raw": "0x000080"
                      },
                      "kind": "init"
                    },
                    {
                      "type": "Property",
                      "key": {
                        "type": "Identifier",
                        "name": "oldlace"
                      },
                      "value": {
                        "type": "Literal",
                        "value": 16643558,
                        "raw": "0xfdf5e6"
                      },
                      "kind": "init"
                    },
                    {
                      "type": "Property",
                      "key": {
                        "type": "Identifier",
                        "name": "olive"
                      },
                      "value": {
                        "type": "Literal",
                        "value": 8421376,
                        "raw": "0x808000"
                      },
                      "kind": "init"
                    },
                    {
                      "type": "Property",
                      "key": {
                        "type": "Identifier",
                        "name": "olivedrab"
                      },
                      "value": {
                        "type": "Literal",
                        "value": 7048739,
                        "raw": "0x6b8e23"
                      },
                      "kind": "init"
                    },
                    {
                      "type": "Property",
                      "key": {
                        "type": "Identifier",
                        "name": "orange"
                      },
                      "value": {
                        "type": "Literal",
                        "value": 16753920,
                        "raw": "0xffa500"
                      },
                      "kind": "init"
                    },
                    {
                      "type": "Property",
                      "key": {
                        "type": "Identifier",
                        "name": "orangered"
                      },
                      "value": {
                        "type": "Literal",
                        "value": 16729344,
                        "raw": "0xff4500"
                      },
                      "kind": "init"
                    },
                    {
                      "type": "Property",
                      "key": {
                        "type": "Identifier",
                        "name": "orchid"
                      },
                      "value": {
                        "type": "Literal",
                        "value": 14315734,
                        "raw": "0xda70d6"
                      },
                      "kind": "init"
                    },
                    {
                      "type": "Property",
                      "key": {
                        "type": "Identifier",
                        "name": "palegoldenrod"
                      },
                      "value": {
                        "type": "Literal",
                        "value": 15657130,
                        "raw": "0xeee8aa"
                      },
                      "kind": "init"
                    },
                    {
                      "type": "Property",
                      "key": {
                        "type": "Identifier",
                        "name": "palegreen"
                      },
                      "value": {
                        "type": "Literal",
                        "value": 10025880,
                        "raw": "0x98fb98"
                      },
                      "kind": "init"
                    },
                    {
                      "type": "Property",
                      "key": {
                        "type": "Identifier",
                        "name": "paleturquoise"
                      },
                      "value": {
                        "type": "Literal",
                        "value": 11529966,
                        "raw": "0xafeeee"
                      },
                      "kind": "init"
                    },
                    {
                      "type": "Property",
                      "key": {
                        "type": "Identifier",
                        "name": "palevioletred"
                      },
                      "value": {
                        "type": "Literal",
                        "value": 14381203,
                        "raw": "0xdb7093"
                      },
                      "kind": "init"
                    },
                    {
                      "type": "Property",
                      "key": {
                        "type": "Identifier",
                        "name": "papayawhip"
                      },
                      "value": {
                        "type": "Literal",
                        "value": 16773077,
                        "raw": "0xffefd5"
                      },
                      "kind": "init"
                    },
                    {
                      "type": "Property",
                      "key": {
                        "type": "Identifier",
                        "name": "peachpuff"
                      },
                      "value": {
                        "type": "Literal",
                        "value": 16767673,
                        "raw": "0xffdab9"
                      },
                      "kind": "init"
                    },
                    {
                      "type": "Property",
                      "key": {
                        "type": "Identifier",
                        "name": "peru"
                      },
                      "value": {
                        "type": "Literal",
                        "value": 13468991,
                        "raw": "0xcd853f"
                      },
                      "kind": "init"
                    },
                    {
                      "type": "Property",
                      "key": {
                        "type": "Identifier",
                        "name": "pink"
                      },
                      "value": {
                        "type": "Literal",
                        "value": 16761035,
                        "raw": "0xffc0cb"
                      },
                      "kind": "init"
                    },
                    {
                      "type": "Property",
                      "key": {
                        "type": "Identifier",
                        "name": "plum"
                      },
                      "value": {
                        "type": "Literal",
                        "value": 14524637,
                        "raw": "0xdda0dd"
                      },
                      "kind": "init"
                    },
                    {
                      "type": "Property",
                      "key": {
                        "type": "Identifier",
                        "name": "powderblue"
                      },
                      "value": {
                        "type": "Literal",
                        "value": 11591910,
                        "raw": "0xb0e0e6"
                      },
                      "kind": "init"
                    },
                    {
                      "type": "Property",
                      "key": {
                        "type": "Identifier",
                        "name": "purple"
                      },
                      "value": {
                        "type": "Literal",
                        "value": 8388736,
                        "raw": "0x800080"
                      },
                      "kind": "init"
                    },
                    {
                      "type": "Property",
                      "key": {
                        "type": "Identifier",
                        "name": "red"
                      },
                      "value": {
                        "type": "Literal",
                        "value": 16711680,
                        "raw": "0xff0000"
                      },
                      "kind": "init"
                    },
                    {
                      "type": "Property",
                      "key": {
                        "type": "Identifier",
                        "name": "rosybrown"
                      },
                      "value": {
                        "type": "Literal",
                        "value": 12357519,
                        "raw": "0xbc8f8f"
                      },
                      "kind": "init"
                    },
                    {
                      "type": "Property",
                      "key": {
                        "type": "Identifier",
                        "name": "royalblue"
                      },
                      "value": {
                        "type": "Literal",
                        "value": 4286945,
                        "raw": "0x4169e1"
                      },
                      "kind": "init"
                    },
                    {
                      "type": "Property",
                      "key": {
                        "type": "Identifier",
                        "name": "saddlebrown"
                      },
                      "value": {
                        "type": "Literal",
                        "value": 9127187,
                        "raw": "0x8b4513"
                      },
                      "kind": "init"
                    },
                    {
                      "type": "Property",
                      "key": {
                        "type": "Identifier",
                        "name": "salmon"
                      },
                      "value": {
                        "type": "Literal",
                        "value": 16416882,
                        "raw": "0xfa8072"
                      },
                      "kind": "init"
                    },
                    {
                      "type": "Property",
                      "key": {
                        "type": "Identifier",
                        "name": "sandybrown"
                      },
                      "value": {
                        "type": "Literal",
                        "value": 16032864,
                        "raw": "0xf4a460"
                      },
                      "kind": "init"
                    },
                    {
                      "type": "Property",
                      "key": {
                        "type": "Identifier",
                        "name": "seagreen"
                      },
                      "value": {
                        "type": "Literal",
                        "value": 3050327,
                        "raw": "0x2e8b57"
                      },
                      "kind": "init"
                    },
                    {
                      "type": "Property",
                      "key": {
                        "type": "Identifier",
                        "name": "seashell"
                      },
                      "value": {
                        "type": "Literal",
                        "value": 16774638,
                        "raw": "0xfff5ee"
                      },
                      "kind": "init"
                    },
                    {
                      "type": "Property",
                      "key": {
                        "type": "Identifier",
                        "name": "sienna"
                      },
                      "value": {
                        "type": "Literal",
                        "value": 10506797,
                        "raw": "0xa0522d"
                      },
                      "kind": "init"
                    },
                    {
                      "type": "Property",
                      "key": {
                        "type": "Identifier",
                        "name": "silver"
                      },
                      "value": {
                        "type": "Literal",
                        "value": 12632256,
                        "raw": "0xc0c0c0"
                      },
                      "kind": "init"
                    },
                    {
                      "type": "Property",
                      "key": {
                        "type": "Identifier",
                        "name": "skyblue"
                      },
                      "value": {
                        "type": "Literal",
                        "value": 8900331,
                        "raw": "0x87ceeb"
                      },
                      "kind": "init"
                    },
                    {
                      "type": "Property",
                      "key": {
                        "type": "Identifier",
                        "name": "slateblue"
                      },
                      "value": {
                        "type": "Literal",
                        "value": 6970061,
                        "raw": "0x6a5acd"
                      },
                      "kind": "init"
                    },
                    {
                      "type": "Property",
                      "key": {
                        "type": "Identifier",
                        "name": "slategray"
                      },
                      "value": {
                        "type": "Literal",
                        "value": 7372944,
                        "raw": "0x708090"
                      },
                      "kind": "init"
                    },
                    {
                      "type": "Property",
                      "key": {
                        "type": "Identifier",
                        "name": "slategrey"
                      },
                      "value": {
                        "type": "Literal",
                        "value": 7372944,
                        "raw": "0x708090"
                      },
                      "kind": "init"
                    },
                    {
                      "type": "Property",
                      "key": {
                        "type": "Identifier",
                        "name": "snow"
                      },
                      "value": {
                        "type": "Literal",
                        "value": 16775930,
                        "raw": "0xfffafa"
                      },
                      "kind": "init"
                    },
                    {
                      "type": "Property",
                      "key": {
                        "type": "Identifier",
                        "name": "springgreen"
                      },
                      "value": {
                        "type": "Literal",
                        "value": 65407,
                        "raw": "0x00ff7f"
                      },
                      "kind": "init"
                    },
                    {
                      "type": "Property",
                      "key": {
                        "type": "Identifier",
                        "name": "steelblue"
                      },
                      "value": {
                        "type": "Literal",
                        "value": 4620980,
                        "raw": "0x4682b4"
                      },
                      "kind": "init"
                    },
                    {
                      "type": "Property",
                      "key": {
                        "type": "Identifier",
                        "name": "tan"
                      },
                      "value": {
                        "type": "Literal",
                        "value": 13808780,
                        "raw": "0xd2b48c"
                      },
                      "kind": "init"
                    },
                    {
                      "type": "Property",
                      "key": {
                        "type": "Identifier",
                        "name": "teal"
                      },
                      "value": {
                        "type": "Literal",
                        "value": 32896,
                        "raw": "0x008080"
                      },
                      "kind": "init"
                    },
                    {
                      "type": "Property",
                      "key": {
                        "type": "Identifier",
                        "name": "thistle"
                      },
                      "value": {
                        "type": "Literal",
                        "value": 14204888,
                        "raw": "0xd8bfd8"
                      },
                      "kind": "init"
                    },
                    {
                      "type": "Property",
                      "key": {
                        "type": "Identifier",
                        "name": "tomato"
                      },
                      "value": {
                        "type": "Literal",
                        "value": 16737095,
                        "raw": "0xff6347"
                      },
                      "kind": "init"
                    },
                    {
                      "type": "Property",
                      "key": {
                        "type": "Identifier",
                        "name": "turquoise"
                      },
                      "value": {
                        "type": "Literal",
                        "value": 4251856,
                        "raw": "0x40e0d0"
                      },
                      "kind": "init"
                    },
                    {
                      "type": "Property",
                      "key": {
                        "type": "Identifier",
                        "name": "violet"
                      },
                      "value": {
                        "type": "Literal",
                        "value": 15631086,
                        "raw": "0xee82ee"
                      },
                      "kind": "init"
                    },
                    {
                      "type": "Property",
                      "key": {
                        "type": "Identifier",
                        "name": "wheat"
                      },
                      "value": {
                        "type": "Literal",
                        "value": 16113331,
                        "raw": "0xf5deb3"
                      },
                      "kind": "init"
                    },
                    {
                      "type": "Property",
                      "key": {
                        "type": "Identifier",
                        "name": "white"
                      },
                      "value": {
                        "type": "Literal",
                        "value": 16777215,
                        "raw": "0xffffff"
                      },
                      "kind": "init"
                    },
                    {
                      "type": "Property",
                      "key": {
                        "type": "Identifier",
                        "name": "whitesmoke"
                      },
                      "value": {
                        "type": "Literal",
                        "value": 16119285,
                        "raw": "0xf5f5f5"
                      },
                      "kind": "init"
                    },
                    {
                      "type": "Property",
                      "key": {
                        "type": "Identifier",
                        "name": "yellow"
                      },
                      "value": {
                        "type": "Literal",
                        "value": 16776960,
                        "raw": "0xffff00"
                      },
                      "kind": "init"
                    },
                    {
                      "type": "Property",
                      "key": {
                        "type": "Identifier",
                        "name": "yellowgreen"
                      },
                      "value": {
                        "type": "Literal",
                        "value": 10145074,
                        "raw": "0x9acd32"
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
      {
        "type": "ExpressionStatement",
        "expression": {
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
              "name": "forEach"
            }
          },
          "arguments": [
            {
              "type": "FunctionExpression",
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "name": "key"
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
                          "name": "set"
                        }
                      },
                      "arguments": [
                        {
                          "type": "Identifier",
                          "name": "key"
                        },
                        {
                          "type": "CallExpression",
                          "callee": {
                            "type": "Identifier",
                            "name": "d3_rgbNumber"
                          },
                          "arguments": [
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
          ]
        }
      }
    ]
  },
  "src": "d3.rgb = d3_rgb;\nfunction d3_rgb(r, g, b) {\n    return this instanceof d3_rgb ? void (this.r = ~~r, this.g = ~~g, this.b = ~~b) : arguments.length < 2 ? r instanceof d3_rgb ? new d3_rgb(r.r, r.g, r.b) : d3_rgb_parse('' + r, d3_rgb, d3_hsl_rgb) : new d3_rgb(r, g, b);\n}\nfunction d3_rgbNumber(value) {\n    return new d3_rgb(value >> 16, value >> 8 & 255, value & 255);\n}\nfunction d3_rgbString(value) {\n    return d3_rgbNumber(value) + '';\n}\nvar d3_rgbPrototype = new d3_color();\nvar d3_rgb.prototype = new d3_color();\nd3_rgbPrototype.brighter = function (k) {\n    k = Math.pow(0.7, arguments.length ? k : 1);\n    var r = this.r, g = this.g, b = this.b, i = 30;\n    if (!r && !g && !b)\n        return new d3_rgb(i, i, i);\n    if (r && r < i)\n        r = i;\n    if (g && g < i)\n        g = i;\n    if (b && b < i)\n        b = i;\n    return new d3_rgb(Math.min(255, r / k), Math.min(255, g / k), Math.min(255, b / k));\n};\nd3_rgbPrototype.darker = function (k) {\n    k = Math.pow(0.7, arguments.length ? k : 1);\n    return new d3_rgb(k * this.r, k * this.g, k * this.b);\n};\nd3_rgbPrototype.hsl = function () {\n    return d3_rgb_hsl(this.r, this.g, this.b);\n};\nd3_rgbPrototype.toString = function () {\n    return '#' + d3_rgb_hex(this.r) + d3_rgb_hex(this.g) + d3_rgb_hex(this.b);\n};\nfunction d3_rgb_hex(v) {\n    return v < 16 ? '0' + Math.max(0, v).toString(16) : Math.min(255, v).toString(16);\n}\nfunction d3_rgb_parse(format, rgb, hsl) {\n    var r = 0, g = 0, b = 0, m1, m2, color;\n    m1 = /([a-z]+)\\((.*)\\)/i.exec(format);\n    if (m1) {\n        m2 = m1[2].split(',');\n        switch (m1[1]) {\n        case 'hsl': {\n                return hsl(parseFloat(m2[0]), parseFloat(m2[1]) / 100, parseFloat(m2[2]) / 100);\n            }\n        case 'rgb': {\n                return rgb(d3_rgb_parseNumber(m2[0]), d3_rgb_parseNumber(m2[1]), d3_rgb_parseNumber(m2[2]));\n            }\n        }\n    }\n    if (color = d3_rgb_names.get(format))\n        return rgb(color.r, color.g, color.b);\n    if (format != null && format.charAt(0) === '#' && !isNaN(color = parseInt(format.substring(1), 16))) {\n        if (format.length === 4) {\n            r = (color & 3840) >> 4;\n            r = r >> 4 | r;\n            g = color & 240;\n            g = g >> 4 | g;\n            b = color & 15;\n            b = b << 4 | b;\n        } else if (format.length === 7) {\n            r = (color & 16711680) >> 16;\n            g = (color & 65280) >> 8;\n            b = color & 255;\n        }\n    }\n    return rgb(r, g, b);\n}\nfunction d3_rgb_hsl(r, g, b) {\n    var min = Math.min(r /= 255, g /= 255, b /= 255), max = Math.max(r, g, b), d = max - min, h, s, l = (max + min) / 2;\n    if (d) {\n        s = l < 0.5 ? d / (max + min) : d / (2 - max - min);\n        if (r == max)\n            h = (g - b) / d + (g < b ? 6 : 0);\n        else if (g == max)\n            h = (b - r) / d + 2;\n        else\n            h = (r - g) / d + 4;\n        h *= 60;\n    } else {\n        h = NaN;\n        s = l > 0 && l < 1 ? 0 : h;\n    }\n    return new d3_hsl(h, s, l);\n}\nfunction d3_rgb_lab(r, g, b) {\n    r = d3_rgb_xyz(r);\n    g = d3_rgb_xyz(g);\n    b = d3_rgb_xyz(b);\n    var x = d3_xyz_lab((0.4124564 * r + 0.3575761 * g + 0.1804375 * b) / d3_lab_X), y = d3_xyz_lab((0.2126729 * r + 0.7151522 * g + 0.072175 * b) / d3_lab_Y), z = d3_xyz_lab((0.0193339 * r + 0.119192 * g + 0.9503041 * b) / d3_lab_Z);\n    return d3_lab(116 * y - 16, 500 * (x - y), 200 * (y - z));\n}\nfunction d3_rgb_xyz(r) {\n    return (r /= 255) <= 0.04045 ? r / 12.92 : Math.pow((r + 0.055) / 1.055, 2.4);\n}\nfunction d3_rgb_parseNumber(c) {\n    var f = parseFloat(c);\n    return c.charAt(c.length - 1) === '%' ? Math.round(f * 2.55) : f;\n}\nvar d3_rgb_names = d3.map({\n        aliceblue: 15792383,\n        antiquewhite: 16444375,\n        aqua: 65535,\n        aquamarine: 8388564,\n        azure: 15794175,\n        beige: 16119260,\n        bisque: 16770244,\n        black: 0,\n        blanchedalmond: 16772045,\n        blue: 255,\n        blueviolet: 9055202,\n        brown: 10824234,\n        burlywood: 14596231,\n        cadetblue: 6266528,\n        chartreuse: 8388352,\n        chocolate: 13789470,\n        coral: 16744272,\n        cornflowerblue: 6591981,\n        cornsilk: 16775388,\n        crimson: 14423100,\n        cyan: 65535,\n        darkblue: 139,\n        darkcyan: 35723,\n        darkgoldenrod: 12092939,\n        darkgray: 11119017,\n        darkgreen: 25600,\n        darkgrey: 11119017,\n        darkkhaki: 12433259,\n        darkmagenta: 9109643,\n        darkolivegreen: 5597999,\n        darkorange: 16747520,\n        darkorchid: 10040012,\n        darkred: 9109504,\n        darksalmon: 15308410,\n        darkseagreen: 9419919,\n        darkslateblue: 4734347,\n        darkslategray: 3100495,\n        darkslategrey: 3100495,\n        darkturquoise: 52945,\n        darkviolet: 9699539,\n        deeppink: 16716947,\n        deepskyblue: 49151,\n        dimgray: 6908265,\n        dimgrey: 6908265,\n        dodgerblue: 2003199,\n        firebrick: 11674146,\n        floralwhite: 16775920,\n        forestgreen: 2263842,\n        fuchsia: 16711935,\n        gainsboro: 14474460,\n        ghostwhite: 16316671,\n        gold: 16766720,\n        goldenrod: 14329120,\n        gray: 8421504,\n        green: 32768,\n        greenyellow: 11403055,\n        grey: 8421504,\n        honeydew: 15794160,\n        hotpink: 16738740,\n        indianred: 13458524,\n        indigo: 4915330,\n        ivory: 16777200,\n        khaki: 15787660,\n        lavender: 15132410,\n        lavenderblush: 16773365,\n        lawngreen: 8190976,\n        lemonchiffon: 16775885,\n        lightblue: 11393254,\n        lightcoral: 15761536,\n        lightcyan: 14745599,\n        lightgoldenrodyellow: 16448210,\n        lightgray: 13882323,\n        lightgreen: 9498256,\n        lightgrey: 13882323,\n        lightpink: 16758465,\n        lightsalmon: 16752762,\n        lightseagreen: 2142890,\n        lightskyblue: 8900346,\n        lightslategray: 7833753,\n        lightslategrey: 7833753,\n        lightsteelblue: 11584734,\n        lightyellow: 16777184,\n        lime: 65280,\n        limegreen: 3329330,\n        linen: 16445670,\n        magenta: 16711935,\n        maroon: 8388608,\n        mediumaquamarine: 6737322,\n        mediumblue: 205,\n        mediumorchid: 12211667,\n        mediumpurple: 9662683,\n        mediumseagreen: 3978097,\n        mediumslateblue: 8087790,\n        mediumspringgreen: 64154,\n        mediumturquoise: 4772300,\n        mediumvioletred: 13047173,\n        midnightblue: 1644912,\n        mintcream: 16121850,\n        mistyrose: 16770273,\n        moccasin: 16770229,\n        navajowhite: 16768685,\n        navy: 128,\n        oldlace: 16643558,\n        olive: 8421376,\n        olivedrab: 7048739,\n        orange: 16753920,\n        orangered: 16729344,\n        orchid: 14315734,\n        palegoldenrod: 15657130,\n        palegreen: 10025880,\n        paleturquoise: 11529966,\n        palevioletred: 14381203,\n        papayawhip: 16773077,\n        peachpuff: 16767673,\n        peru: 13468991,\n        pink: 16761035,\n        plum: 14524637,\n        powderblue: 11591910,\n        purple: 8388736,\n        red: 16711680,\n        rosybrown: 12357519,\n        royalblue: 4286945,\n        saddlebrown: 9127187,\n        salmon: 16416882,\n        sandybrown: 16032864,\n        seagreen: 3050327,\n        seashell: 16774638,\n        sienna: 10506797,\n        silver: 12632256,\n        skyblue: 8900331,\n        slateblue: 6970061,\n        slategray: 7372944,\n        slategrey: 7372944,\n        snow: 16775930,\n        springgreen: 65407,\n        steelblue: 4620980,\n        tan: 13808780,\n        teal: 32896,\n        thistle: 14204888,\n        tomato: 16737095,\n        turquoise: 4251856,\n        violet: 15631086,\n        wheat: 16113331,\n        white: 16777215,\n        whitesmoke: 16119285,\n        yellow: 16776960,\n        yellowgreen: 10145074\n    });\nd3_rgb_names.forEach(function (key, value) {\n    d3_rgb_names.set(key, d3_rgbNumber(value));\n});"
}