import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages는 https://<user>.github.io/<repo>/ 에서 서빙되므로
// base 경로를 repo 이름과 동일하게 맞춰야 합니다.
// repo 이름을 바꾼다면 아래 값도 같이 바꾸세요.
export default defineConfig({
  plugins: [react()],
  base: '/lab-website/',
})
