{
  "filepath": "/geo/albers-usa.js",
  "shared": [],
  "dependencies": [
    "d3.geo.albers",
    "d3.geo.conicEqualArea"
  ],
  "helpers": [],
  "exports": [
    "d3.geo.albersUsa"
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
                "name": "geo"
              }
            },
            "property": {
              "type": "Identifier",
              "name": "albersUsa"
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
                        "name": "lower48"
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
                              "name": "geo"
                            }
                          },
                          "property": {
                            "type": "Identifier",
                            "name": "albers"
                          }
                        },
                        "arguments": []
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
                        "name": "alaska"
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
                                        "type": "MemberExpression",
                                        "computed": false,
                                        "object": {
                                          "type": "Identifier",
                                          "name": "d3"
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "name": "geo"
                                        }
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "name": "conicEqualArea"
                                      }
                                    },
                                    "arguments": []
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "name": "rotate"
                                  }
                                },
                                "arguments": [
                                  {
                                    "type": "ArrayExpression",
                                    "elements": [
                                      {
                                        "type": "Literal",
                                        "value": 154,
                                        "raw": "154"
                                      },
                                      {
                                        "type": "Literal",
                                        "value": 0,
                                        "raw": "0"
                                      }
                                    ]
                                  }
                                ]
                              },
                              "property": {
                                "type": "Identifier",
                                "name": "center"
                              }
                            },
                            "arguments": [
                              {
                                "type": "ArrayExpression",
                                "elements": [
                                  {
                                    "type": "UnaryExpression",
                                    "operator": "-",
                                    "argument": {
                                      "type": "Literal",
                                      "value": 2,
                                      "raw": "2"
                                    },
                                    "prefix": true
                                  },
                                  {
                                    "type": "Literal",
                                    "value": 58.5,
                                    "raw": "58.5"
                                  }
                                ]
                              }
                            ]
                          },
                          "property": {
                            "type": "Identifier",
                            "name": "parallels"
                          }
                        },
                        "arguments": [
                          {
                            "type": "ArrayExpression",
                            "elements": [
                              {
                                "type": "Literal",
                                "value": 55,
                                "raw": "55"
                              },
                              {
                                "type": "Literal",
                                "value": 65,
                                "raw": "65"
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
                  "type": "VariableDeclaration",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "name": "hawaii"
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
                                        "type": "MemberExpression",
                                        "computed": false,
                                        "object": {
                                          "type": "Identifier",
                                          "name": "d3"
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "name": "geo"
                                        }
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "name": "conicEqualArea"
                                      }
                                    },
                                    "arguments": []
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "name": "rotate"
                                  }
                                },
                                "arguments": [
                                  {
                                    "type": "ArrayExpression",
                                    "elements": [
                                      {
                                        "type": "Literal",
                                        "value": 157,
                                        "raw": "157"
                                      },
                                      {
                                        "type": "Literal",
                                        "value": 0,
                                        "raw": "0"
                                      }
                                    ]
                                  }
                                ]
                              },
                              "property": {
                                "type": "Identifier",
                                "name": "center"
                              }
                            },
                            "arguments": [
                              {
                                "type": "ArrayExpression",
                                "elements": [
                                  {
                                    "type": "UnaryExpression",
                                    "operator": "-",
                                    "argument": {
                                      "type": "Literal",
                                      "value": 3,
                                      "raw": "3"
                                    },
                                    "prefix": true
                                  },
                                  {
                                    "type": "Literal",
                                    "value": 19.9,
                                    "raw": "19.9"
                                  }
                                ]
                              }
                            ]
                          },
                          "property": {
                            "type": "Identifier",
                            "name": "parallels"
                          }
                        },
                        "arguments": [
                          {
                            "type": "ArrayExpression",
                            "elements": [
                              {
                                "type": "Literal",
                                "value": 8,
                                "raw": "8"
                              },
                              {
                                "type": "Literal",
                                "value": 18,
                                "raw": "18"
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
                  "type": "VariableDeclaration",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "name": "point"
                      },
                      "init": null
                    },
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "name": "pointStream"
                      },
                      "init": {
                        "type": "ObjectExpression",
                        "properties": [
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
                                  "name": "x"
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
                                      "type": "AssignmentExpression",
                                      "operator": "=",
                                      "left": {
                                        "type": "Identifier",
                                        "name": "point"
                                      },
                                      "right": {
                                        "type": "ArrayExpression",
                                        "elements": [
                                          {
                                            "type": "Identifier",
                                            "name": "x"
                                          },
                                          {
                                            "type": "Identifier",
                                            "name": "y"
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
                            "kind": "init"
                          }
                        ]
                      }
                    },
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "name": "lower48Point"
                      },
                      "init": null
                    },
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "name": "alaskaPoint"
                      },
                      "init": null
                    },
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "name": "hawaiiPoint"
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
                    "name": "albersUsa"
                  },
                  "params": [
                    {
                      "type": "Identifier",
                      "name": "coordinates"
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
                              "name": "x"
                            },
                            "init": {
                              "type": "MemberExpression",
                              "computed": true,
                              "object": {
                                "type": "Identifier",
                                "name": "coordinates"
                              },
                              "property": {
                                "type": "Literal",
                                "value": 0,
                                "raw": "0"
                              }
                            }
                          },
                          {
                            "type": "VariableDeclarator",
                            "id": {
                              "type": "Identifier",
                              "name": "y"
                            },
                            "init": {
                              "type": "MemberExpression",
                              "computed": true,
                              "object": {
                                "type": "Identifier",
                                "name": "coordinates"
                              },
                              "property": {
                                "type": "Literal",
                                "value": 1,
                                "raw": "1"
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
                            "name": "point"
                          },
                          "right": {
                            "type": "Literal",
                            "value": null,
                            "raw": "null"
                          }
                        }
                      },
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "LogicalExpression",
                          "operator": "||",
                          "left": {
                            "type": "LogicalExpression",
                            "operator": "||",
                            "left": {
                              "type": "SequenceExpression",
                              "expressions": [
                                {
                                  "type": "CallExpression",
                                  "callee": {
                                    "type": "Identifier",
                                    "name": "lower48Point"
                                  },
                                  "arguments": [
                                    {
                                      "type": "Identifier",
                                      "name": "x"
                                    },
                                    {
                                      "type": "Identifier",
                                      "name": "y"
                                    }
                                  ]
                                },
                                {
                                  "type": "Identifier",
                                  "name": "point"
                                }
                              ]
                            },
                            "right": {
                              "type": "SequenceExpression",
                              "expressions": [
                                {
                                  "type": "CallExpression",
                                  "callee": {
                                    "type": "Identifier",
                                    "name": "alaskaPoint"
                                  },
                                  "arguments": [
                                    {
                                      "type": "Identifier",
                                      "name": "x"
                                    },
                                    {
                                      "type": "Identifier",
                                      "name": "y"
                                    }
                                  ]
                                },
                                {
                                  "type": "Identifier",
                                  "name": "point"
                                }
                              ]
                            }
                          },
                          "right": {
                            "type": "CallExpression",
                            "callee": {
                              "type": "Identifier",
                              "name": "hawaiiPoint"
                            },
                            "arguments": [
                              {
                                "type": "Identifier",
                                "name": "x"
                              },
                              {
                                "type": "Identifier",
                                "name": "y"
                              }
                            ]
                          }
                        }
                      },
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "Identifier",
                          "name": "point"
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
                        "name": "albersUsa"
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
                          "name": "coordinates"
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
                                      "name": "lower48"
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "name": "scale"
                                    }
                                  },
                                  "arguments": []
                                }
                              },
                              {
                                "type": "VariableDeclarator",
                                "id": {
                                  "type": "Identifier",
                                  "name": "t"
                                },
                                "init": {
                                  "type": "CallExpression",
                                  "callee": {
                                    "type": "MemberExpression",
                                    "computed": false,
                                    "object": {
                                      "type": "Identifier",
                                      "name": "lower48"
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "name": "translate"
                                    }
                                  },
                                  "arguments": []
                                }
                              },
                              {
                                "type": "VariableDeclarator",
                                "id": {
                                  "type": "Identifier",
                                  "name": "x"
                                },
                                "init": {
                                  "type": "BinaryExpression",
                                  "operator": "/",
                                  "left": {
                                    "type": "BinaryExpression",
                                    "operator": "-",
                                    "left": {
                                      "type": "MemberExpression",
                                      "computed": true,
                                      "object": {
                                        "type": "Identifier",
                                        "name": "coordinates"
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
                                        "name": "t"
                                      },
                                      "property": {
                                        "type": "Literal",
                                        "value": 0,
                                        "raw": "0"
                                      }
                                    }
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "name": "k"
                                  }
                                }
                              },
                              {
                                "type": "VariableDeclarator",
                                "id": {
                                  "type": "Identifier",
                                  "name": "y"
                                },
                                "init": {
                                  "type": "BinaryExpression",
                                  "operator": "/",
                                  "left": {
                                    "type": "BinaryExpression",
                                    "operator": "-",
                                    "left": {
                                      "type": "MemberExpression",
                                      "computed": true,
                                      "object": {
                                        "type": "Identifier",
                                        "name": "coordinates"
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
                                        "name": "t"
                                      },
                                      "property": {
                                        "type": "Literal",
                                        "value": 1,
                                        "raw": "1"
                                      }
                                    }
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "name": "k"
                                  }
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
                                "type": "MemberExpression",
                                "computed": false,
                                "object": {
                                  "type": "ConditionalExpression",
                                  "test": {
                                    "type": "LogicalExpression",
                                    "operator": "&&",
                                    "left": {
                                      "type": "LogicalExpression",
                                      "operator": "&&",
                                      "left": {
                                        "type": "LogicalExpression",
                                        "operator": "&&",
                                        "left": {
                                          "type": "BinaryExpression",
                                          "operator": ">=",
                                          "left": {
                                            "type": "Identifier",
                                            "name": "y"
                                          },
                                          "right": {
                                            "type": "Literal",
                                            "value": 0.12,
                                            "raw": ".120"
                                          }
                                        },
                                        "right": {
                                          "type": "BinaryExpression",
                                          "operator": "<",
                                          "left": {
                                            "type": "Identifier",
                                            "name": "y"
                                          },
                                          "right": {
                                            "type": "Literal",
                                            "value": 0.234,
                                            "raw": ".234"
                                          }
                                        }
                                      },
                                      "right": {
                                        "type": "BinaryExpression",
                                        "operator": ">=",
                                        "left": {
                                          "type": "Identifier",
                                          "name": "x"
                                        },
                                        "right": {
                                          "type": "UnaryExpression",
                                          "operator": "-",
                                          "argument": {
                                            "type": "Literal",
                                            "value": 0.425,
                                            "raw": ".425"
                                          },
                                          "prefix": true
                                        }
                                      }
                                    },
                                    "right": {
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
                                          "value": 0.214,
                                          "raw": ".214"
                                        },
                                        "prefix": true
                                      }
                                    }
                                  },
                                  "consequent": {
                                    "type": "Identifier",
                                    "name": "alaska"
                                  },
                                  "alternate": {
                                    "type": "ConditionalExpression",
                                    "test": {
                                      "type": "LogicalExpression",
                                      "operator": "&&",
                                      "left": {
                                        "type": "LogicalExpression",
                                        "operator": "&&",
                                        "left": {
                                          "type": "LogicalExpression",
                                          "operator": "&&",
                                          "left": {
                                            "type": "BinaryExpression",
                                            "operator": ">=",
                                            "left": {
                                              "type": "Identifier",
                                              "name": "y"
                                            },
                                            "right": {
                                              "type": "Literal",
                                              "value": 0.166,
                                              "raw": ".166"
                                            }
                                          },
                                          "right": {
                                            "type": "BinaryExpression",
                                            "operator": "<",
                                            "left": {
                                              "type": "Identifier",
                                              "name": "y"
                                            },
                                            "right": {
                                              "type": "Literal",
                                              "value": 0.234,
                                              "raw": ".234"
                                            }
                                          }
                                        },
                                        "right": {
                                          "type": "BinaryExpression",
                                          "operator": ">=",
                                          "left": {
                                            "type": "Identifier",
                                            "name": "x"
                                          },
                                          "right": {
                                            "type": "UnaryExpression",
                                            "operator": "-",
                                            "argument": {
                                              "type": "Literal",
                                              "value": 0.214,
                                              "raw": ".214"
                                            },
                                            "prefix": true
                                          }
                                        }
                                      },
                                      "right": {
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
                                            "value": 0.115,
                                            "raw": ".115"
                                          },
                                          "prefix": true
                                        }
                                      }
                                    },
                                    "consequent": {
                                      "type": "Identifier",
                                      "name": "hawaii"
                                    },
                                    "alternate": {
                                      "type": "Identifier",
                                      "name": "lower48"
                                    }
                                  }
                                },
                                "property": {
                                  "type": "Identifier",
                                  "name": "invert"
                                }
                              },
                              "arguments": [
                                {
                                  "type": "Identifier",
                                  "name": "coordinates"
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
                        "name": "albersUsa"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "stream"
                      }
                    },
                    "right": {
                      "type": "FunctionExpression",
                      "id": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "name": "stream"
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
                                  "name": "lower48Stream"
                                },
                                "init": {
                                  "type": "CallExpression",
                                  "callee": {
                                    "type": "MemberExpression",
                                    "computed": false,
                                    "object": {
                                      "type": "Identifier",
                                      "name": "lower48"
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "name": "stream"
                                    }
                                  },
                                  "arguments": [
                                    {
                                      "type": "Identifier",
                                      "name": "stream"
                                    }
                                  ]
                                }
                              },
                              {
                                "type": "VariableDeclarator",
                                "id": {
                                  "type": "Identifier",
                                  "name": "alaskaStream"
                                },
                                "init": {
                                  "type": "CallExpression",
                                  "callee": {
                                    "type": "MemberExpression",
                                    "computed": false,
                                    "object": {
                                      "type": "Identifier",
                                      "name": "alaska"
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "name": "stream"
                                    }
                                  },
                                  "arguments": [
                                    {
                                      "type": "Identifier",
                                      "name": "stream"
                                    }
                                  ]
                                }
                              },
                              {
                                "type": "VariableDeclarator",
                                "id": {
                                  "type": "Identifier",
                                  "name": "hawaiiStream"
                                },
                                "init": {
                                  "type": "CallExpression",
                                  "callee": {
                                    "type": "MemberExpression",
                                    "computed": false,
                                    "object": {
                                      "type": "Identifier",
                                      "name": "hawaii"
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "name": "stream"
                                    }
                                  },
                                  "arguments": [
                                    {
                                      "type": "Identifier",
                                      "name": "stream"
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
                                    "name": "point"
                                  },
                                  "value": {
                                    "type": "FunctionExpression",
                                    "id": null,
                                    "params": [
                                      {
                                        "type": "Identifier",
                                        "name": "x"
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
                                                "name": "lower48Stream"
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "name": "point"
                                              }
                                            },
                                            "arguments": [
                                              {
                                                "type": "Identifier",
                                                "name": "x"
                                              },
                                              {
                                                "type": "Identifier",
                                                "name": "y"
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
                                                "name": "alaskaStream"
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "name": "point"
                                              }
                                            },
                                            "arguments": [
                                              {
                                                "type": "Identifier",
                                                "name": "x"
                                              },
                                              {
                                                "type": "Identifier",
                                                "name": "y"
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
                                                "name": "hawaiiStream"
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "name": "point"
                                              }
                                            },
                                            "arguments": [
                                              {
                                                "type": "Identifier",
                                                "name": "x"
                                              },
                                              {
                                                "type": "Identifier",
                                                "name": "y"
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
                                  "kind": "init"
                                },
                                {
                                  "type": "Property",
                                  "key": {
                                    "type": "Identifier",
                                    "name": "sphere"
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
                                                "name": "lower48Stream"
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "name": "sphere"
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
                                                "name": "alaskaStream"
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "name": "sphere"
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
                                                "name": "hawaiiStream"
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "name": "sphere"
                                              }
                                            },
                                            "arguments": []
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
                                                "name": "lower48Stream"
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
                                                "name": "alaskaStream"
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
                                                "name": "hawaiiStream"
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "name": "lineStart"
                                              }
                                            },
                                            "arguments": []
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
                                                "name": "lower48Stream"
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
                                                "name": "alaskaStream"
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
                                                "name": "hawaiiStream"
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "name": "lineEnd"
                                              }
                                            },
                                            "arguments": []
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
                                    "name": "polygonStart"
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
                                                "name": "lower48Stream"
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "name": "polygonStart"
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
                                                "name": "alaskaStream"
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "name": "polygonStart"
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
                                                "name": "hawaiiStream"
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "name": "polygonStart"
                                              }
                                            },
                                            "arguments": []
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
                                    "name": "polygonEnd"
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
                                                "name": "lower48Stream"
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "name": "polygonEnd"
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
                                                "name": "alaskaStream"
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "name": "polygonEnd"
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
                                                "name": "hawaiiStream"
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "name": "polygonEnd"
                                              }
                                            },
                                            "arguments": []
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
                        "name": "albersUsa"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "precision"
                      }
                    },
                    "right": {
                      "type": "FunctionExpression",
                      "id": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "name": "_"
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
                                "type": "CallExpression",
                                "callee": {
                                  "type": "MemberExpression",
                                  "computed": false,
                                  "object": {
                                    "type": "Identifier",
                                    "name": "lower48"
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "name": "precision"
                                  }
                                },
                                "arguments": []
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
                                  "name": "lower48"
                                },
                                "property": {
                                  "type": "Identifier",
                                  "name": "precision"
                                }
                              },
                              "arguments": [
                                {
                                  "type": "Identifier",
                                  "name": "_"
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
                                  "name": "alaska"
                                },
                                "property": {
                                  "type": "Identifier",
                                  "name": "precision"
                                }
                              },
                              "arguments": [
                                {
                                  "type": "Identifier",
                                  "name": "_"
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
                                  "name": "hawaii"
                                },
                                "property": {
                                  "type": "Identifier",
                                  "name": "precision"
                                }
                              },
                              "arguments": [
                                {
                                  "type": "Identifier",
                                  "name": "_"
                                }
                              ]
                            }
                          },
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "Identifier",
                              "name": "albersUsa"
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
                        "name": "albersUsa"
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
                          "name": "_"
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
                                "type": "CallExpression",
                                "callee": {
                                  "type": "MemberExpression",
                                  "computed": false,
                                  "object": {
                                    "type": "Identifier",
                                    "name": "lower48"
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "name": "scale"
                                  }
                                },
                                "arguments": []
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
                                  "name": "lower48"
                                },
                                "property": {
                                  "type": "Identifier",
                                  "name": "scale"
                                }
                              },
                              "arguments": [
                                {
                                  "type": "Identifier",
                                  "name": "_"
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
                                  "name": "alaska"
                                },
                                "property": {
                                  "type": "Identifier",
                                  "name": "scale"
                                }
                              },
                              "arguments": [
                                {
                                  "type": "BinaryExpression",
                                  "operator": "*",
                                  "left": {
                                    "type": "Identifier",
                                    "name": "_"
                                  },
                                  "right": {
                                    "type": "Literal",
                                    "value": 0.35,
                                    "raw": ".35"
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
                                  "name": "hawaii"
                                },
                                "property": {
                                  "type": "Identifier",
                                  "name": "scale"
                                }
                              },
                              "arguments": [
                                {
                                  "type": "Identifier",
                                  "name": "_"
                                }
                              ]
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
                                  "name": "albersUsa"
                                },
                                "property": {
                                  "type": "Identifier",
                                  "name": "translate"
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
                                      "name": "lower48"
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "name": "translate"
                                    }
                                  },
                                  "arguments": []
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
                        "name": "albersUsa"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "translate"
                      }
                    },
                    "right": {
                      "type": "FunctionExpression",
                      "id": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "name": "_"
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
                                "type": "CallExpression",
                                "callee": {
                                  "type": "MemberExpression",
                                  "computed": false,
                                  "object": {
                                    "type": "Identifier",
                                    "name": "lower48"
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "name": "translate"
                                  }
                                },
                                "arguments": []
                              }
                            },
                            "alternate": null
                          },
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
                                      "name": "lower48"
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "name": "scale"
                                    }
                                  },
                                  "arguments": []
                                }
                              },
                              {
                                "type": "VariableDeclarator",
                                "id": {
                                  "type": "Identifier",
                                  "name": "x"
                                },
                                "init": {
                                  "type": "UnaryExpression",
                                  "operator": "+",
                                  "argument": {
                                    "type": "MemberExpression",
                                    "computed": true,
                                    "object": {
                                      "type": "Identifier",
                                      "name": "_"
                                    },
                                    "property": {
                                      "type": "Literal",
                                      "value": 0,
                                      "raw": "0"
                                    }
                                  },
                                  "prefix": true
                                }
                              },
                              {
                                "type": "VariableDeclarator",
                                "id": {
                                  "type": "Identifier",
                                  "name": "y"
                                },
                                "init": {
                                  "type": "UnaryExpression",
                                  "operator": "+",
                                  "argument": {
                                    "type": "MemberExpression",
                                    "computed": true,
                                    "object": {
                                      "type": "Identifier",
                                      "name": "_"
                                    },
                                    "property": {
                                      "type": "Literal",
                                      "value": 1,
                                      "raw": "1"
                                    }
                                  },
                                  "prefix": true
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
                                "name": "lower48Point"
                              },
                              "right": {
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
                                              "name": "lower48"
                                            },
                                            "property": {
                                              "type": "Identifier",
                                              "name": "translate"
                                            }
                                          },
                                          "arguments": [
                                            {
                                              "type": "Identifier",
                                              "name": "_"
                                            }
                                          ]
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "name": "clipExtent"
                                        }
                                      },
                                      "arguments": [
                                        {
                                          "type": "ArrayExpression",
                                          "elements": [
                                            {
                                              "type": "ArrayExpression",
                                              "elements": [
                                                {
                                                  "type": "BinaryExpression",
                                                  "operator": "-",
                                                  "left": {
                                                    "type": "Identifier",
                                                    "name": "x"
                                                  },
                                                  "right": {
                                                    "type": "BinaryExpression",
                                                    "operator": "*",
                                                    "left": {
                                                      "type": "Literal",
                                                      "value": 0.455,
                                                      "raw": ".455"
                                                    },
                                                    "right": {
                                                      "type": "Identifier",
                                                      "name": "k"
                                                    }
                                                  }
                                                },
                                                {
                                                  "type": "BinaryExpression",
                                                  "operator": "-",
                                                  "left": {
                                                    "type": "Identifier",
                                                    "name": "y"
                                                  },
                                                  "right": {
                                                    "type": "BinaryExpression",
                                                    "operator": "*",
                                                    "left": {
                                                      "type": "Literal",
                                                      "value": 0.238,
                                                      "raw": ".238"
                                                    },
                                                    "right": {
                                                      "type": "Identifier",
                                                      "name": "k"
                                                    }
                                                  }
                                                }
                                              ]
                                            },
                                            {
                                              "type": "ArrayExpression",
                                              "elements": [
                                                {
                                                  "type": "BinaryExpression",
                                                  "operator": "+",
                                                  "left": {
                                                    "type": "Identifier",
                                                    "name": "x"
                                                  },
                                                  "right": {
                                                    "type": "BinaryExpression",
                                                    "operator": "*",
                                                    "left": {
                                                      "type": "Literal",
                                                      "value": 0.455,
                                                      "raw": ".455"
                                                    },
                                                    "right": {
                                                      "type": "Identifier",
                                                      "name": "k"
                                                    }
                                                  }
                                                },
                                                {
                                                  "type": "BinaryExpression",
                                                  "operator": "+",
                                                  "left": {
                                                    "type": "Identifier",
                                                    "name": "y"
                                                  },
                                                  "right": {
                                                    "type": "BinaryExpression",
                                                    "operator": "*",
                                                    "left": {
                                                      "type": "Literal",
                                                      "value": 0.238,
                                                      "raw": ".238"
                                                    },
                                                    "right": {
                                                      "type": "Identifier",
                                                      "name": "k"
                                                    }
                                                  }
                                                }
                                              ]
                                            }
                                          ]
                                        }
                                      ]
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "name": "stream"
                                    }
                                  },
                                  "arguments": [
                                    {
                                      "type": "Identifier",
                                      "name": "pointStream"
                                    }
                                  ]
                                },
                                "property": {
                                  "type": "Identifier",
                                  "name": "point"
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
                                "name": "alaskaPoint"
                              },
                              "right": {
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
                                              "name": "alaska"
                                            },
                                            "property": {
                                              "type": "Identifier",
                                              "name": "translate"
                                            }
                                          },
                                          "arguments": [
                                            {
                                              "type": "ArrayExpression",
                                              "elements": [
                                                {
                                                  "type": "BinaryExpression",
                                                  "operator": "-",
                                                  "left": {
                                                    "type": "Identifier",
                                                    "name": "x"
                                                  },
                                                  "right": {
                                                    "type": "BinaryExpression",
                                                    "operator": "*",
                                                    "left": {
                                                      "type": "Literal",
                                                      "value": 0.307,
                                                      "raw": ".307"
                                                    },
                                                    "right": {
                                                      "type": "Identifier",
                                                      "name": "k"
                                                    }
                                                  }
                                                },
                                                {
                                                  "type": "BinaryExpression",
                                                  "operator": "+",
                                                  "left": {
                                                    "type": "Identifier",
                                                    "name": "y"
                                                  },
                                                  "right": {
                                                    "type": "BinaryExpression",
                                                    "operator": "*",
                                                    "left": {
                                                      "type": "Literal",
                                                      "value": 0.201,
                                                      "raw": ".201"
                                                    },
                                                    "right": {
                                                      "type": "Identifier",
                                                      "name": "k"
                                                    }
                                                  }
                                                }
                                              ]
                                            }
                                          ]
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "name": "clipExtent"
                                        }
                                      },
                                      "arguments": [
                                        {
                                          "type": "ArrayExpression",
                                          "elements": [
                                            {
                                              "type": "ArrayExpression",
                                              "elements": [
                                                {
                                                  "type": "BinaryExpression",
                                                  "operator": "+",
                                                  "left": {
                                                    "type": "BinaryExpression",
                                                    "operator": "-",
                                                    "left": {
                                                      "type": "Identifier",
                                                      "name": "x"
                                                    },
                                                    "right": {
                                                      "type": "BinaryExpression",
                                                      "operator": "*",
                                                      "left": {
                                                        "type": "Literal",
                                                        "value": 0.425,
                                                        "raw": ".425"
                                                      },
                                                      "right": {
                                                        "type": "Identifier",
                                                        "name": "k"
                                                      }
                                                    }
                                                  },
                                                  "right": {
                                                    "type": "Identifier",
                                                    "name": "ε"
                                                  }
                                                },
                                                {
                                                  "type": "BinaryExpression",
                                                  "operator": "+",
                                                  "left": {
                                                    "type": "BinaryExpression",
                                                    "operator": "+",
                                                    "left": {
                                                      "type": "Identifier",
                                                      "name": "y"
                                                    },
                                                    "right": {
                                                      "type": "BinaryExpression",
                                                      "operator": "*",
                                                      "left": {
                                                        "type": "Literal",
                                                        "value": 0.12,
                                                        "raw": ".120"
                                                      },
                                                      "right": {
                                                        "type": "Identifier",
                                                        "name": "k"
                                                      }
                                                    }
                                                  },
                                                  "right": {
                                                    "type": "Identifier",
                                                    "name": "ε"
                                                  }
                                                }
                                              ]
                                            },
                                            {
                                              "type": "ArrayExpression",
                                              "elements": [
                                                {
                                                  "type": "BinaryExpression",
                                                  "operator": "-",
                                                  "left": {
                                                    "type": "BinaryExpression",
                                                    "operator": "-",
                                                    "left": {
                                                      "type": "Identifier",
                                                      "name": "x"
                                                    },
                                                    "right": {
                                                      "type": "BinaryExpression",
                                                      "operator": "*",
                                                      "left": {
                                                        "type": "Literal",
                                                        "value": 0.214,
                                                        "raw": ".214"
                                                      },
                                                      "right": {
                                                        "type": "Identifier",
                                                        "name": "k"
                                                      }
                                                    }
                                                  },
                                                  "right": {
                                                    "type": "Identifier",
                                                    "name": "ε"
                                                  }
                                                },
                                                {
                                                  "type": "BinaryExpression",
                                                  "operator": "-",
                                                  "left": {
                                                    "type": "BinaryExpression",
                                                    "operator": "+",
                                                    "left": {
                                                      "type": "Identifier",
                                                      "name": "y"
                                                    },
                                                    "right": {
                                                      "type": "BinaryExpression",
                                                      "operator": "*",
                                                      "left": {
                                                        "type": "Literal",
                                                        "value": 0.234,
                                                        "raw": ".234"
                                                      },
                                                      "right": {
                                                        "type": "Identifier",
                                                        "name": "k"
                                                      }
                                                    }
                                                  },
                                                  "right": {
                                                    "type": "Identifier",
                                                    "name": "ε"
                                                  }
                                                }
                                              ]
                                            }
                                          ]
                                        }
                                      ]
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "name": "stream"
                                    }
                                  },
                                  "arguments": [
                                    {
                                      "type": "Identifier",
                                      "name": "pointStream"
                                    }
                                  ]
                                },
                                "property": {
                                  "type": "Identifier",
                                  "name": "point"
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
                                "name": "hawaiiPoint"
                              },
                              "right": {
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
                                              "name": "hawaii"
                                            },
                                            "property": {
                                              "type": "Identifier",
                                              "name": "translate"
                                            }
                                          },
                                          "arguments": [
                                            {
                                              "type": "ArrayExpression",
                                              "elements": [
                                                {
                                                  "type": "BinaryExpression",
                                                  "operator": "-",
                                                  "left": {
                                                    "type": "Identifier",
                                                    "name": "x"
                                                  },
                                                  "right": {
                                                    "type": "BinaryExpression",
                                                    "operator": "*",
                                                    "left": {
                                                      "type": "Literal",
                                                      "value": 0.205,
                                                      "raw": ".205"
                                                    },
                                                    "right": {
                                                      "type": "Identifier",
                                                      "name": "k"
                                                    }
                                                  }
                                                },
                                                {
                                                  "type": "BinaryExpression",
                                                  "operator": "+",
                                                  "left": {
                                                    "type": "Identifier",
                                                    "name": "y"
                                                  },
                                                  "right": {
                                                    "type": "BinaryExpression",
                                                    "operator": "*",
                                                    "left": {
                                                      "type": "Literal",
                                                      "value": 0.212,
                                                      "raw": ".212"
                                                    },
                                                    "right": {
                                                      "type": "Identifier",
                                                      "name": "k"
                                                    }
                                                  }
                                                }
                                              ]
                                            }
                                          ]
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "name": "clipExtent"
                                        }
                                      },
                                      "arguments": [
                                        {
                                          "type": "ArrayExpression",
                                          "elements": [
                                            {
                                              "type": "ArrayExpression",
                                              "elements": [
                                                {
                                                  "type": "BinaryExpression",
                                                  "operator": "+",
                                                  "left": {
                                                    "type": "BinaryExpression",
                                                    "operator": "-",
                                                    "left": {
                                                      "type": "Identifier",
                                                      "name": "x"
                                                    },
                                                    "right": {
                                                      "type": "BinaryExpression",
                                                      "operator": "*",
                                                      "left": {
                                                        "type": "Literal",
                                                        "value": 0.214,
                                                        "raw": ".214"
                                                      },
                                                      "right": {
                                                        "type": "Identifier",
                                                        "name": "k"
                                                      }
                                                    }
                                                  },
                                                  "right": {
                                                    "type": "Identifier",
                                                    "name": "ε"
                                                  }
                                                },
                                                {
                                                  "type": "BinaryExpression",
                                                  "operator": "+",
                                                  "left": {
                                                    "type": "BinaryExpression",
                                                    "operator": "+",
                                                    "left": {
                                                      "type": "Identifier",
                                                      "name": "y"
                                                    },
                                                    "right": {
                                                      "type": "BinaryExpression",
                                                      "operator": "*",
                                                      "left": {
                                                        "type": "Literal",
                                                        "value": 0.166,
                                                        "raw": ".166"
                                                      },
                                                      "right": {
                                                        "type": "Identifier",
                                                        "name": "k"
                                                      }
                                                    }
                                                  },
                                                  "right": {
                                                    "type": "Identifier",
                                                    "name": "ε"
                                                  }
                                                }
                                              ]
                                            },
                                            {
                                              "type": "ArrayExpression",
                                              "elements": [
                                                {
                                                  "type": "BinaryExpression",
                                                  "operator": "-",
                                                  "left": {
                                                    "type": "BinaryExpression",
                                                    "operator": "-",
                                                    "left": {
                                                      "type": "Identifier",
                                                      "name": "x"
                                                    },
                                                    "right": {
                                                      "type": "BinaryExpression",
                                                      "operator": "*",
                                                      "left": {
                                                        "type": "Literal",
                                                        "value": 0.115,
                                                        "raw": ".115"
                                                      },
                                                      "right": {
                                                        "type": "Identifier",
                                                        "name": "k"
                                                      }
                                                    }
                                                  },
                                                  "right": {
                                                    "type": "Identifier",
                                                    "name": "ε"
                                                  }
                                                },
                                                {
                                                  "type": "BinaryExpression",
                                                  "operator": "-",
                                                  "left": {
                                                    "type": "BinaryExpression",
                                                    "operator": "+",
                                                    "left": {
                                                      "type": "Identifier",
                                                      "name": "y"
                                                    },
                                                    "right": {
                                                      "type": "BinaryExpression",
                                                      "operator": "*",
                                                      "left": {
                                                        "type": "Literal",
                                                        "value": 0.234,
                                                        "raw": ".234"
                                                      },
                                                      "right": {
                                                        "type": "Identifier",
                                                        "name": "k"
                                                      }
                                                    }
                                                  },
                                                  "right": {
                                                    "type": "Identifier",
                                                    "name": "ε"
                                                  }
                                                }
                                              ]
                                            }
                                          ]
                                        }
                                      ]
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "name": "stream"
                                    }
                                  },
                                  "arguments": [
                                    {
                                      "type": "Identifier",
                                      "name": "pointStream"
                                    }
                                  ]
                                },
                                "property": {
                                  "type": "Identifier",
                                  "name": "point"
                                }
                              }
                            }
                          },
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "Identifier",
                              "name": "albersUsa"
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
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "name": "albersUsa"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "scale"
                      }
                    },
                    "arguments": [
                      {
                        "type": "Literal",
                        "value": 1070,
                        "raw": "1070"
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
  }
}