import quests from '../data/data.js'; 
import findById from '../utils.js';


const params = new URLSearchParams(window.location.search);
// assign a variable (params or myThing) = this pulls from the url website search

const someId = params.get('id'); 
// like form data, a little like local storage 
// the id is something that you feed the key from the url 
// const someID makes it a variable to be stored 

const quest = findById(quests, someId); 

// get the quest by finding the id 
//  pass through quests and id from above thta you defined 

document.querySelector('body').append(JSON.stringify(quest)); 