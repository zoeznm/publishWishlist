<template>
  <div class="section2" id="about">
    <div class="pattern">
      <div id="canvas"></div>
      <img src="../assets/img/eyes.png" alt="" class="img" />
      <img src="../assets/img/eyes.png" alt="" class="img1" />
      <img src="../assets/img/dream.png" alt="" class="img2" />
      <img src="../assets/img/dream.png" alt="" class="img3" />
      <img src="../assets/img/star.png" alt="" class="img4" />
      <img src="../assets/img/star.png" alt="" class="img5" />
      <img src="../assets/img/circle.png" alt="" class="img6" />
      <img src="../assets/img/circle.png" alt="" class="img7" />
      <hr class="long-line1" />
      <hr class="long-line2" />
      <hr class="long-line3" />
      <hr class="long-line4" />
      <hr class="short-line1" />
      <hr class="short-line2" />
      <hr class="short-line3" />
      <hr class="short-line4" />
    </div>
    <div class="card-container">
      <div class="card">
        <img src="../assets/img/frontcard1.png" alt="Front Card" class="card1" />
        <img src="../assets/img/backcard1.png" alt="Back Card" class="card2" />
      </div>
      <div class="card_2">
        <img src="../assets/img/frontcard2.png" alt="Front Card" class="card3" />
        <img src="../assets/img/backcard2.png" alt="Back Card" class="card4" />
      </div>
      <div class="card_3">
        <img src="../assets/img/frontcard3.png" alt="Front Card" class="card5" />
        <img src="../assets/img/backcard3.png" alt="Back Card" class="card6" />
      </div>
      <div class="card_4">
        <img src="../assets/img/frontcard4.png" alt="Front Card" class="card7" />
        <img src="../assets/img/backcard4.png" alt="Back Card" class="card8" />
      </div>
      <div class="card_5">
        <img src="../assets/img/frontcard5.png" alt="Front Card" class="card9" />
        <img src="../assets/img/backcard5.png" alt="Back Card" class="card10" />
      </div>
    </div>
    <div class="flame-wrapper">
      <div class="flame red"></div>
      <div class="flame orange"></div>
      <div class="flame gold"></div>
      <div class="flame white"></div>
      <div class="base blue"></div>
      <div class="base black"></div>
    </div>
    <div class="flame-wrapper1">
      <div class="flame red1"></div>
      <div class="flame orange1"></div>
      <div class="flame gold1"></div>
      <div class="flame white1"></div>
      <div class="base blue1"></div>
      <div class="base black1"></div>
    </div>
    <div class="title4">
      <h1 class="mainword"></h1>
      <h1></h1>
    </div>
  </div>
</template>
<script>
export default {
  name: 'MainComponent',
  data() {
    return {
      // 여기에 필요한 데이터 속성을 추가할 수 있습니다.
    };
  },
  mounted() {
    // ! 카드 뒤집기 _1번카드
    document.querySelector(".card").addEventListener("click", function () {
      if (this.classList.contains("flipped")) {
        // If the card is already flipped, navigate to top.html
        window.location.href = "/top";
      } else {
        // Otherwise, flip the card and bring it to the front
        this.classList.add("flipped");

        // Reset z-index for all cards
        document.querySelectorAll(".card-container .card").forEach((card) => {
          card.style.zIndex = 0;
        });

        // Set z-index for the clicked card
        this.style.zIndex = 4;
      }
    });

    // ! 카드 뒤집기_2번카드
    document.querySelector(".card_2").addEventListener("click", function () {
      if (this.classList.contains("flipped1")) {
        // If the card is already flipped, navigate to bottom.html
        window.location.href = "/bottom";
      } else {
        // Otherwise, flip the card and bring it to the front
        this.classList.add("flipped1");

        // Reset z-index for all cards
        document.querySelectorAll(".card-container .card_2").forEach((card) => {
          card.style.zIndex = 0;
        });

        // Set z-index for the clicked card
        this.style.zIndex = 4;
      }
    });

    // ! 카드 뒤집기_3번카드
    document.querySelector(".card_3").addEventListener("click", function () {
      if (this.classList.contains("flipped2")) {
        // If the card is already flipped, navigate to bag.html
        window.location.href = "/bag";
      } else {
        // Otherwise, flip the card and bring it to the front
        this.classList.add("flipped2");

        // Reset z-index for all cards
        document.querySelectorAll(".card-container .card_3").forEach((card) => {
          card.style.zIndex = 0;
        });

        // Set z-index for the clicked card
        this.style.zIndex = 4;
      }
    });

    // ! 카드 뒤집기_4번카드
    document.querySelector(".card_4").addEventListener("click", function () {
      if (this.classList.contains("flipped3")) {
        // If the card is already flipped, navigate to shoes.html
        window.location.href = "/shoes";
      } else {
        // Otherwise, flip the card and bring it to the front
        this.classList.add("flipped3");

        // Reset z-index for all cards
        document.querySelectorAll(".card-container .card_4").forEach((card) => {
          card.style.zIndex = 0;
        });

        // Set z-index for the clicked card
        this.style.zIndex = 4;
      }
    });

    // ! 카드 뒤집기_5번카드
    document.querySelector(".card_5").addEventListener("click", function () {
      if (this.classList.contains("flipped4")) {
        // If the card is already flipped, navigate to hat.html
        window.location.href = "/hat";
      } else {
        // Otherwise, flip the card and bring it to the front
        this.classList.add("flipped4");

        // Reset z-index for all cards
        document.querySelectorAll(".card-container .card_5").forEach((card) => {
          card.style.zIndex = 0;
        });

        // Set z-index for the clicked card
        this.style.zIndex = 4;
      }
    });
  }
}
</script>

