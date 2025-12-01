const express = require("express");
const cors = require("cors");
const { products } = require("./data/Product"); 

const app = express();
app.use(cors());
app.use(express.json());

// Products API
app.get("/api/products", (req, res) => 
  res.json(products);
});

const PORT =5000 ;
app.listen(PORT, () => console.log(`Backend running at http://localhost:${PORT}`));
