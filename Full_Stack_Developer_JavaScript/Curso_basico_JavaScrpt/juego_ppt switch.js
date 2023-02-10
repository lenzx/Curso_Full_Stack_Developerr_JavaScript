//piedra 1,papel 2,tijera 3

var maquina = Math.ceil(Math.random()*3);
var numero = maquina

function elejir(x) {
    switch(x) {
        case 'piedra':
            return 1;
            break;

        case 'papel':
            return 2;
            break;

        case 'tijera':
            return 3;
            break;
        
        default:
            console.log('error')
            
    }
}

function jugar(x) {
    switch(elejir(x)){
        case 1:
            switch(numero){
                case 1:
                    console.log('empate');
                    break;
                case 2:
                    console.log('pierdes');
                    break;
                case 3:
                    console.log(' ganas');
                    break;
                default:
                    console.log('error');
            }
            break;
        case 2:
            switch(numero){
                case 1:
                    console.log('ganas');
                    break;
                case 2:
                    console.log('empate');
                    break;
                case 3:
                    console.log(' pierdes');
                    break;
                default:
                    console.log('error');                  
            }
            break;  
        case 3:
            switch(numero){
                case 1:
                    console.log('pierdes');
                    break;
                case 2:
                    console.log('ganas');
                    break;
                case 3:
                    console.log(' empate');
                    break;
                default:
                    console.log('error');

            }
            break;
        }
}
    
jugar("piedra")
console.log('eleccion maquina: ' + numero)