<style scoped>
/* fonts 저장소 */
@import url("https://fonts.googleapis.com/css2?family=Jersey+15&family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Chakra+Petch:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&family=Jersey+15&family=Montserrat:ital,wght@0,100..900;1,100..900&family=Press+Start+2P&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Archivo+Black&display=swap");

* {
  list-style: none;
  padding: 0;
  margin: 0;
  -tap-highlight-color: rgba(255, 255, 255, 0);
  background-color: black;
}
.section2 {
  position: fixed;
  top: 0;
  left: 0;
  padding: 0;
  margin: 0;
  background-color: black;
  width: 100vw;
  height: 100vh;
}
@keyframes flicker {
  0% {
    transform: rotate(-1deg);
  }
  20% {
    transform: rotate(-1deg);
  }
  60% {
    transform: rotate(1deg);
  }
  90% {
    transform: rotate(1deg);
  }
  100% {
    transform: rotate(-1deg);
  }
}

.card1,
.card3,
.card5,
.card7,
.card9 {
  transform: rotateY(0deg);
}
.card2,
.card4,
.card6,
.card8,
.card10 {
  transform: rotateY(180deg);
}
.flipped {
  transform: rotateY(180deg);
}
.flipped1 {
  width: 18vw;
  transform: rotateY(180deg);
}
.flipped2 {
  width: 18vw;
  transform: rotateY(180deg);
}
.flipped3 {
  width: 18vw;
  transform: rotateY(180deg);
}
.flipped4 {
  width: 18vw;
  transform: rotateY(180deg);
}
.flipped5 {
  width: 18vw;
  transform: rotateY(180deg);
}



