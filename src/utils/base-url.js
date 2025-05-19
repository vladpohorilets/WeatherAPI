require('dotenv').config();

const API_URL = process.env.URL || 'http://localhost';
const API_PORT = process.env.PORT || '3000';

const baseURL = `${API_URL.replace(/\/+$/, '')}:${API_PORT}`;

module.exports = baseURL;
