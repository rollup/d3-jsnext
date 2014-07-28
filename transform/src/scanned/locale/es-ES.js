{
  "filepath": "/locale/es-ES.js",
  "shared": [],
  "dependencies": [
    "d3.locale"
  ],
  "helpers": [],
  "exports": [
    "d3.locale.es_ES"
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
              "name": "es_ES"
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
                          "value": "domingo",
                          "raw": "\"domingo\""
                        },
                        {
                          "type": "Literal",
                          "value": "lunes",
                          "raw": "\"lunes\""
                        },
                        {
                          "type": "Literal",
                          "value": "martes",
                          "raw": "\"martes\""
                        },
                        {
                          "type": "Literal",
                          "value": "miércoles",
                          "raw": "\"miércoles\""
                        },
                        {
                          "type": "Literal",
                          "value": "jueves",
                          "raw": "\"jueves\""
                        },
                        {
                          "type": "Literal",
                          "value": "viernes",
                          "raw": "\"viernes\""
                        },
                        {
                          "type": "Literal",
                          "value": "sábado",
                          "raw": "\"sábado\""
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
                          "value": "dom",
                          "raw": "\"dom\""
                        },
                        {
                          "type": "Literal",
                          "value": "lun",
                          "raw": "\"lun\""
                        },
                        {
                          "type": "Literal",
                          "value": "mar",
                          "raw": "\"mar\""
                        },
                        {
                          "type": "Literal",
                          "value": "mié",
                          "raw": "\"mié\""
                        },
                        {
                          "type": "Literal",
                          "value": "jue",
                          "raw": "\"jue\""
                        },
                        {
                          "type": "Literal",
                          "value": "vie",
                          "raw": "\"vie\""
                        },
                        {
                          "type": "Literal",
                          "value": "sáb",
                          "raw": "\"sáb\""
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
                          "value": "enero",
                          "raw": "\"enero\""
                        },
                        {
                          "type": "Literal",
                          "value": "febrero",
                          "raw": "\"febrero\""
                        },
                        {
                          "type": "Literal",
                          "value": "marzo",
                          "raw": "\"marzo\""
                        },
                        {
                          "type": "Literal",
                          "value": "abril",
                          "raw": "\"abril\""
                        },
                        {
                          "type": "Literal",
                          "value": "mayo",
                          "raw": "\"mayo\""
                        },
                        {
                          "type": "Literal",
                          "value": "junio",
                          "raw": "\"junio\""
                        },
                        {
                          "type": "Literal",
                          "value": "julio",
                          "raw": "\"julio\""
                        },
                        {
                          "type": "Literal",
                          "value": "agosto",
                          "raw": "\"agosto\""
                        },
                        {
                          "type": "Literal",
                          "value": "septiembre",
                          "raw": "\"septiembre\""
                        },
                        {
                          "type": "Literal",
                          "value": "octubre",
                          "raw": "\"octubre\""
                        },
                        {
                          "type": "Literal",
                          "value": "noviembre",
                          "raw": "\"noviembre\""
                        },
                        {
                          "type": "Literal",
                          "value": "diciembre",
                          "raw": "\"diciembre\""
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
                          "value": "ene",
                          "raw": "\"ene\""
                        },
                        {
                          "type": "Literal",
                          "value": "feb",
                          "raw": "\"feb\""
                        },
                        {
                          "type": "Literal",
                          "value": "mar",
                          "raw": "\"mar\""
                        },
                        {
                          "type": "Literal",
                          "value": "abr",
                          "raw": "\"abr\""
                        },
                        {
                          "type": "Literal",
                          "value": "may",
                          "raw": "\"may\""
                        },
                        {
                          "type": "Literal",
                          "value": "jun",
                          "raw": "\"jun\""
                        },
                        {
                          "type": "Literal",
                          "value": "jul",
                          "raw": "\"jul\""
                        },
                        {
                          "type": "Literal",
                          "value": "ago",
                          "raw": "\"ago\""
                        },
                        {
                          "type": "Literal",
                          "value": "sep",
                          "raw": "\"sep\""
                        },
                        {
                          "type": "Literal",
                          "value": "oct",
                          "raw": "\"oct\""
                        },
                        {
                          "type": "Literal",
                          "value": "nov",
                          "raw": "\"nov\""
                        },
                        {
                          "type": "Literal",
                          "value": "dic",
                          "raw": "\"dic\""
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
  "src": "d3.locale.es_ES = d3.locale({\n    decimal: ',',\n    thousands: '.',\n    grouping: [3],\n    currency: [\n        '',\n        ' \\u20AC'\n    ],\n    dateTime: '%A, %e de %B de %Y, %X',\n    date: '%d/%m/%Y',\n    time: '%H:%M:%S',\n    periods: [\n        'AM',\n        'PM'\n    ],\n    days: [\n        'domingo',\n        'lunes',\n        'martes',\n        'mi\\xE9rcoles',\n        'jueves',\n        'viernes',\n        's\\xE1bado'\n    ],\n    shortDays: [\n        'dom',\n        'lun',\n        'mar',\n        'mi\\xE9',\n        'jue',\n        'vie',\n        's\\xE1b'\n    ],\n    months: [\n        'enero',\n        'febrero',\n        'marzo',\n        'abril',\n        'mayo',\n        'junio',\n        'julio',\n        'agosto',\n        'septiembre',\n        'octubre',\n        'noviembre',\n        'diciembre'\n    ],\n    shortMonths: [\n        'ene',\n        'feb',\n        'mar',\n        'abr',\n        'may',\n        'jun',\n        'jul',\n        'ago',\n        'sep',\n        'oct',\n        'nov',\n        'dic'\n    ]\n});"
}