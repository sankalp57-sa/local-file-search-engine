let files = [];

const timestamp = new Date().getTime();
fetch(`results.json?t=${timestamp}`)
  .then(response => response.json())
  .then(data => {
    console.log("Loaded data:", data);
  })
  .catch(err => console.error("Error:", err));
