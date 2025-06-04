// Declare variables
let motivationMessages = [
  "You're doing amazing!",
  "Keep moving, your body thanks you for it!",
  "Sweat. Smile. Repeat.",
  "Every step counts!",
  "Dance like nobody's watching!",
  "Give it your all!",
  "Enjoy the little things!",
  "Embrace the small wins!",
  "Disregard doubt and fear",
];

// Average cals per mins
const calorieRate = 7; // calories burned per minute (average)

// Functions
function showMotivation() {
  const randomIndex = Math.floor(Math.random() * motivationMessages.length);
  const message = motivationMessages[randomIndex];
  alert(message);
}

function calculateCalories() {
  const minutes = 45;
  const caloriesBurned = minutes * calorieRate;
  let intensity = "";

  if (caloriesBurned >= 300) {
    intensity = "🔥 Intense Burn!";
  } else {
    intensity = "💃 Great Start :^)";
  }

  document.getElementById(
    "caloriesOutput"
  ).textContent = `You burned about ${caloriesBurned} calories in ${minutes} minutes. ${intensity}`;
}

// Animated step counter
function countSteps() {
  let steps = 0;
  let output = "";
  const stepsOutput = document.getElementById("stepsOutput");
  stepsOutput.innerHTML = "";

  const maxSteps = 10;
  const interval = setInterval(() => {
    steps = steps >= maxSteps ? 1 : steps + 1;
    output = `Step ${steps}!💃`;
    stepsOutput.innerHTML = output;
  }, 450);
}

function createMusicNote() {
  const note = document.createElement("div");
  note.classList.add("music-note");
  note.textContent = "♪"; // or '♫', '♬'
  note.style.color = "#00ffff"; // Change color of n
  note.style.left = Math.random() * 100 + "vw";
  note.style.top = "100vh";
  note.style.fontSize = 16 + Math.random() * 24 + "px";
  document.getElementById("music-container").appendChild(note);

  setTimeout(() => {
    note.remove();
  }, 31000);
}

setInterval(createMusicNote, 1000);

// Ensure DOM is loaded before adding event listeners
document.addEventListener("DOMContentLoaded", () => {
  document
    .getElementById("motivateBtn")
    .addEventListener("click", showMotivation);
  document
    .getElementById("calculateBtn")
    .addEventListener("click", calculateCalories);
  document
    .getElementById("countStepsBtn")
    .addEventListener("click", countSteps);
});
