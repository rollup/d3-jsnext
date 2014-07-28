{
  "filepath": "/locale/fi-FI.js",
  "shared": [],
  "dependencies": [
    "d3.locale"
  ],
  "helpers": [],
  "exports": [
    "d3.locale.fi_FI"
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
              "name": "fi_FI"
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
                      "value": " ",
                      "raw": "\"\\xa0\""
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
                          "value": " €",
                          "raw": "\"\\xa0€\""
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
                      "value": "%A, %-d. %Bta %Y klo %X",
                      "raw": "\"%A, %-d. %Bta %Y klo %X\""
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
                      "value": "%-d.%-m.%Y",
                      "raw": "\"%-d.%-m.%Y\""
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
                          "value": "a.m.",
                          "raw": "\"a.m.\""
                        },
                        {
                          "type": "Literal",
                          "value": "p.m.",
                          "raw": "\"p.m.\""
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
                          "value": "sunnuntai",
                          "raw": "\"sunnuntai\""
                        },
                        {
                          "type": "Literal",
                          "value": "maanantai",
                          "raw": "\"maanantai\""
                        },
                        {
                          "type": "Literal",
                          "value": "tiistai",
                          "raw": "\"tiistai\""
                        },
                        {
                          "type": "Literal",
                          "value": "keskiviikko",
                          "raw": "\"keskiviikko\""
                        },
                        {
                          "type": "Literal",
                          "value": "torstai",
                          "raw": "\"torstai\""
                        },
                        {
                          "type": "Literal",
                          "value": "perjantai",
                          "raw": "\"perjantai\""
                        },
                        {
                          "type": "Literal",
                          "value": "lauantai",
                          "raw": "\"lauantai\""
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
                          "value": "Su",
                          "raw": "\"Su\""
                        },
                        {
                          "type": "Literal",
                          "value": "Ma",
                          "raw": "\"Ma\""
                        },
                        {
                          "type": "Literal",
                          "value": "Ti",
                          "raw": "\"Ti\""
                        },
                        {
                          "type": "Literal",
                          "value": "Ke",
                          "raw": "\"Ke\""
                        },
                        {
                          "type": "Literal",
                          "value": "To",
                          "raw": "\"To\""
                        },
                        {
                          "type": "Literal",
                          "value": "Pe",
                          "raw": "\"Pe\""
                        },
                        {
                          "type": "Literal",
                          "value": "La",
                          "raw": "\"La\""
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
                          "value": "tammikuu",
                          "raw": "\"tammikuu\""
                        },
                        {
                          "type": "Literal",
                          "value": "helmikuu",
                          "raw": "\"helmikuu\""
                        },
                        {
                          "type": "Literal",
                          "value": "maaliskuu",
                          "raw": "\"maaliskuu\""
                        },
                        {
                          "type": "Literal",
                          "value": "huhtikuu",
                          "raw": "\"huhtikuu\""
                        },
                        {
                          "type": "Literal",
                          "value": "toukokuu",
                          "raw": "\"toukokuu\""
                        },
                        {
                          "type": "Literal",
                          "value": "kesäkuu",
                          "raw": "\"kesäkuu\""
                        },
                        {
                          "type": "Literal",
                          "value": "heinäkuu",
                          "raw": "\"heinäkuu\""
                        },
                        {
                          "type": "Literal",
                          "value": "elokuu",
                          "raw": "\"elokuu\""
                        },
                        {
                          "type": "Literal",
                          "value": "syyskuu",
                          "raw": "\"syyskuu\""
                        },
                        {
                          "type": "Literal",
                          "value": "lokakuu",
                          "raw": "\"lokakuu\""
                        },
                        {
                          "type": "Literal",
                          "value": "marraskuu",
                          "raw": "\"marraskuu\""
                        },
                        {
                          "type": "Literal",
                          "value": "joulukuu",
                          "raw": "\"joulukuu\""
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
                          "value": "Tammi",
                          "raw": "\"Tammi\""
                        },
                        {
                          "type": "Literal",
                          "value": "Helmi",
                          "raw": "\"Helmi\""
                        },
                        {
                          "type": "Literal",
                          "value": "Maalis",
                          "raw": "\"Maalis\""
                        },
                        {
                          "type": "Literal",
                          "value": "Huhti",
                          "raw": "\"Huhti\""
                        },
                        {
                          "type": "Literal",
                          "value": "Touko",
                          "raw": "\"Touko\""
                        },
                        {
                          "type": "Literal",
                          "value": "Kesä",
                          "raw": "\"Kesä\""
                        },
                        {
                          "type": "Literal",
                          "value": "Heinä",
                          "raw": "\"Heinä\""
                        },
                        {
                          "type": "Literal",
                          "value": "Elo",
                          "raw": "\"Elo\""
                        },
                        {
                          "type": "Literal",
                          "value": "Syys",
                          "raw": "\"Syys\""
                        },
                        {
                          "type": "Literal",
                          "value": "Loka",
                          "raw": "\"Loka\""
                        },
                        {
                          "type": "Literal",
                          "value": "Marras",
                          "raw": "\"Marras\""
                        },
                        {
                          "type": "Literal",
                          "value": "Joulu",
                          "raw": "\"Joulu\""
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
  }
}