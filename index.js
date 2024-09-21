console.log("test 21");
(function () {
    // Function to hide all target elements when they appear
    function hideTargetElements() {
        const selectors = [
            "#main-app > div > div > div > div > div.grid.grid-cols-2.lg\\:grid-cols-4.gap-3.mb-6 > div:nth-child(1)"
        ];

        selectors.forEach((selector, index) => {
            const element = document.querySelector(selector);
            if (element) {
                element.style.display = "none";  // Hide the element
                console.log(`Element ${index + 1} hidden successfully`);
            } else {
                console.log(`Element ${index + 1} not found.`);
            }
        });
    }

    // Create a Mutation Observer to watch for changes in the DOM
    const observer = new MutationObserver(function (mutations) {
        mutations.forEach(function () {
            hideTargetElements(); // Call the function whenever there's a change in the DOM
        });
    });

    // Start observing the body for changes in child elements
    observer.observe(document.body, {
        childList: true,
        subtree: true,
    });

    // Run the function once initially in case the elements are already present
    hideTargetElements();
})();
