{
  "filepath": "/geo/clip-antimeridian.js",
  "shared": [],
  "dependencies": [
    "d3_geo_clip",
    "d3_true",
    "abs"
  ],
  "helpers": [
    "d3_geo_clipAntimeridian",
    "d3_geo_clipAntimeridianLine",
    "d3_geo_clipAntimeridianIntersect",
    "d3_geo_clipAntimeridianInterpolate"
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
              "name": "d3_geo_clipAntimeridian"
            },
            "init": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "name": "d3_geo_clip"
              },
              "arguments": [
                {
                  "type": "Identifier",
                  "name": "d3_true"
                },
                {
                  "type": "Identifier",
                  "name": "d3_geo_clipAntimeridianLine"
                },
                {
                  "type": "Identifier",
                  "name": "d3_geo_clipAntimeridianInterpolate"
                },
                {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "UnaryExpression",
                      "operator": "-",
                      "argument": {
                        "type": "Identifier",
                        "name": "π"
                      },
                      "prefix": true
                    },
                    {
                      "type": "BinaryExpression",
                      "operator": "/",
                      "left": {
                        "type": "UnaryExpression",
                        "operator": "-",
                        "argument": {
                          "type": "Identifier",
                          "name": "π"
                        },
                        "prefix": true
                      },
                      "right": {
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
      },
      {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "name": "d3_geo_clipAntimeridianLine"
        },
        "params": [
          {
            "type": "Identifier",
            "name": "listener"
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
                    "name": "λ0"
                  },
                  "init": {
                    "type": "Identifier",
                    "name": "NaN"
                  }
                },
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "name": "φ0"
                  },
                  "init": {
                    "type": "Identifier",
                    "name": "NaN"
                  }
                },
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "name": "sλ0"
                  },
                  "init": {
                    "type": "Identifier",
                    "name": "NaN"
                  }
                },
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "name": "clean"
                  },
                  "init": null
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
                      "name": "lineStart"
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "id": null,
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
                                  "type": "Identifier",
                                  "name": "listener"
                                },
                                "property": {
                                  "type": "Identifier",
                                  "name": "lineStart"
                                }
                              },
                              "arguments": []
                            }
                          },
                          {
                            "type": "ExpressionStatement",
                            "expression": {
                              "type": "AssignmentExpression",
                              "operator": "=",
                              "left": {
                                "type": "Identifier",
                                "name": "clean"
                              },
                              "right": {
                                "type": "Literal",
                                "value": 1,
                                "raw": "1"
                              }
                            }
                          }
                        ]
                      },
                      "rest": null,
                      "generator": false,
                      "expression": false
                    },
                    "kind": "init"
                  },
                  {
                    "type": "Property",
                    "key": {
                      "type": "Identifier",
                      "name": "point"
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "id": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "name": "λ1"
                        },
                        {
                          "type": "Identifier",
                          "name": "φ1"
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
                                  "name": "sλ1"
                                },
                                "init": {
                                  "type": "ConditionalExpression",
                                  "test": {
                                    "type": "BinaryExpression",
                                    "operator": ">",
                                    "left": {
                                      "type": "Identifier",
                                      "name": "λ1"
                                    },
                                    "right": {
                                      "type": "Literal",
                                      "value": 0,
                                      "raw": "0"
                                    }
                                  },
                                  "consequent": {
                                    "type": "Identifier",
                                    "name": "π"
                                  },
                                  "alternate": {
                                    "type": "UnaryExpression",
                                    "operator": "-",
                                    "argument": {
                                      "type": "Identifier",
                                      "name": "π"
                                    },
                                    "prefix": true
                                  }
                                }
                              },
                              {
                                "type": "VariableDeclarator",
                                "id": {
                                  "type": "Identifier",
                                  "name": "dλ"
                                },
                                "init": {
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
                                        "type": "Identifier",
                                        "name": "λ1"
                                      },
                                      "right": {
                                        "type": "Identifier",
                                        "name": "λ0"
                                      }
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
                              "operator": "<",
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
                                      "type": "Identifier",
                                      "name": "dλ"
                                    },
                                    "right": {
                                      "type": "Identifier",
                                      "name": "π"
                                    }
                                  }
                                ]
                              },
                              "right": {
                                "type": "Identifier",
                                "name": "ε"
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
                                        "name": "listener"
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "name": "point"
                                      }
                                    },
                                    "arguments": [
                                      {
                                        "type": "Identifier",
                                        "name": "λ0"
                                      },
                                      {
                                        "type": "AssignmentExpression",
                                        "operator": "=",
                                        "left": {
                                          "type": "Identifier",
                                          "name": "φ0"
                                        },
                                        "right": {
                                          "type": "ConditionalExpression",
                                          "test": {
                                            "type": "BinaryExpression",
                                            "operator": ">",
                                            "left": {
                                              "type": "BinaryExpression",
                                              "operator": "/",
                                              "left": {
                                                "type": "BinaryExpression",
                                                "operator": "+",
                                                "left": {
                                                  "type": "Identifier",
                                                  "name": "φ0"
                                                },
                                                "right": {
                                                  "type": "Identifier",
                                                  "name": "φ1"
                                                }
                                              },
                                              "right": {
                                                "type": "Literal",
                                                "value": 2,
                                                "raw": "2"
                                              }
                                            },
                                            "right": {
                                              "type": "Literal",
                                              "value": 0,
                                              "raw": "0"
                                            }
                                          },
                                          "consequent": {
                                            "type": "Identifier",
                                            "name": "halfπ"
                                          },
                                          "alternate": {
                                            "type": "UnaryExpression",
                                            "operator": "-",
                                            "argument": {
                                              "type": "Identifier",
                                              "name": "halfπ"
                                            },
                                            "prefix": true
                                          }
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
                                        "type": "Identifier",
                                        "name": "listener"
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "name": "point"
                                      }
                                    },
                                    "arguments": [
                                      {
                                        "type": "Identifier",
                                        "name": "sλ0"
                                      },
                                      {
                                        "type": "Identifier",
                                        "name": "φ0"
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
                                        "name": "listener"
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "name": "lineEnd"
                                      }
                                    },
                                    "arguments": []
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
                                        "name": "listener"
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "name": "lineStart"
                                      }
                                    },
                                    "arguments": []
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
                                        "name": "listener"
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "name": "point"
                                      }
                                    },
                                    "arguments": [
                                      {
                                        "type": "Identifier",
                                        "name": "sλ1"
                                      },
                                      {
                                        "type": "Identifier",
                                        "name": "φ0"
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
                                        "name": "listener"
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "name": "point"
                                      }
                                    },
                                    "arguments": [
                                      {
                                        "type": "Identifier",
                                        "name": "λ1"
                                      },
                                      {
                                        "type": "Identifier",
                                        "name": "φ0"
                                      }
                                    ]
                                  }
                                },
                                {
                                  "type": "ExpressionStatement",
                                  "expression": {
                                    "type": "AssignmentExpression",
                                    "operator": "=",
                                    "left": {
                                      "type": "Identifier",
                                      "name": "clean"
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
                            "alternate": {
                              "type": "IfStatement",
                              "test": {
                                "type": "LogicalExpression",
                                "operator": "&&",
                                "left": {
                                  "type": "BinaryExpression",
                                  "operator": "!==",
                                  "left": {
                                    "type": "Identifier",
                                    "name": "sλ0"
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "name": "sλ1"
                                  }
                                },
                                "right": {
                                  "type": "BinaryExpression",
                                  "operator": ">=",
                                  "left": {
                                    "type": "Identifier",
                                    "name": "dλ"
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "name": "π"
                                  }
                                }
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
                                              "type": "Identifier",
                                              "name": "λ0"
                                            },
                                            "right": {
                                              "type": "Identifier",
                                              "name": "sλ0"
                                            }
                                          }
                                        ]
                                      },
                                      "right": {
                                        "type": "Identifier",
                                        "name": "ε"
                                      }
                                    },
                                    "consequent": {
                                      "type": "ExpressionStatement",
                                      "expression": {
                                        "type": "AssignmentExpression",
                                        "operator": "-=",
                                        "left": {
                                          "type": "Identifier",
                                          "name": "λ0"
                                        },
                                        "right": {
                                          "type": "BinaryExpression",
                                          "operator": "*",
                                          "left": {
                                            "type": "Identifier",
                                            "name": "sλ0"
                                          },
                                          "right": {
                                            "type": "Identifier",
                                            "name": "ε"
                                          }
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
                                              "type": "Identifier",
                                              "name": "λ1"
                                            },
                                            "right": {
                                              "type": "Identifier",
                                              "name": "sλ1"
                                            }
                                          }
                                        ]
                                      },
                                      "right": {
                                        "type": "Identifier",
                                        "name": "ε"
                                      }
                                    },
                                    "consequent": {
                                      "type": "ExpressionStatement",
                                      "expression": {
                                        "type": "AssignmentExpression",
                                        "operator": "-=",
                                        "left": {
                                          "type": "Identifier",
                                          "name": "λ1"
                                        },
                                        "right": {
                                          "type": "BinaryExpression",
                                          "operator": "*",
                                          "left": {
                                            "type": "Identifier",
                                            "name": "sλ1"
                                          },
                                          "right": {
                                            "type": "Identifier",
                                            "name": "ε"
                                          }
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
                                        "name": "φ0"
                                      },
                                      "right": {
                                        "type": "CallExpression",
                                        "callee": {
                                          "type": "Identifier",
                                          "name": "d3_geo_clipAntimeridianIntersect"
                                        },
                                        "arguments": [
                                          {
                                            "type": "Identifier",
                                            "name": "λ0"
                                          },
                                          {
                                            "type": "Identifier",
                                            "name": "φ0"
                                          },
                                          {
                                            "type": "Identifier",
                                            "name": "λ1"
                                          },
                                          {
                                            "type": "Identifier",
                                            "name": "φ1"
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
                                          "name": "listener"
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "name": "point"
                                        }
                                      },
                                      "arguments": [
                                        {
                                          "type": "Identifier",
                                          "name": "sλ0"
                                        },
                                        {
                                          "type": "Identifier",
                                          "name": "φ0"
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
                                          "name": "listener"
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "name": "lineEnd"
                                        }
                                      },
                                      "arguments": []
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
                                          "name": "listener"
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "name": "lineStart"
                                        }
                                      },
                                      "arguments": []
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
                                          "name": "listener"
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "name": "point"
                                        }
                                      },
                                      "arguments": [
                                        {
                                          "type": "Identifier",
                                          "name": "sλ1"
                                        },
                                        {
                                          "type": "Identifier",
                                          "name": "φ0"
                                        }
                                      ]
                                    }
                                  },
                                  {
                                    "type": "ExpressionStatement",
                                    "expression": {
                                      "type": "AssignmentExpression",
                                      "operator": "=",
                                      "left": {
                                        "type": "Identifier",
                                        "name": "clean"
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
                                  "name": "listener"
                                },
                                "property": {
                                  "type": "Identifier",
                                  "name": "point"
                                }
                              },
                              "arguments": [
                                {
                                  "type": "AssignmentExpression",
                                  "operator": "=",
                                  "left": {
                                    "type": "Identifier",
                                    "name": "λ0"
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "name": "λ1"
                                  }
                                },
                                {
                                  "type": "AssignmentExpression",
                                  "operator": "=",
                                  "left": {
                                    "type": "Identifier",
                                    "name": "φ0"
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "name": "φ1"
                                  }
                                }
                              ]
                            }
                          },
                          {
                            "type": "ExpressionStatement",
                            "expression": {
                              "type": "AssignmentExpression",
                              "operator": "=",
                              "left": {
                                "type": "Identifier",
                                "name": "sλ0"
                              },
                              "right": {
                                "type": "Identifier",
                                "name": "sλ1"
                              }
                            }
                          }
                        ]
                      },
                      "rest": null,
                      "generator": false,
                      "expression": false
                    },
                    "kind": "init"
                  },
                  {
                    "type": "Property",
                    "key": {
                      "type": "Identifier",
                      "name": "lineEnd"
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "id": null,
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
                                  "type": "Identifier",
                                  "name": "listener"
                                },
                                "property": {
                                  "type": "Identifier",
                                  "name": "lineEnd"
                                }
                              },
                              "arguments": []
                            }
                          },
                          {
                            "type": "ExpressionStatement",
                            "expression": {
                              "type": "AssignmentExpression",
                              "operator": "=",
                              "left": {
                                "type": "Identifier",
                                "name": "λ0"
                              },
                              "right": {
                                "type": "AssignmentExpression",
                                "operator": "=",
                                "left": {
                                  "type": "Identifier",
                                  "name": "φ0"
                                },
                                "right": {
                                  "type": "Identifier",
                                  "name": "NaN"
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
                    "kind": "init"
                  },
                  {
                    "type": "Property",
                    "key": {
                      "type": "Identifier",
                      "name": "clean"
                    },
                    "value": {
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
                              "operator": "-",
                              "left": {
                                "type": "Literal",
                                "value": 2,
                                "raw": "2"
                              },
                              "right": {
                                "type": "Identifier",
                                "name": "clean"
                              }
                            }
                          }
                        ]
                      },
                      "rest": null,
                      "generator": false,
                      "expression": false
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
      },
      {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "name": "d3_geo_clipAntimeridianIntersect"
        },
        "params": [
          {
            "type": "Identifier",
            "name": "λ0"
          },
          {
            "type": "Identifier",
            "name": "φ0"
          },
          {
            "type": "Identifier",
            "name": "λ1"
          },
          {
            "type": "Identifier",
            "name": "φ1"
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
                    "name": "cosφ0"
                  },
                  "init": null
                },
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "name": "cosφ1"
                  },
                  "init": null
                },
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "name": "sinλ0_λ1"
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
                        "name": "sin"
                      }
                    },
                    "arguments": [
                      {
                        "type": "BinaryExpression",
                        "operator": "-",
                        "left": {
                          "type": "Identifier",
                          "name": "λ0"
                        },
                        "right": {
                          "type": "Identifier",
                          "name": "λ1"
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
                "type": "ConditionalExpression",
                "test": {
                  "type": "BinaryExpression",
                  "operator": ">",
                  "left": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "name": "abs"
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "name": "sinλ0_λ1"
                      }
                    ]
                  },
                  "right": {
                    "type": "Identifier",
                    "name": "ε"
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
                      "name": "atan"
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
                          "type": "BinaryExpression",
                          "operator": "*",
                          "left": {
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
                                  "name": "sin"
                                }
                              },
                              "arguments": [
                                {
                                  "type": "Identifier",
                                  "name": "φ0"
                                }
                              ]
                            },
                            "right": {
                              "type": "AssignmentExpression",
                              "operator": "=",
                              "left": {
                                "type": "Identifier",
                                "name": "cosφ1"
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
                                    "name": "cos"
                                  }
                                },
                                "arguments": [
                                  {
                                    "type": "Identifier",
                                    "name": "φ1"
                                  }
                                ]
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
                                "name": "Math"
                              },
                              "property": {
                                "type": "Identifier",
                                "name": "sin"
                              }
                            },
                            "arguments": [
                              {
                                "type": "Identifier",
                                "name": "λ1"
                              }
                            ]
                          }
                        },
                        "right": {
                          "type": "BinaryExpression",
                          "operator": "*",
                          "left": {
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
                                  "name": "sin"
                                }
                              },
                              "arguments": [
                                {
                                  "type": "Identifier",
                                  "name": "φ1"
                                }
                              ]
                            },
                            "right": {
                              "type": "AssignmentExpression",
                              "operator": "=",
                              "left": {
                                "type": "Identifier",
                                "name": "cosφ0"
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
                                    "name": "cos"
                                  }
                                },
                                "arguments": [
                                  {
                                    "type": "Identifier",
                                    "name": "φ0"
                                  }
                                ]
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
                                "name": "Math"
                              },
                              "property": {
                                "type": "Identifier",
                                "name": "sin"
                              }
                            },
                            "arguments": [
                              {
                                "type": "Identifier",
                                "name": "λ0"
                              }
                            ]
                          }
                        }
                      },
                      "right": {
                        "type": "BinaryExpression",
                        "operator": "*",
                        "left": {
                          "type": "BinaryExpression",
                          "operator": "*",
                          "left": {
                            "type": "Identifier",
                            "name": "cosφ0"
                          },
                          "right": {
                            "type": "Identifier",
                            "name": "cosφ1"
                          }
                        },
                        "right": {
                          "type": "Identifier",
                          "name": "sinλ0_λ1"
                        }
                      }
                    }
                  ]
                },
                "alternate": {
                  "type": "BinaryExpression",
                  "operator": "/",
                  "left": {
                    "type": "BinaryExpression",
                    "operator": "+",
                    "left": {
                      "type": "Identifier",
                      "name": "φ0"
                    },
                    "right": {
                      "type": "Identifier",
                      "name": "φ1"
                    }
                  },
                  "right": {
                    "type": "Literal",
                    "value": 2,
                    "raw": "2"
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
          "name": "d3_geo_clipAntimeridianInterpolate"
        },
        "params": [
          {
            "type": "Identifier",
            "name": "from"
          },
          {
            "type": "Identifier",
            "name": "to"
          },
          {
            "type": "Identifier",
            "name": "direction"
          },
          {
            "type": "Identifier",
            "name": "listener"
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
                    "name": "φ"
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
                "operator": "==",
                "left": {
                  "type": "Identifier",
                  "name": "from"
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
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "name": "φ"
                      },
                      "right": {
                        "type": "BinaryExpression",
                        "operator": "*",
                        "left": {
                          "type": "Identifier",
                          "name": "direction"
                        },
                        "right": {
                          "type": "Identifier",
                          "name": "halfπ"
                        }
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
                          "name": "listener"
                        },
                        "property": {
                          "type": "Identifier",
                          "name": "point"
                        }
                      },
                      "arguments": [
                        {
                          "type": "UnaryExpression",
                          "operator": "-",
                          "argument": {
                            "type": "Identifier",
                            "name": "π"
                          },
                          "prefix": true
                        },
                        {
                          "type": "Identifier",
                          "name": "φ"
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
                          "name": "listener"
                        },
                        "property": {
                          "type": "Identifier",
                          "name": "point"
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
                          "name": "φ"
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
                          "name": "listener"
                        },
                        "property": {
                          "type": "Identifier",
                          "name": "point"
                        }
                      },
                      "arguments": [
                        {
                          "type": "Identifier",
                          "name": "π"
                        },
                        {
                          "type": "Identifier",
                          "name": "φ"
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
                          "name": "listener"
                        },
                        "property": {
                          "type": "Identifier",
                          "name": "point"
                        }
                      },
                      "arguments": [
                        {
                          "type": "Identifier",
                          "name": "π"
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
                          "type": "Identifier",
                          "name": "listener"
                        },
                        "property": {
                          "type": "Identifier",
                          "name": "point"
                        }
                      },
                      "arguments": [
                        {
                          "type": "Identifier",
                          "name": "π"
                        },
                        {
                          "type": "UnaryExpression",
                          "operator": "-",
                          "argument": {
                            "type": "Identifier",
                            "name": "φ"
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
                          "name": "listener"
                        },
                        "property": {
                          "type": "Identifier",
                          "name": "point"
                        }
                      },
                      "arguments": [
                        {
                          "type": "Literal",
                          "value": 0,
                          "raw": "0"
                        },
                        {
                          "type": "UnaryExpression",
                          "operator": "-",
                          "argument": {
                            "type": "Identifier",
                            "name": "φ"
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
                          "name": "listener"
                        },
                        "property": {
                          "type": "Identifier",
                          "name": "point"
                        }
                      },
                      "arguments": [
                        {
                          "type": "UnaryExpression",
                          "operator": "-",
                          "argument": {
                            "type": "Identifier",
                            "name": "π"
                          },
                          "prefix": true
                        },
                        {
                          "type": "UnaryExpression",
                          "operator": "-",
                          "argument": {
                            "type": "Identifier",
                            "name": "φ"
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
                          "name": "listener"
                        },
                        "property": {
                          "type": "Identifier",
                          "name": "point"
                        }
                      },
                      "arguments": [
                        {
                          "type": "UnaryExpression",
                          "operator": "-",
                          "argument": {
                            "type": "Identifier",
                            "name": "π"
                          },
                          "prefix": true
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
                          "type": "Identifier",
                          "name": "listener"
                        },
                        "property": {
                          "type": "Identifier",
                          "name": "point"
                        }
                      },
                      "arguments": [
                        {
                          "type": "UnaryExpression",
                          "operator": "-",
                          "argument": {
                            "type": "Identifier",
                            "name": "π"
                          },
                          "prefix": true
                        },
                        {
                          "type": "Identifier",
                          "name": "φ"
                        }
                      ]
                    }
                  }
                ]
              },
              "alternate": {
                "type": "IfStatement",
                "test": {
                  "type": "BinaryExpression",
                  "operator": ">",
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
                          "type": "MemberExpression",
                          "computed": true,
                          "object": {
                            "type": "Identifier",
                            "name": "from"
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
                            "name": "to"
                          },
                          "property": {
                            "type": "Literal",
                            "value": 0,
                            "raw": "0"
                          }
                        }
                      }
                    ]
                  },
                  "right": {
                    "type": "Identifier",
                    "name": "ε"
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
                            "name": "s"
                          },
                          "init": {
                            "type": "ConditionalExpression",
                            "test": {
                              "type": "BinaryExpression",
                              "operator": "<",
                              "left": {
                                "type": "MemberExpression",
                                "computed": true,
                                "object": {
                                  "type": "Identifier",
                                  "name": "from"
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
                                  "name": "to"
                                },
                                "property": {
                                  "type": "Literal",
                                  "value": 0,
                                  "raw": "0"
                                }
                              }
                            },
                            "consequent": {
                              "type": "Identifier",
                              "name": "π"
                            },
                            "alternate": {
                              "type": "UnaryExpression",
                              "operator": "-",
                              "argument": {
                                "type": "Identifier",
                                "name": "π"
                              },
                              "prefix": true
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
                          "name": "φ"
                        },
                        "right": {
                          "type": "BinaryExpression",
                          "operator": "/",
                          "left": {
                            "type": "BinaryExpression",
                            "operator": "*",
                            "left": {
                              "type": "Identifier",
                              "name": "direction"
                            },
                            "right": {
                              "type": "Identifier",
                              "name": "s"
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
                    {
                      "type": "ExpressionStatement",
                      "expression": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "MemberExpression",
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "name": "listener"
                          },
                          "property": {
                            "type": "Identifier",
                            "name": "point"
                          }
                        },
                        "arguments": [
                          {
                            "type": "UnaryExpression",
                            "operator": "-",
                            "argument": {
                              "type": "Identifier",
                              "name": "s"
                            },
                            "prefix": true
                          },
                          {
                            "type": "Identifier",
                            "name": "φ"
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
                            "name": "listener"
                          },
                          "property": {
                            "type": "Identifier",
                            "name": "point"
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
                            "name": "φ"
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
                            "name": "listener"
                          },
                          "property": {
                            "type": "Identifier",
                            "name": "point"
                          }
                        },
                        "arguments": [
                          {
                            "type": "Identifier",
                            "name": "s"
                          },
                          {
                            "type": "Identifier",
                            "name": "φ"
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
                            "name": "listener"
                          },
                          "property": {
                            "type": "Identifier",
                            "name": "point"
                          }
                        },
                        "arguments": [
                          {
                            "type": "MemberExpression",
                            "computed": true,
                            "object": {
                              "type": "Identifier",
                              "name": "to"
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
                              "name": "to"
                            },
                            "property": {
                              "type": "Literal",
                              "value": 1,
                              "raw": "1"
                            }
                          }
                        ]
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
    ]
  },
  "src": "var d3_geo_clipAntimeridian = d3_geo_clip(d3_true, d3_geo_clipAntimeridianLine, d3_geo_clipAntimeridianInterpolate, [\n        -π,\n        -π / 2\n    ]);\nfunction d3_geo_clipAntimeridianLine(listener) {\n    var λ0 = NaN, φ0 = NaN, sλ0 = NaN, clean;\n    return {\n        lineStart: function () {\n            listener.lineStart();\n            clean = 1;\n        },\n        point: function (λ1, φ1) {\n            var sλ1 = λ1 > 0 ? π : -π, dλ = abs(λ1 - λ0);\n            if (abs(dλ - π) < ε) {\n                listener.point(λ0, φ0 = (φ0 + φ1) / 2 > 0 ? halfπ : -halfπ);\n                listener.point(sλ0, φ0);\n                listener.lineEnd();\n                listener.lineStart();\n                listener.point(sλ1, φ0);\n                listener.point(λ1, φ0);\n                clean = 0;\n            } else if (sλ0 !== sλ1 && dλ >= π) {\n                if (abs(λ0 - sλ0) < ε)\n                    λ0 -= sλ0 * ε;\n                if (abs(λ1 - sλ1) < ε)\n                    λ1 -= sλ1 * ε;\n                φ0 = d3_geo_clipAntimeridianIntersect(λ0, φ0, λ1, φ1);\n                listener.point(sλ0, φ0);\n                listener.lineEnd();\n                listener.lineStart();\n                listener.point(sλ1, φ0);\n                clean = 0;\n            }\n            listener.point(λ0 = λ1, φ0 = φ1);\n            sλ0 = sλ1;\n        },\n        lineEnd: function () {\n            listener.lineEnd();\n            λ0 = φ0 = NaN;\n        },\n        clean: function () {\n            return 2 - clean;\n        }\n    };\n}\nfunction d3_geo_clipAntimeridianIntersect(λ0, φ0, λ1, φ1) {\n    var cosφ0, cosφ1, sinλ0_λ1 = Math.sin(λ0 - λ1);\n    return abs(sinλ0_λ1) > ε ? Math.atan((Math.sin(φ0) * (cosφ1 = Math.cos(φ1)) * Math.sin(λ1) - Math.sin(φ1) * (cosφ0 = Math.cos(φ0)) * Math.sin(λ0)) / (cosφ0 * cosφ1 * sinλ0_λ1)) : (φ0 + φ1) / 2;\n}\nfunction d3_geo_clipAntimeridianInterpolate(from, to, direction, listener) {\n    var φ;\n    if (from == null) {\n        φ = direction * halfπ;\n        listener.point(-π, φ);\n        listener.point(0, φ);\n        listener.point(π, φ);\n        listener.point(π, 0);\n        listener.point(π, -φ);\n        listener.point(0, -φ);\n        listener.point(-π, -φ);\n        listener.point(-π, 0);\n        listener.point(-π, φ);\n    } else if (abs(from[0] - to[0]) > ε) {\n        var s = from[0] < to[0] ? π : -π;\n        φ = direction * s / 2;\n        listener.point(-s, φ);\n        listener.point(0, φ);\n        listener.point(s, φ);\n    } else {\n        listener.point(to[0], to[1]);\n    }\n}"
}