@media screen and (max-width: 600px) {
  .section {
    width: 100vw;
    background-color: black;
    position: absolute;
    right: 0;
    display: flex;
    flex-direction: column;
    place-items: center;
    min-height: 100vh;
  }
  .img {
    position: fixed;
    width: 6%;
    height: auto;
    top: 6%;
    left: 4%;
  }
  .img1 {
    position: fixed;
    width: 5%;
    height: auto;
    bottom: 6%;
    right: 4%;
  }
  .img2 {
    position: fixed;
    width: 6%;
    height: auto;
    top: 6%;
    left: 47%;
  }
  .img3 {
    position: fixed;
    width: 6%;
    height: auto;
    bottom: 6%;
    left: 47%;
  }
  .img4 {
    position: fixed;
    width: 7%;
    height: auto;
    top: 5.3%;
    right: 3.5%;
  }
  .img5 {
    position: fixed;
    width: 7%;
    height: auto;
    bottom: 5.3%;
    left: 3.5%;
  }
  .img6 {
    position: fixed;
    width: 6%;
    height: auto;
    left: 4%;
    top: 44%;
    z-index: 1;
  }
  .img7 {
    position: fixed;
    width: 6%;
    height: auto;
    right: 4%;
    top: 44%;
  }
  .long-line1 {
    position: fixed;
    width: 20%;
    border: 1px color= silver;
    top: 12%;
    left: 18%;
  }
  .long-line2 {
    position: fixed;
    width: 20%;
    border: 1px color= silver;
    top: 12%;
    right: 18%;
  }
  .long-line3 {
    position: fixed;
    width: 20%;
    border: 1px color= silver;
    bottom: 12%;
    right: 18%;
  }
  .long-line4 {
    position: fixed;
    width: 20%;
    border: 1px color= silver;
    bottom: 12%;
    left: 18%;
  }
  .short-line1 {
    position: fixed;
    height: 15%;
    border: 1px color= silver;
    top: 24%;
    left: 6.9%;
    z-index: 1;
  }
  .short-line2 {
    position: fixed;
    height: 15%;
    border: 1px color= silver;
    top: 62%;
    left: 6.9%;
    z-index: 1;
  }
  .short-line3 {
    position: fixed;
    height: 15%;
    border: 1px color= silver;
    top: 62%;
    right: 6.9%;
  }
  .short-line4 {
    position: fixed;
    height: 15%;
    border: 1px color= silver;
    top: 24%;
    right: 6.9%;
  }
  .card-container {
    position: fixed;
    top: 24%;
    width: 68vw;
    height: 52vh;
  }
  .card {
    width: 18vw;
    height: 52vh;
    position: fixed;
    transform-style: preserve-3d;
    transition: transform 1.5s;
    display: flex;
    justify-content: center;
    align-items: center;
    left: 41%;
    z-index: 3;
  }
  .card1,
  .card2 {
    position: fixed;
    width: 18vw;
    height: 56vh;
    backface-visibility: hidden;
  }
  .card1 {
    z-index: 2;
    transform: rotateY(0deg);
  }
  .card2 {
    z-index: 3;
    transform: rotateY(180deg);
  }
  .card_2 {
    width: 18vw;
    height: 52vh;
    position: fixed;
    transform-style: preserve-3d;
    transition: transform 1.5s;
    display: flex;
    justify-content: center;
    align-items: center;
    left: 28%;
    z-index: 2;
    /* transform: rotate(-5deg); */
  }
  .card3,
  .card4 {
    position: fixed;
    width: 18vw;
    height: 56vh;
    backface-visibility: hidden;
  }
  .card3 {
    z-index: 2;
    transform: rotateY(0deg);
  }
  .card4 {
    z-index: 1;
    transform: rotateY(180deg);
  }
  .card_3 {
    width: 18vw;
    height: 52vh;
    position: fixed;
    transform-style: preserve-3d;
    transition: transform 1.5s;
    display: flex;
    justify-content: center;
    align-items: center;
    right: 28%;
    z-index: 2;
  }
  .card5,
  .card6 {
    position: fixed;
    width: 18vw;
    height: 56vh;
    backface-visibility: hidden;
  }
  .card5 {
    z-index: 2;
    transform: rotateY(0deg);
  }
  .card6 {
    z-index: 1;
    transform: rotateY(180deg);
  }
  .card_4 {
    width: 18vw;
    height: 52vh;
    position: fixed;
    transform-style: preserve-3d;
    transition: transform 1.5s;
    display: flex;
    justify-content: center;
    align-items: center;
    left: 16%;
    z-index: 1;
    /* transform: rotate(-5deg); */
  }
  .card7,
  .card8 {
    position: fixed;
    width: 18vw;
    height: 56vh;
    backface-visibility: hidden;
  }
  .card7 {
    z-index: 2;
    transform: rotateY(0deg);
  }
  .card8 {
    z-index: 1;
    transform: rotateY(180deg);
  }
  .card_5 {
    width: 18vw;
    height: 52vh;
    position: fixed;
    transform-style: preserve-3d;
    transition: transform 1.5s;
    display: flex;
    justify-content: center;
    align-items: center;
    right: 16%;
    z-index: 1;
    /* transform: rotate(-5deg); */
  }
  .card9,
  .card10 {
    position: fixed;
    width: 18vw;
    height: 56vh;
    backface-visibility: hidden;
  }
  .card9 {
    z-index: 2;
    transform: rotateY(0deg);
  }
  .card10 {
    z-index: 1;
    transform: rotateY(180deg);
  }
  /* fire */
  .red {
    width: 6.2vw;
    height: 10vh;
    background: orangered;
    box-shadow: 0px 0px 10px 5px orangered;
  }
  .orange {
    left: 1vw;
    width: 4.3vw;
    height: 7vh;
    background: orange;
    box-shadow: 0px 0px 12px 6px orange;
  }

  .gold {
    left: 1.5vw;
    width: 3.4vw;
    height: 5.5vh;
    background: gold;
    box-shadow: 0px 0px 9px 4px gold;
  }

  .white {
    left: 1.9vw;
    width: 2.5vw;
    height: 4vh;
    background: lightyellow;
    box-shadow: 0px 0px 9px 4px lightyellow;
  }

  .blue {
    left: 2.5vw;
    width: 1.2vw;
    height: 3vh;
    background: darkblue;
    box-shadow: 0px 0px 15px 10px darkblue;
  }

  .black {
    left: 2vw;
    width: 3vw;
    height: 4vh;
    bottom: -3.5vw;
    background: black;
    box-shadow: 0px 0px 15px 10px black;
  }
  .base {
    border-radius: 50%;
    position: absolute;
  }
  .flame-wrapper {
    position: fixed;
    animation: flicker 3ms ease-in infinite;
    top: 55%;
    left: 3.8%;
    z-index: 2;
  }
  .flame {
    bottom: 0;
    position: absolute;
    border-radius: 50% 0% 50% 50%;
    transform: rotate(-45deg);
  }
  .red1 {
    width: 5.6vw;
    height: 10vh;
    background: orangered;
    box-shadow: 0px 0px 10px 5px orangered;
  }
  .orange1 {
    left: 0.6vw;
    width: 4.3vw;
    height: 7vh;
    background: orange;
    box-shadow: 0px 0px 12px 6px orange;
  }

  .gold1 {
    left: 1.2vw;
    width: 3.4vw;
    height: 5.5vh;
    background: gold;
    box-shadow: 0px 0px 9px 4px gold;
  }

  .white1 {
    left: 1.7vw;
    width: 2.5vw;
    height: 4vh;
    background: lightyellow;
    box-shadow: 0px 0px 9px 4px lightyellow;
  }

  .blue1 {
    left: 2.5vw;
    width: 1.2vw;
    height: 3vh;
    background: darkblue;
    box-shadow: 0px 0px 15px 10px darkblue;
  }

  .black1 {
    left: 2vw;
    width: 3vw;
    height: 4vh;
    bottom: -3.5vw;
    background: black;
    box-shadow: 0px 0px 15px 10px black;
  }
  .base {
    border-radius: 50%;
    position: absolute;
  }
  .flame-wrapper1 {
    position: fixed;
    animation: flicker 3ms ease-in infinite;
    top: 55%;
    right: 9.7%;
  }
}

