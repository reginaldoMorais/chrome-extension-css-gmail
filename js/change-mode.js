module.exports = function(yourBody) {
  if (yourBody == "dark") {
    $("body").removeClass("light-mode");
    $("body").addClass("dark-mode");
  } else {
    $("body").removeClass("dark-mode");
    $("body").addClass("light-mode");
  }
};
