import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

import dotenv from 'dotenv';

dotenv.config();

// const Dotenv = require('dotenv-webpack');
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})
