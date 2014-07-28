{
  "filepath": "/geo/point-in-polygon.js",
  "shared": [],
  "dependencies": [
    "d3_geo_areaRingSum",
    "d3_geo_cartesianCross",
    "d3_geo_cartesian",
    "d3_geo_cartesianNormalize",
    "d3_asin"
  ],
  "helpers": [
    "d3_geo_pointInPolygon"
  ],
  "exports": [],
  "ast": {
    "type": "Program",
    "body": [
      {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "name": "d3_geo_pointInPolygon"
        },
        "params": [
          {
            "type": "Identifier",
            "name": "point"
          },
          {
            "type": "Identifier",
            "name": "polygon"
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
                    "name": "meridian"
                  },
                  "init": {
                    "type": "MemberExpression",
                    "computed": true,
                    "object": {
                      "type": "Identifier",
                      "name": "point"
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
                    "name": "parallel"
                  },
                  "init": {
                    "type": "MemberExpression",
                    "computed": true,
                    "object": {
                      "type": "Identifier",
                      "name": "point"
                    },
                    "property": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1"
                    }
                  }
                },
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "name": "meridianNormal"
                  },
                  "init": {
                    "type": "ArrayExpression",
                    "elements": [
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
                            "name": "sin"
                          }
                        },
                        "arguments": [
                          {
                            "type": "Identifier",
                            "name": "meridian"
                          }
                        ]
                      },
                      {
                        "type": "UnaryExpression",
                        "operator": "-",
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
                              "name": "cos"
                            }
                          },
                          "arguments": [
                            {
                              "type": "Identifier",
                              "name": "meridian"
                            }
                          ]
                        },
                        "prefix": true
                      },
                      {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0"
                      }
                    ]
                  }
                },
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "name": "polarAngle"
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
                    "name": "winding"
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
              "type": "ForStatement",
              "init": {
                "type": "VariableDeclaration",
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "id": {
                      "type": "Identifier",
                      "name": "i"
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
                      "name": "n"
                    },
                    "init": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "name": "polygon"
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
              "test": {
                "type": "BinaryExpression",
                "operator": "<",
                "left": {
                  "type": "Identifier",
                  "name": "i"
                },
                "right": {
                  "type": "Identifier",
                  "name": "n"
                }
              },
              "update": {
                "type": "UpdateExpression",
                "operator": "++",
                "argument": {
                  "type": "Identifier",
                  "name": "i"
                },
                "prefix": true
              },
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
                          "name": "ring"
                        },
                        "init": {
                          "type": "MemberExpression",
                          "computed": true,
                          "object": {
                            "type": "Identifier",
                            "name": "polygon"
                          },
                          "property": {
                            "type": "Identifier",
                            "name": "i"
                          }
                        }
                      },
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "name": "m"
                        },
                        "init": {
                          "type": "MemberExpression",
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "name": "ring"
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
                    "type": "IfStatement",
                    "test": {
                      "type": "UnaryExpression",
                      "operator": "!",
                      "argument": {
                        "type": "Identifier",
                        "name": "m"
                      },
                      "prefix": true
                    },
                    "consequent": {
                      "type": "ContinueStatement",
                      "label": null
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
                          "name": "point0"
                        },
                        "init": {
                          "type": "MemberExpression",
                          "computed": true,
                          "object": {
                            "type": "Identifier",
                            "name": "ring"
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
                          "name": "λ0"
                        },
                        "init": {
                          "type": "MemberExpression",
                          "computed": true,
                          "object": {
                            "type": "Identifier",
                            "name": "point0"
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
                          "name": "φ0"
                        },
                        "init": {
                          "type": "BinaryExpression",
                          "operator": "+",
                          "left": {
                            "type": "BinaryExpression",
                            "operator": "/",
                            "left": {
                              "type": "MemberExpression",
                              "computed": true,
                              "object": {
                                "type": "Identifier",
                                "name": "point0"
                              },
                              "property": {
                                "type": "Literal",
                                "value": 1,
                                "raw": "1"
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
                      },
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "name": "sinφ0"
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
                              "name": "φ0"
                            }
                          ]
                        }
                      },
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
                          "name": "j"
                        },
                        "init": {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1"
                        }
                      }
                    ],
                    "kind": "var"
                  },
                  {
                    "type": "WhileStatement",
                    "test": {
                      "type": "Literal",
                      "value": true,
                      "raw": "true"
                    },
                    "body": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "IfStatement",
                          "test": {
                            "type": "BinaryExpression",
                            "operator": "===",
                            "left": {
                              "type": "Identifier",
                              "name": "j"
                            },
                            "right": {
                              "type": "Identifier",
                              "name": "m"
                            }
                          },
                          "consequent": {
                            "type": "ExpressionStatement",
                            "expression": {
                              "type": "AssignmentExpression",
                              "operator": "=",
                              "left": {
                                "type": "Identifier",
                                "name": "j"
                              },
                              "right": {
                                "type": "Literal",
                                "value": 0,
                                "raw": "0"
                              }
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
                              "name": "point"
                            },
                            "right": {
                              "type": "MemberExpression",
                              "computed": true,
                              "object": {
                                "type": "Identifier",
                                "name": "ring"
                              },
                              "property": {
                                "type": "Identifier",
                                "name": "j"
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
                                "name": "λ"
                              },
                              "init": {
                                "type": "MemberExpression",
                                "computed": true,
                                "object": {
                                  "type": "Identifier",
                                  "name": "point"
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
                                "name": "φ"
                              },
                              "init": {
                                "type": "BinaryExpression",
                                "operator": "+",
                                "left": {
                                  "type": "BinaryExpression",
                                  "operator": "/",
                                  "left": {
                                    "type": "MemberExpression",
                                    "computed": true,
                                    "object": {
                                      "type": "Identifier",
                                      "name": "point"
                                    },
                                    "property": {
                                      "type": "Literal",
                                      "value": 1,
                                      "raw": "1"
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
                                "name": "antimeridian"
                              },
                              "init": {
                                "type": "BinaryExpression",
                                "operator": ">",
                                "left": {
                                  "type": "Identifier",
                                  "name": "adλ"
                                },
                                "right": {
                                  "type": "Identifier",
                                  "name": "π"
                                }
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
                                  },
                                  {
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
                                ]
                              }
                            ]
                          }
                        },
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "AssignmentExpression",
                            "operator": "+=",
                            "left": {
                              "type": "Identifier",
                              "name": "polarAngle"
                            },
                            "right": {
                              "type": "ConditionalExpression",
                              "test": {
                                "type": "Identifier",
                                "name": "antimeridian"
                              },
                              "consequent": {
                                "type": "BinaryExpression",
                                "operator": "+",
                                "left": {
                                  "type": "Identifier",
                                  "name": "dλ"
                                },
                                "right": {
                                  "type": "BinaryExpression",
                                  "operator": "*",
                                  "left": {
                                    "type": "Identifier",
                                    "name": "sdλ"
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "name": "τ"
                                  }
                                }
                              },
                              "alternate": {
                                "type": "Identifier",
                                "name": "dλ"
                              }
                            }
                          }
                        },
                        {
                          "type": "IfStatement",
                          "test": {
                            "type": "BinaryExpression",
                            "operator": "^",
                            "left": {
                              "type": "BinaryExpression",
                              "operator": "^",
                              "left": {
                                "type": "Identifier",
                                "name": "antimeridian"
                              },
                              "right": {
                                "type": "BinaryExpression",
                                "operator": ">=",
                                "left": {
                                  "type": "Identifier",
                                  "name": "λ0"
                                },
                                "right": {
                                  "type": "Identifier",
                                  "name": "meridian"
                                }
                              }
                            },
                            "right": {
                              "type": "BinaryExpression",
                              "operator": ">=",
                              "left": {
                                "type": "Identifier",
                                "name": "λ"
                              },
                              "right": {
                                "type": "Identifier",
                                "name": "meridian"
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
                                      "name": "arc"
                                    },
                                    "init": {
                                      "type": "CallExpression",
                                      "callee": {
                                        "type": "Identifier",
                                        "name": "d3_geo_cartesianCross"
                                      },
                                      "arguments": [
                                        {
                                          "type": "CallExpression",
                                          "callee": {
                                            "type": "Identifier",
                                            "name": "d3_geo_cartesian"
                                          },
                                          "arguments": [
                                            {
                                              "type": "Identifier",
                                              "name": "point0"
                                            }
                                          ]
                                        },
                                        {
                                          "type": "CallExpression",
                                          "callee": {
                                            "type": "Identifier",
                                            "name": "d3_geo_cartesian"
                                          },
                                          "arguments": [
                                            {
                                              "type": "Identifier",
                                              "name": "point"
                                            }
                                          ]
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
                                  "type": "CallExpression",
                                  "callee": {
                                    "type": "Identifier",
                                    "name": "d3_geo_cartesianNormalize"
                                  },
                                  "arguments": [
                                    {
                                      "type": "Identifier",
                                      "name": "arc"
                                    }
                                  ]
                                }
                              },
                              {
                                "type": "VariableDeclaration",
                                "declarations": [
                                  {
                                    "type": "VariableDeclarator",
                                    "id": {
                                      "type": "Identifier",
                                      "name": "intersection"
                                    },
                                    "init": {
                                      "type": "CallExpression",
                                      "callee": {
                                        "type": "Identifier",
                                        "name": "d3_geo_cartesianCross"
                                      },
                                      "arguments": [
                                        {
                                          "type": "Identifier",
                                          "name": "meridianNormal"
                                        },
                                        {
                                          "type": "Identifier",
                                          "name": "arc"
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
                                  "type": "CallExpression",
                                  "callee": {
                                    "type": "Identifier",
                                    "name": "d3_geo_cartesianNormalize"
                                  },
                                  "arguments": [
                                    {
                                      "type": "Identifier",
                                      "name": "intersection"
                                    }
                                  ]
                                }
                              },
                              {
                                "type": "VariableDeclaration",
                                "declarations": [
                                  {
                                    "type": "VariableDeclarator",
                                    "id": {
                                      "type": "Identifier",
                                      "name": "φarc"
                                    },
                                    "init": {
                                      "type": "BinaryExpression",
                                      "operator": "*",
                                      "left": {
                                        "type": "ConditionalExpression",
                                        "test": {
                                          "type": "BinaryExpression",
                                          "operator": "^",
                                          "left": {
                                            "type": "Identifier",
                                            "name": "antimeridian"
                                          },
                                          "right": {
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
                                          }
                                        },
                                        "consequent": {
                                          "type": "UnaryExpression",
                                          "operator": "-",
                                          "argument": {
                                            "type": "Literal",
                                            "value": 1,
                                            "raw": "1"
                                          },
                                          "prefix": true
                                        },
                                        "alternate": {
                                          "type": "Literal",
                                          "value": 1,
                                          "raw": "1"
                                        }
                                      },
                                      "right": {
                                        "type": "CallExpression",
                                        "callee": {
                                          "type": "Identifier",
                                          "name": "d3_asin"
                                        },
                                        "arguments": [
                                          {
                                            "type": "MemberExpression",
                                            "computed": true,
                                            "object": {
                                              "type": "Identifier",
                                              "name": "intersection"
                                            },
                                            "property": {
                                              "type": "Literal",
                                              "value": 2,
                                              "raw": "2"
                                            }
                                          }
                                        ]
                                      }
                                    }
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
                                    "type": "BinaryExpression",
                                    "operator": ">",
                                    "left": {
                                      "type": "Identifier",
                                      "name": "parallel"
                                    },
                                    "right": {
                                      "type": "Identifier",
                                      "name": "φarc"
                                    }
                                  },
                                  "right": {
                                    "type": "LogicalExpression",
                                    "operator": "&&",
                                    "left": {
                                      "type": "BinaryExpression",
                                      "operator": "===",
                                      "left": {
                                        "type": "Identifier",
                                        "name": "parallel"
                                      },
                                      "right": {
                                        "type": "Identifier",
                                        "name": "φarc"
                                      }
                                    },
                                    "right": {
                                      "type": "LogicalExpression",
                                      "operator": "||",
                                      "left": {
                                        "type": "MemberExpression",
                                        "computed": true,
                                        "object": {
                                          "type": "Identifier",
                                          "name": "arc"
                                        },
                                        "property": {
                                          "type": "Literal",
                                          "value": 0,
                                          "raw": "0"
                                        }
                                      },
                                      "right": {
                                        "type": "MemberExpression",
                                        "computed": true,
                                        "object": {
                                          "type": "Identifier",
                                          "name": "arc"
                                        },
                                        "property": {
                                          "type": "Literal",
                                          "value": 1,
                                          "raw": "1"
                                        }
                                      }
                                    }
                                  }
                                },
                                "consequent": {
                                  "type": "BlockStatement",
                                  "body": [
                                    {
                                      "type": "ExpressionStatement",
                                      "expression": {
                                        "type": "AssignmentExpression",
                                        "operator": "+=",
                                        "left": {
                                          "type": "Identifier",
                                          "name": "winding"
                                        },
                                        "right": {
                                          "type": "ConditionalExpression",
                                          "test": {
                                            "type": "BinaryExpression",
                                            "operator": "^",
                                            "left": {
                                              "type": "Identifier",
                                              "name": "antimeridian"
                                            },
                                            "right": {
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
                                      }
                                    }
                                  ]
                                },
                                "alternate": null
                              }
                            ]
                          },
                          "alternate": null
                        },
                        {
                          "type": "IfStatement",
                          "test": {
                            "type": "UnaryExpression",
                            "operator": "!",
                            "argument": {
                              "type": "UpdateExpression",
                              "operator": "++",
                              "argument": {
                                "type": "Identifier",
                                "name": "j"
                              },
                              "prefix": false
                            },
                            "prefix": true
                          },
                          "consequent": {
                            "type": "BreakStatement",
                            "label": null
                          },
                          "alternate": null
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
                              },
                              {
                                "type": "AssignmentExpression",
                                "operator": "=",
                                "left": {
                                  "type": "Identifier",
                                  "name": "point0"
                                },
                                "right": {
                                  "type": "Identifier",
                                  "name": "point"
                                }
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
              "type": "ReturnStatement",
              "argument": {
                "type": "BinaryExpression",
                "operator": "^",
                "left": {
                  "type": "LogicalExpression",
                  "operator": "||",
                  "left": {
                    "type": "BinaryExpression",
                    "operator": "<",
                    "left": {
                      "type": "Identifier",
                      "name": "polarAngle"
                    },
                    "right": {
                      "type": "UnaryExpression",
                      "operator": "-",
                      "argument": {
                        "type": "Identifier",
                        "name": "ε"
                      },
                      "prefix": true
                    }
                  },
                  "right": {
                    "type": "LogicalExpression",
                    "operator": "&&",
                    "left": {
                      "type": "BinaryExpression",
                      "operator": "<",
                      "left": {
                        "type": "Identifier",
                        "name": "polarAngle"
                      },
                      "right": {
                        "type": "Identifier",
                        "name": "ε"
                      }
                    },
                    "right": {
                      "type": "BinaryExpression",
                      "operator": "<",
                      "left": {
                        "type": "Identifier",
                        "name": "d3_geo_areaRingSum"
                      },
                      "right": {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0"
                      }
                    }
                  }
                },
                "right": {
                  "type": "BinaryExpression",
                  "operator": "&",
                  "left": {
                    "type": "Identifier",
                    "name": "winding"
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
        },
        "rest": null,
        "generator": false,
        "expression": false
      }
    ]
  },
  "src": "function d3_geo_pointInPolygon(point, polygon) {\n    var meridian = point[0], parallel = point[1], meridianNormal = [\n            Math.sin(meridian),\n            -Math.cos(meridian),\n            0\n        ], polarAngle = 0, winding = 0;\n    d3_geo_areaRingSum.reset();\n    for (var i = 0, n = polygon.length; i < n; ++i) {\n        var ring = polygon[i], m = ring.length;\n        if (!m)\n            continue;\n        var point0 = ring[0], λ0 = point0[0], φ0 = point0[1] / 2 + π / 4, sinφ0 = Math.sin(φ0), cosφ0 = Math.cos(φ0), j = 1;\n        while (true) {\n            if (j === m)\n                j = 0;\n            point = ring[j];\n            var λ = point[0], φ = point[1] / 2 + π / 4, sinφ = Math.sin(φ), cosφ = Math.cos(φ), dλ = λ - λ0, sdλ = dλ >= 0 ? 1 : -1, adλ = sdλ * dλ, antimeridian = adλ > π, k = sinφ0 * sinφ;\n            d3_geo_areaRingSum.add(Math.atan2(k * sdλ * Math.sin(adλ), cosφ0 * cosφ + k * Math.cos(adλ)));\n            polarAngle += antimeridian ? dλ + sdλ * τ : dλ;\n            if (antimeridian ^ λ0 >= meridian ^ λ >= meridian) {\n                var arc = d3_geo_cartesianCross(d3_geo_cartesian(point0), d3_geo_cartesian(point));\n                d3_geo_cartesianNormalize(arc);\n                var intersection = d3_geo_cartesianCross(meridianNormal, arc);\n                d3_geo_cartesianNormalize(intersection);\n                var φarc = (antimeridian ^ dλ >= 0 ? -1 : 1) * d3_asin(intersection[2]);\n                if (parallel > φarc || parallel === φarc && (arc[0] || arc[1])) {\n                    winding += antimeridian ^ dλ >= 0 ? 1 : -1;\n                }\n            }\n            if (!j++)\n                break;\n            λ0 = λ, sinφ0 = sinφ, cosφ0 = cosφ, point0 = point;\n        }\n    }\n    return (polarAngle < -ε || polarAngle < ε && d3_geo_areaRingSum < 0) ^ winding & 1;\n}"
}