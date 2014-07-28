{
  "filepath": "/geo/mercator.js",
  "shared": [],
  "dependencies": [
    "d3_geo_projection"
  ],
  "helpers": [
    "d3_geo_mercator",
    "d3_geo_mercatorProjection"
  ],
  "exports": [
    "d3.geo.mercator"
  ],
  "ast": {
    "type": "Program",
    "body": [
      {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "name": "d3_geo_mercator"
        },
        "params": [
          {
            "type": "Identifier",
            "name": "λ"
          },
          {
            "type": "Identifier",
            "name": "φ"
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
                    "type": "Identifier",
                    "name": "λ"
                  },
                  {
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
                        "name": "log"
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
                            "name": "Math"
                          },
                          "property": {
                            "type": "Identifier",
                            "name": "tan"
                          }
                        },
                        "arguments": [
                          {
                            "type": "BinaryExpression",
                            "operator": "+",
                            "left": {
                              "type": "BinaryExpression",
                              "operator": "/",
                              "left": {
                                "type": "Identifier",
                                "name": "π"
                              },
                              "right": {
                                "type": "Literal",
                                "value": 4,
                                "raw": "4"
                              }
                            },
                            "right": {
                              "type": "BinaryExpression",
                              "operator": "/",
                              "left": {
                                "type": "Identifier",
                                "name": "φ"
                              },
                              "right": {
                                "type": "Literal",
                                "value": 2,
                                "raw": "2"
                              }
                            }
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
              "name": "d3_geo_mercator"
            },
            "property": {
              "type": "Identifier",
              "name": "invert"
            }
          },
          "right": {
            "type": "FunctionExpression",
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "name": "x"
              },
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
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "ArrayExpression",
                    "elements": [
                      {
                        "type": "Identifier",
                        "name": "x"
                      },
                      {
                        "type": "BinaryExpression",
                        "operator": "-",
                        "left": {
                          "type": "BinaryExpression",
                          "operator": "*",
                          "left": {
                            "type": "Literal",
                            "value": 2,
                            "raw": "2"
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
                                "name": "atan"
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
                                    "name": "Math"
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "name": "exp"
                                  }
                                },
                                "arguments": [
                                  {
                                    "type": "Identifier",
                                    "name": "y"
                                  }
                                ]
                              }
                            ]
                          }
                        },
                        "right": {
                          "type": "Identifier",
                          "name": "halfπ"
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
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "name": "d3_geo_mercatorProjection"
        },
        "params": [
          {
            "type": "Identifier",
            "name": "project"
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
                    "name": "m"
                  },
                  "init": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "name": "d3_geo_projection"
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "name": "project"
                      }
                    ]
                  }
                },
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "name": "scale"
                  },
                  "init": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "name": "m"
                    },
                    "property": {
                      "type": "Identifier",
                      "name": "scale"
                    }
                  }
                },
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "name": "translate"
                  },
                  "init": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "name": "m"
                    },
                    "property": {
                      "type": "Identifier",
                      "name": "translate"
                    }
                  }
                },
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "name": "clipExtent"
                  },
                  "init": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "name": "m"
                    },
                    "property": {
                      "type": "Identifier",
                      "name": "clipExtent"
                    }
                  }
                },
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "name": "clipAuto"
                  },
                  "init": null
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
                    "name": "m"
                  },
                  "property": {
                    "type": "Identifier",
                    "name": "scale"
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
                              "name": "v"
                            },
                            "init": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "MemberExpression",
                                "computed": false,
                                "object": {
                                  "type": "Identifier",
                                  "name": "scale"
                                },
                                "property": {
                                  "type": "Identifier",
                                  "name": "apply"
                                }
                              },
                              "arguments": [
                                {
                                  "type": "Identifier",
                                  "name": "m"
                                },
                                {
                                  "type": "Identifier",
                                  "name": "arguments"
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
                            "operator": "===",
                            "left": {
                              "type": "Identifier",
                              "name": "v"
                            },
                            "right": {
                              "type": "Identifier",
                              "name": "m"
                            }
                          },
                          "consequent": {
                            "type": "ConditionalExpression",
                            "test": {
                              "type": "Identifier",
                              "name": "clipAuto"
                            },
                            "consequent": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "MemberExpression",
                                "computed": false,
                                "object": {
                                  "type": "Identifier",
                                  "name": "m"
                                },
                                "property": {
                                  "type": "Identifier",
                                  "name": "clipExtent"
                                }
                              },
                              "arguments": [
                                {
                                  "type": "Literal",
                                  "value": null,
                                  "raw": "null"
                                }
                              ]
                            },
                            "alternate": {
                              "type": "Identifier",
                              "name": "m"
                            }
                          },
                          "alternate": {
                            "type": "Identifier",
                            "name": "v"
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
                    "name": "m"
                  },
                  "property": {
                    "type": "Identifier",
                    "name": "translate"
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
                              "name": "v"
                            },
                            "init": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "MemberExpression",
                                "computed": false,
                                "object": {
                                  "type": "Identifier",
                                  "name": "translate"
                                },
                                "property": {
                                  "type": "Identifier",
                                  "name": "apply"
                                }
                              },
                              "arguments": [
                                {
                                  "type": "Identifier",
                                  "name": "m"
                                },
                                {
                                  "type": "Identifier",
                                  "name": "arguments"
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
                            "operator": "===",
                            "left": {
                              "type": "Identifier",
                              "name": "v"
                            },
                            "right": {
                              "type": "Identifier",
                              "name": "m"
                            }
                          },
                          "consequent": {
                            "type": "ConditionalExpression",
                            "test": {
                              "type": "Identifier",
                              "name": "clipAuto"
                            },
                            "consequent": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "MemberExpression",
                                "computed": false,
                                "object": {
                                  "type": "Identifier",
                                  "name": "m"
                                },
                                "property": {
                                  "type": "Identifier",
                                  "name": "clipExtent"
                                }
                              },
                              "arguments": [
                                {
                                  "type": "Literal",
                                  "value": null,
                                  "raw": "null"
                                }
                              ]
                            },
                            "alternate": {
                              "type": "Identifier",
                              "name": "m"
                            }
                          },
                          "alternate": {
                            "type": "Identifier",
                            "name": "v"
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
                    "name": "m"
                  },
                  "property": {
                    "type": "Identifier",
                    "name": "clipExtent"
                  }
                },
                "right": {
                  "type": "FunctionExpression",
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "name": "_"
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
                              "name": "v"
                            },
                            "init": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "MemberExpression",
                                "computed": false,
                                "object": {
                                  "type": "Identifier",
                                  "name": "clipExtent"
                                },
                                "property": {
                                  "type": "Identifier",
                                  "name": "apply"
                                }
                              },
                              "arguments": [
                                {
                                  "type": "Identifier",
                                  "name": "m"
                                },
                                {
                                  "type": "Identifier",
                                  "name": "arguments"
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
                          "operator": "===",
                          "left": {
                            "type": "Identifier",
                            "name": "v"
                          },
                          "right": {
                            "type": "Identifier",
                            "name": "m"
                          }
                        },
                        "consequent": {
                          "type": "BlockStatement",
                          "body": [
                            {
                              "type": "IfStatement",
                              "test": {
                                "type": "AssignmentExpression",
                                "operator": "=",
                                "left": {
                                  "type": "Identifier",
                                  "name": "clipAuto"
                                },
                                "right": {
                                  "type": "BinaryExpression",
                                  "operator": "==",
                                  "left": {
                                    "type": "Identifier",
                                    "name": "_"
                                  },
                                  "right": {
                                    "type": "Literal",
                                    "value": null,
                                    "raw": "null"
                                  }
                                }
                              },
                              "consequent": {
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
                                          "type": "BinaryExpression",
                                          "operator": "*",
                                          "left": {
                                            "type": "Identifier",
                                            "name": "π"
                                          },
                                          "right": {
                                            "type": "CallExpression",
                                            "callee": {
                                              "type": "Identifier",
                                              "name": "scale"
                                            },
                                            "arguments": []
                                          }
                                        }
                                      },
                                      {
                                        "type": "VariableDeclarator",
                                        "id": {
                                          "type": "Identifier",
                                          "name": "t"
                                        },
                                        "init": {
                                          "type": "CallExpression",
                                          "callee": {
                                            "type": "Identifier",
                                            "name": "translate"
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
                                      "type": "CallExpression",
                                      "callee": {
                                        "type": "Identifier",
                                        "name": "clipExtent"
                                      },
                                      "arguments": [
                                        {
                                          "type": "ArrayExpression",
                                          "elements": [
                                            {
                                              "type": "ArrayExpression",
                                              "elements": [
                                                {
                                                  "type": "BinaryExpression",
                                                  "operator": "-",
                                                  "left": {
                                                    "type": "MemberExpression",
                                                    "computed": true,
                                                    "object": {
                                                      "type": "Identifier",
                                                      "name": "t"
                                                    },
                                                    "property": {
                                                      "type": "Literal",
                                                      "value": 0,
                                                      "raw": "0"
                                                    }
                                                  },
                                                  "right": {
                                                    "type": "Identifier",
                                                    "name": "k"
                                                  }
                                                },
                                                {
                                                  "type": "BinaryExpression",
                                                  "operator": "-",
                                                  "left": {
                                                    "type": "MemberExpression",
                                                    "computed": true,
                                                    "object": {
                                                      "type": "Identifier",
                                                      "name": "t"
                                                    },
                                                    "property": {
                                                      "type": "Literal",
                                                      "value": 1,
                                                      "raw": "1"
                                                    }
                                                  },
                                                  "right": {
                                                    "type": "Identifier",
                                                    "name": "k"
                                                  }
                                                }
                                              ]
                                            },
                                            {
                                              "type": "ArrayExpression",
                                              "elements": [
                                                {
                                                  "type": "BinaryExpression",
                                                  "operator": "+",
                                                  "left": {
                                                    "type": "MemberExpression",
                                                    "computed": true,
                                                    "object": {
                                                      "type": "Identifier",
                                                      "name": "t"
                                                    },
                                                    "property": {
                                                      "type": "Literal",
                                                      "value": 0,
                                                      "raw": "0"
                                                    }
                                                  },
                                                  "right": {
                                                    "type": "Identifier",
                                                    "name": "k"
                                                  }
                                                },
                                                {
                                                  "type": "BinaryExpression",
                                                  "operator": "+",
                                                  "left": {
                                                    "type": "MemberExpression",
                                                    "computed": true,
                                                    "object": {
                                                      "type": "Identifier",
                                                      "name": "t"
                                                    },
                                                    "property": {
                                                      "type": "Literal",
                                                      "value": 1,
                                                      "raw": "1"
                                                    }
                                                  },
                                                  "right": {
                                                    "type": "Identifier",
                                                    "name": "k"
                                                  }
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
                              "alternate": null
                            }
                          ]
                        },
                        "alternate": {
                          "type": "IfStatement",
                          "test": {
                            "type": "Identifier",
                            "name": "clipAuto"
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
                                    "name": "v"
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
                          "alternate": null
                        }
                      },
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "Identifier",
                          "name": "v"
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
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "name": "m"
                  },
                  "property": {
                    "type": "Identifier",
                    "name": "clipExtent"
                  }
                },
                "arguments": [
                  {
                    "type": "Literal",
                    "value": null,
                    "raw": "null"
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
                    "name": "geo"
                  }
                },
                "property": {
                  "type": "Identifier",
                  "name": "mercator"
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
                          "name": "d3_geo_mercatorProjection"
                        },
                        "arguments": [
                          {
                            "type": "Identifier",
                            "name": "d3_geo_mercator"
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
            },
            "property": {
              "type": "Identifier",
              "name": "raw"
            }
          },
          "right": {
            "type": "Identifier",
            "name": "d3_geo_mercator"
          }
        }
      }
    ]
  },
  "src": "function d3_geo_mercator(λ, φ) {\n    return [\n        λ,\n        Math.log(Math.tan(π / 4 + φ / 2))\n    ];\n}\nd3_geo_mercator.invert = function (x, y) {\n    return [\n        x,\n        2 * Math.atan(Math.exp(y)) - halfπ\n    ];\n};\nfunction d3_geo_mercatorProjection(project) {\n    var m = d3_geo_projection(project), scale = m.scale, translate = m.translate, clipExtent = m.clipExtent, clipAuto;\n    m.scale = function () {\n        var v = scale.apply(m, arguments);\n        return v === m ? clipAuto ? m.clipExtent(null) : m : v;\n    };\n    m.translate = function () {\n        var v = translate.apply(m, arguments);\n        return v === m ? clipAuto ? m.clipExtent(null) : m : v;\n    };\n    m.clipExtent = function (_) {\n        var v = clipExtent.apply(m, arguments);\n        if (v === m) {\n            if (clipAuto = _ == null) {\n                var k = π * scale(), t = translate();\n                clipExtent([\n                    [\n                        t[0] - k,\n                        t[1] - k\n                    ],\n                    [\n                        t[0] + k,\n                        t[1] + k\n                    ]\n                ]);\n            }\n        } else if (clipAuto) {\n            v = null;\n        }\n        return v;\n    };\n    return m.clipExtent(null);\n}\n(d3.geo.mercator = function () {\n    return d3_geo_mercatorProjection(d3_geo_mercator);\n}).raw = d3_geo_mercator;"
}