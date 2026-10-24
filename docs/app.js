"use strict";
const sceneData = [
  {name: "red apple", color: "red", line: "Red like an apple,\nshining in the sun.", art: '<div class="apple-leaf"></div><div class="apple"></div><div class="apple-shine"></div>'},
  {name: "blue sky", color: "blue", line: "Blue like the sky,\nhello to everyone.", art: '<div class="cloud"></div><div class="tiny-cloud"></div>'},
  {name: "yellow sun", color: "yellow", line: "Yellow like the sunshine,\nlet’s learn and have some fun.", art: '<div class="demo-sun"></div><div class="sun-smile"></div>'}
];
const sceneButtons = [...document.querySelectorAll("[data-scene]")];
const timeline = document.getElementById("timeline");
const lyric = document.getElementById("lyric-text");
lyric.style.whiteSpace = "pre-line";
function showTime(seconds) {
  const index = Math.min(2, Math.floor(seconds / 4));
  const scene = sceneData[index];
  document.getElementById("demo-scene").className = "demo-scene scene-" + scene.color;
  document.getElementById("scene-art").innerHTML = scene.art;
  lyric.textContent = scene.line;
  document.getElementById("lyric-index").textContent = "LINE 0" + (index + 1) + " / 03";
  document.getElementById("time-display").textContent = "0:" + String(seconds).padStart(2, "0") + " / 0:12";
  timeline.value = String(seconds);
  timeline.setAttribute("aria-valuetext", seconds + " seconds: " + scene.name + " scene");
  sceneButtons.forEach((button, i) => button.setAttribute("aria-pressed", String(i === index)));
}
sceneButtons.forEach((button, index) => button.addEventListener("click", () => showTime(index * 4)));
timeline.addEventListener("input", () => showTime(Number(timeline.value)));
showTime(0);
