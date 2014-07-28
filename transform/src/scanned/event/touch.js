{
  "filepath": "/event/touch.js",
  "shared": [],
  "dependencies": [
    "d3_eventSource",
    "d3_mousePoint"
  ],
  "helpers": [],
  "exports": [
    "d3.touch"
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
              "name": "touch"
            }
          },
          "right": {
            "type": "FunctionExpression",
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "name": "container"
              },
              {
                "type": "Identifier",
                "name": "touches"
              },
              {
                "type": "Identifier",
                "name": "identifier"
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
                      "value": 3,
                      "raw": "3"
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
                            "name": "identifier"
                          },
                          "right": {
                            "type": "Identifier",
                            "name": "touches"
                          }
                        },
                        {
                          "type": "AssignmentExpression",
                          "operator": "=",
                          "left": {
                            "type": "Identifier",
                            "name": "touches"
                          },
                          "right": {
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "Identifier",
                                "name": "d3_eventSource"
                              },
                              "arguments": []
                            },
                            "property": {
                              "type": "Identifier",
                              "name": "changedTouches"
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
                    "type": "Identifier",
                    "name": "touches"
                  },
                  "consequent": {
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
                        },
                        {
                          "type": "VariableDeclarator",
                          "id": {
                            "type": "Identifier",
                            "name": "touch"
                          },
                          "init": null
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
                          "type": "IfStatement",
                          "test": {
                            "type": "BinaryExpression",
                            "operator": "===",
                            "left": {
                              "type": "MemberExpression",
                              "computed": false,
                              "object": {
                                "type": "AssignmentExpression",
                                "operator": "=",
                                "left": {
                                  "type": "Identifier",
                                  "name": "touch"
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
                              },
                              "property": {
                                "type": "Identifier",
                                "name": "identifier"
                              }
                            },
                            "right": {
                              "type": "Identifier",
                              "name": "identifier"
                            }
                          },
                          "consequent": {
                            "type": "BlockStatement",
                            "body": [
                              {
                                "type": "ReturnStatement",
                                "argument": {
                                  "type": "CallExpression",
                                  "callee": {
                                    "type": "Identifier",
                                    "name": "d3_mousePoint"
                                  },
                                  "arguments": [
                                    {
                                      "type": "Identifier",
                                      "name": "container"
                                    },
                                    {
                                      "type": "Identifier",
                                      "name": "touch"
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
                  "alternate": null
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
  },
  "src": "d3.touch = function (container, touches, identifier) {\n    if (arguments.length < 3)\n        identifier = touches, touches = d3_eventSource().changedTouches;\n    if (touches)\n        for (var i = 0, n = touches.length, touch; i < n; ++i) {\n            if ((touch = touches[i]).identifier === identifier) {\n                return d3_mousePoint(container, touch);\n            }\n        }\n};"
}