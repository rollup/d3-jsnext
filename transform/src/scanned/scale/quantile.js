{
  "filepath": "/scale/quantile.js",
  "shared": [],
  "dependencies": [
    "d3.quantile",
    "d3.bisect",
    "d3_number",
    "d3_ascending"
  ],
  "helpers": [
    "d3_scale_quantile"
  ],
  "exports": [
    "d3.scale.quantile"
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
              "name": "quantile"
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
                      "name": "d3_scale_quantile"
                    },
                    "arguments": [
                      {
                        "type": "ArrayExpression",
                        "elements": []
                      },
                      {
                        "type": "ArrayExpression",
                        "elements": []
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
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "name": "d3_scale_quantile"
        },
        "params": [
          {
            "type": "Identifier",
            "name": "domain"
          },
          {
            "type": "Identifier",
            "name": "range"
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
                    "name": "thresholds"
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
                "name": "rescale"
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
                          "name": "k"
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
                          "name": "q"
                        },
                        "init": {
                          "type": "MemberExpression",
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "name": "range"
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
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "name": "thresholds"
                      },
                      "right": {
                        "type": "ArrayExpression",
                        "elements": []
                      }
                    }
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
                          "name": "k"
                        },
                        "prefix": true
                      },
                      "right": {
                        "type": "Identifier",
                        "name": "q"
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
                            "type": "Identifier",
                            "name": "thresholds"
                          },
                          "property": {
                            "type": "BinaryExpression",
                            "operator": "-",
                            "left": {
                              "type": "Identifier",
                              "name": "k"
                            },
                            "right": {
                              "type": "Literal",
                              "value": 1,
                              "raw": "1"
                            }
                          }
                        },
                        "right": {
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
                              "name": "quantile"
                            }
                          },
                          "arguments": [
                            {
                              "type": "Identifier",
                              "name": "domain"
                            },
                            {
                              "type": "BinaryExpression",
                              "operator": "/",
                              "left": {
                                "type": "Identifier",
                                "name": "k"
                              },
                              "right": {
                                "type": "Identifier",
                                "name": "q"
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
                      "type": "Identifier",
                      "name": "scale"
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
                "name": "scale"
              },
              "params": [
                {
                  "type": "Identifier",
                  "name": "x"
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
                        "type": "CallExpression",
                        "callee": {
                          "type": "Identifier",
                          "name": "isNaN"
                        },
                        "arguments": [
                          {
                            "type": "AssignmentExpression",
                            "operator": "=",
                            "left": {
                              "type": "Identifier",
                              "name": "x"
                            },
                            "right": {
                              "type": "UnaryExpression",
                              "operator": "+",
                              "argument": {
                                "type": "Identifier",
                                "name": "x"
                              },
                              "prefix": true
                            }
                          }
                        ]
                      },
                      "prefix": true
                    },
                    "consequent": {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "MemberExpression",
                        "computed": true,
                        "object": {
                          "type": "Identifier",
                          "name": "range"
                        },
                        "property": {
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
                              "name": "bisect"
                            }
                          },
                          "arguments": [
                            {
                              "type": "Identifier",
                              "name": "thresholds"
                            },
                            {
                              "type": "Identifier",
                              "name": "x"
                            }
                          ]
                        }
                      }
                    },
                    "alternate": null
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
                    "name": "scale"
                  },
                  "property": {
                    "type": "Identifier",
                    "name": "domain"
                  }
                },
                "right": {
                  "type": "FunctionExpression",
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "name": "x"
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
                            "name": "domain"
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
                            "name": "domain"
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
                                    "name": "x"
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "name": "filter"
                                  }
                                },
                                "arguments": [
                                  {
                                    "type": "Identifier",
                                    "name": "d3_number"
                                  }
                                ]
                              },
                              "property": {
                                "type": "Identifier",
                                "name": "sort"
                              }
                            },
                            "arguments": [
                              {
                                "type": "Identifier",
                                "name": "d3_ascending"
                              }
                            ]
                          }
                        }
                      },
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "Identifier",
                            "name": "rescale"
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
                    "name": "scale"
                  },
                  "property": {
                    "type": "Identifier",
                    "name": "range"
                  }
                },
                "right": {
                  "type": "FunctionExpression",
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "name": "x"
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
                            "name": "range"
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
                            "name": "range"
                          },
                          "right": {
                            "type": "Identifier",
                            "name": "x"
                          }
                        }
                      },
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "Identifier",
                            "name": "rescale"
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
                    "name": "scale"
                  },
                  "property": {
                    "type": "Identifier",
                    "name": "quantiles"
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
                          "name": "thresholds"
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
                    "name": "scale"
                  },
                  "property": {
                    "type": "Identifier",
                    "name": "invertExtent"
                  }
                },
                "right": {
                  "type": "FunctionExpression",
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "name": "y"
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
                            "name": "y"
                          },
                          "right": {
                            "type": "CallExpression",
                            "callee": {
                              "type": "MemberExpression",
                              "computed": false,
                              "object": {
                                "type": "Identifier",
                                "name": "range"
                              },
                              "property": {
                                "type": "Identifier",
                                "name": "indexOf"
                              }
                            },
                            "arguments": [
                              {
                                "type": "Identifier",
                                "name": "y"
                              }
                            ]
                          }
                        }
                      },
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "ConditionalExpression",
                          "test": {
                            "type": "BinaryExpression",
                            "operator": "<",
                            "left": {
                              "type": "Identifier",
                              "name": "y"
                            },
                            "right": {
                              "type": "Literal",
                              "value": 0,
                              "raw": "0"
                            }
                          },
                          "consequent": {
                            "type": "ArrayExpression",
                            "elements": [
                              {
                                "type": "Identifier",
                                "name": "NaN"
                              },
                              {
                                "type": "Identifier",
                                "name": "NaN"
                              }
                            ]
                          },
                          "alternate": {
                            "type": "ArrayExpression",
                            "elements": [
                              {
                                "type": "ConditionalExpression",
                                "test": {
                                  "type": "BinaryExpression",
                                  "operator": ">",
                                  "left": {
                                    "type": "Identifier",
                                    "name": "y"
                                  },
                                  "right": {
                                    "type": "Literal",
                                    "value": 0,
                                    "raw": "0"
                                  }
                                },
                                "consequent": {
                                  "type": "MemberExpression",
                                  "computed": true,
                                  "object": {
                                    "type": "Identifier",
                                    "name": "thresholds"
                                  },
                                  "property": {
                                    "type": "BinaryExpression",
                                    "operator": "-",
                                    "left": {
                                      "type": "Identifier",
                                      "name": "y"
                                    },
                                    "right": {
                                      "type": "Literal",
                                      "value": 1,
                                      "raw": "1"
                                    }
                                  }
                                },
                                "alternate": {
                                  "type": "MemberExpression",
                                  "computed": true,
                                  "object": {
                                    "type": "Identifier",
                                    "name": "domain"
                                  },
                                  "property": {
                                    "type": "Literal",
                                    "value": 0,
                                    "raw": "0"
                                  }
                                }
                              },
                              {
                                "type": "ConditionalExpression",
                                "test": {
                                  "type": "BinaryExpression",
                                  "operator": "<",
                                  "left": {
                                    "type": "Identifier",
                                    "name": "y"
                                  },
                                  "right": {
                                    "type": "MemberExpression",
                                    "computed": false,
                                    "object": {
                                      "type": "Identifier",
                                      "name": "thresholds"
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "name": "length"
                                    }
                                  }
                                },
                                "consequent": {
                                  "type": "MemberExpression",
                                  "computed": true,
                                  "object": {
                                    "type": "Identifier",
                                    "name": "thresholds"
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "name": "y"
                                  }
                                },
                                "alternate": {
                                  "type": "MemberExpression",
                                  "computed": true,
                                  "object": {
                                    "type": "Identifier",
                                    "name": "domain"
                                  },
                                  "property": {
                                    "type": "BinaryExpression",
                                    "operator": "-",
                                    "left": {
                                      "type": "MemberExpression",
                                      "computed": false,
                                      "object": {
                                        "type": "Identifier",
                                        "name": "domain"
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
                                }
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
                    "name": "scale"
                  },
                  "property": {
                    "type": "Identifier",
                    "name": "copy"
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
                            "name": "d3_scale_quantile"
                          },
                          "arguments": [
                            {
                              "type": "Identifier",
                              "name": "domain"
                            },
                            {
                              "type": "Identifier",
                              "name": "range"
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
              "type": "ReturnStatement",
              "argument": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "name": "rescale"
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
  "src": "d3.scale.quantile = function () {\n    return d3_scale_quantile([], []);\n};\nfunction d3_scale_quantile(domain, range) {\n    var thresholds;\n    function rescale() {\n        var k = 0, q = range.length;\n        thresholds = [];\n        while (++k < q)\n            thresholds[k - 1] = d3.quantile(domain, k / q);\n        return scale;\n    }\n    function scale(x) {\n        if (!isNaN(x = +x))\n            return range[d3.bisect(thresholds, x)];\n    }\n    scale.domain = function (x) {\n        if (!arguments.length)\n            return domain;\n        domain = x.filter(d3_number).sort(d3_ascending);\n        return rescale();\n    };\n    scale.range = function (x) {\n        if (!arguments.length)\n            return range;\n        range = x;\n        return rescale();\n    };\n    scale.quantiles = function () {\n        return thresholds;\n    };\n    scale.invertExtent = function (y) {\n        y = range.indexOf(y);\n        return y < 0 ? [\n            NaN,\n            NaN\n        ] : [\n            y > 0 ? thresholds[y - 1] : domain[0],\n            y < thresholds.length ? thresholds[y] : domain[domain.length - 1]\n        ];\n    };\n    scale.copy = function () {\n        return d3_scale_quantile(domain, range);\n    };\n    return rescale();\n}"
}