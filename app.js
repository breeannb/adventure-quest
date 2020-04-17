// console.log(`hello from app.js`);

import makeUser from './make-user.js';

// get the form from the DOM 
const myForm = document.getElementById('user-form'); 

// event listener 
myForm.addEventListener('submit', (event) => {
    // set the event to prevent default
    event.preventDefault(); 

    const formData = new FormData(myForm); // now we have a form 

    // console.log(form.get('class'), form.get('name')); // when inputing something in the form at this point, it will console log your user input

    const user = makeUser(formData);

    //stringify and put to local storage 
    const stringyUser = JSON.stringify(user); 
    localStorage.setItem('USER', stringyUser); 

    // console.log(user); 
}); 

