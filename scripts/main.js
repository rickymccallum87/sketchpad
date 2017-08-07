/* global $ */

$(document).ready(function() {
  var grid = $('#grid');
  var squareCount = 16; 
  var gridSize = 800;
  
  drawGrid(squareCount);
  
  // Create a grid
  function drawGrid(sq) {
    for (var i = 0; i < sq; i++) {
      addSquare(true);
      for (var j = 0; j < sq - 1; j++) {
        addSquare();
      }
    }
    sizeGrid();
  }
  
  // Create a square, on new row if specified
  function addSquare(newRow) {
    if (newRow)
      grid.append('<div class="square new-row"></div>');
    else
      grid.append('<div class="square"></div>');
  }
  
  // Resize grid to original dimensions
  function sizeGrid() {
   var eachSize = gridSize / squareCount;
    $('.square').css({
      'height': eachSize,
      'width': eachSize
    });
  }
  
  // Allow user to draw over grid
  grid.on('mouseenter', '.square', function() {
    if ($(this).hasClass('activated')) {
    } else {
      var randomColor = '#'+Math.random().toString(16).substr(2,6);
      $(this).css('background-color', randomColor);
    }
    $(this).addClass('activated');
  }); 
  
  // Reset grid
  $('#reset').on('click', function() {
    squareCount = window.prompt("How many squares per side?", 64);
    grid.text('');
    drawGrid(squareCount);
  }); 
});