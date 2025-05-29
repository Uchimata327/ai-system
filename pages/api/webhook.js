export const config = {
  api: {
    bodyParser: false,
  },
};

import crypto from "crypto";
import axios from "axios";

function buffer(readable) {
  return new Promise((resolve, reject) => {
    const chunks = [];
    readable.on("data", (chunk) => chunks.push(chunk));
    readable.on("end", () => resolve(Buffer.concat(chunks)));
    readable.on("error", reject);
  });
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).send("Method Not Allowed");
  }

  const buf = await buffer(req);
  const signature = req.headers["x-hub-signature-256"];
  const hmac = crypto.createHmac("sha256", process.env.GITHUB_SECRET);
  const digest = "sha256=" + hmac.update(buf).digest("hex");

  if (signature !== digest) {
    return res.status(401).send("Invalid signature");
  }

  const event = req.headers["x-github-event"];
  const payload = JSON.parse(buf.toString());

  if (event === "push") {
    try {
      const response = await axios.post(
        "https://api.vercel.com/v13/deployments",
        {
          name: "yoyn",
          project: process.env.VERCEL_PROJECT_ID,
          gitSource: {
            type: "github",
            ref: payload.ref,
            repoId: payload.repository.id,
          },
        },
        {
          headers: {
            Authorization: `Bearer ${process.env.VERCEL_TOKEN}`,
          },
        }
      );
      return res.status(200).json({ success: true, deployment: response.data });
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
  }

  return res.status(200).send("No deploy triggered");
}
Add webhook handler for GitHub → Vercel integration
