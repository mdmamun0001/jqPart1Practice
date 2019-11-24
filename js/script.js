
      $(document).ready(function(){
        alert("hi how are you");
        $('.btn1').click(function(){
          $('.data').show('slow');
        });
         $('.btn2').click(function(){
          $('.data').hide(2000).slideUp(2000).slideDown(2000).css("background-color", "yellow");;
        });
         $('.btn3').click(function(){
          $('.data').toggle('fast');
        });
         $('.btn4').click(function(){
          $('.data').fadeOut();
         });
         $('.btn5').click(function(){
          $('.data').fadeIn(3000);
         });
         $('.btn6').click(function(){
          $('.data').fadeTo();
         });
         $('.btn7').click(function(){
          $('.data').fadeToggle(2000);
         });


          $('.lists li:first').click(function(){
          $('.lists  li:first').addClass('first');
        });
         $('.lists li:last').click(function(){
          $('.lists li:odd').addClass('last');
        });
         $('.lists li:odd').click(function(){
          $('.lists li:odd').addClass('odd');
         });
         $('.listsy li:even').click(function(){
          $('.lists li:even').addClass('even');
         });
         $( "#draggable" ).draggable();

        $( "#sortable" ).sortable({
      placeholder: "ui-state-highlight"
    });

    $( "#resizable" ).resizable();
    $( "#selectable" ).selectable();
$( "input" ).checkboxradio();
   
     $('.up').click(function(){
      $('.slider').slideUp("slow");
   });
      $('.down').click(function(){
      $('.slider').slideDown("slow");
   });
      $('.toggle').click(function(){
      $('.slider').slideToggle(10000,function(){
        alert("yes done");
      });
   });
      $("#stop").click(function(){
  $(".slider").stop();
});
      $(".p1").mouseenter(function(){
  alert("You entered p1!");
});
      $(".p1").mouseleave(function(){
  alert("Bye! You now leave p1!");
});
      $(".ani").click(function(){
    var div = $(".zn");
    div.animate({height: '300px', opacity: '0.4'}, "slow");
    div.animate({width: '300px', opacity: '0.8'}, "slow");
    div.animate({height: '100px', opacity: '0.4'}, "slow");
    div.animate({width: '100px', opacity: '0.8'}, "slow");
  });
$("#btn11").click(function(){
    alert("Text: " + $("#test").text());
  });
  $("#btn21").click(function(){
    alert("HTML: " + $("#test").html());
  });
 $(".remove").click(function(){
    $("#div1").remove();
  });

  var circle = $( "#circle" );
 
    $( "#radius" ).selectmenu({
      change: function( event, data ) {
        circle.css({
          width: data.item.value,
          height: data.item.value
        });
      }
     });
 
    $( "#color" ).selectmenu({
       change: function( event, data ) {
         circle.css( "background", data.item.value );
       }
     });
    $( "#progressbar" ).progressbar({
      value: false
    });
    $( "button" ).on( "click", function( event ) {
      var target = $( event.target ),
        progressbar = $( "#progressbar" ),
        progressbarValue = progressbar.find( ".ui-progressbar-value" );
 
      if ( target.is( "#numButton" ) ) {
        progressbar.progressbar( "option", {
          value: Math.floor( Math.random() * 100 )
        });
      } else if ( target.is( "#colorButton" ) ) {
        progressbarValue.css({
          "background": '#' + Math.floor( Math.random() * 16777215 ).toString( 16 )
        });
      } else if ( target.is( "#falseButton" ) ) {
        progressbar.progressbar( "option", "value", false );
      }
    });
$( "#menu" ).menu();
// $( "#datepicker" ).datepicker();


     } ); 
    