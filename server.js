const express = require('express');

const app = express();

app.use(express.static('./dist/visual-advent-of-code'));

app.get('/*', (req, res) => {
  res.sendFile('index.html', { root: 'dist/visual-advent-of-code' })
});

app.listen(process.env.PORT || 8000);
