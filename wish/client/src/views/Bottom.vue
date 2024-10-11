<template>
    <div class="shooting-stars">
      <div class="scope bigger">
        <div class="crosshair-vertical"></div>
        <div class="crosshair-horizontal"></div>
        <div class="center-dot"></div>
        <div id="random-points"></div>
      </div>

      <h1 class="neon-text blinking">Hit the target!</h1>
      <a href="/main" class="back">Back</a>
      <div class="info-box" id="info-box"></div>
      <div class="controls">
        <button id="up" class="game-button up">▲</button>
        <button id="left" class="game-button left">◀</button>
        <button id="down" class="game-button down">▼</button>
        <button id="right" class="game-button right">▶</button>
        <button id="restart" class="restart-button restart">re</button>
        <button id="save" class="save-button save">save</button>
      </div>
    </div>
  <div class="saved-boxes-container" id="saved-boxes-container"></div>
</template>

<script>
export default {
  name: "BottomComponent",
  mounted() {
    document.addEventListener("DOMContentLoaded", () => {
  const scope = document.querySelector(".scope");
  const centerDot = document.querySelector(".center-dot");
  const crosshairVertical = document.querySelector(".crosshair-vertical");
  const crosshairHorizontal = document.querySelector(
    ".crosshair-horizontal"
  );
  const infoBox = document.getElementById("info-box");
  const savedBoxesContainer = document.getElementById(
    "saved-boxes-container"
  );
  const saveButton = document.getElementById("save");
  const pointCount = 5; // 랜덤 점 개수
  let points = [];
  const moveStep = 5; // 점 이동 단위 거리

  const textOptions = [
    "▶Amomento_DENIM SHORTS",
    "▶Our Legacy_TREBLE CUT",
    "▶roa_Canvas Shorts",
    "▶Yproject_Snap Off Jeans",
    "▶AFRD_VTG AFRD SHORTS",
  ];

  const linkOptions = [
    "https://amomento.co/product/detail.html?product_no=771&cate_no=48&display_group=1",
    "https://www.ourlegacy.com/treble-cut-washed-grey-torino-stripe",
    "https://www.roa-hiking.com/en-kr/products/roa-clothing-hunting-shorts-black-j277278?variant=47460113678668",
    "https://www.yproject.fr/shop/denim/snap-off-jeans-heavy-sw-blue",
    "https://thegreatalfred.com/product/detail.html?product_no=136&cate_no=1&display_group=2",
  ];

  let saveCount = 0;

  // 초기화
  resetGame();

  // 점 이동 함수
  function moveDot(dx, dy) {
    const rect = scope.getBoundingClientRect();
    const radius = rect.width / 2;
    const dotRect = centerDot.getBoundingClientRect();

    let x = dotRect.left - rect.left + dx + dotRect.width / 2;
    let y = dotRect.top - rect.top + dy + dotRect.height / 2;

    // 원 안에서의 움직임 제한
    const distance = Math.sqrt((x - radius) ** 2 + (y - radius) ** 2);

    if (distance <= radius) {
      centerDot.style.left = `${(x / rect.width) * 100}%`;
      centerDot.style.top = `${(y / rect.height) * 100}%`;

      // 십자선 위치 업데이트
      updateCrosshair(x, y, radius);

      // 점 위치 감지 및 정보 표시
      let pointFound = false;
      points.forEach((point) => {
        const pointRect = point.getBoundingClientRect();
        const pointX = pointRect.left - rect.left + pointRect.width / 2;
        const pointY = pointRect.top - rect.top + pointRect.height / 2;

        const distance = Math.sqrt((x - pointX) ** 2 + (y - pointY) ** 2);

        if (distance < 5) {
          // 조준점과 점이 가까우면
          infoBox.style.display = "flex";
          infoBox.textContent = "Got it!!";
          infoBox.setAttribute("data-detected", "true");
          pointFound = true;
        }
      });

      if (!pointFound) {
        infoBox.style.display = "none";
        infoBox.removeAttribute("data-detected");
      }
    }
  }

  function updateCrosshair(x, y) {
    crosshairVertical.style.left = `${x}px`;
    crosshairHorizontal.style.top = `${y}px`;
  }

  // 방향 버튼 이벤트 리스너 추가
  document
    .getElementById("up")
    .addEventListener("click", () => moveDot(0, -moveStep));
  document
    .getElementById("left")
    .addEventListener("click", () => moveDot(-moveStep, 0));
  document
    .getElementById("down")
    .addEventListener("click", () => moveDot(0, moveStep));
  document
    .getElementById("right")
    .addEventListener("click", () => moveDot(moveStep, 0));

  // 키보드 이벤트 리스너 추가
  document.addEventListener("keydown", (event) => {
    switch (event.key) {
      case "ArrowUp":
        moveDot(0, -moveStep);
        break;
      case "ArrowLeft":
        moveDot(-moveStep, 0);
        break;
      case "ArrowDown":
        moveDot(0, moveStep);
        break;
      case "ArrowRight":
        moveDot(moveStep, 0);
        break;
      default:
        // 다른 키가 눌렸을 때의 동작을 정의합니다.
        console.log(`Unrecognized key: ${event.key}`);
        break;
    }
  });

  // 다시하기 버튼 이벤트 리스너 추가
  document.getElementById("restart").addEventListener("click", resetGame);

  // 저장하기 버튼 이벤트 리스너 추가
  document.getElementById("save").addEventListener("click", saveInfoBox);

  // 게임 초기화 함수
  function resetGame() {
    // 현재 상태 초기화
    centerDot.style.left = "50%";
    centerDot.style.top = "50%";
    crosshairVertical.style.left = "50%";
    crosshairHorizontal.style.top = "50%";

    // 랜덤 점 생성
    createRandomPoints();

    // 정보 박스 숨기기
    infoBox.style.display = "none";
    infoBox.removeAttribute("data-detected");
    saveCount = 0;
    saveButton.disabled = false;
  }

  // 랜덤 점 생성 함수
  function createRandomPoints() {
    // 기존 랜덤 점 제거
    points.forEach((point) => point.remove());
    points = [];

    // 새로운 랜덤 점 생성
    for (let i = 0; i < pointCount; i++) {
      const point = document.createElement("div");
      point.classList.add("point");
      point.style.top = `${Math.random() * 100}%`;
      point.style.left = `${Math.random() * 100}%`;
      point.style.backgroundColor = getRandomColor();
      scope.appendChild(point);
      points.push(point);
    }
  }

  // 랜덤 색상 생성 함수
  function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  // 저장하기 기능 함수
  function saveInfoBox() {
    if (
      infoBox.style.display === "flex" &&
      infoBox.getAttribute("data-detected") === "true" &&
      saveCount < 5
    ) {
      const savedBoxes = savedBoxesContainer.children;
      if (savedBoxes.length >= 5) {
        savedBoxes[0].remove();
      }
      const index = savedBoxes.length % textOptions.length;
      const newBox = document.createElement("div");
      newBox.classList.add("saved-box");
      const link = document.createElement("a");
      link.href = linkOptions[index];
      link.textContent = textOptions[index];
      link.style.color = "black"; // 링크 색상 블랙
      link.style.textDecoration = "none"; // 텍스트 장식 없음
      newBox.appendChild(link);
      savedBoxesContainer.appendChild(newBox);
      saveCount++;
      if (saveCount >= 5) {
        saveButton.disabled = true;
      }
    }
  }

  // 별 생성 함수 호출
  createStars();

  // JavaScript를 사용하여 별을 생성하고 무작위 위치에 배치합니다.
  function createStars() {
    const numberOfStars = 200; // 생성할 별의 개수
    const container = document.body;
    for (let i = 0; i < numberOfStars; i++) {
      const star = document.createElement("div");
      star.className = "star";
      star.style.left = `${Math.random() * 100}%`;
      star.style.top = `${Math.random() * 100}%`;
      container.appendChild(star);
    }
  }

  // 별똥별 생성 함수 호출
  createShootingStars();

  // 별똥별 생성 함수
  function createShootingStars() {
    const numStars = 100;
    const container = document.querySelector(".shooting-stars");

    for (let i = 0; i < numStars; i++) {
      const star = document.createElement("div");
      star.className = "star";
      star.style.top = `${Math.random() * 100}vh`;
      star.style.left = `${Math.random() * 100}vw`;
      star.style.animationDelay = `${Math.random() * 5}s`;
      star.style.animationDuration = `${2 + Math.random() * 3}s`;
      container.appendChild(star);
    }
  }
});

  },
};
</script>

