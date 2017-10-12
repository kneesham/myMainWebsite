var quoteList = ['The Pessimist Sees Difficulty In Every Opportunity. The Optimist Sees Opportunity In Every Difficulty. - Winston Churchill',
'Don\’t Let Yesterday Take Up Too Much Of Today. - Will Rogers','We Generate Fears While We Sit. We Overcome Them By Action. - Dr. Henry Link',
'Creativity Is Intelligence Having Fun. - Albert Einstein', 'Do What You Can With All You Have, Wherever You Are. - Theodore Roosevelt', 'Do what you can\'t - Casey Neistat'];



function getQuote() {
    var randomNumber = Math.floor(Math.random() * (quoteList.length))
    document.getElementById("quote").innerHTML = quoteList[randomNumber]
}

setInterval(getQuote, 5000);
