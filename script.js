document.querySelector(".first-button").addEventListener("click", function () {
  document.querySelector(".animated-icon1").classList.toggle("open");
});

const fullImgBox = document.getElementById("fullImgBox");
const fullImg = document.getElementById("fullImg");

function openFullImg(pic) {
  fullImgBox.style.display = "flex";
  fullImg.src = pic;
}

function closeFullImg() {
  fullImgBox.style.display = "none";
}

// const langEl = document.querySelector(".langWrap");
// const link = document.getElementById(".lan");
// const titleEl1 = document.querySelector(".title1");
// const titleEl2 = document.querySelector(".title2");
// const titleEl3 = document.querySelector(".title3");
// const descrEl = document.querySelector(".description");
// const questEl = document.querySelector(".question");

// link.forEach((el) => {
//   el.addEventListener("click", () => {
//     langEl.querySelector(".active").classList.remove("active");
//     el.classList.add("active");

//     const attr = el.getAttribute("language");

//     titleEl1.textContent = data[attr].title1;
//     titleEl2.textContent = data[attr].title2;
//     titleEl3.textContent = data[attr].title3;
//     descrEl.textContent = data[attr].description;
//     questEl.textContent = data[attr].question;
//   });
// });

// const data = {
//   english: {
//     serbia: "Made in Serbia",
//     title1: "Some of my works",
//     title2: "How it all started",
//     title3: "contact US",

//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non adipisci eligendi repellat ad dolor veritatis itaque sequi minus iste, doloremque. Officiis non eaque atque excepturi repudiandae nulla eos eligendi magni molestiae eius distinctio, voluptas pariatur incidunt et culpa inventore aspernatur recusandae nihil asperiores, vitae, maiores laborum quasi perspiciatis natus dignissimos! Accusantium aliquam nostrum impedit dignissimos iste, iure inventore! Sapiente, labore earum ut dicta ducimus asperiores laudantium natus officiis, quisquam placeat aspernatur voluptatum aut voluptates tenetur quos magni fugit quia. Fugiat.",

//     question:
//       "If you have any questions? Feel free to contact me and ask anything you are interested in.Thank you!",
//   },
//   serbian: {
//     "serbia-text": "Proizvedeno u Srbiji",
//     title1: "Neki od mojih radova",
//     title2: "Kako je sve pocelo",
//     title3: "Kontakt",

//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non adipisci eligendi repellat ad dolor veritatis itaque sequi minus iste, doloremque. Officiis non eaque atque excepturi repudiandae nulla eos eligendi magni molestiae eius distinctio, voluptas pariatur incidunt et culpa inventore aspernatur recusandae nihil asperiores, vitae, maiores laborum quasi perspiciatis natus dignissimos! Accusantium aliquam nostrum impedit dignissimos iste, iure inventore! Sapiente, labore earum ut dicta ducimus asperiores laudantium natus officiis, quisquam placeat aspernatur voluptatum aut voluptates tenetur quos magni fugit quia. Fugiat.",

//     question:
//       "Ukoliko imate neka pitanja, budite slobodni da me kontaktirate i pitate sve sto vas interesuje. Hvala Vam!",
//   },
// };

// Wrap every letter in a span
const textWrapper = document.querySelector(".description");
textWrapper.innerHTML = textWrapper.textContent.replace(
  /\S/g,
  "<span class='letter'>$&</span>"
);

anime
  .timeline({ loop: false })
  .add({
    targets: ".description .letter",
    opacity: [0, 1],
    easing: "easeInOutQuad",
    duration: 1250,
    delay: (el, i) => 5 * (i + 1),
  })
  .add({
    targets: ".description",
    opacity: 1,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000,
  });

const scrollElements = document.querySelectorAll(".js-scroll");

const elementInView = (el, dividend = 1) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop <=
    (window.innerHeight || document.documentElement.clientHeight) / dividend
  );
};

const elementOutofView = (el) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop > (window.innerHeight || document.documentElement.clientHeight)
  );
};

const displayScrollElement = (element) => {
  element.classList.add("scrolled");
};

const hideScrollElement = (element) => {
  element.classList.remove("scrolled");
};

const handleScrollAnimation = () => {
  scrollElements.forEach((el) => {
    if (elementInView(el, 1.25)) {
      displayScrollElement(el);
    } else if (elementOutofView(el)) {
      hideScrollElement(el);
    }
  });
};

window.addEventListener("scroll", () => {
  handleScrollAnimation();
});
