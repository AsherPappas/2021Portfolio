var burgerBtn = $("#burger");
var menuList = $("#menu");
var contact = $(".contact").val();
var bodyContent = "";

burgerBtn.click(function(){
  burgerBtn.removeAttr("aria-expanded", "false");
  burgerBtn.attr("aria-expanded", "true");
  menuList.addClass("is-active");
});

menuList.click(function(){
  burgerBtn.removeAttr("aria-expanded", "true");
  burgerBtn.attr("aria-expanded", "false");
  menuList.removeClass("is-active");
});

  $("#button").click(function() {
    bodyContent = "From " + $(".contact").val() + " at " + $(".email").val() + " says " + $(".message").val();
    
    console.log(bodyContent);
    Email.send({
      SecureToken : "",
      To : 'asherpappas@gmail.com',
      From : "ashpap.codes@gmail.com",
      Subject : "Portfolio Contact Me",
      Body : bodyContent
  }).then(function (message) {
    $("#status").empty();
    console.log(message);
    if (message=="OK"){
      $("#status").append("<p>"+"Thank you, I will get back to you soon!"+"</p>");
    }
    else {
      $("#status").append("<p>"+"I'm sorry, something went wrong. Please submit again."+"</p>")
    }
  })
})