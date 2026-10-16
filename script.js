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
