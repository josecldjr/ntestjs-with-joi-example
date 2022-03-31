import { BadRequestException, HttpCode, HttpStatus } from '@nestjs/common';
import Joi from 'joi';

/** Validate a payload based on a validation schema and trhows an http formated error in case invalid data */
export const validatePayload = (validationSchema: Joi.AnySchema, data: any) => {
  const result = validationSchema.validate(data, {
    abortEarly: false,
    convert: true,
  });

  if (result.error) {
    throw new BadRequestException(
      result.error.details.map(({ message, path }) => ({
        message,
        name: path[0],
      })),
    );
  }

  return result.value;
};