<style scoped>
/* FONT 모음집
/* 두꺼운 폰트 */
@import url("https://fonts.googleapis.com/css2?family=Alfa+Slab+One&display=swap");
/* font-family: "Alfa Slab One", serif;
font-weight: 400;
font-style: normal; */

/* 픽셀 폰트 */
@import url("https://fonts.googleapis.com/css2?family=Alfa+Slab+One&family=Jersey+20&display=swap");
/* font-family: "Jersey 20", sans-serif;
font-weight: 400;
font-style: normal; */

/* i 다이아몬드 폰트 */
@import url("https://fonts.googleapis.com/css2?family=Alfa+Slab+One&family=Jersey+20&family=Rowdies:wght@300;400;700&display=swap");
/* font-family: "Rowdies", sans-serif;
font-weight: 400;
font-style: normal; */
@import url("https://fonts.googleapis.com/css2?family=Rubik+Mono+One&display=swap");
/* font-family: "Rubik Mono One", monospace;
font-weight: 400;
font-style: normal; */

* {
  margin: 0;
  padding: 0;
}
/*color 팔레트*/
.shooting-stars {
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  background-color: #111;
  background-image: linear-gradient(
      rgba(255, 255, 255, 0.07) 2px,
      transparent 2px
    ),
    linear-gradient(90deg, rgba(255, 255, 255, 0.07) 2px, transparent 2px),
    linear-gradient(rgba(255, 255, 255, 0.06) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.06) 1px, transparent 1px);
  background-size: 100px 100px, 100px 100px, 20px 20px, 20px 20px;
  background-position: -2px -2px, -2px -2px, -1px -1px, -1px -1px;
}

