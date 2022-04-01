import * as Joi from 'joi';

export const MIN_PRICE = 0.01;
export const MAX_PRICE = 99999999999999;

export enum ProductTypes {
  CAR = 'CAR',
  FOOD_AND_DRINK = 'FOOD_AND_DRINK',
  KITCHEN = 'KITCHEN',
}

const possibleProductTypes: string[] = Object.values(ProductTypes);

export type SaveProduct = {
  name: string;
  description: string;
  price: number;
  barCode: number;
  type: ProductTypes;
};

export type EditProduct = SaveProduct & { id: string };

export const editProductValidationSchema = Joi.object<EditProduct>({
  description: Joi.string().max(50),
  id: Joi.string().uuid().required(),
  name: Joi.string().uppercase().min(3).max(20).required(),
  price: Joi.number().min(0.01).max(99999999),
  type: Joi.valid(...possibleProductTypes).required(),
  barCode: Joi.number().integer().required(),
});
