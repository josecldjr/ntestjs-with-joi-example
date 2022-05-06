import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { IValidateSchema, validatePayload } from './validation';

export const ValidateBody: (validation: IValidateSchema) => any =
  createParamDecorator((schema: any, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    return validatePayload(schema, request.body);
  });

export const ValidateParams: (validation: IValidateSchema) => any =
  createParamDecorator((schema: any, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    return validatePayload(schema, request.query);
  });
