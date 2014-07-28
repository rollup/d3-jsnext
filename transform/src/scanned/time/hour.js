{
  "filepath": "/time/hour.js",
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
              "name": "hour"
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
                      "type": "VariableDeclaration",
                      "declarations": [
                        {
                          "type": "VariableDeclarator",
                          "id": {
                            "type": "Identifier",
                            "name": "timezone"
                          },
                          "init": {
                            "type": "BinaryExpression",
                            "operator": "/",
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
                                  "name": "getTimezoneOffset"
                                }
                              },
                              "arguments": []
                            },
                            "right": {
                              "type": "Literal",
                              "value": 60,
                              "raw": "60"
                            }
                          }
                        }
                      ],
                      "kind": "var"
                    },
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
                              "type": "BinaryExpression",
                              "operator": "+",
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
                                    "operator": "-",
                                    "left": {
                                      "type": "BinaryExpression",
                                      "operator": "/",
                                      "left": {
                                        "type": "Identifier",
                                        "name": "date"
                                      },
                                      "right": {
                                        "type": "Literal",
                                        "value": 3600000,
                                        "raw": "36e5"
                                      }
                                    },
                                    "right": {
                                      "type": "Identifier",
                                      "name": "timezone"
                                    }
                                  }
                                ]
                              },
                              "right": {
                                "type": "Identifier",
                                "name": "timezone"
                              }
                            },
                            "right": {
                              "type": "Literal",
                              "value": 3600000,
                              "raw": "36e5"
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
                                "value": 3600000,
                                "raw": "36e5"
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
                            "name": "getHours"
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
              "name": "hours"
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
                "name": "hour"
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
                "name": "hours"
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
                  "name": "hour"
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
  "src": "d3_time.hour = d3_time_interval(function (date) {\n    var timezone = date.getTimezoneOffset() / 60;\n    return new d3_date((Math.floor(date / 3600000 - timezone) + timezone) * 3600000);\n}, function (date, offset) {\n    date.setTime(date.getTime() + Math.floor(offset) * 3600000);\n}, function (date) {\n    return date.getHours();\n});\nd3_time.hours = d3_time.hour.range;\nd3_time.hours.utc = d3_time.hour.utc.range;"
}