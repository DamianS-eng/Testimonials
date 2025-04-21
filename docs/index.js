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

window.onload = function(e) {
  testimonialList.forEach((i) => {
    const testimonialFocus = document.createElement('p');
    testimonialFocus.id = 'testimonial-focus';
    const testimonialRow = document.createElement('div');
    testimonialRow.id = 'testimonial-row';
    const nameFocus = document.createElement('p');
    nameFocus.id = 'testimonial-focus-name';
    mainEle.appendChild(testimonialFocus);
    mainEle.appendChild(testimonialRow);
    mainEle.appendChild(nameFocus);
  });
}
