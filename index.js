const frutas = ["maça", "banana", "melao"];
frutas.push("morango");
//console.log(frutas[2]);
for(let cont = 0;cont < frutas.length;cont++) {
    console.log('(for)', frutas[cont]);
}

    function processa(item){
        console.log('(function)', item);
    }


const retornoforEach = frutas.forEach(function(f){
    console.log('(forEach)', f);
    return f.toUpperCase();
});

const retornomap = frutas.map((f) => {
    console.log('(map)', f);
    return f.toUpperCase();
});
    frutas.forEach((f) => processa(f));
console.log(retornoforEach);
console.log(retornomap);

