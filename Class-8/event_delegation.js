// event delegation is when a parent element automatically add
// event listeners to its children elements.
// The event listener will fire anytime an event is triggered on the child element,
// due to event bubbling(event propagation)

// why do we use event delegation?
// event delegation allows you to avoid adding event listeners to specifc nodes.
// instead event listener is added to one parent.

document.getElementById("category").addEventListener("click", (event) => {
  // event -> event object
  // event.target -> refers to point where event triggers
  // event.currentTarget -> refers to place where event is attached
  // event.target.id > id for li

  if (event.target.tagName === "LI") {
    window.location.href = "/Class-8/" + event.target.id + ".html";
  }
});

// limitation
// All the events are not bubbled up, example -> blur, focus, resize, etc...
