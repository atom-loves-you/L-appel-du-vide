let theme = window.matchMedia("(prefers-color-scheme: dark)").matches
  ? "dark"
  : "light";

if (theme == "dark") {
  document.documentElement.classList.add("dark");
}

document
  .getElementById("dark-mode-toggle")
  .addEventListener("click", function () {
    document.documentElement.classList.toggle("dark");
  });

document.getElementById("song-saved").addEventListener("click", function () {
  document.getElementById("song-saved").classList.toggle("saved");
});

Amplitude.init({
  bindings: {
    37: "prev",
    39: "next",
    32: "play_pause"
  },
  callbacks: {
    timeupdate: function () {
      let percentage = Amplitude.getSongPlayedPercentage();

      if (isNaN(percentage)) {
        percentage = 0;
      }

      /**
       * Massive Help from: https://nikitahl.com/style-range-input-css
       */
      let slider = document.getElementById("song-percentage-played");
      slider.style.backgroundSize = percentage + "% 100%";
    }
  },
  songs: [
    {
      name: "Tweeters, Woofers, Heavy Metal",
      artist: "Atom Loves You",
      album: "Ad Astra per Aspera",
      url:
        "https://assets.codepen.io/6566924/Tweeters-Woofers-Heavy+Metal.mp3",
      cover_art_url: "https://assets.codepen.io/6566924/bright-colors-grid-square.png"
    },
   {
      name: "ℏ = h/2π",
      artist: "Atom Loves You",
      album: "Ad Astra per Aspera",
      url:
        "https://assets.codepen.io/6566924/%E2%84%8F+%3D+h%2F2%CF%80.mp3",
      cover_art_url: "https://assets.codepen.io/6566924/bright-colors-grid-square.png"
    }
  ]
});

window.onkeydown = function (e) {
  return !(e.keyCode == 32);
};