{
  "filepath": "/core/functor.js",
  "shared": [],
  "dependencies": [],
  "helpers": [
    "d3_functor"
  ],
  "exports": [
    "d3.functor"
  ],
  "ast": {
    "type": "Program",
    "body": [
      {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "name": "d3_functor"
        },
        "params": [
          {
            "type": "Identifier",
            "name": "v"
          }
        ],
        "defaults": [],
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "ReturnStatement",
              "argument": {
                "type": "ConditionalExpression",
                "test": {
                  "type": "BinaryExpression",
                  "operator": "===",
                  "left": {
                    "type": "UnaryExpression",
                    "operator": "typeof",
                    "argument": {
                      "type": "Identifier",
                      "name": "v"
                    },
                    "prefix": true
                  },
                  "right": {
                    "type": "Literal",
                    "value": "function",
                    "raw": "\"function\""
                  }
                },
                "consequent": {
                  "type": "Identifier",
                  "name": "v"
                },
                "alternate": {
                  "type": "FunctionExpression",
                  "id": null,
                  "params": [],
                  "defaults": [],
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "Identifier",
                          "name": "v"
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
        "rest": null,
        "generator": false,
        "expression": false
      },
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
              "name": "functor"
            }
          },
          "right": {
            "type": "Identifier",
            "name": "d3_functor"
          }
        }
      }
    ]
  },
  "src": "function d3_functor(v) {\n    return typeof v === 'function' ? v : function () {\n        return v;\n    };\n}\nd3.functor = d3_functor;"
}