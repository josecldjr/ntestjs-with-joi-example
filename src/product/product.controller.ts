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
import { ValidateParams } from 'src/generic/validation-decorator';
import { editProductValidationSchema } from './validation/edit-product.validation';
import { TestGetValidation } from './validation/test-get';

@Controller('product')
export class ProductController {
  @Put()
  async editUser(@Body() body): Promise<void> {
    return validatePayload(editProductValidationSchema, body);
  }

  @Put('whitout')
  async editUserWithDecorator(@Body() body): Promise<void> {
    return body;
  }

  @Get('whitout')
  async testGet(@Query() params: any) {
    return params;
  }
}
