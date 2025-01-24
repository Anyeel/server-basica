fetch('https://dummyjson.com/recipes/2')
.then(res => res.json())
.then(data => {
    const name = data.name
    console.log(data)
    console.log(name)

    //title of recipe
    const h1 = document.createElement("h1")
    h1.innerText = name
    document.body.appendChild(h1)

    //difficulty
    const p = document.createElement("p")
    p.innerText = `Difficulty: ${data.difficulty}`
    document.body.appendChild(p)

    //ingredients
    const pIngredients = document.createElement("p")
    pIngredients.innerText = "Ingredients:"
    document.body.appendChild(pIngredients)
    
    const ingredients = data.ingredients
    const ul = document.createElement("ul")
    for (let i = 0; i < ingredients.length; i++){ 
        const li = document.createElement("li")
        li.innerText = ingredients[i] 
        ul.appendChild(li)
    }
    document.body.appendChild(ul)

    //instrucions
    const pInstructions = document.createElement("p")
    pInstructions.innerText = "Instrucions:"
    document.body.appendChild(pInstructions)
    
    const instructions = data.instructions
    const ul1 = document.createElement("ul")
    for (let i = 0; i < instructions.length; i++){ 
        const li1 = document.createElement("li")
        li1.innerText = instructions[i] 
        ul1.appendChild(li1)
    }
    document.body.appendChild(ul1)

    //image
    const img = document.createElement("img")
    img.src = data.image
    document.body.appendChild(img)

    //preparation time
    create("p", `Preparation time: ${data.prepTimeMinutes} min`, "body")

    //cooking time
    create("p", `Cooking time: ${data.cookTimeMinutes} min`, "body")

});

function create(element,data,destination){
    const e = document.createElement(element)
    e.innerText = data
    dest_element = document.querySelector(destination)
    dest_element.appendChild(e)
}
