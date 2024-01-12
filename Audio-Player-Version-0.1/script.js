let theme = window.matchMedia("(prefers-color-scheme: dark)").matches ?
	"dark" :
	"light";
if (theme == "dark")
{
	document.documentElement.classList.add("dark");
}
document
	.getElementById("dark-mode-toggle")
	.addEventListener("click", function()
	{
		document.documentElement.classList.toggle("dark");
	});
document.getElementById("song-saved").addEventListener("click", function()
{
	document.getElementById("song-saved").classList.toggle("saved");
});
Amplitude.init(
{
	bindings:
	{
		37: "prev",
		39: "next",
		32: "play_pause"
	},
	callbacks:
	{
		timeupdate: function()
		{
			let percentage = Amplitude.getSongPlayedPercentage();
			if (isNaN(percentage))
			{
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
		name: "Track 01",
		artist: "Atom Loves You",
		album: "L'appel du Vide",
		url: "https://assets.codepen.io/6566924/New+Release+Preview-My+Song+3-copy.mp3",
		cover_art_url: "https://assets.codepen.io/6566924/warp.png"
	}]
});
window.onkeydown = function(e)
{
	return !(e.keyCode == 32);
};