
let nums =[1, 3, 2, 7, 4, 6] ;
let p = 3;
function arrayRotation(arr,numbersOfshifts){
    for(let i=0;i<numbersOfshifts;i++){
        arr.unshift(arr.pop());
        console.log('step $(i+1):',arr);
    }
}
console.log(arrayRotation(nums,p));

// oder of 3n time 
// 1 space 