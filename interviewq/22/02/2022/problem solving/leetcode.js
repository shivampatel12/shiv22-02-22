// two sum 

 function myfun(nums,target){
    for ( let i =0; i<nums.length;i++){
        for (let j = i+1; j<nums.length;i++ ){
            if ( nums[i]+nums[j]===target){
                return [i , j]
            }
        }
    }
}

// remove element 

var removeElement = function(nums, val) {
    let result =0;
              for(let i =0; i <nums.length; i++){
                  if (nums[i] !== val){
                      nums[result]= nums[i];
                      result++
                  }
              }
              return result
  };

  // search insert position

  var searchInsert = function(nums, target) {
    
    for (let i =0; i<nums.length;i++){
        if(nums[i] >= target){
            return  i
        }
    }
    return nums.length
    
};
