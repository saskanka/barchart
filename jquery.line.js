(function ($) {
  function createRectangle(x1, y1, x2, y2, height, index, options) {
    if (x2 < x1) {
      var temp = x1;
      x1 = x2;
      x2 = temp;
      temp = y1;
      y1 = y2;
      y2 = temp;
    }
    var line = document.createElement("div");

    line.className = options.class;

    var length = Math.sqrt((x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2));
    line.style.width = length + "px";
    line.style.borderBottom = options.stroke + "px " + options.style;
    line.style.borderColor = options.color;
    line.style.backgroundColor = options.color;
    line.style.position = "absolute";
    line.style.height = height + "px";

    var angle = Math.atan((y2 - y1) / (x2 - x1));
    line.style.bottom = y1 + 0.5 * length * Math.sin(angle) + "px";
    line.style.left = x1 - 0.5 * length * (1 - Math.cos(angle)) + "px";
    line.style.transform =
      line.style.MozTransform =
      line.style.WebkitTransform =
      line.style.msTransform =
      line.style.OTransform =
        "rotate(" + angle + "rad)";

    line.id = index;
    return line;
  }
  function createLabel(x1, y1, index) {
    const label = document.createElement("div");
    const newContent = document.createTextNode("Entry" + index);
    label.appendChild(newContent);
    console.log("*** ", document.getElementById(index));
    label.style.bottom = document.getElementById(index).style.bottom;
    label.style.left = document.getElementById(index).style.left;
    label.style.position = "absolute";
    return label;
  }
  $.fn.label = function (x1, y1, index) {
    return $(this).each(function () {
      $(this).append(createLabel(x1, y1, index)).promise().done();
    });
  };
  $.fn.rectangle = function (x1, y1, x2, y2, height, index, options) {
    return $(this).each(function () {
      options = $.extend({}, $.fn.rectangle.defaults, options);

      $(this)
        .append(createRectangle(x1, y1, x2, y2, height, index, options))
        .promise()
        .done();
    });
  };
  $.fn.rectangle.defaults = {
    zindex: 10000,
    color: "#000000",
    stroke: "1",
    style: "solid",
    class: "line",
  };
})(jQuery);
