{
  "filepath": "/selection/selection.js",
  "shared": [],
  "dependencies": [
    "d3_subclass",
    "d3_documentElement",
    "d3_vendorSymbol",
    "d3.selection.prototype",
    "d3_document",
    "d3_array"
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
            "init": {
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
              "type": "ArrayExpression",
              "elements": []
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
            "init": {
              "type": "ArrayExpression",
              "elements": []
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
                          "type": "Identifier",
                          "name": "d3_array"
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
  },
  "src": "function d3_selection(groups) {\n    d3_subclass(groups, d3_selectionPrototype);\n    return groups;\n}\nvar d3_select = function (s, n) {\n    return n.querySelector(s);\n};\nvar d3_selectAll = function (s, n) {\n    return n.querySelectorAll(s);\n};\nvar d3_selectMatcher = d3_documentElement.matches || d3_documentElement[d3_vendorSymbol(d3_documentElement, 'matchesSelector')];\nvar d3_documentElement.matches = d3_documentElement[d3_vendorSymbol(d3_documentElement, 'matchesSelector')];\nvar d3_selectMatches = function (n, s) {\n    return d3_selectMatcher.call(n, s);\n};\nif (typeof Sizzle === 'function') {\n    d3_select = function (s, n) {\n        return Sizzle(s, n)[0] || null;\n    };\n    d3_selectAll = Sizzle;\n    d3_selectMatches = Sizzle.matchesSelector;\n}\nd3.selection = function () {\n    return d3_selectionRoot;\n};\nvar d3_selectionPrototype = [];\nvar d3.selection.prototype = [];\nd3.select = function (node) {\n    var group = [typeof node === 'string' ? d3_select(node, d3_document) : node];\n    group.parentNode = d3_documentElement;\n    return d3_selection([group]);\n};\nd3.selectAll = function (nodes) {\n    var group = d3_array(typeof nodes === 'string' ? d3_selectAll(nodes, d3_document) : nodes);\n    group.parentNode = d3_documentElement;\n    return d3_selection([group]);\n};\nvar d3_selectionRoot = d3.select(d3_documentElement);"
}