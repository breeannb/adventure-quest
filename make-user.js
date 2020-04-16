
export default function makeUser(_formData) { 
    // write a function that takes formData and returns plan js user object 
    const name = _formData.get('name');
    const userClass = _formData.get('class');

    const userObject = { // these are objects
        name: name, 
        class: userClass, 
        completed: {}, 
        HP: 50, 
        gold: 0, 
    };
    // console.log(userObject);
    return userObject;
}
