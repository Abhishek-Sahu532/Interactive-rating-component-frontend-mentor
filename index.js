const ratingElements = document.querySelectorAll('.rating');

let value=0;
    function handleClick(event) {
      const clickedElement = event.target;
       value = clickedElement.getAttribute('value');

   

      // Remove event listeners from other rating elements
      ratingElements.forEach(ratingElement => {
        if (ratingElement !== clickedElement) {
          ratingElement.removeEventListener('click', handleClick);
          ratingElement.style.pointerEvents = 'none'; // Disable clicking on the element
        }
      });

    let element = document.getElementById(clickedElement.getAttribute('id'));
    element.style.backgroundColor ='hsl(217, 12%, 63%)'
    
    }

    // Add click event listener to each rating element
    ratingElements.forEach(ratingElement => {
      ratingElement.addEventListener('click', handleClick);
    //   console.log(ratingElement)
    });


    
    const submitBtn = document.querySelector('.submitBtn button')
    submitBtn.addEventListener('click',(e)=>{
        e.preventDefault();
        // console.log('clicked')

        let mainCompo = document.getElementsByClassName('main')[0]
        let SuccessCompo = document.getElementsByClassName('SuccessCompo')[0]
        

        mainCompo.style.display = 'none'
        SuccessCompo.style.display = 'flex'

        let selectedRating = document.querySelector('.selectedRating');
        selectedRating.innerHTML = `You selected ${value} out of 5`

    })