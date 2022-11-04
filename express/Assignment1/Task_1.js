const lonely = [4,5,9,3,9,4,5,79,0,7,7];
const result = lonely.filter(value => {
    var count = 0;
    for (let i = 0; i < lonely.length; i++) {
        if (lonely[i] === value) 
            count++;
             
    } return count===1;
})
console.log(result);
