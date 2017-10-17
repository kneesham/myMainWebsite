var quoteList = ['The Pessimist Sees Difficulty In Every Opportunity. The Optimist Sees Opportunity In Every Difficulty. <p><br/></p>- Winston Churchill',
'Don\’t Let Yesterday Take Up Too Much Of Today. <p><br/></p>- Will Rogers','We Generate Fears While We Sit. We Overcome Them By Action.  <p><br/></p>- Dr. Henry Link',
'Creativity Is Intelligence Having Fun. <p><br/></p>- Albert Einstein',
'Do What You Can With All You Have, Wherever You Are.  <p><br/></p>- Theodore Roosevelt',
'Do what you can\'t  <p><br/></p>- Casey Neistat',
'Whatever the mind of man can conceive and believe, it can achieve. <p><br/></p>–Napoleon Hill',
'The most difficult thing is the decision to act, the rest is merely tenacity. <p><br/></p>–Amelia Earhart',
'You can never cross the ocean until you have the courage to lose sight of the shore. <p><br/></p>–Christopher Columbus',
'Whether you think you can or you think you can’t, you’re right. <p><br/></p>–Henry Ford',
'People often say that motivation doesn’t last. Well, neither does bathing.  That’s why we recommend it daily. <p><br/></p>–Zig Ziglar'
];



function getQuote() {
    var randomNumber = Math.floor(Math.random() * (quoteList.length))
    document.getElementById("quote").innerHTML = quoteList[randomNumber]

}

setInterval(getQuote, 3500)
