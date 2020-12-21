const fetch = require('node-fetch')

module.exports = async (req, res) => {
    var resp = await fetch('https://scratch.mit.edu/messages/ajax/user-activity/?user=isthistaken123&max=6000&cache='+Math.random())
    var data = await resp.text()

    res.send(data)
}