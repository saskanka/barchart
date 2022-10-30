function drawLine(ctx, begin, end, stroke = "black", width = 1) {
  if (stroke) {
    ctx.strokeStyle = stroke;
  }

  if (width) {
    ctx.lineWidth = width;
  }

  ctx.fillRect(20, 20, 100, 100);
}

const draw = () => {
  const canvas = document.querySelector("#canvas");
  if (canvas.getContext) {
    const ctx = canvas.getContext("2d");
    drawLine(ctx, [100, 100], [100, 200], "green", 5);
  }
};
function send() {
  const inputHeight = document.getElementById("height").value;
  const heightArray = inputHeight.split(",");
  console.log("*** send", heightArray);
  draw();
}

document.getElementById("btn").addEventListener("click", send);
