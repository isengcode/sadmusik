async function runningApp() {

  // Declaring the respective url in 'links' object
  const links = {
    song: process.argv[2],
    songName: process.argv[3], // Url of the album you want to gather info about
  };
  const fs = require("fs-extra");

  let musicData = await fs.readFile("musiclist.json");

  let musicName = links.songName || "Unknown Title";

  musicData = JSON.parse(musicData);
  musicData.music.push({ source: links.song, name: musicName });

  await fs.writeFileSync(
    "musiclist.json",
    JSON.stringify(musicData),
    function (error) {
      console.log("Written file 'musiclist.json'... ");
    }
  );
}
runningApp();
