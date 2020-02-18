import { Calculadora } from "../calculadora"

describe("calculadora", () => {
    it("suma correcta", () => {
        let resEsperdo = 5
        let calc = new Calculadora()
        let resObtenido = calc.sumar(3,2)

        expect(resEsperdo).toEqual(resObtenido)
    })
})