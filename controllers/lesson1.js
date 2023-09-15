const test04 = ('/', (req, res) => {
    res.send("Test 4");
});

const test05 = ('/test05', (req, res) => {
    res.send("Test 5 worked!");
});

module.exports = {
    test04,
    test05,
};