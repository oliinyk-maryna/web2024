// Promises, async/await

//Re-resolve a promise?
let promise = new Promise(function(resolve, reject) {
    resolve(1);
  
    setTimeout(() => resolve(2), 1000);
  });
  
  promise.then(alert); //The output is: 1.

  //Delay with a promise
  function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
  delay(3000).then(() => alert('runs after 3 seconds'));

  //Animated circle with promise
  function showCircle(cx, cy, radius) {
    // Створюємо та додаємо коло до документа
    let div = document.createElement('div');
    div.style.width = 0;
    div.style.height = 0;
    div.style.left = cx + 'px';
    div.style.top = cy + 'px';
    div.className = 'circle';
    document.body.append(div);
  
    // Повертаємо проміс, який виконається після анімації
    return new Promise(resolve => {
      setTimeout(() => {
        div.style.width = radius * 2 + 'px';
        div.style.height = radius * 2 + 'px';
  
        // Запускаємо анімацію розширення кола
        div.addEventListener('transitionend', () => resolve(div), { once: true });
      }, 0);
    });
  }
  
  showCircle(150, 150, 100).then(div => {
    div.classList.add('message-ball');
    div.append("Hello, world!");
  });
  

//Promise: then versus catch

// Перший варіант:
promise.then(f1).catch(f2);


// Другий варіант:
promise.then(f1, f2);


// Порівняння:
// - `promise.then(f1).catch(f2);` — `f2` обробить помилки як у початковому `promise`, так і в `f1`.
// - `promise.then(f1, f2);` — `f2` обробить лише помилки початкового `promise`, 
//   але не оброблятиме помилки, що виникли у `f1`.

// Якщо потрібно обробити всі помилки, включно з тими, що можуть виникнути в `f1`, 
// краще використовувати перший варіант: `promise.then(f1).catch(f2);`


//Error in setTimeout
new Promise(function(resolve, reject) {
    setTimeout(() => {
      throw new Error("Whoops!");
    }, 1000);
  }).catch(alert);

  // Не спрацює. Коли помилка викидається у setTimeout, вона буде
  // розглядатися як неспіймана глобальна помилка, що зазвичай
  // призводить до виникнення помилки в консолі, але .catch її не обробить.

  //Rewrite using async/await
  async function loadJson(url) { 
    let response = await fetch(url); 
  
    if (response.status == 200) {
      let json = await response.json(); 
      return json;
    }
  
    throw new Error(response.status);
  }
  
  loadJson('https://javascript.info/no-such-user.json')
    .catch(alert); 
    

//Rewrite "rethrow" with async/await
class HttpError extends Error {
    constructor(response) {
      super(`${response.status} for ${response.url}`);
      this.name = 'HttpError';
      this.response = response;
    }
  }
  
  async function loadJson(url) {
    let response = await fetch(url);
    if (response.status == 200) {
      return response.json();
    } else {
      throw new HttpError(response);
    }
  }
  
  // Ask for a user name until github returns a valid user
  async function demoGithubUser() {
  
    let user;
    while(true) {
      let name = prompt("Enter a name?", "iliakan");
  
      try {
        user = await loadJson(`https://api.github.com/users/${name}`);
        break; // no error, exit loop
      } catch(err) {
        if (err instanceof HttpError && err.response.status == 404) {
          // loop continues after the alert
          alert("No such user, please reenter.");
        } else {
          // unknown error, rethrow
          throw err;
        }
      }
    }
  
  
    alert(`Full name: ${user.name}.`);
    return user;
  }
  
  demoGithubUser();


// Call async from non-async
async function wait() {
    await new Promise(resolve => setTimeout(resolve, 1000));
  
    return 10;
  }
  
  function f() {
    // shows 10 after 1 second
    wait().then(result => alert(result));
  }
  
  f();