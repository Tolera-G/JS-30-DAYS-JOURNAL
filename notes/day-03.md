# DAY-03
# TOPIC: Type conversion, operators and comparisons
QuQuestions your notes must answer:

What does Number("") return? What about Number("ten")?
 - alert( Number('')) returns 0; where as returns Nan
Why does + behave differently with strings than - does?
-+ used to concatenate strings where as - does not.
What is the difference between == and ===?
-==is normal equality sign it performs test by changing any type to number type, where as === is strict equality sign which does equality test without changing variable type. 
What is NaN, and why is NaN === NaN false?
-In JavaScript, NaN stands for "Not-a-Number". Despite its name, it is a special numeric value representing the result of an invalid or undefined mathematical operation—such as trying to parse a non-numeric string with Number().
NaN === NaN is false because NaN is not equal to any value, including itself.
Why does Number.isNaN() exist?
Number. isNaN() does not type coercion. It strictly checks two conditions:
  is the value of the number type?
  is the value equal to NaN ?
  