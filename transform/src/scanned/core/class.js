{
  "filepath": "/core/class.js",
  "shared": [],
  "dependencies": [],
  "helpers": [
    "d3_class"
  ],
  "exports": [],
  "ast": {
    "type": "Program",
    "body": [
      {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "name": "d3_class"
        },
        "params": [
          {
            "type": "Identifier",
            "name": "ctor"
          },
          {
            "type": "Identifier",
            "name": "properties"
          }
        ],
        "defaults": [],
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "TryStatement",
              "block": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ForInStatement",
                    "left": {
                      "type": "VariableDeclaration",
                      "declarations": [
                        {
                          "type": "VariableDeclarator",
                          "id": {
                            "type": "Identifier",
                            "name": "key"
                          },
                          "init": null
                        }
                      ],
                      "kind": "var"
                    },
                    "right": {
                      "type": "Identifier",
                      "name": "properties"
                    },
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
                                "name": "Object"
                              },
                              "property": {
                                "type": "Identifier",
                                "name": "defineProperty"
                              }
                            },
                            "arguments": [
                              {
                                "type": "MemberExpression",
                                "computed": false,
                                "object": {
                                  "type": "Identifier",
                                  "name": "ctor"
                                },
                                "property": {
                                  "type": "Identifier",
                                  "name": "prototype"
                                }
                              },
                              {
                                "type": "Identifier",
                                "name": "key"
                              },
                              {
                                "type": "ObjectExpression",
                                "properties": [
                                  {
                                    "type": "Property",
                                    "key": {
                                      "type": "Identifier",
                                      "name": "value"
                                    },
                                    "value": {
                                      "type": "MemberExpression",
                                      "computed": true,
                                      "object": {
                                        "type": "Identifier",
                                        "name": "properties"
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "name": "key"
                                      }
                                    },
                                    "kind": "init"
                                  },
                                  {
                                    "type": "Property",
                                    "key": {
                                      "type": "Identifier",
                                      "name": "enumerable"
                                    },
                                    "value": {
                                      "type": "Literal",
                                      "value": false,
                                      "raw": "false"
                                    },
                                    "kind": "init"
                                  }
                                ]
                              }
                            ]
                          }
                        }
                      ]
                    },
                    "each": false
                  }
                ]
              },
              "guardedHandlers": [],
              "handlers": [
                {
                  "type": "CatchClause",
                  "param": {
                    "type": "Identifier",
                    "name": "e"
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
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "name": "ctor"
                            },
                            "property": {
                              "type": "Identifier",
                              "name": "prototype"
                            }
                          },
                          "right": {
                            "type": "Identifier",
                            "name": "properties"
                          }
                        }
                      }
                    ]
                  }
                }
              ],
              "finalizer": null
            }
          ]
        },
        "rest": null,
        "generator": false,
        "expression": false
      }
    ]
  },
  "src": "function d3_class(ctor, properties) {\n    try {\n        for (var key in properties) {\n            Object.defineProperty(ctor.prototype, key, {\n                value: properties[key],\n                enumerable: false\n            });\n        }\n    } catch (e) {\n        ctor.prototype = properties;\n    }\n}"
}