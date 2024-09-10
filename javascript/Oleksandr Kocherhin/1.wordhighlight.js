// Highlight all of the words over 8 characters long in the paragraph text (with a yellow background for example)
const paragraph = document.querySelector("p");
paragraph.innerHTML = paragraph.innerHTML.split(" ").map((word) => {
    return word.length > 8 ? `<span style="background-color:yellow">${word}</span>` : word;
}).join(" ");

// Split each new sentence on the neew line in paragraph.
paragraph.innerHTML=paragraph.innerHTML.split(/\.[^.|<]/).join(".</p><p>")+"</p>"