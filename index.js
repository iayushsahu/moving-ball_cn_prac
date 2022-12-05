var movingBall = document.getElementById("moving_ball");
// console.log(movingBall);

var x = x ? x : 0;
var y = y ? y : 0;
window.addEventListener("keydown", function (event) {
  const key = event.key;
    if (key == "w" || key == "W") {
      y -= 5;
      // console.log("w");
    } else if (key == "s" || key == "S") {
      y += 5;
      // console.log("d");
    } else if (key == "d" || key == "D") {
      x += 5;
      // console.log("s");
    } else if (key == "a" || key == "A") {
      x -= 5;
      // console.log("a");
    }
  document.getElementById(
    "moving_ball"
  ).style.transform = `translate(${x}px, ${y}px)`;
});
