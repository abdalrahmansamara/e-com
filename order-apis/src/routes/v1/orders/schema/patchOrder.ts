import * as Yup from 'yup';

export const patchOrderSchema = Yup.object({
  body: Yup.object({
    shippingAddress: Yup.string().optional(),
    billingAddress: Yup.string().optional(),
    status: Yup.string()
      .oneOf(["Pending", "Processing", "Completed", "Cancelled"])
      .optional(),
    paymentStatus: Yup.string()
      .oneOf(["Paid", "Pending", "Failed"])
      .optional(),
    deliveryStatus: Yup.string()
      .oneOf(["Shipped", "Delivered", "In Transit", "Returned"])
      .optional(),
    notes: Yup.string().optional(),
  }).noUnknown(true, 'Additional fields are not allowed').strict(),
});
