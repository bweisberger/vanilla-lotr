console.log("Linked.");

// Dramatis Personae
const hobbits = [
  `Frodo Baggins`,
  `Samwise "Sam" Gamgee`,
  `Meriadoc "Merry" Brandybuck`,
  `Peregrin "Pippin" Took`
];

const buddies = [
  'Gandalf the Grey',
  'Legolas',
  'Gimli',
  'Strider',
  'Boromir'
];

const baddies = [
  "Sauron",
  "Saruman",
  "The Uruk-hai",
  "Orcs"
];

const lands = [
  'The-Shire',
  'Rivendell',
  'Mordor'
];


// ============
// Chapter 1
// ============

function makeMiddleEarth () {
  console.log("1: makeMiddleEarth");

  // 1. create a section tag with an id of middle-earth
const middleEarthSection = document.createElement('section');
middleEarthSection.id = "middle-earth";
  // 2. use a for loop to iterate over the lands array that does the following:
for (let i = 0; i < lands.length; i++) {
  const article = document.createElement('article');
  article.id = lands[i];
  const h1 = document.createElement('h1');
  h1.innerText = lands[i];
  article.appendChild(h1);
  middleEarthSection.appendChild(article);
}
document.body.appendChild(middleEarthSection);

  //   2a. creates an article tag (there should be one for each land when the loop is done)

  //   2b. gives each land article an `id` tag of the corresponding land name

  //   2c. includes an h1 with the name of the land inside each land article

  //   2d. appends each land to the middle-earth section

  // 3. append the section to the body of the DOM.

}




// COMMIT YOUR WORK
// The commit message should read: "Chapter 1 complete - Made Middle Earth".

// ============
// Chapter 2
// ============

function makeHobbits() {
  console.log("2: makeHobbits");

  // display an `unordered list` of hobbits in the shire
const shire = document.querySelector('#The-Shire');
console.log(shire);
const hobbitList = document.createElement('ul');
for (let i = 0; i < hobbits.length; i++) {
  const hobbit = document.createElement('li');
  hobbit.innerText = hobbits[i];
  hobbit.className = "hobbit";
  console.log(hobbit);
  hobbitList.appendChild(hobbit);
}
shire.appendChild(hobbitList);
  // give each hobbit a class of `hobbit`

  // hint: create a 'ul' outside the loop into which to append the 'li's

  // hint: get 'The-Shire' by using its id

}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 2 complete - Made the Hobbits".


// ============
// Chapter 3
// ============

