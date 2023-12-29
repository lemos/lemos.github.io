/*global $:false */

$(function(){
  
  
  
  var  responsive= function(){
    
    
    if ($(window).width()<600){
      
      $('.text').each(function(){
        var section = $(this).closest('section');
        if (!section.has('.dummie').length) {
          section.prepend( '<div class="dummie">'+$(this).html()+'</div>' );
          $(this).empty();
        }
      });
      
    } else {

      $('.text').each(function(){
        var dummie = $(this).closest('section').find('.dummie');
        $(this).html(dummie.html());
        dummie.remove();
      });

    }
    
    
  };
  
  
  responsive();
  $(window).resize(responsive);


  $.featherlight.defaults.beforeOpen = function(event){
    console.log('open')
    if ($(window).width()<600)
      return false;
  }

  $('img.col-small, .col-small img, .modal').featherlight({
      targetAttr: 'src'
  });
  
  
});