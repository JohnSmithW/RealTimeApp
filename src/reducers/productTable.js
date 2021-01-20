const initialState = {
  headers: [
    { id: 0, name: 'Name' },
    { id: 1, name: 'Amount' },
    { id: 2, name: 'Price' },
    { id: 3, name: 'Total price' },
  ],
  products: [
    { id: 0, name: 'Milk', amount: 40, priceForOne: 50 },
    { id: 1, name: 'Bread', amount: 100, priceForOne: 20 },
    { id: 2, name: 'Onion', amount: 200, priceForOne: 5 },
  ],
};

export default function productTable(state = initialState, action) {
  switch (action.type) {
    case 'SAVE_AMOUNT':
      let newState = [...state.products];
      newState[action.payload.id].amount = Number(action.payload.value);
      return { ...state, products: newState };

    case 'SAVE_PRICE':
      newState = [...state.products];
      newState[action.payload.id].priceForOne = Number(action.payload.value);
      return { ...state, products: newState };

    default:
      return state;
  }
}
