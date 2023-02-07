window.addEventListener('DOMContentLoaded', () => {
  const menu = document.querySelector('.menu'),
  menuItem = document.querySelectorAll('.menu_item'),
  hamburger = document.querySelector('.hamburger');

  hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('hamburger_active');
      menu.classList.toggle('menu_active');
  });

  menuItem.forEach(item => {
      item.addEventListener('click', () => {
          hamburger.classList.toggle('hamburger_active');
          menu.classList.toggle('menu_active');
      })
  })
})


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