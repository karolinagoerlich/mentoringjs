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
const {eachMinuteOfInterval  } = require("./utils")

describe("eachMinuteOfInterval", () => {    
    it("returns an array of dates within the specific time interval", () => {
        //arrange
        const start = new Date(Date.UTC(2021, 1, 25, 7, 0)) // date formatted into minutes
        const end = new Date(Date.UTC(2021, 1, 25, 9, 0))// date formatted into minutes
        //act
        const expectedResult = [
            new Date(Date.UTC(2021, 1, 25, 7, 0)),
            new Date(Date.UTC(2021, 1, 25, 7, 30)),
            new Date(Date.UTC(2021, 1, 25, 8, 0)),
            new Date(Date.UTC(2021, 1, 25, 8, 30)),
            new Date(Date.UTC(2021, 1, 25, 9, 0))
        ] //array of expected dates (in minutes?)
        const result = eachMinuteOfInterval({ start, end } );
        //assert
        expect(result).toEqual(expectedResult)

        //act
        const resultCustomInterval = eachMinuteOfInterval({ start, end },{step :60})
        //assert
        expect(resultCustomInterval).toEqual([
            new Date(Date.UTC(2021, 1, 25, 7, 0)),
            new Date(Date.UTC(2021, 1, 25, 8, 0)),
            new Date(Date.UTC(2021, 1, 25, 9, 0))
        ])
    })

    it("return only start date if end date is in the past", () => {
        //arrange
        const start = new Date(Date.UTC(2021, 1, 25, 7, 0))
        const end = new Date(Date.UTC(2021, 1, 24, 7, 0))
        const expectedResult = [start]
        //act
        const result = eachMinuteOfInterval({ start, end } );
        //assert
        expect(result).toEqual(expectedResult)
        })
})
