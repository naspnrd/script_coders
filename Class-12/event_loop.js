console.log("Start");
document.getElementById("btn").addEventListener("click", function cb() {
  console.log("callback");
});

console.log("End");
// a task a running => 10 seconds to execute

// Q. When does the event loop actually start?
// Ans: Event loop, as the name suggests is a single thread loop that is almost infinite.
// It's always running and doing it's job.

// Q. Are only async web api callbacks are registered in web api env?
// Ans: Yes, the synchronous callback func like what we pass inside map, filter, etc.. aren't
// registered in the web api env, It's just those async callback funcs that go through all this.

// Q. Does web api env. stores only the callback function and pushes the same callback
// to queues?
// Answer: Yes, the callback func are stored and a reference is scheduled in the queue
// Moreever in the case of event Listener(e.g click handler) the original callback stays
// in the web api env forever, that's why it's advised to explicitly remove the
// listeners when not in use so that they can be garbage collected.
