(function() {
    function buildQuiz() {
        const output = [];
        //loops through questions
        questions.forEach((currentQuestion, questionNumber) => {
            const answers = [];
            //adds answer choices to answers array
            for (letter in currentQuestion.answers) {
                answers.push(
                    `<label>
                <input type="radio" name="question${questionNumber}" value="${letter}">
                ${letter} :
                ${currentQuestion.answers[letter]}
              </label>`
                );
            }


            //adds question and answers to output
            output.push(
                `<div class="quiz_slide">
                <div class="d-flex justify-content-center align-items-center mb-3 pt-3"><div class="text-center px-5 rounded bg-light"><div class="question"> ${currentQuestion.question} </div> </div></div>
                <div class="d-flex justify-content-center align-items-center"><div class="answers"> ${answers.join("")} </div></div>
                </div>`
            );
        });
        //output as HTML
        quizContainer.innerHTML = output.join('');
    }

    function showResults() {
        const answerContainers = quizContainer.querySelectorAll('.answers');
        const correctAnswerContainers = quizContainer.querySelectorAll('.correctAnswer');
        let numCorrect = 0;
        questions.forEach((currentQuestion, questionNumber) => {
            const answerContainer = answerContainers[questionNumber];
            const selector = `input[name=question${questionNumber}]:checked`;
            const userAnswer = (answerContainer.querySelector(selector) || {}).value;
            if (userAnswer === currentQuestion.correctAnswer) {
                numCorrect++;
                answerContainers[questionNumber].style.color = 'lightgreen';
            } else {
                answerContainers[questionNumber].style.color = 'red';
            }
        });
        resultsContainer.innerHTML = `${numCorrect} out of ${questions.length} `;
    }

    function showSlide(n) {
        slides[currentSlide].classList.remove('active-slide');
        slides[n].classList.add('active-slide');
        currentSlide = n;
        if (currentSlide === 0) {
            previousButton.style.display = 'none';
        } else {
            previousButton.style.display = 'inline-block';
        }
        if (currentSlide === slides.length - 1) {
            nextButton.style.display = 'none';
            submitButton.style.display = 'inline-block';
        } else {
            nextButton.style.display = 'inline-block';
            submitButton.style.display = 'none';
        }
    }

    function showNextSlide() {
        showSlide(currentSlide + 1);
    }

    function showPreviousSlide() {
        showSlide(currentSlide - 1);
    }

    const quizContainer = document.getElementById('quiz');
    const resultsContainer = document.getElementById('results');
    const submitButton = document.getElementById('submit');
    const questions = [{
            question: "Simplify the expression below. $$(6÷2(1+2)$$",
            answers: {
                a: "\\(1\\)",
                b: "\\(\\dfrac{3}{2}\\)",
                c: "\\(6\\)",
                d: "\\(9\\)"
            },
            correctAnswer: "d"
        },

        {
            question: "Simplify the expression below. $$(25-4)^2 ÷7×4 ÷2-3×6$$",
            answers: {
                a: "\\(-12\\)",
                b: "\\(108\\)",
                c: "\\(117\\)",
                d: "\\(738\\)"
            },
            correctAnswer: "d"
        },
        {
            question: "When \\(x=-2\\), what is the value of the expression given below? $$(x-3)^2 -(3-x)+7(x+4)$$",
            answers: {
                a: "\\(-26\\)",
                b: "\\(-16\\)",
                c: "\\(34\\)",
                d: "\\(45\\)"
            },
            correctAnswer: "c"
        },
        {
            question: "Simplify the following expression: \\(\\dfrac{6(x-2)}{3}-\\dfrac{21(x-3)}{7}\\)",
            answers: {
                a: "\\(x+5\\)",
                b: "\\(-x-5\\)",
                c: "\\(-x+5\\)",
                d: "\\(x-5\\)"
            },
            correctAnswer: "c"

        },
        {
            question: "If \\(2a+b+2c-d=18\\) and \\(a+c=3\\), what is the value of \\(b-d?\\)",
            answers: {
                a: "\\(6\\)",
                b: "\\(12\\)",
                c: "\\(15\\)",
                d: "\\(21\\)"
            },
            correctAnswer: "b"
        },
        {
            question: "If \\(7w+4=14b+32\\), what is the value of \\(3w-6b?\\)",
            answers: {
                a: "\\(4\\)",
                b: "\\(8\\)",
                c: "\\(12\\)",
                d: "\\(21\\)"
            },
            correctAnswer: "c"
        },
        {
            question: "If \\(3a+6q-7=92\\), what is the value of \\(2a+4q?\\)",
            answers: {
                a: "\\(33\\)",
                b: "\\(\\dfrac{85}{3}\\)",
                c: "\\(66\\)",
                d: "\\(96\\)"
            },
            correctAnswer: "c"
        },
        {
            question: "If \\(\\dfrac{a}{2} + \\dfrac{b}{5} = \\dfrac{c}{20}\\), then what is the value of \\(5a+2b\\) in terms of \\(c?\\)",
            answers: {
                a: "\\(\\dfrac{c}{2}\\)",
                b: "\\(c\\)",
                c: "\\(2c\\)",
                d: "cannot be determined from the information given"
            },
            correctAnswer: "a"
        },
        {
            question: "Simplify the following expression: $$\\dfrac{x-4}{3}-\\dfrac{x-3}{2}$$",
            answers: {
                a: "\\(\\dfrac{1-x}{6}\\)",
                b: "\\(\\dfrac{x-1}{6}\\)",
                c: "\\(\\dfrac{x-17}{6}\\)",
                d: "\\(\\dfrac{17-x}{6}\\)"
            },
            correctAnswer: "a"
        },
        {
            question: "Solve for \\(x\\) in the expression below: $$xz + 2xz^2 -7=cz$$",
            answers: {
                a: "\\(x=\\dfrac{cz+7}{z}\\)",
                b: "\\(x=\\dfrac{cz+7}{z+2z^2}\\)",
                c: "\\(\\dfrac{cz+7}{z^3}\\)",
                d: "\\(\\sqrt{\\dfrac{cz+7}{2z^3}}\\)"
            },
            correctAnswer: "b"
        },
        {
            question: "Solve for \\(p\\) in the expression below: $$r=\\dfrac{cp}{y-p}$$",
            answers: {
                a: "\\(\\dfrac{c}{y}\\)",
                b: "\\(\\dfrac{y}{c}\\)",
                c: "\\(\\dfrac{ry}{c-r}\\)",
                d: "\\(\\dfrac{ry}{c+r}\\)"
            },
            correctAnswer: "d"
        },
        {
            question: "Solve for \\(x\\) in the expression below: $$7-3(4-3x)=(6-2)(6-x)+12$$",
            answers: {
                a: "\\(-\\dfrac{41}{5}\\)",
                b: "\\(-\\dfrac{5}{2}\\)",
                c: "\\(\\dfrac{31}{13}\\)",
                d: "\\(\\dfrac{41}{13}\\)"
            },
            correctAnswer: "d"
        },
    ];
    buildQuiz();
    const previousButton = document.getElementById("quiz_prev");
    const nextButton = document.getElementById("quiz_next");
    const slides = document.querySelectorAll(".quiz_slide");
    let currentSlide = 0;
    showSlide(currentSlide);
    submitButton.addEventListener('click', showResults);
    previousButton.addEventListener("click", showPreviousSlide);
    nextButton.addEventListener("click", showNextSlide);
})();