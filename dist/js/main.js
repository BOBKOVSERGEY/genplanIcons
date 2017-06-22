$(function () {
  $('.masterTooltip').hover(function(){
    // Hover over code
    var title = $(this).attr('data-detail');
    $(this).data('tipText', title).removeAttr('title');
    $('<div class="genplan__tooltip"></div>')
      .html(title)
      .appendTo('body')
      .fadeIn(1300);
  }, function() {
    // Hover out code
    $(this).attr('title', $(this).data('tipText'));
    $('.genplan__tooltip').remove();
  }).mousemove(function(e) {
    var mousex = e.pageX - 30; //Get X coordinates
    var mousey = e.pageY - 110; //Get Y coordinates
    $('.genplan__tooltip')
      .css({ top: mousey, left: mousex })
  });
})