

export function binarySearch(arr: number[][], min: number, max: number): number[][] {
    
        let results : number[] = []
    for (let i = 0; i <= 1; i++) {
        let val = 0
        if (i===0) val = min 
        else val = max
         let end = arr.length - 1
        let start = 0
        while (start <= end) {
            let mid = Math.floor((start + end) / 2);
            if (i === 0 && arr[mid][0] > val) {
                results.push(mid)
            }else if (i === 1 && arr[mid][0] < val) {
                results.push(mid)
            }

            if (val < arr[mid][0]) {
                end = mid - 1;
            } else {
                start = mid + 1;
            }
        }
    }
 
   const  resultMinIndex =  Math.min(...results)
   const resultMaxIndex = Math.max(...results) + 1

return arr.slice(resultMinIndex , resultMaxIndex);
}