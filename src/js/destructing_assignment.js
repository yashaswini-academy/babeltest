// ECMAScript6

// Template Literals

let user = { name: 'Ravi Kumar', loc: 'Mumbai' };
let userPan = "1232323";

// let welcomeMesage = "User: " + user.name + ", " + user.loc;
let welcomeMesage = `
  <div>
    <h1>${user.name}</h1>
    <p>${user.loc}</p>
    <p>${userPan}</p>
  </div>
`;

console.log(welcomeMesage);


// obj shorthand

let firstName = "Chris";
let lastName = "Dias";
let age = 25;
let newUser = { firstName, lastName, currentAge: age };

console.log(newUser);


let getUserDetails = () => {
  return {
    name: 'Shiv Nadar',
    loc: 'Mumbai',
    age: 25,
    company: {
      designation: 'Software Developer',
      name: 'ABC'
    }
  };
}

let { name, loc, company: { name: companyName } } = getUserDetails();
console.log(name);
console.log(loc);
console.log(companyName);


let getLuckyDraw = () => {
  return [1,2,3, 4];
}

let [first, second, third, fourth=10] = getLuckyDraw();
console.log(first, second, fourth);

