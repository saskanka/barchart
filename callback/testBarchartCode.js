function drawLine(ctx, begin, end, stroke = "black", width = 1) {
  if (stroke) {
    ctx.strokeStyle = stroke;
  }

  if (width) {
    ctx.lineWidth = width;
  }

  ctx.fillRect(20, 20, 100, 100);
}

function send(callback) {
  const inputHeight = document.getElementById("height").value;
  barHeights = inputHeight.split(",");
  const heightEntry = document.getElementById("heightEntry");
  heightEntry.value = barHeights;
  console.log("*** send heightEntry", heightEntry);
  callback.call();
}
// const button = document.getElementById("btn");
// if (button) {
//   console.log("**** barHeights");
//   button.addEventListener("click", send);
// }
