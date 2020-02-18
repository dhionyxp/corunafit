jQuery(document).ready(function($){
    $('nav a').click(function(e){
        e.preventDefault();
        $('html,body').animate({scrollTop:$(this.hash).offset().top}, 800);
    });
})   
   