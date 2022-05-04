
function reveal() {
    var reveals = document.querySelectorAll("#our_goal_text,#our_goal_container_right,#feedback_main");
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("bounce");
      } else {
        reveals[i].classList.remove("bounce");
      }
    }
  }
  
  window.addEventListener("scroll", reveal);
