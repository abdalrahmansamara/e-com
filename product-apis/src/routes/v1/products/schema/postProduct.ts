import * as Yup from "yup";

export const postProductSchema = Yup.object({
  body: Yup.object({
    name: Yup.string().required("Name is required"),
    description: Yup.string().optional(),
    price: Yup.number().required("Price is required").positive("Price must be positive"),
    stock: Yup.number().required("Stock is required").integer("Stock must be an integer").min(0, "Stock cannot be negative"),
  }),
});
