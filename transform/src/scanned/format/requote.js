{
  "filepath": "/format/requote.js",
  "shared": [],
  "dependencies": [],
  "helpers": [
    "d3_requote_re"
  ],
  "exports": [
    "d3.requote"
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
              "name": "requote"
            }
          },
          "right": {
            "type": "FunctionExpression",
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "name": "s"
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
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "name": "s"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "replace"
                      }
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "name": "d3_requote_re"
                      },
                      {
                        "type": "Literal",
                        "value": "\\$&",
                        "raw": "\"\\\\$&\""
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
        "type": "VariableDeclaration",
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "name": "d3_requote_re"
            },
            "init": {
              "type": "Literal",
              "value": {},
              "raw": "/[\\\\\\^\\$\\*\\+\\?\\|\\[\\]\\(\\)\\.\\{\\}]/g"
            }
          }
        ]
      }
    ]
  }
}