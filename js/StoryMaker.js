// Assignment 1 | COMP1073 Client-Side JavaScript
/* Variables
-------------------------------------------------- */
var synth = window.speechSynthesis;

// Button selections
var purple = document.querySelector('#purple');
var cyan = document.querySelector('#cyan');
var green = document.querySelector('#green');
var orange = document.querySelector('#orange');
var pink = document.querySelector('#pink');
var speak = document.querySelector('#speak'); // Assuming there's a button with this ID
var randomStory = document.querySelector('#randomStory');
var reset = document.querySelector('#reset');
var storyOutput = document.querySelector('#storyOutput'); // Element to display the story

var randomNoun, randomVerb, randomAdj, randomNoun2, randomPlace,RandomPhrase;

/* Functions
-------------------------------------------------- */
function speakNow(string) {
    var utterThis = new SpeechSynthesisUtterance(string);
    synth.speak(utterThis);
}

/* Event Listeners
-------------------------------------------------- */
purple.onclick = function() { 
    // First set of nouns
    var nouns1 = ['Mom', 'Dad', 'The Dog', 'My Teacher', 'The Elephant', 'The Cat'];
    var randomIndex = Math.floor(Math.random() * nouns1.length);
    randomNoun = nouns1[randomIndex];   
    speakNow(randomNoun);
}

cyan.onclick = function() { 
    // Set of verbs
    var verbs = ['sat on', 'ate', 'danced with', 'saw', 'does not like', 'kissed'];
    var randomIndex = Math.floor(Math.random() * verbs.length);
    randomVerb = verbs[randomIndex];
    speakNow(randomVerb);
}

green.onclick = function() { 
    // Set of adjectives
    var adjectives = ['a funny', 'a scary', 'a goody', 'a slimy', 'a barking', 'a fat'];
    var randomIndex = Math.floor(Math.random() * adjectives.length);
    randomAdj = adjectives[randomIndex];
    speakNow(randomAdj);
}

orange.onclick = function() { 
    // Second set of nouns
    var nouns2 = ['goat', 'monkey', 'fish', 'cow', 'frog', 'bug', 'worm'];
    var randomIndex = Math.floor(Math.random() * nouns2.length);
    randomNoun2 = nouns2[randomIndex];
    speakNow(randomNoun2);
}

pink.onclick = function() { 
    // Set of places
    var places = ['on the moon', 'on the chair', 'in my spaghetti', 'in my soup', 'on the grass', 'in my shoes'];
    var randomIndex = Math.floor(Math.random() * places.length);
    randomPlace = places[randomIndex];
    speakNow(randomPlace);
}

speak.onclick = function() {
    if (randomNoun && randomVerb && randomAdj && randomNoun2 && randomPlace) {
        var randomSay = randomNoun + ' ' + randomVerb + ' ' + randomAdj + ' ' + randomNoun2 + ' ' + randomPlace;
        speakNow(randomSay);  
        // Display the generated story on the webpage
        storyOutput.textContent = randomSay; // Update the content of the storyOutput element     
    } else {
        console.error('Please select all components before generating the speech!');
    }   
}

randomStory.onclick = function() {
    //pick a random noun automatically without a prior selection
    var nouns1 = ['Mom', 'Dad', 'The Dog', 'My Teacher', 'The Elephant', 'The Cat'];
    var randomIndex = Math.floor(Math.random() * nouns1.length);
    randomNoun = nouns1[randomIndex]; 
    

    //pick a random verb automatically without a prior selection
    var verbs = ['sat on', 'ate', 'danced with', 'saw', 'does not like', 'kissed'];
    var randomIndex = Math.floor(Math.random() * verbs.length);
    randomVerb = verbs[randomIndex];
    

    //pick a random adjective automatically without a prior selection
    var adjectives = ['a funny', 'a scary', 'a goody', 'a slimy', 'a barking', 'a fat'];
    var randomIndex = Math.floor(Math.random() * adjectives.length);
    randomAdj = adjectives[randomIndex];
  

    //pick a random noun automatically without a prior selection
    var nouns2 = ['goat', 'monkey', 'fish', 'cow', 'frog', 'bug', 'worm'];
    var randomIndex = Math.floor(Math.random() * nouns2.length);
    randomNoun2 = nouns2[randomIndex];
 

    //pick a random place automatically without a prior selection
    var places = ['on the moon', 'on the chair', 'in my spaghetti', 'in my soup', 'on the grass', 'in my shoes'];
    var randomIndex = Math.floor(Math.random() * places.length);
    randomPlace = places[randomIndex];
  
    
    
    //concatenate and use speaknow to text to speeech the argument
    var randomSay = randomNoun + ' ' + randomVerb + ' ' + randomAdj + ' ' + randomNoun2 + ' ' + randomPlace;
    speakNow(randomSay);
    storyOutput.textContent = randomSay; // Update the content of the storyOutput element
}

reset.onclick = function(){
    randomNoun = '';
    randomVerb = '';
    randomAdj = '';
    randomNoun2 = '';
    randomPlace = '';
    storyOutput.textContent = ''; // Clear the displayed story
    speakNow('Your story has been reset. Please select new components.'); // Optional feedback
}








