let card = document.createElement('div');
let cardBody = document.createElement('div');
let heading = document.createElement('h3');
let line = document.createElement('div');
let text = document.createElement('p');
let readMore = document.createElement('a');
let x = document.createElement('button');
let image = document.createElement('img');

card.setAttribute('class', 'card');
card.setAttribute('id', 'card');
card.setAttribute('data-aos', 'fade-up');
card.setAttribute('data-aos-duration', '3000');

cardBody.setAttribute('class', 'card-body');
heading.setAttribute('class', 'card-title');

heading.innerText = 'Explore';

line.setAttribute('id', 'line');

text.setAttribute('class', 'card-text');
text.innerText = 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?'

readMore.setAttribute('class', 'card-link');
readMore.innerText = 'READ MORE';

x.setAttribute('id', 'close');
x.setAttribute('onclick', 'toggle()');

image.setAttribute('src', './images/Close.png');


card.appendChild(cardBody);

cardBody.appendChild(heading)
cardBody.appendChild(line)
cardBody.appendChild(text)
cardBody.appendChild(readMore)
cardBody.appendChild(x)

x.appendChild(image);

const toggle = () => {
  let title = document.getElementById('heading');
  let detail = document.getElementById('detail');
  let block = document.getElementById('block-1');

  if (title.style.display === "none") {
    title.style.display = "block";
    detail.style.display = "block";
    block.removeChild(card)
  } else {
    title.style.display = "none";
    detail.style.display = "none";
    block.appendChild(card);
  }
}