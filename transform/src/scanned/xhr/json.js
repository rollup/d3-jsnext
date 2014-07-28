{
  "filepath": "/xhr/json.js",
  "shared": [],
  "dependencies": [
    "d3_xhr"
  ],
  "helpers": [
    "d3_json"
  ],
  "exports": [
    "d3.json"
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
              "name": "json"
            }
          },
          "right": {
            "type": "FunctionExpression",
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "name": "url"
              },
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
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "name": "d3_xhr"
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "name": "url"
                      },
                      {
                        "type": "Literal",
                        "value": "application/json",
                        "raw": "\"application/json\""
                      },
                      {
                        "type": "Identifier",
                        "name": "d3_json"
                      },
                      {
                        "type": "Identifier",
                        "name": "callback"
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
          "name": "d3_json"
        },
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
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "name": "JSON"
                  },
                  "property": {
                    "type": "Identifier",
                    "name": "parse"
                  }
                },
                "arguments": [
                  {
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
  },
  "src": "d3.json = function (url, callback) {\n    return d3_xhr(url, 'application/json', d3_json, callback);\n};\nfunction d3_json(request) {\n    return JSON.parse(request.responseText);\n}"
}