
    $(document).ready(function(){

        // using hide and show function 

        $("#hide").click(function(){
            $(".wrap-all-nav-left").hide(2000);
        });

        $("#show").click(function(){
            $(".wrap-all-nav-left").show(3000);
        });

        $("#toggle").click(function(){
            $(".wrap-all-nav-left").toggle();
        });

        // using effect 

        $("#slide-down").click(function(){
            $("#panel").slideDown("slow");
        });

        $("#slide-up").click(function(){
            $("#panel").slideUp("slow");
        });

        $("#slide-toggle").click(function(){
            $("#panel").slideToggle("slow");
        });

        // this here is for Animation 

        $("#animateCircle").click(function(){
            $("#circle").animate({ left: "150px", opacity: 0.5 }, 1000);
        });

        $("#animateSquare").click(function(){
            $("#square").animate({ top: "100px", width: "150px" }, 1000);
        });

        $("#animateDiamond").click(function(){
            $("#diamond").animate({ height: "200px", opacity: 0.7 }, 1000);
        });

        $("#animateAll").click(function(){
            $(".animation-shapes .shape").animate({ left: "50px", top: "50px", opacity: 1 }, 1000);
        });

        $("#resetBtn").click(function(){
            $("#circle").animate({ left: "-7",top:"0", opacity: 1, width: "100px", height: "100px" }, 1000);
            $("#square").animate({ top: "0", opacity: 1, width: "100px", height: "100px" }, 1000);
            $("#diamond").animate({ top: "0", opacity: 1, width: "100px", height: "100px" }, 1000);
        });

        // for stopping animation stop effect 
        $("#animateCircle").click(function(){
            $("#circle").stop().animate({ left: "150px", opacity: 0.5 }, 1000);
        });

        $("#animateSquare").click(function(){
            $("#square").stop().animate({ top: "100px", width: "150px" }, 1000);
        });

        $("#animateDiamond").click(function(){
            $("#diamond").stop().animate({ height: "200px", opacity: 0.7 }, 1000);
        });

        $("#animateAll").click(function(){
            $(".animation-shapes .shape").stop().animate({ left: "50px", top: "50px", opacity: 1 }, 1000);
        });

        $("#stopAll").click(function(){
            $(".animation-shapes .shape").stop(true, false); 
        });

        // this here is for fade 

        $("#fadeInBtn").click(function(){
            $("#box").fadeIn(1000);
        });

        $("#fadeOutBtn").click(function(){
            $("#box").fadeOut(1000);
        });

        $("#fadeToggleBtn").click(function(){
            $("#box").fadeToggle(1000);
        });

        $("#fadeToBtn").click(function(){
            $("#box").fadeTo(1000, 0.5);
        });


          // Form validation
    
        $("#myForm").on("submit", function(event){
            $(".error").text("");
            $("input").removeClass("error-border");

            const name = $("#name").val().trim();
            const email = $("#email").val().trim();
            let hasError = false;

            if (name === "") {
                $(".name-error").text("Name is required!");
                $("#name").addClass("error-border");
                hasError = true;
            }

            if (email === "") {
                $(".email-error").text("Email is required!");
                $("#email").addClass("error-border");
                hasError = true;
            }

            if (hasError) {
                event.preventDefault();
            }
        });

        // image hover change effect 

        const img = document.getElementById("hoverImage");

        img.addEventListener("mouseenter", () => {
            img.style.opacity = "0";
            setTimeout(() => { img.src = "Rectangle 12-min.png"; img.style.opacity = "1"; }, 300);
        });

        img.addEventListener("mouseleave", () => {
            img.style.opacity = "0";
            setTimeout(() => { img.src = "Rectangle 11-min.png"; img.style.opacity = "1"; }, 300);
        });

    });

