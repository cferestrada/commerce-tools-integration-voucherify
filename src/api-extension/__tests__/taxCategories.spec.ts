import { defaultCart } from './cart.mock';
import {
  getTaxCategoryServiceMockWithConfiguredTaxCategoryResponse,
  getTaxCategoryServiceMockWithNotDefinedTaxCategoryResponse,
  defaultGetCouponTaxCategoryResponse,
} from '../../commerceTools/tax-categories/__mocks__/tax-categories.service';
import { getTypesServiceMockWithConfiguredCouponTypeResponse } from '../../commerceTools/types/__mocks__/types.service';
import { getVoucherifyConnectorServiceMockWithDefinedResponse } from '../../voucherify/__mocks__/voucherify-connector.service';
import { buildCartServiceWithMockedDependencies } from './cart-service.factory';

const voucherifyResponse = {
  valid: true,
  redeemables: [
    {
      status: 'APPLICABLE',
      id: 'HELLO_WORLD!',
      object: 'voucher',
      order: {
        id: 'e66e763f-589a-4cb8-b478-7bac59f75814',
        source_id: 'e66e763f-589a-4cb8-b478-7bac59f75814',
        created_at: '2022-07-07T11:26:37.521Z',
        amount: 29200,
        discount_amount: 2500,
        total_discount_amount: 2500,
        initial_amount: 29200,
        applied_discount_amount: 2500,
        total_applied_discount_amount: 2500,
        items: [
          {
            object: 'order_item',
            source_id: 'M0E20000000E1AZ',
            related_object: 'sku',
            product_id: 'prod_0b5672a19f4147f017',
            quantity: 1,
            amount: 12000,
            price: 12000,
            subtotal_amount: 12000,
            product: {
              id: 'prod_0b5672a19f4147f017',
              source_id: '9050a5d2-8f14-4e01-bcdc-c100dd1b441f',
              name: 'Sneakers New Balance multi',
              override: true,
            },
            sku: {
              id: 'sku_0b56734248814789a5',
              source_id: 'M0E20000000E1AZ',
              sku: 'Sneakers New Balance multi',
              price: 12000,
              override: true,
            },
          },
        ],
        metadata: {},
        object: 'order',
      },
      applicable_to: { data: [], total: 0, data_ref: 'data', object: 'list' },
      inapplicable_to: { data: [], total: 0, data_ref: 'data', object: 'list' },
      result: {
        discount: {
          type: 'AMOUNT',
          effect: 'APPLY_TO_ORDER',
          amount_off: 2500,
        },
      },
    },
  ],
  order: {
    id: 'e66e763f-589a-4cb8-b478-7bac59f75814',
    source_id: 'e66e763f-589a-4cb8-b478-7bac59f75814',
    created_at: '2022-07-07T11:26:37.521Z',
    amount: 29200,
    discount_amount: 2500,
    total_discount_amount: 2500,
    initial_amount: 29200,
    applied_discount_amount: 2500,
    total_applied_discount_amount: 2500,
    items: [
      {
        object: 'order_item',
        source_id: 'M0E20000000E1AZ',
        related_object: 'sku',
        product_id: 'prod_0b5672a19f4147f017',
        quantity: 1,
        amount: 12000,
        price: 12000,
        subtotal_amount: 12000,
        product: {
          id: 'prod_0b5672a19f4147f017',
          source_id: '9050a5d2-8f14-4e01-bcdc-c100dd1b441f',
          name: 'Sneakers New Balance multi',
          override: true,
        },
        sku: {
          id: 'sku_0b56734248814789a5',
          source_id: 'M0E20000000E1AZ',
          sku: 'Sneakers New Balance multi',
          price: 12000,
          override: true,
        },
      },
    ],
    metadata: {},
    object: 'order',
  },
  tracking_id: 'track_zTa+v4d+mc0ixHNURqEvtCLxvdT5orvdtWeqzafQxfA5XDblMYxS/w==',
  session: {
    key: 'ssn_HFTS1dgkRTrJikmCfKAUbDEmGrXpScuw',
    type: 'LOCK',
    ttl: 7,
    ttl_unit: 'DAYS',
  },
};
describe('Tax categories', () => {
  it('should throw error if tax categories are not configured', async () => {
    const cart = defaultCart();
    cart.version = 2;
    const typesService = getTypesServiceMockWithConfiguredCouponTypeResponse();
    const taxCategoriesService =
      getTaxCategoryServiceMockWithNotDefinedTaxCategoryResponse();

    const { cartService } = await buildCartServiceWithMockedDependencies({
      typesService,
      taxCategoriesService,
    });

    expect(
      cartService.validatePromotionsAndBuildCartActions(cart),
    ).rejects.toThrowError(
      new Error('Coupon tax category was not configured correctly'),
    );
  });
  it('Should add new country to coupon tax category if not exist', async () => {
    const cart = defaultCart();
    cart.version = 2;
    cart.country = 'CH';

    const typesService = getTypesServiceMockWithConfiguredCouponTypeResponse();
    const taxCategoriesService =
      getTaxCategoryServiceMockWithConfiguredTaxCategoryResponse();
    const voucherifyConnectorService =
      getVoucherifyConnectorServiceMockWithDefinedResponse(voucherifyResponse);

    const { cartService } = await buildCartServiceWithMockedDependencies({
      typesService,
      taxCategoriesService,
      voucherifyConnectorService,
    });

    await cartService.validatePromotionsAndBuildCartActions(cart);

    expect(taxCategoriesService.getCouponTaxCategory).toBeCalledTimes(1);
    expect(taxCategoriesService.addCountryToCouponTaxCategory).toBeCalledTimes(
      1,
    );
    expect(taxCategoriesService.addCountryToCouponTaxCategory).toBeCalledWith(
      defaultGetCouponTaxCategoryResponse,
      'CH',
    );
  });

  it('Should work with one of returned tax categories for countries which already exist', async () => {
    const cart = defaultCart();
    cart.version = 2;

    const typesService = getTypesServiceMockWithConfiguredCouponTypeResponse();
    const taxCategoriesService =
      getTaxCategoryServiceMockWithConfiguredTaxCategoryResponse();
    const voucherifyConnectorService =
      getVoucherifyConnectorServiceMockWithDefinedResponse(voucherifyResponse);

    const { cartService } = await buildCartServiceWithMockedDependencies({
      typesService,
      taxCategoriesService,
      voucherifyConnectorService,
    });

    await cartService.validatePromotionsAndBuildCartActions(cart);

    expect(taxCategoriesService.getCouponTaxCategory).toBeCalledTimes(1);
    expect(taxCategoriesService.addCountryToCouponTaxCategory).not.toBeCalled();
  });
});
