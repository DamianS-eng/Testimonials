const testimonialList = [
  {
    name: '',
    img: '',
    testimonial: ""
  },
  {
    name: '',
    img: '',
    testimonial: ""
  },
  {
    name: '',
    img: '',
    testimonial: ""
  },
  {
    name: '',
    img: '',
    testimonial: ""
  }
]

const mainEle = document.querySelector('main');

function changeFocus(chosen) {
}

window.onload = function(e) {
  const testimonialFocus = document.createElement('p');
  testimonialFocus.id = 'testimonial-focus';
  const testimonialRow = document.createElement('div');
  testimonialRow.id = 'testimonial-row';
  const nameFocus = document.createElement('p');
  nameFocus.id = 'testimonial-focus-name';
  testimonialList.forEach((i) => {
    const testimonialIcon = document.createElement('span');
    testimonialIcon.classList.add('testimonial-icon');
    const testimonialImg = document.createElement('img');
    testimonialImg.src = i.img;
    testimonialImg.alt = i.name;
    testImonialIcon.appendChild(testimonialImg);
    testimonialRow.appendChild(testimonialIcon);
  });  
  mainEle.appendChild(testimonialFocus);
  mainEle.appendChild(testimonialRow);
  mainEle.appendChild(nameFocus);
}
