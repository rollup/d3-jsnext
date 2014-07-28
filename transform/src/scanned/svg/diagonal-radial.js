{
  "filepath": "/svg/diagonal-radial.js",
  "shared": [],
  "dependencies": [
    "d3.svg.diagonal",
    "d3_svg_diagonalProjection",
    "d3_svg_arcOffset"
  ],
  "helpers": [
    "d3_svg_diagonalRadialProjection"
  ],
  "exports": [
    "d3.svg.diagonal.radial"
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
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "name": "d3"
                },
                "property": {
                  "type": "Identifier",
                  "name": "svg"
                }
              },
              "property": {
                "type": "Identifier",
                "name": "diagonal"
              }
            },
            "property": {
              "type": "Identifier",
              "name": "radial"
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
                        "name": "diagonal"
                      },
                      "init": {
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
                              "name": "svg"
                            }
                          },
                          "property": {
                            "type": "Identifier",
                            "name": "diagonal"
                          }
                        },
                        "arguments": []
                      }
                    },
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "name": "projection"
                      },
                      "init": {
                        "type": "Identifier",
                        "name": "d3_svg_diagonalProjection"
                      }
                    },
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "name": "projection_"
                      },
                      "init": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "name": "diagonal"
                        },
                        "property": {
                          "type": "Identifier",
                          "name": "projection"
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
                        "name": "diagonal"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "projection"
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
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "ConditionalExpression",
                              "test": {
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
                              "consequent": {
                                "type": "CallExpression",
                                "callee": {
                                  "type": "Identifier",
                                  "name": "projection_"
                                },
                                "arguments": [
                                  {
                                    "type": "CallExpression",
                                    "callee": {
                                      "type": "Identifier",
                                      "name": "d3_svg_diagonalRadialProjection"
                                    },
                                    "arguments": [
                                      {
                                        "type": "AssignmentExpression",
                                        "operator": "=",
                                        "left": {
                                          "type": "Identifier",
                                          "name": "projection"
                                        },
                                        "right": {
                                          "type": "Identifier",
                                          "name": "x"
                                        }
                                      }
                                    ]
                                  }
                                ]
                              },
                              "alternate": {
                                "type": "Identifier",
                                "name": "projection"
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
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Identifier",
                    "name": "diagonal"
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
          "name": "d3_svg_diagonalRadialProjection"
        },
        "params": [
          {
            "type": "Identifier",
            "name": "projection"
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
                            "name": "d"
                          },
                          "init": {
                            "type": "CallExpression",
                            "callee": {
                              "type": "MemberExpression",
                              "computed": false,
                              "object": {
                                "type": "Identifier",
                                "name": "projection"
                              },
                              "property": {
                                "type": "Identifier",
                                "name": "apply"
                              }
                            },
                            "arguments": [
                              {
                                "type": "ThisExpression"
                              },
                              {
                                "type": "Identifier",
                                "name": "arguments"
                              }
                            ]
                          }
                        },
                        {
                          "type": "VariableDeclarator",
                          "id": {
                            "type": "Identifier",
                            "name": "r"
                          },
                          "init": {
                            "type": "MemberExpression",
                            "computed": true,
                            "object": {
                              "type": "Identifier",
                              "name": "d"
                            },
                            "property": {
                              "type": "Literal",
                              "value": 0,
                              "raw": "0"
                            }
                          }
                        },
                        {
                          "type": "VariableDeclarator",
                          "id": {
                            "type": "Identifier",
                            "name": "a"
                          },
                          "init": {
                            "type": "BinaryExpression",
                            "operator": "+",
                            "left": {
                              "type": "MemberExpression",
                              "computed": true,
                              "object": {
                                "type": "Identifier",
                                "name": "d"
                              },
                              "property": {
                                "type": "Literal",
                                "value": 1,
                                "raw": "1"
                              }
                            },
                            "right": {
                              "type": "Identifier",
                              "name": "d3_svg_arcOffset"
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
                              "name": "r"
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
                                  "name": "a"
                                }
                              ]
                            }
                          },
                          {
                            "type": "BinaryExpression",
                            "operator": "*",
                            "left": {
                              "type": "Identifier",
                              "name": "r"
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
                                  "name": "a"
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
  "src": "d3.svg.diagonal.radial = function () {\n    var diagonal = d3.svg.diagonal(), projection = d3_svg_diagonalProjection, projection_ = diagonal.projection;\n    diagonal.projection = function (x) {\n        return arguments.length ? projection_(d3_svg_diagonalRadialProjection(projection = x)) : projection;\n    };\n    return diagonal;\n};\nfunction d3_svg_diagonalRadialProjection(projection) {\n    return function () {\n        var d = projection.apply(this, arguments), r = d[0], a = d[1] + d3_svg_arcOffset;\n        return [\n            r * Math.cos(a),\n            r * Math.sin(a)\n        ];\n    };\n}"
}