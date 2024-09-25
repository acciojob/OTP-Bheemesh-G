//your JS code here. If required.

const inputs = document.getElementsByClassName('code');

let currentActive = 0;
for(let i=0;i<inputs.length;i++)
	{
		inputs[i].addEventListener('input',()=>{
			if(i+1<inputs.length)
			{
				currentActive = i + 1;
				inputs[i+1].focus();
			}
		});
  inputs[i].addEventListener('keydown', (event) => {
    if (event.key === 'Backspace') {
      if (inputs[i].value === '') {
        if (i > 0) {
          currentActive = i - 1;
          inputs[currentActive].focus();
        }
      } else {
        inputs[i].value = '';
      }
    }
  });
	}