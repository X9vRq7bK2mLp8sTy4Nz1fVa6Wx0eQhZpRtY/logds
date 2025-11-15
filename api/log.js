let lastReq = null;

export default function handler(req, res) {
  lastReq = {
    time: new Date().toISOString(),
    method: req.method,
    headers: req.headers,
  };

  res.status(200).json(lastReq);
}

export function getLastReq() {
  return lastReq;
}
