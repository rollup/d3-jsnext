{
  "filepath": "/locale/time-format.js",
  "shared": [
    {
      "path": "/_global.js",
      "properties": [
        "d3_array",
        "d3_date",
        "d3.event"
      ],
      "name": "GLOBAL"
    }
  ],
  "dependencies": [
    "d3_time_format",
    "d3_time_formats",
    "d3_time_parse",
    "d3_date_utc",
    "d3_time_parsers",
    "d3_time_periodLookup",
    "d3.map",
    "d3_time_dayRe",
    "d3_time_dayLookup",
    "d3_time_dayAbbrevRe",
    "d3_time_dayAbbrevLookup",
    "d3_time_monthRe",
    "d3_time_monthLookup",
    "d3_time_monthAbbrevRe",
    "d3_time_monthAbbrevLookup",
    "d3_time",
    "d3_time_parseWeekdayAbbrev",
    "d3_time_parseWeekday",
    "d3_time_parseMonthAbbrev",
    "d3_time_parseMonth",
    "d3_time_parseLocaleFull",
    "d3_time_parseAmPm",
    "d3_time_parseLocaleDate",
    "d3_time_parseLocaleTime",
    "d3.requote",
    "d3_Map",
    "abs"
  ],
  "helpers": [
    "d3_locale_timeFormat",
    "d3_time_formatPads",
    "d3_time_numberRe",
    "d3_time_percentRe",
    "d3_time_formatPad",
    "d3_time_formatRe",
    "d3_time_formatLookup",
    "d3_time_parseWeekdayNumber",
    "d3_time_parseWeekNumberSunday",
    "d3_time_parseWeekNumberMonday",
    "d3_time_parseFullYear",
    "d3_time_parseYear",
    "d3_time_parseZone",
    "d3_time_expandYear",
    "d3_time_parseMonthNumber",
    "d3_time_parseDay",
    "d3_time_parseDayOfYear",
    "d3_time_parseHour24",
    "d3_time_parseMinutes",
    "d3_time_parseSeconds",
    "d3_time_parseMilliseconds",
    "d3_time_zone",
    "d3_time_parseLiteralPercent",
    "d3_time_formatMulti"
  ],
  "exports": [],
  "ast": {
    "type": "Program",
    "body": [
      {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "name": "d3_locale_timeFormat"
        },
        "params": [
          {
            "type": "Identifier",
            "name": "locale"
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
                    "name": "locale_dateTime"
                  },
                  "init": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "name": "locale"
                    },
                    "property": {
                      "type": "Identifier",
                      "name": "dateTime"
                    }
                  }
                },
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "name": "locale_date"
                  },
                  "init": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "name": "locale"
                    },
                    "property": {
                      "type": "Identifier",
                      "name": "date"
                    }
                  }
                },
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "name": "locale_time"
                  },
                  "init": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "name": "locale"
                    },
                    "property": {
                      "type": "Identifier",
                      "name": "time"
                    }
                  }
                },
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "name": "locale_periods"
                  },
                  "init": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "name": "locale"
                    },
                    "property": {
                      "type": "Identifier",
                      "name": "periods"
                    }
                  }
                },
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "name": "locale_days"
                  },
                  "init": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "name": "locale"
                    },
                    "property": {
                      "type": "Identifier",
                      "name": "days"
                    }
                  }
                },
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "name": "locale_shortDays"
                  },
                  "init": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "name": "locale"
                    },
                    "property": {
                      "type": "Identifier",
                      "name": "shortDays"
                    }
                  }
                },
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "name": "locale_months"
                  },
                  "init": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "name": "locale"
                    },
                    "property": {
                      "type": "Identifier",
                      "name": "months"
                    }
                  }
                },
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "name": "locale_shortMonths"
                  },
                  "init": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "name": "locale"
                    },
                    "property": {
                      "type": "Identifier",
                      "name": "shortMonths"
                    }
                  }
                }
              ],
              "kind": "var"
            },
            {
              "type": "FunctionDeclaration",
              "id": {
                "type": "Identifier",
                "name": "d3_time_format"
              },
              "params": [
                {
                  "type": "Identifier",
                  "name": "template"
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
                          "name": "n"
                        },
                        "init": {
                          "type": "MemberExpression",
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "name": "template"
                          },
                          "property": {
                            "type": "Identifier",
                            "name": "length"
                          }
                        }
                      }
                    ],
                    "kind": "var"
                  },
                  {
                    "type": "FunctionDeclaration",
                    "id": {
                      "type": "Identifier",
                      "name": "format"
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
                          "type": "VariableDeclaration",
                          "declarations": [
                            {
                              "type": "VariableDeclarator",
                              "id": {
                                "type": "Identifier",
                                "name": "string"
                              },
                              "init": {
                                "type": "ArrayExpression",
                                "elements": []
                              }
                            },
                            {
                              "type": "VariableDeclarator",
                              "id": {
                                "type": "Identifier",
                                "name": "i"
                              },
                              "init": {
                                "type": "UnaryExpression",
                                "operator": "-",
                                "argument": {
                                  "type": "Literal",
                                  "value": 1,
                                  "raw": "1"
                                },
                                "prefix": true
                              }
                            },
                            {
                              "type": "VariableDeclarator",
                              "id": {
                                "type": "Identifier",
                                "name": "j"
                              },
                              "init": {
                                "type": "Literal",
                                "value": 0,
                                "raw": "0"
                              }
                            },
                            {
                              "type": "VariableDeclarator",
                              "id": {
                                "type": "Identifier",
                                "name": "c"
                              },
                              "init": null
                            },
                            {
                              "type": "VariableDeclarator",
                              "id": {
                                "type": "Identifier",
                                "name": "p"
                              },
                              "init": null
                            },
                            {
                              "type": "VariableDeclarator",
                              "id": {
                                "type": "Identifier",
                                "name": "f"
                              },
                              "init": null
                            }
                          ],
                          "kind": "var"
                        },
                        {
                          "type": "WhileStatement",
                          "test": {
                            "type": "BinaryExpression",
                            "operator": "<",
                            "left": {
                              "type": "UpdateExpression",
                              "operator": "++",
                              "argument": {
                                "type": "Identifier",
                                "name": "i"
                              },
                              "prefix": true
                            },
                            "right": {
                              "type": "Identifier",
                              "name": "n"
                            }
                          },
                          "body": {
                            "type": "BlockStatement",
                            "body": [
                              {
                                "type": "IfStatement",
                                "test": {
                                  "type": "BinaryExpression",
                                  "operator": "===",
                                  "left": {
                                    "type": "CallExpression",
                                    "callee": {
                                      "type": "MemberExpression",
                                      "computed": false,
                                      "object": {
                                        "type": "Identifier",
                                        "name": "template"
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "name": "charCodeAt"
                                      }
                                    },
                                    "arguments": [
                                      {
                                        "type": "Identifier",
                                        "name": "i"
                                      }
                                    ]
                                  },
                                  "right": {
                                    "type": "Literal",
                                    "value": 37,
                                    "raw": "37"
                                  }
                                },
                                "consequent": {
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
                                            "name": "string"
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "name": "push"
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
                                                "name": "template"
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "name": "substring"
                                              }
                                            },
                                            "arguments": [
                                              {
                                                "type": "Identifier",
                                                "name": "j"
                                              },
                                              {
                                                "type": "Identifier",
                                                "name": "i"
                                              }
                                            ]
                                          }
                                        ]
                                      }
                                    },
                                    {
                                      "type": "IfStatement",
                                      "test": {
                                        "type": "BinaryExpression",
                                        "operator": "!=",
                                        "left": {
                                          "type": "AssignmentExpression",
                                          "operator": "=",
                                          "left": {
                                            "type": "Identifier",
                                            "name": "p"
                                          },
                                          "right": {
                                            "type": "MemberExpression",
                                            "computed": true,
                                            "object": {
                                              "type": "Identifier",
                                              "name": "d3_time_formatPads"
                                            },
                                            "property": {
                                              "type": "AssignmentExpression",
                                              "operator": "=",
                                              "left": {
                                                "type": "Identifier",
                                                "name": "c"
                                              },
                                              "right": {
                                                "type": "CallExpression",
                                                "callee": {
                                                  "type": "MemberExpression",
                                                  "computed": false,
                                                  "object": {
                                                    "type": "Identifier",
                                                    "name": "template"
                                                  },
                                                  "property": {
                                                    "type": "Identifier",
                                                    "name": "charAt"
                                                  }
                                                },
                                                "arguments": [
                                                  {
                                                    "type": "UpdateExpression",
                                                    "operator": "++",
                                                    "argument": {
                                                      "type": "Identifier",
                                                      "name": "i"
                                                    },
                                                    "prefix": true
                                                  }
                                                ]
                                              }
                                            }
                                          }
                                        },
                                        "right": {
                                          "type": "Literal",
                                          "value": null,
                                          "raw": "null"
                                        }
                                      },
                                      "consequent": {
                                        "type": "ExpressionStatement",
                                        "expression": {
                                          "type": "AssignmentExpression",
                                          "operator": "=",
                                          "left": {
                                            "type": "Identifier",
                                            "name": "c"
                                          },
                                          "right": {
                                            "type": "CallExpression",
                                            "callee": {
                                              "type": "MemberExpression",
                                              "computed": false,
                                              "object": {
                                                "type": "Identifier",
                                                "name": "template"
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "name": "charAt"
                                              }
                                            },
                                            "arguments": [
                                              {
                                                "type": "UpdateExpression",
                                                "operator": "++",
                                                "argument": {
                                                  "type": "Identifier",
                                                  "name": "i"
                                                },
                                                "prefix": true
                                              }
                                            ]
                                          }
                                        }
                                      },
                                      "alternate": null
                                    },
                                    {
                                      "type": "IfStatement",
                                      "test": {
                                        "type": "AssignmentExpression",
                                        "operator": "=",
                                        "left": {
                                          "type": "Identifier",
                                          "name": "f"
                                        },
                                        "right": {
                                          "type": "MemberExpression",
                                          "computed": true,
                                          "object": {
                                            "type": "Identifier",
                                            "name": "d3_time_formats"
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "name": "c"
                                          }
                                        }
                                      },
                                      "consequent": {
                                        "type": "ExpressionStatement",
                                        "expression": {
                                          "type": "AssignmentExpression",
                                          "operator": "=",
                                          "left": {
                                            "type": "Identifier",
                                            "name": "c"
                                          },
                                          "right": {
                                            "type": "CallExpression",
                                            "callee": {
                                              "type": "Identifier",
                                              "name": "f"
                                            },
                                            "arguments": [
                                              {
                                                "type": "Identifier",
                                                "name": "date"
                                              },
                                              {
                                                "type": "ConditionalExpression",
                                                "test": {
                                                  "type": "BinaryExpression",
                                                  "operator": "==",
                                                  "left": {
                                                    "type": "Identifier",
                                                    "name": "p"
                                                  },
                                                  "right": {
                                                    "type": "Literal",
                                                    "value": null,
                                                    "raw": "null"
                                                  }
                                                },
                                                "consequent": {
                                                  "type": "ConditionalExpression",
                                                  "test": {
                                                    "type": "BinaryExpression",
                                                    "operator": "===",
                                                    "left": {
                                                      "type": "Identifier",
                                                      "name": "c"
                                                    },
                                                    "right": {
                                                      "type": "Literal",
                                                      "value": "e",
                                                      "raw": "\"e\""
                                                    }
                                                  },
                                                  "consequent": {
                                                    "type": "Literal",
                                                    "value": " ",
                                                    "raw": "\" \""
                                                  },
                                                  "alternate": {
                                                    "type": "Literal",
                                                    "value": "0",
                                                    "raw": "\"0\""
                                                  }
                                                },
                                                "alternate": {
                                                  "type": "Identifier",
                                                  "name": "p"
                                                }
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
                                        "type": "CallExpression",
                                        "callee": {
                                          "type": "MemberExpression",
                                          "computed": false,
                                          "object": {
                                            "type": "Identifier",
                                            "name": "string"
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "name": "push"
                                          }
                                        },
                                        "arguments": [
                                          {
                                            "type": "Identifier",
                                            "name": "c"
                                          }
                                        ]
                                      }
                                    },
                                    {
                                      "type": "ExpressionStatement",
                                      "expression": {
                                        "type": "AssignmentExpression",
                                        "operator": "=",
                                        "left": {
                                          "type": "Identifier",
                                          "name": "j"
                                        },
                                        "right": {
                                          "type": "BinaryExpression",
                                          "operator": "+",
                                          "left": {
                                            "type": "Identifier",
                                            "name": "i"
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
                                "alternate": null
                              }
                            ]
                          }
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
                                "name": "string"
                              },
                              "property": {
                                "type": "Identifier",
                                "name": "push"
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
                                    "name": "template"
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "name": "substring"
                                  }
                                },
                                "arguments": [
                                  {
                                    "type": "Identifier",
                                    "name": "j"
                                  },
                                  {
                                    "type": "Identifier",
                                    "name": "i"
                                  }
                                ]
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
                                "name": "string"
                              },
                              "property": {
                                "type": "Identifier",
                                "name": "join"
                              }
                            },
                            "arguments": [
                              {
                                "type": "Literal",
                                "value": "",
                                "raw": "\"\""
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
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "name": "format"
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
                                    "name": "d"
                                  },
                                  "init": {
                                    "type": "ObjectExpression",
                                    "properties": [
                                      {
                                        "type": "Property",
                                        "key": {
                                          "type": "Identifier",
                                          "name": "y"
                                        },
                                        "value": {
                                          "type": "Literal",
                                          "value": 1900,
                                          "raw": "1900"
                                        },
                                        "kind": "init"
                                      },
                                      {
                                        "type": "Property",
                                        "key": {
                                          "type": "Identifier",
                                          "name": "m"
                                        },
                                        "value": {
                                          "type": "Literal",
                                          "value": 0,
                                          "raw": "0"
                                        },
                                        "kind": "init"
                                      },
                                      {
                                        "type": "Property",
                                        "key": {
                                          "type": "Identifier",
                                          "name": "d"
                                        },
                                        "value": {
                                          "type": "Literal",
                                          "value": 1,
                                          "raw": "1"
                                        },
                                        "kind": "init"
                                      },
                                      {
                                        "type": "Property",
                                        "key": {
                                          "type": "Identifier",
                                          "name": "H"
                                        },
                                        "value": {
                                          "type": "Literal",
                                          "value": 0,
                                          "raw": "0"
                                        },
                                        "kind": "init"
                                      },
                                      {
                                        "type": "Property",
                                        "key": {
                                          "type": "Identifier",
                                          "name": "M"
                                        },
                                        "value": {
                                          "type": "Literal",
                                          "value": 0,
                                          "raw": "0"
                                        },
                                        "kind": "init"
                                      },
                                      {
                                        "type": "Property",
                                        "key": {
                                          "type": "Identifier",
                                          "name": "S"
                                        },
                                        "value": {
                                          "type": "Literal",
                                          "value": 0,
                                          "raw": "0"
                                        },
                                        "kind": "init"
                                      },
                                      {
                                        "type": "Property",
                                        "key": {
                                          "type": "Identifier",
                                          "name": "L"
                                        },
                                        "value": {
                                          "type": "Literal",
                                          "value": 0,
                                          "raw": "0"
                                        },
                                        "kind": "init"
                                      },
                                      {
                                        "type": "Property",
                                        "key": {
                                          "type": "Identifier",
                                          "name": "Z"
                                        },
                                        "value": {
                                          "type": "Literal",
                                          "value": null,
                                          "raw": "null"
                                        },
                                        "kind": "init"
                                      }
                                    ]
                                  }
                                },
                                {
                                  "type": "VariableDeclarator",
                                  "id": {
                                    "type": "Identifier",
                                    "name": "i"
                                  },
                                  "init": {
                                    "type": "CallExpression",
                                    "callee": {
                                      "type": "Identifier",
                                      "name": "d3_time_parse"
                                    },
                                    "arguments": [
                                      {
                                        "type": "Identifier",
                                        "name": "d"
                                      },
                                      {
                                        "type": "Identifier",
                                        "name": "template"
                                      },
                                      {
                                        "type": "Identifier",
                                        "name": "string"
                                      },
                                      {
                                        "type": "Literal",
                                        "value": 0,
                                        "raw": "0"
                                      }
                                    ]
                                  }
                                }
                              ],
                              "kind": "var"
                            },
                            {
                              "type": "IfStatement",
                              "test": {
                                "type": "BinaryExpression",
                                "operator": "!=",
                                "left": {
                                  "type": "Identifier",
                                  "name": "i"
                                },
                                "right": {
                                  "type": "MemberExpression",
                                  "computed": false,
                                  "object": {
                                    "type": "Identifier",
                                    "name": "string"
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "name": "length"
                                  }
                                }
                              },
                              "consequent": {
                                "type": "ReturnStatement",
                                "argument": {
                                  "type": "Literal",
                                  "value": null,
                                  "raw": "null"
                                }
                              },
                              "alternate": null
                            },
                            {
                              "type": "IfStatement",
                              "test": {
                                "type": "BinaryExpression",
                                "operator": "in",
                                "left": {
                                  "type": "Literal",
                                  "value": "p",
                                  "raw": "\"p\""
                                },
                                "right": {
                                  "type": "Identifier",
                                  "name": "d"
                                }
                              },
                              "consequent": {
                                "type": "ExpressionStatement",
                                "expression": {
                                  "type": "AssignmentExpression",
                                  "operator": "=",
                                  "left": {
                                    "type": "MemberExpression",
                                    "computed": false,
                                    "object": {
                                      "type": "Identifier",
                                      "name": "d"
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "name": "H"
                                    }
                                  },
                                  "right": {
                                    "type": "BinaryExpression",
                                    "operator": "+",
                                    "left": {
                                      "type": "BinaryExpression",
                                      "operator": "%",
                                      "left": {
                                        "type": "MemberExpression",
                                        "computed": false,
                                        "object": {
                                          "type": "Identifier",
                                          "name": "d"
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "name": "H"
                                        }
                                      },
                                      "right": {
                                        "type": "Literal",
                                        "value": 12,
                                        "raw": "12"
                                      }
                                    },
                                    "right": {
                                      "type": "BinaryExpression",
                                      "operator": "*",
                                      "left": {
                                        "type": "MemberExpression",
                                        "computed": false,
                                        "object": {
                                          "type": "Identifier",
                                          "name": "d"
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "name": "p"
                                        }
                                      },
                                      "right": {
                                        "type": "Literal",
                                        "value": 12,
                                        "raw": "12"
                                      }
                                    }
                                  }
                                }
                              },
                              "alternate": null
                            },
                            {
                              "type": "VariableDeclaration",
                              "declarations": [
                                {
                                  "type": "VariableDeclarator",
                                  "id": {
                                    "type": "Identifier",
                                    "name": "localZ"
                                  },
                                  "init": {
                                    "type": "LogicalExpression",
                                    "operator": "&&",
                                    "left": {
                                      "type": "BinaryExpression",
                                      "operator": "!=",
                                      "left": {
                                        "type": "MemberExpression",
                                        "computed": false,
                                        "object": {
                                          "type": "Identifier",
                                          "name": "d"
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "name": "Z"
                                        }
                                      },
                                      "right": {
                                        "type": "Literal",
                                        "value": null,
                                        "raw": "null"
                                      }
                                    },
                                    "right": {
                                      "type": "BinaryExpression",
                                      "operator": "!==",
                                      "left": {
                                        "type": "MemberExpression",
                                        "computed": false,
                                        "object": {
                                          "type": "Identifier",
                                          "name": "GLOBAL"
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "name": "d3_date"
                                        },
                                        "_isReplacement": true
                                      },
                                      "right": {
                                        "type": "Identifier",
                                        "name": "d3_date_utc"
                                      }
                                    }
                                  }
                                },
                                {
                                  "type": "VariableDeclarator",
                                  "id": {
                                    "type": "Identifier",
                                    "name": "date"
                                  },
                                  "init": {
                                    "type": "NewExpression",
                                    "callee": {
                                      "type": "ConditionalExpression",
                                      "test": {
                                        "type": "Identifier",
                                        "name": "localZ"
                                      },
                                      "consequent": {
                                        "type": "Identifier",
                                        "name": "d3_date_utc"
                                      },
                                      "alternate": {
                                        "type": "MemberExpression",
                                        "computed": false,
                                        "object": {
                                          "type": "Identifier",
                                          "name": "GLOBAL"
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "name": "d3_date"
                                        },
                                        "_isReplacement": true
                                      }
                                    },
                                    "arguments": []
                                  }
                                }
                              ],
                              "kind": "var"
                            },
                            {
                              "type": "IfStatement",
                              "test": {
                                "type": "BinaryExpression",
                                "operator": "in",
                                "left": {
                                  "type": "Literal",
                                  "value": "j",
                                  "raw": "\"j\""
                                },
                                "right": {
                                  "type": "Identifier",
                                  "name": "d"
                                }
                              },
                              "consequent": {
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
                                      "name": "setFullYear"
                                    }
                                  },
                                  "arguments": [
                                    {
                                      "type": "MemberExpression",
                                      "computed": false,
                                      "object": {
                                        "type": "Identifier",
                                        "name": "d"
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "name": "y"
                                      }
                                    },
                                    {
                                      "type": "Literal",
                                      "value": 0,
                                      "raw": "0"
                                    },
                                    {
                                      "type": "MemberExpression",
                                      "computed": false,
                                      "object": {
                                        "type": "Identifier",
                                        "name": "d"
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "name": "j"
                                      }
                                    }
                                  ]
                                }
                              },
                              "alternate": {
                                "type": "IfStatement",
                                "test": {
                                  "type": "LogicalExpression",
                                  "operator": "&&",
                                  "left": {
                                    "type": "BinaryExpression",
                                    "operator": "in",
                                    "left": {
                                      "type": "Literal",
                                      "value": "w",
                                      "raw": "\"w\""
                                    },
                                    "right": {
                                      "type": "Identifier",
                                      "name": "d"
                                    }
                                  },
                                  "right": {
                                    "type": "LogicalExpression",
                                    "operator": "||",
                                    "left": {
                                      "type": "BinaryExpression",
                                      "operator": "in",
                                      "left": {
                                        "type": "Literal",
                                        "value": "W",
                                        "raw": "\"W\""
                                      },
                                      "right": {
                                        "type": "Identifier",
                                        "name": "d"
                                      }
                                    },
                                    "right": {
                                      "type": "BinaryExpression",
                                      "operator": "in",
                                      "left": {
                                        "type": "Literal",
                                        "value": "U",
                                        "raw": "\"U\""
                                      },
                                      "right": {
                                        "type": "Identifier",
                                        "name": "d"
                                      }
                                    }
                                  }
                                },
                                "consequent": {
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
                                            "name": "setFullYear"
                                          }
                                        },
                                        "arguments": [
                                          {
                                            "type": "MemberExpression",
                                            "computed": false,
                                            "object": {
                                              "type": "Identifier",
                                              "name": "d"
                                            },
                                            "property": {
                                              "type": "Identifier",
                                              "name": "y"
                                            }
                                          },
                                          {
                                            "type": "Literal",
                                            "value": 0,
                                            "raw": "0"
                                          },
                                          {
                                            "type": "Literal",
                                            "value": 1,
                                            "raw": "1"
                                          }
                                        ]
                                      }
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
                                            "name": "date"
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "name": "setFullYear"
                                          }
                                        },
                                        "arguments": [
                                          {
                                            "type": "MemberExpression",
                                            "computed": false,
                                            "object": {
                                              "type": "Identifier",
                                              "name": "d"
                                            },
                                            "property": {
                                              "type": "Identifier",
                                              "name": "y"
                                            }
                                          },
                                          {
                                            "type": "Literal",
                                            "value": 0,
                                            "raw": "0"
                                          },
                                          {
                                            "type": "ConditionalExpression",
                                            "test": {
                                              "type": "BinaryExpression",
                                              "operator": "in",
                                              "left": {
                                                "type": "Literal",
                                                "value": "W",
                                                "raw": "\"W\""
                                              },
                                              "right": {
                                                "type": "Identifier",
                                                "name": "d"
                                              }
                                            },
                                            "consequent": {
                                              "type": "BinaryExpression",
                                              "operator": "-",
                                              "left": {
                                                "type": "BinaryExpression",
                                                "operator": "+",
                                                "left": {
                                                  "type": "BinaryExpression",
                                                  "operator": "%",
                                                  "left": {
                                                    "type": "BinaryExpression",
                                                    "operator": "+",
                                                    "left": {
                                                      "type": "MemberExpression",
                                                      "computed": false,
                                                      "object": {
                                                        "type": "Identifier",
                                                        "name": "d"
                                                      },
                                                      "property": {
                                                        "type": "Identifier",
                                                        "name": "w"
                                                      }
                                                    },
                                                    "right": {
                                                      "type": "Literal",
                                                      "value": 6,
                                                      "raw": "6"
                                                    }
                                                  },
                                                  "right": {
                                                    "type": "Literal",
                                                    "value": 7,
                                                    "raw": "7"
                                                  }
                                                },
                                                "right": {
                                                  "type": "BinaryExpression",
                                                  "operator": "*",
                                                  "left": {
                                                    "type": "MemberExpression",
                                                    "computed": false,
                                                    "object": {
                                                      "type": "Identifier",
                                                      "name": "d"
                                                    },
                                                    "property": {
                                                      "type": "Identifier",
                                                      "name": "W"
                                                    }
                                                  },
                                                  "right": {
                                                    "type": "Literal",
                                                    "value": 7,
                                                    "raw": "7"
                                                  }
                                                }
                                              },
                                              "right": {
                                                "type": "BinaryExpression",
                                                "operator": "%",
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
                                                        "name": "date"
                                                      },
                                                      "property": {
                                                        "type": "Identifier",
                                                        "name": "getDay"
                                                      }
                                                    },
                                                    "arguments": []
                                                  },
                                                  "right": {
                                                    "type": "Literal",
                                                    "value": 5,
                                                    "raw": "5"
                                                  }
                                                },
                                                "right": {
                                                  "type": "Literal",
                                                  "value": 7,
                                                  "raw": "7"
                                                }
                                              }
                                            },
                                            "alternate": {
                                              "type": "BinaryExpression",
                                              "operator": "-",
                                              "left": {
                                                "type": "BinaryExpression",
                                                "operator": "+",
                                                "left": {
                                                  "type": "MemberExpression",
                                                  "computed": false,
                                                  "object": {
                                                    "type": "Identifier",
                                                    "name": "d"
                                                  },
                                                  "property": {
                                                    "type": "Identifier",
                                                    "name": "w"
                                                  }
                                                },
                                                "right": {
                                                  "type": "BinaryExpression",
                                                  "operator": "*",
                                                  "left": {
                                                    "type": "MemberExpression",
                                                    "computed": false,
                                                    "object": {
                                                      "type": "Identifier",
                                                      "name": "d"
                                                    },
                                                    "property": {
                                                      "type": "Identifier",
                                                      "name": "U"
                                                    }
                                                  },
                                                  "right": {
                                                    "type": "Literal",
                                                    "value": 7,
                                                    "raw": "7"
                                                  }
                                                }
                                              },
                                              "right": {
                                                "type": "BinaryExpression",
                                                "operator": "%",
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
                                                        "name": "date"
                                                      },
                                                      "property": {
                                                        "type": "Identifier",
                                                        "name": "getDay"
                                                      }
                                                    },
                                                    "arguments": []
                                                  },
                                                  "right": {
                                                    "type": "Literal",
                                                    "value": 6,
                                                    "raw": "6"
                                                  }
                                                },
                                                "right": {
                                                  "type": "Literal",
                                                  "value": 7,
                                                  "raw": "7"
                                                }
                                              }
                                            }
                                          }
                                        ]
                                      }
                                    }
                                  ]
                                },
                                "alternate": {
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
                                        "name": "setFullYear"
                                      }
                                    },
                                    "arguments": [
                                      {
                                        "type": "MemberExpression",
                                        "computed": false,
                                        "object": {
                                          "type": "Identifier",
                                          "name": "d"
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "name": "y"
                                        }
                                      },
                                      {
                                        "type": "MemberExpression",
                                        "computed": false,
                                        "object": {
                                          "type": "Identifier",
                                          "name": "d"
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "name": "m"
                                        }
                                      },
                                      {
                                        "type": "MemberExpression",
                                        "computed": false,
                                        "object": {
                                          "type": "Identifier",
                                          "name": "d"
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "name": "d"
                                        }
                                      }
                                    ]
                                  }
                                }
                              }
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
                                    "name": "date"
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "name": "setHours"
                                  }
                                },
                                "arguments": [
                                  {
                                    "type": "BinaryExpression",
                                    "operator": "+",
                                    "left": {
                                      "type": "MemberExpression",
                                      "computed": false,
                                      "object": {
                                        "type": "Identifier",
                                        "name": "d"
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "name": "H"
                                      }
                                    },
                                    "right": {
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
                                            "type": "MemberExpression",
                                            "computed": false,
                                            "object": {
                                              "type": "Identifier",
                                              "name": "d"
                                            },
                                            "property": {
                                              "type": "Identifier",
                                              "name": "Z"
                                            }
                                          },
                                          "right": {
                                            "type": "Literal",
                                            "value": 100,
                                            "raw": "100"
                                          }
                                        }
                                      ]
                                    }
                                  },
                                  {
                                    "type": "BinaryExpression",
                                    "operator": "+",
                                    "left": {
                                      "type": "MemberExpression",
                                      "computed": false,
                                      "object": {
                                        "type": "Identifier",
                                        "name": "d"
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "name": "M"
                                      }
                                    },
                                    "right": {
                                      "type": "BinaryExpression",
                                      "operator": "%",
                                      "left": {
                                        "type": "MemberExpression",
                                        "computed": false,
                                        "object": {
                                          "type": "Identifier",
                                          "name": "d"
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "name": "Z"
                                        }
                                      },
                                      "right": {
                                        "type": "Literal",
                                        "value": 100,
                                        "raw": "100"
                                      }
                                    }
                                  },
                                  {
                                    "type": "MemberExpression",
                                    "computed": false,
                                    "object": {
                                      "type": "Identifier",
                                      "name": "d"
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "name": "S"
                                    }
                                  },
                                  {
                                    "type": "MemberExpression",
                                    "computed": false,
                                    "object": {
                                      "type": "Identifier",
                                      "name": "d"
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "name": "L"
                                    }
                                  }
                                ]
                              }
                            },
                            {
                              "type": "ReturnStatement",
                              "argument": {
                                "type": "ConditionalExpression",
                                "test": {
                                  "type": "Identifier",
                                  "name": "localZ"
                                },
                                "consequent": {
                                  "type": "MemberExpression",
                                  "computed": false,
                                  "object": {
                                    "type": "Identifier",
                                    "name": "date"
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "name": "_"
                                  }
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
                          "name": "format"
                        },
                        "property": {
                          "type": "Identifier",
                          "name": "toString"
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
                                "type": "Identifier",
                                "name": "template"
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
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Identifier",
                      "name": "format"
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
                "name": "d3_time_parse"
              },
              "params": [
                {
                  "type": "Identifier",
                  "name": "date"
                },
                {
                  "type": "Identifier",
                  "name": "template"
                },
                {
                  "type": "Identifier",
                  "name": "string"
                },
                {
                  "type": "Identifier",
                  "name": "j"
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
                          "name": "c"
                        },
                        "init": null
                      },
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "name": "p"
                        },
                        "init": null
                      },
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "name": "t"
                        },
                        "init": null
                      },
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "name": "i"
                        },
                        "init": {
                          "type": "Literal",
                          "value": 0,
                          "raw": "0"
                        }
                      },
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "name": "n"
                        },
                        "init": {
                          "type": "MemberExpression",
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "name": "template"
                          },
                          "property": {
                            "type": "Identifier",
                            "name": "length"
                          }
                        }
                      },
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "name": "m"
                        },
                        "init": {
                          "type": "MemberExpression",
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "name": "string"
                          },
                          "property": {
                            "type": "Identifier",
                            "name": "length"
                          }
                        }
                      }
                    ],
                    "kind": "var"
                  },
                  {
                    "type": "WhileStatement",
                    "test": {
                      "type": "BinaryExpression",
                      "operator": "<",
                      "left": {
                        "type": "Identifier",
                        "name": "i"
                      },
                      "right": {
                        "type": "Identifier",
                        "name": "n"
                      }
                    },
                    "body": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "IfStatement",
                          "test": {
                            "type": "BinaryExpression",
                            "operator": ">=",
                            "left": {
                              "type": "Identifier",
                              "name": "j"
                            },
                            "right": {
                              "type": "Identifier",
                              "name": "m"
                            }
                          },
                          "consequent": {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "UnaryExpression",
                              "operator": "-",
                              "argument": {
                                "type": "Literal",
                                "value": 1,
                                "raw": "1"
                              },
                              "prefix": true
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
                              "name": "c"
                            },
                            "right": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "MemberExpression",
                                "computed": false,
                                "object": {
                                  "type": "Identifier",
                                  "name": "template"
                                },
                                "property": {
                                  "type": "Identifier",
                                  "name": "charCodeAt"
                                }
                              },
                              "arguments": [
                                {
                                  "type": "UpdateExpression",
                                  "operator": "++",
                                  "argument": {
                                    "type": "Identifier",
                                    "name": "i"
                                  },
                                  "prefix": false
                                }
                              ]
                            }
                          }
                        },
                        {
                          "type": "IfStatement",
                          "test": {
                            "type": "BinaryExpression",
                            "operator": "===",
                            "left": {
                              "type": "Identifier",
                              "name": "c"
                            },
                            "right": {
                              "type": "Literal",
                              "value": 37,
                              "raw": "37"
                            }
                          },
                          "consequent": {
                            "type": "BlockStatement",
                            "body": [
                              {
                                "type": "ExpressionStatement",
                                "expression": {
                                  "type": "AssignmentExpression",
                                  "operator": "=",
                                  "left": {
                                    "type": "Identifier",
                                    "name": "t"
                                  },
                                  "right": {
                                    "type": "CallExpression",
                                    "callee": {
                                      "type": "MemberExpression",
                                      "computed": false,
                                      "object": {
                                        "type": "Identifier",
                                        "name": "template"
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "name": "charAt"
                                      }
                                    },
                                    "arguments": [
                                      {
                                        "type": "UpdateExpression",
                                        "operator": "++",
                                        "argument": {
                                          "type": "Identifier",
                                          "name": "i"
                                        },
                                        "prefix": false
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
                                    "type": "Identifier",
                                    "name": "p"
                                  },
                                  "right": {
                                    "type": "MemberExpression",
                                    "computed": true,
                                    "object": {
                                      "type": "Identifier",
                                      "name": "d3_time_parsers"
                                    },
                                    "property": {
                                      "type": "ConditionalExpression",
                                      "test": {
                                        "type": "BinaryExpression",
                                        "operator": "in",
                                        "left": {
                                          "type": "Identifier",
                                          "name": "t"
                                        },
                                        "right": {
                                          "type": "Identifier",
                                          "name": "d3_time_formatPads"
                                        }
                                      },
                                      "consequent": {
                                        "type": "CallExpression",
                                        "callee": {
                                          "type": "MemberExpression",
                                          "computed": false,
                                          "object": {
                                            "type": "Identifier",
                                            "name": "template"
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "name": "charAt"
                                          }
                                        },
                                        "arguments": [
                                          {
                                            "type": "UpdateExpression",
                                            "operator": "++",
                                            "argument": {
                                              "type": "Identifier",
                                              "name": "i"
                                            },
                                            "prefix": false
                                          }
                                        ]
                                      },
                                      "alternate": {
                                        "type": "Identifier",
                                        "name": "t"
                                      }
                                    }
                                  }
                                }
                              },
                              {
                                "type": "IfStatement",
                                "test": {
                                  "type": "LogicalExpression",
                                  "operator": "||",
                                  "left": {
                                    "type": "UnaryExpression",
                                    "operator": "!",
                                    "argument": {
                                      "type": "Identifier",
                                      "name": "p"
                                    },
                                    "prefix": true
                                  },
                                  "right": {
                                    "type": "BinaryExpression",
                                    "operator": "<",
                                    "left": {
                                      "type": "AssignmentExpression",
                                      "operator": "=",
                                      "left": {
                                        "type": "Identifier",
                                        "name": "j"
                                      },
                                      "right": {
                                        "type": "CallExpression",
                                        "callee": {
                                          "type": "Identifier",
                                          "name": "p"
                                        },
                                        "arguments": [
                                          {
                                            "type": "Identifier",
                                            "name": "date"
                                          },
                                          {
                                            "type": "Identifier",
                                            "name": "string"
                                          },
                                          {
                                            "type": "Identifier",
                                            "name": "j"
                                          }
                                        ]
                                      }
                                    },
                                    "right": {
                                      "type": "Literal",
                                      "value": 0,
                                      "raw": "0"
                                    }
                                  }
                                },
                                "consequent": {
                                  "type": "ReturnStatement",
                                  "argument": {
                                    "type": "UnaryExpression",
                                    "operator": "-",
                                    "argument": {
                                      "type": "Literal",
                                      "value": 1,
                                      "raw": "1"
                                    },
                                    "prefix": true
                                  }
                                },
                                "alternate": null
                              }
                            ]
                          },
                          "alternate": {
                            "type": "IfStatement",
                            "test": {
                              "type": "BinaryExpression",
                              "operator": "!=",
                              "left": {
                                "type": "Identifier",
                                "name": "c"
                              },
                              "right": {
                                "type": "CallExpression",
                                "callee": {
                                  "type": "MemberExpression",
                                  "computed": false,
                                  "object": {
                                    "type": "Identifier",
                                    "name": "string"
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "name": "charCodeAt"
                                  }
                                },
                                "arguments": [
                                  {
                                    "type": "UpdateExpression",
                                    "operator": "++",
                                    "argument": {
                                      "type": "Identifier",
                                      "name": "j"
                                    },
                                    "prefix": false
                                  }
                                ]
                              }
                            },
                            "consequent": {
                              "type": "BlockStatement",
                              "body": [
                                {
                                  "type": "ReturnStatement",
                                  "argument": {
                                    "type": "UnaryExpression",
                                    "operator": "-",
                                    "argument": {
                                      "type": "Literal",
                                      "value": 1,
                                      "raw": "1"
                                    },
                                    "prefix": true
                                  }
                                }
                              ]
                            },
                            "alternate": null
                          }
                        }
                      ]
                    }
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Identifier",
                      "name": "j"
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
                    "name": "d3_time_format"
                  },
                  "property": {
                    "type": "Identifier",
                    "name": "utc"
                  }
                },
                "right": {
                  "type": "FunctionExpression",
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "name": "template"
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
                              "name": "local"
                            },
                            "init": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "Identifier",
                                "name": "d3_time_format"
                              },
                              "arguments": [
                                {
                                  "type": "Identifier",
                                  "name": "template"
                                }
                              ]
                            }
                          }
                        ],
                        "kind": "var"
                      },
                      {
                        "type": "FunctionDeclaration",
                        "id": {
                          "type": "Identifier",
                          "name": "format"
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
                              "type": "TryStatement",
                              "block": {
                                "type": "BlockStatement",
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
                                          "name": "GLOBAL"
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "name": "d3_date"
                                        },
                                        "_isReplacement": true
                                      },
                                      "right": {
                                        "type": "Identifier",
                                        "name": "d3_date_utc"
                                      }
                                    }
                                  },
                                  {
                                    "type": "VariableDeclaration",
                                    "declarations": [
                                      {
                                        "type": "VariableDeclarator",
                                        "id": {
                                          "type": "Identifier",
                                          "name": "utc"
                                        },
                                        "init": {
                                          "type": "NewExpression",
                                          "callee": {
                                            "type": "MemberExpression",
                                            "computed": false,
                                            "object": {
                                              "type": "Identifier",
                                              "name": "GLOBAL"
                                            },
                                            "property": {
                                              "type": "Identifier",
                                              "name": "d3_date"
                                            },
                                            "_isReplacement": true
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
                                      "type": "AssignmentExpression",
                                      "operator": "=",
                                      "left": {
                                        "type": "MemberExpression",
                                        "computed": false,
                                        "object": {
                                          "type": "Identifier",
                                          "name": "utc"
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "name": "_"
                                        }
                                      },
                                      "right": {
                                        "type": "Identifier",
                                        "name": "date"
                                      }
                                    }
                                  },
                                  {
                                    "type": "ReturnStatement",
                                    "argument": {
                                      "type": "CallExpression",
                                      "callee": {
                                        "type": "Identifier",
                                        "name": "local"
                                      },
                                      "arguments": [
                                        {
                                          "type": "Identifier",
                                          "name": "utc"
                                        }
                                      ]
                                    }
                                  }
                                ]
                              },
                              "guardedHandlers": [],
                              "handlers": [],
                              "finalizer": {
                                "type": "BlockStatement",
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
                                          "name": "GLOBAL"
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "name": "d3_date"
                                        },
                                        "_isReplacement": true
                                      },
                                      "right": {
                                        "type": "Identifier",
                                        "name": "Date"
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
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "AssignmentExpression",
                          "operator": "=",
                          "left": {
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "name": "format"
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
                                  "type": "TryStatement",
                                  "block": {
                                    "type": "BlockStatement",
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
                                              "name": "GLOBAL"
                                            },
                                            "property": {
                                              "type": "Identifier",
                                              "name": "d3_date"
                                            },
                                            "_isReplacement": true
                                          },
                                          "right": {
                                            "type": "Identifier",
                                            "name": "d3_date_utc"
                                          }
                                        }
                                      },
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
                                              "type": "CallExpression",
                                              "callee": {
                                                "type": "MemberExpression",
                                                "computed": false,
                                                "object": {
                                                  "type": "Identifier",
                                                  "name": "local"
                                                },
                                                "property": {
                                                  "type": "Identifier",
                                                  "name": "parse"
                                                }
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
                                          "type": "LogicalExpression",
                                          "operator": "&&",
                                          "left": {
                                            "type": "Identifier",
                                            "name": "date"
                                          },
                                          "right": {
                                            "type": "MemberExpression",
                                            "computed": false,
                                            "object": {
                                              "type": "Identifier",
                                              "name": "date"
                                            },
                                            "property": {
                                              "type": "Identifier",
                                              "name": "_"
                                            }
                                          }
                                        }
                                      }
                                    ]
                                  },
                                  "guardedHandlers": [],
                                  "handlers": [],
                                  "finalizer": {
                                    "type": "BlockStatement",
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
                                              "name": "GLOBAL"
                                            },
                                            "property": {
                                              "type": "Identifier",
                                              "name": "d3_date"
                                            },
                                            "_isReplacement": true
                                          },
                                          "right": {
                                            "type": "Identifier",
                                            "name": "Date"
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
                              "name": "format"
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
                              "name": "local"
                            },
                            "property": {
                              "type": "Identifier",
                              "name": "toString"
                            }
                          }
                        }
                      },
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "Identifier",
                          "name": "format"
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
                    "name": "d3_time_format"
                  },
                  "property": {
                    "type": "Identifier",
                    "name": "multi"
                  }
                },
                "right": {
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
                        "name": "d3_time_format"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "utc"
                      }
                    },
                    "property": {
                      "type": "Identifier",
                      "name": "multi"
                    }
                  },
                  "right": {
                    "type": "Identifier",
                    "name": "d3_time_formatMulti"
                  }
                }
              }
            },
            {
              "type": "VariableDeclaration",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "name": "d3_time_periodLookup"
                  },
                  "init": {
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
                        "name": "map"
                      }
                    },
                    "arguments": []
                  }
                },
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "name": "d3_time_dayRe"
                  },
                  "init": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "name": "d3_time_formatRe"
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "name": "locale_days"
                      }
                    ]
                  }
                },
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "name": "d3_time_dayLookup"
                  },
                  "init": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "name": "d3_time_formatLookup"
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "name": "locale_days"
                      }
                    ]
                  }
                },
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "name": "d3_time_dayAbbrevRe"
                  },
                  "init": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "name": "d3_time_formatRe"
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "name": "locale_shortDays"
                      }
                    ]
                  }
                },
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "name": "d3_time_dayAbbrevLookup"
                  },
                  "init": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "name": "d3_time_formatLookup"
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "name": "locale_shortDays"
                      }
                    ]
                  }
                },
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "name": "d3_time_monthRe"
                  },
                  "init": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "name": "d3_time_formatRe"
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "name": "locale_months"
                      }
                    ]
                  }
                },
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "name": "d3_time_monthLookup"
                  },
                  "init": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "name": "d3_time_formatLookup"
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "name": "locale_months"
                      }
                    ]
                  }
                },
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "name": "d3_time_monthAbbrevRe"
                  },
                  "init": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "name": "d3_time_formatRe"
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "name": "locale_shortMonths"
                      }
                    ]
                  }
                },
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "name": "d3_time_monthAbbrevLookup"
                  },
                  "init": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "name": "d3_time_formatLookup"
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "name": "locale_shortMonths"
                      }
                    ]
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
                    "name": "locale_periods"
                  },
                  "property": {
                    "type": "Identifier",
                    "name": "forEach"
                  }
                },
                "arguments": [
                  {
                    "type": "FunctionExpression",
                    "id": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "name": "p"
                      },
                      {
                        "type": "Identifier",
                        "name": "i"
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
                                "name": "d3_time_periodLookup"
                              },
                              "property": {
                                "type": "Identifier",
                                "name": "set"
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
                                    "name": "p"
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "name": "toLowerCase"
                                  }
                                },
                                "arguments": []
                              },
                              {
                                "type": "Identifier",
                                "name": "i"
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
            },
            {
              "type": "VariableDeclaration",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "name": "d3_time_formats"
                  },
                  "init": {
                    "type": "ObjectExpression",
                    "properties": [
                      {
                        "type": "Property",
                        "key": {
                          "type": "Identifier",
                          "name": "a"
                        },
                        "value": {
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
                                  "type": "MemberExpression",
                                  "computed": true,
                                  "object": {
                                    "type": "Identifier",
                                    "name": "locale_shortDays"
                                  },
                                  "property": {
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
                                        "name": "getDay"
                                      }
                                    },
                                    "arguments": []
                                  }
                                }
                              }
                            ]
                          },
                          "rest": null,
                          "generator": false,
                          "expression": false
                        },
                        "kind": "init"
                      },
                      {
                        "type": "Property",
                        "key": {
                          "type": "Identifier",
                          "name": "A"
                        },
                        "value": {
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
                                  "type": "MemberExpression",
                                  "computed": true,
                                  "object": {
                                    "type": "Identifier",
                                    "name": "locale_days"
                                  },
                                  "property": {
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
                                        "name": "getDay"
                                      }
                                    },
                                    "arguments": []
                                  }
                                }
                              }
                            ]
                          },
                          "rest": null,
                          "generator": false,
                          "expression": false
                        },
                        "kind": "init"
                      },
                      {
                        "type": "Property",
                        "key": {
                          "type": "Identifier",
                          "name": "b"
                        },
                        "value": {
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
                                  "type": "MemberExpression",
                                  "computed": true,
                                  "object": {
                                    "type": "Identifier",
                                    "name": "locale_shortMonths"
                                  },
                                  "property": {
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
                                        "name": "getMonth"
                                      }
                                    },
                                    "arguments": []
                                  }
                                }
                              }
                            ]
                          },
                          "rest": null,
                          "generator": false,
                          "expression": false
                        },
                        "kind": "init"
                      },
                      {
                        "type": "Property",
                        "key": {
                          "type": "Identifier",
                          "name": "B"
                        },
                        "value": {
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
                                  "type": "MemberExpression",
                                  "computed": true,
                                  "object": {
                                    "type": "Identifier",
                                    "name": "locale_months"
                                  },
                                  "property": {
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
                                        "name": "getMonth"
                                      }
                                    },
                                    "arguments": []
                                  }
                                }
                              }
                            ]
                          },
                          "rest": null,
                          "generator": false,
                          "expression": false
                        },
                        "kind": "init"
                      },
                      {
                        "type": "Property",
                        "key": {
                          "type": "Identifier",
                          "name": "c"
                        },
                        "value": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "Identifier",
                            "name": "d3_time_format"
                          },
                          "arguments": [
                            {
                              "type": "Identifier",
                              "name": "locale_dateTime"
                            }
                          ]
                        },
                        "kind": "init"
                      },
                      {
                        "type": "Property",
                        "key": {
                          "type": "Identifier",
                          "name": "d"
                        },
                        "value": {
                          "type": "FunctionExpression",
                          "id": null,
                          "params": [
                            {
                              "type": "Identifier",
                              "name": "d"
                            },
                            {
                              "type": "Identifier",
                              "name": "p"
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
                                    "name": "d3_time_formatPad"
                                  },
                                  "arguments": [
                                    {
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
                                          "name": "getDate"
                                        }
                                      },
                                      "arguments": []
                                    },
                                    {
                                      "type": "Identifier",
                                      "name": "p"
                                    },
                                    {
                                      "type": "Literal",
                                      "value": 2,
                                      "raw": "2"
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
                        "kind": "init"
                      },
                      {
                        "type": "Property",
                        "key": {
                          "type": "Identifier",
                          "name": "e"
                        },
                        "value": {
                          "type": "FunctionExpression",
                          "id": null,
                          "params": [
                            {
                              "type": "Identifier",
                              "name": "d"
                            },
                            {
                              "type": "Identifier",
                              "name": "p"
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
                                    "name": "d3_time_formatPad"
                                  },
                                  "arguments": [
                                    {
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
                                          "name": "getDate"
                                        }
                                      },
                                      "arguments": []
                                    },
                                    {
                                      "type": "Identifier",
                                      "name": "p"
                                    },
                                    {
                                      "type": "Literal",
                                      "value": 2,
                                      "raw": "2"
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
                        "kind": "init"
                      },
                      {
                        "type": "Property",
                        "key": {
                          "type": "Identifier",
                          "name": "H"
                        },
                        "value": {
                          "type": "FunctionExpression",
                          "id": null,
                          "params": [
                            {
                              "type": "Identifier",
                              "name": "d"
                            },
                            {
                              "type": "Identifier",
                              "name": "p"
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
                                    "name": "d3_time_formatPad"
                                  },
                                  "arguments": [
                                    {
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
                                          "name": "getHours"
                                        }
                                      },
                                      "arguments": []
                                    },
                                    {
                                      "type": "Identifier",
                                      "name": "p"
                                    },
                                    {
                                      "type": "Literal",
                                      "value": 2,
                                      "raw": "2"
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
                        "kind": "init"
                      },
                      {
                        "type": "Property",
                        "key": {
                          "type": "Identifier",
                          "name": "I"
                        },
                        "value": {
                          "type": "FunctionExpression",
                          "id": null,
                          "params": [
                            {
                              "type": "Identifier",
                              "name": "d"
                            },
                            {
                              "type": "Identifier",
                              "name": "p"
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
                                    "name": "d3_time_formatPad"
                                  },
                                  "arguments": [
                                    {
                                      "type": "LogicalExpression",
                                      "operator": "||",
                                      "left": {
                                        "type": "BinaryExpression",
                                        "operator": "%",
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
                                              "name": "getHours"
                                            }
                                          },
                                          "arguments": []
                                        },
                                        "right": {
                                          "type": "Literal",
                                          "value": 12,
                                          "raw": "12"
                                        }
                                      },
                                      "right": {
                                        "type": "Literal",
                                        "value": 12,
                                        "raw": "12"
                                      }
                                    },
                                    {
                                      "type": "Identifier",
                                      "name": "p"
                                    },
                                    {
                                      "type": "Literal",
                                      "value": 2,
                                      "raw": "2"
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
                        "kind": "init"
                      },
                      {
                        "type": "Property",
                        "key": {
                          "type": "Identifier",
                          "name": "j"
                        },
                        "value": {
                          "type": "FunctionExpression",
                          "id": null,
                          "params": [
                            {
                              "type": "Identifier",
                              "name": "d"
                            },
                            {
                              "type": "Identifier",
                              "name": "p"
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
                                    "name": "d3_time_formatPad"
                                  },
                                  "arguments": [
                                    {
                                      "type": "BinaryExpression",
                                      "operator": "+",
                                      "left": {
                                        "type": "Literal",
                                        "value": 1,
                                        "raw": "1"
                                      },
                                      "right": {
                                        "type": "CallExpression",
                                        "callee": {
                                          "type": "MemberExpression",
                                          "computed": false,
                                          "object": {
                                            "type": "Identifier",
                                            "name": "d3_time"
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "name": "dayOfYear"
                                          }
                                        },
                                        "arguments": [
                                          {
                                            "type": "Identifier",
                                            "name": "d"
                                          }
                                        ]
                                      }
                                    },
                                    {
                                      "type": "Identifier",
                                      "name": "p"
                                    },
                                    {
                                      "type": "Literal",
                                      "value": 3,
                                      "raw": "3"
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
                        "kind": "init"
                      },
                      {
                        "type": "Property",
                        "key": {
                          "type": "Identifier",
                          "name": "L"
                        },
                        "value": {
                          "type": "FunctionExpression",
                          "id": null,
                          "params": [
                            {
                              "type": "Identifier",
                              "name": "d"
                            },
                            {
                              "type": "Identifier",
                              "name": "p"
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
                                    "name": "d3_time_formatPad"
                                  },
                                  "arguments": [
                                    {
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
                                          "name": "getMilliseconds"
                                        }
                                      },
                                      "arguments": []
                                    },
                                    {
                                      "type": "Identifier",
                                      "name": "p"
                                    },
                                    {
                                      "type": "Literal",
                                      "value": 3,
                                      "raw": "3"
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
                        "kind": "init"
                      },
                      {
                        "type": "Property",
                        "key": {
                          "type": "Identifier",
                          "name": "m"
                        },
                        "value": {
                          "type": "FunctionExpression",
                          "id": null,
                          "params": [
                            {
                              "type": "Identifier",
                              "name": "d"
                            },
                            {
                              "type": "Identifier",
                              "name": "p"
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
                                    "name": "d3_time_formatPad"
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
                                            "name": "d"
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "name": "getMonth"
                                          }
                                        },
                                        "arguments": []
                                      },
                                      "right": {
                                        "type": "Literal",
                                        "value": 1,
                                        "raw": "1"
                                      }
                                    },
                                    {
                                      "type": "Identifier",
                                      "name": "p"
                                    },
                                    {
                                      "type": "Literal",
                                      "value": 2,
                                      "raw": "2"
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
                        "kind": "init"
                      },
                      {
                        "type": "Property",
                        "key": {
                          "type": "Identifier",
                          "name": "M"
                        },
                        "value": {
                          "type": "FunctionExpression",
                          "id": null,
                          "params": [
                            {
                              "type": "Identifier",
                              "name": "d"
                            },
                            {
                              "type": "Identifier",
                              "name": "p"
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
                                    "name": "d3_time_formatPad"
                                  },
                                  "arguments": [
                                    {
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
                                          "name": "getMinutes"
                                        }
                                      },
                                      "arguments": []
                                    },
                                    {
                                      "type": "Identifier",
                                      "name": "p"
                                    },
                                    {
                                      "type": "Literal",
                                      "value": 2,
                                      "raw": "2"
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
                        "kind": "init"
                      },
                      {
                        "type": "Property",
                        "key": {
                          "type": "Identifier",
                          "name": "p"
                        },
                        "value": {
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
                                  "type": "MemberExpression",
                                  "computed": true,
                                  "object": {
                                    "type": "Identifier",
                                    "name": "locale_periods"
                                  },
                                  "property": {
                                    "type": "UnaryExpression",
                                    "operator": "+",
                                    "argument": {
                                      "type": "BinaryExpression",
                                      "operator": ">=",
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
                                            "name": "getHours"
                                          }
                                        },
                                        "arguments": []
                                      },
                                      "right": {
                                        "type": "Literal",
                                        "value": 12,
                                        "raw": "12"
                                      }
                                    },
                                    "prefix": true
                                  }
                                }
                              }
                            ]
                          },
                          "rest": null,
                          "generator": false,
                          "expression": false
                        },
                        "kind": "init"
                      },
                      {
                        "type": "Property",
                        "key": {
                          "type": "Identifier",
                          "name": "S"
                        },
                        "value": {
                          "type": "FunctionExpression",
                          "id": null,
                          "params": [
                            {
                              "type": "Identifier",
                              "name": "d"
                            },
                            {
                              "type": "Identifier",
                              "name": "p"
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
                                    "name": "d3_time_formatPad"
                                  },
                                  "arguments": [
                                    {
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
                                          "name": "getSeconds"
                                        }
                                      },
                                      "arguments": []
                                    },
                                    {
                                      "type": "Identifier",
                                      "name": "p"
                                    },
                                    {
                                      "type": "Literal",
                                      "value": 2,
                                      "raw": "2"
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
                        "kind": "init"
                      },
                      {
                        "type": "Property",
                        "key": {
                          "type": "Identifier",
                          "name": "U"
                        },
                        "value": {
                          "type": "FunctionExpression",
                          "id": null,
                          "params": [
                            {
                              "type": "Identifier",
                              "name": "d"
                            },
                            {
                              "type": "Identifier",
                              "name": "p"
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
                                    "name": "d3_time_formatPad"
                                  },
                                  "arguments": [
                                    {
                                      "type": "CallExpression",
                                      "callee": {
                                        "type": "MemberExpression",
                                        "computed": false,
                                        "object": {
                                          "type": "Identifier",
                                          "name": "d3_time"
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "name": "sundayOfYear"
                                        }
                                      },
                                      "arguments": [
                                        {
                                          "type": "Identifier",
                                          "name": "d"
                                        }
                                      ]
                                    },
                                    {
                                      "type": "Identifier",
                                      "name": "p"
                                    },
                                    {
                                      "type": "Literal",
                                      "value": 2,
                                      "raw": "2"
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
                        "kind": "init"
                      },
                      {
                        "type": "Property",
                        "key": {
                          "type": "Identifier",
                          "name": "w"
                        },
                        "value": {
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
                                      "name": "getDay"
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
                        "kind": "init"
                      },
                      {
                        "type": "Property",
                        "key": {
                          "type": "Identifier",
                          "name": "W"
                        },
                        "value": {
                          "type": "FunctionExpression",
                          "id": null,
                          "params": [
                            {
                              "type": "Identifier",
                              "name": "d"
                            },
                            {
                              "type": "Identifier",
                              "name": "p"
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
                                    "name": "d3_time_formatPad"
                                  },
                                  "arguments": [
                                    {
                                      "type": "CallExpression",
                                      "callee": {
                                        "type": "MemberExpression",
                                        "computed": false,
                                        "object": {
                                          "type": "Identifier",
                                          "name": "d3_time"
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "name": "mondayOfYear"
                                        }
                                      },
                                      "arguments": [
                                        {
                                          "type": "Identifier",
                                          "name": "d"
                                        }
                                      ]
                                    },
                                    {
                                      "type": "Identifier",
                                      "name": "p"
                                    },
                                    {
                                      "type": "Literal",
                                      "value": 2,
                                      "raw": "2"
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
                        "kind": "init"
                      },
                      {
                        "type": "Property",
                        "key": {
                          "type": "Identifier",
                          "name": "x"
                        },
                        "value": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "Identifier",
                            "name": "d3_time_format"
                          },
                          "arguments": [
                            {
                              "type": "Identifier",
                              "name": "locale_date"
                            }
                          ]
                        },
                        "kind": "init"
                      },
                      {
                        "type": "Property",
                        "key": {
                          "type": "Identifier",
                          "name": "X"
                        },
                        "value": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "Identifier",
                            "name": "d3_time_format"
                          },
                          "arguments": [
                            {
                              "type": "Identifier",
                              "name": "locale_time"
                            }
                          ]
                        },
                        "kind": "init"
                      },
                      {
                        "type": "Property",
                        "key": {
                          "type": "Identifier",
                          "name": "y"
                        },
                        "value": {
                          "type": "FunctionExpression",
                          "id": null,
                          "params": [
                            {
                              "type": "Identifier",
                              "name": "d"
                            },
                            {
                              "type": "Identifier",
                              "name": "p"
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
                                    "name": "d3_time_formatPad"
                                  },
                                  "arguments": [
                                    {
                                      "type": "BinaryExpression",
                                      "operator": "%",
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
                                            "name": "getFullYear"
                                          }
                                        },
                                        "arguments": []
                                      },
                                      "right": {
                                        "type": "Literal",
                                        "value": 100,
                                        "raw": "100"
                                      }
                                    },
                                    {
                                      "type": "Identifier",
                                      "name": "p"
                                    },
                                    {
                                      "type": "Literal",
                                      "value": 2,
                                      "raw": "2"
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
                        "kind": "init"
                      },
                      {
                        "type": "Property",
                        "key": {
                          "type": "Identifier",
                          "name": "Y"
                        },
                        "value": {
                          "type": "FunctionExpression",
                          "id": null,
                          "params": [
                            {
                              "type": "Identifier",
                              "name": "d"
                            },
                            {
                              "type": "Identifier",
                              "name": "p"
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
                                    "name": "d3_time_formatPad"
                                  },
                                  "arguments": [
                                    {
                                      "type": "BinaryExpression",
                                      "operator": "%",
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
                                            "name": "getFullYear"
                                          }
                                        },
                                        "arguments": []
                                      },
                                      "right": {
                                        "type": "Literal",
                                        "value": 10000,
                                        "raw": "10000"
                                      }
                                    },
                                    {
                                      "type": "Identifier",
                                      "name": "p"
                                    },
                                    {
                                      "type": "Literal",
                                      "value": 4,
                                      "raw": "4"
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
                        "kind": "init"
                      },
                      {
                        "type": "Property",
                        "key": {
                          "type": "Identifier",
                          "name": "Z"
                        },
                        "value": {
                          "type": "Identifier",
                          "name": "d3_time_zone"
                        },
                        "kind": "init"
                      },
                      {
                        "type": "Property",
                        "key": {
                          "type": "Literal",
                          "value": "%",
                          "raw": "\"%\""
                        },
                        "value": {
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
                                  "type": "Literal",
                                  "value": "%",
                                  "raw": "\"%\""
                                }
                              }
                            ]
                          },
                          "rest": null,
                          "generator": false,
                          "expression": false
                        },
                        "kind": "init"
                      }
                    ]
                  }
                }
              ],
              "kind": "var"
            },
            {
              "type": "VariableDeclaration",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "name": "d3_time_parsers"
                  },
                  "init": {
                    "type": "ObjectExpression",
                    "properties": [
                      {
                        "type": "Property",
                        "key": {
                          "type": "Identifier",
                          "name": "a"
                        },
                        "value": {
                          "type": "Identifier",
                          "name": "d3_time_parseWeekdayAbbrev"
                        },
                        "kind": "init"
                      },
                      {
                        "type": "Property",
                        "key": {
                          "type": "Identifier",
                          "name": "A"
                        },
                        "value": {
                          "type": "Identifier",
                          "name": "d3_time_parseWeekday"
                        },
                        "kind": "init"
                      },
                      {
                        "type": "Property",
                        "key": {
                          "type": "Identifier",
                          "name": "b"
                        },
                        "value": {
                          "type": "Identifier",
                          "name": "d3_time_parseMonthAbbrev"
                        },
                        "kind": "init"
                      },
                      {
                        "type": "Property",
                        "key": {
                          "type": "Identifier",
                          "name": "B"
                        },
                        "value": {
                          "type": "Identifier",
                          "name": "d3_time_parseMonth"
                        },
                        "kind": "init"
                      },
                      {
                        "type": "Property",
                        "key": {
                          "type": "Identifier",
                          "name": "c"
                        },
                        "value": {
                          "type": "Identifier",
                          "name": "d3_time_parseLocaleFull"
                        },
                        "kind": "init"
                      },
                      {
                        "type": "Property",
                        "key": {
                          "type": "Identifier",
                          "name": "d"
                        },
                        "value": {
                          "type": "Identifier",
                          "name": "d3_time_parseDay"
                        },
                        "kind": "init"
                      },
                      {
                        "type": "Property",
                        "key": {
                          "type": "Identifier",
                          "name": "e"
                        },
                        "value": {
                          "type": "Identifier",
                          "name": "d3_time_parseDay"
                        },
                        "kind": "init"
                      },
                      {
                        "type": "Property",
                        "key": {
                          "type": "Identifier",
                          "name": "H"
                        },
                        "value": {
                          "type": "Identifier",
                          "name": "d3_time_parseHour24"
                        },
                        "kind": "init"
                      },
                      {
                        "type": "Property",
                        "key": {
                          "type": "Identifier",
                          "name": "I"
                        },
                        "value": {
                          "type": "Identifier",
                          "name": "d3_time_parseHour24"
                        },
                        "kind": "init"
                      },
                      {
                        "type": "Property",
                        "key": {
                          "type": "Identifier",
                          "name": "j"
                        },
                        "value": {
                          "type": "Identifier",
                          "name": "d3_time_parseDayOfYear"
                        },
                        "kind": "init"
                      },
                      {
                        "type": "Property",
                        "key": {
                          "type": "Identifier",
                          "name": "L"
                        },
                        "value": {
                          "type": "Identifier",
                          "name": "d3_time_parseMilliseconds"
                        },
                        "kind": "init"
                      },
                      {
                        "type": "Property",
                        "key": {
                          "type": "Identifier",
                          "name": "m"
                        },
                        "value": {
                          "type": "Identifier",
                          "name": "d3_time_parseMonthNumber"
                        },
                        "kind": "init"
                      },
                      {
                        "type": "Property",
                        "key": {
                          "type": "Identifier",
                          "name": "M"
                        },
                        "value": {
                          "type": "Identifier",
                          "name": "d3_time_parseMinutes"
                        },
                        "kind": "init"
                      },
                      {
                        "type": "Property",
                        "key": {
                          "type": "Identifier",
                          "name": "p"
                        },
                        "value": {
                          "type": "Identifier",
                          "name": "d3_time_parseAmPm"
                        },
                        "kind": "init"
                      },
                      {
                        "type": "Property",
                        "key": {
                          "type": "Identifier",
                          "name": "S"
                        },
                        "value": {
                          "type": "Identifier",
                          "name": "d3_time_parseSeconds"
                        },
                        "kind": "init"
                      },
                      {
                        "type": "Property",
                        "key": {
                          "type": "Identifier",
                          "name": "U"
                        },
                        "value": {
                          "type": "Identifier",
                          "name": "d3_time_parseWeekNumberSunday"
                        },
                        "kind": "init"
                      },
                      {
                        "type": "Property",
                        "key": {
                          "type": "Identifier",
                          "name": "w"
                        },
                        "value": {
                          "type": "Identifier",
                          "name": "d3_time_parseWeekdayNumber"
                        },
                        "kind": "init"
                      },
                      {
                        "type": "Property",
                        "key": {
                          "type": "Identifier",
                          "name": "W"
                        },
                        "value": {
                          "type": "Identifier",
                          "name": "d3_time_parseWeekNumberMonday"
                        },
                        "kind": "init"
                      },
                      {
                        "type": "Property",
                        "key": {
                          "type": "Identifier",
                          "name": "x"
                        },
                        "value": {
                          "type": "Identifier",
                          "name": "d3_time_parseLocaleDate"
                        },
                        "kind": "init"
                      },
                      {
                        "type": "Property",
                        "key": {
                          "type": "Identifier",
                          "name": "X"
                        },
                        "value": {
                          "type": "Identifier",
                          "name": "d3_time_parseLocaleTime"
                        },
                        "kind": "init"
                      },
                      {
                        "type": "Property",
                        "key": {
                          "type": "Identifier",
                          "name": "y"
                        },
                        "value": {
                          "type": "Identifier",
                          "name": "d3_time_parseYear"
                        },
                        "kind": "init"
                      },
                      {
                        "type": "Property",
                        "key": {
                          "type": "Identifier",
                          "name": "Y"
                        },
                        "value": {
                          "type": "Identifier",
                          "name": "d3_time_parseFullYear"
                        },
                        "kind": "init"
                      },
                      {
                        "type": "Property",
                        "key": {
                          "type": "Identifier",
                          "name": "Z"
                        },
                        "value": {
                          "type": "Identifier",
                          "name": "d3_time_parseZone"
                        },
                        "kind": "init"
                      },
                      {
                        "type": "Property",
                        "key": {
                          "type": "Literal",
                          "value": "%",
                          "raw": "\"%\""
                        },
                        "value": {
                          "type": "Identifier",
                          "name": "d3_time_parseLiteralPercent"
                        },
                        "kind": "init"
                      }
                    ]
                  }
                }
              ],
              "kind": "var"
            },
            {
              "type": "FunctionDeclaration",
              "id": {
                "type": "Identifier",
                "name": "d3_time_parseWeekdayAbbrev"
              },
              "params": [
                {
                  "type": "Identifier",
                  "name": "date"
                },
                {
                  "type": "Identifier",
                  "name": "string"
                },
                {
                  "type": "Identifier",
                  "name": "i"
                }
              ],
              "defaults": [],
              "body": {
                "type": "BlockStatement",
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
                          "name": "d3_time_dayAbbrevRe"
                        },
                        "property": {
                          "type": "Identifier",
                          "name": "lastIndex"
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0"
                      }
                    }
                  },
                  {
                    "type": "VariableDeclaration",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "name": "n"
                        },
                        "init": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "name": "d3_time_dayAbbrevRe"
                            },
                            "property": {
                              "type": "Identifier",
                              "name": "exec"
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
                                  "name": "string"
                                },
                                "property": {
                                  "type": "Identifier",
                                  "name": "substring"
                                }
                              },
                              "arguments": [
                                {
                                  "type": "Identifier",
                                  "name": "i"
                                }
                              ]
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
                        "type": "Identifier",
                        "name": "n"
                      },
                      "consequent": {
                        "type": "SequenceExpression",
                        "expressions": [
                          {
                            "type": "AssignmentExpression",
                            "operator": "=",
                            "left": {
                              "type": "MemberExpression",
                              "computed": false,
                              "object": {
                                "type": "Identifier",
                                "name": "date"
                              },
                              "property": {
                                "type": "Identifier",
                                "name": "w"
                              }
                            },
                            "right": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "MemberExpression",
                                "computed": false,
                                "object": {
                                  "type": "Identifier",
                                  "name": "d3_time_dayAbbrevLookup"
                                },
                                "property": {
                                  "type": "Identifier",
                                  "name": "get"
                                }
                              },
                              "arguments": [
                                {
                                  "type": "CallExpression",
                                  "callee": {
                                    "type": "MemberExpression",
                                    "computed": false,
                                    "object": {
                                      "type": "MemberExpression",
                                      "computed": true,
                                      "object": {
                                        "type": "Identifier",
                                        "name": "n"
                                      },
                                      "property": {
                                        "type": "Literal",
                                        "value": 0,
                                        "raw": "0"
                                      }
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "name": "toLowerCase"
                                    }
                                  },
                                  "arguments": []
                                }
                              ]
                            }
                          },
                          {
                            "type": "BinaryExpression",
                            "operator": "+",
                            "left": {
                              "type": "Identifier",
                              "name": "i"
                            },
                            "right": {
                              "type": "MemberExpression",
                              "computed": false,
                              "object": {
                                "type": "MemberExpression",
                                "computed": true,
                                "object": {
                                  "type": "Identifier",
                                  "name": "n"
                                },
                                "property": {
                                  "type": "Literal",
                                  "value": 0,
                                  "raw": "0"
                                }
                              },
                              "property": {
                                "type": "Identifier",
                                "name": "length"
                              }
                            }
                          }
                        ]
                      },
                      "alternate": {
                        "type": "UnaryExpression",
                        "operator": "-",
                        "argument": {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1"
                        },
                        "prefix": true
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
                "name": "d3_time_parseWeekday"
              },
              "params": [
                {
                  "type": "Identifier",
                  "name": "date"
                },
                {
                  "type": "Identifier",
                  "name": "string"
                },
                {
                  "type": "Identifier",
                  "name": "i"
                }
              ],
              "defaults": [],
              "body": {
                "type": "BlockStatement",
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
                          "name": "d3_time_dayRe"
                        },
                        "property": {
                          "type": "Identifier",
                          "name": "lastIndex"
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0"
                      }
                    }
                  },
                  {
                    "type": "VariableDeclaration",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "name": "n"
                        },
                        "init": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "name": "d3_time_dayRe"
                            },
                            "property": {
                              "type": "Identifier",
                              "name": "exec"
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
                                  "name": "string"
                                },
                                "property": {
                                  "type": "Identifier",
                                  "name": "substring"
                                }
                              },
                              "arguments": [
                                {
                                  "type": "Identifier",
                                  "name": "i"
                                }
                              ]
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
                        "type": "Identifier",
                        "name": "n"
                      },
                      "consequent": {
                        "type": "SequenceExpression",
                        "expressions": [
                          {
                            "type": "AssignmentExpression",
                            "operator": "=",
                            "left": {
                              "type": "MemberExpression",
                              "computed": false,
                              "object": {
                                "type": "Identifier",
                                "name": "date"
                              },
                              "property": {
                                "type": "Identifier",
                                "name": "w"
                              }
                            },
                            "right": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "MemberExpression",
                                "computed": false,
                                "object": {
                                  "type": "Identifier",
                                  "name": "d3_time_dayLookup"
                                },
                                "property": {
                                  "type": "Identifier",
                                  "name": "get"
                                }
                              },
                              "arguments": [
                                {
                                  "type": "CallExpression",
                                  "callee": {
                                    "type": "MemberExpression",
                                    "computed": false,
                                    "object": {
                                      "type": "MemberExpression",
                                      "computed": true,
                                      "object": {
                                        "type": "Identifier",
                                        "name": "n"
                                      },
                                      "property": {
                                        "type": "Literal",
                                        "value": 0,
                                        "raw": "0"
                                      }
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "name": "toLowerCase"
                                    }
                                  },
                                  "arguments": []
                                }
                              ]
                            }
                          },
                          {
                            "type": "BinaryExpression",
                            "operator": "+",
                            "left": {
                              "type": "Identifier",
                              "name": "i"
                            },
                            "right": {
                              "type": "MemberExpression",
                              "computed": false,
                              "object": {
                                "type": "MemberExpression",
                                "computed": true,
                                "object": {
                                  "type": "Identifier",
                                  "name": "n"
                                },
                                "property": {
                                  "type": "Literal",
                                  "value": 0,
                                  "raw": "0"
                                }
                              },
                              "property": {
                                "type": "Identifier",
                                "name": "length"
                              }
                            }
                          }
                        ]
                      },
                      "alternate": {
                        "type": "UnaryExpression",
                        "operator": "-",
                        "argument": {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1"
                        },
                        "prefix": true
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
                "name": "d3_time_parseMonthAbbrev"
              },
              "params": [
                {
                  "type": "Identifier",
                  "name": "date"
                },
                {
                  "type": "Identifier",
                  "name": "string"
                },
                {
                  "type": "Identifier",
                  "name": "i"
                }
              ],
              "defaults": [],
              "body": {
                "type": "BlockStatement",
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
                          "name": "d3_time_monthAbbrevRe"
                        },
                        "property": {
                          "type": "Identifier",
                          "name": "lastIndex"
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0"
                      }
                    }
                  },
                  {
                    "type": "VariableDeclaration",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "name": "n"
                        },
                        "init": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "name": "d3_time_monthAbbrevRe"
                            },
                            "property": {
                              "type": "Identifier",
                              "name": "exec"
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
                                  "name": "string"
                                },
                                "property": {
                                  "type": "Identifier",
                                  "name": "substring"
                                }
                              },
                              "arguments": [
                                {
                                  "type": "Identifier",
                                  "name": "i"
                                }
                              ]
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
                        "type": "Identifier",
                        "name": "n"
                      },
                      "consequent": {
                        "type": "SequenceExpression",
                        "expressions": [
                          {
                            "type": "AssignmentExpression",
                            "operator": "=",
                            "left": {
                              "type": "MemberExpression",
                              "computed": false,
                              "object": {
                                "type": "Identifier",
                                "name": "date"
                              },
                              "property": {
                                "type": "Identifier",
                                "name": "m"
                              }
                            },
                            "right": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "MemberExpression",
                                "computed": false,
                                "object": {
                                  "type": "Identifier",
                                  "name": "d3_time_monthAbbrevLookup"
                                },
                                "property": {
                                  "type": "Identifier",
                                  "name": "get"
                                }
                              },
                              "arguments": [
                                {
                                  "type": "CallExpression",
                                  "callee": {
                                    "type": "MemberExpression",
                                    "computed": false,
                                    "object": {
                                      "type": "MemberExpression",
                                      "computed": true,
                                      "object": {
                                        "type": "Identifier",
                                        "name": "n"
                                      },
                                      "property": {
                                        "type": "Literal",
                                        "value": 0,
                                        "raw": "0"
                                      }
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "name": "toLowerCase"
                                    }
                                  },
                                  "arguments": []
                                }
                              ]
                            }
                          },
                          {
                            "type": "BinaryExpression",
                            "operator": "+",
                            "left": {
                              "type": "Identifier",
                              "name": "i"
                            },
                            "right": {
                              "type": "MemberExpression",
                              "computed": false,
                              "object": {
                                "type": "MemberExpression",
                                "computed": true,
                                "object": {
                                  "type": "Identifier",
                                  "name": "n"
                                },
                                "property": {
                                  "type": "Literal",
                                  "value": 0,
                                  "raw": "0"
                                }
                              },
                              "property": {
                                "type": "Identifier",
                                "name": "length"
                              }
                            }
                          }
                        ]
                      },
                      "alternate": {
                        "type": "UnaryExpression",
                        "operator": "-",
                        "argument": {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1"
                        },
                        "prefix": true
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
                "name": "d3_time_parseMonth"
              },
              "params": [
                {
                  "type": "Identifier",
                  "name": "date"
                },
                {
                  "type": "Identifier",
                  "name": "string"
                },
                {
                  "type": "Identifier",
                  "name": "i"
                }
              ],
              "defaults": [],
              "body": {
                "type": "BlockStatement",
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
                          "name": "d3_time_monthRe"
                        },
                        "property": {
                          "type": "Identifier",
                          "name": "lastIndex"
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0"
                      }
                    }
                  },
                  {
                    "type": "VariableDeclaration",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "name": "n"
                        },
                        "init": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "name": "d3_time_monthRe"
                            },
                            "property": {
                              "type": "Identifier",
                              "name": "exec"
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
                                  "name": "string"
                                },
                                "property": {
                                  "type": "Identifier",
                                  "name": "substring"
                                }
                              },
                              "arguments": [
                                {
                                  "type": "Identifier",
                                  "name": "i"
                                }
                              ]
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
                        "type": "Identifier",
                        "name": "n"
                      },
                      "consequent": {
                        "type": "SequenceExpression",
                        "expressions": [
                          {
                            "type": "AssignmentExpression",
                            "operator": "=",
                            "left": {
                              "type": "MemberExpression",
                              "computed": false,
                              "object": {
                                "type": "Identifier",
                                "name": "date"
                              },
                              "property": {
                                "type": "Identifier",
                                "name": "m"
                              }
                            },
                            "right": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "MemberExpression",
                                "computed": false,
                                "object": {
                                  "type": "Identifier",
                                  "name": "d3_time_monthLookup"
                                },
                                "property": {
                                  "type": "Identifier",
                                  "name": "get"
                                }
                              },
                              "arguments": [
                                {
                                  "type": "CallExpression",
                                  "callee": {
                                    "type": "MemberExpression",
                                    "computed": false,
                                    "object": {
                                      "type": "MemberExpression",
                                      "computed": true,
                                      "object": {
                                        "type": "Identifier",
                                        "name": "n"
                                      },
                                      "property": {
                                        "type": "Literal",
                                        "value": 0,
                                        "raw": "0"
                                      }
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "name": "toLowerCase"
                                    }
                                  },
                                  "arguments": []
                                }
                              ]
                            }
                          },
                          {
                            "type": "BinaryExpression",
                            "operator": "+",
                            "left": {
                              "type": "Identifier",
                              "name": "i"
                            },
                            "right": {
                              "type": "MemberExpression",
                              "computed": false,
                              "object": {
                                "type": "MemberExpression",
                                "computed": true,
                                "object": {
                                  "type": "Identifier",
                                  "name": "n"
                                },
                                "property": {
                                  "type": "Literal",
                                  "value": 0,
                                  "raw": "0"
                                }
                              },
                              "property": {
                                "type": "Identifier",
                                "name": "length"
                              }
                            }
                          }
                        ]
                      },
                      "alternate": {
                        "type": "UnaryExpression",
                        "operator": "-",
                        "argument": {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1"
                        },
                        "prefix": true
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
                "name": "d3_time_parseLocaleFull"
              },
              "params": [
                {
                  "type": "Identifier",
                  "name": "date"
                },
                {
                  "type": "Identifier",
                  "name": "string"
                },
                {
                  "type": "Identifier",
                  "name": "i"
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
                        "name": "d3_time_parse"
                      },
                      "arguments": [
                        {
                          "type": "Identifier",
                          "name": "date"
                        },
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
                                "name": "d3_time_formats"
                              },
                              "property": {
                                "type": "Identifier",
                                "name": "c"
                              }
                            },
                            "property": {
                              "type": "Identifier",
                              "name": "toString"
                            }
                          },
                          "arguments": []
                        },
                        {
                          "type": "Identifier",
                          "name": "string"
                        },
                        {
                          "type": "Identifier",
                          "name": "i"
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
              "type": "FunctionDeclaration",
              "id": {
                "type": "Identifier",
                "name": "d3_time_parseLocaleDate"
              },
              "params": [
                {
                  "type": "Identifier",
                  "name": "date"
                },
                {
                  "type": "Identifier",
                  "name": "string"
                },
                {
                  "type": "Identifier",
                  "name": "i"
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
                        "name": "d3_time_parse"
                      },
                      "arguments": [
                        {
                          "type": "Identifier",
                          "name": "date"
                        },
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
                                "name": "d3_time_formats"
                              },
                              "property": {
                                "type": "Identifier",
                                "name": "x"
                              }
                            },
                            "property": {
                              "type": "Identifier",
                              "name": "toString"
                            }
                          },
                          "arguments": []
                        },
                        {
                          "type": "Identifier",
                          "name": "string"
                        },
                        {
                          "type": "Identifier",
                          "name": "i"
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
              "type": "FunctionDeclaration",
              "id": {
                "type": "Identifier",
                "name": "d3_time_parseLocaleTime"
              },
              "params": [
                {
                  "type": "Identifier",
                  "name": "date"
                },
                {
                  "type": "Identifier",
                  "name": "string"
                },
                {
                  "type": "Identifier",
                  "name": "i"
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
                        "name": "d3_time_parse"
                      },
                      "arguments": [
                        {
                          "type": "Identifier",
                          "name": "date"
                        },
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
                                "name": "d3_time_formats"
                              },
                              "property": {
                                "type": "Identifier",
                                "name": "X"
                              }
                            },
                            "property": {
                              "type": "Identifier",
                              "name": "toString"
                            }
                          },
                          "arguments": []
                        },
                        {
                          "type": "Identifier",
                          "name": "string"
                        },
                        {
                          "type": "Identifier",
                          "name": "i"
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
              "type": "FunctionDeclaration",
              "id": {
                "type": "Identifier",
                "name": "d3_time_parseAmPm"
              },
              "params": [
                {
                  "type": "Identifier",
                  "name": "date"
                },
                {
                  "type": "Identifier",
                  "name": "string"
                },
                {
                  "type": "Identifier",
                  "name": "i"
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
                          "name": "n"
                        },
                        "init": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "name": "d3_time_periodLookup"
                            },
                            "property": {
                              "type": "Identifier",
                              "name": "get"
                            }
                          },
                          "arguments": [
                            {
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
                                      "type": "Identifier",
                                      "name": "string"
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "name": "substring"
                                    }
                                  },
                                  "arguments": [
                                    {
                                      "type": "Identifier",
                                      "name": "i"
                                    },
                                    {
                                      "type": "AssignmentExpression",
                                      "operator": "+=",
                                      "left": {
                                        "type": "Identifier",
                                        "name": "i"
                                      },
                                      "right": {
                                        "type": "Literal",
                                        "value": 2,
                                        "raw": "2"
                                      }
                                    }
                                  ]
                                },
                                "property": {
                                  "type": "Identifier",
                                  "name": "toLowerCase"
                                }
                              },
                              "arguments": []
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
                        "type": "BinaryExpression",
                        "operator": "==",
                        "left": {
                          "type": "Identifier",
                          "name": "n"
                        },
                        "right": {
                          "type": "Literal",
                          "value": null,
                          "raw": "null"
                        }
                      },
                      "consequent": {
                        "type": "UnaryExpression",
                        "operator": "-",
                        "argument": {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1"
                        },
                        "prefix": true
                      },
                      "alternate": {
                        "type": "SequenceExpression",
                        "expressions": [
                          {
                            "type": "AssignmentExpression",
                            "operator": "=",
                            "left": {
                              "type": "MemberExpression",
                              "computed": false,
                              "object": {
                                "type": "Identifier",
                                "name": "date"
                              },
                              "property": {
                                "type": "Identifier",
                                "name": "p"
                              }
                            },
                            "right": {
                              "type": "Identifier",
                              "name": "n"
                            }
                          },
                          {
                            "type": "Identifier",
                            "name": "i"
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
              "type": "ReturnStatement",
              "argument": {
                "type": "Identifier",
                "name": "d3_time_format"
              }
            }
          ]
        },
        "rest": null,
        "generator": false,
        "expression": false
      },
      {
        "type": "VariableDeclaration",
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "name": "d3_time_formatPads"
            },
            "init": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "key": {
                    "type": "Literal",
                    "value": "-",
                    "raw": "\"-\""
                  },
                  "value": {
                    "type": "Literal",
                    "value": "",
                    "raw": "\"\""
                  },
                  "kind": "init"
                },
                {
                  "type": "Property",
                  "key": {
                    "type": "Literal",
                    "value": "_",
                    "raw": "\"_\""
                  },
                  "value": {
                    "type": "Literal",
                    "value": " ",
                    "raw": "\" \""
                  },
                  "kind": "init"
                },
                {
                  "type": "Property",
                  "key": {
                    "type": "Literal",
                    "value": "0",
                    "raw": "\"0\""
                  },
                  "value": {
                    "type": "Literal",
                    "value": "0",
                    "raw": "\"0\""
                  },
                  "kind": "init"
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
              "name": "d3_time_numberRe"
            },
            "init": {
              "type": "Literal",
              "value": {},
              "raw": "/^\\s*\\d+/"
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
              "name": "d3_time_percentRe"
            },
            "init": {
              "type": "Literal",
              "value": {},
              "raw": "/^%/"
            }
          }
        ]
      },
      {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "name": "d3_time_formatPad"
        },
        "params": [
          {
            "type": "Identifier",
            "name": "value"
          },
          {
            "type": "Identifier",
            "name": "fill"
          },
          {
            "type": "Identifier",
            "name": "width"
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
                    "name": "sign"
                  },
                  "init": {
                    "type": "ConditionalExpression",
                    "test": {
                      "type": "BinaryExpression",
                      "operator": "<",
                      "left": {
                        "type": "Identifier",
                        "name": "value"
                      },
                      "right": {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0"
                      }
                    },
                    "consequent": {
                      "type": "Literal",
                      "value": "-",
                      "raw": "\"-\""
                    },
                    "alternate": {
                      "type": "Literal",
                      "value": "",
                      "raw": "\"\""
                    }
                  }
                },
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "name": "string"
                  },
                  "init": {
                    "type": "BinaryExpression",
                    "operator": "+",
                    "left": {
                      "type": "ConditionalExpression",
                      "test": {
                        "type": "Identifier",
                        "name": "sign"
                      },
                      "consequent": {
                        "type": "UnaryExpression",
                        "operator": "-",
                        "argument": {
                          "type": "Identifier",
                          "name": "value"
                        },
                        "prefix": true
                      },
                      "alternate": {
                        "type": "Identifier",
                        "name": "value"
                      }
                    },
                    "right": {
                      "type": "Literal",
                      "value": "",
                      "raw": "\"\""
                    }
                  }
                },
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "name": "length"
                  },
                  "init": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "name": "string"
                    },
                    "property": {
                      "type": "Identifier",
                      "name": "length"
                    }
                  }
                }
              ],
              "kind": "var"
            },
            {
              "type": "ReturnStatement",
              "argument": {
                "type": "BinaryExpression",
                "operator": "+",
                "left": {
                  "type": "Identifier",
                  "name": "sign"
                },
                "right": {
                  "type": "ConditionalExpression",
                  "test": {
                    "type": "BinaryExpression",
                    "operator": "<",
                    "left": {
                      "type": "Identifier",
                      "name": "length"
                    },
                    "right": {
                      "type": "Identifier",
                      "name": "width"
                    }
                  },
                  "consequent": {
                    "type": "BinaryExpression",
                    "operator": "+",
                    "left": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "NewExpression",
                          "callee": {
                            "type": "Identifier",
                            "name": "Array"
                          },
                          "arguments": [
                            {
                              "type": "BinaryExpression",
                              "operator": "+",
                              "left": {
                                "type": "BinaryExpression",
                                "operator": "-",
                                "left": {
                                  "type": "Identifier",
                                  "name": "width"
                                },
                                "right": {
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
                          ]
                        },
                        "property": {
                          "type": "Identifier",
                          "name": "join"
                        }
                      },
                      "arguments": [
                        {
                          "type": "Identifier",
                          "name": "fill"
                        }
                      ]
                    },
                    "right": {
                      "type": "Identifier",
                      "name": "string"
                    }
                  },
                  "alternate": {
                    "type": "Identifier",
                    "name": "string"
                  }
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
          "name": "d3_time_formatRe"
        },
        "params": [
          {
            "type": "Identifier",
            "name": "names"
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
                  "name": "RegExp"
                },
                "arguments": [
                  {
                    "type": "BinaryExpression",
                    "operator": "+",
                    "left": {
                      "type": "BinaryExpression",
                      "operator": "+",
                      "left": {
                        "type": "Literal",
                        "value": "^(?:",
                        "raw": "\"^(?:\""
                      },
                      "right": {
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
                                "type": "Identifier",
                                "name": "names"
                              },
                              "property": {
                                "type": "Identifier",
                                "name": "map"
                              }
                            },
                            "arguments": [
                              {
                                "type": "MemberExpression",
                                "computed": false,
                                "object": {
                                  "type": "Identifier",
                                  "name": "d3"
                                },
                                "property": {
                                  "type": "Identifier",
                                  "name": "requote"
                                }
                              }
                            ]
                          },
                          "property": {
                            "type": "Identifier",
                            "name": "join"
                          }
                        },
                        "arguments": [
                          {
                            "type": "Literal",
                            "value": "|",
                            "raw": "\"|\""
                          }
                        ]
                      }
                    },
                    "right": {
                      "type": "Literal",
                      "value": ")",
                      "raw": "\")\""
                    }
                  },
                  {
                    "type": "Literal",
                    "value": "i",
                    "raw": "\"i\""
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
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "name": "d3_time_formatLookup"
        },
        "params": [
          {
            "type": "Identifier",
            "name": "names"
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
                    "name": "map"
                  },
                  "init": {
                    "type": "NewExpression",
                    "callee": {
                      "type": "Identifier",
                      "name": "d3_Map"
                    },
                    "arguments": []
                  }
                },
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "name": "i"
                  },
                  "init": {
                    "type": "UnaryExpression",
                    "operator": "-",
                    "argument": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1"
                    },
                    "prefix": true
                  }
                },
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "name": "n"
                  },
                  "init": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "name": "names"
                    },
                    "property": {
                      "type": "Identifier",
                      "name": "length"
                    }
                  }
                }
              ],
              "kind": "var"
            },
            {
              "type": "WhileStatement",
              "test": {
                "type": "BinaryExpression",
                "operator": "<",
                "left": {
                  "type": "UpdateExpression",
                  "operator": "++",
                  "argument": {
                    "type": "Identifier",
                    "name": "i"
                  },
                  "prefix": true
                },
                "right": {
                  "type": "Identifier",
                  "name": "n"
                }
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
                      "name": "map"
                    },
                    "property": {
                      "type": "Identifier",
                      "name": "set"
                    }
                  },
                  "arguments": [
                    {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "MemberExpression",
                          "computed": true,
                          "object": {
                            "type": "Identifier",
                            "name": "names"
                          },
                          "property": {
                            "type": "Identifier",
                            "name": "i"
                          }
                        },
                        "property": {
                          "type": "Identifier",
                          "name": "toLowerCase"
                        }
                      },
                      "arguments": []
                    },
                    {
                      "type": "Identifier",
                      "name": "i"
                    }
                  ]
                }
              }
            },
            {
              "type": "ReturnStatement",
              "argument": {
                "type": "Identifier",
                "name": "map"
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
          "name": "d3_time_parseWeekdayNumber"
        },
        "params": [
          {
            "type": "Identifier",
            "name": "date"
          },
          {
            "type": "Identifier",
            "name": "string"
          },
          {
            "type": "Identifier",
            "name": "i"
          }
        ],
        "defaults": [],
        "body": {
          "type": "BlockStatement",
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
                    "name": "d3_time_numberRe"
                  },
                  "property": {
                    "type": "Identifier",
                    "name": "lastIndex"
                  }
                },
                "right": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0"
                }
              }
            },
            {
              "type": "VariableDeclaration",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "name": "n"
                  },
                  "init": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "name": "d3_time_numberRe"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "exec"
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
                            "name": "string"
                          },
                          "property": {
                            "type": "Identifier",
                            "name": "substring"
                          }
                        },
                        "arguments": [
                          {
                            "type": "Identifier",
                            "name": "i"
                          },
                          {
                            "type": "BinaryExpression",
                            "operator": "+",
                            "left": {
                              "type": "Identifier",
                              "name": "i"
                            },
                            "right": {
                              "type": "Literal",
                              "value": 1,
                              "raw": "1"
                            }
                          }
                        ]
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
                  "type": "Identifier",
                  "name": "n"
                },
                "consequent": {
                  "type": "SequenceExpression",
                  "expressions": [
                    {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "name": "date"
                        },
                        "property": {
                          "type": "Identifier",
                          "name": "w"
                        }
                      },
                      "right": {
                        "type": "UnaryExpression",
                        "operator": "+",
                        "argument": {
                          "type": "MemberExpression",
                          "computed": true,
                          "object": {
                            "type": "Identifier",
                            "name": "n"
                          },
                          "property": {
                            "type": "Literal",
                            "value": 0,
                            "raw": "0"
                          }
                        },
                        "prefix": true
                      }
                    },
                    {
                      "type": "BinaryExpression",
                      "operator": "+",
                      "left": {
                        "type": "Identifier",
                        "name": "i"
                      },
                      "right": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "MemberExpression",
                          "computed": true,
                          "object": {
                            "type": "Identifier",
                            "name": "n"
                          },
                          "property": {
                            "type": "Literal",
                            "value": 0,
                            "raw": "0"
                          }
                        },
                        "property": {
                          "type": "Identifier",
                          "name": "length"
                        }
                      }
                    }
                  ]
                },
                "alternate": {
                  "type": "UnaryExpression",
                  "operator": "-",
                  "argument": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1"
                  },
                  "prefix": true
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
          "name": "d3_time_parseWeekNumberSunday"
        },
        "params": [
          {
            "type": "Identifier",
            "name": "date"
          },
          {
            "type": "Identifier",
            "name": "string"
          },
          {
            "type": "Identifier",
            "name": "i"
          }
        ],
        "defaults": [],
        "body": {
          "type": "BlockStatement",
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
                    "name": "d3_time_numberRe"
                  },
                  "property": {
                    "type": "Identifier",
                    "name": "lastIndex"
                  }
                },
                "right": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0"
                }
              }
            },
            {
              "type": "VariableDeclaration",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "name": "n"
                  },
                  "init": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "name": "d3_time_numberRe"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "exec"
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
                            "name": "string"
                          },
                          "property": {
                            "type": "Identifier",
                            "name": "substring"
                          }
                        },
                        "arguments": [
                          {
                            "type": "Identifier",
                            "name": "i"
                          }
                        ]
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
                  "type": "Identifier",
                  "name": "n"
                },
                "consequent": {
                  "type": "SequenceExpression",
                  "expressions": [
                    {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "name": "date"
                        },
                        "property": {
                          "type": "Identifier",
                          "name": "U"
                        }
                      },
                      "right": {
                        "type": "UnaryExpression",
                        "operator": "+",
                        "argument": {
                          "type": "MemberExpression",
                          "computed": true,
                          "object": {
                            "type": "Identifier",
                            "name": "n"
                          },
                          "property": {
                            "type": "Literal",
                            "value": 0,
                            "raw": "0"
                          }
                        },
                        "prefix": true
                      }
                    },
                    {
                      "type": "BinaryExpression",
                      "operator": "+",
                      "left": {
                        "type": "Identifier",
                        "name": "i"
                      },
                      "right": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "MemberExpression",
                          "computed": true,
                          "object": {
                            "type": "Identifier",
                            "name": "n"
                          },
                          "property": {
                            "type": "Literal",
                            "value": 0,
                            "raw": "0"
                          }
                        },
                        "property": {
                          "type": "Identifier",
                          "name": "length"
                        }
                      }
                    }
                  ]
                },
                "alternate": {
                  "type": "UnaryExpression",
                  "operator": "-",
                  "argument": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1"
                  },
                  "prefix": true
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
          "name": "d3_time_parseWeekNumberMonday"
        },
        "params": [
          {
            "type": "Identifier",
            "name": "date"
          },
          {
            "type": "Identifier",
            "name": "string"
          },
          {
            "type": "Identifier",
            "name": "i"
          }
        ],
        "defaults": [],
        "body": {
          "type": "BlockStatement",
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
                    "name": "d3_time_numberRe"
                  },
                  "property": {
                    "type": "Identifier",
                    "name": "lastIndex"
                  }
                },
                "right": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0"
                }
              }
            },
            {
              "type": "VariableDeclaration",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "name": "n"
                  },
                  "init": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "name": "d3_time_numberRe"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "exec"
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
                            "name": "string"
                          },
                          "property": {
                            "type": "Identifier",
                            "name": "substring"
                          }
                        },
                        "arguments": [
                          {
                            "type": "Identifier",
                            "name": "i"
                          }
                        ]
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
                  "type": "Identifier",
                  "name": "n"
                },
                "consequent": {
                  "type": "SequenceExpression",
                  "expressions": [
                    {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "name": "date"
                        },
                        "property": {
                          "type": "Identifier",
                          "name": "W"
                        }
                      },
                      "right": {
                        "type": "UnaryExpression",
                        "operator": "+",
                        "argument": {
                          "type": "MemberExpression",
                          "computed": true,
                          "object": {
                            "type": "Identifier",
                            "name": "n"
                          },
                          "property": {
                            "type": "Literal",
                            "value": 0,
                            "raw": "0"
                          }
                        },
                        "prefix": true
                      }
                    },
                    {
                      "type": "BinaryExpression",
                      "operator": "+",
                      "left": {
                        "type": "Identifier",
                        "name": "i"
                      },
                      "right": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "MemberExpression",
                          "computed": true,
                          "object": {
                            "type": "Identifier",
                            "name": "n"
                          },
                          "property": {
                            "type": "Literal",
                            "value": 0,
                            "raw": "0"
                          }
                        },
                        "property": {
                          "type": "Identifier",
                          "name": "length"
                        }
                      }
                    }
                  ]
                },
                "alternate": {
                  "type": "UnaryExpression",
                  "operator": "-",
                  "argument": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1"
                  },
                  "prefix": true
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
          "name": "d3_time_parseFullYear"
        },
        "params": [
          {
            "type": "Identifier",
            "name": "date"
          },
          {
            "type": "Identifier",
            "name": "string"
          },
          {
            "type": "Identifier",
            "name": "i"
          }
        ],
        "defaults": [],
        "body": {
          "type": "BlockStatement",
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
                    "name": "d3_time_numberRe"
                  },
                  "property": {
                    "type": "Identifier",
                    "name": "lastIndex"
                  }
                },
                "right": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0"
                }
              }
            },
            {
              "type": "VariableDeclaration",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "name": "n"
                  },
                  "init": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "name": "d3_time_numberRe"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "exec"
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
                            "name": "string"
                          },
                          "property": {
                            "type": "Identifier",
                            "name": "substring"
                          }
                        },
                        "arguments": [
                          {
                            "type": "Identifier",
                            "name": "i"
                          },
                          {
                            "type": "BinaryExpression",
                            "operator": "+",
                            "left": {
                              "type": "Identifier",
                              "name": "i"
                            },
                            "right": {
                              "type": "Literal",
                              "value": 4,
                              "raw": "4"
                            }
                          }
                        ]
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
                  "type": "Identifier",
                  "name": "n"
                },
                "consequent": {
                  "type": "SequenceExpression",
                  "expressions": [
                    {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "name": "date"
                        },
                        "property": {
                          "type": "Identifier",
                          "name": "y"
                        }
                      },
                      "right": {
                        "type": "UnaryExpression",
                        "operator": "+",
                        "argument": {
                          "type": "MemberExpression",
                          "computed": true,
                          "object": {
                            "type": "Identifier",
                            "name": "n"
                          },
                          "property": {
                            "type": "Literal",
                            "value": 0,
                            "raw": "0"
                          }
                        },
                        "prefix": true
                      }
                    },
                    {
                      "type": "BinaryExpression",
                      "operator": "+",
                      "left": {
                        "type": "Identifier",
                        "name": "i"
                      },
                      "right": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "MemberExpression",
                          "computed": true,
                          "object": {
                            "type": "Identifier",
                            "name": "n"
                          },
                          "property": {
                            "type": "Literal",
                            "value": 0,
                            "raw": "0"
                          }
                        },
                        "property": {
                          "type": "Identifier",
                          "name": "length"
                        }
                      }
                    }
                  ]
                },
                "alternate": {
                  "type": "UnaryExpression",
                  "operator": "-",
                  "argument": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1"
                  },
                  "prefix": true
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
          "name": "d3_time_parseYear"
        },
        "params": [
          {
            "type": "Identifier",
            "name": "date"
          },
          {
            "type": "Identifier",
            "name": "string"
          },
          {
            "type": "Identifier",
            "name": "i"
          }
        ],
        "defaults": [],
        "body": {
          "type": "BlockStatement",
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
                    "name": "d3_time_numberRe"
                  },
                  "property": {
                    "type": "Identifier",
                    "name": "lastIndex"
                  }
                },
                "right": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0"
                }
              }
            },
            {
              "type": "VariableDeclaration",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "name": "n"
                  },
                  "init": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "name": "d3_time_numberRe"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "exec"
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
                            "name": "string"
                          },
                          "property": {
                            "type": "Identifier",
                            "name": "substring"
                          }
                        },
                        "arguments": [
                          {
                            "type": "Identifier",
                            "name": "i"
                          },
                          {
                            "type": "BinaryExpression",
                            "operator": "+",
                            "left": {
                              "type": "Identifier",
                              "name": "i"
                            },
                            "right": {
                              "type": "Literal",
                              "value": 2,
                              "raw": "2"
                            }
                          }
                        ]
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
                  "type": "Identifier",
                  "name": "n"
                },
                "consequent": {
                  "type": "SequenceExpression",
                  "expressions": [
                    {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "name": "date"
                        },
                        "property": {
                          "type": "Identifier",
                          "name": "y"
                        }
                      },
                      "right": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "Identifier",
                          "name": "d3_time_expandYear"
                        },
                        "arguments": [
                          {
                            "type": "UnaryExpression",
                            "operator": "+",
                            "argument": {
                              "type": "MemberExpression",
                              "computed": true,
                              "object": {
                                "type": "Identifier",
                                "name": "n"
                              },
                              "property": {
                                "type": "Literal",
                                "value": 0,
                                "raw": "0"
                              }
                            },
                            "prefix": true
                          }
                        ]
                      }
                    },
                    {
                      "type": "BinaryExpression",
                      "operator": "+",
                      "left": {
                        "type": "Identifier",
                        "name": "i"
                      },
                      "right": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "MemberExpression",
                          "computed": true,
                          "object": {
                            "type": "Identifier",
                            "name": "n"
                          },
                          "property": {
                            "type": "Literal",
                            "value": 0,
                            "raw": "0"
                          }
                        },
                        "property": {
                          "type": "Identifier",
                          "name": "length"
                        }
                      }
                    }
                  ]
                },
                "alternate": {
                  "type": "UnaryExpression",
                  "operator": "-",
                  "argument": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1"
                  },
                  "prefix": true
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
          "name": "d3_time_parseZone"
        },
        "params": [
          {
            "type": "Identifier",
            "name": "date"
          },
          {
            "type": "Identifier",
            "name": "string"
          },
          {
            "type": "Identifier",
            "name": "i"
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
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "Literal",
                      "value": {},
                      "raw": "/^[+-]\\d{4}$/"
                    },
                    "property": {
                      "type": "Identifier",
                      "name": "test"
                    }
                  },
                  "arguments": [
                    {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "name": "string"
                      },
                      "right": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "MemberExpression",
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "name": "string"
                          },
                          "property": {
                            "type": "Identifier",
                            "name": "substring"
                          }
                        },
                        "arguments": [
                          {
                            "type": "Identifier",
                            "name": "i"
                          },
                          {
                            "type": "BinaryExpression",
                            "operator": "+",
                            "left": {
                              "type": "Identifier",
                              "name": "i"
                            },
                            "right": {
                              "type": "Literal",
                              "value": 5,
                              "raw": "5"
                            }
                          }
                        ]
                      }
                    }
                  ]
                },
                "consequent": {
                  "type": "SequenceExpression",
                  "expressions": [
                    {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "name": "date"
                        },
                        "property": {
                          "type": "Identifier",
                          "name": "Z"
                        }
                      },
                      "right": {
                        "type": "UnaryExpression",
                        "operator": "-",
                        "argument": {
                          "type": "Identifier",
                          "name": "string"
                        },
                        "prefix": true
                      }
                    },
                    {
                      "type": "BinaryExpression",
                      "operator": "+",
                      "left": {
                        "type": "Identifier",
                        "name": "i"
                      },
                      "right": {
                        "type": "Literal",
                        "value": 5,
                        "raw": "5"
                      }
                    }
                  ]
                },
                "alternate": {
                  "type": "UnaryExpression",
                  "operator": "-",
                  "argument": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1"
                  },
                  "prefix": true
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
          "name": "d3_time_expandYear"
        },
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
                "operator": "+",
                "left": {
                  "type": "Identifier",
                  "name": "d"
                },
                "right": {
                  "type": "ConditionalExpression",
                  "test": {
                    "type": "BinaryExpression",
                    "operator": ">",
                    "left": {
                      "type": "Identifier",
                      "name": "d"
                    },
                    "right": {
                      "type": "Literal",
                      "value": 68,
                      "raw": "68"
                    }
                  },
                  "consequent": {
                    "type": "Literal",
                    "value": 1900,
                    "raw": "1900"
                  },
                  "alternate": {
                    "type": "Literal",
                    "value": 2000,
                    "raw": "2000"
                  }
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
          "name": "d3_time_parseMonthNumber"
        },
        "params": [
          {
            "type": "Identifier",
            "name": "date"
          },
          {
            "type": "Identifier",
            "name": "string"
          },
          {
            "type": "Identifier",
            "name": "i"
          }
        ],
        "defaults": [],
        "body": {
          "type": "BlockStatement",
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
                    "name": "d3_time_numberRe"
                  },
                  "property": {
                    "type": "Identifier",
                    "name": "lastIndex"
                  }
                },
                "right": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0"
                }
              }
            },
            {
              "type": "VariableDeclaration",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "name": "n"
                  },
                  "init": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "name": "d3_time_numberRe"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "exec"
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
                            "name": "string"
                          },
                          "property": {
                            "type": "Identifier",
                            "name": "substring"
                          }
                        },
                        "arguments": [
                          {
                            "type": "Identifier",
                            "name": "i"
                          },
                          {
                            "type": "BinaryExpression",
                            "operator": "+",
                            "left": {
                              "type": "Identifier",
                              "name": "i"
                            },
                            "right": {
                              "type": "Literal",
                              "value": 2,
                              "raw": "2"
                            }
                          }
                        ]
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
                  "type": "Identifier",
                  "name": "n"
                },
                "consequent": {
                  "type": "SequenceExpression",
                  "expressions": [
                    {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "name": "date"
                        },
                        "property": {
                          "type": "Identifier",
                          "name": "m"
                        }
                      },
                      "right": {
                        "type": "BinaryExpression",
                        "operator": "-",
                        "left": {
                          "type": "MemberExpression",
                          "computed": true,
                          "object": {
                            "type": "Identifier",
                            "name": "n"
                          },
                          "property": {
                            "type": "Literal",
                            "value": 0,
                            "raw": "0"
                          }
                        },
                        "right": {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1"
                        }
                      }
                    },
                    {
                      "type": "BinaryExpression",
                      "operator": "+",
                      "left": {
                        "type": "Identifier",
                        "name": "i"
                      },
                      "right": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "MemberExpression",
                          "computed": true,
                          "object": {
                            "type": "Identifier",
                            "name": "n"
                          },
                          "property": {
                            "type": "Literal",
                            "value": 0,
                            "raw": "0"
                          }
                        },
                        "property": {
                          "type": "Identifier",
                          "name": "length"
                        }
                      }
                    }
                  ]
                },
                "alternate": {
                  "type": "UnaryExpression",
                  "operator": "-",
                  "argument": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1"
                  },
                  "prefix": true
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
          "name": "d3_time_parseDay"
        },
        "params": [
          {
            "type": "Identifier",
            "name": "date"
          },
          {
            "type": "Identifier",
            "name": "string"
          },
          {
            "type": "Identifier",
            "name": "i"
          }
        ],
        "defaults": [],
        "body": {
          "type": "BlockStatement",
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
                    "name": "d3_time_numberRe"
                  },
                  "property": {
                    "type": "Identifier",
                    "name": "lastIndex"
                  }
                },
                "right": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0"
                }
              }
            },
            {
              "type": "VariableDeclaration",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "name": "n"
                  },
                  "init": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "name": "d3_time_numberRe"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "exec"
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
                            "name": "string"
                          },
                          "property": {
                            "type": "Identifier",
                            "name": "substring"
                          }
                        },
                        "arguments": [
                          {
                            "type": "Identifier",
                            "name": "i"
                          },
                          {
                            "type": "BinaryExpression",
                            "operator": "+",
                            "left": {
                              "type": "Identifier",
                              "name": "i"
                            },
                            "right": {
                              "type": "Literal",
                              "value": 2,
                              "raw": "2"
                            }
                          }
                        ]
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
                  "type": "Identifier",
                  "name": "n"
                },
                "consequent": {
                  "type": "SequenceExpression",
                  "expressions": [
                    {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "name": "date"
                        },
                        "property": {
                          "type": "Identifier",
                          "name": "d"
                        }
                      },
                      "right": {
                        "type": "UnaryExpression",
                        "operator": "+",
                        "argument": {
                          "type": "MemberExpression",
                          "computed": true,
                          "object": {
                            "type": "Identifier",
                            "name": "n"
                          },
                          "property": {
                            "type": "Literal",
                            "value": 0,
                            "raw": "0"
                          }
                        },
                        "prefix": true
                      }
                    },
                    {
                      "type": "BinaryExpression",
                      "operator": "+",
                      "left": {
                        "type": "Identifier",
                        "name": "i"
                      },
                      "right": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "MemberExpression",
                          "computed": true,
                          "object": {
                            "type": "Identifier",
                            "name": "n"
                          },
                          "property": {
                            "type": "Literal",
                            "value": 0,
                            "raw": "0"
                          }
                        },
                        "property": {
                          "type": "Identifier",
                          "name": "length"
                        }
                      }
                    }
                  ]
                },
                "alternate": {
                  "type": "UnaryExpression",
                  "operator": "-",
                  "argument": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1"
                  },
                  "prefix": true
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
          "name": "d3_time_parseDayOfYear"
        },
        "params": [
          {
            "type": "Identifier",
            "name": "date"
          },
          {
            "type": "Identifier",
            "name": "string"
          },
          {
            "type": "Identifier",
            "name": "i"
          }
        ],
        "defaults": [],
        "body": {
          "type": "BlockStatement",
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
                    "name": "d3_time_numberRe"
                  },
                  "property": {
                    "type": "Identifier",
                    "name": "lastIndex"
                  }
                },
                "right": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0"
                }
              }
            },
            {
              "type": "VariableDeclaration",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "name": "n"
                  },
                  "init": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "name": "d3_time_numberRe"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "exec"
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
                            "name": "string"
                          },
                          "property": {
                            "type": "Identifier",
                            "name": "substring"
                          }
                        },
                        "arguments": [
                          {
                            "type": "Identifier",
                            "name": "i"
                          },
                          {
                            "type": "BinaryExpression",
                            "operator": "+",
                            "left": {
                              "type": "Identifier",
                              "name": "i"
                            },
                            "right": {
                              "type": "Literal",
                              "value": 3,
                              "raw": "3"
                            }
                          }
                        ]
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
                  "type": "Identifier",
                  "name": "n"
                },
                "consequent": {
                  "type": "SequenceExpression",
                  "expressions": [
                    {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "name": "date"
                        },
                        "property": {
                          "type": "Identifier",
                          "name": "j"
                        }
                      },
                      "right": {
                        "type": "UnaryExpression",
                        "operator": "+",
                        "argument": {
                          "type": "MemberExpression",
                          "computed": true,
                          "object": {
                            "type": "Identifier",
                            "name": "n"
                          },
                          "property": {
                            "type": "Literal",
                            "value": 0,
                            "raw": "0"
                          }
                        },
                        "prefix": true
                      }
                    },
                    {
                      "type": "BinaryExpression",
                      "operator": "+",
                      "left": {
                        "type": "Identifier",
                        "name": "i"
                      },
                      "right": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "MemberExpression",
                          "computed": true,
                          "object": {
                            "type": "Identifier",
                            "name": "n"
                          },
                          "property": {
                            "type": "Literal",
                            "value": 0,
                            "raw": "0"
                          }
                        },
                        "property": {
                          "type": "Identifier",
                          "name": "length"
                        }
                      }
                    }
                  ]
                },
                "alternate": {
                  "type": "UnaryExpression",
                  "operator": "-",
                  "argument": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1"
                  },
                  "prefix": true
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
          "name": "d3_time_parseHour24"
        },
        "params": [
          {
            "type": "Identifier",
            "name": "date"
          },
          {
            "type": "Identifier",
            "name": "string"
          },
          {
            "type": "Identifier",
            "name": "i"
          }
        ],
        "defaults": [],
        "body": {
          "type": "BlockStatement",
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
                    "name": "d3_time_numberRe"
                  },
                  "property": {
                    "type": "Identifier",
                    "name": "lastIndex"
                  }
                },
                "right": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0"
                }
              }
            },
            {
              "type": "VariableDeclaration",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "name": "n"
                  },
                  "init": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "name": "d3_time_numberRe"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "exec"
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
                            "name": "string"
                          },
                          "property": {
                            "type": "Identifier",
                            "name": "substring"
                          }
                        },
                        "arguments": [
                          {
                            "type": "Identifier",
                            "name": "i"
                          },
                          {
                            "type": "BinaryExpression",
                            "operator": "+",
                            "left": {
                              "type": "Identifier",
                              "name": "i"
                            },
                            "right": {
                              "type": "Literal",
                              "value": 2,
                              "raw": "2"
                            }
                          }
                        ]
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
                  "type": "Identifier",
                  "name": "n"
                },
                "consequent": {
                  "type": "SequenceExpression",
                  "expressions": [
                    {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "name": "date"
                        },
                        "property": {
                          "type": "Identifier",
                          "name": "H"
                        }
                      },
                      "right": {
                        "type": "UnaryExpression",
                        "operator": "+",
                        "argument": {
                          "type": "MemberExpression",
                          "computed": true,
                          "object": {
                            "type": "Identifier",
                            "name": "n"
                          },
                          "property": {
                            "type": "Literal",
                            "value": 0,
                            "raw": "0"
                          }
                        },
                        "prefix": true
                      }
                    },
                    {
                      "type": "BinaryExpression",
                      "operator": "+",
                      "left": {
                        "type": "Identifier",
                        "name": "i"
                      },
                      "right": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "MemberExpression",
                          "computed": true,
                          "object": {
                            "type": "Identifier",
                            "name": "n"
                          },
                          "property": {
                            "type": "Literal",
                            "value": 0,
                            "raw": "0"
                          }
                        },
                        "property": {
                          "type": "Identifier",
                          "name": "length"
                        }
                      }
                    }
                  ]
                },
                "alternate": {
                  "type": "UnaryExpression",
                  "operator": "-",
                  "argument": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1"
                  },
                  "prefix": true
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
          "name": "d3_time_parseMinutes"
        },
        "params": [
          {
            "type": "Identifier",
            "name": "date"
          },
          {
            "type": "Identifier",
            "name": "string"
          },
          {
            "type": "Identifier",
            "name": "i"
          }
        ],
        "defaults": [],
        "body": {
          "type": "BlockStatement",
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
                    "name": "d3_time_numberRe"
                  },
                  "property": {
                    "type": "Identifier",
                    "name": "lastIndex"
                  }
                },
                "right": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0"
                }
              }
            },
            {
              "type": "VariableDeclaration",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "name": "n"
                  },
                  "init": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "name": "d3_time_numberRe"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "exec"
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
                            "name": "string"
                          },
                          "property": {
                            "type": "Identifier",
                            "name": "substring"
                          }
                        },
                        "arguments": [
                          {
                            "type": "Identifier",
                            "name": "i"
                          },
                          {
                            "type": "BinaryExpression",
                            "operator": "+",
                            "left": {
                              "type": "Identifier",
                              "name": "i"
                            },
                            "right": {
                              "type": "Literal",
                              "value": 2,
                              "raw": "2"
                            }
                          }
                        ]
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
                  "type": "Identifier",
                  "name": "n"
                },
                "consequent": {
                  "type": "SequenceExpression",
                  "expressions": [
                    {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "name": "date"
                        },
                        "property": {
                          "type": "Identifier",
                          "name": "M"
                        }
                      },
                      "right": {
                        "type": "UnaryExpression",
                        "operator": "+",
                        "argument": {
                          "type": "MemberExpression",
                          "computed": true,
                          "object": {
                            "type": "Identifier",
                            "name": "n"
                          },
                          "property": {
                            "type": "Literal",
                            "value": 0,
                            "raw": "0"
                          }
                        },
                        "prefix": true
                      }
                    },
                    {
                      "type": "BinaryExpression",
                      "operator": "+",
                      "left": {
                        "type": "Identifier",
                        "name": "i"
                      },
                      "right": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "MemberExpression",
                          "computed": true,
                          "object": {
                            "type": "Identifier",
                            "name": "n"
                          },
                          "property": {
                            "type": "Literal",
                            "value": 0,
                            "raw": "0"
                          }
                        },
                        "property": {
                          "type": "Identifier",
                          "name": "length"
                        }
                      }
                    }
                  ]
                },
                "alternate": {
                  "type": "UnaryExpression",
                  "operator": "-",
                  "argument": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1"
                  },
                  "prefix": true
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
          "name": "d3_time_parseSeconds"
        },
        "params": [
          {
            "type": "Identifier",
            "name": "date"
          },
          {
            "type": "Identifier",
            "name": "string"
          },
          {
            "type": "Identifier",
            "name": "i"
          }
        ],
        "defaults": [],
        "body": {
          "type": "BlockStatement",
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
                    "name": "d3_time_numberRe"
                  },
                  "property": {
                    "type": "Identifier",
                    "name": "lastIndex"
                  }
                },
                "right": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0"
                }
              }
            },
            {
              "type": "VariableDeclaration",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "name": "n"
                  },
                  "init": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "name": "d3_time_numberRe"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "exec"
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
                            "name": "string"
                          },
                          "property": {
                            "type": "Identifier",
                            "name": "substring"
                          }
                        },
                        "arguments": [
                          {
                            "type": "Identifier",
                            "name": "i"
                          },
                          {
                            "type": "BinaryExpression",
                            "operator": "+",
                            "left": {
                              "type": "Identifier",
                              "name": "i"
                            },
                            "right": {
                              "type": "Literal",
                              "value": 2,
                              "raw": "2"
                            }
                          }
                        ]
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
                  "type": "Identifier",
                  "name": "n"
                },
                "consequent": {
                  "type": "SequenceExpression",
                  "expressions": [
                    {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "name": "date"
                        },
                        "property": {
                          "type": "Identifier",
                          "name": "S"
                        }
                      },
                      "right": {
                        "type": "UnaryExpression",
                        "operator": "+",
                        "argument": {
                          "type": "MemberExpression",
                          "computed": true,
                          "object": {
                            "type": "Identifier",
                            "name": "n"
                          },
                          "property": {
                            "type": "Literal",
                            "value": 0,
                            "raw": "0"
                          }
                        },
                        "prefix": true
                      }
                    },
                    {
                      "type": "BinaryExpression",
                      "operator": "+",
                      "left": {
                        "type": "Identifier",
                        "name": "i"
                      },
                      "right": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "MemberExpression",
                          "computed": true,
                          "object": {
                            "type": "Identifier",
                            "name": "n"
                          },
                          "property": {
                            "type": "Literal",
                            "value": 0,
                            "raw": "0"
                          }
                        },
                        "property": {
                          "type": "Identifier",
                          "name": "length"
                        }
                      }
                    }
                  ]
                },
                "alternate": {
                  "type": "UnaryExpression",
                  "operator": "-",
                  "argument": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1"
                  },
                  "prefix": true
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
          "name": "d3_time_parseMilliseconds"
        },
        "params": [
          {
            "type": "Identifier",
            "name": "date"
          },
          {
            "type": "Identifier",
            "name": "string"
          },
          {
            "type": "Identifier",
            "name": "i"
          }
        ],
        "defaults": [],
        "body": {
          "type": "BlockStatement",
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
                    "name": "d3_time_numberRe"
                  },
                  "property": {
                    "type": "Identifier",
                    "name": "lastIndex"
                  }
                },
                "right": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0"
                }
              }
            },
            {
              "type": "VariableDeclaration",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "name": "n"
                  },
                  "init": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "name": "d3_time_numberRe"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "exec"
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
                            "name": "string"
                          },
                          "property": {
                            "type": "Identifier",
                            "name": "substring"
                          }
                        },
                        "arguments": [
                          {
                            "type": "Identifier",
                            "name": "i"
                          },
                          {
                            "type": "BinaryExpression",
                            "operator": "+",
                            "left": {
                              "type": "Identifier",
                              "name": "i"
                            },
                            "right": {
                              "type": "Literal",
                              "value": 3,
                              "raw": "3"
                            }
                          }
                        ]
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
                  "type": "Identifier",
                  "name": "n"
                },
                "consequent": {
                  "type": "SequenceExpression",
                  "expressions": [
                    {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "name": "date"
                        },
                        "property": {
                          "type": "Identifier",
                          "name": "L"
                        }
                      },
                      "right": {
                        "type": "UnaryExpression",
                        "operator": "+",
                        "argument": {
                          "type": "MemberExpression",
                          "computed": true,
                          "object": {
                            "type": "Identifier",
                            "name": "n"
                          },
                          "property": {
                            "type": "Literal",
                            "value": 0,
                            "raw": "0"
                          }
                        },
                        "prefix": true
                      }
                    },
                    {
                      "type": "BinaryExpression",
                      "operator": "+",
                      "left": {
                        "type": "Identifier",
                        "name": "i"
                      },
                      "right": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "MemberExpression",
                          "computed": true,
                          "object": {
                            "type": "Identifier",
                            "name": "n"
                          },
                          "property": {
                            "type": "Literal",
                            "value": 0,
                            "raw": "0"
                          }
                        },
                        "property": {
                          "type": "Identifier",
                          "name": "length"
                        }
                      }
                    }
                  ]
                },
                "alternate": {
                  "type": "UnaryExpression",
                  "operator": "-",
                  "argument": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1"
                  },
                  "prefix": true
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
          "name": "d3_time_zone"
        },
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
              "type": "VariableDeclaration",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "name": "z"
                  },
                  "init": {
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
                        "name": "getTimezoneOffset"
                      }
                    },
                    "arguments": []
                  }
                },
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "name": "zs"
                  },
                  "init": {
                    "type": "ConditionalExpression",
                    "test": {
                      "type": "BinaryExpression",
                      "operator": ">",
                      "left": {
                        "type": "Identifier",
                        "name": "z"
                      },
                      "right": {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0"
                      }
                    },
                    "consequent": {
                      "type": "Literal",
                      "value": "-",
                      "raw": "\"-\""
                    },
                    "alternate": {
                      "type": "Literal",
                      "value": "+",
                      "raw": "\"+\""
                    }
                  }
                },
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "name": "zh"
                  },
                  "init": {
                    "type": "UnaryExpression",
                    "operator": "~",
                    "argument": {
                      "type": "UnaryExpression",
                      "operator": "~",
                      "argument": {
                        "type": "BinaryExpression",
                        "operator": "/",
                        "left": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "Identifier",
                            "name": "abs"
                          },
                          "arguments": [
                            {
                              "type": "Identifier",
                              "name": "z"
                            }
                          ]
                        },
                        "right": {
                          "type": "Literal",
                          "value": 60,
                          "raw": "60"
                        }
                      },
                      "prefix": true
                    },
                    "prefix": true
                  }
                },
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "name": "zm"
                  },
                  "init": {
                    "type": "BinaryExpression",
                    "operator": "%",
                    "left": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "name": "abs"
                      },
                      "arguments": [
                        {
                          "type": "Identifier",
                          "name": "z"
                        }
                      ]
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
                "type": "BinaryExpression",
                "operator": "+",
                "left": {
                  "type": "BinaryExpression",
                  "operator": "+",
                  "left": {
                    "type": "Identifier",
                    "name": "zs"
                  },
                  "right": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "name": "d3_time_formatPad"
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "name": "zh"
                      },
                      {
                        "type": "Literal",
                        "value": "0",
                        "raw": "\"0\""
                      },
                      {
                        "type": "Literal",
                        "value": 2,
                        "raw": "2"
                      }
                    ]
                  }
                },
                "right": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "name": "d3_time_formatPad"
                  },
                  "arguments": [
                    {
                      "type": "Identifier",
                      "name": "zm"
                    },
                    {
                      "type": "Literal",
                      "value": "0",
                      "raw": "\"0\""
                    },
                    {
                      "type": "Literal",
                      "value": 2,
                      "raw": "2"
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
          "name": "d3_time_parseLiteralPercent"
        },
        "params": [
          {
            "type": "Identifier",
            "name": "date"
          },
          {
            "type": "Identifier",
            "name": "string"
          },
          {
            "type": "Identifier",
            "name": "i"
          }
        ],
        "defaults": [],
        "body": {
          "type": "BlockStatement",
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
                    "name": "d3_time_percentRe"
                  },
                  "property": {
                    "type": "Identifier",
                    "name": "lastIndex"
                  }
                },
                "right": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0"
                }
              }
            },
            {
              "type": "VariableDeclaration",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "name": "n"
                  },
                  "init": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "name": "d3_time_percentRe"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "exec"
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
                            "name": "string"
                          },
                          "property": {
                            "type": "Identifier",
                            "name": "substring"
                          }
                        },
                        "arguments": [
                          {
                            "type": "Identifier",
                            "name": "i"
                          },
                          {
                            "type": "BinaryExpression",
                            "operator": "+",
                            "left": {
                              "type": "Identifier",
                              "name": "i"
                            },
                            "right": {
                              "type": "Literal",
                              "value": 1,
                              "raw": "1"
                            }
                          }
                        ]
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
                  "type": "Identifier",
                  "name": "n"
                },
                "consequent": {
                  "type": "BinaryExpression",
                  "operator": "+",
                  "left": {
                    "type": "Identifier",
                    "name": "i"
                  },
                  "right": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "MemberExpression",
                      "computed": true,
                      "object": {
                        "type": "Identifier",
                        "name": "n"
                      },
                      "property": {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0"
                      }
                    },
                    "property": {
                      "type": "Identifier",
                      "name": "length"
                    }
                  }
                },
                "alternate": {
                  "type": "UnaryExpression",
                  "operator": "-",
                  "argument": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1"
                  },
                  "prefix": true
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
          "name": "d3_time_formatMulti"
        },
        "params": [
          {
            "type": "Identifier",
            "name": "formats"
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
                    "name": "n"
                  },
                  "init": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "name": "formats"
                    },
                    "property": {
                      "type": "Identifier",
                      "name": "length"
                    }
                  }
                },
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "name": "i"
                  },
                  "init": {
                    "type": "UnaryExpression",
                    "operator": "-",
                    "argument": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1"
                    },
                    "prefix": true
                  }
                }
              ],
              "kind": "var"
            },
            {
              "type": "WhileStatement",
              "test": {
                "type": "BinaryExpression",
                "operator": "<",
                "left": {
                  "type": "UpdateExpression",
                  "operator": "++",
                  "argument": {
                    "type": "Identifier",
                    "name": "i"
                  },
                  "prefix": true
                },
                "right": {
                  "type": "Identifier",
                  "name": "n"
                }
              },
              "body": {
                "type": "ExpressionStatement",
                "expression": {
                  "type": "AssignmentExpression",
                  "operator": "=",
                  "left": {
                    "type": "MemberExpression",
                    "computed": true,
                    "object": {
                      "type": "MemberExpression",
                      "computed": true,
                      "object": {
                        "type": "Identifier",
                        "name": "formats"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "i"
                      }
                    },
                    "property": {
                      "type": "Literal",
                      "value": 0,
                      "raw": "0"
                    }
                  },
                  "right": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "ThisExpression"
                    },
                    "arguments": [
                      {
                        "type": "MemberExpression",
                        "computed": true,
                        "object": {
                          "type": "MemberExpression",
                          "computed": true,
                          "object": {
                            "type": "Identifier",
                            "name": "formats"
                          },
                          "property": {
                            "type": "Identifier",
                            "name": "i"
                          }
                        },
                        "property": {
                          "type": "Literal",
                          "value": 0,
                          "raw": "0"
                        }
                      }
                    ]
                  }
                }
              }
            },
            {
              "type": "ReturnStatement",
              "argument": {
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
                            "name": "i"
                          },
                          "init": {
                            "type": "Literal",
                            "value": 0,
                            "raw": "0"
                          }
                        },
                        {
                          "type": "VariableDeclarator",
                          "id": {
                            "type": "Identifier",
                            "name": "f"
                          },
                          "init": {
                            "type": "MemberExpression",
                            "computed": true,
                            "object": {
                              "type": "Identifier",
                              "name": "formats"
                            },
                            "property": {
                              "type": "Identifier",
                              "name": "i"
                            }
                          }
                        }
                      ],
                      "kind": "var"
                    },
                    {
                      "type": "WhileStatement",
                      "test": {
                        "type": "UnaryExpression",
                        "operator": "!",
                        "argument": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "computed": true,
                            "object": {
                              "type": "Identifier",
                              "name": "f"
                            },
                            "property": {
                              "type": "Literal",
                              "value": 1,
                              "raw": "1"
                            }
                          },
                          "arguments": [
                            {
                              "type": "Identifier",
                              "name": "date"
                            }
                          ]
                        },
                        "prefix": true
                      },
                      "body": {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "AssignmentExpression",
                          "operator": "=",
                          "left": {
                            "type": "Identifier",
                            "name": "f"
                          },
                          "right": {
                            "type": "MemberExpression",
                            "computed": true,
                            "object": {
                              "type": "Identifier",
                              "name": "formats"
                            },
                            "property": {
                              "type": "UpdateExpression",
                              "operator": "++",
                              "argument": {
                                "type": "Identifier",
                                "name": "i"
                              },
                              "prefix": true
                            }
                          }
                        }
                      }
                    },
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "MemberExpression",
                          "computed": true,
                          "object": {
                            "type": "Identifier",
                            "name": "f"
                          },
                          "property": {
                            "type": "Literal",
                            "value": 0,
                            "raw": "0"
                          }
                        },
                        "arguments": [
                          {
                            "type": "Identifier",
                            "name": "date"
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
          ]
        },
        "rest": null,
        "generator": false,
        "expression": false
      }
    ]
  }
}