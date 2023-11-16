   function validarFormulario() {
     const email = document.getElementById('email').value;
     const senha = document.getElementById('password').value;

     if (email === '' || senha === '') {
       alert('Insira um email/senha válido');
       return false;
     }

     return true;
   }

   document.getElementById('login').addEventListener('submit', function(event) {
     event.preventDefault();

     if (validarFormulario()) {
       document.getElementById('login').style.display = 'none';

       document.getElementById('logout').style.display = 'block';
     }
   });

   document.getElementById('logoutbtn').addEventListener('click', function(event) {
     event.preventDefault();

     document.getElementById('logout').style.display = 'none';

     document.getElementById('login').style.display = 'block';
   });
