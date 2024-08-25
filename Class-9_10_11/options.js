let selectedCell = "";
const activeCellElement = document.querySelector(".selected-cell");
const form = document.querySelector("#options-form");
const expressionInput = document.querySelector("#expression");
const state = {};
/*
* {
    c4: {
      isBold: true,
      isItalice: true,
      isUnderlined: true,
      align: "center",
      fontSize: "16px",
      fontFamily: "Default",
      color: #000000,
      backgroundColor: #ffffff,
      innerText: "neeraj"
    }
  }
 */

const defaultState = {
  innerText: "",
  isBold: false,
  isItalic: false,
  isUnderlined: false,
  align: "left",
  fontSize: "16",
  fontFamily: "default",
  textColor: "#000",
  backgroundColor: "#fff",
};

body.addEventListener("click", (event) => {
  form.reset();
  if (selectedCell) {
    selectedCell.classList.remove("active-cell");
  }
  selectedCell = event.target;
  selectedCell.classList.add("active-cell");
  activeCellElement.innerText = selectedCell.id;
  if (!state[selectedCell.id]) {
    state[selectedCell.id] = {
      ...defaultState,
      innerText: selectedCell.innerText,
    };
    return;
  }
  // already data present inside state object
  state[selectedCell.id] = {
    ...state[selectedCell.id],
    innerText: selectedCell.innerText,
  };
  applyCellInfoToForm();
});

body.addEventListener("input", (event) => {
  selectedCell = event.target;
  if (!state[selectedCell.id]) {
    state[selectedCell.id] = {
      ...defaultState,
      innerText: selectedCell.innerText,
    };
    return;
  }
  // already data present inside state object
  state[selectedCell.id] = {
    ...state[selectedCell.id],
    innerText: selectedCell.innerText,
  };
});
function applyCellInfoToForm() {
  if (!state[selectedCell.id]) {
    console.log("clicked for the first time--", { defaultState });
    form.reset();
    return;
  }
  console.log(state[selectedCell.id]);
  syncFormOptions(state[selectedCell.id]);
}

function syncFormOptions(selectedCellState) {
  // form["fontFamily"].value = selectedCellState.fontFamily;
  // form["fontSize"].value = selectedCellState.fontSize;
  // form["isBold"].checked = selectedCellState.isBold;
  // form["isItalic"].checked = selectedCellState.isItalic;
  // form["isUnderlined"].checked = selectedCellState.isUnderlined;
  // form["align"].value = selectedCellState.align;
  // form["textColor"].value = selectedCellState.textColor;
  // form["backgroundColor"].value = selectedCellState.backgroundColor;

  // debugger;
  for (let key in selectedCellState) {
    console.log(key);
    if (key === "isBold" || key === "isItalic" || key === "isUnderlined") {
      form[key].checked = selectedCellState[key];
    } else form[key].value = selectedCellState[key];
  }
}
form.addEventListener("change", () => {
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

  state[selectedCell.id] = { ...formData, innerText: selectedCell.innerText };

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

expressionInput.addEventListener("keyup", (event) => {
  if (event.key === "Enter") {
    const expressionResult = eval(event.target.value);
    selectedCell.innerText = expressionResult;
    expressionInput.value = "";
  }
});
