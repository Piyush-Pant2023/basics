function sortElements() {
    // Array containing elements from 1 to 10
    let elements = [5, 2, 8, 1, 7, 10, 4, 3, 6, 9];

    // Sort the array
    elements.sort(function(a, b) {
        return a - b;
    });

    // Display the sorted elements
    displayResult(elements);
}

function displayResult(sortedElements) {
    const resultParagraph = document.getElementById("result");
    resultParagraph.innerHTML = "Sorted Elements: " + sortedElements.join(", ");
}