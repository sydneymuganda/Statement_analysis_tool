import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'


// const Dotenv = require('dotenv-webpack');
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})
