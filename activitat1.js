function comparaNumeros() {
    let resultado = document.getElementById('res1');

    let num1= document.getElementById('num1').value;
    let num2= document.getElementById('num2').value;

    if (num1==='' && num2==='') alert("Has d'introduir dos números")
    else if (num1>num2) resultado.textContent=num1;
    else if (num2>num1) resultado.textContent=num2;
    else resultado.textContent=`Els números són iguals`;
}

function suma1a100() {
    let resultado = document.getElementById('res2');
    let suma = 0
    for (let i = 1; i <= 100; i++) {
        suma += i
    }
    resultado.textContent=suma
}

function pedraPaper() {
    let resultado = document.getElementById('res3');
            resultado.innerHTML = ''; 
            for (let i = 1; i <= 20; i++) {
                let valor = '';
                if (i % 3 == 0 && i % 5 == 0) valor = '✂️';
                else if (i % 3 == 0) valor = '🪨';
                else if (i % 5 == 0) valor = '📰';
                else valor = i;
                
                resultado.innerHTML += valor + '   ';
            }
}

function esParell() {
    let resultado = document.getElementById('res4');
    let num = document.getElementById('num4').value;
    if (num==='') alert('Debes rellenar este campo');
    else{
        if (num % 2 == 0) resultado.textContent='true';
        else resultado.textContent='false';
    }
}

function revertirCadena() {
    let resultado = document.getElementById('res5');
    let txt = document.getElementById('txt').value;
    if (txt==='') alert('Debes rellenar este campo');
    else resultado.textContent=txt.split('').reverse().join('');
    
}

function factorial() {
    let resultado = document.getElementById('res6');
    let num = document.getElementById('num6').value;
    let factorial = 1;
    for (let i = 1; i <= num; i++) {
        factorial *= i;
    }
    resultado.textContent=factorial
}

function filtrarPositius() {
    let resultado = document.getElementById('res7');
    let num = document.getElementById('num7').value;
    let array = num.split(" ");
    let positivos = array.filter(num=>num>0);
    resultado.textContent=positivos;
}


//TODO list 
//Funcion que añade tarea
function afegirElement() {
    let tarea = document.getElementById('tasca').value;
    console.log(tarea)
    if (tarea == "") alert("Has d'afegir una tasca!")
    else crearTarea(tarea);
}

//Función que vacía la lista
function vaciarLista() {
    let lista = document.getElementById('lista');
    lista.innerHTML = "";
}

function crearTarea(mensaje) {
    let lista = document.getElementById('lista');
    let check = document.createElement('input');
    let eliminarTarea = document.createElement('button');
    eliminarTarea.textContent = 'X';
    eliminarTarea.className = 'eliminar';
    check.type = 'checkbox';
    let label = document.createElement('label');
    let li = document.createElement('div');
    li.className = 'tarea';
    li.appendChild(check);
    li.appendChild(label);
    li.appendChild(eliminarTarea);
    label.textContent = mensaje;
    lista.appendChild(li);
    document.getElementById('tasca').value = "";
    check.addEventListener('change', () => {
        if (check.checked) {
            label.style.textDecoration = 'line-through';
            label.style.color='grey';
        } else {
            label.style.textDecoration = 'none';
            label.style.color='white';
        }
    })
    eliminarTarea.addEventListener('click', () => {
        li.remove();
    })
}