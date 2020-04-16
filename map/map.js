import quests from '../data/data.js';
import makeListItemLink from './make-list-item-link.js'; 

const ul = document.getElementById('list');

quests.forEach((quest) => { 

    // for (let i = 0; i < quests.length; i++) // can use in place of the for each
    // const quest = quests[i];
    const li = makeListItemLink(quest); 
    
    ul.appendChild(li); 
});