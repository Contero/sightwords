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
            wordData.find(o => o.id === c.id).words.forEach(w => words.push(w));
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
        $("card").innerHTML = words[index];
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
