"use strict;"

let wordData = [{
    tag: "Uppercase Letters",
    id: "uppercase",
    words: ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
},{
    tag: "Lowercase Letters",
    id: "lowercase",
    words: ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
},{
    tag: "Group A Words",
    id: "groupA",
    words: ["can", "the", "is", "like", "at", "am","go","see","me","a","to","no","I"]
},{
    tag: "Group B Words",
    id: "groupB",
    words: ["look", "dad", "he", "mom", "in","it","we","my","on","up"]
},{
    tag:  "Group C Words",
    id: "groupC",
    words: ["play","for","you","here","said","and","got","are","not","come"]
},{
    tag: "Group D Words",
    id: "groupD",
    words: ["day","your","looking","went","down","into","she","they","will","where"]
},{
    tag: "Red Card Words",
    id: "red",
    color: "Red",
    words: ["the", "and", "of", "a", "to", "is", "in", "you"]
},{
    tag: "Orange Card Words",
    id: "orange",
    color: "Coral",
    words: ["that", "it", "he","for", "was", "his", "are", "as", "with", "on", "they", "at", "had", "this", "have", "I"]
},{
    tag: "Yellow Card Words",
    id: "yellow",
    color: "Yellow",
    words: ["from", "or", "by", "one", "be", "not", "all", "what", "but", "were", "when", "we", "there", "can", "an", "your", "which", "their", "if", "said", "about", "will",
        "them", "do", "out", "up", "how", "each", "then", "she", "many", "some", "so", "these", "would", "other", "into", "has", "more", "her", "two", "like", "him", "see", 
        "time", "could", "no", "make", "than", "first", "been", "people", "use", "down", "now", "my", "made", "did", "over", "its", "only", "way", "little", "who", "may", "water",
        "long", "find", "very", "after", "words", "called", "just", "where", "most", "know", "me", "went", "becasue", "day"]
},{
    tag: "Green Card Words",
    id: "green",
    color: "YellowGreen",
    words: ["go", "get", "got", "came", "back", "saw", "home", "house", "around", "think", "mother", "our", "don't", "school", "am", "well", "put", "man", "didn't", "us", "thing",
            "too", "through", "much", "good", "new", "write", "look", "also", "any", "same", "right"]
}

];

let words = [];
let index = 0;

let $ = (id) => document.getElementById(id);
let $$ = (clas) => document.getElementsByClassName(clas);


let start = () => {
    words=[];
    
    for (let c of $$('check'))
    {
        if($(c.id).checked)
        {
            let obj = wordData.find(o => o.id === c.id);
            
             obj.words.forEach(w => words.push({word: w, color: obj.color}));
        }
    }
    
    for (let i = 0; i < words.length; i++) {
        let temp = words[i];
        let rand = Math.floor(Math.random() * (words.length));
        words[i] = words[rand];
        words[rand] = temp;
    }

    $("game").style.display="block";
    $("config").style.display="none";
    index = 0;
    nextCard();
};

let nextCard = () => {
    if (words.length > 0) {
        if (index >= words.length ) {
            index = 0;
        }
        if (words[index].color) {
            $("card").style.backgroundColor = words[index].color;

        } else {
            $("card").style.backgroundColor = "#FFF";
        }
        $("card").innerHTML = words[index].word;
    } else {
        $("game").style.display="none";
        $("config").style.display="block";
    }
};

let good = () => {
    words.splice(index, 1);
    nextCard();
};

let review = () => {
    index++;
    nextCard();
};

window.onload = () => {
    let html = "";
    for (let o of wordData) {
        html+= "<div><input type='checkbox' id=" + o.id + " class='check' /><label>Include " + o.tag + "</label>";
    }

    $("checks").innerHTML = html;

    $("start").addEventListener("click", start);
    $("good").addEventListener("click", good);
    $("review").addEventListener("click", review);
};
