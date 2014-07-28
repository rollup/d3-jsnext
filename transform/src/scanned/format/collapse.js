{
  "filepath": "/format/collapse.js",
  "shared": [],
  "dependencies": [],
  "helpers": [
    "d3_collapse"
  ],
  "exports": [],
  "ast": {
    "type": "Program",
    "body": [
      {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "name": "d3_collapse"
        },
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
                        "name": "trim"
                      }
                    },
                    "arguments": []
                  },
                  "property": {
                    "type": "Identifier",
                    "name": "replace"
                  }
                },
                "arguments": [
                  {
                    "type": "Literal",
                    "value": {},
                    "raw": "/\\s+/g"
                  },
                  {
                    "type": "Literal",
                    "value": " ",
                    "raw": "\" \""
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
  "src": "function d3_collapse(s) {\n    return s.trim().replace(/\\s+/g, ' ');\n}"
}