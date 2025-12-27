const nukeButton = document.getElementById("nuke-btn");
const explosion = document.getElementById("explosion");
const counterText = document.getElementById("counter");

let nukeCount = localStorage.getItem("teleormanNukes");
if (nukeCount === null) {
    nukeCount = 0;
} else {
    nukeCount = parseInt(nukeCount);
}

counterText.textContent = `Teleorman nuked: ${nukeCount} times`;

nukeButton.addEventListener("click", () => {
    explosion.style.display = "block";

    nukeCount++;
    localStorage.setItem("teleormanNukes", nukeCount);

    counterText.textContent = `Teleorman nuked: ${nukeCount} times`;
});
