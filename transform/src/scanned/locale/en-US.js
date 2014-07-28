{
  "filepath": "/locale/en-US.js",
  "shared": [],
  "dependencies": [
    "d3.locale"
  ],
  "helpers": [
    "d3_locale_enUS"
  ],
  "exports": [],
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
              "name": "d3_locale_enUS"
            },
            "init": {
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
                        "value": ".",
                        "raw": "\".\""
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
                        "value": ",",
                        "raw": "\",\""
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
                            "value": "$",
                            "raw": "\"$\""
                          },
                          {
                            "type": "Literal",
                            "value": "",
                            "raw": "\"\""
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
                        "value": "%a %b %e %X %Y",
                        "raw": "\"%a %b %e %X %Y\""
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
                        "value": "%m/%d/%Y",
                        "raw": "\"%m/%d/%Y\""
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
                            "value": "Sunday",
                            "raw": "\"Sunday\""
                          },
                          {
                            "type": "Literal",
                            "value": "Monday",
                            "raw": "\"Monday\""
                          },
                          {
                            "type": "Literal",
                            "value": "Tuesday",
                            "raw": "\"Tuesday\""
                          },
                          {
                            "type": "Literal",
                            "value": "Wednesday",
                            "raw": "\"Wednesday\""
                          },
                          {
                            "type": "Literal",
                            "value": "Thursday",
                            "raw": "\"Thursday\""
                          },
                          {
                            "type": "Literal",
                            "value": "Friday",
                            "raw": "\"Friday\""
                          },
                          {
                            "type": "Literal",
                            "value": "Saturday",
                            "raw": "\"Saturday\""
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
                            "value": "Sun",
                            "raw": "\"Sun\""
                          },
                          {
                            "type": "Literal",
                            "value": "Mon",
                            "raw": "\"Mon\""
                          },
                          {
                            "type": "Literal",
                            "value": "Tue",
                            "raw": "\"Tue\""
                          },
                          {
                            "type": "Literal",
                            "value": "Wed",
                            "raw": "\"Wed\""
                          },
                          {
                            "type": "Literal",
                            "value": "Thu",
                            "raw": "\"Thu\""
                          },
                          {
                            "type": "Literal",
                            "value": "Fri",
                            "raw": "\"Fri\""
                          },
                          {
                            "type": "Literal",
                            "value": "Sat",
                            "raw": "\"Sat\""
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
                            "value": "January",
                            "raw": "\"January\""
                          },
                          {
                            "type": "Literal",
                            "value": "February",
                            "raw": "\"February\""
                          },
                          {
                            "type": "Literal",
                            "value": "March",
                            "raw": "\"March\""
                          },
                          {
                            "type": "Literal",
                            "value": "April",
                            "raw": "\"April\""
                          },
                          {
                            "type": "Literal",
                            "value": "May",
                            "raw": "\"May\""
                          },
                          {
                            "type": "Literal",
                            "value": "June",
                            "raw": "\"June\""
                          },
                          {
                            "type": "Literal",
                            "value": "July",
                            "raw": "\"July\""
                          },
                          {
                            "type": "Literal",
                            "value": "August",
                            "raw": "\"August\""
                          },
                          {
                            "type": "Literal",
                            "value": "September",
                            "raw": "\"September\""
                          },
                          {
                            "type": "Literal",
                            "value": "October",
                            "raw": "\"October\""
                          },
                          {
                            "type": "Literal",
                            "value": "November",
                            "raw": "\"November\""
                          },
                          {
                            "type": "Literal",
                            "value": "December",
                            "raw": "\"December\""
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
                            "raw": "\"Jan\""
                          },
                          {
                            "type": "Literal",
                            "value": "Feb",
                            "raw": "\"Feb\""
                          },
                          {
                            "type": "Literal",
                            "value": "Mar",
                            "raw": "\"Mar\""
                          },
                          {
                            "type": "Literal",
                            "value": "Apr",
                            "raw": "\"Apr\""
                          },
                          {
                            "type": "Literal",
                            "value": "May",
                            "raw": "\"May\""
                          },
                          {
                            "type": "Literal",
                            "value": "Jun",
                            "raw": "\"Jun\""
                          },
                          {
                            "type": "Literal",
                            "value": "Jul",
                            "raw": "\"Jul\""
                          },
                          {
                            "type": "Literal",
                            "value": "Aug",
                            "raw": "\"Aug\""
                          },
                          {
                            "type": "Literal",
                            "value": "Sep",
                            "raw": "\"Sep\""
                          },
                          {
                            "type": "Literal",
                            "value": "Oct",
                            "raw": "\"Oct\""
                          },
                          {
                            "type": "Literal",
                            "value": "Nov",
                            "raw": "\"Nov\""
                          },
                          {
                            "type": "Literal",
                            "value": "Dec",
                            "raw": "\"Dec\""
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
        ]
      }
    ]
  },
  "src": "var d3_locale_enUS = d3.locale({\n        decimal: '.',\n        thousands: ',',\n        grouping: [3],\n        currency: [\n            '$',\n            ''\n        ],\n        dateTime: '%a %b %e %X %Y',\n        date: '%m/%d/%Y',\n        time: '%H:%M:%S',\n        periods: [\n            'AM',\n            'PM'\n        ],\n        days: [\n            'Sunday',\n            'Monday',\n            'Tuesday',\n            'Wednesday',\n            'Thursday',\n            'Friday',\n            'Saturday'\n        ],\n        shortDays: [\n            'Sun',\n            'Mon',\n            'Tue',\n            'Wed',\n            'Thu',\n            'Fri',\n            'Sat'\n        ],\n        months: [\n            'January',\n            'February',\n            'March',\n            'April',\n            'May',\n            'June',\n            'July',\n            'August',\n            'September',\n            'October',\n            'November',\n            'December'\n        ],\n        shortMonths: [\n            'Jan',\n            'Feb',\n            'Mar',\n            'Apr',\n            'May',\n            'Jun',\n            'Jul',\n            'Aug',\n            'Sep',\n            'Oct',\n            'Nov',\n            'Dec'\n        ]\n    });"
}