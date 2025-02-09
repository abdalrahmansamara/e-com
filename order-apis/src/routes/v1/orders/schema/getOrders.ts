import * as Yup from 'yup';

export const getOrdersSchema = Yup.object({
  query: Yup.object({
    page: Yup.number().integer().min(1).default(1),
    size: Yup.number().integer().min(1).default(10),
    status: Yup.string()
      .oneOf(["Pending", "Processing", "Completed", "Cancelled"])
      .optional(),
    paymentStatus: Yup.string()
      .oneOf(["Paid", "Pending", "Failed"])
      .optional(),
    deliveryStatus: Yup.string()
      .oneOf(["Shipped", "Delivered", "In Transit", "Returned"])
      .optional(),
    sortBy: Yup.string()
      .oneOf(["customerName", "totalAmount", "status", "createdAt"])
      .optional(),
    sortOrder: Yup.string()
      .oneOf(["asc", "desc"])
      .optional(),
  }),
});
