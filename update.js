async function runningApp() {

  // Declaring the respective url in 'links' object
  const links = {
    oldSong: process.argv[2], // Url of the album you want to gather info about
    newSong: process.argv[3], // Url of the album you want to gather info about
  };
  const fs = require("fs-extra");

  let musicData = await fs.readFile("musiclist.json");

  musicData = JSON.parse(musicData);

  for (const data of musicData.music) {
    if (data.source === links.oldSong) {
        data.source = links.newSong;
        break;
    }
  }

  await fs.writeFileSync(
    "musiclist.json",
    JSON.stringify(musicData),
    function (error) {
      console.log("Written file 'musiclist.json'... ");
    }
  );
}
runningApp();
