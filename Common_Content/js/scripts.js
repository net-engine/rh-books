
var ajq = jQuery.noConflict();

var el = document.getElementsByClassName('productname')[0]
string = el.innerHTML
el.innerHTML = string.replace("Red Hat", "")


ajq(document).ready(function() {
  ajq(".docnav").clone().appendTo("#main");
  var floatingtoc = ajq("#floatingtoc");
  ajq("#floatingtoc").load('index.html .toc:eq(0)', function() {
    var links = floatingtoc.find('a');

    var docnav = ajq('.docnav');
    docnav.find('.home').remove();

    var previous = docnav.find('.previous');
    previous.after('<li><select style="display: none;" class="pageSelect"></select></li>');

    var select = ajq('.pageSelect');
    var title = ajq('title').html().match(/[A-Z0-9.]*/)[0];

    links.each(function() {
      var link = ajq(this);
      if (link.html().indexOf(title + ' ') === 0) {
        select.append('<option selected="selected" value="'+ link.attr('href') +'">'+ link.html() +'</option>')
      } else {
        select.append('<option value="'+ link.attr('href') +'">'+ link.html() +'</option>')
      }
    });
    select.fadeIn();

    select.change(function() {
      var newValue = ajq(this).attr('value');
      window.location.href = newValue;
    });
  });
});
