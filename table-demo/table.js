function createTable(rows, cols) {
    var table = document.createElement("table");
    table.style.borderCollapse = "collapse";

    // Create header row
    var header = document.createElement("tr");
    for (var j = 0; j < cols; j++) {
        var headerCell = document.createElement("th");
        headerCell.textContent = `Header ${j + 1}`;
        headerCell.style.border = "1px solid black";
        headerCell.style.padding = "8px";
        header.appendChild(headerCell);
    }
    table.appendChild(header);

    // Create rows and cells
    for (var i = 0; i < rows; i++) {
        var row = document.createElement("tr");
        for (var j = 0; j < cols; j++) {
            var cell = document.createElement("td");
            cell.textContent = `Row ${i + 1}, Cell ${j + 1}`;
            cell.style.border = "1px solid black";
            cell.style.padding = "8px";
            row.appendChild(cell);
        }
        table.appendChild(row);
    }

    document.getElementById("tableContainer").appendChild(table);
}

// Create a table with 4 rows, 3 columns
createTable(100, 26);
