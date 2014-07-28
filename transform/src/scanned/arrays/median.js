{
  "filepath": "/arrays/median.js",
  "shared": [],
  "dependencies": [
    "d3_number",
    "d3.quantile",
    "d3_ascending"
  ],
  "helpers": [],
  "exports": [
    "d3.median"
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
              "name": "median"
            }
          },
          "right": {
            "type": "FunctionExpression",
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "name": "array"
              },
              {
                "type": "Identifier",
                "name": "f"
              }
            ],
            "defaults": [],
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "IfStatement",
                  "test": {
                    "type": "BinaryExpression",
                    "operator": ">",
                    "left": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "name": "arguments"
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
                  },
                  "consequent": {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "name": "array"
                      },
                      "right": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "MemberExpression",
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "name": "array"
                          },
                          "property": {
                            "type": "Identifier",
                            "name": "map"
                          }
                        },
                        "arguments": [
                          {
                            "type": "Identifier",
                            "name": "f"
                          }
                        ]
                      }
                    }
                  },
                  "alternate": null
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "name": "array"
                    },
                    "right": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "name": "array"
                        },
                        "property": {
                          "type": "Identifier",
                          "name": "filter"
                        }
                      },
                      "arguments": [
                        {
                          "type": "Identifier",
                          "name": "d3_number"
                        }
                      ]
                    }
                  }
                },
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "ConditionalExpression",
                    "test": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "name": "array"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "length"
                      }
                    },
                    "consequent": {
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
                          "name": "quantile"
                        }
                      },
                      "arguments": [
                        {
                          "type": "CallExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "name": "array"
                            },
                            "property": {
                              "type": "Identifier",
                              "name": "sort"
                            }
                          },
                          "arguments": [
                            {
                              "type": "Identifier",
                              "name": "d3_ascending"
                            }
                          ]
                        },
                        {
                          "type": "Literal",
                          "value": 0.5,
                          "raw": ".5"
                        }
                      ]
                    },
                    "alternate": {
                      "type": "Identifier",
                      "name": "undefined"
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
      }
    ]
  },
  "src": "d3.median = function (array, f) {\n    if (arguments.length > 1)\n        array = array.map(f);\n    array = array.filter(d3_number);\n    return array.length ? d3.quantile(array.sort(d3_ascending), 0.5) : undefined;\n};"
}