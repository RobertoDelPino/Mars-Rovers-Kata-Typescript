
export class Map{
    max_x: number;
    min_x = 0
    min_y = 0;
    max_y: number

    private constructor(x: number, y: number){
        this.max_x = x;
        this.max_y = y
    }

    static createMap(coordinates: string){
        
        const separatedCoordinates = coordinates.split(",")

        this.notContainNumbers(separatedCoordinates)
        this.containNegativeNumbers(separatedCoordinates)

        const x = parseInt(separatedCoordinates[0])
        const y = parseInt(separatedCoordinates[1])
        
        return new Map(x,y)
    }

    static containNegativeNumbers(separatedCoordinates: string[]){

        const result = separatedCoordinates.some(value => parseFloat(value) < 0) 
        if(result){
            throw new Error("Coordinate cannot contain negative numbers")
        }
    }

    static notContainNumbers(separatedCoordinates: string[]){
        separatedCoordinates.forEach(coordinate => {
            const num = parseFloat(coordinate)
            if(isNaN(num)){
                throw new Error(coordinate + " is not a number")
            }
        });
    }
}