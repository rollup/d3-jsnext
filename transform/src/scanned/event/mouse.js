{
  "filepath": "/event/mouse.js",
  "shared": [],
  "dependencies": [
    "d3_eventSource",
    "d3_window",
    "d3.select"
  ],
  "helpers": [
    "d3_mouse_bug44083",
    "d3_mousePoint"
  ],
  "exports": [
    "d3.mouse"
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
              "type": "Identifier",
              "name": "d3"
            },
            "property": {
              "type": "Identifier",
              "name": "mouse"
            }
          },
          "right": {
            "type": "FunctionExpression",
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "name": "container"
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
                      "type": "Identifier",
                      "name": "d3_mousePoint"
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "name": "container"
                      },
                      {
                        "type": "CallExpression",
                        "callee": {
                          "type": "Identifier",
                          "name": "d3_eventSource"
                        },
                        "arguments": []
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
        "type": "VariableDeclaration",
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "name": "d3_mouse_bug44083"
            },
            "init": {
              "type": "ConditionalExpression",
              "test": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Literal",
                    "value": {},
                    "raw": "/WebKit/"
                  },
                  "property": {
                    "type": "Identifier",
                    "name": "test"
                  }
                },
                "arguments": [
                  {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "name": "d3_window"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "navigator"
                      }
                    },
                    "property": {
                      "type": "Identifier",
                      "name": "userAgent"
                    }
                  }
                ]
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
                "value": 0,
                "raw": "0"
              }
            }
          }
        ]
      },
      {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "name": "d3_mousePoint"
        },
        "params": [
          {
            "type": "Identifier",
            "name": "container"
          },
          {
            "type": "Identifier",
            "name": "e"
          }
        ],
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
                  "name": "e"
                },
                "property": {
                  "type": "Identifier",
                  "name": "changedTouches"
                }
              },
              "consequent": {
                "type": "ExpressionStatement",
                "expression": {
                  "type": "AssignmentExpression",
                  "operator": "=",
                  "left": {
                    "type": "Identifier",
                    "name": "e"
                  },
                  "right": {
                    "type": "MemberExpression",
                    "computed": true,
                    "object": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "name": "e"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "changedTouches"
                      }
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
            },
            {
              "type": "VariableDeclaration",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "name": "svg"
                  },
                  "init": {
                    "type": "LogicalExpression",
                    "operator": "||",
                    "left": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "name": "container"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "ownerSVGElement"
                      }
                    },
                    "right": {
                      "type": "Identifier",
                      "name": "container"
                    }
                  }
                }
              ],
              "kind": "var"
            },
            {
              "type": "IfStatement",
              "test": {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "name": "svg"
                },
                "property": {
                  "type": "Identifier",
                  "name": "createSVGPoint"
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
                          "name": "point"
                        },
                        "init": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "name": "svg"
                            },
                            "property": {
                              "type": "Identifier",
                              "name": "createSVGPoint"
                            }
                          },
                          "arguments": []
                        }
                      }
                    ],
                    "kind": "var"
                  },
                  {
                    "type": "IfStatement",
                    "test": {
                      "type": "LogicalExpression",
                      "operator": "&&",
                      "left": {
                        "type": "BinaryExpression",
                        "operator": "<",
                        "left": {
                          "type": "Identifier",
                          "name": "d3_mouse_bug44083"
                        },
                        "right": {
                          "type": "Literal",
                          "value": 0,
                          "raw": "0"
                        }
                      },
                      "right": {
                        "type": "LogicalExpression",
                        "operator": "||",
                        "left": {
                          "type": "MemberExpression",
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "name": "d3_window"
                          },
                          "property": {
                            "type": "Identifier",
                            "name": "scrollX"
                          }
                        },
                        "right": {
                          "type": "MemberExpression",
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "name": "d3_window"
                          },
                          "property": {
                            "type": "Identifier",
                            "name": "scrollY"
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
                            "operator": "=",
                            "left": {
                              "type": "Identifier",
                              "name": "svg"
                            },
                            "right": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "MemberExpression",
                                "computed": false,
                                "object": {
                                  "type": "CallExpression",
                                  "callee": {
                                    "type": "MemberExpression",
                                    "computed": false,
                                    "object": {
                                      "type": "CallExpression",
                                      "callee": {
                                        "type": "MemberExpression",
                                        "computed": false,
                                        "object": {
                                          "type": "Identifier",
                                          "name": "d3"
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "name": "select"
                                        }
                                      },
                                      "arguments": [
                                        {
                                          "type": "Literal",
                                          "value": "body",
                                          "raw": "\"body\""
                                        }
                                      ]
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "name": "append"
                                    }
                                  },
                                  "arguments": [
                                    {
                                      "type": "Literal",
                                      "value": "svg",
                                      "raw": "\"svg\""
                                    }
                                  ]
                                },
                                "property": {
                                  "type": "Identifier",
                                  "name": "style"
                                }
                              },
                              "arguments": [
                                {
                                  "type": "ObjectExpression",
                                  "properties": [
                                    {
                                      "type": "Property",
                                      "key": {
                                        "type": "Identifier",
                                        "name": "position"
                                      },
                                      "value": {
                                        "type": "Literal",
                                        "value": "absolute",
                                        "raw": "\"absolute\""
                                      },
                                      "kind": "init"
                                    },
                                    {
                                      "type": "Property",
                                      "key": {
                                        "type": "Identifier",
                                        "name": "top"
                                      },
                                      "value": {
                                        "type": "Literal",
                                        "value": 0,
                                        "raw": "0"
                                      },
                                      "kind": "init"
                                    },
                                    {
                                      "type": "Property",
                                      "key": {
                                        "type": "Identifier",
                                        "name": "left"
                                      },
                                      "value": {
                                        "type": "Literal",
                                        "value": 0,
                                        "raw": "0"
                                      },
                                      "kind": "init"
                                    },
                                    {
                                      "type": "Property",
                                      "key": {
                                        "type": "Identifier",
                                        "name": "margin"
                                      },
                                      "value": {
                                        "type": "Literal",
                                        "value": 0,
                                        "raw": "0"
                                      },
                                      "kind": "init"
                                    },
                                    {
                                      "type": "Property",
                                      "key": {
                                        "type": "Identifier",
                                        "name": "padding"
                                      },
                                      "value": {
                                        "type": "Literal",
                                        "value": 0,
                                        "raw": "0"
                                      },
                                      "kind": "init"
                                    },
                                    {
                                      "type": "Property",
                                      "key": {
                                        "type": "Identifier",
                                        "name": "border"
                                      },
                                      "value": {
                                        "type": "Literal",
                                        "value": "none",
                                        "raw": "\"none\""
                                      },
                                      "kind": "init"
                                    }
                                  ]
                                },
                                {
                                  "type": "Literal",
                                  "value": "important",
                                  "raw": "\"important\""
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
                                "name": "ctm"
                              },
                              "init": {
                                "type": "CallExpression",
                                "callee": {
                                  "type": "MemberExpression",
                                  "computed": false,
                                  "object": {
                                    "type": "MemberExpression",
                                    "computed": true,
                                    "object": {
                                      "type": "MemberExpression",
                                      "computed": true,
                                      "object": {
                                        "type": "Identifier",
                                        "name": "svg"
                                      },
                                      "property": {
                                        "type": "Literal",
                                        "value": 0,
                                        "raw": "0"
                                      }
                                    },
                                    "property": {
                                      "type": "Literal",
                                      "value": 0,
                                      "raw": "0"
                                    }
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "name": "getScreenCTM"
                                  }
                                },
                                "arguments": []
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
                              "name": "d3_mouse_bug44083"
                            },
                            "right": {
                              "type": "UnaryExpression",
                              "operator": "!",
                              "argument": {
                                "type": "LogicalExpression",
                                "operator": "||",
                                "left": {
                                  "type": "MemberExpression",
                                  "computed": false,
                                  "object": {
                                    "type": "Identifier",
                                    "name": "ctm"
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "name": "f"
                                  }
                                },
                                "right": {
                                  "type": "MemberExpression",
                                  "computed": false,
                                  "object": {
                                    "type": "Identifier",
                                    "name": "ctm"
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "name": "e"
                                  }
                                }
                              },
                              "prefix": true
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
                                "name": "svg"
                              },
                              "property": {
                                "type": "Identifier",
                                "name": "remove"
                              }
                            },
                            "arguments": []
                          }
                        }
                      ]
                    },
                    "alternate": null
                  },
                  {
                    "type": "IfStatement",
                    "test": {
                      "type": "Identifier",
                      "name": "d3_mouse_bug44083"
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
                              "type": "MemberExpression",
                              "computed": false,
                              "object": {
                                "type": "Identifier",
                                "name": "point"
                              },
                              "property": {
                                "type": "Identifier",
                                "name": "x"
                              }
                            },
                            "right": {
                              "type": "MemberExpression",
                              "computed": false,
                              "object": {
                                "type": "Identifier",
                                "name": "e"
                              },
                              "property": {
                                "type": "Identifier",
                                "name": "pageX"
                              }
                            }
                          },
                          {
                            "type": "AssignmentExpression",
                            "operator": "=",
                            "left": {
                              "type": "MemberExpression",
                              "computed": false,
                              "object": {
                                "type": "Identifier",
                                "name": "point"
                              },
                              "property": {
                                "type": "Identifier",
                                "name": "y"
                              }
                            },
                            "right": {
                              "type": "MemberExpression",
                              "computed": false,
                              "object": {
                                "type": "Identifier",
                                "name": "e"
                              },
                              "property": {
                                "type": "Identifier",
                                "name": "pageY"
                              }
                            }
                          }
                        ]
                      }
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
                              "type": "MemberExpression",
                              "computed": false,
                              "object": {
                                "type": "Identifier",
                                "name": "point"
                              },
                              "property": {
                                "type": "Identifier",
                                "name": "x"
                              }
                            },
                            "right": {
                              "type": "MemberExpression",
                              "computed": false,
                              "object": {
                                "type": "Identifier",
                                "name": "e"
                              },
                              "property": {
                                "type": "Identifier",
                                "name": "clientX"
                              }
                            }
                          },
                          {
                            "type": "AssignmentExpression",
                            "operator": "=",
                            "left": {
                              "type": "MemberExpression",
                              "computed": false,
                              "object": {
                                "type": "Identifier",
                                "name": "point"
                              },
                              "property": {
                                "type": "Identifier",
                                "name": "y"
                              }
                            },
                            "right": {
                              "type": "MemberExpression",
                              "computed": false,
                              "object": {
                                "type": "Identifier",
                                "name": "e"
                              },
                              "property": {
                                "type": "Identifier",
                                "name": "clientY"
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
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "name": "point"
                      },
                      "right": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "MemberExpression",
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "name": "point"
                          },
                          "property": {
                            "type": "Identifier",
                            "name": "matrixTransform"
                          }
                        },
                        "arguments": [
                          {
                            "type": "CallExpression",
                            "callee": {
                              "type": "MemberExpression",
                              "computed": false,
                              "object": {
                                "type": "CallExpression",
                                "callee": {
                                  "type": "MemberExpression",
                                  "computed": false,
                                  "object": {
                                    "type": "Identifier",
                                    "name": "container"
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "name": "getScreenCTM"
                                  }
                                },
                                "arguments": []
                              },
                              "property": {
                                "type": "Identifier",
                                "name": "inverse"
                              }
                            },
                            "arguments": []
                          }
                        ]
                      }
                    }
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "ArrayExpression",
                      "elements": [
                        {
                          "type": "MemberExpression",
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "name": "point"
                          },
                          "property": {
                            "type": "Identifier",
                            "name": "x"
                          }
                        },
                        {
                          "type": "MemberExpression",
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "name": "point"
                          },
                          "property": {
                            "type": "Identifier",
                            "name": "y"
                          }
                        }
                      ]
                    }
                  }
                ]
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
                    "name": "rect"
                  },
                  "init": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "name": "container"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "getBoundingClientRect"
                      }
                    },
                    "arguments": []
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
                    "operator": "-",
                    "left": {
                      "type": "BinaryExpression",
                      "operator": "-",
                      "left": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "name": "e"
                        },
                        "property": {
                          "type": "Identifier",
                          "name": "clientX"
                        }
                      },
                      "right": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "name": "rect"
                        },
                        "property": {
                          "type": "Identifier",
                          "name": "left"
                        }
                      }
                    },
                    "right": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "name": "container"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "clientLeft"
                      }
                    }
                  },
                  {
                    "type": "BinaryExpression",
                    "operator": "-",
                    "left": {
                      "type": "BinaryExpression",
                      "operator": "-",
                      "left": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "name": "e"
                        },
                        "property": {
                          "type": "Identifier",
                          "name": "clientY"
                        }
                      },
                      "right": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "name": "rect"
                        },
                        "property": {
                          "type": "Identifier",
                          "name": "top"
                        }
                      }
                    },
                    "right": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "name": "container"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "clientTop"
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
        "type": "EmptyStatement"
      }
    ]
  },
  "src": "d3.mouse = function (container) {\n    return d3_mousePoint(container, d3_eventSource());\n};\nvar d3_mouse_bug44083 = /WebKit/.test(d3_window.navigator.userAgent) ? -1 : 0;\nfunction d3_mousePoint(container, e) {\n    if (e.changedTouches)\n        e = e.changedTouches[0];\n    var svg = container.ownerSVGElement || container;\n    if (svg.createSVGPoint) {\n        var point = svg.createSVGPoint();\n        if (d3_mouse_bug44083 < 0 && (d3_window.scrollX || d3_window.scrollY)) {\n            svg = d3.select('body').append('svg').style({\n                position: 'absolute',\n                top: 0,\n                left: 0,\n                margin: 0,\n                padding: 0,\n                border: 'none'\n            }, 'important');\n            var ctm = svg[0][0].getScreenCTM();\n            d3_mouse_bug44083 = !(ctm.f || ctm.e);\n            svg.remove();\n        }\n        if (d3_mouse_bug44083)\n            point.x = e.pageX, point.y = e.pageY;\n        else\n            point.x = e.clientX, point.y = e.clientY;\n        point = point.matrixTransform(container.getScreenCTM().inverse());\n        return [\n            point.x,\n            point.y\n        ];\n    }\n    var rect = container.getBoundingClientRect();\n    return [\n        e.clientX - rect.left - container.clientLeft,\n        e.clientY - rect.top - container.clientTop\n    ];\n}\n;"
}