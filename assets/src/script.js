$(document).ready(function(){
/*Start menu scroll*/

$("#menu").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 2000);
    });


/*End menu scroll*/


/*Start button down*/
 $('#down').click(function() {
  	
    $('html, body').animate({scrollTop: $('#portfolio').offset().top}, 2000);
    return false;
  })

 /*End button down*/



/*START ISOTOPE*/
/*var qsRegex;

var $grid = $('.portfolio__pictures').isotope({
  itemSelector: '.images-item',
  layoutMode: 'fitRows',
  filter: function() {
    return qsRegex ? $(this).text().match( qsRegex ) : true;
  }
});

$('.menu__item').on( 'click', 'button', function() {
  var filterValue = $(this).attr('data-filter');*/


/*END ISOTOPE*/



/*START TEAM SLIDER*/



$('#slide1').css("display", "block");
  
   
  $('#s1').click(function() {
 $('#slide1').css("display", "block");
 $('#slide2').css("display", "none");
 $('#slide3').css("display", "none");

 
  $('#s1').addClass( "activeButton" );
   $('#s2').removeClass("activeButton");
 $('#s3').removeClass("activeButton");

    
  });

    $('#s2').click(function() {
     $('#slide1').css("display", "none");
   $('#slide2').css("display", "block");
  $('#slide3').css("display", "none");

   $('#s2').addClass( "activeButton" );
   $('#s1').removeClass("activeButton");
 $('#s3').removeClass("activeButton");
  });


  $('#s3').click(function() {
    $('#slide1').css("display", "none");
 $('#slide2').css("display", "none");
 $('#slide3').css("display", "block");

  $('#s3').addClass( "activeButton" );
   $('#s1').removeClass("activeButton");
 $('#s2').removeClass("activeButton");

  }); 


/*END TEAM SLIDER*/

/*Start Contact us button*/
 $('#contactUs-button').click(function() {
  	
    $('html, body').animate({scrollTop: $('#contact').offset().top}, 2000);
    return false;
  })

/*End Contact us button*/


/*Start Testimonials slider*/


var elWrap = $('#test'),
    el =  elWrap.find('.slide'),
    indexImg = 1,
    indexMax = el.length;
  
  function change () {
    el.fadeOut(500);
    el.filter(':nth-child('+indexImg+')').fadeIn(500);
  } 
    
  function autoCange () { 
    indexImg++;
    if(indexImg > indexMax) {
      indexImg = 1;
    }     
    change ();
  } 
  var interval = setInterval(autoCange, 2000);

  elWrap.mouseover(function() {
    clearInterval(interval);
  });
  elWrap.mouseout(function() {
    interval = setInterval(autoCange, 2000);
  });
  
   
  $('#b1').click(function() {
    indexImg++;
    if(indexImg > indexMax) {
      indexImg = 1;
    }
    change ();
  });

    $('#b2').click(function() {
    indexImg++;
    if(indexImg > indexMax) {
      indexImg = 1;
    }
    change ();
  });
  $('#b3').click(function() {
    indexImg--;
    if(indexImg < 1) {
      indexImg = indexMax;
    }
    change ();
  }); 


/*End Testimonials Slider*/

/*Creating a map*/

 function initMap() {


        const position = {lat: 47.3479723, lng: 8.5190361};
        const directionsService = new google.maps.DirectionsService;
        const directionsDisplay = new google.maps.DirectionsRenderer;
        const map = new google.maps.Map($('#map'), {
          zoom: 7,
          center: position
        });
     
        /*Show map*/

        directionsDisplay.setMap(map);
      
        /*Put marker*/

          var marker = new google.maps.Marker({
          position: position,
          map: map,        
          });
    
      }

/*End of the map*/




});
