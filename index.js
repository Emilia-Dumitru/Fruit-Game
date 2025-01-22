
//Create list
const methods = [
    "concat()", "copyWithin()", "entries()", "every()", "fill()", "filter()",
    "find()", "findIndex()", "findLast()", "findLastIndex()", "flat()",
    "flatMap()", "forEach()", "from()", "includes()", "indexOf()", "isArray()",
    "join()", "keys()", "lastIndexOf()", "map()", "of()", "pop()", "push()",
    "reduce()", "at()", "reduceRight()", "reverse()", "shift()", "slice()", "some()",
    "sort()", "splice()", "toLocaleString()", "toString()", "unshift()", "values()"
];

methods.sort();

const list = document.getElementById('methods-list');


methods.forEach(method => {
    const listItem = document.createElement('li');
    listItem.textContent = method;

    const button = document.createElement("button");
    button.textContent = "Show";
    listItem.appendChild(button);
    list.appendChild(listItem);
});

//Convert title to uppercase
const titleElement = document.getElementById('title');
titleElement.textContent = titleElement.textContent.toUpperCase();

// Replace fruit names in the paragraph with corresponding images
const fruitsText = document.getElementById("fruits-text");

const fruitImages = {
    apple: "./images/apple.png",
    orange: "./images/orange.jpg",
    strawberry: "./images/strawberry.png",
    banana: "./images/banana.webp"
};
let content = "const fruits = [";

Object.keys(fruitImages).forEach(fruit => {
    content += `<img src="${fruitImages[fruit]}" alt="${fruit}" style="width:30px; height:30px; margin-right:5px;">`;
});

content += "]";
fruitsText.innerHTML = content;

