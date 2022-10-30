function drawLine(ctx, begin, end, stroke = "black", width = 1) {
  if (stroke) {
    ctx.strokeStyle = stroke;
  }

  if (width) {
    ctx.lineWidth = width;
  }

  ctx.fillRect(20, 20, 100, 100);
}
function draw(options, elementId) {
  const { width, height } = options;
  let heightEntry = document.getElementById("heightEntry").value;
  heightEntry = heightEntry.split(",");
  const highestValue = Math.max(...heightEntry);
  let index = 0;
  if (heightEntry) {
    $("#" + elementId).width(width * 2 * heightEntry.length + 100 + "px");
    $("#" + elementId).height(100 + highestValue * 50 + "px");
    $.each(heightEntry, function (key, value) {
      x1 = 50 + index * width * 2;
      x2 = x1 + width;
      index++;
      console.log("**** x2", x2);
      const y1 = 50;
      const y2 = y1;
      $("#" + elementId).rectangle(x1, y1, x2, y2, value * height, index, {
        color: "red",
      });
      $("#" + elementId).label(x1, y1, index);
    });
  }
}

function send(data, options, element) {
  const elementId = element.get(0).id;
  const inputHeight = document.getElementById("height").value;
  barHeights = inputHeight.split(",");
  const heightEntry = document.getElementById("heightEntry");
  heightEntry.value = barHeights;
  console.log("*** send heightEntry", heightEntry);
  draw(options, elementId);
}
// const button = document.getElementById("btn");
// if (button) {
//   console.log("**** barHeights");
//   button.addEventListener("click", send);
// }
