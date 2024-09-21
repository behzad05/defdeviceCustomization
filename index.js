console.log("test 25");
(function () {
    // Function to hide all target elements when they appear
    function hideTargetElements() {
        console.log("function ran")
        const selectors = [
            "#main-app > div > div > div > div > div.grid.grid-cols-2.lg\\:grid-cols-4.gap-3.mb-6 > div:nth-child(1)",
            "#main-app > div > div > div > div > div.grid.grid-cols-2.lg\\:grid-cols-4.gap-3.mb-6"
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



    // Run the function once initially in case the elements are already present
    setInterval(hideTargetElements, 2000);
})();
