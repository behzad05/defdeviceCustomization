console.log("test 29");
// Function to hide all target elements when they appear
function hideTargetElements(selectors) {
    selectors.forEach((selector) => {
        const element = document.querySelector(selector);
        if (element) {
            element.style.display = "none"; // Hide the element
            console.log(`Element with selector "${selector}" hidden successfully.`);
        } else {
            console.log(`Element with selector "${selector}" not found.`);
        }
    });
}

// Array of selectors for elements to hide
const selectorsToHide = [
    
];

// Function to initialize MutationObserver and watch for changes in the DOM
function observeDomChangesAndHideElements(selectors) {
    // Create a Mutation Observer to watch for changes in the DOM
    const observer = new MutationObserver(function (mutations) {
        mutations.forEach(function () {
            hideTargetElements(selectors); // Call the function to hide elements whenever there's a change in the DOM
        });
    });

    // Start observing the body for changes in child elements
    observer.observe(document.body, {
        childList: true,
        subtree: true,
    });

    // Run the function once initially in case the elements are already present
    hideTargetElements(selectors);
    console.log("Observer initialized, watching for DOM changes to hide elements.");
}

// Call the function to observe and hide elements
observeDomChangesAndHideElements(selectorsToHide);
