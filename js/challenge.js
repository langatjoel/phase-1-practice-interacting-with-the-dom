document.addEventListener("DOMContentLoaded", () => {
    // Get necessary DOM elements

    const counterDisplay = document.getElementById("counter");
    const  minusButton = document.getElementById("minus");
    const plusButton = document.getElementById("plus");
    const heartButton = document.getElementById("heart");
    const pauseButton = document.getElementById("pause");
    const likesList = document.querySelector(".likes");
    const commentForm = document.getElementById("comment-form");
    const commentList = document.getElementById("comments");

     let counterValue = 0;
     let timer;

     // Function to update counter display
     function updateCounter() {
        counterDisplay.textContent = counterValue;
     }
    // Function to increment counter 
    function incrementCounter() {
        counterValue++;
        updateCounter();
    }
    // Funtion to decrement counter 
    function decrementCounter(){
        counterValue--;
        updateCounter();
    }
    // Function to handle clicking on the heart button
     function likeNumber (){
        const existingLike = document.getElementById(`like-${counterValue}`);
        if (existingLike) {
            const likeCount = existingLike.querySelector(".like-count");
            const count = parseInt(likeCount.textContent);
            likeCount.textContent = count + 1;
        } else {
            const newLike = document.createElement("li");
            newLike.setAttribute("id", `like-${counterValue}`);
            newLike.innerHTML = `${counterValue} has been liked <span class="like-count">1</span> times.`;
            likesList.appendChild(newLike);
        }
     }

    // Function to pause the counter
    function pauseCounter(){
        clearInterval(timer);
        minusButton.disabled = true;
        plusButton.disabled = true;
        heartButton.disabled = true;
        pauseButton.textContent = "resume;"
    }

    // Function to resume the counter
    function resumeCounter(){
        timer = setInterval(incrementCounter,1000)
        minusButton.disabled = false;
        plusButton.disabled = false;
        heartButton.disabled = false;
        pauseButton.textContent = "pause";
    }

         // Event listener for minus button
    minusButton.addEventListener("click", decrementCounter);

      // Event listener for plus button
      plusButton.addEventListener("click", incrementCounter);

      // Event listener for heart button 
      heartButton.addEventListener("click", likeNumber)

      // Event listener for pause/resume button 
      pauseButton.addEventListener("click", () =>{
        if (pauseButton.textContent === "pause"){
            pauseCounter();
        } else {
            resumeCounter();
        
        }
      });

      // Start the timer 
      timer = setInterval(incrementCounter, 1000);

      // Event listener for comment form submission
      commentForm.addEventListener("submit", event =>{
        event.preventDefault();
        const commentInput = commentForm.querySelector("input[type='text']");
        const commentText = commentInput.value;
        const commentItem = document.createElement("li");
        commentItem.textContent = commentText;
        commentList.appendChild(commentItem);
        commentInput.value = "";
    });
      })


