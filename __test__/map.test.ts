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
})