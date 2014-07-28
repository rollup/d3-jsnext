{
  "filepath": "/geo/bounds.js",
  "shared": [],
  "dependencies": [
    "d3_geo_area",
    "d3_geo_areaRingSum",
    "d3_geo_cartesian",
    "d3_radians",
    "d3_geo_cartesianCross",
    "d3_geo_cartesianNormalize",
    "d3_geo_spherical",
    "d3_degrees",
    "abs",
    "d3.geo.stream"
  ],
  "helpers": [],
  "exports": [
    "d3.geo.bounds"
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
              "name": "bounds"
            }
          },
          "right": {
            "type": "CallExpression",
            "callee": {
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
                          "name": "λ0"
                        },
                        "init": null
                      },
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "name": "φ0"
                        },
                        "init": null
                      },
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "name": "λ1"
                        },
                        "init": null
                      },
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "name": "φ1"
                        },
                        "init": null
                      },
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "name": "λ_"
                        },
                        "init": null
                      },
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "name": "λ__"
                        },
                        "init": null
                      },
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "name": "φ__"
                        },
                        "init": null
                      },
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "name": "p0"
                        },
                        "init": null
                      },
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "name": "dλSum"
                        },
                        "init": null
                      },
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "name": "ranges"
                        },
                        "init": null
                      },
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "name": "range"
                        },
                        "init": null
                      }
                    ],
                    "kind": "var"
                  },
                  {
                    "type": "VariableDeclaration",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "name": "bound"
                        },
                        "init": {
                          "type": "ObjectExpression",
                          "properties": [
                            {
                              "type": "Property",
                              "key": {
                                "type": "Identifier",
                                "name": "point"
                              },
                              "value": {
                                "type": "Identifier",
                                "name": "point"
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
                                "name": "lineStart"
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
                                "name": "lineEnd"
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
                                        "type": "AssignmentExpression",
                                        "operator": "=",
                                        "left": {
                                          "type": "MemberExpression",
                                          "computed": false,
                                          "object": {
                                            "type": "Identifier",
                                            "name": "bound"
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "name": "point"
                                          }
                                        },
                                        "right": {
                                          "type": "Identifier",
                                          "name": "ringPoint"
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
                                            "name": "bound"
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "name": "lineStart"
                                          }
                                        },
                                        "right": {
                                          "type": "Identifier",
                                          "name": "ringStart"
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
                                            "name": "bound"
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "name": "lineEnd"
                                          }
                                        },
                                        "right": {
                                          "type": "Identifier",
                                          "name": "ringEnd"
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
                                          "name": "dλSum"
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
                                            "type": "Identifier",
                                            "name": "d3_geo_area"
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "name": "polygonStart"
                                          }
                                        },
                                        "arguments": []
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
                                      "type": "ExpressionStatement",
                                      "expression": {
                                        "type": "CallExpression",
                                        "callee": {
                                          "type": "MemberExpression",
                                          "computed": false,
                                          "object": {
                                            "type": "Identifier",
                                            "name": "d3_geo_area"
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "name": "polygonEnd"
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
                                            "name": "bound"
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "name": "point"
                                          }
                                        },
                                        "right": {
                                          "type": "Identifier",
                                          "name": "point"
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
                                            "name": "bound"
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "name": "lineStart"
                                          }
                                        },
                                        "right": {
                                          "type": "Identifier",
                                          "name": "lineStart"
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
                                            "name": "bound"
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "name": "lineEnd"
                                          }
                                        },
                                        "right": {
                                          "type": "Identifier",
                                          "name": "lineEnd"
                                        }
                                      }
                                    },
                                    {
                                      "type": "IfStatement",
                                      "test": {
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
                                                "name": "λ0"
                                              },
                                              "right": {
                                                "type": "UnaryExpression",
                                                "operator": "-",
                                                "argument": {
                                                  "type": "AssignmentExpression",
                                                  "operator": "=",
                                                  "left": {
                                                    "type": "Identifier",
                                                    "name": "λ1"
                                                  },
                                                  "right": {
                                                    "type": "Literal",
                                                    "value": 180,
                                                    "raw": "180"
                                                  }
                                                },
                                                "prefix": true
                                              }
                                            },
                                            {
                                              "type": "AssignmentExpression",
                                              "operator": "=",
                                              "left": {
                                                "type": "Identifier",
                                                "name": "φ0"
                                              },
                                              "right": {
                                                "type": "UnaryExpression",
                                                "operator": "-",
                                                "argument": {
                                                  "type": "AssignmentExpression",
                                                  "operator": "=",
                                                  "left": {
                                                    "type": "Identifier",
                                                    "name": "φ1"
                                                  },
                                                  "right": {
                                                    "type": "Literal",
                                                    "value": 90,
                                                    "raw": "90"
                                                  }
                                                },
                                                "prefix": true
                                              }
                                            }
                                          ]
                                        }
                                      },
                                      "alternate": {
                                        "type": "IfStatement",
                                        "test": {
                                          "type": "BinaryExpression",
                                          "operator": ">",
                                          "left": {
                                            "type": "Identifier",
                                            "name": "dλSum"
                                          },
                                          "right": {
                                            "type": "Identifier",
                                            "name": "ε"
                                          }
                                        },
                                        "consequent": {
                                          "type": "ExpressionStatement",
                                          "expression": {
                                            "type": "AssignmentExpression",
                                            "operator": "=",
                                            "left": {
                                              "type": "Identifier",
                                              "name": "φ1"
                                            },
                                            "right": {
                                              "type": "Literal",
                                              "value": 90,
                                              "raw": "90"
                                            }
                                          }
                                        },
                                        "alternate": {
                                          "type": "IfStatement",
                                          "test": {
                                            "type": "BinaryExpression",
                                            "operator": "<",
                                            "left": {
                                              "type": "Identifier",
                                              "name": "dλSum"
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
                                          "consequent": {
                                            "type": "ExpressionStatement",
                                            "expression": {
                                              "type": "AssignmentExpression",
                                              "operator": "=",
                                              "left": {
                                                "type": "Identifier",
                                                "name": "φ0"
                                              },
                                              "right": {
                                                "type": "UnaryExpression",
                                                "operator": "-",
                                                "argument": {
                                                  "type": "Literal",
                                                  "value": 90,
                                                  "raw": "90"
                                                },
                                                "prefix": true
                                              }
                                            }
                                          },
                                          "alternate": null
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
                                              "type": "MemberExpression",
                                              "computed": true,
                                              "object": {
                                                "type": "Identifier",
                                                "name": "range"
                                              },
                                              "property": {
                                                "type": "Literal",
                                                "value": 0,
                                                "raw": "0"
                                              }
                                            },
                                            "right": {
                                              "type": "Identifier",
                                              "name": "λ0"
                                            }
                                          },
                                          {
                                            "type": "AssignmentExpression",
                                            "operator": "=",
                                            "left": {
                                              "type": "MemberExpression",
                                              "computed": true,
                                              "object": {
                                                "type": "Identifier",
                                                "name": "range"
                                              },
                                              "property": {
                                                "type": "Literal",
                                                "value": 1,
                                                "raw": "1"
                                              }
                                            },
                                            "right": {
                                              "type": "Identifier",
                                              "name": "λ1"
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
                              "kind": "init"
                            }
                          ]
                        }
                      }
                    ],
                    "kind": "var"
                  },
                  {
                    "type": "FunctionDeclaration",
                    "id": {
                      "type": "Identifier",
                      "name": "point"
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
                            "type": "CallExpression",
                            "callee": {
                              "type": "MemberExpression",
                              "computed": false,
                              "object": {
                                "type": "Identifier",
                                "name": "ranges"
                              },
                              "property": {
                                "type": "Identifier",
                                "name": "push"
                              }
                            },
                            "arguments": [
                              {
                                "type": "AssignmentExpression",
                                "operator": "=",
                                "left": {
                                  "type": "Identifier",
                                  "name": "range"
                                },
                                "right": {
                                  "type": "ArrayExpression",
                                  "elements": [
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
                                        "name": "λ1"
                                      },
                                      "right": {
                                        "type": "Identifier",
                                        "name": "λ"
                                      }
                                    }
                                  ]
                                }
                              }
                            ]
                          }
                        },
                        {
                          "type": "IfStatement",
                          "test": {
                            "type": "BinaryExpression",
                            "operator": "<",
                            "left": {
                              "type": "Identifier",
                              "name": "φ"
                            },
                            "right": {
                              "type": "Identifier",
                              "name": "φ0"
                            }
                          },
                          "consequent": {
                            "type": "ExpressionStatement",
                            "expression": {
                              "type": "AssignmentExpression",
                              "operator": "=",
                              "left": {
                                "type": "Identifier",
                                "name": "φ0"
                              },
                              "right": {
                                "type": "Identifier",
                                "name": "φ"
                              }
                            }
                          },
                          "alternate": null
                        },
                        {
                          "type": "IfStatement",
                          "test": {
                            "type": "BinaryExpression",
                            "operator": ">",
                            "left": {
                              "type": "Identifier",
                              "name": "φ"
                            },
                            "right": {
                              "type": "Identifier",
                              "name": "φ1"
                            }
                          },
                          "consequent": {
                            "type": "ExpressionStatement",
                            "expression": {
                              "type": "AssignmentExpression",
                              "operator": "=",
                              "left": {
                                "type": "Identifier",
                                "name": "φ1"
                              },
                              "right": {
                                "type": "Identifier",
                                "name": "φ"
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
                    "type": "FunctionDeclaration",
                    "id": {
                      "type": "Identifier",
                      "name": "linePoint"
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
                                "name": "p"
                              },
                              "init": {
                                "type": "CallExpression",
                                "callee": {
                                  "type": "Identifier",
                                  "name": "d3_geo_cartesian"
                                },
                                "arguments": [
                                  {
                                    "type": "ArrayExpression",
                                    "elements": [
                                      {
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
                                      },
                                      {
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
                          "type": "IfStatement",
                          "test": {
                            "type": "Identifier",
                            "name": "p0"
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
                                      "name": "normal"
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
                                          "name": "p0"
                                        },
                                        {
                                          "type": "Identifier",
                                          "name": "p"
                                        }
                                      ]
                                    }
                                  },
                                  {
                                    "type": "VariableDeclarator",
                                    "id": {
                                      "type": "Identifier",
                                      "name": "equatorial"
                                    },
                                    "init": {
                                      "type": "ArrayExpression",
                                      "elements": [
                                        {
                                          "type": "MemberExpression",
                                          "computed": true,
                                          "object": {
                                            "type": "Identifier",
                                            "name": "normal"
                                          },
                                          "property": {
                                            "type": "Literal",
                                            "value": 1,
                                            "raw": "1"
                                          }
                                        },
                                        {
                                          "type": "UnaryExpression",
                                          "operator": "-",
                                          "argument": {
                                            "type": "MemberExpression",
                                            "computed": true,
                                            "object": {
                                              "type": "Identifier",
                                              "name": "normal"
                                            },
                                            "property": {
                                              "type": "Literal",
                                              "value": 0,
                                              "raw": "0"
                                            }
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
                                      "name": "inflection"
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
                                          "name": "equatorial"
                                        },
                                        {
                                          "type": "Identifier",
                                          "name": "normal"
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
                                      "name": "inflection"
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
                                    "type": "Identifier",
                                    "name": "inflection"
                                  },
                                  "right": {
                                    "type": "CallExpression",
                                    "callee": {
                                      "type": "Identifier",
                                      "name": "d3_geo_spherical"
                                    },
                                    "arguments": [
                                      {
                                        "type": "Identifier",
                                        "name": "inflection"
                                      }
                                    ]
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
                                        "name": "λ_"
                                      }
                                    }
                                  },
                                  {
                                    "type": "VariableDeclarator",
                                    "id": {
                                      "type": "Identifier",
                                      "name": "s"
                                    },
                                    "init": {
                                      "type": "ConditionalExpression",
                                      "test": {
                                        "type": "BinaryExpression",
                                        "operator": ">",
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
                                      "name": "λi"
                                    },
                                    "init": {
                                      "type": "BinaryExpression",
                                      "operator": "*",
                                      "left": {
                                        "type": "BinaryExpression",
                                        "operator": "*",
                                        "left": {
                                          "type": "MemberExpression",
                                          "computed": true,
                                          "object": {
                                            "type": "Identifier",
                                            "name": "inflection"
                                          },
                                          "property": {
                                            "type": "Literal",
                                            "value": 0,
                                            "raw": "0"
                                          }
                                        },
                                        "right": {
                                          "type": "Identifier",
                                          "name": "d3_degrees"
                                        }
                                      },
                                      "right": {
                                        "type": "Identifier",
                                        "name": "s"
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
                                        "type": "CallExpression",
                                        "callee": {
                                          "type": "Identifier",
                                          "name": "abs"
                                        },
                                        "arguments": [
                                          {
                                            "type": "Identifier",
                                            "name": "dλ"
                                          }
                                        ]
                                      },
                                      "right": {
                                        "type": "Literal",
                                        "value": 180,
                                        "raw": "180"
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
                                  "operator": "^",
                                  "left": {
                                    "type": "Identifier",
                                    "name": "antimeridian"
                                  },
                                  "right": {
                                    "type": "LogicalExpression",
                                    "operator": "&&",
                                    "left": {
                                      "type": "BinaryExpression",
                                      "operator": "<",
                                      "left": {
                                        "type": "BinaryExpression",
                                        "operator": "*",
                                        "left": {
                                          "type": "Identifier",
                                          "name": "s"
                                        },
                                        "right": {
                                          "type": "Identifier",
                                          "name": "λ_"
                                        }
                                      },
                                      "right": {
                                        "type": "Identifier",
                                        "name": "λi"
                                      }
                                    },
                                    "right": {
                                      "type": "BinaryExpression",
                                      "operator": "<",
                                      "left": {
                                        "type": "Identifier",
                                        "name": "λi"
                                      },
                                      "right": {
                                        "type": "BinaryExpression",
                                        "operator": "*",
                                        "left": {
                                          "type": "Identifier",
                                          "name": "s"
                                        },
                                        "right": {
                                          "type": "Identifier",
                                          "name": "λ"
                                        }
                                      }
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
                                            "name": "φi"
                                          },
                                          "init": {
                                            "type": "BinaryExpression",
                                            "operator": "*",
                                            "left": {
                                              "type": "MemberExpression",
                                              "computed": true,
                                              "object": {
                                                "type": "Identifier",
                                                "name": "inflection"
                                              },
                                              "property": {
                                                "type": "Literal",
                                                "value": 1,
                                                "raw": "1"
                                              }
                                            },
                                            "right": {
                                              "type": "Identifier",
                                              "name": "d3_degrees"
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
                                        "operator": ">",
                                        "left": {
                                          "type": "Identifier",
                                          "name": "φi"
                                        },
                                        "right": {
                                          "type": "Identifier",
                                          "name": "φ1"
                                        }
                                      },
                                      "consequent": {
                                        "type": "ExpressionStatement",
                                        "expression": {
                                          "type": "AssignmentExpression",
                                          "operator": "=",
                                          "left": {
                                            "type": "Identifier",
                                            "name": "φ1"
                                          },
                                          "right": {
                                            "type": "Identifier",
                                            "name": "φi"
                                          }
                                        }
                                      },
                                      "alternate": null
                                    }
                                  ]
                                },
                                "alternate": {
                                  "type": "IfStatement",
                                  "test": {
                                    "type": "SequenceExpression",
                                    "expressions": [
                                      {
                                        "type": "AssignmentExpression",
                                        "operator": "=",
                                        "left": {
                                          "type": "Identifier",
                                          "name": "λi"
                                        },
                                        "right": {
                                          "type": "BinaryExpression",
                                          "operator": "-",
                                          "left": {
                                            "type": "BinaryExpression",
                                            "operator": "%",
                                            "left": {
                                              "type": "BinaryExpression",
                                              "operator": "+",
                                              "left": {
                                                "type": "Identifier",
                                                "name": "λi"
                                              },
                                              "right": {
                                                "type": "Literal",
                                                "value": 360,
                                                "raw": "360"
                                              }
                                            },
                                            "right": {
                                              "type": "Literal",
                                              "value": 360,
                                              "raw": "360"
                                            }
                                          },
                                          "right": {
                                            "type": "Literal",
                                            "value": 180,
                                            "raw": "180"
                                          }
                                        }
                                      },
                                      {
                                        "type": "BinaryExpression",
                                        "operator": "^",
                                        "left": {
                                          "type": "Identifier",
                                          "name": "antimeridian"
                                        },
                                        "right": {
                                          "type": "LogicalExpression",
                                          "operator": "&&",
                                          "left": {
                                            "type": "BinaryExpression",
                                            "operator": "<",
                                            "left": {
                                              "type": "BinaryExpression",
                                              "operator": "*",
                                              "left": {
                                                "type": "Identifier",
                                                "name": "s"
                                              },
                                              "right": {
                                                "type": "Identifier",
                                                "name": "λ_"
                                              }
                                            },
                                            "right": {
                                              "type": "Identifier",
                                              "name": "λi"
                                            }
                                          },
                                          "right": {
                                            "type": "BinaryExpression",
                                            "operator": "<",
                                            "left": {
                                              "type": "Identifier",
                                              "name": "λi"
                                            },
                                            "right": {
                                              "type": "BinaryExpression",
                                              "operator": "*",
                                              "left": {
                                                "type": "Identifier",
                                                "name": "s"
                                              },
                                              "right": {
                                                "type": "Identifier",
                                                "name": "λ"
                                              }
                                            }
                                          }
                                        }
                                      }
                                    ]
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
                                              "name": "φi"
                                            },
                                            "init": {
                                              "type": "BinaryExpression",
                                              "operator": "*",
                                              "left": {
                                                "type": "UnaryExpression",
                                                "operator": "-",
                                                "argument": {
                                                  "type": "MemberExpression",
                                                  "computed": true,
                                                  "object": {
                                                    "type": "Identifier",
                                                    "name": "inflection"
                                                  },
                                                  "property": {
                                                    "type": "Literal",
                                                    "value": 1,
                                                    "raw": "1"
                                                  }
                                                },
                                                "prefix": true
                                              },
                                              "right": {
                                                "type": "Identifier",
                                                "name": "d3_degrees"
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
                                            "type": "Identifier",
                                            "name": "φi"
                                          },
                                          "right": {
                                            "type": "Identifier",
                                            "name": "φ0"
                                          }
                                        },
                                        "consequent": {
                                          "type": "ExpressionStatement",
                                          "expression": {
                                            "type": "AssignmentExpression",
                                            "operator": "=",
                                            "left": {
                                              "type": "Identifier",
                                              "name": "φ0"
                                            },
                                            "right": {
                                              "type": "Identifier",
                                              "name": "φi"
                                            }
                                          }
                                        },
                                        "alternate": null
                                      }
                                    ]
                                  },
                                  "alternate": {
                                    "type": "BlockStatement",
                                    "body": [
                                      {
                                        "type": "IfStatement",
                                        "test": {
                                          "type": "BinaryExpression",
                                          "operator": "<",
                                          "left": {
                                            "type": "Identifier",
                                            "name": "φ"
                                          },
                                          "right": {
                                            "type": "Identifier",
                                            "name": "φ0"
                                          }
                                        },
                                        "consequent": {
                                          "type": "ExpressionStatement",
                                          "expression": {
                                            "type": "AssignmentExpression",
                                            "operator": "=",
                                            "left": {
                                              "type": "Identifier",
                                              "name": "φ0"
                                            },
                                            "right": {
                                              "type": "Identifier",
                                              "name": "φ"
                                            }
                                          }
                                        },
                                        "alternate": null
                                      },
                                      {
                                        "type": "IfStatement",
                                        "test": {
                                          "type": "BinaryExpression",
                                          "operator": ">",
                                          "left": {
                                            "type": "Identifier",
                                            "name": "φ"
                                          },
                                          "right": {
                                            "type": "Identifier",
                                            "name": "φ1"
                                          }
                                        },
                                        "consequent": {
                                          "type": "ExpressionStatement",
                                          "expression": {
                                            "type": "AssignmentExpression",
                                            "operator": "=",
                                            "left": {
                                              "type": "Identifier",
                                              "name": "φ1"
                                            },
                                            "right": {
                                              "type": "Identifier",
                                              "name": "φ"
                                            }
                                          }
                                        },
                                        "alternate": null
                                      }
                                    ]
                                  }
                                }
                              },
                              {
                                "type": "IfStatement",
                                "test": {
                                  "type": "Identifier",
                                  "name": "antimeridian"
                                },
                                "consequent": {
                                  "type": "BlockStatement",
                                  "body": [
                                    {
                                      "type": "IfStatement",
                                      "test": {
                                        "type": "BinaryExpression",
                                        "operator": "<",
                                        "left": {
                                          "type": "Identifier",
                                          "name": "λ"
                                        },
                                        "right": {
                                          "type": "Identifier",
                                          "name": "λ_"
                                        }
                                      },
                                      "consequent": {
                                        "type": "BlockStatement",
                                        "body": [
                                          {
                                            "type": "IfStatement",
                                            "test": {
                                              "type": "BinaryExpression",
                                              "operator": ">",
                                              "left": {
                                                "type": "CallExpression",
                                                "callee": {
                                                  "type": "Identifier",
                                                  "name": "angle"
                                                },
                                                "arguments": [
                                                  {
                                                    "type": "Identifier",
                                                    "name": "λ0"
                                                  },
                                                  {
                                                    "type": "Identifier",
                                                    "name": "λ"
                                                  }
                                                ]
                                              },
                                              "right": {
                                                "type": "CallExpression",
                                                "callee": {
                                                  "type": "Identifier",
                                                  "name": "angle"
                                                },
                                                "arguments": [
                                                  {
                                                    "type": "Identifier",
                                                    "name": "λ0"
                                                  },
                                                  {
                                                    "type": "Identifier",
                                                    "name": "λ1"
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
                                                  "name": "λ1"
                                                },
                                                "right": {
                                                  "type": "Identifier",
                                                  "name": "λ"
                                                }
                                              }
                                            },
                                            "alternate": null
                                          }
                                        ]
                                      },
                                      "alternate": {
                                        "type": "BlockStatement",
                                        "body": [
                                          {
                                            "type": "IfStatement",
                                            "test": {
                                              "type": "BinaryExpression",
                                              "operator": ">",
                                              "left": {
                                                "type": "CallExpression",
                                                "callee": {
                                                  "type": "Identifier",
                                                  "name": "angle"
                                                },
                                                "arguments": [
                                                  {
                                                    "type": "Identifier",
                                                    "name": "λ"
                                                  },
                                                  {
                                                    "type": "Identifier",
                                                    "name": "λ1"
                                                  }
                                                ]
                                              },
                                              "right": {
                                                "type": "CallExpression",
                                                "callee": {
                                                  "type": "Identifier",
                                                  "name": "angle"
                                                },
                                                "arguments": [
                                                  {
                                                    "type": "Identifier",
                                                    "name": "λ0"
                                                  },
                                                  {
                                                    "type": "Identifier",
                                                    "name": "λ1"
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
                                                  "name": "λ0"
                                                },
                                                "right": {
                                                  "type": "Identifier",
                                                  "name": "λ"
                                                }
                                              }
                                            },
                                            "alternate": null
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
                                      "type": "IfStatement",
                                      "test": {
                                        "type": "BinaryExpression",
                                        "operator": ">=",
                                        "left": {
                                          "type": "Identifier",
                                          "name": "λ1"
                                        },
                                        "right": {
                                          "type": "Identifier",
                                          "name": "λ0"
                                        }
                                      },
                                      "consequent": {
                                        "type": "BlockStatement",
                                        "body": [
                                          {
                                            "type": "IfStatement",
                                            "test": {
                                              "type": "BinaryExpression",
                                              "operator": "<",
                                              "left": {
                                                "type": "Identifier",
                                                "name": "λ"
                                              },
                                              "right": {
                                                "type": "Identifier",
                                                "name": "λ0"
                                              }
                                            },
                                            "consequent": {
                                              "type": "ExpressionStatement",
                                              "expression": {
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
                                              }
                                            },
                                            "alternate": null
                                          },
                                          {
                                            "type": "IfStatement",
                                            "test": {
                                              "type": "BinaryExpression",
                                              "operator": ">",
                                              "left": {
                                                "type": "Identifier",
                                                "name": "λ"
                                              },
                                              "right": {
                                                "type": "Identifier",
                                                "name": "λ1"
                                              }
                                            },
                                            "consequent": {
                                              "type": "ExpressionStatement",
                                              "expression": {
                                                "type": "AssignmentExpression",
                                                "operator": "=",
                                                "left": {
                                                  "type": "Identifier",
                                                  "name": "λ1"
                                                },
                                                "right": {
                                                  "type": "Identifier",
                                                  "name": "λ"
                                                }
                                              }
                                            },
                                            "alternate": null
                                          }
                                        ]
                                      },
                                      "alternate": {
                                        "type": "BlockStatement",
                                        "body": [
                                          {
                                            "type": "IfStatement",
                                            "test": {
                                              "type": "BinaryExpression",
                                              "operator": ">",
                                              "left": {
                                                "type": "Identifier",
                                                "name": "λ"
                                              },
                                              "right": {
                                                "type": "Identifier",
                                                "name": "λ_"
                                              }
                                            },
                                            "consequent": {
                                              "type": "BlockStatement",
                                              "body": [
                                                {
                                                  "type": "IfStatement",
                                                  "test": {
                                                    "type": "BinaryExpression",
                                                    "operator": ">",
                                                    "left": {
                                                      "type": "CallExpression",
                                                      "callee": {
                                                        "type": "Identifier",
                                                        "name": "angle"
                                                      },
                                                      "arguments": [
                                                        {
                                                          "type": "Identifier",
                                                          "name": "λ0"
                                                        },
                                                        {
                                                          "type": "Identifier",
                                                          "name": "λ"
                                                        }
                                                      ]
                                                    },
                                                    "right": {
                                                      "type": "CallExpression",
                                                      "callee": {
                                                        "type": "Identifier",
                                                        "name": "angle"
                                                      },
                                                      "arguments": [
                                                        {
                                                          "type": "Identifier",
                                                          "name": "λ0"
                                                        },
                                                        {
                                                          "type": "Identifier",
                                                          "name": "λ1"
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
                                                        "name": "λ1"
                                                      },
                                                      "right": {
                                                        "type": "Identifier",
                                                        "name": "λ"
                                                      }
                                                    }
                                                  },
                                                  "alternate": null
                                                }
                                              ]
                                            },
                                            "alternate": {
                                              "type": "BlockStatement",
                                              "body": [
                                                {
                                                  "type": "IfStatement",
                                                  "test": {
                                                    "type": "BinaryExpression",
                                                    "operator": ">",
                                                    "left": {
                                                      "type": "CallExpression",
                                                      "callee": {
                                                        "type": "Identifier",
                                                        "name": "angle"
                                                      },
                                                      "arguments": [
                                                        {
                                                          "type": "Identifier",
                                                          "name": "λ"
                                                        },
                                                        {
                                                          "type": "Identifier",
                                                          "name": "λ1"
                                                        }
                                                      ]
                                                    },
                                                    "right": {
                                                      "type": "CallExpression",
                                                      "callee": {
                                                        "type": "Identifier",
                                                        "name": "angle"
                                                      },
                                                      "arguments": [
                                                        {
                                                          "type": "Identifier",
                                                          "name": "λ0"
                                                        },
                                                        {
                                                          "type": "Identifier",
                                                          "name": "λ1"
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
                                                        "name": "λ0"
                                                      },
                                                      "right": {
                                                        "type": "Identifier",
                                                        "name": "λ"
                                                      }
                                                    }
                                                  },
                                                  "alternate": null
                                                }
                                              ]
                                            }
                                          }
                                        ]
                                      }
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
                                    "type": "Identifier",
                                    "name": "point"
                                  },
                                  "arguments": [
                                    {
                                      "type": "Identifier",
                                      "name": "λ"
                                    },
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
                            "type": "SequenceExpression",
                            "expressions": [
                              {
                                "type": "AssignmentExpression",
                                "operator": "=",
                                "left": {
                                  "type": "Identifier",
                                  "name": "p0"
                                },
                                "right": {
                                  "type": "Identifier",
                                  "name": "p"
                                }
                              },
                              {
                                "type": "AssignmentExpression",
                                "operator": "=",
                                "left": {
                                  "type": "Identifier",
                                  "name": "λ_"
                                },
                                "right": {
                                  "type": "Identifier",
                                  "name": "λ"
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
                    "type": "FunctionDeclaration",
                    "id": {
                      "type": "Identifier",
                      "name": "lineStart"
                    },
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
                                "name": "bound"
                              },
                              "property": {
                                "type": "Identifier",
                                "name": "point"
                              }
                            },
                            "right": {
                              "type": "Identifier",
                              "name": "linePoint"
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
                      "name": "lineEnd"
                    },
                    "params": [],
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
                                  "type": "MemberExpression",
                                  "computed": true,
                                  "object": {
                                    "type": "Identifier",
                                    "name": "range"
                                  },
                                  "property": {
                                    "type": "Literal",
                                    "value": 0,
                                    "raw": "0"
                                  }
                                },
                                "right": {
                                  "type": "Identifier",
                                  "name": "λ0"
                                }
                              },
                              {
                                "type": "AssignmentExpression",
                                "operator": "=",
                                "left": {
                                  "type": "MemberExpression",
                                  "computed": true,
                                  "object": {
                                    "type": "Identifier",
                                    "name": "range"
                                  },
                                  "property": {
                                    "type": "Literal",
                                    "value": 1,
                                    "raw": "1"
                                  }
                                },
                                "right": {
                                  "type": "Identifier",
                                  "name": "λ1"
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
                                "name": "bound"
                              },
                              "property": {
                                "type": "Identifier",
                                "name": "point"
                              }
                            },
                            "right": {
                              "type": "Identifier",
                              "name": "point"
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
                              "name": "p0"
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
                    "rest": null,
                    "generator": false,
                    "expression": false
                  },
                  {
                    "type": "FunctionDeclaration",
                    "id": {
                      "type": "Identifier",
                      "name": "ringPoint"
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
                          "type": "IfStatement",
                          "test": {
                            "type": "Identifier",
                            "name": "p0"
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
                                        "name": "λ_"
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
                                    "name": "dλSum"
                                  },
                                  "right": {
                                    "type": "ConditionalExpression",
                                    "test": {
                                      "type": "BinaryExpression",
                                      "operator": ">",
                                      "left": {
                                        "type": "CallExpression",
                                        "callee": {
                                          "type": "Identifier",
                                          "name": "abs"
                                        },
                                        "arguments": [
                                          {
                                            "type": "Identifier",
                                            "name": "dλ"
                                          }
                                        ]
                                      },
                                      "right": {
                                        "type": "Literal",
                                        "value": 180,
                                        "raw": "180"
                                      }
                                    },
                                    "consequent": {
                                      "type": "BinaryExpression",
                                      "operator": "+",
                                      "left": {
                                        "type": "Identifier",
                                        "name": "dλ"
                                      },
                                      "right": {
                                        "type": "ConditionalExpression",
                                        "test": {
                                          "type": "BinaryExpression",
                                          "operator": ">",
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
                                          "value": 360,
                                          "raw": "360"
                                        },
                                        "alternate": {
                                          "type": "UnaryExpression",
                                          "operator": "-",
                                          "argument": {
                                            "type": "Literal",
                                            "value": 360,
                                            "raw": "360"
                                          },
                                          "prefix": true
                                        }
                                      }
                                    },
                                    "alternate": {
                                      "type": "Identifier",
                                      "name": "dλ"
                                    }
                                  }
                                }
                              }
                            ]
                          },
                          "alternate": {
                            "type": "ExpressionStatement",
                            "expression": {
                              "type": "SequenceExpression",
                              "expressions": [
                                {
                                  "type": "AssignmentExpression",
                                  "operator": "=",
                                  "left": {
                                    "type": "Identifier",
                                    "name": "λ__"
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
                                    "name": "φ__"
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "name": "φ"
                                  }
                                }
                              ]
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
                                "name": "d3_geo_area"
                              },
                              "property": {
                                "type": "Identifier",
                                "name": "point"
                              }
                            },
                            "arguments": [
                              {
                                "type": "Identifier",
                                "name": "λ"
                              },
                              {
                                "type": "Identifier",
                                "name": "φ"
                              }
                            ]
                          }
                        },
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "CallExpression",
                            "callee": {
                              "type": "Identifier",
                              "name": "linePoint"
                            },
                            "arguments": [
                              {
                                "type": "Identifier",
                                "name": "λ"
                              },
                              {
                                "type": "Identifier",
                                "name": "φ"
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
                    "type": "FunctionDeclaration",
                    "id": {
                      "type": "Identifier",
                      "name": "ringStart"
                    },
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
                                "name": "d3_geo_area"
                              },
                              "property": {
                                "type": "Identifier",
                                "name": "lineStart"
                              }
                            },
                            "arguments": []
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
                      "name": "ringEnd"
                    },
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
                              "name": "ringPoint"
                            },
                            "arguments": [
                              {
                                "type": "Identifier",
                                "name": "λ__"
                              },
                              {
                                "type": "Identifier",
                                "name": "φ__"
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
                                "name": "d3_geo_area"
                              },
                              "property": {
                                "type": "Identifier",
                                "name": "lineEnd"
                              }
                            },
                            "arguments": []
                          }
                        },
                        {
                          "type": "IfStatement",
                          "test": {
                            "type": "BinaryExpression",
                            "operator": ">",
                            "left": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "Identifier",
                                "name": "abs"
                              },
                              "arguments": [
                                {
                                  "type": "Identifier",
                                  "name": "dλSum"
                                }
                              ]
                            },
                            "right": {
                              "type": "Identifier",
                              "name": "ε"
                            }
                          },
                          "consequent": {
                            "type": "ExpressionStatement",
                            "expression": {
                              "type": "AssignmentExpression",
                              "operator": "=",
                              "left": {
                                "type": "Identifier",
                                "name": "λ0"
                              },
                              "right": {
                                "type": "UnaryExpression",
                                "operator": "-",
                                "argument": {
                                  "type": "AssignmentExpression",
                                  "operator": "=",
                                  "left": {
                                    "type": "Identifier",
                                    "name": "λ1"
                                  },
                                  "right": {
                                    "type": "Literal",
                                    "value": 180,
                                    "raw": "180"
                                  }
                                },
                                "prefix": true
                              }
                            }
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
                                  "type": "MemberExpression",
                                  "computed": true,
                                  "object": {
                                    "type": "Identifier",
                                    "name": "range"
                                  },
                                  "property": {
                                    "type": "Literal",
                                    "value": 0,
                                    "raw": "0"
                                  }
                                },
                                "right": {
                                  "type": "Identifier",
                                  "name": "λ0"
                                }
                              },
                              {
                                "type": "AssignmentExpression",
                                "operator": "=",
                                "left": {
                                  "type": "MemberExpression",
                                  "computed": true,
                                  "object": {
                                    "type": "Identifier",
                                    "name": "range"
                                  },
                                  "property": {
                                    "type": "Literal",
                                    "value": 1,
                                    "raw": "1"
                                  }
                                },
                                "right": {
                                  "type": "Identifier",
                                  "name": "λ1"
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
                              "type": "Identifier",
                              "name": "p0"
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
                    "rest": null,
                    "generator": false,
                    "expression": false
                  },
                  {
                    "type": "FunctionDeclaration",
                    "id": {
                      "type": "Identifier",
                      "name": "angle"
                    },
                    "params": [
                      {
                        "type": "Identifier",
                        "name": "λ0"
                      },
                      {
                        "type": "Identifier",
                        "name": "λ1"
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
                              "operator": "<",
                              "left": {
                                "type": "AssignmentExpression",
                                "operator": "-=",
                                "left": {
                                  "type": "Identifier",
                                  "name": "λ1"
                                },
                                "right": {
                                  "type": "Identifier",
                                  "name": "λ0"
                                }
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
                                "type": "Identifier",
                                "name": "λ1"
                              },
                              "right": {
                                "type": "Literal",
                                "value": 360,
                                "raw": "360"
                              }
                            },
                            "alternate": {
                              "type": "Identifier",
                              "name": "λ1"
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
                      "name": "compareRanges"
                    },
                    "params": [
                      {
                        "type": "Identifier",
                        "name": "a"
                      },
                      {
                        "type": "Identifier",
                        "name": "b"
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
                            "operator": "-",
                            "left": {
                              "type": "MemberExpression",
                              "computed": true,
                              "object": {
                                "type": "Identifier",
                                "name": "a"
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
                                "name": "b"
                              },
                              "property": {
                                "type": "Literal",
                                "value": 0,
                                "raw": "0"
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
                      "name": "withinRange"
                    },
                    "params": [
                      {
                        "type": "Identifier",
                        "name": "x"
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
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "ConditionalExpression",
                            "test": {
                              "type": "BinaryExpression",
                              "operator": "<=",
                              "left": {
                                "type": "MemberExpression",
                                "computed": true,
                                "object": {
                                  "type": "Identifier",
                                  "name": "range"
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
                                  "name": "range"
                                },
                                "property": {
                                  "type": "Literal",
                                  "value": 1,
                                  "raw": "1"
                                }
                              }
                            },
                            "consequent": {
                              "type": "LogicalExpression",
                              "operator": "&&",
                              "left": {
                                "type": "BinaryExpression",
                                "operator": "<=",
                                "left": {
                                  "type": "MemberExpression",
                                  "computed": true,
                                  "object": {
                                    "type": "Identifier",
                                    "name": "range"
                                  },
                                  "property": {
                                    "type": "Literal",
                                    "value": 0,
                                    "raw": "0"
                                  }
                                },
                                "right": {
                                  "type": "Identifier",
                                  "name": "x"
                                }
                              },
                              "right": {
                                "type": "BinaryExpression",
                                "operator": "<=",
                                "left": {
                                  "type": "Identifier",
                                  "name": "x"
                                },
                                "right": {
                                  "type": "MemberExpression",
                                  "computed": true,
                                  "object": {
                                    "type": "Identifier",
                                    "name": "range"
                                  },
                                  "property": {
                                    "type": "Literal",
                                    "value": 1,
                                    "raw": "1"
                                  }
                                }
                              }
                            },
                            "alternate": {
                              "type": "LogicalExpression",
                              "operator": "||",
                              "left": {
                                "type": "BinaryExpression",
                                "operator": "<",
                                "left": {
                                  "type": "Identifier",
                                  "name": "x"
                                },
                                "right": {
                                  "type": "MemberExpression",
                                  "computed": true,
                                  "object": {
                                    "type": "Identifier",
                                    "name": "range"
                                  },
                                  "property": {
                                    "type": "Literal",
                                    "value": 0,
                                    "raw": "0"
                                  }
                                }
                              },
                              "right": {
                                "type": "BinaryExpression",
                                "operator": "<",
                                "left": {
                                  "type": "MemberExpression",
                                  "computed": true,
                                  "object": {
                                    "type": "Identifier",
                                    "name": "range"
                                  },
                                  "property": {
                                    "type": "Literal",
                                    "value": 1,
                                    "raw": "1"
                                  }
                                },
                                "right": {
                                  "type": "Identifier",
                                  "name": "x"
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
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "FunctionExpression",
                      "id": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "name": "feature"
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
                                "name": "φ1"
                              },
                              "right": {
                                "type": "AssignmentExpression",
                                "operator": "=",
                                "left": {
                                  "type": "Identifier",
                                  "name": "λ1"
                                },
                                "right": {
                                  "type": "UnaryExpression",
                                  "operator": "-",
                                  "argument": {
                                    "type": "AssignmentExpression",
                                    "operator": "=",
                                    "left": {
                                      "type": "Identifier",
                                      "name": "λ0"
                                    },
                                    "right": {
                                      "type": "AssignmentExpression",
                                      "operator": "=",
                                      "left": {
                                        "type": "Identifier",
                                        "name": "φ0"
                                      },
                                      "right": {
                                        "type": "Identifier",
                                        "name": "Infinity"
                                      }
                                    }
                                  },
                                  "prefix": true
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
                                "type": "Identifier",
                                "name": "ranges"
                              },
                              "right": {
                                "type": "ArrayExpression",
                                "elements": []
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
                                  "name": "feature"
                                },
                                {
                                  "type": "Identifier",
                                  "name": "bound"
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
                                  "name": "n"
                                },
                                "init": {
                                  "type": "MemberExpression",
                                  "computed": false,
                                  "object": {
                                    "type": "Identifier",
                                    "name": "ranges"
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
                              "type": "Identifier",
                              "name": "n"
                            },
                            "consequent": {
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
                                        "name": "ranges"
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "name": "sort"
                                      }
                                    },
                                    "arguments": [
                                      {
                                        "type": "Identifier",
                                        "name": "compareRanges"
                                      }
                                    ]
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
                                          "value": 1,
                                          "raw": "1"
                                        }
                                      },
                                      {
                                        "type": "VariableDeclarator",
                                        "id": {
                                          "type": "Identifier",
                                          "name": "a"
                                        },
                                        "init": {
                                          "type": "MemberExpression",
                                          "computed": true,
                                          "object": {
                                            "type": "Identifier",
                                            "name": "ranges"
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
                                          "name": "b"
                                        },
                                        "init": null
                                      },
                                      {
                                        "type": "VariableDeclarator",
                                        "id": {
                                          "type": "Identifier",
                                          "name": "merged"
                                        },
                                        "init": {
                                          "type": "ArrayExpression",
                                          "elements": [
                                            {
                                              "type": "Identifier",
                                              "name": "a"
                                            }
                                          ]
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
                                        "type": "ExpressionStatement",
                                        "expression": {
                                          "type": "AssignmentExpression",
                                          "operator": "=",
                                          "left": {
                                            "type": "Identifier",
                                            "name": "b"
                                          },
                                          "right": {
                                            "type": "MemberExpression",
                                            "computed": true,
                                            "object": {
                                              "type": "Identifier",
                                              "name": "ranges"
                                            },
                                            "property": {
                                              "type": "Identifier",
                                              "name": "i"
                                            }
                                          }
                                        }
                                      },
                                      {
                                        "type": "IfStatement",
                                        "test": {
                                          "type": "LogicalExpression",
                                          "operator": "||",
                                          "left": {
                                            "type": "CallExpression",
                                            "callee": {
                                              "type": "Identifier",
                                              "name": "withinRange"
                                            },
                                            "arguments": [
                                              {
                                                "type": "MemberExpression",
                                                "computed": true,
                                                "object": {
                                                  "type": "Identifier",
                                                  "name": "b"
                                                },
                                                "property": {
                                                  "type": "Literal",
                                                  "value": 0,
                                                  "raw": "0"
                                                }
                                              },
                                              {
                                                "type": "Identifier",
                                                "name": "a"
                                              }
                                            ]
                                          },
                                          "right": {
                                            "type": "CallExpression",
                                            "callee": {
                                              "type": "Identifier",
                                              "name": "withinRange"
                                            },
                                            "arguments": [
                                              {
                                                "type": "MemberExpression",
                                                "computed": true,
                                                "object": {
                                                  "type": "Identifier",
                                                  "name": "b"
                                                },
                                                "property": {
                                                  "type": "Literal",
                                                  "value": 1,
                                                  "raw": "1"
                                                }
                                              },
                                              {
                                                "type": "Identifier",
                                                "name": "a"
                                              }
                                            ]
                                          }
                                        },
                                        "consequent": {
                                          "type": "BlockStatement",
                                          "body": [
                                            {
                                              "type": "IfStatement",
                                              "test": {
                                                "type": "BinaryExpression",
                                                "operator": ">",
                                                "left": {
                                                  "type": "CallExpression",
                                                  "callee": {
                                                    "type": "Identifier",
                                                    "name": "angle"
                                                  },
                                                  "arguments": [
                                                    {
                                                      "type": "MemberExpression",
                                                      "computed": true,
                                                      "object": {
                                                        "type": "Identifier",
                                                        "name": "a"
                                                      },
                                                      "property": {
                                                        "type": "Literal",
                                                        "value": 0,
                                                        "raw": "0"
                                                      }
                                                    },
                                                    {
                                                      "type": "MemberExpression",
                                                      "computed": true,
                                                      "object": {
                                                        "type": "Identifier",
                                                        "name": "b"
                                                      },
                                                      "property": {
                                                        "type": "Literal",
                                                        "value": 1,
                                                        "raw": "1"
                                                      }
                                                    }
                                                  ]
                                                },
                                                "right": {
                                                  "type": "CallExpression",
                                                  "callee": {
                                                    "type": "Identifier",
                                                    "name": "angle"
                                                  },
                                                  "arguments": [
                                                    {
                                                      "type": "MemberExpression",
                                                      "computed": true,
                                                      "object": {
                                                        "type": "Identifier",
                                                        "name": "a"
                                                      },
                                                      "property": {
                                                        "type": "Literal",
                                                        "value": 0,
                                                        "raw": "0"
                                                      }
                                                    },
                                                    {
                                                      "type": "MemberExpression",
                                                      "computed": true,
                                                      "object": {
                                                        "type": "Identifier",
                                                        "name": "a"
                                                      },
                                                      "property": {
                                                        "type": "Literal",
                                                        "value": 1,
                                                        "raw": "1"
                                                      }
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
                                                    "type": "MemberExpression",
                                                    "computed": true,
                                                    "object": {
                                                      "type": "Identifier",
                                                      "name": "a"
                                                    },
                                                    "property": {
                                                      "type": "Literal",
                                                      "value": 1,
                                                      "raw": "1"
                                                    }
                                                  },
                                                  "right": {
                                                    "type": "MemberExpression",
                                                    "computed": true,
                                                    "object": {
                                                      "type": "Identifier",
                                                      "name": "b"
                                                    },
                                                    "property": {
                                                      "type": "Literal",
                                                      "value": 1,
                                                      "raw": "1"
                                                    }
                                                  }
                                                }
                                              },
                                              "alternate": null
                                            },
                                            {
                                              "type": "IfStatement",
                                              "test": {
                                                "type": "BinaryExpression",
                                                "operator": ">",
                                                "left": {
                                                  "type": "CallExpression",
                                                  "callee": {
                                                    "type": "Identifier",
                                                    "name": "angle"
                                                  },
                                                  "arguments": [
                                                    {
                                                      "type": "MemberExpression",
                                                      "computed": true,
                                                      "object": {
                                                        "type": "Identifier",
                                                        "name": "b"
                                                      },
                                                      "property": {
                                                        "type": "Literal",
                                                        "value": 0,
                                                        "raw": "0"
                                                      }
                                                    },
                                                    {
                                                      "type": "MemberExpression",
                                                      "computed": true,
                                                      "object": {
                                                        "type": "Identifier",
                                                        "name": "a"
                                                      },
                                                      "property": {
                                                        "type": "Literal",
                                                        "value": 1,
                                                        "raw": "1"
                                                      }
                                                    }
                                                  ]
                                                },
                                                "right": {
                                                  "type": "CallExpression",
                                                  "callee": {
                                                    "type": "Identifier",
                                                    "name": "angle"
                                                  },
                                                  "arguments": [
                                                    {
                                                      "type": "MemberExpression",
                                                      "computed": true,
                                                      "object": {
                                                        "type": "Identifier",
                                                        "name": "a"
                                                      },
                                                      "property": {
                                                        "type": "Literal",
                                                        "value": 0,
                                                        "raw": "0"
                                                      }
                                                    },
                                                    {
                                                      "type": "MemberExpression",
                                                      "computed": true,
                                                      "object": {
                                                        "type": "Identifier",
                                                        "name": "a"
                                                      },
                                                      "property": {
                                                        "type": "Literal",
                                                        "value": 1,
                                                        "raw": "1"
                                                      }
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
                                                    "type": "MemberExpression",
                                                    "computed": true,
                                                    "object": {
                                                      "type": "Identifier",
                                                      "name": "a"
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
                                                      "name": "b"
                                                    },
                                                    "property": {
                                                      "type": "Literal",
                                                      "value": 0,
                                                      "raw": "0"
                                                    }
                                                  }
                                                }
                                              },
                                              "alternate": null
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
                                                    "type": "Identifier",
                                                    "name": "merged"
                                                  },
                                                  "property": {
                                                    "type": "Identifier",
                                                    "name": "push"
                                                  }
                                                },
                                                "arguments": [
                                                  {
                                                    "type": "AssignmentExpression",
                                                    "operator": "=",
                                                    "left": {
                                                      "type": "Identifier",
                                                      "name": "a"
                                                    },
                                                    "right": {
                                                      "type": "Identifier",
                                                      "name": "b"
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
                                  "type": "VariableDeclaration",
                                  "declarations": [
                                    {
                                      "type": "VariableDeclarator",
                                      "id": {
                                        "type": "Identifier",
                                        "name": "best"
                                      },
                                      "init": {
                                        "type": "UnaryExpression",
                                        "operator": "-",
                                        "argument": {
                                          "type": "Identifier",
                                          "name": "Infinity"
                                        },
                                        "prefix": true
                                      }
                                    },
                                    {
                                      "type": "VariableDeclarator",
                                      "id": {
                                        "type": "Identifier",
                                        "name": "dλ"
                                      },
                                      "init": null
                                    }
                                  ],
                                  "kind": "var"
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
                                          "name": "n"
                                        },
                                        "init": {
                                          "type": "BinaryExpression",
                                          "operator": "-",
                                          "left": {
                                            "type": "MemberExpression",
                                            "computed": false,
                                            "object": {
                                              "type": "Identifier",
                                              "name": "merged"
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
                                      },
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
                                          "name": "a"
                                        },
                                        "init": {
                                          "type": "MemberExpression",
                                          "computed": true,
                                          "object": {
                                            "type": "Identifier",
                                            "name": "merged"
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "name": "n"
                                          }
                                        }
                                      },
                                      {
                                        "type": "VariableDeclarator",
                                        "id": {
                                          "type": "Identifier",
                                          "name": "b"
                                        },
                                        "init": null
                                      }
                                    ],
                                    "kind": "var"
                                  },
                                  "test": {
                                    "type": "BinaryExpression",
                                    "operator": "<=",
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
                                    "type": "SequenceExpression",
                                    "expressions": [
                                      {
                                        "type": "AssignmentExpression",
                                        "operator": "=",
                                        "left": {
                                          "type": "Identifier",
                                          "name": "a"
                                        },
                                        "right": {
                                          "type": "Identifier",
                                          "name": "b"
                                        }
                                      },
                                      {
                                        "type": "UpdateExpression",
                                        "operator": "++",
                                        "argument": {
                                          "type": "Identifier",
                                          "name": "i"
                                        },
                                        "prefix": true
                                      }
                                    ]
                                  },
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
                                            "name": "b"
                                          },
                                          "right": {
                                            "type": "MemberExpression",
                                            "computed": true,
                                            "object": {
                                              "type": "Identifier",
                                              "name": "merged"
                                            },
                                            "property": {
                                              "type": "Identifier",
                                              "name": "i"
                                            }
                                          }
                                        }
                                      },
                                      {
                                        "type": "IfStatement",
                                        "test": {
                                          "type": "BinaryExpression",
                                          "operator": ">",
                                          "left": {
                                            "type": "AssignmentExpression",
                                            "operator": "=",
                                            "left": {
                                              "type": "Identifier",
                                              "name": "dλ"
                                            },
                                            "right": {
                                              "type": "CallExpression",
                                              "callee": {
                                                "type": "Identifier",
                                                "name": "angle"
                                              },
                                              "arguments": [
                                                {
                                                  "type": "MemberExpression",
                                                  "computed": true,
                                                  "object": {
                                                    "type": "Identifier",
                                                    "name": "a"
                                                  },
                                                  "property": {
                                                    "type": "Literal",
                                                    "value": 1,
                                                    "raw": "1"
                                                  }
                                                },
                                                {
                                                  "type": "MemberExpression",
                                                  "computed": true,
                                                  "object": {
                                                    "type": "Identifier",
                                                    "name": "b"
                                                  },
                                                  "property": {
                                                    "type": "Literal",
                                                    "value": 0,
                                                    "raw": "0"
                                                  }
                                                }
                                              ]
                                            }
                                          },
                                          "right": {
                                            "type": "Identifier",
                                            "name": "best"
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
                                                  "name": "best"
                                                },
                                                "right": {
                                                  "type": "Identifier",
                                                  "name": "dλ"
                                                }
                                              },
                                              {
                                                "type": "AssignmentExpression",
                                                "operator": "=",
                                                "left": {
                                                  "type": "Identifier",
                                                  "name": "λ0"
                                                },
                                                "right": {
                                                  "type": "MemberExpression",
                                                  "computed": true,
                                                  "object": {
                                                    "type": "Identifier",
                                                    "name": "b"
                                                  },
                                                  "property": {
                                                    "type": "Literal",
                                                    "value": 0,
                                                    "raw": "0"
                                                  }
                                                }
                                              },
                                              {
                                                "type": "AssignmentExpression",
                                                "operator": "=",
                                                "left": {
                                                  "type": "Identifier",
                                                  "name": "λ1"
                                                },
                                                "right": {
                                                  "type": "MemberExpression",
                                                  "computed": true,
                                                  "object": {
                                                    "type": "Identifier",
                                                    "name": "a"
                                                  },
                                                  "property": {
                                                    "type": "Literal",
                                                    "value": 1,
                                                    "raw": "1"
                                                  }
                                                }
                                              }
                                            ]
                                          }
                                        },
                                        "alternate": null
                                      }
                                    ]
                                  }
                                }
                              ]
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
                                "name": "ranges"
                              },
                              "right": {
                                "type": "AssignmentExpression",
                                "operator": "=",
                                "left": {
                                  "type": "Identifier",
                                  "name": "range"
                                },
                                "right": {
                                  "type": "Literal",
                                  "value": null,
                                  "raw": "null"
                                }
                              }
                            }
                          },
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "ConditionalExpression",
                              "test": {
                                "type": "LogicalExpression",
                                "operator": "||",
                                "left": {
                                  "type": "BinaryExpression",
                                  "operator": "===",
                                  "left": {
                                    "type": "Identifier",
                                    "name": "λ0"
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "name": "Infinity"
                                  }
                                },
                                "right": {
                                  "type": "BinaryExpression",
                                  "operator": "===",
                                  "left": {
                                    "type": "Identifier",
                                    "name": "φ0"
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "name": "Infinity"
                                  }
                                }
                              },
                              "consequent": {
                                "type": "ArrayExpression",
                                "elements": [
                                  {
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
                                  {
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
                                  }
                                ]
                              },
                              "alternate": {
                                "type": "ArrayExpression",
                                "elements": [
                                  {
                                    "type": "ArrayExpression",
                                    "elements": [
                                      {
                                        "type": "Identifier",
                                        "name": "λ0"
                                      },
                                      {
                                        "type": "Identifier",
                                        "name": "φ0"
                                      }
                                    ]
                                  },
                                  {
                                    "type": "ArrayExpression",
                                    "elements": [
                                      {
                                        "type": "Identifier",
                                        "name": "λ1"
                                      },
                                      {
                                        "type": "Identifier",
                                        "name": "φ1"
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
                    }
                  }
                ]
              },
              "rest": null,
              "generator": false,
              "expression": false
            },
            "arguments": []
          }
        }
      }
    ]
  }
}