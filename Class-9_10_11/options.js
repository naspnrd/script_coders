let selectedCell = "";
const activeCellElement = document.querySelector(".selected-cell");
const form = document.querySelector("#options-form");

body.addEventListener("click", (event) => {
  if (selectedCell) {
    selectedCell.classList.remove("active-cell");
  }
  selectedCell = event.target;
  selectedCell.classList.add("active-cell");
  activeCellElement.innerText = selectedCell.id;
});

form.addEventListener("change", () => {
  console.log("change event triggered");
  if (!selectedCell) {
    alert("Please select a cell before making any change on the options");
    form.reset();
    return;
  }

  const formData = {
    fontFamily: form["fontFamily"].value,
    fontSize: form["fontSize"].value,
    isBold: form["isBold"].checked,
    isItalic: form["isItalic"].checked,
    isUnderlined: form["isUnderlined"].checked,
    align: form["align"].value,
    textColor: form["textColor"].value,
    backgroundColor: form["backgroundColor"].value,
  };
  console.log(formData);

  applyStylesToSelectedCell(formData);
});

function applyStylesToSelectedCell(styles) {
  selectedCell.style.fontSize = styles.fontSize + "px";
  selectedCell.style.fontFamily = styles.fontFamily;
  selectedCell.style.fontWeight = styles.isBold ? "bold" : "normal";
  selectedCell.style.fontStyle = styles.isItalic ? "italic" : "normal";
  selectedCell.style.textDecoration = styles.isUnderlined
    ? "underline"
    : "none";
  selectedCell.style.textAlign = styles.align;
  selectedCell.style.color = styles.textColor;
  selectedCell.style.backgroundColor = styles.backgroundColor;
}
