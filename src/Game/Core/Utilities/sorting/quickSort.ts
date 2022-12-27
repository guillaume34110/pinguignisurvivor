//faster quicksort using a stack to eliminate recursion, sorting inplace to reduce memory usage, and using insertion sort for small partition sizes


function insertion_sort(ary: number[]) {
    for(var i=1,l=ary.length;i<l;i++) {
        var value = ary[i];
        for(var j=i - 1;j>=0;j--) {
            if(ary[j] <= value)
                break;
            ary[j+1] = ary[j];
        }
        ary[j+1] = value;
    }
    return ary;
}

function swap(ary:number[], a:number, b:number) {
    var t = ary[a];
    ary[a] = ary[b];
    ary[b] = t;
}

function inplace_quicksort_partition(ary:number[], start:number, end:number, pivotIndex:number) {
    var i = start, j = end;
    var pivot = ary[pivotIndex];
    
    while(true) {
        while(ary[i] < pivot) {i++};
        j--;
        while(pivot < ary[j]) {j--};
        if(!(i<j)) {
            return i;
        }
        swap(ary,i,j);
        i++;
   }
}


export function fast_quicksort(ary:number[]) {
    const stack = [];
    var entry = [0,ary.length,2 * Math.floor(Math.log(ary.length)/Math.log(2))];
    stack.push(entry);
    while(stack.length > 0) {
       // @ts-ignore
        entry = stack.pop(); 
        var start = entry[0];
        var end = entry[1];
        var depth = entry[2];
        if(depth === 0) {
         ary = shell_sort_bound(ary,start,end);
         continue;
        }
        depth--;
        var pivot = ~~((start + end) / 2);
            
        var pivotNewIndex = inplace_quicksort_partition(ary,start,end, pivot);
        if(end - pivotNewIndex > 16) {
            entry = [pivotNewIndex,end,depth];
            stack.push(entry);
        }
        if(pivotNewIndex - start > 16) {
            entry = [start,pivotNewIndex,depth];
            stack.push(entry);
        }
    }
    ary = insertion_sort(ary);
    return ary;
}

function shell_sort_bound(ary:number[],start:number,end:number) {
    var inc = ~~((start + end)/2),
        i, j, t;

    while (inc >= start) {
        for (i = inc; i < end; i++) {
            t = ary[i];
            j = i;
            while (j >= inc && ary[j - inc] > t) {
                ary[j] = ary[j - inc];
                j -= inc;
            }
            ary[j] = t;
        }
        inc = ~~(inc / 2.2);
    }

    return ary;
}



/*simple*/

function partition(arr: number[][], start: number, end: number) : number{
    const pivotValue = arr[start][0]
    let swapIndex = start
    for (let i = start + 1; i <= end; i++) {
      if (pivotValue > arr[i][0]) {
        swapIndex++
        if (i !== swapIndex) {
          // SWAP
          ;[arr[i], arr[swapIndex]] = [arr[swapIndex], arr[i]]
        }
      }
    }
    if (swapIndex !== start) {
      // Swap pivot into correct place
      ;[arr[swapIndex], arr[start]] = [arr[start], arr[swapIndex]]
    }
    return swapIndex
  }

  export function easyQuickSort(arr : number[][], start = 0, end = arr.length - 1) : number[][] {
    // Base case
    if (start >= end) return []
    let pivotIndex = partition(arr, start, end)
    // Left
    easyQuickSort(arr, start, pivotIndex - 1)
    // Right
    easyQuickSort(arr, pivotIndex + 1, end)
    return arr
  }