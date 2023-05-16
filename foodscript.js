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

const recipe2Full = document.getElementById('secondrecipe');
const recipe2name = document.getElementById('recipe2');
const recipe2time = document.getElementById('recipe2time');
const recipe2veg = document.getElementById('recipe2veg');
const recipe2calories = document.getElementById('recipe2calories');
const recipe2img = document.getElementById('recipe2img');
const recipe2link = document.getElementById('r2link');

const recipe3Full = document.getElementById('thirdrecipe');
const recipe3name = document.getElementById('recipe3');
const recipe3time = document.getElementById('recipe3time');
const recipe3veg = document.getElementById('recipe3veg');
const recipe3calories = document.getElementById('recipe3calories');
const recipe3img = document.getElementById('recipe3img');
const recipe3link = document.getElementById('r3link');

const submit2Button = document.getElementById("submittwo");
const ending = document.getElementById("end");

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
recipe2Full.style.display = "none";
recipe3Full.style.display = "none";

ending.style.display = "none";

document.cookie = "cookieName=cookieValue; SameSite=None; Secure";

submitButton.addEventListener('click', () => {

  const selectedOption = dropdown.value;
  promptText.textContent = "Perfect! To start making " + selectedOption + ", tell us the ingredinats you have in your fridge!";
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

  recipe1Full.style.display = "block";
  recipe2Full.style.display = "block";
  recipe3Full.style.display = "block";
  ending.style.display = "block";

  const result1 = input1Element.value;
  const result2 = input2Element.value;
  const result3 = input3Element.value;


  fetch('https://api.spoonacular.com/recipes/findByIngredients?ingredients=' +result1+ ',+' +result2 + ',+' +result3 + '.value&number=5&apiKey=4a7b0e81a4174698a674913026409243')
  // fetch('https://api.spoonacular.com/recipes/findByIngredients?ingredients=apple,+flour,+sugar&number=2&apiKey=4a7b0e81a4174698a674913026409243')
    .then(response => response.json())
    .then(data => {

      const recipeInfo = data[0];

      recipe1name.textContent = recipeInfo.title;
      recipe1time.textContent = recipeInfo.readyinMinutes + " minutes";
      recipe1veg.textContent = recipeInfo.vegan ? 'Vegan' : 'Non-Vegan';
      recipe1img.src = recipeInfo.image;
      recipe1calories.textContent = recipeInfo.calories.toFixed(2) + " palories";
      recipe1link.href = getsource(recipeInfo.id);

      console.log(recipeInfo);
      const recipelink = recipeInfo.calories.toFixed(2);
      console.log(recipelink);

      const recipe2Info = data[1];

      recipe2name.textContent = recipe2Info.title;
      recipe2time.textContent = recipe2Info.readyinMinutes + " minutes";
      recipe2veg.textContent = recipe2Info.vegan ? 'Vegan' : 'Non-Vegan';
      recipe2img.src = recipe2Info.image;
      recipe2calories.textContent = recipe2Info.calories.toFixed(2) + " palories";
      recipe2link.href = getsource(recipe2Info.id);

      console.log(recipe2Info);
      const recipe2link = recipe2Info.calories.toFixed(2);
      console.log(recipe2link);

      const recipe3Info = data[2];

      recipe3name.textContent = recipe3Info.title;
      recipe3time.textContent = recipe3Info.readyinMinutes + " minutes";
      recipe3veg.textContent = recipe3Info.vegan ? 'Vegan' : 'Non-Vegan';
      recipe3img.src = recipe3Info.image;
      recipe3calories.textContent = recipe3Info.calories.toFixed(2) + " palories";
      recipe3link.href = getsource(recipe3Info.id);

      console.log(recipe3Info);
      const recipe3link = recipe3Info.calories.toFixed(2);
      console.log(recipe3link);

    })
    .catch(error => {
      console.error('Error:', error);
    });
});











