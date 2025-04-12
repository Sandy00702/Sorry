
const container = document.querySelector(".container");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const btnGrp = document.querySelector(".btn-group");

yesBtn.addEventListener("click", () => {
  question.innerHTML = "I'm SORRY";
  gif.src = "images/sorry.png";
  gif.style.height = "300px"; 
gif.style.width = "400px"; 
  noBtn.innerHTML = "No";
  yesBtn.innerHTML = "Its Okay";

  yesBtn.addEventListener("click", () => {
    question.innerHTML = "Hehehe!! I knew It";
    gif.src = "images/love.gif";
    yesBtn.style.display = "none";
    noBtn.style.display = "none";
  })

  noBtn.addEventListener("click", () => {
    question.innerHTML = "Please think again";
    gif.src = "images/download.gif";
    yesBtn.innerHTML = "okay cutie";
    noBtn.innerHTML = "Dont wanna think";

    yesBtn.addEventListener("click", () => {
      question.innerHTML = "Hehehe, I knew it!";
      gif.src = "images/love.gif";
      yesBtn.style.display = "none";
      noBtn.style.display = "none";
    })

    noBtn.addEventListener("click", () => {
      question.innerHTML = "Think 1 last time";
      gif.src = "images/sadlife.gif";
      yesBtn.innerHTML = "okayy";
      noBtn.innerHTML = "Final no";

      yesBtn.addEventListener("click", () => {
        question.innerHTML = "Hehehe, I knew it!";
        gif.src = "images/love.gif";
        yesBtn.style.display = "none";
        noBtn.style.display = "none";
      });

      noBtn.addEventListener("click", () => {
        question.innerHTML = "aaaaaaahhh pleasssssss";
        gif.src = "images/run.gif";
        yesBtn.innerHTML = "No";
        noBtn.innerHTML = "Yes";

        noBtn.addEventListener("click", () => {
          question.innerHTML = "Hehehe, I knew it!";
          gif.src = "images/love.gif";
          yesBtn.style.display = "none";
          noBtn.style.display = "none";
        })
        // Hover effect for the "yes" button
        yesBtn.addEventListener("mouseover", () => {
          const yesBtnRect = yesBtn.getBoundingClientRect();
          const screenWidth = window.innerWidth;
          const screenHeight = window.innerHeight;
          const margin = 50; // Margin from each side
        
          // Calculate maximum available space for the button
          const maxX = screenWidth - yesBtnRect.width - margin * 2; // Considering margin on both sides
          const maxY = screenHeight - yesBtnRect.height - margin * 2; // Considering margin on both sides
        
          // Generate random position within the available space
          const randomX = Math.max(margin, Math.floor(Math.random() * maxX)) + margin; // Add margin to X position
          const randomY = Math.max(margin, Math.floor(Math.random() * maxY)) + margin; // Add margin to Y position
        
          yesBtn.style.left = randomX + "px";
          yesBtn.style.top = randomY + "px";
        });
        
        
      });
    });
  });
});




