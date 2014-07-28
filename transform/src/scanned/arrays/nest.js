{
  "filepath": "/arrays/nest.js",
  "shared": [],
  "dependencies": [
    "d3_Map",
    "d3.map"
  ],
  "helpers": [],
  "exports": [
    "d3.nest"
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
              "name": "nest"
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
                  "type": "VariableDeclaration",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "name": "nest"
                      },
                      "init": {
                        "type": "ObjectExpression",
                        "properties": []
                      }
                    },
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "name": "keys"
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
                        "name": "sortKeys"
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
                        "name": "sortValues"
                      },
                      "init": null
                    },
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "name": "rollup"
                      },
                      "init": null
                    }
                  ],
                  "kind": "var"
                },
                {
                  "type": "FunctionDeclaration",
                  "id": {
                    "type": "Identifier",
                    "name": "map"
                  },
                  "params": [
                    {
                      "type": "Identifier",
                      "name": "mapType"
                    },
                    {
                      "type": "Identifier",
                      "name": "array"
                    },
                    {
                      "type": "Identifier",
                      "name": "depth"
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
                          "operator": ">=",
                          "left": {
                            "type": "Identifier",
                            "name": "depth"
                          },
                          "right": {
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "name": "keys"
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
                            "type": "ConditionalExpression",
                            "test": {
                              "type": "Identifier",
                              "name": "rollup"
                            },
                            "consequent": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "MemberExpression",
                                "computed": false,
                                "object": {
                                  "type": "Identifier",
                                  "name": "rollup"
                                },
                                "property": {
                                  "type": "Identifier",
                                  "name": "call"
                                }
                              },
                              "arguments": [
                                {
                                  "type": "Identifier",
                                  "name": "nest"
                                },
                                {
                                  "type": "Identifier",
                                  "name": "array"
                                }
                              ]
                            },
                            "alternate": {
                              "type": "ConditionalExpression",
                              "test": {
                                "type": "Identifier",
                                "name": "sortValues"
                              },
                              "consequent": {
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
                                    "name": "sortValues"
                                  }
                                ]
                              },
                              "alternate": {
                                "type": "Identifier",
                                "name": "array"
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
                                "name": "array"
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
                              "name": "key"
                            },
                            "init": {
                              "type": "MemberExpression",
                              "computed": true,
                              "object": {
                                "type": "Identifier",
                                "name": "keys"
                              },
                              "property": {
                                "type": "UpdateExpression",
                                "operator": "++",
                                "argument": {
                                  "type": "Identifier",
                                  "name": "depth"
                                },
                                "prefix": false
                              }
                            }
                          },
                          {
                            "type": "VariableDeclarator",
                            "id": {
                              "type": "Identifier",
                              "name": "keyValue"
                            },
                            "init": null
                          },
                          {
                            "type": "VariableDeclarator",
                            "id": {
                              "type": "Identifier",
                              "name": "object"
                            },
                            "init": null
                          },
                          {
                            "type": "VariableDeclarator",
                            "id": {
                              "type": "Identifier",
                              "name": "setter"
                            },
                            "init": null
                          },
                          {
                            "type": "VariableDeclarator",
                            "id": {
                              "type": "Identifier",
                              "name": "valuesByKey"
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
                              "name": "values"
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
                                "type": "AssignmentExpression",
                                "operator": "=",
                                "left": {
                                  "type": "Identifier",
                                  "name": "values"
                                },
                                "right": {
                                  "type": "CallExpression",
                                  "callee": {
                                    "type": "MemberExpression",
                                    "computed": false,
                                    "object": {
                                      "type": "Identifier",
                                      "name": "valuesByKey"
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "name": "get"
                                    }
                                  },
                                  "arguments": [
                                    {
                                      "type": "AssignmentExpression",
                                      "operator": "=",
                                      "left": {
                                        "type": "Identifier",
                                        "name": "keyValue"
                                      },
                                      "right": {
                                        "type": "CallExpression",
                                        "callee": {
                                          "type": "Identifier",
                                          "name": "key"
                                        },
                                        "arguments": [
                                          {
                                            "type": "AssignmentExpression",
                                            "operator": "=",
                                            "left": {
                                              "type": "Identifier",
                                              "name": "object"
                                            },
                                            "right": {
                                              "type": "MemberExpression",
                                              "computed": true,
                                              "object": {
                                                "type": "Identifier",
                                                "name": "array"
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "name": "i"
                                              }
                                            }
                                          }
                                        ]
                                      }
                                    }
                                  ]
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
                                          "name": "values"
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "name": "push"
                                        }
                                      },
                                      "arguments": [
                                        {
                                          "type": "Identifier",
                                          "name": "object"
                                        }
                                      ]
                                    }
                                  }
                                ]
                              },
                              "alternate": {
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
                                          "name": "valuesByKey"
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "name": "set"
                                        }
                                      },
                                      "arguments": [
                                        {
                                          "type": "Identifier",
                                          "name": "keyValue"
                                        },
                                        {
                                          "type": "ArrayExpression",
                                          "elements": [
                                            {
                                              "type": "Identifier",
                                              "name": "object"
                                            }
                                          ]
                                        }
                                      ]
                                    }
                                  }
                                ]
                              }
                            }
                          ]
                        }
                      },
                      {
                        "type": "IfStatement",
                        "test": {
                          "type": "Identifier",
                          "name": "mapType"
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
                                  "name": "object"
                                },
                                "right": {
                                  "type": "CallExpression",
                                  "callee": {
                                    "type": "Identifier",
                                    "name": "mapType"
                                  },
                                  "arguments": []
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
                                  "name": "setter"
                                },
                                "right": {
                                  "type": "FunctionExpression",
                                  "id": null,
                                  "params": [
                                    {
                                      "type": "Identifier",
                                      "name": "keyValue"
                                    },
                                    {
                                      "type": "Identifier",
                                      "name": "values"
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
                                              "name": "object"
                                            },
                                            "property": {
                                              "type": "Identifier",
                                              "name": "set"
                                            }
                                          },
                                          "arguments": [
                                            {
                                              "type": "Identifier",
                                              "name": "keyValue"
                                            },
                                            {
                                              "type": "CallExpression",
                                              "callee": {
                                                "type": "Identifier",
                                                "name": "map"
                                              },
                                              "arguments": [
                                                {
                                                  "type": "Identifier",
                                                  "name": "mapType"
                                                },
                                                {
                                                  "type": "Identifier",
                                                  "name": "values"
                                                },
                                                {
                                                  "type": "Identifier",
                                                  "name": "depth"
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
                            }
                          ]
                        },
                        "alternate": {
                          "type": "BlockStatement",
                          "body": [
                            {
                              "type": "ExpressionStatement",
                              "expression": {
                                "type": "AssignmentExpression",
                                "operator": "=",
                                "left": {
                                  "type": "Identifier",
                                  "name": "object"
                                },
                                "right": {
                                  "type": "ObjectExpression",
                                  "properties": []
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
                                  "name": "setter"
                                },
                                "right": {
                                  "type": "FunctionExpression",
                                  "id": null,
                                  "params": [
                                    {
                                      "type": "Identifier",
                                      "name": "keyValue"
                                    },
                                    {
                                      "type": "Identifier",
                                      "name": "values"
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
                                            "computed": true,
                                            "object": {
                                              "type": "Identifier",
                                              "name": "object"
                                            },
                                            "property": {
                                              "type": "Identifier",
                                              "name": "keyValue"
                                            }
                                          },
                                          "right": {
                                            "type": "CallExpression",
                                            "callee": {
                                              "type": "Identifier",
                                              "name": "map"
                                            },
                                            "arguments": [
                                              {
                                                "type": "Identifier",
                                                "name": "mapType"
                                              },
                                              {
                                                "type": "Identifier",
                                                "name": "values"
                                              },
                                              {
                                                "type": "Identifier",
                                                "name": "depth"
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
                                }
                              }
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
                              "name": "valuesByKey"
                            },
                            "property": {
                              "type": "Identifier",
                              "name": "forEach"
                            }
                          },
                          "arguments": [
                            {
                              "type": "Identifier",
                              "name": "setter"
                            }
                          ]
                        }
                      },
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "Identifier",
                          "name": "object"
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
                    "name": "entries"
                  },
                  "params": [
                    {
                      "type": "Identifier",
                      "name": "map"
                    },
                    {
                      "type": "Identifier",
                      "name": "depth"
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
                          "operator": ">=",
                          "left": {
                            "type": "Identifier",
                            "name": "depth"
                          },
                          "right": {
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "name": "keys"
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
                            "type": "Identifier",
                            "name": "map"
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
                              "name": "array"
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
                              "name": "sortKey"
                            },
                            "init": {
                              "type": "MemberExpression",
                              "computed": true,
                              "object": {
                                "type": "Identifier",
                                "name": "sortKeys"
                              },
                              "property": {
                                "type": "UpdateExpression",
                                "operator": "++",
                                "argument": {
                                  "type": "Identifier",
                                  "name": "depth"
                                },
                                "prefix": false
                              }
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
                              "name": "map"
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
                                  "name": "key"
                                },
                                {
                                  "type": "Identifier",
                                  "name": "keyMap"
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
                                          "name": "array"
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "name": "push"
                                        }
                                      },
                                      "arguments": [
                                        {
                                          "type": "ObjectExpression",
                                          "properties": [
                                            {
                                              "type": "Property",
                                              "key": {
                                                "type": "Identifier",
                                                "name": "key"
                                              },
                                              "value": {
                                                "type": "Identifier",
                                                "name": "key"
                                              },
                                              "kind": "init"
                                            },
                                            {
                                              "type": "Property",
                                              "key": {
                                                "type": "Identifier",
                                                "name": "values"
                                              },
                                              "value": {
                                                "type": "CallExpression",
                                                "callee": {
                                                  "type": "Identifier",
                                                  "name": "entries"
                                                },
                                                "arguments": [
                                                  {
                                                    "type": "Identifier",
                                                    "name": "keyMap"
                                                  },
                                                  {
                                                    "type": "Identifier",
                                                    "name": "depth"
                                                  }
                                                ]
                                              },
                                              "kind": "init"
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
                          ]
                        }
                      },
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "ConditionalExpression",
                          "test": {
                            "type": "Identifier",
                            "name": "sortKey"
                          },
                          "consequent": {
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
                                "type": "FunctionExpression",
                                "id": null,
                                "params": [
                                  {
                                    "type": "Identifier",
                                    "name": "a"
                                  },
                                  {
                                    "type": "Identifier",
                                    "name": "b"
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
                                          "name": "sortKey"
                                        },
                                        "arguments": [
                                          {
                                            "type": "MemberExpression",
                                            "computed": false,
                                            "object": {
                                              "type": "Identifier",
                                              "name": "a"
                                            },
                                            "property": {
                                              "type": "Identifier",
                                              "name": "key"
                                            }
                                          },
                                          {
                                            "type": "MemberExpression",
                                            "computed": false,
                                            "object": {
                                              "type": "Identifier",
                                              "name": "b"
                                            },
                                            "property": {
                                              "type": "Identifier",
                                              "name": "key"
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
                          },
                          "alternate": {
                            "type": "Identifier",
                            "name": "array"
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
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "name": "nest"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "map"
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
                          "name": "mapType"
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
                                "name": "map"
                              },
                              "arguments": [
                                {
                                  "type": "Identifier",
                                  "name": "mapType"
                                },
                                {
                                  "type": "Identifier",
                                  "name": "array"
                                },
                                {
                                  "type": "Literal",
                                  "value": 0,
                                  "raw": "0"
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
                        "name": "nest"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "entries"
                      }
                    },
                    "right": {
                      "type": "FunctionExpression",
                      "id": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "name": "array"
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
                                "name": "entries"
                              },
                              "arguments": [
                                {
                                  "type": "CallExpression",
                                  "callee": {
                                    "type": "Identifier",
                                    "name": "map"
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
                                        "name": "map"
                                      }
                                    },
                                    {
                                      "type": "Identifier",
                                      "name": "array"
                                    },
                                    {
                                      "type": "Literal",
                                      "value": 0,
                                      "raw": "0"
                                    }
                                  ]
                                },
                                {
                                  "type": "Literal",
                                  "value": 0,
                                  "raw": "0"
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
                        "name": "nest"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "key"
                      }
                    },
                    "right": {
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
                            "type": "ExpressionStatement",
                            "expression": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "MemberExpression",
                                "computed": false,
                                "object": {
                                  "type": "Identifier",
                                  "name": "keys"
                                },
                                "property": {
                                  "type": "Identifier",
                                  "name": "push"
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
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "Identifier",
                              "name": "nest"
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
                        "name": "nest"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "sortKeys"
                      }
                    },
                    "right": {
                      "type": "FunctionExpression",
                      "id": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "name": "order"
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
                                "computed": true,
                                "object": {
                                  "type": "Identifier",
                                  "name": "sortKeys"
                                },
                                "property": {
                                  "type": "BinaryExpression",
                                  "operator": "-",
                                  "left": {
                                    "type": "MemberExpression",
                                    "computed": false,
                                    "object": {
                                      "type": "Identifier",
                                      "name": "keys"
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
                                }
                              },
                              "right": {
                                "type": "Identifier",
                                "name": "order"
                              }
                            }
                          },
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "Identifier",
                              "name": "nest"
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
                        "name": "nest"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "sortValues"
                      }
                    },
                    "right": {
                      "type": "FunctionExpression",
                      "id": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "name": "order"
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
                                "name": "sortValues"
                              },
                              "right": {
                                "type": "Identifier",
                                "name": "order"
                              }
                            }
                          },
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "Identifier",
                              "name": "nest"
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
                        "name": "nest"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "rollup"
                      }
                    },
                    "right": {
                      "type": "FunctionExpression",
                      "id": null,
                      "params": [
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
                            "type": "ExpressionStatement",
                            "expression": {
                              "type": "AssignmentExpression",
                              "operator": "=",
                              "left": {
                                "type": "Identifier",
                                "name": "rollup"
                              },
                              "right": {
                                "type": "Identifier",
                                "name": "f"
                              }
                            }
                          },
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "Identifier",
                              "name": "nest"
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
                    "name": "nest"
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
  "src": "d3.nest = function () {\n    var nest = {}, keys = [], sortKeys = [], sortValues, rollup;\n    function map(mapType, array, depth) {\n        if (depth >= keys.length)\n            return rollup ? rollup.call(nest, array) : sortValues ? array.sort(sortValues) : array;\n        var i = -1, n = array.length, key = keys[depth++], keyValue, object, setter, valuesByKey = new d3_Map(), values;\n        while (++i < n) {\n            if (values = valuesByKey.get(keyValue = key(object = array[i]))) {\n                values.push(object);\n            } else {\n                valuesByKey.set(keyValue, [object]);\n            }\n        }\n        if (mapType) {\n            object = mapType();\n            setter = function (keyValue, values) {\n                object.set(keyValue, map(mapType, values, depth));\n            };\n        } else {\n            object = {};\n            setter = function (keyValue, values) {\n                object[keyValue] = map(mapType, values, depth);\n            };\n        }\n        valuesByKey.forEach(setter);\n        return object;\n    }\n    function entries(map, depth) {\n        if (depth >= keys.length)\n            return map;\n        var array = [], sortKey = sortKeys[depth++];\n        map.forEach(function (key, keyMap) {\n            array.push({\n                key: key,\n                values: entries(keyMap, depth)\n            });\n        });\n        return sortKey ? array.sort(function (a, b) {\n            return sortKey(a.key, b.key);\n        }) : array;\n    }\n    nest.map = function (array, mapType) {\n        return map(mapType, array, 0);\n    };\n    nest.entries = function (array) {\n        return entries(map(d3.map, array, 0), 0);\n    };\n    nest.key = function (d) {\n        keys.push(d);\n        return nest;\n    };\n    nest.sortKeys = function (order) {\n        sortKeys[keys.length - 1] = order;\n        return nest;\n    };\n    nest.sortValues = function (order) {\n        sortValues = order;\n        return nest;\n    };\n    nest.rollup = function (f) {\n        rollup = f;\n        return nest;\n    };\n    return nest;\n};"
}