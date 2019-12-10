var question = document.getElementById('q');

var answers = [
    "It is certain.", "It is decidedly so.",
    " Without a doubt.",
    " Yes - definitely.",
    "You may rely on it.",
    " As I see it, yes.",
    " Most likely.",
    "Outlook good.",
    "Yes.",
    "Signs point to yes.",
    "Reply hazy, try again.",
    "Ask again later.",
    "Better not tell you now.",
    "Cannot predict now.",
    "Concentrate and ask again.",
    "Don't count on it.",
    "My reply is no.",
    "My sources say no.",
    "Outlook not so good.",
    "Very doubtful."


]
function ask() {

    var randomize = answers[Math.floor(Math.random() * answers.length)];

document.getElementById("eight").innerHTML = "<p style='font-size:24px'>" + randomize + "</p>";
if (q.value.length == 0) {
    eight.innerHTML = "<p style='font-size:20px'>Please enter a question </p>";
}
}