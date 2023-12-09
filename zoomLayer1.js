window.addEventListener("wheel",
    (e)=> {
        e.preventDefault();
        /*zooming in, leads to layer2 */
        if (e.deltaX > 0){
            window.location.href = 'layer2.html';
        }
        if (e.deltaY > 0){
            window.location.href = 'layer2.html';
        }
    },
    {passive:false}
    );

/*HOVERING, displays text within the box*/
// Get all box elements
var boxes = document.querySelectorAll('.box');

// Get the box container element
var boxContainer = document.querySelector('.container');

// Define content for each box
var boxContents = {
    box1: {
        title: "Mission Parameters",
        explanation: "Explanation for Mission Parameters."
    },
    box2: {
        title: "Mediator Variables",
        explanation: "Explanation for Mediator Variables."
    },
    box3: {
        title: "Processes",
        explanation: "Explanation for Processes."
    },
    box4: {
        title: "Outcomes",
        explanation: "Explanation for Outcomes."
    },
    box5: {
        title: "Mission Success",
        explanation: "Explanation for Mission Success."
    }
};

// Add event listeners to each box
boxes.forEach(function (box) {
    box.addEventListener('mouseover', function () {
        var boxId = box.classList[1]; // Assumes the class of the box follows the pattern 'boxX'
        var content = boxContents[boxId];

        // Update content inside the box with padding and more space
        box.querySelector('.content').innerHTML = `<div class="box-title">${content.title}</div><div class="box-explanation">${content.explanation}</div>`;
    });

    box.addEventListener('mouseout', function () {
        // Reset content inside the box
        var boxId = box.classList[1];
        var originalContent = boxContents[boxId].title;
        box.querySelector('.content').innerHTML = originalContent;
    });
});
