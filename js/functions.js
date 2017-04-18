$(function() {

  $(document).on('scroll', onScroll);

  var $window = $(window),
      $navbar = $('.navbar');

  $(window)
    .resize(resize)
    .trigger('resize');

  // sidebar nav
  $(window).scroll(function() {
    if ($(window).scrollTop() > 355) {
      $('.section-sidebar').addClass('sidebar-fixed');
    } else {
      $('.section-sidebar').removeClass('sidebar-fixed');
    }
  });

  $(window).ready(function() {
    // adds ID to h2 element based on content
    $('h2').each(function() {
      $(this).attr({
        // converts ID to all lower case and replaces spaces with dashes to maintain standards
        id: ($(this).text().toLowerCase().replace(/\s+/g, '-'))
      });
    })

    // add the content of the h3 to the a and the collapse div below it so that the collapse javascript works based on typed content
    $('h3').each(function() {
      var content = $(this).text()
        .toLowerCase()
        .replace(/\s+/g, '-')
        // this is here to get rid of question marks which dont work with IDs
        .slice(1, -2);
      $(this).children('a').attr({
        href: ('#' + content)
      })
      $(this).next('.collapse').attr({
        id: (content)
      })
    });

    // adds a line under the h2 headings
    $('<hr>').insertAfter('h2');

    // adds correct href to corresponding ID
    $('.section-sidebar .nav a').each(function() {
      $(this).attr({
        href: ('#' + $(this).text().toLowerCase().replace(/\s+/g, '-'))
      });
    })
  });

  // keeps the nav for the page on the right side when scrolling

  function resize() {
    if ($window.width() <= 768) {
      return $navbar.addClass('navbar-fixed-top');
    }
    $navbar.removeClass('navbar-fixed-top');
  }


  // Keeps nav fixed
  function onScroll(event) {
    var scrollPosition = $(document).scrollTop();
    $('').each(function() {
      var currHeader = $(this);
      //var refElement;
    })
  }

  // Toggles the '+' or '-' symbols
  function toggleIcon(e) {
    $(e.target)
      .prev('h3')
      .find('a')
      .toggleClass('minus');
    }
  $('.collapse').on('hidden.bs.collapse', toggleIcon);
  $('.collapse').on('shown.bs.collapse', toggleIcon);
});
