const toggle = () => {
  let title = document.getElementById('heading');
  let detail = document.getElementById('detail');
  let card = document.getElementById('card');

  if (title.style.display === "none") {
    title.style.display = "block";
    detail.style.display = "block";
    card.style.display = "none";
  } else {
    title.style.display = "none";
    detail.style.display = "none";
    setTimeout(() => {
      card.style.display = "block";
      //card.setAttribute("data-aos", "fade-up")
    }, 500)
  }
}