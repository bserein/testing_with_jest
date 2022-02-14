
const {sum, square, cube} = require("./index");

describe("Should contain a tests for sum",() => {
    // ^^means all the tests should be considered together "test sweep", all below relate to test sweep
    it("should add 2 number", () => {
        //Arrange 
        const a = 4
        const b = 6
        const expected = a + b //or you could put 10

        //Act
        const actual = sum(a, b)
        //Assert
        expect(actual).toBe(expected)
        //^kind of describes what its going to do
    })

    it("should return an error for invalid inputs", () => {
        //Arrange 
        const a = null
        const b = 6
        const expected = "Invalid Input";

        //Act
        const actual = sum(a, b)
        //Assert
        expect(actual).toBe(expected)
        
    })
})

describe("should contain tests for square", () => {
    it("should square a number", () => {
        //Arrange
        const num = 8
        const expected = 64
        //Act
        const actual = square(num)
        //Assert
        expect(actual).toBe(expected)
    })

    it("should return an error for an invalid inputs", () => {
        //Arrange
        const num = null
        const expected = "Invalid Input"
        //Act
        const actual = square(num)
        //Assert
        expect(actual).toBe(expected)
    })
})


describe("should contain tests for cube", () => {
    it("should cube a number", () => {
        //Arrange
        const number = 2
        const expected = 8
        //Act
        const actual = cube(number)
        //Assert
        expect(actual).toBe(expected)
    })

    it("should return an error for an invalid inputs", () => {
        //Arrange
        const number = null
        const expected = "Invalid Input"
        //Act
        const actual = cube(number)
        //Assert
        expect(actual).toBe(expected)
    })
})

// yarn init -y <-- you do this instead of npm init because its more efficient 
// yarn add --dev jest <-- to download the jest and get started
//to run the test you do --> yarn jest
//yarn add --dev @types/jest <-- so it can give you all the methods you can use with 'expect' and essentially 'jest'
//if you add the 'f' in front of 'it' so it would say 'fit' and it will skip the other tests and only test the one with 'fit'