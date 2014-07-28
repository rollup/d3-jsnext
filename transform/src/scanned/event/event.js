{
  "filepath": "/event/event.js",
  "shared": [
    {
      "path": "/_global.js",
      "properties": [
        "d3_array",
        "d3_date",
        "d3.event"
      ],
      "name": "GLOBAL"
    }
  ],
  "dependencies": [
    "d3.event.preventDefault",
    "d3_dispatch",
    "d3_dispatch_event"
  ],
  "helpers": [
    "d3_eventPreventDefault",
    "d3_eventSource",
    "d3_eventDispatch"
  ],
  "exports": [],
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
              "name": "event"
            }
          },
          "right": {
            "type": "Literal",
            "value": null,
            "raw": "null"
          }
        }
      },
      {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "name": "d3_eventPreventDefault"
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
                    "name": "preventDefault"
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
      },
      {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "name": "d3_eventSource"
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
                    "name": "e"
                  },
                  "init": {
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
                  }
                },
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "name": "s"
                  },
                  "init": null
                }
              ],
              "kind": "var"
            },
            {
              "type": "WhileStatement",
              "test": {
                "type": "AssignmentExpression",
                "operator": "=",
                "left": {
                  "type": "Identifier",
                  "name": "s"
                },
                "right": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "name": "e"
                  },
                  "property": {
                    "type": "Identifier",
                    "name": "sourceEvent"
                  }
                }
              },
              "body": {
                "type": "ExpressionStatement",
                "expression": {
                  "type": "AssignmentExpression",
                  "operator": "=",
                  "left": {
                    "type": "Identifier",
                    "name": "e"
                  },
                  "right": {
                    "type": "Identifier",
                    "name": "s"
                  }
                }
              }
            },
            {
              "type": "ReturnStatement",
              "argument": {
                "type": "Identifier",
                "name": "e"
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
          "name": "d3_eventDispatch"
        },
        "params": [
          {
            "type": "Identifier",
            "name": "target"
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
                    "name": "dispatch"
                  },
                  "init": {
                    "type": "NewExpression",
                    "callee": {
                      "type": "Identifier",
                      "name": "d3_dispatch"
                    },
                    "arguments": []
                  }
                },
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
                      "name": "arguments"
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
            {
              "type": "WhileStatement",
              "test": {
                "type": "BinaryExpression",
                "operator": "<",
                "left": {
                  "type": "UpdateExpression",
                  "operator": "++",
                  "argument": {
                    "type": "Identifier",
                    "name": "i"
                  },
                  "prefix": true
                },
                "right": {
                  "type": "Identifier",
                  "name": "n"
                }
              },
              "body": {
                "type": "ExpressionStatement",
                "expression": {
                  "type": "AssignmentExpression",
                  "operator": "=",
                  "left": {
                    "type": "MemberExpression",
                    "computed": true,
                    "object": {
                      "type": "Identifier",
                      "name": "dispatch"
                    },
                    "property": {
                      "type": "MemberExpression",
                      "computed": true,
                      "object": {
                        "type": "Identifier",
                        "name": "arguments"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "i"
                      }
                    }
                  },
                  "right": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "name": "d3_dispatch_event"
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "name": "dispatch"
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
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "name": "dispatch"
                  },
                  "property": {
                    "type": "Identifier",
                    "name": "of"
                  }
                },
                "right": {
                  "type": "FunctionExpression",
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "name": "thiz"
                    },
                    {
                      "type": "Identifier",
                      "name": "argumentz"
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
                          "params": [
                            {
                              "type": "Identifier",
                              "name": "e1"
                            }
                          ],
                          "defaults": [],
                          "body": {
                            "type": "BlockStatement",
                            "body": [
                              {
                                "type": "TryStatement",
                                "block": {
                                  "type": "BlockStatement",
                                  "body": [
                                    {
                                      "type": "VariableDeclaration",
                                      "declarations": [
                                        {
                                          "type": "VariableDeclarator",
                                          "id": {
                                            "type": "Identifier",
                                            "name": "e0"
                                          },
                                          "init": {
                                            "type": "AssignmentExpression",
                                            "operator": "=",
                                            "left": {
                                              "type": "MemberExpression",
                                              "computed": false,
                                              "object": {
                                                "type": "Identifier",
                                                "name": "e1"
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "name": "sourceEvent"
                                              }
                                            },
                                            "right": {
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
                                            "type": "Identifier",
                                            "name": "e1"
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
                                            "name": "event"
                                          }
                                        },
                                        "right": {
                                          "type": "Identifier",
                                          "name": "e1"
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
                                            "type": "MemberExpression",
                                            "computed": true,
                                            "object": {
                                              "type": "Identifier",
                                              "name": "dispatch"
                                            },
                                            "property": {
                                              "type": "MemberExpression",
                                              "computed": false,
                                              "object": {
                                                "type": "Identifier",
                                                "name": "e1"
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "name": "type"
                                              }
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
                                            "name": "thiz"
                                          },
                                          {
                                            "type": "Identifier",
                                            "name": "argumentz"
                                          }
                                        ]
                                      }
                                    }
                                  ]
                                },
                                "guardedHandlers": [],
                                "handlers": [],
                                "finalizer": {
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
                                            "name": "d3"
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "name": "event"
                                          }
                                        },
                                        "right": {
                                          "type": "Identifier",
                                          "name": "e0"
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
                "name": "dispatch"
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
  "src": "d3.event = null;\nfunction d3_eventPreventDefault() {\n    d3.event.preventDefault();\n}\nfunction d3_eventSource() {\n    var e = d3.event, s;\n    while (s = e.sourceEvent)\n        e = s;\n    return e;\n}\nfunction d3_eventDispatch(target) {\n    var dispatch = new d3_dispatch(), i = 0, n = arguments.length;\n    while (++i < n)\n        dispatch[arguments[i]] = d3_dispatch_event(dispatch);\n    dispatch.of = function (thiz, argumentz) {\n        return function (e1) {\n            try {\n                var e0 = e1.sourceEvent = d3.event;\n                e1.target = target;\n                d3.event = e1;\n                dispatch[e1.type].apply(thiz, argumentz);\n            } finally {\n                d3.event = e0;\n            }\n        };\n    };\n    return dispatch;\n}"
}