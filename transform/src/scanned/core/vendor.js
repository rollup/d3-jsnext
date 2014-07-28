{
  "filepath": "/core/vendor.js",
  "shared": [],
  "dependencies": [],
  "helpers": [
    "d3_vendorSymbol",
    "d3_vendorPrefixes"
  ],
  "exports": [],
  "ast": {
    "type": "Program",
    "body": [
      {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "name": "d3_vendorSymbol"
        },
        "params": [
          {
            "type": "Identifier",
            "name": "object"
          },
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
              "type": "IfStatement",
              "test": {
                "type": "BinaryExpression",
                "operator": "in",
                "left": {
                  "type": "Identifier",
                  "name": "name"
                },
                "right": {
                  "type": "Identifier",
                  "name": "object"
                }
              },
              "consequent": {
                "type": "ReturnStatement",
                "argument": {
                  "type": "Identifier",
                  "name": "name"
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
                  "name": "name"
                },
                "right": {
                  "type": "BinaryExpression",
                  "operator": "+",
                  "left": {
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
                            "name": "name"
                          },
                          "property": {
                            "type": "Identifier",
                            "name": "charAt"
                          }
                        },
                        "arguments": [
                          {
                            "type": "Literal",
                            "value": 0,
                            "raw": "0"
                          }
                        ]
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "toUpperCase"
                      }
                    },
                    "arguments": []
                  },
                  "right": {
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
                        "name": "substring"
                      }
                    },
                    "arguments": [
                      {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1"
                      }
                    ]
                  }
                }
              }
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
                        "name": "d3_vendorPrefixes"
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
                    "type": "VariableDeclaration",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "name": "prefixName"
                        },
                        "init": {
                          "type": "BinaryExpression",
                          "operator": "+",
                          "left": {
                            "type": "MemberExpression",
                            "computed": true,
                            "object": {
                              "type": "Identifier",
                              "name": "d3_vendorPrefixes"
                            },
                            "property": {
                              "type": "Identifier",
                              "name": "i"
                            }
                          },
                          "right": {
                            "type": "Identifier",
                            "name": "name"
                          }
                        }
                      }
                    ],
                    "kind": "var"
                  },
                  {
                    "type": "IfStatement",
                    "test": {
                      "type": "BinaryExpression",
                      "operator": "in",
                      "left": {
                        "type": "Identifier",
                        "name": "prefixName"
                      },
                      "right": {
                        "type": "Identifier",
                        "name": "object"
                      }
                    },
                    "consequent": {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "Identifier",
                        "name": "prefixName"
                      }
                    },
                    "alternate": null
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
        "type": "VariableDeclaration",
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "name": "d3_vendorPrefixes"
            },
            "init": {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "Literal",
                  "value": "webkit",
                  "raw": "\"webkit\""
                },
                {
                  "type": "Literal",
                  "value": "ms",
                  "raw": "\"ms\""
                },
                {
                  "type": "Literal",
                  "value": "moz",
                  "raw": "\"moz\""
                },
                {
                  "type": "Literal",
                  "value": "Moz",
                  "raw": "\"Moz\""
                },
                {
                  "type": "Literal",
                  "value": "o",
                  "raw": "\"o\""
                },
                {
                  "type": "Literal",
                  "value": "O",
                  "raw": "\"O\""
                }
              ]
            }
          }
        ]
      }
    ]
  },
  "src": "function d3_vendorSymbol(object, name) {\n    if (name in object)\n        return name;\n    name = name.charAt(0).toUpperCase() + name.substring(1);\n    for (var i = 0, n = d3_vendorPrefixes.length; i < n; ++i) {\n        var prefixName = d3_vendorPrefixes[i] + name;\n        if (prefixName in object)\n            return prefixName;\n    }\n}\nvar d3_vendorPrefixes = [\n        'webkit',\n        'ms',\n        'moz',\n        'Moz',\n        'o',\n        'O'\n    ];"
}