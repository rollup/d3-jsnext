{
  "filepath": "/svg/chord.js",
  "shared": [],
  "dependencies": [
    "d3_source",
    "d3_target",
    "d3_svg_arcStartAngle",
    "d3_svg_arcEndAngle",
    "d3_svg_arcOffset",
    "d3_functor"
  ],
  "helpers": [
    "d3_svg_chordRadius"
  ],
  "exports": [
    "d3.svg.chord"
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
                "name": "svg"
              }
            },
            "property": {
              "type": "Identifier",
              "name": "chord"
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
                        "name": "source"
                      },
                      "init": {
                        "type": "Identifier",
                        "name": "d3_source"
                      }
                    },
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "name": "target"
                      },
                      "init": {
                        "type": "Identifier",
                        "name": "d3_target"
                      }
                    },
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "name": "radius"
                      },
                      "init": {
                        "type": "Identifier",
                        "name": "d3_svg_chordRadius"
                      }
                    },
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "name": "startAngle"
                      },
                      "init": {
                        "type": "Identifier",
                        "name": "d3_svg_arcStartAngle"
                      }
                    },
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "name": "endAngle"
                      },
                      "init": {
                        "type": "Identifier",
                        "name": "d3_svg_arcEndAngle"
                      }
                    }
                  ],
                  "kind": "var"
                },
                {
                  "type": "FunctionDeclaration",
                  "id": {
                    "type": "Identifier",
                    "name": "chord"
                  },
                  "params": [
                    {
                      "type": "Identifier",
                      "name": "d"
                    },
                    {
                      "type": "Identifier",
                      "name": "i"
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
                              "name": "s"
                            },
                            "init": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "Identifier",
                                "name": "subgroup"
                              },
                              "arguments": [
                                {
                                  "type": "ThisExpression"
                                },
                                {
                                  "type": "Identifier",
                                  "name": "source"
                                },
                                {
                                  "type": "Identifier",
                                  "name": "d"
                                },
                                {
                                  "type": "Identifier",
                                  "name": "i"
                                }
                              ]
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
                                "type": "Identifier",
                                "name": "subgroup"
                              },
                              "arguments": [
                                {
                                  "type": "ThisExpression"
                                },
                                {
                                  "type": "Identifier",
                                  "name": "target"
                                },
                                {
                                  "type": "Identifier",
                                  "name": "d"
                                },
                                {
                                  "type": "Identifier",
                                  "name": "i"
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
                          "type": "BinaryExpression",
                          "operator": "+",
                          "left": {
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
                                  "value": "M",
                                  "raw": "\"M\""
                                },
                                "right": {
                                  "type": "MemberExpression",
                                  "computed": false,
                                  "object": {
                                    "type": "Identifier",
                                    "name": "s"
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "name": "p0"
                                  }
                                }
                              },
                              "right": {
                                "type": "CallExpression",
                                "callee": {
                                  "type": "Identifier",
                                  "name": "arc"
                                },
                                "arguments": [
                                  {
                                    "type": "MemberExpression",
                                    "computed": false,
                                    "object": {
                                      "type": "Identifier",
                                      "name": "s"
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
                                      "name": "s"
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "name": "p1"
                                    }
                                  },
                                  {
                                    "type": "BinaryExpression",
                                    "operator": "-",
                                    "left": {
                                      "type": "MemberExpression",
                                      "computed": false,
                                      "object": {
                                        "type": "Identifier",
                                        "name": "s"
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "name": "a1"
                                      }
                                    },
                                    "right": {
                                      "type": "MemberExpression",
                                      "computed": false,
                                      "object": {
                                        "type": "Identifier",
                                        "name": "s"
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "name": "a0"
                                      }
                                    }
                                  }
                                ]
                              }
                            },
                            "right": {
                              "type": "ConditionalExpression",
                              "test": {
                                "type": "CallExpression",
                                "callee": {
                                  "type": "Identifier",
                                  "name": "equals"
                                },
                                "arguments": [
                                  {
                                    "type": "Identifier",
                                    "name": "s"
                                  },
                                  {
                                    "type": "Identifier",
                                    "name": "t"
                                  }
                                ]
                              },
                              "consequent": {
                                "type": "CallExpression",
                                "callee": {
                                  "type": "Identifier",
                                  "name": "curve"
                                },
                                "arguments": [
                                  {
                                    "type": "MemberExpression",
                                    "computed": false,
                                    "object": {
                                      "type": "Identifier",
                                      "name": "s"
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
                                      "name": "s"
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "name": "p1"
                                    }
                                  },
                                  {
                                    "type": "MemberExpression",
                                    "computed": false,
                                    "object": {
                                      "type": "Identifier",
                                      "name": "s"
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
                                      "name": "s"
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "name": "p0"
                                    }
                                  }
                                ]
                              },
                              "alternate": {
                                "type": "BinaryExpression",
                                "operator": "+",
                                "left": {
                                  "type": "BinaryExpression",
                                  "operator": "+",
                                  "left": {
                                    "type": "CallExpression",
                                    "callee": {
                                      "type": "Identifier",
                                      "name": "curve"
                                    },
                                    "arguments": [
                                      {
                                        "type": "MemberExpression",
                                        "computed": false,
                                        "object": {
                                          "type": "Identifier",
                                          "name": "s"
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
                                          "name": "s"
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "name": "p1"
                                        }
                                      },
                                      {
                                        "type": "MemberExpression",
                                        "computed": false,
                                        "object": {
                                          "type": "Identifier",
                                          "name": "t"
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
                                          "name": "t"
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "name": "p0"
                                        }
                                      }
                                    ]
                                  },
                                  "right": {
                                    "type": "CallExpression",
                                    "callee": {
                                      "type": "Identifier",
                                      "name": "arc"
                                    },
                                    "arguments": [
                                      {
                                        "type": "MemberExpression",
                                        "computed": false,
                                        "object": {
                                          "type": "Identifier",
                                          "name": "t"
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
                                          "name": "t"
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "name": "p1"
                                        }
                                      },
                                      {
                                        "type": "BinaryExpression",
                                        "operator": "-",
                                        "left": {
                                          "type": "MemberExpression",
                                          "computed": false,
                                          "object": {
                                            "type": "Identifier",
                                            "name": "t"
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "name": "a1"
                                          }
                                        },
                                        "right": {
                                          "type": "MemberExpression",
                                          "computed": false,
                                          "object": {
                                            "type": "Identifier",
                                            "name": "t"
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "name": "a0"
                                          }
                                        }
                                      }
                                    ]
                                  }
                                },
                                "right": {
                                  "type": "CallExpression",
                                  "callee": {
                                    "type": "Identifier",
                                    "name": "curve"
                                  },
                                  "arguments": [
                                    {
                                      "type": "MemberExpression",
                                      "computed": false,
                                      "object": {
                                        "type": "Identifier",
                                        "name": "t"
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
                                        "name": "t"
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "name": "p1"
                                      }
                                    },
                                    {
                                      "type": "MemberExpression",
                                      "computed": false,
                                      "object": {
                                        "type": "Identifier",
                                        "name": "s"
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
                                        "name": "s"
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "name": "p0"
                                      }
                                    }
                                  ]
                                }
                              }
                            }
                          },
                          "right": {
                            "type": "Literal",
                            "value": "Z",
                            "raw": "\"Z\""
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
                    "name": "subgroup"
                  },
                  "params": [
                    {
                      "type": "Identifier",
                      "name": "self"
                    },
                    {
                      "type": "Identifier",
                      "name": "f"
                    },
                    {
                      "type": "Identifier",
                      "name": "d"
                    },
                    {
                      "type": "Identifier",
                      "name": "i"
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
                              "name": "subgroup"
                            },
                            "init": {
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
                                  "name": "self"
                                },
                                {
                                  "type": "Identifier",
                                  "name": "d"
                                },
                                {
                                  "type": "Identifier",
                                  "name": "i"
                                }
                              ]
                            }
                          },
                          {
                            "type": "VariableDeclarator",
                            "id": {
                              "type": "Identifier",
                              "name": "r"
                            },
                            "init": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "MemberExpression",
                                "computed": false,
                                "object": {
                                  "type": "Identifier",
                                  "name": "radius"
                                },
                                "property": {
                                  "type": "Identifier",
                                  "name": "call"
                                }
                              },
                              "arguments": [
                                {
                                  "type": "Identifier",
                                  "name": "self"
                                },
                                {
                                  "type": "Identifier",
                                  "name": "subgroup"
                                },
                                {
                                  "type": "Identifier",
                                  "name": "i"
                                }
                              ]
                            }
                          },
                          {
                            "type": "VariableDeclarator",
                            "id": {
                              "type": "Identifier",
                              "name": "a0"
                            },
                            "init": {
                              "type": "BinaryExpression",
                              "operator": "+",
                              "left": {
                                "type": "CallExpression",
                                "callee": {
                                  "type": "MemberExpression",
                                  "computed": false,
                                  "object": {
                                    "type": "Identifier",
                                    "name": "startAngle"
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "name": "call"
                                  }
                                },
                                "arguments": [
                                  {
                                    "type": "Identifier",
                                    "name": "self"
                                  },
                                  {
                                    "type": "Identifier",
                                    "name": "subgroup"
                                  },
                                  {
                                    "type": "Identifier",
                                    "name": "i"
                                  }
                                ]
                              },
                              "right": {
                                "type": "Identifier",
                                "name": "d3_svg_arcOffset"
                              }
                            }
                          },
                          {
                            "type": "VariableDeclarator",
                            "id": {
                              "type": "Identifier",
                              "name": "a1"
                            },
                            "init": {
                              "type": "BinaryExpression",
                              "operator": "+",
                              "left": {
                                "type": "CallExpression",
                                "callee": {
                                  "type": "MemberExpression",
                                  "computed": false,
                                  "object": {
                                    "type": "Identifier",
                                    "name": "endAngle"
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "name": "call"
                                  }
                                },
                                "arguments": [
                                  {
                                    "type": "Identifier",
                                    "name": "self"
                                  },
                                  {
                                    "type": "Identifier",
                                    "name": "subgroup"
                                  },
                                  {
                                    "type": "Identifier",
                                    "name": "i"
                                  }
                                ]
                              },
                              "right": {
                                "type": "Identifier",
                                "name": "d3_svg_arcOffset"
                              }
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
                                "name": "r"
                              },
                              "value": {
                                "type": "Identifier",
                                "name": "r"
                              },
                              "kind": "init"
                            },
                            {
                              "type": "Property",
                              "key": {
                                "type": "Identifier",
                                "name": "a0"
                              },
                              "value": {
                                "type": "Identifier",
                                "name": "a0"
                              },
                              "kind": "init"
                            },
                            {
                              "type": "Property",
                              "key": {
                                "type": "Identifier",
                                "name": "a1"
                              },
                              "value": {
                                "type": "Identifier",
                                "name": "a1"
                              },
                              "kind": "init"
                            },
                            {
                              "type": "Property",
                              "key": {
                                "type": "Identifier",
                                "name": "p0"
                              },
                              "value": {
                                "type": "ArrayExpression",
                                "elements": [
                                  {
                                    "type": "BinaryExpression",
                                    "operator": "*",
                                    "left": {
                                      "type": "Identifier",
                                      "name": "r"
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
                                          "name": "a0"
                                        }
                                      ]
                                    }
                                  },
                                  {
                                    "type": "BinaryExpression",
                                    "operator": "*",
                                    "left": {
                                      "type": "Identifier",
                                      "name": "r"
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
                                          "name": "a0"
                                        }
                                      ]
                                    }
                                  }
                                ]
                              },
                              "kind": "init"
                            },
                            {
                              "type": "Property",
                              "key": {
                                "type": "Identifier",
                                "name": "p1"
                              },
                              "value": {
                                "type": "ArrayExpression",
                                "elements": [
                                  {
                                    "type": "BinaryExpression",
                                    "operator": "*",
                                    "left": {
                                      "type": "Identifier",
                                      "name": "r"
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
                                          "name": "a1"
                                        }
                                      ]
                                    }
                                  },
                                  {
                                    "type": "BinaryExpression",
                                    "operator": "*",
                                    "left": {
                                      "type": "Identifier",
                                      "name": "r"
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
                                          "name": "a1"
                                        }
                                      ]
                                    }
                                  }
                                ]
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
                    "name": "equals"
                  },
                  "params": [
                    {
                      "type": "Identifier",
                      "name": "a"
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
                          "type": "LogicalExpression",
                          "operator": "&&",
                          "left": {
                            "type": "BinaryExpression",
                            "operator": "==",
                            "left": {
                              "type": "MemberExpression",
                              "computed": false,
                              "object": {
                                "type": "Identifier",
                                "name": "a"
                              },
                              "property": {
                                "type": "Identifier",
                                "name": "a0"
                              }
                            },
                            "right": {
                              "type": "MemberExpression",
                              "computed": false,
                              "object": {
                                "type": "Identifier",
                                "name": "b"
                              },
                              "property": {
                                "type": "Identifier",
                                "name": "a0"
                              }
                            }
                          },
                          "right": {
                            "type": "BinaryExpression",
                            "operator": "==",
                            "left": {
                              "type": "MemberExpression",
                              "computed": false,
                              "object": {
                                "type": "Identifier",
                                "name": "a"
                              },
                              "property": {
                                "type": "Identifier",
                                "name": "a1"
                              }
                            },
                            "right": {
                              "type": "MemberExpression",
                              "computed": false,
                              "object": {
                                "type": "Identifier",
                                "name": "b"
                              },
                              "property": {
                                "type": "Identifier",
                                "name": "a1"
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
                    "name": "arc"
                  },
                  "params": [
                    {
                      "type": "Identifier",
                      "name": "r"
                    },
                    {
                      "type": "Identifier",
                      "name": "p"
                    },
                    {
                      "type": "Identifier",
                      "name": "a"
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
                            "type": "BinaryExpression",
                            "operator": "+",
                            "left": {
                              "type": "BinaryExpression",
                              "operator": "+",
                              "left": {
                                "type": "BinaryExpression",
                                "operator": "+",
                                "left": {
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
                                        "value": "A",
                                        "raw": "\"A\""
                                      },
                                      "right": {
                                        "type": "Identifier",
                                        "name": "r"
                                      }
                                    },
                                    "right": {
                                      "type": "Literal",
                                      "value": ",",
                                      "raw": "\",\""
                                    }
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "name": "r"
                                  }
                                },
                                "right": {
                                  "type": "Literal",
                                  "value": " 0 ",
                                  "raw": "\" 0 \""
                                }
                              },
                              "right": {
                                "type": "UnaryExpression",
                                "operator": "+",
                                "argument": {
                                  "type": "BinaryExpression",
                                  "operator": ">",
                                  "left": {
                                    "type": "Identifier",
                                    "name": "a"
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "name": "π"
                                  }
                                },
                                "prefix": true
                              }
                            },
                            "right": {
                              "type": "Literal",
                              "value": ",1 ",
                              "raw": "\",1 \""
                            }
                          },
                          "right": {
                            "type": "Identifier",
                            "name": "p"
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
                    "name": "curve"
                  },
                  "params": [
                    {
                      "type": "Identifier",
                      "name": "r0"
                    },
                    {
                      "type": "Identifier",
                      "name": "p0"
                    },
                    {
                      "type": "Identifier",
                      "name": "r1"
                    },
                    {
                      "type": "Identifier",
                      "name": "p1"
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
                            "type": "Literal",
                            "value": "Q 0,0 ",
                            "raw": "\"Q 0,0 \""
                          },
                          "right": {
                            "type": "Identifier",
                            "name": "p1"
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
                        "name": "chord"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "radius"
                      }
                    },
                    "right": {
                      "type": "FunctionExpression",
                      "id": null,
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
                                "name": "radius"
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
                                "name": "radius"
                              },
                              "right": {
                                "type": "CallExpression",
                                "callee": {
                                  "type": "Identifier",
                                  "name": "d3_functor"
                                },
                                "arguments": [
                                  {
                                    "type": "Identifier",
                                    "name": "v"
                                  }
                                ]
                              }
                            }
                          },
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "Identifier",
                              "name": "chord"
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
                        "name": "chord"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "source"
                      }
                    },
                    "right": {
                      "type": "FunctionExpression",
                      "id": null,
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
                                "name": "source"
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
                                "name": "source"
                              },
                              "right": {
                                "type": "CallExpression",
                                "callee": {
                                  "type": "Identifier",
                                  "name": "d3_functor"
                                },
                                "arguments": [
                                  {
                                    "type": "Identifier",
                                    "name": "v"
                                  }
                                ]
                              }
                            }
                          },
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "Identifier",
                              "name": "chord"
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
                        "name": "chord"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "target"
                      }
                    },
                    "right": {
                      "type": "FunctionExpression",
                      "id": null,
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
                                "name": "target"
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
                                "name": "target"
                              },
                              "right": {
                                "type": "CallExpression",
                                "callee": {
                                  "type": "Identifier",
                                  "name": "d3_functor"
                                },
                                "arguments": [
                                  {
                                    "type": "Identifier",
                                    "name": "v"
                                  }
                                ]
                              }
                            }
                          },
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "Identifier",
                              "name": "chord"
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
                        "name": "chord"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "startAngle"
                      }
                    },
                    "right": {
                      "type": "FunctionExpression",
                      "id": null,
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
                                "name": "startAngle"
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
                                "name": "startAngle"
                              },
                              "right": {
                                "type": "CallExpression",
                                "callee": {
                                  "type": "Identifier",
                                  "name": "d3_functor"
                                },
                                "arguments": [
                                  {
                                    "type": "Identifier",
                                    "name": "v"
                                  }
                                ]
                              }
                            }
                          },
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "Identifier",
                              "name": "chord"
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
                        "name": "chord"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "endAngle"
                      }
                    },
                    "right": {
                      "type": "FunctionExpression",
                      "id": null,
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
                                "name": "endAngle"
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
                                "name": "endAngle"
                              },
                              "right": {
                                "type": "CallExpression",
                                "callee": {
                                  "type": "Identifier",
                                  "name": "d3_functor"
                                },
                                "arguments": [
                                  {
                                    "type": "Identifier",
                                    "name": "v"
                                  }
                                ]
                              }
                            }
                          },
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "Identifier",
                              "name": "chord"
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
                    "type": "Identifier",
                    "name": "chord"
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
          "name": "d3_svg_chordRadius"
        },
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
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "name": "d"
                },
                "property": {
                  "type": "Identifier",
                  "name": "radius"
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
  "src": "d3.svg.chord = function () {\n    var source = d3_source, target = d3_target, radius = d3_svg_chordRadius, startAngle = d3_svg_arcStartAngle, endAngle = d3_svg_arcEndAngle;\n    function chord(d, i) {\n        var s = subgroup(this, source, d, i), t = subgroup(this, target, d, i);\n        return 'M' + s.p0 + arc(s.r, s.p1, s.a1 - s.a0) + (equals(s, t) ? curve(s.r, s.p1, s.r, s.p0) : curve(s.r, s.p1, t.r, t.p0) + arc(t.r, t.p1, t.a1 - t.a0) + curve(t.r, t.p1, s.r, s.p0)) + 'Z';\n    }\n    function subgroup(self, f, d, i) {\n        var subgroup = f.call(self, d, i), r = radius.call(self, subgroup, i), a0 = startAngle.call(self, subgroup, i) + d3_svg_arcOffset, a1 = endAngle.call(self, subgroup, i) + d3_svg_arcOffset;\n        return {\n            r: r,\n            a0: a0,\n            a1: a1,\n            p0: [\n                r * Math.cos(a0),\n                r * Math.sin(a0)\n            ],\n            p1: [\n                r * Math.cos(a1),\n                r * Math.sin(a1)\n            ]\n        };\n    }\n    function equals(a, b) {\n        return a.a0 == b.a0 && a.a1 == b.a1;\n    }\n    function arc(r, p, a) {\n        return 'A' + r + ',' + r + ' 0 ' + +(a > π) + ',1 ' + p;\n    }\n    function curve(r0, p0, r1, p1) {\n        return 'Q 0,0 ' + p1;\n    }\n    chord.radius = function (v) {\n        if (!arguments.length)\n            return radius;\n        radius = d3_functor(v);\n        return chord;\n    };\n    chord.source = function (v) {\n        if (!arguments.length)\n            return source;\n        source = d3_functor(v);\n        return chord;\n    };\n    chord.target = function (v) {\n        if (!arguments.length)\n            return target;\n        target = d3_functor(v);\n        return chord;\n    };\n    chord.startAngle = function (v) {\n        if (!arguments.length)\n            return startAngle;\n        startAngle = d3_functor(v);\n        return chord;\n    };\n    chord.endAngle = function (v) {\n        if (!arguments.length)\n            return endAngle;\n        endAngle = d3_functor(v);\n        return chord;\n    };\n    return chord;\n};\nfunction d3_svg_chordRadius(d) {\n    return d.radius;\n}"
}