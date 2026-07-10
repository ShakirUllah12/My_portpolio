import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import fs from 'fs';
import path from 'path';

// Copy the generated image from artifact directory to public directory
try {
  const artifactDir = 'C:\\Users\\Administrator\\.gemini\\antigravity\\brain\\b4d5a688-b7cd-432e-b512-fa4c62d245c0';
  const imageName = 'ai_learning_assistant_1783698205438.png';
  const srcPath = path.join(artifactDir, imageName);
  const destDir = path.resolve(__dirname, 'public');
  if (!fs.existsSync(destDir)){
    fs.mkdirSync(destDir, { recursive: true });
  }
  const destPath = path.join(destDir, 'ai_learning_assistant.png');
  if (fs.existsSync(srcPath)) {
    fs.copyFileSync(srcPath, destPath);
    console.log('Successfully copied project screenshot!');
  }
} catch (err) {
  console.error('Failed to copy project screenshot:', err);
}

export default defineConfig({
  plugins: [react()],
  server: { port: 3000 }
});
