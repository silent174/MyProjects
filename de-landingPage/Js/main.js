'use strict';
document.addEventListener('DOMContentLoaded', function() {
  
  const
  modalWindow = document.querySelector('.modal'),
  modalOpen = document.querySelector('[data-modal]'),   
  modaloverlay = document.querySelector('.modal__overlay'),
  form = document.querySelector('#form');

  modalOpen.addEventListener('click',OpenModalWindow);
  modaloverlay.addEventListener('click', (e) =>{
    if(e.target == modaloverlay || e.target.getAttribute('data-close') == '') {
      CloseModalWindow();
    }
  });

  const postData = async (url, data) => {
    document.querySelector('.status').textContent = 'Your message sent succesfully!' ;
    let res =  await fetch(url, {
      method: "POST",
      body: data
    });
    return await res.text();
  }; 

form.addEventListener('submit', (event) => {
  event.preventDefault();
  let error = validationForm(form);
  if (error === 0){
    let status =  document.createElement('div');
    status.classList.add('status');
    form.appendChild(status);

    const formData = new FormData(form);
    postData('mail.php', formData)
    .then(res => {
    })
    .catch(() => document.querySelector('.status').textContent = 'something went wrong')
    .finally(() => {
    form.reset();
    setTimeout(() => {
      status.remove();
      CloseModalWindow();
    }, 4000);
    });
  }
  else {
    let status =  document.createElement('div');
    status.classList.add('status');
    form.appendChild(status);
    document.querySelector('.status').textContent = 'please enter you name and email' ;
    setTimeout(() => {
      document.querySelector('#name').classList.remove('error');
      document.querySelector('#mail').classList.remove('error');
      status.remove();
    }, 1500);
    
  }

});

function OpenModalWindow () {
  modaloverlay.classList.add('opened');
  document.body.style.overflow = 'hidden';
  modalWindow.classList.add('show');
  modalWindow.classList.remove('hide');
}

function CloseModalWindow () {
  modaloverlay.classList.remove('opened');
  modalWindow.classList.add('hide');
  modalWindow.classList.remove('show');
  document.body.style.overflow = '';
}


 function validationForm() {
   let error = 0;
   let fieldName = document.querySelector('#name');
   let fieldMail = document.querySelector('#mail');

if(!fieldName.value) {
  error++;
  fieldName.classList.add('error');}
else if(!fieldMail.value) {
  error++;
  fieldMail.classList.add('error');
}
return error;
 }
});