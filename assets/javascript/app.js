
     onload = function() {
        $(".introbutton").click(timer.start);
       
        console.log($("#trivia-form"));
        $(".triviaContainer").on("submit", submitData);
        $(".main").hide();
        $(".outtro").hide();
    };
     
    var intervalId
    var correct
    var wrong
    var unanswered = 10
    var timerRunning = false

    var timer = {
        
        time: 60,

        start: function(){
            if (!timerRunning){
                timerRunning = true;
                intervalId = setInterval(timer.countDown,1000);
                $(".main").show();
                $(".intro").hide();
            }
        },
        
        countDown: function() {
            timer.time--;

            $('.timer').text(timer.time);
            if (timer.time === 0) {
                timerRunning = false;
                clearInterval(intervalId);
                $(".main").hide();
                handleEnd()            
            }
        }
    }

function submitData(event) {
    event.preventDefault()
    handleEnd();

}

function handleEnd(){
    var tempData = $(".triviaContainer").serializeArray()
        var correct = 0
            for(var i=0; i < tempData.length; i++) {
                if (tempData[i].value === "true"){ 
                    correct++
                }
            }

        var wrong = tempData.length - correct;
        var answeredQ = correct + wrong;    
        var unanswered = 10 - answeredQ;

        console.log(answeredQ)
        console.log(unanswered)
        console.log(correct)
        console.log(wrong)
        $('.correct').html('You answered ' + correct + ' questions correctly' )
        $('.wrong').html('You answered ' + wrong + ' questions incorrectly')
        $('.unanswered').html('You left ' + unanswered + ' questions unanswered')
    $('.outtro').show()
}

function hideOuttro(){
    $('.main').hide();
}
$('.outtroButton').click(hideOuttro)
    