class IndexController {
    async getExample(req, res) {
        res.json({ message: "This is an example response from the IndexController." });
    }

    async postExample(req, res) {
        const data = req.body;
        res.status(201).json({ message: "Data received", data });
    }
}

module.exports = new IndexController();