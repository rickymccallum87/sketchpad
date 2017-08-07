/* global $ */
$(document).ready(function() {
  var grid = $('.grid');
  var row = 1;
  for (var i = 0; i < 16; i++) {
    grid.append('<div class="square new-row"></div>');
    for (var j = 0; j < 15; j++) {
      grid.append('<div class="square"></div>');
    }
  }
});