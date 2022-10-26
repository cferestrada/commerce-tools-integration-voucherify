export const voucherifyResponse = {
  valid: true,
  redeemables: [
    {
      status: 'APPLICABLE',
      id: 'X_3%_OFF',
      object: 'voucher',
      order: {
        source_id: 'fbf595a5-323b-44a4-9b28-dab5e12321e7',
        amount: 53000,
        discount_amount: 1511,
        items_discount_amount: 2650,
        total_discount_amount: 4161,
        total_amount: 48839,
        applied_discount_amount: 1511,
        total_applied_discount_amount: 1511,
        items: [
          {
            object: 'order_item',
            source_id: 'M0E20000000DUIR',
            related_object: 'sku',
            quantity: 1,
            amount: 26500,
            discount_amount: 2650,
            price: 26500,
            subtotal_amount: 23850,
            product: { name: 'Pants Jacob Cohen green', override: true },
            sku: {
              sku: 'Pants Jacob Cohen green',
              metadata: {},
              override: true,
            },
          },
          {
            object: 'order_item',
            product_id: 'prod_0bd24ec692446d1b0f',
            initial_quantity: 1,
            amount: 26500,
            price: 26500,
            subtotal_amount: 26500,
            product: {
              id: 'prod_0bd24ec692446d1b0f',
              source_id: '260d2585-daef-4c11-9adb-1b90099b7ae8',
              name: 'Pants Jacob Cohen green',
              price: 26500,
            },
            sku: {
              id: 'sku_0bd24ef10f846d27e3',
              source_id: 'M0E20000000DUJ6',
              sku: 'Pants Jacob Cohen green',
              price: 26500,
            },
          },
        ],
        metadata: {},
        customer_id: null,
        referrer_id: null,
        object: 'order',
      },
      applicable_to: { data: [], total: 0, data_ref: 'data', object: 'list' },
      inapplicable_to: { data: [], total: 0, data_ref: 'data', object: 'list' },
      result: {
        discount: { type: 'PERCENT', effect: 'APPLY_TO_ORDER', percent_off: 3 },
      },
    },
    {
      status: 'APPLICABLE',
      id: 'X_10%_OFF',
      object: 'voucher',
      order: {
        source_id: 'fbf595a5-323b-44a4-9b28-dab5e12321e7',
        amount: 53000,
        discount_amount: 1511,
        items_discount_amount: 7685,
        total_discount_amount: 9196,
        total_amount: 43804,
        items_applied_discount_amount: 5035,
        total_applied_discount_amount: 5035,
        items: [
          {
            object: 'order_item',
            source_id: 'M0E20000000DUIR',
            related_object: 'sku',
            quantity: 1,
            amount: 26500,
            discount_amount: 5035,
            applied_discount_amount: 2385,
            price: 26500,
            subtotal_amount: 21465,
            product: { name: 'Pants Jacob Cohen green', override: true },
            sku: {
              sku: 'Pants Jacob Cohen green',
              metadata: {},
              override: true,
            },
          },
          {
            object: 'order_item',
            product_id: 'prod_0bd24ec692446d1b0f',
            initial_quantity: 1,
            amount: 26500,
            discount_amount: 2650,
            applied_discount_amount: 2650,
            price: 26500,
            subtotal_amount: 23850,
            product: {
              id: 'prod_0bd24ec692446d1b0f',
              source_id: '260d2585-daef-4c11-9adb-1b90099b7ae8',
              name: 'Pants Jacob Cohen green',
              price: 26500,
            },
            sku: {
              id: 'sku_0bd24ef10f846d27e3',
              source_id: 'M0E20000000DUJ6',
              sku: 'Pants Jacob Cohen green',
              price: 26500,
            },
          },
        ],
        metadata: {},
        customer_id: null,
        referrer_id: null,
        object: 'order',
      },
      applicable_to: {
        data: [
          {
            object: 'products_collection',
            id: 'pc_a11pr0dUc75',
            strict: false,
            effect: 'APPLY_TO_EVERY',
          },
          {
            object: 'sku',
            id: 'M0E20000000DUIR',
            source_id: 'M0E20000000DUIR',
            strict: true,
            effect: 'APPLY_TO_EVERY',
          },
          {
            object: 'product',
            id: 'prod_0bd24ec692446d1b0f',
            source_id: '260d2585-daef-4c11-9adb-1b90099b7ae8',
            strict: true,
            effect: 'APPLY_TO_EVERY',
          },
        ],
        total: 3,
        data_ref: 'data',
        object: 'list',
      },
      inapplicable_to: { data: [], total: 0, data_ref: 'data', object: 'list' },
      result: {
        discount: {
          type: 'PERCENT',
          effect: 'APPLY_TO_ITEMS',
          percent_off: 10,
        },
      },
    },
    {
      status: 'APPLICABLE',
      id: 'UNIT_TYPE_OFF',
      object: 'voucher',
      order: {
        source_id: 'fbf595a5-323b-44a4-9b28-dab5e12321e7',
        amount: 53000,
        initial_amount: 53000,
        discount_amount: 1511,
        items_discount_amount: 31535,
        total_discount_amount: 33046,
        total_amount: 19954,
        items_applied_discount_amount: 23850,
        total_applied_discount_amount: 23850,
        items: [
          {
            object: 'order_item',
            source_id: 'M0E20000000DUIR',
            related_object: 'sku',
            quantity: 1,
            amount: 26500,
            discount_amount: 5035,
            price: 26500,
            subtotal_amount: 21465,
            product: { name: 'Pants Jacob Cohen green', override: true },
            sku: {
              sku: 'Pants Jacob Cohen green',
              metadata: {},
              override: true,
            },
          },
          {
            object: 'order_item',
            product_id: 'prod_0bd24ec692446d1b0f',
            quantity: 1,
            discount_quantity: 1,
            initial_quantity: 1,
            amount: 26500,
            discount_amount: 26500,
            initial_amount: 26500,
            applied_discount_amount: 23850,
            price: 26500,
            subtotal_amount: 0,
            product: {
              id: 'prod_0bd24ec692446d1b0f',
              source_id: '260d2585-daef-4c11-9adb-1b90099b7ae8',
              name: 'Pants Jacob Cohen green',
              price: 26500,
            },
            sku: {
              id: 'sku_0bd24ef10f846d27e3',
              source_id: 'M0E20000000DUJ6',
              sku: 'Pants Jacob Cohen green',
              price: 26500,
            },
          },
        ],
        metadata: {},
        customer_id: null,
        referrer_id: null,
        object: 'order',
      },
      applicable_to: { data: [], total: 0, data_ref: 'data', object: 'list' },
      inapplicable_to: { data: [], total: 0, data_ref: 'data', object: 'list' },
      result: {
        discount: {
          type: 'UNIT',
          effect: 'ADD_MISSING_ITEMS',
          unit_off: 1,
          unit_type: 'sku_0bd24ef10f846d27e3',
          sku: {
            id: 'sku_0bd24ef10f846d27e3',
            source_id: 'M0E20000000DUJ6',
            sku: 'Pants Jacob Cohen green',
          },
          product: {
            id: 'prod_0bd24ec692446d1b0f',
            source_id: '260d2585-daef-4c11-9adb-1b90099b7ae8',
            name: 'Pants Jacob Cohen green',
          },
        },
      },
    },
  ],
  order: {
    source_id: 'fbf595a5-323b-44a4-9b28-dab5e12321e7',
    amount: 53000,
    discount_amount: 1511,
    items_discount_amount: 31535,
    total_discount_amount: 33046,
    total_amount: 19954,
    applied_discount_amount: 1511,
    items_applied_discount_amount: 28885,
    total_applied_discount_amount: 30396,
    items: [
      {
        object: 'order_item',
        source_id: 'M0E20000000DUIR',
        related_object: 'sku',
        quantity: 1,
        amount: 26500,
        discount_amount: 5035,
        applied_discount_amount: 2385,
        price: 26500,
        subtotal_amount: 21465,
        product: { name: 'Pants Jacob Cohen green', override: true },
        sku: { sku: 'Pants Jacob Cohen green', metadata: {}, override: true },
      },
      {
        object: 'order_item',
        product_id: 'prod_0bd24ec692446d1b0f',
        quantity: 1,
        discount_quantity: 1,
        initial_quantity: 1,
        amount: 26500,
        discount_amount: 26500,
        initial_amount: 26500,
        applied_discount_amount: 26500,
        price: 26500,
        subtotal_amount: 0,
        product: {
          id: 'prod_0bd24ec692446d1b0f',
          source_id: '260d2585-daef-4c11-9adb-1b90099b7ae8',
          name: 'Pants Jacob Cohen green',
          price: 26500,
        },
        sku: {
          id: 'sku_0bd24ef10f846d27e3',
          source_id: 'M0E20000000DUJ6',
          sku: 'Pants Jacob Cohen green',
          price: 26500,
        },
      },
    ],
    metadata: {},
    customer_id: null,
    referrer_id: null,
    object: 'order',
  },
  tracking_id: 'track_n+uaM4gpi8YxRAvegwmsCvfB6tl/OllbrGJn6IijAhRnCgw88C5oGA==',
  session: {
    key: 'ssn_mn4zpmmmlovAkXqkDO6w0oIsaGyaB3Bi',
    type: 'LOCK',
    ttl: 7,
    ttl_unit: 'DAYS',
  },
};