@media screen and (min-width: 601px) and (max-width: 1024px) {
  .section {
    width: 100vw;
    background-color: black;
    position: absolute;
    right: 0;
    display: flex;
    flex-direction: column;
    place-items: center;
    min-height: 100vh;
  }
  .img {
    position: fixed;
    width: 6%;
    height: auto;
    top: 6%;
    left: 4%;
  }
  .img1 {
    position: fixed;
    width: 5%;
    height: auto;
    bottom: 6%;
    right: 4%;
  }
  .img2 {
    position: fixed;
    width: 6%;
    height: auto;
    top: 6%;
    left: 47%;
  }
  .img3 {
    position: fixed;
    width: 6%;
    height: auto;
    bottom: 6%;
    left: 47%;
  }
  .img4 {
    position: fixed;
    width: 7%;
    height: auto;
    top: 5.3%;
    right: 3.5%;
  }
  .img5 {
    position: fixed;
    width: 7%;
    height: auto;
    bottom: 5.3%;
    left: 3.5%;
  }
  .img6 {
    position: fixed;
    width: 6%;
    height: auto;
    left: 4%;
    top: 44%;
    z-index: 1;
  }
  .img7 {
    position: fixed;
    width: 6%;
    height: auto;
    right: 4%;
    top: 44%;
  }
  .long-line1 {
    position: fixed;
    width: 20%;
    border: 1px color= silver;
    top: 12%;
    left: 18%;
  }
  .long-line2 {
    position: fixed;
    width: 20%;
    border: 1px color= silver;
    top: 12%;
    right: 18%;
  }
  .long-line3 {
    position: fixed;
    width: 20%;
    border: 1px color= silver;
    bottom: 12%;
    right: 18%;
  }
  .long-line4 {
    position: fixed;
    width: 20%;
    border: 1px color= silver;
    bottom: 12%;
    left: 18%;
  }
  .short-line1 {
    position: fixed;
    height: 15%;
    border: 1px color= silver;
    top: 24%;
    left: 6.9%;
    z-index: 1;
  }
  .short-line2 {
    position: fixed;
    height: 15%;
    border: 1px color= silver;
    top: 62%;
    left: 6.9%;
    z-index: 1;
  }
  .short-line3 {
    position: fixed;
    height: 15%;
    border: 1px color= silver;
    top: 62%;
    right: 6.9%;
  }
  .short-line4 {
    position: fixed;
    height: 15%;
    border: 1px color= silver;
    top: 24%;
    right: 6.9%;
  }
  .card-container {
    position: fixed;
    top: 24%;
    width: 68vw;
    height: 52vh;
  }
  .card {
    width: 18vw;
    height: 52vh;
    position: fixed;
    transform-style: preserve-3d;
    transition: transform 1.5s;
    display: flex;
    justify-content: center;
    align-items: center;
    left: 41%;
    z-index: 3;
  }
  .card1,
  .card2 {
    position: fixed;
    width: 18vw;
    height: 56vh;
    backface-visibility: hidden;
  }
  .card1 {
    z-index: 2;
    transform: rotateY(0deg);
  }
  .card2 {
    z-index: 3;
    transform: rotateY(180deg);
  }
  .card_2 {
    width: 18vw;
    height: 52vh;
    position: fixed;
    transform-style: preserve-3d;
    transition: transform 1.5s;
    display: flex;
    justify-content: center;
    align-items: center;
    left: 28%;
    z-index: 2;
    /* transform: rotate(-5deg); */
  }
  .card3,
  .card4 {
    position: fixed;
    width: 18vw;
    height: 56vh;
    backface-visibility: hidden;
  }
  .card3 {
    z-index: 2;
    transform: rotateY(0deg);
  }
  .card4 {
    z-index: 1;
    transform: rotateY(180deg);
  }
  .card_3 {
    width: 18vw;
    height: 52vh;
    position: fixed;
    transform-style: preserve-3d;
    transition: transform 1.5s;
    display: flex;
    justify-content: center;
    align-items: center;
    right: 28%;
    z-index: 2;
  }
  .card5,
  .card6 {
    position: fixed;
    width: 18vw;
    height: 56vh;
    backface-visibility: hidden;
  }
  .card5 {
    z-index: 2;
    transform: rotateY(0deg);
  }
  .card6 {
    z-index: 1;
    transform: rotateY(180deg);
  }
  .card_4 {
    width: 18vw;
    height: 52vh;
    position: fixed;
    transform-style: preserve-3d;
    transition: transform 1.5s;
    display: flex;
    justify-content: center;
    align-items: center;
    left: 16%;
    z-index: 1;
    /* transform: rotate(-5deg); */
  }
  .card7,
  .card8 {
    position: fixed;
    width: 18vw;
    height: 56vh;
    backface-visibility: hidden;
  }
  .card7 {
    z-index: 2;
    transform: rotateY(0deg);
  }
  .card8 {
    z-index: 1;
    transform: rotateY(180deg);
  }
  .card_5 {
    width: 18vw;
    height: 52vh;
    position: fixed;
    transform-style: preserve-3d;
    transition: transform 1.5s;
    display: flex;
    justify-content: center;
    align-items: center;
    right: 16%;
    z-index: 1;
    /* transform: rotate(-5deg); */
  }
  .card9,
  .card10 {
    position: fixed;
    width: 18vw;
    height: 56vh;
    backface-visibility: hidden;
  }
  .card9 {
    z-index: 2;
    transform: rotateY(0deg);
  }
  .card10 {
    z-index: 1;
    transform: rotateY(180deg);
  }
  /* fire */
  .red {
    width: 6.2vw;
    height: 10vh;
    background: orangered;
    box-shadow: 0px 0px 10px 5px orangered;
  }
  .orange {
    left: 1vw;
    width: 4.3vw;
    height: 7vh;
    background: orange;
    box-shadow: 0px 0px 12px 6px orange;
  }

  .gold {
    left: 1.5vw;
    width: 3.4vw;
    height: 5.5vh;
    background: gold;
    box-shadow: 0px 0px 9px 4px gold;
  }

  .white {
    left: 1.9vw;
    width: 2.5vw;
    height: 4vh;
    background: lightyellow;
    box-shadow: 0px 0px 9px 4px lightyellow;
  }

  .blue {
    left: 2.5vw;
    width: 1.2vw;
    height: 3vh;
    background: darkblue;
    box-shadow: 0px 0px 15px 10px darkblue;
  }

  .black {
    left: 2vw;
    width: 3vw;
    height: 4vh;
    bottom: -3.5vw;
    background: black;
    box-shadow: 0px 0px 15px 10px black;
  }
  .base {
    border-radius: 50%;
    position: absolute;
  }
  .flame-wrapper {
    position: fixed;
    animation: flicker 3ms ease-in infinite;
    top: 55%;
    left: 3.8%;
    z-index: 2;
  }
  .flame {
    bottom: 0;
    position: absolute;
    border-radius: 50% 0% 50% 50%;
    transform: rotate(-45deg);
  }
  .red1 {
    width: 5.6vw;
    height: 10vh;
    background: orangered;
    box-shadow: 0px 0px 10px 5px orangered;
  }
  .orange1 {
    left: 0.6vw;
    width: 4.3vw;
    height: 7vh;
    background: orange;
    box-shadow: 0px 0px 12px 6px orange;
  }

  .gold1 {
    left: 1.2vw;
    width: 3.4vw;
    height: 5.5vh;
    background: gold;
    box-shadow: 0px 0px 9px 4px gold;
  }

  .white1 {
    left: 1.7vw;
    width: 2.5vw;
    height: 4vh;
    background: lightyellow;
    box-shadow: 0px 0px 9px 4px lightyellow;
  }

  .blue1 {
    left: 2.5vw;
    width: 1.2vw;
    height: 3vh;
    background: darkblue;
    box-shadow: 0px 0px 15px 10px darkblue;
  }

  .black1 {
    left: 2vw;
    width: 3vw;
    height: 4vh;
    bottom: -3.5vw;
    background: black;
    box-shadow: 0px 0px 15px 10px black;
  }
  .base {
    border-radius: 50%;
    position: absolute;
  }
  .flame-wrapper1 {
    position: fixed;
    animation: flicker 3ms ease-in infinite;
    top: 55%;
    right: 9.7%;
  }
}

