//20. An array is a list of items 
my_array = [1,2,3];
console.log(my_array);

// 22. Sorting algorithm
// let array_sort = [3,8,1,2,1,0,9,7];
// const left_index = 0;
// const right_index = (array_sort.length) - 1
// const middle_index = (left_index+right_index)/2


// ask for the array
selection_sort = (array_to_sort) => {
// loop from 0 to n	
    for(let i=0; i<array_to_sort.length; i++) {
// 
    let low = i;
	for(let j=i+1; j < array_to_sort.length; j++) {
		if(array_to_sort[j] < array_to_sort[low]) {
			low = j;
		}
	}
	if(low != i) {
		let temp = array_to_sort[i];
		array_to_sort[i] = array_to_sort[low];
		array_to_sort[low] = temp;
	}
   }
   return array_to_sort;
}

const example = selection_sort([1,3,4,2,3]);
console.log(example);

const example2 = selection_sort([2,8,7,9,7,8,2,4,2,3,1,2,1])
console.log(example2);
