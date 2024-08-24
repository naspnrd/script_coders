const headRow = document.querySelector(".head-row");
const headCol = document.querySelector(".serialNo");
const body = document.querySelector(".body");

const rows = 100;
const columns = 27;

// for columns
for (let i = 0; i < columns; i++) {
  const headCell = document.createElement("div");

  if (i === 0) {
    // headRow.appendChild(headCell);
    continue;
  }
  // fromCharCode() // 65 -> a, 66 -> b
  headCell.innerText = String.fromCharCode(i + 64);
  headCell.classList.add("col-head");
  headRow.appendChild(headCell);
}

// for rows
for (let i = 0; i < rows; i++) {
  const headColCell = document.createElement("div");
  headColCell.innerText = i + 1;
  headColCell.classList.add("sno-cell");
  headCol.appendChild(headColCell);
}

// how many cells would be inside body ie rows * columns ie 100 * 27 = 2700
// wer will be running 2 for loops

for (let row = 1; row <= rows; row++) {
  const rowCells = document.createElement("div");
  rowCells.classList.add("row");
  for (let col = 1; col < columns; col++) {
    const colCell = document.createElement("cite");
    colCell.classList.add("cell");
    colCell.contentEditable = true;
    colCell.id = `${String.fromCharCode(64 + col)}${row}`;
    rowCells.appendChild(colCell);
  }
  body.appendChild(rowCells);
}
