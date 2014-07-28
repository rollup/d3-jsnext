{
  "filepath": "/geo/area.js",
  "shared": [],
  "dependencies": [
    "d3.geo.stream",
    "d3_adder",
    "d3_noop",
    "d3_radians"
  ],
  "helpers": [
    "d3_geo_areaSum",
    "d3_geo_areaRingSum",
    "d3_geo_area",
    "d3_geo_areaRingStart"
  ],
  "exports": [
    "d3.geo.area"
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
              "name": "area"
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
                      "name": "d3_geo_areaSum"
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
                        "name": "d3_geo_area"
                      }
                    ]
                  }
                },
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Identifier",
                    "name": "d3_geo_areaSum"
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
              "name": "d3_geo_areaSum"
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
              "name": "d3_geo_areaRingSum"
            },
            "init": {
              "type": "NewExpression",
              "callee": {
                "type": "Identifier",
                "name": "d3_adder"
              },
              "arguments": []
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
              "name": "d3_geo_area"
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
                            "operator": "+=",
                            "left": {
                              "type": "Identifier",
                              "name": "d3_geo_areaSum"
                            },
                            "right": {
                              "type": "BinaryExpression",
                              "operator": "*",
                              "left": {
                                "type": "Literal",
                                "value": 4,
                                "raw": "4"
                              },
                              "right": {
                                "type": "Identifier",
                                "name": "π"
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
                    "name": "d3_noop"
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
                                "name": "d3_geo_areaRingSum"
                              },
                              "property": {
                                "type": "Identifier",
                                "name": "reset"
                              }
                            },
                            "arguments": []
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
                                "name": "d3_geo_area"
                              },
                              "property": {
                                "type": "Identifier",
                                "name": "lineStart"
                              }
                            },
                            "right": {
                              "type": "Identifier",
                              "name": "d3_geo_areaRingStart"
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
                    "name": "polygonEnd"
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
                                "name": "area"
                              },
                              "init": {
                                "type": "BinaryExpression",
                                "operator": "*",
                                "left": {
                                  "type": "Literal",
                                  "value": 2,
                                  "raw": "2"
                                },
                                "right": {
                                  "type": "Identifier",
                                  "name": "d3_geo_areaRingSum"
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
                            "operator": "+=",
                            "left": {
                              "type": "Identifier",
                              "name": "d3_geo_areaSum"
                            },
                            "right": {
                              "type": "ConditionalExpression",
                              "test": {
                                "type": "BinaryExpression",
                                "operator": "<",
                                "left": {
                                  "type": "Identifier",
                                  "name": "area"
                                },
                                "right": {
                                  "type": "Literal",
                                  "value": 0,
                                  "raw": "0"
                                }
                              },
                              "consequent": {
                                "type": "BinaryExpression",
                                "operator": "+",
                                "left": {
                                  "type": "BinaryExpression",
                                  "operator": "*",
                                  "left": {
                                    "type": "Literal",
                                    "value": 4,
                                    "raw": "4"
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "name": "π"
                                  }
                                },
                                "right": {
                                  "type": "Identifier",
                                  "name": "area"
                                }
                              },
                              "alternate": {
                                "type": "Identifier",
                                "name": "area"
                              }
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
                                "name": "d3_geo_area"
                              },
                              "property": {
                                "type": "Identifier",
                                "name": "lineStart"
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
                                  "name": "d3_geo_area"
                                },
                                "property": {
                                  "type": "Identifier",
                                  "name": "lineEnd"
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
                                    "name": "d3_geo_area"
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "name": "point"
                                  }
                                },
                                "right": {
                                  "type": "Identifier",
                                  "name": "d3_noop"
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
          "name": "d3_geo_areaRingStart"
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
                    "name": "λ00"
                  },
                  "init": null
                },
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "name": "φ00"
                  },
                  "init": null
                },
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
                    "name": "cosφ0"
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
                    "name": "d3_geo_area"
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
                          "type": "AssignmentExpression",
                          "operator": "=",
                          "left": {
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "name": "d3_geo_area"
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
                                "type": "BinaryExpression",
                                "operator": "*",
                                "left": {
                                  "type": "AssignmentExpression",
                                  "operator": "=",
                                  "left": {
                                    "type": "Identifier",
                                    "name": "λ00"
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "name": "λ"
                                  }
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
                                    "type": "AssignmentExpression",
                                    "operator": "=",
                                    "left": {
                                      "type": "Identifier",
                                      "name": "φ"
                                    },
                                    "right": {
                                      "type": "BinaryExpression",
                                      "operator": "+",
                                      "left": {
                                        "type": "BinaryExpression",
                                        "operator": "/",
                                        "left": {
                                          "type": "BinaryExpression",
                                          "operator": "*",
                                          "left": {
                                            "type": "AssignmentExpression",
                                            "operator": "=",
                                            "left": {
                                              "type": "Identifier",
                                              "name": "φ00"
                                            },
                                            "right": {
                                              "type": "Identifier",
                                              "name": "φ"
                                            }
                                          },
                                          "right": {
                                            "type": "Identifier",
                                            "name": "d3_radians"
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
                                      }
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
                                    "type": "Identifier",
                                    "name": "φ"
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
                    "type": "ExpressionStatement",
                    "expression": {
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
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "name": "φ"
                      },
                      "right": {
                        "type": "BinaryExpression",
                        "operator": "+",
                        "left": {
                          "type": "BinaryExpression",
                          "operator": "/",
                          "left": {
                            "type": "BinaryExpression",
                            "operator": "*",
                            "left": {
                              "type": "Identifier",
                              "name": "φ"
                            },
                            "right": {
                              "type": "Identifier",
                              "name": "d3_radians"
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
                        }
                      }
                    }
                  },
                  {
                    "type": "VariableDeclaration",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "name": "dλ"
                        },
                        "init": {
                          "type": "BinaryExpression",
                          "operator": "-",
                          "left": {
                            "type": "Identifier",
                            "name": "λ"
                          },
                          "right": {
                            "type": "Identifier",
                            "name": "λ0"
                          }
                        }
                      },
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "name": "sdλ"
                        },
                        "init": {
                          "type": "ConditionalExpression",
                          "test": {
                            "type": "BinaryExpression",
                            "operator": ">=",
                            "left": {
                              "type": "Identifier",
                              "name": "dλ"
                            },
                            "right": {
                              "type": "Literal",
                              "value": 0,
                              "raw": "0"
                            }
                          },
                          "consequent": {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1"
                          },
                          "alternate": {
                            "type": "UnaryExpression",
                            "operator": "-",
                            "argument": {
                              "type": "Literal",
                              "value": 1,
                              "raw": "1"
                            },
                            "prefix": true
                          }
                        }
                      },
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "name": "adλ"
                        },
                        "init": {
                          "type": "BinaryExpression",
                          "operator": "*",
                          "left": {
                            "type": "Identifier",
                            "name": "sdλ"
                          },
                          "right": {
                            "type": "Identifier",
                            "name": "dλ"
                          }
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
                          "name": "k"
                        },
                        "init": {
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
                        }
                      },
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "name": "u"
                        },
                        "init": {
                          "type": "BinaryExpression",
                          "operator": "+",
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
                            "type": "BinaryExpression",
                            "operator": "*",
                            "left": {
                              "type": "Identifier",
                              "name": "k"
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
                                  "name": "adλ"
                                }
                              ]
                            }
                          }
                        }
                      },
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "name": "v"
                        },
                        "init": {
                          "type": "BinaryExpression",
                          "operator": "*",
                          "left": {
                            "type": "BinaryExpression",
                            "operator": "*",
                            "left": {
                              "type": "Identifier",
                              "name": "k"
                            },
                            "right": {
                              "type": "Identifier",
                              "name": "sdλ"
                            }
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
                                "name": "adλ"
                              }
                            ]
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
                          "name": "d3_geo_areaRingSum"
                        },
                        "property": {
                          "type": "Identifier",
                          "name": "add"
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
                              "name": "atan2"
                            }
                          },
                          "arguments": [
                            {
                              "type": "Identifier",
                              "name": "v"
                            },
                            {
                              "type": "Identifier",
                              "name": "u"
                            }
                          ]
                        }
                      ]
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
                            "name": "cosφ0"
                          },
                          "right": {
                            "type": "Identifier",
                            "name": "cosφ"
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
                    "name": "d3_geo_area"
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
                          "type": "CallExpression",
                          "callee": {
                            "type": "Identifier",
                            "name": "nextPoint"
                          },
                          "arguments": [
                            {
                              "type": "Identifier",
                              "name": "λ00"
                            },
                            {
                              "type": "Identifier",
                              "name": "φ00"
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
  },
  "src": "d3.geo.area = function (object) {\n    d3_geo_areaSum = 0;\n    d3.geo.stream(object, d3_geo_area);\n    return d3_geo_areaSum;\n};\nvar d3_geo_areaSum;\nvar d3_geo_areaRingSum = new d3_adder();\nvar d3_geo_area = {\n        sphere: function () {\n            d3_geo_areaSum += 4 * π;\n        },\n        point: d3_noop,\n        lineStart: d3_noop,\n        lineEnd: d3_noop,\n        polygonStart: function () {\n            d3_geo_areaRingSum.reset();\n            d3_geo_area.lineStart = d3_geo_areaRingStart;\n        },\n        polygonEnd: function () {\n            var area = 2 * d3_geo_areaRingSum;\n            d3_geo_areaSum += area < 0 ? 4 * π + area : area;\n            d3_geo_area.lineStart = d3_geo_area.lineEnd = d3_geo_area.point = d3_noop;\n        }\n    };\nfunction d3_geo_areaRingStart() {\n    var λ00, φ00, λ0, cosφ0, sinφ0;\n    d3_geo_area.point = function (λ, φ) {\n        d3_geo_area.point = nextPoint;\n        λ0 = (λ00 = λ) * d3_radians, cosφ0 = Math.cos(φ = (φ00 = φ) * d3_radians / 2 + π / 4), sinφ0 = Math.sin(φ);\n    };\n    function nextPoint(λ, φ) {\n        λ *= d3_radians;\n        φ = φ * d3_radians / 2 + π / 4;\n        var dλ = λ - λ0, sdλ = dλ >= 0 ? 1 : -1, adλ = sdλ * dλ, cosφ = Math.cos(φ), sinφ = Math.sin(φ), k = sinφ0 * sinφ, u = cosφ0 * cosφ + k * Math.cos(adλ), v = k * sdλ * Math.sin(adλ);\n        d3_geo_areaRingSum.add(Math.atan2(v, u));\n        λ0 = λ, cosφ0 = cosφ, sinφ0 = sinφ;\n    }\n    d3_geo_area.lineEnd = function () {\n        nextPoint(λ00, φ00);\n    };\n}"
}