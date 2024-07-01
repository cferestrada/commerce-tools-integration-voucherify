export const voucherifyResponse = {
  valid: true,
  redeemables: [
    {
      order: {
        id: 'e66e763f-589a-4cb8-b478-7bac59f75814',
        source_id: 'cart-id',
        created_at: '2022-07-07T11:26:37.521Z',
        amount: 26500,
        discount_amount: 0,
        total_discount_amount: 6500,
        initial_amount: 26500,
        applied_discount_amount: 0,
        total_applied_discount_amount: 6500,
        items: [
          {
            sku_id: 'product-sku1',
            product_id: 'product-id',
            related_object: 'product',
            quantity: 1,
            price: 26500,
            amount: 26500,
            object: 'order_item',
          },
          {
            sku_id: 'gift-sku-id',
            product_id: '7c66ebdb-446d-4ea5-846e-80463a356ef2',
            related_object: 'product',
            quantity: 1,
            price: 6500,
            amount: 6500,
            object: 'order_item',
          },
          {
            source_id: 'gift-sku-id',
            related_object: 'sku',
            product_id: '7c66ebdb-446d-4ea5-846e-80463a356ef2',
            quantity: 1,
            discount_quantity: 1,
            initial_quantity: 1,
            amount: 6500,
            discount_amount: 6500,
            initial_amount: 6500,
            applied_discount_amount: 6500,
            price: 6500,
            subtotal_amount: 0,
            product: {
              id: 'product-id',
              source_id: '7c66ebdb-446d-4ea5-846e-80463a356ef2',
              override: true,
            },
            sku: {
              id: 'sku-id',
              source_id: 'gift-sku-id',
              price: 6500,
              override: true,
            },
          },
        ],
        metadata: {},
        object: 'order',
        items_discount_amount: 6500,
        items_applied_discount_amount: 6500,
      },
      applicable_to: { data: [], total: 0, object: 'list' },
      inapplicable_to: { data: [], total: 0, object: 'list' },
      metadata: {},
      id: 'ADD_GIFT',
      status: 'APPLICABLE',
      object: 'voucher',
      result: {
        discount: {
          type: 'UNIT',
          effect: 'ADD_MISSING_ITEMS',
          unit_off: 1,
          unit_type: '7c66ebdb-446d-4ea5-846e-80463a356ef2',
          sku: { id: 'sku-id', source_id: 'gift-sku-id' },
          product: {
            id: 'product-id',
            source_id: '7c66ebdb-446d-4ea5-846e-80463a356ef2',
          },
        },
      },
    },
  ],
  order: {
    id: 'e66e763f-589a-4cb8-b478-7bac59f75814',
    source_id: 'cart-id',
    created_at: '2022-07-07T11:26:37.521Z',
    amount: 33000,
    discount_amount: 0,
    total_discount_amount: 6500,
    initial_amount: 26500,
    applied_discount_amount: 0,
    total_applied_discount_amount: 6500,
    items: [
      {
        sku_id: 'product-sku1',
        product_id: 'product-id',
        related_object: 'product',
        quantity: 1,
        price: 26500,
        amount: 26500,
        object: 'order_item',
      },
      {
        sku_id: 'gift-sku-id',
        product_id: '7c66ebdb-446d-4ea5-846e-80463a356ef2',
        related_object: 'product',
        quantity: 1,
        price: 6500,
        amount: 6500,
        object: 'order_item',
      },
      {
        source_id: 'gift-sku-id',
        related_object: 'sku',
        product_id: '7c66ebdb-446d-4ea5-846e-80463a356ef2',
        quantity: 1,
        discount_quantity: 1,
        initial_quantity: 1,
        amount: 6500,
        discount_amount: 6500,
        initial_amount: 6500,
        applied_discount_amount: 6500,
        price: 6500,
        subtotal_amount: 0,
        product: {
          id: 'product-id',
          source_id: '7c66ebdb-446d-4ea5-846e-80463a356ef2',
          override: true,
        },
        sku: {
          id: 'sku-id',
          source_id: 'gift-sku-id',
          price: 6500,
          override: true,
        },
      },
    ],
    metadata: {},
    object: 'order',
    items_discount_amount: 6500,
    items_applied_discount_amount: 6500,
  },
  tracking_id: 'track_zTa+v4d+mc0ixHNURqEvtCLxvdT5orvdtWeqzafQxfA5XDblMYxS/w==',
  session: {
    key: 'existing-session-id',
    type: 'LOCK',
    ttl: 7,
    ttl_unit: 'DAYS',
  },
  stacking_rules: {
    redeemables_limit: 30,
    applicable_redeemables_limit: 3,
    applicable_exclusive_redeemables_limit: 1,
    applicable_redeemables_per_category_limit: 3,
    exclusive_categories: ['cat_0e39d9b0e551edcc40'],
    joint_categories: [],
    redeemables_application_mode: 'PARTIAL',
    redeemables_sorting_rule: 'CATEGORY_HIERARCHY',
  },
};
