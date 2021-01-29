
const dbusers = []

let addItem = (item) => {
    dbusers.push(item)
}

let deleteItem = (item) => {
    let indiceBuscado = -1;//0
    for (let index = 0; index < dbusers.length; index++) {
        //0
        const element = dbusers[index];
        //element=re
        if (element == item) {
            indiceBuscado = index//0
        }
    }
    //0
    if (indiceBuscado == -1) {
        console.log('No se encontro ningun elemento')
    } else {
        dbusers[indiceBuscado]=null
        console.log('Se borro con exito este elemento')
    }



}

let UpdateItem = (oldItem, newItem) => {
    let indiceBuscado=-1;
    for (let index = 0; index < dbusers.length; index++) {
        const element = dbusers[index];
        if(element==oldItem){
            indiceBuscado=index;
        }        
    }
    if(indiceBuscado==-1){
        console.log('No existe este elemento');
    }else{
        dbusers[indiceBuscado]=newItem;
        console.log('Se actualizo con exito.');
    }
}

let ClearArray = () => {
    for (let index = 0; index < dbusers.length; index++) {
       dbusers.pop()        
    }
}