{
  "filepath": "/behavior/zoom.js",
  "shared": [],
  "dependencies": [
    "d3_eventDispatch",
    "d3_transitionInheritId",
    "d3.select",
    "d3.interpolateZoom",
    "d3.event.target",
    "d3_window",
    "d3.mouse",
    "d3_event_dragSuppress",
    "d3_selection_interrupt",
    "d3.event.changedTouches..identifier",
    "d3.touches",
    "d3.event.changedTouches",
    "d3_eventPreventDefault",
    "d3.event.touches.length",
    "d3.selectAll",
    "d3.event.shiftKey",
    "d3.rebind",
    "d3_document",
    "d3.event.deltaY",
    "d3.event.deltaMode",
    "d3.event.wheelDelta",
    "d3.event.detail"
  ],
  "helpers": [
    "d3_behavior_zoomInfinity",
    "d3_behavior_zoomDelta",
    "d3_behavior_zoomWheel"
  ],
  "exports": [
    "d3.behavior.zoom"
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
                "name": "behavior"
              }
            },
            "property": {
              "type": "Identifier",
              "name": "zoom"
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
                        "name": "view"
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
                              "type": "Literal",
                              "value": 0,
                              "raw": "0"
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
                              "type": "Literal",
                              "value": 0,
                              "raw": "0"
                            },
                            "kind": "init"
                          },
                          {
                            "type": "Property",
                            "key": {
                              "type": "Identifier",
                              "name": "k"
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
                    },
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "name": "translate0"
                      },
                      "init": null
                    },
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "name": "center0"
                      },
                      "init": null
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
                        "name": "size"
                      },
                      "init": {
                        "type": "ArrayExpression",
                        "elements": [
                          {
                            "type": "Literal",
                            "value": 960,
                            "raw": "960"
                          },
                          {
                            "type": "Literal",
                            "value": 500,
                            "raw": "500"
                          }
                        ]
                      }
                    },
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "name": "scaleExtent"
                      },
                      "init": {
                        "type": "Identifier",
                        "name": "d3_behavior_zoomInfinity"
                      }
                    },
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "name": "mousedown"
                      },
                      "init": {
                        "type": "Literal",
                        "value": "mousedown.zoom",
                        "raw": "\"mousedown.zoom\""
                      }
                    },
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "name": "mousemove"
                      },
                      "init": {
                        "type": "Literal",
                        "value": "mousemove.zoom",
                        "raw": "\"mousemove.zoom\""
                      }
                    },
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "name": "mouseup"
                      },
                      "init": {
                        "type": "Literal",
                        "value": "mouseup.zoom",
                        "raw": "\"mouseup.zoom\""
                      }
                    },
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "name": "mousewheelTimer"
                      },
                      "init": null
                    },
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "name": "touchstart"
                      },
                      "init": {
                        "type": "Literal",
                        "value": "touchstart.zoom",
                        "raw": "\"touchstart.zoom\""
                      }
                    },
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "name": "touchtime"
                      },
                      "init": null
                    },
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
                            "name": "zoom"
                          },
                          {
                            "type": "Literal",
                            "value": "zoomstart",
                            "raw": "\"zoomstart\""
                          },
                          {
                            "type": "Literal",
                            "value": "zoom",
                            "raw": "\"zoom\""
                          },
                          {
                            "type": "Literal",
                            "value": "zoomend",
                            "raw": "\"zoomend\""
                          }
                        ]
                      }
                    },
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
                    }
                  ],
                  "kind": "var"
                },
                {
                  "type": "FunctionDeclaration",
                  "id": {
                    "type": "Identifier",
                    "name": "zoom"
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
                                          "name": "on"
                                        }
                                      },
                                      "arguments": [
                                        {
                                          "type": "Identifier",
                                          "name": "mousedown"
                                        },
                                        {
                                          "type": "Identifier",
                                          "name": "mousedowned"
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
                                      "type": "BinaryExpression",
                                      "operator": "+",
                                      "left": {
                                        "type": "Identifier",
                                        "name": "d3_behavior_zoomWheel"
                                      },
                                      "right": {
                                        "type": "Literal",
                                        "value": ".zoom",
                                        "raw": "\".zoom\""
                                      }
                                    },
                                    {
                                      "type": "Identifier",
                                      "name": "mousewheeled"
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
                                  "value": "dblclick.zoom",
                                  "raw": "\"dblclick.zoom\""
                                },
                                {
                                  "type": "Identifier",
                                  "name": "dblclicked"
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
                              "type": "Identifier",
                              "name": "touchstart"
                            },
                            {
                              "type": "Identifier",
                              "name": "touchstarted"
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
                        "name": "zoom"
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
                                              "name": "dispatch"
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
                                              "name": "view1"
                                            },
                                            "init": {
                                              "type": "Identifier",
                                              "name": "view"
                                            }
                                          }
                                        ],
                                        "kind": "var"
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
                                                            "value": "start.zoom",
                                                            "raw": "\"start.zoom\""
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
                                                                      "name": "view"
                                                                    },
                                                                    "right": {
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
                                                                        "type": "ObjectExpression",
                                                                        "properties": [
                                                                          {
                                                                            "type": "Property",
                                                                            "key": {
                                                                              "type": "Identifier",
                                                                              "name": "x"
                                                                            },
                                                                            "value": {
                                                                              "type": "Literal",
                                                                              "value": 0,
                                                                              "raw": "0"
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
                                                                              "type": "Literal",
                                                                              "value": 0,
                                                                              "raw": "0"
                                                                            },
                                                                            "kind": "init"
                                                                          },
                                                                          {
                                                                            "type": "Property",
                                                                            "key": {
                                                                              "type": "Identifier",
                                                                              "name": "k"
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
                                                                  }
                                                                },
                                                                {
                                                                  "type": "ExpressionStatement",
                                                                  "expression": {
                                                                    "type": "CallExpression",
                                                                    "callee": {
                                                                      "type": "Identifier",
                                                                      "name": "zoomstarted"
                                                                    },
                                                                    "arguments": [
                                                                      {
                                                                        "type": "Identifier",
                                                                        "name": "dispatch"
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
                                                        "value": "zoom:zoom",
                                                        "raw": "\"zoom:zoom\""
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
                                                                    "name": "dx"
                                                                  },
                                                                  "init": {
                                                                    "type": "MemberExpression",
                                                                    "computed": true,
                                                                    "object": {
                                                                      "type": "Identifier",
                                                                      "name": "size"
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
                                                                    "name": "dy"
                                                                  },
                                                                  "init": {
                                                                    "type": "MemberExpression",
                                                                    "computed": true,
                                                                    "object": {
                                                                      "type": "Identifier",
                                                                      "name": "size"
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
                                                                    "name": "cx"
                                                                  },
                                                                  "init": {
                                                                    "type": "BinaryExpression",
                                                                    "operator": "/",
                                                                    "left": {
                                                                      "type": "Identifier",
                                                                      "name": "dx"
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
                                                                    "name": "cy"
                                                                  },
                                                                  "init": {
                                                                    "type": "BinaryExpression",
                                                                    "operator": "/",
                                                                    "left": {
                                                                      "type": "Identifier",
                                                                      "name": "dy"
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
                                                                        "name": "interpolateZoom"
                                                                      }
                                                                    },
                                                                    "arguments": [
                                                                      {
                                                                        "type": "ArrayExpression",
                                                                        "elements": [
                                                                          {
                                                                            "type": "BinaryExpression",
                                                                            "operator": "/",
                                                                            "left": {
                                                                              "type": "BinaryExpression",
                                                                              "operator": "-",
                                                                              "left": {
                                                                                "type": "Identifier",
                                                                                "name": "cx"
                                                                              },
                                                                              "right": {
                                                                                "type": "MemberExpression",
                                                                                "computed": false,
                                                                                "object": {
                                                                                  "type": "Identifier",
                                                                                  "name": "view"
                                                                                },
                                                                                "property": {
                                                                                  "type": "Identifier",
                                                                                  "name": "x"
                                                                                }
                                                                              }
                                                                            },
                                                                            "right": {
                                                                              "type": "MemberExpression",
                                                                              "computed": false,
                                                                              "object": {
                                                                                "type": "Identifier",
                                                                                "name": "view"
                                                                              },
                                                                              "property": {
                                                                                "type": "Identifier",
                                                                                "name": "k"
                                                                              }
                                                                            }
                                                                          },
                                                                          {
                                                                            "type": "BinaryExpression",
                                                                            "operator": "/",
                                                                            "left": {
                                                                              "type": "BinaryExpression",
                                                                              "operator": "-",
                                                                              "left": {
                                                                                "type": "Identifier",
                                                                                "name": "cy"
                                                                              },
                                                                              "right": {
                                                                                "type": "MemberExpression",
                                                                                "computed": false,
                                                                                "object": {
                                                                                  "type": "Identifier",
                                                                                  "name": "view"
                                                                                },
                                                                                "property": {
                                                                                  "type": "Identifier",
                                                                                  "name": "y"
                                                                                }
                                                                              }
                                                                            },
                                                                            "right": {
                                                                              "type": "MemberExpression",
                                                                              "computed": false,
                                                                              "object": {
                                                                                "type": "Identifier",
                                                                                "name": "view"
                                                                              },
                                                                              "property": {
                                                                                "type": "Identifier",
                                                                                "name": "k"
                                                                              }
                                                                            }
                                                                          },
                                                                          {
                                                                            "type": "BinaryExpression",
                                                                            "operator": "/",
                                                                            "left": {
                                                                              "type": "Identifier",
                                                                              "name": "dx"
                                                                            },
                                                                            "right": {
                                                                              "type": "MemberExpression",
                                                                              "computed": false,
                                                                              "object": {
                                                                                "type": "Identifier",
                                                                                "name": "view"
                                                                              },
                                                                              "property": {
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
                                                                            "operator": "/",
                                                                            "left": {
                                                                              "type": "BinaryExpression",
                                                                              "operator": "-",
                                                                              "left": {
                                                                                "type": "Identifier",
                                                                                "name": "cx"
                                                                              },
                                                                              "right": {
                                                                                "type": "MemberExpression",
                                                                                "computed": false,
                                                                                "object": {
                                                                                  "type": "Identifier",
                                                                                  "name": "view1"
                                                                                },
                                                                                "property": {
                                                                                  "type": "Identifier",
                                                                                  "name": "x"
                                                                                }
                                                                              }
                                                                            },
                                                                            "right": {
                                                                              "type": "MemberExpression",
                                                                              "computed": false,
                                                                              "object": {
                                                                                "type": "Identifier",
                                                                                "name": "view1"
                                                                              },
                                                                              "property": {
                                                                                "type": "Identifier",
                                                                                "name": "k"
                                                                              }
                                                                            }
                                                                          },
                                                                          {
                                                                            "type": "BinaryExpression",
                                                                            "operator": "/",
                                                                            "left": {
                                                                              "type": "BinaryExpression",
                                                                              "operator": "-",
                                                                              "left": {
                                                                                "type": "Identifier",
                                                                                "name": "cy"
                                                                              },
                                                                              "right": {
                                                                                "type": "MemberExpression",
                                                                                "computed": false,
                                                                                "object": {
                                                                                  "type": "Identifier",
                                                                                  "name": "view1"
                                                                                },
                                                                                "property": {
                                                                                  "type": "Identifier",
                                                                                  "name": "y"
                                                                                }
                                                                              }
                                                                            },
                                                                            "right": {
                                                                              "type": "MemberExpression",
                                                                              "computed": false,
                                                                              "object": {
                                                                                "type": "Identifier",
                                                                                "name": "view1"
                                                                              },
                                                                              "property": {
                                                                                "type": "Identifier",
                                                                                "name": "k"
                                                                              }
                                                                            }
                                                                          },
                                                                          {
                                                                            "type": "BinaryExpression",
                                                                            "operator": "/",
                                                                            "left": {
                                                                              "type": "Identifier",
                                                                              "name": "dx"
                                                                            },
                                                                            "right": {
                                                                              "type": "MemberExpression",
                                                                              "computed": false,
                                                                              "object": {
                                                                                "type": "Identifier",
                                                                                "name": "view1"
                                                                              },
                                                                              "property": {
                                                                                "type": "Identifier",
                                                                                "name": "k"
                                                                              }
                                                                            }
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
                                                                      "type": "VariableDeclaration",
                                                                      "declarations": [
                                                                        {
                                                                          "type": "VariableDeclarator",
                                                                          "id": {
                                                                            "type": "Identifier",
                                                                            "name": "l"
                                                                          },
                                                                          "init": {
                                                                            "type": "CallExpression",
                                                                            "callee": {
                                                                              "type": "Identifier",
                                                                              "name": "i"
                                                                            },
                                                                            "arguments": [
                                                                              {
                                                                                "type": "Identifier",
                                                                                "name": "t"
                                                                              }
                                                                            ]
                                                                          }
                                                                        },
                                                                        {
                                                                          "type": "VariableDeclarator",
                                                                          "id": {
                                                                            "type": "Identifier",
                                                                            "name": "k"
                                                                          },
                                                                          "init": {
                                                                            "type": "BinaryExpression",
                                                                            "operator": "/",
                                                                            "left": {
                                                                              "type": "Identifier",
                                                                              "name": "dx"
                                                                            },
                                                                            "right": {
                                                                              "type": "MemberExpression",
                                                                              "computed": true,
                                                                              "object": {
                                                                                "type": "Identifier",
                                                                                "name": "l"
                                                                              },
                                                                              "property": {
                                                                                "type": "Literal",
                                                                                "value": 2,
                                                                                "raw": "2"
                                                                              }
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
                                                                          "type": "AssignmentExpression",
                                                                          "operator": "=",
                                                                          "left": {
                                                                            "type": "Identifier",
                                                                            "name": "view"
                                                                          },
                                                                          "right": {
                                                                            "type": "ObjectExpression",
                                                                            "properties": [
                                                                              {
                                                                                "type": "Property",
                                                                                "key": {
                                                                                  "type": "Identifier",
                                                                                  "name": "x"
                                                                                },
                                                                                "value": {
                                                                                  "type": "BinaryExpression",
                                                                                  "operator": "-",
                                                                                  "left": {
                                                                                    "type": "Identifier",
                                                                                    "name": "cx"
                                                                                  },
                                                                                  "right": {
                                                                                    "type": "BinaryExpression",
                                                                                    "operator": "*",
                                                                                    "left": {
                                                                                      "type": "MemberExpression",
                                                                                      "computed": true,
                                                                                      "object": {
                                                                                        "type": "Identifier",
                                                                                        "name": "l"
                                                                                      },
                                                                                      "property": {
                                                                                        "type": "Literal",
                                                                                        "value": 0,
                                                                                        "raw": "0"
                                                                                      }
                                                                                    },
                                                                                    "right": {
                                                                                      "type": "Identifier",
                                                                                      "name": "k"
                                                                                    }
                                                                                  }
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
                                                                                  "type": "BinaryExpression",
                                                                                  "operator": "-",
                                                                                  "left": {
                                                                                    "type": "Identifier",
                                                                                    "name": "cy"
                                                                                  },
                                                                                  "right": {
                                                                                    "type": "BinaryExpression",
                                                                                    "operator": "*",
                                                                                    "left": {
                                                                                      "type": "MemberExpression",
                                                                                      "computed": true,
                                                                                      "object": {
                                                                                        "type": "Identifier",
                                                                                        "name": "l"
                                                                                      },
                                                                                      "property": {
                                                                                        "type": "Literal",
                                                                                        "value": 1,
                                                                                        "raw": "1"
                                                                                      }
                                                                                    },
                                                                                    "right": {
                                                                                      "type": "Identifier",
                                                                                      "name": "k"
                                                                                    }
                                                                                  }
                                                                                },
                                                                                "kind": "init"
                                                                              },
                                                                              {
                                                                                "type": "Property",
                                                                                "key": {
                                                                                  "type": "Identifier",
                                                                                  "name": "k"
                                                                                },
                                                                                "value": {
                                                                                  "type": "Identifier",
                                                                                  "name": "k"
                                                                                },
                                                                                "kind": "init"
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
                                                                          "name": "zoomed"
                                                                        },
                                                                        "arguments": [
                                                                          {
                                                                            "type": "Identifier",
                                                                            "name": "dispatch"
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
                                                    "value": "end.zoom",
                                                    "raw": "\"end.zoom\""
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
                                                            "type": "CallExpression",
                                                            "callee": {
                                                              "type": "Identifier",
                                                              "name": "zoomended"
                                                            },
                                                            "arguments": [
                                                              {
                                                                "type": "Identifier",
                                                                "name": "dispatch"
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
                                                  "name": "view"
                                                }
                                              }
                                            },
                                            {
                                              "type": "ExpressionStatement",
                                              "expression": {
                                                "type": "CallExpression",
                                                "callee": {
                                                  "type": "Identifier",
                                                  "name": "zoomstarted"
                                                },
                                                "arguments": [
                                                  {
                                                    "type": "Identifier",
                                                    "name": "dispatch"
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
                                                  "name": "zoomed"
                                                },
                                                "arguments": [
                                                  {
                                                    "type": "Identifier",
                                                    "name": "dispatch"
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
                                                  "name": "zoomended"
                                                },
                                                "arguments": [
                                                  {
                                                    "type": "Identifier",
                                                    "name": "dispatch"
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
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "name": "zoom"
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
                                "type": "ArrayExpression",
                                "elements": [
                                  {
                                    "type": "MemberExpression",
                                    "computed": false,
                                    "object": {
                                      "type": "Identifier",
                                      "name": "view"
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "name": "x"
                                    }
                                  },
                                  {
                                    "type": "MemberExpression",
                                    "computed": false,
                                    "object": {
                                      "type": "Identifier",
                                      "name": "view"
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "name": "y"
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
                                "name": "view"
                              },
                              "right": {
                                "type": "ObjectExpression",
                                "properties": [
                                  {
                                    "type": "Property",
                                    "key": {
                                      "type": "Identifier",
                                      "name": "x"
                                    },
                                    "value": {
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
                                    },
                                    "kind": "init"
                                  },
                                  {
                                    "type": "Property",
                                    "key": {
                                      "type": "Identifier",
                                      "name": "k"
                                    },
                                    "value": {
                                      "type": "MemberExpression",
                                      "computed": false,
                                      "object": {
                                        "type": "Identifier",
                                        "name": "view"
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "name": "k"
                                      }
                                    },
                                    "kind": "init"
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
                                "type": "Identifier",
                                "name": "rescale"
                              },
                              "arguments": []
                            }
                          },
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "Identifier",
                              "name": "zoom"
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
                        "name": "zoom"
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
                                "type": "MemberExpression",
                                "computed": false,
                                "object": {
                                  "type": "Identifier",
                                  "name": "view"
                                },
                                "property": {
                                  "type": "Identifier",
                                  "name": "k"
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
                                "name": "view"
                              },
                              "right": {
                                "type": "ObjectExpression",
                                "properties": [
                                  {
                                    "type": "Property",
                                    "key": {
                                      "type": "Identifier",
                                      "name": "x"
                                    },
                                    "value": {
                                      "type": "MemberExpression",
                                      "computed": false,
                                      "object": {
                                        "type": "Identifier",
                                        "name": "view"
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "name": "x"
                                      }
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
                                      "type": "MemberExpression",
                                      "computed": false,
                                      "object": {
                                        "type": "Identifier",
                                        "name": "view"
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "name": "y"
                                      }
                                    },
                                    "kind": "init"
                                  },
                                  {
                                    "type": "Property",
                                    "key": {
                                      "type": "Identifier",
                                      "name": "k"
                                    },
                                    "value": {
                                      "type": "UnaryExpression",
                                      "operator": "+",
                                      "argument": {
                                        "type": "Identifier",
                                        "name": "_"
                                      },
                                      "prefix": true
                                    },
                                    "kind": "init"
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
                                "type": "Identifier",
                                "name": "rescale"
                              },
                              "arguments": []
                            }
                          },
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "Identifier",
                              "name": "zoom"
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
                        "name": "zoom"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "scaleExtent"
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
                                "type": "Identifier",
                                "name": "scaleExtent"
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
                                "name": "scaleExtent"
                              },
                              "right": {
                                "type": "ConditionalExpression",
                                "test": {
                                  "type": "BinaryExpression",
                                  "operator": "==",
                                  "left": {
                                    "type": "Identifier",
                                    "name": "_"
                                  },
                                  "right": {
                                    "type": "Literal",
                                    "value": null,
                                    "raw": "null"
                                  }
                                },
                                "consequent": {
                                  "type": "Identifier",
                                  "name": "d3_behavior_zoomInfinity"
                                },
                                "alternate": {
                                  "type": "ArrayExpression",
                                  "elements": [
                                    {
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
                                    },
                                    {
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
                                  ]
                                }
                              }
                            }
                          },
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "Identifier",
                              "name": "zoom"
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
                        "name": "zoom"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "center"
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
                                "type": "Identifier",
                                "name": "center"
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
                                "name": "center"
                              },
                              "right": {
                                "type": "LogicalExpression",
                                "operator": "&&",
                                "left": {
                                  "type": "Identifier",
                                  "name": "_"
                                },
                                "right": {
                                  "type": "ArrayExpression",
                                  "elements": [
                                    {
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
                                    },
                                    {
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
                                  ]
                                }
                              }
                            }
                          },
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "Identifier",
                              "name": "zoom"
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
                        "name": "zoom"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "size"
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
                                "type": "Identifier",
                                "name": "size"
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
                                "name": "size"
                              },
                              "right": {
                                "type": "LogicalExpression",
                                "operator": "&&",
                                "left": {
                                  "type": "Identifier",
                                  "name": "_"
                                },
                                "right": {
                                  "type": "ArrayExpression",
                                  "elements": [
                                    {
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
                                    },
                                    {
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
                                  ]
                                }
                              }
                            }
                          },
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "Identifier",
                              "name": "zoom"
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
                        "name": "zoom"
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
                                "name": "x1"
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
                                "name": "x1"
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
                                "name": "x0"
                              },
                              "right": {
                                "type": "CallExpression",
                                "callee": {
                                  "type": "MemberExpression",
                                  "computed": false,
                                  "object": {
                                    "type": "Identifier",
                                    "name": "z"
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "name": "copy"
                                  }
                                },
                                "arguments": []
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
                                "name": "view"
                              },
                              "right": {
                                "type": "ObjectExpression",
                                "properties": [
                                  {
                                    "type": "Property",
                                    "key": {
                                      "type": "Identifier",
                                      "name": "x"
                                    },
                                    "value": {
                                      "type": "Literal",
                                      "value": 0,
                                      "raw": "0"
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
                                      "type": "Literal",
                                      "value": 0,
                                      "raw": "0"
                                    },
                                    "kind": "init"
                                  },
                                  {
                                    "type": "Property",
                                    "key": {
                                      "type": "Identifier",
                                      "name": "k"
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
                          },
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "Identifier",
                              "name": "zoom"
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
                        "name": "zoom"
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
                                "name": "y1"
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
                                "name": "y1"
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
                                "name": "y0"
                              },
                              "right": {
                                "type": "CallExpression",
                                "callee": {
                                  "type": "MemberExpression",
                                  "computed": false,
                                  "object": {
                                    "type": "Identifier",
                                    "name": "z"
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "name": "copy"
                                  }
                                },
                                "arguments": []
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
                                "name": "view"
                              },
                              "right": {
                                "type": "ObjectExpression",
                                "properties": [
                                  {
                                    "type": "Property",
                                    "key": {
                                      "type": "Identifier",
                                      "name": "x"
                                    },
                                    "value": {
                                      "type": "Literal",
                                      "value": 0,
                                      "raw": "0"
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
                                      "type": "Literal",
                                      "value": 0,
                                      "raw": "0"
                                    },
                                    "kind": "init"
                                  },
                                  {
                                    "type": "Property",
                                    "key": {
                                      "type": "Identifier",
                                      "name": "k"
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
                          },
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "Identifier",
                              "name": "zoom"
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
                    "name": "location"
                  },
                  "params": [
                    {
                      "type": "Identifier",
                      "name": "p"
                    }
                  ],
                  "defaults": [],
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "ArrayExpression",
                          "elements": [
                            {
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
                                    "name": "p"
                                  },
                                  "property": {
                                    "type": "Literal",
                                    "value": 0,
                                    "raw": "0"
                                  }
                                },
                                "right": {
                                  "type": "MemberExpression",
                                  "computed": false,
                                  "object": {
                                    "type": "Identifier",
                                    "name": "view"
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "name": "x"
                                  }
                                }
                              },
                              "right": {
                                "type": "MemberExpression",
                                "computed": false,
                                "object": {
                                  "type": "Identifier",
                                  "name": "view"
                                },
                                "property": {
                                  "type": "Identifier",
                                  "name": "k"
                                }
                              }
                            },
                            {
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
                                    "name": "p"
                                  },
                                  "property": {
                                    "type": "Literal",
                                    "value": 1,
                                    "raw": "1"
                                  }
                                },
                                "right": {
                                  "type": "MemberExpression",
                                  "computed": false,
                                  "object": {
                                    "type": "Identifier",
                                    "name": "view"
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "name": "y"
                                  }
                                }
                              },
                              "right": {
                                "type": "MemberExpression",
                                "computed": false,
                                "object": {
                                  "type": "Identifier",
                                  "name": "view"
                                },
                                "property": {
                                  "type": "Identifier",
                                  "name": "k"
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
                    "name": "point"
                  },
                  "params": [
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
                          "type": "ArrayExpression",
                          "elements": [
                            {
                              "type": "BinaryExpression",
                              "operator": "+",
                              "left": {
                                "type": "BinaryExpression",
                                "operator": "*",
                                "left": {
                                  "type": "MemberExpression",
                                  "computed": true,
                                  "object": {
                                    "type": "Identifier",
                                    "name": "l"
                                  },
                                  "property": {
                                    "type": "Literal",
                                    "value": 0,
                                    "raw": "0"
                                  }
                                },
                                "right": {
                                  "type": "MemberExpression",
                                  "computed": false,
                                  "object": {
                                    "type": "Identifier",
                                    "name": "view"
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "name": "k"
                                  }
                                }
                              },
                              "right": {
                                "type": "MemberExpression",
                                "computed": false,
                                "object": {
                                  "type": "Identifier",
                                  "name": "view"
                                },
                                "property": {
                                  "type": "Identifier",
                                  "name": "x"
                                }
                              }
                            },
                            {
                              "type": "BinaryExpression",
                              "operator": "+",
                              "left": {
                                "type": "BinaryExpression",
                                "operator": "*",
                                "left": {
                                  "type": "MemberExpression",
                                  "computed": true,
                                  "object": {
                                    "type": "Identifier",
                                    "name": "l"
                                  },
                                  "property": {
                                    "type": "Literal",
                                    "value": 1,
                                    "raw": "1"
                                  }
                                },
                                "right": {
                                  "type": "MemberExpression",
                                  "computed": false,
                                  "object": {
                                    "type": "Identifier",
                                    "name": "view"
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "name": "k"
                                  }
                                }
                              },
                              "right": {
                                "type": "MemberExpression",
                                "computed": false,
                                "object": {
                                  "type": "Identifier",
                                  "name": "view"
                                },
                                "property": {
                                  "type": "Identifier",
                                  "name": "y"
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
                    "name": "scaleTo"
                  },
                  "params": [
                    {
                      "type": "Identifier",
                      "name": "s"
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
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "name": "view"
                            },
                            "property": {
                              "type": "Identifier",
                              "name": "k"
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
                                "name": "max"
                              }
                            },
                            "arguments": [
                              {
                                "type": "MemberExpression",
                                "computed": true,
                                "object": {
                                  "type": "Identifier",
                                  "name": "scaleExtent"
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
                                    "computed": true,
                                    "object": {
                                      "type": "Identifier",
                                      "name": "scaleExtent"
                                    },
                                    "property": {
                                      "type": "Literal",
                                      "value": 1,
                                      "raw": "1"
                                    }
                                  },
                                  {
                                    "type": "Identifier",
                                    "name": "s"
                                  }
                                ]
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
                {
                  "type": "FunctionDeclaration",
                  "id": {
                    "type": "Identifier",
                    "name": "translateTo"
                  },
                  "params": [
                    {
                      "type": "Identifier",
                      "name": "p"
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
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "AssignmentExpression",
                          "operator": "=",
                          "left": {
                            "type": "Identifier",
                            "name": "l"
                          },
                          "right": {
                            "type": "CallExpression",
                            "callee": {
                              "type": "Identifier",
                              "name": "point"
                            },
                            "arguments": [
                              {
                                "type": "Identifier",
                                "name": "l"
                              }
                            ]
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
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "name": "view"
                            },
                            "property": {
                              "type": "Identifier",
                              "name": "x"
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
                                "name": "p"
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
                                "name": "l"
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
                          "operator": "+=",
                          "left": {
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "name": "view"
                            },
                            "property": {
                              "type": "Identifier",
                              "name": "y"
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
                                "name": "p"
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
                                "name": "l"
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
                  "rest": null,
                  "generator": false,
                  "expression": false
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
                        "type": "IfStatement",
                        "test": {
                          "type": "Identifier",
                          "name": "x1"
                        },
                        "consequent": {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "CallExpression",
                            "callee": {
                              "type": "MemberExpression",
                              "computed": false,
                              "object": {
                                "type": "Identifier",
                                "name": "x1"
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
                                            "name": "x0"
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "name": "range"
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
                                                "type": "BinaryExpression",
                                                "operator": "/",
                                                "left": {
                                                  "type": "BinaryExpression",
                                                  "operator": "-",
                                                  "left": {
                                                    "type": "Identifier",
                                                    "name": "x"
                                                  },
                                                  "right": {
                                                    "type": "MemberExpression",
                                                    "computed": false,
                                                    "object": {
                                                      "type": "Identifier",
                                                      "name": "view"
                                                    },
                                                    "property": {
                                                      "type": "Identifier",
                                                      "name": "x"
                                                    }
                                                  }
                                                },
                                                "right": {
                                                  "type": "MemberExpression",
                                                  "computed": false,
                                                  "object": {
                                                    "type": "Identifier",
                                                    "name": "view"
                                                  },
                                                  "property": {
                                                    "type": "Identifier",
                                                    "name": "k"
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
                                  "property": {
                                    "type": "Identifier",
                                    "name": "map"
                                  }
                                },
                                "arguments": [
                                  {
                                    "type": "MemberExpression",
                                    "computed": false,
                                    "object": {
                                      "type": "Identifier",
                                      "name": "x0"
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "name": "invert"
                                    }
                                  }
                                ]
                              }
                            ]
                          }
                        },
                        "alternate": null
                      },
                      {
                        "type": "IfStatement",
                        "test": {
                          "type": "Identifier",
                          "name": "y1"
                        },
                        "consequent": {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "CallExpression",
                            "callee": {
                              "type": "MemberExpression",
                              "computed": false,
                              "object": {
                                "type": "Identifier",
                                "name": "y1"
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
                                            "name": "y0"
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "name": "range"
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
                                                "type": "BinaryExpression",
                                                "operator": "/",
                                                "left": {
                                                  "type": "BinaryExpression",
                                                  "operator": "-",
                                                  "left": {
                                                    "type": "Identifier",
                                                    "name": "y"
                                                  },
                                                  "right": {
                                                    "type": "MemberExpression",
                                                    "computed": false,
                                                    "object": {
                                                      "type": "Identifier",
                                                      "name": "view"
                                                    },
                                                    "property": {
                                                      "type": "Identifier",
                                                      "name": "y"
                                                    }
                                                  }
                                                },
                                                "right": {
                                                  "type": "MemberExpression",
                                                  "computed": false,
                                                  "object": {
                                                    "type": "Identifier",
                                                    "name": "view"
                                                  },
                                                  "property": {
                                                    "type": "Identifier",
                                                    "name": "k"
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
                                  "property": {
                                    "type": "Identifier",
                                    "name": "map"
                                  }
                                },
                                "arguments": [
                                  {
                                    "type": "MemberExpression",
                                    "computed": false,
                                    "object": {
                                      "type": "Identifier",
                                      "name": "y0"
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "name": "invert"
                                    }
                                  }
                                ]
                              }
                            ]
                          }
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
                    "name": "zoomstarted"
                  },
                  "params": [
                    {
                      "type": "Identifier",
                      "name": "dispatch"
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
                            "name": "dispatch"
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
                                    "value": "zoomstart",
                                    "raw": "\"zoomstart\""
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
                },
                {
                  "type": "FunctionDeclaration",
                  "id": {
                    "type": "Identifier",
                    "name": "zoomed"
                  },
                  "params": [
                    {
                      "type": "Identifier",
                      "name": "dispatch"
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
                            "name": "rescale"
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
                            "name": "dispatch"
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
                                    "value": "zoom",
                                    "raw": "\"zoom\""
                                  },
                                  "kind": "init"
                                },
                                {
                                  "type": "Property",
                                  "key": {
                                    "type": "Identifier",
                                    "name": "scale"
                                  },
                                  "value": {
                                    "type": "MemberExpression",
                                    "computed": false,
                                    "object": {
                                      "type": "Identifier",
                                      "name": "view"
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "name": "k"
                                    }
                                  },
                                  "kind": "init"
                                },
                                {
                                  "type": "Property",
                                  "key": {
                                    "type": "Identifier",
                                    "name": "translate"
                                  },
                                  "value": {
                                    "type": "ArrayExpression",
                                    "elements": [
                                      {
                                        "type": "MemberExpression",
                                        "computed": false,
                                        "object": {
                                          "type": "Identifier",
                                          "name": "view"
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "name": "x"
                                        }
                                      },
                                      {
                                        "type": "MemberExpression",
                                        "computed": false,
                                        "object": {
                                          "type": "Identifier",
                                          "name": "view"
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "name": "y"
                                        }
                                      }
                                    ]
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
                },
                {
                  "type": "FunctionDeclaration",
                  "id": {
                    "type": "Identifier",
                    "name": "zoomended"
                  },
                  "params": [
                    {
                      "type": "Identifier",
                      "name": "dispatch"
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
                            "name": "dispatch"
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
                                    "value": "zoomend",
                                    "raw": "\"zoomend\""
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
                },
                {
                  "type": "FunctionDeclaration",
                  "id": {
                    "type": "Identifier",
                    "name": "mousedowned"
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
                              "name": "that"
                            },
                            "init": {
                              "type": "ThisExpression"
                            }
                          },
                          {
                            "type": "VariableDeclarator",
                            "id": {
                              "type": "Identifier",
                              "name": "target"
                            },
                            "init": {
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
                          },
                          {
                            "type": "VariableDeclarator",
                            "id": {
                              "type": "Identifier",
                              "name": "dispatch"
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
                                  "name": "that"
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
                              "name": "dragged"
                            },
                            "init": {
                              "type": "Literal",
                              "value": 0,
                              "raw": "0"
                            }
                          },
                          {
                            "type": "VariableDeclarator",
                            "id": {
                              "type": "Identifier",
                              "name": "subject"
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
                                      "type": "Identifier",
                                      "name": "mousemove"
                                    },
                                    {
                                      "type": "Identifier",
                                      "name": "moved"
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
                                  "type": "Identifier",
                                  "name": "mouseup"
                                },
                                {
                                  "type": "Identifier",
                                  "name": "ended"
                                }
                              ]
                            }
                          },
                          {
                            "type": "VariableDeclarator",
                            "id": {
                              "type": "Identifier",
                              "name": "location0"
                            },
                            "init": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "Identifier",
                                "name": "location"
                              },
                              "arguments": [
                                {
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
                                      "name": "that"
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
                              "name": "d3_selection_interrupt"
                            },
                            "property": {
                              "type": "Identifier",
                              "name": "call"
                            }
                          },
                          "arguments": [
                            {
                              "type": "Identifier",
                              "name": "that"
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
                            "name": "zoomstarted"
                          },
                          "arguments": [
                            {
                              "type": "Identifier",
                              "name": "dispatch"
                            }
                          ]
                        }
                      },
                      {
                        "type": "FunctionDeclaration",
                        "id": {
                          "type": "Identifier",
                          "name": "moved"
                        },
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
                                  "name": "dragged"
                                },
                                "right": {
                                  "type": "Literal",
                                  "value": 1,
                                  "raw": "1"
                                }
                              }
                            },
                            {
                              "type": "ExpressionStatement",
                              "expression": {
                                "type": "CallExpression",
                                "callee": {
                                  "type": "Identifier",
                                  "name": "translateTo"
                                },
                                "arguments": [
                                  {
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
                                        "name": "that"
                                      }
                                    ]
                                  },
                                  {
                                    "type": "Identifier",
                                    "name": "location0"
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
                                  "name": "zoomed"
                                },
                                "arguments": [
                                  {
                                    "type": "Identifier",
                                    "name": "dispatch"
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
                          "name": "ended"
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
                                  "type": "MemberExpression",
                                  "computed": false,
                                  "object": {
                                    "type": "CallExpression",
                                    "callee": {
                                      "type": "MemberExpression",
                                      "computed": false,
                                      "object": {
                                        "type": "Identifier",
                                        "name": "subject"
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "name": "on"
                                      }
                                    },
                                    "arguments": [
                                      {
                                        "type": "Identifier",
                                        "name": "mousemove"
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
                                    "type": "Identifier",
                                    "name": "mouseup"
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
                                "arguments": [
                                  {
                                    "type": "LogicalExpression",
                                    "operator": "&&",
                                    "left": {
                                      "type": "Identifier",
                                      "name": "dragged"
                                    },
                                    "right": {
                                      "type": "BinaryExpression",
                                      "operator": "===",
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
                                          "name": "target"
                                        }
                                      },
                                      "right": {
                                        "type": "Identifier",
                                        "name": "target"
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
                                  "name": "zoomended"
                                },
                                "arguments": [
                                  {
                                    "type": "Identifier",
                                    "name": "dispatch"
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
                  "type": "FunctionDeclaration",
                  "id": {
                    "type": "Identifier",
                    "name": "touchstarted"
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
                              "name": "that"
                            },
                            "init": {
                              "type": "ThisExpression"
                            }
                          },
                          {
                            "type": "VariableDeclarator",
                            "id": {
                              "type": "Identifier",
                              "name": "dispatch"
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
                                  "name": "that"
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
                              "name": "locations0"
                            },
                            "init": {
                              "type": "ObjectExpression",
                              "properties": []
                            }
                          },
                          {
                            "type": "VariableDeclarator",
                            "id": {
                              "type": "Identifier",
                              "name": "distance0"
                            },
                            "init": {
                              "type": "Literal",
                              "value": 0,
                              "raw": "0"
                            }
                          },
                          {
                            "type": "VariableDeclarator",
                            "id": {
                              "type": "Identifier",
                              "name": "scale0"
                            },
                            "init": null
                          },
                          {
                            "type": "VariableDeclarator",
                            "id": {
                              "type": "Identifier",
                              "name": "zoomName"
                            },
                            "init": {
                              "type": "BinaryExpression",
                              "operator": "+",
                              "left": {
                                "type": "Literal",
                                "value": ".zoom-",
                                "raw": "\".zoom-\""
                              },
                              "right": {
                                "type": "MemberExpression",
                                "computed": false,
                                "object": {
                                  "type": "MemberExpression",
                                  "computed": true,
                                  "object": {
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
                                  "property": {
                                    "type": "Literal",
                                    "value": 0,
                                    "raw": "0"
                                  }
                                },
                                "property": {
                                  "type": "Identifier",
                                  "name": "identifier"
                                }
                              }
                            }
                          },
                          {
                            "type": "VariableDeclarator",
                            "id": {
                              "type": "Identifier",
                              "name": "touchmove"
                            },
                            "init": {
                              "type": "BinaryExpression",
                              "operator": "+",
                              "left": {
                                "type": "Literal",
                                "value": "touchmove",
                                "raw": "\"touchmove\""
                              },
                              "right": {
                                "type": "Identifier",
                                "name": "zoomName"
                              }
                            }
                          },
                          {
                            "type": "VariableDeclarator",
                            "id": {
                              "type": "Identifier",
                              "name": "touchend"
                            },
                            "init": {
                              "type": "BinaryExpression",
                              "operator": "+",
                              "left": {
                                "type": "Literal",
                                "value": "touchend",
                                "raw": "\"touchend\""
                              },
                              "right": {
                                "type": "Identifier",
                                "name": "zoomName"
                              }
                            }
                          },
                          {
                            "type": "VariableDeclarator",
                            "id": {
                              "type": "Identifier",
                              "name": "targets"
                            },
                            "init": {
                              "type": "ArrayExpression",
                              "elements": []
                            }
                          },
                          {
                            "type": "VariableDeclarator",
                            "id": {
                              "type": "Identifier",
                              "name": "subject"
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
                                          "name": "that"
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
                                      "type": "Identifier",
                                      "name": "mousedown"
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
                                  "type": "Identifier",
                                  "name": "touchstart"
                                },
                                {
                                  "type": "Identifier",
                                  "name": "started"
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
                              "name": "d3_selection_interrupt"
                            },
                            "property": {
                              "type": "Identifier",
                              "name": "call"
                            }
                          },
                          "arguments": [
                            {
                              "type": "Identifier",
                              "name": "that"
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
                            "name": "started"
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
                            "name": "zoomstarted"
                          },
                          "arguments": [
                            {
                              "type": "Identifier",
                              "name": "dispatch"
                            }
                          ]
                        }
                      },
                      {
                        "type": "FunctionDeclaration",
                        "id": {
                          "type": "Identifier",
                          "name": "relocate"
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
                                    "name": "touches"
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
                                        "name": "touches"
                                      }
                                    },
                                    "arguments": [
                                      {
                                        "type": "Identifier",
                                        "name": "that"
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
                                  "name": "scale0"
                                },
                                "right": {
                                  "type": "MemberExpression",
                                  "computed": false,
                                  "object": {
                                    "type": "Identifier",
                                    "name": "view"
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "name": "k"
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
                                    "name": "touches"
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "name": "forEach"
                                  }
                                },
                                "arguments": [
                                  {
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
                                          "type": "IfStatement",
                                          "test": {
                                            "type": "BinaryExpression",
                                            "operator": "in",
                                            "left": {
                                              "type": "MemberExpression",
                                              "computed": false,
                                              "object": {
                                                "type": "Identifier",
                                                "name": "t"
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "name": "identifier"
                                              }
                                            },
                                            "right": {
                                              "type": "Identifier",
                                              "name": "locations0"
                                            }
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
                                                  "name": "locations0"
                                                },
                                                "property": {
                                                  "type": "MemberExpression",
                                                  "computed": false,
                                                  "object": {
                                                    "type": "Identifier",
                                                    "name": "t"
                                                  },
                                                  "property": {
                                                    "type": "Identifier",
                                                    "name": "identifier"
                                                  }
                                                }
                                              },
                                              "right": {
                                                "type": "CallExpression",
                                                "callee": {
                                                  "type": "Identifier",
                                                  "name": "location"
                                                },
                                                "arguments": [
                                                  {
                                                    "type": "Identifier",
                                                    "name": "t"
                                                  }
                                                ]
                                              }
                                            }
                                          },
                                          "alternate": null
                                        }
                                      ]
                                    },
                                    "rest": null,
                                    "generator": false,
                                    "expression": false
                                  }
                                ]
                              }
                            },
                            {
                              "type": "ReturnStatement",
                              "argument": {
                                "type": "Identifier",
                                "name": "touches"
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
                          "name": "started"
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
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "name": "on"
                                      }
                                    },
                                    "arguments": [
                                      {
                                        "type": "Identifier",
                                        "name": "touchmove"
                                      },
                                      {
                                        "type": "Identifier",
                                        "name": "moved"
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
                                    "type": "Identifier",
                                    "name": "touchend"
                                  },
                                  {
                                    "type": "Identifier",
                                    "name": "ended"
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
                                    "name": "targets"
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "name": "push"
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
                              "type": "VariableDeclaration",
                              "declarations": [
                                {
                                  "type": "VariableDeclarator",
                                  "id": {
                                    "type": "Identifier",
                                    "name": "changed"
                                  },
                                  "init": {
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
                                  }
                                }
                              ],
                              "kind": "var"
                            },
                            {
                              "type": "ForStatement",
                              "init": {
                                "type": "VariableDeclaration",
                                "declarations": [
                                  {
                                    "type": "VariableDeclarator",
                                    "id": {
                                      "type": "Identifier",
                                      "name": "i"
                                    },
                                    "init": {
                                      "type": "Literal",
                                      "value": 0,
                                      "raw": "0"
                                    }
                                  },
                                  {
                                    "type": "VariableDeclarator",
                                    "id": {
                                      "type": "Identifier",
                                      "name": "n"
                                    },
                                    "init": {
                                      "type": "MemberExpression",
                                      "computed": false,
                                      "object": {
                                        "type": "Identifier",
                                        "name": "changed"
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "name": "length"
                                      }
                                    }
                                  }
                                ],
                                "kind": "var"
                              },
                              "test": {
                                "type": "BinaryExpression",
                                "operator": "<",
                                "left": {
                                  "type": "Identifier",
                                  "name": "i"
                                },
                                "right": {
                                  "type": "Identifier",
                                  "name": "n"
                                }
                              },
                              "update": {
                                "type": "UpdateExpression",
                                "operator": "++",
                                "argument": {
                                  "type": "Identifier",
                                  "name": "i"
                                },
                                "prefix": true
                              },
                              "body": {
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
                                          "name": "locations0"
                                        },
                                        "property": {
                                          "type": "MemberExpression",
                                          "computed": false,
                                          "object": {
                                            "type": "MemberExpression",
                                            "computed": true,
                                            "object": {
                                              "type": "Identifier",
                                              "name": "changed"
                                            },
                                            "property": {
                                              "type": "Identifier",
                                              "name": "i"
                                            }
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "name": "identifier"
                                          }
                                        }
                                      },
                                      "right": {
                                        "type": "Literal",
                                        "value": null,
                                        "raw": "null"
                                      }
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
                                    "name": "touches"
                                  },
                                  "init": {
                                    "type": "CallExpression",
                                    "callee": {
                                      "type": "Identifier",
                                      "name": "relocate"
                                    },
                                    "arguments": []
                                  }
                                },
                                {
                                  "type": "VariableDeclarator",
                                  "id": {
                                    "type": "Identifier",
                                    "name": "now"
                                  },
                                  "init": {
                                    "type": "CallExpression",
                                    "callee": {
                                      "type": "MemberExpression",
                                      "computed": false,
                                      "object": {
                                        "type": "Identifier",
                                        "name": "Date"
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "name": "now"
                                      }
                                    },
                                    "arguments": []
                                  }
                                }
                              ],
                              "kind": "var"
                            },
                            {
                              "type": "IfStatement",
                              "test": {
                                "type": "BinaryExpression",
                                "operator": "===",
                                "left": {
                                  "type": "MemberExpression",
                                  "computed": false,
                                  "object": {
                                    "type": "Identifier",
                                    "name": "touches"
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "name": "length"
                                  }
                                },
                                "right": {
                                  "type": "Literal",
                                  "value": 1,
                                  "raw": "1"
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
                                        "type": "BinaryExpression",
                                        "operator": "-",
                                        "left": {
                                          "type": "Identifier",
                                          "name": "now"
                                        },
                                        "right": {
                                          "type": "Identifier",
                                          "name": "touchtime"
                                        }
                                      },
                                      "right": {
                                        "type": "Literal",
                                        "value": 500,
                                        "raw": "500"
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
                                                "name": "p"
                                              },
                                              "init": {
                                                "type": "MemberExpression",
                                                "computed": true,
                                                "object": {
                                                  "type": "Identifier",
                                                  "name": "touches"
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
                                                "name": "l"
                                              },
                                              "init": {
                                                "type": "MemberExpression",
                                                "computed": true,
                                                "object": {
                                                  "type": "Identifier",
                                                  "name": "locations0"
                                                },
                                                "property": {
                                                  "type": "MemberExpression",
                                                  "computed": false,
                                                  "object": {
                                                    "type": "Identifier",
                                                    "name": "p"
                                                  },
                                                  "property": {
                                                    "type": "Identifier",
                                                    "name": "identifier"
                                                  }
                                                }
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
                                              "type": "Identifier",
                                              "name": "scaleTo"
                                            },
                                            "arguments": [
                                              {
                                                "type": "BinaryExpression",
                                                "operator": "*",
                                                "left": {
                                                  "type": "MemberExpression",
                                                  "computed": false,
                                                  "object": {
                                                    "type": "Identifier",
                                                    "name": "view"
                                                  },
                                                  "property": {
                                                    "type": "Identifier",
                                                    "name": "k"
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
                                        },
                                        {
                                          "type": "ExpressionStatement",
                                          "expression": {
                                            "type": "CallExpression",
                                            "callee": {
                                              "type": "Identifier",
                                              "name": "translateTo"
                                            },
                                            "arguments": [
                                              {
                                                "type": "Identifier",
                                                "name": "p"
                                              },
                                              {
                                                "type": "Identifier",
                                                "name": "l"
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
                                              "name": "d3_eventPreventDefault"
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
                                              "name": "zoomed"
                                            },
                                            "arguments": [
                                              {
                                                "type": "Identifier",
                                                "name": "dispatch"
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
                                      "type": "AssignmentExpression",
                                      "operator": "=",
                                      "left": {
                                        "type": "Identifier",
                                        "name": "touchtime"
                                      },
                                      "right": {
                                        "type": "Identifier",
                                        "name": "now"
                                      }
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
                                    "type": "MemberExpression",
                                    "computed": false,
                                    "object": {
                                      "type": "Identifier",
                                      "name": "touches"
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "name": "length"
                                    }
                                  },
                                  "right": {
                                    "type": "Literal",
                                    "value": 1,
                                    "raw": "1"
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
                                            "name": "p"
                                          },
                                          "init": {
                                            "type": "MemberExpression",
                                            "computed": true,
                                            "object": {
                                              "type": "Identifier",
                                              "name": "touches"
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
                                            "name": "q"
                                          },
                                          "init": {
                                            "type": "MemberExpression",
                                            "computed": true,
                                            "object": {
                                              "type": "Identifier",
                                              "name": "touches"
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
                                            "name": "dx"
                                          },
                                          "init": {
                                            "type": "BinaryExpression",
                                            "operator": "-",
                                            "left": {
                                              "type": "MemberExpression",
                                              "computed": true,
                                              "object": {
                                                "type": "Identifier",
                                                "name": "p"
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
                                                "name": "q"
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
                                            "name": "dy"
                                          },
                                          "init": {
                                            "type": "BinaryExpression",
                                            "operator": "-",
                                            "left": {
                                              "type": "MemberExpression",
                                              "computed": true,
                                              "object": {
                                                "type": "Identifier",
                                                "name": "p"
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
                                                "name": "q"
                                              },
                                              "property": {
                                                "type": "Literal",
                                                "value": 1,
                                                "raw": "1"
                                              }
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
                                          "name": "distance0"
                                        },
                                        "right": {
                                          "type": "BinaryExpression",
                                          "operator": "+",
                                          "left": {
                                            "type": "BinaryExpression",
                                            "operator": "*",
                                            "left": {
                                              "type": "Identifier",
                                              "name": "dx"
                                            },
                                            "right": {
                                              "type": "Identifier",
                                              "name": "dx"
                                            }
                                          },
                                          "right": {
                                            "type": "BinaryExpression",
                                            "operator": "*",
                                            "left": {
                                              "type": "Identifier",
                                              "name": "dy"
                                            },
                                            "right": {
                                              "type": "Identifier",
                                              "name": "dy"
                                            }
                                          }
                                        }
                                      }
                                    }
                                  ]
                                },
                                "alternate": null
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
                          "name": "moved"
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
                                    "name": "touches"
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
                                        "name": "touches"
                                      }
                                    },
                                    "arguments": [
                                      {
                                        "type": "Identifier",
                                        "name": "that"
                                      }
                                    ]
                                  }
                                },
                                {
                                  "type": "VariableDeclarator",
                                  "id": {
                                    "type": "Identifier",
                                    "name": "p0"
                                  },
                                  "init": null
                                },
                                {
                                  "type": "VariableDeclarator",
                                  "id": {
                                    "type": "Identifier",
                                    "name": "l0"
                                  },
                                  "init": null
                                },
                                {
                                  "type": "VariableDeclarator",
                                  "id": {
                                    "type": "Identifier",
                                    "name": "p1"
                                  },
                                  "init": null
                                },
                                {
                                  "type": "VariableDeclarator",
                                  "id": {
                                    "type": "Identifier",
                                    "name": "l1"
                                  },
                                  "init": null
                                }
                              ],
                              "kind": "var"
                            },
                            {
                              "type": "ForStatement",
                              "init": {
                                "type": "VariableDeclaration",
                                "declarations": [
                                  {
                                    "type": "VariableDeclarator",
                                    "id": {
                                      "type": "Identifier",
                                      "name": "i"
                                    },
                                    "init": {
                                      "type": "Literal",
                                      "value": 0,
                                      "raw": "0"
                                    }
                                  },
                                  {
                                    "type": "VariableDeclarator",
                                    "id": {
                                      "type": "Identifier",
                                      "name": "n"
                                    },
                                    "init": {
                                      "type": "MemberExpression",
                                      "computed": false,
                                      "object": {
                                        "type": "Identifier",
                                        "name": "touches"
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "name": "length"
                                      }
                                    }
                                  }
                                ],
                                "kind": "var"
                              },
                              "test": {
                                "type": "BinaryExpression",
                                "operator": "<",
                                "left": {
                                  "type": "Identifier",
                                  "name": "i"
                                },
                                "right": {
                                  "type": "Identifier",
                                  "name": "n"
                                }
                              },
                              "update": {
                                "type": "SequenceExpression",
                                "expressions": [
                                  {
                                    "type": "UpdateExpression",
                                    "operator": "++",
                                    "argument": {
                                      "type": "Identifier",
                                      "name": "i"
                                    },
                                    "prefix": true
                                  },
                                  {
                                    "type": "AssignmentExpression",
                                    "operator": "=",
                                    "left": {
                                      "type": "Identifier",
                                      "name": "l1"
                                    },
                                    "right": {
                                      "type": "Literal",
                                      "value": null,
                                      "raw": "null"
                                    }
                                  }
                                ]
                              },
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
                                        "name": "p1"
                                      },
                                      "right": {
                                        "type": "MemberExpression",
                                        "computed": true,
                                        "object": {
                                          "type": "Identifier",
                                          "name": "touches"
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "name": "i"
                                        }
                                      }
                                    }
                                  },
                                  {
                                    "type": "IfStatement",
                                    "test": {
                                      "type": "AssignmentExpression",
                                      "operator": "=",
                                      "left": {
                                        "type": "Identifier",
                                        "name": "l1"
                                      },
                                      "right": {
                                        "type": "MemberExpression",
                                        "computed": true,
                                        "object": {
                                          "type": "Identifier",
                                          "name": "locations0"
                                        },
                                        "property": {
                                          "type": "MemberExpression",
                                          "computed": false,
                                          "object": {
                                            "type": "Identifier",
                                            "name": "p1"
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "name": "identifier"
                                          }
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
                                            "name": "l0"
                                          },
                                          "consequent": {
                                            "type": "BreakStatement",
                                            "label": null
                                          },
                                          "alternate": null
                                        },
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
                                                  "name": "p0"
                                                },
                                                "right": {
                                                  "type": "Identifier",
                                                  "name": "p1"
                                                }
                                              },
                                              {
                                                "type": "AssignmentExpression",
                                                "operator": "=",
                                                "left": {
                                                  "type": "Identifier",
                                                  "name": "l0"
                                                },
                                                "right": {
                                                  "type": "Identifier",
                                                  "name": "l1"
                                                }
                                              }
                                            ]
                                          }
                                        }
                                      ]
                                    },
                                    "alternate": null
                                  }
                                ]
                              }
                            },
                            {
                              "type": "IfStatement",
                              "test": {
                                "type": "Identifier",
                                "name": "l1"
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
                                          "name": "distance1"
                                        },
                                        "init": {
                                          "type": "BinaryExpression",
                                          "operator": "+",
                                          "left": {
                                            "type": "BinaryExpression",
                                            "operator": "*",
                                            "left": {
                                              "type": "AssignmentExpression",
                                              "operator": "=",
                                              "left": {
                                                "type": "Identifier",
                                                "name": "distance1"
                                              },
                                              "right": {
                                                "type": "BinaryExpression",
                                                "operator": "-",
                                                "left": {
                                                  "type": "MemberExpression",
                                                  "computed": true,
                                                  "object": {
                                                    "type": "Identifier",
                                                    "name": "p1"
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
                                                    "name": "p0"
                                                  },
                                                  "property": {
                                                    "type": "Literal",
                                                    "value": 0,
                                                    "raw": "0"
                                                  }
                                                }
                                              }
                                            },
                                            "right": {
                                              "type": "Identifier",
                                              "name": "distance1"
                                            }
                                          },
                                          "right": {
                                            "type": "BinaryExpression",
                                            "operator": "*",
                                            "left": {
                                              "type": "AssignmentExpression",
                                              "operator": "=",
                                              "left": {
                                                "type": "Identifier",
                                                "name": "distance1"
                                              },
                                              "right": {
                                                "type": "BinaryExpression",
                                                "operator": "-",
                                                "left": {
                                                  "type": "MemberExpression",
                                                  "computed": true,
                                                  "object": {
                                                    "type": "Identifier",
                                                    "name": "p1"
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
                                                    "name": "p0"
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
                                              "type": "Identifier",
                                              "name": "distance1"
                                            }
                                          }
                                        }
                                      },
                                      {
                                        "type": "VariableDeclarator",
                                        "id": {
                                          "type": "Identifier",
                                          "name": "scale1"
                                        },
                                        "init": {
                                          "type": "LogicalExpression",
                                          "operator": "&&",
                                          "left": {
                                            "type": "Identifier",
                                            "name": "distance0"
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
                                                "name": "sqrt"
                                              }
                                            },
                                            "arguments": [
                                              {
                                                "type": "BinaryExpression",
                                                "operator": "/",
                                                "left": {
                                                  "type": "Identifier",
                                                  "name": "distance1"
                                                },
                                                "right": {
                                                  "type": "Identifier",
                                                  "name": "distance0"
                                                }
                                              }
                                            ]
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
                                        "name": "p0"
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
                                                  "name": "p0"
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
                                                  "name": "p1"
                                                },
                                                "property": {
                                                  "type": "Literal",
                                                  "value": 0,
                                                  "raw": "0"
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
                                                  "name": "p0"
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
                                                  "name": "p1"
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
                                  {
                                    "type": "ExpressionStatement",
                                    "expression": {
                                      "type": "AssignmentExpression",
                                      "operator": "=",
                                      "left": {
                                        "type": "Identifier",
                                        "name": "l0"
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
                                                  "name": "l0"
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
                                                  "name": "l1"
                                                },
                                                "property": {
                                                  "type": "Literal",
                                                  "value": 0,
                                                  "raw": "0"
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
                                                  "name": "l0"
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
                                                  "name": "l1"
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
                                  {
                                    "type": "ExpressionStatement",
                                    "expression": {
                                      "type": "CallExpression",
                                      "callee": {
                                        "type": "Identifier",
                                        "name": "scaleTo"
                                      },
                                      "arguments": [
                                        {
                                          "type": "BinaryExpression",
                                          "operator": "*",
                                          "left": {
                                            "type": "Identifier",
                                            "name": "scale1"
                                          },
                                          "right": {
                                            "type": "Identifier",
                                            "name": "scale0"
                                          }
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
                                "type": "AssignmentExpression",
                                "operator": "=",
                                "left": {
                                  "type": "Identifier",
                                  "name": "touchtime"
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
                                "type": "CallExpression",
                                "callee": {
                                  "type": "Identifier",
                                  "name": "translateTo"
                                },
                                "arguments": [
                                  {
                                    "type": "Identifier",
                                    "name": "p0"
                                  },
                                  {
                                    "type": "Identifier",
                                    "name": "l0"
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
                                  "name": "zoomed"
                                },
                                "arguments": [
                                  {
                                    "type": "Identifier",
                                    "name": "dispatch"
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
                          "name": "ended"
                        },
                        "params": [],
                        "defaults": [],
                        "body": {
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
                                    "name": "touches"
                                  }
                                },
                                "property": {
                                  "type": "Identifier",
                                  "name": "length"
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
                                          "name": "changed"
                                        },
                                        "init": {
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
                                        }
                                      }
                                    ],
                                    "kind": "var"
                                  },
                                  {
                                    "type": "ForStatement",
                                    "init": {
                                      "type": "VariableDeclaration",
                                      "declarations": [
                                        {
                                          "type": "VariableDeclarator",
                                          "id": {
                                            "type": "Identifier",
                                            "name": "i"
                                          },
                                          "init": {
                                            "type": "Literal",
                                            "value": 0,
                                            "raw": "0"
                                          }
                                        },
                                        {
                                          "type": "VariableDeclarator",
                                          "id": {
                                            "type": "Identifier",
                                            "name": "n"
                                          },
                                          "init": {
                                            "type": "MemberExpression",
                                            "computed": false,
                                            "object": {
                                              "type": "Identifier",
                                              "name": "changed"
                                            },
                                            "property": {
                                              "type": "Identifier",
                                              "name": "length"
                                            }
                                          }
                                        }
                                      ],
                                      "kind": "var"
                                    },
                                    "test": {
                                      "type": "BinaryExpression",
                                      "operator": "<",
                                      "left": {
                                        "type": "Identifier",
                                        "name": "i"
                                      },
                                      "right": {
                                        "type": "Identifier",
                                        "name": "n"
                                      }
                                    },
                                    "update": {
                                      "type": "UpdateExpression",
                                      "operator": "++",
                                      "argument": {
                                        "type": "Identifier",
                                        "name": "i"
                                      },
                                      "prefix": true
                                    },
                                    "body": {
                                      "type": "BlockStatement",
                                      "body": [
                                        {
                                          "type": "ExpressionStatement",
                                          "expression": {
                                            "type": "UnaryExpression",
                                            "operator": "delete",
                                            "argument": {
                                              "type": "MemberExpression",
                                              "computed": true,
                                              "object": {
                                                "type": "Identifier",
                                                "name": "locations0"
                                              },
                                              "property": {
                                                "type": "MemberExpression",
                                                "computed": false,
                                                "object": {
                                                  "type": "MemberExpression",
                                                  "computed": true,
                                                  "object": {
                                                    "type": "Identifier",
                                                    "name": "changed"
                                                  },
                                                  "property": {
                                                    "type": "Identifier",
                                                    "name": "i"
                                                  }
                                                },
                                                "property": {
                                                  "type": "Identifier",
                                                  "name": "identifier"
                                                }
                                              }
                                            },
                                            "prefix": true
                                          }
                                        }
                                      ]
                                    }
                                  },
                                  {
                                    "type": "ForInStatement",
                                    "left": {
                                      "type": "VariableDeclaration",
                                      "declarations": [
                                        {
                                          "type": "VariableDeclarator",
                                          "id": {
                                            "type": "Identifier",
                                            "name": "identifier"
                                          },
                                          "init": null
                                        }
                                      ],
                                      "kind": "var"
                                    },
                                    "right": {
                                      "type": "Identifier",
                                      "name": "locations0"
                                    },
                                    "body": {
                                      "type": "BlockStatement",
                                      "body": [
                                        {
                                          "type": "ReturnStatement",
                                          "argument": {
                                            "type": "UnaryExpression",
                                            "operator": "void",
                                            "argument": {
                                              "type": "CallExpression",
                                              "callee": {
                                                "type": "Identifier",
                                                "name": "relocate"
                                              },
                                              "arguments": []
                                            },
                                            "prefix": true
                                          }
                                        }
                                      ]
                                    },
                                    "each": false
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
                                        "name": "selectAll"
                                      }
                                    },
                                    "arguments": [
                                      {
                                        "type": "Identifier",
                                        "name": "targets"
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
                                    "type": "Identifier",
                                    "name": "zoomName"
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
                                        "name": "subject"
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "name": "on"
                                      }
                                    },
                                    "arguments": [
                                      {
                                        "type": "Identifier",
                                        "name": "mousedown"
                                      },
                                      {
                                        "type": "Identifier",
                                        "name": "mousedowned"
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
                                    "type": "Identifier",
                                    "name": "touchstart"
                                  },
                                  {
                                    "type": "Identifier",
                                    "name": "touchstarted"
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
                                  "name": "zoomended"
                                },
                                "arguments": [
                                  {
                                    "type": "Identifier",
                                    "name": "dispatch"
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
                  "type": "FunctionDeclaration",
                  "id": {
                    "type": "Identifier",
                    "name": "mousewheeled"
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
                              "name": "dispatch"
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
                          }
                        ],
                        "kind": "var"
                      },
                      {
                        "type": "IfStatement",
                        "test": {
                          "type": "Identifier",
                          "name": "mousewheelTimer"
                        },
                        "consequent": {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "CallExpression",
                            "callee": {
                              "type": "Identifier",
                              "name": "clearTimeout"
                            },
                            "arguments": [
                              {
                                "type": "Identifier",
                                "name": "mousewheelTimer"
                              }
                            ]
                          }
                        },
                        "alternate": {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "SequenceExpression",
                            "expressions": [
                              {
                                "type": "AssignmentExpression",
                                "operator": "=",
                                "left": {
                                  "type": "Identifier",
                                  "name": "translate0"
                                },
                                "right": {
                                  "type": "CallExpression",
                                  "callee": {
                                    "type": "Identifier",
                                    "name": "location"
                                  },
                                  "arguments": [
                                    {
                                      "type": "AssignmentExpression",
                                      "operator": "=",
                                      "left": {
                                        "type": "Identifier",
                                        "name": "center0"
                                      },
                                      "right": {
                                        "type": "LogicalExpression",
                                        "operator": "||",
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
                                              "name": "d3"
                                            },
                                            "property": {
                                              "type": "Identifier",
                                              "name": "mouse"
                                            }
                                          },
                                          "arguments": [
                                            {
                                              "type": "ThisExpression"
                                            }
                                          ]
                                        }
                                      }
                                    }
                                  ]
                                }
                              },
                              {
                                "type": "CallExpression",
                                "callee": {
                                  "type": "MemberExpression",
                                  "computed": false,
                                  "object": {
                                    "type": "Identifier",
                                    "name": "d3_selection_interrupt"
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "name": "call"
                                  }
                                },
                                "arguments": [
                                  {
                                    "type": "ThisExpression"
                                  }
                                ]
                              },
                              {
                                "type": "CallExpression",
                                "callee": {
                                  "type": "Identifier",
                                  "name": "zoomstarted"
                                },
                                "arguments": [
                                  {
                                    "type": "Identifier",
                                    "name": "dispatch"
                                  }
                                ]
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
                            "name": "mousewheelTimer"
                          },
                          "right": {
                            "type": "CallExpression",
                            "callee": {
                              "type": "Identifier",
                              "name": "setTimeout"
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
                                      "type": "ExpressionStatement",
                                      "expression": {
                                        "type": "AssignmentExpression",
                                        "operator": "=",
                                        "left": {
                                          "type": "Identifier",
                                          "name": "mousewheelTimer"
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
                                        "type": "CallExpression",
                                        "callee": {
                                          "type": "Identifier",
                                          "name": "zoomended"
                                        },
                                        "arguments": [
                                          {
                                            "type": "Identifier",
                                            "name": "dispatch"
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
                                "type": "Literal",
                                "value": 50,
                                "raw": "50"
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
                            "type": "Identifier",
                            "name": "d3_eventPreventDefault"
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
                            "name": "scaleTo"
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
                                    "name": "pow"
                                  }
                                },
                                "arguments": [
                                  {
                                    "type": "Literal",
                                    "value": 2,
                                    "raw": "2"
                                  },
                                  {
                                    "type": "BinaryExpression",
                                    "operator": "*",
                                    "left": {
                                      "type": "CallExpression",
                                      "callee": {
                                        "type": "Identifier",
                                        "name": "d3_behavior_zoomDelta"
                                      },
                                      "arguments": []
                                    },
                                    "right": {
                                      "type": "Literal",
                                      "value": 0.002,
                                      "raw": ".002"
                                    }
                                  }
                                ]
                              },
                              "right": {
                                "type": "MemberExpression",
                                "computed": false,
                                "object": {
                                  "type": "Identifier",
                                  "name": "view"
                                },
                                "property": {
                                  "type": "Identifier",
                                  "name": "k"
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
                            "name": "translateTo"
                          },
                          "arguments": [
                            {
                              "type": "Identifier",
                              "name": "center0"
                            },
                            {
                              "type": "Identifier",
                              "name": "translate0"
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
                            "name": "zoomed"
                          },
                          "arguments": [
                            {
                              "type": "Identifier",
                              "name": "dispatch"
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
                    "name": "dblclicked"
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
                              "name": "dispatch"
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
                              "name": "p"
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
                                  "type": "ThisExpression"
                                }
                              ]
                            }
                          },
                          {
                            "type": "VariableDeclarator",
                            "id": {
                              "type": "Identifier",
                              "name": "l"
                            },
                            "init": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "Identifier",
                                "name": "location"
                              },
                              "arguments": [
                                {
                                  "type": "Identifier",
                                  "name": "p"
                                }
                              ]
                            }
                          },
                          {
                            "type": "VariableDeclarator",
                            "id": {
                              "type": "Identifier",
                              "name": "k"
                            },
                            "init": {
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
                                    "type": "MemberExpression",
                                    "computed": false,
                                    "object": {
                                      "type": "Identifier",
                                      "name": "view"
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "name": "k"
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
                                  "name": "LN2"
                                }
                              }
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
                            "type": "Identifier",
                            "name": "zoomstarted"
                          },
                          "arguments": [
                            {
                              "type": "Identifier",
                              "name": "dispatch"
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
                            "name": "scaleTo"
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
                                  "name": "pow"
                                }
                              },
                              "arguments": [
                                {
                                  "type": "Literal",
                                  "value": 2,
                                  "raw": "2"
                                },
                                {
                                  "type": "ConditionalExpression",
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
                                      "name": "shiftKey"
                                    }
                                  },
                                  "consequent": {
                                    "type": "BinaryExpression",
                                    "operator": "-",
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
                                          "type": "Identifier",
                                          "name": "k"
                                        }
                                      ]
                                    },
                                    "right": {
                                      "type": "Literal",
                                      "value": 1,
                                      "raw": "1"
                                    }
                                  },
                                  "alternate": {
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
                                          "name": "floor"
                                        }
                                      },
                                      "arguments": [
                                        {
                                          "type": "Identifier",
                                          "name": "k"
                                        }
                                      ]
                                    },
                                    "right": {
                                      "type": "Literal",
                                      "value": 1,
                                      "raw": "1"
                                    }
                                  }
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
                            "name": "translateTo"
                          },
                          "arguments": [
                            {
                              "type": "Identifier",
                              "name": "p"
                            },
                            {
                              "type": "Identifier",
                              "name": "l"
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
                            "name": "zoomed"
                          },
                          "arguments": [
                            {
                              "type": "Identifier",
                              "name": "dispatch"
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
                            "name": "zoomended"
                          },
                          "arguments": [
                            {
                              "type": "Identifier",
                              "name": "dispatch"
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
                        "name": "zoom"
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
              "name": "d3_behavior_zoomInfinity"
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
                  "type": "Identifier",
                  "name": "Infinity"
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
              "name": "d3_behavior_zoomDelta"
            },
            "init": null
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
              "name": "d3_behavior_zoomWheel"
            },
            "init": {
              "type": "ConditionalExpression",
              "test": {
                "type": "BinaryExpression",
                "operator": "in",
                "left": {
                  "type": "Literal",
                  "value": "onwheel",
                  "raw": "\"onwheel\""
                },
                "right": {
                  "type": "Identifier",
                  "name": "d3_document"
                }
              },
              "consequent": {
                "type": "SequenceExpression",
                "expressions": [
                  {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "name": "d3_behavior_zoomDelta"
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
                              "type": "BinaryExpression",
                              "operator": "*",
                              "left": {
                                "type": "UnaryExpression",
                                "operator": "-",
                                "argument": {
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
                                    "name": "deltaY"
                                  }
                                },
                                "prefix": true
                              },
                              "right": {
                                "type": "ConditionalExpression",
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
                                    "name": "deltaMode"
                                  }
                                },
                                "consequent": {
                                  "type": "Literal",
                                  "value": 120,
                                  "raw": "120"
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
                      },
                      "rest": null,
                      "generator": false,
                      "expression": false
                    }
                  },
                  {
                    "type": "Literal",
                    "value": "wheel",
                    "raw": "\"wheel\""
                  }
                ]
              },
              "alternate": {
                "type": "ConditionalExpression",
                "test": {
                  "type": "BinaryExpression",
                  "operator": "in",
                  "left": {
                    "type": "Literal",
                    "value": "onmousewheel",
                    "raw": "\"onmousewheel\""
                  },
                  "right": {
                    "type": "Identifier",
                    "name": "d3_document"
                  }
                },
                "consequent": {
                  "type": "SequenceExpression",
                  "expressions": [
                    {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "name": "d3_behavior_zoomDelta"
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
                                  "name": "wheelDelta"
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
                    {
                      "type": "Literal",
                      "value": "mousewheel",
                      "raw": "\"mousewheel\""
                    }
                  ]
                },
                "alternate": {
                  "type": "SequenceExpression",
                  "expressions": [
                    {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "name": "d3_behavior_zoomDelta"
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
                                "type": "UnaryExpression",
                                "operator": "-",
                                "argument": {
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
                                    "name": "detail"
                                  }
                                },
                                "prefix": true
                              }
                            }
                          ]
                        },
                        "rest": null,
                        "generator": false,
                        "expression": false
                      }
                    },
                    {
                      "type": "Literal",
                      "value": "MozMousePixelScroll",
                      "raw": "\"MozMousePixelScroll\""
                    }
                  ]
                }
              }
            }
          }
        ]
      }
    ]
  },
  "src": "d3.behavior.zoom = function () {\n    var view = {\n            x: 0,\n            y: 0,\n            k: 1\n        }, translate0, center0, center, size = [\n            960,\n            500\n        ], scaleExtent = d3_behavior_zoomInfinity, mousedown = 'mousedown.zoom', mousemove = 'mousemove.zoom', mouseup = 'mouseup.zoom', mousewheelTimer, touchstart = 'touchstart.zoom', touchtime, event = d3_eventDispatch(zoom, 'zoomstart', 'zoom', 'zoomend'), x0, x1, y0, y1;\n    function zoom(g) {\n        g.on(mousedown, mousedowned).on(d3_behavior_zoomWheel + '.zoom', mousewheeled).on('dblclick.zoom', dblclicked).on(touchstart, touchstarted);\n    }\n    zoom.event = function (g) {\n        g.each(function () {\n            var dispatch = event.of(this, arguments), view1 = view;\n            if (d3_transitionInheritId) {\n                d3.select(this).transition().each('start.zoom', function () {\n                    view = this.__chart__ || {\n                        x: 0,\n                        y: 0,\n                        k: 1\n                    };\n                    zoomstarted(dispatch);\n                }).tween('zoom:zoom', function () {\n                    var dx = size[0], dy = size[1], cx = dx / 2, cy = dy / 2, i = d3.interpolateZoom([\n                            (cx - view.x) / view.k,\n                            (cy - view.y) / view.k,\n                            dx / view.k\n                        ], [\n                            (cx - view1.x) / view1.k,\n                            (cy - view1.y) / view1.k,\n                            dx / view1.k\n                        ]);\n                    return function (t) {\n                        var l = i(t), k = dx / l[2];\n                        this.__chart__ = view = {\n                            x: cx - l[0] * k,\n                            y: cy - l[1] * k,\n                            k: k\n                        };\n                        zoomed(dispatch);\n                    };\n                }).each('end.zoom', function () {\n                    zoomended(dispatch);\n                });\n            } else {\n                this.__chart__ = view;\n                zoomstarted(dispatch);\n                zoomed(dispatch);\n                zoomended(dispatch);\n            }\n        });\n    };\n    zoom.translate = function (_) {\n        if (!arguments.length)\n            return [\n                view.x,\n                view.y\n            ];\n        view = {\n            x: +_[0],\n            y: +_[1],\n            k: view.k\n        };\n        rescale();\n        return zoom;\n    };\n    zoom.scale = function (_) {\n        if (!arguments.length)\n            return view.k;\n        view = {\n            x: view.x,\n            y: view.y,\n            k: +_\n        };\n        rescale();\n        return zoom;\n    };\n    zoom.scaleExtent = function (_) {\n        if (!arguments.length)\n            return scaleExtent;\n        scaleExtent = _ == null ? d3_behavior_zoomInfinity : [\n            +_[0],\n            +_[1]\n        ];\n        return zoom;\n    };\n    zoom.center = function (_) {\n        if (!arguments.length)\n            return center;\n        center = _ && [\n            +_[0],\n            +_[1]\n        ];\n        return zoom;\n    };\n    zoom.size = function (_) {\n        if (!arguments.length)\n            return size;\n        size = _ && [\n            +_[0],\n            +_[1]\n        ];\n        return zoom;\n    };\n    zoom.x = function (z) {\n        if (!arguments.length)\n            return x1;\n        x1 = z;\n        x0 = z.copy();\n        view = {\n            x: 0,\n            y: 0,\n            k: 1\n        };\n        return zoom;\n    };\n    zoom.y = function (z) {\n        if (!arguments.length)\n            return y1;\n        y1 = z;\n        y0 = z.copy();\n        view = {\n            x: 0,\n            y: 0,\n            k: 1\n        };\n        return zoom;\n    };\n    function location(p) {\n        return [\n            (p[0] - view.x) / view.k,\n            (p[1] - view.y) / view.k\n        ];\n    }\n    function point(l) {\n        return [\n            l[0] * view.k + view.x,\n            l[1] * view.k + view.y\n        ];\n    }\n    function scaleTo(s) {\n        view.k = Math.max(scaleExtent[0], Math.min(scaleExtent[1], s));\n    }\n    function translateTo(p, l) {\n        l = point(l);\n        view.x += p[0] - l[0];\n        view.y += p[1] - l[1];\n    }\n    function rescale() {\n        if (x1)\n            x1.domain(x0.range().map(function (x) {\n                return (x - view.x) / view.k;\n            }).map(x0.invert));\n        if (y1)\n            y1.domain(y0.range().map(function (y) {\n                return (y - view.y) / view.k;\n            }).map(y0.invert));\n    }\n    function zoomstarted(dispatch) {\n        dispatch({ type: 'zoomstart' });\n    }\n    function zoomed(dispatch) {\n        rescale();\n        dispatch({\n            type: 'zoom',\n            scale: view.k,\n            translate: [\n                view.x,\n                view.y\n            ]\n        });\n    }\n    function zoomended(dispatch) {\n        dispatch({ type: 'zoomend' });\n    }\n    function mousedowned() {\n        var that = this, target = d3.event.target, dispatch = event.of(that, arguments), dragged = 0, subject = d3.select(d3_window).on(mousemove, moved).on(mouseup, ended), location0 = location(d3.mouse(that)), dragRestore = d3_event_dragSuppress();\n        d3_selection_interrupt.call(that);\n        zoomstarted(dispatch);\n        function moved() {\n            dragged = 1;\n            translateTo(d3.mouse(that), location0);\n            zoomed(dispatch);\n        }\n        function ended() {\n            subject.on(mousemove, null).on(mouseup, null);\n            dragRestore(dragged && d3.event.target === target);\n            zoomended(dispatch);\n        }\n    }\n    function touchstarted() {\n        var that = this, dispatch = event.of(that, arguments), locations0 = {}, distance0 = 0, scale0, zoomName = '.zoom-' + d3.event.changedTouches[0].identifier, touchmove = 'touchmove' + zoomName, touchend = 'touchend' + zoomName, targets = [], subject = d3.select(that).on(mousedown, null).on(touchstart, started), dragRestore = d3_event_dragSuppress();\n        d3_selection_interrupt.call(that);\n        started();\n        zoomstarted(dispatch);\n        function relocate() {\n            var touches = d3.touches(that);\n            scale0 = view.k;\n            touches.forEach(function (t) {\n                if (t.identifier in locations0)\n                    locations0[t.identifier] = location(t);\n            });\n            return touches;\n        }\n        function started() {\n            var target = d3.event.target;\n            d3.select(target).on(touchmove, moved).on(touchend, ended);\n            targets.push(target);\n            var changed = d3.event.changedTouches;\n            for (var i = 0, n = changed.length; i < n; ++i) {\n                locations0[changed[i].identifier] = null;\n            }\n            var touches = relocate(), now = Date.now();\n            if (touches.length === 1) {\n                if (now - touchtime < 500) {\n                    var p = touches[0], l = locations0[p.identifier];\n                    scaleTo(view.k * 2);\n                    translateTo(p, l);\n                    d3_eventPreventDefault();\n                    zoomed(dispatch);\n                }\n                touchtime = now;\n            } else if (touches.length > 1) {\n                var p = touches[0], q = touches[1], dx = p[0] - q[0], dy = p[1] - q[1];\n                distance0 = dx * dx + dy * dy;\n            }\n        }\n        function moved() {\n            var touches = d3.touches(that), p0, l0, p1, l1;\n            for (var i = 0, n = touches.length; i < n; ++i, l1 = null) {\n                p1 = touches[i];\n                if (l1 = locations0[p1.identifier]) {\n                    if (l0)\n                        break;\n                    p0 = p1, l0 = l1;\n                }\n            }\n            if (l1) {\n                var distance1 = (distance1 = p1[0] - p0[0]) * distance1 + (distance1 = p1[1] - p0[1]) * distance1, scale1 = distance0 && Math.sqrt(distance1 / distance0);\n                p0 = [\n                    (p0[0] + p1[0]) / 2,\n                    (p0[1] + p1[1]) / 2\n                ];\n                l0 = [\n                    (l0[0] + l1[0]) / 2,\n                    (l0[1] + l1[1]) / 2\n                ];\n                scaleTo(scale1 * scale0);\n            }\n            touchtime = null;\n            translateTo(p0, l0);\n            zoomed(dispatch);\n        }\n        function ended() {\n            if (d3.event.touches.length) {\n                var changed = d3.event.changedTouches;\n                for (var i = 0, n = changed.length; i < n; ++i) {\n                    delete locations0[changed[i].identifier];\n                }\n                for (var identifier in locations0) {\n                    return void relocate();\n                }\n            }\n            d3.selectAll(targets).on(zoomName, null);\n            subject.on(mousedown, mousedowned).on(touchstart, touchstarted);\n            dragRestore();\n            zoomended(dispatch);\n        }\n    }\n    function mousewheeled() {\n        var dispatch = event.of(this, arguments);\n        if (mousewheelTimer)\n            clearTimeout(mousewheelTimer);\n        else\n            translate0 = location(center0 = center || d3.mouse(this)), d3_selection_interrupt.call(this), zoomstarted(dispatch);\n        mousewheelTimer = setTimeout(function () {\n            mousewheelTimer = null;\n            zoomended(dispatch);\n        }, 50);\n        d3_eventPreventDefault();\n        scaleTo(Math.pow(2, d3_behavior_zoomDelta() * 0.002) * view.k);\n        translateTo(center0, translate0);\n        zoomed(dispatch);\n    }\n    function dblclicked() {\n        var dispatch = event.of(this, arguments), p = d3.mouse(this), l = location(p), k = Math.log(view.k) / Math.LN2;\n        zoomstarted(dispatch);\n        scaleTo(Math.pow(2, d3.event.shiftKey ? Math.ceil(k) - 1 : Math.floor(k) + 1));\n        translateTo(p, l);\n        zoomed(dispatch);\n        zoomended(dispatch);\n    }\n    return d3.rebind(zoom, event, 'on');\n};\nvar d3_behavior_zoomInfinity = [\n        0,\n        Infinity\n    ];\nvar d3_behavior_zoomDelta;\nvar d3_behavior_zoomWheel = 'onwheel' in d3_document ? (d3_behavior_zoomDelta = function () {\n        return -d3.event.deltaY * (d3.event.deltaMode ? 120 : 1);\n    }, 'wheel') : 'onmousewheel' in d3_document ? (d3_behavior_zoomDelta = function () {\n        return d3.event.wheelDelta;\n    }, 'mousewheel') : (d3_behavior_zoomDelta = function () {\n        return -d3.event.detail;\n    }, 'MozMousePixelScroll');"
}