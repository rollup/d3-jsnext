{
  "filepath": "/event/drag.js",
  "shared": [],
  "dependencies": [
    "d3_document",
    "d3_vendorSymbol",
    "d3_documentElement",
    "d3.select",
    "d3_window",
    "d3_eventPreventDefault"
  ],
  "helpers": [
    "d3_event_dragSelect",
    "d3_event_dragId",
    "d3_event_dragSuppress"
  ],
  "exports": [],
  "ast": {
    "type": "Program",
    "body": [
      {
        "type": "VariableDeclaration",
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "name": "d3_event_dragSelect"
            },
            "init": {
              "type": "ConditionalExpression",
              "test": {
                "type": "BinaryExpression",
                "operator": "in",
                "left": {
                  "type": "Literal",
                  "value": "onselectstart",
                  "raw": "\"onselectstart\""
                },
                "right": {
                  "type": "Identifier",
                  "name": "d3_document"
                }
              },
              "consequent": {
                "type": "Literal",
                "value": null,
                "raw": "null"
              },
              "alternate": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "name": "d3_vendorSymbol"
                },
                "arguments": [
                  {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "name": "d3_documentElement"
                    },
                    "property": {
                      "type": "Identifier",
                      "name": "style"
                    }
                  },
                  {
                    "type": "Literal",
                    "value": "userSelect",
                    "raw": "\"userSelect\""
                  }
                ]
              }
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
              "name": "d3_event_dragId"
            },
            "init": {
              "type": "Literal",
              "value": 0,
              "raw": "0"
            }
          }
        ]
      },
      {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "name": "d3_event_dragSuppress"
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
                    "name": "name"
                  },
                  "init": {
                    "type": "BinaryExpression",
                    "operator": "+",
                    "left": {
                      "type": "Literal",
                      "value": ".dragsuppress-",
                      "raw": "\".dragsuppress-\""
                    },
                    "right": {
                      "type": "UpdateExpression",
                      "operator": "++",
                      "argument": {
                        "type": "Identifier",
                        "name": "d3_event_dragId"
                      },
                      "prefix": true
                    }
                  }
                },
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "name": "click"
                  },
                  "init": {
                    "type": "BinaryExpression",
                    "operator": "+",
                    "left": {
                      "type": "Literal",
                      "value": "click",
                      "raw": "\"click\""
                    },
                    "right": {
                      "type": "Identifier",
                      "name": "name"
                    }
                  }
                },
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
                                "type": "BinaryExpression",
                                "operator": "+",
                                "left": {
                                  "type": "Literal",
                                  "value": "touchmove",
                                  "raw": "\"touchmove\""
                                },
                                "right": {
                                  "type": "Identifier",
                                  "name": "name"
                                }
                              },
                              {
                                "type": "Identifier",
                                "name": "d3_eventPreventDefault"
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
                              "type": "Literal",
                              "value": "dragstart",
                              "raw": "\"dragstart\""
                            },
                            "right": {
                              "type": "Identifier",
                              "name": "name"
                            }
                          },
                          {
                            "type": "Identifier",
                            "name": "d3_eventPreventDefault"
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
                          "type": "Literal",
                          "value": "selectstart",
                          "raw": "\"selectstart\""
                        },
                        "right": {
                          "type": "Identifier",
                          "name": "name"
                        }
                      },
                      {
                        "type": "Identifier",
                        "name": "d3_eventPreventDefault"
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
                "name": "d3_event_dragSelect"
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
                          "name": "style"
                        },
                        "init": {
                          "type": "MemberExpression",
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "name": "d3_documentElement"
                          },
                          "property": {
                            "type": "Identifier",
                            "name": "style"
                          }
                        }
                      },
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "name": "select"
                        },
                        "init": {
                          "type": "MemberExpression",
                          "computed": true,
                          "object": {
                            "type": "Identifier",
                            "name": "style"
                          },
                          "property": {
                            "type": "Identifier",
                            "name": "d3_event_dragSelect"
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
                        "computed": true,
                        "object": {
                          "type": "Identifier",
                          "name": "style"
                        },
                        "property": {
                          "type": "Identifier",
                          "name": "d3_event_dragSelect"
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "value": "none",
                        "raw": "\"none\""
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
                "type": "FunctionExpression",
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "name": "suppressClick"
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
                            "name": "w"
                          },
                          "property": {
                            "type": "Identifier",
                            "name": "on"
                          }
                        },
                        "arguments": [
                          {
                            "type": "Identifier",
                            "name": "name"
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
                      "type": "IfStatement",
                      "test": {
                        "type": "Identifier",
                        "name": "d3_event_dragSelect"
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
                              "name": "style"
                            },
                            "property": {
                              "type": "Identifier",
                              "name": "d3_event_dragSelect"
                            }
                          },
                          "right": {
                            "type": "Identifier",
                            "name": "select"
                          }
                        }
                      },
                      "alternate": null
                    },
                    {
                      "type": "IfStatement",
                      "test": {
                        "type": "Identifier",
                        "name": "suppressClick"
                      },
                      "consequent": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "FunctionDeclaration",
                            "id": {
                              "type": "Identifier",
                              "name": "off"
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
                                        "type": "Identifier",
                                        "name": "click"
                                      },
                                      {
                                        "type": "Literal",
                                        "value": null,
                                        "raw": "null"
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
                                  "type": "Identifier",
                                  "name": "click"
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
                                            "name": "off"
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
                                  "type": "Literal",
                                  "value": true,
                                  "raw": "true"
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
                                "name": "setTimeout"
                              },
                              "arguments": [
                                {
                                  "type": "Identifier",
                                  "name": "off"
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
                      },
                      "alternate": null
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