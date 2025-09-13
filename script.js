document.getElementById("cropForm").addEventListener("submit", function(e) {
  e.preventDefault();

  // Collect inputs (for real project, send to backend ML model)
  const nitrogen = document.getElementById("nitrogen").value;
  const phosphorus = document.getElementById("phosphorus").value;
  const potassium = document.getElementById("potassium").value;
  const temperature = document.getElementById("temperature").value;
  const humidity = document.getElementById("humidity").value;
  const ph = document.getElementById("ph").value;
  const rainfall = document.getElementById("rainfall").value;

  // 🌾 Expanded Crop List
  let crops = [
    "wheat", "rice", "maize", "pomegranate", "banana", "sugarcane",
    "muskmelon", "watermelon",  "bittergourd", "cucumber", 
    "ridgegourd", "brinjal", "greenchillies", "bottlegourd", 
    "peas", "carrot", "methi", 
    "ladyfinger", "onion", "tomato", "potato"
  ];

  // Pick a random crop (dummy logic for now, later connect ML model)
  let randomCrop = crops[Math.floor(Math.random() * crops.length)];

  // 📌 Crop → Image Mapping
  const cropImages = {
    "wheat": "images/whaeat.jpg",
   "rice": "images/rice.jpg",
     "maize": "images/maize.jpeg",
    "pomegranate": "images/poma.jpeg",
    "banana": "images/banana.jpeg",
    "sugarcane": "images/sugarcane.jpg",
    // new
    "muskmelon": "images/muskmelon.jpeg",
    "watermelon": "images/watermelon.jpeg",
    "bittergourd": "images/bittergourd.jpg",
    "cucumber": "images/cucumber.jpg",
    "ridgegourd": "images/ridgegourd.jpg",
    "brinjal": "images/brinjal.jpeg",
    "greenchillies": "images/greenchillies.jpg",
    "bottlegourd": "images/bottlegourd.jpeg",
    "peas": "images/peas.jpg",
    "carrot": "images/carrot.jpg",
    "methi": "images/methi.jpeg",
    "ladyfinger": "images/ladyfinger.jpeg",
    "onion": "images/onion.jpeg",
    "tomato": "images/tomato.jpeg",
    "potato": "images/potato.png"
  };

  // ✅ Show result
  document.getElementById("crop-name").innerText = randomCrop.toUpperCase();
  document.getElementById("crop-image").src = cropImages[randomCrop];
  document.getElementById("crop-image").alt = randomCrop;
});
