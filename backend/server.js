import { default as axios } from "axios";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());

const PORT = 3000;

app.get("/", (req, res) => {
  res.json("hello world");
});

app.get("/:url", async (req, res) => {
  try {
    var options = {
      method: "POST",
      url: process.env.API_URL,
      headers: {
        "content-type":
          "multipart/form-data; boundary=---011000010111000001101001",
      },
      data: `-----011000010111000001101001\r\nContent-Disposition: form-data; name="url"\r\n\r\n${req.params.url}\r\n-----011000010111000001101001--\r\n`,
    };

    let { data } = await axios.request(options);

    if (data === "Website Not Found") {
      return res.json(data);
    }

    res.json({ url: req.params.url, ...data });
  } catch (err) {
    res.status(404).json(err.message);
  }
});

app.listen(PORT, () => {
  console.log("Server Activated! at port" + PORT);
});
