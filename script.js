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
      bandicootBacks[i].src='https://i.imgur.com/izksnTh.png';
    });
}

// wallaby

const wallabyBacks = document.querySelectorAll('.wallaby')
console.log(wallabyBacks)

for (let i = 0; i < wallabyBacks.length; i++) {
    wallabyBacks[i].addEventListener("click", function() {
      console.log('wallaby card clicked')
      wallabyBacks[i].src='https://i.imgur.com/NR5Swjr.png';
    });
}

// possum

const possumBacks = document.querySelectorAll('.possum')
console.log(possumBacks)

for (let i = 0; i < possumBacks.length; i++) {
    possumBacks[i].addEventListener("click", function() {
      console.log('possum card clicked')
      possumBacks[i].src='https://i.imgur.com/BaBa7Ds.png';
    });
}
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
            firstCard.src='https://i.imgur.com/6pzFVJD.jpeg';
            secondCard.src='https://i.imgur.com/6pzFVJD.jpeg'
        }
    }
}
cards.forEach(card => card.addEventListener('click', flipCard))