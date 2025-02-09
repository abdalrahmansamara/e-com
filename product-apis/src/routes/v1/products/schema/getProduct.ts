import * as Yup from 'yup';

export const getProductSchema = Yup.object({
  params: Yup.object({
    id: Yup.string().required('ID is required'),
  }),
});
