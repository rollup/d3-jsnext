{
  "filepath": "/core/subclass.js",
  "shared": [],
  "dependencies": [],
  "helpers": [
    "d3_subclass"
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
              "name": "d3_subclass"
            },
            "init": {
              "type": "ConditionalExpression",
              "test": {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "ObjectExpression",
                  "properties": []
                },
                "property": {
                  "type": "Identifier",
                  "name": "__proto__"
                }
              },
              "consequent": {
                "type": "FunctionExpression",
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "name": "object"
                  },
                  {
                    "type": "Identifier",
                    "name": "prototype"
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
                          "type": "MemberExpression",
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "name": "object"
                          },
                          "property": {
                            "type": "Identifier",
                            "name": "__proto__"
                          }
                        },
                        "right": {
                          "type": "Identifier",
                          "name": "prototype"
                        }
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
                "params": [
                  {
                    "type": "Identifier",
                    "name": "object"
                  },
                  {
                    "type": "Identifier",
                    "name": "prototype"
                  }
                ],
                "defaults": [],
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ForInStatement",
                      "left": {
                        "type": "VariableDeclaration",
                        "declarations": [
                          {
                            "type": "VariableDeclarator",
                            "id": {
                              "type": "Identifier",
                              "name": "property"
                            },
                            "init": null
                          }
                        ],
                        "kind": "var"
                      },
                      "right": {
                        "type": "Identifier",
                        "name": "prototype"
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
                              "name": "object"
                            },
                            "property": {
                              "type": "Identifier",
                              "name": "property"
                            }
                          },
                          "right": {
                            "type": "MemberExpression",
                            "computed": true,
                            "object": {
                              "type": "Identifier",
                              "name": "prototype"
                            },
                            "property": {
                              "type": "Identifier",
                              "name": "property"
                            }
                          }
                        }
                      },
                      "each": false
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
    ]
  }
}