.star {
  position: absolute;
  background-color: #fff;
  width: 2px;
  height: 2px;
  border-radius: 50%;
  animation: twinkling 2s infinite;
}

@keyframes twinkling {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@keyframes shoot {
  0% {
    transform: translate3d(0, 0, 0) scale(0);
    opacity: 1;
  }
  70% {
    opacity: 1;
  }
  100% {
    transform: translate3d(100vw, -100vh, 0) scale(0.5);
    opacity: 0;
  }
}

h1 {
  font-family: "Rubik Mono One", monospace;
  font-weight: 400;
  font-style: normal;
  font-size: 5em;
  position: absolute;
  top: 6.5%;
  left: 20%;
  color: lightgoldenrodyellow;
  text-shadow: 0 0 1px #bebe04, 0 0 0px #bebe04, 0 0 0px #bebe04,
    0 0 2px #bebe04, 0 0 8px #bebe04, 0 0 0px #bebe04;
}
.blinking {
  animation: blink 0.6s infinite alternate; /* 깜빡거리는 애니메이션 적용 */
}

@keyframes blink {
  0% {
    opacity: 1; /* 0% 지점에서 투명도 1(표시) */
  }
  100% {
    opacity: 0.7; /* 100% 지점에서 투명도 0(숨김) */
  }
}
.back {
  position: absolute;
  color: white;
  top: 10%;
  left: 3%;
  font-size: 1.5em;
  font-family: "Rubik Mono One", monospace;
  font-weight: 400;
  font-style: normal;
  text-decoration: none;
  text-shadow: 0 0 1px white, 0 0 0px white, 0 0 0px white, 0 0 2px white,
    0 0 5px white, 0 0 0px white;
}

.scope {
  position: relative;
  top: 0%;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  background: radial-gradient(
    circle,
    rgba(255, 255, 255, 0.1) 30%,
    rgba(255, 255, 255, 0) 70%
  );
  border: 2px solid #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}

.crosshair-vertical,
.crosshair-horizontal {
  position: absolute;
  background: #fff;
}

.crosshair-vertical {
  width: 2px;
  height: 100%;
  left: 50%;
  transform: translateX(-50%);
}

.crosshair-horizontal {
  height: 2px;
  width: 100%;
  top: 50%;
  transform: translateY(-50%);
}

.center-dot {
  width: 10px;
  height: 10px;
  background: rgb(255, 0, 0);
  border-radius: 50%;
  position: absolute;
  cursor: pointer;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
}

.point {
  position: absolute;
  width: 10px;
  height: 10px;
  background: #ff0;
  border-radius: 50%;
}

.info-box {
  position: absolute;
  left: 45%;
  bottom: 50px;
  color: white;
  display: none;
  justify-content: center;
  align-items: center;
  font-size: 3em;
  font-family: "Jersey 20", sans-serif;
  font-weight: 400;
  font-style: normal;
  background-color: #ab04d9;
  border: none;
  width: 10%;
  height: 70px;
  border-radius: 10px;
  box-shadow: 0 6px #8332a6;
}

.controls {
  position: absolute;
  right: 3%;
  top: 35%;
  height: 30%;
  width: 27%;
  gap: 10px;
  flex-direction: column;
  text-align: center;
}

#up {
  position: absolute;
  left: 15%;
  top: 15%;
}
#left {
  position: absolute;
  left: 0;
  top: 40%;
}
#right {
  position: absolute;
  top: 40%;
  left: 30%;
}
#down {
  position: absolute;
  bottom: 20%;
  left: 15%;
}
.game-button {
  /* background-color: #007BFF; */
  background-color: #404040;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  /* box-shadow: 0 4px #0056b3; */
  box-shadow: 0 5px #262626;
  transition: all 0.2s ease;
}

