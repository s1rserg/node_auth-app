const { authMiddleware } = require('../middlewares/auth');
const controller = require('./auth.controller');
const express = require('express');

const router = express.Router();

router.post('/register', controller.register);
router.get('/activate', controller.activate);
router.get('/login', controller.login);
router.get('/refresh', controller.refresh);
router.get('/logout', authMiddleware, controller.refresh);
router.post('/forgot-password', controller.forgotPassword);
router.post('/reset-password', controller.resetPassword);

module.exports = { router };
