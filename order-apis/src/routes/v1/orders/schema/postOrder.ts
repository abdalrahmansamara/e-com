import * as Yup from 'yup';

export const postOrderSchema = Yup.object({
  body: Yup.object({
    user_id: Yup.string().optional(), // For guest checkout, user_id is optional
    customerName: Yup.string().required("Customer name is required"),
    shippingAddress: Yup.string().required("Shipping address is required"),
    billingAddress: Yup.string().required("Billing address is required"),
    currency: Yup.string().default("USD"),
    paymentMethod: Yup.string().default("Visa"),
    paymentStatus: Yup.string()
      .oneOf(["Paid", "Pending", "Failed"])
      .default("Pending"),
    trackingNumber: Yup.string().optional(),
    deliveryStatus: Yup.string()
      .oneOf(["Shipped", "Delivered", "In Transit", "Returned"])
      .optional(),
    notes: Yup.string().optional(),
    products: Yup.array()
      .of(
        Yup.object({
          productId: Yup.string().required("Product ID is required"),
          quantity: Yup.number().integer().min(1).required("Quantity is required"),
        })
      )
      .min(1, "At least one product must be provided")
      .required(),
  }),
});
