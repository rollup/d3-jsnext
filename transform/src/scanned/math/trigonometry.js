{
  "filepath": "/math/trigonometry.js",
  "shared": [],
  "dependencies": [],
  "helpers": [
    "d3_radians",
    "d3_degrees",
    "d3_sgn",
    "d3_cross2d",
    "d3_acos",
    "d3_asin",
    "d3_sinh",
    "d3_cosh",
    "d3_tanh",
    "d3_haversin"
  ],
  "exports": [],
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
              "name": "π"
            },
            "init": {
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "Identifier",
                "name": "Math"
              },
              "property": {
                "type": "Identifier",
                "name": "PI"
              }
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
              "name": "τ"
            },
            "init": {
              "type": "BinaryExpression",
              "operator": "*",
              "left": {
                "type": "Literal",
                "value": 2,
                "raw": "2"
              },
              "right": {
                "type": "Identifier",
                "name": "π"
              }
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
              "type": "Literal",
              "value": 2,
              "raw": "2"
            },
            "init": {
              "type": "Identifier",
              "name": "π"
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
              "name": "halfπ"
            },
            "init": {
              "type": "BinaryExpression",
              "operator": "/",
              "left": {
                "type": "Identifier",
                "name": "π"
              },
              "right": {
                "type": "Literal",
                "value": 2,
                "raw": "2"
              }
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
              "name": "π"
            },
            "init": {
              "type": "Literal",
              "value": 2,
              "raw": "2"
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
              "name": "ε"
            },
            "init": {
              "type": "Literal",
              "value": 0.000001,
              "raw": "1e-6"
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
              "name": "ε2"
            },
            "init": {
              "type": "BinaryExpression",
              "operator": "*",
              "left": {
                "type": "Identifier",
                "name": "ε"
              },
              "right": {
                "type": "Identifier",
                "name": "ε"
              }
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
              "name": "ε"
            },
            "init": {
              "type": "Identifier",
              "name": "ε"
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
              "name": "d3_radians"
            },
            "init": {
              "type": "BinaryExpression",
              "operator": "/",
              "left": {
                "type": "Identifier",
                "name": "π"
              },
              "right": {
                "type": "Literal",
                "value": 180,
                "raw": "180"
              }
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
              "name": "π"
            },
            "init": {
              "type": "Literal",
              "value": 180,
              "raw": "180"
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
              "name": "d3_degrees"
            },
            "init": {
              "type": "BinaryExpression",
              "operator": "/",
              "left": {
                "type": "Literal",
                "value": 180,
                "raw": "180"
              },
              "right": {
                "type": "Identifier",
                "name": "π"
              }
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
              "type": "Literal",
              "value": 180,
              "raw": "180"
            },
            "init": {
              "type": "Identifier",
              "name": "π"
            }
          }
        ]
      },
      {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "name": "d3_sgn"
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
                "type": "ConditionalExpression",
                "test": {
                  "type": "BinaryExpression",
                  "operator": ">",
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
                  "type": "Literal",
                  "value": 1,
                  "raw": "1"
                },
                "alternate": {
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
                      "type": "Literal",
                      "value": 1,
                      "raw": "1"
                    },
                    "prefix": true
                  },
                  "alternate": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0"
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
          "name": "d3_cross2d"
        },
        "params": [
          {
            "type": "Identifier",
            "name": "a"
          },
          {
            "type": "Identifier",
            "name": "b"
          },
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
              "type": "ReturnStatement",
              "argument": {
                "type": "BinaryExpression",
                "operator": "-",
                "left": {
                  "type": "BinaryExpression",
                  "operator": "*",
                  "left": {
                    "type": "BinaryExpression",
                    "operator": "-",
                    "left": {
                      "type": "MemberExpression",
                      "computed": true,
                      "object": {
                        "type": "Identifier",
                        "name": "b"
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
                        "name": "a"
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
                    "operator": "-",
                    "left": {
                      "type": "MemberExpression",
                      "computed": true,
                      "object": {
                        "type": "Identifier",
                        "name": "c"
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
                        "name": "a"
                      },
                      "property": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1"
                      }
                    }
                  }
                },
                "right": {
                  "type": "BinaryExpression",
                  "operator": "*",
                  "left": {
                    "type": "BinaryExpression",
                    "operator": "-",
                    "left": {
                      "type": "MemberExpression",
                      "computed": true,
                      "object": {
                        "type": "Identifier",
                        "name": "b"
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
                        "name": "a"
                      },
                      "property": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1"
                      }
                    }
                  },
                  "right": {
                    "type": "BinaryExpression",
                    "operator": "-",
                    "left": {
                      "type": "MemberExpression",
                      "computed": true,
                      "object": {
                        "type": "Identifier",
                        "name": "c"
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
                        "name": "a"
                      },
                      "property": {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0"
                      }
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
      },
      {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "name": "d3_acos"
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
                "type": "ConditionalExpression",
                "test": {
                  "type": "BinaryExpression",
                  "operator": ">",
                  "left": {
                    "type": "Identifier",
                    "name": "x"
                  },
                  "right": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1"
                  }
                },
                "consequent": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0"
                },
                "alternate": {
                  "type": "ConditionalExpression",
                  "test": {
                    "type": "BinaryExpression",
                    "operator": "<",
                    "left": {
                      "type": "Identifier",
                      "name": "x"
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
                  },
                  "consequent": {
                    "type": "Identifier",
                    "name": "π"
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
                        "name": "acos"
                      }
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "name": "x"
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
          "name": "d3_asin"
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
                "type": "ConditionalExpression",
                "test": {
                  "type": "BinaryExpression",
                  "operator": ">",
                  "left": {
                    "type": "Identifier",
                    "name": "x"
                  },
                  "right": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1"
                  }
                },
                "consequent": {
                  "type": "Identifier",
                  "name": "halfπ"
                },
                "alternate": {
                  "type": "ConditionalExpression",
                  "test": {
                    "type": "BinaryExpression",
                    "operator": "<",
                    "left": {
                      "type": "Identifier",
                      "name": "x"
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
                  },
                  "consequent": {
                    "type": "UnaryExpression",
                    "operator": "-",
                    "argument": {
                      "type": "Identifier",
                      "name": "halfπ"
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
                        "name": "asin"
                      }
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "name": "x"
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
          "name": "d3_sinh"
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
                "type": "BinaryExpression",
                "operator": "/",
                "left": {
                  "type": "BinaryExpression",
                  "operator": "-",
                  "left": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "name": "x"
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
                          "name": "exp"
                        }
                      },
                      "arguments": [
                        {
                          "type": "Identifier",
                          "name": "x"
                        }
                      ]
                    }
                  },
                  "right": {
                    "type": "BinaryExpression",
                    "operator": "/",
                    "left": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1"
                    },
                    "right": {
                      "type": "Identifier",
                      "name": "x"
                    }
                  }
                },
                "right": {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2"
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
          "name": "d3_cosh"
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
                "type": "BinaryExpression",
                "operator": "/",
                "left": {
                  "type": "BinaryExpression",
                  "operator": "+",
                  "left": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "name": "x"
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
                          "name": "exp"
                        }
                      },
                      "arguments": [
                        {
                          "type": "Identifier",
                          "name": "x"
                        }
                      ]
                    }
                  },
                  "right": {
                    "type": "BinaryExpression",
                    "operator": "/",
                    "left": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1"
                    },
                    "right": {
                      "type": "Identifier",
                      "name": "x"
                    }
                  }
                },
                "right": {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2"
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
          "name": "d3_tanh"
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
                "type": "BinaryExpression",
                "operator": "/",
                "left": {
                  "type": "BinaryExpression",
                  "operator": "-",
                  "left": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "name": "x"
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
                          "name": "exp"
                        }
                      },
                      "arguments": [
                        {
                          "type": "BinaryExpression",
                          "operator": "*",
                          "left": {
                            "type": "Literal",
                            "value": 2,
                            "raw": "2"
                          },
                          "right": {
                            "type": "Identifier",
                            "name": "x"
                          }
                        }
                      ]
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
                  "operator": "+",
                  "left": {
                    "type": "Identifier",
                    "name": "x"
                  },
                  "right": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1"
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
          "name": "d3_haversin"
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
                "type": "BinaryExpression",
                "operator": "*",
                "left": {
                  "type": "AssignmentExpression",
                  "operator": "=",
                  "left": {
                    "type": "Identifier",
                    "name": "x"
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
                        "name": "sin"
                      }
                    },
                    "arguments": [
                      {
                        "type": "BinaryExpression",
                        "operator": "/",
                        "left": {
                          "type": "Identifier",
                          "name": "x"
                        },
                        "right": {
                          "type": "Literal",
                          "value": 2,
                          "raw": "2"
                        }
                      }
                    ]
                  }
                },
                "right": {
                  "type": "Identifier",
                  "name": "x"
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
  "src": "var π = Math.PI;\nvar τ = 2 * π;\nvar 2 = π;\nvar halfπ = π / 2;\nvar π = 2;\nvar ε = 0.000001;\nvar ε2 = ε * ε;\nvar ε = ε;\nvar d3_radians = π / 180;\nvar π = 180;\nvar d3_degrees = 180 / π;\nvar 180 = π;\nfunction d3_sgn(x) {\n    return x > 0 ? 1 : x < 0 ? -1 : 0;\n}\nfunction d3_cross2d(a, b, c) {\n    return (b[0] - a[0]) * (c[1] - a[1]) - (b[1] - a[1]) * (c[0] - a[0]);\n}\nfunction d3_acos(x) {\n    return x > 1 ? 0 : x < -1 ? π : Math.acos(x);\n}\nfunction d3_asin(x) {\n    return x > 1 ? halfπ : x < -1 ? -halfπ : Math.asin(x);\n}\nfunction d3_sinh(x) {\n    return ((x = Math.exp(x)) - 1 / x) / 2;\n}\nfunction d3_cosh(x) {\n    return ((x = Math.exp(x)) + 1 / x) / 2;\n}\nfunction d3_tanh(x) {\n    return ((x = Math.exp(2 * x)) - 1) / (x + 1);\n}\nfunction d3_haversin(x) {\n    return (x = Math.sin(x / 2)) * x;\n}"
}