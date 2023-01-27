let quiz;
// Die Funktion selectCategory wird verwendet, um eine bestimmte Kategorie für ein Quiz auszuwählen.
// danach wird die Kategorie-Auswahl ausgeblendet, der Bereich für die Fragen eingeblendet,
// mit der ersten Frage und 0 Punkten begonnen.
function selectCategory(category) {
    document.getElementById("category-selector").style.display = "None";
    document.getElementById("quiz").style.display = "Block";
    quiz.currentCategory = category;
    quiz.currentQuestion = 0;
    quiz.score = 0;
    quiz.isQuizOver = false;
    displayQuestion();
}
//Diese Funktion mischt das übergebene array in dem es komplett durchlaufen wird
//und jedes Element mit einem zufällig ausgewählten Element ausgetauscht wird
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}
//Die Funktion "displayQuestion" wird verwendet, um Fragen im Quiz anzuzeigen.
//dazu werden die Antworten im shuffledArray.
//Zuletzt wird der aktuelle Punktestand im HTML angezeigt und die Erklärung zur 
//ggfs. vorherigen Frage wird ausgeblendet.
function displayQuestion() {
    document.getElementById("quiz-over").style.display = "None";
    document.getElementById("next-btn").style.display = "None";
    let question = quiz[quiz.currentCategory][quiz.currentQuestion];
    document.getElementById("question").innerHTML = question.question;
    let shuffledArray = [0, 1, 2];
    shuffle(shuffledArray);
    for (let i = 0; i < 3; i++) {
        document.getElementById("choice" + i).disabled = false;
        let choiceBtn = document.getElementById("choice" + i);
        choiceBtn.innerHTML = question.choices[shuffledArray[i]];
        choiceBtn.onclick = function () {
            checkAnswer(shuffledArray[i]);
        };
    }
    document.getElementById("score").innerHTML = "Punkte: " + quiz.score;
    document.getElementById("explanation").style.display = "none";
}
//Die Funktion prüft, ob die übergebene Antwort (answer) mit der korrekten Antwort der aktuellen Frage übereinstimmt
//Korrekt beantwortete Fragen werden gelöscht, um nicht noch einmal gestellt zu werden.
//Bei falsch beantworteten Fragen wird die nächste Frage versucht.
//Ist man über das Ende der Fragen hinaus (egal ob nächste oder gelöscht), dann wieder bei 0 anfangen.
//Antwort-Buttons überhaupt verfügbar machen, Quiz-Ende ggfs. anzeigen.
function checkAnswer(answer) {
    let category = quiz[quiz.currentCategory];
    let question = category[quiz.currentQuestion];
    if (answer === question.correctAnswer) {
        quiz.score++;
        document.getElementById("score").innerHTML = "Punkte: " + quiz.score;
        showExplanation(`Richtig! ${question.explanation}`);
        //richtig beantwortete Fragen fliegen raus!
        category.splice(quiz.currentQuestion, 1);
    }
    else {
        showExplanation(`Falsch! ${question.explanation}`);
        quiz.currentQuestion++;
    }
    let nextBtn = document.getElementById("next-btn");
    for (let i = 0; i < 3; i++) {
        let choiceBtn = document.getElementById("choice" + i);
        choiceBtn.setAttribute("disabled", "true");
    }
    if (quiz.score === 5) {
        quiz.isQuizOver = true;
        nextBtn.style.display = "none";
        showQuizOver();
    }
    else {
        nextBtn.style.display = "block";
        if (quiz.currentQuestion >= category.length) {
            quiz.currentQuestion = 0;
        }
    }
}
//Die Funktion "showQuizOver" wird aufgerufen, wenn das Quiz beendet ist, zeigt das
//im HTML an, blendet die Kategorie-Auswahl wieder ein und bereitet schonmal ein ggfs. neues Quiz vor
function showQuizOver() {
    let quizOverDiv = document.getElementById("quiz-over");
    quizOverDiv.style.display = "block";
    quizOverDiv.innerHTML = `Quiz beendet! Dein Punktestand: ${quiz.score}`;
    startNewQuiz();
    document.getElementById("category-selector").style.display = "Block";
}
//zeigt die übergebene Erklärum im HTML div "explanation" an
function showExplanation(explanation) {
    let explanationDiv = document.getElementById("explanation");
    explanationDiv.style.display = "none";
    explanationDiv.innerHTML = explanation;
    explanationDiv.style.display = "block";
}
//füllt die quiz-Variable (wieder) mit allen Fragen, mischt alle mit shuffle, füllt die mixed-category
//durch Addieren der Fragen der anderen Kategorien und dann nochmaliges shuffle
function startNewQuiz() {
    quiz = {
        html: [
            {
                question: "Welches HTML-Attribut gibt einen alternativen Text f&uuml;r ein Bild an, wenn das Bild nicht angezeigt werden kann?",
                choices: ["src", "alt", "title"],
                correctAnswer: 1,
                explanation: "Das Attribut 'alt' gibt einen alternativen Text f&uuml;r ein Bild an, falls das Bild nicht angezeigt werden kann. Es ist wichtig Barrierefreiheit und Suchmaschinenoptimierung. Quelle: <a href=\"https://www.w3schools.com/tags/tag_img.asp\">https://www.w3schools.com/tags/tag_img.asp</a>"
            },
            {
                question: "Was beinhaltet html?",
                choices: ["Tags", "Wochen", "Monate"],
                correctAnswer: 0,
                explanation: "html beinhaltet 'Tags'."
            },
            {
                question: "Wof&uuml;r steht html kurz?",
                choices: ["hold tight may lord", "hold tight may lover", "Hypertext Markup Language"],
                correctAnswer: 2,
                explanation: "html steht kurz f&uuml;r 'Hypertext Markup Language."
            },
            {
                question: "ist html f&uuml;r Websites wichtig?",
                choices: ["ja", "nein", "vielleicht"],
                correctAnswer: 0,
                explanation: "ja, html ist f&uuml;r Websites wichtig."
            },
            {
                question: "Was bringt html?",
                choices: ["es macht das Verkn&uuml;pfen von Websites m&ouml;glich und Browsern eine Interpretation und Anzeige", "nichts", "gar nichts"],
                correctAnswer: 0,
                explanation: "html macht das Verkn&uuml;pfen von Websites m&ouml;glich und Browsern eine Interpretation und Anzeige."
            }
        ],
        css: [
            {
                question: "Welche CSS-Eigenschaft wird verwendet, um die Schriftart eines Elements festzulegen?",
                choices: ["font-family", "font-style", "font-size",],
                correctAnswer: 0,
                explanation: "Die 'font-family' Eigenschaft wird verwendet, um die Schriftart eines Elements festzulegen."
            },
            {
                question: "Wof&uuml;r steht CSS kurz?",
                choices: ["cannste selber sehen", "coole sachen schaffen", "cascading style sheet"],
                correctAnswer: 2,
                explanation: "CSS steht kurz f&uuml;r 'cascading style sheet'."
            },
            {
                question: "Was kann CSS?",
                choices: ["stylen", "schminken", "rasieren"],
                correctAnswer: 0,
                explanation: "CSS kann 'stylen'."
            },
            {
                question: "wer hat CSS erfunden?",
                choices: ["Donald Trump", "Hakon Wium Lie", "Heinz Doof"],
                correctAnswer: 1,
                explanation: "'Hakon Wium Lie' hat CSS erfunden."
            },
            {
                question: "Wann kam CSS raus?",
                choices: ["1954", "1996", "2038"],
                correctAnswer: 1,
                explanation: "CSS kam '1996' raus."
            }
        ],
        typescript: [{
                question: "Welcher der folgenden ist ein g&uuml;ltiger TypeScript-Datentyp?",
                choices: ["text", "bool", "boolean"],
                correctAnswer: 2,
                explanation: "In TypeScript wird der Datentyp 'boolean' verwendet, um wahre oder falsche Werte darzustellen. Es wird in bedingten Anweisungen verwendet und kann mit dem Schl&uuml;sselwort 'boolean' deklariert werden."
            },
            {
                question: "Kann man TypeScript mit JavaScript zusammen verwenden?",
                choices: ["ja", "nein", "eventuell"],
                correctAnswer: 0,
                explanation: "'ja', denn TypeScript wird automatisch in JavaScript umgewandelt."
            },
            {
                question: "kann man mit TypeScript schreiben?",
                choices: ["ja", "nein", "vielleicht"],
                correctAnswer: 0,
                explanation: "'ja', man kann mit TypeScript schreiben."
            },
            {
                question: "wer hat TypeScript erfunden?",
                choices: ["Anders Gut", "Anders Hejlsberg", "Anders Schlecht"],
                correctAnswer: 1,
                explanation: "'Anders Hejlsberg' hat TypeScript 2010 erfunden"
            },
            {
                question: "wann wurde TypeScript ver&ouml;ffentlicht?",
                choices: ["2010", "2011", "2012"],
                correctAnswer: 2,
                explanation: "Es wurde '2012' ver&ouml;ffentlicht, zwei Jahre nach der Erfindung."
            }
        ],
        mixed: [
        // wird später per Code gefüllt, hier also nur auf leer setzen
        ],
        currentCategory: "",
        currentQuestion: 0,
        score: 0,
        isQuizOver: false,
    };
    shuffle(quiz.html);
    shuffle(quiz.css);
    shuffle(quiz.typescript);
    quiz.mixed = quiz.mixed.concat(quiz.html, quiz.css, quiz.typescript);
    shuffle(quiz.mixed);
}
window.onload = function () {
    startNewQuiz();
    document.getElementById("quiz").style.display = "None";
};
//# sourceMappingURL=quiz.js.map