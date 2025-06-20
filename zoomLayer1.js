/*zooming in and out to switch between layers*/
window.addEventListener("wheel",
    (e)=> {
        // Check if zoom navigation is allowed
        if (window.zoomControls) {
            // Only allow zoom if normal zoom is enabled or walkthrough zoom is enabled and we're zooming in
            const isZoomingIn = (e.deltaX < 0 || e.deltaY < 0);
            const isZoomingOut = (e.deltaX > 0 || e.deltaY > 0);
            
            if ((!window.zoomControls.normalZoom.allow && !window.zoomControls.walkthroughZoom.allow) ||
                (isZoomingOut && window.zoomControls.walkthroughZoom.allow)) {
                e.preventDefault();
                e.stopPropagation();
                return false;
            }
        }
        
        e.preventDefault();
        /*zooming in, leads to layer2 */
        if (e.deltaX < 0 || e.deltaY < 0) {
            window.location.href = 'layer2.html';
        }
    },
    {passive: false, capture: true}
);

// Functions to handle the pop-up box
function showPopup() {
    var popup = document.getElementById("popup");
    if (popup) {
        popup.style.display = "block";
    }
}

function closePopup() {
    var popup = document.getElementById("popup");
    if (popup) {
        popup.style.display = "none";
    }
}


// Define content for each box, CHANGE EXPLANATION TEXTS HERE
const boxContents = {
    box1: {
        title: "Mission Parameters",
        explanation: "Aspects of the planned mission"
    },
    box2: {
        title: "Mediator Variables",
        explanation: "Design factors that influence processes and outcomes"
    },
    box3: {
        title: "Processes",
        explanation: "Time-dependent activities on team and individual levels"
    },
    box4: {
        title: "Outcomes",
        explanation: "Behavioral health and performance outcomes we care about"
    },
    box5: {
        title: "Mission Success",
        explanation: "Explanation for Mission Success."
    }
};

// Initialize boxes with both title and explanation (hidden by default)
document.addEventListener('DOMContentLoaded', function() {
    const boxes = document.querySelectorAll('.box');
    
    boxes.forEach(box => {
        const boxId = box.classList[1];
        const content = boxContents[boxId];
        if (content) {
            box.querySelector('.content').innerHTML = `
                <div class="box-title">${content.title}</div>
                <div class="box-explanation">${content.explanation}</div>
            `;
        }
    });

    // Add hover class to parent box for CSS transitions
    boxes.forEach(box => {
        box.addEventListener('mouseenter', () => {
            box.classList.add('hovered');
        });
        
        box.addEventListener('mouseleave', () => {
            box.classList.remove('hovered');
        });
    });
});
