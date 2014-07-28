{
  "filepath": "/geo/albers.js",
  "shared": [],
  "dependencies": [
    "d3.geo.conicEqualArea"
  ],
  "helpers": [],
  "exports": [
    "d3.geo.albers"
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
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "Identifier",
                "name": "d3"
              },
              "property": {
                "type": "Identifier",
                "name": "geo"
              }
            },
            "property": {
              "type": "Identifier",
              "name": "albers"
            }
          },
          "right": {
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
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "MemberExpression",
                          "computed": false,
                          "object": {
                            "type": "CallExpression",
                            "callee": {
                              "type": "MemberExpression",
                              "computed": false,
                              "object": {
                                "type": "CallExpression",
                                "callee": {
                                  "type": "MemberExpression",
                                  "computed": false,
                                  "object": {
                                    "type": "CallExpression",
                                    "callee": {
                                      "type": "MemberExpression",
                                      "computed": false,
                                      "object": {
                                        "type": "MemberExpression",
                                        "computed": false,
                                        "object": {
                                          "type": "Identifier",
                                          "name": "d3"
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "name": "geo"
                                        }
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "name": "conicEqualArea"
                                      }
                                    },
                                    "arguments": []
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "name": "rotate"
                                  }
                                },
                                "arguments": [
                                  {
                                    "type": "ArrayExpression",
                                    "elements": [
                                      {
                                        "type": "Literal",
                                        "value": 96,
                                        "raw": "96"
                                      },
                                      {
                                        "type": "Literal",
                                        "value": 0,
                                        "raw": "0"
                                      }
                                    ]
                                  }
                                ]
                              },
                              "property": {
                                "type": "Identifier",
                                "name": "center"
                              }
                            },
                            "arguments": [
                              {
                                "type": "ArrayExpression",
                                "elements": [
                                  {
                                    "type": "UnaryExpression",
                                    "operator": "-",
                                    "argument": {
                                      "type": "Literal",
                                      "value": 0.6,
                                      "raw": ".6"
                                    },
                                    "prefix": true
                                  },
                                  {
                                    "type": "Literal",
                                    "value": 38.7,
                                    "raw": "38.7"
                                  }
                                ]
                              }
                            ]
                          },
                          "property": {
                            "type": "Identifier",
                            "name": "parallels"
                          }
                        },
                        "arguments": [
                          {
                            "type": "ArrayExpression",
                            "elements": [
                              {
                                "type": "Literal",
                                "value": 29.5,
                                "raw": "29.5"
                              },
                              {
                                "type": "Literal",
                                "value": 45.5,
                                "raw": "45.5"
                              }
                            ]
                          }
                        ]
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "scale"
                      }
                    },
                    "arguments": [
                      {
                        "type": "Literal",
                        "value": 1070,
                        "raw": "1070"
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
      }
    ]
  },
  "src": "d3.geo.albers = function () {\n    return d3.geo.conicEqualArea().rotate([\n        96,\n        0\n    ]).center([\n        -0.6,\n        38.7\n    ]).parallels([\n        29.5,\n        45.5\n    ]).scale(1070);\n};"
}