// Handle wheel event for layer navigation
window.addEventListener("wheel", (e) => {
    console.log("wheel");
    e.preventDefault();

    // Zooming in, leads to layer3
    if (e.deltaX > 0 || e.deltaY > 0) {
        window.location.href = 'layer3.html';
    }

    // Zooming out, leads to layer 1
    if (e.deltaX < 0 || e.deltaY < 0) {
        window.location.href = 'index.html';
    }
}, { passive: false });


var boxContents = {
    selection: {
        title: "Selection",
        explanation: "Explanation for Selection."
    },
    chronic_stressors: {
        title: "Chronic Stressors",
        explanation: "Explanation for Chronic Stressors."
    },
    acute_stressors: {
        title: "Acute Stressors",
        explanation: "Explanation for Acute Stressors."
    },
    crew_composition: {
        title: "Crew Composition",
        explanation: "Explanation for Crew Composition."
    },
    personality_trait: {
        title: "Personality Trait",
        explanation: "Explanation for Personality Trait."
    },
    resources: {
        title: "Resources",
        explanation: "Explanation for Resources."
    },
    environmental_stressors: {
        title: "Environmental Stressors",
        explanation: "Explanation for Environmental Stressors."
    },
    designed_features: {
        title: "Designed Features",
        explanation: "Explanation for Designed Features."
    },
    operational_stressors: {
        title: "Operational Stressors",
        explanation: "Explanation for Operational Stressors."
    },
    team_processes: {
        title: "Team Processes",
        explanation: "Explanation for Team Processes."
    },
    individual_processes: {
        title: "Individual Processes",
        explanation: "Explanation for Individual Processes."
    },
    performance: {
        title: "Performance",
        explanation: "Explanation for Performance."
    },
    mood_and_effect: {
        title: "Mood and Effect",
        explanation: "Explanation for Mood & Effect."
    },
    loss_of_mission: {
        title: "Loss of Mission",
        explanation: "Explanation for Loss of Mission."
    },
    loss_of_crew_life: {
        title: "Loss of Crew Life",
        explanation: "Explanation for Loss of Crew Life."
    },
    quality_of_life: {
        title: "Quality of Life",
        explanation: "Explanation for Quality of Life."
    },
};

document.addEventListener('DOMContentLoaded', function () {
    // Get all inner box elements
    var innerBoxes = document.querySelectorAll('.box div');

    // Function to format text to the desired format
    function formatToLayerName(text) {
        return text.trim().toLowerCase().replace(/\s+/g, '_');
    }

    // Add event listeners to each inner box
    innerBoxes.forEach(function (innerBox) {
        innerBox.addEventListener('mouseenter', function () {
            // Store the original content in a data attribute
            if (!innerBox.dataset.originalContent) {
                innerBox.dataset.originalContent = innerBox.innerHTML;
            }

            var boxElement = innerBox.closest('.box');

            if (boxElement) {
                // Use the text content of the hovered element as the identifier
                var layerName = formatToLayerName(innerBox.textContent);
                var content = boxContents[layerName];

                innerBox.innerHTML = `<div class="box-content"><div class="box-title">${content.title}</div><div class="box-explanation">${content.explanation}</div></div>`;
            }
        });

        innerBox.addEventListener('mouseleave', function () {
            // Restore the original content from the data attribute
            innerBox.innerHTML = innerBox.dataset.originalContent;
        });
    });
});
