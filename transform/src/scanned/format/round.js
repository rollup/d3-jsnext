{
  "filepath": "/format/round.js",
  "shared": [],
  "dependencies": [],
  "helpers": [],
  "exports": [
    "d3.round"
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
              "name": "round"
            }
          },
          "right": {
            "type": "FunctionExpression",
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "name": "x"
              },
              {
                "type": "Identifier",
                "name": "n"
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
                      "type": "Identifier",
                      "name": "n"
                    },
                    "consequent": {
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
                            "name": "round"
                          }
                        },
                        "arguments": [
                          {
                            "type": "BinaryExpression",
                            "operator": "*",
                            "left": {
                              "type": "Identifier",
                              "name": "x"
                            },
                            "right": {
                              "type": "AssignmentExpression",
                              "operator": "=",
                              "left": {
                                "type": "Identifier",
                                "name": "n"
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
                                    "name": "pow"
                                  }
                                },
                                "arguments": [
                                  {
                                    "type": "Literal",
                                    "value": 10,
                                    "raw": "10"
                                  },
                                  {
                                    "type": "Identifier",
                                    "name": "n"
                                  }
                                ]
                              }
                            }
                          }
                        ]
                      },
                      "right": {
                        "type": "Identifier",
                        "name": "n"
                      }
                    },
                    "alternate": {
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
                          "name": "round"
                        }
                      },
                      "arguments": [
                        {
                          "type": "Identifier",
                          "name": "x"
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
          }
        }
      }
    ]
  },
  "src": "d3.round = function (x, n) {\n    return n ? Math.round(x * (n = Math.pow(10, n))) / n : Math.round(x);\n};"
}