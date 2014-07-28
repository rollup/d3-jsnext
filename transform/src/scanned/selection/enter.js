{
  "filepath": "/selection/enter.js",
  "shared": [],
  "dependencies": [
    "d3_subclass",
    "d3_selectionPrototype"
  ],
  "helpers": [
    "d3_selection_enter",
    "d3_selection_enterPrototype"
  ],
  "exports": [
    "d3.selection.enter",
    "d3.selection.enter.prototype"
  ],
  "ast": {
    "type": "Program",
    "body": [
      {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "name": "d3_selection_enter"
        },
        "params": [
          {
            "type": "Identifier",
            "name": "selection"
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
                  "type": "Identifier",
                  "name": "d3_subclass"
                },
                "arguments": [
                  {
                    "type": "Identifier",
                    "name": "selection"
                  },
                  {
                    "type": "Identifier",
                    "name": "d3_selection_enterPrototype"
                  }
                ]
              }
            },
            {
              "type": "ReturnStatement",
              "argument": {
                "type": "Identifier",
                "name": "selection"
              }
            }
          ]
        },
        "rest": null,
        "generator": false,
        "expression": false
      },
      {
        "type": "VariableDeclaration",
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "name": "d3_selection_enterPrototype"
            },
            "init": {
              "type": "ArrayExpression",
              "elements": []
            }
          }
        ]
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
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "Identifier",
                "name": "d3"
              },
              "property": {
                "type": "Identifier",
                "name": "selection"
              }
            },
            "property": {
              "type": "Identifier",
              "name": "enter"
            }
          },
          "right": {
            "type": "Identifier",
            "name": "d3_selection_enter"
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
                  "name": "selection"
                }
              },
              "property": {
                "type": "Identifier",
                "name": "enter"
              }
            },
            "property": {
              "type": "Identifier",
              "name": "prototype"
            }
          },
          "right": {
            "type": "Identifier",
            "name": "d3_selection_enterPrototype"
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
              "name": "d3_selection_enterPrototype"
            },
            "property": {
              "type": "Identifier",
              "name": "append"
            }
          },
          "right": {
            "type": "MemberExpression",
            "computed": false,
            "object": {
              "type": "Identifier",
              "name": "d3_selectionPrototype"
            },
            "property": {
              "type": "Identifier",
              "name": "append"
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
              "name": "d3_selection_enterPrototype"
            },
            "property": {
              "type": "Identifier",
              "name": "empty"
            }
          },
          "right": {
            "type": "MemberExpression",
            "computed": false,
            "object": {
              "type": "Identifier",
              "name": "d3_selectionPrototype"
            },
            "property": {
              "type": "Identifier",
              "name": "empty"
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
              "name": "d3_selection_enterPrototype"
            },
            "property": {
              "type": "Identifier",
              "name": "node"
            }
          },
          "right": {
            "type": "MemberExpression",
            "computed": false,
            "object": {
              "type": "Identifier",
              "name": "d3_selectionPrototype"
            },
            "property": {
              "type": "Identifier",
              "name": "node"
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
              "name": "d3_selection_enterPrototype"
            },
            "property": {
              "type": "Identifier",
              "name": "call"
            }
          },
          "right": {
            "type": "MemberExpression",
            "computed": false,
            "object": {
              "type": "Identifier",
              "name": "d3_selectionPrototype"
            },
            "property": {
              "type": "Identifier",
              "name": "call"
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
              "name": "d3_selection_enterPrototype"
            },
            "property": {
              "type": "Identifier",
              "name": "size"
            }
          },
          "right": {
            "type": "MemberExpression",
            "computed": false,
            "object": {
              "type": "Identifier",
              "name": "d3_selectionPrototype"
            },
            "property": {
              "type": "Identifier",
              "name": "size"
            }
          }
        }
      }
    ]
  },
  "src": "function d3_selection_enter(selection) {\n    d3_subclass(selection, d3_selection_enterPrototype);\n    return selection;\n}\nvar d3_selection_enterPrototype = [];\nd3.selection.enter = d3_selection_enter;\nd3.selection.enter.prototype = d3_selection_enterPrototype;\nd3_selection_enterPrototype.append = d3_selectionPrototype.append;\nd3_selection_enterPrototype.empty = d3_selectionPrototype.empty;\nd3_selection_enterPrototype.node = d3_selectionPrototype.node;\nd3_selection_enterPrototype.call = d3_selectionPrototype.call;\nd3_selection_enterPrototype.size = d3_selectionPrototype.size;"
}