import { defineConfig } from 'vite';

export default defineConfig({
  root: '.', // o la cartella in cui si trova il file html
  build: {
    rollupOptions: {
      input: './src/app.html' // specifica il file HTML personalizzato
    }
  }
});