.game-button:active {
  box-shadow: 0 2px #262626;
  transform: translateY(2px);
}

.game-button:focus {
  outline: none;
}
.restart-button {
  background-color: red;
  border: none;
  color: red;
  width: 60px;
  height: 60px;
  border-radius: 100px;
  box-shadow: 0 4px #a70505;
  transition: all 0.2s ease;
  position: absolute;
  right: 30%;
  top: 50%;
}
.restart-button:active {
  box-shadow: 0 2px #a70505;
  transform: translateY(2px);
}

.restart-button:focus {
  outline: none;
}
.save-button {
  background-color: green;
  color: green;
  border: none;
  width: 60px;
  height: 60px;
  border-radius: 100px;
  box-shadow: 0 4px #055421;
  transition: all 0.2s ease;
  position: absolute;
  right: 15%;
  top: 20%;
}
.save-button:active {
  box-shadow: 0 2px #055421;
  transform: translateY(2px);
}

.save-button:focus {
  outline: none;
}

.btn {
  width: 50px;
  height: 50px;
  background-color: #444;
  border: none;
  border-radius: 50%;
  color: #fff;
  font-size: 24px;
  cursor: pointer;
}

.btn:hover {
  background-color: #666;
}

.btn:active {
  background-color: #888;
}
.scope.bigger {
  width: 450px;
  height: 450px;
}

.saved-boxes-container {
  position: absolute;
  top: 30%;
  left: 3%;
  justify-content: flex-start;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 20px;
  width: 400px;
  height: 600px;
}

.saved-box {
  align-items: center;
  margin-left: 20px;
  width: inherit;
  height: 80px;
  text-align: center;
  font-size: 2em;
  font-family: "Jersey 20", sans-serif;
  font-weight: 400;
  font-style: normal;
  color: black;
  text-shadow: 0 0 1px #0ff, 0 0 0px #0ff, 0 0 0px #0ff, 0 0 2px #0ff,
    0 0 8px #0ff, 0 0 0px #0ff;
}
</style>
