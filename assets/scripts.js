let form = document.querySelector('#form');
let age = document.querySelector('#age');
let weight = document.querySelector('#weight');
let height = document.querySelector('#height');
let gender = document.querySelector('#gender');
let activity = document.querySelector("#activity_level")
let resultContainer = document.querySelector('.result-container')

form.addEventListener('submit', handleSubmit)

function handleSubmit(e) {
    e.preventDefault()
    console.log(Number(age.value));
    console.log(Number(weight.value));
    console.log(Number(height.value));
    console.log(gender.value);
    console.log(Number(activity.value));

    let tbm = Math.round(
        gender === 'female'
         ? (655 + (9.6 * Number(weight.value)) + (1.8 * Number(height.value)) - (4.7 * Number(age.value)))
         : (66 + (13.7 * Number(weight.value)) + (5 * Number(height.value)) - (6.8 * Number(age.value)))
    )

    let maintenance = Math.round((tbm * Number(activity.value)));
    console.log(maintenance)
    let loseWeight = maintenance - 450;
    let gainWeight = maintenance + 450;

    let result = 
    `
    <h2>Aqui está o resultado:</h2>

        <div class="result-content">
          <ul>
            <li>
              Seu metabolismo basal é de <strong> ${tbm} calorias</strong>.
            </li>
            <li>
              Para manter o seu peso você precisa consumir em média <strong>${maintenance}</strong>.
            </li>
            <li>
              Para perder peso você precisa consumir em média <strong>${loseWeight} calorias</strong>.
            </li>
            <li>
              Para ganhar peso você precisa consumir em média <strong>${gainWeight} calorias</strong>.
            </li>
          </ul>
    `
    resultContainer.innerHTML = result;

}

function clearForm() {
    age.value
    
}


