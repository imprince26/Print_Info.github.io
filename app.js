document.addEventListener("DOMContentLoaded", function () {
  let infoForm =document.getElementById("infoForm");
    infoForm.addEventListener("submit", function (event) {
      event.preventDefault();

      const name = document.getElementById("name").value;
      const city = document.getElementById("city").value;
      const number = document.getElementById("number").value;
      const tableBody = document
        .getElementById("detailsTable")
        .querySelector("tbody");
      const newRow = document.createElement("tr");

      const namecell = document.createElement("td");
      namecell.textContent = name;
      newRow.appendChild(namecell);

      const cityCell = document.createElement("td");
      cityCell.textContent = city;
      newRow.appendChild(cityCell);

      const numberCell = document.createElement("td");
      numberCell.textContent = number;
      newRow.appendChild(numberCell);

      const deleteCell = document.createElement("td");
      const deleteButton = document.createElement("button");
      deleteButton.textContent = "Delete";
      deleteButton.setAttribute("id","button1");
    

      deleteButton.addEventListener("click", function () {
        tableBody.removeChild(newRow);
      });

      deleteCell.appendChild(deleteButton);
      newRow.appendChild(deleteCell);

      tableBody.appendChild(newRow);

      document.getElementById("infoForm").reset();
    });
});
