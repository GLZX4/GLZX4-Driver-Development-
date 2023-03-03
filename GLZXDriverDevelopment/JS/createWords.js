//code below adapted from: https://stackoverflow.com/questions/5557648/making-a-repeating-text-background-on-a-website
function wordBackground() {
  var text = '';

  for(var i=0; i<300; i++) {
    text += 'GL|ZX ';
  }

  return text;
}

$(document).ready(function() {
  var myDiv = $('#Slogan');
  myDiv.html(wordBackground());
});
