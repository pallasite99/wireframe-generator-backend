const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Sample wireframe generator
const generateWireframe = (data) => {
    const { projectName, layoutType, pages } = data;

    const wireframe = {
        projectName,
        layoutType,
        pages,
        components: [],
    };

    for (let i = 0; i < pages; i++) {
        wireframe.components.push({
            page: i + 1,
            layout: layoutType === "grid" ? "Grid Layout" : "List Layout",
            elements: layoutType === "grid" ? ["Header", "Grid Items", "Footer"] : ["Header", "List Items", "Footer"],
        });
    }

    return wireframe;
};

app.post("/generate", (req, res) => {
    const wireframe = generateWireframe(req.body);
    res.json({ wireframe });
});

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
