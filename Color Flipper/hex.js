const hex = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"]
const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click',function (){
    const randomHexColor = generateHexColor();
    
    document.body.style.backgroundColor = randomHexColor;
    color.textContent = randomHexColor;
});

function generateHexColor() {
    let hexColor = '#';
    for (let i = 0; i < 6; i++) {
        
        let randomIndex = Math.floor(Math.random() * hex.length) 
        hexColor += hex[randomIndex]
    }
    return hexColor;
}