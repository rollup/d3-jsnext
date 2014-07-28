{
  "filepath": "/$test/$test.js",
  "shared": [
    {
      "path": "/color/_lab.js",
      "properties": [
        "d3_lab_K",
        "d3_lab_X",
        "d3_lab_Y",
        "d3_lab_Z"
      ],
      "name": "LAB"
    }
  ],
  "dependencies": [
    "d3_lab_K"
  ],
  "helpers": [],
  "exports": [],
  "ast": {
    "type": "Program",
    "body": [
      {
        "type": "ExpressionStatement",
        "expression": {
          "type": "AssignmentExpression",
          "left": {
            "type": "MemberExpression",
            "computed": false,
            "object": {
              "type": "Identifier",
              "name": "LAB"
            },
            "property": {
              "type": "Identifier",
              "name": "d3_lab_K"
            }
          },
          "operator": "=",
          "right": {
            "type": "Literal",
            "value": 0.1,
            "raw": "0.1"
          }
        }
      }
    ]
  },
  "src": "LAB.d3_lab_K = 0.1;"
}