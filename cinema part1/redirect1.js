function logIn(){
    const pass= document.getElementById('password').value
    const wr=document.getElementById('wrong')
    if(pass === 'ionela123'){
        window.location.href = 'http://127.0.0.1:5503/home.html';
    }else{
        wr.textContent='password wrong'
    }
}