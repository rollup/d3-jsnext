{
  "filepath": "/core/array.js",
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
  "dependencies": [],
  "helpers": [
    "d3_arraySlice"
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
              "name": "d3_arraySlice"
            },
            "init": {
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "ArrayExpression",
                "elements": []
              },
              "property": {
                "type": "Identifier",
                "name": "slice"
              }
            }
          }
        ]
      },
      {
        "type": "ExpressionStatement",
        "expression": {
          "type": "AssignmentExpression",
          "left": {
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
          "operator": "=",
          "right": {
            "type": "FunctionExpression",
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "name": "list"
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
                        "name": "d3_arraySlice"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "call"
                      }
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "name": "list"
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
        },
        "_isReplacement": true
      }
    ]
  }
}