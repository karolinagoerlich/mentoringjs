const {calculateGermanSunriseSunsetForDate  } = require("./utils")

describe("calculateGermanSunriseSunsetForDate", () => {    
    it("returns Germany sunrise and sunset for a date", () => {
        // arrange 
        const expectedResult = { sunrise: '07:12', sunset: '17:52' }
        const date = new Date(Date.UTC(2021, 1, 25, 7, 0))
        // act
        const result = calculateGermanSunriseSunsetForDate(date)
        // assert
        expect(result).toEqual(expectedResult)
    })

    it("throws error if no valid date is provided", () => {
        expect(() => {
            calculateGermanSunriseSunsetForDate()
            calculateGermanSunriseSunsetForDate(null)
            calculateGermanSunriseSunsetForDate(undefined)
            calculateGermanSunriseSunsetForDate("2021-02-02")
        }).toThrow(Error("invalid operation"))
    })
})