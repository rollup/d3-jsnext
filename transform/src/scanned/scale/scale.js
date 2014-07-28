{
  "filepath": "/scale/scale.js",
  "shared": [],
  "dependencies": [],
  "helpers": [
    "d3_scaleExtent",
    "d3_scaleRange"
  ],
  "exports": [
    "d3.scale"
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
              "name": "scale"
            }
          },
          "right": {
            "type": "ObjectExpression",
            "properties": []
          }
        }
      },
      {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "name": "d3_scaleExtent"
        },
        "params": [
          {
            "type": "Identifier",
            "name": "domain"
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
                    "name": "start"
                  },
                  "init": {
                    "type": "MemberExpression",
                    "computed": true,
                    "object": {
                      "type": "Identifier",
                      "name": "domain"
                    },
                    "property": {
                      "type": "Literal",
                      "value": 0,
                      "raw": "0"
                    }
                  }
                },
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "name": "stop"
                  },
                  "init": {
                    "type": "MemberExpression",
                    "computed": true,
                    "object": {
                      "type": "Identifier",
                      "name": "domain"
                    },
                    "property": {
                      "type": "BinaryExpression",
                      "operator": "-",
                      "left": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "name": "domain"
                        },
                        "property": {
                          "type": "Identifier",
                          "name": "length"
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1"
                      }
                    }
                  }
                }
              ],
              "kind": "var"
            },
            {
              "type": "ReturnStatement",
              "argument": {
                "type": "ConditionalExpression",
                "test": {
                  "type": "BinaryExpression",
                  "operator": "<",
                  "left": {
                    "type": "Identifier",
                    "name": "start"
                  },
                  "right": {
                    "type": "Identifier",
                    "name": "stop"
                  }
                },
                "consequent": {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "Identifier",
                      "name": "start"
                    },
                    {
                      "type": "Identifier",
                      "name": "stop"
                    }
                  ]
                },
                "alternate": {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "Identifier",
                      "name": "stop"
                    },
                    {
                      "type": "Identifier",
                      "name": "start"
                    }
                  ]
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
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "name": "d3_scaleRange"
        },
        "params": [
          {
            "type": "Identifier",
            "name": "scale"
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
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "name": "scale"
                  },
                  "property": {
                    "type": "Identifier",
                    "name": "rangeExtent"
                  }
                },
                "consequent": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "name": "scale"
                    },
                    "property": {
                      "type": "Identifier",
                      "name": "rangeExtent"
                    }
                  },
                  "arguments": []
                },
                "alternate": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "name": "d3_scaleExtent"
                  },
                  "arguments": [
                    {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "name": "scale"
                        },
                        "property": {
                          "type": "Identifier",
                          "name": "range"
                        }
                      },
                      "arguments": []
                    }
                  ]
                }
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
  "src": "d3.scale = {};\nfunction d3_scaleExtent(domain) {\n    var start = domain[0], stop = domain[domain.length - 1];\n    return start < stop ? [\n        start,\n        stop\n    ] : [\n        stop,\n        start\n    ];\n}\nfunction d3_scaleRange(scale) {\n    return scale.rangeExtent ? scale.rangeExtent() : d3_scaleExtent(scale.range());\n}"
}