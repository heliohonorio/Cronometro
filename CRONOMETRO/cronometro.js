var segundos=0
var min=0
var interval
var horas=0


function start(){
   interval= setInterval(relogio,1000)
   relogio()
}

function pause(){
    clearInterval(interval)
}

function stop(){
    clearInterval(interval)
    segundos=0
    min=0
    document.getElementById('relogio').innerText ="00:00:00"
}

function doisdigitos(digito){
    if(digito<10){
        return("0"+digito)
    }else{
        return(digito)
    }
}

function relogio(){
    segundos++
    if(segundos==60){
        min++
        segundos=0
        if(min==60){min=0
        horas++}
    }
    document.getElementById('relogio').innerText =doisdigitos(horas)+":"+doisdigitos(min)+":"+doisdigitos(segundos)

}

