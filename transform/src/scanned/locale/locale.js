{
  "filepath": "/locale/locale.js",
  "shared": [],
  "dependencies": [
    "d3_locale_numberFormat",
    "d3_locale_timeFormat"
  ],
  "helpers": [],
  "exports": [
    "d3.locale"
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
              "name": "locale"
            }
          },
          "right": {
            "type": "FunctionExpression",
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "name": "locale"
              }
            ],
            "defaults": [],
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "ObjectExpression",
                    "properties": [
                      {
                        "type": "Property",
                        "key": {
                          "type": "Identifier",
                          "name": "numberFormat"
                        },
                        "value": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "Identifier",
                            "name": "d3_locale_numberFormat"
                          },
                          "arguments": [
                            {
                              "type": "Identifier",
                              "name": "locale"
                            }
                          ]
                        },
                        "kind": "init"
                      },
                      {
                        "type": "Property",
                        "key": {
                          "type": "Identifier",
                          "name": "timeFormat"
                        },
                        "value": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "Identifier",
                            "name": "d3_locale_timeFormat"
                          },
                          "arguments": [
                            {
                              "type": "Identifier",
                              "name": "locale"
                            }
                          ]
                        },
                        "kind": "init"
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
  }
}