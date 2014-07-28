{
  "filepath": "/geo/path-context.js",
  "shared": [],
  "dependencies": [
    "d3_noop"
  ],
  "helpers": [
    "d3_geo_pathContext"
  ],
  "exports": [],
  "ast": {
    "type": "Program",
    "body": [
      {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "name": "d3_geo_pathContext"
        },
        "params": [
          {
            "type": "Identifier",
            "name": "context"
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
                    "name": "pointRadius"
                  },
                  "init": {
                    "type": "Literal",
                    "value": 4.5,
                    "raw": "4.5"
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
                                    "name": "pointRadius"
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "name": "_"
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
                          "type": "Identifier",
                          "name": "d3_noop"
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
                          "name": "context"
                        },
                        "property": {
                          "type": "Identifier",
                          "name": "moveTo"
                        }
                      },
                      "arguments": [
                        {
                          "type": "Identifier",
                          "name": "x"
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
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "name": "context"
                        },
                        "property": {
                          "type": "Identifier",
                          "name": "arc"
                        }
                      },
                      "arguments": [
                        {
                          "type": "Identifier",
                          "name": "x"
                        },
                        {
                          "type": "Identifier",
                          "name": "y"
                        },
                        {
                          "type": "Identifier",
                          "name": "pointRadius"
                        },
                        {
                          "type": "Literal",
                          "value": 0,
                          "raw": "0"
                        },
                        {
                          "type": "Identifier",
                          "name": "τ"
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
                          "name": "context"
                        },
                        "property": {
                          "type": "Identifier",
                          "name": "moveTo"
                        }
                      },
                      "arguments": [
                        {
                          "type": "Identifier",
                          "name": "x"
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
                          "name": "context"
                        },
                        "property": {
                          "type": "Identifier",
                          "name": "lineTo"
                        }
                      },
                      "arguments": [
                        {
                          "type": "Identifier",
                          "name": "x"
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
                          "name": "context"
                        },
                        "property": {
                          "type": "Identifier",
                          "name": "closePath"
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
      }
    ]
  },
  "src": "function d3_geo_pathContext(context) {\n    var pointRadius = 4.5;\n    var stream = {\n            point: point,\n            lineStart: function () {\n                stream.point = pointLineStart;\n            },\n            lineEnd: lineEnd,\n            polygonStart: function () {\n                stream.lineEnd = lineEndPolygon;\n            },\n            polygonEnd: function () {\n                stream.lineEnd = lineEnd;\n                stream.point = point;\n            },\n            pointRadius: function (_) {\n                pointRadius = _;\n                return stream;\n            },\n            result: d3_noop\n        };\n    function point(x, y) {\n        context.moveTo(x, y);\n        context.arc(x, y, pointRadius, 0, τ);\n    }\n    function pointLineStart(x, y) {\n        context.moveTo(x, y);\n        stream.point = pointLine;\n    }\n    function pointLine(x, y) {\n        context.lineTo(x, y);\n    }\n    function lineEnd() {\n        stream.point = point;\n    }\n    function lineEndPolygon() {\n        context.closePath();\n    }\n    return stream;\n}"
}