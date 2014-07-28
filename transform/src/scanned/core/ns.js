{
  "filepath": "/core/ns.js",
  "shared": [],
  "dependencies": [],
  "helpers": [
    "d3_nsPrefix"
  ],
  "exports": [
    "d3.ns"
  ],
  "ast": {
    "type": "Program",
    "body": [
      {
        "type": "VariableDeclaration",
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "name": "d3_nsPrefix"
            },
            "init": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "key": {
                    "type": "Identifier",
                    "name": "svg"
                  },
                  "value": {
                    "type": "Literal",
                    "value": "http://www.w3.org/2000/svg",
                    "raw": "\"http://www.w3.org/2000/svg\""
                  },
                  "kind": "init"
                },
                {
                  "type": "Property",
                  "key": {
                    "type": "Identifier",
                    "name": "xhtml"
                  },
                  "value": {
                    "type": "Literal",
                    "value": "http://www.w3.org/1999/xhtml",
                    "raw": "\"http://www.w3.org/1999/xhtml\""
                  },
                  "kind": "init"
                },
                {
                  "type": "Property",
                  "key": {
                    "type": "Identifier",
                    "name": "xlink"
                  },
                  "value": {
                    "type": "Literal",
                    "value": "http://www.w3.org/1999/xlink",
                    "raw": "\"http://www.w3.org/1999/xlink\""
                  },
                  "kind": "init"
                },
                {
                  "type": "Property",
                  "key": {
                    "type": "Identifier",
                    "name": "xml"
                  },
                  "value": {
                    "type": "Literal",
                    "value": "http://www.w3.org/XML/1998/namespace",
                    "raw": "\"http://www.w3.org/XML/1998/namespace\""
                  },
                  "kind": "init"
                },
                {
                  "type": "Property",
                  "key": {
                    "type": "Identifier",
                    "name": "xmlns"
                  },
                  "value": {
                    "type": "Literal",
                    "value": "http://www.w3.org/2000/xmlns/",
                    "raw": "\"http://www.w3.org/2000/xmlns/\""
                  },
                  "kind": "init"
                }
              ]
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
              "type": "Identifier",
              "name": "d3"
            },
            "property": {
              "type": "Identifier",
              "name": "ns"
            }
          },
          "right": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "key": {
                  "type": "Identifier",
                  "name": "prefix"
                },
                "value": {
                  "type": "Identifier",
                  "name": "d3_nsPrefix"
                },
                "kind": "init"
              },
              {
                "type": "Property",
                "key": {
                  "type": "Identifier",
                  "name": "qualify"
                },
                "value": {
                  "type": "FunctionExpression",
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "name": "name"
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
                              "name": "i"
                            },
                            "init": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "MemberExpression",
                                "computed": false,
                                "object": {
                                  "type": "Identifier",
                                  "name": "name"
                                },
                                "property": {
                                  "type": "Identifier",
                                  "name": "indexOf"
                                }
                              },
                              "arguments": [
                                {
                                  "type": "Literal",
                                  "value": ":",
                                  "raw": "\":\""
                                }
                              ]
                            }
                          },
                          {
                            "type": "VariableDeclarator",
                            "id": {
                              "type": "Identifier",
                              "name": "prefix"
                            },
                            "init": {
                              "type": "Identifier",
                              "name": "name"
                            }
                          }
                        ],
                        "kind": "var"
                      },
                      {
                        "type": "IfStatement",
                        "test": {
                          "type": "BinaryExpression",
                          "operator": ">=",
                          "left": {
                            "type": "Identifier",
                            "name": "i"
                          },
                          "right": {
                            "type": "Literal",
                            "value": 0,
                            "raw": "0"
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
                                  "name": "prefix"
                                },
                                "right": {
                                  "type": "CallExpression",
                                  "callee": {
                                    "type": "MemberExpression",
                                    "computed": false,
                                    "object": {
                                      "type": "Identifier",
                                      "name": "name"
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "name": "substring"
                                    }
                                  },
                                  "arguments": [
                                    {
                                      "type": "Literal",
                                      "value": 0,
                                      "raw": "0"
                                    },
                                    {
                                      "type": "Identifier",
                                      "name": "i"
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
                                  "name": "name"
                                },
                                "right": {
                                  "type": "CallExpression",
                                  "callee": {
                                    "type": "MemberExpression",
                                    "computed": false,
                                    "object": {
                                      "type": "Identifier",
                                      "name": "name"
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "name": "substring"
                                    }
                                  },
                                  "arguments": [
                                    {
                                      "type": "BinaryExpression",
                                      "operator": "+",
                                      "left": {
                                        "type": "Identifier",
                                        "name": "i"
                                      },
                                      "right": {
                                        "type": "Literal",
                                        "value": 1,
                                        "raw": "1"
                                      }
                                    }
                                  ]
                                }
                              }
                            }
                          ]
                        },
                        "alternate": null
                      },
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "ConditionalExpression",
                          "test": {
                            "type": "CallExpression",
                            "callee": {
                              "type": "MemberExpression",
                              "computed": false,
                              "object": {
                                "type": "Identifier",
                                "name": "d3_nsPrefix"
                              },
                              "property": {
                                "type": "Identifier",
                                "name": "hasOwnProperty"
                              }
                            },
                            "arguments": [
                              {
                                "type": "Identifier",
                                "name": "prefix"
                              }
                            ]
                          },
                          "consequent": {
                            "type": "ObjectExpression",
                            "properties": [
                              {
                                "type": "Property",
                                "key": {
                                  "type": "Identifier",
                                  "name": "space"
                                },
                                "value": {
                                  "type": "MemberExpression",
                                  "computed": true,
                                  "object": {
                                    "type": "Identifier",
                                    "name": "d3_nsPrefix"
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "name": "prefix"
                                  }
                                },
                                "kind": "init"
                              },
                              {
                                "type": "Property",
                                "key": {
                                  "type": "Identifier",
                                  "name": "local"
                                },
                                "value": {
                                  "type": "Identifier",
                                  "name": "name"
                                },
                                "kind": "init"
                              }
                            ]
                          },
                          "alternate": {
                            "type": "Identifier",
                            "name": "name"
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
      }
    ]
  },
  "src": "var d3_nsPrefix = {\n        svg: 'http://www.w3.org/2000/svg',\n        xhtml: 'http://www.w3.org/1999/xhtml',\n        xlink: 'http://www.w3.org/1999/xlink',\n        xml: 'http://www.w3.org/XML/1998/namespace',\n        xmlns: 'http://www.w3.org/2000/xmlns/'\n    };\nd3.ns = {\n    prefix: d3_nsPrefix,\n    qualify: function (name) {\n        var i = name.indexOf(':'), prefix = name;\n        if (i >= 0) {\n            prefix = name.substring(0, i);\n            name = name.substring(i + 1);\n        }\n        return d3_nsPrefix.hasOwnProperty(prefix) ? {\n            space: d3_nsPrefix[prefix],\n            local: name\n        } : name;\n    }\n};"
}