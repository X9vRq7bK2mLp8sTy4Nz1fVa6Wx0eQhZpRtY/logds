export default function handler(req, res) {
  // log to vercel dashboard
  console.log("incoming request:");
  console.log(req.method);
  console.log(req.headers);

  // also return json to client
  res.status(200).json({
    method: req.method,
    headers: req.headers,
  });
}
