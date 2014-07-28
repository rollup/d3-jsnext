{
  "filepath": "/locale/ru-RU.js",
  "shared": [],
  "dependencies": [
    "d3.locale"
  ],
  "helpers": [],
  "exports": [
    "d3.locale.ru_RU"
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
              "name": "ru_RU"
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
                          "value": " руб.",
                          "raw": "\" руб.\""
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
                      "value": "%A, %e %B %Y г. %X",
                      "raw": "\"%A, %e %B %Y г. %X\""
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
                      "value": "%d.%m.%Y",
                      "raw": "\"%d.%m.%Y\""
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
                          "value": "воскресенье",
                          "raw": "\"воскресенье\""
                        },
                        {
                          "type": "Literal",
                          "value": "понедельник",
                          "raw": "\"понедельник\""
                        },
                        {
                          "type": "Literal",
                          "value": "вторник",
                          "raw": "\"вторник\""
                        },
                        {
                          "type": "Literal",
                          "value": "среда",
                          "raw": "\"среда\""
                        },
                        {
                          "type": "Literal",
                          "value": "четверг",
                          "raw": "\"четверг\""
                        },
                        {
                          "type": "Literal",
                          "value": "пятница",
                          "raw": "\"пятница\""
                        },
                        {
                          "type": "Literal",
                          "value": "суббота",
                          "raw": "\"суббота\""
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
                          "value": "вс",
                          "raw": "\"вс\""
                        },
                        {
                          "type": "Literal",
                          "value": "пн",
                          "raw": "\"пн\""
                        },
                        {
                          "type": "Literal",
                          "value": "вт",
                          "raw": "\"вт\""
                        },
                        {
                          "type": "Literal",
                          "value": "ср",
                          "raw": "\"ср\""
                        },
                        {
                          "type": "Literal",
                          "value": "чт",
                          "raw": "\"чт\""
                        },
                        {
                          "type": "Literal",
                          "value": "пт",
                          "raw": "\"пт\""
                        },
                        {
                          "type": "Literal",
                          "value": "сб",
                          "raw": "\"сб\""
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
                          "value": "января",
                          "raw": "\"января\""
                        },
                        {
                          "type": "Literal",
                          "value": "февраля",
                          "raw": "\"февраля\""
                        },
                        {
                          "type": "Literal",
                          "value": "марта",
                          "raw": "\"марта\""
                        },
                        {
                          "type": "Literal",
                          "value": "апреля",
                          "raw": "\"апреля\""
                        },
                        {
                          "type": "Literal",
                          "value": "мая",
                          "raw": "\"мая\""
                        },
                        {
                          "type": "Literal",
                          "value": "июня",
                          "raw": "\"июня\""
                        },
                        {
                          "type": "Literal",
                          "value": "июля",
                          "raw": "\"июля\""
                        },
                        {
                          "type": "Literal",
                          "value": "августа",
                          "raw": "\"августа\""
                        },
                        {
                          "type": "Literal",
                          "value": "сентября",
                          "raw": "\"сентября\""
                        },
                        {
                          "type": "Literal",
                          "value": "октября",
                          "raw": "\"октября\""
                        },
                        {
                          "type": "Literal",
                          "value": "ноября",
                          "raw": "\"ноября\""
                        },
                        {
                          "type": "Literal",
                          "value": "декабря",
                          "raw": "\"декабря\""
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
                          "value": "янв",
                          "raw": "\"янв\""
                        },
                        {
                          "type": "Literal",
                          "value": "фев",
                          "raw": "\"фев\""
                        },
                        {
                          "type": "Literal",
                          "value": "мар",
                          "raw": "\"мар\""
                        },
                        {
                          "type": "Literal",
                          "value": "апр",
                          "raw": "\"апр\""
                        },
                        {
                          "type": "Literal",
                          "value": "май",
                          "raw": "\"май\""
                        },
                        {
                          "type": "Literal",
                          "value": "июн",
                          "raw": "\"июн\""
                        },
                        {
                          "type": "Literal",
                          "value": "июл",
                          "raw": "\"июл\""
                        },
                        {
                          "type": "Literal",
                          "value": "авг",
                          "raw": "\"авг\""
                        },
                        {
                          "type": "Literal",
                          "value": "сен",
                          "raw": "\"сен\""
                        },
                        {
                          "type": "Literal",
                          "value": "окт",
                          "raw": "\"окт\""
                        },
                        {
                          "type": "Literal",
                          "value": "ноя",
                          "raw": "\"ноя\""
                        },
                        {
                          "type": "Literal",
                          "value": "дек",
                          "raw": "\"дек\""
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