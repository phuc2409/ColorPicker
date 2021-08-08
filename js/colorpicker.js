$(document).ready(function () {
  function hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return (
      "rgb(" +
      parseInt(result[1], 16) +
      ", " +
      parseInt(result[2], 16) +
      ", " +
      parseInt(result[3], 16) +
      ")"
    );
  }

  $("input#color-picker").change(function () {
    // alert($("input#color-picker").val().toUpperCase());
    var hex = $("input#color-picker").val().toUpperCase();
    $("span#hex").html(hex);
    $("span#rgb").html(hexToRgb(hex));
  });
});
