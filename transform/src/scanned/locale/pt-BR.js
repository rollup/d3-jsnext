{
  "filepath": "/locale/pt-BR.js",
  "shared": [],
  "dependencies": [
    "d3.locale"
  ],
  "helpers": [],
  "exports": [
    "d3.locale.pt_BR"
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
              "name": "pt_BR"
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
                      "raw": "','"
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
                      "raw": "'.'"
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
                          "value": "R$",
                          "raw": "'R$'"
                        },
                        {
                          "type": "Literal",
                          "value": "",
                          "raw": "''"
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
                      "value": "%A, %e de %B de %Y. %X",
                      "raw": "'%A, %e de %B de %Y. %X'"
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
                      "raw": "'%d/%m/%Y'"
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
                      "raw": "'%H:%M:%S'"
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
                          "raw": "'AM'"
                        },
                        {
                          "type": "Literal",
                          "value": "PM",
                          "raw": "'PM'"
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
                          "value": "Domingo",
                          "raw": "'Domingo'"
                        },
                        {
                          "type": "Literal",
                          "value": "Segunda",
                          "raw": "'Segunda'"
                        },
                        {
                          "type": "Literal",
                          "value": "Terça",
                          "raw": "'Terça'"
                        },
                        {
                          "type": "Literal",
                          "value": "Quarta",
                          "raw": "'Quarta'"
                        },
                        {
                          "type": "Literal",
                          "value": "Quinta",
                          "raw": "'Quinta'"
                        },
                        {
                          "type": "Literal",
                          "value": "Sexta",
                          "raw": "'Sexta'"
                        },
                        {
                          "type": "Literal",
                          "value": "Sábado",
                          "raw": "'Sábado'"
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
                          "value": "Dom",
                          "raw": "'Dom'"
                        },
                        {
                          "type": "Literal",
                          "value": "Seg",
                          "raw": "'Seg'"
                        },
                        {
                          "type": "Literal",
                          "value": "Ter",
                          "raw": "'Ter'"
                        },
                        {
                          "type": "Literal",
                          "value": "Qua",
                          "raw": "'Qua'"
                        },
                        {
                          "type": "Literal",
                          "value": "Qui",
                          "raw": "'Qui'"
                        },
                        {
                          "type": "Literal",
                          "value": "Sex",
                          "raw": "'Sex'"
                        },
                        {
                          "type": "Literal",
                          "value": "Sáb",
                          "raw": "'Sáb'"
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
                          "value": "Janeiro",
                          "raw": "'Janeiro'"
                        },
                        {
                          "type": "Literal",
                          "value": "Fevereiro",
                          "raw": "'Fevereiro'"
                        },
                        {
                          "type": "Literal",
                          "value": "Março",
                          "raw": "'Março'"
                        },
                        {
                          "type": "Literal",
                          "value": "Abril",
                          "raw": "'Abril'"
                        },
                        {
                          "type": "Literal",
                          "value": "Maio",
                          "raw": "'Maio'"
                        },
                        {
                          "type": "Literal",
                          "value": "Junho",
                          "raw": "'Junho'"
                        },
                        {
                          "type": "Literal",
                          "value": "Julho",
                          "raw": "'Julho'"
                        },
                        {
                          "type": "Literal",
                          "value": "Agosto",
                          "raw": "'Agosto'"
                        },
                        {
                          "type": "Literal",
                          "value": "Setembro",
                          "raw": "'Setembro'"
                        },
                        {
                          "type": "Literal",
                          "value": "Outubro",
                          "raw": "'Outubro'"
                        },
                        {
                          "type": "Literal",
                          "value": "Novembro",
                          "raw": "'Novembro'"
                        },
                        {
                          "type": "Literal",
                          "value": "Dezembro",
                          "raw": "'Dezembro'"
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
                          "value": "Jan",
                          "raw": "'Jan'"
                        },
                        {
                          "type": "Literal",
                          "value": "Fev",
                          "raw": "'Fev'"
                        },
                        {
                          "type": "Literal",
                          "value": "Mar",
                          "raw": "'Mar'"
                        },
                        {
                          "type": "Literal",
                          "value": "Abr",
                          "raw": "'Abr'"
                        },
                        {
                          "type": "Literal",
                          "value": "Mai",
                          "raw": "'Mai'"
                        },
                        {
                          "type": "Literal",
                          "value": "Jun",
                          "raw": "'Jun'"
                        },
                        {
                          "type": "Literal",
                          "value": "Jul",
                          "raw": "'Jul'"
                        },
                        {
                          "type": "Literal",
                          "value": "Ago",
                          "raw": "'Ago'"
                        },
                        {
                          "type": "Literal",
                          "value": "Set",
                          "raw": "'Set'"
                        },
                        {
                          "type": "Literal",
                          "value": "Out",
                          "raw": "'Out'"
                        },
                        {
                          "type": "Literal",
                          "value": "Nov",
                          "raw": "'Nov'"
                        },
                        {
                          "type": "Literal",
                          "value": "Dez",
                          "raw": "'Dez'"
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
  "src": "d3.locale.pt_BR = d3.locale({\n    decimal: ',',\n    thousands: '.',\n    grouping: [3],\n    currency: [\n        'R$',\n        ''\n    ],\n    dateTime: '%A, %e de %B de %Y. %X',\n    date: '%d/%m/%Y',\n    time: '%H:%M:%S',\n    periods: [\n        'AM',\n        'PM'\n    ],\n    days: [\n        'Domingo',\n        'Segunda',\n        'Ter\\xE7a',\n        'Quarta',\n        'Quinta',\n        'Sexta',\n        'S\\xE1bado'\n    ],\n    shortDays: [\n        'Dom',\n        'Seg',\n        'Ter',\n        'Qua',\n        'Qui',\n        'Sex',\n        'S\\xE1b'\n    ],\n    months: [\n        'Janeiro',\n        'Fevereiro',\n        'Mar\\xE7o',\n        'Abril',\n        'Maio',\n        'Junho',\n        'Julho',\n        'Agosto',\n        'Setembro',\n        'Outubro',\n        'Novembro',\n        'Dezembro'\n    ],\n    shortMonths: [\n        'Jan',\n        'Fev',\n        'Mar',\n        'Abr',\n        'Mai',\n        'Jun',\n        'Jul',\n        'Ago',\n        'Set',\n        'Out',\n        'Nov',\n        'Dez'\n    ]\n});"
}