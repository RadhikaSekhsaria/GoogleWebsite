const api_key = "pnjLRyC1b1QDADbFPerQL74CEqWvdlAfcfKUAuswxCNB3Kw4dZ";

const type = document.getElementById("type");
const result1 = document.getElementById("result-typeone");
const div1 = document.getElementById("result1");
const result2 = document.getElementById("result-typetwo");
const div2 = document.getElementById("result2");
const result3 = document.getElementById("poke-name");
const result4 = document.getElementById("poke-weight");
const result5 = document.getElementById("poke-height");
const result6 = document.getElementById("poke-ability");
const result8 = document.getElementById("result-image");
const result9 = document.getElementById("result-imageback");
const readmore = document.getElementById("onemore");
const btn1 = document.getElementById("submitone");
const btn2 = document.getElementById("submittwo");
const btn3 = document.getElementById("submitthree");

//type one based on year
btn1.addEventListener('click', () => {
   
    fetch(('https://pokeapi.co/api/v2/type/' + year.value), {
    }).then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    }).then(data => {

        var colourvalue;
        var fontvalue;

        if (year.value =="fire"){
            colourvalue = "#f7552f";
            fontvalue = "white";
        }
        else if (year.value =="steel"){
            colourvalue = "#53afcc";
            fontvalue = "white";
        }
        else if (year.value =="ghost"){
            colourvalue = "#764373";
            fontvalue = "white";
        }
        else if (year.value =="water"){
            colourvalue = "#009de8";
            fontvalue = "white";
        }
        else if (year.value =="grass"){
            colourvalue = "#009b22";
            fontvalue = "white";
        }
        else if (year.value =="bug"){
            colourvalue = "#a0a000";
            fontvalue = "white";
        }
        else if (year.value =="fairy"){
            colourvalue = "#f088e7";
            fontvalue = "white";
        }
        else if (year.value =="ice"){
            colourvalue = "#00cccb";
            fontvalue = "white";
        }
        else if (year.value =="poison"){
            colourvalue = "#9e50d3";
            fontvalue = "white";
        }

        const typeone = year.value;
        result1.innerHTML =  typeone.charAt(0).toUpperCase() + typeone.slice(1);
        div1.style.backgroundColor = colourvalue;
        result1.style.color = fontvalue;

    }).catch(error => {
        console.error('There was an error!', error);
    });
})

//type two based on month
btn2.addEventListener('click', () => {
   
    fetch(('https://pokeapi.co/api/v2/type/' + month.value), {
    }).then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    }).then(data => {

        var colourvalue2;
        var fontvalue2;

        if (month.value =="poison"){
            colourvalue2 = "#9e50d3";
            fontvalue2 = "white";
        }
        else if (month.value =="bug"){
            colourvalue2 = "#a0a000";
            fontvalue2 = "white";
        }
        else if (month.value =="electric"){
            colourvalue2 = "#e7bb00";
            fontvalue2 = "white";
        }
        else if (month.value =="psychic"){
            colourvalue2 = "#fc628d";
            fontvalue2 = "white";
        }
        else if (month.value =="dragon"){
            colourvalue2 = "#4f6fc2";
            fontvalue2 = "white";
        }
        else if (month.value =="flying"){
            colourvalue2 = "#62add5";
            fontvalue2 = "white";
        }
        else if (month.value =="water"){
            colourvalue2 = "#009de8";
            fontvalue2 = "white";
        }
        else if (month.value =="dark"){
            colourvalue2 = "#514747";
            fontvalue2 = "white";
        }
        else if (month.value =="fighting"){
            colourvalue2 = "#f38c00";
            fontvalue2 = "white";
        }
        else if (month.value =="rock"){
            colourvalue2 = "#aba57d";
            fontvalue2 = "white";
        }
        else if (month.value =="flying"){
            colourvalue2 = "#62add5";
            fontvalue2 = "white";
        }
        else if (month.value =="ground"){
            colourvalue2 = "#af712f";
            fontvalue2 = "white";
        }
        

        const typetwo = month.value;
        result2.innerHTML = typetwo.charAt(0).toUpperCase() + typetwo.slice(1);
        div2.style.backgroundColor = colourvalue2;
        result2.style.color = fontvalue2;

    }).catch(error => {
        console.error('There was an error!', error);
    });
})

//name based on type one and two
btn3.addEventListener('click', () => {
   
    fetch(('https://pokeapi.co/api/v2/type/' + month.value) , {
    }).then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    }).then(data => {
        const pokesname = data["pokemon"][Math.floor(Math.random() * data["pokemon"]["length"])]["pokemon"]['name']
        
        result3.innerHTML = pokesname.charAt(0).toUpperCase() + pokesname.slice(1);
        
        //weight of pokemon
        fetch(('https://pokeapi.co/api/v2/pokemon/' + pokesname), {
        }).then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        }).then(data => {
            const weight = data.weight;
            
            result4.innerHTML = weight + " hectograms";

        }).catch(error => {
            console.error('There was an error!', error);
        });

        //height of pokemon
        fetch(('https://pokeapi.co/api/v2/pokemon/' + pokesname), {
        }).then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        }).then(data => {
            const height = data.height;
            
            result5.innerHTML = height + " inches";

        }).catch(error => {
            console.error('There was an error!', error);
        });

        //abilities of pokemon
        fetch(('https://pokeapi.co/api/v2/pokemon/' + pokesname), {
        }).then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        }).then(data => {
            const abili = data.abilities.map(ability => ability.ability.name);
            
            result6.innerHTML = abili;

        }).catch(error => {
            console.error('There was an error!', error);
        });

        //front image of pokemon
        fetch(('https://pokeapi.co/api/v2/pokemon/' + pokesname), {
        }).then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        }).then(data => {
            const fimage = data.sprites.front_default;

            result8.src = data['sprites']['front_default'];

        }).catch(error => {
            console.error('There was an error!', error);
        });

        //back image of pokemon
        fetch(('https://pokeapi.co/api/v2/pokemon/' + pokesname), {
        }).then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        }).then(data => {
            const bimage = data.sprites.back_shiny;

            result9.src = data['sprites']['back_shiny'];

        }).catch(error => {
            console.error('There was an error!', error);
        });

        //readmore
        fetch(('https://pokeapi.co/api/v2/pokemon/' + pokesname), {
        }).then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        }).then(data => {

            const link = "https://www.pokemon.com/us/pokedex/" + pokesname;

            console.log(link)

            readmore.href = "https://www.pokemon.com/us/pokedex/" + pokesname;

            // readmore.innerHTML = "Read More About Your Pokemon: " + pokesname;

        }).catch(error => {
            console.error('There was an error!', error);
        });

    }).catch(error => {
        console.error('There was an error!', error);
    });
    
})


document.getElementById("submitone").addEventListener("click", clear);

function clear() {
    console.log("yes")
    document.getElementById("formone").reset();
}

document.getElementById("submittwo").addEventListener("click", clear);

function clear() {
    console.log("yes");
}

document.getElementById("submitthree").addEventListener("click", clear);


// data["pokemon"][16]
// data["pokemon"][Math.floor(Math.random() * data["pokemon"]["length"])]
