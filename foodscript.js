const dropdown = document.getElementById("time");
const submitButton = document.getElementById("submitone"); //meal time choice
const promptDiv = document.getElementById("prompt1");
const promptText = document.getElementById("okay1");

const label1Element = document.getElementById("ingri1");
const example1Element = document.getElementById("example1");
const input1Element = document.getElementById("text1");

const label2Element = document.getElementById("ingri2");
const example2Element = document.getElementById("example2");
const input2Element = document.getElementById("text2");

const label3Element = document.getElementById("ingri3");
const example3Element = document.getElementById("example3");
const input3Element = document.getElementById("text3");

const recipe1Full = document.getElementById('firstrecipe');
const recipe1name = document.getElementById('recipe1');
const recipe1time = document.getElementById('recipe1time');
const recipe1veg = document.getElementById('recipe1veg');
const recipe1calories = document.getElementById('recipe1calories');
const recipe1img = document.getElementById('recipe1img');
const recipe1link = document.getElementById('r1link');

const submit2Button = document.getElementById("submittwo");
const ending = document.getElementById("end");
const back = document.getElementById("goback");
const next = document.getElementById("gonext");


promptDiv.style.display = "none";
label1Element.style.display = "none";
example1Element.style.display = "none";
input1Element.style.display = "none";

label2Element.style.display = "none";
example2Element.style.display = "none";
input2Element.style.display = "none";

label3Element.style.display = "none";
example3Element.style.display = "none";
input3Element.style.display = "none";
submit2Button.style.display = "none";

recipe1Full.style.display = "none";
back.style.display = "none";
next.style.display = "none";
ending.style.display = "none";

// recipe2Full.style.display = "none";
// recipe3Full.style.display = "none";


document.cookie = "cookieName=cookieValue; SameSite=None; Secure";

submitButton.addEventListener('click', () => {

  const selectedOption = dropdown.value;
  promptText.textContent = "Perfect! To start making " + selectedOption + ", tell us the ingredinats you have in your fridge! Scroll Down";
  promptDiv.style.display = "block";
  label1Element.style.display = "block";
  example1Element.style.display = "block";
  input1Element.style.display = "block";

  label2Element.style.display = "block";
  example2Element.style.display = "block";
  input2Element.style.display = "block";

  label3Element.style.display = "block";
  example3Element.style.display = "block";
  input3Element.style.display = "block";

  submit2Button.style.display = "block";

  if(dropdown.value=="Breakfast"){
    label1Element.textContent = "Cereal and Grains:";
    example1Element.textContent = "e.g. gornola, oatmeal, cereal";
    label2Element.textContent = "Dairy and Eggs:";
    example2Element.textContent = "e.g. milk, yogurt, eggs";
    label3Element.textContent = "Breads and Pastries:";
    example3Element.textContent = "e.g. bagel, toast, sourdough";
  }
  else if(dropdown.value=="Lunch" || dropdown.value=="Dinner"){
    label1Element.textContent = "Meat and Poultry:";
    example1Element.textContent = "e.g. chicken, steak, salmon";
    label2Element.textContent = "Pasta and Rice (carbs)";
    example2Element.textContent = "e.g. spaghetti, brown rice, tortia";
    label3Element.textContent = "Vegetables";
    example3Element.textContent = "e.g. potatoes, brocolli, mushrooms";
  }
  else if(dropdown.value=="Dessert"){
    label1Element.textContent = "Frozen treats:";
    example1Element.textContent = "e.g. ice cream, sorbet, froze yogurt";
    label2Element.textContent = "Sweetneers";
    example2Element.textContent = "e.g. chocolate, strawberry, maple syrup";
    label3Element.textContent = "Dairy and Eggs";
    example3Element.textContent = "e.g. milk, cream, eggs";
  }
  else if(dropdown.value=="Drinks"){
    label1Element.textContent = "Liquor base: ";
    example2Element.textContent = "e.g. vodka, champagne, gin";
    label2Element.textContent = "Mixers: ";
    example2Element.textContent = "e.g. orange juice, lemonade, soda";
    label3Element.textContent = "Fruits and berries:";
    example3Element.textContent = "e.g. strawberry, apple, orange";
  }
});

submit2Button.addEventListener('click', () => {

  // recipe2Full.style.display = "block";
  // recipe3Full.style.display = "block";
  ending.style.display = "block";
  back.style.display = "block";
  recipe1Full.style.display = "block";
  next.style.display = "block";

  const result1 = input1Element.value;
  const result2 = input2Element.value;
  const result3 = input3Element.value;



fetch('https://api.spoonacular.com/recipes/findByIngredients?ingredients=' + result1 + ',' + result2 + ',' + result3 + '&number=10&apiKey=4a7b0e81a4174698a674913026409243')
  .then(response => response.json())
  .then(data => {

    document.cookie = "cookieName=cookieValue; SameSite=Secure";

    let currentRecipeIndex = 0;
    let recipeInfo = data[currentRecipeIndex]; 

    recipe1name.textContent = recipeInfo.title;
    recipe1img.src = recipeInfo.image;

    let moredata = recipeInfo.id;

    fetch('https://api.spoonacular.com/recipes/' + moredata + '/information?apiKey=4a7b0e81a4174698a674913026409243')
      .then(response2 => response2.json())
      .then(data2 => {

        console.log(data2);

        recipe1link.href = data2.sourceUrl;
        recipe1time.textContent = data2.readyInMinutes + " minutes";
        recipe1veg.textContent = data2.vegetarian ? 'Veg' : 'Non-Veg';

    });

    next.addEventListener('click', () => {
      currentRecipeIndex++;
      recipeInfo = data[currentRecipeIndex];

      moredata = recipeInfo.id;

      recipe1name.textContent = recipeInfo.title;
      recipe1img.src = recipeInfo.image;

      fetch('https://api.spoonacular.com/recipes/' + moredata + '/information?apiKey=4a7b0e81a4174698a674913026409243')
        .then(response3 => response3.json())
        .then(data3 => {

        recipe1link.href = data3.sourceUrl;
        recipe1time.textContent = data3.readyInMinutes + " minutes";
        recipe1veg.textContent = data3.vegetarian ? 'Veg' : 'Non-Veg';
      });
    });

    back.addEventListener('click', () => {
      currentRecipeIndex--;
      recipeInfo = data[currentRecipeIndex];

      moredata = recipeInfo.id;

      recipe1name.textContent = recipeInfo.title;
      recipe1img.src = recipeInfo.image;
    

      fetch('https://api.spoonacular.com/recipes/' + moredata + '/information?apiKey=4a7b0e81a4174698a674913026409243')
        .then(response4 => response4.json())
        .then(data4 => {

        recipe1link.href = data4.sourceUrl;
        recipe1time.textContent = data4.readyInMinutes + " minutes";
        recipe1veg.textContent = data4.vegetarian ? 'Veg' : 'Non-Veg';
      });

    });

    if(recipe1veg.textContent=="Non-Veg"){
      recipe1veg.style.color = 'red';
    }

  })
  .catch(error => {
    console.error('Error:', error);
  });
});












