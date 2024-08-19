let name = {
  firstName: "Neeraj",
  lastName: "Chaudhary",
  //   printFullName: function () {
  //     console.log(this.firstName + " " + this.lastName);
  //   },
};

function printFullName(homeTown, state) {
  console.log(
    this.firstName + " " + this.lastName + " from " + homeTown + ", " + state
  );
}

// printFullName.call(name, "Mathura", "UP");
// printFullName.call(name, ...["Mathura", "UP"]);

let name2 = {
  firstName: "Akeem",
  lastName: "Mallik",
  //   printFullName: function () {
  //     console.log(this.firstName + " " + this.lastName);
  //   },
};

// name2.printFullName;

// Borrow a function from name object is known as function borrowing

// printFullName.call(name2, "Karnataka", "Karnataka");

// printFullName.apply(name2, ["Karnataka", "Karnataka"]);

const bindedPrintFullName = printFullName.bind(name2, "Karnataka", "Karnataka");

bindedPrintFullName();
bindedPrintFullName();
bindedPrintFullName();
bindedPrintFullName();
bindedPrintFullName();
