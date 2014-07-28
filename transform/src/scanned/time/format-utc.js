{
  "filepath": "/time/format-utc.js",
  "shared": [],
  "dependencies": [
    "d3_time_format"
  ],
  "helpers": [
    "d3_time_formatUtc"
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
              "name": "d3_time_formatUtc"
            },
            "init": {
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "Identifier",
                "name": "d3_time_format"
              },
              "property": {
                "type": "Identifier",
                "name": "utc"
              }
            }
          }
        ]
      }
    ]
  }
}