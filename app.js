// console.log(`hello from app.js`);


// get the form from the DOM 
const myForm = document.getElementById('user-form'); 



// event listener 
myForm.addEventListener('submit', (event) => {
    // set the event to prevent default
    event.preventDefault(); 

    const form = new FormData(myForm); // now we have a form 

    // console.log(form.get('class'), form.get('name')); // when inputing something in the form at this point, it will console log your user input

}); 