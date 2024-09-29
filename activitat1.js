//Funció que compara dos números i retorna el més gran
function comparaNumeros() {
    let resultado = document.getElementById('res1');

    let num1= document.getElementById('num1').value;
    let num2= document.getElementById('num2').value;

    if (num1==='' && num2==='') alert("Has d'introduir dos números")
    else if (num1>num2) resultado.textContent=num1;
    else if (num2>num1) resultado.textContent=num2;
    else resultado.textContent=`Els números són iguals`;
}

//Funció de suma tots els números del 1 al 100 inclosos i retorna el resultat
function suma1a100() {
    let resultado = document.getElementById('res2');
    let suma = 0
    for (let i = 1; i <= 100; i++) {
        suma += i
    }
    resultado.textContent=suma
}

//Funció que mostra els números del 1 al 20 però:
//- si és múltiple de 3 surt pedra
//- si és múltiple de 5 surt paper
//- si és múltiple de 3 i 5 surt tissores
//- si no es dona cap cas surt el número que toca
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

//Funció que retorna true si un número es parell i si no retorna false
function esParell() {
    let resultado = document.getElementById('res4');
    let num = document.getElementById('num4').value;
    if (num==='') alert('Debes rellenar este campo');
    else{
        if (num % 2 == 0) resultado.textContent='true';
        else resultado.textContent='false';
    }
}

//Funció que reverteix una cadena de text
function revertirCadena() {
    let resultado = document.getElementById('res5');
    let txt = document.getElementById('txt').value;
    if (txt==='') alert('Debes rellenar este campo');
    else resultado.textContent=txt.split('').reverse().join('');
    
}

//Funció que calcula el factorial d'un número
function factorial() {
    let resultado = document.getElementById('res6');
    let num = document.getElementById('num6').value;
    let factorial = 1;
    for (let i = 1; i <= num; i++) {
        factorial *= i;
    }
    resultado.textContent=factorial
}

//Funció que donat un array de números retorna només els positius
function filtrarPositius() {
    let resultado = document.getElementById('res7');
    let num = document.getElementById('num7').value;
    let array = num.split(" ");
    let positivos = array.filter(num=>num>0);
    resultado.textContent=positivos;
}


//TODO list 
//Funció que comproba que la tasca es vàlida i que afegeix la tasca
function afegirElement() {
    let tarea = document.getElementById('tasca').value.trim();
    console.log(tarea)
    if (tarea == "") alert("Has d'afegir una tasca!")
    else crearTarea(tarea);
}

//Funció que buida la llista de tasques
function vaciarLista() {
    let lista = document.getElementById('lista');
    lista.innerHTML = "";
}

//Funció que crea tots els elements de la tasca donat el missatge
function crearTarea(mensaje) {
    let lista = document.getElementById('lista');
    
    let contenedor = crearElementTarea(mensaje);
    lista.appendChild(contenedor);

    document.getElementById('tasca').value="";
}

//Funció auxiliar per crear el contenidor de la tasca
function crearElementTarea(tasca){
    let contenedor = document.createElement('div');
    contenedor.className = 'tarea';

    let check = crearCheck();
    let label = crearLabel(tasca);
    let eliminarTarea = crearBtnEliminar(contenedor);

    contenedor.appendChild(check);
    contenedor.appendChild(label);
    contenedor.appendChild(eliminarTarea);

    return contenedor
}

//Funció que crea l'element checkbox
function crearCheck(){
    let check = document.createElement('input');
    check.type = 'checkbox';
    check.addEventListener('change', (event) =>{
        let label = event.target.nextElementSibling;
        if (event.target.checked) {
            label.className='tachar';
        } else {
            label.classList.remove('tachar');
        }
    });

    return check;
}

//Funció que crea un label
function crearLabel(tasca){
    let label = document.createElement('label');
    label.textContent=tasca;
    return label;
}

//Funció que crea el botó que elimina la tasca en concret
function crearBtnEliminar(contenedor){
    let boton = document.createElement('button');
    boton.textContent='X';
    boton.className='eliminar';

    //Afegim un event que elimina la tasca
    boton.addEventListener('click', () =>{
        contenedor.remove();
    });
    return boton;
}

//Afegim un event que accepti la tasca amb la tecla 'enter'
const inputTasca = document.getElementById('tasca');

inputTasca.addEventListener('keydown', (event)=>{
    if (event.key ==='Enter') afegirElement();
})