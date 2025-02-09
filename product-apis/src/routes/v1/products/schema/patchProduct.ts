import * as Yup from "yup";

export const patchProductSchema = Yup.object({
  params: Yup.object({
    id: Yup.string().uuid("Invalid ID format").required("Product ID is required"),
  }),
  body: Yup.object({
    name: Yup.string().optional(),
    description: Yup.string().optional(),
    price: Yup.number().optional().positive("Price must be positive"),
    stock: Yup.number().optional().integer("Stock must be an integer").min(0, "Stock cannot be negative"),
  }).noUnknown(),
});
