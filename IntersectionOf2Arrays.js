let array1 = [1, 2, 3, 4, 5];
let array2 = [3, 4, 5, 6, 7];
let result = findIntersection(array1, array2);
console.log("Result: "+result);
console.log("Intersection:", result); 
function findIntersection(array1,array2){
    let set1 = new Set(array1);
    let intersection = array2.filter(item =>{
        return set1.has(item);
    });
    return intersection;
}