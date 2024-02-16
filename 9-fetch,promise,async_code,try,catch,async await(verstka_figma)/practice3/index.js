// let x;

// function getSquare(a) {
//     setTimeout(() => {
//         x = a * a;
//         console.log(x);
//         return a * a;
//     }, 500)
// }
// getSquare(5);

// let x;

let x;
function getSquare(a) {
    setTimeout(() => {
        x = a * a;
        return a * a;
    }, 500)
}
getSquare(5);
setTimeout(() => {
    console.log(x);
}, 500)





function getSquare1(a, callback) {
    setTimeout(() => {
      callback(a * a);
    }, 500);
}
  
const func = (arg) => {
    console.log(Math.sqrt(arg));
};
  
getSquare1(7, func);




function getSquare2(a, callback) {
    setTimeout(() => {
      callback(a * a);
    }, 500);
}
getSquare2(7, (arg) => {
    console.log(Math.sqrt(arg));
});




function getName(name, callback) {
    setTimeout(() => {
      callback(name);
    }, 500);
}
  
  function getRepos(repos, callback) {
    setTimeout(() => {
      callback([`${repos}1`, `${repos}2`, `${repos}3`]);
    }, 500);
}
  
getName("David", (name) => {
    console.log(name);  
});






function getName(name, callback) {
    setTimeout(() => {
      callback(name);
    }, 1000);
}
  
function getRepos(repos, callback) {
    setTimeout(() => {
      callback([`${repos}1`, `${repos}2`, `${repos}3`]);
    }, 1000);
}
  
getName("David", (name) => {
    console.log(name);
    getRepos(name, (repos) => console.log(repos));
});