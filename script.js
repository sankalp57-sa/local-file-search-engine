let files = [];

const timestamp = new Date().getTime();
fetch(`results.json?t=${timestamp}`)
  .then(response => response.json())
  .then(data => {
    if (data.files) {
        files = data.files;
        if (data.scanDuration) {
            document.getElementById("scanTimer").innerText = 
                `Database Scan Time: ${data.scanDuration.toFixed(4)} seconds`;
        }
    } else {
        files = data; 
    }
    displayResults(files);
  })
  .catch(err => console.error("Error:", err));

function displayResults(list) {
  const resultsDiv = document.getElementById("results");
  resultsDiv.innerHTML = "";

  if (!list || list.length === 0) {
    resultsDiv.innerHTML = "<p style='color:white; text-align:center; grid-column: 1 / -1;'>No matching files found.</p>";
    return;
  }

  list.forEach(file => {
    const div = document.createElement("div");
    div.className = "file-card";
    const dateText = file.date ? file.date : "Unknown Date";

    div.innerHTML = `
      <a href="${file.path}" target="_blank">📄 ${file.name}</a>
      <span class="path" title="${file.path}">📂 ${file.path}</span>
      <span class="date">🕒 Modified: ${dateText}</span>
    `;
    resultsDiv.appendChild(div);
  });
}

document.getElementById("searchBar").addEventListener("input", function () {
  const query = this.value.toLowerCase();
  const filtered = files.filter(file => file.name.toLowerCase().includes(query));
  displayResults(filtered);
});
