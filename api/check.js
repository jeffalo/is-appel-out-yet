const fetch = require('fetch')

module.exports = async (req, res) => {
    var resp = await fetch('https://scratch.mit.edu/messages/ajax/user-activity/?user=griffpatch&max=6')
    var data = await resp.text()

    res.json({
      body: data
    })
}