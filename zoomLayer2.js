//zoom events for layer navigation
window.addEventListener("wheel", (e) => {
    console.log("wheel");
    e.preventDefault();

    // Zooming in, leads to layer3
    if (e.deltaX < 0 || e.deltaY < 0) {
        window.location.href = 'layer3.html';
    }

    // Zooming out, leads to layer 1
    if (e.deltaX > 0 || e.deltaY > 0) {
        window.location.href = 'index.html';
    }
}, { passive: false });

/*HOVERING, displays text within the box
Define content for each box, CHANGE EXPLANATION TEXTS HERE*/
var boxContents = {
    selection: {
        title: "Selection",
        explanation: "<br> How we choose crew for the mission"
    },
    chronic_stressors: {
        title: "Chronic Stressors",
        explanation: "<br> Stressors that are ever-present"
    },
    acute_stressors: {
        title: "Acute Stressors",
        explanation: "<br> Stressors that are limited in duration"
    },
    social_composition: {
        title: "Social Composition",
        explanation: "<br> Social variables for living and working with others"
    },
    individual_traits: {
        title: "Individual Traits",
        explanation: "<br> Individual traits accounting for variation, including genetics and personality. Personality traits are based on Costa and McCrea’s five-factor model of personality, based on empirical research and widely used and adapted as a measurement scale (NEO-PI-R, IPIP-NEO, IPIP-NEO-120 [used by NASA])."
    },
    resources: {
        title: "Resources",
        explanation: "<br> What we have at our disposal"
    },
    environmental_stressors: {
        title: "Environmental Stressors",
        explanation: "<br> Aspects of the environment that may be challenging"
    },
    designed_features: {
        title: "Designed Features",
        explanation: "<br> What we design for in the habitat"
    },
    operational_stressors: {
        title: "Operational Stressors",
        explanation: "<br> Challenges due to how we operate the mission"
    },
    team_processes: {
        title: "Team Processes",
        explanation: "<br> People working together to achieve a goal beyond the capabilities of each individual alone"
    },
    individual_processes: {
        title: "Individual Processes",
        explanation: "<br> Actions or activities primarily on the individual level"
    },
    behavioral_health_and_performance_outcomes: {
        title: "Behavioral Health and Performance Outcomes",
        explanation: "<br> Behavioral health and performance outcomes we care about. We do not distinguish between mood, affect, and performance outcomes due to the interrelationship between these constructs. Select constructs from Brene Brown’s Atlas of the Heart are referenced here, in addition to salient BHP outcomes for spaceflight."
    },
    // loss_of_mission: {
    //     title: "Loss of Mission",
    //     explanation: "Explanation for Loss of Mission."
    // },
    // loss_of_crew_life: {
    //     title: "Loss of Crew Life",
    //     explanation: "Explanation for Loss of Crew Life."
    // },
    // quality_of_life: {
    //     title: "Quality of Life",
    //     explanation: "Explanation for Quality of Life."
    // },
};

document.addEventListener('DOMContentLoaded', function () {
    //Get all inner box elements
    var innerBoxes = document.querySelectorAll('.box div');

    //Format text to the desired format
    function formatToLayerName(text) {
        return text.trim().toLowerCase().replace(/\s+/g, '_');
    }

    //Event listeners to each inner box
    innerBoxes.forEach(function (innerBox) {
        innerBox.addEventListener('mouseenter', function () {
            //Store the original content
            if (!innerBox.dataset.originalContent) {
                innerBox.dataset.originalContent = innerBox.innerHTML;
            }

            var boxElement = innerBox.closest('.box');

            if (boxElement) {
                //Use the text content of the hovered element as the identifier
                var layerName = formatToLayerName(innerBox.textContent);
                var content = boxContents[layerName];

                innerBox.innerHTML = `<div class="box-content"><div class="box-title">${content.title}</div><div class="box-explanation">${content.explanation}</div></div>`;
            }
        });

        innerBox.addEventListener('mouseleave', function () {
            //Restore the original content
            innerBox.innerHTML = innerBox.dataset.originalContent;
        });
    });
});
