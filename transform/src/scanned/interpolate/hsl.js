{
  "filepath": "/interpolate/hsl.js",
  "shared": [],
  "dependencies": [
    "d3.hsl",
    "d3_hsl_rgb"
  ],
  "helpers": [
    "d3_interpolateHsl"
  ],
  "exports": [
    "d3.interpolateHsl"
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
              "name": "interpolateHsl"
            }
          },
          "right": {
            "type": "Identifier",
            "name": "d3_interpolateHsl"
          }
        }
      },
      {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "name": "d3_interpolateHsl"
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
                      "name": "hsl"
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
                      "name": "hsl"
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
                    "name": "as"
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
                      "name": "s"
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
                    "name": "bs"
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
                        "name": "s"
                      }
                    },
                    "right": {
                      "type": "Identifier",
                      "name": "as"
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
                    "name": "bs"
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
                        "name": "bs"
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
                        "name": "as"
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
                              "name": "as"
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
                            "name": "s"
                          }
                        },
                        "alternate": {
                          "type": "Identifier",
                          "name": "as"
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
                            "type": "Identifier",
                            "name": "d3_hsl_rgb"
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
                                "name": "as"
                              },
                              "right": {
                                "type": "BinaryExpression",
                                "operator": "*",
                                "left": {
                                  "type": "Identifier",
                                  "name": "bs"
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
  },
  "src": "d3.interpolateHsl = d3_interpolateHsl;\nfunction d3_interpolateHsl(a, b) {\n    a = d3.hsl(a);\n    b = d3.hsl(b);\n    var ah = a.h, as = a.s, al = a.l, bh = b.h - ah, bs = b.s - as, bl = b.l - al;\n    if (isNaN(bs))\n        bs = 0, as = isNaN(as) ? b.s : as;\n    if (isNaN(bh))\n        bh = 0, ah = isNaN(ah) ? b.h : ah;\n    else if (bh > 180)\n        bh -= 360;\n    else if (bh < -180)\n        bh += 360;\n    return function (t) {\n        return d3_hsl_rgb(ah + bh * t, as + bs * t, al + bl * t) + '';\n    };\n}"
}