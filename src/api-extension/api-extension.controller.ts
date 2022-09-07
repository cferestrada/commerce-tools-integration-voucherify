import {
  Controller,
  Post,
  Body,
  HttpException,
  UseGuards,
  UseInterceptors,
  Logger,
  Res,
} from '@nestjs/common';
import { CartService } from './cart.service';
import { OrderService } from './order.service';
import { TimeLoggingInterceptor } from 'src/misc/time-logging.interceptor';
import { CartOrderDto } from 'src/api-extension/CartOrder.dto';
import { ApiExtensionGuard } from './api-extension.guard';
import { Cart, Order } from '@commercetools/platform-sdk';
import { Response } from 'express';

const sleep = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms)).then((e) => null);
};

@UseInterceptors(TimeLoggingInterceptor)
@Controller('api-extension')
@UseGuards(ApiExtensionGuard)
export class ApiExtensionController {
  constructor(
    private readonly apiExtensionService: CartService,
    private readonly orderService: OrderService,
    private readonly logger: Logger,
  ) {}

  @Post()
  async handleApiExtensionRequest(
    @Body() body: CartOrderDto,
    @Res() responseExpress: Response,
  ): Promise<any> {
    const type = body.resource?.typeId;
    const action = body.action;
    const id = body.resource?.obj?.id;

    this.logger.debug({
      msg: 'Handle Commerce Tools API Extension',
      type,
      id,
      action,
    });

    if (type === 'cart') {
      const response = await this.apiExtensionService.checkCartAndMutate(
        body.resource.obj as Cart,
      );
      if (!response.status) {
        throw new HttpException('', 400);
      }

      return responseExpress.status(200).json({ actions: response.actions });
    }
    if (type === 'order') {
      const response = await this.orderService.redeemVoucherifyCoupons(
        body.resource.obj as Order,
      );
      console.log('aaaa', response?.parent_redemption?.id);
      if (!response?.parent_redemption?.id) {
        return responseExpress.status(200).json({ actions: response.actions });
      }
      responseExpress.status(200).json({ actions: response.actions });
      await this.orderService.checkPaidOrderFallback(
        (body.resource.obj as Order).id,
        response.parent_redemption,
      );
      return;
    }

    return responseExpress.status(200).json({ actions: [] });
  }
}
