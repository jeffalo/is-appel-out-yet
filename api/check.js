const fetch = require('node-fetch')

module.exports = async (req, res) => {
    var resp = await fetch('https://api.scratch.mit.edu/projects/60917032/')
    var data = await resp.json()

    res.json(data)
}