{
  "filepath": "/behavior/drag.js",
  "shared": [],
  "dependencies": [
    "d3_eventDispatch",
    "d3_noop",
    "d3.mouse",
    "d3.touch",
    "d3.event.target",
    "d3.select",
    "d3_event_dragSuppress",
    "d3.rebind",
    "d3.event.changedTouches..identifier",
    "d3_window"
  ],
  "helpers": [
    "d3_behavior_dragTouchId",
    "d3_behavior_dragTouchSubject",
    "d3_behavior_dragMouseSubject"
  ],
  "exports": [
    "d3.behavior.drag"
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
              "name": "drag"
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
                            "name": "drag"
                          },
                          {
                            "type": "Literal",
                            "value": "drag",
                            "raw": "\"drag\""
                          },
                          {
                            "type": "Literal",
                            "value": "dragstart",
                            "raw": "\"dragstart\""
                          },
                          {
                            "type": "Literal",
                            "value": "dragend",
                            "raw": "\"dragend\""
                          }
                        ]
                      }
                    },
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "name": "origin"
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
                        "name": "mousedown"
                      },
                      "init": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "Identifier",
                          "name": "dragstart"
                        },
                        "arguments": [
                          {
                            "type": "Identifier",
                            "name": "d3_noop"
                          },
                          {
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
                          {
                            "type": "Identifier",
                            "name": "d3_behavior_dragMouseSubject"
                          },
                          {
                            "type": "Literal",
                            "value": "mousemove",
                            "raw": "\"mousemove\""
                          },
                          {
                            "type": "Literal",
                            "value": "mouseup",
                            "raw": "\"mouseup\""
                          }
                        ]
                      }
                    },
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "name": "touchstart"
                      },
                      "init": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "Identifier",
                          "name": "dragstart"
                        },
                        "arguments": [
                          {
                            "type": "Identifier",
                            "name": "d3_behavior_dragTouchId"
                          },
                          {
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "name": "d3"
                            },
                            "property": {
                              "type": "Identifier",
                              "name": "touch"
                            }
                          },
                          {
                            "type": "Identifier",
                            "name": "d3_behavior_dragTouchSubject"
                          },
                          {
                            "type": "Literal",
                            "value": "touchmove",
                            "raw": "\"touchmove\""
                          },
                          {
                            "type": "Literal",
                            "value": "touchend",
                            "raw": "\"touchend\""
                          }
                        ]
                      }
                    }
                  ],
                  "kind": "var"
                },
                {
                  "type": "FunctionDeclaration",
                  "id": {
                    "type": "Identifier",
                    "name": "drag"
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
                                  "type": "ThisExpression"
                                },
                                "property": {
                                  "type": "Identifier",
                                  "name": "on"
                                }
                              },
                              "arguments": [
                                {
                                  "type": "Literal",
                                  "value": "mousedown.drag",
                                  "raw": "\"mousedown.drag\""
                                },
                                {
                                  "type": "Identifier",
                                  "name": "mousedown"
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
                              "value": "touchstart.drag",
                              "raw": "\"touchstart.drag\""
                            },
                            {
                              "type": "Identifier",
                              "name": "touchstart"
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
                    "name": "dragstart"
                  },
                  "params": [
                    {
                      "type": "Identifier",
                      "name": "id"
                    },
                    {
                      "type": "Identifier",
                      "name": "position"
                    },
                    {
                      "type": "Identifier",
                      "name": "subject"
                    },
                    {
                      "type": "Identifier",
                      "name": "move"
                    },
                    {
                      "type": "Identifier",
                      "name": "end"
                    }
                  ],
                  "defaults": [],
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": {
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
                                      "name": "parent"
                                    },
                                    "init": {
                                      "type": "MemberExpression",
                                      "computed": false,
                                      "object": {
                                        "type": "Identifier",
                                        "name": "that"
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "name": "parentNode"
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
                                      "name": "dragId"
                                    },
                                    "init": {
                                      "type": "CallExpression",
                                      "callee": {
                                        "type": "Identifier",
                                        "name": "id"
                                      },
                                      "arguments": []
                                    }
                                  },
                                  {
                                    "type": "VariableDeclarator",
                                    "id": {
                                      "type": "Identifier",
                                      "name": "dragName"
                                    },
                                    "init": {
                                      "type": "BinaryExpression",
                                      "operator": "+",
                                      "left": {
                                        "type": "Literal",
                                        "value": ".drag",
                                        "raw": "\".drag\""
                                      },
                                      "right": {
                                        "type": "ConditionalExpression",
                                        "test": {
                                          "type": "BinaryExpression",
                                          "operator": "==",
                                          "left": {
                                            "type": "Identifier",
                                            "name": "dragId"
                                          },
                                          "right": {
                                            "type": "Literal",
                                            "value": null,
                                            "raw": "null"
                                          }
                                        },
                                        "consequent": {
                                          "type": "Literal",
                                          "value": "",
                                          "raw": "\"\""
                                        },
                                        "alternate": {
                                          "type": "BinaryExpression",
                                          "operator": "+",
                                          "left": {
                                            "type": "Literal",
                                            "value": "-",
                                            "raw": "\"-\""
                                          },
                                          "right": {
                                            "type": "Identifier",
                                            "name": "dragId"
                                          }
                                        }
                                      }
                                    }
                                  },
                                  {
                                    "type": "VariableDeclarator",
                                    "id": {
                                      "type": "Identifier",
                                      "name": "dragOffset"
                                    },
                                    "init": null
                                  },
                                  {
                                    "type": "VariableDeclarator",
                                    "id": {
                                      "type": "Identifier",
                                      "name": "dragSubject"
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
                                                  "type": "CallExpression",
                                                  "callee": {
                                                    "type": "Identifier",
                                                    "name": "subject"
                                                  },
                                                  "arguments": []
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
                                                "name": "move"
                                              },
                                              "right": {
                                                "type": "Identifier",
                                                "name": "dragName"
                                              }
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
                                          "type": "BinaryExpression",
                                          "operator": "+",
                                          "left": {
                                            "type": "Identifier",
                                            "name": "end"
                                          },
                                          "right": {
                                            "type": "Identifier",
                                            "name": "dragName"
                                          }
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
                                      "name": "position0"
                                    },
                                    "init": {
                                      "type": "CallExpression",
                                      "callee": {
                                        "type": "Identifier",
                                        "name": "position"
                                      },
                                      "arguments": [
                                        {
                                          "type": "Identifier",
                                          "name": "parent"
                                        },
                                        {
                                          "type": "Identifier",
                                          "name": "dragId"
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
                                  "name": "origin"
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
                                          "name": "dragOffset"
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
                                              "name": "apply"
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
                                      }
                                    },
                                    {
                                      "type": "ExpressionStatement",
                                      "expression": {
                                        "type": "AssignmentExpression",
                                        "operator": "=",
                                        "left": {
                                          "type": "Identifier",
                                          "name": "dragOffset"
                                        },
                                        "right": {
                                          "type": "ArrayExpression",
                                          "elements": [
                                            {
                                              "type": "BinaryExpression",
                                              "operator": "-",
                                              "left": {
                                                "type": "MemberExpression",
                                                "computed": false,
                                                "object": {
                                                  "type": "Identifier",
                                                  "name": "dragOffset"
                                                },
                                                "property": {
                                                  "type": "Identifier",
                                                  "name": "x"
                                                }
                                              },
                                              "right": {
                                                "type": "MemberExpression",
                                                "computed": true,
                                                "object": {
                                                  "type": "Identifier",
                                                  "name": "position0"
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
                                                "computed": false,
                                                "object": {
                                                  "type": "Identifier",
                                                  "name": "dragOffset"
                                                },
                                                "property": {
                                                  "type": "Identifier",
                                                  "name": "y"
                                                }
                                              },
                                              "right": {
                                                "type": "MemberExpression",
                                                "computed": true,
                                                "object": {
                                                  "type": "Identifier",
                                                  "name": "position0"
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
                                          "name": "dragOffset"
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
                                            "value": "dragstart",
                                            "raw": "\"dragstart\""
                                          },
                                          "kind": "init"
                                        }
                                      ]
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
                                      "type": "VariableDeclaration",
                                      "declarations": [
                                        {
                                          "type": "VariableDeclarator",
                                          "id": {
                                            "type": "Identifier",
                                            "name": "position1"
                                          },
                                          "init": {
                                            "type": "CallExpression",
                                            "callee": {
                                              "type": "Identifier",
                                              "name": "position"
                                            },
                                            "arguments": [
                                              {
                                                "type": "Identifier",
                                                "name": "parent"
                                              },
                                              {
                                                "type": "Identifier",
                                                "name": "dragId"
                                              }
                                            ]
                                          }
                                        },
                                        {
                                          "type": "VariableDeclarator",
                                          "id": {
                                            "type": "Identifier",
                                            "name": "dx"
                                          },
                                          "init": null
                                        },
                                        {
                                          "type": "VariableDeclarator",
                                          "id": {
                                            "type": "Identifier",
                                            "name": "dy"
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
                                          "type": "Identifier",
                                          "name": "position1"
                                        },
                                        "prefix": true
                                      },
                                      "consequent": {
                                        "type": "ReturnStatement",
                                        "argument": null
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
                                          "name": "dx"
                                        },
                                        "right": {
                                          "type": "BinaryExpression",
                                          "operator": "-",
                                          "left": {
                                            "type": "MemberExpression",
                                            "computed": true,
                                            "object": {
                                              "type": "Identifier",
                                              "name": "position1"
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
                                              "name": "position0"
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
                                          "type": "Identifier",
                                          "name": "dy"
                                        },
                                        "right": {
                                          "type": "BinaryExpression",
                                          "operator": "-",
                                          "left": {
                                            "type": "MemberExpression",
                                            "computed": true,
                                            "object": {
                                              "type": "Identifier",
                                              "name": "position1"
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
                                              "name": "position0"
                                            },
                                            "property": {
                                              "type": "Literal",
                                              "value": 1,
                                              "raw": "1"
                                            }
                                          }
                                        }
                                      }
                                    },
                                    {
                                      "type": "ExpressionStatement",
                                      "expression": {
                                        "type": "AssignmentExpression",
                                        "operator": "|=",
                                        "left": {
                                          "type": "Identifier",
                                          "name": "dragged"
                                        },
                                        "right": {
                                          "type": "BinaryExpression",
                                          "operator": "|",
                                          "left": {
                                            "type": "Identifier",
                                            "name": "dx"
                                          },
                                          "right": {
                                            "type": "Identifier",
                                            "name": "dy"
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
                                          "name": "position0"
                                        },
                                        "right": {
                                          "type": "Identifier",
                                          "name": "position1"
                                        }
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
                                                  "value": "drag",
                                                  "raw": "\"drag\""
                                                },
                                                "kind": "init"
                                              },
                                              {
                                                "type": "Property",
                                                "key": {
                                                  "type": "Identifier",
                                                  "name": "x"
                                                },
                                                "value": {
                                                  "type": "BinaryExpression",
                                                  "operator": "+",
                                                  "left": {
                                                    "type": "MemberExpression",
                                                    "computed": true,
                                                    "object": {
                                                      "type": "Identifier",
                                                      "name": "position1"
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
                                                      "name": "dragOffset"
                                                    },
                                                    "property": {
                                                      "type": "Literal",
                                                      "value": 0,
                                                      "raw": "0"
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
                                                  "operator": "+",
                                                  "left": {
                                                    "type": "MemberExpression",
                                                    "computed": true,
                                                    "object": {
                                                      "type": "Identifier",
                                                      "name": "position1"
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
                                                      "name": "dragOffset"
                                                    },
                                                    "property": {
                                                      "type": "Literal",
                                                      "value": 1,
                                                      "raw": "1"
                                                    }
                                                  }
                                                },
                                                "kind": "init"
                                              },
                                              {
                                                "type": "Property",
                                                "key": {
                                                  "type": "Identifier",
                                                  "name": "dx"
                                                },
                                                "value": {
                                                  "type": "Identifier",
                                                  "name": "dx"
                                                },
                                                "kind": "init"
                                              },
                                              {
                                                "type": "Property",
                                                "key": {
                                                  "type": "Identifier",
                                                  "name": "dy"
                                                },
                                                "value": {
                                                  "type": "Identifier",
                                                  "name": "dy"
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
                                        "type": "UnaryExpression",
                                        "operator": "!",
                                        "argument": {
                                          "type": "CallExpression",
                                          "callee": {
                                            "type": "Identifier",
                                            "name": "position"
                                          },
                                          "arguments": [
                                            {
                                              "type": "Identifier",
                                              "name": "parent"
                                            },
                                            {
                                              "type": "Identifier",
                                              "name": "dragId"
                                            }
                                          ]
                                        },
                                        "prefix": true
                                      },
                                      "consequent": {
                                        "type": "ReturnStatement",
                                        "argument": null
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
                                                "name": "dragSubject"
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
                                                  "name": "move"
                                                },
                                                "right": {
                                                  "type": "Identifier",
                                                  "name": "dragName"
                                                }
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
                                            "type": "BinaryExpression",
                                            "operator": "+",
                                            "left": {
                                              "type": "Identifier",
                                              "name": "end"
                                            },
                                            "right": {
                                              "type": "Identifier",
                                              "name": "dragName"
                                            }
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
                                                  "value": "dragend",
                                                  "raw": "\"dragend\""
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
                        "name": "drag"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "origin"
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
                                "name": "origin"
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
                                "name": "origin"
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
                              "type": "Identifier",
                              "name": "drag"
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
                        "name": "drag"
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
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "name": "d3_behavior_dragTouchId"
        },
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
          "name": "d3_behavior_dragTouchSubject"
        },
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
                  "name": "target"
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
          "name": "d3_behavior_dragMouseSubject"
        },
        "params": [],
        "defaults": [],
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "ReturnStatement",
              "argument": {
                "type": "Identifier",
                "name": "d3_window"
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
  "src": "d3.behavior.drag = function () {\n    var event = d3_eventDispatch(drag, 'drag', 'dragstart', 'dragend'), origin = null, mousedown = dragstart(d3_noop, d3.mouse, d3_behavior_dragMouseSubject, 'mousemove', 'mouseup'), touchstart = dragstart(d3_behavior_dragTouchId, d3.touch, d3_behavior_dragTouchSubject, 'touchmove', 'touchend');\n    function drag() {\n        this.on('mousedown.drag', mousedown).on('touchstart.drag', touchstart);\n    }\n    function dragstart(id, position, subject, move, end) {\n        return function () {\n            var that = this, target = d3.event.target, parent = that.parentNode, dispatch = event.of(that, arguments), dragged = 0, dragId = id(), dragName = '.drag' + (dragId == null ? '' : '-' + dragId), dragOffset, dragSubject = d3.select(subject()).on(move + dragName, moved).on(end + dragName, ended), dragRestore = d3_event_dragSuppress(), position0 = position(parent, dragId);\n            if (origin) {\n                dragOffset = origin.apply(that, arguments);\n                dragOffset = [\n                    dragOffset.x - position0[0],\n                    dragOffset.y - position0[1]\n                ];\n            } else {\n                dragOffset = [\n                    0,\n                    0\n                ];\n            }\n            dispatch({ type: 'dragstart' });\n            function moved() {\n                var position1 = position(parent, dragId), dx, dy;\n                if (!position1)\n                    return;\n                dx = position1[0] - position0[0];\n                dy = position1[1] - position0[1];\n                dragged |= dx | dy;\n                position0 = position1;\n                dispatch({\n                    type: 'drag',\n                    x: position1[0] + dragOffset[0],\n                    y: position1[1] + dragOffset[1],\n                    dx: dx,\n                    dy: dy\n                });\n            }\n            function ended() {\n                if (!position(parent, dragId))\n                    return;\n                dragSubject.on(move + dragName, null).on(end + dragName, null);\n                dragRestore(dragged && d3.event.target === target);\n                dispatch({ type: 'dragend' });\n            }\n        };\n    }\n    drag.origin = function (x) {\n        if (!arguments.length)\n            return origin;\n        origin = x;\n        return drag;\n    };\n    return d3.rebind(drag, event, 'on');\n};\nfunction d3_behavior_dragTouchId() {\n    return d3.event.changedTouches[0].identifier;\n}\nfunction d3_behavior_dragTouchSubject() {\n    return d3.event.target;\n}\nfunction d3_behavior_dragMouseSubject() {\n    return d3_window;\n}"
}