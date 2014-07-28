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
  }
}