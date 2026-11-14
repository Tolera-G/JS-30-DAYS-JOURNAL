# Day 03: Type conversion, operators and comparisons

Date: 

## Answers to the questions

**What does Number("") return? What about Number("ten")?**
Number("") returns 0. Number("ten") returns NaN, because "ten" is not a number JavaScript can read.

**Why does + behave differently with strings than - does?**
When either side of + is a string, + joins text. Minus has no text meaning, so it converts both sides to numbers and subtracts.

**What is the difference between == and ===?**
== converts the types before comparing. === compares without converting, so the types must match. I prefer === because it avoids surprises.

**What is NaN, and why is NaN === NaN false?**
NaN means "not a number". It is the result of an invalid number operation. NaN is never equal to anything, including itself.

**Why does Number.isNaN() exist?**
Since NaN === NaN is false, I can't check for NaN with ===. Number.isNaN(value) is the correct check.

## Practice: I expected / I got / because

| Code | Result | Why |
| --- | --- | --- |
| "10" + 5 | "105" | + joins when one side is text |
| "10" - 5 | 5 | - converts text to a number |
| "10" * "2" | 20 | * converts both to numbers |
| Number("ten") | NaN | "ten" is not a valid number |
| Number("") | 0 | empty text becomes 0 |
| Number("  42  ") | 42 | spaces around digits are ignored |
| 5 === "5" | false | different types |
| 5 == "5" | true | == converts the text to a number first |
| 0 == false | true | == converts false to 0 |
| 0 === false | false | different types |
| Number.isNaN(Number("ten")) | true | the conversion gave NaN |
| 10 % 3 | 1 | remainder after division |

(In my own run I expected __ for the ones I got wrong.)

## Experiment

I left one value as a string in the total. The result was "800400600100" instead of 1900, because + joined the text instead of adding.

## Today I learned

## Something that confused me

## What I can explain without help

## Bug or challenge, and how I solved it
I reassigned a const, so the script crashed. Number() returns a value, so I have to store it.

## Tomorrow's first task