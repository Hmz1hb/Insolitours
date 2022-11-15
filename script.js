const reviews = [
    {
      id: 1,
      name: "Ram",
      job: "customer",
      img:
        "./Img/Faces (1).jpg",
      text:
        " 10/10 I highly recommend Insolitours. The crew are highly professional and extremely kind, and the booking service went by without a hitch."
    },
    {
      id: 2,
      name: "James",
      job: "customer",
      img:
        "./Img/Faces (2).jpg",
      text:
        "I'm not typically one to travel via flight considering the costs and amount of pre-preparation required, but thanks to Insolitours, I was able to experience the Bahamas at a fairly reasonable price considering the quality of the stay."
    },
    {
      id: 3,
      name: "Sam",
      job: "customer",
      img:
        "./Img/Faces (3).jpg",
      text:
        "My holiday went extremely smoothly thanks to Insolitours' professionalism in their mannerisms and the ease of use of their services. Would definitely book again!"
    },
    {
      id: 4,
      name: "Rosie",
      job: "customer",
      img:
        "./Img/Faces (4).jpg",
      text:
        "It's a good service provided at a reasonable price, and our inquiries were always answered swiftly and efficiently and we were delivered exactly what was promised. If you're looking for a amazing service for your travels, I highly suggest you look into Insolitours!"
    }
  ];
  
  const img = document.getElementById("person-img");
  const author = document.getElementById("author");
  const job = document.getElementById("job");
  const info = document.getElementById("info");
  
  const prevBtn = document.querySelector(".prev-btn");
  const nextBtn = document.querySelector(".next-btn");
  
  let currentItem = 0;
  
  // iteam load
  window.addEventListener("DOMContentLoaded", () => {
    const item = reviews[currentItem];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
  });
  
  // user + item show
  function showPerson(person) {
    const item = reviews[person];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
  }
  
  // next-rev
  nextBtn.addEventListener("click", () => {
    currentItem++;
    if (currentItem > reviews.length - 1) {
      currentItem = 0;
    }
    showPerson(currentItem);
  });
  
  // Prev-rev
  prevBtn.addEventListener("click", () => {
    currentItem--;
    if (currentItem < 0) {
      currentItem = reviews.length - 1;
    }
    showPerson(currentItem);
  });
  
  