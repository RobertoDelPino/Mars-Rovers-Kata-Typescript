import { Map } from "../src/map"

/*

  Para crear el mapa, string de una linea: "numero,numero"
    1. Comprobar que son números
    2. Comprobar que los números son mayores o iguales a 0

*/

describe("Map should", () => {
    it("create a map", () => {
        const map = Map.createMap("1,2")
        expect(map).toBeTruthy()
    })

    it("throw error if coordinates are not numbers", () => {
        expect(() => Map.createMap("1,r")).toThrowError("r is not a number")
    })

    it("throw error if x or y are less than 0", () => {
        expect(() => Map.createMap("-1,1")).toThrowError("Coordinate cannot contain negative numbers")
    })

    it("create a map with correct numbers", () => {
        const map = Map.createMap("1,2")
        expect(map.max_x).toBe(1)
        expect(map.max_y).toBe(2)
    })

    it("throw error if coordinate contain more than two numbers", () => {
        expect(() => Map.createMap("1,1,1")).toThrowError("Coordinate cannot contain more than two numbers")
    })
})