{
  "filepath": "/scale/linear.js",
  "shared": [],
  "dependencies": [
    "d3_interpolate",
    "d3_scale_polylinear",
    "d3_scale_bilinear",
    "d3_uninterpolateClamp",
    "d3_uninterpolateNumber",
    "d3_interpolateRound",
    "d3.rebind",
    "d3_scale_nice",
    "d3_scale_niceStep",
    "d3_scaleExtent",
    "d3.range.apply",
    "d3_format_re",
    "d3.formatPrefix",
    "abs",
    "d3.format"
  ],
  "helpers": [
    "d3_scale_linear",
    "d3_scale_linearRebind",
    "d3_scale_linearNice",
    "d3_scale_linearTickRange",
    "d3_scale_linearTicks",
    "d3_scale_linearTickFormat",
    "d3_scale_linearFormatSignificant",
    "d3_scale_linearPrecision",
    "d3_scale_linearFormatPrecision"
  ],
  "exports": [
    "d3.scale.linear"
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
              "name": "linear"
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
                      "name": "d3_scale_linear"
                    },
                    "arguments": [
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
                      },
                      {
                        "type": "Identifier",
                        "name": "d3_interpolate"
                      },
                      {
                        "type": "Literal",
                        "value": false,
                        "raw": "false"
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
          "name": "d3_scale_linear"
        },
        "params": [
          {
            "type": "Identifier",
            "name": "domain"
          },
          {
            "type": "Identifier",
            "name": "range"
          },
          {
            "type": "Identifier",
            "name": "interpolate"
          },
          {
            "type": "Identifier",
            "name": "clamp"
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
                    "name": "output"
                  },
                  "init": null
                },
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "name": "input"
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
                "name": "rescale"
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
                          "name": "linear"
                        },
                        "init": {
                          "type": "ConditionalExpression",
                          "test": {
                            "type": "BinaryExpression",
                            "operator": ">",
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
                                  "name": "min"
                                }
                              },
                              "arguments": [
                                {
                                  "type": "MemberExpression",
                                  "computed": false,
                                  "object": {
                                    "type": "Identifier",
                                    "name": "domain"
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "name": "length"
                                  }
                                },
                                {
                                  "type": "MemberExpression",
                                  "computed": false,
                                  "object": {
                                    "type": "Identifier",
                                    "name": "range"
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "name": "length"
                                  }
                                }
                              ]
                            },
                            "right": {
                              "type": "Literal",
                              "value": 2,
                              "raw": "2"
                            }
                          },
                          "consequent": {
                            "type": "Identifier",
                            "name": "d3_scale_polylinear"
                          },
                          "alternate": {
                            "type": "Identifier",
                            "name": "d3_scale_bilinear"
                          }
                        }
                      },
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "name": "uninterpolate"
                        },
                        "init": {
                          "type": "ConditionalExpression",
                          "test": {
                            "type": "Identifier",
                            "name": "clamp"
                          },
                          "consequent": {
                            "type": "Identifier",
                            "name": "d3_uninterpolateClamp"
                          },
                          "alternate": {
                            "type": "Identifier",
                            "name": "d3_uninterpolateNumber"
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
                        "name": "output"
                      },
                      "right": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "Identifier",
                          "name": "linear"
                        },
                        "arguments": [
                          {
                            "type": "Identifier",
                            "name": "domain"
                          },
                          {
                            "type": "Identifier",
                            "name": "range"
                          },
                          {
                            "type": "Identifier",
                            "name": "uninterpolate"
                          },
                          {
                            "type": "Identifier",
                            "name": "interpolate"
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
                        "name": "input"
                      },
                      "right": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "Identifier",
                          "name": "linear"
                        },
                        "arguments": [
                          {
                            "type": "Identifier",
                            "name": "range"
                          },
                          {
                            "type": "Identifier",
                            "name": "domain"
                          },
                          {
                            "type": "Identifier",
                            "name": "uninterpolate"
                          },
                          {
                            "type": "Identifier",
                            "name": "d3_interpolate"
                          }
                        ]
                      }
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
                        "name": "output"
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
                      "name": "y"
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
                            "name": "input"
                          },
                          "arguments": [
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
                        }
                      },
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "Identifier",
                            "name": "rescale"
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
                    "name": "range"
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
                            "name": "range"
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
                            "name": "range"
                          },
                          "right": {
                            "type": "Identifier",
                            "name": "x"
                          }
                        }
                      },
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "Identifier",
                            "name": "rescale"
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
                    "name": "rangeRound"
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
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
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
                                  "name": "range"
                                }
                              },
                              "arguments": [
                                {
                                  "type": "Identifier",
                                  "name": "x"
                                }
                              ]
                            },
                            "property": {
                              "type": "Identifier",
                              "name": "interpolate"
                            }
                          },
                          "arguments": [
                            {
                              "type": "Identifier",
                              "name": "d3_interpolateRound"
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
                    "name": "clamp"
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
                            "name": "clamp"
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
                            "name": "clamp"
                          },
                          "right": {
                            "type": "Identifier",
                            "name": "x"
                          }
                        }
                      },
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "Identifier",
                            "name": "rescale"
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
                    "name": "interpolate"
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
                            "name": "interpolate"
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
                            "name": "interpolate"
                          },
                          "right": {
                            "type": "Identifier",
                            "name": "x"
                          }
                        }
                      },
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "Identifier",
                            "name": "rescale"
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
                        "type": "ExpressionStatement",
                        "expression": {
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
                      },
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "Identifier",
                            "name": "rescale"
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
                            "name": "d3_scale_linear"
                          },
                          "arguments": [
                            {
                              "type": "Identifier",
                              "name": "domain"
                            },
                            {
                              "type": "Identifier",
                              "name": "range"
                            },
                            {
                              "type": "Identifier",
                              "name": "interpolate"
                            },
                            {
                              "type": "Identifier",
                              "name": "clamp"
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
                  "name": "rescale"
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
      {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "name": "d3_scale_linearRebind"
        },
        "params": [
          {
            "type": "Identifier",
            "name": "scale"
          },
          {
            "type": "Identifier",
            "name": "linear"
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
                    "name": "d3"
                  },
                  "property": {
                    "type": "Identifier",
                    "name": "rebind"
                  }
                },
                "arguments": [
                  {
                    "type": "Identifier",
                    "name": "scale"
                  },
                  {
                    "type": "Identifier",
                    "name": "linear"
                  },
                  {
                    "type": "Literal",
                    "value": "range",
                    "raw": "\"range\""
                  },
                  {
                    "type": "Literal",
                    "value": "rangeRound",
                    "raw": "\"rangeRound\""
                  },
                  {
                    "type": "Literal",
                    "value": "interpolate",
                    "raw": "\"interpolate\""
                  },
                  {
                    "type": "Literal",
                    "value": "clamp",
                    "raw": "\"clamp\""
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
          "name": "d3_scale_linearNice"
        },
        "params": [
          {
            "type": "Identifier",
            "name": "domain"
          },
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
                  "name": "d3_scale_nice"
                },
                "arguments": [
                  {
                    "type": "Identifier",
                    "name": "domain"
                  },
                  {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "name": "d3_scale_niceStep"
                    },
                    "arguments": [
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
                              "name": "domain"
                            },
                            {
                              "type": "Identifier",
                              "name": "m"
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
          "name": "d3_scale_linearTickRange"
        },
        "params": [
          {
            "type": "Identifier",
            "name": "domain"
          },
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
              "type": "IfStatement",
              "test": {
                "type": "BinaryExpression",
                "operator": "==",
                "left": {
                  "type": "Identifier",
                  "name": "m"
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
                  "type": "AssignmentExpression",
                  "operator": "=",
                  "left": {
                    "type": "Identifier",
                    "name": "m"
                  },
                  "right": {
                    "type": "Literal",
                    "value": 10,
                    "raw": "10"
                  }
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
                    "name": "step"
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
                                  "type": "BinaryExpression",
                                  "operator": "/",
                                  "left": {
                                    "type": "Identifier",
                                    "name": "span"
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "name": "m"
                                  }
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
                        ]
                      }
                    ]
                  }
                },
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "name": "err"
                  },
                  "init": {
                    "type": "BinaryExpression",
                    "operator": "*",
                    "left": {
                      "type": "BinaryExpression",
                      "operator": "/",
                      "left": {
                        "type": "Identifier",
                        "name": "m"
                      },
                      "right": {
                        "type": "Identifier",
                        "name": "span"
                      }
                    },
                    "right": {
                      "type": "Identifier",
                      "name": "step"
                    }
                  }
                }
              ],
              "kind": "var"
            },
            {
              "type": "IfStatement",
              "test": {
                "type": "BinaryExpression",
                "operator": "<=",
                "left": {
                  "type": "Identifier",
                  "name": "err"
                },
                "right": {
                  "type": "Literal",
                  "value": 0.15,
                  "raw": ".15"
                }
              },
              "consequent": {
                "type": "ExpressionStatement",
                "expression": {
                  "type": "AssignmentExpression",
                  "operator": "*=",
                  "left": {
                    "type": "Identifier",
                    "name": "step"
                  },
                  "right": {
                    "type": "Literal",
                    "value": 10,
                    "raw": "10"
                  }
                }
              },
              "alternate": {
                "type": "IfStatement",
                "test": {
                  "type": "BinaryExpression",
                  "operator": "<=",
                  "left": {
                    "type": "Identifier",
                    "name": "err"
                  },
                  "right": {
                    "type": "Literal",
                    "value": 0.35,
                    "raw": ".35"
                  }
                },
                "consequent": {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "*=",
                    "left": {
                      "type": "Identifier",
                      "name": "step"
                    },
                    "right": {
                      "type": "Literal",
                      "value": 5,
                      "raw": "5"
                    }
                  }
                },
                "alternate": {
                  "type": "IfStatement",
                  "test": {
                    "type": "BinaryExpression",
                    "operator": "<=",
                    "left": {
                      "type": "Identifier",
                      "name": "err"
                    },
                    "right": {
                      "type": "Literal",
                      "value": 0.75,
                      "raw": ".75"
                    }
                  },
                  "consequent": {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "*=",
                      "left": {
                        "type": "Identifier",
                        "name": "step"
                      },
                      "right": {
                        "type": "Literal",
                        "value": 2,
                        "raw": "2"
                      }
                    }
                  },
                  "alternate": null
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
                "right": {
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
                  "type": "BinaryExpression",
                  "operator": "+",
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
                          "name": "floor"
                        }
                      },
                      "arguments": [
                        {
                          "type": "BinaryExpression",
                          "operator": "/",
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
                  "right": {
                    "type": "BinaryExpression",
                    "operator": "*",
                    "left": {
                      "type": "Identifier",
                      "name": "step"
                    },
                    "right": {
                      "type": "Literal",
                      "value": 0.5,
                      "raw": ".5"
                    }
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
                  "computed": true,
                  "object": {
                    "type": "Identifier",
                    "name": "extent"
                  },
                  "property": {
                    "type": "Literal",
                    "value": 2,
                    "raw": "2"
                  }
                },
                "right": {
                  "type": "Identifier",
                  "name": "step"
                }
              }
            },
            {
              "type": "ReturnStatement",
              "argument": {
                "type": "Identifier",
                "name": "extent"
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
          "name": "d3_scale_linearTicks"
        },
        "params": [
          {
            "type": "Identifier",
            "name": "domain"
          },
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
                  "property": {
                    "type": "Identifier",
                    "name": "apply"
                  }
                },
                "arguments": [
                  {
                    "type": "Identifier",
                    "name": "d3"
                  },
                  {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "name": "d3_scale_linearTickRange"
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
      },
      {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "name": "d3_scale_linearTickFormat"
        },
        "params": [
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
                    "name": "range"
                  },
                  "init": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "name": "d3_scale_linearTickRange"
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
              ],
              "kind": "var"
            },
            {
              "type": "IfStatement",
              "test": {
                "type": "Identifier",
                "name": "format"
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
                          "name": "match"
                        },
                        "init": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "name": "d3_format_re"
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
                    ],
                    "kind": "var"
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
                          "name": "match"
                        },
                        "property": {
                          "type": "Identifier",
                          "name": "shift"
                        }
                      },
                      "arguments": []
                    }
                  },
                  {
                    "type": "IfStatement",
                    "test": {
                      "type": "BinaryExpression",
                      "operator": "===",
                      "left": {
                        "type": "MemberExpression",
                        "computed": true,
                        "object": {
                          "type": "Identifier",
                          "name": "match"
                        },
                        "property": {
                          "type": "Literal",
                          "value": 8,
                          "raw": "8"
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "value": "s",
                        "raw": "\"s\""
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
                                "name": "prefix"
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
                                    "name": "formatPrefix"
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
                                        "name": "Math"
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "name": "max"
                                      }
                                    },
                                    "arguments": [
                                      {
                                        "type": "CallExpression",
                                        "callee": {
                                          "type": "Identifier",
                                          "name": "abs"
                                        },
                                        "arguments": [
                                          {
                                            "type": "MemberExpression",
                                            "computed": true,
                                            "object": {
                                              "type": "Identifier",
                                              "name": "range"
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
                                          "name": "abs"
                                        },
                                        "arguments": [
                                          {
                                            "type": "MemberExpression",
                                            "computed": true,
                                            "object": {
                                              "type": "Identifier",
                                              "name": "range"
                                            },
                                            "property": {
                                              "type": "Literal",
                                              "value": 1,
                                              "raw": "1"
                                            }
                                          }
                                        ]
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
                          "type": "IfStatement",
                          "test": {
                            "type": "UnaryExpression",
                            "operator": "!",
                            "argument": {
                              "type": "MemberExpression",
                              "computed": true,
                              "object": {
                                "type": "Identifier",
                                "name": "match"
                              },
                              "property": {
                                "type": "Literal",
                                "value": 7,
                                "raw": "7"
                              }
                            },
                            "prefix": true
                          },
                          "consequent": {
                            "type": "ExpressionStatement",
                            "expression": {
                              "type": "AssignmentExpression",
                              "operator": "=",
                              "left": {
                                "type": "MemberExpression",
                                "computed": true,
                                "object": {
                                  "type": "Identifier",
                                  "name": "match"
                                },
                                "property": {
                                  "type": "Literal",
                                  "value": 7,
                                  "raw": "7"
                                }
                              },
                              "right": {
                                "type": "BinaryExpression",
                                "operator": "+",
                                "left": {
                                  "type": "Literal",
                                  "value": ".",
                                  "raw": "\".\""
                                },
                                "right": {
                                  "type": "CallExpression",
                                  "callee": {
                                    "type": "Identifier",
                                    "name": "d3_scale_linearPrecision"
                                  },
                                  "arguments": [
                                    {
                                      "type": "CallExpression",
                                      "callee": {
                                        "type": "MemberExpression",
                                        "computed": false,
                                        "object": {
                                          "type": "Identifier",
                                          "name": "prefix"
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "name": "scale"
                                        }
                                      },
                                      "arguments": [
                                        {
                                          "type": "MemberExpression",
                                          "computed": true,
                                          "object": {
                                            "type": "Identifier",
                                            "name": "range"
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
                              "type": "MemberExpression",
                              "computed": true,
                              "object": {
                                "type": "Identifier",
                                "name": "match"
                              },
                              "property": {
                                "type": "Literal",
                                "value": 8,
                                "raw": "8"
                              }
                            },
                            "right": {
                              "type": "Literal",
                              "value": "f",
                              "raw": "\"f\""
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
                              "name": "format"
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
                                  "name": "format"
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
                                      "name": "match"
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "name": "join"
                                    }
                                  },
                                  "arguments": [
                                    {
                                      "type": "Literal",
                                      "value": "",
                                      "raw": "\"\""
                                    }
                                  ]
                                }
                              ]
                            }
                          }
                        },
                        {
                          "type": "ReturnStatement",
                          "argument": {
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
                                    "operator": "+",
                                    "left": {
                                      "type": "CallExpression",
                                      "callee": {
                                        "type": "Identifier",
                                        "name": "format"
                                      },
                                      "arguments": [
                                        {
                                          "type": "CallExpression",
                                          "callee": {
                                            "type": "MemberExpression",
                                            "computed": false,
                                            "object": {
                                              "type": "Identifier",
                                              "name": "prefix"
                                            },
                                            "property": {
                                              "type": "Identifier",
                                              "name": "scale"
                                            }
                                          },
                                          "arguments": [
                                            {
                                              "type": "Identifier",
                                              "name": "d"
                                            }
                                          ]
                                        }
                                      ]
                                    },
                                    "right": {
                                      "type": "MemberExpression",
                                      "computed": false,
                                      "object": {
                                        "type": "Identifier",
                                        "name": "prefix"
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "name": "symbol"
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
                      ]
                    },
                    "alternate": null
                  },
                  {
                    "type": "IfStatement",
                    "test": {
                      "type": "UnaryExpression",
                      "operator": "!",
                      "argument": {
                        "type": "MemberExpression",
                        "computed": true,
                        "object": {
                          "type": "Identifier",
                          "name": "match"
                        },
                        "property": {
                          "type": "Literal",
                          "value": 7,
                          "raw": "7"
                        }
                      },
                      "prefix": true
                    },
                    "consequent": {
                      "type": "ExpressionStatement",
                      "expression": {
                        "type": "AssignmentExpression",
                        "operator": "=",
                        "left": {
                          "type": "MemberExpression",
                          "computed": true,
                          "object": {
                            "type": "Identifier",
                            "name": "match"
                          },
                          "property": {
                            "type": "Literal",
                            "value": 7,
                            "raw": "7"
                          }
                        },
                        "right": {
                          "type": "BinaryExpression",
                          "operator": "+",
                          "left": {
                            "type": "Literal",
                            "value": ".",
                            "raw": "\".\""
                          },
                          "right": {
                            "type": "CallExpression",
                            "callee": {
                              "type": "Identifier",
                              "name": "d3_scale_linearFormatPrecision"
                            },
                            "arguments": [
                              {
                                "type": "MemberExpression",
                                "computed": true,
                                "object": {
                                  "type": "Identifier",
                                  "name": "match"
                                },
                                "property": {
                                  "type": "Literal",
                                  "value": 8,
                                  "raw": "8"
                                }
                              },
                              {
                                "type": "Identifier",
                                "name": "range"
                              }
                            ]
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
                        "name": "format"
                      },
                      "right": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "MemberExpression",
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "name": "match"
                          },
                          "property": {
                            "type": "Identifier",
                            "name": "join"
                          }
                        },
                        "arguments": [
                          {
                            "type": "Literal",
                            "value": "",
                            "raw": "\"\""
                          }
                        ]
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
                        "name": "format"
                      },
                      "right": {
                        "type": "BinaryExpression",
                        "operator": "+",
                        "left": {
                          "type": "BinaryExpression",
                          "operator": "+",
                          "left": {
                            "type": "Literal",
                            "value": ",.",
                            "raw": "\",.\""
                          },
                          "right": {
                            "type": "CallExpression",
                            "callee": {
                              "type": "Identifier",
                              "name": "d3_scale_linearPrecision"
                            },
                            "arguments": [
                              {
                                "type": "MemberExpression",
                                "computed": true,
                                "object": {
                                  "type": "Identifier",
                                  "name": "range"
                                },
                                "property": {
                                  "type": "Literal",
                                  "value": 2,
                                  "raw": "2"
                                }
                              }
                            ]
                          }
                        },
                        "right": {
                          "type": "Literal",
                          "value": "f",
                          "raw": "\"f\""
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
                    "name": "format"
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
              "name": "d3_scale_linearFormatSignificant"
            },
            "init": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "key": {
                    "type": "Identifier",
                    "name": "s"
                  },
                  "value": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1"
                  },
                  "kind": "init"
                },
                {
                  "type": "Property",
                  "key": {
                    "type": "Identifier",
                    "name": "g"
                  },
                  "value": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1"
                  },
                  "kind": "init"
                },
                {
                  "type": "Property",
                  "key": {
                    "type": "Identifier",
                    "name": "p"
                  },
                  "value": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1"
                  },
                  "kind": "init"
                },
                {
                  "type": "Property",
                  "key": {
                    "type": "Identifier",
                    "name": "r"
                  },
                  "value": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1"
                  },
                  "kind": "init"
                },
                {
                  "type": "Property",
                  "key": {
                    "type": "Identifier",
                    "name": "e"
                  },
                  "value": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1"
                  },
                  "kind": "init"
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
          "name": "d3_scale_linearPrecision"
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
                      "name": "floor"
                    }
                  },
                  "arguments": [
                    {
                      "type": "BinaryExpression",
                      "operator": "+",
                      "left": {
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
                      },
                      "right": {
                        "type": "Literal",
                        "value": 0.01,
                        "raw": ".01"
                      }
                    }
                  ]
                },
                "prefix": true
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
          "name": "d3_scale_linearFormatPrecision"
        },
        "params": [
          {
            "type": "Identifier",
            "name": "type"
          },
          {
            "type": "Identifier",
            "name": "range"
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
                    "name": "p"
                  },
                  "init": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "name": "d3_scale_linearPrecision"
                    },
                    "arguments": [
                      {
                        "type": "MemberExpression",
                        "computed": true,
                        "object": {
                          "type": "Identifier",
                          "name": "range"
                        },
                        "property": {
                          "type": "Literal",
                          "value": 2,
                          "raw": "2"
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
                  "operator": "in",
                  "left": {
                    "type": "Identifier",
                    "name": "type"
                  },
                  "right": {
                    "type": "Identifier",
                    "name": "d3_scale_linearFormatSignificant"
                  }
                },
                "consequent": {
                  "type": "BinaryExpression",
                  "operator": "+",
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
                        "name": "abs"
                      }
                    },
                    "arguments": [
                      {
                        "type": "BinaryExpression",
                        "operator": "-",
                        "left": {
                          "type": "Identifier",
                          "name": "p"
                        },
                        "right": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "Identifier",
                            "name": "d3_scale_linearPrecision"
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
                                  "name": "max"
                                }
                              },
                              "arguments": [
                                {
                                  "type": "CallExpression",
                                  "callee": {
                                    "type": "Identifier",
                                    "name": "abs"
                                  },
                                  "arguments": [
                                    {
                                      "type": "MemberExpression",
                                      "computed": true,
                                      "object": {
                                        "type": "Identifier",
                                        "name": "range"
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
                                    "name": "abs"
                                  },
                                  "arguments": [
                                    {
                                      "type": "MemberExpression",
                                      "computed": true,
                                      "object": {
                                        "type": "Identifier",
                                        "name": "range"
                                      },
                                      "property": {
                                        "type": "Literal",
                                        "value": 1,
                                        "raw": "1"
                                      }
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
                  "right": {
                    "type": "UnaryExpression",
                    "operator": "+",
                    "argument": {
                      "type": "BinaryExpression",
                      "operator": "!==",
                      "left": {
                        "type": "Identifier",
                        "name": "type"
                      },
                      "right": {
                        "type": "Literal",
                        "value": "e",
                        "raw": "\"e\""
                      }
                    },
                    "prefix": true
                  }
                },
                "alternate": {
                  "type": "BinaryExpression",
                  "operator": "-",
                  "left": {
                    "type": "Identifier",
                    "name": "p"
                  },
                  "right": {
                    "type": "BinaryExpression",
                    "operator": "*",
                    "left": {
                      "type": "BinaryExpression",
                      "operator": "===",
                      "left": {
                        "type": "Identifier",
                        "name": "type"
                      },
                      "right": {
                        "type": "Literal",
                        "value": "%",
                        "raw": "\"%\""
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
            }
          ]
        },
        "rest": null,
        "generator": false,
        "expression": false
      }
    ]
  },
  "src": "d3.scale.linear = function () {\n    return d3_scale_linear([\n        0,\n        1\n    ], [\n        0,\n        1\n    ], d3_interpolate, false);\n};\nfunction d3_scale_linear(domain, range, interpolate, clamp) {\n    var output, input;\n    function rescale() {\n        var linear = Math.min(domain.length, range.length) > 2 ? d3_scale_polylinear : d3_scale_bilinear, uninterpolate = clamp ? d3_uninterpolateClamp : d3_uninterpolateNumber;\n        output = linear(domain, range, uninterpolate, interpolate);\n        input = linear(range, domain, uninterpolate, d3_interpolate);\n        return scale;\n    }\n    function scale(x) {\n        return output(x);\n    }\n    scale.invert = function (y) {\n        return input(y);\n    };\n    scale.domain = function (x) {\n        if (!arguments.length)\n            return domain;\n        domain = x.map(Number);\n        return rescale();\n    };\n    scale.range = function (x) {\n        if (!arguments.length)\n            return range;\n        range = x;\n        return rescale();\n    };\n    scale.rangeRound = function (x) {\n        return scale.range(x).interpolate(d3_interpolateRound);\n    };\n    scale.clamp = function (x) {\n        if (!arguments.length)\n            return clamp;\n        clamp = x;\n        return rescale();\n    };\n    scale.interpolate = function (x) {\n        if (!arguments.length)\n            return interpolate;\n        interpolate = x;\n        return rescale();\n    };\n    scale.ticks = function (m) {\n        return d3_scale_linearTicks(domain, m);\n    };\n    scale.tickFormat = function (m, format) {\n        return d3_scale_linearTickFormat(domain, m, format);\n    };\n    scale.nice = function (m) {\n        d3_scale_linearNice(domain, m);\n        return rescale();\n    };\n    scale.copy = function () {\n        return d3_scale_linear(domain, range, interpolate, clamp);\n    };\n    return rescale();\n}\nfunction d3_scale_linearRebind(scale, linear) {\n    return d3.rebind(scale, linear, 'range', 'rangeRound', 'interpolate', 'clamp');\n}\nfunction d3_scale_linearNice(domain, m) {\n    return d3_scale_nice(domain, d3_scale_niceStep(d3_scale_linearTickRange(domain, m)[2]));\n}\nfunction d3_scale_linearTickRange(domain, m) {\n    if (m == null)\n        m = 10;\n    var extent = d3_scaleExtent(domain), span = extent[1] - extent[0], step = Math.pow(10, Math.floor(Math.log(span / m) / Math.LN10)), err = m / span * step;\n    if (err <= 0.15)\n        step *= 10;\n    else if (err <= 0.35)\n        step *= 5;\n    else if (err <= 0.75)\n        step *= 2;\n    extent[0] = Math.ceil(extent[0] / step) * step;\n    extent[1] = Math.floor(extent[1] / step) * step + step * 0.5;\n    extent[2] = step;\n    return extent;\n}\nfunction d3_scale_linearTicks(domain, m) {\n    return d3.range.apply(d3, d3_scale_linearTickRange(domain, m));\n}\nfunction d3_scale_linearTickFormat(domain, m, format) {\n    var range = d3_scale_linearTickRange(domain, m);\n    if (format) {\n        var match = d3_format_re.exec(format);\n        match.shift();\n        if (match[8] === 's') {\n            var prefix = d3.formatPrefix(Math.max(abs(range[0]), abs(range[1])));\n            if (!match[7])\n                match[7] = '.' + d3_scale_linearPrecision(prefix.scale(range[2]));\n            match[8] = 'f';\n            format = d3.format(match.join(''));\n            return function (d) {\n                return format(prefix.scale(d)) + prefix.symbol;\n            };\n        }\n        if (!match[7])\n            match[7] = '.' + d3_scale_linearFormatPrecision(match[8], range);\n        format = match.join('');\n    } else {\n        format = ',.' + d3_scale_linearPrecision(range[2]) + 'f';\n    }\n    return d3.format(format);\n}\nvar d3_scale_linearFormatSignificant = {\n        s: 1,\n        g: 1,\n        p: 1,\n        r: 1,\n        e: 1\n    };\nfunction d3_scale_linearPrecision(value) {\n    return -Math.floor(Math.log(value) / Math.LN10 + 0.01);\n}\nfunction d3_scale_linearFormatPrecision(type, range) {\n    var p = d3_scale_linearPrecision(range[2]);\n    return type in d3_scale_linearFormatSignificant ? Math.abs(p - d3_scale_linearPrecision(Math.max(abs(range[0]), abs(range[1])))) + +(type !== 'e') : p - (type === '%') * 2;\n}"
}