{
  "filepath": "/locale/zh-CN.js",
  "shared": [],
  "dependencies": [
    "d3.locale"
  ],
  "helpers": [],
  "exports": [
    "d3.locale.zh_CN"
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
              "name": "zh_CN"
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
                          "value": "¥",
                          "raw": "\"¥\""
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
                      "value": "%Y/%-m/%-d",
                      "raw": "\"%Y/%-m/%-d\""
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
                          "value": "上午",
                          "raw": "\"上午\""
                        },
                        {
                          "type": "Literal",
                          "value": "下午",
                          "raw": "\"下午\""
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
                          "value": "星期日",
                          "raw": "\"星期日\""
                        },
                        {
                          "type": "Literal",
                          "value": "星期一",
                          "raw": "\"星期一\""
                        },
                        {
                          "type": "Literal",
                          "value": "星期二",
                          "raw": "\"星期二\""
                        },
                        {
                          "type": "Literal",
                          "value": "星期三",
                          "raw": "\"星期三\""
                        },
                        {
                          "type": "Literal",
                          "value": "星期四",
                          "raw": "\"星期四\""
                        },
                        {
                          "type": "Literal",
                          "value": "星期五",
                          "raw": "\"星期五\""
                        },
                        {
                          "type": "Literal",
                          "value": "星期六",
                          "raw": "\"星期六\""
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
                          "value": "星期日",
                          "raw": "\"星期日\""
                        },
                        {
                          "type": "Literal",
                          "value": "星期一",
                          "raw": "\"星期一\""
                        },
                        {
                          "type": "Literal",
                          "value": "星期二",
                          "raw": "\"星期二\""
                        },
                        {
                          "type": "Literal",
                          "value": "星期三",
                          "raw": "\"星期三\""
                        },
                        {
                          "type": "Literal",
                          "value": "星期四",
                          "raw": "\"星期四\""
                        },
                        {
                          "type": "Literal",
                          "value": "星期五",
                          "raw": "\"星期五\""
                        },
                        {
                          "type": "Literal",
                          "value": "星期六",
                          "raw": "\"星期六\""
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
                          "value": "一月",
                          "raw": "\"一月\""
                        },
                        {
                          "type": "Literal",
                          "value": "二月",
                          "raw": "\"二月\""
                        },
                        {
                          "type": "Literal",
                          "value": "三月",
                          "raw": "\"三月\""
                        },
                        {
                          "type": "Literal",
                          "value": "四月",
                          "raw": "\"四月\""
                        },
                        {
                          "type": "Literal",
                          "value": "五月",
                          "raw": "\"五月\""
                        },
                        {
                          "type": "Literal",
                          "value": "六月",
                          "raw": "\"六月\""
                        },
                        {
                          "type": "Literal",
                          "value": "七月",
                          "raw": "\"七月\""
                        },
                        {
                          "type": "Literal",
                          "value": "八月",
                          "raw": "\"八月\""
                        },
                        {
                          "type": "Literal",
                          "value": "九月",
                          "raw": "\"九月\""
                        },
                        {
                          "type": "Literal",
                          "value": "十月",
                          "raw": "\"十月\""
                        },
                        {
                          "type": "Literal",
                          "value": "十一月",
                          "raw": "\"十一月\""
                        },
                        {
                          "type": "Literal",
                          "value": "十二月",
                          "raw": "\"十二月\""
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
                          "value": "一月",
                          "raw": "\"一月\""
                        },
                        {
                          "type": "Literal",
                          "value": "二月",
                          "raw": "\"二月\""
                        },
                        {
                          "type": "Literal",
                          "value": "三月",
                          "raw": "\"三月\""
                        },
                        {
                          "type": "Literal",
                          "value": "四月",
                          "raw": "\"四月\""
                        },
                        {
                          "type": "Literal",
                          "value": "五月",
                          "raw": "\"五月\""
                        },
                        {
                          "type": "Literal",
                          "value": "六月",
                          "raw": "\"六月\""
                        },
                        {
                          "type": "Literal",
                          "value": "七月",
                          "raw": "\"七月\""
                        },
                        {
                          "type": "Literal",
                          "value": "八月",
                          "raw": "\"八月\""
                        },
                        {
                          "type": "Literal",
                          "value": "九月",
                          "raw": "\"九月\""
                        },
                        {
                          "type": "Literal",
                          "value": "十月",
                          "raw": "\"十月\""
                        },
                        {
                          "type": "Literal",
                          "value": "十一月",
                          "raw": "\"十一月\""
                        },
                        {
                          "type": "Literal",
                          "value": "十二月",
                          "raw": "\"十二月\""
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
  "src": "d3.locale.zh_CN = d3.locale({\n    decimal: '.',\n    thousands: ',',\n    grouping: [3],\n    currency: [\n        '\\xA5',\n        ''\n    ],\n    dateTime: '%a %b %e %X %Y',\n    date: '%Y/%-m/%-d',\n    time: '%H:%M:%S',\n    periods: [\n        '\\u4E0A\\u5348',\n        '\\u4E0B\\u5348'\n    ],\n    days: [\n        '\\u661F\\u671F\\u65E5',\n        '\\u661F\\u671F\\u4E00',\n        '\\u661F\\u671F\\u4E8C',\n        '\\u661F\\u671F\\u4E09',\n        '\\u661F\\u671F\\u56DB',\n        '\\u661F\\u671F\\u4E94',\n        '\\u661F\\u671F\\u516D'\n    ],\n    shortDays: [\n        '\\u661F\\u671F\\u65E5',\n        '\\u661F\\u671F\\u4E00',\n        '\\u661F\\u671F\\u4E8C',\n        '\\u661F\\u671F\\u4E09',\n        '\\u661F\\u671F\\u56DB',\n        '\\u661F\\u671F\\u4E94',\n        '\\u661F\\u671F\\u516D'\n    ],\n    months: [\n        '\\u4E00\\u6708',\n        '\\u4E8C\\u6708',\n        '\\u4E09\\u6708',\n        '\\u56DB\\u6708',\n        '\\u4E94\\u6708',\n        '\\u516D\\u6708',\n        '\\u4E03\\u6708',\n        '\\u516B\\u6708',\n        '\\u4E5D\\u6708',\n        '\\u5341\\u6708',\n        '\\u5341\\u4E00\\u6708',\n        '\\u5341\\u4E8C\\u6708'\n    ],\n    shortMonths: [\n        '\\u4E00\\u6708',\n        '\\u4E8C\\u6708',\n        '\\u4E09\\u6708',\n        '\\u56DB\\u6708',\n        '\\u4E94\\u6708',\n        '\\u516D\\u6708',\n        '\\u4E03\\u6708',\n        '\\u516B\\u6708',\n        '\\u4E5D\\u6708',\n        '\\u5341\\u6708',\n        '\\u5341\\u4E00\\u6708',\n        '\\u5341\\u4E8C\\u6708'\n    ]\n});"
}