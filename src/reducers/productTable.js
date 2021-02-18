const initialState = {
  headers: [
    { id: 0, name: 'Name' },
    { id: 1, name: 'Amount' },
    { id: 2, name: 'Price' },
    { id: 3, name: 'Total price' },
  ],
  products: [],
};

export default function productTable(state = initialState, action) {
  switch (action.type) {
    case 'LOAD_TABLE':
      return { ...state, products: action.payload };

    default:
      return state;
  }
}
