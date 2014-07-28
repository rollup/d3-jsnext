{
  "filepath": "/selection/insert.js",
  "shared": [],
  "dependencies": [
    "d3_selectionPrototype",
    "d3_selection_creator",
    "d3_selection_selector"
  ],
  "helpers": [],
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
              "name": "insert"
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
                "name": "before"
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
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "name": "before"
                    },
                    "right": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "name": "d3_selection_selector"
                      },
                      "arguments": [
                        {
                          "type": "Identifier",
                          "name": "before"
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
                                    "name": "insertBefore"
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
                                  },
                                  {
                                    "type": "LogicalExpression",
                                    "operator": "||",
                                    "left": {
                                      "type": "CallExpression",
                                      "callee": {
                                        "type": "MemberExpression",
                                        "computed": false,
                                        "object": {
                                          "type": "Identifier",
                                          "name": "before"
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
                                    },
                                    "right": {
                                      "type": "Literal",
                                      "value": null,
                                      "raw": "null"
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
  },
  "src": "d3_selectionPrototype.insert = function (name, before) {\n    name = d3_selection_creator(name);\n    before = d3_selection_selector(before);\n    return this.select(function () {\n        return this.insertBefore(name.apply(this, arguments), before.apply(this, arguments) || null);\n    });\n};"
}