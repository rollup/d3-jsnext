{
  "filepath": "/arrays/max.js",
  "shared": [],
  "dependencies": [],
  "helpers": [],
  "exports": [
    "d3.max"
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
              "name": "max"
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
                            "right": {
                              "type": "BinaryExpression",
                              "operator": ">",
                              "left": {
                                "type": "Identifier",
                                "name": "b"
                              },
                              "right": {
                                "type": "Identifier",
                                "name": "a"
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
                                "name": "a"
                              },
                              "right": {
                                "type": "Identifier",
                                "name": "b"
                              }
                            }
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
                            "right": {
                              "type": "BinaryExpression",
                              "operator": ">",
                              "left": {
                                "type": "Identifier",
                                "name": "b"
                              },
                              "right": {
                                "type": "Identifier",
                                "name": "a"
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
                                "name": "a"
                              },
                              "right": {
                                "type": "Identifier",
                                "name": "b"
                              }
                            }
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
                    "type": "Identifier",
                    "name": "a"
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
  "src": "d3.max = function (array, f) {\n    var i = -1, n = array.length, a, b;\n    if (arguments.length === 1) {\n        while (++i < n && !((a = array[i]) != null && a <= a))\n            a = undefined;\n        while (++i < n)\n            if ((b = array[i]) != null && b > a)\n                a = b;\n    } else {\n        while (++i < n && !((a = f.call(array, array[i], i)) != null && a <= a))\n            a = undefined;\n        while (++i < n)\n            if ((b = f.call(array, array[i], i)) != null && b > a)\n                a = b;\n    }\n    return a;\n};"
}