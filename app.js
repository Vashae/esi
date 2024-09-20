let cash = 30 
let price = 40
let isstoreopen = true

let str = cash > price ? 'give receipt' : 'no receipt'
console.log(str)

//let count = 1
//while  (count <= 100) {
    //console.log(count) 
   // count = count + 1; }
for ( let i = 1; i <= 20; i++)
    if (i % 3 === 0 && i % 5 === 0)
        {
            console.log (`${i} -> Frontend Simplifed`)
        }    
else if (i % 3 === 0) {
   { console.log (`${i} -> Frontend`)}
}

  
 else if (i % 5 === 0) {
{ console.log (`${i} -> Simplified`)}

}
else {console.log (`${i}->${i}`)}


const stre  = "Frontend Simplified"
for (let i = 0; i < stre.length; i++)
{
    console.log (stre[i])

}
function celsui(celsius)
{return celsius * 1.8 +32}
console.log (celsui(0))

let arr =[`A+`, `A`, `Fail`]
let newarr = arr.filter(element => element !== 'Fail')
console.log (newarr)

let dollars = [1, 5, 10, 3];
let newar = dollars.map (elements => elements * 100)
console.log (newar)

console.log (document.querySelector('h1'));
console.log (document.getElementById('title'))

function change (){
    document.querySelector('h1').style.color = 'red'
    console.log('clicked');
}