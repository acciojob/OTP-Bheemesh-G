//your JS code here. If required.
function moveFocus(current, event) {
            if (current.value.length >= 1) {
                // Move focus to the next input
                const inputs = Array.from(document.querySelectorAll('.code'));
                const currentIndex = inputs.indexOf(current);
                if (currentIndex < inputs.length - 1) {
                    inputs[currentIndex + 1].focus();
                }
            }
        }

function handleBackspace(current, event) {
            if (event.key === 'Backspace') {
                event.preventDefault();
                if (current.value.length === 0) {
                    const inputs = Array.from(document.querySelectorAll('.code'));
                    const currentIndex = inputs.indexOf(current);
                    if (currentIndex > 0) {
                        const previousInput = inputs[currentIndex - 1];
                        previousInput.focus();
                        previousInput.value = '';
                    }
                } else {
                    current.value = '';
                }
            }
        }