{
  "filepath": "/selection/interrupt.js",
  "shared": [],
  "dependencies": [
    "d3_selectionPrototype"
  ],
  "helpers": [
    "d3_selection_interrupt"
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
              "name": "interrupt"
            }
          },
          "right": {
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
                        "name": "each"
                      }
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "name": "d3_selection_interrupt"
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
          "name": "d3_selection_interrupt"
        },
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
                    "name": "lock"
                  },
                  "init": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "ThisExpression"
                    },
                    "property": {
                      "type": "Identifier",
                      "name": "__transition__"
                    }
                  }
                }
              ],
              "kind": "var"
            },
            {
              "type": "IfStatement",
              "test": {
                "type": "Identifier",
                "name": "lock"
              },
              "consequent": {
                "type": "ExpressionStatement",
                "expression": {
                  "type": "UpdateExpression",
                  "operator": "++",
                  "argument": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "name": "lock"
                    },
                    "property": {
                      "type": "Identifier",
                      "name": "active"
                    }
                  },
                  "prefix": true
                }
              },
              "alternate": null
            }
          ]
        },
        "rest": null,
        "generator": false,
        "expression": false
      }
    ]
  },
  "src": "d3_selectionPrototype.interrupt = function () {\n    return this.each(d3_selection_interrupt);\n};\nfunction d3_selection_interrupt() {\n    var lock = this.__transition__;\n    if (lock)\n        ++lock.active;\n}"
}