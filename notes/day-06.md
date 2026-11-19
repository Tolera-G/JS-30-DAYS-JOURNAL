# Day 06: Your first interactive page

Date: 2026-11-19
Project: Budget Calculator (Week 1)

---

## 1. Today I learned

### Selecting elements
- `document.getElementById("income")` returns the **element object** with that id.
- If the id doesn't exist, it returns **`null`**. A typo in the id is the usual cause.
- Select every element **once, at the top** of the script. This is safe because the script is linked with `defer`.

### Reading and writing the page
| Property | Used on | Purpose |
| --- | --- | --- |
| `.value` | form fields (`<input>`, `<textarea>`, `<select>`) | Get or set what the user typed or selected. **Always a string.** |
| `.textContent` | display elements (`<p>`, `<strong>`, `<div>`) | Get or set the visible text. |
| `.classList.add / remove` | any element | Change CSS classes (here: `within`, `exact`, `over`). |

### Events
- `button.addEventListener("click", handler)`: **the browser** calls `handler` automatically at the moment a click happens.
- Pass the function **without** `()`. With `()` it would run immediately instead of on click.

### Trap: empty input
- `Number("")` is `0`, **not** `NaN`. An empty field would silently count as zero.
- So check for empty text (`.trim() === ""`) **before** converting.

---

## 2. Questions from the reading

1. **What does `document.getElementById("income")` return, and what if the id doesn't exist?**
   It returns the HTML element with `id="income"`. If the id doesn't exist, it returns `null`.
2. **Does an input's `.value` give a number or a string?**
   Always a string.
3. **What is the difference between `textContent` and `value`?**
   `textContent` is for display elements and gets or sets their visible text. `value` is for form fields and gets or sets what the user typed or selected.
4. **In `button.addEventListener("click", handler)`, who calls `handler`, and when?**
   The browser, automatically, the moment a click happens on that button.

---

## 3. How `script.js` is organised

```
// 1. DOM ELEMENTS       select everything once
// 2. LOGIC FUNCTIONS    calculateTotal, calculateBalance, getStatus
// 3. HELPER FUNCTIONS   isInvalid, readAmount
// 4. MAIN HANDLER       handleCalculate
// 5. EVENT LISTENER     connect the button
```

### Flow when the user clicks Calculate
1. Read each input with `readAmount(input)`, which returns a number or `NaN`.
2. If any value is `NaN`: show an error, reset results to `"-"`, remove status classes, and `return`.
3. Otherwise: clear the message, calculate, write the results with `textContent`, and set the status class.

### Patterns worth remembering
```js
// A helper takes an input and RETURNS a clean value
function readAmount(inputElement) {
  const text = inputElement.value;
  if (isInvalid(text)) return NaN;
  return Number(text);
}

// Clear old classes before adding the new one
statusEl.classList.remove("within", "exact", "over");
statusEl.classList.add("within");
```

---

## 4. Something that confused me

Connecting the pieces: my helper function, my validation and my click handler were each written, but they weren't wired together.

---

## 5. Bug or challenge, and how I solved it

My mistakes:

| Mistake | Why it broke | Fix |
| --- | --- | --- |
| Variable names didn't match (`messageInput` declared, `messageEl` used) | `ReferenceError: messageEl is not defined` | Use one naming style and the exact same name everywhere |
| Typo in a name (`total_Expensesnput`) | Same as above | Check the Console for the first red error |
| `readAmount()` took no parameter and had no `return` | It returned `undefined`, so the input was ignored | It takes an element and **returns** a number or `NaN` |
| Leftover Day 4 `if/else` block outside any function | It ran at page load and crashed (`income1` not defined) | Move validation inside `handleCalculate` and delete the old block |
| A crash earlier in the file | The last line (`addEventListener`) never ran, so the button did nothing | **One error stops the whole script.** Fix the first error in the Console. |
| Validation (`isInvalid`) was never connected | It had no effect on the page | Call it inside `readAmount` |

**Lesson:** when a button does nothing, open the Console first. The first red error is usually the cause.

---

## 6. What I can explain without help

- [ ] Why `.value` is always a string and must be converted with `Number()`
- [ ] Why `Number("")` is a trap and how I handle it
- [ ] Who calls an event handler, and why I write `handler` without `()`
- [ ] Why I remove old classes before adding a new one
- [ ] Why `return` in a helper matters (`undefined` otherwise)

Tick each box only when I can say it aloud without notes.

---

## 7. Tests to run

| Test | Expected |
| --- | --- |
| Total expenses less than income | Within budget (green) |
| Total expenses equal to income | Budget fully used (amber) |
| Total expenses more than income | Over budget (red) |
| One field empty | Error message, results reset to `-` |
| `abc` in a field | Same error |
| Two clicks with different values | Colour updates, no leftover class |

---

## 8. Tomorrow's first task (Day 7)

- Retype `script.js` from memory, without looking at the corrected version.
- Answer the four warm-up questions without notes.
- Test edge cases and write the README.