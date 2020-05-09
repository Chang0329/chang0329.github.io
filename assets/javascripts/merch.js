var dict = {
  2019: [
    {
      "image": "assets/images/11.png",
      "text": "Red Turtle An Island Story",
      "price": "$29.99"
    },
    {
      "image": "assets/images/33.png",
      "text": "Kaguya Princess Story",
      "price": "$31.99"
    },
    {
      "image": "assets/images/55.png",
      "text": "From Cokuriko Slope",
      "price": "$20.99"
    },
  ],
  2018: [
    {
      "image": "assets/images/66.png",
      "text": "Borrowing Arrietty",
      "price": "$39.99"
    },
    {
      "image": "assets/images/22.png",
      "text": "Memories of Marnie",
      "price": "$21.99"
    }
  ],
  2017: [
    {
      "image": "assets/images/44.png",
      "text": "Windless",
      "price": "$49.99"
    },
  ]
};

var selectedElement = undefined;
function onClick(year) {
  const cardsNode = document.getElementById("bio_text");
  cardsNode.innerHTML = '';

  if (selectedElement != undefined) {
    selectedElement.style.borderBottom = ""
  }
  selectedElement = document.getElementById("year" + year.toString())
  selectedElement.style.borderBottom = "1px solid white";

  for (i = 0; i < dict[year].length; i++) {
    addCard(cardsNode, dict[year][i]["image"], dict[year][i]["text"], dict[year][i]["price"])
  }
}

function addCard(node, imagePath, text, price) {
  var newDiv = document.createElement("div");
  newDiv.setAttribute("id", "card");

  var newImage = document.createElement("div");
  newImage.setAttribute("id", "text");
  var image = document.createElement('img');
  image.src = imagePath;
  newImage.appendChild(image);
  newDiv.appendChild(newImage);

  var newText = document.createElement("div");
  newText.setAttribute("id", "text_right");
  newText.innerHTML = text
  newDiv.appendChild(newText);

  var newPrice = document.createElement("div");
  newPrice.setAttribute("id", "price");
  newPrice.innerHTML = price
  newDiv.appendChild(newPrice);

  node.appendChild(newDiv);
}

function reset() {
  location.reload();
}
