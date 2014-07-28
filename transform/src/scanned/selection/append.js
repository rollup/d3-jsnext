{
  "filepath": "/selection/append.js",
  "shared": [],
  "dependencies": [
    "d3_selectionPrototype",
    "d3.ns.qualify"
  ],
  "helpers": [
    "d3_selection_creator"
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
              "name": "d3_selectionPrototype"
            },
            "property": {
              "type": "Identifier",
              "name": "append"
            }
          },
          "right": {
            "type": "FunctionExpression",
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "name": "name"
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
                      "name": "name"
                    },
                    "right": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "name": "d3_selection_creator"
                      },
                      "arguments": [
                        {
                          "type": "Identifier",
                          "name": "name"
                        }
                      ]
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
                        "type": "ThisExpression"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "select"
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
                              "type": "ReturnStatement",
                              "argument": {
                                "type": "CallExpression",
                                "callee": {
                                  "type": "MemberExpression",
                                  "computed": false,
                                  "object": {
                                    "type": "ThisExpression"
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "name": "appendChild"
                                  }
                                },
                                "arguments": [
                                  {
                                    "type": "CallExpression",
                                    "callee": {
                                      "type": "MemberExpression",
                                      "computed": false,
                                      "object": {
                                        "type": "Identifier",
                                        "name": "name"
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "name": "apply"
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
          "name": "d3_selection_creator"
        },
        "params": [
          {
            "type": "Identifier",
            "name": "name"
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
                  "operator": "===",
                  "left": {
                    "type": "UnaryExpression",
                    "operator": "typeof",
                    "argument": {
                      "type": "Identifier",
                      "name": "name"
                    },
                    "prefix": true
                  },
                  "right": {
                    "type": "Literal",
                    "value": "function",
                    "raw": "\"function\""
                  }
                },
                "consequent": {
                  "type": "Identifier",
                  "name": "name"
                },
                "alternate": {
                  "type": "ConditionalExpression",
                  "test": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "name": "name"
                      },
                      "right": {
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
                              "name": "ns"
                            }
                          },
                          "property": {
                            "type": "Identifier",
                            "name": "qualify"
                          }
                        },
                        "arguments": [
                          {
                            "type": "Identifier",
                            "name": "name"
                          }
                        ]
                      }
                    },
                    "property": {
                      "type": "Identifier",
                      "name": "local"
                    }
                  },
                  "consequent": {
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
                                "type": "MemberExpression",
                                "computed": false,
                                "object": {
                                  "type": "ThisExpression"
                                },
                                "property": {
                                  "type": "Identifier",
                                  "name": "ownerDocument"
                                }
                              },
                              "property": {
                                "type": "Identifier",
                                "name": "createElementNS"
                              }
                            },
                            "arguments": [
                              {
                                "type": "MemberExpression",
                                "computed": false,
                                "object": {
                                  "type": "Identifier",
                                  "name": "name"
                                },
                                "property": {
                                  "type": "Identifier",
                                  "name": "space"
                                }
                              },
                              {
                                "type": "MemberExpression",
                                "computed": false,
                                "object": {
                                  "type": "Identifier",
                                  "name": "name"
                                },
                                "property": {
                                  "type": "Identifier",
                                  "name": "local"
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
                  "alternate": {
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
                                "type": "MemberExpression",
                                "computed": false,
                                "object": {
                                  "type": "ThisExpression"
                                },
                                "property": {
                                  "type": "Identifier",
                                  "name": "ownerDocument"
                                }
                              },
                              "property": {
                                "type": "Identifier",
                                "name": "createElementNS"
                              }
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
                                  "name": "namespaceURI"
                                }
                              },
                              {
                                "type": "Identifier",
                                "name": "name"
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
            }
          ]
        },
        "rest": null,
        "generator": false,
        "expression": false
      }
    ]
  },
  "src": "d3_selectionPrototype.append = function (name) {\n    name = d3_selection_creator(name);\n    return this.select(function () {\n        return this.appendChild(name.apply(this, arguments));\n    });\n};\nfunction d3_selection_creator(name) {\n    return typeof name === 'function' ? name : (name = d3.ns.qualify(name)).local ? function () {\n        return this.ownerDocument.createElementNS(name.space, name.local);\n    } : function () {\n        return this.ownerDocument.createElementNS(this.namespaceURI, name);\n    };\n}"
}