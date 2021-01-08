"use strict;"

// init
let init = () => {
    $("start").addEventListener("click", start);
    $("good").addEventListener("click", good);
    $("review").addEventListener("click", review);
}

let uppercase=['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
let lowercase=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
let wordsA = ["can", "the", "is", "like", "at", "am","go","see","me","a","to","no","I"];
let wordsB = ["look", "dad", "he", "mom", "in","it","we","my","on"];
let wordsC = ["play","for","you","here","said","and","got","are","not","come"];
let wordsD = ["day","your","looking","went","down","into","she","they","will","where"];
let words = [];
let index = 0;

let $ = (id) => document.getElementById(id);


let start = () => {
    words=[];
    if ($("include_U").checked) {
        uppercase.forEach(w => words.push(w));
    }
    
    if ($("include_l").checked) {
        lowercase.forEach(w => words.push(w));
    }
    
    if ($("include_A").checked) {
        wordsA.forEach(w => words.push(w));
    }

    if ($("include_B").checked) {
        wordsB.forEach(w => words.push(w));
    }

    if ($("include_C").checked) {
        wordsC.forEach(w => words.push(w));
    }

    if ($("include_D").checked) {
        wordsD.forEach(w => words.push(w));
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
