// const stories = [
//   "Once upon a time, a cat learned to code in JavaScript!",
//   "In a small village, a robot baked the best cookies ever.",
//   "A dragon decided to become a web developer instead of guarding treasure.",
//   "The wizard’s spell accidentally created a website instead of a potion.",
//   "One day, a student coded all night and their laptop turned into a spaceship!"
// ];

// const button=getElementById("button")

// function  Generate()  {
//     const stories = [
//   "Once upon a time, a cat learned to code in JavaScript!",
//   "In a small village, a robot baked the best cookies ever.",
//   "A dragon decided to become a web developer instead of guarding treasure.",
//   "The wizard’s spell accidentally created a website instead of a potion.",
//   "One day, a student coded all night and their laptop turned into a spaceship!"
// ];


//     const story= document.getElementById("story");
//     const randomIndex= Math.floor(Math.random()* stories.length);
//     story.textContent=stories[randomIndex]
// };

async function generateStory() {
  const prompt = document.getElementById("storyInput").value;

  const response = await fetch("/api/generate-story", {

    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ prompt })
  });

  const data = await response.json();
  document.getElementById("storyOutput").textContent = data.story;
}
