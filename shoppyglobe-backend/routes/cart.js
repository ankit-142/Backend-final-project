// Cart routes - Protected (requires authentication)
import express from 'express';
import Cart from '../models/Cart.js';
import Product from '../models/Product.js';
import { authMiddleware } from '../middleware/auth.js';

const router = express.Router();

// POST /cart - Add product to cart
router.post('/', authMiddleware, async (req, res) => {
  try {
    const { productId, quantity } = req.body;

    // Validate input
    if (!productId || !quantity) {
      return res.status(400).json({ error: 'Product ID and quantity are required' });
    }

    // Check if product exists
    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }

    // Validate stock
    if (product.stock < quantity) {
      return res.status(400).json({ error: 'Insufficient stock' });
    }

    // Check if product already in cart
    const existingCart = await Cart.findOne({ userId: req.user.userId, productId });
    if (existingCart) {
      existingCart.quantity += quantity;
      await existingCart.save();
      return res.json({ message: 'Cart updated', cart: existingCart });
    }

    // Create new cart item
    const cart = new Cart({ userId: req.user.userId, productId, quantity });
    await cart.save();
    res.status(201).json({ message: 'Product added to cart', cart });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// PUT /cart/:id - Update cart item quantity
router.put('/:id', authMiddleware, async (req, res) => {
  try {
    const { quantity } = req.body;

    // Validate quantity
    if (!quantity || quantity < 1) {
      return res.status(400).json({ error: 'Valid quantity is required' });
    }

    // Find cart item
    const cart = await Cart.findOne({ _id: req.params.id, userId: req.user.userId });
    if (!cart) {
      return res.status(404).json({ error: 'Cart item not found' });
    }

    // Validate stock
    const product = await Product.findById(cart.productId);
    if (product.stock < quantity) {
      return res.status(400).json({ error: 'Insufficient stock' });
    }

    // Update quantity
    cart.quantity = quantity;
    await cart.save();
    res.json({ message: 'Cart updated', cart });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// DELETE /cart/:id - Remove product from cart
router.delete('/:id', authMiddleware, async (req, res) => {
  try {
    const cart = await Cart.findOneAndDelete({ _id: req.params.id, userId: req.user.userId });
    if (!cart) {
      return res.status(404).json({ error: 'Cart item not found' });
    }
    res.json({ message: 'Product removed from cart' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
