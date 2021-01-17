export const saveAmount = (id, value) => ({
  type: 'SAVE_AMOUNT',
  payload: { id, value },
});

export const savePrice = (id, value) => ({
  type: 'SAVE_PRICE',
  payload: { id, value },
});
