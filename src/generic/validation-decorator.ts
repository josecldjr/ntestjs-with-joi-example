import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { validatePayload } from './validation';

export const ValidateBody = createParamDecorator(
  (schema: any, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    return validatePayload(schema, request.body);
  },
);
export const ValidateParams = createParamDecorator(
  (schema: any, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    return validatePayload(schema, request.query);
  },
);
