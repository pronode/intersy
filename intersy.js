window.addEventListener("DOMContentLoaded", () => {

    const addIntersectionObserver = (target) => {

        let threshold = 0.25;

        // Class-defined threshold:
        if (target.classList.contains("threshold-10")) {
            threshold = 0.1;
        } else if (target.classList.contains("threshold-50")) {
            threshold = 0.5;
        } else if (target.classList.contains("threshold-75")) {
            threshold = 0.75;
        } else if (target.classList.contains("threshold-100")) {
            threshold = 1;
        }

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("in-view");
                    entry.target.classList.add("in-view-" + Math.round(entry.intersectionRatio * 100));
                } else {
                    if (entry.target.classList.contains("once")) return;
                    entry.target.classList.remove("in-view");
                }
            });
        }, {
            threshold: threshold
        });
    
        observer.observe(target);
        target.classList.add("intersy-initialised");
    };

    document.querySelectorAll(".intersy").forEach((el) => {
        addIntersectionObserver(el);
    });

    // Setup DOMChanged observer:
    const domChangedObserver = new MutationObserver(list => {
        const evt = new CustomEvent('DOMChanged', { detail: list });
        document.dispatchEvent(evt)
    });

    domChangedObserver.observe(document, { childList: true, subtree: true });

    // Setup DOMChanged listener:
    document.addEventListener('DOMChanged', (e) => {

        // Traverse through e.detail array containing MutationRecord objects:
        e.detail.forEach((mutation) => {

            // Traverse through added nodes of each MutationRecord object:
            mutation.addedNodes.forEach((node) => {

                // Check if node has parent and add IntersectionObserver if it is not already initialised:
                if (node.parentElement?.nodeType === Node.ELEMENT_NODE) {
                    
                    node.parentElement.querySelectorAll(".intersy:not(.intersy-initialised)").forEach((el) => {
                        console.log('added')
                        addIntersectionObserver(el);
                    });
                } 
            });
        });
    });

});