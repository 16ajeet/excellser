const table = document.createElement("table");
// table.style.borderCollapse = "collapse"



function generateTable(rows, cols) {
  //building header here
  const header = document.createElement("thead");
  let char;
  //building header whose number is less than 26
  for (let i = 0; i <= cols; i++) {
    if (i <= 26) {
      const th = document.createElement("th");
      if (i > 0) {
        char = String.fromCharCode(i + 64);
        th.innerText = char;
      } else th.innerHTML = "<p>➤</p>";

      // th.style.padding = "1rem 0.5rem";
      // th.style.border = "2px solid red";
      header.appendChild(th);
    }

    // header if number is beyond 26
    if (i > 26) {
      // console.log(char);

      let j = i % 26;
      char = "A" + String.fromCharCode(j + 64);
      const th = document.createElement("th");
      th.innerText = char;
      // th.style.padding = "1rem 0.5rem";
      // th.style.border = "2px solid red";
      header.appendChild(th);
    }
  }

  table.appendChild(header);

  //building rows here
  for (let i = 0; i < rows; i++) {
    const tr = document.createElement("tr");
    // tr.innerText = i+1;  //this sets row number, not needed as we cant target row directly

    //this is for generating cells
    for (let j = 0; j <= cols; j++) {
      const cell = document.createElement("td"); //cell banao
      if (j === 0) cell.innerText = i + 1; //for leftmost cell that have number
      // else cell.innerText = `${String.fromCharCode(j + 64)}${i + 1}`;

      // cell me content nahi chahiye isiliye bs cel bna ke append kar diye
      tr.appendChild(cell);

      cell.contentEditable = "true"; // iske wajah se cell me kuchh bhi likh skte hai ya uspe focus kar skte hai
      cell.id = `${String.fromCharCode(j + 64)}${i + 1}`; //cell id yaha bnaye
      cell.addEventListener("focus", displayCellID); // function call for displaying cell id
      cell.addEventListener("keyup", () => console.log(cell.innerText));

      cell.addEventListener('click', activatingCell
      );
    }
    table.appendChild(tr);
  }
  document.getElementById("table-container").appendChild(table);
}

generateTable(100, 60);

// formula div me formula wala backgroundImage ko hide karne ka logic

const formulaIMG = () => {
  const formulaContent = document.getElementById("formula-content");
  formulaContent.addEventListener("keyup", () => {
    if (formulaContent.innerText !== "") {
      formulaContent.style.backgroundImage = "none";
    }
  });
};
