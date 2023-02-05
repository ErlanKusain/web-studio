$(document).ready(function(){ 

    function valideForms(form){
      $(form).validate({
        rules: {
          email: {
            required:true,
            email:true,
          }
        },
        messages: {
          email: {
            required: "Нам нужен ваш адрес для того чтобы связаться с вами",
            email: "Ваш адрес не соответствует правильному формату"
          }
        }
      });
    };
  
    valideForms('#about-form');

    $('form').submit(function(e) {
        e.preventDefault();
    
        if(!$(this).valid()) {
          return;
        };
    
        $.ajax({
          type: "POST",
          url: "mailer/smart.php",
          data: $(this).serialize()
        }).done(function() {
          $(this).find("input").val("");
          // $('#consultation, #order').fadeOut();
          // $('.overlay, #thanks').fadeIn('slow');
    
          $('form').trigger('reset');
        });
        return false;
      });
});