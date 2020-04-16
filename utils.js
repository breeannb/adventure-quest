// insert the findBy id function 

export default function findByID(arrayOfThings, id){

    // loop the array
    for (let i = 0; i < arrayOfThings.length; i++) { 
        const myThing = arrayOfThings[i]; 

        if (myThing.id === id){
            return myThing; 
        }
    }

} 