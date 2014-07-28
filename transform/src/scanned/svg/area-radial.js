{
  "filepath": "/svg/area-radial.js",
  "shared": [],
  "dependencies": [
    "d3_svg_area",
    "d3_svg_lineRadial"
  ],
  "helpers": [],
  "exports": [
    "d3.svg.area.radial"
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
                "name": "area"
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
                        "name": "area"
                      },
                      "init": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "Identifier",
                          "name": "d3_svg_area"
                        },
                        "arguments": [
                          {
                            "type": "Identifier",
                            "name": "d3_svg_lineRadial"
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
                    "type": "SequenceExpression",
                    "expressions": [
                      {
                        "type": "AssignmentExpression",
                        "operator": "=",
                        "left": {
                          "type": "MemberExpression",
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "name": "area"
                          },
                          "property": {
                            "type": "Identifier",
                            "name": "radius"
                          }
                        },
                        "right": {
                          "type": "MemberExpression",
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "name": "area"
                          },
                          "property": {
                            "type": "Identifier",
                            "name": "x"
                          }
                        }
                      },
                      {
                        "type": "UnaryExpression",
                        "operator": "delete",
                        "argument": {
                          "type": "MemberExpression",
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "name": "area"
                          },
                          "property": {
                            "type": "Identifier",
                            "name": "x"
                          }
                        },
                        "prefix": true
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
                          "type": "MemberExpression",
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "name": "area"
                          },
                          "property": {
                            "type": "Identifier",
                            "name": "innerRadius"
                          }
                        },
                        "right": {
                          "type": "MemberExpression",
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "name": "area"
                          },
                          "property": {
                            "type": "Identifier",
                            "name": "x0"
                          }
                        }
                      },
                      {
                        "type": "UnaryExpression",
                        "operator": "delete",
                        "argument": {
                          "type": "MemberExpression",
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "name": "area"
                          },
                          "property": {
                            "type": "Identifier",
                            "name": "x0"
                          }
                        },
                        "prefix": true
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
                          "type": "MemberExpression",
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "name": "area"
                          },
                          "property": {
                            "type": "Identifier",
                            "name": "outerRadius"
                          }
                        },
                        "right": {
                          "type": "MemberExpression",
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "name": "area"
                          },
                          "property": {
                            "type": "Identifier",
                            "name": "x1"
                          }
                        }
                      },
                      {
                        "type": "UnaryExpression",
                        "operator": "delete",
                        "argument": {
                          "type": "MemberExpression",
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "name": "area"
                          },
                          "property": {
                            "type": "Identifier",
                            "name": "x1"
                          }
                        },
                        "prefix": true
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
                          "type": "MemberExpression",
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "name": "area"
                          },
                          "property": {
                            "type": "Identifier",
                            "name": "angle"
                          }
                        },
                        "right": {
                          "type": "MemberExpression",
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "name": "area"
                          },
                          "property": {
                            "type": "Identifier",
                            "name": "y"
                          }
                        }
                      },
                      {
                        "type": "UnaryExpression",
                        "operator": "delete",
                        "argument": {
                          "type": "MemberExpression",
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "name": "area"
                          },
                          "property": {
                            "type": "Identifier",
                            "name": "y"
                          }
                        },
                        "prefix": true
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
                          "type": "MemberExpression",
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "name": "area"
                          },
                          "property": {
                            "type": "Identifier",
                            "name": "startAngle"
                          }
                        },
                        "right": {
                          "type": "MemberExpression",
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "name": "area"
                          },
                          "property": {
                            "type": "Identifier",
                            "name": "y0"
                          }
                        }
                      },
                      {
                        "type": "UnaryExpression",
                        "operator": "delete",
                        "argument": {
                          "type": "MemberExpression",
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "name": "area"
                          },
                          "property": {
                            "type": "Identifier",
                            "name": "y0"
                          }
                        },
                        "prefix": true
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
                          "type": "MemberExpression",
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "name": "area"
                          },
                          "property": {
                            "type": "Identifier",
                            "name": "endAngle"
                          }
                        },
                        "right": {
                          "type": "MemberExpression",
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "name": "area"
                          },
                          "property": {
                            "type": "Identifier",
                            "name": "y1"
                          }
                        }
                      },
                      {
                        "type": "UnaryExpression",
                        "operator": "delete",
                        "argument": {
                          "type": "MemberExpression",
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "name": "area"
                          },
                          "property": {
                            "type": "Identifier",
                            "name": "y1"
                          }
                        },
                        "prefix": true
                      }
                    ]
                  }
                },
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Identifier",
                    "name": "area"
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
  "src": "d3.svg.area.radial = function () {\n    var area = d3_svg_area(d3_svg_lineRadial);\n    area.radius = area.x, delete area.x;\n    area.innerRadius = area.x0, delete area.x0;\n    area.outerRadius = area.x1, delete area.x1;\n    area.angle = area.y, delete area.y;\n    area.startAngle = area.y0, delete area.y0;\n    area.endAngle = area.y1, delete area.y1;\n    return area;\n};"
}