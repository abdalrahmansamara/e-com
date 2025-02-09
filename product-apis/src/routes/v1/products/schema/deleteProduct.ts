import * as Yup from "yup";

export const deleteProductSchema = Yup.object({
  params: Yup.object({
    id: Yup.string().required("Product ID is required"),
  }),
});
