
    $(document).ready(function(){
        $("#move").click(function(){
            $("p").css("position","relative")
                .animate({left:'200px', backgroundColor:'#000'}, 1000);
        });

        $("#ani").click(function(){
            $(".box").css("position","relative")
                    .animate({left:'500px', height:'+=150px', width:'+=150px'})
        })

        $(".animation").click(function(){
            var div = $(".animate-div");
            div.animate({height: '300px', opacity: '0.4'}, "slow");
            div.animate({width: '300px', opacity: '0.8'}, "slow");
            div.animate({height: '100px', opacity: '0.4'}, "slow");
            div.animate({width: '100px', opacity: '0.8'}, "slow");
        });   

        $(".font-grow").click(function(){
            var grow = $(".fonte");  
            grow.animate({left: '100px'}, "slow");
            grow.animate({fontSize: '3em'}, "slow");
        });

        $(".combine").click(function(){
            $("#p1").css("color", "red").slideUp(2000).slideDown(2000);
        });
    });