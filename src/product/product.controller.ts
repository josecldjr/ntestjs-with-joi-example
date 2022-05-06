import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpException,
  HttpStatus,
  Provider,
  Put,
  Query,
} from '@nestjs/common';
import { validatePayload } from 'src/generic/validation';
import { ValidateBody, ValidateParams } from 'src/generic/validation-decorator';
import { editProductValidationSchema } from './validation/edit-product.validation';
import { TestGetValidation } from './validation/test-get';

@Controller('product')
export class ProductController {
  // no scopo
  @Put()
  async editUser(@Body() body): Promise<void> {
    return validatePayload(editProductValidationSchema, body);
  }

  // no decorator
  @Put('decorator')
  async editUserWithDecorator(
    @ValidateBody(editProductValidationSchema) body,
  ): Promise<void> {
    return body;
  }

  // sem validação
  @Put('without')
  async editUserWithoutValidator(@Body() body): Promise<void> {
    return body;
  }

  // get com validation e cast
  @Get()
  async testGet(@ValidateParams(TestGetValidation) params: any) {
    return params;
  }

  // sem validation
  @Get('whitout')
  async testGetWithoutValidation(@Query() params: any) {
    return params;
  }
}
