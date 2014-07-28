{
  "filepath": "/geo/conic-equidistant.js",
  "shared": [],
  "dependencies": [
    "abs",
    "d3_geo_equirectangular",
    "d3_sgn",
    "d3_geo_conic"
  ],
  "helpers": [
    "d3_geo_conicEquidistant"
  ],
  "exports": [
    "d3.geo.conicEquidistant"
  ],
  "ast": {
    "type": "Program",
    "body": [
      {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "name": "d3_geo_conicEquidistant"
        },
        "params": [
          {
            "type": "Identifier",
            "name": "φ0"
          },
          {
            "type": "Identifier",
            "name": "φ1"
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
                    "name": "cosφ0"
                  },
                  "init": {
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
                        "name": "cos"
                      }
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "name": "φ0"
                      }
                    ]
                  }
                },
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "name": "n"
                  },
                  "init": {
                    "type": "ConditionalExpression",
                    "test": {
                      "type": "BinaryExpression",
                      "operator": "===",
                      "left": {
                        "type": "Identifier",
                        "name": "φ0"
                      },
                      "right": {
                        "type": "Identifier",
                        "name": "φ1"
                      }
                    },
                    "consequent": {
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
                          "name": "sin"
                        }
                      },
                      "arguments": [
                        {
                          "type": "Identifier",
                          "name": "φ0"
                        }
                      ]
                    },
                    "alternate": {
                      "type": "BinaryExpression",
                      "operator": "/",
                      "left": {
                        "type": "BinaryExpression",
                        "operator": "-",
                        "left": {
                          "type": "Identifier",
                          "name": "cosφ0"
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
                              "name": "cos"
                            }
                          },
                          "arguments": [
                            {
                              "type": "Identifier",
                              "name": "φ1"
                            }
                          ]
                        }
                      },
                      "right": {
                        "type": "BinaryExpression",
                        "operator": "-",
                        "left": {
                          "type": "Identifier",
                          "name": "φ1"
                        },
                        "right": {
                          "type": "Identifier",
                          "name": "φ0"
                        }
                      }
                    }
                  }
                },
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "name": "G"
                  },
                  "init": {
                    "type": "BinaryExpression",
                    "operator": "+",
                    "left": {
                      "type": "BinaryExpression",
                      "operator": "/",
                      "left": {
                        "type": "Identifier",
                        "name": "cosφ0"
                      },
                      "right": {
                        "type": "Identifier",
                        "name": "n"
                      }
                    },
                    "right": {
                      "type": "Identifier",
                      "name": "φ0"
                    }
                  }
                }
              ],
              "kind": "var"
            },
            {
              "type": "IfStatement",
              "test": {
                "type": "BinaryExpression",
                "operator": "<",
                "left": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "name": "abs"
                  },
                  "arguments": [
                    {
                      "type": "Identifier",
                      "name": "n"
                    }
                  ]
                },
                "right": {
                  "type": "Identifier",
                  "name": "ε"
                }
              },
              "consequent": {
                "type": "ReturnStatement",
                "argument": {
                  "type": "Identifier",
                  "name": "d3_geo_equirectangular"
                }
              },
              "alternate": null
            },
            {
              "type": "FunctionDeclaration",
              "id": {
                "type": "Identifier",
                "name": "forward"
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
                    "type": "VariableDeclaration",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "name": "ρ"
                        },
                        "init": {
                          "type": "BinaryExpression",
                          "operator": "-",
                          "left": {
                            "type": "Identifier",
                            "name": "G"
                          },
                          "right": {
                            "type": "Identifier",
                            "name": "φ"
                          }
                        }
                      }
                    ],
                    "kind": "var"
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "ArrayExpression",
                      "elements": [
                        {
                          "type": "BinaryExpression",
                          "operator": "*",
                          "left": {
                            "type": "Identifier",
                            "name": "ρ"
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
                                "name": "sin"
                              }
                            },
                            "arguments": [
                              {
                                "type": "BinaryExpression",
                                "operator": "*",
                                "left": {
                                  "type": "Identifier",
                                  "name": "n"
                                },
                                "right": {
                                  "type": "Identifier",
                                  "name": "λ"
                                }
                              }
                            ]
                          }
                        },
                        {
                          "type": "BinaryExpression",
                          "operator": "-",
                          "left": {
                            "type": "Identifier",
                            "name": "G"
                          },
                          "right": {
                            "type": "BinaryExpression",
                            "operator": "*",
                            "left": {
                              "type": "Identifier",
                              "name": "ρ"
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
                                  "name": "cos"
                                }
                              },
                              "arguments": [
                                {
                                  "type": "BinaryExpression",
                                  "operator": "*",
                                  "left": {
                                    "type": "Identifier",
                                    "name": "n"
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "name": "λ"
                                  }
                                }
                              ]
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
                    "name": "forward"
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
                        "type": "VariableDeclaration",
                        "declarations": [
                          {
                            "type": "VariableDeclarator",
                            "id": {
                              "type": "Identifier",
                              "name": "ρ0_y"
                            },
                            "init": {
                              "type": "BinaryExpression",
                              "operator": "-",
                              "left": {
                                "type": "Identifier",
                                "name": "G"
                              },
                              "right": {
                                "type": "Identifier",
                                "name": "y"
                              }
                            }
                          }
                        ],
                        "kind": "var"
                      },
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "ArrayExpression",
                          "elements": [
                            {
                              "type": "BinaryExpression",
                              "operator": "/",
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
                                    "name": "atan2"
                                  }
                                },
                                "arguments": [
                                  {
                                    "type": "Identifier",
                                    "name": "x"
                                  },
                                  {
                                    "type": "Identifier",
                                    "name": "ρ0_y"
                                  }
                                ]
                              },
                              "right": {
                                "type": "Identifier",
                                "name": "n"
                              }
                            },
                            {
                              "type": "BinaryExpression",
                              "operator": "-",
                              "left": {
                                "type": "Identifier",
                                "name": "G"
                              },
                              "right": {
                                "type": "BinaryExpression",
                                "operator": "*",
                                "left": {
                                  "type": "CallExpression",
                                  "callee": {
                                    "type": "Identifier",
                                    "name": "d3_sgn"
                                  },
                                  "arguments": [
                                    {
                                      "type": "Identifier",
                                      "name": "n"
                                    }
                                  ]
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
                                      "name": "sqrt"
                                    }
                                  },
                                  "arguments": [
                                    {
                                      "type": "BinaryExpression",
                                      "operator": "+",
                                      "left": {
                                        "type": "BinaryExpression",
                                        "operator": "*",
                                        "left": {
                                          "type": "Identifier",
                                          "name": "x"
                                        },
                                        "right": {
                                          "type": "Identifier",
                                          "name": "x"
                                        }
                                      },
                                      "right": {
                                        "type": "BinaryExpression",
                                        "operator": "*",
                                        "left": {
                                          "type": "Identifier",
                                          "name": "ρ0_y"
                                        },
                                        "right": {
                                          "type": "Identifier",
                                          "name": "ρ0_y"
                                        }
                                      }
                                    }
                                  ]
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
              "type": "ReturnStatement",
              "argument": {
                "type": "Identifier",
                "name": "forward"
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
                  "name": "conicEquidistant"
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
                          "name": "d3_geo_conic"
                        },
                        "arguments": [
                          {
                            "type": "Identifier",
                            "name": "d3_geo_conicEquidistant"
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
            "name": "d3_geo_conicEquidistant"
          }
        }
      }
    ]
  },
  "src": "function d3_geo_conicEquidistant(φ0, φ1) {\n    var cosφ0 = Math.cos(φ0), n = φ0 === φ1 ? Math.sin(φ0) : (cosφ0 - Math.cos(φ1)) / (φ1 - φ0), G = cosφ0 / n + φ0;\n    if (abs(n) < ε)\n        return d3_geo_equirectangular;\n    function forward(λ, φ) {\n        var ρ = G - φ;\n        return [\n            ρ * Math.sin(n * λ),\n            G - ρ * Math.cos(n * λ)\n        ];\n    }\n    forward.invert = function (x, y) {\n        var ρ0_y = G - y;\n        return [\n            Math.atan2(x, ρ0_y) / n,\n            G - d3_sgn(n) * Math.sqrt(x * x + ρ0_y * ρ0_y)\n        ];\n    };\n    return forward;\n}\n(d3.geo.conicEquidistant = function () {\n    return d3_geo_conic(d3_geo_conicEquidistant);\n}).raw = d3_geo_conicEquidistant;"
}