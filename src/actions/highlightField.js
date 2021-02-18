export const highlightAmountField = (id) => ({
  type: 'server/HIGHLIGHT_AMOUNT_FIELD',
  payload: id,
});

export const highlightPriceField = (id) => ({
  type: 'server/HIGHLIGHT_PRICE_FIELD',
  payload: id,
});
