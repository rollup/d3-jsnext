{
  "filepath": "/locale/ca-ES.js",
  "shared": [],
  "dependencies": [
    "d3.locale"
  ],
  "helpers": [],
  "exports": [
    "d3.locale.ca_ES"
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
                "name": "locale"
              }
            },
            "property": {
              "type": "Identifier",
              "name": "ca_ES"
            }
          },
          "right": {
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
                "name": "locale"
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
                      "name": "decimal"
                    },
                    "value": {
                      "type": "Literal",
                      "value": ",",
                      "raw": "\",\""
                    },
                    "kind": "init"
                  },
                  {
                    "type": "Property",
                    "key": {
                      "type": "Identifier",
                      "name": "thousands"
                    },
                    "value": {
                      "type": "Literal",
                      "value": ".",
                      "raw": "\".\""
                    },
                    "kind": "init"
                  },
                  {
                    "type": "Property",
                    "key": {
                      "type": "Identifier",
                      "name": "grouping"
                    },
                    "value": {
                      "type": "ArrayExpression",
                      "elements": [
                        {
                          "type": "Literal",
                          "value": 3,
                          "raw": "3"
                        }
                      ]
                    },
                    "kind": "init"
                  },
                  {
                    "type": "Property",
                    "key": {
                      "type": "Identifier",
                      "name": "currency"
                    },
                    "value": {
                      "type": "ArrayExpression",
                      "elements": [
                        {
                          "type": "Literal",
                          "value": "",
                          "raw": "\"\""
                        },
                        {
                          "type": "Literal",
                          "value": " €",
                          "raw": "\" €\""
                        }
                      ]
                    },
                    "kind": "init"
                  },
                  {
                    "type": "Property",
                    "key": {
                      "type": "Identifier",
                      "name": "dateTime"
                    },
                    "value": {
                      "type": "Literal",
                      "value": "%A, %e de %B de %Y, %X",
                      "raw": "\"%A, %e de %B de %Y, %X\""
                    },
                    "kind": "init"
                  },
                  {
                    "type": "Property",
                    "key": {
                      "type": "Identifier",
                      "name": "date"
                    },
                    "value": {
                      "type": "Literal",
                      "value": "%d/%m/%Y",
                      "raw": "\"%d/%m/%Y\""
                    },
                    "kind": "init"
                  },
                  {
                    "type": "Property",
                    "key": {
                      "type": "Identifier",
                      "name": "time"
                    },
                    "value": {
                      "type": "Literal",
                      "value": "%H:%M:%S",
                      "raw": "\"%H:%M:%S\""
                    },
                    "kind": "init"
                  },
                  {
                    "type": "Property",
                    "key": {
                      "type": "Identifier",
                      "name": "periods"
                    },
                    "value": {
                      "type": "ArrayExpression",
                      "elements": [
                        {
                          "type": "Literal",
                          "value": "AM",
                          "raw": "\"AM\""
                        },
                        {
                          "type": "Literal",
                          "value": "PM",
                          "raw": "\"PM\""
                        }
                      ]
                    },
                    "kind": "init"
                  },
                  {
                    "type": "Property",
                    "key": {
                      "type": "Identifier",
                      "name": "days"
                    },
                    "value": {
                      "type": "ArrayExpression",
                      "elements": [
                        {
                          "type": "Literal",
                          "value": "diumenge",
                          "raw": "\"diumenge\""
                        },
                        {
                          "type": "Literal",
                          "value": "dilluns",
                          "raw": "\"dilluns\""
                        },
                        {
                          "type": "Literal",
                          "value": "dimarts",
                          "raw": "\"dimarts\""
                        },
                        {
                          "type": "Literal",
                          "value": "dimecres",
                          "raw": "\"dimecres\""
                        },
                        {
                          "type": "Literal",
                          "value": "dijous",
                          "raw": "\"dijous\""
                        },
                        {
                          "type": "Literal",
                          "value": "divendres",
                          "raw": "\"divendres\""
                        },
                        {
                          "type": "Literal",
                          "value": "dissabte",
                          "raw": "\"dissabte\""
                        }
                      ]
                    },
                    "kind": "init"
                  },
                  {
                    "type": "Property",
                    "key": {
                      "type": "Identifier",
                      "name": "shortDays"
                    },
                    "value": {
                      "type": "ArrayExpression",
                      "elements": [
                        {
                          "type": "Literal",
                          "value": "dg.",
                          "raw": "\"dg.\""
                        },
                        {
                          "type": "Literal",
                          "value": "dl.",
                          "raw": "\"dl.\""
                        },
                        {
                          "type": "Literal",
                          "value": "dt.",
                          "raw": "\"dt.\""
                        },
                        {
                          "type": "Literal",
                          "value": "dc.",
                          "raw": "\"dc.\""
                        },
                        {
                          "type": "Literal",
                          "value": "dj.",
                          "raw": "\"dj.\""
                        },
                        {
                          "type": "Literal",
                          "value": "dv.",
                          "raw": "\"dv.\""
                        },
                        {
                          "type": "Literal",
                          "value": "ds.",
                          "raw": "\"ds.\""
                        }
                      ]
                    },
                    "kind": "init"
                  },
                  {
                    "type": "Property",
                    "key": {
                      "type": "Identifier",
                      "name": "months"
                    },
                    "value": {
                      "type": "ArrayExpression",
                      "elements": [
                        {
                          "type": "Literal",
                          "value": "gener",
                          "raw": "\"gener\""
                        },
                        {
                          "type": "Literal",
                          "value": "febrer",
                          "raw": "\"febrer\""
                        },
                        {
                          "type": "Literal",
                          "value": "març",
                          "raw": "\"març\""
                        },
                        {
                          "type": "Literal",
                          "value": "abril",
                          "raw": "\"abril\""
                        },
                        {
                          "type": "Literal",
                          "value": "maig",
                          "raw": "\"maig\""
                        },
                        {
                          "type": "Literal",
                          "value": "juny",
                          "raw": "\"juny\""
                        },
                        {
                          "type": "Literal",
                          "value": "juliol",
                          "raw": "\"juliol\""
                        },
                        {
                          "type": "Literal",
                          "value": "agost",
                          "raw": "\"agost\""
                        },
                        {
                          "type": "Literal",
                          "value": "setembre",
                          "raw": "\"setembre\""
                        },
                        {
                          "type": "Literal",
                          "value": "octubre",
                          "raw": "\"octubre\""
                        },
                        {
                          "type": "Literal",
                          "value": "novembre",
                          "raw": "\"novembre\""
                        },
                        {
                          "type": "Literal",
                          "value": "desembre",
                          "raw": "\"desembre\""
                        }
                      ]
                    },
                    "kind": "init"
                  },
                  {
                    "type": "Property",
                    "key": {
                      "type": "Identifier",
                      "name": "shortMonths"
                    },
                    "value": {
                      "type": "ArrayExpression",
                      "elements": [
                        {
                          "type": "Literal",
                          "value": "gen.",
                          "raw": "\"gen.\""
                        },
                        {
                          "type": "Literal",
                          "value": "febr.",
                          "raw": "\"febr.\""
                        },
                        {
                          "type": "Literal",
                          "value": "març",
                          "raw": "\"març\""
                        },
                        {
                          "type": "Literal",
                          "value": "abr.",
                          "raw": "\"abr.\""
                        },
                        {
                          "type": "Literal",
                          "value": "maig",
                          "raw": "\"maig\""
                        },
                        {
                          "type": "Literal",
                          "value": "juny",
                          "raw": "\"juny\""
                        },
                        {
                          "type": "Literal",
                          "value": "jul.",
                          "raw": "\"jul.\""
                        },
                        {
                          "type": "Literal",
                          "value": "ag.",
                          "raw": "\"ag.\""
                        },
                        {
                          "type": "Literal",
                          "value": "set.",
                          "raw": "\"set.\""
                        },
                        {
                          "type": "Literal",
                          "value": "oct.",
                          "raw": "\"oct.\""
                        },
                        {
                          "type": "Literal",
                          "value": "nov.",
                          "raw": "\"nov.\""
                        },
                        {
                          "type": "Literal",
                          "value": "des.",
                          "raw": "\"des.\""
                        }
                      ]
                    },
                    "kind": "init"
                  }
                ]
              }
            ]
          }
        }
      }
    ]
  },
  "src": "d3.locale.ca_ES = d3.locale({\n    decimal: ',',\n    thousands: '.',\n    grouping: [3],\n    currency: [\n        '',\n        ' \\u20AC'\n    ],\n    dateTime: '%A, %e de %B de %Y, %X',\n    date: '%d/%m/%Y',\n    time: '%H:%M:%S',\n    periods: [\n        'AM',\n        'PM'\n    ],\n    days: [\n        'diumenge',\n        'dilluns',\n        'dimarts',\n        'dimecres',\n        'dijous',\n        'divendres',\n        'dissabte'\n    ],\n    shortDays: [\n        'dg.',\n        'dl.',\n        'dt.',\n        'dc.',\n        'dj.',\n        'dv.',\n        'ds.'\n    ],\n    months: [\n        'gener',\n        'febrer',\n        'mar\\xE7',\n        'abril',\n        'maig',\n        'juny',\n        'juliol',\n        'agost',\n        'setembre',\n        'octubre',\n        'novembre',\n        'desembre'\n    ],\n    shortMonths: [\n        'gen.',\n        'febr.',\n        'mar\\xE7',\n        'abr.',\n        'maig',\n        'juny',\n        'jul.',\n        'ag.',\n        'set.',\n        'oct.',\n        'nov.',\n        'des.'\n    ]\n});"
}