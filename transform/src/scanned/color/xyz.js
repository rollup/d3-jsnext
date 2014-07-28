{
  "filepath": "/color/xyz.js",
  "shared": [],
  "dependencies": [],
  "helpers": [
    "d3_xyz_lab",
    "d3_xyz_rgb"
  ],
  "exports": [],
  "ast": {
    "type": "Program",
    "body": [
      {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "name": "d3_xyz_lab"
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
              "type": "ReturnStatement",
              "argument": {
                "type": "ConditionalExpression",
                "test": {
                  "type": "BinaryExpression",
                  "operator": ">",
                  "left": {
                    "type": "Identifier",
                    "name": "x"
                  },
                  "right": {
                    "type": "Literal",
                    "value": 0.008856,
                    "raw": "0.008856"
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
                      "name": "pow"
                    }
                  },
                  "arguments": [
                    {
                      "type": "Identifier",
                      "name": "x"
                    },
                    {
                      "type": "BinaryExpression",
                      "operator": "/",
                      "left": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1"
                      },
                      "right": {
                        "type": "Literal",
                        "value": 3,
                        "raw": "3"
                      }
                    }
                  ]
                },
                "alternate": {
                  "type": "BinaryExpression",
                  "operator": "+",
                  "left": {
                    "type": "BinaryExpression",
                    "operator": "*",
                    "left": {
                      "type": "Literal",
                      "value": 7.787037,
                      "raw": "7.787037"
                    },
                    "right": {
                      "type": "Identifier",
                      "name": "x"
                    }
                  },
                  "right": {
                    "type": "BinaryExpression",
                    "operator": "/",
                    "left": {
                      "type": "Literal",
                      "value": 4,
                      "raw": "4"
                    },
                    "right": {
                      "type": "Literal",
                      "value": 29,
                      "raw": "29"
                    }
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
      {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "name": "d3_xyz_rgb"
        },
        "params": [
          {
            "type": "Identifier",
            "name": "r"
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
                    "name": "Math"
                  },
                  "property": {
                    "type": "Identifier",
                    "name": "round"
                  }
                },
                "arguments": [
                  {
                    "type": "BinaryExpression",
                    "operator": "*",
                    "left": {
                      "type": "Literal",
                      "value": 255,
                      "raw": "255"
                    },
                    "right": {
                      "type": "ConditionalExpression",
                      "test": {
                        "type": "BinaryExpression",
                        "operator": "<=",
                        "left": {
                          "type": "Identifier",
                          "name": "r"
                        },
                        "right": {
                          "type": "Literal",
                          "value": 0.00304,
                          "raw": "0.00304"
                        }
                      },
                      "consequent": {
                        "type": "BinaryExpression",
                        "operator": "*",
                        "left": {
                          "type": "Literal",
                          "value": 12.92,
                          "raw": "12.92"
                        },
                        "right": {
                          "type": "Identifier",
                          "name": "r"
                        }
                      },
                      "alternate": {
                        "type": "BinaryExpression",
                        "operator": "-",
                        "left": {
                          "type": "BinaryExpression",
                          "operator": "*",
                          "left": {
                            "type": "Literal",
                            "value": 1.055,
                            "raw": "1.055"
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
                                "name": "pow"
                              }
                            },
                            "arguments": [
                              {
                                "type": "Identifier",
                                "name": "r"
                              },
                              {
                                "type": "BinaryExpression",
                                "operator": "/",
                                "left": {
                                  "type": "Literal",
                                  "value": 1,
                                  "raw": "1"
                                },
                                "right": {
                                  "type": "Literal",
                                  "value": 2.4,
                                  "raw": "2.4"
                                }
                              }
                            ]
                          }
                        },
                        "right": {
                          "type": "Literal",
                          "value": 0.055,
                          "raw": "0.055"
                        }
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
    ]
  },
  "src": "function d3_xyz_lab(x) {\n    return x > 0.008856 ? Math.pow(x, 1 / 3) : 7.787037 * x + 4 / 29;\n}\nfunction d3_xyz_rgb(r) {\n    return Math.round(255 * (r <= 0.00304 ? 12.92 * r : 1.055 * Math.pow(r, 1 / 2.4) - 0.055));\n}"
}