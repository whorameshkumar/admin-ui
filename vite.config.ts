// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'
// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })



// /// <reference types="vitest"/>          
// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'
// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   test:{environment:'jsdom',}, // yhe line dali and add in top /// <reference types="vitest"/> 
// });


/// <reference types="vitest"/>          
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test:{environment:'jsdom',setupFiles:'./setupTest.ts',globals:true,},  
});