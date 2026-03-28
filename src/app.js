const express = require('express');
const app = express();
app.use(express.json());


const guicheRoutes = require('./routes/guicheRoutes');

app.use('/guiches', guicheRoutes);

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
