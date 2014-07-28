{
  "filepath": "/color/hcl.js",
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
    "d3.rgb",
    "d3_color",
    "d3_radians"
  ],
  "helpers": [
    "d3_hclPrototype"
  ],
  "exports": [
    "d3.hcl"
  ],
  "ast": {
    "type": "Program",
    "body": [
      {
        "type": "ExpressionStatement",
        "expression": {
          "type": "AssignmentExpression",
          "left": {
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
          "operator": "=",
          "right": {
            "type": "FunctionExpression",
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "name": "h"
              },
              {
                "type": "Identifier",
                "name": "c"
              },
              {
                "type": "Identifier",
                "name": "l"
              }
            ],
            "defaults": [],
            "body": {
              "type": "BlockStatement",
              "body": [
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
                        "name": "h"
                      }
                    ]
                  },
                  "consequent": {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "name": "h"
                      },
                      "right": {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0"
                      }
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
                        "name": "c"
                      }
                    ]
                  },
                  "consequent": {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "name": "c"
                      },
                      "right": {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0"
                      }
                    }
                  },
                  "alternate": null
                },
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "NewExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "name": "COLOR"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "d3_lab"
                      },
                      "_isReplacement": true
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "name": "l"
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
                              "name": "cos"
                            }
                          },
                          "arguments": [
                            {
                              "type": "AssignmentExpression",
                              "operator": "*=",
                              "left": {
                                "type": "Identifier",
                                "name": "h"
                              },
                              "right": {
                                "type": "Identifier",
                                "name": "d3_radians"
                              }
                            }
                          ]
                        },
                        "right": {
                          "type": "Identifier",
                          "name": "c"
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
                              "name": "h"
                            }
                          ]
                        },
                        "right": {
                          "type": "Identifier",
                          "name": "c"
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
        },
        "_shouldHoist": true
      },
      {
        "type": "ExpressionStatement",
        "expression": {
          "type": "AssignmentExpression",
          "left": {
            "type": "MemberExpression",
            "computed": false,
            "object": {
              "type": "Identifier",
              "name": "COLOR"
            },
            "property": {
              "type": "Identifier",
              "name": "d3_hcl"
            },
            "_isReplacement": true
          },
          "operator": "=",
          "right": {
            "type": "FunctionExpression",
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "name": "h"
              },
              {
                "type": "Identifier",
                "name": "c"
              },
              {
                "type": "Identifier",
                "name": "l"
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
                      "operator": "instanceof",
                      "left": {
                        "type": "ThisExpression"
                      },
                      "right": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "name": "COLOR"
                        },
                        "property": {
                          "type": "Identifier",
                          "name": "d3_hcl"
                        },
                        "_isReplacement": true
                      }
                    },
                    "consequent": {
                      "type": "UnaryExpression",
                      "operator": "void",
                      "argument": {
                        "type": "SequenceExpression",
                        "expressions": [
                          {
                            "type": "AssignmentExpression",
                            "operator": "=",
                            "left": {
                              "type": "MemberExpression",
                              "computed": false,
                              "object": {
                                "type": "ThisExpression"
                              },
                              "property": {
                                "type": "Identifier",
                                "name": "h"
                              }
                            },
                            "right": {
                              "type": "UnaryExpression",
                              "operator": "+",
                              "argument": {
                                "type": "Identifier",
                                "name": "h"
                              },
                              "prefix": true
                            }
                          },
                          {
                            "type": "AssignmentExpression",
                            "operator": "=",
                            "left": {
                              "type": "MemberExpression",
                              "computed": false,
                              "object": {
                                "type": "ThisExpression"
                              },
                              "property": {
                                "type": "Identifier",
                                "name": "c"
                              }
                            },
                            "right": {
                              "type": "UnaryExpression",
                              "operator": "+",
                              "argument": {
                                "type": "Identifier",
                                "name": "c"
                              },
                              "prefix": true
                            }
                          },
                          {
                            "type": "AssignmentExpression",
                            "operator": "=",
                            "left": {
                              "type": "MemberExpression",
                              "computed": false,
                              "object": {
                                "type": "ThisExpression"
                              },
                              "property": {
                                "type": "Identifier",
                                "name": "l"
                              }
                            },
                            "right": {
                              "type": "UnaryExpression",
                              "operator": "+",
                              "argument": {
                                "type": "Identifier",
                                "name": "l"
                              },
                              "prefix": true
                            }
                          }
                        ]
                      },
                      "prefix": true
                    },
                    "alternate": {
                      "type": "ConditionalExpression",
                      "test": {
                        "type": "BinaryExpression",
                        "operator": "<",
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
                          "value": 2,
                          "raw": "2"
                        }
                      },
                      "consequent": {
                        "type": "ConditionalExpression",
                        "test": {
                          "type": "BinaryExpression",
                          "operator": "instanceof",
                          "left": {
                            "type": "Identifier",
                            "name": "h"
                          },
                          "right": {
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "name": "COLOR"
                            },
                            "property": {
                              "type": "Identifier",
                              "name": "d3_hcl"
                            },
                            "_isReplacement": true
                          }
                        },
                        "consequent": {
                          "type": "NewExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "name": "COLOR"
                            },
                            "property": {
                              "type": "Identifier",
                              "name": "d3_hcl"
                            },
                            "_isReplacement": true
                          },
                          "arguments": [
                            {
                              "type": "MemberExpression",
                              "computed": false,
                              "object": {
                                "type": "Identifier",
                                "name": "h"
                              },
                              "property": {
                                "type": "Identifier",
                                "name": "h"
                              }
                            },
                            {
                              "type": "MemberExpression",
                              "computed": false,
                              "object": {
                                "type": "Identifier",
                                "name": "h"
                              },
                              "property": {
                                "type": "Identifier",
                                "name": "c"
                              }
                            },
                            {
                              "type": "MemberExpression",
                              "computed": false,
                              "object": {
                                "type": "Identifier",
                                "name": "h"
                              },
                              "property": {
                                "type": "Identifier",
                                "name": "l"
                              }
                            }
                          ]
                        },
                        "alternate": {
                          "type": "ConditionalExpression",
                          "test": {
                            "type": "BinaryExpression",
                            "operator": "instanceof",
                            "left": {
                              "type": "Identifier",
                              "name": "h"
                            },
                            "right": {
                              "type": "MemberExpression",
                              "computed": false,
                              "object": {
                                "type": "Identifier",
                                "name": "COLOR"
                              },
                              "property": {
                                "type": "Identifier",
                                "name": "d3_lab"
                              },
                              "_isReplacement": true
                            }
                          },
                          "consequent": {
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
                                "name": "d3_lab_hcl"
                              },
                              "_isReplacement": true
                            },
                            "arguments": [
                              {
                                "type": "MemberExpression",
                                "computed": false,
                                "object": {
                                  "type": "Identifier",
                                  "name": "h"
                                },
                                "property": {
                                  "type": "Identifier",
                                  "name": "l"
                                }
                              },
                              {
                                "type": "MemberExpression",
                                "computed": false,
                                "object": {
                                  "type": "Identifier",
                                  "name": "h"
                                },
                                "property": {
                                  "type": "Identifier",
                                  "name": "a"
                                }
                              },
                              {
                                "type": "MemberExpression",
                                "computed": false,
                                "object": {
                                  "type": "Identifier",
                                  "name": "h"
                                },
                                "property": {
                                  "type": "Identifier",
                                  "name": "b"
                                }
                              }
                            ]
                          },
                          "alternate": {
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
                                "name": "d3_lab_hcl"
                              },
                              "_isReplacement": true
                            },
                            "arguments": [
                              {
                                "type": "MemberExpression",
                                "computed": false,
                                "object": {
                                  "type": "AssignmentExpression",
                                  "operator": "=",
                                  "left": {
                                    "type": "Identifier",
                                    "name": "h"
                                  },
                                  "right": {
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
                                        "name": "d3_rgb_lab"
                                      },
                                      "_isReplacement": true
                                    },
                                    "arguments": [
                                      {
                                        "type": "MemberExpression",
                                        "computed": false,
                                        "object": {
                                          "type": "AssignmentExpression",
                                          "operator": "=",
                                          "left": {
                                            "type": "Identifier",
                                            "name": "h"
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
                                                "name": "rgb"
                                              }
                                            },
                                            "arguments": [
                                              {
                                                "type": "Identifier",
                                                "name": "h"
                                              }
                                            ]
                                          }
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
                                          "name": "h"
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "name": "g"
                                        }
                                      },
                                      {
                                        "type": "MemberExpression",
                                        "computed": false,
                                        "object": {
                                          "type": "Identifier",
                                          "name": "h"
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "name": "b"
                                        }
                                      }
                                    ]
                                  }
                                },
                                "property": {
                                  "type": "Identifier",
                                  "name": "l"
                                }
                              },
                              {
                                "type": "MemberExpression",
                                "computed": false,
                                "object": {
                                  "type": "Identifier",
                                  "name": "h"
                                },
                                "property": {
                                  "type": "Identifier",
                                  "name": "a"
                                }
                              },
                              {
                                "type": "MemberExpression",
                                "computed": false,
                                "object": {
                                  "type": "Identifier",
                                  "name": "h"
                                },
                                "property": {
                                  "type": "Identifier",
                                  "name": "b"
                                }
                              }
                            ]
                          }
                        }
                      },
                      "alternate": {
                        "type": "NewExpression",
                        "callee": {
                          "type": "MemberExpression",
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "name": "COLOR"
                          },
                          "property": {
                            "type": "Identifier",
                            "name": "d3_hcl"
                          },
                          "_isReplacement": true
                        },
                        "arguments": [
                          {
                            "type": "Identifier",
                            "name": "h"
                          },
                          {
                            "type": "Identifier",
                            "name": "c"
                          },
                          {
                            "type": "Identifier",
                            "name": "l"
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
          }
        },
        "_shouldHoist": true
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
              "name": "d3"
            },
            "property": {
              "type": "Identifier",
              "name": "hcl"
            }
          },
          "right": {
            "type": "MemberExpression",
            "computed": false,
            "object": {
              "type": "Identifier",
              "name": "COLOR"
            },
            "property": {
              "type": "Identifier",
              "name": "d3_hcl"
            },
            "_isReplacement": true
          }
        }
      },
      {
        "type": "ExpressionStatement",
        "expression": {
          "type": "AssignmentExpression",
          "left": {
            "type": "MemberExpression",
            "computed": false,
            "object": {
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "Identifier",
                "name": "COLOR"
              },
              "property": {
                "type": "Identifier",
                "name": "d3_hcl"
              },
              "_isReplacement": true
            },
            "property": {
              "type": "Identifier",
              "name": "prototype"
            }
          },
          "operator": "=",
          "right": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "name": "d3_color"
            },
            "arguments": []
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
              "name": "d3_hclPrototype"
            },
            "init": {
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "name": "COLOR"
                },
                "property": {
                  "type": "Identifier",
                  "name": "d3_hcl"
                },
                "_isReplacement": true
              },
              "property": {
                "type": "Identifier",
                "name": "prototype"
              }
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
              "name": "d3_hclPrototype"
            },
            "property": {
              "type": "Identifier",
              "name": "brighter"
            }
          },
          "right": {
            "type": "FunctionExpression",
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "name": "k"
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
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "name": "COLOR"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "d3_hcl"
                      },
                      "_isReplacement": true
                    },
                    "arguments": [
                      {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "ThisExpression"
                        },
                        "property": {
                          "type": "Identifier",
                          "name": "h"
                        }
                      },
                      {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "ThisExpression"
                        },
                        "property": {
                          "type": "Identifier",
                          "name": "c"
                        }
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
                            "name": "min"
                          }
                        },
                        "arguments": [
                          {
                            "type": "Literal",
                            "value": 100,
                            "raw": "100"
                          },
                          {
                            "type": "BinaryExpression",
                            "operator": "+",
                            "left": {
                              "type": "MemberExpression",
                              "computed": false,
                              "object": {
                                "type": "ThisExpression"
                              },
                              "property": {
                                "type": "Identifier",
                                "name": "l"
                              }
                            },
                            "right": {
                              "type": "BinaryExpression",
                              "operator": "*",
                              "left": {
                                "type": "MemberExpression",
                                "computed": false,
                                "object": {
                                  "type": "Identifier",
                                  "name": "COLOR"
                                },
                                "property": {
                                  "type": "Identifier",
                                  "name": "d3_lab_K"
                                },
                                "_isReplacement": true
                              },
                              "right": {
                                "type": "ConditionalExpression",
                                "test": {
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
                                "consequent": {
                                  "type": "Identifier",
                                  "name": "k"
                                },
                                "alternate": {
                                  "type": "Literal",
                                  "value": 1,
                                  "raw": "1"
                                }
                              }
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
              "name": "d3_hclPrototype"
            },
            "property": {
              "type": "Identifier",
              "name": "darker"
            }
          },
          "right": {
            "type": "FunctionExpression",
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "name": "k"
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
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "name": "COLOR"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "d3_hcl"
                      },
                      "_isReplacement": true
                    },
                    "arguments": [
                      {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "ThisExpression"
                        },
                        "property": {
                          "type": "Identifier",
                          "name": "h"
                        }
                      },
                      {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "ThisExpression"
                        },
                        "property": {
                          "type": "Identifier",
                          "name": "c"
                        }
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
                            "name": "max"
                          }
                        },
                        "arguments": [
                          {
                            "type": "Literal",
                            "value": 0,
                            "raw": "0"
                          },
                          {
                            "type": "BinaryExpression",
                            "operator": "-",
                            "left": {
                              "type": "MemberExpression",
                              "computed": false,
                              "object": {
                                "type": "ThisExpression"
                              },
                              "property": {
                                "type": "Identifier",
                                "name": "l"
                              }
                            },
                            "right": {
                              "type": "BinaryExpression",
                              "operator": "*",
                              "left": {
                                "type": "MemberExpression",
                                "computed": false,
                                "object": {
                                  "type": "Identifier",
                                  "name": "COLOR"
                                },
                                "property": {
                                  "type": "Identifier",
                                  "name": "d3_lab_K"
                                },
                                "_isReplacement": true
                              },
                              "right": {
                                "type": "ConditionalExpression",
                                "test": {
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
                                "consequent": {
                                  "type": "Identifier",
                                  "name": "k"
                                },
                                "alternate": {
                                  "type": "Literal",
                                  "value": 1,
                                  "raw": "1"
                                }
                              }
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
              "name": "d3_hclPrototype"
            },
            "property": {
              "type": "Identifier",
              "name": "rgb"
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
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
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
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                              "type": "ThisExpression"
                            },
                            "property": {
                              "type": "Identifier",
                              "name": "h"
                            }
                          },
                          {
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                              "type": "ThisExpression"
                            },
                            "property": {
                              "type": "Identifier",
                              "name": "c"
                            }
                          },
                          {
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                              "type": "ThisExpression"
                            },
                            "property": {
                              "type": "Identifier",
                              "name": "l"
                            }
                          }
                        ]
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "rgb"
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
        }
      }
    ]
  }
}