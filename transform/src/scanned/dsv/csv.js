{
  "filepath": "/dsv/csv.js",
  "shared": [],
  "dependencies": [
    "d3.dsv"
  ],
  "helpers": [],
  "exports": [
    "d3.csv"
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
              "name": "csv"
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
                "value": ",",
                "raw": "\",\""
              },
              {
                "type": "Literal",
                "value": "text/csv",
                "raw": "\"text/csv\""
              }
            ]
          }
        }
      }
    ]
  }
}