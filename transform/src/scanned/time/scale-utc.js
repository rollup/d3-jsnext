{
  "filepath": "/time/scale-utc.js",
  "shared": [],
  "dependencies": [
    "d3_time_scaleLocalMethods",
    "d3_time_formatUtc",
    "d3_true",
    "d3_time",
    "d3_time_scale",
    "d3.scale.linear"
  ],
  "helpers": [
    "d3_time_scaleUtcMethods",
    "d3_time_scaleUtcFormat"
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
              "name": "d3_time_scaleUtcMethods"
            },
            "init": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "name": "d3_time_scaleLocalMethods"
                },
                "property": {
                  "type": "Identifier",
                  "name": "map"
                }
              },
              "arguments": [
                {
                  "type": "FunctionExpression",
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "name": "m"
                    }
                  ],
                  "defaults": [],
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "ArrayExpression",
                          "elements": [
                            {
                              "type": "MemberExpression",
                              "computed": false,
                              "object": {
                                "type": "MemberExpression",
                                "computed": true,
                                "object": {
                                  "type": "Identifier",
                                  "name": "m"
                                },
                                "property": {
                                  "type": "Literal",
                                  "value": 0,
                                  "raw": "0"
                                }
                              },
                              "property": {
                                "type": "Identifier",
                                "name": "utc"
                              }
                            },
                            {
                              "type": "MemberExpression",
                              "computed": true,
                              "object": {
                                "type": "Identifier",
                                "name": "m"
                              },
                              "property": {
                                "type": "Literal",
                                "value": 1,
                                "raw": "1"
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
            }
          }
        ]
      },
      {
        "type": "VariableDeclaration",
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "name": "d3_time_scaleUtcFormat"
            },
            "init": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "name": "d3_time_formatUtc"
                },
                "property": {
                  "type": "Identifier",
                  "name": "multi"
                }
              },
              "arguments": [
                {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "ArrayExpression",
                      "elements": [
                        {
                          "type": "Literal",
                          "value": ".%L",
                          "raw": "\".%L\""
                        },
                        {
                          "type": "FunctionExpression",
                          "id": null,
                          "params": [
                            {
                              "type": "Identifier",
                              "name": "d"
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
                                      "name": "d"
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "name": "getUTCMilliseconds"
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
                    },
                    {
                      "type": "ArrayExpression",
                      "elements": [
                        {
                          "type": "Literal",
                          "value": ":%S",
                          "raw": "\":%S\""
                        },
                        {
                          "type": "FunctionExpression",
                          "id": null,
                          "params": [
                            {
                              "type": "Identifier",
                              "name": "d"
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
                                      "name": "d"
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "name": "getUTCSeconds"
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
                    },
                    {
                      "type": "ArrayExpression",
                      "elements": [
                        {
                          "type": "Literal",
                          "value": "%I:%M",
                          "raw": "\"%I:%M\""
                        },
                        {
                          "type": "FunctionExpression",
                          "id": null,
                          "params": [
                            {
                              "type": "Identifier",
                              "name": "d"
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
                                      "name": "d"
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "name": "getUTCMinutes"
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
                    },
                    {
                      "type": "ArrayExpression",
                      "elements": [
                        {
                          "type": "Literal",
                          "value": "%I %p",
                          "raw": "\"%I %p\""
                        },
                        {
                          "type": "FunctionExpression",
                          "id": null,
                          "params": [
                            {
                              "type": "Identifier",
                              "name": "d"
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
                                      "name": "d"
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "name": "getUTCHours"
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
                    },
                    {
                      "type": "ArrayExpression",
                      "elements": [
                        {
                          "type": "Literal",
                          "value": "%a %d",
                          "raw": "\"%a %d\""
                        },
                        {
                          "type": "FunctionExpression",
                          "id": null,
                          "params": [
                            {
                              "type": "Identifier",
                              "name": "d"
                            }
                          ],
                          "defaults": [],
                          "body": {
                            "type": "BlockStatement",
                            "body": [
                              {
                                "type": "ReturnStatement",
                                "argument": {
                                  "type": "LogicalExpression",
                                  "operator": "&&",
                                  "left": {
                                    "type": "CallExpression",
                                    "callee": {
                                      "type": "MemberExpression",
                                      "computed": false,
                                      "object": {
                                        "type": "Identifier",
                                        "name": "d"
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "name": "getUTCDay"
                                      }
                                    },
                                    "arguments": []
                                  },
                                  "right": {
                                    "type": "BinaryExpression",
                                    "operator": "!=",
                                    "left": {
                                      "type": "CallExpression",
                                      "callee": {
                                        "type": "MemberExpression",
                                        "computed": false,
                                        "object": {
                                          "type": "Identifier",
                                          "name": "d"
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "name": "getUTCDate"
                                        }
                                      },
                                      "arguments": []
                                    },
                                    "right": {
                                      "type": "Literal",
                                      "value": 1,
                                      "raw": "1"
                                    }
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
                    {
                      "type": "ArrayExpression",
                      "elements": [
                        {
                          "type": "Literal",
                          "value": "%b %d",
                          "raw": "\"%b %d\""
                        },
                        {
                          "type": "FunctionExpression",
                          "id": null,
                          "params": [
                            {
                              "type": "Identifier",
                              "name": "d"
                            }
                          ],
                          "defaults": [],
                          "body": {
                            "type": "BlockStatement",
                            "body": [
                              {
                                "type": "ReturnStatement",
                                "argument": {
                                  "type": "BinaryExpression",
                                  "operator": "!=",
                                  "left": {
                                    "type": "CallExpression",
                                    "callee": {
                                      "type": "MemberExpression",
                                      "computed": false,
                                      "object": {
                                        "type": "Identifier",
                                        "name": "d"
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "name": "getUTCDate"
                                      }
                                    },
                                    "arguments": []
                                  },
                                  "right": {
                                    "type": "Literal",
                                    "value": 1,
                                    "raw": "1"
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
                    {
                      "type": "ArrayExpression",
                      "elements": [
                        {
                          "type": "Literal",
                          "value": "%B",
                          "raw": "\"%B\""
                        },
                        {
                          "type": "FunctionExpression",
                          "id": null,
                          "params": [
                            {
                              "type": "Identifier",
                              "name": "d"
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
                                      "name": "d"
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "name": "getUTCMonth"
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
                    },
                    {
                      "type": "ArrayExpression",
                      "elements": [
                        {
                          "type": "Literal",
                          "value": "%Y",
                          "raw": "\"%Y\""
                        },
                        {
                          "type": "Identifier",
                          "name": "d3_true"
                        }
                      ]
                    }
                  ]
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
              "name": "d3_time_scaleUtcMethods"
            },
            "property": {
              "type": "Identifier",
              "name": "year"
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
                "name": "year"
              }
            },
            "property": {
              "type": "Identifier",
              "name": "utc"
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
                "name": "scale"
              }
            },
            "property": {
              "type": "Identifier",
              "name": "utc"
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
                      "type": "Identifier",
                      "name": "d3_time_scale"
                    },
                    "arguments": [
                      {
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
                              "name": "scale"
                            }
                          },
                          "property": {
                            "type": "Identifier",
                            "name": "linear"
                          }
                        },
                        "arguments": []
                      },
                      {
                        "type": "Identifier",
                        "name": "d3_time_scaleUtcMethods"
                      },
                      {
                        "type": "Identifier",
                        "name": "d3_time_scaleUtcFormat"
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
  "src": "var d3_time_scaleUtcMethods = d3_time_scaleLocalMethods.map(function (m) {\n        return [\n            m[0].utc,\n            m[1]\n        ];\n    });\nvar d3_time_scaleUtcFormat = d3_time_formatUtc.multi([\n        [\n            '.%L',\n            function (d) {\n                return d.getUTCMilliseconds();\n            }\n        ],\n        [\n            ':%S',\n            function (d) {\n                return d.getUTCSeconds();\n            }\n        ],\n        [\n            '%I:%M',\n            function (d) {\n                return d.getUTCMinutes();\n            }\n        ],\n        [\n            '%I %p',\n            function (d) {\n                return d.getUTCHours();\n            }\n        ],\n        [\n            '%a %d',\n            function (d) {\n                return d.getUTCDay() && d.getUTCDate() != 1;\n            }\n        ],\n        [\n            '%b %d',\n            function (d) {\n                return d.getUTCDate() != 1;\n            }\n        ],\n        [\n            '%B',\n            function (d) {\n                return d.getUTCMonth();\n            }\n        ],\n        [\n            '%Y',\n            d3_true\n        ]\n    ]);\nd3_time_scaleUtcMethods.year = d3_time.year.utc;\nd3_time.scale.utc = function () {\n    return d3_time_scale(d3.scale.linear(), d3_time_scaleUtcMethods, d3_time_scaleUtcFormat);\n};"
}