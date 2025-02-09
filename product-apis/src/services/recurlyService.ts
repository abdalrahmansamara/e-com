import recurly from 'recurly';

export const createProduct = async (id: string, name: string, description: string, price: number, stock: number) => {
  try {
    const itemCreate = {
      code: id,
      name: name,
      description: description || '',
      custom_fields: [{
        name: "price",
        value: price
      }, {
        name: "quantity",
        value: stock
      }]
    }
    const item = await recurlyClient.createItem(itemCreate)
    Log.info('Created Item: ', { code: item.code, item })
  } catch (err) {
    if (err instanceof recurly.errors.ValidationError) {
      Log.error('Failed validation while calling recurly apis', err.params)
    } else {
      Log.error('Unknown Error while calling recurly apis: ', err)
    }
    throw err
  }

}
