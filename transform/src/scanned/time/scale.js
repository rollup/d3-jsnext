{
  "filepath": "/time/scale.js",
  "shared": [],
  "dependencies": [
    "d3.bisect",
    "d3_scale_linearTickRange",
    "d3_scaleExtent",
    "d3_scale_nice",
    "d3_scale_linearRebind",
    "d3_time",
    "d3_time_format",
    "d3_true",
    "d3.range",
    "d3_identity",
    "d3.scale.linear"
  ],
  "helpers": [
    "d3_time_scale",
    "d3_time_scaleDate",
    "d3_time_scaleSteps",
    "d3_time_scaleLocalMethods",
    "d3_time_scaleLocalFormat",
    "d3_time_scaleMilliseconds"
  ],
  "exports": [],
  "ast": {
    "type": "Program",
    "body": [
      {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "name": "d3_time_scale"
        },
        "params": [
          {
            "type": "Identifier",
            "name": "linear"
          },
          {
            "type": "Identifier",
            "name": "methods"
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
                          "type": "Identifier",
                          "name": "x"
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
                            "name": "d3_time_scaleDate"
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
                                    "name": "linear"
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "name": "domain"
                                  }
                                },
                                "arguments": []
                              },
                              "property": {
                                "type": "Identifier",
                                "name": "map"
                              }
                            },
                            "arguments": [
                              {
                                "type": "Identifier",
                                "name": "d3_time_scaleDate"
                              }
                            ]
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
                              "type": "Identifier",
                              "name": "x"
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
              "type": "FunctionDeclaration",
              "id": {
                "type": "Identifier",
                "name": "tickMethod"
              },
              "params": [
                {
                  "type": "Identifier",
                  "name": "extent"
                },
                {
                  "type": "Identifier",
                  "name": "count"
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
                          "name": "span"
                        },
                        "init": {
                          "type": "BinaryExpression",
                          "operator": "-",
                          "left": {
                            "type": "MemberExpression",
                            "computed": true,
                            "object": {
                              "type": "Identifier",
                              "name": "extent"
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
                              "name": "extent"
                            },
                            "property": {
                              "type": "Literal",
                              "value": 0,
                              "raw": "0"
                            }
                          }
                        }
                      },
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "name": "target"
                        },
                        "init": {
                          "type": "BinaryExpression",
                          "operator": "/",
                          "left": {
                            "type": "Identifier",
                            "name": "span"
                          },
                          "right": {
                            "type": "Identifier",
                            "name": "count"
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
                              "name": "bisect"
                            }
                          },
                          "arguments": [
                            {
                              "type": "Identifier",
                              "name": "d3_time_scaleSteps"
                            },
                            {
                              "type": "Identifier",
                              "name": "target"
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
                        "operator": "==",
                        "left": {
                          "type": "Identifier",
                          "name": "i"
                        },
                        "right": {
                          "type": "MemberExpression",
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "name": "d3_time_scaleSteps"
                          },
                          "property": {
                            "type": "Identifier",
                            "name": "length"
                          }
                        }
                      },
                      "consequent": {
                        "type": "ArrayExpression",
                        "elements": [
                          {
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "name": "methods"
                            },
                            "property": {
                              "type": "Identifier",
                              "name": "year"
                            }
                          },
                          {
                            "type": "MemberExpression",
                            "computed": true,
                            "object": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "Identifier",
                                "name": "d3_scale_linearTickRange"
                              },
                              "arguments": [
                                {
                                  "type": "CallExpression",
                                  "callee": {
                                    "type": "MemberExpression",
                                    "computed": false,
                                    "object": {
                                      "type": "Identifier",
                                      "name": "extent"
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "name": "map"
                                    }
                                  },
                                  "arguments": [
                                    {
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
                                                "type": "Literal",
                                                "value": 31536000000,
                                                "raw": "31536e6"
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
                                {
                                  "type": "Identifier",
                                  "name": "count"
                                }
                              ]
                            },
                            "property": {
                              "type": "Literal",
                              "value": 2,
                              "raw": "2"
                            }
                          }
                        ]
                      },
                      "alternate": {
                        "type": "ConditionalExpression",
                        "test": {
                          "type": "UnaryExpression",
                          "operator": "!",
                          "argument": {
                            "type": "Identifier",
                            "name": "i"
                          },
                          "prefix": true
                        },
                        "consequent": {
                          "type": "ArrayExpression",
                          "elements": [
                            {
                              "type": "Identifier",
                              "name": "d3_time_scaleMilliseconds"
                            },
                            {
                              "type": "MemberExpression",
                              "computed": true,
                              "object": {
                                "type": "CallExpression",
                                "callee": {
                                  "type": "Identifier",
                                  "name": "d3_scale_linearTickRange"
                                },
                                "arguments": [
                                  {
                                    "type": "Identifier",
                                    "name": "extent"
                                  },
                                  {
                                    "type": "Identifier",
                                    "name": "count"
                                  }
                                ]
                              },
                              "property": {
                                "type": "Literal",
                                "value": 2,
                                "raw": "2"
                              }
                            }
                          ]
                        },
                        "alternate": {
                          "type": "MemberExpression",
                          "computed": true,
                          "object": {
                            "type": "Identifier",
                            "name": "methods"
                          },
                          "property": {
                            "type": "ConditionalExpression",
                            "test": {
                              "type": "BinaryExpression",
                              "operator": "<",
                              "left": {
                                "type": "BinaryExpression",
                                "operator": "/",
                                "left": {
                                  "type": "Identifier",
                                  "name": "target"
                                },
                                "right": {
                                  "type": "MemberExpression",
                                  "computed": true,
                                  "object": {
                                    "type": "Identifier",
                                    "name": "d3_time_scaleSteps"
                                  },
                                  "property": {
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
                                  }
                                }
                              },
                              "right": {
                                "type": "BinaryExpression",
                                "operator": "/",
                                "left": {
                                  "type": "MemberExpression",
                                  "computed": true,
                                  "object": {
                                    "type": "Identifier",
                                    "name": "d3_time_scaleSteps"
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "name": "i"
                                  }
                                },
                                "right": {
                                  "type": "Identifier",
                                  "name": "target"
                                }
                              }
                            },
                            "consequent": {
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
                            "alternate": {
                              "type": "Identifier",
                              "name": "i"
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
                      "name": "interval"
                    },
                    {
                      "type": "Identifier",
                      "name": "skip"
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
                              "name": "domain"
                            },
                            "init": {
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
                              "arguments": []
                            }
                          },
                          {
                            "type": "VariableDeclarator",
                            "id": {
                              "type": "Identifier",
                              "name": "extent"
                            },
                            "init": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "Identifier",
                                "name": "d3_scaleExtent"
                              },
                              "arguments": [
                                {
                                  "type": "Identifier",
                                  "name": "domain"
                                }
                              ]
                            }
                          },
                          {
                            "type": "VariableDeclarator",
                            "id": {
                              "type": "Identifier",
                              "name": "method"
                            },
                            "init": {
                              "type": "ConditionalExpression",
                              "test": {
                                "type": "BinaryExpression",
                                "operator": "==",
                                "left": {
                                  "type": "Identifier",
                                  "name": "interval"
                                },
                                "right": {
                                  "type": "Literal",
                                  "value": null,
                                  "raw": "null"
                                }
                              },
                              "consequent": {
                                "type": "CallExpression",
                                "callee": {
                                  "type": "Identifier",
                                  "name": "tickMethod"
                                },
                                "arguments": [
                                  {
                                    "type": "Identifier",
                                    "name": "extent"
                                  },
                                  {
                                    "type": "Literal",
                                    "value": 10,
                                    "raw": "10"
                                  }
                                ]
                              },
                              "alternate": {
                                "type": "LogicalExpression",
                                "operator": "&&",
                                "left": {
                                  "type": "BinaryExpression",
                                  "operator": "===",
                                  "left": {
                                    "type": "UnaryExpression",
                                    "operator": "typeof",
                                    "argument": {
                                      "type": "Identifier",
                                      "name": "interval"
                                    },
                                    "prefix": true
                                  },
                                  "right": {
                                    "type": "Literal",
                                    "value": "number",
                                    "raw": "\"number\""
                                  }
                                },
                                "right": {
                                  "type": "CallExpression",
                                  "callee": {
                                    "type": "Identifier",
                                    "name": "tickMethod"
                                  },
                                  "arguments": [
                                    {
                                      "type": "Identifier",
                                      "name": "extent"
                                    },
                                    {
                                      "type": "Identifier",
                                      "name": "interval"
                                    }
                                  ]
                                }
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
                          "name": "method"
                        },
                        "consequent": {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "SequenceExpression",
                            "expressions": [
                              {
                                "type": "AssignmentExpression",
                                "operator": "=",
                                "left": {
                                  "type": "Identifier",
                                  "name": "interval"
                                },
                                "right": {
                                  "type": "MemberExpression",
                                  "computed": true,
                                  "object": {
                                    "type": "Identifier",
                                    "name": "method"
                                  },
                                  "property": {
                                    "type": "Literal",
                                    "value": 0,
                                    "raw": "0"
                                  }
                                }
                              },
                              {
                                "type": "AssignmentExpression",
                                "operator": "=",
                                "left": {
                                  "type": "Identifier",
                                  "name": "skip"
                                },
                                "right": {
                                  "type": "MemberExpression",
                                  "computed": true,
                                  "object": {
                                    "type": "Identifier",
                                    "name": "method"
                                  },
                                  "property": {
                                    "type": "Literal",
                                    "value": 1,
                                    "raw": "1"
                                  }
                                }
                              }
                            ]
                          }
                        },
                        "alternate": null
                      },
                      {
                        "type": "FunctionDeclaration",
                        "id": {
                          "type": "Identifier",
                          "name": "skipped"
                        },
                        "params": [
                          {
                            "type": "Identifier",
                            "name": "date"
                          }
                        ],
                        "defaults": [],
                        "body": {
                          "type": "BlockStatement",
                          "body": [
                            {
                              "type": "ReturnStatement",
                              "argument": {
                                "type": "LogicalExpression",
                                "operator": "&&",
                                "left": {
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
                                        "type": "Identifier",
                                        "name": "date"
                                      }
                                    ]
                                  },
                                  "prefix": true
                                },
                                "right": {
                                  "type": "UnaryExpression",
                                  "operator": "!",
                                  "argument": {
                                    "type": "MemberExpression",
                                    "computed": false,
                                    "object": {
                                      "type": "CallExpression",
                                      "callee": {
                                        "type": "MemberExpression",
                                        "computed": false,
                                        "object": {
                                          "type": "Identifier",
                                          "name": "interval"
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "name": "range"
                                        }
                                      },
                                      "arguments": [
                                        {
                                          "type": "Identifier",
                                          "name": "date"
                                        },
                                        {
                                          "type": "CallExpression",
                                          "callee": {
                                            "type": "Identifier",
                                            "name": "d3_time_scaleDate"
                                          },
                                          "arguments": [
                                            {
                                              "type": "BinaryExpression",
                                              "operator": "+",
                                              "left": {
                                                "type": "UnaryExpression",
                                                "operator": "+",
                                                "argument": {
                                                  "type": "Identifier",
                                                  "name": "date"
                                                },
                                                "prefix": true
                                              },
                                              "right": {
                                                "type": "Literal",
                                                "value": 1,
                                                "raw": "1"
                                              }
                                            }
                                          ]
                                        },
                                        {
                                          "type": "Identifier",
                                          "name": "skip"
                                        }
                                      ]
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "name": "length"
                                    }
                                  },
                                  "prefix": true
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
                                "name": "d3_scale_nice"
                              },
                              "arguments": [
                                {
                                  "type": "Identifier",
                                  "name": "domain"
                                },
                                {
                                  "type": "ConditionalExpression",
                                  "test": {
                                    "type": "BinaryExpression",
                                    "operator": ">",
                                    "left": {
                                      "type": "Identifier",
                                      "name": "skip"
                                    },
                                    "right": {
                                      "type": "Literal",
                                      "value": 1,
                                      "raw": "1"
                                    }
                                  },
                                  "consequent": {
                                    "type": "ObjectExpression",
                                    "properties": [
                                      {
                                        "type": "Property",
                                        "key": {
                                          "type": "Identifier",
                                          "name": "floor"
                                        },
                                        "value": {
                                          "type": "FunctionExpression",
                                          "id": null,
                                          "params": [
                                            {
                                              "type": "Identifier",
                                              "name": "date"
                                            }
                                          ],
                                          "defaults": [],
                                          "body": {
                                            "type": "BlockStatement",
                                            "body": [
                                              {
                                                "type": "WhileStatement",
                                                "test": {
                                                  "type": "CallExpression",
                                                  "callee": {
                                                    "type": "Identifier",
                                                    "name": "skipped"
                                                  },
                                                  "arguments": [
                                                    {
                                                      "type": "AssignmentExpression",
                                                      "operator": "=",
                                                      "left": {
                                                        "type": "Identifier",
                                                        "name": "date"
                                                      },
                                                      "right": {
                                                        "type": "CallExpression",
                                                        "callee": {
                                                          "type": "MemberExpression",
                                                          "computed": false,
                                                          "object": {
                                                            "type": "Identifier",
                                                            "name": "interval"
                                                          },
                                                          "property": {
                                                            "type": "Identifier",
                                                            "name": "floor"
                                                          }
                                                        },
                                                        "arguments": [
                                                          {
                                                            "type": "Identifier",
                                                            "name": "date"
                                                          }
                                                        ]
                                                      }
                                                    }
                                                  ]
                                                },
                                                "body": {
                                                  "type": "ExpressionStatement",
                                                  "expression": {
                                                    "type": "AssignmentExpression",
                                                    "operator": "=",
                                                    "left": {
                                                      "type": "Identifier",
                                                      "name": "date"
                                                    },
                                                    "right": {
                                                      "type": "CallExpression",
                                                      "callee": {
                                                        "type": "Identifier",
                                                        "name": "d3_time_scaleDate"
                                                      },
                                                      "arguments": [
                                                        {
                                                          "type": "BinaryExpression",
                                                          "operator": "-",
                                                          "left": {
                                                            "type": "Identifier",
                                                            "name": "date"
                                                          },
                                                          "right": {
                                                            "type": "Literal",
                                                            "value": 1,
                                                            "raw": "1"
                                                          }
                                                        }
                                                      ]
                                                    }
                                                  }
                                                }
                                              },
                                              {
                                                "type": "ReturnStatement",
                                                "argument": {
                                                  "type": "Identifier",
                                                  "name": "date"
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
                                          "name": "ceil"
                                        },
                                        "value": {
                                          "type": "FunctionExpression",
                                          "id": null,
                                          "params": [
                                            {
                                              "type": "Identifier",
                                              "name": "date"
                                            }
                                          ],
                                          "defaults": [],
                                          "body": {
                                            "type": "BlockStatement",
                                            "body": [
                                              {
                                                "type": "WhileStatement",
                                                "test": {
                                                  "type": "CallExpression",
                                                  "callee": {
                                                    "type": "Identifier",
                                                    "name": "skipped"
                                                  },
                                                  "arguments": [
                                                    {
                                                      "type": "AssignmentExpression",
                                                      "operator": "=",
                                                      "left": {
                                                        "type": "Identifier",
                                                        "name": "date"
                                                      },
                                                      "right": {
                                                        "type": "CallExpression",
                                                        "callee": {
                                                          "type": "MemberExpression",
                                                          "computed": false,
                                                          "object": {
                                                            "type": "Identifier",
                                                            "name": "interval"
                                                          },
                                                          "property": {
                                                            "type": "Identifier",
                                                            "name": "ceil"
                                                          }
                                                        },
                                                        "arguments": [
                                                          {
                                                            "type": "Identifier",
                                                            "name": "date"
                                                          }
                                                        ]
                                                      }
                                                    }
                                                  ]
                                                },
                                                "body": {
                                                  "type": "ExpressionStatement",
                                                  "expression": {
                                                    "type": "AssignmentExpression",
                                                    "operator": "=",
                                                    "left": {
                                                      "type": "Identifier",
                                                      "name": "date"
                                                    },
                                                    "right": {
                                                      "type": "CallExpression",
                                                      "callee": {
                                                        "type": "Identifier",
                                                        "name": "d3_time_scaleDate"
                                                      },
                                                      "arguments": [
                                                        {
                                                          "type": "BinaryExpression",
                                                          "operator": "+",
                                                          "left": {
                                                            "type": "UnaryExpression",
                                                            "operator": "+",
                                                            "argument": {
                                                              "type": "Identifier",
                                                              "name": "date"
                                                            },
                                                            "prefix": true
                                                          },
                                                          "right": {
                                                            "type": "Literal",
                                                            "value": 1,
                                                            "raw": "1"
                                                          }
                                                        }
                                                      ]
                                                    }
                                                  }
                                                }
                                              },
                                              {
                                                "type": "ReturnStatement",
                                                "argument": {
                                                  "type": "Identifier",
                                                  "name": "date"
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
                                  },
                                  "alternate": {
                                    "type": "Identifier",
                                    "name": "interval"
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
                      "name": "interval"
                    },
                    {
                      "type": "Identifier",
                      "name": "skip"
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
                              "name": "extent"
                            },
                            "init": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "Identifier",
                                "name": "d3_scaleExtent"
                              },
                              "arguments": [
                                {
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
                                  "arguments": []
                                }
                              ]
                            }
                          },
                          {
                            "type": "VariableDeclarator",
                            "id": {
                              "type": "Identifier",
                              "name": "method"
                            },
                            "init": {
                              "type": "ConditionalExpression",
                              "test": {
                                "type": "BinaryExpression",
                                "operator": "==",
                                "left": {
                                  "type": "Identifier",
                                  "name": "interval"
                                },
                                "right": {
                                  "type": "Literal",
                                  "value": null,
                                  "raw": "null"
                                }
                              },
                              "consequent": {
                                "type": "CallExpression",
                                "callee": {
                                  "type": "Identifier",
                                  "name": "tickMethod"
                                },
                                "arguments": [
                                  {
                                    "type": "Identifier",
                                    "name": "extent"
                                  },
                                  {
                                    "type": "Literal",
                                    "value": 10,
                                    "raw": "10"
                                  }
                                ]
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
                                      "name": "interval"
                                    },
                                    "prefix": true
                                  },
                                  "right": {
                                    "type": "Literal",
                                    "value": "number",
                                    "raw": "\"number\""
                                  }
                                },
                                "consequent": {
                                  "type": "CallExpression",
                                  "callee": {
                                    "type": "Identifier",
                                    "name": "tickMethod"
                                  },
                                  "arguments": [
                                    {
                                      "type": "Identifier",
                                      "name": "extent"
                                    },
                                    {
                                      "type": "Identifier",
                                      "name": "interval"
                                    }
                                  ]
                                },
                                "alternate": {
                                  "type": "LogicalExpression",
                                  "operator": "&&",
                                  "left": {
                                    "type": "UnaryExpression",
                                    "operator": "!",
                                    "argument": {
                                      "type": "MemberExpression",
                                      "computed": false,
                                      "object": {
                                        "type": "Identifier",
                                        "name": "interval"
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "name": "range"
                                      }
                                    },
                                    "prefix": true
                                  },
                                  "right": {
                                    "type": "ArrayExpression",
                                    "elements": [
                                      {
                                        "type": "ObjectExpression",
                                        "properties": [
                                          {
                                            "type": "Property",
                                            "key": {
                                              "type": "Identifier",
                                              "name": "range"
                                            },
                                            "value": {
                                              "type": "Identifier",
                                              "name": "interval"
                                            },
                                            "kind": "init"
                                          }
                                        ]
                                      },
                                      {
                                        "type": "Identifier",
                                        "name": "skip"
                                      }
                                    ]
                                  }
                                }
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
                          "name": "method"
                        },
                        "consequent": {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "SequenceExpression",
                            "expressions": [
                              {
                                "type": "AssignmentExpression",
                                "operator": "=",
                                "left": {
                                  "type": "Identifier",
                                  "name": "interval"
                                },
                                "right": {
                                  "type": "MemberExpression",
                                  "computed": true,
                                  "object": {
                                    "type": "Identifier",
                                    "name": "method"
                                  },
                                  "property": {
                                    "type": "Literal",
                                    "value": 0,
                                    "raw": "0"
                                  }
                                }
                              },
                              {
                                "type": "AssignmentExpression",
                                "operator": "=",
                                "left": {
                                  "type": "Identifier",
                                  "name": "skip"
                                },
                                "right": {
                                  "type": "MemberExpression",
                                  "computed": true,
                                  "object": {
                                    "type": "Identifier",
                                    "name": "method"
                                  },
                                  "property": {
                                    "type": "Literal",
                                    "value": 1,
                                    "raw": "1"
                                  }
                                }
                              }
                            ]
                          }
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
                              "type": "Identifier",
                              "name": "interval"
                            },
                            "property": {
                              "type": "Identifier",
                              "name": "range"
                            }
                          },
                          "arguments": [
                            {
                              "type": "MemberExpression",
                              "computed": true,
                              "object": {
                                "type": "Identifier",
                                "name": "extent"
                              },
                              "property": {
                                "type": "Literal",
                                "value": 0,
                                "raw": "0"
                              }
                            },
                            {
                              "type": "CallExpression",
                              "callee": {
                                "type": "Identifier",
                                "name": "d3_time_scaleDate"
                              },
                              "arguments": [
                                {
                                  "type": "BinaryExpression",
                                  "operator": "+",
                                  "left": {
                                    "type": "UnaryExpression",
                                    "operator": "+",
                                    "argument": {
                                      "type": "MemberExpression",
                                      "computed": true,
                                      "object": {
                                        "type": "Identifier",
                                        "name": "extent"
                                      },
                                      "property": {
                                        "type": "Literal",
                                        "value": 1,
                                        "raw": "1"
                                      }
                                    },
                                    "prefix": true
                                  },
                                  "right": {
                                    "type": "Literal",
                                    "value": 1,
                                    "raw": "1"
                                  }
                                }
                              ]
                            },
                            {
                              "type": "ConditionalExpression",
                              "test": {
                                "type": "BinaryExpression",
                                "operator": "<",
                                "left": {
                                  "type": "Identifier",
                                  "name": "skip"
                                },
                                "right": {
                                  "type": "Literal",
                                  "value": 1,
                                  "raw": "1"
                                }
                              },
                              "consequent": {
                                "type": "Literal",
                                "value": 1,
                                "raw": "1"
                              },
                              "alternate": {
                                "type": "Identifier",
                                "name": "skip"
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
                  "params": [],
                  "defaults": [],
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "Identifier",
                          "name": "format"
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
                            "name": "d3_time_scale"
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
                              "name": "methods"
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
          "name": "d3_time_scaleDate"
        },
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
              "type": "ReturnStatement",
              "argument": {
                "type": "NewExpression",
                "callee": {
                  "type": "Identifier",
                  "name": "Date"
                },
                "arguments": [
                  {
                    "type": "Identifier",
                    "name": "t"
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
        "type": "VariableDeclaration",
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "name": "d3_time_scaleSteps"
            },
            "init": {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "Literal",
                  "value": 1000,
                  "raw": "1e3"
                },
                {
                  "type": "Literal",
                  "value": 5000,
                  "raw": "5e3"
                },
                {
                  "type": "Literal",
                  "value": 15000,
                  "raw": "15e3"
                },
                {
                  "type": "Literal",
                  "value": 30000,
                  "raw": "3e4"
                },
                {
                  "type": "Literal",
                  "value": 60000,
                  "raw": "6e4"
                },
                {
                  "type": "Literal",
                  "value": 300000,
                  "raw": "3e5"
                },
                {
                  "type": "Literal",
                  "value": 900000,
                  "raw": "9e5"
                },
                {
                  "type": "Literal",
                  "value": 1800000,
                  "raw": "18e5"
                },
                {
                  "type": "Literal",
                  "value": 3600000,
                  "raw": "36e5"
                },
                {
                  "type": "Literal",
                  "value": 10800000,
                  "raw": "108e5"
                },
                {
                  "type": "Literal",
                  "value": 21600000,
                  "raw": "216e5"
                },
                {
                  "type": "Literal",
                  "value": 43200000,
                  "raw": "432e5"
                },
                {
                  "type": "Literal",
                  "value": 86400000,
                  "raw": "864e5"
                },
                {
                  "type": "Literal",
                  "value": 172800000,
                  "raw": "1728e5"
                },
                {
                  "type": "Literal",
                  "value": 604800000,
                  "raw": "6048e5"
                },
                {
                  "type": "Literal",
                  "value": 2592000000,
                  "raw": "2592e6"
                },
                {
                  "type": "Literal",
                  "value": 7776000000,
                  "raw": "7776e6"
                },
                {
                  "type": "Literal",
                  "value": 31536000000,
                  "raw": "31536e6"
                }
              ]
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
              "name": "d3_time_scaleLocalMethods"
            },
            "init": {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "name": "d3_time"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "second"
                      }
                    },
                    {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1"
                    }
                  ]
                },
                {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "name": "d3_time"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "second"
                      }
                    },
                    {
                      "type": "Literal",
                      "value": 5,
                      "raw": "5"
                    }
                  ]
                },
                {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "name": "d3_time"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "second"
                      }
                    },
                    {
                      "type": "Literal",
                      "value": 15,
                      "raw": "15"
                    }
                  ]
                },
                {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "name": "d3_time"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "second"
                      }
                    },
                    {
                      "type": "Literal",
                      "value": 30,
                      "raw": "30"
                    }
                  ]
                },
                {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "name": "d3_time"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "minute"
                      }
                    },
                    {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1"
                    }
                  ]
                },
                {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "name": "d3_time"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "minute"
                      }
                    },
                    {
                      "type": "Literal",
                      "value": 5,
                      "raw": "5"
                    }
                  ]
                },
                {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "name": "d3_time"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "minute"
                      }
                    },
                    {
                      "type": "Literal",
                      "value": 15,
                      "raw": "15"
                    }
                  ]
                },
                {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "name": "d3_time"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "minute"
                      }
                    },
                    {
                      "type": "Literal",
                      "value": 30,
                      "raw": "30"
                    }
                  ]
                },
                {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "name": "d3_time"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "hour"
                      }
                    },
                    {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1"
                    }
                  ]
                },
                {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "name": "d3_time"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "hour"
                      }
                    },
                    {
                      "type": "Literal",
                      "value": 3,
                      "raw": "3"
                    }
                  ]
                },
                {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "name": "d3_time"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "hour"
                      }
                    },
                    {
                      "type": "Literal",
                      "value": 6,
                      "raw": "6"
                    }
                  ]
                },
                {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "name": "d3_time"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "hour"
                      }
                    },
                    {
                      "type": "Literal",
                      "value": 12,
                      "raw": "12"
                    }
                  ]
                },
                {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "name": "d3_time"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "day"
                      }
                    },
                    {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1"
                    }
                  ]
                },
                {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "name": "d3_time"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "day"
                      }
                    },
                    {
                      "type": "Literal",
                      "value": 2,
                      "raw": "2"
                    }
                  ]
                },
                {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "name": "d3_time"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "week"
                      }
                    },
                    {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1"
                    }
                  ]
                },
                {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "name": "d3_time"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "month"
                      }
                    },
                    {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1"
                    }
                  ]
                },
                {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "name": "d3_time"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "month"
                      }
                    },
                    {
                      "type": "Literal",
                      "value": 3,
                      "raw": "3"
                    }
                  ]
                },
                {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "name": "d3_time"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "year"
                      }
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
      {
        "type": "VariableDeclaration",
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "name": "d3_time_scaleLocalFormat"
            },
            "init": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "name": "d3_time_format"
                },
                "property": {
                  "type": "Identifier",
                  "name": "multi"
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
                          "type": "Literal",
                          "value": ".%L",
                          "raw": "\".%L\""
                        },
                        {
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
                                  "type": "CallExpression",
                                  "callee": {
                                    "type": "MemberExpression",
                                    "computed": false,
                                    "object": {
                                      "type": "Identifier",
                                      "name": "d"
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "name": "getMilliseconds"
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
                        }
                      ]
                    },
                    {
                      "type": "ArrayExpression",
                      "elements": [
                        {
                          "type": "Literal",
                          "value": ":%S",
                          "raw": "\":%S\""
                        },
                        {
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
                                  "type": "CallExpression",
                                  "callee": {
                                    "type": "MemberExpression",
                                    "computed": false,
                                    "object": {
                                      "type": "Identifier",
                                      "name": "d"
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "name": "getSeconds"
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
                        }
                      ]
                    },
                    {
                      "type": "ArrayExpression",
                      "elements": [
                        {
                          "type": "Literal",
                          "value": "%I:%M",
                          "raw": "\"%I:%M\""
                        },
                        {
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
                                  "type": "CallExpression",
                                  "callee": {
                                    "type": "MemberExpression",
                                    "computed": false,
                                    "object": {
                                      "type": "Identifier",
                                      "name": "d"
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "name": "getMinutes"
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
                        }
                      ]
                    },
                    {
                      "type": "ArrayExpression",
                      "elements": [
                        {
                          "type": "Literal",
                          "value": "%I %p",
                          "raw": "\"%I %p\""
                        },
                        {
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
                                  "type": "CallExpression",
                                  "callee": {
                                    "type": "MemberExpression",
                                    "computed": false,
                                    "object": {
                                      "type": "Identifier",
                                      "name": "d"
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "name": "getHours"
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
                        }
                      ]
                    },
                    {
                      "type": "ArrayExpression",
                      "elements": [
                        {
                          "type": "Literal",
                          "value": "%a %d",
                          "raw": "\"%a %d\""
                        },
                        {
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
                                  "type": "LogicalExpression",
                                  "operator": "&&",
                                  "left": {
                                    "type": "CallExpression",
                                    "callee": {
                                      "type": "MemberExpression",
                                      "computed": false,
                                      "object": {
                                        "type": "Identifier",
                                        "name": "d"
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "name": "getDay"
                                      }
                                    },
                                    "arguments": []
                                  },
                                  "right": {
                                    "type": "BinaryExpression",
                                    "operator": "!=",
                                    "left": {
                                      "type": "CallExpression",
                                      "callee": {
                                        "type": "MemberExpression",
                                        "computed": false,
                                        "object": {
                                          "type": "Identifier",
                                          "name": "d"
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "name": "getDate"
                                        }
                                      },
                                      "arguments": []
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
                        }
                      ]
                    },
                    {
                      "type": "ArrayExpression",
                      "elements": [
                        {
                          "type": "Literal",
                          "value": "%b %d",
                          "raw": "\"%b %d\""
                        },
                        {
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
                                  "operator": "!=",
                                  "left": {
                                    "type": "CallExpression",
                                    "callee": {
                                      "type": "MemberExpression",
                                      "computed": false,
                                      "object": {
                                        "type": "Identifier",
                                        "name": "d"
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "name": "getDate"
                                      }
                                    },
                                    "arguments": []
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
                        }
                      ]
                    },
                    {
                      "type": "ArrayExpression",
                      "elements": [
                        {
                          "type": "Literal",
                          "value": "%B",
                          "raw": "\"%B\""
                        },
                        {
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
                                  "type": "CallExpression",
                                  "callee": {
                                    "type": "MemberExpression",
                                    "computed": false,
                                    "object": {
                                      "type": "Identifier",
                                      "name": "d"
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "name": "getMonth"
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
                        }
                      ]
                    },
                    {
                      "type": "ArrayExpression",
                      "elements": [
                        {
                          "type": "Literal",
                          "value": "%Y",
                          "raw": "\"%Y\""
                        },
                        {
                          "type": "Identifier",
                          "name": "d3_true"
                        }
                      ]
                    }
                  ]
                }
              ]
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
              "name": "d3_time_scaleMilliseconds"
            },
            "init": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "key": {
                    "type": "Identifier",
                    "name": "range"
                  },
                  "value": {
                    "type": "FunctionExpression",
                    "id": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "name": "start"
                      },
                      {
                        "type": "Identifier",
                        "name": "stop"
                      },
                      {
                        "type": "Identifier",
                        "name": "step"
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
                                    "name": "range"
                                  }
                                },
                                "arguments": [
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
                                          "name": "ceil"
                                        }
                                      },
                                      "arguments": [
                                        {
                                          "type": "BinaryExpression",
                                          "operator": "/",
                                          "left": {
                                            "type": "Identifier",
                                            "name": "start"
                                          },
                                          "right": {
                                            "type": "Identifier",
                                            "name": "step"
                                          }
                                        }
                                      ]
                                    },
                                    "right": {
                                      "type": "Identifier",
                                      "name": "step"
                                    }
                                  },
                                  {
                                    "type": "UnaryExpression",
                                    "operator": "+",
                                    "argument": {
                                      "type": "Identifier",
                                      "name": "stop"
                                    },
                                    "prefix": true
                                  },
                                  {
                                    "type": "Identifier",
                                    "name": "step"
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
                                "name": "d3_time_scaleDate"
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
                    "name": "floor"
                  },
                  "value": {
                    "type": "Identifier",
                    "name": "d3_identity"
                  },
                  "kind": "init"
                },
                {
                  "type": "Property",
                  "key": {
                    "type": "Identifier",
                    "name": "ceil"
                  },
                  "value": {
                    "type": "Identifier",
                    "name": "d3_identity"
                  },
                  "kind": "init"
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
              "name": "d3_time_scaleLocalMethods"
            },
            "property": {
              "type": "Identifier",
              "name": "year"
            }
          },
          "right": {
            "type": "MemberExpression",
            "computed": false,
            "object": {
              "type": "Identifier",
              "name": "d3_time"
            },
            "property": {
              "type": "Identifier",
              "name": "year"
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
            "type": "MemberExpression",
            "computed": false,
            "object": {
              "type": "Identifier",
              "name": "d3_time"
            },
            "property": {
              "type": "Identifier",
              "name": "scale"
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
                      "name": "d3_time_scale"
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
                        "type": "Identifier",
                        "name": "d3_time_scaleLocalMethods"
                      },
                      {
                        "type": "Identifier",
                        "name": "d3_time_scaleLocalFormat"
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
  "src": "function d3_time_scale(linear, methods, format) {\n    function scale(x) {\n        return linear(x);\n    }\n    scale.invert = function (x) {\n        return d3_time_scaleDate(linear.invert(x));\n    };\n    scale.domain = function (x) {\n        if (!arguments.length)\n            return linear.domain().map(d3_time_scaleDate);\n        linear.domain(x);\n        return scale;\n    };\n    function tickMethod(extent, count) {\n        var span = extent[1] - extent[0], target = span / count, i = d3.bisect(d3_time_scaleSteps, target);\n        return i == d3_time_scaleSteps.length ? [\n            methods.year,\n            d3_scale_linearTickRange(extent.map(function (d) {\n                return d / 31536000000;\n            }), count)[2]\n        ] : !i ? [\n            d3_time_scaleMilliseconds,\n            d3_scale_linearTickRange(extent, count)[2]\n        ] : methods[target / d3_time_scaleSteps[i - 1] < d3_time_scaleSteps[i] / target ? i - 1 : i];\n    }\n    scale.nice = function (interval, skip) {\n        var domain = scale.domain(), extent = d3_scaleExtent(domain), method = interval == null ? tickMethod(extent, 10) : typeof interval === 'number' && tickMethod(extent, interval);\n        if (method)\n            interval = method[0], skip = method[1];\n        function skipped(date) {\n            return !isNaN(date) && !interval.range(date, d3_time_scaleDate(+date + 1), skip).length;\n        }\n        return scale.domain(d3_scale_nice(domain, skip > 1 ? {\n            floor: function (date) {\n                while (skipped(date = interval.floor(date)))\n                    date = d3_time_scaleDate(date - 1);\n                return date;\n            },\n            ceil: function (date) {\n                while (skipped(date = interval.ceil(date)))\n                    date = d3_time_scaleDate(+date + 1);\n                return date;\n            }\n        } : interval));\n    };\n    scale.ticks = function (interval, skip) {\n        var extent = d3_scaleExtent(scale.domain()), method = interval == null ? tickMethod(extent, 10) : typeof interval === 'number' ? tickMethod(extent, interval) : !interval.range && [\n                { range: interval },\n                skip\n            ];\n        if (method)\n            interval = method[0], skip = method[1];\n        return interval.range(extent[0], d3_time_scaleDate(+extent[1] + 1), skip < 1 ? 1 : skip);\n    };\n    scale.tickFormat = function () {\n        return format;\n    };\n    scale.copy = function () {\n        return d3_time_scale(linear.copy(), methods, format);\n    };\n    return d3_scale_linearRebind(scale, linear);\n}\nfunction d3_time_scaleDate(t) {\n    return new Date(t);\n}\nvar d3_time_scaleSteps = [\n        1000,\n        5000,\n        15000,\n        30000,\n        60000,\n        300000,\n        900000,\n        1800000,\n        3600000,\n        10800000,\n        21600000,\n        43200000,\n        86400000,\n        172800000,\n        604800000,\n        2592000000,\n        7776000000,\n        31536000000\n    ];\nvar d3_time_scaleLocalMethods = [\n        [\n            d3_time.second,\n            1\n        ],\n        [\n            d3_time.second,\n            5\n        ],\n        [\n            d3_time.second,\n            15\n        ],\n        [\n            d3_time.second,\n            30\n        ],\n        [\n            d3_time.minute,\n            1\n        ],\n        [\n            d3_time.minute,\n            5\n        ],\n        [\n            d3_time.minute,\n            15\n        ],\n        [\n            d3_time.minute,\n            30\n        ],\n        [\n            d3_time.hour,\n            1\n        ],\n        [\n            d3_time.hour,\n            3\n        ],\n        [\n            d3_time.hour,\n            6\n        ],\n        [\n            d3_time.hour,\n            12\n        ],\n        [\n            d3_time.day,\n            1\n        ],\n        [\n            d3_time.day,\n            2\n        ],\n        [\n            d3_time.week,\n            1\n        ],\n        [\n            d3_time.month,\n            1\n        ],\n        [\n            d3_time.month,\n            3\n        ],\n        [\n            d3_time.year,\n            1\n        ]\n    ];\nvar d3_time_scaleLocalFormat = d3_time_format.multi([\n        [\n            '.%L',\n            function (d) {\n                return d.getMilliseconds();\n            }\n        ],\n        [\n            ':%S',\n            function (d) {\n                return d.getSeconds();\n            }\n        ],\n        [\n            '%I:%M',\n            function (d) {\n                return d.getMinutes();\n            }\n        ],\n        [\n            '%I %p',\n            function (d) {\n                return d.getHours();\n            }\n        ],\n        [\n            '%a %d',\n            function (d) {\n                return d.getDay() && d.getDate() != 1;\n            }\n        ],\n        [\n            '%b %d',\n            function (d) {\n                return d.getDate() != 1;\n            }\n        ],\n        [\n            '%B',\n            function (d) {\n                return d.getMonth();\n            }\n        ],\n        [\n            '%Y',\n            d3_true\n        ]\n    ]);\nvar d3_time_scaleMilliseconds = {\n        range: function (start, stop, step) {\n            return d3.range(Math.ceil(start / step) * step, +stop, step).map(d3_time_scaleDate);\n        },\n        floor: d3_identity,\n        ceil: d3_identity\n    };\nd3_time_scaleLocalMethods.year = d3_time.year;\nd3_time.scale = function () {\n    return d3_time_scale(d3.scale.linear(), d3_time_scaleLocalMethods, d3_time_scaleLocalFormat);\n};"
}