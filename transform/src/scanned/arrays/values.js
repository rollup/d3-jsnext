{
  "filepath": "/arrays/values.js",
  "shared": [],
  "dependencies": [],
  "helpers": [],
  "exports": [
    "d3.values"
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
              "name": "values"
            }
          },
          "right": {
            "type": "FunctionExpression",
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "name": "map"
              }
            ],
            "defaults": [],
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "VariableDeclaration",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "name": "values"
                      },
                      "init": {
                        "type": "ArrayExpression",
                        "elements": []
                      }
                    }
                  ],
                  "kind": "var"
                },
                {
                  "type": "ForInStatement",
                  "left": {
                    "type": "VariableDeclaration",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "name": "key"
                        },
                        "init": null
                      }
                    ],
                    "kind": "var"
                  },
                  "right": {
                    "type": "Identifier",
                    "name": "map"
                  },
                  "body": {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "name": "values"
                        },
                        "property": {
                          "type": "Identifier",
                          "name": "push"
                        }
                      },
                      "arguments": [
                        {
                          "type": "MemberExpression",
                          "computed": true,
                          "object": {
                            "type": "Identifier",
                            "name": "map"
                          },
                          "property": {
                            "type": "Identifier",
                            "name": "key"
                          }
                        }
                      ]
                    }
                  },
                  "each": false
                },
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Identifier",
                    "name": "values"
                  }
                }
              ]
            },
            "rest": null,
            "generator": false,
            "expression": false
          }
        }
      }
    ]
  },
  "src": "d3.values = function (map) {\n    var values = [];\n    for (var key in map)\n        values.push(map[key]);\n    return values;\n};"
}