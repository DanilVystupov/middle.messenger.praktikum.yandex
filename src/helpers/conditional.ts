// @ts-nocheck
import Handlebars from 'handlebars'

Handlebars.registerHelper('ifCond', function (v1, operator, v2, options) {
  let result

  switch (operator) {
    case '==':
      result = v1 == v2
      break
    case '===':
      result = v1 === v2
      break
    case '!=':
      result = v1 != v2
      break
    case '!==':
      result = v1 !== v2
      break
    case '<':
      result = v1 < v2
      break
    case '<=':
      result = v1 <= v2
      break
    case '>':
      result = v1 > v2
      break
    case '>=':
      result = v1 >= v2
      break
    default:
      return options.inverse(this)
  }

  return result ? options.fn(this) : options.inverse(this)
})
