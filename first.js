let modal=document.querySelector(' #openbtn');
    modal.addEventListener('click',function () {
        let container=document.querySelector('.container1');
        // let exitbtn=document.querySelector('.exitbtn');
            container.style.display = 'block';
            mod.style.display='block';
           
        
    })
let mod=document.querySelector(' #openbtn1');
    mod.addEventListener('click',function () {
        let container=document.querySelector('.container1');
            container.style.display = 'none';
            location.reload();
           
        
    })


    let collap =document.querySelector('#navbtn');
        collap.addEventListener('click',function() {
         let dispnav=document.querySelector('.textshow');
              dispnav.style.display='block';
              collap.style.display='none';
              collap1.style.display='block';
            
        })

    let collap1 =document.querySelector('#navbtn1');
        collap1.addEventListener('click',function() {
         let dispnav1=document.querySelector('.textshow');
              dispnav1.style.display='none';
              collap1.style.display='block';
              collap1.style.display='block';
              location.reload();
            
        })