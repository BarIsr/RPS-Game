let userScore = 0 , cpuScore = 0;
const userScore_span = document.getElementById ( "user-score" );
const cpuScore_span = document.getElementById ( "cpu-score" );
const ScoreBoard_div = document.querySelector ( ".score-board" );
const result_p = document.querySelector ( ".result>p" );
const rock_div = document.getElementById ( "r" );
const paper_div = document.getElementById ( "p" );
const scissors_div = document.getElementById ( "s" );

function GetCompChoice () {
    const Choices = [ 'r' , 'p' , 's' ];
    const randomSource = Math.floor ( Math.random () * 3 );
    return Choices[ randomSource ];

}

/**
 * @return {string}
 */
function ConvertToWord ( letter ) {
    if (letter === "r") return "Rock";
    if (letter === "s") return "Scissors";
    return "Paper";

}

function win ( userChoice , CpuChoice ) {
    userScore ++;
    userScore_span.innerHTML = userScore;
    cpuScore_span.innerHTML = cpuScore;
    result_p.innerHTML = `${ConvertToWord ( userChoice )}  beats ${ConvertToWord ( CpuChoice )}  . You win!!`;
    document.getElementById ( userChoice ).classList.add ( 'green-glow' );
    setTimeout ( function () {
        document.getElementById ( userChoice ).classList.remove ( 'green-glow' )
    } , 400 );


}

function lose ( userChoice , CpuChoice ) {
    cpuScore ++;

    userScore_span.innerHTML = userScore;
    cpuScore_span.innerHTML = cpuScore;
    result_p.innerHTML = `${ConvertToWord ( userChoice )}  beats ${ConvertToWord ( CpuChoice )}  . You lose!!`;
    document.getElementById ( userChoice ).classList.add ( 'red-glow' );
    setTimeout ( function () {
        document.getElementById ( userChoice ).classList.remove ( 'red-glow' )
    } , 400 );
}

function draw ( userChoice , CpuChoice ) {
    userScore_span.innerHTML = userScore;
    cpuScore_span.innerHTML = cpuScore;
    result_p.innerHTML = `${ConvertToWord ( userChoice )}  equal ${ConvertToWord ( CpuChoice )}  . its a draw`;
    document.getElementById ( userChoice ).classList.add ( 'grey-glow' );
    setTimeout ( function () {
        document.getElementById ( userChoice ).classList.remove ( 'grey-glow' )
    } , 400 );
}

function game ( userChoice ) {

    const CpuChoice = GetCompChoice ();
    switch (userChoice + CpuChoice) {
        case "rs":
        case "pr":
        case "sp":
            win ( userChoice , CpuChoice );
            break;
        case "rp":
        case "ps":
        case "sr":
            lose ( userChoice , CpuChoice );
            break;
        case "rr":
        case "pp":
        case "ss":
            draw ( userChoice , CpuChoice );
            break;

    }
}

function main () {


    rock_div.addEventListener ( 'click' , function () {
        game ( "r" );

    } );

    paper_div.addEventListener ( 'click' , function () {
        game ( "p" );

    } );

    scissors_div.addEventListener ( 'click' , function () {
        game ( "s" );

    } );
}

main ();