function keepItSecretKeepItSafe() {
  console.log("3: keepItSecretKeepItSafe");

  // create a div with an id of `'the-ring'`
const theRing = document.createElement('div');
theRing.id = 'the-ring';
  // give the div a class of `'magic-imbued-jewelry'`
theRing.className = 'magic-imbued-jewelry';
  // add the ring as a child of `Frodo`
const firstHobbit = document.querySelector('.hobbit');
firstHobbit.appendChild(theRing);
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 3 complete - Made the ring and gave it to Frodo".


// ============
// Chapter 4
// ============

function makeBaddies() {
  console.log("4: makeBaddies");

  // display an unordered list of baddies in Mordor
const mordor = document.querySelector('#Mordor');
const baddiesList = document.createElement('ul');
for (let i = 0; i < baddies.length; i++) {
  const baddie = document.createElement('li');
  baddie.innerText = baddies[i];
  baddie.className = 'baddy';
  console.log(baddie);
  baddiesList.appendChild(baddie);
}
mordor.appendChild(baddiesList);
  // give each of the baddies a class of "baddy"

  // remember to append them to Mordor

}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 4 complete - Made the Baddies"..


// ============
// Chapter 5
// ============

function makeBuddies () {
  console.log("5: makeBuddies");

  // create an `aside` tag
const buddyGroup = document.createElement('aside');
  // put an `unordered list` of the `'buddies'` in the aside
const buddiesList = document.createElement('ul');
for (let i = 0; i < buddies.length; i++) {
  const buddy = document.createElement('li');
  buddy.innerText = buddies[i];
  buddiesList.appendChild(buddy);
}
buddyGroup.appendChild(buddiesList);
  // insert your aside as a child element of `rivendell`
const rivendell = document.querySelector('#Rivendell');
rivendell.appendChild(buddyGroup);
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 5 complete - Made the Buddies".


// ============
// Chapter 6
// ============

function leaveTheShire() {
  console.log("6: leaveTheShire");
const hobbitses = document.querySelectorAll('.hobbit');
const rivendell = document.querySelector('#Rivendell');
for (let i = 0; i < hobbitses.length; i++) {
  rivendell.appendChild(hobbitses[i]);
}
  // assemble the `hobbits` and move them to `rivendell`
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 6 complete - Left the Shire"


// ============
// Chapter 7
// ============

function beautifulStranger() {
  console.log("7: beautifulStranger");
  const rivendell = document.querySelector('#Rivendell')
  const buddyGroup = document.querySelector('aside')
  const buddiesList = buddyGroup.firstChild;
  const strider = buddiesList.lastChild.previousSibling
  strider.innerText = 'Aragorn';
  // change the `'Strider'` text to `'Aragorn'`
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 7 complete - Strider is changed to Aragorn"


// ============
// Chapter 8
// ============

function forgeTheFellowShip() {
  console.log("8: forgeTheFellowShip");
  const rivendell =  document.querySelector('#Rivendell');
  const theFellowship = document.createElement('div');
  console.log(theFellowship)
  rivendell.appendChild(theFellowship);
  console.log(rivendell);
  // create a new div called `'the-fellowship'` within `rivendell`
  const hobbitses = document.querySelectorAll('.hobbit');
  for (let i = 0; i < hobbitses.length; i++) {
    theFellowship.appendChild(hobbitses[i]);
  }
  const buddyGroup = document.querySelector('aside')
  const buddiesList = buddyGroup.querySelectorAll('li');
  console.log(buddiesList);
  for (let i = 0; i < buddiesList.length; i++) {
    theFellowship.appendChild(buddiesList[i]);
  }
  alert("All hobbits and friends have joined The Fellowship!");
  // add each `hobbit` and `buddy` one at a time to `'the-fellowship'`
  // after each character is added make an alert that they
  // have joined your party
  // NOTE: This won't change what you see in the browser.  Use your Elements tab of your Inspector tools to make sure that it worked.
}


// COMMIT YOUR WORK
// The commit message should read: "Chapter 8 complete - The Fellowship is created"

// ============
// Chapter 9
// ============

function theBalrog() {
  console.log("9: theBalrog");
   // change the `'Gandalf'` text to `'Gandalf the White'`
   // const rivendell = document.querySelector('#Rivendell');
   const hobbit = document.querySelector('.hobbit');
   friend = hobbit.nextElementSibling;

   // console.log(friend.innerText);
   // console.log(friend.innerText == 'samwise "sam" gamgee')
   while (friend.innerText != 'gandalf the grey') {
     friend = friend.nextElementSibling;
   }
  console.log(friend.innerText);
  friend.innerText = 'Gandalf the White';
  // friend.style.color = 'black'
  friend.style.background = 'white';
  friend.style.border = 'thick solid grey';
  // friend.style.borderWidth = 'thick';
  // friend.style.borderColor = 'grey';
  // friend.style.border = 'solid';
   // apply the following style to the element, make the // background 'white', add a grey border
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 9 complete - Updated Gandalf"


// ============
// Chapter 10
// ============

function hornOfGondor() {
  console.log("10: hornOfGondor");
  // pop up an alert that the horn of gondor has been blown
  alert("The Horn of Gondor has been blown!")
  // Boromir's been killed by the Uruk-hai!
  // Remove `Boromir` from the Fellowship
  let theFellowship = document.querySelector('#Rivendell div')
  console.log(theFellowship);
  console.log(theFellowship.lastChild);
    theFellowship.lastChild.remove();
  }

// COMMIT YOUR WORK
// The commit message should read: "Chapter 10 complete - horn of gandor blew and Boromir is dead"


// ============
// Chapter 11
// ============

function itsDangerousToGoAlone() {
  console.log("11: itsDangerousToGoAlone");
  // take `Frodo` and `Sam` out of the fellowship and move // them to `Mordor`
  const hobbitses = document.querySelectorAll('.hobbit');
  const mordor = document.querySelector('#Mordor');
  const frodoAndSam = []
  frodoAndSam.push(hobbitses[0],hobbitses[1])
  for (let i = 0; i < frodoAndSam.length; i++) {
    mordor.appendChild(frodoAndSam[i]);
  }
  const mountDoom = document.createElement('div');
  mountDoom.id = 'mount-doom'
  mordor.appendChild(mountDoom);
  // add a div with an id of `'mount-doom'` to `Mordor`
}


// COMMIT YOUR WORK
// The commit message should read: "Chapter 11 complete - Sam and Frodo are in Mordor and Mount Doom has been created"


// ============
// Chapter 12
// ============

function weWantsIt() {
  console.log("12: weWantsIt");
  // Create a div with an id of `'gollum'` and add it to Mordor
  const gollum = document.createElement('div');
  gollum.id = 'gollum';
  const mordor = document.querySelector('#Mordor');
  mordor.appendChild(gollum);
  // Remove `the ring` from `Frodo` and give it to `Gollum`
  const theRing = document.querySelector('#the-ring')
  gollum.appendChild(theRing);
  // Move Gollum into Mount Doom
  const mountDoom = document.querySelector('#mount-doom');
  mountDoom.appendChild(gollum);
}


// COMMIT YOUR WORK
// The commit message should read: "Chapter 12 complete - Gollum is trying to get the ring".

// ============
// Chapter 13
// ============

function thereAndBackAgain() {
  console.log("13: thereAndBackAgain");
  // remove `Gollum` and `the Ring` from the document
  const gollum = document.querySelector('#gollum');
  const theRing = document.querySelector('#the-ring');
  gollum.remove();
  theRing.remove();
  // Move all the `hobbits` back to `the shire`
  const hobbitses = document.querySelectorAll('.hobbit');
  const theShire = document.querySelector('#The-Shire');
  for (let i = 0; i < hobbitses.length; i++){
    theShire.appendChild(hobbitses[i]);
  }
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 13 complete -Gollum and the ring are gone, the baddies are done, and the hobbits are back in the shire".


// =====================================
// Don't change anything below this line
// =====================================

// =====================================
// This code is loading all of the event listeners for the buttons in your application.
// =====================================


document.getElementById('chapter-1').addEventListener('click', makeMiddleEarth);
document.getElementById('chapter-2').addEventListener('click', makeHobbits);
document.getElementById('chapter-3').addEventListener('click', keepItSecretKeepItSafe);
document.getElementById('chapter-4').addEventListener('click', makeBaddies);
document.getElementById('chapter-5').addEventListener('click', makeBuddies);
document.getElementById('chapter-6').addEventListener('click', leaveTheShire);
document.getElementById('chapter-7').addEventListener('click', beautifulStranger);
document.getElementById('chapter-8').addEventListener('click', forgeTheFellowShip);
document.getElementById('chapter-9').addEventListener('click', theBalrog);
document.getElementById('chapter-10').addEventListener('click', hornOfGondor);
document.getElementById('chapter-11').addEventListener('click', itsDangerousToGoAlone);
document.getElementById('chapter-12').addEventListener('click', weWantsIt);
document.getElementById('chapter-13').addEventListener('click', thereAndBackAgain);
document.getElementById('all-chapters').addEventListener('click', () => {
  makeMiddleEarth();
  makeHobbits();
  keepItSecretKeepItSafe();
  makeBaddies();
  makeBuddies();
  leaveTheShire();
  beautifulStranger();
  forgeTheFellowShip();
  theBalrog();
  hornOfGondor();
  itsDangerousToGoAlone();
  weWantsIt();
  thereAndBackAgain();
});
