import * as Yup from 'yup';

export const getOrderSchema = Yup.object({
  params: Yup.object({
    id: Yup.string().required('order ID is required'),
  }),
});
