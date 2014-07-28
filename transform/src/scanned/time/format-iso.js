{
  "filepath": "/time/format-iso.js",
  "shared": [],
  "dependencies": [
    "d3_time_formatUtc",
    "d3_time_format"
  ],
  "helpers": [
    "d3_time_formatIso",
    "d3_time_formatIsoNative"
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
              "name": "d3_time_formatIso"
            },
            "init": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "name": "d3_time_formatUtc"
              },
              "arguments": [
                {
                  "type": "Literal",
                  "value": "%Y-%m-%dT%H:%M:%S.%LZ",
                  "raw": "\"%Y-%m-%dT%H:%M:%S.%LZ\""
                }
              ]
            }
          }
        ]
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
              "name": "d3_time_format"
            },
            "property": {
              "type": "Identifier",
              "name": "iso"
            }
          },
          "right": {
            "type": "ConditionalExpression",
            "test": {
              "type": "LogicalExpression",
              "operator": "&&",
              "left": {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "name": "Date"
                  },
                  "property": {
                    "type": "Identifier",
                    "name": "prototype"
                  }
                },
                "property": {
                  "type": "Identifier",
                  "name": "toISOString"
                }
              },
              "right": {
                "type": "UnaryExpression",
                "operator": "+",
                "argument": {
                  "type": "NewExpression",
                  "callee": {
                    "type": "Identifier",
                    "name": "Date"
                  },
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": "2000-01-01T00:00:00.000Z",
                      "raw": "\"2000-01-01T00:00:00.000Z\""
                    }
                  ]
                },
                "prefix": true
              }
            },
            "consequent": {
              "type": "Identifier",
              "name": "d3_time_formatIsoNative"
            },
            "alternate": {
              "type": "Identifier",
              "name": "d3_time_formatIso"
            }
          }
        }
      },
      {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "name": "d3_time_formatIsoNative"
        },
        "params": [
          {
            "type": "Identifier",
            "name": "date"
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
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "name": "date"
                  },
                  "property": {
                    "type": "Identifier",
                    "name": "toISOString"
                  }
                },
                "arguments": []
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
              "name": "d3_time_formatIsoNative"
            },
            "property": {
              "type": "Identifier",
              "name": "parse"
            }
          },
          "right": {
            "type": "FunctionExpression",
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "name": "string"
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
                        "name": "date"
                      },
                      "init": {
                        "type": "NewExpression",
                        "callee": {
                          "type": "Identifier",
                          "name": "Date"
                        },
                        "arguments": [
                          {
                            "type": "Identifier",
                            "name": "string"
                          }
                        ]
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
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "name": "isNaN"
                      },
                      "arguments": [
                        {
                          "type": "Identifier",
                          "name": "date"
                        }
                      ]
                    },
                    "consequent": {
                      "type": "Literal",
                      "value": null,
                      "raw": "null"
                    },
                    "alternate": {
                      "type": "Identifier",
                      "name": "date"
                    }
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
        "type": "ExpressionStatement",
        "expression": {
          "type": "AssignmentExpression",
          "operator": "=",
          "left": {
            "type": "MemberExpression",
            "computed": false,
            "object": {
              "type": "Identifier",
              "name": "d3_time_formatIsoNative"
            },
            "property": {
              "type": "Identifier",
              "name": "toString"
            }
          },
          "right": {
            "type": "MemberExpression",
            "computed": false,
            "object": {
              "type": "Identifier",
              "name": "d3_time_formatIso"
            },
            "property": {
              "type": "Identifier",
              "name": "toString"
            }
          }
        }
      }
    ]
  }
}