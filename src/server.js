module.exports = (req, res, next) => {
    if (req.method == 'POST' && req.path == '/login') {
      if (req.body.username === 'thuy' && req.body.password === '12345678') {
        res.status(200).json({})
      } else {
        res.status(400).json({message: 'nhap sai roi xem lai di'})
      }
    } else {
      next()
    }
  }