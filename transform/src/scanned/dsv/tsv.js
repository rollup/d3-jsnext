{
  "filepath": "/dsv/tsv.js",
  "shared": [],
  "dependencies": [
    "d3.dsv"
  ],
  "helpers": [],
  "exports": [
    "d3.tsv"
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
              "name": "tsv"
            }
          },
          "right": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "Identifier",
                "name": "d3"
              },
              "property": {
                "type": "Identifier",
                "name": "dsv"
              }
            },
            "arguments": [
              {
                "type": "Literal",
                "value": "\t",
                "raw": "\"\\t\""
              },
              {
                "type": "Literal",
                "value": "text/tab-separated-values",
                "raw": "\"text/tab-separated-values\""
              }
            ]
          }
        }
      }
    ]
  },
  "src": "d3.tsv = d3.dsv('\\t', 'text/tab-separated-values');"
}