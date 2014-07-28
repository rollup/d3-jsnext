{
  "filepath": "/xhr/html.js",
  "shared": [],
  "dependencies": [
    "d3_xhr",
    "d3_document"
  ],
  "helpers": [
    "d3_html"
  ],
  "exports": [
    "d3.html"
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
              "name": "html"
            }
          },
          "right": {
            "type": "FunctionExpression",
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "name": "url"
              },
              {
                "type": "Identifier",
                "name": "callback"
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
                      "type": "Identifier",
                      "name": "d3_xhr"
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "name": "url"
                      },
                      {
                        "type": "Literal",
                        "value": "text/html",
                        "raw": "\"text/html\""
                      },
                      {
                        "type": "Identifier",
                        "name": "d3_html"
                      },
                      {
                        "type": "Identifier",
                        "name": "callback"
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
        }
      },
      {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "name": "d3_html"
        },
        "params": [
          {
            "type": "Identifier",
            "name": "request"
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
                    "name": "range"
                  },
                  "init": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "name": "d3_document"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "createRange"
                      }
                    },
                    "arguments": []
                  }
                }
              ],
              "kind": "var"
            },
            {
              "type": "ExpressionStatement",
              "expression": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "name": "range"
                  },
                  "property": {
                    "type": "Identifier",
                    "name": "selectNode"
                  }
                },
                "arguments": [
                  {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "name": "d3_document"
                    },
                    "property": {
                      "type": "Identifier",
                      "name": "body"
                    }
                  }
                ]
              }
            },
            {
              "type": "ReturnStatement",
              "argument": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "name": "range"
                  },
                  "property": {
                    "type": "Identifier",
                    "name": "createContextualFragment"
                  }
                },
                "arguments": [
                  {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "name": "request"
                    },
                    "property": {
                      "type": "Identifier",
                      "name": "responseText"
                    }
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
  "src": "d3.html = function (url, callback) {\n    return d3_xhr(url, 'text/html', d3_html, callback);\n};\nfunction d3_html(request) {\n    var range = d3_document.createRange();\n    range.selectNode(d3_document.body);\n    return range.createContextualFragment(request.responseText);\n}"
}