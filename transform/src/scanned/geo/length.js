{
  "filepath": "/geo/length.js",
  "shared": [],
  "dependencies": [
    "d3.geo.stream",
    "d3_noop",
    "d3_radians",
    "abs"
  ],
  "helpers": [
    "d3_geo_lengthSum",
    "d3_geo_length",
    "d3_geo_lengthLineStart"
  ],
  "exports": [
    "d3.geo.length"
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
                "name": "geo"
              }
            },
            "property": {
              "type": "Identifier",
              "name": "length"
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
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "name": "d3_geo_lengthSum"
                    },
                    "right": {
                      "type": "Literal",
                      "value": 0,
                      "raw": "0"
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
                        "name": "stream"
                      }
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "name": "object"
                      },
                      {
                        "type": "Identifier",
                        "name": "d3_geo_length"
                      }
                    ]
                  }
                },
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Identifier",
                    "name": "d3_geo_lengthSum"
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
              "name": "d3_geo_lengthSum"
            },
            "init": null
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
              "name": "d3_geo_length"
            },
            "init": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "key": {
                    "type": "Identifier",
                    "name": "sphere"
                  },
                  "value": {
                    "type": "Identifier",
                    "name": "d3_noop"
                  },
                  "kind": "init"
                },
                {
                  "type": "Property",
                  "key": {
                    "type": "Identifier",
                    "name": "point"
                  },
                  "value": {
                    "type": "Identifier",
                    "name": "d3_noop"
                  },
                  "kind": "init"
                },
                {
                  "type": "Property",
                  "key": {
                    "type": "Identifier",
                    "name": "lineStart"
                  },
                  "value": {
                    "type": "Identifier",
                    "name": "d3_geo_lengthLineStart"
                  },
                  "kind": "init"
                },
                {
                  "type": "Property",
                  "key": {
                    "type": "Identifier",
                    "name": "lineEnd"
                  },
                  "value": {
                    "type": "Identifier",
                    "name": "d3_noop"
                  },
                  "kind": "init"
                },
                {
                  "type": "Property",
                  "key": {
                    "type": "Identifier",
                    "name": "polygonStart"
                  },
                  "value": {
                    "type": "Identifier",
                    "name": "d3_noop"
                  },
                  "kind": "init"
                },
                {
                  "type": "Property",
                  "key": {
                    "type": "Identifier",
                    "name": "polygonEnd"
                  },
                  "value": {
                    "type": "Identifier",
                    "name": "d3_noop"
                  },
                  "kind": "init"
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
          "name": "d3_geo_lengthLineStart"
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
                    "name": "λ0"
                  },
                  "init": null
                },
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "name": "sinφ0"
                  },
                  "init": null
                },
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "name": "cosφ0"
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
                    "name": "d3_geo_length"
                  },
                  "property": {
                    "type": "Identifier",
                    "name": "point"
                  }
                },
                "right": {
                  "type": "FunctionExpression",
                  "id": null,
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
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "SequenceExpression",
                          "expressions": [
                            {
                              "type": "AssignmentExpression",
                              "operator": "=",
                              "left": {
                                "type": "Identifier",
                                "name": "λ0"
                              },
                              "right": {
                                "type": "BinaryExpression",
                                "operator": "*",
                                "left": {
                                  "type": "Identifier",
                                  "name": "λ"
                                },
                                "right": {
                                  "type": "Identifier",
                                  "name": "d3_radians"
                                }
                              }
                            },
                            {
                              "type": "AssignmentExpression",
                              "operator": "=",
                              "left": {
                                "type": "Identifier",
                                "name": "sinφ0"
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
                                    "type": "AssignmentExpression",
                                    "operator": "*=",
                                    "left": {
                                      "type": "Identifier",
                                      "name": "φ"
                                    },
                                    "right": {
                                      "type": "Identifier",
                                      "name": "d3_radians"
                                    }
                                  }
                                ]
                              }
                            },
                            {
                              "type": "AssignmentExpression",
                              "operator": "=",
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
                                    "name": "φ"
                                  }
                                ]
                              }
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
                              "name": "d3_geo_length"
                            },
                            "property": {
                              "type": "Identifier",
                              "name": "point"
                            }
                          },
                          "right": {
                            "type": "Identifier",
                            "name": "nextPoint"
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
                    "name": "d3_geo_length"
                  },
                  "property": {
                    "type": "Identifier",
                    "name": "lineEnd"
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
                          "type": "AssignmentExpression",
                          "operator": "=",
                          "left": {
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "name": "d3_geo_length"
                            },
                            "property": {
                              "type": "Identifier",
                              "name": "point"
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
                                "name": "d3_geo_length"
                              },
                              "property": {
                                "type": "Identifier",
                                "name": "lineEnd"
                              }
                            },
                            "right": {
                              "type": "Identifier",
                              "name": "d3_noop"
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
              }
            },
            {
              "type": "FunctionDeclaration",
              "id": {
                "type": "Identifier",
                "name": "nextPoint"
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
                          "name": "sinφ"
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
                              "name": "sin"
                            }
                          },
                          "arguments": [
                            {
                              "type": "AssignmentExpression",
                              "operator": "*=",
                              "left": {
                                "type": "Identifier",
                                "name": "φ"
                              },
                              "right": {
                                "type": "Identifier",
                                "name": "d3_radians"
                              }
                            }
                          ]
                        }
                      },
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "name": "cosφ"
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
                              "name": "φ"
                            }
                          ]
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
                            "name": "abs"
                          },
                          "arguments": [
                            {
                              "type": "BinaryExpression",
                              "operator": "-",
                              "left": {
                                "type": "AssignmentExpression",
                                "operator": "*=",
                                "left": {
                                  "type": "Identifier",
                                  "name": "λ"
                                },
                                "right": {
                                  "type": "Identifier",
                                  "name": "d3_radians"
                                }
                              },
                              "right": {
                                "type": "Identifier",
                                "name": "λ0"
                              }
                            }
                          ]
                        }
                      },
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "name": "cosΔλ"
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
                              "name": "t"
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
                      "operator": "+=",
                      "left": {
                        "type": "Identifier",
                        "name": "d3_geo_lengthSum"
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
                            "name": "atan2"
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
                                    "type": "AssignmentExpression",
                                    "operator": "=",
                                    "left": {
                                      "type": "Identifier",
                                      "name": "t"
                                    },
                                    "right": {
                                      "type": "BinaryExpression",
                                      "operator": "*",
                                      "left": {
                                        "type": "Identifier",
                                        "name": "cosφ"
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
                                            "type": "Identifier",
                                            "name": "t"
                                          }
                                        ]
                                      }
                                    }
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "name": "t"
                                  }
                                },
                                "right": {
                                  "type": "BinaryExpression",
                                  "operator": "*",
                                  "left": {
                                    "type": "AssignmentExpression",
                                    "operator": "=",
                                    "left": {
                                      "type": "Identifier",
                                      "name": "t"
                                    },
                                    "right": {
                                      "type": "BinaryExpression",
                                      "operator": "-",
                                      "left": {
                                        "type": "BinaryExpression",
                                        "operator": "*",
                                        "left": {
                                          "type": "Identifier",
                                          "name": "cosφ0"
                                        },
                                        "right": {
                                          "type": "Identifier",
                                          "name": "sinφ"
                                        }
                                      },
                                      "right": {
                                        "type": "BinaryExpression",
                                        "operator": "*",
                                        "left": {
                                          "type": "BinaryExpression",
                                          "operator": "*",
                                          "left": {
                                            "type": "Identifier",
                                            "name": "sinφ0"
                                          },
                                          "right": {
                                            "type": "Identifier",
                                            "name": "cosφ"
                                          }
                                        },
                                        "right": {
                                          "type": "Identifier",
                                          "name": "cosΔλ"
                                        }
                                      }
                                    }
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "name": "t"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "type": "BinaryExpression",
                            "operator": "+",
                            "left": {
                              "type": "BinaryExpression",
                              "operator": "*",
                              "left": {
                                "type": "Identifier",
                                "name": "sinφ0"
                              },
                              "right": {
                                "type": "Identifier",
                                "name": "sinφ"
                              }
                            },
                            "right": {
                              "type": "BinaryExpression",
                              "operator": "*",
                              "left": {
                                "type": "BinaryExpression",
                                "operator": "*",
                                "left": {
                                  "type": "Identifier",
                                  "name": "cosφ0"
                                },
                                "right": {
                                  "type": "Identifier",
                                  "name": "cosφ"
                                }
                              },
                              "right": {
                                "type": "Identifier",
                                "name": "cosΔλ"
                              }
                            }
                          }
                        ]
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "SequenceExpression",
                      "expressions": [
                        {
                          "type": "AssignmentExpression",
                          "operator": "=",
                          "left": {
                            "type": "Identifier",
                            "name": "λ0"
                          },
                          "right": {
                            "type": "Identifier",
                            "name": "λ"
                          }
                        },
                        {
                          "type": "AssignmentExpression",
                          "operator": "=",
                          "left": {
                            "type": "Identifier",
                            "name": "sinφ0"
                          },
                          "right": {
                            "type": "Identifier",
                            "name": "sinφ"
                          }
                        },
                        {
                          "type": "AssignmentExpression",
                          "operator": "=",
                          "left": {
                            "type": "Identifier",
                            "name": "cosφ0"
                          },
                          "right": {
                            "type": "Identifier",
                            "name": "cosφ"
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
        "rest": null,
        "generator": false,
        "expression": false
      }
    ]
  },
  "src": "d3.geo.length = function (object) {\n    d3_geo_lengthSum = 0;\n    d3.geo.stream(object, d3_geo_length);\n    return d3_geo_lengthSum;\n};\nvar d3_geo_lengthSum;\nvar d3_geo_length = {\n        sphere: d3_noop,\n        point: d3_noop,\n        lineStart: d3_geo_lengthLineStart,\n        lineEnd: d3_noop,\n        polygonStart: d3_noop,\n        polygonEnd: d3_noop\n    };\nfunction d3_geo_lengthLineStart() {\n    var λ0, sinφ0, cosφ0;\n    d3_geo_length.point = function (λ, φ) {\n        λ0 = λ * d3_radians, sinφ0 = Math.sin(φ *= d3_radians), cosφ0 = Math.cos(φ);\n        d3_geo_length.point = nextPoint;\n    };\n    d3_geo_length.lineEnd = function () {\n        d3_geo_length.point = d3_geo_length.lineEnd = d3_noop;\n    };\n    function nextPoint(λ, φ) {\n        var sinφ = Math.sin(φ *= d3_radians), cosφ = Math.cos(φ), t = abs((λ *= d3_radians) - λ0), cosΔλ = Math.cos(t);\n        d3_geo_lengthSum += Math.atan2(Math.sqrt((t = cosφ * Math.sin(t)) * t + (t = cosφ0 * sinφ - sinφ0 * cosφ * cosΔλ) * t), sinφ0 * sinφ + cosφ0 * cosφ * cosΔλ);\n        λ0 = λ, sinφ0 = sinφ, cosφ0 = cosφ;\n    }\n}"
}