{
  "filepath": "/svg/arc.js",
  "shared": [],
  "dependencies": [
    "d3_functor"
  ],
  "helpers": [
    "d3_svg_arcOffset",
    "d3_svg_arcMax",
    "d3_svg_arcInnerRadius",
    "d3_svg_arcOuterRadius",
    "d3_svg_arcStartAngle",
    "d3_svg_arcEndAngle"
  ],
  "exports": [
    "d3.svg.arc"
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
              "name": "arc"
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
                        "name": "innerRadius"
                      },
                      "init": {
                        "type": "Identifier",
                        "name": "d3_svg_arcInnerRadius"
                      }
                    },
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "name": "outerRadius"
                      },
                      "init": {
                        "type": "Identifier",
                        "name": "d3_svg_arcOuterRadius"
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
                    "name": "arc"
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
                              "name": "r0"
                            },
                            "init": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "MemberExpression",
                                "computed": false,
                                "object": {
                                  "type": "Identifier",
                                  "name": "innerRadius"
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
                          },
                          {
                            "type": "VariableDeclarator",
                            "id": {
                              "type": "Identifier",
                              "name": "r1"
                            },
                            "init": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "MemberExpression",
                                "computed": false,
                                "object": {
                                  "type": "Identifier",
                                  "name": "outerRadius"
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
                              "name": "da"
                            },
                            "init": {
                              "type": "SequenceExpression",
                              "expressions": [
                                {
                                  "type": "LogicalExpression",
                                  "operator": "&&",
                                  "left": {
                                    "type": "BinaryExpression",
                                    "operator": "<",
                                    "left": {
                                      "type": "Identifier",
                                      "name": "a1"
                                    },
                                    "right": {
                                      "type": "Identifier",
                                      "name": "a0"
                                    }
                                  },
                                  "right": {
                                    "type": "SequenceExpression",
                                    "expressions": [
                                      {
                                        "type": "AssignmentExpression",
                                        "operator": "=",
                                        "left": {
                                          "type": "Identifier",
                                          "name": "da"
                                        },
                                        "right": {
                                          "type": "Identifier",
                                          "name": "a0"
                                        }
                                      },
                                      {
                                        "type": "AssignmentExpression",
                                        "operator": "=",
                                        "left": {
                                          "type": "Identifier",
                                          "name": "a0"
                                        },
                                        "right": {
                                          "type": "Identifier",
                                          "name": "a1"
                                        }
                                      },
                                      {
                                        "type": "AssignmentExpression",
                                        "operator": "=",
                                        "left": {
                                          "type": "Identifier",
                                          "name": "a1"
                                        },
                                        "right": {
                                          "type": "Identifier",
                                          "name": "da"
                                        }
                                      }
                                    ]
                                  }
                                },
                                {
                                  "type": "BinaryExpression",
                                  "operator": "-",
                                  "left": {
                                    "type": "Identifier",
                                    "name": "a1"
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "name": "a0"
                                  }
                                }
                              ]
                            }
                          },
                          {
                            "type": "VariableDeclarator",
                            "id": {
                              "type": "Identifier",
                              "name": "df"
                            },
                            "init": {
                              "type": "ConditionalExpression",
                              "test": {
                                "type": "BinaryExpression",
                                "operator": "<",
                                "left": {
                                  "type": "Identifier",
                                  "name": "da"
                                },
                                "right": {
                                  "type": "Identifier",
                                  "name": "π"
                                }
                              },
                              "consequent": {
                                "type": "Literal",
                                "value": "0",
                                "raw": "\"0\""
                              },
                              "alternate": {
                                "type": "Literal",
                                "value": "1",
                                "raw": "\"1\""
                              }
                            }
                          },
                          {
                            "type": "VariableDeclarator",
                            "id": {
                              "type": "Identifier",
                              "name": "c0"
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
                            "type": "VariableDeclarator",
                            "id": {
                              "type": "Identifier",
                              "name": "s0"
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
                                  "type": "Identifier",
                                  "name": "a0"
                                }
                              ]
                            }
                          },
                          {
                            "type": "VariableDeclarator",
                            "id": {
                              "type": "Identifier",
                              "name": "c1"
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
                            "type": "VariableDeclarator",
                            "id": {
                              "type": "Identifier",
                              "name": "s1"
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
                                  "type": "Identifier",
                                  "name": "a1"
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
                            "operator": ">=",
                            "left": {
                              "type": "Identifier",
                              "name": "da"
                            },
                            "right": {
                              "type": "Identifier",
                              "name": "d3_svg_arcMax"
                            }
                          },
                          "consequent": {
                            "type": "ConditionalExpression",
                            "test": {
                              "type": "Identifier",
                              "name": "r0"
                            },
                            "consequent": {
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
                                                                                      "value": "M0,",
                                                                                      "raw": "\"M0,\""
                                                                                    },
                                                                                    "right": {
                                                                                      "type": "Identifier",
                                                                                      "name": "r1"
                                                                                    }
                                                                                  },
                                                                                  "right": {
                                                                                    "type": "Literal",
                                                                                    "value": "A",
                                                                                    "raw": "\"A\""
                                                                                  }
                                                                                },
                                                                                "right": {
                                                                                  "type": "Identifier",
                                                                                  "name": "r1"
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
                                                                              "name": "r1"
                                                                            }
                                                                          },
                                                                          "right": {
                                                                            "type": "Literal",
                                                                            "value": " 0 1,1 0,",
                                                                            "raw": "\" 0 1,1 0,\""
                                                                          }
                                                                        },
                                                                        "right": {
                                                                          "type": "UnaryExpression",
                                                                          "operator": "-",
                                                                          "argument": {
                                                                            "type": "Identifier",
                                                                            "name": "r1"
                                                                          },
                                                                          "prefix": true
                                                                        }
                                                                      },
                                                                      "right": {
                                                                        "type": "Literal",
                                                                        "value": "A",
                                                                        "raw": "\"A\""
                                                                      }
                                                                    },
                                                                    "right": {
                                                                      "type": "Identifier",
                                                                      "name": "r1"
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
                                                                  "name": "r1"
                                                                }
                                                              },
                                                              "right": {
                                                                "type": "Literal",
                                                                "value": " 0 1,1 0,",
                                                                "raw": "\" 0 1,1 0,\""
                                                              }
                                                            },
                                                            "right": {
                                                              "type": "Identifier",
                                                              "name": "r1"
                                                            }
                                                          },
                                                          "right": {
                                                            "type": "Literal",
                                                            "value": "M0,",
                                                            "raw": "\"M0,\""
                                                          }
                                                        },
                                                        "right": {
                                                          "type": "Identifier",
                                                          "name": "r0"
                                                        }
                                                      },
                                                      "right": {
                                                        "type": "Literal",
                                                        "value": "A",
                                                        "raw": "\"A\""
                                                      }
                                                    },
                                                    "right": {
                                                      "type": "Identifier",
                                                      "name": "r0"
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
                                                  "name": "r0"
                                                }
                                              },
                                              "right": {
                                                "type": "Literal",
                                                "value": " 0 1,0 0,",
                                                "raw": "\" 0 1,0 0,\""
                                              }
                                            },
                                            "right": {
                                              "type": "UnaryExpression",
                                              "operator": "-",
                                              "argument": {
                                                "type": "Identifier",
                                                "name": "r0"
                                              },
                                              "prefix": true
                                            }
                                          },
                                          "right": {
                                            "type": "Literal",
                                            "value": "A",
                                            "raw": "\"A\""
                                          }
                                        },
                                        "right": {
                                          "type": "Identifier",
                                          "name": "r0"
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
                                      "name": "r0"
                                    }
                                  },
                                  "right": {
                                    "type": "Literal",
                                    "value": " 0 1,0 0,",
                                    "raw": "\" 0 1,0 0,\""
                                  }
                                },
                                "right": {
                                  "type": "Identifier",
                                  "name": "r0"
                                }
                              },
                              "right": {
                                "type": "Literal",
                                "value": "Z",
                                "raw": "\"Z\""
                              }
                            },
                            "alternate": {
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
                                                          "value": "M0,",
                                                          "raw": "\"M0,\""
                                                        },
                                                        "right": {
                                                          "type": "Identifier",
                                                          "name": "r1"
                                                        }
                                                      },
                                                      "right": {
                                                        "type": "Literal",
                                                        "value": "A",
                                                        "raw": "\"A\""
                                                      }
                                                    },
                                                    "right": {
                                                      "type": "Identifier",
                                                      "name": "r1"
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
                                                  "name": "r1"
                                                }
                                              },
                                              "right": {
                                                "type": "Literal",
                                                "value": " 0 1,1 0,",
                                                "raw": "\" 0 1,1 0,\""
                                              }
                                            },
                                            "right": {
                                              "type": "UnaryExpression",
                                              "operator": "-",
                                              "argument": {
                                                "type": "Identifier",
                                                "name": "r1"
                                              },
                                              "prefix": true
                                            }
                                          },
                                          "right": {
                                            "type": "Literal",
                                            "value": "A",
                                            "raw": "\"A\""
                                          }
                                        },
                                        "right": {
                                          "type": "Identifier",
                                          "name": "r1"
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
                                      "name": "r1"
                                    }
                                  },
                                  "right": {
                                    "type": "Literal",
                                    "value": " 0 1,1 0,",
                                    "raw": "\" 0 1,1 0,\""
                                  }
                                },
                                "right": {
                                  "type": "Identifier",
                                  "name": "r1"
                                }
                              },
                              "right": {
                                "type": "Literal",
                                "value": "Z",
                                "raw": "\"Z\""
                              }
                            }
                          },
                          "alternate": {
                            "type": "ConditionalExpression",
                            "test": {
                              "type": "Identifier",
                              "name": "r0"
                            },
                            "consequent": {
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
                                                                                      "value": "M",
                                                                                      "raw": "\"M\""
                                                                                    },
                                                                                    "right": {
                                                                                      "type": "BinaryExpression",
                                                                                      "operator": "*",
                                                                                      "left": {
                                                                                        "type": "Identifier",
                                                                                        "name": "r1"
                                                                                      },
                                                                                      "right": {
                                                                                        "type": "Identifier",
                                                                                        "name": "c0"
                                                                                      }
                                                                                    }
                                                                                  },
                                                                                  "right": {
                                                                                    "type": "Literal",
                                                                                    "value": ",",
                                                                                    "raw": "\",\""
                                                                                  }
                                                                                },
                                                                                "right": {
                                                                                  "type": "BinaryExpression",
                                                                                  "operator": "*",
                                                                                  "left": {
                                                                                    "type": "Identifier",
                                                                                    "name": "r1"
                                                                                  },
                                                                                  "right": {
                                                                                    "type": "Identifier",
                                                                                    "name": "s0"
                                                                                  }
                                                                                }
                                                                              },
                                                                              "right": {
                                                                                "type": "Literal",
                                                                                "value": "A",
                                                                                "raw": "\"A\""
                                                                              }
                                                                            },
                                                                            "right": {
                                                                              "type": "Identifier",
                                                                              "name": "r1"
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
                                                                          "name": "r1"
                                                                        }
                                                                      },
                                                                      "right": {
                                                                        "type": "Literal",
                                                                        "value": " 0 ",
                                                                        "raw": "\" 0 \""
                                                                      }
                                                                    },
                                                                    "right": {
                                                                      "type": "Identifier",
                                                                      "name": "df"
                                                                    }
                                                                  },
                                                                  "right": {
                                                                    "type": "Literal",
                                                                    "value": ",1 ",
                                                                    "raw": "\",1 \""
                                                                  }
                                                                },
                                                                "right": {
                                                                  "type": "BinaryExpression",
                                                                  "operator": "*",
                                                                  "left": {
                                                                    "type": "Identifier",
                                                                    "name": "r1"
                                                                  },
                                                                  "right": {
                                                                    "type": "Identifier",
                                                                    "name": "c1"
                                                                  }
                                                                }
                                                              },
                                                              "right": {
                                                                "type": "Literal",
                                                                "value": ",",
                                                                "raw": "\",\""
                                                              }
                                                            },
                                                            "right": {
                                                              "type": "BinaryExpression",
                                                              "operator": "*",
                                                              "left": {
                                                                "type": "Identifier",
                                                                "name": "r1"
                                                              },
                                                              "right": {
                                                                "type": "Identifier",
                                                                "name": "s1"
                                                              }
                                                            }
                                                          },
                                                          "right": {
                                                            "type": "Literal",
                                                            "value": "L",
                                                            "raw": "\"L\""
                                                          }
                                                        },
                                                        "right": {
                                                          "type": "BinaryExpression",
                                                          "operator": "*",
                                                          "left": {
                                                            "type": "Identifier",
                                                            "name": "r0"
                                                          },
                                                          "right": {
                                                            "type": "Identifier",
                                                            "name": "c1"
                                                          }
                                                        }
                                                      },
                                                      "right": {
                                                        "type": "Literal",
                                                        "value": ",",
                                                        "raw": "\",\""
                                                      }
                                                    },
                                                    "right": {
                                                      "type": "BinaryExpression",
                                                      "operator": "*",
                                                      "left": {
                                                        "type": "Identifier",
                                                        "name": "r0"
                                                      },
                                                      "right": {
                                                        "type": "Identifier",
                                                        "name": "s1"
                                                      }
                                                    }
                                                  },
                                                  "right": {
                                                    "type": "Literal",
                                                    "value": "A",
                                                    "raw": "\"A\""
                                                  }
                                                },
                                                "right": {
                                                  "type": "Identifier",
                                                  "name": "r0"
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
                                              "name": "r0"
                                            }
                                          },
                                          "right": {
                                            "type": "Literal",
                                            "value": " 0 ",
                                            "raw": "\" 0 \""
                                          }
                                        },
                                        "right": {
                                          "type": "Identifier",
                                          "name": "df"
                                        }
                                      },
                                      "right": {
                                        "type": "Literal",
                                        "value": ",0 ",
                                        "raw": "\",0 \""
                                      }
                                    },
                                    "right": {
                                      "type": "BinaryExpression",
                                      "operator": "*",
                                      "left": {
                                        "type": "Identifier",
                                        "name": "r0"
                                      },
                                      "right": {
                                        "type": "Identifier",
                                        "name": "c0"
                                      }
                                    }
                                  },
                                  "right": {
                                    "type": "Literal",
                                    "value": ",",
                                    "raw": "\",\""
                                  }
                                },
                                "right": {
                                  "type": "BinaryExpression",
                                  "operator": "*",
                                  "left": {
                                    "type": "Identifier",
                                    "name": "r0"
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "name": "s0"
                                  }
                                }
                              },
                              "right": {
                                "type": "Literal",
                                "value": "Z",
                                "raw": "\"Z\""
                              }
                            },
                            "alternate": {
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
                                                          "type": "BinaryExpression",
                                                          "operator": "+",
                                                          "left": {
                                                            "type": "Literal",
                                                            "value": "M",
                                                            "raw": "\"M\""
                                                          },
                                                          "right": {
                                                            "type": "BinaryExpression",
                                                            "operator": "*",
                                                            "left": {
                                                              "type": "Identifier",
                                                              "name": "r1"
                                                            },
                                                            "right": {
                                                              "type": "Identifier",
                                                              "name": "c0"
                                                            }
                                                          }
                                                        },
                                                        "right": {
                                                          "type": "Literal",
                                                          "value": ",",
                                                          "raw": "\",\""
                                                        }
                                                      },
                                                      "right": {
                                                        "type": "BinaryExpression",
                                                        "operator": "*",
                                                        "left": {
                                                          "type": "Identifier",
                                                          "name": "r1"
                                                        },
                                                        "right": {
                                                          "type": "Identifier",
                                                          "name": "s0"
                                                        }
                                                      }
                                                    },
                                                    "right": {
                                                      "type": "Literal",
                                                      "value": "A",
                                                      "raw": "\"A\""
                                                    }
                                                  },
                                                  "right": {
                                                    "type": "Identifier",
                                                    "name": "r1"
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
                                                "name": "r1"
                                              }
                                            },
                                            "right": {
                                              "type": "Literal",
                                              "value": " 0 ",
                                              "raw": "\" 0 \""
                                            }
                                          },
                                          "right": {
                                            "type": "Identifier",
                                            "name": "df"
                                          }
                                        },
                                        "right": {
                                          "type": "Literal",
                                          "value": ",1 ",
                                          "raw": "\",1 \""
                                        }
                                      },
                                      "right": {
                                        "type": "BinaryExpression",
                                        "operator": "*",
                                        "left": {
                                          "type": "Identifier",
                                          "name": "r1"
                                        },
                                        "right": {
                                          "type": "Identifier",
                                          "name": "c1"
                                        }
                                      }
                                    },
                                    "right": {
                                      "type": "Literal",
                                      "value": ",",
                                      "raw": "\",\""
                                    }
                                  },
                                  "right": {
                                    "type": "BinaryExpression",
                                    "operator": "*",
                                    "left": {
                                      "type": "Identifier",
                                      "name": "r1"
                                    },
                                    "right": {
                                      "type": "Identifier",
                                      "name": "s1"
                                    }
                                  }
                                },
                                "right": {
                                  "type": "Literal",
                                  "value": "L0,0",
                                  "raw": "\"L0,0\""
                                }
                              },
                              "right": {
                                "type": "Literal",
                                "value": "Z",
                                "raw": "\"Z\""
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
                        "name": "arc"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "innerRadius"
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
                                "name": "innerRadius"
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
                                "name": "innerRadius"
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
                              "name": "arc"
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
                        "name": "arc"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "outerRadius"
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
                                "name": "outerRadius"
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
                                "name": "outerRadius"
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
                              "name": "arc"
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
                        "name": "arc"
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
                              "name": "arc"
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
                        "name": "arc"
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
                              "name": "arc"
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
                        "name": "arc"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "centroid"
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
                                  "name": "r"
                                },
                                "init": {
                                  "type": "BinaryExpression",
                                  "operator": "/",
                                  "left": {
                                    "type": "BinaryExpression",
                                    "operator": "+",
                                    "left": {
                                      "type": "CallExpression",
                                      "callee": {
                                        "type": "MemberExpression",
                                        "computed": false,
                                        "object": {
                                          "type": "Identifier",
                                          "name": "innerRadius"
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
                                    },
                                    "right": {
                                      "type": "CallExpression",
                                      "callee": {
                                        "type": "MemberExpression",
                                        "computed": false,
                                        "object": {
                                          "type": "Identifier",
                                          "name": "outerRadius"
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
                                  },
                                  "right": {
                                    "type": "Literal",
                                    "value": 2,
                                    "raw": "2"
                                  }
                                }
                              },
                              {
                                "type": "VariableDeclarator",
                                "id": {
                                  "type": "Identifier",
                                  "name": "a"
                                },
                                "init": {
                                  "type": "BinaryExpression",
                                  "operator": "+",
                                  "left": {
                                    "type": "BinaryExpression",
                                    "operator": "/",
                                    "left": {
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
                                      },
                                      "right": {
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
                                    },
                                    "right": {
                                      "type": "Literal",
                                      "value": 2,
                                      "raw": "2"
                                    }
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
                              "type": "ArrayExpression",
                              "elements": [
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
                                        "name": "cos"
                                      }
                                    },
                                    "arguments": [
                                      {
                                        "type": "Identifier",
                                        "name": "a"
                                      }
                                    ]
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "name": "r"
                                  }
                                },
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
                                        "name": "sin"
                                      }
                                    },
                                    "arguments": [
                                      {
                                        "type": "Identifier",
                                        "name": "a"
                                      }
                                    ]
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "name": "r"
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
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Identifier",
                    "name": "arc"
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
        "type": "VariableDeclaration",
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "name": "d3_svg_arcOffset"
            },
            "init": {
              "type": "UnaryExpression",
              "operator": "-",
              "argument": {
                "type": "Identifier",
                "name": "halfπ"
              },
              "prefix": true
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
              "name": "d3_svg_arcMax"
            },
            "init": {
              "type": "BinaryExpression",
              "operator": "-",
              "left": {
                "type": "Identifier",
                "name": "τ"
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
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "name": "d3_svg_arcInnerRadius"
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
                  "name": "innerRadius"
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
          "name": "d3_svg_arcOuterRadius"
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
                  "name": "outerRadius"
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
          "name": "d3_svg_arcStartAngle"
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
                  "name": "startAngle"
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
          "name": "d3_svg_arcEndAngle"
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
                  "name": "endAngle"
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
  }
}