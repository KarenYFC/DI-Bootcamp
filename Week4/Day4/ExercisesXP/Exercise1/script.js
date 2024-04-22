//Retrieve the div and console.log it
const containerDiv = document.getElementById("container");
console.log(containerDiv.textContent);

//Change the name “Pete” to “Richard”.
const userList = document.querySelector('.list');

const peteElement = userList.querySelector('li:nth-child(2)'); 

peteElement.textContent = 'Richard';

console.log(userList.textContent);

//Delete the <li> that contains the text node “Sarah”. (It’s the second <li> of the second <ul>)
const secondList = document.querySelectorAll('.list')[1];

const sarahElement = secondList.querySelector('li:nth-child(2)');

sarahElement.remove();

//Change each first name of the two <ul>'s to your name. (Hint : use a loop)
const secondListItems = document.querySelectorAll('.list:nth-child(2) li');

        for (const listItem of secondListItems) {
            listItem.textContent = 'Karen';
