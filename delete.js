async function runningApp() {

  // Declaring the respective url in 'links' object
  const links = {
    song: process.argv[2], // Url of the album you want to gather info about
  };
  const fs = require("fs-extra");

  let musicData = await fs.readFile("musiclist.json");

  musicData = JSON.parse(musicData);

  // cari index data berdasarkan name atau source
  const index = musicData.music.findIndex(
    (m) => m.name === links.song || m.source === links.song
  );

  if (index !== -1) {
    // hapus 1 data di posisi tersebut
    const removed = musicData.music.splice(index, 1);
    console.log(`✅ Dihapus:`, removed[0]);
  } else {
    console.log(`⚠️ Lagu '${links.song}' tidak ditemukan.`);
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
