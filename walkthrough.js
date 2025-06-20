// Function to get current cursor position
function getCursorPosition() {
    return { x: lastMouseX, y: lastMouseY };
}

// Initialize cursor position at center
let lastMouseX = window.innerWidth / 2;
let lastMouseY = window.innerHeight / 2;

// Update cursor position on mousemove
document.addEventListener('mousemove', (e) => {
    lastMouseX = e.clientX;
    lastMouseY = e.clientY;
});

// Also track touch movements for mobile
document.addEventListener('touchmove', (e) => {
    if (e.touches.length > 0) {
        lastMouseX = e.touches[0].clientX;
        lastMouseY = e.touches[0].clientY;
    }
}, { passive: true });

document.addEventListener('DOMContentLoaded', function() {
    // Check if we're on the second layer
    const isSecondLayer = window.location.pathname.includes('layer2.html');
    const isThirdLayer = window.location.pathname.includes('layer3.html');
    
    // Check if walkthrough was already shown, skipped, or completed in this session
    if (!sessionStorage.getItem('walkthroughShown') && 
        !sessionStorage.getItem('walkthroughSkipped') &&
        !sessionStorage.getItem('walkthroughCompleted')) {
        
        // Initialize global zoom control flags if they don't exist
        if (window.zoomControls === undefined) {
            window.zoomControls = {
                // For normal zoom navigation (enabled when walkthrough is skipped/completed)
                normalZoom: {
                    allow: false,
                    enable: function() {
                        this.allow = true;
                    },
                    disable: function() {
                        this.allow = false;
                    }
                },
                // For walkthrough zoom (only allows zooming into next layer)
                walkthroughZoom: {
                    allow: false,
                    enable: function() {
                        this.allow = true;
                    },
                    disable: function() {
                        this.allow = false;
                    }
                }
            };
        }
        
        // Set initial step based on the layer
        const initialStep = isSecondLayer ? 6 : isThirdLayer ? 9 : 0; // Start from step 6 (0-based index 5) on second layer
        sessionStorage.setItem('currentWalkthroughStep', initialStep.toString());
        
        // Disable all zoom navigation by default
        window.zoomControls.normalZoom.disable();
        window.zoomControls.walkthroughZoom.disable();
        
        // Function to enable normal page navigation via zoom (used when walkthrough is skipped/completed)
        function enablePageNavigationZoom() {
            if (window.zoomControls) {
                window.zoomControls.normalZoom.enable();
                window.zoomControls.walkthroughZoom.disable();
            }
        }
        
        // Function to enable walkthrough zoom (only allows zooming into next layer)
        function enableWalkthroughZoom() {
            if (window.zoomControls) {
                window.zoomControls.walkthroughZoom.enable();
                window.zoomControls.normalZoom.disable();
            }
        }
        
        // Function to disable all zoom navigation
        function disablePageNavigationZoom() {
            if (window.zoomControls) {
                window.zoomControls.normalZoom.disable();
                window.zoomControls.walkthroughZoom.disable();
            }
        }
        
        // Disable page navigation via zoom by default
        disablePageNavigationZoom();
        
        // Create walkthrough HTML
        const walkthrough = document.createElement('div');
        walkthrough.id = 'walkthrough';
        walkthrough.className = 'walkthrough active';
        
        // Create zoom guide container
        const zoomGuideContainer = document.createElement('div');
        zoomGuideContainer.className = 'zoom-guide-container';
        zoomGuideContainer.style.display = 'none';
        
        // Add mouse and trackpad guides
        zoomGuideContainer.innerHTML = `
            <div class="zoom-guide">
                <div class="zoom-guide-title">Mouse</div>
                <div class="mouse-guide">
                    <div class="mouse-wheel"></div>
                </div>
                <div>Scroll to zoom in</div>
            </div>
            <div class="zoom-guide">
                <div class="zoom-guide-title">Trackpad</div>
                <div class="trackpad-guide">
                    <div class="trackpad-fingers">
                        <div class="trackpad-finger trackpad-finger-1"></div>
                        <div class="trackpad-finger trackpad-finger-2"></div>
                    </div>
                </div>
                <div>Pinch to zoom in</div>
            </div>
        `;
        
        // Create global Exit Walkthrough button
        const exitWalkthroughBtn = document.createElement('button');
        exitWalkthroughBtn.id = 'walkthroughExit';
        exitWalkthroughBtn.className = 'walkthrough-exit';
        exitWalkthroughBtn.textContent = 'Exit Walkthrough';
        exitWalkthroughBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            closeWalkthrough(true);
        });
        document.body.appendChild(exitWalkthroughBtn);

        // Walkthrough steps
        const steps = [
            {
                content: 'How do we think about designing architecture for humans in space?<br><br><strong>Human-Environment Connection & Interaction Atlas (HECIA)</strong> explores behavioral risks associated with isolated, confined, and extreme environments, in particular spaceflight.',
            },
            {
                content: 'The following interactive walkthrough is designed to familiarize you with HECIA. If you are already familiar, feel free to click out of the walkthrough.',
                buttonText: 'Begin Walkthrough',
            },
            {
                hideContentModal: true,
                showTipModal: true,
                tipContent: '<strong style="color: #4CAF50;">Hovering</strong> over boxes reveals their definitions.',
                buttonText: 'Got it!',
            },
            {
                hover: true,
                target: '.box:first-child',
                hideContentModal: true,
                tooltip: 'Practice <strong style="color: #4CAF50;">hovering</strong> over "Mission Parameters"!',
            },
            {
                hideContentModal: true,
                showTipModal: true,
                tipContent: '<strong style="color: #4CAF50;">Zooming</strong> into each subsequent layer adds complexity.',
                buttonText: 'Got it!',
            },
            {
                zoom: true,
                hideContentModal: true,
                tooltip: '<strong style="color: #4CAF50;">Zoom in</strong> to reach the second layer of complexity'
            },
            {
                hideContentModal: true,
                showTipModal: true,
                tipContent: 'You have reached the <strong style="color: #4CAF50;">second layer</strong>! <strong style="color: #4CAF50;">Hovering</strong> over boxes reveals their definitions.',
                buttonText: 'Got it!',
            },
            {
                hover: true,
                hideContentModal: true,
                target: '.behavioral_health_and_performance_outcomes',
                tooltip: 'Practice <strong style="color: #4CAF50;">hovering</strong> over "Behavioral Health and Performance Outcomes"!',
            },
            {
                zoom: true,
                hideContentModal: true,
                tooltip: '<strong style="color: #4CAF50;">Zoom in</strong> once more to reach the final layer of complexity.'
            },
            {
                hideContentModal: true,
                showTipModal: true,
                tipContent: 'You have reached the <strong style="color: #4CAF50;">final layer</strong>! <strong style="color: #4CAF50;">Clicking</strong> on a factor reveals its definition and related factors. <strong style="color: #4CAF50;">Hovering</strong> on related factors reveals their relationship.',
                buttonText: 'Got it!',
            },
            {
                click: true,
                target: '.openness',
                hideContentModal: true,
                tooltip: 'Try <strong style="color: #4CAF50;">clicking</strong> on "Openness"!',
            },
            {
                hover: true,
                hideContentModal: true,
                target: '.curiosity',
                tooltip: 'Try <strong style="color: #4CAF50;">hovering</strong> over "Curiosity"!',
            },
            {
                clickanywhere: true,
                tooltip: '<strong style="color: #4CAF50;">Click</strong> once more to reset the diagram.',
                hideContentModal: true,
            },
            {
                hideContentModal: true,
                showTipModal: true,
                tipContent: 'You may <strong style="color: #4CAF50;">zoom out</strong> to return to previous layers.',
                zoomout: true,
                buttonText: 'Got it!'
            },
            {
                content: 'Have fun exploring! Please note that this framework is a point of departure. The relationships mapped here are just as important as the arguments, reactions, and agreements that follow. We welcome thoughts and dialogue sent to hecia-info@mit.edu.',
            },
            {
                content: 'You can find this information summarized in the help button, along with the option to complete this walkthrough again.',
                info: true,
                buttonText: 'Take me Home!',
            },  
        ];

        // Create progress bar
        const progressBar = document.createElement('div');
        progressBar.className = 'walkthrough-progress';
        progressBar.innerHTML = '<div class="walkthrough-progress-bar"></div>';
        document.body.appendChild(progressBar);

        // Create fake cursor
        const fakeCursor = document.createElement('div');
        fakeCursor.className = 'walkthrough-cursor';
        document.body.appendChild(fakeCursor);

        // Add highlight overlay
        const highlightOverlay = document.createElement('div');
        highlightOverlay.className = 'walkthrough-highlight';
        document.body.appendChild(highlightOverlay);

        // Get the current step from session storage or default to 0
        let currentStep = parseInt(sessionStorage.getItem('currentWalkthroughStep') || '0');
        
        // Initialize walkthrough content
        async function updateWalkthrough() {
            const step = steps[currentStep];
            const isLastStep = currentStep === steps.length - 1;
            
            // Update progress bar
            const progressBar = document.querySelector('.walkthrough-progress');
            const progressBarInner = document.querySelector('.walkthrough-progress-bar');
            const totalSteps = steps.length - 4; // Exclude first 2 and last 2 steps
            const currentProgress = Math.min(Math.max(0, currentStep - 2), totalSteps);
            const progressPercent = (currentProgress / totalSteps) * 100;
            
            // Show/hide progress bar based on current step
            if (currentStep >= 2 && currentStep < steps.length - 2) {
                progressBar.classList.add('visible');
                progressBarInner.style.width = `${progressPercent}%`;
            } else {
                progressBar.classList.remove('visible');
            }
            
            // Fade out current content if it exists
            const currentContent = walkthrough.querySelector('.walkthrough-content');
            if (currentContent) {
                currentContent.style.opacity = '0';
                currentContent.style.transform = 'translateY(10px)';
                await new Promise(resolve => setTimeout(resolve, 200));
            }
            
            if (step.content || step.hover || step.click || step.tipContent) {
                walkthrough.style.background = 'rgba(0, 0, 0, 0.4)';
            }
            else {
                walkthrough.style.background = 'none';
            }

            let nextButton, skipButton;
            
            // Reset zoom guide state when leaving zoom step
            if (zoomGuideContainer && !step.zoom) {
                zoomGuideContainer.style.display = 'none';
                zoomGuideContainer.style.opacity = '1'; // Reset opacity for next time
            }
            
            // Clean up any existing interactive elements
            const existingTooltips = document.querySelectorAll('.walkthrough-tooltip');
            existingTooltips.forEach(tooltip => tooltip.remove());
            
            // Clean up any existing content
            const existingContent = document.querySelectorAll('.walkthrough-content');
            existingContent.forEach(content => content.remove());
            
            // Create walkthrough content
            walkthrough.innerHTML = `
                ${step.showTipModal ? `
                <div class="walkthrough-tip" style="opacity: 0; transform: translateY(10px);">
                    <div class="tip-header">TIP</div>
                    <div class="tip-content">
                        <p>${step.tipContent}</p>
                        <div class="walkthrough-nav">
                            <button class="walkthrough-next">
                                ${step.buttonText || 'Next'}
                            </button>
                        </div>
                    </div>
                </div>
                ` : ''}
                <div class="walkthrough-content" ${step.hideContentModal ? 'style="display: none;"' : 'style="opacity: 0; transform: translateY(10px);"'}>
                    <p>${step.content}</p>
                    <div class="walkthrough-nav">
                        <button class="walkthrough-next">
                            ${step.buttonText || (isLastStep ? 'Get Started' : 'Next')}
                        </button>
                    </div>
                </div>
            `;
            
            // Toggle visibility of global Exit button and set up in-modal close (X)
            if (exitWalkthroughBtn) {
                exitWalkthroughBtn.style.display = (step.hideContentModal || step.showTipModal) ? 'block' : 'none';
            }

            // Remove any existing in-modal close button from previous steps
            const previousClose = walkthrough.querySelector('.walkthrough-close');
            if (previousClose) {
                previousClose.remove();
            }

            // Inject the close (X) button only when the content modal is visible
            if (!step.hideContentModal) {
                const contentContainer = walkthrough.querySelector('.walkthrough-content');
                if (contentContainer && !contentContainer.querySelector('.walkthrough-close')) {
                    const closeX = document.createElement('div');
                    closeX.className = 'walkthrough-close';
                    closeX.setAttribute('aria-label', 'Close Walkthrough');
                    closeX.addEventListener('click', (e) => {
                        e.stopPropagation();
                        closeWalkthrough(true);
                    });
                    contentContainer.appendChild(closeX);
                }
            }

            // Fade in new content
            if (step.showTipModal) {
                await new Promise(resolve => setTimeout(resolve, 50));
                const tipModal = walkthrough.querySelector('.walkthrough-tip');
                if (tipModal) {
                    tipModal.style.opacity = '1';
                    tipModal.style.transform = 'translate(-50%, -50%)';
                    tipModal.classList.add('visible');
                }
            } else if (!step.hideContentModal) {
                await new Promise(resolve => setTimeout(resolve, 50));
                const newContent = walkthrough.querySelector('.walkthrough-content');
                if (newContent) {
                    newContent.style.opacity = '1';
                    newContent.style.transform = 'translateY(0)';
                }
            }
            
            // If this is a zoom-out instruction step, inject a mini zoom-guide inside the tip modal
            if (step.zoomout && step.showTipModal) {
                const tipModal = walkthrough.querySelector('.walkthrough-tip');
                if (tipModal && !tipModal.querySelector('.zoom-guide-container-out')) {
                    const zoomOutGuide = document.createElement('div');
                    zoomOutGuide.className = 'zoom-guide-container-out';
                    zoomOutGuide.innerHTML = `
                        <div class="zoom-guide-out">
                            <div class="zoom-guide-title-out">Mouse</div>
                            <div class="mouse-guide-out">
                                <div class="mouse-wheel-out"></div>
                            </div>
                            <div>Scroll to zoom out</div>
                        </div>
                        <div class="zoom-guide-out">
                            <div class="zoom-guide-title-out">Trackpad</div>
                            <div class="trackpad-guide-out">
                                <div class="trackpad-fingers-out">
                                    <div class="trackpad-finger-out trackpad-finger-1-out"></div>
                                    <div class="trackpad-finger-out trackpad-finger-2-out"></div>
                                </div>
                            </div>
                            <div>Pinch to zoom out</div>
                        </div>`;
                    tipModal.querySelector('.tip-content').insertBefore(zoomOutGuide, tipModal.querySelector('.walkthrough-nav'));
                }
            }
            
            // Clean up any existing tooltip and event listeners from previous step
            if (steps[currentStep]) {
                const prevStep = steps[currentStep];
                if (prevStep.tooltipElement && prevStep.tooltipElement.parentNode) {
                    prevStep.tooltipElement.remove();
                }
                // Remove walkthrough-target class from explanation box if it was added
                if (prevStep.explanationBox) {
                    prevStep.explanationBox.classList.remove('walkthrough-target');
                }
                // Clean up help button pulsing
                const helpButton = document.getElementById('helpButton');
                if (helpButton) {
                    helpButton.classList.remove('pulsing');
                    // Reset button size
                    helpButton.style.width = '';
                    helpButton.style.height = '';
                    helpButton.style.fontSize = '';
                }
                // Remove pulse style if it exists
                if (prevStep.pulseStyle && prevStep.pulseStyle.parentNode) {
                    prevStep.pulseStyle.remove();
                }

                if (typeof prevStep.cleanup === 'function') {
                    prevStep.cleanup();
                }
                // Ensure fake cursor is reset
                if (fakeCursor) {
                    fakeCursor.style.opacity = '0';
                    fakeCursor.classList.remove('pulsing');
                }
            }
            
            nextButton = walkthrough.querySelector('.walkthrough-next');
            skipButton = walkthrough.querySelector('.walkthrough-skip');
            
            if (nextButton) {
                nextButton.addEventListener('click', () => {
                    if (isLastStep) {
                        sessionStorage.setItem('walkthroughCompleted', 'true');
                        closeWalkthrough();
                        enablePageNavigationZoom();
                        // Navigate to index.html after a short delay
                        setTimeout(() => {
                            window.location.href = 'index.html';
                        }, 300);
                    } else {
                        nextStep();
                    }
                });
            }
            
            if (skipButton) {
                skipButton.addEventListener('click', (e) => {
                    e.stopPropagation();
                    sessionStorage.setItem('walkthroughSkipped', 'true');
                    closeWalkthrough(true);
                    enablePageNavigationZoom();
                });
            }

            // Create tooltip if tooltip property exists
            if (step.tooltip) {
                const tooltip = document.createElement('div');
                tooltip.className = 'walkthrough-tooltip';
                tooltip.style.zIndex = '2147483647'; // Maximum safe integer value for z-index
                tooltip.innerHTML = step.tooltip;
                
                // Add to body to ensure visibility
                document.body.appendChild(tooltip);
                
                // Store tooltip reference for cleanup
                step.tooltipElement = tooltip;
                
                // Add visible class to trigger animation
                setTimeout(() => {
                    tooltip.classList.add('visible');
                }, 10);
            }

            // Show/hide help button based on current step
            const helpButton = document.getElementById('helpButton');
                
                
                // Only show info button on last step
            if (step.info) {
                helpButton.classList.add('pulsing', 'walkthrough-target');
                // Disable clicks but keep full visibility
                helpButton.style.pointerEvents = 'none';
                const style = document.createElement('style');
                style.id = 'help-button-pulse';
                style.textContent = `
                    @keyframes pulse {
                        0% { transform: scale(1); box-shadow: 0 0 0 0 rgba(76, 175, 80, 0.7); }
                        50% { transform: scale(1.5); box-shadow: 0 0 0 10px rgba(76, 175, 80, 0); }
                        100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(76, 175, 80, 0); }
                    }
                        
                    #helpButton.pulsing {
                        display: flex !important;
                        animation: pulse 2s infinite;
                    }`;
                document.head.appendChild(style);
                    
                // Store the style element for cleanup
                step.pulseStyle = style;
                    
                // Clear any text content since we're using ::before for the icon
                helpButton.textContent = '?';
            }
            else {
                // Hide on all other steps and ensure clickable
                helpButton.style.display = 'none';
                helpButton.classList.remove('pulsing', 'walkthrough-target');
                // Re-enable normal click behaviour and reset styles
                helpButton.style.pointerEvents = '';
                helpButton.style.opacity = '';
            }

            // CLICK STEP
            if (step.click) {
                enableWalkthroughZoom();
                
                // Add walkthrough-target class to explanation box to make it stand out
                const explanationBox = document.querySelector('.explanation');
                if (explanationBox) {
                    explanationBox.classList.add('walkthrough-target');
                    step.explanationBox = explanationBox; // Store for cleanup
                }
                
                // Create content container
                const content = document.createElement('div');
                content.style.background = 'white';
                content.style.padding = '20px';
                content.style.borderRadius = '8px';
                content.style.maxWidth = '500px';
                content.style.width = '90%';
                content.style.position = 'relative';
                content.style.pointerEvents = 'auto';
                content.style.zIndex = '2147483647';
                
                // Tooltip is already created by the initial tooltip creation block
                const tooltip = step.tooltipElement;
                
                document.body.appendChild(content);
                
                // Get target element immediately and apply hover effect
                const targetElement = document.querySelector(step.target);
                if (targetElement) {
                    // Add hover effect to target with transition
                    targetElement.classList.add('walkthrough-target');
                    
                    // Immediately start transitioning to zoom state
                    walkthrough.classList.add('zoom-step');
                    
                    // Show elements immediately but with initial state
                    fakeCursor.style.opacity = '1';
                    fakeCursor.classList.add('pulsing');
                    highlightOverlay.style.opacity = '0';
                    tooltip.style.opacity = '0';
                    
                    // Get target rect for animation
                    const targetRect = targetElement.getBoundingClientRect();
                    const highlightRect = {
                        left: targetRect.left,
                        top: targetRect.top,
                        width: targetRect.width,
                        height: targetRect.height
                    };
                    
                    // Position highlight with smooth transition
                    highlightOverlay.style.transition = 'none';
                    Object.assign(highlightOverlay.style, {
                        left: `${highlightRect.left}px`,
                        top: `${highlightRect.top}px`,
                        width: `${highlightRect.width}px`,
                        height: `${highlightRect.height}px`,
                        opacity: '0',
                        transform: 'scale(1)'
                    });
                    
                    // Force reflow to ensure transition works
                    void highlightOverlay.offsetWidth;
                     // Enable fade transition only
                     highlightOverlay.style.transition = 'opacity 0.4s cubic-bezier(0.4, 0, 0.2, 1)';
                    
                    // Animate to final state
                    highlightOverlay.style.opacity = '0.7';
                    tooltip.style.opacity = '1';
                    tooltip.style.transform = 'translate(-50%, -100%) translateY(-10px)';
                    
                    // Get current cursor position right before animation
                    const currentPos = getCursorPosition();
                    const startX = currentPos.x;
                    const startY = currentPos.y;
                    
                    // Ensure cursor is visible and reset any transitions
                    fakeCursor.style.transition = 'none';
                    fakeCursor.style.opacity = '1';
                    fakeCursor.style.display = 'block';
                    
                    // Position the cursor at the current mouse position
                    fakeCursor.style.left = `${startX}px`;
                    fakeCursor.style.top = `${startY}px`;
                    
                    // Force a reflow to ensure the position is applied
                    fakeCursor.offsetHeight;
                    const endX = targetRect.left + targetRect.width / 2;
                    const endY = targetRect.top + targetRect.height / 2;
                    
                    // Animate cursor to target
                    setTimeout(() => {
                        fakeCursor.style.transition = 'left 1s ease-out, top 1s ease-out';
                        fakeCursor.style.left = `${endX}px`;
                        fakeCursor.style.top = `${endY}px`;
                        fakeCursor.style.cursor = 'pointer';
                        
                        // Show next button when target is hovered
                        const onClick = () => {
                            targetElement.removeEventListener('click', onClick);
                            
                            // Clean up
                            fakeCursor.style.opacity = '0';
                            fakeCursor.classList.remove('pulsing');
                            highlightOverlay.style.opacity = '0';
                            tooltip.style.opacity = '0';
                            tooltip.style.transform = 'translate(-50%, -100%)';
                            
                            // Remove tooltip after animation
                            setTimeout(() => {
                                if (tooltip.parentNode) {
                                    tooltip.remove();
                                }
                                // Automatically go to next step
                                nextStep();
                            }, 200);
                        };
                        
                        targetElement.addEventListener('click', onClick);
                    }, 500);
                }
            }

            // ZOOM STEP
            if (step.zoom) {
                // For zoom step, enable walkthrough zoom functionality
                enableWalkthroughZoom();
                walkthrough.style.background = 'none';

                
                // Show zoom guide with a timeout
                if (zoomGuideContainer) {
                    zoomGuideContainer.style.display = 'flex';
                    // After 3 seconds, minimize to bottom right corner and show tooltip
                    setTimeout(() => {
                        if (zoomGuideContainer) {
                            zoomGuideContainer.classList.add('minimized');
                            
                            // Show tooltip after zoom guide is minimized
                            if (step.tooltip) {
                                const tooltip = document.createElement('div');
                                tooltip.className = 'walkthrough-tooltip';
                                tooltip.innerHTML = step.tooltip;
                                document.body.appendChild(tooltip);
                                step.tooltipElement = tooltip;
                                
                                // Add visible class to trigger animation
                                setTimeout(() => {
                                    tooltip.classList.add('visible');
                                }, 10);
                            }
                        }
                    }, 3000); // 3 seconds before minimizing
                }
                
                // Disable hover interactions on all interactive elements
                document.body.classList.add('disable-hover');
                
                // Make walkthrough fully transparent but keep it in the DOM
                walkthrough.classList.add('zoom-step');
                walkthrough.style.backdropFilter = 'none';
                walkthrough.style.pointerEvents = 'none'; // Allow clicks to pass through by default

                // Ensure walkthrough content is still interactive
                const content = walkthrough.querySelector('.walkthrough-content');
                if (content) {
                    content.style.pointerEvents = 'auto';
                }
            } 
            
            // CLICK ANYWHERE STEP
            if (step.clickanywhere) {
                // Show tooltip if it exists
                walkthrough.style.background = 'none';
                
                
                // Add click handler to document to go to next step
                const onClick = () => {
                    // Clean up
                    if (step.tooltipElement) {
                        step.tooltipElement.style.opacity = '0';
                    }
                    
                    // Remove click listener
                    document.removeEventListener('click', onClick);
                    
                    // Remove elements after animation and go to next step
                    setTimeout(() => {
                        if (step.tooltipElement && step.tooltipElement.parentNode) {
                            step.tooltipElement.remove();
                        }
                        nextStep();
                    }, 100);
                };
                
                // Add click listener
                document.addEventListener('click', onClick);
                
                // Clean up function to remove event listeners if step changes
                step.cleanup = () => {
                    document.removeEventListener('click', onClick);
                    if (step.tooltipElement && step.tooltipElement.parentNode) {
                        step.tooltipElement.remove();
                    }
                    fakeCursor.classList.remove('pulsing');
                };
            }
            
            // HOVER STEP
            if (step.hover) {
                
                // Create content container
                const content = document.createElement('div');
                content.style.background = 'white';
                content.style.padding = '20px';
                content.style.borderRadius = '8px';
                content.style.maxWidth = '500px';
                content.style.width = '90%';
                content.style.position = 'relative';
                content.style.pointerEvents = 'auto'; // Ensure content is interactive
                content.style.zIndex = '2147483647'; // Ensure content stays on top
                
                // Tooltip is already created by the initial tooltip creation block
                const tooltip = step.tooltipElement;
                
                document.body.appendChild(content);
                
                // Get target element immediately and apply hover effect
                const targetElement = document.querySelector(step.target);
                if (targetElement) {
                    // Add hover effect to target with transition
                    targetElement.classList.add('walkthrough-target');
                    
                    // Immediately start transitioning to zoom state
                    walkthrough.classList.add('zoom-step');
                    
                    // Show elements immediately but with initial state
                    fakeCursor.style.opacity = '1';
                    fakeCursor.classList.add('pulsing');
                    highlightOverlay.style.opacity = '0';
                    tooltip.style.opacity = '0';
                    
                    // Get target rect for animation
                    const targetRect = targetElement.getBoundingClientRect();
                    const highlightRect = {
                        left: targetRect.left,
                        top: targetRect.top,
                        width: targetRect.width,
                        height: targetRect.height
                    };
                    
                    // Position highlight with smooth transition
                    highlightOverlay.style.transition = 'none';
                    Object.assign(highlightOverlay.style, {
                        left: `${highlightRect.left}px`,
                        top: `${highlightRect.top}px`,
                        width: `${highlightRect.width}px`,
                        height: `${highlightRect.height}px`,
                        opacity: '0',
                    });
                    
                    // Force reflow to ensure transition works
                    void highlightOverlay.offsetWidth;
                     // Enable fade transition only
                     highlightOverlay.style.transition = 'opacity 0.4s cubic-bezier(0.4, 0, 0.2, 1)';
                    
                    // Animate to final state
                    highlightOverlay.style.opacity = '0.7';
                    tooltip.style.opacity = '1';
                    tooltip.style.transform = 'translate(-50%, -100%) translateY(-10px)';
                    
                    // Get current cursor position right before animation
                    const currentPos = getCursorPosition();
                    const startX = currentPos.x;
                    const startY = currentPos.y;
                    
                    // Ensure cursor is visible and reset any transitions
                    fakeCursor.style.transition = 'none';
                    fakeCursor.style.opacity = '1';
                    fakeCursor.style.display = 'block';
                    
                    // Position the cursor at the current mouse position
                    fakeCursor.style.left = `${startX}px`;
                    fakeCursor.style.top = `${startY}px`;
                    
                    // Force a reflow to ensure the position is applied
                    fakeCursor.offsetHeight;
                    
                    // Repeated fake cursor animation showing the user where to hover
                    const animateCursorOnce = () => {
                        const startPos = getCursorPosition();
                        // Reset instantly to current pointer position
                        fakeCursor.style.transition = 'none';
                        fakeCursor.style.left = `${startPos.x}px`;
                        fakeCursor.style.top = `${startPos.y}px`;
                        // Force reflow
                        void fakeCursor.offsetWidth;
                        // Animate to the target centre
                        const endX = targetRect.left + targetRect.width / 2;
                        const endY = targetRect.top + targetRect.height / 2;
                        fakeCursor.style.transition = 'left 1s ease-out, top 1s ease-out';
                        fakeCursor.style.left = `${endX}px`;
                        fakeCursor.style.top = `${endY}px`;
                    };
                    
                    // Run once immediately and then every 4 seconds
                    animateCursorOnce();
                    step.cursorInterval = setInterval(animateCursorOnce, 4000);
                    
                    // When the target is hovered, stop the animation
                    const onHover = () => {
                        targetElement.removeEventListener('mouseenter', onHover);
                        clearInterval(step.cursorInterval);
                        
                        fakeCursor.style.opacity = '0';
                        fakeCursor.classList.remove('pulsing');
                        highlightOverlay.style.opacity = '0';
                        tooltip.style.opacity = '0';
                        tooltip.style.transform = 'translate(-50%, -100%)';
                        
                        // Check if this is the last hover step (the one with target '.curiosity')
                        const isLastHoverStep = step.target === '.curiosity';
                        
                        if (!isLastHoverStep) {
                            // For non-last hover steps, show Next button
                            // Create a container for the Next button to match the walkthrough's style
                            const navContainer = document.createElement('div');
                            navContainer.className = 'walkthrough-nav';
                            navContainer.style.position = 'fixed';
                            navContainer.style.bottom = '20px';
                            navContainer.style.left = '0';
                            navContainer.style.width = '100%';
                            navContainer.style.display = 'flex';
                            navContainer.style.justifyContent = 'center';
                            navContainer.style.zIndex = '2147483647';
                            
                            const nextButton = document.createElement('button');
                            nextButton.className = 'walkthrough-next';
                            nextButton.textContent = 'Next';
                            
                            // Add click handler to proceed to next step
                            nextButton.addEventListener('click', () => {
                                if (tooltip.parentNode) {
                                    tooltip.remove();
                                }
                                if (navContainer.parentNode) {
                                    navContainer.remove();
                                }
                                ['.openness', '.curiosity', '.explanation'].forEach(sel => {
                                    document.querySelectorAll(sel).forEach(el => el.classList.remove('walkthrough-target'));
                                });
                                nextStep();
                            });
                            
                            // Add button to container and container to body
                            navContainer.appendChild(nextButton);
                            document.body.appendChild(navContainer);
                            
                            // Store reference for cleanup
                            step.navContainer = navContainer;
                        } else {
                            // For the last hover step, auto-proceed
                            if (tooltip.parentNode) {
                                tooltip.remove();
                            }
                            ['.openness', '.curiosity', '.explanation'].forEach(sel => {
                                document.querySelectorAll(sel).forEach(el => el.classList.remove('walkthrough-target'));
                            });
                            nextStep();
                        }
                    };
                    
                    targetElement.addEventListener('mouseenter', onHover);
                    
                    // Ensure cleanup if the step changes before hover occurs
                    step.cleanup = () => {
                        clearInterval(step.cursorInterval);
                        targetElement.removeEventListener('mouseenter', onHover);
                    };
                }
            }
        }
        
        function nextStep() {
            if (currentStep < steps.length - 1) {
                currentStep++;
                updateWalkthrough();
            }
        }
        
        // Add to window for dot navigation
        window.goToStep = function(stepIndex) {
            currentStep = stepIndex;
            updateWalkthrough();
        };
        
        // Close function
        window.closeWalkthrough = function(skipped = false) {
            // Immediately remove all walkthrough visuals and stop animations
            ['.walkthrough', '.walkthrough-highlight', '.walkthrough-tooltip', '.walkthrough-cursor', '.zoom-guide-container', '#walkthroughExit'].forEach(sel => {
                document.querySelectorAll(sel).forEach(el => el.remove());
            });
            
            // Clean up any remaining walkthrough elements
            const elementsToRemove = [
                '.walkthrough-target',
                '.walkthrough-tooltip',
                '.walkthrough-highlight',
                '.walkthrough-cursor'
            ];
            
            // Remove walkthrough classes from all elements
            document.querySelectorAll(elementsToRemove.join(',')).forEach(el => {
                el.classList.remove('walkthrough-target', 'walkthrough-highlight');
            });
            
            // Specifically clean up the explanation box
            const explanationBox = document.querySelector('.explanation');
            if (explanationBox) {
                explanationBox.classList.remove('walkthrough-target');
            }
            
            // Walkthrough container already removed above
            
            // Remove exit button if present
            const exitBtn = document.getElementById('walkthroughExit');
            if (exitBtn) {
                exitBtn.remove();
            }

            // Re-enable page navigation
            if (window.enablePageNavigationZoom) {
                enablePageNavigationZoom();
            }
            
            // Mark walkthrough as completed or skipped
            if (skipped) {
                sessionStorage.setItem('walkthroughSkipped', 'true');
            } else {
                sessionStorage.setItem('walkthroughCompleted', 'true');
            }
            // Navigate appropriately after walkthrough ends
            if (skipped) {
                // User exited early – just refresh current page
                setTimeout(() => window.location.reload(), 200);
            } else {
                // Completed – go back to homepage (index.html)
                setTimeout(() => { window.location.href = 'index.html'; }, 200);
            }
        };
        
        // Add elements to document
        document.body.appendChild(walkthrough);
        document.body.appendChild(zoomGuideContainer);
        
        // Add CSS for zoom guide
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = 'zoom-guide.css';
        document.head.appendChild(link);

        // Add CSS for zoom-out guide (black version)
        const linkOut = document.createElement('link');
        linkOut.rel = 'stylesheet';
        linkOut.href = 'zoom-guide-out.css';
        document.head.appendChild(linkOut);
        
        // Removed auto-close on click outside to prevent accidental closure
        
        // Initialize first step
        updateWalkthrough();
    }
});
