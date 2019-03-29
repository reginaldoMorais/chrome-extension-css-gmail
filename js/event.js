function light() {
  $("body").removeClass("dark-mode");
  $("body").addClass("light-mode");
}

function dark() {
  $("body").removeClass("light-mode");
  $("body").addClass("dark-mode");
}

chrome.storage.local.get(["gmailCSSMode"], function(items) {
  var gmailCSSMode = items.gmailCSSMode;

  if (gmailCSSMode == undefined) {
    console.info("Modify Gmail CSS: Mode ", gmailCSSMode);
    light();
  } else {
    console.info("Modify Gmail CSS: Mode ", gmailCSSMode);
    if (gmailCSSMode == "light") {
      light();
    } else {
      dark();
    }
  }
});
