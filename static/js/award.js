function copyToClipboard(element) {
    $(element).select();
    document.execCommand("copy");};
  (function($) {$('.first.circle').circleProgress({
    value: ({{top.design}}/10),
    fill: {gradient: [['#0681c4', .5], ['#4ac5f8', .5]], gradientAngle: Math.PI / 4}
  }).on('circle-animation-progress', function(event, progress, stepValue) {
    $(this).find('strong').text((stepValue.toFixed(1).substr(1)) * 10);
  });
  $('.second.circle').circleProgress({
    value: ({{top.usability}}/10),
    fill: {gradient: [['DarkOrange', .5], ['Chocolate', .5]], gradientAngle: Math.PI / 4}
  }).on('circle-animation-progress', function(event, progress, stepValue) {
    $(this).find('strong').text((stepValue.toFixed(1).substr(1)) * 10);
  });
  $('.third.circle').circleProgress({
    value: ({{top.creativity}}/10),
    fill: {gradient: [['DarkRed', .5], ['FireBrick', .5]], gradientAngle: Math.PI / 4}
  }).on('circle-animation-progress', function(event, progress, stepValue) {
    $(this).find('strong').text((stepValue.toFixed(1).substr(1)) * 10);
  });
  $('.fourth.circle').circleProgress({
    value: ({{top.content}}/10),
    fill: {gradient: [['Goldenrod', .5], ['DarkGoldenrod', .5]], gradientAngle: Math.PI / 4}
  }).on('circle-animation-progress', function(event, progress, stepValue) {
    $(this).find('strong').text((stepValue.toFixed(1).substr(1)) * 10);
  });
  $('.fifth.circle').circleProgress({
    value: ({{top.overall}}/10),
    fill: {gradient: [['Indigo', .5], ['SlateBlue', .5]], gradientAngle: Math.PI / 4}
  }).on('circle-animation-progress', function(event, progress, stepValue) {
    $(this).find('strong').text((stepValue.toFixed(1).substr(1))*10);
  });
})(jQuery);
