{
  "filepath": "/transition/text.js",
  "shared": [],
  "dependencies": [
    "d3_transitionPrototype",
    "d3_transition_tween"
  ],
  "helpers": [
    "d3_transition_text"
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
              "name": "d3_transitionPrototype"
            },
            "property": {
              "type": "Identifier",
              "name": "text"
            }
          },
          "right": {
            "type": "FunctionExpression",
            "id": null,
            "params": [
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
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "name": "d3_transition_tween"
                    },
                    "arguments": [
                      {
                        "type": "ThisExpression"
                      },
                      {
                        "type": "Literal",
                        "value": "text",
                        "raw": "\"text\""
                      },
                      {
                        "type": "Identifier",
                        "name": "value"
                      },
                      {
                        "type": "Identifier",
                        "name": "d3_transition_text"
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
          "name": "d3_transition_text"
        },
        "params": [
          {
            "type": "Identifier",
            "name": "b"
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
                "operator": "==",
                "left": {
                  "type": "Identifier",
                  "name": "b"
                },
                "right": {
                  "type": "Literal",
                  "value": null,
                  "raw": "null"
                }
              },
              "consequent": {
                "type": "ExpressionStatement",
                "expression": {
                  "type": "AssignmentExpression",
                  "operator": "=",
                  "left": {
                    "type": "Identifier",
                    "name": "b"
                  },
                  "right": {
                    "type": "Literal",
                    "value": "",
                    "raw": "\"\""
                  }
                }
              },
              "alternate": null
            },
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
                      "type": "ExpressionStatement",
                      "expression": {
                        "type": "AssignmentExpression",
                        "operator": "=",
                        "left": {
                          "type": "MemberExpression",
                          "computed": false,
                          "object": {
                            "type": "ThisExpression"
                          },
                          "property": {
                            "type": "Identifier",
                            "name": "textContent"
                          }
                        },
                        "right": {
                          "type": "Identifier",
                          "name": "b"
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
  "src": "d3_transitionPrototype.text = function (value) {\n    return d3_transition_tween(this, 'text', value, d3_transition_text);\n};\nfunction d3_transition_text(b) {\n    if (b == null)\n        b = '';\n    return function () {\n        this.textContent = b;\n    };\n}"
}