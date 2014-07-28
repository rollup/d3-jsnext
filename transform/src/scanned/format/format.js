{
  "filepath": "/format/format.js",
  "shared": [],
  "dependencies": [
    "d3_locale_enUS"
  ],
  "helpers": [],
  "exports": [
    "d3.format"
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
              "name": "format"
            }
          },
          "right": {
            "type": "MemberExpression",
            "computed": false,
            "object": {
              "type": "Identifier",
              "name": "d3_locale_enUS"
            },
            "property": {
              "type": "Identifier",
              "name": "numberFormat"
            }
          }
        }
      }
    ]
  },
  "src": "d3.format = d3_locale_enUS.numberFormat;"
}