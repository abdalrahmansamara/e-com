import * as Yup from "yup";

export const deleteOrderSchema = Yup.object({
  params: Yup.object({
    id: Yup.string().required("Order ID is required"),
  }),
});
