import recurly from 'recurly';

export const createInvoice = async (totalAmount: number) => {
  try {
    const accountCode = `code-standalone_account`;
    console.log("Account code:", accountCode);

    let lineItemReq = {
      currency: 'USD',
      unitAmount: totalAmount,
      type: 'charge'
    }
    let lineItem = await recurlyClient.createLineItem(accountCode, lineItemReq)

    const invoice = await recurlyClient.createInvoice(accountCode, {
      currency: 'USD',
      collectionMethod: "manual",
    });

    Log.info("Invoice created successfully!", { invoice });

  } catch (err) {
    if (err instanceof recurly.errors.ValidationError) {
      Log.error("Failed validation while calling Recurly APIs", err.params);
    } else {
      Log.error("Unknown error while calling Recurly APIs:", err);
    }
    throw err;
  }
};
