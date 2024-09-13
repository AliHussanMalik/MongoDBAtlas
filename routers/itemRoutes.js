const express = require('express');
const router = express.Router();
const {
  getItems,
  createItem,
  getItemById,
  updateItem,
  deleteItem,
} = require('../controllers/itemController');
const validateItem = require('../middlewares/validateRequest');

router.get('/', getItems);
router.post('/', validateItem, createItem);
router.get('/:id', getItemById);
router.put('/:id', validateItem, updateItem);
router.delete('/:id', deleteItem);

module.exports = router;
