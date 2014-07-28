{
  "filepath": "/compat/style.js",
  "shared": [],
  "dependencies": [
    "d3_document",
    "d3_window"
  ],
  "helpers": [
    "d3_element_prototype",
    "d3_element_setAttribute",
    "d3_element_setAttributeNS",
    "d3_style_prototype",
    "d3_style_setProperty"
  ],
  "exports": [],
  "ast": {
    "type": "Program",
    "body": [
      {
        "type": "TryStatement",
        "block": {
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
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "name": "d3_document"
                        },
                        "property": {
                          "type": "Identifier",
                          "name": "createElement"
                        }
                      },
                      "arguments": [
                        {
                          "type": "Literal",
                          "value": "div",
                          "raw": "\"div\""
                        }
                      ]
                    },
                    "property": {
                      "type": "Identifier",
                      "name": "style"
                    }
                  },
                  "property": {
                    "type": "Identifier",
                    "name": "setProperty"
                  }
                },
                "arguments": [
                  {
                    "type": "Literal",
                    "value": "opacity",
                    "raw": "\"opacity\""
                  },
                  {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0"
                  },
                  {
                    "type": "Literal",
                    "value": "",
                    "raw": "\"\""
                  }
                ]
              }
            }
          ]
        },
        "guardedHandlers": [],
        "handlers": [
          {
            "type": "CatchClause",
            "param": {
              "type": "Identifier",
              "name": "error"
            },
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "VariableDeclaration",
                  "kind": "var",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "name": "d3_element_prototype"
                      },
                      "init": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "MemberExpression",
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "name": "d3_window"
                          },
                          "property": {
                            "type": "Identifier",
                            "name": "Element"
                          }
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
                  "type": "VariableDeclaration",
                  "kind": "var",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "name": "d3_element_setAttribute"
                      },
                      "init": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "name": "d3_element_prototype"
                        },
                        "property": {
                          "type": "Identifier",
                          "name": "setAttribute"
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
                        "name": "d3_element_setAttributeNS"
                      },
                      "init": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "name": "d3_element_prototype"
                        },
                        "property": {
                          "type": "Identifier",
                          "name": "setAttributeNS"
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
                        "name": "d3_style_prototype"
                      },
                      "init": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "MemberExpression",
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "name": "d3_window"
                          },
                          "property": {
                            "type": "Identifier",
                            "name": "CSSStyleDeclaration"
                          }
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
                  "type": "VariableDeclaration",
                  "kind": "var",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "name": "d3_style_setProperty"
                      },
                      "init": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "name": "d3_style_prototype"
                        },
                        "property": {
                          "type": "Identifier",
                          "name": "setProperty"
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
                        "name": "d3_element_prototype"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "setAttribute"
                      }
                    },
                    "right": {
                      "type": "FunctionExpression",
                      "id": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "name": "name"
                        },
                        {
                          "type": "Identifier",
                          "name": "value"
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
                                  "name": "d3_element_setAttribute"
                                },
                                "property": {
                                  "type": "Identifier",
                                  "name": "call"
                                }
                              },
                              "arguments": [
                                {
                                  "type": "ThisExpression"
                                },
                                {
                                  "type": "Identifier",
                                  "name": "name"
                                },
                                {
                                  "type": "BinaryExpression",
                                  "operator": "+",
                                  "left": {
                                    "type": "Identifier",
                                    "name": "value"
                                  },
                                  "right": {
                                    "type": "Literal",
                                    "value": "",
                                    "raw": "\"\""
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
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "name": "d3_element_prototype"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "setAttributeNS"
                      }
                    },
                    "right": {
                      "type": "FunctionExpression",
                      "id": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "name": "space"
                        },
                        {
                          "type": "Identifier",
                          "name": "local"
                        },
                        {
                          "type": "Identifier",
                          "name": "value"
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
                                  "name": "d3_element_setAttributeNS"
                                },
                                "property": {
                                  "type": "Identifier",
                                  "name": "call"
                                }
                              },
                              "arguments": [
                                {
                                  "type": "ThisExpression"
                                },
                                {
                                  "type": "Identifier",
                                  "name": "space"
                                },
                                {
                                  "type": "Identifier",
                                  "name": "local"
                                },
                                {
                                  "type": "BinaryExpression",
                                  "operator": "+",
                                  "left": {
                                    "type": "Identifier",
                                    "name": "value"
                                  },
                                  "right": {
                                    "type": "Literal",
                                    "value": "",
                                    "raw": "\"\""
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
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "name": "d3_style_prototype"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "setProperty"
                      }
                    },
                    "right": {
                      "type": "FunctionExpression",
                      "id": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "name": "name"
                        },
                        {
                          "type": "Identifier",
                          "name": "value"
                        },
                        {
                          "type": "Identifier",
                          "name": "priority"
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
                                  "name": "d3_style_setProperty"
                                },
                                "property": {
                                  "type": "Identifier",
                                  "name": "call"
                                }
                              },
                              "arguments": [
                                {
                                  "type": "ThisExpression"
                                },
                                {
                                  "type": "Identifier",
                                  "name": "name"
                                },
                                {
                                  "type": "BinaryExpression",
                                  "operator": "+",
                                  "left": {
                                    "type": "Identifier",
                                    "name": "value"
                                  },
                                  "right": {
                                    "type": "Literal",
                                    "value": "",
                                    "raw": "\"\""
                                  }
                                },
                                {
                                  "type": "Identifier",
                                  "name": "priority"
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
                }
              ]
            }
          }
        ],
        "finalizer": null
      }
    ]
  }
}