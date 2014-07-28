{
  "filepath": "/arrays/extent.js",
  "shared": [],
  "dependencies": [],
  "helpers": [],
  "exports": [
    "d3.extent"
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
              "name": "extent"
            }
          },
          "right": {
            "type": "FunctionExpression",
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "name": "array"
              },
              {
                "type": "Identifier",
                "name": "f"
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
                        "name": "n"
                      },
                      "init": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "name": "array"
                        },
                        "property": {
                          "type": "Identifier",
                          "name": "length"
                        }
                      }
                    },
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "name": "a"
                      },
                      "init": null
                    },
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "name": "b"
                      },
                      "init": null
                    },
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "name": "c"
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
                    "operator": "===",
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
                      "value": 1,
                      "raw": "1"
                    }
                  },
                  "consequent": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "WhileStatement",
                        "test": {
                          "type": "LogicalExpression",
                          "operator": "&&",
                          "left": {
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
                          "right": {
                            "type": "UnaryExpression",
                            "operator": "!",
                            "argument": {
                              "type": "LogicalExpression",
                              "operator": "&&",
                              "left": {
                                "type": "BinaryExpression",
                                "operator": "!=",
                                "left": {
                                  "type": "AssignmentExpression",
                                  "operator": "=",
                                  "left": {
                                    "type": "Identifier",
                                    "name": "a"
                                  },
                                  "right": {
                                    "type": "AssignmentExpression",
                                    "operator": "=",
                                    "left": {
                                      "type": "Identifier",
                                      "name": "c"
                                    },
                                    "right": {
                                      "type": "MemberExpression",
                                      "computed": true,
                                      "object": {
                                        "type": "Identifier",
                                        "name": "array"
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "name": "i"
                                      }
                                    }
                                  }
                                },
                                "right": {
                                  "type": "Literal",
                                  "value": null,
                                  "raw": "null"
                                }
                              },
                              "right": {
                                "type": "BinaryExpression",
                                "operator": "<=",
                                "left": {
                                  "type": "Identifier",
                                  "name": "a"
                                },
                                "right": {
                                  "type": "Identifier",
                                  "name": "a"
                                }
                              }
                            },
                            "prefix": true
                          }
                        },
                        "body": {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "AssignmentExpression",
                            "operator": "=",
                            "left": {
                              "type": "Identifier",
                              "name": "a"
                            },
                            "right": {
                              "type": "AssignmentExpression",
                              "operator": "=",
                              "left": {
                                "type": "Identifier",
                                "name": "c"
                              },
                              "right": {
                                "type": "Identifier",
                                "name": "undefined"
                              }
                            }
                          }
                        }
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
                          "type": "IfStatement",
                          "test": {
                            "type": "BinaryExpression",
                            "operator": "!=",
                            "left": {
                              "type": "AssignmentExpression",
                              "operator": "=",
                              "left": {
                                "type": "Identifier",
                                "name": "b"
                              },
                              "right": {
                                "type": "MemberExpression",
                                "computed": true,
                                "object": {
                                  "type": "Identifier",
                                  "name": "array"
                                },
                                "property": {
                                  "type": "Identifier",
                                  "name": "i"
                                }
                              }
                            },
                            "right": {
                              "type": "Literal",
                              "value": null,
                              "raw": "null"
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
                                    "type": "Identifier",
                                    "name": "a"
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "name": "b"
                                  }
                                },
                                "consequent": {
                                  "type": "ExpressionStatement",
                                  "expression": {
                                    "type": "AssignmentExpression",
                                    "operator": "=",
                                    "left": {
                                      "type": "Identifier",
                                      "name": "a"
                                    },
                                    "right": {
                                      "type": "Identifier",
                                      "name": "b"
                                    }
                                  }
                                },
                                "alternate": null
                              },
                              {
                                "type": "IfStatement",
                                "test": {
                                  "type": "BinaryExpression",
                                  "operator": "<",
                                  "left": {
                                    "type": "Identifier",
                                    "name": "c"
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "name": "b"
                                  }
                                },
                                "consequent": {
                                  "type": "ExpressionStatement",
                                  "expression": {
                                    "type": "AssignmentExpression",
                                    "operator": "=",
                                    "left": {
                                      "type": "Identifier",
                                      "name": "c"
                                    },
                                    "right": {
                                      "type": "Identifier",
                                      "name": "b"
                                    }
                                  }
                                },
                                "alternate": null
                              }
                            ]
                          },
                          "alternate": null
                        }
                      }
                    ]
                  },
                  "alternate": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "WhileStatement",
                        "test": {
                          "type": "LogicalExpression",
                          "operator": "&&",
                          "left": {
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
                          "right": {
                            "type": "UnaryExpression",
                            "operator": "!",
                            "argument": {
                              "type": "LogicalExpression",
                              "operator": "&&",
                              "left": {
                                "type": "BinaryExpression",
                                "operator": "!=",
                                "left": {
                                  "type": "AssignmentExpression",
                                  "operator": "=",
                                  "left": {
                                    "type": "Identifier",
                                    "name": "a"
                                  },
                                  "right": {
                                    "type": "AssignmentExpression",
                                    "operator": "=",
                                    "left": {
                                      "type": "Identifier",
                                      "name": "c"
                                    },
                                    "right": {
                                      "type": "CallExpression",
                                      "callee": {
                                        "type": "MemberExpression",
                                        "computed": false,
                                        "object": {
                                          "type": "Identifier",
                                          "name": "f"
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "name": "call"
                                        }
                                      },
                                      "arguments": [
                                        {
                                          "type": "Identifier",
                                          "name": "array"
                                        },
                                        {
                                          "type": "MemberExpression",
                                          "computed": true,
                                          "object": {
                                            "type": "Identifier",
                                            "name": "array"
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "name": "i"
                                          }
                                        },
                                        {
                                          "type": "Identifier",
                                          "name": "i"
                                        }
                                      ]
                                    }
                                  }
                                },
                                "right": {
                                  "type": "Literal",
                                  "value": null,
                                  "raw": "null"
                                }
                              },
                              "right": {
                                "type": "BinaryExpression",
                                "operator": "<=",
                                "left": {
                                  "type": "Identifier",
                                  "name": "a"
                                },
                                "right": {
                                  "type": "Identifier",
                                  "name": "a"
                                }
                              }
                            },
                            "prefix": true
                          }
                        },
                        "body": {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "AssignmentExpression",
                            "operator": "=",
                            "left": {
                              "type": "Identifier",
                              "name": "a"
                            },
                            "right": {
                              "type": "Identifier",
                              "name": "undefined"
                            }
                          }
                        }
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
                          "type": "IfStatement",
                          "test": {
                            "type": "BinaryExpression",
                            "operator": "!=",
                            "left": {
                              "type": "AssignmentExpression",
                              "operator": "=",
                              "left": {
                                "type": "Identifier",
                                "name": "b"
                              },
                              "right": {
                                "type": "CallExpression",
                                "callee": {
                                  "type": "MemberExpression",
                                  "computed": false,
                                  "object": {
                                    "type": "Identifier",
                                    "name": "f"
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "name": "call"
                                  }
                                },
                                "arguments": [
                                  {
                                    "type": "Identifier",
                                    "name": "array"
                                  },
                                  {
                                    "type": "MemberExpression",
                                    "computed": true,
                                    "object": {
                                      "type": "Identifier",
                                      "name": "array"
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "name": "i"
                                    }
                                  },
                                  {
                                    "type": "Identifier",
                                    "name": "i"
                                  }
                                ]
                              }
                            },
                            "right": {
                              "type": "Literal",
                              "value": null,
                              "raw": "null"
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
                                    "type": "Identifier",
                                    "name": "a"
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "name": "b"
                                  }
                                },
                                "consequent": {
                                  "type": "ExpressionStatement",
                                  "expression": {
                                    "type": "AssignmentExpression",
                                    "operator": "=",
                                    "left": {
                                      "type": "Identifier",
                                      "name": "a"
                                    },
                                    "right": {
                                      "type": "Identifier",
                                      "name": "b"
                                    }
                                  }
                                },
                                "alternate": null
                              },
                              {
                                "type": "IfStatement",
                                "test": {
                                  "type": "BinaryExpression",
                                  "operator": "<",
                                  "left": {
                                    "type": "Identifier",
                                    "name": "c"
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "name": "b"
                                  }
                                },
                                "consequent": {
                                  "type": "ExpressionStatement",
                                  "expression": {
                                    "type": "AssignmentExpression",
                                    "operator": "=",
                                    "left": {
                                      "type": "Identifier",
                                      "name": "c"
                                    },
                                    "right": {
                                      "type": "Identifier",
                                      "name": "b"
                                    }
                                  }
                                },
                                "alternate": null
                              }
                            ]
                          },
                          "alternate": null
                        }
                      }
                    ]
                  }
                },
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "ArrayExpression",
                    "elements": [
                      {
                        "type": "Identifier",
                        "name": "a"
                      },
                      {
                        "type": "Identifier",
                        "name": "c"
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
      }
    ]
  },
  "src": "d3.extent = function (array, f) {\n    var i = -1, n = array.length, a, b, c;\n    if (arguments.length === 1) {\n        while (++i < n && !((a = c = array[i]) != null && a <= a))\n            a = c = undefined;\n        while (++i < n)\n            if ((b = array[i]) != null) {\n                if (a > b)\n                    a = b;\n                if (c < b)\n                    c = b;\n            }\n    } else {\n        while (++i < n && !((a = c = f.call(array, array[i], i)) != null && a <= a))\n            a = undefined;\n        while (++i < n)\n            if ((b = f.call(array, array[i], i)) != null) {\n                if (a > b)\n                    a = b;\n                if (c < b)\n                    c = b;\n            }\n    }\n    return [\n        a,\n        c\n    ];\n};"
}