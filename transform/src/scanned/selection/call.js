{
  "filepath": "/selection/call.js",
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
    "d3_selectionPrototype"
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
              "name": "call"
            }
          },
          "right": {
            "type": "FunctionExpression",
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "name": "callback"
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
                        "name": "args"
                      },
                      "init": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "MemberExpression",
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "name": "GLOBAL"
                          },
                          "property": {
                            "type": "Identifier",
                            "name": "d3_array"
                          },
                          "_isReplacement": true
                        },
                        "arguments": [
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
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "name": "callback"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "apply"
                      }
                    },
                    "arguments": [
                      {
                        "type": "AssignmentExpression",
                        "operator": "=",
                        "left": {
                          "type": "MemberExpression",
                          "computed": true,
                          "object": {
                            "type": "Identifier",
                            "name": "args"
                          },
                          "property": {
                            "type": "Literal",
                            "value": 0,
                            "raw": "0"
                          }
                        },
                        "right": {
                          "type": "ThisExpression"
                        }
                      },
                      {
                        "type": "Identifier",
                        "name": "args"
                      }
                    ]
                  }
                },
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "ThisExpression"
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