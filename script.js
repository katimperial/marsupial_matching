// kangaroo

const kangarooBacks = document.querySelectorAll('.kangaroo')
console.log(kangarooBacks)


for (let i = 0; i < kangarooBacks.length; i++) {
    kangarooBacks[i].addEventListener("click", () => {
        console.log('kangaroo card clicked')
        kangarooBacks[i].src='https://i.imgur.com/YKhT7kY.jpg';
    });
}
// const cards = document.querySelectorAll('img')
// let hasFlippedCard = false;
// let firstCard = null;
// let secondCard = null;

// function flipCard() {
    
//     // this.classList.add('flip');

//     if (!hasFlippedCard) {
//         hasFlippedCard = true;
//         firstCard = this;

//         console.log(hasFlippedCard, firstCard)
//     } else { hasFlippedCard = false;
//         secondCard = this;
        
//         console.log(firstCard.className, secondCard.className)

//         if (firstCard.className === secondCard.className) {
//             return
//         } else {
//             console.log('in else statement')
//             firstCard.src='https://i.imgur.com/6pzFVJD.jpeg';
//             secondCard.src='https://i.imgur.com/6pzFVJD.jpeg'
//         }
//     }
// }
// cards.forEach(card => card.addEventListener('click', flipCard))


// koala

const koalaBacks = document.querySelectorAll('.koala')
console.log(koalaBacks)

for (let i = 0; i < koalaBacks.length; i++) {
    koalaBacks[i].addEventListener("click", function() {
      console.log('koala card clicked')
      koalaBacks[i].src='https://i.imgur.com/GWRQaZY.jpg';
    });
}

// wombat

const wombatBacks = document.querySelectorAll('.wombat')
console.log(wombatBacks)

for (let i = 0; i < wombatBacks.length; i++) {
    wombatBacks[i].addEventListener("click", function() {
      console.log('wombat card clicked')
      wombatBacks[i].src='https://i.imgur.com/ix0fCQe.jpg';
    });
}

// oppossum

const opossumBacks = document.querySelectorAll('.opossum')
console.log(opossumBacks)

for (let i = 0; i < opossumBacks.length; i++) {
    opossumBacks[i].addEventListener("click", function() {
      console.log('opossum card clicked')
      opossumBacks[i].src='https://i.imgur.com/6MKMK8X.jpg';
    });
}

// tasmanian devil

const tasmanianDevilBacks = document.querySelectorAll('.tasmanianDevil')
console.log(tasmanianDevilBacks)

for (let i = 0; i < tasmanianDevilBacks.length; i++) {
    tasmanianDevilBacks[i].addEventListener("click", function() {
      console.log('tasmanian devil card clicked')
      tasmanianDevilBacks[i].src='https://i.imgur.com/eh1Mqaa.jpg';
    });
}

// bandicoot

const bandicootBacks = document.querySelectorAll('.bandicoot')
console.log(bandicootBacks)

for (let i = 0; i < bandicootBacks.length; i++) {
    bandicootBacks[i].addEventListener("click", function() {
      console.log('bandicoot card clicked')
      bandicootBacks[i].src='https://i.imgur.com/ylwAONq.jpg';
    });
}

// wallaby

const wallabyBacks = document.querySelectorAll('.wallaby')
console.log(wallabyBacks)

for (let i = 0; i < wallabyBacks.length; i++) {
    wallabyBacks[i].addEventListener("click", function() {
      console.log('wallaby card clicked')
      wallabyBacks[i].src='https://i.imgur.com/LQRf3iM.jpg';
    });
}

// possum

const possumBacks = document.querySelectorAll('.possum')
console.log(possumBacks)

for (let i = 0; i < possumBacks.length; i++) {
    possumBacks[i].addEventListener("click", function() {
      console.log('possum card clicked')
      possumBacks[i].src='https://i.imgur.com/VgBrNpw.jpg';
    });
}

// sugar glider

const sugarGliderBacks = document.querySelectorAll('.sugarGlider')
console.log(sugarGliderBacks)

for (let i = 0; i < sugarGliderBacks.length; i++) {
    sugarGliderBacks[i].addEventListener("click", function() {
      console.log('sugar glider card clicked')
      sugarGliderBacks[i].src='https://i.imgur.com/XqvuV2z.png';
    });
}

// cuscus

const cuscusBacks = document.querySelectorAll('.cuscus')
console.log(cuscusBacks)

for (let i = 0; i < cuscusBacks.length; i++) {
    cuscusBacks[i].addEventListener("click", function() {
      console.log('cuscus card clicked')
      cuscusBacks[i].src='https://i.imgur.com/GgXaIZH.png';
    });
}

// flip card function modified from https://www.youtube.com/watch?v=ZniVgo8U7ek

const cards = document.querySelectorAll('img')
let hasFlippedCard = false;
let firstCard = null;
let secondCard = null;
function flipCard() {
    
    // this.classList.add('flip');

    if (!hasFlippedCard) {
        hasFlippedCard = true;
        firstCard = this;

        console.log(hasFlippedCard, firstCard)
    } else { hasFlippedCard = false;
        secondCard = this;
        
        console.log(firstCard.className, secondCard.className)

        if (firstCard.className === secondCard.className) {
            return
        } else {
            console.log('in else statement')
            setTimeout(() => {
            firstCard.src='https://i.imgur.com/6pzFVJD.jpeg';
            secondCard.src='https://i.imgur.com/6pzFVJD.jpeg'
        }, 700);
        }
    }
}
cards.forEach(card => card.addEventListener('click', flipCard))

// randomize function found on https://stackoverflow.com/questions/7070054/javascript-shuffle-html-list-element-order

let randomCards = document.querySelector('section');
for (let i = randomCards.children.length; i >= 0; i--) {
    randomCards.appendChild(randomCards.children[Math.random() * i | 0]);
}