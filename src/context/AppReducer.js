// to specify an applications's state changes in response to certain actions to our store

export default (state, action) => {
  switch (action.type) {
    //Need to change the state and send it to child components, we will create a new altered state here
    case "DELETE_TRANSACTION":
      return {
        ...state,
        transactions: state.transactions.filter(
          (transaction) => transaction.id !== action.payload
        ),
      };
    case "ADD_TRANSACTION":
      return {
        ...state,
        transactions: [action.payload, ...state.transactions],
      };
    default:
      return state;
  }
};
