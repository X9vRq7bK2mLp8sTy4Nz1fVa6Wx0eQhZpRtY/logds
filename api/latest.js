import { getLastReq } from "./log.js";

export default function handler(req, res) {
  res.status(200).json(getLastReq() || { message: "no requests yet" });
}
