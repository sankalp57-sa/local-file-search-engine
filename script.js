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
  })
  .catch(err => console.error("Error:", err));

function displayResults(list) {
  const resultsDiv = document.getElementById("results");
  resultsDiv.innerHTML = "";

  if (!list || list.length === 0) {
    resultsDiv.innerHTML = "<p style='color:white; text-align:center; grid-column: 1 / -1;'>No matching files found.</p>";
    return;
  }
}
