
//refaire avec deux objets 

export const hitBoxMatch = (x1:number, x2:number, y1:number, y2:number, w1:number, w2:number, h1:number, h2:number) => {
 
    if (x1 < x2 + w2 && x1 + w1 > x2 && y1 < y2 + h2 && y1 + h1 > y2) {
       return true //hit
    }
    return false
}