var quoteList = ['The Pessimist Sees Difficulty In Every Opportunity. The Optimist Sees Opportunity In Every Difficulty.<br />- Winston Churchill',
'Don\’t Let Yesterday Take Up Too Much Of Today. <br />- Will Rogers','We Generate Fears While We Sit. We Overcome Them By Action. <br />- Dr. Henry Link',
'Creativity Is Intelligence Having Fun. <br />-- Albert Einstein', 'Do What You Can With All You Have, Wherever You Are. <br />- Theodore Roosevelt', 'Do what you can\'t <br />- Casey Neistat'];



function getQuote() {
    var randomNumber = Math.floor(Math.random() * (quoteList.length))
    document.getElementById("quote").innerHTML = quoteList[randomNumber]

}

setInterval(getQuote, 4000)
