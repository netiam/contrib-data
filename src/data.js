export default function(data) {
  return function(req, res) {
    res.body = data
  }
}
