{
  "filepath": "/xhr/xhr.js",
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
    "d3_identity",
    "d3.dispatch",
    "d3_window",
    "d3_array",
    "d3.rebind"
  ],
  "helpers": [
    "d3_xhrType",
    "d3_xhr",
    "d3_xhr_fixCallback"
  ],
  "exports": [
    "d3.xhr"
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
              "name": "xhr"
            }
          },
          "right": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "name": "d3_xhrType"
            },
            "arguments": [
              {
                "type": "Identifier",
                "name": "d3_identity"
              }
            ]
          }
        }
      },
      {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "name": "d3_xhrType"
        },
        "params": [
          {
            "type": "Identifier",
            "name": "response"
          }
        ],
        "defaults": [],
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "ReturnStatement",
              "argument": {
                "type": "FunctionExpression",
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "name": "url"
                  },
                  {
                    "type": "Identifier",
                    "name": "mimeType"
                  },
                  {
                    "type": "Identifier",
                    "name": "callback"
                  }
                ],
                "defaults": [],
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "IfStatement",
                      "test": {
                        "type": "LogicalExpression",
                        "operator": "&&",
                        "left": {
                          "type": "BinaryExpression",
                          "operator": "===",
                          "left": {
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "name": "arguments"
                            },
                            "property": {
                              "type": "Identifier",
                              "name": "length"
                            }
                          },
                          "right": {
                            "type": "Literal",
                            "value": 2,
                            "raw": "2"
                          }
                        },
                        "right": {
                          "type": "BinaryExpression",
                          "operator": "===",
                          "left": {
                            "type": "UnaryExpression",
                            "operator": "typeof",
                            "argument": {
                              "type": "Identifier",
                              "name": "mimeType"
                            },
                            "prefix": true
                          },
                          "right": {
                            "type": "Literal",
                            "value": "function",
                            "raw": "\"function\""
                          }
                        }
                      },
                      "consequent": {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "SequenceExpression",
                          "expressions": [
                            {
                              "type": "AssignmentExpression",
                              "operator": "=",
                              "left": {
                                "type": "Identifier",
                                "name": "callback"
                              },
                              "right": {
                                "type": "Identifier",
                                "name": "mimeType"
                              }
                            },
                            {
                              "type": "AssignmentExpression",
                              "operator": "=",
                              "left": {
                                "type": "Identifier",
                                "name": "mimeType"
                              },
                              "right": {
                                "type": "Literal",
                                "value": null,
                                "raw": "null"
                              }
                            }
                          ]
                        }
                      },
                      "alternate": null
                    },
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "Identifier",
                          "name": "d3_xhr"
                        },
                        "arguments": [
                          {
                            "type": "Identifier",
                            "name": "url"
                          },
                          {
                            "type": "Identifier",
                            "name": "mimeType"
                          },
                          {
                            "type": "Identifier",
                            "name": "response"
                          },
                          {
                            "type": "Identifier",
                            "name": "callback"
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
      },
      {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "name": "d3_xhr"
        },
        "params": [
          {
            "type": "Identifier",
            "name": "url"
          },
          {
            "type": "Identifier",
            "name": "mimeType"
          },
          {
            "type": "Identifier",
            "name": "response"
          },
          {
            "type": "Identifier",
            "name": "callback"
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
                    "name": "xhr"
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
                    "name": "dispatch"
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
                        "name": "dispatch"
                      }
                    },
                    "arguments": [
                      {
                        "type": "Literal",
                        "value": "beforesend",
                        "raw": "\"beforesend\""
                      },
                      {
                        "type": "Literal",
                        "value": "progress",
                        "raw": "\"progress\""
                      },
                      {
                        "type": "Literal",
                        "value": "load",
                        "raw": "\"load\""
                      },
                      {
                        "type": "Literal",
                        "value": "error",
                        "raw": "\"error\""
                      }
                    ]
                  }
                },
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "name": "headers"
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
                    "name": "request"
                  },
                  "init": {
                    "type": "NewExpression",
                    "callee": {
                      "type": "Identifier",
                      "name": "XMLHttpRequest"
                    },
                    "arguments": []
                  }
                },
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "name": "responseType"
                  },
                  "init": {
                    "type": "Literal",
                    "value": null,
                    "raw": "null"
                  }
                }
              ],
              "kind": "var"
            },
            {
              "type": "IfStatement",
              "test": {
                "type": "LogicalExpression",
                "operator": "&&",
                "left": {
                  "type": "LogicalExpression",
                  "operator": "&&",
                  "left": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "name": "d3_window"
                    },
                    "property": {
                      "type": "Identifier",
                      "name": "XDomainRequest"
                    }
                  },
                  "right": {
                    "type": "UnaryExpression",
                    "operator": "!",
                    "argument": {
                      "type": "BinaryExpression",
                      "operator": "in",
                      "left": {
                        "type": "Literal",
                        "value": "withCredentials",
                        "raw": "\"withCredentials\""
                      },
                      "right": {
                        "type": "Identifier",
                        "name": "request"
                      }
                    },
                    "prefix": true
                  }
                },
                "right": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "Literal",
                      "value": {},
                      "raw": "/^(http(s)?:)?\\/\\//"
                    },
                    "property": {
                      "type": "Identifier",
                      "name": "test"
                    }
                  },
                  "arguments": [
                    {
                      "type": "Identifier",
                      "name": "url"
                    }
                  ]
                }
              },
              "consequent": {
                "type": "ExpressionStatement",
                "expression": {
                  "type": "AssignmentExpression",
                  "operator": "=",
                  "left": {
                    "type": "Identifier",
                    "name": "request"
                  },
                  "right": {
                    "type": "NewExpression",
                    "callee": {
                      "type": "Identifier",
                      "name": "XDomainRequest"
                    },
                    "arguments": []
                  }
                }
              },
              "alternate": null
            },
            {
              "type": "ExpressionStatement",
              "expression": {
                "type": "ConditionalExpression",
                "test": {
                  "type": "BinaryExpression",
                  "operator": "in",
                  "left": {
                    "type": "Literal",
                    "value": "onload",
                    "raw": "\"onload\""
                  },
                  "right": {
                    "type": "Identifier",
                    "name": "request"
                  }
                },
                "consequent": {
                  "type": "AssignmentExpression",
                  "operator": "=",
                  "left": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "name": "request"
                    },
                    "property": {
                      "type": "Identifier",
                      "name": "onload"
                    }
                  },
                  "right": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "name": "request"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "onerror"
                      }
                    },
                    "right": {
                      "type": "Identifier",
                      "name": "respond"
                    }
                  }
                },
                "alternate": {
                  "type": "AssignmentExpression",
                  "operator": "=",
                  "left": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "name": "request"
                    },
                    "property": {
                      "type": "Identifier",
                      "name": "onreadystatechange"
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
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "LogicalExpression",
                            "operator": "&&",
                            "left": {
                              "type": "BinaryExpression",
                              "operator": ">",
                              "left": {
                                "type": "MemberExpression",
                                "computed": false,
                                "object": {
                                  "type": "Identifier",
                                  "name": "request"
                                },
                                "property": {
                                  "type": "Identifier",
                                  "name": "readyState"
                                }
                              },
                              "right": {
                                "type": "Literal",
                                "value": 3,
                                "raw": "3"
                              }
                            },
                            "right": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "Identifier",
                                "name": "respond"
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
                  }
                }
              }
            },
            {
              "type": "FunctionDeclaration",
              "id": {
                "type": "Identifier",
                "name": "respond"
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
                          "name": "status"
                        },
                        "init": {
                          "type": "MemberExpression",
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "name": "request"
                          },
                          "property": {
                            "type": "Identifier",
                            "name": "status"
                          }
                        }
                      },
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "name": "result"
                        },
                        "init": null
                      }
                    ],
                    "kind": "var"
                  },
                  {
                    "type": "IfStatement",
                    "test": {
                      "type": "LogicalExpression",
                      "operator": "||",
                      "left": {
                        "type": "LogicalExpression",
                        "operator": "||",
                        "left": {
                          "type": "LogicalExpression",
                          "operator": "&&",
                          "left": {
                            "type": "UnaryExpression",
                            "operator": "!",
                            "argument": {
                              "type": "Identifier",
                              "name": "status"
                            },
                            "prefix": true
                          },
                          "right": {
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "name": "request"
                            },
                            "property": {
                              "type": "Identifier",
                              "name": "responseText"
                            }
                          }
                        },
                        "right": {
                          "type": "LogicalExpression",
                          "operator": "&&",
                          "left": {
                            "type": "BinaryExpression",
                            "operator": ">=",
                            "left": {
                              "type": "Identifier",
                              "name": "status"
                            },
                            "right": {
                              "type": "Literal",
                              "value": 200,
                              "raw": "200"
                            }
                          },
                          "right": {
                            "type": "BinaryExpression",
                            "operator": "<",
                            "left": {
                              "type": "Identifier",
                              "name": "status"
                            },
                            "right": {
                              "type": "Literal",
                              "value": 300,
                              "raw": "300"
                            }
                          }
                        }
                      },
                      "right": {
                        "type": "BinaryExpression",
                        "operator": "===",
                        "left": {
                          "type": "Identifier",
                          "name": "status"
                        },
                        "right": {
                          "type": "Literal",
                          "value": 304,
                          "raw": "304"
                        }
                      }
                    },
                    "consequent": {
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
                                    "type": "Identifier",
                                    "name": "result"
                                  },
                                  "right": {
                                    "type": "CallExpression",
                                    "callee": {
                                      "type": "MemberExpression",
                                      "computed": false,
                                      "object": {
                                        "type": "Identifier",
                                        "name": "response"
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "name": "call"
                                      }
                                    },
                                    "arguments": [
                                      {
                                        "type": "Identifier",
                                        "name": "xhr"
                                      },
                                      {
                                        "type": "Identifier",
                                        "name": "request"
                                      }
                                    ]
                                  }
                                }
                              }
                            ]
                          },
                          "guardedHandlers": [],
                          "handlers": [
                            {
                              "type": "CatchClause",
                              "param": {
                                "type": "Identifier",
                                "name": "e"
                              },
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
                                          "type": "MemberExpression",
                                          "computed": false,
                                          "object": {
                                            "type": "Identifier",
                                            "name": "dispatch"
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "name": "error"
                                          }
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "name": "call"
                                        }
                                      },
                                      "arguments": [
                                        {
                                          "type": "Identifier",
                                          "name": "xhr"
                                        },
                                        {
                                          "type": "Identifier",
                                          "name": "e"
                                        }
                                      ]
                                    }
                                  },
                                  {
                                    "type": "ReturnStatement",
                                    "argument": null
                                  }
                                ]
                              }
                            }
                          ],
                          "finalizer": null
                        },
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "CallExpression",
                            "callee": {
                              "type": "MemberExpression",
                              "computed": false,
                              "object": {
                                "type": "MemberExpression",
                                "computed": false,
                                "object": {
                                  "type": "Identifier",
                                  "name": "dispatch"
                                },
                                "property": {
                                  "type": "Identifier",
                                  "name": "load"
                                }
                              },
                              "property": {
                                "type": "Identifier",
                                "name": "call"
                              }
                            },
                            "arguments": [
                              {
                                "type": "Identifier",
                                "name": "xhr"
                              },
                              {
                                "type": "Identifier",
                                "name": "result"
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
                                "type": "MemberExpression",
                                "computed": false,
                                "object": {
                                  "type": "Identifier",
                                  "name": "dispatch"
                                },
                                "property": {
                                  "type": "Identifier",
                                  "name": "error"
                                }
                              },
                              "property": {
                                "type": "Identifier",
                                "name": "call"
                              }
                            },
                            "arguments": [
                              {
                                "type": "Identifier",
                                "name": "xhr"
                              },
                              {
                                "type": "Identifier",
                                "name": "request"
                              }
                            ]
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
                    "name": "request"
                  },
                  "property": {
                    "type": "Identifier",
                    "name": "onprogress"
                  }
                },
                "right": {
                  "type": "FunctionExpression",
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "name": "event"
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
                              "name": "o"
                            },
                            "init": {
                              "type": "MemberExpression",
                              "computed": false,
                              "object": {
                                "type": "Identifier",
                                "name": "d3"
                              },
                              "property": {
                                "type": "Identifier",
                                "name": "event"
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
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "name": "d3"
                            },
                            "property": {
                              "type": "Identifier",
                              "name": "event"
                            }
                          },
                          "right": {
                            "type": "Identifier",
                            "name": "event"
                          }
                        }
                      },
                      {
                        "type": "TryStatement",
                        "block": {
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
                                    "type": "MemberExpression",
                                    "computed": false,
                                    "object": {
                                      "type": "Identifier",
                                      "name": "dispatch"
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "name": "progress"
                                    }
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "name": "call"
                                  }
                                },
                                "arguments": [
                                  {
                                    "type": "Identifier",
                                    "name": "xhr"
                                  },
                                  {
                                    "type": "Identifier",
                                    "name": "request"
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
                                    "name": "d3"
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "name": "event"
                                  }
                                },
                                "right": {
                                  "type": "Identifier",
                                  "name": "o"
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
                    "name": "xhr"
                  },
                  "property": {
                    "type": "Identifier",
                    "name": "header"
                  }
                },
                "right": {
                  "type": "FunctionExpression",
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "name": "name"
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
                          "type": "AssignmentExpression",
                          "operator": "=",
                          "left": {
                            "type": "Identifier",
                            "name": "name"
                          },
                          "right": {
                            "type": "CallExpression",
                            "callee": {
                              "type": "MemberExpression",
                              "computed": false,
                              "object": {
                                "type": "BinaryExpression",
                                "operator": "+",
                                "left": {
                                  "type": "Identifier",
                                  "name": "name"
                                },
                                "right": {
                                  "type": "Literal",
                                  "value": "",
                                  "raw": "\"\""
                                }
                              },
                              "property": {
                                "type": "Identifier",
                                "name": "toLowerCase"
                              }
                            },
                            "arguments": []
                          }
                        }
                      },
                      {
                        "type": "IfStatement",
                        "test": {
                          "type": "BinaryExpression",
                          "operator": "<",
                          "left": {
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "name": "arguments"
                            },
                            "property": {
                              "type": "Identifier",
                              "name": "length"
                            }
                          },
                          "right": {
                            "type": "Literal",
                            "value": 2,
                            "raw": "2"
                          }
                        },
                        "consequent": {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "MemberExpression",
                            "computed": true,
                            "object": {
                              "type": "Identifier",
                              "name": "headers"
                            },
                            "property": {
                              "type": "Identifier",
                              "name": "name"
                            }
                          }
                        },
                        "alternate": null
                      },
                      {
                        "type": "IfStatement",
                        "test": {
                          "type": "BinaryExpression",
                          "operator": "==",
                          "left": {
                            "type": "Identifier",
                            "name": "value"
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
                            "type": "UnaryExpression",
                            "operator": "delete",
                            "argument": {
                              "type": "MemberExpression",
                              "computed": true,
                              "object": {
                                "type": "Identifier",
                                "name": "headers"
                              },
                              "property": {
                                "type": "Identifier",
                                "name": "name"
                              }
                            },
                            "prefix": true
                          }
                        },
                        "alternate": {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "AssignmentExpression",
                            "operator": "=",
                            "left": {
                              "type": "MemberExpression",
                              "computed": true,
                              "object": {
                                "type": "Identifier",
                                "name": "headers"
                              },
                              "property": {
                                "type": "Identifier",
                                "name": "name"
                              }
                            },
                            "right": {
                              "type": "BinaryExpression",
                              "operator": "+",
                              "left": {
                                "type": "Identifier",
                                "name": "value"
                              },
                              "right": {
                                "type": "Literal",
                                "value": "",
                                "raw": "\"\""
                              }
                            }
                          }
                        }
                      },
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "Identifier",
                          "name": "xhr"
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
                    "name": "xhr"
                  },
                  "property": {
                    "type": "Identifier",
                    "name": "mimeType"
                  }
                },
                "right": {
                  "type": "FunctionExpression",
                  "id": null,
                  "params": [
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
                        "type": "IfStatement",
                        "test": {
                          "type": "UnaryExpression",
                          "operator": "!",
                          "argument": {
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "name": "arguments"
                            },
                            "property": {
                              "type": "Identifier",
                              "name": "length"
                            }
                          },
                          "prefix": true
                        },
                        "consequent": {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "Identifier",
                            "name": "mimeType"
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
                            "name": "mimeType"
                          },
                          "right": {
                            "type": "ConditionalExpression",
                            "test": {
                              "type": "BinaryExpression",
                              "operator": "==",
                              "left": {
                                "type": "Identifier",
                                "name": "value"
                              },
                              "right": {
                                "type": "Literal",
                                "value": null,
                                "raw": "null"
                              }
                            },
                            "consequent": {
                              "type": "Literal",
                              "value": null,
                              "raw": "null"
                            },
                            "alternate": {
                              "type": "BinaryExpression",
                              "operator": "+",
                              "left": {
                                "type": "Identifier",
                                "name": "value"
                              },
                              "right": {
                                "type": "Literal",
                                "value": "",
                                "raw": "\"\""
                              }
                            }
                          }
                        }
                      },
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "Identifier",
                          "name": "xhr"
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
                    "name": "xhr"
                  },
                  "property": {
                    "type": "Identifier",
                    "name": "responseType"
                  }
                },
                "right": {
                  "type": "FunctionExpression",
                  "id": null,
                  "params": [
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
                        "type": "IfStatement",
                        "test": {
                          "type": "UnaryExpression",
                          "operator": "!",
                          "argument": {
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "name": "arguments"
                            },
                            "property": {
                              "type": "Identifier",
                              "name": "length"
                            }
                          },
                          "prefix": true
                        },
                        "consequent": {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "Identifier",
                            "name": "responseType"
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
                            "name": "responseType"
                          },
                          "right": {
                            "type": "Identifier",
                            "name": "value"
                          }
                        }
                      },
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "Identifier",
                          "name": "xhr"
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
                    "name": "xhr"
                  },
                  "property": {
                    "type": "Identifier",
                    "name": "response"
                  }
                },
                "right": {
                  "type": "FunctionExpression",
                  "id": null,
                  "params": [
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
                          "type": "AssignmentExpression",
                          "operator": "=",
                          "left": {
                            "type": "Identifier",
                            "name": "response"
                          },
                          "right": {
                            "type": "Identifier",
                            "name": "value"
                          }
                        }
                      },
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "Identifier",
                          "name": "xhr"
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
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "ArrayExpression",
                    "elements": [
                      {
                        "type": "Literal",
                        "value": "get",
                        "raw": "\"get\""
                      },
                      {
                        "type": "Literal",
                        "value": "post",
                        "raw": "\"post\""
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
                        "name": "method"
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
                                "name": "xhr"
                              },
                              "property": {
                                "type": "Identifier",
                                "name": "method"
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
                                          "type": "MemberExpression",
                                          "computed": false,
                                          "object": {
                                            "type": "Identifier",
                                            "name": "xhr"
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "name": "send"
                                          }
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "name": "apply"
                                        }
                                      },
                                      "arguments": [
                                        {
                                          "type": "Identifier",
                                          "name": "xhr"
                                        },
                                        {
                                          "type": "CallExpression",
                                          "callee": {
                                            "type": "MemberExpression",
                                            "computed": false,
                                            "object": {
                                              "type": "ArrayExpression",
                                              "elements": [
                                                {
                                                  "type": "Identifier",
                                                  "name": "method"
                                                }
                                              ]
                                            },
                                            "property": {
                                              "type": "Identifier",
                                              "name": "concat"
                                            }
                                          },
                                          "arguments": [
                                            {
                                              "type": "CallExpression",
                                              "callee": {
                                                "type": "Identifier",
                                                "name": "d3_array"
                                              },
                                              "arguments": [
                                                {
                                                  "type": "Identifier",
                                                  "name": "arguments"
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
                    "name": "xhr"
                  },
                  "property": {
                    "type": "Identifier",
                    "name": "send"
                  }
                },
                "right": {
                  "type": "FunctionExpression",
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "name": "method"
                    },
                    {
                      "type": "Identifier",
                      "name": "data"
                    },
                    {
                      "type": "Identifier",
                      "name": "callback"
                    }
                  ],
                  "defaults": [],
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "IfStatement",
                        "test": {
                          "type": "LogicalExpression",
                          "operator": "&&",
                          "left": {
                            "type": "BinaryExpression",
                            "operator": "===",
                            "left": {
                              "type": "MemberExpression",
                              "computed": false,
                              "object": {
                                "type": "Identifier",
                                "name": "arguments"
                              },
                              "property": {
                                "type": "Identifier",
                                "name": "length"
                              }
                            },
                            "right": {
                              "type": "Literal",
                              "value": 2,
                              "raw": "2"
                            }
                          },
                          "right": {
                            "type": "BinaryExpression",
                            "operator": "===",
                            "left": {
                              "type": "UnaryExpression",
                              "operator": "typeof",
                              "argument": {
                                "type": "Identifier",
                                "name": "data"
                              },
                              "prefix": true
                            },
                            "right": {
                              "type": "Literal",
                              "value": "function",
                              "raw": "\"function\""
                            }
                          }
                        },
                        "consequent": {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "SequenceExpression",
                            "expressions": [
                              {
                                "type": "AssignmentExpression",
                                "operator": "=",
                                "left": {
                                  "type": "Identifier",
                                  "name": "callback"
                                },
                                "right": {
                                  "type": "Identifier",
                                  "name": "data"
                                }
                              },
                              {
                                "type": "AssignmentExpression",
                                "operator": "=",
                                "left": {
                                  "type": "Identifier",
                                  "name": "data"
                                },
                                "right": {
                                  "type": "Literal",
                                  "value": null,
                                  "raw": "null"
                                }
                              }
                            ]
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
                              "name": "request"
                            },
                            "property": {
                              "type": "Identifier",
                              "name": "open"
                            }
                          },
                          "arguments": [
                            {
                              "type": "Identifier",
                              "name": "method"
                            },
                            {
                              "type": "Identifier",
                              "name": "url"
                            },
                            {
                              "type": "Literal",
                              "value": true,
                              "raw": "true"
                            }
                          ]
                        }
                      },
                      {
                        "type": "IfStatement",
                        "test": {
                          "type": "LogicalExpression",
                          "operator": "&&",
                          "left": {
                            "type": "BinaryExpression",
                            "operator": "!=",
                            "left": {
                              "type": "Identifier",
                              "name": "mimeType"
                            },
                            "right": {
                              "type": "Literal",
                              "value": null,
                              "raw": "null"
                            }
                          },
                          "right": {
                            "type": "UnaryExpression",
                            "operator": "!",
                            "argument": {
                              "type": "BinaryExpression",
                              "operator": "in",
                              "left": {
                                "type": "Literal",
                                "value": "accept",
                                "raw": "\"accept\""
                              },
                              "right": {
                                "type": "Identifier",
                                "name": "headers"
                              }
                            },
                            "prefix": true
                          }
                        },
                        "consequent": {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "AssignmentExpression",
                            "operator": "=",
                            "left": {
                              "type": "MemberExpression",
                              "computed": true,
                              "object": {
                                "type": "Identifier",
                                "name": "headers"
                              },
                              "property": {
                                "type": "Literal",
                                "value": "accept",
                                "raw": "\"accept\""
                              }
                            },
                            "right": {
                              "type": "BinaryExpression",
                              "operator": "+",
                              "left": {
                                "type": "Identifier",
                                "name": "mimeType"
                              },
                              "right": {
                                "type": "Literal",
                                "value": ",*/*",
                                "raw": "\",*/*\""
                              }
                            }
                          }
                        },
                        "alternate": null
                      },
                      {
                        "type": "IfStatement",
                        "test": {
                          "type": "MemberExpression",
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "name": "request"
                          },
                          "property": {
                            "type": "Identifier",
                            "name": "setRequestHeader"
                          }
                        },
                        "consequent": {
                          "type": "ForInStatement",
                          "left": {
                            "type": "VariableDeclaration",
                            "declarations": [
                              {
                                "type": "VariableDeclarator",
                                "id": {
                                  "type": "Identifier",
                                  "name": "name"
                                },
                                "init": null
                              }
                            ],
                            "kind": "var"
                          },
                          "right": {
                            "type": "Identifier",
                            "name": "headers"
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
                                  "name": "request"
                                },
                                "property": {
                                  "type": "Identifier",
                                  "name": "setRequestHeader"
                                }
                              },
                              "arguments": [
                                {
                                  "type": "Identifier",
                                  "name": "name"
                                },
                                {
                                  "type": "MemberExpression",
                                  "computed": true,
                                  "object": {
                                    "type": "Identifier",
                                    "name": "headers"
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "name": "name"
                                  }
                                }
                              ]
                            }
                          },
                          "each": false
                        },
                        "alternate": null
                      },
                      {
                        "type": "IfStatement",
                        "test": {
                          "type": "LogicalExpression",
                          "operator": "&&",
                          "left": {
                            "type": "BinaryExpression",
                            "operator": "!=",
                            "left": {
                              "type": "Identifier",
                              "name": "mimeType"
                            },
                            "right": {
                              "type": "Literal",
                              "value": null,
                              "raw": "null"
                            }
                          },
                          "right": {
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "name": "request"
                            },
                            "property": {
                              "type": "Identifier",
                              "name": "overrideMimeType"
                            }
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
                                "name": "request"
                              },
                              "property": {
                                "type": "Identifier",
                                "name": "overrideMimeType"
                              }
                            },
                            "arguments": [
                              {
                                "type": "Identifier",
                                "name": "mimeType"
                              }
                            ]
                          }
                        },
                        "alternate": null
                      },
                      {
                        "type": "IfStatement",
                        "test": {
                          "type": "BinaryExpression",
                          "operator": "!=",
                          "left": {
                            "type": "Identifier",
                            "name": "responseType"
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
                              "type": "MemberExpression",
                              "computed": false,
                              "object": {
                                "type": "Identifier",
                                "name": "request"
                              },
                              "property": {
                                "type": "Identifier",
                                "name": "responseType"
                              }
                            },
                            "right": {
                              "type": "Identifier",
                              "name": "responseType"
                            }
                          }
                        },
                        "alternate": null
                      },
                      {
                        "type": "IfStatement",
                        "test": {
                          "type": "BinaryExpression",
                          "operator": "!=",
                          "left": {
                            "type": "Identifier",
                            "name": "callback"
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
                                    "name": "xhr"
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "name": "on"
                                  }
                                },
                                "arguments": [
                                  {
                                    "type": "Literal",
                                    "value": "error",
                                    "raw": "\"error\""
                                  },
                                  {
                                    "type": "Identifier",
                                    "name": "callback"
                                  }
                                ]
                              },
                              "property": {
                                "type": "Identifier",
                                "name": "on"
                              }
                            },
                            "arguments": [
                              {
                                "type": "Literal",
                                "value": "load",
                                "raw": "\"load\""
                              },
                              {
                                "type": "FunctionExpression",
                                "id": null,
                                "params": [
                                  {
                                    "type": "Identifier",
                                    "name": "request"
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
                                          "name": "callback"
                                        },
                                        "arguments": [
                                          {
                                            "type": "Literal",
                                            "value": null,
                                            "raw": "null"
                                          },
                                          {
                                            "type": "Identifier",
                                            "name": "request"
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
                              "type": "MemberExpression",
                              "computed": false,
                              "object": {
                                "type": "Identifier",
                                "name": "dispatch"
                              },
                              "property": {
                                "type": "Identifier",
                                "name": "beforesend"
                              }
                            },
                            "property": {
                              "type": "Identifier",
                              "name": "call"
                            }
                          },
                          "arguments": [
                            {
                              "type": "Identifier",
                              "name": "xhr"
                            },
                            {
                              "type": "Identifier",
                              "name": "request"
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
                              "name": "request"
                            },
                            "property": {
                              "type": "Identifier",
                              "name": "send"
                            }
                          },
                          "arguments": [
                            {
                              "type": "ConditionalExpression",
                              "test": {
                                "type": "BinaryExpression",
                                "operator": "==",
                                "left": {
                                  "type": "Identifier",
                                  "name": "data"
                                },
                                "right": {
                                  "type": "Literal",
                                  "value": null,
                                  "raw": "null"
                                }
                              },
                              "consequent": {
                                "type": "Literal",
                                "value": null,
                                "raw": "null"
                              },
                              "alternate": {
                                "type": "Identifier",
                                "name": "data"
                              }
                            }
                          ]
                        }
                      },
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "Identifier",
                          "name": "xhr"
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
                    "name": "xhr"
                  },
                  "property": {
                    "type": "Identifier",
                    "name": "abort"
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
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "name": "request"
                            },
                            "property": {
                              "type": "Identifier",
                              "name": "abort"
                            }
                          },
                          "arguments": []
                        }
                      },
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "Identifier",
                          "name": "xhr"
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
                    "name": "rebind"
                  }
                },
                "arguments": [
                  {
                    "type": "Identifier",
                    "name": "xhr"
                  },
                  {
                    "type": "Identifier",
                    "name": "dispatch"
                  },
                  {
                    "type": "Literal",
                    "value": "on",
                    "raw": "\"on\""
                  }
                ]
              }
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
                    "name": "callback"
                  },
                  "right": {
                    "type": "Literal",
                    "value": null,
                    "raw": "null"
                  }
                },
                "consequent": {
                  "type": "Identifier",
                  "name": "xhr"
                },
                "alternate": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "name": "xhr"
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
                        "type": "Identifier",
                        "name": "d3_xhr_fixCallback"
                      },
                      "arguments": [
                        {
                          "type": "Identifier",
                          "name": "callback"
                        }
                      ]
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
        "type": "EmptyStatement"
      },
      {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "name": "d3_xhr_fixCallback"
        },
        "params": [
          {
            "type": "Identifier",
            "name": "callback"
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
                  "type": "BinaryExpression",
                  "operator": "===",
                  "left": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "name": "callback"
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
                },
                "consequent": {
                  "type": "FunctionExpression",
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "name": "error"
                    },
                    {
                      "type": "Identifier",
                      "name": "request"
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
                            "name": "callback"
                          },
                          "arguments": [
                            {
                              "type": "ConditionalExpression",
                              "test": {
                                "type": "BinaryExpression",
                                "operator": "==",
                                "left": {
                                  "type": "Identifier",
                                  "name": "error"
                                },
                                "right": {
                                  "type": "Literal",
                                  "value": null,
                                  "raw": "null"
                                }
                              },
                              "consequent": {
                                "type": "Identifier",
                                "name": "request"
                              },
                              "alternate": {
                                "type": "Literal",
                                "value": null,
                                "raw": "null"
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
                "alternate": {
                  "type": "Identifier",
                  "name": "callback"
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
  "src": "d3.xhr = d3_xhrType(d3_identity);\nfunction d3_xhrType(response) {\n    return function (url, mimeType, callback) {\n        if (arguments.length === 2 && typeof mimeType === 'function')\n            callback = mimeType, mimeType = null;\n        return d3_xhr(url, mimeType, response, callback);\n    };\n}\nfunction d3_xhr(url, mimeType, response, callback) {\n    var xhr = {}, dispatch = d3.dispatch('beforesend', 'progress', 'load', 'error'), headers = {}, request = new XMLHttpRequest(), responseType = null;\n    if (d3_window.XDomainRequest && !('withCredentials' in request) && /^(http(s)?:)?\\/\\//.test(url))\n        request = new XDomainRequest();\n    'onload' in request ? request.onload = request.onerror = respond : request.onreadystatechange = function () {\n        request.readyState > 3 && respond();\n    };\n    function respond() {\n        var status = request.status, result;\n        if (!status && request.responseText || status >= 200 && status < 300 || status === 304) {\n            try {\n                result = response.call(xhr, request);\n            } catch (e) {\n                dispatch.error.call(xhr, e);\n                return;\n            }\n            dispatch.load.call(xhr, result);\n        } else {\n            dispatch.error.call(xhr, request);\n        }\n    }\n    request.onprogress = function (event) {\n        var o = d3.event;\n        d3.event = event;\n        try {\n            dispatch.progress.call(xhr, request);\n        } finally {\n            d3.event = o;\n        }\n    };\n    xhr.header = function (name, value) {\n        name = (name + '').toLowerCase();\n        if (arguments.length < 2)\n            return headers[name];\n        if (value == null)\n            delete headers[name];\n        else\n            headers[name] = value + '';\n        return xhr;\n    };\n    xhr.mimeType = function (value) {\n        if (!arguments.length)\n            return mimeType;\n        mimeType = value == null ? null : value + '';\n        return xhr;\n    };\n    xhr.responseType = function (value) {\n        if (!arguments.length)\n            return responseType;\n        responseType = value;\n        return xhr;\n    };\n    xhr.response = function (value) {\n        response = value;\n        return xhr;\n    };\n    [\n        'get',\n        'post'\n    ].forEach(function (method) {\n        xhr[method] = function () {\n            return xhr.send.apply(xhr, [method].concat(d3_array(arguments)));\n        };\n    });\n    xhr.send = function (method, data, callback) {\n        if (arguments.length === 2 && typeof data === 'function')\n            callback = data, data = null;\n        request.open(method, url, true);\n        if (mimeType != null && !('accept' in headers))\n            headers['accept'] = mimeType + ',*/*';\n        if (request.setRequestHeader)\n            for (var name in headers)\n                request.setRequestHeader(name, headers[name]);\n        if (mimeType != null && request.overrideMimeType)\n            request.overrideMimeType(mimeType);\n        if (responseType != null)\n            request.responseType = responseType;\n        if (callback != null)\n            xhr.on('error', callback).on('load', function (request) {\n                callback(null, request);\n            });\n        dispatch.beforesend.call(xhr, request);\n        request.send(data == null ? null : data);\n        return xhr;\n    };\n    xhr.abort = function () {\n        request.abort();\n        return xhr;\n    };\n    d3.rebind(xhr, dispatch, 'on');\n    return callback == null ? xhr : xhr.get(d3_xhr_fixCallback(callback));\n}\n;\nfunction d3_xhr_fixCallback(callback) {\n    return callback.length === 1 ? function (error, request) {\n        callback(error == null ? request : null);\n    } : callback;\n}"
}