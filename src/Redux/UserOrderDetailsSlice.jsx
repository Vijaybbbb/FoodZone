import { createSlice } from "@reduxjs/toolkit";

const userOrderSlice = createSlice({
  name: 'orderDetails',
  initialState: {
    orderDetails: []
  },
  reducers: {
    addToOrders: (state, action) => {
      const { email, phone, address1, address2, paymentType, cartData } = action.payload;
      const newOrder = {
        userDetails: { email, phone, address1, address2, paymentType },
        cartItems: cartData
      };
      // Push the new order object to the state
      state.orderDetails.push(newOrder);
    }
  }
});

export const { addToOrders } = userOrderSlice.actions;
export default userOrderSlice.reducer;
