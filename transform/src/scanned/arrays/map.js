{
  "filepath": "/arrays/map.js",
  "shared": [],
  "dependencies": [
    "d3_class"
  ],
  "helpers": [
    "d3_Map",
    "d3_map_prefix",
    "d3_map_prefixCode",
    "d3_map_has",
    "d3_map_remove",
    "d3_map_keys",
    "d3_map_size",
    "d3_map_empty"
  ],
  "exports": [
    "d3.map"
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
              "name": "map"
            }
          },
          "right": {
            "type": "FunctionExpression",
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "name": "object"
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
                    }
                  ],
                  "kind": "var"
                },
                {
                  "type": "IfStatement",
                  "test": {
                    "type": "BinaryExpression",
                    "operator": "instanceof",
                    "left": {
                      "type": "Identifier",
                      "name": "object"
                    },
                    "right": {
                      "type": "Identifier",
                      "name": "d3_Map"
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
                          "name": "object"
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
                              "name": "value"
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
                                      "name": "map"
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "name": "set"
                                    }
                                  },
                                  "arguments": [
                                    {
                                      "type": "Identifier",
                                      "name": "key"
                                    },
                                    {
                                      "type": "Identifier",
                                      "name": "value"
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
                  "alternate": {
                    "type": "ForInStatement",
                    "left": {
                      "type": "VariableDeclaration",
                      "declarations": [
                        {
                          "type": "VariableDeclarator",
                          "id": {
                            "type": "Identifier",
                            "name": "key"
                          },
                          "init": null
                        }
                      ],
                      "kind": "var"
                    },
                    "right": {
                      "type": "Identifier",
                      "name": "object"
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
                            "type": "Identifier",
                            "name": "key"
                          },
                          {
                            "type": "MemberExpression",
                            "computed": true,
                            "object": {
                              "type": "Identifier",
                              "name": "object"
                            },
                            "property": {
                              "type": "Identifier",
                              "name": "key"
                            }
                          }
                        ]
                      }
                    },
                    "each": false
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
          }
        }
      },
      {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "name": "d3_Map"
        },
        "params": [],
        "defaults": [],
        "body": {
          "type": "BlockStatement",
          "body": []
        },
        "rest": null,
        "generator": false,
        "expression": false
      },
      {
        "type": "ExpressionStatement",
        "expression": {
          "type": "CallExpression",
          "callee": {
            "type": "Identifier",
            "name": "d3_class"
          },
          "arguments": [
            {
              "type": "Identifier",
              "name": "d3_Map"
            },
            {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "key": {
                    "type": "Identifier",
                    "name": "has"
                  },
                  "value": {
                    "type": "Identifier",
                    "name": "d3_map_has"
                  },
                  "kind": "init"
                },
                {
                  "type": "Property",
                  "key": {
                    "type": "Identifier",
                    "name": "get"
                  },
                  "value": {
                    "type": "FunctionExpression",
                    "id": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "name": "key"
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
                              "type": "ThisExpression"
                            },
                            "property": {
                              "type": "BinaryExpression",
                              "operator": "+",
                              "left": {
                                "type": "Identifier",
                                "name": "d3_map_prefix"
                              },
                              "right": {
                                "type": "Identifier",
                                "name": "key"
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
                  "kind": "init"
                },
                {
                  "type": "Property",
                  "key": {
                    "type": "Identifier",
                    "name": "set"
                  },
                  "value": {
                    "type": "FunctionExpression",
                    "id": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "name": "key"
                      },
                      {
                        "type": "Identifier",
                        "name": "value"
                      }
                    ],
                    "defaults": [],
                    "body": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "AssignmentExpression",
                            "operator": "=",
                            "left": {
                              "type": "MemberExpression",
                              "computed": true,
                              "object": {
                                "type": "ThisExpression"
                              },
                              "property": {
                                "type": "BinaryExpression",
                                "operator": "+",
                                "left": {
                                  "type": "Identifier",
                                  "name": "d3_map_prefix"
                                },
                                "right": {
                                  "type": "Identifier",
                                  "name": "key"
                                }
                              }
                            },
                            "right": {
                              "type": "Identifier",
                              "name": "value"
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
                    "name": "remove"
                  },
                  "value": {
                    "type": "Identifier",
                    "name": "d3_map_remove"
                  },
                  "kind": "init"
                },
                {
                  "type": "Property",
                  "key": {
                    "type": "Identifier",
                    "name": "keys"
                  },
                  "value": {
                    "type": "Identifier",
                    "name": "d3_map_keys"
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
                                "name": "values"
                              },
                              "init": {
                                "type": "ArrayExpression",
                                "elements": []
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
                                "type": "ThisExpression"
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
                                    "name": "value"
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
                                            "name": "value"
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
                            "type": "Identifier",
                            "name": "values"
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
                    "name": "entries"
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
                          "type": "VariableDeclaration",
                          "declarations": [
                            {
                              "type": "VariableDeclarator",
                              "id": {
                                "type": "Identifier",
                                "name": "entries"
                              },
                              "init": {
                                "type": "ArrayExpression",
                                "elements": []
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
                                "type": "ThisExpression"
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
                                    "name": "value"
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
                                            "name": "entries"
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
                                                  "name": "value"
                                                },
                                                "value": {
                                                  "type": "Identifier",
                                                  "name": "value"
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
                            "type": "Identifier",
                            "name": "entries"
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
                    "name": "size"
                  },
                  "value": {
                    "type": "Identifier",
                    "name": "d3_map_size"
                  },
                  "kind": "init"
                },
                {
                  "type": "Property",
                  "key": {
                    "type": "Identifier",
                    "name": "empty"
                  },
                  "value": {
                    "type": "Identifier",
                    "name": "d3_map_empty"
                  },
                  "kind": "init"
                },
                {
                  "type": "Property",
                  "key": {
                    "type": "Identifier",
                    "name": "forEach"
                  },
                  "value": {
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
                          "type": "ForInStatement",
                          "left": {
                            "type": "VariableDeclaration",
                            "declarations": [
                              {
                                "type": "VariableDeclarator",
                                "id": {
                                  "type": "Identifier",
                                  "name": "key"
                                },
                                "init": null
                              }
                            ],
                            "kind": "var"
                          },
                          "right": {
                            "type": "ThisExpression"
                          },
                          "body": {
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
                                    "name": "key"
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "name": "charCodeAt"
                                  }
                                },
                                "arguments": [
                                  {
                                    "type": "Literal",
                                    "value": 0,
                                    "raw": "0"
                                  }
                                ]
                              },
                              "right": {
                                "type": "Identifier",
                                "name": "d3_map_prefixCode"
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
                                    "name": "f"
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "name": "call"
                                  }
                                },
                                "arguments": [
                                  {
                                    "type": "ThisExpression"
                                  },
                                  {
                                    "type": "CallExpression",
                                    "callee": {
                                      "type": "MemberExpression",
                                      "computed": false,
                                      "object": {
                                        "type": "Identifier",
                                        "name": "key"
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "name": "substring"
                                      }
                                    },
                                    "arguments": [
                                      {
                                        "type": "Literal",
                                        "value": 1,
                                        "raw": "1"
                                      }
                                    ]
                                  },
                                  {
                                    "type": "MemberExpression",
                                    "computed": true,
                                    "object": {
                                      "type": "ThisExpression"
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "name": "key"
                                    }
                                  }
                                ]
                              }
                            },
                            "alternate": null
                          },
                          "each": false
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
          ]
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
              "name": "d3_map_prefix"
            },
            "init": {
              "type": "Literal",
              "value": "\u0000",
              "raw": "\"\\0\""
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
              "name": "d3_map_prefixCode"
            },
            "init": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "name": "d3_map_prefix"
                },
                "property": {
                  "type": "Identifier",
                  "name": "charCodeAt"
                }
              },
              "arguments": [
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
      {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "name": "d3_map_has"
        },
        "params": [
          {
            "type": "Identifier",
            "name": "key"
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
                "operator": "in",
                "left": {
                  "type": "BinaryExpression",
                  "operator": "+",
                  "left": {
                    "type": "Identifier",
                    "name": "d3_map_prefix"
                  },
                  "right": {
                    "type": "Identifier",
                    "name": "key"
                  }
                },
                "right": {
                  "type": "ThisExpression"
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
          "name": "d3_map_remove"
        },
        "params": [
          {
            "type": "Identifier",
            "name": "key"
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
                  "name": "key"
                },
                "right": {
                  "type": "BinaryExpression",
                  "operator": "+",
                  "left": {
                    "type": "Identifier",
                    "name": "d3_map_prefix"
                  },
                  "right": {
                    "type": "Identifier",
                    "name": "key"
                  }
                }
              }
            },
            {
              "type": "ReturnStatement",
              "argument": {
                "type": "LogicalExpression",
                "operator": "&&",
                "left": {
                  "type": "BinaryExpression",
                  "operator": "in",
                  "left": {
                    "type": "Identifier",
                    "name": "key"
                  },
                  "right": {
                    "type": "ThisExpression"
                  }
                },
                "right": {
                  "type": "UnaryExpression",
                  "operator": "delete",
                  "argument": {
                    "type": "MemberExpression",
                    "computed": true,
                    "object": {
                      "type": "ThisExpression"
                    },
                    "property": {
                      "type": "Identifier",
                      "name": "key"
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
      {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "name": "d3_map_keys"
        },
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
                    "name": "keys"
                  },
                  "init": {
                    "type": "ArrayExpression",
                    "elements": []
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
                    "type": "ThisExpression"
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
                                "name": "key"
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
                "type": "Identifier",
                "name": "keys"
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
          "name": "d3_map_size"
        },
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
                    "name": "size"
                  },
                  "init": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0"
                  }
                }
              ],
              "kind": "var"
            },
            {
              "type": "ForInStatement",
              "left": {
                "type": "VariableDeclaration",
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "id": {
                      "type": "Identifier",
                      "name": "key"
                    },
                    "init": null
                  }
                ],
                "kind": "var"
              },
              "right": {
                "type": "ThisExpression"
              },
              "body": {
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
                        "name": "key"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "charCodeAt"
                      }
                    },
                    "arguments": [
                      {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0"
                      }
                    ]
                  },
                  "right": {
                    "type": "Identifier",
                    "name": "d3_map_prefixCode"
                  }
                },
                "consequent": {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "UpdateExpression",
                    "operator": "++",
                    "argument": {
                      "type": "Identifier",
                      "name": "size"
                    },
                    "prefix": true
                  }
                },
                "alternate": null
              },
              "each": false
            },
            {
              "type": "ReturnStatement",
              "argument": {
                "type": "Identifier",
                "name": "size"
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
          "name": "d3_map_empty"
        },
        "params": [],
        "defaults": [],
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "ForInStatement",
              "left": {
                "type": "VariableDeclaration",
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "id": {
                      "type": "Identifier",
                      "name": "key"
                    },
                    "init": null
                  }
                ],
                "kind": "var"
              },
              "right": {
                "type": "ThisExpression"
              },
              "body": {
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
                        "name": "key"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "charCodeAt"
                      }
                    },
                    "arguments": [
                      {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0"
                      }
                    ]
                  },
                  "right": {
                    "type": "Identifier",
                    "name": "d3_map_prefixCode"
                  }
                },
                "consequent": {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Literal",
                    "value": false,
                    "raw": "false"
                  }
                },
                "alternate": null
              },
              "each": false
            },
            {
              "type": "ReturnStatement",
              "argument": {
                "type": "Literal",
                "value": true,
                "raw": "true"
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
  "src": "d3.map = function (object) {\n    var map = new d3_Map();\n    if (object instanceof d3_Map)\n        object.forEach(function (key, value) {\n            map.set(key, value);\n        });\n    else\n        for (var key in object)\n            map.set(key, object[key]);\n    return map;\n};\nfunction d3_Map() {\n}\nd3_class(d3_Map, {\n    has: d3_map_has,\n    get: function (key) {\n        return this[d3_map_prefix + key];\n    },\n    set: function (key, value) {\n        return this[d3_map_prefix + key] = value;\n    },\n    remove: d3_map_remove,\n    keys: d3_map_keys,\n    values: function () {\n        var values = [];\n        this.forEach(function (key, value) {\n            values.push(value);\n        });\n        return values;\n    },\n    entries: function () {\n        var entries = [];\n        this.forEach(function (key, value) {\n            entries.push({\n                key: key,\n                value: value\n            });\n        });\n        return entries;\n    },\n    size: d3_map_size,\n    empty: d3_map_empty,\n    forEach: function (f) {\n        for (var key in this)\n            if (key.charCodeAt(0) === d3_map_prefixCode)\n                f.call(this, key.substring(1), this[key]);\n    }\n});\nvar d3_map_prefix = '\\0';\nvar d3_map_prefixCode = d3_map_prefix.charCodeAt(0);\nfunction d3_map_has(key) {\n    return d3_map_prefix + key in this;\n}\nfunction d3_map_remove(key) {\n    key = d3_map_prefix + key;\n    return key in this && delete this[key];\n}\nfunction d3_map_keys() {\n    var keys = [];\n    this.forEach(function (key) {\n        keys.push(key);\n    });\n    return keys;\n}\nfunction d3_map_size() {\n    var size = 0;\n    for (var key in this)\n        if (key.charCodeAt(0) === d3_map_prefixCode)\n            ++size;\n    return size;\n}\nfunction d3_map_empty() {\n    for (var key in this)\n        if (key.charCodeAt(0) === d3_map_prefixCode)\n            return false;\n    return true;\n}"
}