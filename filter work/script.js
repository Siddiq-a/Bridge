let products = {
    data: [
 
      {
        BridgeName: "Zhaozhou Bridge ",
  
        image: "Zhaozhou Bridge (Anji Bridge).jpeg",
        category : "Oldest"
      },
 
      {
        BridgeName: "Changhua-Kaohsiung Viaduct ",
  
        image: "ChanghuaKaohsiung Viaduct.jpg",
        category : "Longest"
      },
      {
        BridgeName: "Yi Sun-sin Bridge",
  
        image: "Yi Sun-sin Bridge.jpg",
        category : "Highest"
      },
      {
        BridgeName: "Royal Gorge Bridge",
  
        image: "Royal Gorge Bridge.jpg",
        category : "Tallest"
      },
   
      {
        BridgeName: "Ponte Fabricio (Pons Fabricius)",
  
        image: "Ponte Fabricio (Pons Fabricius).jpg",
        category : "Oldest"
      },
 
      {
        BridgeName: "Cangde Grand Bridge",
  
        image: "Cangde Grand Bridge.jpeg",
        category : "Longest"
      },
      {
        BridgeName: "Millau Viaduct",
  
        image: "Millau Viaduct.jpeg",
        category : "Highest"
      },
      {
        BridgeName: "Millau Viaduct",
  
        image: "Millau Viaduct.jpeg",
        category : "Tallest"
      },
      {
        BridgeName: "Karamagara Bridge",
  
        image: "Karamagara Bridge.jpeg",
        category : "Oldest"
      },
 
      {
        BridgeName: "Tianjin Grand Bridge",
  
        image: "Tianjin Grand Bridge.jpeg",
        category : "Longest"
      },
      {
        BridgeName: "Long Bridge",
  
        image: "Long Bridge.webp",
        category : "Highest"
      },
      {
        BridgeName: "Russky Bridge ",
  
        image: "Russky Bridge.jpg",
        category : "Tallest"
      },
     
      {
        BridgeName: "Caravan Bridge (Shahrestan Bridge)",
  
        image: "Caravan Bridge.jpg",
        category : "Oldest"
      },
 
      {
        BridgeName: "Bang Na Expressway",
  
        image: "Bang Na Expressway.jpeg",
        category : "Longest"
      },
      {
        BridgeName: "Sidu River Bridge",
  
        image: "Sidu River Bridge.jpeg",
        category : "Highest"
      },
      {
        BridgeName: "Yi Sun-sin Bridge",
  
        image: "Yi Sun-sin Bridge.jpg",
        category : "Tallest"
      },
  
    ],
  };
  
  for (let i of products.data) {
    //Create Card
    let card = document.createElement("div");
    //Card should have category and should stay hidden initially
    card.classList.add("card", i.category, "hide");
    //image div
    let imgContainer = document.createElement("div");
    imgContainer.classList.add("image-container");
    //img tag
    let image = document.createElement("img");
    image.setAttribute("src", i.image);
    imgContainer.appendChild(image);
    card.appendChild(imgContainer);
    //container
    let container = document.createElement("div");
    container.classList.add("container");
    //product name
    let name = document.createElement("h5");
    name.classList.add("Bridge-name");
    name.innerText = i.BridgeName.toUpperCase();
    container.appendChild(name);
    //price
    card.appendChild(container);
    document.getElementById("products").appendChild(card);
  }
  
  //parameter passed from button (Parameter same as category)
  function filterProduct(value) {
    //Button class code
    let buttons = document.querySelectorAll(".button-value");
    buttons.forEach((button) => {
      //check if value equals innerText
      if (value.toUpperCase() == button.innerText.toUpperCase()) {
        button.classList.add("active");
      } else {
        button.classList.remove("active");
      }
    });
  
    //select all cards
    let elements = document.querySelectorAll(".card");
    //loop through all cards
    elements.forEach((element) => {
      //display all cards on 'all' button click
      if (value == "all") {
        element.classList.remove("hide");
      } else {
        //Check if element contains category class
        if (element.classList.contains(value)) {
          //display element based on category
          element.classList.remove("hide");
        } else {
          //hide other elements
          element.classList.add("hide");
        }
      }
    });
  }
  
  //Search button click
  document.getElementById("search").addEventListener("click", () => {
    //initializations
    let searchInput = document.getElementById("search-input").value;
    let elements = document.querySelectorAll(".product-name");
    let cards = document.querySelectorAll(".card");
  
    //loop through all elements
    elements.forEach((element, index) => {
      //check if text includes the search value
      if (element.innerText.includes(searchInput.toUpperCase())) {
        //display matching card
        cards[index].classList.remove("hide");
      } else {
        //hide others
        cards[index].classList.add("hide");
      }
    });
  });
  
  //Initially display all products
  window.onload = () => {
    filterProduct("all");
  };