{
  "filepath": "/core/rebind.js",
  "shared": [],
  "dependencies": [],
  "helpers": [
    "d3_rebind"
  ],
  "exports": [
    "d3.rebind"
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
              "name": "rebind"
            }
          },
          "right": {
            "type": "FunctionExpression",
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "name": "target"
              },
              {
                "type": "Identifier",
                "name": "source"
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
                        "name": "i"
                      },
                      "init": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1"
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
                    },
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "name": "method"
                      },
                      "init": null
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
                          "name": "target"
                        },
                        "property": {
                          "type": "AssignmentExpression",
                          "operator": "=",
                          "left": {
                            "type": "Identifier",
                            "name": "method"
                          },
                          "right": {
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
                        }
                      },
                      "right": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "Identifier",
                          "name": "d3_rebind"
                        },
                        "arguments": [
                          {
                            "type": "Identifier",
                            "name": "target"
                          },
                          {
                            "type": "Identifier",
                            "name": "source"
                          },
                          {
                            "type": "MemberExpression",
                            "computed": true,
                            "object": {
                              "type": "Identifier",
                              "name": "source"
                            },
                            "property": {
                              "type": "Identifier",
                              "name": "method"
                            }
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
                    "name": "target"
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
          "name": "d3_rebind"
        },
        "params": [
          {
            "type": "Identifier",
            "name": "target"
          },
          {
            "type": "Identifier",
            "name": "source"
          },
          {
            "type": "Identifier",
            "name": "method"
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
                            "name": "value"
                          },
                          "init": {
                            "type": "CallExpression",
                            "callee": {
                              "type": "MemberExpression",
                              "computed": false,
                              "object": {
                                "type": "Identifier",
                                "name": "method"
                              },
                              "property": {
                                "type": "Identifier",
                                "name": "apply"
                              }
                            },
                            "arguments": [
                              {
                                "type": "Identifier",
                                "name": "source"
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
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "ConditionalExpression",
                        "test": {
                          "type": "BinaryExpression",
                          "operator": "===",
                          "left": {
                            "type": "Identifier",
                            "name": "value"
                          },
                          "right": {
                            "type": "Identifier",
                            "name": "source"
                          }
                        },
                        "consequent": {
                          "type": "Identifier",
                          "name": "target"
                        },
                        "alternate": {
                          "type": "Identifier",
                          "name": "value"
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
  "src": "d3.rebind = function (target, source) {\n    var i = 1, n = arguments.length, method;\n    while (++i < n)\n        target[method = arguments[i]] = d3_rebind(target, source, source[method]);\n    return target;\n};\nfunction d3_rebind(target, source, method) {\n    return function () {\n        var value = method.apply(source, arguments);\n        return value === source ? target : value;\n    };\n}"
}