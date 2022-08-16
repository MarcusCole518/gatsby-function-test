export default function handler(req, res) {
    console.log("testing logging")
    res.status(200).json({ hello: `world` })
  }