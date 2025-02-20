import Handlebars from 'handlebars'

Handlebars.registerHelper(
  'ifCond',
  function (
    this: Record<string, unknown>,
    v1: string | number | boolean,
    operator: string,
    v2: string | number | boolean,
    options: Handlebars.HelperOptions
  ) {
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
  }
)
