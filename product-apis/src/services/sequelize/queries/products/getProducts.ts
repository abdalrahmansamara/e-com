import { Op } from 'sequelize';
import { Request } from 'express';
import db from '../../models'

export const getProducts = async (req: Request) => {
  const { size, page, name } = req.getQuery()
  return db.Product.findAndCountAll({
    ...(name ? { where: { name: { [Op.iLike]: `%${name}%`, } } } : {}),
    limit: size,
    offset: (page - 1) * size
  })
};
