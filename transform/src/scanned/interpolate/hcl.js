{
  "filepath": "/interpolate/hcl.js",
  "shared": [
    {
      "path": "/color/_color.js",
      "properties": [
        "d3_lab",
        "d3_lab_K",
        "d3_lab_X",
        "d3_lab_Y",
        "d3_lab_Z",
        "d3_hcl",
        "d3_hsl",
        "d3_rgb",
        "d3_lab_hcl",
        "d3_rgb_lab",
        "d3_hsl_rgb",
        "d3_hcl_lab"
      ],
      "name": "COLOR"
    }
  ],
  "dependencies": [
    "d3.hcl"
  ],
  "helpers": [
    "d3_interpolateHcl"
  ],
  "exports": [
    "d3.interpolateHcl"
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
              "name": "interpolateHcl"
            }
          },
          "right": {
            "type": "Identifier",
            "name": "d3_interpolateHcl"
          }
        }
      },
      {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "name": "d3_interpolateHcl"
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
              "type": "ExpressionStatement",
              "expression": {
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
                      "name": "d3"
                    },
                    "property": {
                      "type": "Identifier",
                      "name": "hcl"
                    }
                  },
                  "arguments": [
                    {
                      "type": "Identifier",
                      "name": "a"
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
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "name": "d3"
                    },
                    "property": {
                      "type": "Identifier",
                      "name": "hcl"
                    }
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
                    "name": "ah"
                  },
                  "init": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "name": "a"
                    },
                    "property": {
                      "type": "Identifier",
                      "name": "h"
                    }
                  }
                },
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "name": "ac"
                  },
                  "init": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "name": "a"
                    },
                    "property": {
                      "type": "Identifier",
                      "name": "c"
                    }
                  }
                },
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "name": "al"
                  },
                  "init": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "name": "a"
                    },
                    "property": {
                      "type": "Identifier",
                      "name": "l"
                    }
                  }
                },
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "name": "bh"
                  },
                  "init": {
                    "type": "BinaryExpression",
                    "operator": "-",
                    "left": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "name": "b"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "h"
                      }
                    },
                    "right": {
                      "type": "Identifier",
                      "name": "ah"
                    }
                  }
                },
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "name": "bc"
                  },
                  "init": {
                    "type": "BinaryExpression",
                    "operator": "-",
                    "left": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "name": "b"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "c"
                      }
                    },
                    "right": {
                      "type": "Identifier",
                      "name": "ac"
                    }
                  }
                },
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "name": "bl"
                  },
                  "init": {
                    "type": "BinaryExpression",
                    "operator": "-",
                    "left": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "name": "b"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "l"
                      }
                    },
                    "right": {
                      "type": "Identifier",
                      "name": "al"
                    }
                  }
                }
              ],
              "kind": "var"
            },
            {
              "type": "IfStatement",
              "test": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "name": "isNaN"
                },
                "arguments": [
                  {
                    "type": "Identifier",
                    "name": "bc"
                  }
                ]
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
                        "name": "bc"
                      },
                      "right": {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0"
                      }
                    },
                    {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "name": "ac"
                      },
                      "right": {
                        "type": "ConditionalExpression",
                        "test": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "Identifier",
                            "name": "isNaN"
                          },
                          "arguments": [
                            {
                              "type": "Identifier",
                              "name": "ac"
                            }
                          ]
                        },
                        "consequent": {
                          "type": "MemberExpression",
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "name": "b"
                          },
                          "property": {
                            "type": "Identifier",
                            "name": "c"
                          }
                        },
                        "alternate": {
                          "type": "Identifier",
                          "name": "ac"
                        }
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
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "name": "isNaN"
                },
                "arguments": [
                  {
                    "type": "Identifier",
                    "name": "bh"
                  }
                ]
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
                        "name": "bh"
                      },
                      "right": {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0"
                      }
                    },
                    {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "name": "ah"
                      },
                      "right": {
                        "type": "ConditionalExpression",
                        "test": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "Identifier",
                            "name": "isNaN"
                          },
                          "arguments": [
                            {
                              "type": "Identifier",
                              "name": "ah"
                            }
                          ]
                        },
                        "consequent": {
                          "type": "MemberExpression",
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "name": "b"
                          },
                          "property": {
                            "type": "Identifier",
                            "name": "h"
                          }
                        },
                        "alternate": {
                          "type": "Identifier",
                          "name": "ah"
                        }
                      }
                    }
                  ]
                }
              },
              "alternate": {
                "type": "IfStatement",
                "test": {
                  "type": "BinaryExpression",
                  "operator": ">",
                  "left": {
                    "type": "Identifier",
                    "name": "bh"
                  },
                  "right": {
                    "type": "Literal",
                    "value": 180,
                    "raw": "180"
                  }
                },
                "consequent": {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "-=",
                    "left": {
                      "type": "Identifier",
                      "name": "bh"
                    },
                    "right": {
                      "type": "Literal",
                      "value": 360,
                      "raw": "360"
                    }
                  }
                },
                "alternate": {
                  "type": "IfStatement",
                  "test": {
                    "type": "BinaryExpression",
                    "operator": "<",
                    "left": {
                      "type": "Identifier",
                      "name": "bh"
                    },
                    "right": {
                      "type": "UnaryExpression",
                      "operator": "-",
                      "argument": {
                        "type": "Literal",
                        "value": 180,
                        "raw": "180"
                      },
                      "prefix": true
                    }
                  },
                  "consequent": {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "+=",
                      "left": {
                        "type": "Identifier",
                        "name": "bh"
                      },
                      "right": {
                        "type": "Literal",
                        "value": 360,
                        "raw": "360"
                      }
                    }
                  },
                  "alternate": null
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
                        "type": "BinaryExpression",
                        "operator": "+",
                        "left": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "name": "COLOR"
                            },
                            "property": {
                              "type": "Identifier",
                              "name": "d3_hcl_lab"
                            },
                            "_isReplacement": true
                          },
                          "arguments": [
                            {
                              "type": "BinaryExpression",
                              "operator": "+",
                              "left": {
                                "type": "Identifier",
                                "name": "ah"
                              },
                              "right": {
                                "type": "BinaryExpression",
                                "operator": "*",
                                "left": {
                                  "type": "Identifier",
                                  "name": "bh"
                                },
                                "right": {
                                  "type": "Identifier",
                                  "name": "t"
                                }
                              }
                            },
                            {
                              "type": "BinaryExpression",
                              "operator": "+",
                              "left": {
                                "type": "Identifier",
                                "name": "ac"
                              },
                              "right": {
                                "type": "BinaryExpression",
                                "operator": "*",
                                "left": {
                                  "type": "Identifier",
                                  "name": "bc"
                                },
                                "right": {
                                  "type": "Identifier",
                                  "name": "t"
                                }
                              }
                            },
                            {
                              "type": "BinaryExpression",
                              "operator": "+",
                              "left": {
                                "type": "Identifier",
                                "name": "al"
                              },
                              "right": {
                                "type": "BinaryExpression",
                                "operator": "*",
                                "left": {
                                  "type": "Identifier",
                                  "name": "bl"
                                },
                                "right": {
                                  "type": "Identifier",
                                  "name": "t"
                                }
                              }
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