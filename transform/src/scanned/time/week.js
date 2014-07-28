{
  "filepath": "/time/week.js",
  "shared": [],
  "dependencies": [
    "d3_time",
    "d3_time_interval"
  ],
  "helpers": [],
  "exports": [],
  "ast": {
    "type": "Program",
    "body": [
      {
        "type": "ExpressionStatement",
        "expression": {
          "type": "CallExpression",
          "callee": {
            "type": "MemberExpression",
            "computed": false,
            "object": {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "Literal",
                  "value": "sunday",
                  "raw": "\"sunday\""
                },
                {
                  "type": "Literal",
                  "value": "monday",
                  "raw": "\"monday\""
                },
                {
                  "type": "Literal",
                  "value": "tuesday",
                  "raw": "\"tuesday\""
                },
                {
                  "type": "Literal",
                  "value": "wednesday",
                  "raw": "\"wednesday\""
                },
                {
                  "type": "Literal",
                  "value": "thursday",
                  "raw": "\"thursday\""
                },
                {
                  "type": "Literal",
                  "value": "friday",
                  "raw": "\"friday\""
                },
                {
                  "type": "Literal",
                  "value": "saturday",
                  "raw": "\"saturday\""
                }
              ]
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
                  "name": "day"
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
                        "type": "Identifier",
                        "name": "i"
                      },
                      "right": {
                        "type": "BinaryExpression",
                        "operator": "-",
                        "left": {
                          "type": "Literal",
                          "value": 7,
                          "raw": "7"
                        },
                        "right": {
                          "type": "Identifier",
                          "name": "i"
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
                          "name": "interval"
                        },
                        "init": {
                          "type": "AssignmentExpression",
                          "operator": "=",
                          "left": {
                            "type": "MemberExpression",
                            "computed": true,
                            "object": {
                              "type": "Identifier",
                              "name": "d3_time"
                            },
                            "property": {
                              "type": "Identifier",
                              "name": "day"
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
                                      "type": "ExpressionStatement",
                                      "expression": {
                                        "type": "CallExpression",
                                        "callee": {
                                          "type": "MemberExpression",
                                          "computed": false,
                                          "object": {
                                            "type": "AssignmentExpression",
                                            "operator": "=",
                                            "left": {
                                              "type": "Identifier",
                                              "name": "date"
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
                                                  "name": "day"
                                                }
                                              },
                                              "arguments": [
                                                {
                                                  "type": "Identifier",
                                                  "name": "date"
                                                }
                                              ]
                                            }
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "name": "setDate"
                                          }
                                        },
                                        "arguments": [
                                          {
                                            "type": "BinaryExpression",
                                            "operator": "-",
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
                                                  "name": "getDate"
                                                }
                                              },
                                              "arguments": []
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
                                                  "type": "Identifier",
                                                  "name": "i"
                                                }
                                              },
                                              "right": {
                                                "type": "Literal",
                                                "value": 7,
                                                "raw": "7"
                                              }
                                            }
                                          }
                                        ]
                                      }
                                    },
                                    {
                                      "type": "ReturnStatement",
                                      "argument": {
                                        "type": "Identifier",
                                        "name": "date"
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
                                            "name": "setDate"
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
                                                  "name": "getDate"
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
                                                "value": 7,
                                                "raw": "7"
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
                                      "type": "VariableDeclaration",
                                      "declarations": [
                                        {
                                          "type": "VariableDeclarator",
                                          "id": {
                                            "type": "Identifier",
                                            "name": "day"
                                          },
                                          "init": {
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
                                                    "name": "d3_time"
                                                  },
                                                  "property": {
                                                    "type": "Identifier",
                                                    "name": "year"
                                                  }
                                                },
                                                "arguments": [
                                                  {
                                                    "type": "Identifier",
                                                    "name": "date"
                                                  }
                                                ]
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "name": "getDay"
                                              }
                                            },
                                            "arguments": []
                                          }
                                        }
                                      ],
                                      "kind": "var"
                                    },
                                    {
                                      "type": "ReturnStatement",
                                      "argument": {
                                        "type": "BinaryExpression",
                                        "operator": "-",
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
                                                "type": "BinaryExpression",
                                                "operator": "+",
                                                "left": {
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
                                                      "name": "date"
                                                    }
                                                  ]
                                                },
                                                "right": {
                                                  "type": "BinaryExpression",
                                                  "operator": "%",
                                                  "left": {
                                                    "type": "BinaryExpression",
                                                    "operator": "+",
                                                    "left": {
                                                      "type": "Identifier",
                                                      "name": "day"
                                                    },
                                                    "right": {
                                                      "type": "Identifier",
                                                      "name": "i"
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
                                                "type": "Literal",
                                                "value": 7,
                                                "raw": "7"
                                              }
                                            }
                                          ]
                                        },
                                        "right": {
                                          "type": "BinaryExpression",
                                          "operator": "!==",
                                          "left": {
                                            "type": "Identifier",
                                            "name": "day"
                                          },
                                          "right": {
                                            "type": "Identifier",
                                            "name": "i"
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
                          }
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
                        "computed": true,
                        "object": {
                          "type": "Identifier",
                          "name": "d3_time"
                        },
                        "property": {
                          "type": "BinaryExpression",
                          "operator": "+",
                          "left": {
                            "type": "Identifier",
                            "name": "day"
                          },
                          "right": {
                            "type": "Literal",
                            "value": "s",
                            "raw": "\"s\""
                          }
                        }
                      },
                      "right": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "name": "interval"
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
                          "computed": true,
                          "object": {
                            "type": "Identifier",
                            "name": "d3_time"
                          },
                          "property": {
                            "type": "BinaryExpression",
                            "operator": "+",
                            "left": {
                              "type": "Identifier",
                              "name": "day"
                            },
                            "right": {
                              "type": "Literal",
                              "value": "s",
                              "raw": "\"s\""
                            }
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
                            "type": "Identifier",
                            "name": "interval"
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
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "computed": true,
                        "object": {
                          "type": "Identifier",
                          "name": "d3_time"
                        },
                        "property": {
                          "type": "BinaryExpression",
                          "operator": "+",
                          "left": {
                            "type": "Identifier",
                            "name": "day"
                          },
                          "right": {
                            "type": "Literal",
                            "value": "OfYear",
                            "raw": "\"OfYear\""
                          }
                        }
                      },
                      "right": {
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
                                    "name": "day"
                                  },
                                  "init": {
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
                                            "name": "d3_time"
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "name": "year"
                                          }
                                        },
                                        "arguments": [
                                          {
                                            "type": "Identifier",
                                            "name": "date"
                                          }
                                        ]
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "name": "getDay"
                                      }
                                    },
                                    "arguments": []
                                  }
                                }
                              ],
                              "kind": "var"
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
                                      "type": "BinaryExpression",
                                      "operator": "+",
                                      "left": {
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
                                            "name": "date"
                                          }
                                        ]
                                      },
                                      "right": {
                                        "type": "BinaryExpression",
                                        "operator": "%",
                                        "left": {
                                          "type": "BinaryExpression",
                                          "operator": "+",
                                          "left": {
                                            "type": "Identifier",
                                            "name": "day"
                                          },
                                          "right": {
                                            "type": "Identifier",
                                            "name": "i"
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
                                      "type": "Literal",
                                      "value": 7,
                                      "raw": "7"
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
              "name": "week"
            }
          },
          "right": {
            "type": "MemberExpression",
            "computed": false,
            "object": {
              "type": "Identifier",
              "name": "d3_time"
            },
            "property": {
              "type": "Identifier",
              "name": "sunday"
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
              "type": "Identifier",
              "name": "d3_time"
            },
            "property": {
              "type": "Identifier",
              "name": "weeks"
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
                "name": "sunday"
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
                "name": "weeks"
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
                  "name": "sunday"
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
              "name": "weekOfYear"
            }
          },
          "right": {
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
          }
        }
      }
    ]
  },
  "src": "[\n    'sunday',\n    'monday',\n    'tuesday',\n    'wednesday',\n    'thursday',\n    'friday',\n    'saturday'\n].forEach(function (day, i) {\n    i = 7 - i;\n    var interval = d3_time[day] = d3_time_interval(function (date) {\n            (date = d3_time.day(date)).setDate(date.getDate() - (date.getDay() + i) % 7);\n            return date;\n        }, function (date, offset) {\n            date.setDate(date.getDate() + Math.floor(offset) * 7);\n        }, function (date) {\n            var day = d3_time.year(date).getDay();\n            return Math.floor((d3_time.dayOfYear(date) + (day + i) % 7) / 7) - (day !== i);\n        });\n    d3_time[day + 's'] = interval.range;\n    d3_time[day + 's'].utc = interval.utc.range;\n    d3_time[day + 'OfYear'] = function (date) {\n        var day = d3_time.year(date).getDay();\n        return Math.floor((d3_time.dayOfYear(date) + (day + i) % 7) / 7);\n    };\n});\nd3_time.week = d3_time.sunday;\nd3_time.weeks = d3_time.sunday.range;\nd3_time.weeks.utc = d3_time.sunday.utc.range;\nd3_time.weekOfYear = d3_time.sundayOfYear;"
}