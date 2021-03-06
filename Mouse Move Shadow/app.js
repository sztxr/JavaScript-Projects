const container = document.querySelector('.container');
const text = container.querySelector('h1');
const walk = 200;

function shadow(e) {
  const { offsetWidth: width, offsetHeight: height } = container;
  let { offsetX: x, offsetY: y } = e;

  if (this !== e.target) {
    x += e.target.offsetLeft;
    y += e.target.offsetTop;
  }

  const xWalk = Math.round((x / width) * walk - walk / 2);
  const yWalk = Math.round((y / height) * walk - walk / 2);

  text.style.textShadow = `
    ${xWalk * -0.5}px ${yWalk * -0.5}px 0 rgba(241,0,229,.9),
    ${xWalk * -1}px ${yWalk * -1}px 0 rgba(243,73,235,.8),
    ${xWalk * -1.5}px ${yWalk * -1.5}px 0 rgba(252,100,242,.8)
    `;
}

container.addEventListener('mousemove', shadow);