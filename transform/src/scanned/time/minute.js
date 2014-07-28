{
  "filepath": "/time/minute.js",
  "shared": [],
  "dependencies": [
    "d3_time",
    "d3_time_interval",
    "d3_date"
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
          "operator": "=",
          "left": {
            "type": "MemberExpression",
            "computed": false,
            "object": {
              "type": "Identifier",
              "name": "d3_time"
            },
            "property": {
              "type": "Identifier",
              "name": "minute"
            }
          },
          "right": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "name": "d3_time_interval"
            },
            "arguments": [
              {
                "type": "FunctionExpression",
                "id": null,
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
                        "type": "NewExpression",
                        "callee": {
                          "type": "Identifier",
                          "name": "d3_date"
                        },
                        "arguments": [
                          {
                            "type": "BinaryExpression",
                            "operator": "*",
                            "left": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "MemberExpression",
                                "computed": false,
                                "object": {
                                  "type": "Identifier",
                                  "name": "Math"
                                },
                                "property": {
                                  "type": "Identifier",
                                  "name": "floor"
                                }
                              },
                              "arguments": [
                                {
                                  "type": "BinaryExpression",
                                  "operator": "/",
                                  "left": {
                                    "type": "Identifier",
                                    "name": "date"
                                  },
                                  "right": {
                                    "type": "Literal",
                                    "value": 60000,
                                    "raw": "6e4"
                                  }
                                }
                              ]
                            },
                            "right": {
                              "type": "Literal",
                              "value": 60000,
                              "raw": "6e4"
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
              },
              {
                "type": "FunctionExpression",
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "name": "date"
                  },
                  {
                    "type": "Identifier",
                    "name": "offset"
                  }
                ],
                "defaults": [],
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ExpressionStatement",
                      "expression": {
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
                            "name": "setTime"
                          }
                        },
                        "arguments": [
                          {
                            "type": "BinaryExpression",
                            "operator": "+",
                            "left": {
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
                                  "name": "getTime"
                                }
                              },
                              "arguments": []
                            },
                            "right": {
                              "type": "BinaryExpression",
                              "operator": "*",
                              "left": {
                                "type": "CallExpression",
                                "callee": {
                                  "type": "MemberExpression",
                                  "computed": false,
                                  "object": {
                                    "type": "Identifier",
                                    "name": "Math"
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "name": "floor"
                                  }
                                },
                                "arguments": [
                                  {
                                    "type": "Identifier",
                                    "name": "offset"
                                  }
                                ]
                              },
                              "right": {
                                "type": "Literal",
                                "value": 60000,
                                "raw": "6e4"
                              }
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
              },
              {
                "type": "FunctionExpression",
                "id": null,
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
                            "name": "getMinutes"
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
              }
            ]
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
              "name": "d3_time"
            },
            "property": {
              "type": "Identifier",
              "name": "minutes"
            }
          },
          "right": {
            "type": "MemberExpression",
            "computed": false,
            "object": {
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "Identifier",
                "name": "d3_time"
              },
              "property": {
                "type": "Identifier",
                "name": "minute"
              }
            },
            "property": {
              "type": "Identifier",
              "name": "range"
            }
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
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "Identifier",
                "name": "d3_time"
              },
              "property": {
                "type": "Identifier",
                "name": "minutes"
              }
            },
            "property": {
              "type": "Identifier",
              "name": "utc"
            }
          },
          "right": {
            "type": "MemberExpression",
            "computed": false,
            "object": {
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "name": "d3_time"
                },
                "property": {
                  "type": "Identifier",
                  "name": "minute"
                }
              },
              "property": {
                "type": "Identifier",
                "name": "utc"
              }
            },
            "property": {
              "type": "Identifier",
              "name": "range"
            }
          }
        }
      }
    ]
  },
  "src": "d3_time.minute = d3_time_interval(function (date) {\n    return new d3_date(Math.floor(date / 60000) * 60000);\n}, function (date, offset) {\n    date.setTime(date.getTime() + Math.floor(offset) * 60000);\n}, function (date) {\n    return date.getMinutes();\n});\nd3_time.minutes = d3_time.minute.range;\nd3_time.minutes.utc = d3_time.minute.utc.range;"
}