
let search = document.querySelector('.searchbar');
document.querySelector('#search').onclick = () => {
    search.classList.toggle('active');
    favorite.classList.remove('active');
    checkout.classList.remove('active');
    login.classList.remove('active');
}




let favorite = document.querySelector('.favorite');
document.querySelector('#favorite').onclick = () => {
    favorite.classList.toggle('active');
    search.classList.remove('active');
    checkout.classList.remove('active');
    login.classList.remove('active');
}


let checkout = document.querySelector('.checkout');
document.querySelector('#checkout').onclick = () => {
    checkout.classList.toggle('active');
    favorite.classList.remove('active');
    search.classList.remove('active');
    login.classList.remove('active');
}

let login = document.querySelector('.login');
document.querySelector('#login').onclick = () => {
    login.classList.toggle('active');
    checkout.classList.remove('active');
    favorite.classList.remove('active');
    search.classList.remove('active');
  
}

