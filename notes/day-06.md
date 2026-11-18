Questions your notes must answer by the end of the reading:

1. What does document.getElementById("income") return, and what is it when the id doesn’t exist?
It returns the element object that matches the specified id in this case the HTML element with id=income. when the id does not exist it returns null.
2. What does an input’s .value give you: a number or a string?
-It always gives you a strung. 
3. What is the difference between textContent and value?
textContent is used for display elements (like paragraphs [<p>](https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent), headings, or divs). It gets or sets the visible text content inside an HTML element.

value is used for form elements (like <input>, <textarea>, or <select>). It gets or sets the current text typed or selected inside that interactive form field.
4. In button.addEventListener("click", handler), who calls handler, and when?
