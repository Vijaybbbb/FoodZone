import { createSlice } from "@reduxjs/toolkit";

const userOrderSlice = createSlice({
  name: 'orderDetails',
  initialState: {
    orderDetails: []
  },
  reducers: {
    addToOrders: (state, action) => {
      const {fullname, email, phone, address1, address2, paymentType, cartData } = action.payload;
      const modifiedCartData = cartData.map(item => ({
        ...item,
        confirmed: true
      }));
      const newOrder = {
        userDetails: {fullname, email, phone, address1, address2, paymentType },
        cartItems: modifiedCartData
      };
      // Push the new order object to the state
      state.orderDetails.push(newOrder);
    }
  }
});

export const { addToOrders } = userOrderSlice.actions;
export default userOrderSlice.reducer;
