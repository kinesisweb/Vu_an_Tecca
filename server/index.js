const express = require("express");
const { Nuxt, Builder } = require("nuxt");
const baybeach = express.Router();
const axios = require("axios");

baybeach.get("/calendar/css", (req, res) => {
  res.setHeader("Content-Type", "text/css");
  res.sendFile(__dirname + "/calendar-style.css");
});

baybeach.get("/calendar", (req, res) => {
  axios
    .get("https://www.availcheck.com/cgi-bin/bb_search.cgi?member_id=18497")
    .then(response => {
      let html = response.data
        .replace(
          "</title>",
          "</title><base href='https://www.availcheck.com/bb_instant_files/'>"
        )
        .replace(
          "</head>",
          '<link rel="stylesheet" href="http://baybeach.localhost:8080/calendar/css" /></head>'
        );
      res.send(html);
    });
});

// Import and Set Nuxt.js options
const config = require("../nuxt.config.js");
config.dev = process.env.NODE_ENV !== "production";

async function start() {
  console.log("Starting Nuxt...");
  // Init Nuxt.js
  const nuxt = new Nuxt(config);

  // Build only in dev mode
  const builder = new Builder(nuxt);
  await builder.build();

  await nuxt.ready();

  // Give nuxt middleware to express
  baybeach.use(nuxt.render);
}
start();

module.exports = baybeach;
