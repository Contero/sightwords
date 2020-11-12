"use strict;"

// init
let init = () => {
    $("start").addEventListener("click", start);
    $("good").addEventListener("click", good);
    $("review").addEventListener("click", review);
}

let wordsA = ["the", "cow", "sucks"];
    let wordsB = ["Bthe", "Bcow", "Bsucks"];
    let words = [];
    let index = 0;

let $ = (id) => {
    return document.getElementById(id);
}

let start = () => {
    words=[];
    if ($("include_A").checked == true) {
        wordsA.forEach(w => words.push(w));
    }

    if ($("include_B").checked == true) {
        wordsB.forEach(w => words.push(w));
    }
    
    for (let i = 0; i < words.length; i++) {
        let temp = words[i];
        let rand = Math.floor(Math.random() * (words.length));
        words[i] = words[rand];
        words[rand] = temp;
    }

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
        $("card").innerHTML = "GOOD JOB!!";
    }
};

let good = () => {
    words.splice(index, 1);
    nextCard();
};

let review = () => {
    index++;
    nextCard();
}

