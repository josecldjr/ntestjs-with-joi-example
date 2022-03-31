import * as Joi from 'joi';

export type TestGet = {
  page: number;
  pageSize: number;
  search?: string;
};

export const TestGetValidation = Joi.object<TestGet>({
  page: Joi.number().min(1).default(1),
  pageSize: Joi.number().min(1).default(10),
  search: Joi.string(),
});
