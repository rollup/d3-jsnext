{
  "filepath": "/core/document.js",
  "shared": [],
  "dependencies": [
    "d3_array"
  ],
  "helpers": [
    "d3_document",
    "d3_documentElement",
    "d3_window"
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
              "name": "d3_document"
            },
            "init": {
              "type": "Identifier",
              "name": "document"
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
              "name": "d3_documentElement"
            },
            "init": {
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "Identifier",
                "name": "d3_document"
              },
              "property": {
                "type": "Identifier",
                "name": "documentElement"
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
              "name": "d3_window"
            },
            "init": {
              "type": "Identifier",
              "name": "window"
            }
          }
        ]
      },
      {
        "type": "TryStatement",
        "block": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "ExpressionStatement",
              "expression": {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "MemberExpression",
                  "computed": true,
                  "object": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "name": "d3_array"
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
                          "name": "childNodes"
                        }
                      }
                    ]
                  },
                  "property": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0"
                  }
                },
                "property": {
                  "type": "Identifier",
                  "name": "nodeType"
                }
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
              "name": "e"
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
                      "name": "d3_array"
                    },
                    "right": {
                      "type": "FunctionExpression",
                      "id": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "name": "list"
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
                                  "type": "MemberExpression",
                                  "computed": false,
                                  "object": {
                                    "type": "Identifier",
                                    "name": "list"
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
                                  "name": "array"
                                },
                                "init": {
                                  "type": "NewExpression",
                                  "callee": {
                                    "type": "Identifier",
                                    "name": "Array"
                                  },
                                  "arguments": [
                                    {
                                      "type": "Identifier",
                                      "name": "i"
                                    }
                                  ]
                                }
                              }
                            ],
                            "kind": "var"
                          },
                          {
                            "type": "WhileStatement",
                            "test": {
                              "type": "UpdateExpression",
                              "operator": "--",
                              "argument": {
                                "type": "Identifier",
                                "name": "i"
                              },
                              "prefix": false
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
                                    "name": "array"
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "name": "i"
                                  }
                                },
                                "right": {
                                  "type": "MemberExpression",
                                  "computed": true,
                                  "object": {
                                    "type": "Identifier",
                                    "name": "list"
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
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "Identifier",
                              "name": "array"
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
  },
  "src": "var d3_document = document;\nvar d3_documentElement = d3_document.documentElement;\nvar d3_window = window;\ntry {\n    d3_array(d3_documentElement.childNodes)[0].nodeType;\n} catch (e) {\n    d3_array = function (list) {\n        var i = list.length, array = new Array(i);\n        while (i--)\n            array[i] = list[i];\n        return array;\n    };\n}"
}