@media screen and (min-width: 1025px) and (max-width: 1366px) {
  .section {
    width: 100vw;
    background-color: black;
    position: absolute;
    right: 0;
    display: flex;
    flex-direction: column;
    place-items: center;
    min-height: 100vh;
  }
  .img {
    position: fixed;
    width: 6%;
    height: auto;
    top: 6%;
    left: 4%;
  }
  .img1 {
    position: fixed;
    width: 5%;
    height: auto;
    bottom: 6%;
    right: 4%;
  }
  .img2 {
    position: fixed;
    width: 6%;
    height: auto;
    top: 6%;
    left: 47%;
  }
  .img3 {
    position: fixed;
    width: 6%;
    height: auto;
    bottom: 6%;
    left: 47%;
  }
  .img4 {
    position: fixed;
    width: 7%;
    height: auto;
    top: 5.3%;
    right: 3.5%;
  }
  .img5 {
    position: fixed;
    width: 7%;
    height: auto;
    bottom: 5.3%;
    left: 3.5%;
  }
  .img6 {
    position: fixed;
    width: 6%;
    height: auto;
    left: 4%;
    top: 44%;
    z-index: 1;
  }
  .img7 {
    position: fixed;
    width: 6%;
    height: auto;
    right: 4%;
    top: 44%;
  }
  .long-line1 {
    position: fixed;
    width: 20%;
    border: 1px color= silver;
    top: 12%;
    left: 18%;
  }
  .long-line2 {
    position: fixed;
    width: 20%;
    border: 1px color= silver;
    top: 12%;
    right: 18%;
  }
  .long-line3 {
    position: fixed;
    width: 20%;
    border: 1px color= silver;
    bottom: 12%;
    right: 18%;
  }
  .long-line4 {
    position: fixed;
    width: 20%;
    border: 1px color= silver;
    bottom: 12%;
    left: 18%;
  }
  .short-line1 {
    position: fixed;
    height: 15%;
    border: 1px color= silver;
    top: 24%;
    left: 6.9%;
    z-index: 1;
  }
  .short-line2 {
    position: fixed;
    height: 15%;
    border: 1px color= silver;
    top: 62%;
    left: 6.9%;
    z-index: 1;
  }
  .short-line3 {
    position: fixed;
    height: 15%;
    border: 1px color= silver;
    top: 62%;
    right: 6.9%;
  }
  .short-line4 {
    position: fixed;
    height: 15%;
    border: 1px color= silver;
    top: 24%;
    right: 6.9%;
  }
  .card-container {
    position: fixed;
    top: 24%;
    width: 68vw;
    height: 52vh;
  }
  .card {
    width: 18vw;
    height: 52vh;
    position: fixed;
    transform-style: preserve-3d;
    transition: transform 1.5s;
    display: flex;
    justify-content: center;
    align-items: center;
    left: 41%;
    z-index: 3;
  }
  .card1,
  .card2 {
    position: fixed;
    width: 18vw;
    height: 56vh;
    backface-visibility: hidden;
  }
  .card1 {
    z-index: 2;
    transform: rotateY(0deg);
  }
  .card2 {
    z-index: 3;
    transform: rotateY(180deg);
  }
  .card_2 {
    width: 18vw;
    height: 52vh;
    position: fixed;
    transform-style: preserve-3d;
    transition: transform 1.5s;
    display: flex;
    justify-content: center;
    align-items: center;
    left: 28%;
    z-index: 2;
    /* transform: rotate(-5deg); */
  }
  .card3,
  .card4 {
    position: fixed;
    width: 18vw;
    height: 56vh;
    backface-visibility: hidden;
  }
  .card3 {
    z-index: 2;
    transform: rotateY(0deg);
  }
  .card4 {
    z-index: 1;
    transform: rotateY(180deg);
  }
  .card_3 {
    width: 18vw;
    height: 52vh;
    position: fixed;
    transform-style: preserve-3d;
    transition: transform 1.5s;
    display: flex;
    justify-content: center;
    align-items: center;
    right: 28%;
    z-index: 2;
  }
  .card5,
  .card6 {
    position: fixed;
    width: 18vw;
    height: 56vh;
    backface-visibility: hidden;
  }
  .card5 {
    z-index: 2;
    transform: rotateY(0deg);
  }
  .card6 {
    z-index: 1;
    transform: rotateY(180deg);
  }
  .card_4 {
    width: 18vw;
    height: 52vh;
    position: fixed;
    transform-style: preserve-3d;
    transition: transform 1.5s;
    display: flex;
    justify-content: center;
    align-items: center;
    left: 16%;
    z-index: 1;
    /* transform: rotate(-5deg); */
  }
  .card7,
  .card8 {
    position: fixed;
    width: 18vw;
    height: 56vh;
    backface-visibility: hidden;
  }
  .card7 {
    z-index: 2;
    transform: rotateY(0deg);
  }
  .card8 {
    z-index: 1;
    transform: rotateY(180deg);
  }
  .card_5 {
    width: 18vw;
    height: 52vh;
    position: fixed;
    transform-style: preserve-3d;
    transition: transform 1.5s;
    display: flex;
    justify-content: center;
    align-items: center;
    right: 16%;
    z-index: 1;
    /* transform: rotate(-5deg); */
  }
  .card9,
  .card10 {
    position: fixed;
    width: 18vw;
    height: 56vh;
    backface-visibility: hidden;
  }
  .card9 {
    z-index: 2;
    transform: rotateY(0deg);
  }
  .card10 {
    z-index: 1;
    transform: rotateY(180deg);
  }
  /* fire */
  .red {
    width: 6.2vw;
    height: 10vh;
    background: orangered;
    box-shadow: 0px 0px 10px 5px orangered;
  }
  .orange {
    left: 1vw;
    width: 4.3vw;
    height: 7vh;
    background: orange;
    box-shadow: 0px 0px 12px 6px orange;
  }

  .gold {
    left: 1.5vw;
    width: 3.4vw;
    height: 5.5vh;
    background: gold;
    box-shadow: 0px 0px 9px 4px gold;
  }

  .white {
    left: 1.9vw;
    width: 2.5vw;
    height: 4vh;
    background: lightyellow;
    box-shadow: 0px 0px 9px 4px lightyellow;
  }

  .blue {
    left: 2.5vw;
    width: 1.2vw;
    height: 3vh;
    background: darkblue;
    box-shadow: 0px 0px 15px 10px darkblue;
  }

  .black {
    left: 2vw;
    width: 3vw;
    height: 4vh;
    bottom: -3.5vw;
    background: black;
    box-shadow: 0px 0px 15px 10px black;
  }
  .base {
    border-radius: 50%;
    position: absolute;
  }
  .flame-wrapper {
    position: fixed;
    animation: flicker 3ms ease-in infinite;
    top: 55%;
    left: 3.8%;
    z-index: 2;
  }
  .flame {
    bottom: 0;
    position: absolute;
    border-radius: 50% 0% 50% 50%;
    transform: rotate(-45deg);
  }
  .red1 {
    width: 5.6vw;
    height: 10vh;
    background: orangered;
    box-shadow: 0px 0px 10px 5px orangered;
  }
  .orange1 {
    left: 0.6vw;
    width: 4.3vw;
    height: 7vh;
    background: orange;
    box-shadow: 0px 0px 12px 6px orange;
  }

  .gold1 {
    left: 1.2vw;
    width: 3.4vw;
    height: 5.5vh;
    background: gold;
    box-shadow: 0px 0px 9px 4px gold;
  }

  .white1 {
    left: 1.7vw;
    width: 2.5vw;
    height: 4vh;
    background: lightyellow;
    box-shadow: 0px 0px 9px 4px lightyellow;
  }

  .blue1 {
    left: 2.5vw;
    width: 1.2vw;
    height: 3vh;
    background: darkblue;
    box-shadow: 0px 0px 15px 10px darkblue;
  }

  .black1 {
    left: 2vw;
    width: 3vw;
    height: 4vh;
    bottom: -3.5vw;
    background: black;
    box-shadow: 0px 0px 15px 10px black;
  }
  .base {
    border-radius: 50%;
    position: absolute;
  }
  .flame-wrapper1 {
    position: fixed;
    animation: flicker 3ms ease-in infinite;
    top: 55%;
    right: 9.7%;
  }
}

