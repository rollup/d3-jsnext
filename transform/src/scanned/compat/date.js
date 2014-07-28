{
  "filepath": "/compat/date.js",
  "shared": [],
  "dependencies": [],
  "helpers": [],
  "exports": [],
  "ast": {
    "type": "Program",
    "body": [
      {
        "type": "IfStatement",
        "test": {
          "type": "UnaryExpression",
          "operator": "!",
          "argument": {
            "type": "MemberExpression",
            "computed": false,
            "object": {
              "type": "Identifier",
              "name": "Date"
            },
            "property": {
              "type": "Identifier",
              "name": "now"
            }
          },
          "prefix": true
        },
        "consequent": {
          "type": "ExpressionStatement",
          "expression": {
            "type": "AssignmentExpression",
            "operator": "=",
            "left": {
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "Identifier",
                "name": "Date"
              },
              "property": {
                "type": "Identifier",
                "name": "now"
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
                      "type": "UnaryExpression",
                      "operator": "+",
                      "argument": {
                        "type": "NewExpression",
                        "callee": {
                          "type": "Identifier",
                          "name": "Date"
                        },
                        "arguments": []
                      },
                      "prefix": true
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
        "alternate": null
      }
    ]
  },
  "src": "if (!Date.now)\n    Date.now = function () {\n        return +new Date();\n    };"
}