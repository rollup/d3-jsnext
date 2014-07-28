{
  "filepath": "/time/format.js",
  "shared": [],
  "dependencies": [
    "d3_locale_enUS",
    "d3_time"
  ],
  "helpers": [
    "d3_time_format"
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
              "name": "d3_time_format"
            },
            "init": {
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "Identifier",
                "name": "d3_locale_enUS"
              },
              "property": {
                "type": "Identifier",
                "name": "timeFormat"
              }
            }
          }
        ]
      },
      {
        "type": "VariableDeclaration",
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "Identifier",
                "name": "d3_time"
              },
              "property": {
                "type": "Identifier",
                "name": "format"
              }
            },
            "init": {
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "Identifier",
                "name": "d3_locale_enUS"
              },
              "property": {
                "type": "Identifier",
                "name": "timeFormat"
              }
            }
          }
        ]
      }
    ]
  },
  "src": "var d3_time_format = d3_locale_enUS.timeFormat;\nvar d3_time.format = d3_locale_enUS.timeFormat;"
}