$(document).ready(function () {
  $(".box").css("background-color", "red");
  let count = 0;
  $(".box").click(function () {
    count++;
    $(".count").html("You have clicked the box " + count + " times.");
  });

  $(".color-choice").on("change", function () {
    let selected = $("option:selected", this).val();
    if (selected == "red") {
      $(".box").css("background-color", "red");
    } else if (selected == "blue") {
      $(".box").css("background-color", "blue");
    } else if (selected == "green") {
      $(".box").css("background-color", "green");
    } else if (selected == "orange") {
      $(".box").css("background-color", "orange");
    }
  });
});
