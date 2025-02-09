import * as Yup from 'yup';

export const getProductsSchema = Yup.object({
  query: Yup.object({
    page: Yup.number().integer().min(1).default(1),
    size: Yup.number().integer().min(1).default(10),
    name: Yup.string().optional()
  }),
});

