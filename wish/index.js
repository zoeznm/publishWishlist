// index.js
const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

// JSON 요청을 처리할 수 있게 설정
app.use(express.json());

app.get('/api/data', (req, res) => {
  res.json({ message: 'Hello from the API!' });
});

// 정적 파일 제공
app.use(express.static(path.join(__dirname, 'client/dist')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/dist', 'index.html'));
});

// 기본 라우트
app.get('/', (req, res) => {
  res.send('Hello World from Backend!');
});

// 서버 시작
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
