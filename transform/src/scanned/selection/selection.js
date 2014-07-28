{
  "filepath": "/selection/selection.js",
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
    "d3_subclass",
    "d3_documentElement",
    "d3_vendorSymbol",
    "d3_document"
  ],
  "helpers": [
    "d3_selection",
    "d3_select",
    "d3_selectAll",
    "d3_selectMatcher",
    "d3_selectMatches",
    "d3_selectionPrototype",
    "d3_selectionRoot"
  ],
  "exports": [
    "d3.selection",
    "d3.selection.prototype",
    "d3.select",
    "d3.selectAll"
  ],
  "ast": {
    "type": "Program",
    "body": [
      {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "name": "d3_selection"
        },
        "params": [
          {
            "type": "Identifier",
            "name": "groups"
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
                  "type": "Identifier",
                  "name": "d3_subclass"
                },
                "arguments": [
                  {
                    "type": "Identifier",
                    "name": "groups"
                  },
                  {
                    "type": "Identifier",
                    "name": "d3_selectionPrototype"
                  }
                ]
              }
            },
            {
              "type": "ReturnStatement",
              "argument": {
                "type": "Identifier",
                "name": "groups"
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
              "name": "d3_select"
            },
            "init": {
              "type": "FunctionExpression",
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "name": "s"
                },
                {
                  "type": "Identifier",
                  "name": "n"
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
                          "name": "n"
                        },
                        "property": {
                          "type": "Identifier",
                          "name": "querySelector"
                        }
                      },
                      "arguments": [
                        {
                          "type": "Identifier",
                          "name": "s"
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
      {
        "type": "VariableDeclaration",
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "name": "d3_selectAll"
            },
            "init": {
              "type": "FunctionExpression",
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "name": "s"
                },
                {
                  "type": "Identifier",
                  "name": "n"
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
                          "name": "n"
                        },
                        "property": {
                          "type": "Identifier",
                          "name": "querySelectorAll"
                        }
                      },
                      "arguments": [
                        {
                          "type": "Identifier",
                          "name": "s"
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
      {
        "type": "ExpressionStatement",
        "expression": {
          "type": "AssignmentExpression",
          "left": {
            "type": "MemberExpression",
            "computed": false,
            "object": {
              "type": "Identifier",
              "name": "d3_documentElement"
            },
            "property": {
              "type": "Identifier",
              "name": "matches"
            }
          },
          "operator": "=",
          "right": {
            "type": "MemberExpression",
            "computed": true,
            "object": {
              "type": "Identifier",
              "name": "d3_documentElement"
            },
            "property": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "name": "d3_vendorSymbol"
              },
              "arguments": [
                {
                  "type": "Identifier",
                  "name": "d3_documentElement"
                },
                {
                  "type": "Literal",
                  "value": "matchesSelector",
                  "raw": "\"matchesSelector\""
                }
              ]
            }
          }
        }
      },
      {
        "type": "VariableDeclaration",
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "name": "d3_selectMatcher"
            },
            "init": {
              "type": "LogicalExpression",
              "operator": "||",
              "left": {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "name": "d3_documentElement"
                },
                "property": {
                  "type": "Identifier",
                  "name": "matches"
                }
              },
              "right": {
                "type": "MemberExpression",
                "computed": true,
                "object": {
                  "type": "Identifier",
                  "name": "d3_documentElement"
                },
                "property": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "name": "d3_vendorSymbol"
                  },
                  "arguments": [
                    {
                      "type": "Identifier",
                      "name": "d3_documentElement"
                    },
                    {
                      "type": "Literal",
                      "value": "matchesSelector",
                      "raw": "\"matchesSelector\""
                    }
                  ]
                }
              }
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
              "name": "d3_selectMatches"
            },
            "init": {
              "type": "FunctionExpression",
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "name": "n"
                },
                {
                  "type": "Identifier",
                  "name": "s"
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
                          "name": "d3_selectMatcher"
                        },
                        "property": {
                          "type": "Identifier",
                          "name": "call"
                        }
                      },
                      "arguments": [
                        {
                          "type": "Identifier",
                          "name": "n"
                        },
                        {
                          "type": "Identifier",
                          "name": "s"
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
      {
        "type": "IfStatement",
        "test": {
          "type": "BinaryExpression",
          "operator": "===",
          "left": {
            "type": "UnaryExpression",
            "operator": "typeof",
            "argument": {
              "type": "Identifier",
              "name": "Sizzle"
            },
            "prefix": true
          },
          "right": {
            "type": "Literal",
            "value": "function",
            "raw": "\"function\""
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
                  "name": "d3_select"
                },
                "right": {
                  "type": "FunctionExpression",
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "name": "s"
                    },
                    {
                      "type": "Identifier",
                      "name": "n"
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
                          "operator": "||",
                          "left": {
                            "type": "MemberExpression",
                            "computed": true,
                            "object": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "Identifier",
                                "name": "Sizzle"
                              },
                              "arguments": [
                                {
                                  "type": "Identifier",
                                  "name": "s"
                                },
                                {
                                  "type": "Identifier",
                                  "name": "n"
                                }
                              ]
                            },
                            "property": {
                              "type": "Literal",
                              "value": 0,
                              "raw": "0"
                            }
                          },
                          "right": {
                            "type": "Literal",
                            "value": null,
                            "raw": "null"
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
                  "type": "Identifier",
                  "name": "d3_selectAll"
                },
                "right": {
                  "type": "Identifier",
                  "name": "Sizzle"
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
                  "name": "d3_selectMatches"
                },
                "right": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "name": "Sizzle"
                  },
                  "property": {
                    "type": "Identifier",
                    "name": "matchesSelector"
                  }
                }
              }
            }
          ]
        },
        "alternate": null
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
              "name": "d3"
            },
            "property": {
              "type": "Identifier",
              "name": "selection"
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
                    "name": "d3_selectionRoot"
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
                "name": "selection"
              }
            },
            "property": {
              "type": "Identifier",
              "name": "prototype"
            }
          },
          "operator": "=",
          "right": {
            "type": "ArrayExpression",
            "elements": []
          }
        }
      },
      {
        "type": "VariableDeclaration",
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "name": "d3_selectionPrototype"
            },
            "init": {
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
                  "name": "selection"
                }
              },
              "property": {
                "type": "Identifier",
                "name": "prototype"
              }
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
              "name": "d3"
            },
            "property": {
              "type": "Identifier",
              "name": "select"
            }
          },
          "right": {
            "type": "FunctionExpression",
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "name": "node"
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
                        "name": "group"
                      },
                      "init": {
                        "type": "ArrayExpression",
                        "elements": [
                          {
                            "type": "ConditionalExpression",
                            "test": {
                              "type": "BinaryExpression",
                              "operator": "===",
                              "left": {
                                "type": "UnaryExpression",
                                "operator": "typeof",
                                "argument": {
                                  "type": "Identifier",
                                  "name": "node"
                                },
                                "prefix": true
                              },
                              "right": {
                                "type": "Literal",
                                "value": "string",
                                "raw": "\"string\""
                              }
                            },
                            "consequent": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "Identifier",
                                "name": "d3_select"
                              },
                              "arguments": [
                                {
                                  "type": "Identifier",
                                  "name": "node"
                                },
                                {
                                  "type": "Identifier",
                                  "name": "d3_document"
                                }
                              ]
                            },
                            "alternate": {
                              "type": "Identifier",
                              "name": "node"
                            }
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
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "name": "group"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "parentNode"
                      }
                    },
                    "right": {
                      "type": "Identifier",
                      "name": "d3_documentElement"
                    }
                  }
                },
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "name": "d3_selection"
                    },
                    "arguments": [
                      {
                        "type": "ArrayExpression",
                        "elements": [
                          {
                            "type": "Identifier",
                            "name": "group"
                          }
                        ]
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
              "name": "d3"
            },
            "property": {
              "type": "Identifier",
              "name": "selectAll"
            }
          },
          "right": {
            "type": "FunctionExpression",
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "name": "nodes"
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
                        "name": "group"
                      },
                      "init": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "MemberExpression",
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "name": "GLOBAL"
                          },
                          "property": {
                            "type": "Identifier",
                            "name": "d3_array"
                          },
                          "_isReplacement": true
                        },
                        "arguments": [
                          {
                            "type": "ConditionalExpression",
                            "test": {
                              "type": "BinaryExpression",
                              "operator": "===",
                              "left": {
                                "type": "UnaryExpression",
                                "operator": "typeof",
                                "argument": {
                                  "type": "Identifier",
                                  "name": "nodes"
                                },
                                "prefix": true
                              },
                              "right": {
                                "type": "Literal",
                                "value": "string",
                                "raw": "\"string\""
                              }
                            },
                            "consequent": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "Identifier",
                                "name": "d3_selectAll"
                              },
                              "arguments": [
                                {
                                  "type": "Identifier",
                                  "name": "nodes"
                                },
                                {
                                  "type": "Identifier",
                                  "name": "d3_document"
                                }
                              ]
                            },
                            "alternate": {
                              "type": "Identifier",
                              "name": "nodes"
                            }
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
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "name": "group"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "parentNode"
                      }
                    },
                    "right": {
                      "type": "Identifier",
                      "name": "d3_documentElement"
                    }
                  }
                },
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "name": "d3_selection"
                    },
                    "arguments": [
                      {
                        "type": "ArrayExpression",
                        "elements": [
                          {
                            "type": "Identifier",
                            "name": "group"
                          }
                        ]
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
        "type": "VariableDeclaration",
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "name": "d3_selectionRoot"
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
                  "name": "select"
                }
              },
              "arguments": [
                {
                  "type": "Identifier",
                  "name": "d3_documentElement"
                }
              ]
            }
          }
        ]
      }
    ]
  }
}