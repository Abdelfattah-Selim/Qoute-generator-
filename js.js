var Qoutes =[


    `“Be yourself; everyone else is already taken.” <br>― Oscar Wilde`,
    `“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”<br>― Albert Einstein`,
    `“A room without books is like a body without a soul.”
    <br>― Marcus Tullius Cicero`,
    `“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”
    <br>― Bernard M. Baruch`,
    `“You only live once, but if you do it right, once is enough.”
    <br>― Mae West
    `,`
    “Be the change that you wish to see in the world.”
    <br>― Mahatma Gandhi`
]








function newQoute(){
    var randomNum =Math.floor(Math.random()*(Qoutes.length));
    document.getElementById("qouteDisplay").style.fontSize="30px"

    document.getElementById("qouteDisplay").innerHTML=Qoutes[randomNum]
}