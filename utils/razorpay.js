// /pages/api/create-razorpay-order.js
import Razorpay from "razorpay";

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,     // Set in your .env
  key_secret: process.env.RAZORPAY_SECRET, // Set in your .env
});

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  const { amount, currency, receipt } = req.body;

  if (!amount || !currency || !receipt) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  const options = {
    amount: parseInt(amount), // Amount in paise (e.g., ₹500 = 50000)
    currency,
    receipt,
    payment_capture: 1, // Auto-capture
  };

  try {
    const order = await razorpay.orders.create(options);
    res.status(200).json(order);
  } catch (err) {
    console.error("Error creating Razorpay order", err);
    res.status(500).json({ message: "Failed to create order", error: err.message });
  }
}
