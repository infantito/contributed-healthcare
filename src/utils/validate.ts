export interface Errors {
  [field: string]: string
}

const validate = <T extends object>(fields: T) => (
  values: Record<string, any>,
): Errors => {
  const keys = Object.keys(fields)

  const errors = keys.reduce((collection, key) => {
    const value = values[key]

    if (!value) {
      collection[key] = 'Campo requerido'
    }

    return collection
  }, {} as Errors)

  return errors
}

export default validate
