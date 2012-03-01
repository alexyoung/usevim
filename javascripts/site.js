function fix_ie_overflow() {
  if (!/*@cc_on!@*/0) return;

  $('div.highlight').each(function() {
    var element = $(this);
    if (element.scrollWidth > element.offsetWidth) {
      element.css({ height: '2em', overflowY: 'hidden' });
    }
  });
}

$(function() {
  var page = window.location.pathname;
  $('.subnav li a').first().addClass('active');
  $('.subnav li a').each(function() {
    var element = $(this);
    if (element.attr('href') === page) {
      $('.subnav li').removeClass('active');
      element.parent('li').addClass('active');
    }
  });

  fix_ie_overflow();

  $('input[name="q"]').focus(function() {
    var element = $(this);
    if (element.val() === 'Search')
      element.val('');
  });

  $('input[name="q"]').blur(function() {
    var element = $(this);
    if (element.val().length === 0)
      element.val('Search');
  });

  $('.showPrevious').click(function(e) {
    $(this).parent().next('div.previous').toggle();
    e.preventDefault();
  });

  $('.tag-list a.tag').live('click', function() {
    $(this).parents('h2').next('.posts').toggle();
  });

  if (window.location.hash) {
    $(window.location.hash).next('.posts').show();
  }
});
