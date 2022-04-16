const table = document.createElement('table');
table.classList.add('table')
table.classList.add('table-striped')
document.body.appendChild(table);
let th;
th = document.createElement('th')
th.innerHTML = 'Кол-во операций(n)'
table.appendChild(th);

th = document.createElement('th')
th.innerHTML = 'Шаг(а)'
table.appendChild(th);

th = document.createElement('th')
th.innerHTML = 'Значение функции(y1)'
table.appendChild(th);

th = document.createElement('th')
th.innerHTML = 'Значение аргумента(х1)'
table.appendChild(th);

table.setAttribute('border','2px solid black')
table.setAttribute('cellpadding','0')
let findFunction = function(x){
    let func = Math.cos(x)+ (1/b)*Math.cos(amountOfLetters*x+1)+ (1/b**2)*Math.cos((amountOfLetters**2)*x+2)+ (1/b**3)*Math.cos(amountOfLetters*x+3)+ (1/b**4)*Math.cos(amountOfLetters*x+4);
    return func;
};

const lastName = 'Kozyrev';
const amountOfLetters = lastName.length;

let a = +prompt('Начальный шаг:')
const b = +prompt('Введите число от 2 до 10:');
if( b < 2 || b > 10 ){
    alert('Ошибка!\n b введено неверно.')
}

const cMax = 0.999
const cMin = 0.75
const aMin = 0.0001;

let y;
let y1;
let x0 = +prompt('Введите стартовую точку:')
let x1 = a*Math.random() + x0
let n = 1;
let data = [];

console.log(`Были введены значения \nначального шага(а): ${a}\nстартовой точки (x0): ${x0}\n`)
while(a>aMin){
    y = findFunction(x0);
    let c = Math.random() * (cMax - cMin) + cMin;
    a = a*c
    x1 = a*Math.random() + x0
    if( y > y1){
        x0 = x1
        let y2 = y1
        y2 = findFunction(x1);
        console.log(`Это n: ${n}\n Шаг: ${a}\n Значение функции(y1): ${y2}\n Аргумент(х) равен: ${x1}`);

        let datum = {
            number:n,
            step: a,
            value: y2,
            argument: x1,
        }
        data.push(datum);
        
    }
    else{
        y1 = findFunction(x1);
        console.log(`Это n: ${n}\n Шаг: ${a}\n Значение функции(y1): ${y1}\n Аргумент(х) равен: ${x1}`);

        let datum = {
            number:n,
            step: a,
            value: y1,
            argument: x1,
        }
        data.push(datum);
    }
    n++
}
let itemsOnPage = 10;
let items = document.body.querySelectorAll('#pagination li')
for(let item of items) {
    item.addEventListener('click', function(){
        let pageNum = +this.innerHTML
        let lastNumber = (pageNum * 10) ;
        let firstNumber = lastNumber - 10


        let notes = data.slice(firstNumber, lastNumber)
        table.innerHTML = '';
        th = document.createElement('th')
        th.setAttribute('scope','col')
        th.innerHTML = 'Кол-во операций(n)'
        table.appendChild(th);

        th = document.createElement('th')
        th.setAttribute('scope','col')
        th.innerHTML = 'Шаг(а)'
        table.appendChild(th);
        
        th = document.createElement('th')
        th.setAttribute('scope','col')
        th.innerHTML = 'Значение функции(y1)'
        table.appendChild(th);

        th = document.createElement('th')
        th.setAttribute('scope','col')
        th.innerHTML = 'Значение аргумента(х1)'
        table.appendChild(th);
        for(let note of notes){
            let tr = document.createElement('tr')
            table.appendChild(tr)
            let td;

            th = document.createElement('th')
            th.innerHTML = note.number;
            tr.appendChild(th)

            td = document.createElement('td')
            td.innerHTML = note.step
            tr.appendChild(td)

            td = document.createElement('td')
            td.innerHTML = note.value
            tr.appendChild(td)

            td = document.createElement('td')
            td.innerHTML = note.argument
            tr.appendChild(td)
            
        }
        console.log(notes)
    })
}







