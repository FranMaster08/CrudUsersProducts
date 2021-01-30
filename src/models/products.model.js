const dbProducts = []

let addItem = (item) => {
    dbProducts.push(item)
}

let deleteItem = (item) => {
    let indiceBuscado = -1;//0
    for (let index = 0; index < dbProducts.length; index++) {
        //0
        const element = dbProducts[index];
        //element=re
        if (element == item) {
            indiceBuscado = index//0
        }
    }
    //0
    if (indiceBuscado == -1) {
        console.log('No se encontro ningun elemento')
    } else {
        dbProducts[indiceBuscado]=null
        console.log('Se borro con exito este elemento')
    }



}

let UpdateItem = (oldItem, newItem) => {
    let indiceBuscado=-1;
    for (let index = 0; index < dbProducts.length; index++) {
        const element = dbProducts[index];
        if(element==oldItem){
            indiceBuscado=index;
        }        
    }
    if(indiceBuscado==-1){
        console.log('No existe este elemento');
    }else{
        dbProducts[indiceBuscado]=newItem;
        console.log('Se actualizo con exito.');
    }
}

let ClearArray = () => {
    for (let index = 0; index < dbProducts.length; index++) {
       dbProducts.pop()        
    }
}

module.exports={addItem,deleteItem,UpdateItem,ClearArray,getAll}