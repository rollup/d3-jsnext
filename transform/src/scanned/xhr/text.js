{
  "filepath": "/xhr/text.js",
  "shared": [],
  "dependencies": [
    "d3_xhrType"
  ],
  "helpers": [],
  "exports": [
    "d3.text"
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
              "name": "text"
            }
          },
          "right": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "name": "d3_xhrType"
            },
            "arguments": [
              {
                "type": "FunctionExpression",
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "name": "request"
                  }
                ],
                "defaults": [],
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "name": "request"
                        },
                        "property": {
                          "type": "Identifier",
                          "name": "responseText"
                        }
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
      }
    ]
  }
}