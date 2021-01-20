export const saveAmount = (id, value) => ({
  type: 'server/SAVE_AMOUNT',
  payload: { id, value },
});

export const savePrice = (id, value) => ({
  type: 'server/SAVE_PRICE',
  payload: { id, value },
});
