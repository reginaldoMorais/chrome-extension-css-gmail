// Copyright (c) 2012 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
("use strict");

$(document).ready(function() {
  $(".light").click(function() {
    light();
  });

  $(".dark").click(function() {
    dark();
  });
});

function light() {
  chrome.storage.local.set({ gmailCSSMode: "light" });
  chrome.tabs.executeScript({
    file: "/js/event.js"
  });
}

function dark() {
  chrome.storage.local.set({ gmailCSSMode: "dark" });
  chrome.tabs.executeScript({
    file: "/js/event.js"
  });
}
