// Here I'm labeling the elements I'm going to manipulate, so that javascript knows what elements to change when I write a command
const backgroundDiv = document.getElementById("background");
// How can I use this document value when I didn't even create it? That's because all browsers have this document value already created in them! It refers to the webpage!
const innermostRectangle = document.getElementById("rectangle-4");

// Now I'm going to add an event listener (https://www.w3schools.com/js/js_htmldom_eventlistener.asp)
// Almost anything that you do to a webpage fires an event, I'm going to add a function that will listen for this event and run every time that event is fired
// In this case, I'm listening to the event that is fired everytime the mouse moves! I'm attaching it to the backgroundDiv because that div covers the entire screen, so the event will fire whereever the mouse is in our viewport
backgroundDiv.addEventListener("mousemove", (event) => {
    // These events can give you a lot of information! if you're curious what it has in it, you can run console.log(event) here!

    // finally, every time the mouse moves, I'm setting a paragraph HTML element inside the pink rectange that shows the current position of the mouse!
    innermostRectangle.innerHTML = `<p>Mouse X: ${event.clientX} Mouse Y: ${event.clientY}</p>`;

    // So, now that you have the divs you need, and the position of the mouse, you should be able to change the positions of the divs everytime the mouse is moved!
    // The exact numbers for each div will be tricky, but you should be able to use code something like:

    // document.getElementById("rectangle-1").style.top = ?;
    // document.getElementById("rectangle-1").style.left = ?;

    // document.getElementById("rectangle-2").style.top = ?;
    // document.getElementById("rectangle-2").style.left = ?;

    // document.getElementById("rectangle-3").style.top = ?;
    // document.getElementById("rectangle-3").style.left = ?;

    // document.getElementById("rectangle-4").style.top = ?;
    // document.getElementById("rectangle-4").style.left = ?;
})