import axios from "axios";

export const getAllCheckout = async () => {
  const res = await axios.get("/checkout");

  return res.data;
};