@media screen and (min-width: 1367px) {
  .section {
    width: 100vw;
    background-color: black;
    position: absolute;
    right: 0;
    display: flex;
    flex-direction: column;
    place-items: center;
    min-height: 100vh;
  }
  .img {
    position: fixed;
    width: 6%;
    height: auto;
    top: 6%;
    left: 4%;
  }
  .img1 {
    position: fixed;
    width: 5%;
    height: auto;
    bottom: 6%;
    right: 4%;
  }
  .img2 {
    position: fixed;
    width: 6%;
    height: auto;
    top: 6%;
    left: 47%;
  }
  .img3 {
    position: fixed;
    width: 6%;
    height: auto;
    bottom: 6%;
    left: 47%;
  }
  .img4 {
    position: fixed;
    width: 7%;
    height: auto;
    top: 5.3%;
    right: 3.5%;
  }
  .img5 {
    position: fixed;
    width: 7%;
    height: auto;
    bottom: 5.3%;
    left: 3.5%;
  }
  .img6 {
    position: fixed;
    width: 6%;
    height: auto;
    left: 4%;
    top: 44%;
    z-index: 1;
  }
  .img7 {
    position: fixed;
    width: 6%;
    height: auto;
    right: 4%;
    top: 44%;
  }
  .long-line1 {
    position: fixed;
    width: 20%;
    border: 1px color= silver;
    top: 12%;
    left: 18%;
    z-index: 3;
  }
  .long-line2 {
    position: fixed;
    width: 20%;
    border: 1px color= silver;
    top: 12%;
    right: 18%;
    z-index: 3;
  }
  .long-line3 {
    position: fixed;
    width: 20%;
    border: 1px color= silver;
    bottom: 12%;
    right: 18%;
  }
  .long-line4 {
    position: fixed;
    width: 20%;
    border: 1px color= silver;
    bottom: 12%;
    left: 18%;
    z-index: 3;
  }
  .short-line1 {
    position: fixed;
    height: 15%;
    border: 1px color= silver;
    top: 24%;
    left: 6.9%;
    z-index: 3;
  }
  .short-line2 {
    position: fixed;
    height: 15%;
    border: 1px color= silver;
    top: 62%;
    left: 6.9%;
    z-index: 3;
  }
  .short-line3 {
    position: fixed;
    height: 15%;
    border: 1px color= silver;
    top: 62%;
    right: 6.9%;
    z-index: 3;
  }
  .short-line4 {
    position: fixed;
    height: 15%;
    border: 1px color= silver;
    top: 24%;
    right: 6.9%;
    z-index: 3;
  }
  .card-container {
    position: fixed;
    top: 24%;
    width: 68vw;
    height: 52vh;
  }
  .card {
    width: 18vw;
    height: 52vh;
    position: fixed;
    transform-style: preserve-3d;
    transition: transform 1.5s;
    display: flex;
    justify-content: center;
    align-items: center;
    left: 41%;
    z-index: 3;
  }
  .card1,
  .card2 {
    position: fixed;
    width: 18vw;
    height: 56vh;
    backface-visibility: hidden;
  }
  .card1 {
    z-index: 2;
    transform: rotateY(0deg);
  }
  .card2 {
    z-index: 3;
    transform: rotateY(180deg);
  }
  .card_2 {
    width: 18vw;
    height: 52vh;
    position: fixed;
    transform-style: preserve-3d;
    transition: transform 1.5s;
    display: flex;
    justify-content: center;
    align-items: center;
    left: 28%;
    z-index: 2;
    /* transform: rotate(-5deg); */
  }
  .card3,
  .card4 {
    position: fixed;
    width: 18vw;
    height: 56vh;
    backface-visibility: hidden;
  }
  .card3 {
    z-index: 2;
    transform: rotateY(0deg);
  }
  .card4 {
    z-index: 1;
    transform: rotateY(180deg);
  }
  .card_3 {
    width: 18vw;
    height: 52vh;
    position: fixed;
    transform-style: preserve-3d;
    transition: transform 1.5s;
    display: flex;
    justify-content: center;
    align-items: center;
    right: 28%;
    z-index: 2;
  }
  .card5,
  .card6 {
    position: fixed;
    width: 18vw;
    height: 56vh;
    backface-visibility: hidden;
  }
  .card5 {
    z-index: 2;
    transform: rotateY(0deg);
  }
  .card6 {
    z-index: 1;
    transform: rotateY(180deg);
  }
  .card_4 {
    width: 18vw;
    height: 52vh;
    position: fixed;
    transform-style: preserve-3d;
    transition: transform 1.5s;
    display: flex;
    justify-content: center;
    align-items: center;
    left: 16%;
    z-index: 1;
    /* transform: rotate(-5deg); */
  }
  .card7,
  .card8 {
    position: fixed;
    width: 18vw;
    height: 56vh;
    backface-visibility: hidden;
  }
  .card7 {
    z-index: 2;
    transform: rotateY(0deg);
  }
  .card8 {
    z-index: 1;
    transform: rotateY(180deg);
  }
  .card_5 {
    width: 18vw;
    height: 52vh;
    position: fixed;
    transform-style: preserve-3d;
    transition: transform 1.5s;
    display: flex;
    justify-content: center;
    align-items: center;
    right: 16%;
    z-index: 1;
    /* transform: rotate(-5deg); */
  }
  .card9,
  .card10 {
    position: fixed;
    width: 18vw;
    height: 56vh;
    backface-visibility: hidden;
  }
  .card9 {
    z-index: 2;
    transform: rotateY(0deg);
  }
  .card10 {
    z-index: 1;
    transform: rotateY(180deg);
  }
  /* fire */
  .red {
    width: 6.2vw;
    height: 10vh;
    background: orangered;
    box-shadow: 0px 0px 10px 5px orangered;
  }
  .orange {
    left: 1vw;
    width: 4.3vw;
    height: 7vh;
    background: orange;
    box-shadow: 0px 0px 12px 6px orange;
  }

  .gold {
    left: 1.5vw;
    width: 3.4vw;
    height: 5.5vh;
    background: gold;
    box-shadow: 0px 0px 9px 4px gold;
  }

  .white {
    left: 1.9vw;
    width: 2.5vw;
    height: 4vh;
    background: lightyellow;
    box-shadow: 0px 0px 9px 4px lightyellow;
  }

  .blue {
    left: 2.5vw;
    width: 1.2vw;
    height: 3vh;
    background: darkblue;
    box-shadow: 0px 0px 15px 10px darkblue;
  }

  .black {
    left: 2vw;
    width: 3vw;
    height: 4vh;
    bottom: -3.5vw;
    background: black;
    box-shadow: 0px 0px 15px 10px black;
  }
  .base {
    border-radius: 50%;
    position: absolute;
  }
  .flame-wrapper {
    position: fixed;
    animation: flicker 3ms ease-in infinite;
    top: 55%;
    left: 3.8%;
    z-index: 2;
  }
  .flame {
    bottom: 0;
    position: absolute;
    border-radius: 50% 0% 50% 50%;
    transform: rotate(-45deg);
  }
  .red1 {
    width: 5.6vw;
    height: 10vh;
    background: orangered;
    box-shadow: 0px 0px 10px 5px orangered;
  }
  .orange1 {
    left: 0.6vw;
    width: 4.3vw;
    height: 7vh;
    background: orange;
    box-shadow: 0px 0px 12px 6px orange;
  }

  .gold1 {
    left: 1.2vw;
    width: 3.4vw;
    height: 5.5vh;
    background: gold;
    box-shadow: 0px 0px 9px 4px gold;
  }

  .white1 {
    left: 1.7vw;
    width: 2.5vw;
    height: 4vh;
    background: lightyellow;
    box-shadow: 0px 0px 9px 4px lightyellow;
  }

  .blue1 {
    left: 2.5vw;
    width: 1.2vw;
    height: 3vh;
    background: darkblue;
    box-shadow: 0px 0px 15px 10px darkblue;
  }

  .black1 {
    left: 2vw;
    width: 3vw;
    height: 4vh;
    bottom: -3.5vw;
    background: black;
    box-shadow: 0px 0px 15px 10px black;
  }
  .base {
    border-radius: 50%;
    position: absolute;
  }
  .flame-wrapper1 {
    position: fixed;
    animation: flicker 3ms ease-in infinite;
    top: 55%;
    right: 9.7%;
  }
}
</style>
