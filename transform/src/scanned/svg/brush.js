{
  "filepath": "/svg/brush.js",
  "shared": [],
  "dependencies": [
    "d3_eventDispatch",
    "d3.select",
    "d3_identity",
    "d3.transition",
    "d3_scaleRange",
    "d3_transitionInheritId",
    "d3_interpolateArray",
    "d3.event.target",
    "d3_event_dragSuppress",
    "d3.mouse",
    "d3_window",
    "d3.event.changedTouches",
    "d3.event.altKey",
    "d3.event.keyCode",
    "d3_eventPreventDefault",
    "d3.rebind"
  ],
  "helpers": [
    "d3_svg_brushCursor",
    "d3_svg_brushResizes"
  ],
  "exports": [
    "d3.svg.brush"
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
              "name": "brush"
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
                        "name": "event"
                      },
                      "init": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "Identifier",
                          "name": "d3_eventDispatch"
                        },
                        "arguments": [
                          {
                            "type": "Identifier",
                            "name": "brush"
                          },
                          {
                            "type": "Literal",
                            "value": "brushstart",
                            "raw": "\"brushstart\""
                          },
                          {
                            "type": "Literal",
                            "value": "brush",
                            "raw": "\"brush\""
                          },
                          {
                            "type": "Literal",
                            "value": "brushend",
                            "raw": "\"brushend\""
                          }
                        ]
                      }
                    },
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "name": "x"
                      },
                      "init": {
                        "type": "Literal",
                        "value": null,
                        "raw": "null"
                      }
                    },
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "name": "y"
                      },
                      "init": {
                        "type": "Literal",
                        "value": null,
                        "raw": "null"
                      }
                    },
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "name": "xExtent"
                      },
                      "init": {
                        "type": "ArrayExpression",
                        "elements": [
                          {
                            "type": "Literal",
                            "value": 0,
                            "raw": "0"
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
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "name": "yExtent"
                      },
                      "init": {
                        "type": "ArrayExpression",
                        "elements": [
                          {
                            "type": "Literal",
                            "value": 0,
                            "raw": "0"
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
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "name": "xExtentDomain"
                      },
                      "init": null
                    },
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "name": "yExtentDomain"
                      },
                      "init": null
                    },
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "name": "xClamp"
                      },
                      "init": {
                        "type": "Literal",
                        "value": true,
                        "raw": "true"
                      }
                    },
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "name": "yClamp"
                      },
                      "init": {
                        "type": "Literal",
                        "value": true,
                        "raw": "true"
                      }
                    },
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "name": "resizes"
                      },
                      "init": {
                        "type": "MemberExpression",
                        "computed": true,
                        "object": {
                          "type": "Identifier",
                          "name": "d3_svg_brushResizes"
                        },
                        "property": {
                          "type": "Literal",
                          "value": 0,
                          "raw": "0"
                        }
                      }
                    }
                  ],
                  "kind": "var"
                },
                {
                  "type": "FunctionDeclaration",
                  "id": {
                    "type": "Identifier",
                    "name": "brush"
                  },
                  "params": [
                    {
                      "type": "Identifier",
                      "name": "g"
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
                              "name": "g"
                            },
                            "property": {
                              "type": "Identifier",
                              "name": "each"
                            }
                          },
                          "arguments": [
                            {
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
                                          "name": "g"
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
                                                              "name": "select"
                                                            }
                                                          },
                                                          "arguments": [
                                                            {
                                                              "type": "ThisExpression"
                                                            }
                                                          ]
                                                        },
                                                        "property": {
                                                          "type": "Identifier",
                                                          "name": "style"
                                                        }
                                                      },
                                                      "arguments": [
                                                        {
                                                          "type": "Literal",
                                                          "value": "pointer-events",
                                                          "raw": "\"pointer-events\""
                                                        },
                                                        {
                                                          "type": "Literal",
                                                          "value": "all",
                                                          "raw": "\"all\""
                                                        }
                                                      ]
                                                    },
                                                    "property": {
                                                      "type": "Identifier",
                                                      "name": "style"
                                                    }
                                                  },
                                                  "arguments": [
                                                    {
                                                      "type": "Literal",
                                                      "value": "-webkit-tap-highlight-color",
                                                      "raw": "\"-webkit-tap-highlight-color\""
                                                    },
                                                    {
                                                      "type": "Literal",
                                                      "value": "rgba(0,0,0,0)",
                                                      "raw": "\"rgba(0,0,0,0)\""
                                                    }
                                                  ]
                                                },
                                                "property": {
                                                  "type": "Identifier",
                                                  "name": "on"
                                                }
                                              },
                                              "arguments": [
                                                {
                                                  "type": "Literal",
                                                  "value": "mousedown.brush",
                                                  "raw": "\"mousedown.brush\""
                                                },
                                                {
                                                  "type": "Identifier",
                                                  "name": "brushstart"
                                                }
                                              ]
                                            },
                                            "property": {
                                              "type": "Identifier",
                                              "name": "on"
                                            }
                                          },
                                          "arguments": [
                                            {
                                              "type": "Literal",
                                              "value": "touchstart.brush",
                                              "raw": "\"touchstart.brush\""
                                            },
                                            {
                                              "type": "Identifier",
                                              "name": "brushstart"
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
                                          "name": "background"
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
                                                  "type": "Identifier",
                                                  "name": "g"
                                                },
                                                "property": {
                                                  "type": "Identifier",
                                                  "name": "selectAll"
                                                }
                                              },
                                              "arguments": [
                                                {
                                                  "type": "Literal",
                                                  "value": ".background",
                                                  "raw": "\".background\""
                                                }
                                              ]
                                            },
                                            "property": {
                                              "type": "Identifier",
                                              "name": "data"
                                            }
                                          },
                                          "arguments": [
                                            {
                                              "type": "ArrayExpression",
                                              "elements": [
                                                {
                                                  "type": "Literal",
                                                  "value": 0,
                                                  "raw": "0"
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
                                    "type": "ExpressionStatement",
                                    "expression": {
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
                                                      "type": "CallExpression",
                                                      "callee": {
                                                        "type": "MemberExpression",
                                                        "computed": false,
                                                        "object": {
                                                          "type": "Identifier",
                                                          "name": "background"
                                                        },
                                                        "property": {
                                                          "type": "Identifier",
                                                          "name": "enter"
                                                        }
                                                      },
                                                      "arguments": []
                                                    },
                                                    "property": {
                                                      "type": "Identifier",
                                                      "name": "append"
                                                    }
                                                  },
                                                  "arguments": [
                                                    {
                                                      "type": "Literal",
                                                      "value": "rect",
                                                      "raw": "\"rect\""
                                                    }
                                                  ]
                                                },
                                                "property": {
                                                  "type": "Identifier",
                                                  "name": "attr"
                                                }
                                              },
                                              "arguments": [
                                                {
                                                  "type": "Literal",
                                                  "value": "class",
                                                  "raw": "\"class\""
                                                },
                                                {
                                                  "type": "Literal",
                                                  "value": "background",
                                                  "raw": "\"background\""
                                                }
                                              ]
                                            },
                                            "property": {
                                              "type": "Identifier",
                                              "name": "style"
                                            }
                                          },
                                          "arguments": [
                                            {
                                              "type": "Literal",
                                              "value": "visibility",
                                              "raw": "\"visibility\""
                                            },
                                            {
                                              "type": "Literal",
                                              "value": "hidden",
                                              "raw": "\"hidden\""
                                            }
                                          ]
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "name": "style"
                                        }
                                      },
                                      "arguments": [
                                        {
                                          "type": "Literal",
                                          "value": "cursor",
                                          "raw": "\"cursor\""
                                        },
                                        {
                                          "type": "Literal",
                                          "value": "crosshair",
                                          "raw": "\"crosshair\""
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
                                                          "type": "CallExpression",
                                                          "callee": {
                                                            "type": "MemberExpression",
                                                            "computed": false,
                                                            "object": {
                                                              "type": "Identifier",
                                                              "name": "g"
                                                            },
                                                            "property": {
                                                              "type": "Identifier",
                                                              "name": "selectAll"
                                                            }
                                                          },
                                                          "arguments": [
                                                            {
                                                              "type": "Literal",
                                                              "value": ".extent",
                                                              "raw": "\".extent\""
                                                            }
                                                          ]
                                                        },
                                                        "property": {
                                                          "type": "Identifier",
                                                          "name": "data"
                                                        }
                                                      },
                                                      "arguments": [
                                                        {
                                                          "type": "ArrayExpression",
                                                          "elements": [
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
                                                      "name": "enter"
                                                    }
                                                  },
                                                  "arguments": []
                                                },
                                                "property": {
                                                  "type": "Identifier",
                                                  "name": "append"
                                                }
                                              },
                                              "arguments": [
                                                {
                                                  "type": "Literal",
                                                  "value": "rect",
                                                  "raw": "\"rect\""
                                                }
                                              ]
                                            },
                                            "property": {
                                              "type": "Identifier",
                                              "name": "attr"
                                            }
                                          },
                                          "arguments": [
                                            {
                                              "type": "Literal",
                                              "value": "class",
                                              "raw": "\"class\""
                                            },
                                            {
                                              "type": "Literal",
                                              "value": "extent",
                                              "raw": "\"extent\""
                                            }
                                          ]
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "name": "style"
                                        }
                                      },
                                      "arguments": [
                                        {
                                          "type": "Literal",
                                          "value": "cursor",
                                          "raw": "\"cursor\""
                                        },
                                        {
                                          "type": "Literal",
                                          "value": "move",
                                          "raw": "\"move\""
                                        }
                                      ]
                                    }
                                  },
                                  {
                                    "type": "VariableDeclaration",
                                    "declarations": [
                                      {
                                        "type": "VariableDeclarator",
                                        "id": {
                                          "type": "Identifier",
                                          "name": "resize"
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
                                                  "type": "Identifier",
                                                  "name": "g"
                                                },
                                                "property": {
                                                  "type": "Identifier",
                                                  "name": "selectAll"
                                                }
                                              },
                                              "arguments": [
                                                {
                                                  "type": "Literal",
                                                  "value": ".resize",
                                                  "raw": "\".resize\""
                                                }
                                              ]
                                            },
                                            "property": {
                                              "type": "Identifier",
                                              "name": "data"
                                            }
                                          },
                                          "arguments": [
                                            {
                                              "type": "Identifier",
                                              "name": "resizes"
                                            },
                                            {
                                              "type": "Identifier",
                                              "name": "d3_identity"
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
                                          "type": "CallExpression",
                                          "callee": {
                                            "type": "MemberExpression",
                                            "computed": false,
                                            "object": {
                                              "type": "Identifier",
                                              "name": "resize"
                                            },
                                            "property": {
                                              "type": "Identifier",
                                              "name": "exit"
                                            }
                                          },
                                          "arguments": []
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "name": "remove"
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
                                                                          "type": "CallExpression",
                                                                          "callee": {
                                                                            "type": "MemberExpression",
                                                                            "computed": false,
                                                                            "object": {
                                                                              "type": "Identifier",
                                                                              "name": "resize"
                                                                            },
                                                                            "property": {
                                                                              "type": "Identifier",
                                                                              "name": "enter"
                                                                            }
                                                                          },
                                                                          "arguments": []
                                                                        },
                                                                        "property": {
                                                                          "type": "Identifier",
                                                                          "name": "append"
                                                                        }
                                                                      },
                                                                      "arguments": [
                                                                        {
                                                                          "type": "Literal",
                                                                          "value": "g",
                                                                          "raw": "\"g\""
                                                                        }
                                                                      ]
                                                                    },
                                                                    "property": {
                                                                      "type": "Identifier",
                                                                      "name": "attr"
                                                                    }
                                                                  },
                                                                  "arguments": [
                                                                    {
                                                                      "type": "Literal",
                                                                      "value": "class",
                                                                      "raw": "\"class\""
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
                                                                              "operator": "+",
                                                                              "left": {
                                                                                "type": "Literal",
                                                                                "value": "resize ",
                                                                                "raw": "\"resize \""
                                                                              },
                                                                              "right": {
                                                                                "type": "Identifier",
                                                                                "name": "d"
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
                                                                "property": {
                                                                  "type": "Identifier",
                                                                  "name": "style"
                                                                }
                                                              },
                                                              "arguments": [
                                                                {
                                                                  "type": "Literal",
                                                                  "value": "cursor",
                                                                  "raw": "\"cursor\""
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
                                                                          "type": "MemberExpression",
                                                                          "computed": true,
                                                                          "object": {
                                                                            "type": "Identifier",
                                                                            "name": "d3_svg_brushCursor"
                                                                          },
                                                                          "property": {
                                                                            "type": "Identifier",
                                                                            "name": "d"
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
                                                            "property": {
                                                              "type": "Identifier",
                                                              "name": "append"
                                                            }
                                                          },
                                                          "arguments": [
                                                            {
                                                              "type": "Literal",
                                                              "value": "rect",
                                                              "raw": "\"rect\""
                                                            }
                                                          ]
                                                        },
                                                        "property": {
                                                          "type": "Identifier",
                                                          "name": "attr"
                                                        }
                                                      },
                                                      "arguments": [
                                                        {
                                                          "type": "Literal",
                                                          "value": "x",
                                                          "raw": "\"x\""
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
                                                                  "type": "ConditionalExpression",
                                                                  "test": {
                                                                    "type": "CallExpression",
                                                                    "callee": {
                                                                      "type": "MemberExpression",
                                                                      "computed": false,
                                                                      "object": {
                                                                        "type": "Literal",
                                                                        "value": {},
                                                                        "raw": "/[ew]$/"
                                                                      },
                                                                      "property": {
                                                                        "type": "Identifier",
                                                                        "name": "test"
                                                                      }
                                                                    },
                                                                    "arguments": [
                                                                      {
                                                                        "type": "Identifier",
                                                                        "name": "d"
                                                                      }
                                                                    ]
                                                                  },
                                                                  "consequent": {
                                                                    "type": "UnaryExpression",
                                                                    "operator": "-",
                                                                    "argument": {
                                                                      "type": "Literal",
                                                                      "value": 3,
                                                                      "raw": "3"
                                                                    },
                                                                    "prefix": true
                                                                  },
                                                                  "alternate": {
                                                                    "type": "Literal",
                                                                    "value": null,
                                                                    "raw": "null"
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
                                                    "property": {
                                                      "type": "Identifier",
                                                      "name": "attr"
                                                    }
                                                  },
                                                  "arguments": [
                                                    {
                                                      "type": "Literal",
                                                      "value": "y",
                                                      "raw": "\"y\""
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
                                                              "type": "ConditionalExpression",
                                                              "test": {
                                                                "type": "CallExpression",
                                                                "callee": {
                                                                  "type": "MemberExpression",
                                                                  "computed": false,
                                                                  "object": {
                                                                    "type": "Literal",
                                                                    "value": {},
                                                                    "raw": "/^[ns]/"
                                                                  },
                                                                  "property": {
                                                                    "type": "Identifier",
                                                                    "name": "test"
                                                                  }
                                                                },
                                                                "arguments": [
                                                                  {
                                                                    "type": "Identifier",
                                                                    "name": "d"
                                                                  }
                                                                ]
                                                              },
                                                              "consequent": {
                                                                "type": "UnaryExpression",
                                                                "operator": "-",
                                                                "argument": {
                                                                  "type": "Literal",
                                                                  "value": 3,
                                                                  "raw": "3"
                                                                },
                                                                "prefix": true
                                                              },
                                                              "alternate": {
                                                                "type": "Literal",
                                                                "value": null,
                                                                "raw": "null"
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
                                                "property": {
                                                  "type": "Identifier",
                                                  "name": "attr"
                                                }
                                              },
                                              "arguments": [
                                                {
                                                  "type": "Literal",
                                                  "value": "width",
                                                  "raw": "\"width\""
                                                },
                                                {
                                                  "type": "Literal",
                                                  "value": 6,
                                                  "raw": "6"
                                                }
                                              ]
                                            },
                                            "property": {
                                              "type": "Identifier",
                                              "name": "attr"
                                            }
                                          },
                                          "arguments": [
                                            {
                                              "type": "Literal",
                                              "value": "height",
                                              "raw": "\"height\""
                                            },
                                            {
                                              "type": "Literal",
                                              "value": 6,
                                              "raw": "6"
                                            }
                                          ]
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "name": "style"
                                        }
                                      },
                                      "arguments": [
                                        {
                                          "type": "Literal",
                                          "value": "visibility",
                                          "raw": "\"visibility\""
                                        },
                                        {
                                          "type": "Literal",
                                          "value": "hidden",
                                          "raw": "\"hidden\""
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
                                          "name": "resize"
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "name": "style"
                                        }
                                      },
                                      "arguments": [
                                        {
                                          "type": "Literal",
                                          "value": "display",
                                          "raw": "\"display\""
                                        },
                                        {
                                          "type": "ConditionalExpression",
                                          "test": {
                                            "type": "CallExpression",
                                            "callee": {
                                              "type": "MemberExpression",
                                              "computed": false,
                                              "object": {
                                                "type": "Identifier",
                                                "name": "brush"
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "name": "empty"
                                              }
                                            },
                                            "arguments": []
                                          },
                                          "consequent": {
                                            "type": "Literal",
                                            "value": "none",
                                            "raw": "\"none\""
                                          },
                                          "alternate": {
                                            "type": "Literal",
                                            "value": null,
                                            "raw": "null"
                                          }
                                        }
                                      ]
                                    }
                                  },
                                  {
                                    "type": "VariableDeclaration",
                                    "declarations": [
                                      {
                                        "type": "VariableDeclarator",
                                        "id": {
                                          "type": "Identifier",
                                          "name": "gUpdate"
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
                                              "name": "transition"
                                            }
                                          },
                                          "arguments": [
                                            {
                                              "type": "Identifier",
                                              "name": "g"
                                            }
                                          ]
                                        }
                                      },
                                      {
                                        "type": "VariableDeclarator",
                                        "id": {
                                          "type": "Identifier",
                                          "name": "backgroundUpdate"
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
                                              "name": "transition"
                                            }
                                          },
                                          "arguments": [
                                            {
                                              "type": "Identifier",
                                              "name": "background"
                                            }
                                          ]
                                        }
                                      },
                                      {
                                        "type": "VariableDeclarator",
                                        "id": {
                                          "type": "Identifier",
                                          "name": "range"
                                        },
                                        "init": null
                                      }
                                    ],
                                    "kind": "var"
                                  },
                                  {
                                    "type": "IfStatement",
                                    "test": {
                                      "type": "Identifier",
                                      "name": "x"
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
                                              "name": "range"
                                            },
                                            "right": {
                                              "type": "CallExpression",
                                              "callee": {
                                                "type": "Identifier",
                                                "name": "d3_scaleRange"
                                              },
                                              "arguments": [
                                                {
                                                  "type": "Identifier",
                                                  "name": "x"
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
                                                "type": "CallExpression",
                                                "callee": {
                                                  "type": "MemberExpression",
                                                  "computed": false,
                                                  "object": {
                                                    "type": "Identifier",
                                                    "name": "backgroundUpdate"
                                                  },
                                                  "property": {
                                                    "type": "Identifier",
                                                    "name": "attr"
                                                  }
                                                },
                                                "arguments": [
                                                  {
                                                    "type": "Literal",
                                                    "value": "x",
                                                    "raw": "\"x\""
                                                  },
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
                                              "property": {
                                                "type": "Identifier",
                                                "name": "attr"
                                              }
                                            },
                                            "arguments": [
                                              {
                                                "type": "Literal",
                                                "value": "width",
                                                "raw": "\"width\""
                                              },
                                              {
                                                "type": "BinaryExpression",
                                                "operator": "-",
                                                "left": {
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
                                                },
                                                "right": {
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
                                              }
                                            ]
                                          }
                                        },
                                        {
                                          "type": "ExpressionStatement",
                                          "expression": {
                                            "type": "CallExpression",
                                            "callee": {
                                              "type": "Identifier",
                                              "name": "redrawX"
                                            },
                                            "arguments": [
                                              {
                                                "type": "Identifier",
                                                "name": "gUpdate"
                                              }
                                            ]
                                          }
                                        }
                                      ]
                                    },
                                    "alternate": null
                                  },
                                  {
                                    "type": "IfStatement",
                                    "test": {
                                      "type": "Identifier",
                                      "name": "y"
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
                                              "name": "range"
                                            },
                                            "right": {
                                              "type": "CallExpression",
                                              "callee": {
                                                "type": "Identifier",
                                                "name": "d3_scaleRange"
                                              },
                                              "arguments": [
                                                {
                                                  "type": "Identifier",
                                                  "name": "y"
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
                                                "type": "CallExpression",
                                                "callee": {
                                                  "type": "MemberExpression",
                                                  "computed": false,
                                                  "object": {
                                                    "type": "Identifier",
                                                    "name": "backgroundUpdate"
                                                  },
                                                  "property": {
                                                    "type": "Identifier",
                                                    "name": "attr"
                                                  }
                                                },
                                                "arguments": [
                                                  {
                                                    "type": "Literal",
                                                    "value": "y",
                                                    "raw": "\"y\""
                                                  },
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
                                              "property": {
                                                "type": "Identifier",
                                                "name": "attr"
                                              }
                                            },
                                            "arguments": [
                                              {
                                                "type": "Literal",
                                                "value": "height",
                                                "raw": "\"height\""
                                              },
                                              {
                                                "type": "BinaryExpression",
                                                "operator": "-",
                                                "left": {
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
                                                },
                                                "right": {
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
                                              }
                                            ]
                                          }
                                        },
                                        {
                                          "type": "ExpressionStatement",
                                          "expression": {
                                            "type": "CallExpression",
                                            "callee": {
                                              "type": "Identifier",
                                              "name": "redrawY"
                                            },
                                            "arguments": [
                                              {
                                                "type": "Identifier",
                                                "name": "gUpdate"
                                              }
                                            ]
                                          }
                                        }
                                      ]
                                    },
                                    "alternate": null
                                  },
                                  {
                                    "type": "ExpressionStatement",
                                    "expression": {
                                      "type": "CallExpression",
                                      "callee": {
                                        "type": "Identifier",
                                        "name": "redraw"
                                      },
                                      "arguments": [
                                        {
                                          "type": "Identifier",
                                          "name": "gUpdate"
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
                        "name": "brush"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "event"
                      }
                    },
                    "right": {
                      "type": "FunctionExpression",
                      "id": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "name": "g"
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
                                  "name": "g"
                                },
                                "property": {
                                  "type": "Identifier",
                                  "name": "each"
                                }
                              },
                              "arguments": [
                                {
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
                                              "name": "event_"
                                            },
                                            "init": {
                                              "type": "CallExpression",
                                              "callee": {
                                                "type": "MemberExpression",
                                                "computed": false,
                                                "object": {
                                                  "type": "Identifier",
                                                  "name": "event"
                                                },
                                                "property": {
                                                  "type": "Identifier",
                                                  "name": "of"
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
                                              "name": "extent1"
                                            },
                                            "init": {
                                              "type": "ObjectExpression",
                                              "properties": [
                                                {
                                                  "type": "Property",
                                                  "key": {
                                                    "type": "Identifier",
                                                    "name": "x"
                                                  },
                                                  "value": {
                                                    "type": "Identifier",
                                                    "name": "xExtent"
                                                  },
                                                  "kind": "init"
                                                },
                                                {
                                                  "type": "Property",
                                                  "key": {
                                                    "type": "Identifier",
                                                    "name": "y"
                                                  },
                                                  "value": {
                                                    "type": "Identifier",
                                                    "name": "yExtent"
                                                  },
                                                  "kind": "init"
                                                },
                                                {
                                                  "type": "Property",
                                                  "key": {
                                                    "type": "Identifier",
                                                    "name": "i"
                                                  },
                                                  "value": {
                                                    "type": "Identifier",
                                                    "name": "xExtentDomain"
                                                  },
                                                  "kind": "init"
                                                },
                                                {
                                                  "type": "Property",
                                                  "key": {
                                                    "type": "Identifier",
                                                    "name": "j"
                                                  },
                                                  "value": {
                                                    "type": "Identifier",
                                                    "name": "yExtentDomain"
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
                                              "name": "extent0"
                                            },
                                            "init": {
                                              "type": "LogicalExpression",
                                              "operator": "||",
                                              "left": {
                                                "type": "MemberExpression",
                                                "computed": false,
                                                "object": {
                                                  "type": "ThisExpression"
                                                },
                                                "property": {
                                                  "type": "Identifier",
                                                  "name": "__chart__"
                                                }
                                              },
                                              "right": {
                                                "type": "Identifier",
                                                "name": "extent1"
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
                                            "type": "MemberExpression",
                                            "computed": false,
                                            "object": {
                                              "type": "ThisExpression"
                                            },
                                            "property": {
                                              "type": "Identifier",
                                              "name": "__chart__"
                                            }
                                          },
                                          "right": {
                                            "type": "Identifier",
                                            "name": "extent1"
                                          }
                                        }
                                      },
                                      {
                                        "type": "IfStatement",
                                        "test": {
                                          "type": "Identifier",
                                          "name": "d3_transitionInheritId"
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
                                                                    "type": "Identifier",
                                                                    "name": "d3"
                                                                  },
                                                                  "property": {
                                                                    "type": "Identifier",
                                                                    "name": "select"
                                                                  }
                                                                },
                                                                "arguments": [
                                                                  {
                                                                    "type": "ThisExpression"
                                                                  }
                                                                ]
                                                              },
                                                              "property": {
                                                                "type": "Identifier",
                                                                "name": "transition"
                                                              }
                                                            },
                                                            "arguments": []
                                                          },
                                                          "property": {
                                                            "type": "Identifier",
                                                            "name": "each"
                                                          }
                                                        },
                                                        "arguments": [
                                                          {
                                                            "type": "Literal",
                                                            "value": "start.brush",
                                                            "raw": "\"start.brush\""
                                                          },
                                                          {
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
                                                                    "type": "AssignmentExpression",
                                                                    "operator": "=",
                                                                    "left": {
                                                                      "type": "Identifier",
                                                                      "name": "xExtentDomain"
                                                                    },
                                                                    "right": {
                                                                      "type": "MemberExpression",
                                                                      "computed": false,
                                                                      "object": {
                                                                        "type": "Identifier",
                                                                        "name": "extent0"
                                                                      },
                                                                      "property": {
                                                                        "type": "Identifier",
                                                                        "name": "i"
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
                                                                      "name": "yExtentDomain"
                                                                    },
                                                                    "right": {
                                                                      "type": "MemberExpression",
                                                                      "computed": false,
                                                                      "object": {
                                                                        "type": "Identifier",
                                                                        "name": "extent0"
                                                                      },
                                                                      "property": {
                                                                        "type": "Identifier",
                                                                        "name": "j"
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
                                                                      "name": "xExtent"
                                                                    },
                                                                    "right": {
                                                                      "type": "MemberExpression",
                                                                      "computed": false,
                                                                      "object": {
                                                                        "type": "Identifier",
                                                                        "name": "extent0"
                                                                      },
                                                                      "property": {
                                                                        "type": "Identifier",
                                                                        "name": "x"
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
                                                                      "name": "yExtent"
                                                                    },
                                                                    "right": {
                                                                      "type": "MemberExpression",
                                                                      "computed": false,
                                                                      "object": {
                                                                        "type": "Identifier",
                                                                        "name": "extent0"
                                                                      },
                                                                      "property": {
                                                                        "type": "Identifier",
                                                                        "name": "y"
                                                                      }
                                                                    }
                                                                  }
                                                                },
                                                                {
                                                                  "type": "ExpressionStatement",
                                                                  "expression": {
                                                                    "type": "CallExpression",
                                                                    "callee": {
                                                                      "type": "Identifier",
                                                                      "name": "event_"
                                                                    },
                                                                    "arguments": [
                                                                      {
                                                                        "type": "ObjectExpression",
                                                                        "properties": [
                                                                          {
                                                                            "type": "Property",
                                                                            "key": {
                                                                              "type": "Identifier",
                                                                              "name": "type"
                                                                            },
                                                                            "value": {
                                                                              "type": "Literal",
                                                                              "value": "brushstart",
                                                                              "raw": "\"brushstart\""
                                                                            },
                                                                            "kind": "init"
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
                                                        ]
                                                      },
                                                      "property": {
                                                        "type": "Identifier",
                                                        "name": "tween"
                                                      }
                                                    },
                                                    "arguments": [
                                                      {
                                                        "type": "Literal",
                                                        "value": "brush:brush",
                                                        "raw": "\"brush:brush\""
                                                      },
                                                      {
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
                                                                    "name": "xi"
                                                                  },
                                                                  "init": {
                                                                    "type": "CallExpression",
                                                                    "callee": {
                                                                      "type": "Identifier",
                                                                      "name": "d3_interpolateArray"
                                                                    },
                                                                    "arguments": [
                                                                      {
                                                                        "type": "Identifier",
                                                                        "name": "xExtent"
                                                                      },
                                                                      {
                                                                        "type": "MemberExpression",
                                                                        "computed": false,
                                                                        "object": {
                                                                          "type": "Identifier",
                                                                          "name": "extent1"
                                                                        },
                                                                        "property": {
                                                                          "type": "Identifier",
                                                                          "name": "x"
                                                                        }
                                                                      }
                                                                    ]
                                                                  }
                                                                },
                                                                {
                                                                  "type": "VariableDeclarator",
                                                                  "id": {
                                                                    "type": "Identifier",
                                                                    "name": "yi"
                                                                  },
                                                                  "init": {
                                                                    "type": "CallExpression",
                                                                    "callee": {
                                                                      "type": "Identifier",
                                                                      "name": "d3_interpolateArray"
                                                                    },
                                                                    "arguments": [
                                                                      {
                                                                        "type": "Identifier",
                                                                        "name": "yExtent"
                                                                      },
                                                                      {
                                                                        "type": "MemberExpression",
                                                                        "computed": false,
                                                                        "object": {
                                                                          "type": "Identifier",
                                                                          "name": "extent1"
                                                                        },
                                                                        "property": {
                                                                          "type": "Identifier",
                                                                          "name": "y"
                                                                        }
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
                                                                "type": "AssignmentExpression",
                                                                "operator": "=",
                                                                "left": {
                                                                  "type": "Identifier",
                                                                  "name": "xExtentDomain"
                                                                },
                                                                "right": {
                                                                  "type": "AssignmentExpression",
                                                                  "operator": "=",
                                                                  "left": {
                                                                    "type": "Identifier",
                                                                    "name": "yExtentDomain"
                                                                  },
                                                                  "right": {
                                                                    "type": "Literal",
                                                                    "value": null,
                                                                    "raw": "null"
                                                                  }
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
                                                                      "type": "ExpressionStatement",
                                                                      "expression": {
                                                                        "type": "AssignmentExpression",
                                                                        "operator": "=",
                                                                        "left": {
                                                                          "type": "Identifier",
                                                                          "name": "xExtent"
                                                                        },
                                                                        "right": {
                                                                          "type": "AssignmentExpression",
                                                                          "operator": "=",
                                                                          "left": {
                                                                            "type": "MemberExpression",
                                                                            "computed": false,
                                                                            "object": {
                                                                              "type": "Identifier",
                                                                              "name": "extent1"
                                                                            },
                                                                            "property": {
                                                                              "type": "Identifier",
                                                                              "name": "x"
                                                                            }
                                                                          },
                                                                          "right": {
                                                                            "type": "CallExpression",
                                                                            "callee": {
                                                                              "type": "Identifier",
                                                                              "name": "xi"
                                                                            },
                                                                            "arguments": [
                                                                              {
                                                                                "type": "Identifier",
                                                                                "name": "t"
                                                                              }
                                                                            ]
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
                                                                          "name": "yExtent"
                                                                        },
                                                                        "right": {
                                                                          "type": "AssignmentExpression",
                                                                          "operator": "=",
                                                                          "left": {
                                                                            "type": "MemberExpression",
                                                                            "computed": false,
                                                                            "object": {
                                                                              "type": "Identifier",
                                                                              "name": "extent1"
                                                                            },
                                                                            "property": {
                                                                              "type": "Identifier",
                                                                              "name": "y"
                                                                            }
                                                                          },
                                                                          "right": {
                                                                            "type": "CallExpression",
                                                                            "callee": {
                                                                              "type": "Identifier",
                                                                              "name": "yi"
                                                                            },
                                                                            "arguments": [
                                                                              {
                                                                                "type": "Identifier",
                                                                                "name": "t"
                                                                              }
                                                                            ]
                                                                          }
                                                                        }
                                                                      }
                                                                    },
                                                                    {
                                                                      "type": "ExpressionStatement",
                                                                      "expression": {
                                                                        "type": "CallExpression",
                                                                        "callee": {
                                                                          "type": "Identifier",
                                                                          "name": "event_"
                                                                        },
                                                                        "arguments": [
                                                                          {
                                                                            "type": "ObjectExpression",
                                                                            "properties": [
                                                                              {
                                                                                "type": "Property",
                                                                                "key": {
                                                                                  "type": "Identifier",
                                                                                  "name": "type"
                                                                                },
                                                                                "value": {
                                                                                  "type": "Literal",
                                                                                  "value": "brush",
                                                                                  "raw": "\"brush\""
                                                                                },
                                                                                "kind": "init"
                                                                              },
                                                                              {
                                                                                "type": "Property",
                                                                                "key": {
                                                                                  "type": "Identifier",
                                                                                  "name": "mode"
                                                                                },
                                                                                "value": {
                                                                                  "type": "Literal",
                                                                                  "value": "resize",
                                                                                  "raw": "\"resize\""
                                                                                },
                                                                                "kind": "init"
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
                                                          ]
                                                        },
                                                        "rest": null,
                                                        "generator": false,
                                                        "expression": false
                                                      }
                                                    ]
                                                  },
                                                  "property": {
                                                    "type": "Identifier",
                                                    "name": "each"
                                                  }
                                                },
                                                "arguments": [
                                                  {
                                                    "type": "Literal",
                                                    "value": "end.brush",
                                                    "raw": "\"end.brush\""
                                                  },
                                                  {
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
                                                            "type": "AssignmentExpression",
                                                            "operator": "=",
                                                            "left": {
                                                              "type": "Identifier",
                                                              "name": "xExtentDomain"
                                                            },
                                                            "right": {
                                                              "type": "MemberExpression",
                                                              "computed": false,
                                                              "object": {
                                                                "type": "Identifier",
                                                                "name": "extent1"
                                                              },
                                                              "property": {
                                                                "type": "Identifier",
                                                                "name": "i"
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
                                                              "name": "yExtentDomain"
                                                            },
                                                            "right": {
                                                              "type": "MemberExpression",
                                                              "computed": false,
                                                              "object": {
                                                                "type": "Identifier",
                                                                "name": "extent1"
                                                              },
                                                              "property": {
                                                                "type": "Identifier",
                                                                "name": "j"
                                                              }
                                                            }
                                                          }
                                                        },
                                                        {
                                                          "type": "ExpressionStatement",
                                                          "expression": {
                                                            "type": "CallExpression",
                                                            "callee": {
                                                              "type": "Identifier",
                                                              "name": "event_"
                                                            },
                                                            "arguments": [
                                                              {
                                                                "type": "ObjectExpression",
                                                                "properties": [
                                                                  {
                                                                    "type": "Property",
                                                                    "key": {
                                                                      "type": "Identifier",
                                                                      "name": "type"
                                                                    },
                                                                    "value": {
                                                                      "type": "Literal",
                                                                      "value": "brush",
                                                                      "raw": "\"brush\""
                                                                    },
                                                                    "kind": "init"
                                                                  },
                                                                  {
                                                                    "type": "Property",
                                                                    "key": {
                                                                      "type": "Identifier",
                                                                      "name": "mode"
                                                                    },
                                                                    "value": {
                                                                      "type": "Literal",
                                                                      "value": "resize",
                                                                      "raw": "\"resize\""
                                                                    },
                                                                    "kind": "init"
                                                                  }
                                                                ]
                                                              }
                                                            ]
                                                          }
                                                        },
                                                        {
                                                          "type": "ExpressionStatement",
                                                          "expression": {
                                                            "type": "CallExpression",
                                                            "callee": {
                                                              "type": "Identifier",
                                                              "name": "event_"
                                                            },
                                                            "arguments": [
                                                              {
                                                                "type": "ObjectExpression",
                                                                "properties": [
                                                                  {
                                                                    "type": "Property",
                                                                    "key": {
                                                                      "type": "Identifier",
                                                                      "name": "type"
                                                                    },
                                                                    "value": {
                                                                      "type": "Literal",
                                                                      "value": "brushend",
                                                                      "raw": "\"brushend\""
                                                                    },
                                                                    "kind": "init"
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
                                                  "type": "Identifier",
                                                  "name": "event_"
                                                },
                                                "arguments": [
                                                  {
                                                    "type": "ObjectExpression",
                                                    "properties": [
                                                      {
                                                        "type": "Property",
                                                        "key": {
                                                          "type": "Identifier",
                                                          "name": "type"
                                                        },
                                                        "value": {
                                                          "type": "Literal",
                                                          "value": "brushstart",
                                                          "raw": "\"brushstart\""
                                                        },
                                                        "kind": "init"
                                                      }
                                                    ]
                                                  }
                                                ]
                                              }
                                            },
                                            {
                                              "type": "ExpressionStatement",
                                              "expression": {
                                                "type": "CallExpression",
                                                "callee": {
                                                  "type": "Identifier",
                                                  "name": "event_"
                                                },
                                                "arguments": [
                                                  {
                                                    "type": "ObjectExpression",
                                                    "properties": [
                                                      {
                                                        "type": "Property",
                                                        "key": {
                                                          "type": "Identifier",
                                                          "name": "type"
                                                        },
                                                        "value": {
                                                          "type": "Literal",
                                                          "value": "brush",
                                                          "raw": "\"brush\""
                                                        },
                                                        "kind": "init"
                                                      },
                                                      {
                                                        "type": "Property",
                                                        "key": {
                                                          "type": "Identifier",
                                                          "name": "mode"
                                                        },
                                                        "value": {
                                                          "type": "Literal",
                                                          "value": "resize",
                                                          "raw": "\"resize\""
                                                        },
                                                        "kind": "init"
                                                      }
                                                    ]
                                                  }
                                                ]
                                              }
                                            },
                                            {
                                              "type": "ExpressionStatement",
                                              "expression": {
                                                "type": "CallExpression",
                                                "callee": {
                                                  "type": "Identifier",
                                                  "name": "event_"
                                                },
                                                "arguments": [
                                                  {
                                                    "type": "ObjectExpression",
                                                    "properties": [
                                                      {
                                                        "type": "Property",
                                                        "key": {
                                                          "type": "Identifier",
                                                          "name": "type"
                                                        },
                                                        "value": {
                                                          "type": "Literal",
                                                          "value": "brushend",
                                                          "raw": "\"brushend\""
                                                        },
                                                        "kind": "init"
                                                      }
                                                    ]
                                                  }
                                                ]
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
                    "name": "redraw"
                  },
                  "params": [
                    {
                      "type": "Identifier",
                      "name": "g"
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
                              "type": "CallExpression",
                              "callee": {
                                "type": "MemberExpression",
                                "computed": false,
                                "object": {
                                  "type": "Identifier",
                                  "name": "g"
                                },
                                "property": {
                                  "type": "Identifier",
                                  "name": "selectAll"
                                }
                              },
                              "arguments": [
                                {
                                  "type": "Literal",
                                  "value": ".resize",
                                  "raw": "\".resize\""
                                }
                              ]
                            },
                            "property": {
                              "type": "Identifier",
                              "name": "attr"
                            }
                          },
                          "arguments": [
                            {
                              "type": "Literal",
                              "value": "transform",
                              "raw": "\"transform\""
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
                                              "value": "translate(",
                                              "raw": "\"translate(\""
                                            },
                                            "right": {
                                              "type": "MemberExpression",
                                              "computed": true,
                                              "object": {
                                                "type": "Identifier",
                                                "name": "xExtent"
                                              },
                                              "property": {
                                                "type": "UnaryExpression",
                                                "operator": "+",
                                                "argument": {
                                                  "type": "CallExpression",
                                                  "callee": {
                                                    "type": "MemberExpression",
                                                    "computed": false,
                                                    "object": {
                                                      "type": "Literal",
                                                      "value": {},
                                                      "raw": "/e$/"
                                                    },
                                                    "property": {
                                                      "type": "Identifier",
                                                      "name": "test"
                                                    }
                                                  },
                                                  "arguments": [
                                                    {
                                                      "type": "Identifier",
                                                      "name": "d"
                                                    }
                                                  ]
                                                },
                                                "prefix": true
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
                                          "type": "MemberExpression",
                                          "computed": true,
                                          "object": {
                                            "type": "Identifier",
                                            "name": "yExtent"
                                          },
                                          "property": {
                                            "type": "UnaryExpression",
                                            "operator": "+",
                                            "argument": {
                                              "type": "CallExpression",
                                              "callee": {
                                                "type": "MemberExpression",
                                                "computed": false,
                                                "object": {
                                                  "type": "Literal",
                                                  "value": {},
                                                  "raw": "/^s/"
                                                },
                                                "property": {
                                                  "type": "Identifier",
                                                  "name": "test"
                                                }
                                              },
                                              "arguments": [
                                                {
                                                  "type": "Identifier",
                                                  "name": "d"
                                                }
                                              ]
                                            },
                                            "prefix": true
                                          }
                                        }
                                      },
                                      "right": {
                                        "type": "Literal",
                                        "value": ")",
                                        "raw": "\")\""
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
                    "name": "redrawX"
                  },
                  "params": [
                    {
                      "type": "Identifier",
                      "name": "g"
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
                              "type": "CallExpression",
                              "callee": {
                                "type": "MemberExpression",
                                "computed": false,
                                "object": {
                                  "type": "Identifier",
                                  "name": "g"
                                },
                                "property": {
                                  "type": "Identifier",
                                  "name": "select"
                                }
                              },
                              "arguments": [
                                {
                                  "type": "Literal",
                                  "value": ".extent",
                                  "raw": "\".extent\""
                                }
                              ]
                            },
                            "property": {
                              "type": "Identifier",
                              "name": "attr"
                            }
                          },
                          "arguments": [
                            {
                              "type": "Literal",
                              "value": "x",
                              "raw": "\"x\""
                            },
                            {
                              "type": "MemberExpression",
                              "computed": true,
                              "object": {
                                "type": "Identifier",
                                "name": "xExtent"
                              },
                              "property": {
                                "type": "Literal",
                                "value": 0,
                                "raw": "0"
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
                              "type": "CallExpression",
                              "callee": {
                                "type": "MemberExpression",
                                "computed": false,
                                "object": {
                                  "type": "Identifier",
                                  "name": "g"
                                },
                                "property": {
                                  "type": "Identifier",
                                  "name": "selectAll"
                                }
                              },
                              "arguments": [
                                {
                                  "type": "Literal",
                                  "value": ".extent,.n>rect,.s>rect",
                                  "raw": "\".extent,.n>rect,.s>rect\""
                                }
                              ]
                            },
                            "property": {
                              "type": "Identifier",
                              "name": "attr"
                            }
                          },
                          "arguments": [
                            {
                              "type": "Literal",
                              "value": "width",
                              "raw": "\"width\""
                            },
                            {
                              "type": "BinaryExpression",
                              "operator": "-",
                              "left": {
                                "type": "MemberExpression",
                                "computed": true,
                                "object": {
                                  "type": "Identifier",
                                  "name": "xExtent"
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
                                  "name": "xExtent"
                                },
                                "property": {
                                  "type": "Literal",
                                  "value": 0,
                                  "raw": "0"
                                }
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
                },
                {
                  "type": "FunctionDeclaration",
                  "id": {
                    "type": "Identifier",
                    "name": "redrawY"
                  },
                  "params": [
                    {
                      "type": "Identifier",
                      "name": "g"
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
                              "type": "CallExpression",
                              "callee": {
                                "type": "MemberExpression",
                                "computed": false,
                                "object": {
                                  "type": "Identifier",
                                  "name": "g"
                                },
                                "property": {
                                  "type": "Identifier",
                                  "name": "select"
                                }
                              },
                              "arguments": [
                                {
                                  "type": "Literal",
                                  "value": ".extent",
                                  "raw": "\".extent\""
                                }
                              ]
                            },
                            "property": {
                              "type": "Identifier",
                              "name": "attr"
                            }
                          },
                          "arguments": [
                            {
                              "type": "Literal",
                              "value": "y",
                              "raw": "\"y\""
                            },
                            {
                              "type": "MemberExpression",
                              "computed": true,
                              "object": {
                                "type": "Identifier",
                                "name": "yExtent"
                              },
                              "property": {
                                "type": "Literal",
                                "value": 0,
                                "raw": "0"
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
                              "type": "CallExpression",
                              "callee": {
                                "type": "MemberExpression",
                                "computed": false,
                                "object": {
                                  "type": "Identifier",
                                  "name": "g"
                                },
                                "property": {
                                  "type": "Identifier",
                                  "name": "selectAll"
                                }
                              },
                              "arguments": [
                                {
                                  "type": "Literal",
                                  "value": ".extent,.e>rect,.w>rect",
                                  "raw": "\".extent,.e>rect,.w>rect\""
                                }
                              ]
                            },
                            "property": {
                              "type": "Identifier",
                              "name": "attr"
                            }
                          },
                          "arguments": [
                            {
                              "type": "Literal",
                              "value": "height",
                              "raw": "\"height\""
                            },
                            {
                              "type": "BinaryExpression",
                              "operator": "-",
                              "left": {
                                "type": "MemberExpression",
                                "computed": true,
                                "object": {
                                  "type": "Identifier",
                                  "name": "yExtent"
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
                                  "name": "yExtent"
                                },
                                "property": {
                                  "type": "Literal",
                                  "value": 0,
                                  "raw": "0"
                                }
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
                },
                {
                  "type": "FunctionDeclaration",
                  "id": {
                    "type": "Identifier",
                    "name": "brushstart"
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
                              "name": "target"
                            },
                            "init": {
                              "type": "ThisExpression"
                            }
                          },
                          {
                            "type": "VariableDeclarator",
                            "id": {
                              "type": "Identifier",
                              "name": "eventTarget"
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
                                  "name": "select"
                                }
                              },
                              "arguments": [
                                {
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
                                      "name": "event"
                                    }
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "name": "target"
                                  }
                                }
                              ]
                            }
                          },
                          {
                            "type": "VariableDeclarator",
                            "id": {
                              "type": "Identifier",
                              "name": "event_"
                            },
                            "init": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "MemberExpression",
                                "computed": false,
                                "object": {
                                  "type": "Identifier",
                                  "name": "event"
                                },
                                "property": {
                                  "type": "Identifier",
                                  "name": "of"
                                }
                              },
                              "arguments": [
                                {
                                  "type": "Identifier",
                                  "name": "target"
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
                              "name": "g"
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
                                  "name": "select"
                                }
                              },
                              "arguments": [
                                {
                                  "type": "Identifier",
                                  "name": "target"
                                }
                              ]
                            }
                          },
                          {
                            "type": "VariableDeclarator",
                            "id": {
                              "type": "Identifier",
                              "name": "resizing"
                            },
                            "init": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "MemberExpression",
                                "computed": false,
                                "object": {
                                  "type": "Identifier",
                                  "name": "eventTarget"
                                },
                                "property": {
                                  "type": "Identifier",
                                  "name": "datum"
                                }
                              },
                              "arguments": []
                            }
                          },
                          {
                            "type": "VariableDeclarator",
                            "id": {
                              "type": "Identifier",
                              "name": "resizingX"
                            },
                            "init": {
                              "type": "LogicalExpression",
                              "operator": "&&",
                              "left": {
                                "type": "UnaryExpression",
                                "operator": "!",
                                "argument": {
                                  "type": "CallExpression",
                                  "callee": {
                                    "type": "MemberExpression",
                                    "computed": false,
                                    "object": {
                                      "type": "Literal",
                                      "value": {},
                                      "raw": "/^(n|s)$/"
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "name": "test"
                                    }
                                  },
                                  "arguments": [
                                    {
                                      "type": "Identifier",
                                      "name": "resizing"
                                    }
                                  ]
                                },
                                "prefix": true
                              },
                              "right": {
                                "type": "Identifier",
                                "name": "x"
                              }
                            }
                          },
                          {
                            "type": "VariableDeclarator",
                            "id": {
                              "type": "Identifier",
                              "name": "resizingY"
                            },
                            "init": {
                              "type": "LogicalExpression",
                              "operator": "&&",
                              "left": {
                                "type": "UnaryExpression",
                                "operator": "!",
                                "argument": {
                                  "type": "CallExpression",
                                  "callee": {
                                    "type": "MemberExpression",
                                    "computed": false,
                                    "object": {
                                      "type": "Literal",
                                      "value": {},
                                      "raw": "/^(e|w)$/"
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "name": "test"
                                    }
                                  },
                                  "arguments": [
                                    {
                                      "type": "Identifier",
                                      "name": "resizing"
                                    }
                                  ]
                                },
                                "prefix": true
                              },
                              "right": {
                                "type": "Identifier",
                                "name": "y"
                              }
                            }
                          },
                          {
                            "type": "VariableDeclarator",
                            "id": {
                              "type": "Identifier",
                              "name": "dragging"
                            },
                            "init": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "MemberExpression",
                                "computed": false,
                                "object": {
                                  "type": "Identifier",
                                  "name": "eventTarget"
                                },
                                "property": {
                                  "type": "Identifier",
                                  "name": "classed"
                                }
                              },
                              "arguments": [
                                {
                                  "type": "Literal",
                                  "value": "extent",
                                  "raw": "\"extent\""
                                }
                              ]
                            }
                          },
                          {
                            "type": "VariableDeclarator",
                            "id": {
                              "type": "Identifier",
                              "name": "dragRestore"
                            },
                            "init": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "Identifier",
                                "name": "d3_event_dragSuppress"
                              },
                              "arguments": []
                            }
                          },
                          {
                            "type": "VariableDeclarator",
                            "id": {
                              "type": "Identifier",
                              "name": "center"
                            },
                            "init": null
                          },
                          {
                            "type": "VariableDeclarator",
                            "id": {
                              "type": "Identifier",
                              "name": "origin"
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
                                  "name": "mouse"
                                }
                              },
                              "arguments": [
                                {
                                  "type": "Identifier",
                                  "name": "target"
                                }
                              ]
                            }
                          },
                          {
                            "type": "VariableDeclarator",
                            "id": {
                              "type": "Identifier",
                              "name": "offset"
                            },
                            "init": null
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
                              "name": "w"
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
                                          "type": "Identifier",
                                          "name": "d3"
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "name": "select"
                                        }
                                      },
                                      "arguments": [
                                        {
                                          "type": "Identifier",
                                          "name": "d3_window"
                                        }
                                      ]
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "name": "on"
                                    }
                                  },
                                  "arguments": [
                                    {
                                      "type": "Literal",
                                      "value": "keydown.brush",
                                      "raw": "\"keydown.brush\""
                                    },
                                    {
                                      "type": "Identifier",
                                      "name": "keydown"
                                    }
                                  ]
                                },
                                "property": {
                                  "type": "Identifier",
                                  "name": "on"
                                }
                              },
                              "arguments": [
                                {
                                  "type": "Literal",
                                  "value": "keyup.brush",
                                  "raw": "\"keyup.brush\""
                                },
                                {
                                  "type": "Identifier",
                                  "name": "keyup"
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
                              "name": "event"
                            }
                          },
                          "property": {
                            "type": "Identifier",
                            "name": "changedTouches"
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
                                    "type": "CallExpression",
                                    "callee": {
                                      "type": "MemberExpression",
                                      "computed": false,
                                      "object": {
                                        "type": "Identifier",
                                        "name": "w"
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "name": "on"
                                      }
                                    },
                                    "arguments": [
                                      {
                                        "type": "Literal",
                                        "value": "touchmove.brush",
                                        "raw": "\"touchmove.brush\""
                                      },
                                      {
                                        "type": "Identifier",
                                        "name": "brushmove"
                                      }
                                    ]
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "name": "on"
                                  }
                                },
                                "arguments": [
                                  {
                                    "type": "Literal",
                                    "value": "touchend.brush",
                                    "raw": "\"touchend.brush\""
                                  },
                                  {
                                    "type": "Identifier",
                                    "name": "brushend"
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
                                    "type": "CallExpression",
                                    "callee": {
                                      "type": "MemberExpression",
                                      "computed": false,
                                      "object": {
                                        "type": "Identifier",
                                        "name": "w"
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "name": "on"
                                      }
                                    },
                                    "arguments": [
                                      {
                                        "type": "Literal",
                                        "value": "mousemove.brush",
                                        "raw": "\"mousemove.brush\""
                                      },
                                      {
                                        "type": "Identifier",
                                        "name": "brushmove"
                                      }
                                    ]
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "name": "on"
                                  }
                                },
                                "arguments": [
                                  {
                                    "type": "Literal",
                                    "value": "mouseup.brush",
                                    "raw": "\"mouseup.brush\""
                                  },
                                  {
                                    "type": "Identifier",
                                    "name": "brushend"
                                  }
                                ]
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
                                      "name": "g"
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "name": "interrupt"
                                    }
                                  },
                                  "arguments": []
                                },
                                "property": {
                                  "type": "Identifier",
                                  "name": "selectAll"
                                }
                              },
                              "arguments": [
                                {
                                  "type": "Literal",
                                  "value": "*",
                                  "raw": "\"*\""
                                }
                              ]
                            },
                            "property": {
                              "type": "Identifier",
                              "name": "interrupt"
                            }
                          },
                          "arguments": []
                        }
                      },
                      {
                        "type": "IfStatement",
                        "test": {
                          "type": "Identifier",
                          "name": "dragging"
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
                                  "type": "MemberExpression",
                                  "computed": true,
                                  "object": {
                                    "type": "Identifier",
                                    "name": "origin"
                                  },
                                  "property": {
                                    "type": "Literal",
                                    "value": 0,
                                    "raw": "0"
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
                                      "name": "xExtent"
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
                                      "name": "origin"
                                    },
                                    "property": {
                                      "type": "Literal",
                                      "value": 0,
                                      "raw": "0"
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
                                    "name": "origin"
                                  },
                                  "property": {
                                    "type": "Literal",
                                    "value": 1,
                                    "raw": "1"
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
                                      "name": "yExtent"
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
                                      "name": "origin"
                                    },
                                    "property": {
                                      "type": "Literal",
                                      "value": 1,
                                      "raw": "1"
                                    }
                                  }
                                }
                              }
                            }
                          ]
                        },
                        "alternate": {
                          "type": "IfStatement",
                          "test": {
                            "type": "Identifier",
                            "name": "resizing"
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
                                      "name": "ex"
                                    },
                                    "init": {
                                      "type": "UnaryExpression",
                                      "operator": "+",
                                      "argument": {
                                        "type": "CallExpression",
                                        "callee": {
                                          "type": "MemberExpression",
                                          "computed": false,
                                          "object": {
                                            "type": "Literal",
                                            "value": {},
                                            "raw": "/w$/"
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "name": "test"
                                          }
                                        },
                                        "arguments": [
                                          {
                                            "type": "Identifier",
                                            "name": "resizing"
                                          }
                                        ]
                                      },
                                      "prefix": true
                                    }
                                  },
                                  {
                                    "type": "VariableDeclarator",
                                    "id": {
                                      "type": "Identifier",
                                      "name": "ey"
                                    },
                                    "init": {
                                      "type": "UnaryExpression",
                                      "operator": "+",
                                      "argument": {
                                        "type": "CallExpression",
                                        "callee": {
                                          "type": "MemberExpression",
                                          "computed": false,
                                          "object": {
                                            "type": "Literal",
                                            "value": {},
                                            "raw": "/^n/"
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "name": "test"
                                          }
                                        },
                                        "arguments": [
                                          {
                                            "type": "Identifier",
                                            "name": "resizing"
                                          }
                                        ]
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
                                    "name": "offset"
                                  },
                                  "right": {
                                    "type": "ArrayExpression",
                                    "elements": [
                                      {
                                        "type": "BinaryExpression",
                                        "operator": "-",
                                        "left": {
                                          "type": "MemberExpression",
                                          "computed": true,
                                          "object": {
                                            "type": "Identifier",
                                            "name": "xExtent"
                                          },
                                          "property": {
                                            "type": "BinaryExpression",
                                            "operator": "-",
                                            "left": {
                                              "type": "Literal",
                                              "value": 1,
                                              "raw": "1"
                                            },
                                            "right": {
                                              "type": "Identifier",
                                              "name": "ex"
                                            }
                                          }
                                        },
                                        "right": {
                                          "type": "MemberExpression",
                                          "computed": true,
                                          "object": {
                                            "type": "Identifier",
                                            "name": "origin"
                                          },
                                          "property": {
                                            "type": "Literal",
                                            "value": 0,
                                            "raw": "0"
                                          }
                                        }
                                      },
                                      {
                                        "type": "BinaryExpression",
                                        "operator": "-",
                                        "left": {
                                          "type": "MemberExpression",
                                          "computed": true,
                                          "object": {
                                            "type": "Identifier",
                                            "name": "yExtent"
                                          },
                                          "property": {
                                            "type": "BinaryExpression",
                                            "operator": "-",
                                            "left": {
                                              "type": "Literal",
                                              "value": 1,
                                              "raw": "1"
                                            },
                                            "right": {
                                              "type": "Identifier",
                                              "name": "ey"
                                            }
                                          }
                                        },
                                        "right": {
                                          "type": "MemberExpression",
                                          "computed": true,
                                          "object": {
                                            "type": "Identifier",
                                            "name": "origin"
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
                                      "name": "origin"
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
                                      "name": "xExtent"
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "name": "ex"
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
                                      "name": "origin"
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
                                      "name": "yExtent"
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "name": "ey"
                                    }
                                  }
                                }
                              }
                            ]
                          },
                          "alternate": {
                            "type": "IfStatement",
                            "test": {
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
                                  "name": "event"
                                }
                              },
                              "property": {
                                "type": "Identifier",
                                "name": "altKey"
                              }
                            },
                            "consequent": {
                              "type": "ExpressionStatement",
                              "expression": {
                                "type": "AssignmentExpression",
                                "operator": "=",
                                "left": {
                                  "type": "Identifier",
                                  "name": "center"
                                },
                                "right": {
                                  "type": "CallExpression",
                                  "callee": {
                                    "type": "MemberExpression",
                                    "computed": false,
                                    "object": {
                                      "type": "Identifier",
                                      "name": "origin"
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "name": "slice"
                                    }
                                  },
                                  "arguments": []
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
                                      "name": "g"
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "name": "style"
                                    }
                                  },
                                  "arguments": [
                                    {
                                      "type": "Literal",
                                      "value": "pointer-events",
                                      "raw": "\"pointer-events\""
                                    },
                                    {
                                      "type": "Literal",
                                      "value": "none",
                                      "raw": "\"none\""
                                    }
                                  ]
                                },
                                "property": {
                                  "type": "Identifier",
                                  "name": "selectAll"
                                }
                              },
                              "arguments": [
                                {
                                  "type": "Literal",
                                  "value": ".resize",
                                  "raw": "\".resize\""
                                }
                              ]
                            },
                            "property": {
                              "type": "Identifier",
                              "name": "style"
                            }
                          },
                          "arguments": [
                            {
                              "type": "Literal",
                              "value": "display",
                              "raw": "\"display\""
                            },
                            {
                              "type": "Literal",
                              "value": null,
                              "raw": "null"
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
                                  "name": "select"
                                }
                              },
                              "arguments": [
                                {
                                  "type": "Literal",
                                  "value": "body",
                                  "raw": "\"body\""
                                }
                              ]
                            },
                            "property": {
                              "type": "Identifier",
                              "name": "style"
                            }
                          },
                          "arguments": [
                            {
                              "type": "Literal",
                              "value": "cursor",
                              "raw": "\"cursor\""
                            },
                            {
                              "type": "CallExpression",
                              "callee": {
                                "type": "MemberExpression",
                                "computed": false,
                                "object": {
                                  "type": "Identifier",
                                  "name": "eventTarget"
                                },
                                "property": {
                                  "type": "Identifier",
                                  "name": "style"
                                }
                              },
                              "arguments": [
                                {
                                  "type": "Literal",
                                  "value": "cursor",
                                  "raw": "\"cursor\""
                                }
                              ]
                            }
                          ]
                        }
                      },
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "Identifier",
                            "name": "event_"
                          },
                          "arguments": [
                            {
                              "type": "ObjectExpression",
                              "properties": [
                                {
                                  "type": "Property",
                                  "key": {
                                    "type": "Identifier",
                                    "name": "type"
                                  },
                                  "value": {
                                    "type": "Literal",
                                    "value": "brushstart",
                                    "raw": "\"brushstart\""
                                  },
                                  "kind": "init"
                                }
                              ]
                            }
                          ]
                        }
                      },
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "Identifier",
                            "name": "brushmove"
                          },
                          "arguments": []
                        }
                      },
                      {
                        "type": "FunctionDeclaration",
                        "id": {
                          "type": "Identifier",
                          "name": "keydown"
                        },
                        "params": [],
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
                                      "name": "event"
                                    }
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "name": "keyCode"
                                  }
                                },
                                "right": {
                                  "type": "Literal",
                                  "value": 32,
                                  "raw": "32"
                                }
                              },
                              "consequent": {
                                "type": "BlockStatement",
                                "body": [
                                  {
                                    "type": "IfStatement",
                                    "test": {
                                      "type": "UnaryExpression",
                                      "operator": "!",
                                      "argument": {
                                        "type": "Identifier",
                                        "name": "dragging"
                                      },
                                      "prefix": true
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
                                              "name": "center"
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
                                            "type": "AssignmentExpression",
                                            "operator": "-=",
                                            "left": {
                                              "type": "MemberExpression",
                                              "computed": true,
                                              "object": {
                                                "type": "Identifier",
                                                "name": "origin"
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
                                                "name": "xExtent"
                                              },
                                              "property": {
                                                "type": "Literal",
                                                "value": 1,
                                                "raw": "1"
                                              }
                                            }
                                          }
                                        },
                                        {
                                          "type": "ExpressionStatement",
                                          "expression": {
                                            "type": "AssignmentExpression",
                                            "operator": "-=",
                                            "left": {
                                              "type": "MemberExpression",
                                              "computed": true,
                                              "object": {
                                                "type": "Identifier",
                                                "name": "origin"
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
                                                "name": "yExtent"
                                              },
                                              "property": {
                                                "type": "Literal",
                                                "value": 1,
                                                "raw": "1"
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
                                              "name": "dragging"
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
                                    "alternate": null
                                  },
                                  {
                                    "type": "ExpressionStatement",
                                    "expression": {
                                      "type": "CallExpression",
                                      "callee": {
                                        "type": "Identifier",
                                        "name": "d3_eventPreventDefault"
                                      },
                                      "arguments": []
                                    }
                                  }
                                ]
                              },
                              "alternate": null
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
                          "name": "keyup"
                        },
                        "params": [],
                        "defaults": [],
                        "body": {
                          "type": "BlockStatement",
                          "body": [
                            {
                              "type": "IfStatement",
                              "test": {
                                "type": "LogicalExpression",
                                "operator": "&&",
                                "left": {
                                  "type": "BinaryExpression",
                                  "operator": "==",
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
                                        "name": "event"
                                      }
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "name": "keyCode"
                                    }
                                  },
                                  "right": {
                                    "type": "Literal",
                                    "value": 32,
                                    "raw": "32"
                                  }
                                },
                                "right": {
                                  "type": "BinaryExpression",
                                  "operator": "==",
                                  "left": {
                                    "type": "Identifier",
                                    "name": "dragging"
                                  },
                                  "right": {
                                    "type": "Literal",
                                    "value": 2,
                                    "raw": "2"
                                  }
                                }
                              },
                              "consequent": {
                                "type": "BlockStatement",
                                "body": [
                                  {
                                    "type": "ExpressionStatement",
                                    "expression": {
                                      "type": "AssignmentExpression",
                                      "operator": "+=",
                                      "left": {
                                        "type": "MemberExpression",
                                        "computed": true,
                                        "object": {
                                          "type": "Identifier",
                                          "name": "origin"
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
                                          "name": "xExtent"
                                        },
                                        "property": {
                                          "type": "Literal",
                                          "value": 1,
                                          "raw": "1"
                                        }
                                      }
                                    }
                                  },
                                  {
                                    "type": "ExpressionStatement",
                                    "expression": {
                                      "type": "AssignmentExpression",
                                      "operator": "+=",
                                      "left": {
                                        "type": "MemberExpression",
                                        "computed": true,
                                        "object": {
                                          "type": "Identifier",
                                          "name": "origin"
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
                                          "name": "yExtent"
                                        },
                                        "property": {
                                          "type": "Literal",
                                          "value": 1,
                                          "raw": "1"
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
                                        "name": "dragging"
                                      },
                                      "right": {
                                        "type": "Literal",
                                        "value": 0,
                                        "raw": "0"
                                      }
                                    }
                                  },
                                  {
                                    "type": "ExpressionStatement",
                                    "expression": {
                                      "type": "CallExpression",
                                      "callee": {
                                        "type": "Identifier",
                                        "name": "d3_eventPreventDefault"
                                      },
                                      "arguments": []
                                    }
                                  }
                                ]
                              },
                              "alternate": null
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
                          "name": "brushmove"
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
                                    "name": "point"
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
                                        "name": "mouse"
                                      }
                                    },
                                    "arguments": [
                                      {
                                        "type": "Identifier",
                                        "name": "target"
                                      }
                                    ]
                                  }
                                },
                                {
                                  "type": "VariableDeclarator",
                                  "id": {
                                    "type": "Identifier",
                                    "name": "moved"
                                  },
                                  "init": {
                                    "type": "Literal",
                                    "value": false,
                                    "raw": "false"
                                  }
                                }
                              ],
                              "kind": "var"
                            },
                            {
                              "type": "IfStatement",
                              "test": {
                                "type": "Identifier",
                                "name": "offset"
                              },
                              "consequent": {
                                "type": "BlockStatement",
                                "body": [
                                  {
                                    "type": "ExpressionStatement",
                                    "expression": {
                                      "type": "AssignmentExpression",
                                      "operator": "+=",
                                      "left": {
                                        "type": "MemberExpression",
                                        "computed": true,
                                        "object": {
                                          "type": "Identifier",
                                          "name": "point"
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
                                          "name": "offset"
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
                                    "type": "ExpressionStatement",
                                    "expression": {
                                      "type": "AssignmentExpression",
                                      "operator": "+=",
                                      "left": {
                                        "type": "MemberExpression",
                                        "computed": true,
                                        "object": {
                                          "type": "Identifier",
                                          "name": "point"
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
                                          "name": "offset"
                                        },
                                        "property": {
                                          "type": "Literal",
                                          "value": 1,
                                          "raw": "1"
                                        }
                                      }
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
                                  "type": "Identifier",
                                  "name": "dragging"
                                },
                                "prefix": true
                              },
                              "consequent": {
                                "type": "BlockStatement",
                                "body": [
                                  {
                                    "type": "IfStatement",
                                    "test": {
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
                                          "name": "event"
                                        }
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "name": "altKey"
                                      }
                                    },
                                    "consequent": {
                                      "type": "BlockStatement",
                                      "body": [
                                        {
                                          "type": "IfStatement",
                                          "test": {
                                            "type": "UnaryExpression",
                                            "operator": "!",
                                            "argument": {
                                              "type": "Identifier",
                                              "name": "center"
                                            },
                                            "prefix": true
                                          },
                                          "consequent": {
                                            "type": "ExpressionStatement",
                                            "expression": {
                                              "type": "AssignmentExpression",
                                              "operator": "=",
                                              "left": {
                                                "type": "Identifier",
                                                "name": "center"
                                              },
                                              "right": {
                                                "type": "ArrayExpression",
                                                "elements": [
                                                  {
                                                    "type": "BinaryExpression",
                                                    "operator": "/",
                                                    "left": {
                                                      "type": "BinaryExpression",
                                                      "operator": "+",
                                                      "left": {
                                                        "type": "MemberExpression",
                                                        "computed": true,
                                                        "object": {
                                                          "type": "Identifier",
                                                          "name": "xExtent"
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
                                                          "name": "xExtent"
                                                        },
                                                        "property": {
                                                          "type": "Literal",
                                                          "value": 1,
                                                          "raw": "1"
                                                        }
                                                      }
                                                    },
                                                    "right": {
                                                      "type": "Literal",
                                                      "value": 2,
                                                      "raw": "2"
                                                    }
                                                  },
                                                  {
                                                    "type": "BinaryExpression",
                                                    "operator": "/",
                                                    "left": {
                                                      "type": "BinaryExpression",
                                                      "operator": "+",
                                                      "left": {
                                                        "type": "MemberExpression",
                                                        "computed": true,
                                                        "object": {
                                                          "type": "Identifier",
                                                          "name": "yExtent"
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
                                                          "name": "yExtent"
                                                        },
                                                        "property": {
                                                          "type": "Literal",
                                                          "value": 1,
                                                          "raw": "1"
                                                        }
                                                      }
                                                    },
                                                    "right": {
                                                      "type": "Literal",
                                                      "value": 2,
                                                      "raw": "2"
                                                    }
                                                  }
                                                ]
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
                                                "name": "origin"
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
                                                "name": "xExtent"
                                              },
                                              "property": {
                                                "type": "UnaryExpression",
                                                "operator": "+",
                                                "argument": {
                                                  "type": "BinaryExpression",
                                                  "operator": "<",
                                                  "left": {
                                                    "type": "MemberExpression",
                                                    "computed": true,
                                                    "object": {
                                                      "type": "Identifier",
                                                      "name": "point"
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
                                                      "name": "center"
                                                    },
                                                    "property": {
                                                      "type": "Literal",
                                                      "value": 0,
                                                      "raw": "0"
                                                    }
                                                  }
                                                },
                                                "prefix": true
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
                                                "name": "origin"
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
                                                "name": "yExtent"
                                              },
                                              "property": {
                                                "type": "UnaryExpression",
                                                "operator": "+",
                                                "argument": {
                                                  "type": "BinaryExpression",
                                                  "operator": "<",
                                                  "left": {
                                                    "type": "MemberExpression",
                                                    "computed": true,
                                                    "object": {
                                                      "type": "Identifier",
                                                      "name": "point"
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
                                                      "name": "center"
                                                    },
                                                    "property": {
                                                      "type": "Literal",
                                                      "value": 1,
                                                      "raw": "1"
                                                    }
                                                  }
                                                },
                                                "prefix": true
                                              }
                                            }
                                          }
                                        }
                                      ]
                                    },
                                    "alternate": {
                                      "type": "ExpressionStatement",
                                      "expression": {
                                        "type": "AssignmentExpression",
                                        "operator": "=",
                                        "left": {
                                          "type": "Identifier",
                                          "name": "center"
                                        },
                                        "right": {
                                          "type": "Literal",
                                          "value": null,
                                          "raw": "null"
                                        }
                                      }
                                    }
                                  }
                                ]
                              },
                              "alternate": null
                            },
                            {
                              "type": "IfStatement",
                              "test": {
                                "type": "LogicalExpression",
                                "operator": "&&",
                                "left": {
                                  "type": "Identifier",
                                  "name": "resizingX"
                                },
                                "right": {
                                  "type": "CallExpression",
                                  "callee": {
                                    "type": "Identifier",
                                    "name": "move1"
                                  },
                                  "arguments": [
                                    {
                                      "type": "Identifier",
                                      "name": "point"
                                    },
                                    {
                                      "type": "Identifier",
                                      "name": "x"
                                    },
                                    {
                                      "type": "Literal",
                                      "value": 0,
                                      "raw": "0"
                                    }
                                  ]
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
                                        "type": "Identifier",
                                        "name": "redrawX"
                                      },
                                      "arguments": [
                                        {
                                          "type": "Identifier",
                                          "name": "g"
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
                                        "name": "moved"
                                      },
                                      "right": {
                                        "type": "Literal",
                                        "value": true,
                                        "raw": "true"
                                      }
                                    }
                                  }
                                ]
                              },
                              "alternate": null
                            },
                            {
                              "type": "IfStatement",
                              "test": {
                                "type": "LogicalExpression",
                                "operator": "&&",
                                "left": {
                                  "type": "Identifier",
                                  "name": "resizingY"
                                },
                                "right": {
                                  "type": "CallExpression",
                                  "callee": {
                                    "type": "Identifier",
                                    "name": "move1"
                                  },
                                  "arguments": [
                                    {
                                      "type": "Identifier",
                                      "name": "point"
                                    },
                                    {
                                      "type": "Identifier",
                                      "name": "y"
                                    },
                                    {
                                      "type": "Literal",
                                      "value": 1,
                                      "raw": "1"
                                    }
                                  ]
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
                                        "type": "Identifier",
                                        "name": "redrawY"
                                      },
                                      "arguments": [
                                        {
                                          "type": "Identifier",
                                          "name": "g"
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
                                        "name": "moved"
                                      },
                                      "right": {
                                        "type": "Literal",
                                        "value": true,
                                        "raw": "true"
                                      }
                                    }
                                  }
                                ]
                              },
                              "alternate": null
                            },
                            {
                              "type": "IfStatement",
                              "test": {
                                "type": "Identifier",
                                "name": "moved"
                              },
                              "consequent": {
                                "type": "BlockStatement",
                                "body": [
                                  {
                                    "type": "ExpressionStatement",
                                    "expression": {
                                      "type": "CallExpression",
                                      "callee": {
                                        "type": "Identifier",
                                        "name": "redraw"
                                      },
                                      "arguments": [
                                        {
                                          "type": "Identifier",
                                          "name": "g"
                                        }
                                      ]
                                    }
                                  },
                                  {
                                    "type": "ExpressionStatement",
                                    "expression": {
                                      "type": "CallExpression",
                                      "callee": {
                                        "type": "Identifier",
                                        "name": "event_"
                                      },
                                      "arguments": [
                                        {
                                          "type": "ObjectExpression",
                                          "properties": [
                                            {
                                              "type": "Property",
                                              "key": {
                                                "type": "Identifier",
                                                "name": "type"
                                              },
                                              "value": {
                                                "type": "Literal",
                                                "value": "brush",
                                                "raw": "\"brush\""
                                              },
                                              "kind": "init"
                                            },
                                            {
                                              "type": "Property",
                                              "key": {
                                                "type": "Identifier",
                                                "name": "mode"
                                              },
                                              "value": {
                                                "type": "ConditionalExpression",
                                                "test": {
                                                  "type": "Identifier",
                                                  "name": "dragging"
                                                },
                                                "consequent": {
                                                  "type": "Literal",
                                                  "value": "move",
                                                  "raw": "\"move\""
                                                },
                                                "alternate": {
                                                  "type": "Literal",
                                                  "value": "resize",
                                                  "raw": "\"resize\""
                                                }
                                              },
                                              "kind": "init"
                                            }
                                          ]
                                        }
                                      ]
                                    }
                                  }
                                ]
                              },
                              "alternate": null
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
                          "name": "move1"
                        },
                        "params": [
                          {
                            "type": "Identifier",
                            "name": "point"
                          },
                          {
                            "type": "Identifier",
                            "name": "scale"
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
                                    "name": "range"
                                  },
                                  "init": {
                                    "type": "CallExpression",
                                    "callee": {
                                      "type": "Identifier",
                                      "name": "d3_scaleRange"
                                    },
                                    "arguments": [
                                      {
                                        "type": "Identifier",
                                        "name": "scale"
                                      }
                                    ]
                                  }
                                },
                                {
                                  "type": "VariableDeclarator",
                                  "id": {
                                    "type": "Identifier",
                                    "name": "r0"
                                  },
                                  "init": {
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
                                },
                                {
                                  "type": "VariableDeclarator",
                                  "id": {
                                    "type": "Identifier",
                                    "name": "r1"
                                  },
                                  "init": {
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
                                },
                                {
                                  "type": "VariableDeclarator",
                                  "id": {
                                    "type": "Identifier",
                                    "name": "position"
                                  },
                                  "init": {
                                    "type": "MemberExpression",
                                    "computed": true,
                                    "object": {
                                      "type": "Identifier",
                                      "name": "origin"
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "name": "i"
                                    }
                                  }
                                },
                                {
                                  "type": "VariableDeclarator",
                                  "id": {
                                    "type": "Identifier",
                                    "name": "extent"
                                  },
                                  "init": {
                                    "type": "ConditionalExpression",
                                    "test": {
                                      "type": "Identifier",
                                      "name": "i"
                                    },
                                    "consequent": {
                                      "type": "Identifier",
                                      "name": "yExtent"
                                    },
                                    "alternate": {
                                      "type": "Identifier",
                                      "name": "xExtent"
                                    }
                                  }
                                },
                                {
                                  "type": "VariableDeclarator",
                                  "id": {
                                    "type": "Identifier",
                                    "name": "size"
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
                                    "name": "min"
                                  },
                                  "init": null
                                },
                                {
                                  "type": "VariableDeclarator",
                                  "id": {
                                    "type": "Identifier",
                                    "name": "max"
                                  },
                                  "init": null
                                }
                              ],
                              "kind": "var"
                            },
                            {
                              "type": "IfStatement",
                              "test": {
                                "type": "Identifier",
                                "name": "dragging"
                              },
                              "consequent": {
                                "type": "BlockStatement",
                                "body": [
                                  {
                                    "type": "ExpressionStatement",
                                    "expression": {
                                      "type": "AssignmentExpression",
                                      "operator": "-=",
                                      "left": {
                                        "type": "Identifier",
                                        "name": "r0"
                                      },
                                      "right": {
                                        "type": "Identifier",
                                        "name": "position"
                                      }
                                    }
                                  },
                                  {
                                    "type": "ExpressionStatement",
                                    "expression": {
                                      "type": "AssignmentExpression",
                                      "operator": "-=",
                                      "left": {
                                        "type": "Identifier",
                                        "name": "r1"
                                      },
                                      "right": {
                                        "type": "BinaryExpression",
                                        "operator": "+",
                                        "left": {
                                          "type": "Identifier",
                                          "name": "size"
                                        },
                                        "right": {
                                          "type": "Identifier",
                                          "name": "position"
                                        }
                                      }
                                    }
                                  }
                                ]
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
                                  "name": "min"
                                },
                                "right": {
                                  "type": "ConditionalExpression",
                                  "test": {
                                    "type": "ConditionalExpression",
                                    "test": {
                                      "type": "Identifier",
                                      "name": "i"
                                    },
                                    "consequent": {
                                      "type": "Identifier",
                                      "name": "yClamp"
                                    },
                                    "alternate": {
                                      "type": "Identifier",
                                      "name": "xClamp"
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
                                        "name": "max"
                                      }
                                    },
                                    "arguments": [
                                      {
                                        "type": "Identifier",
                                        "name": "r0"
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
                                            "type": "Identifier",
                                            "name": "r1"
                                          },
                                          {
                                            "type": "MemberExpression",
                                            "computed": true,
                                            "object": {
                                              "type": "Identifier",
                                              "name": "point"
                                            },
                                            "property": {
                                              "type": "Identifier",
                                              "name": "i"
                                            }
                                          }
                                        ]
                                      }
                                    ]
                                  },
                                  "alternate": {
                                    "type": "MemberExpression",
                                    "computed": true,
                                    "object": {
                                      "type": "Identifier",
                                      "name": "point"
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "name": "i"
                                    }
                                  }
                                }
                              }
                            },
                            {
                              "type": "IfStatement",
                              "test": {
                                "type": "Identifier",
                                "name": "dragging"
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
                                        "name": "max"
                                      },
                                      "right": {
                                        "type": "BinaryExpression",
                                        "operator": "+",
                                        "left": {
                                          "type": "AssignmentExpression",
                                          "operator": "+=",
                                          "left": {
                                            "type": "Identifier",
                                            "name": "min"
                                          },
                                          "right": {
                                            "type": "Identifier",
                                            "name": "position"
                                          }
                                        },
                                        "right": {
                                          "type": "Identifier",
                                          "name": "size"
                                        }
                                      }
                                    }
                                  }
                                ]
                              },
                              "alternate": {
                                "type": "BlockStatement",
                                "body": [
                                  {
                                    "type": "IfStatement",
                                    "test": {
                                      "type": "Identifier",
                                      "name": "center"
                                    },
                                    "consequent": {
                                      "type": "ExpressionStatement",
                                      "expression": {
                                        "type": "AssignmentExpression",
                                        "operator": "=",
                                        "left": {
                                          "type": "Identifier",
                                          "name": "position"
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
                                              "name": "max"
                                            }
                                          },
                                          "arguments": [
                                            {
                                              "type": "Identifier",
                                              "name": "r0"
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
                                                  "type": "Identifier",
                                                  "name": "r1"
                                                },
                                                {
                                                  "type": "BinaryExpression",
                                                  "operator": "-",
                                                  "left": {
                                                    "type": "BinaryExpression",
                                                    "operator": "*",
                                                    "left": {
                                                      "type": "Literal",
                                                      "value": 2,
                                                      "raw": "2"
                                                    },
                                                    "right": {
                                                      "type": "MemberExpression",
                                                      "computed": true,
                                                      "object": {
                                                        "type": "Identifier",
                                                        "name": "center"
                                                      },
                                                      "property": {
                                                        "type": "Identifier",
                                                        "name": "i"
                                                      }
                                                    }
                                                  },
                                                  "right": {
                                                    "type": "Identifier",
                                                    "name": "min"
                                                  }
                                                }
                                              ]
                                            }
                                          ]
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
                                        "type": "Identifier",
                                        "name": "position"
                                      },
                                      "right": {
                                        "type": "Identifier",
                                        "name": "min"
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
                                              "name": "max"
                                            },
                                            "right": {
                                              "type": "Identifier",
                                              "name": "min"
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
                                              "name": "min"
                                            },
                                            "right": {
                                              "type": "Identifier",
                                              "name": "position"
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
                                              "name": "max"
                                            },
                                            "right": {
                                              "type": "Identifier",
                                              "name": "position"
                                            }
                                          }
                                        }
                                      ]
                                    }
                                  }
                                ]
                              }
                            },
                            {
                              "type": "IfStatement",
                              "test": {
                                "type": "LogicalExpression",
                                "operator": "||",
                                "left": {
                                  "type": "BinaryExpression",
                                  "operator": "!=",
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
                                    "name": "min"
                                  }
                                },
                                "right": {
                                  "type": "BinaryExpression",
                                  "operator": "!=",
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
                                    "name": "max"
                                  }
                                }
                              },
                              "consequent": {
                                "type": "BlockStatement",
                                "body": [
                                  {
                                    "type": "IfStatement",
                                    "test": {
                                      "type": "Identifier",
                                      "name": "i"
                                    },
                                    "consequent": {
                                      "type": "ExpressionStatement",
                                      "expression": {
                                        "type": "AssignmentExpression",
                                        "operator": "=",
                                        "left": {
                                          "type": "Identifier",
                                          "name": "yExtentDomain"
                                        },
                                        "right": {
                                          "type": "Literal",
                                          "value": null,
                                          "raw": "null"
                                        }
                                      }
                                    },
                                    "alternate": {
                                      "type": "ExpressionStatement",
                                      "expression": {
                                        "type": "AssignmentExpression",
                                        "operator": "=",
                                        "left": {
                                          "type": "Identifier",
                                          "name": "xExtentDomain"
                                        },
                                        "right": {
                                          "type": "Literal",
                                          "value": null,
                                          "raw": "null"
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
                                          "value": 0,
                                          "raw": "0"
                                        }
                                      },
                                      "right": {
                                        "type": "Identifier",
                                        "name": "min"
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
                                        "type": "Identifier",
                                        "name": "max"
                                      }
                                    }
                                  },
                                  {
                                    "type": "ReturnStatement",
                                    "argument": {
                                      "type": "Literal",
                                      "value": true,
                                      "raw": "true"
                                    }
                                  }
                                ]
                              },
                              "alternate": null
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
                          "name": "brushend"
                        },
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
                                  "type": "Identifier",
                                  "name": "brushmove"
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
                                            "name": "g"
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "name": "style"
                                          }
                                        },
                                        "arguments": [
                                          {
                                            "type": "Literal",
                                            "value": "pointer-events",
                                            "raw": "\"pointer-events\""
                                          },
                                          {
                                            "type": "Literal",
                                            "value": "all",
                                            "raw": "\"all\""
                                          }
                                        ]
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "name": "selectAll"
                                      }
                                    },
                                    "arguments": [
                                      {
                                        "type": "Literal",
                                        "value": ".resize",
                                        "raw": "\".resize\""
                                      }
                                    ]
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "name": "style"
                                  }
                                },
                                "arguments": [
                                  {
                                    "type": "Literal",
                                    "value": "display",
                                    "raw": "\"display\""
                                  },
                                  {
                                    "type": "ConditionalExpression",
                                    "test": {
                                      "type": "CallExpression",
                                      "callee": {
                                        "type": "MemberExpression",
                                        "computed": false,
                                        "object": {
                                          "type": "Identifier",
                                          "name": "brush"
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "name": "empty"
                                        }
                                      },
                                      "arguments": []
                                    },
                                    "consequent": {
                                      "type": "Literal",
                                      "value": "none",
                                      "raw": "\"none\""
                                    },
                                    "alternate": {
                                      "type": "Literal",
                                      "value": null,
                                      "raw": "null"
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
                                        "name": "select"
                                      }
                                    },
                                    "arguments": [
                                      {
                                        "type": "Literal",
                                        "value": "body",
                                        "raw": "\"body\""
                                      }
                                    ]
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "name": "style"
                                  }
                                },
                                "arguments": [
                                  {
                                    "type": "Literal",
                                    "value": "cursor",
                                    "raw": "\"cursor\""
                                  },
                                  {
                                    "type": "Literal",
                                    "value": null,
                                    "raw": "null"
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
                                                    "type": "CallExpression",
                                                    "callee": {
                                                      "type": "MemberExpression",
                                                      "computed": false,
                                                      "object": {
                                                        "type": "Identifier",
                                                        "name": "w"
                                                      },
                                                      "property": {
                                                        "type": "Identifier",
                                                        "name": "on"
                                                      }
                                                    },
                                                    "arguments": [
                                                      {
                                                        "type": "Literal",
                                                        "value": "mousemove.brush",
                                                        "raw": "\"mousemove.brush\""
                                                      },
                                                      {
                                                        "type": "Literal",
                                                        "value": null,
                                                        "raw": "null"
                                                      }
                                                    ]
                                                  },
                                                  "property": {
                                                    "type": "Identifier",
                                                    "name": "on"
                                                  }
                                                },
                                                "arguments": [
                                                  {
                                                    "type": "Literal",
                                                    "value": "mouseup.brush",
                                                    "raw": "\"mouseup.brush\""
                                                  },
                                                  {
                                                    "type": "Literal",
                                                    "value": null,
                                                    "raw": "null"
                                                  }
                                                ]
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "name": "on"
                                              }
                                            },
                                            "arguments": [
                                              {
                                                "type": "Literal",
                                                "value": "touchmove.brush",
                                                "raw": "\"touchmove.brush\""
                                              },
                                              {
                                                "type": "Literal",
                                                "value": null,
                                                "raw": "null"
                                              }
                                            ]
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "name": "on"
                                          }
                                        },
                                        "arguments": [
                                          {
                                            "type": "Literal",
                                            "value": "touchend.brush",
                                            "raw": "\"touchend.brush\""
                                          },
                                          {
                                            "type": "Literal",
                                            "value": null,
                                            "raw": "null"
                                          }
                                        ]
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "name": "on"
                                      }
                                    },
                                    "arguments": [
                                      {
                                        "type": "Literal",
                                        "value": "keydown.brush",
                                        "raw": "\"keydown.brush\""
                                      },
                                      {
                                        "type": "Literal",
                                        "value": null,
                                        "raw": "null"
                                      }
                                    ]
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "name": "on"
                                  }
                                },
                                "arguments": [
                                  {
                                    "type": "Literal",
                                    "value": "keyup.brush",
                                    "raw": "\"keyup.brush\""
                                  },
                                  {
                                    "type": "Literal",
                                    "value": null,
                                    "raw": "null"
                                  }
                                ]
                              }
                            },
                            {
                              "type": "ExpressionStatement",
                              "expression": {
                                "type": "CallExpression",
                                "callee": {
                                  "type": "Identifier",
                                  "name": "dragRestore"
                                },
                                "arguments": []
                              }
                            },
                            {
                              "type": "ExpressionStatement",
                              "expression": {
                                "type": "CallExpression",
                                "callee": {
                                  "type": "Identifier",
                                  "name": "event_"
                                },
                                "arguments": [
                                  {
                                    "type": "ObjectExpression",
                                    "properties": [
                                      {
                                        "type": "Property",
                                        "key": {
                                          "type": "Identifier",
                                          "name": "type"
                                        },
                                        "value": {
                                          "type": "Literal",
                                          "value": "brushend",
                                          "raw": "\"brushend\""
                                        },
                                        "kind": "init"
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
                        "name": "brush"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "x"
                      }
                    },
                    "right": {
                      "type": "FunctionExpression",
                      "id": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "name": "z"
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
                                "name": "x"
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
                                "name": "x"
                              },
                              "right": {
                                "type": "Identifier",
                                "name": "z"
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
                                "name": "resizes"
                              },
                              "right": {
                                "type": "MemberExpression",
                                "computed": true,
                                "object": {
                                  "type": "Identifier",
                                  "name": "d3_svg_brushResizes"
                                },
                                "property": {
                                  "type": "BinaryExpression",
                                  "operator": "|",
                                  "left": {
                                    "type": "BinaryExpression",
                                    "operator": "<<",
                                    "left": {
                                      "type": "UnaryExpression",
                                      "operator": "!",
                                      "argument": {
                                        "type": "Identifier",
                                        "name": "x"
                                      },
                                      "prefix": true
                                    },
                                    "right": {
                                      "type": "Literal",
                                      "value": 1,
                                      "raw": "1"
                                    }
                                  },
                                  "right": {
                                    "type": "UnaryExpression",
                                    "operator": "!",
                                    "argument": {
                                      "type": "Identifier",
                                      "name": "y"
                                    },
                                    "prefix": true
                                  }
                                }
                              }
                            }
                          },
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "Identifier",
                              "name": "brush"
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
                        "name": "brush"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "y"
                      }
                    },
                    "right": {
                      "type": "FunctionExpression",
                      "id": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "name": "z"
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
                                "name": "y"
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
                                "name": "y"
                              },
                              "right": {
                                "type": "Identifier",
                                "name": "z"
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
                                "name": "resizes"
                              },
                              "right": {
                                "type": "MemberExpression",
                                "computed": true,
                                "object": {
                                  "type": "Identifier",
                                  "name": "d3_svg_brushResizes"
                                },
                                "property": {
                                  "type": "BinaryExpression",
                                  "operator": "|",
                                  "left": {
                                    "type": "BinaryExpression",
                                    "operator": "<<",
                                    "left": {
                                      "type": "UnaryExpression",
                                      "operator": "!",
                                      "argument": {
                                        "type": "Identifier",
                                        "name": "x"
                                      },
                                      "prefix": true
                                    },
                                    "right": {
                                      "type": "Literal",
                                      "value": 1,
                                      "raw": "1"
                                    }
                                  },
                                  "right": {
                                    "type": "UnaryExpression",
                                    "operator": "!",
                                    "argument": {
                                      "type": "Identifier",
                                      "name": "y"
                                    },
                                    "prefix": true
                                  }
                                }
                              }
                            }
                          },
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "Identifier",
                              "name": "brush"
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
                        "name": "brush"
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
                          "name": "z"
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
                                "type": "ConditionalExpression",
                                "test": {
                                  "type": "LogicalExpression",
                                  "operator": "&&",
                                  "left": {
                                    "type": "Identifier",
                                    "name": "x"
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "name": "y"
                                  }
                                },
                                "consequent": {
                                  "type": "ArrayExpression",
                                  "elements": [
                                    {
                                      "type": "Identifier",
                                      "name": "xClamp"
                                    },
                                    {
                                      "type": "Identifier",
                                      "name": "yClamp"
                                    }
                                  ]
                                },
                                "alternate": {
                                  "type": "ConditionalExpression",
                                  "test": {
                                    "type": "Identifier",
                                    "name": "x"
                                  },
                                  "consequent": {
                                    "type": "Identifier",
                                    "name": "xClamp"
                                  },
                                  "alternate": {
                                    "type": "ConditionalExpression",
                                    "test": {
                                      "type": "Identifier",
                                      "name": "y"
                                    },
                                    "consequent": {
                                      "type": "Identifier",
                                      "name": "yClamp"
                                    },
                                    "alternate": {
                                      "type": "Literal",
                                      "value": null,
                                      "raw": "null"
                                    }
                                  }
                                }
                              }
                            },
                            "alternate": null
                          },
                          {
                            "type": "IfStatement",
                            "test": {
                              "type": "LogicalExpression",
                              "operator": "&&",
                              "left": {
                                "type": "Identifier",
                                "name": "x"
                              },
                              "right": {
                                "type": "Identifier",
                                "name": "y"
                              }
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
                                      "name": "xClamp"
                                    },
                                    "right": {
                                      "type": "UnaryExpression",
                                      "operator": "!",
                                      "argument": {
                                        "type": "UnaryExpression",
                                        "operator": "!",
                                        "argument": {
                                          "type": "MemberExpression",
                                          "computed": true,
                                          "object": {
                                            "type": "Identifier",
                                            "name": "z"
                                          },
                                          "property": {
                                            "type": "Literal",
                                            "value": 0,
                                            "raw": "0"
                                          }
                                        },
                                        "prefix": true
                                      },
                                      "prefix": true
                                    }
                                  },
                                  {
                                    "type": "AssignmentExpression",
                                    "operator": "=",
                                    "left": {
                                      "type": "Identifier",
                                      "name": "yClamp"
                                    },
                                    "right": {
                                      "type": "UnaryExpression",
                                      "operator": "!",
                                      "argument": {
                                        "type": "UnaryExpression",
                                        "operator": "!",
                                        "argument": {
                                          "type": "MemberExpression",
                                          "computed": true,
                                          "object": {
                                            "type": "Identifier",
                                            "name": "z"
                                          },
                                          "property": {
                                            "type": "Literal",
                                            "value": 1,
                                            "raw": "1"
                                          }
                                        },
                                        "prefix": true
                                      },
                                      "prefix": true
                                    }
                                  }
                                ]
                              }
                            },
                            "alternate": {
                              "type": "IfStatement",
                              "test": {
                                "type": "Identifier",
                                "name": "x"
                              },
                              "consequent": {
                                "type": "ExpressionStatement",
                                "expression": {
                                  "type": "AssignmentExpression",
                                  "operator": "=",
                                  "left": {
                                    "type": "Identifier",
                                    "name": "xClamp"
                                  },
                                  "right": {
                                    "type": "UnaryExpression",
                                    "operator": "!",
                                    "argument": {
                                      "type": "UnaryExpression",
                                      "operator": "!",
                                      "argument": {
                                        "type": "Identifier",
                                        "name": "z"
                                      },
                                      "prefix": true
                                    },
                                    "prefix": true
                                  }
                                }
                              },
                              "alternate": {
                                "type": "IfStatement",
                                "test": {
                                  "type": "Identifier",
                                  "name": "y"
                                },
                                "consequent": {
                                  "type": "ExpressionStatement",
                                  "expression": {
                                    "type": "AssignmentExpression",
                                    "operator": "=",
                                    "left": {
                                      "type": "Identifier",
                                      "name": "yClamp"
                                    },
                                    "right": {
                                      "type": "UnaryExpression",
                                      "operator": "!",
                                      "argument": {
                                        "type": "UnaryExpression",
                                        "operator": "!",
                                        "argument": {
                                          "type": "Identifier",
                                          "name": "z"
                                        },
                                        "prefix": true
                                      },
                                      "prefix": true
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
                              "type": "Identifier",
                              "name": "brush"
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
                        "name": "brush"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "extent"
                      }
                    },
                    "right": {
                      "type": "FunctionExpression",
                      "id": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "name": "z"
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
                                  "name": "x0"
                                },
                                "init": null
                              },
                              {
                                "type": "VariableDeclarator",
                                "id": {
                                  "type": "Identifier",
                                  "name": "x1"
                                },
                                "init": null
                              },
                              {
                                "type": "VariableDeclarator",
                                "id": {
                                  "type": "Identifier",
                                  "name": "y0"
                                },
                                "init": null
                              },
                              {
                                "type": "VariableDeclarator",
                                "id": {
                                  "type": "Identifier",
                                  "name": "y1"
                                },
                                "init": null
                              },
                              {
                                "type": "VariableDeclarator",
                                "id": {
                                  "type": "Identifier",
                                  "name": "t"
                                },
                                "init": null
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
                              "type": "BlockStatement",
                              "body": [
                                {
                                  "type": "IfStatement",
                                  "test": {
                                    "type": "Identifier",
                                    "name": "x"
                                  },
                                  "consequent": {
                                    "type": "BlockStatement",
                                    "body": [
                                      {
                                        "type": "IfStatement",
                                        "test": {
                                          "type": "Identifier",
                                          "name": "xExtentDomain"
                                        },
                                        "consequent": {
                                          "type": "BlockStatement",
                                          "body": [
                                            {
                                              "type": "ExpressionStatement",
                                              "expression": {
                                                "type": "SequenceExpression",
                                                "expressions": [
                                                  {
                                                    "type": "AssignmentExpression",
                                                    "operator": "=",
                                                    "left": {
                                                      "type": "Identifier",
                                                      "name": "x0"
                                                    },
                                                    "right": {
                                                      "type": "MemberExpression",
                                                      "computed": true,
                                                      "object": {
                                                        "type": "Identifier",
                                                        "name": "xExtentDomain"
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
                                                      "name": "x1"
                                                    },
                                                    "right": {
                                                      "type": "MemberExpression",
                                                      "computed": true,
                                                      "object": {
                                                        "type": "Identifier",
                                                        "name": "xExtentDomain"
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
                                            }
                                          ]
                                        },
                                        "alternate": {
                                          "type": "BlockStatement",
                                          "body": [
                                            {
                                              "type": "ExpressionStatement",
                                              "expression": {
                                                "type": "SequenceExpression",
                                                "expressions": [
                                                  {
                                                    "type": "AssignmentExpression",
                                                    "operator": "=",
                                                    "left": {
                                                      "type": "Identifier",
                                                      "name": "x0"
                                                    },
                                                    "right": {
                                                      "type": "MemberExpression",
                                                      "computed": true,
                                                      "object": {
                                                        "type": "Identifier",
                                                        "name": "xExtent"
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
                                                      "name": "x1"
                                                    },
                                                    "right": {
                                                      "type": "MemberExpression",
                                                      "computed": true,
                                                      "object": {
                                                        "type": "Identifier",
                                                        "name": "xExtent"
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
                                            {
                                              "type": "IfStatement",
                                              "test": {
                                                "type": "MemberExpression",
                                                "computed": false,
                                                "object": {
                                                  "type": "Identifier",
                                                  "name": "x"
                                                },
                                                "property": {
                                                  "type": "Identifier",
                                                  "name": "invert"
                                                }
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
                                                        "name": "x0"
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
                                                            "name": "invert"
                                                          }
                                                        },
                                                        "arguments": [
                                                          {
                                                            "type": "Identifier",
                                                            "name": "x0"
                                                          }
                                                        ]
                                                      }
                                                    },
                                                    {
                                                      "type": "AssignmentExpression",
                                                      "operator": "=",
                                                      "left": {
                                                        "type": "Identifier",
                                                        "name": "x1"
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
                                                            "name": "invert"
                                                          }
                                                        },
                                                        "arguments": [
                                                          {
                                                            "type": "Identifier",
                                                            "name": "x1"
                                                          }
                                                        ]
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
                                                "type": "BinaryExpression",
                                                "operator": "<",
                                                "left": {
                                                  "type": "Identifier",
                                                  "name": "x1"
                                                },
                                                "right": {
                                                  "type": "Identifier",
                                                  "name": "x0"
                                                }
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
                                                        "name": "t"
                                                      },
                                                      "right": {
                                                        "type": "Identifier",
                                                        "name": "x0"
                                                      }
                                                    },
                                                    {
                                                      "type": "AssignmentExpression",
                                                      "operator": "=",
                                                      "left": {
                                                        "type": "Identifier",
                                                        "name": "x0"
                                                      },
                                                      "right": {
                                                        "type": "Identifier",
                                                        "name": "x1"
                                                      }
                                                    },
                                                    {
                                                      "type": "AssignmentExpression",
                                                      "operator": "=",
                                                      "left": {
                                                        "type": "Identifier",
                                                        "name": "x1"
                                                      },
                                                      "right": {
                                                        "type": "Identifier",
                                                        "name": "t"
                                                      }
                                                    }
                                                  ]
                                                }
                                              },
                                              "alternate": null
                                            }
                                          ]
                                        }
                                      }
                                    ]
                                  },
                                  "alternate": null
                                },
                                {
                                  "type": "IfStatement",
                                  "test": {
                                    "type": "Identifier",
                                    "name": "y"
                                  },
                                  "consequent": {
                                    "type": "BlockStatement",
                                    "body": [
                                      {
                                        "type": "IfStatement",
                                        "test": {
                                          "type": "Identifier",
                                          "name": "yExtentDomain"
                                        },
                                        "consequent": {
                                          "type": "BlockStatement",
                                          "body": [
                                            {
                                              "type": "ExpressionStatement",
                                              "expression": {
                                                "type": "SequenceExpression",
                                                "expressions": [
                                                  {
                                                    "type": "AssignmentExpression",
                                                    "operator": "=",
                                                    "left": {
                                                      "type": "Identifier",
                                                      "name": "y0"
                                                    },
                                                    "right": {
                                                      "type": "MemberExpression",
                                                      "computed": true,
                                                      "object": {
                                                        "type": "Identifier",
                                                        "name": "yExtentDomain"
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
                                                      "name": "y1"
                                                    },
                                                    "right": {
                                                      "type": "MemberExpression",
                                                      "computed": true,
                                                      "object": {
                                                        "type": "Identifier",
                                                        "name": "yExtentDomain"
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
                                            }
                                          ]
                                        },
                                        "alternate": {
                                          "type": "BlockStatement",
                                          "body": [
                                            {
                                              "type": "ExpressionStatement",
                                              "expression": {
                                                "type": "SequenceExpression",
                                                "expressions": [
                                                  {
                                                    "type": "AssignmentExpression",
                                                    "operator": "=",
                                                    "left": {
                                                      "type": "Identifier",
                                                      "name": "y0"
                                                    },
                                                    "right": {
                                                      "type": "MemberExpression",
                                                      "computed": true,
                                                      "object": {
                                                        "type": "Identifier",
                                                        "name": "yExtent"
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
                                                      "name": "y1"
                                                    },
                                                    "right": {
                                                      "type": "MemberExpression",
                                                      "computed": true,
                                                      "object": {
                                                        "type": "Identifier",
                                                        "name": "yExtent"
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
                                            {
                                              "type": "IfStatement",
                                              "test": {
                                                "type": "MemberExpression",
                                                "computed": false,
                                                "object": {
                                                  "type": "Identifier",
                                                  "name": "y"
                                                },
                                                "property": {
                                                  "type": "Identifier",
                                                  "name": "invert"
                                                }
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
                                                        "name": "y0"
                                                      },
                                                      "right": {
                                                        "type": "CallExpression",
                                                        "callee": {
                                                          "type": "MemberExpression",
                                                          "computed": false,
                                                          "object": {
                                                            "type": "Identifier",
                                                            "name": "y"
                                                          },
                                                          "property": {
                                                            "type": "Identifier",
                                                            "name": "invert"
                                                          }
                                                        },
                                                        "arguments": [
                                                          {
                                                            "type": "Identifier",
                                                            "name": "y0"
                                                          }
                                                        ]
                                                      }
                                                    },
                                                    {
                                                      "type": "AssignmentExpression",
                                                      "operator": "=",
                                                      "left": {
                                                        "type": "Identifier",
                                                        "name": "y1"
                                                      },
                                                      "right": {
                                                        "type": "CallExpression",
                                                        "callee": {
                                                          "type": "MemberExpression",
                                                          "computed": false,
                                                          "object": {
                                                            "type": "Identifier",
                                                            "name": "y"
                                                          },
                                                          "property": {
                                                            "type": "Identifier",
                                                            "name": "invert"
                                                          }
                                                        },
                                                        "arguments": [
                                                          {
                                                            "type": "Identifier",
                                                            "name": "y1"
                                                          }
                                                        ]
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
                                                "type": "BinaryExpression",
                                                "operator": "<",
                                                "left": {
                                                  "type": "Identifier",
                                                  "name": "y1"
                                                },
                                                "right": {
                                                  "type": "Identifier",
                                                  "name": "y0"
                                                }
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
                                                        "name": "t"
                                                      },
                                                      "right": {
                                                        "type": "Identifier",
                                                        "name": "y0"
                                                      }
                                                    },
                                                    {
                                                      "type": "AssignmentExpression",
                                                      "operator": "=",
                                                      "left": {
                                                        "type": "Identifier",
                                                        "name": "y0"
                                                      },
                                                      "right": {
                                                        "type": "Identifier",
                                                        "name": "y1"
                                                      }
                                                    },
                                                    {
                                                      "type": "AssignmentExpression",
                                                      "operator": "=",
                                                      "left": {
                                                        "type": "Identifier",
                                                        "name": "y1"
                                                      },
                                                      "right": {
                                                        "type": "Identifier",
                                                        "name": "t"
                                                      }
                                                    }
                                                  ]
                                                }
                                              },
                                              "alternate": null
                                            }
                                          ]
                                        }
                                      }
                                    ]
                                  },
                                  "alternate": null
                                },
                                {
                                  "type": "ReturnStatement",
                                  "argument": {
                                    "type": "ConditionalExpression",
                                    "test": {
                                      "type": "LogicalExpression",
                                      "operator": "&&",
                                      "left": {
                                        "type": "Identifier",
                                        "name": "x"
                                      },
                                      "right": {
                                        "type": "Identifier",
                                        "name": "y"
                                      }
                                    },
                                    "consequent": {
                                      "type": "ArrayExpression",
                                      "elements": [
                                        {
                                          "type": "ArrayExpression",
                                          "elements": [
                                            {
                                              "type": "Identifier",
                                              "name": "x0"
                                            },
                                            {
                                              "type": "Identifier",
                                              "name": "y0"
                                            }
                                          ]
                                        },
                                        {
                                          "type": "ArrayExpression",
                                          "elements": [
                                            {
                                              "type": "Identifier",
                                              "name": "x1"
                                            },
                                            {
                                              "type": "Identifier",
                                              "name": "y1"
                                            }
                                          ]
                                        }
                                      ]
                                    },
                                    "alternate": {
                                      "type": "ConditionalExpression",
                                      "test": {
                                        "type": "Identifier",
                                        "name": "x"
                                      },
                                      "consequent": {
                                        "type": "ArrayExpression",
                                        "elements": [
                                          {
                                            "type": "Identifier",
                                            "name": "x0"
                                          },
                                          {
                                            "type": "Identifier",
                                            "name": "x1"
                                          }
                                        ]
                                      },
                                      "alternate": {
                                        "type": "LogicalExpression",
                                        "operator": "&&",
                                        "left": {
                                          "type": "Identifier",
                                          "name": "y"
                                        },
                                        "right": {
                                          "type": "ArrayExpression",
                                          "elements": [
                                            {
                                              "type": "Identifier",
                                              "name": "y0"
                                            },
                                            {
                                              "type": "Identifier",
                                              "name": "y1"
                                            }
                                          ]
                                        }
                                      }
                                    }
                                  }
                                }
                              ]
                            },
                            "alternate": null
                          },
                          {
                            "type": "IfStatement",
                            "test": {
                              "type": "Identifier",
                              "name": "x"
                            },
                            "consequent": {
                              "type": "BlockStatement",
                              "body": [
                                {
                                  "type": "ExpressionStatement",
                                  "expression": {
                                    "type": "SequenceExpression",
                                    "expressions": [
                                      {
                                        "type": "AssignmentExpression",
                                        "operator": "=",
                                        "left": {
                                          "type": "Identifier",
                                          "name": "x0"
                                        },
                                        "right": {
                                          "type": "MemberExpression",
                                          "computed": true,
                                          "object": {
                                            "type": "Identifier",
                                            "name": "z"
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
                                          "name": "x1"
                                        },
                                        "right": {
                                          "type": "MemberExpression",
                                          "computed": true,
                                          "object": {
                                            "type": "Identifier",
                                            "name": "z"
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
                                {
                                  "type": "IfStatement",
                                  "test": {
                                    "type": "Identifier",
                                    "name": "y"
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
                                            "name": "x0"
                                          },
                                          "right": {
                                            "type": "MemberExpression",
                                            "computed": true,
                                            "object": {
                                              "type": "Identifier",
                                              "name": "x0"
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
                                            "name": "x1"
                                          },
                                          "right": {
                                            "type": "MemberExpression",
                                            "computed": true,
                                            "object": {
                                              "type": "Identifier",
                                              "name": "x1"
                                            },
                                            "property": {
                                              "type": "Literal",
                                              "value": 0,
                                              "raw": "0"
                                            }
                                          }
                                        }
                                      ]
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
                                      "name": "xExtentDomain"
                                    },
                                    "right": {
                                      "type": "ArrayExpression",
                                      "elements": [
                                        {
                                          "type": "Identifier",
                                          "name": "x0"
                                        },
                                        {
                                          "type": "Identifier",
                                          "name": "x1"
                                        }
                                      ]
                                    }
                                  }
                                },
                                {
                                  "type": "IfStatement",
                                  "test": {
                                    "type": "MemberExpression",
                                    "computed": false,
                                    "object": {
                                      "type": "Identifier",
                                      "name": "x"
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "name": "invert"
                                    }
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
                                            "name": "x0"
                                          },
                                          "right": {
                                            "type": "CallExpression",
                                            "callee": {
                                              "type": "Identifier",
                                              "name": "x"
                                            },
                                            "arguments": [
                                              {
                                                "type": "Identifier",
                                                "name": "x0"
                                              }
                                            ]
                                          }
                                        },
                                        {
                                          "type": "AssignmentExpression",
                                          "operator": "=",
                                          "left": {
                                            "type": "Identifier",
                                            "name": "x1"
                                          },
                                          "right": {
                                            "type": "CallExpression",
                                            "callee": {
                                              "type": "Identifier",
                                              "name": "x"
                                            },
                                            "arguments": [
                                              {
                                                "type": "Identifier",
                                                "name": "x1"
                                              }
                                            ]
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
                                    "type": "BinaryExpression",
                                    "operator": "<",
                                    "left": {
                                      "type": "Identifier",
                                      "name": "x1"
                                    },
                                    "right": {
                                      "type": "Identifier",
                                      "name": "x0"
                                    }
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
                                            "name": "t"
                                          },
                                          "right": {
                                            "type": "Identifier",
                                            "name": "x0"
                                          }
                                        },
                                        {
                                          "type": "AssignmentExpression",
                                          "operator": "=",
                                          "left": {
                                            "type": "Identifier",
                                            "name": "x0"
                                          },
                                          "right": {
                                            "type": "Identifier",
                                            "name": "x1"
                                          }
                                        },
                                        {
                                          "type": "AssignmentExpression",
                                          "operator": "=",
                                          "left": {
                                            "type": "Identifier",
                                            "name": "x1"
                                          },
                                          "right": {
                                            "type": "Identifier",
                                            "name": "t"
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
                                    "type": "LogicalExpression",
                                    "operator": "||",
                                    "left": {
                                      "type": "BinaryExpression",
                                      "operator": "!=",
                                      "left": {
                                        "type": "Identifier",
                                        "name": "x0"
                                      },
                                      "right": {
                                        "type": "MemberExpression",
                                        "computed": true,
                                        "object": {
                                          "type": "Identifier",
                                          "name": "xExtent"
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
                                      "operator": "!=",
                                      "left": {
                                        "type": "Identifier",
                                        "name": "x1"
                                      },
                                      "right": {
                                        "type": "MemberExpression",
                                        "computed": true,
                                        "object": {
                                          "type": "Identifier",
                                          "name": "xExtent"
                                        },
                                        "property": {
                                          "type": "Literal",
                                          "value": 1,
                                          "raw": "1"
                                        }
                                      }
                                    }
                                  },
                                  "consequent": {
                                    "type": "ExpressionStatement",
                                    "expression": {
                                      "type": "AssignmentExpression",
                                      "operator": "=",
                                      "left": {
                                        "type": "Identifier",
                                        "name": "xExtent"
                                      },
                                      "right": {
                                        "type": "ArrayExpression",
                                        "elements": [
                                          {
                                            "type": "Identifier",
                                            "name": "x0"
                                          },
                                          {
                                            "type": "Identifier",
                                            "name": "x1"
                                          }
                                        ]
                                      }
                                    }
                                  },
                                  "alternate": null
                                }
                              ]
                            },
                            "alternate": null
                          },
                          {
                            "type": "IfStatement",
                            "test": {
                              "type": "Identifier",
                              "name": "y"
                            },
                            "consequent": {
                              "type": "BlockStatement",
                              "body": [
                                {
                                  "type": "ExpressionStatement",
                                  "expression": {
                                    "type": "SequenceExpression",
                                    "expressions": [
                                      {
                                        "type": "AssignmentExpression",
                                        "operator": "=",
                                        "left": {
                                          "type": "Identifier",
                                          "name": "y0"
                                        },
                                        "right": {
                                          "type": "MemberExpression",
                                          "computed": true,
                                          "object": {
                                            "type": "Identifier",
                                            "name": "z"
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
                                          "name": "y1"
                                        },
                                        "right": {
                                          "type": "MemberExpression",
                                          "computed": true,
                                          "object": {
                                            "type": "Identifier",
                                            "name": "z"
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
                                {
                                  "type": "IfStatement",
                                  "test": {
                                    "type": "Identifier",
                                    "name": "x"
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
                                            "name": "y0"
                                          },
                                          "right": {
                                            "type": "MemberExpression",
                                            "computed": true,
                                            "object": {
                                              "type": "Identifier",
                                              "name": "y0"
                                            },
                                            "property": {
                                              "type": "Literal",
                                              "value": 1,
                                              "raw": "1"
                                            }
                                          }
                                        },
                                        {
                                          "type": "AssignmentExpression",
                                          "operator": "=",
                                          "left": {
                                            "type": "Identifier",
                                            "name": "y1"
                                          },
                                          "right": {
                                            "type": "MemberExpression",
                                            "computed": true,
                                            "object": {
                                              "type": "Identifier",
                                              "name": "y1"
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
                                  "type": "ExpressionStatement",
                                  "expression": {
                                    "type": "AssignmentExpression",
                                    "operator": "=",
                                    "left": {
                                      "type": "Identifier",
                                      "name": "yExtentDomain"
                                    },
                                    "right": {
                                      "type": "ArrayExpression",
                                      "elements": [
                                        {
                                          "type": "Identifier",
                                          "name": "y0"
                                        },
                                        {
                                          "type": "Identifier",
                                          "name": "y1"
                                        }
                                      ]
                                    }
                                  }
                                },
                                {
                                  "type": "IfStatement",
                                  "test": {
                                    "type": "MemberExpression",
                                    "computed": false,
                                    "object": {
                                      "type": "Identifier",
                                      "name": "y"
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "name": "invert"
                                    }
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
                                            "name": "y0"
                                          },
                                          "right": {
                                            "type": "CallExpression",
                                            "callee": {
                                              "type": "Identifier",
                                              "name": "y"
                                            },
                                            "arguments": [
                                              {
                                                "type": "Identifier",
                                                "name": "y0"
                                              }
                                            ]
                                          }
                                        },
                                        {
                                          "type": "AssignmentExpression",
                                          "operator": "=",
                                          "left": {
                                            "type": "Identifier",
                                            "name": "y1"
                                          },
                                          "right": {
                                            "type": "CallExpression",
                                            "callee": {
                                              "type": "Identifier",
                                              "name": "y"
                                            },
                                            "arguments": [
                                              {
                                                "type": "Identifier",
                                                "name": "y1"
                                              }
                                            ]
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
                                    "type": "BinaryExpression",
                                    "operator": "<",
                                    "left": {
                                      "type": "Identifier",
                                      "name": "y1"
                                    },
                                    "right": {
                                      "type": "Identifier",
                                      "name": "y0"
                                    }
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
                                            "name": "t"
                                          },
                                          "right": {
                                            "type": "Identifier",
                                            "name": "y0"
                                          }
                                        },
                                        {
                                          "type": "AssignmentExpression",
                                          "operator": "=",
                                          "left": {
                                            "type": "Identifier",
                                            "name": "y0"
                                          },
                                          "right": {
                                            "type": "Identifier",
                                            "name": "y1"
                                          }
                                        },
                                        {
                                          "type": "AssignmentExpression",
                                          "operator": "=",
                                          "left": {
                                            "type": "Identifier",
                                            "name": "y1"
                                          },
                                          "right": {
                                            "type": "Identifier",
                                            "name": "t"
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
                                    "type": "LogicalExpression",
                                    "operator": "||",
                                    "left": {
                                      "type": "BinaryExpression",
                                      "operator": "!=",
                                      "left": {
                                        "type": "Identifier",
                                        "name": "y0"
                                      },
                                      "right": {
                                        "type": "MemberExpression",
                                        "computed": true,
                                        "object": {
                                          "type": "Identifier",
                                          "name": "yExtent"
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
                                      "operator": "!=",
                                      "left": {
                                        "type": "Identifier",
                                        "name": "y1"
                                      },
                                      "right": {
                                        "type": "MemberExpression",
                                        "computed": true,
                                        "object": {
                                          "type": "Identifier",
                                          "name": "yExtent"
                                        },
                                        "property": {
                                          "type": "Literal",
                                          "value": 1,
                                          "raw": "1"
                                        }
                                      }
                                    }
                                  },
                                  "consequent": {
                                    "type": "ExpressionStatement",
                                    "expression": {
                                      "type": "AssignmentExpression",
                                      "operator": "=",
                                      "left": {
                                        "type": "Identifier",
                                        "name": "yExtent"
                                      },
                                      "right": {
                                        "type": "ArrayExpression",
                                        "elements": [
                                          {
                                            "type": "Identifier",
                                            "name": "y0"
                                          },
                                          {
                                            "type": "Identifier",
                                            "name": "y1"
                                          }
                                        ]
                                      }
                                    }
                                  },
                                  "alternate": null
                                }
                              ]
                            },
                            "alternate": null
                          },
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "Identifier",
                              "name": "brush"
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
                        "name": "brush"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "clear"
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
                            "type": "IfStatement",
                            "test": {
                              "type": "UnaryExpression",
                              "operator": "!",
                              "argument": {
                                "type": "CallExpression",
                                "callee": {
                                  "type": "MemberExpression",
                                  "computed": false,
                                  "object": {
                                    "type": "Identifier",
                                    "name": "brush"
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "name": "empty"
                                  }
                                },
                                "arguments": []
                              },
                              "prefix": true
                            },
                            "consequent": {
                              "type": "BlockStatement",
                              "body": [
                                {
                                  "type": "ExpressionStatement",
                                  "expression": {
                                    "type": "SequenceExpression",
                                    "expressions": [
                                      {
                                        "type": "AssignmentExpression",
                                        "operator": "=",
                                        "left": {
                                          "type": "Identifier",
                                          "name": "xExtent"
                                        },
                                        "right": {
                                          "type": "ArrayExpression",
                                          "elements": [
                                            {
                                              "type": "Literal",
                                              "value": 0,
                                              "raw": "0"
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
                                        "type": "AssignmentExpression",
                                        "operator": "=",
                                        "left": {
                                          "type": "Identifier",
                                          "name": "yExtent"
                                        },
                                        "right": {
                                          "type": "ArrayExpression",
                                          "elements": [
                                            {
                                              "type": "Literal",
                                              "value": 0,
                                              "raw": "0"
                                            },
                                            {
                                              "type": "Literal",
                                              "value": 0,
                                              "raw": "0"
                                            }
                                          ]
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
                                      "name": "xExtentDomain"
                                    },
                                    "right": {
                                      "type": "AssignmentExpression",
                                      "operator": "=",
                                      "left": {
                                        "type": "Identifier",
                                        "name": "yExtentDomain"
                                      },
                                      "right": {
                                        "type": "Literal",
                                        "value": null,
                                        "raw": "null"
                                      }
                                    }
                                  }
                                }
                              ]
                            },
                            "alternate": null
                          },
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "Identifier",
                              "name": "brush"
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
                        "name": "brush"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "empty"
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
                              "type": "LogicalExpression",
                              "operator": "||",
                              "left": {
                                "type": "LogicalExpression",
                                "operator": "&&",
                                "left": {
                                  "type": "UnaryExpression",
                                  "operator": "!",
                                  "argument": {
                                    "type": "UnaryExpression",
                                    "operator": "!",
                                    "argument": {
                                      "type": "Identifier",
                                      "name": "x"
                                    },
                                    "prefix": true
                                  },
                                  "prefix": true
                                },
                                "right": {
                                  "type": "BinaryExpression",
                                  "operator": "==",
                                  "left": {
                                    "type": "MemberExpression",
                                    "computed": true,
                                    "object": {
                                      "type": "Identifier",
                                      "name": "xExtent"
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
                                      "name": "xExtent"
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
                                "type": "LogicalExpression",
                                "operator": "&&",
                                "left": {
                                  "type": "UnaryExpression",
                                  "operator": "!",
                                  "argument": {
                                    "type": "UnaryExpression",
                                    "operator": "!",
                                    "argument": {
                                      "type": "Identifier",
                                      "name": "y"
                                    },
                                    "prefix": true
                                  },
                                  "prefix": true
                                },
                                "right": {
                                  "type": "BinaryExpression",
                                  "operator": "==",
                                  "left": {
                                    "type": "MemberExpression",
                                    "computed": true,
                                    "object": {
                                      "type": "Identifier",
                                      "name": "yExtent"
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
                                      "name": "yExtent"
                                    },
                                    "property": {
                                      "type": "Literal",
                                      "value": 1,
                                      "raw": "1"
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
                        "name": "brush"
                      },
                      {
                        "type": "Identifier",
                        "name": "event"
                      },
                      {
                        "type": "Literal",
                        "value": "on",
                        "raw": "\"on\""
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
        "type": "VariableDeclaration",
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "name": "d3_svg_brushCursor"
            },
            "init": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "key": {
                    "type": "Identifier",
                    "name": "n"
                  },
                  "value": {
                    "type": "Literal",
                    "value": "ns-resize",
                    "raw": "\"ns-resize\""
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
                    "value": "ew-resize",
                    "raw": "\"ew-resize\""
                  },
                  "kind": "init"
                },
                {
                  "type": "Property",
                  "key": {
                    "type": "Identifier",
                    "name": "s"
                  },
                  "value": {
                    "type": "Literal",
                    "value": "ns-resize",
                    "raw": "\"ns-resize\""
                  },
                  "kind": "init"
                },
                {
                  "type": "Property",
                  "key": {
                    "type": "Identifier",
                    "name": "w"
                  },
                  "value": {
                    "type": "Literal",
                    "value": "ew-resize",
                    "raw": "\"ew-resize\""
                  },
                  "kind": "init"
                },
                {
                  "type": "Property",
                  "key": {
                    "type": "Identifier",
                    "name": "nw"
                  },
                  "value": {
                    "type": "Literal",
                    "value": "nwse-resize",
                    "raw": "\"nwse-resize\""
                  },
                  "kind": "init"
                },
                {
                  "type": "Property",
                  "key": {
                    "type": "Identifier",
                    "name": "ne"
                  },
                  "value": {
                    "type": "Literal",
                    "value": "nesw-resize",
                    "raw": "\"nesw-resize\""
                  },
                  "kind": "init"
                },
                {
                  "type": "Property",
                  "key": {
                    "type": "Identifier",
                    "name": "se"
                  },
                  "value": {
                    "type": "Literal",
                    "value": "nwse-resize",
                    "raw": "\"nwse-resize\""
                  },
                  "kind": "init"
                },
                {
                  "type": "Property",
                  "key": {
                    "type": "Identifier",
                    "name": "sw"
                  },
                  "value": {
                    "type": "Literal",
                    "value": "nesw-resize",
                    "raw": "\"nesw-resize\""
                  },
                  "kind": "init"
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
              "name": "d3_svg_brushResizes"
            },
            "init": {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "Literal",
                      "value": "n",
                      "raw": "\"n\""
                    },
                    {
                      "type": "Literal",
                      "value": "e",
                      "raw": "\"e\""
                    },
                    {
                      "type": "Literal",
                      "value": "s",
                      "raw": "\"s\""
                    },
                    {
                      "type": "Literal",
                      "value": "w",
                      "raw": "\"w\""
                    },
                    {
                      "type": "Literal",
                      "value": "nw",
                      "raw": "\"nw\""
                    },
                    {
                      "type": "Literal",
                      "value": "ne",
                      "raw": "\"ne\""
                    },
                    {
                      "type": "Literal",
                      "value": "se",
                      "raw": "\"se\""
                    },
                    {
                      "type": "Literal",
                      "value": "sw",
                      "raw": "\"sw\""
                    }
                  ]
                },
                {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "Literal",
                      "value": "e",
                      "raw": "\"e\""
                    },
                    {
                      "type": "Literal",
                      "value": "w",
                      "raw": "\"w\""
                    }
                  ]
                },
                {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "Literal",
                      "value": "n",
                      "raw": "\"n\""
                    },
                    {
                      "type": "Literal",
                      "value": "s",
                      "raw": "\"s\""
                    }
                  ]
                },
                {
                  "type": "ArrayExpression",
                  "elements": []
                }
              ]
            }
          }
        ]
      }
    ]
  }
}