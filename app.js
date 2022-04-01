
document.addEventListener('DOMContentLoaded', function () {

    const list = document.querySelector('#movie-list ul'); //selecting movie list
    const forms = document.forms; // store all the forms
    

    //delete movie
    list.addEventListener('click', (e) =>{
        //e has all metadata 
        if(e.target.className == 'delete'){
            const li = e.target.parentElement;
            li.parentNode.removeChild(li);
        }
    });

    //add Movie

    const addForm = forms['add-movie'];
    console.log(addForm);
    addForm.addEventListener('submit',(e) => {
        e.preventDefault(); //cancels the event if it's cancelable 
        
        //creating element that you want to add (text for movie name and delete button)
            const value = addForm.querySelector('input[type="text"]').value;
            console.log (addForm);
            const li = document.createElement('li');
            const movieName = document.createElement('span'); //movie name
            const deleteBtn = document.createElement('span'); //delete button

        //add text content 
            movieName.textContent = value; // whatever user enters for movie name
            deleteBtn.textContent = 'delete'; //delete button

        //add classes
            movieName.classList.add('name'); // add style-css 
            deleteBtn.classList.add('delete'); //add style-css

        //append to DOM
            li.appendChild(movieName); //movie span
            li.appendChild(deleteBtn); //dlete button span 
            list.appendChild(li); // Li attached to UL list

    });
   
});

   

