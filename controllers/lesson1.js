// Lesson 01

const juliana = ('/', (req, res) => {
    res.send("Juliana Lemos");
});

const daniel = ('/daniel', (req, res) => {
    res.send("Daniel Lemos");
});

module.exports = {
    juliana,
    daniel,
};