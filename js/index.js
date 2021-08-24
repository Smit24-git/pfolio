$(document).ready(function() {
    const DEFAULT_OPTION = 0;
    const MAX_OPTIONS = 4;
    let subMenuVisible = false;
    let backgroundSound = new Audio('media/background.wav');
    var currentOption = DEFAULT_OPTION;
    
    $("#option_1_sub").css("display","none");
    $("#option_2_sub").css("display","none");
    $("#option_3_sub").css("display","none");
    $("#option_4_sub").css("display","none");
    $(document).keydown(function(btn) {
        var incorrectOptionSound = new Audio('media/incorrectOption.wav');
        let optionChangeSound = new Audio('media/optionchanged.wav');
        
        switch(btn.keyCode){
            case 83:
            case 40:
                currentOption = ++currentOption;
                if(currentOption>MAX_OPTIONS) {
                    currentOption = MAX_OPTIONS;
                    incorrectOptionSound.play();
                }
                else{
                    $(`#option_${currentOption-1}`).removeClass("active");
                    $(`#option_${currentOption}`).addClass("active");
                    optionChangeSound.play();
                }
                break;
            case 87:
            case 38:
                currentOption = --currentOption;
                if(currentOption<1) {
                    currentOption = 1;   
                    incorrectOptionSound.play();
                }
                else{
                    $(`#option_${currentOption+ 1}`).removeClass("active");
                    $(`#option_${currentOption}`).addClass("active");
                    optionChangeSound.play();
                }
                break;
            default:
                console.log("Operation Not Found!");  
                incorrectOptionSound.play();  
                break;
        }
        if(currentOption>DEFAULT_OPTION && 
            currentOption<=MAX_OPTIONS &&
            !subMenuVisible){
                $("#sub-menu").css("transition","opacity 1s ease-in .5s,width 2s")

                $("#sub-menu").width("80%");
                $("#sub-menu").css("opacity","1");

                subMenuVisible=true;

        }
        switch(currentOption){
            case 1:
                $("#option_1_sub").css("display","block");
                $("#option_2_sub").css("display","none");
                $("#option_3_sub").css("display","none");
                $("#option_4_sub").css("display","none");
                break;
            case 2:
                $("#option_1_sub").css("display","none");
                $("#option_2_sub").css("display","block");
                $("#option_3_sub").css("display","none");
                $("#option_4_sub").css("display","none");
                break;
            case 3:
                $("#option_1_sub").css("display","none");
                $("#option_2_sub").css("display","none");
                $("#option_3_sub").css("display","block");
                $("#option_4_sub").css("display","none");
                break;
            case 4:
                $("#option_1_sub").css("display","none");
                $("#option_2_sub").css("display","none");
                $("#option_3_sub").css("display","none");
                $("#option_4_sub").css("display","block");
                break;
            default:
                
        }
        console.log("Current Option: "+currentOption);
    });

    function PlayBackgroundSound(){
        backgroundSound.play();
    }
    function PauseBackgroundSound(){
        backgroundSound.pause();
    }
});