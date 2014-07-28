{
  "filepath": "/geo/path-buffer.js",
  "shared": [],
  "dependencies": [],
  "helpers": [
    "d3_geo_pathBuffer",
    "d3_geo_pathBufferCircle"
  ],
  "exports": [],
  "ast": {
    "type": "Program",
    "body": [
      {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "name": "d3_geo_pathBuffer"
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
                    "name": "pointCircle"
                  },
                  "init": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "name": "d3_geo_pathBufferCircle"
                    },
                    "arguments": [
                      {
                        "type": "Literal",
                        "value": 4.5,
                        "raw": "4.5"
                      }
                    ]
                  }
                },
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "name": "buffer"
                  },
                  "init": {
                    "type": "ArrayExpression",
                    "elements": []
                  }
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
                    "name": "stream"
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
                                      "name": "stream"
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "name": "point"
                                    }
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "name": "pointLineStart"
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
                                      "name": "stream"
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "name": "lineEnd"
                                    }
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "name": "lineEndPolygon"
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
                                "type": "ExpressionStatement",
                                "expression": {
                                  "type": "AssignmentExpression",
                                  "operator": "=",
                                  "left": {
                                    "type": "MemberExpression",
                                    "computed": false,
                                    "object": {
                                      "type": "Identifier",
                                      "name": "stream"
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
                                "type": "ExpressionStatement",
                                "expression": {
                                  "type": "AssignmentExpression",
                                  "operator": "=",
                                  "left": {
                                    "type": "MemberExpression",
                                    "computed": false,
                                    "object": {
                                      "type": "Identifier",
                                      "name": "stream"
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
                          "name": "pointRadius"
                        },
                        "value": {
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
                                "type": "ExpressionStatement",
                                "expression": {
                                  "type": "AssignmentExpression",
                                  "operator": "=",
                                  "left": {
                                    "type": "Identifier",
                                    "name": "pointCircle"
                                  },
                                  "right": {
                                    "type": "CallExpression",
                                    "callee": {
                                      "type": "Identifier",
                                      "name": "d3_geo_pathBufferCircle"
                                    },
                                    "arguments": [
                                      {
                                        "type": "Identifier",
                                        "name": "_"
                                      }
                                    ]
                                  }
                                }
                              },
                              {
                                "type": "ReturnStatement",
                                "argument": {
                                  "type": "Identifier",
                                  "name": "stream"
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
                          "name": "result"
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
                                "type": "IfStatement",
                                "test": {
                                  "type": "MemberExpression",
                                  "computed": false,
                                  "object": {
                                    "type": "Identifier",
                                    "name": "buffer"
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "name": "length"
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
                                            "name": "result"
                                          },
                                          "init": {
                                            "type": "CallExpression",
                                            "callee": {
                                              "type": "MemberExpression",
                                              "computed": false,
                                              "object": {
                                                "type": "Identifier",
                                                "name": "buffer"
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "name": "join"
                                              }
                                            },
                                            "arguments": [
                                              {
                                                "type": "Literal",
                                                "value": "",
                                                "raw": "\"\""
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
                                        "operator": "=",
                                        "left": {
                                          "type": "Identifier",
                                          "name": "buffer"
                                        },
                                        "right": {
                                          "type": "ArrayExpression",
                                          "elements": []
                                        }
                                      }
                                    },
                                    {
                                      "type": "ReturnStatement",
                                      "argument": {
                                        "type": "Identifier",
                                        "name": "result"
                                      }
                                    }
                                  ]
                                },
                                "alternate": null
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
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "name": "buffer"
                        },
                        "property": {
                          "type": "Identifier",
                          "name": "push"
                        }
                      },
                      "arguments": [
                        {
                          "type": "Literal",
                          "value": "M",
                          "raw": "\"M\""
                        },
                        {
                          "type": "Identifier",
                          "name": "x"
                        },
                        {
                          "type": "Literal",
                          "value": ",",
                          "raw": "\",\""
                        },
                        {
                          "type": "Identifier",
                          "name": "y"
                        },
                        {
                          "type": "Identifier",
                          "name": "pointCircle"
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
                "name": "pointLineStart"
              },
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
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "name": "buffer"
                        },
                        "property": {
                          "type": "Identifier",
                          "name": "push"
                        }
                      },
                      "arguments": [
                        {
                          "type": "Literal",
                          "value": "M",
                          "raw": "\"M\""
                        },
                        {
                          "type": "Identifier",
                          "name": "x"
                        },
                        {
                          "type": "Literal",
                          "value": ",",
                          "raw": "\",\""
                        },
                        {
                          "type": "Identifier",
                          "name": "y"
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
                          "name": "stream"
                        },
                        "property": {
                          "type": "Identifier",
                          "name": "point"
                        }
                      },
                      "right": {
                        "type": "Identifier",
                        "name": "pointLine"
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
                "name": "pointLine"
              },
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
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "name": "buffer"
                        },
                        "property": {
                          "type": "Identifier",
                          "name": "push"
                        }
                      },
                      "arguments": [
                        {
                          "type": "Literal",
                          "value": "L",
                          "raw": "\"L\""
                        },
                        {
                          "type": "Identifier",
                          "name": "x"
                        },
                        {
                          "type": "Literal",
                          "value": ",",
                          "raw": "\",\""
                        },
                        {
                          "type": "Identifier",
                          "name": "y"
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
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "name": "stream"
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
                "name": "lineEndPolygon"
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
                          "name": "buffer"
                        },
                        "property": {
                          "type": "Identifier",
                          "name": "push"
                        }
                      },
                      "arguments": [
                        {
                          "type": "Literal",
                          "value": "Z",
                          "raw": "\"Z\""
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
              "type": "ReturnStatement",
              "argument": {
                "type": "Identifier",
                "name": "stream"
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
          "name": "d3_geo_pathBufferCircle"
        },
        "params": [
          {
            "type": "Identifier",
            "name": "radius"
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
                "operator": "+",
                "left": {
                  "type": "BinaryExpression",
                  "operator": "+",
                  "left": {
                    "type": "BinaryExpression",
                    "operator": "+",
                    "left": {
                      "type": "BinaryExpression",
                      "operator": "+",
                      "left": {
                        "type": "BinaryExpression",
                        "operator": "+",
                        "left": {
                          "type": "BinaryExpression",
                          "operator": "+",
                          "left": {
                            "type": "BinaryExpression",
                            "operator": "+",
                            "left": {
                              "type": "BinaryExpression",
                              "operator": "+",
                              "left": {
                                "type": "BinaryExpression",
                                "operator": "+",
                                "left": {
                                  "type": "BinaryExpression",
                                  "operator": "+",
                                  "left": {
                                    "type": "BinaryExpression",
                                    "operator": "+",
                                    "left": {
                                      "type": "BinaryExpression",
                                      "operator": "+",
                                      "left": {
                                        "type": "BinaryExpression",
                                        "operator": "+",
                                        "left": {
                                          "type": "BinaryExpression",
                                          "operator": "+",
                                          "left": {
                                            "type": "Literal",
                                            "value": "m0,",
                                            "raw": "\"m0,\""
                                          },
                                          "right": {
                                            "type": "Identifier",
                                            "name": "radius"
                                          }
                                        },
                                        "right": {
                                          "type": "Literal",
                                          "value": "a",
                                          "raw": "\"a\""
                                        }
                                      },
                                      "right": {
                                        "type": "Identifier",
                                        "name": "radius"
                                      }
                                    },
                                    "right": {
                                      "type": "Literal",
                                      "value": ",",
                                      "raw": "\",\""
                                    }
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "name": "radius"
                                  }
                                },
                                "right": {
                                  "type": "Literal",
                                  "value": " 0 1,1 0,",
                                  "raw": "\" 0 1,1 0,\""
                                }
                              },
                              "right": {
                                "type": "BinaryExpression",
                                "operator": "*",
                                "left": {
                                  "type": "UnaryExpression",
                                  "operator": "-",
                                  "argument": {
                                    "type": "Literal",
                                    "value": 2,
                                    "raw": "2"
                                  },
                                  "prefix": true
                                },
                                "right": {
                                  "type": "Identifier",
                                  "name": "radius"
                                }
                              }
                            },
                            "right": {
                              "type": "Literal",
                              "value": "a",
                              "raw": "\"a\""
                            }
                          },
                          "right": {
                            "type": "Identifier",
                            "name": "radius"
                          }
                        },
                        "right": {
                          "type": "Literal",
                          "value": ",",
                          "raw": "\",\""
                        }
                      },
                      "right": {
                        "type": "Identifier",
                        "name": "radius"
                      }
                    },
                    "right": {
                      "type": "Literal",
                      "value": " 0 1,1 0,",
                      "raw": "\" 0 1,1 0,\""
                    }
                  },
                  "right": {
                    "type": "BinaryExpression",
                    "operator": "*",
                    "left": {
                      "type": "Literal",
                      "value": 2,
                      "raw": "2"
                    },
                    "right": {
                      "type": "Identifier",
                      "name": "radius"
                    }
                  }
                },
                "right": {
                  "type": "Literal",
                  "value": "z",
                  "raw": "\"z\""
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
  "src": "function d3_geo_pathBuffer() {\n    var pointCircle = d3_geo_pathBufferCircle(4.5), buffer = [];\n    var stream = {\n            point: point,\n            lineStart: function () {\n                stream.point = pointLineStart;\n            },\n            lineEnd: lineEnd,\n            polygonStart: function () {\n                stream.lineEnd = lineEndPolygon;\n            },\n            polygonEnd: function () {\n                stream.lineEnd = lineEnd;\n                stream.point = point;\n            },\n            pointRadius: function (_) {\n                pointCircle = d3_geo_pathBufferCircle(_);\n                return stream;\n            },\n            result: function () {\n                if (buffer.length) {\n                    var result = buffer.join('');\n                    buffer = [];\n                    return result;\n                }\n            }\n        };\n    function point(x, y) {\n        buffer.push('M', x, ',', y, pointCircle);\n    }\n    function pointLineStart(x, y) {\n        buffer.push('M', x, ',', y);\n        stream.point = pointLine;\n    }\n    function pointLine(x, y) {\n        buffer.push('L', x, ',', y);\n    }\n    function lineEnd() {\n        stream.point = point;\n    }\n    function lineEndPolygon() {\n        buffer.push('Z');\n    }\n    return stream;\n}\nfunction d3_geo_pathBufferCircle(radius) {\n    return 'm0,' + radius + 'a' + radius + ',' + radius + ' 0 1,1 0,' + -2 * radius + 'a' + radius + ',' + radius + ' 0 1,1 0,' + 2 * radius + 'z';\n}"
}