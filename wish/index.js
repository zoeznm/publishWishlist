import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const port = 3000;

// 현재 파일의 디렉토리 경로 얻기
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// JSON 요청을 처리할 수 있게 설정
app.use(express.json());

// API 라우트
app.get('/api/data', (req, res) => {
  res.json({ message: 'Hello from the API!' });
});

// 정적 파일 제공
app.use(express.static(path.join(__dirname, 'client/dist')));

// Vue 라우터와의 호환성을 위해 모든 경로에서 index.html을 반환
app.get('*', (req, res) => {
  const filePath = path.join(__dirname, 'client/dist', 'index.html');
  res.sendFile(filePath);
});

// 서버 시작
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
