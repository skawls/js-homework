
/* 

1. 클릭 이벤트 활성화
2. nav 클릭시 배경 색상 변경
3. 이미지 변경
4. 텍스트 변경
5. 함수 분리

*/

// HTML 문서를 모두 로드한 후에 실행
document.addEventListener('DOMContentLoaded', function() {
    // 데이터를 불러온다. (data.js에서 가져온다고 가정)
    const data = [
      {
        color: ["#ff6a00", "#720400"],
        name: "EMBER",
        alt: "엠버 포스터",
      },
      {
        color: ["#1ca9f8", "#000054"],
        name: "WADE",
        alt: "웨이드 포스터",
      },
      {
        color: ["#98d00f", "#002906"],
        name: "CLOD",
        alt: "클로드 포스터",
      },
      {
        color: ["#d968e6", "#30003c"],
        name: "GALE",
        alt: "게일 포스터",
      },
    ];
  
    // li 버튼들의 부모 요소를 찾는다.
    const navList = document.querySelector('.nav ul');
  
    // li 버튼들을 선택하여 클릭 이벤트 리스너를 추가한다.
    navList.querySelectorAll('li').forEach((li) => {
      li.addEventListener('click', function() {
        // 현재 클릭된 li 요소의 data-index 속성 값을 가져온다.
        const index = this.getAttribute('data-index');
        
        // index 값에 해당하는 데이터를 가져온다.
        const selectedData = data[index - 1];
        
        // 이미지를 변경한다.
        const posterImage = document.querySelector('.visual img');
        posterImage.src = `./assets/${selectedData.name.toLowerCase()}.jpeg`;
        posterImage.alt = selectedData.alt;
        
        // h1 태그를 변경한다.
        const nickName = document.querySelector('.nickName');
        nickName.textContent = selectedData.name;

        // 배경색을 변경한다.
      const body = document.querySelector('body');
      body.style.background = `linear-gradient(to bottom right, 
        ${selectedData.color[0]}, ${selectedData.color[1]})`;
      });
    });
  });


// // DOMContentLoaded 이벤트를 사용하여 HTML 문서가 완전히 로드된 후에 JavaScript 코드가 실행되도록 합니다.
// document.addEventListener("DOMContentLoaded", function () {
//     // li 요소들을 모두 선택합니다.
//     const liElements = document.querySelectorAll(".nav li");
  
//     // 각 li 요소에 클릭 이벤트를 추가합니다.
//     liElements.forEach(function (li) {
//       li.addEventListener("click", function () {
//         // 클릭한 li 요소의 data-index 값을 가져옵니다.
//         const dataIndex = li.getAttribute("data-index");
  
//         // 선택한 li 요소의 이미지 경로를 가져옵니다.
//         const imagePath = `./assets/${dataIndex.toLowerCase()}.jpeg;`;
  
//         // visual 요소를 선택합니다.
//         const visual = document.querySelector(".visual");
  
//         // visual 요소 내의 img 태그를 찾아 이미지를 바꿉니다.
//         const imgElement = visual.querySelector("img");
//         imgElement.src = imagePath;
  
//         // 모든 li 요소의 클래스를 초기화합니다.
//         liElements.forEach(function (li) {
//           li.classList.remove("is-active");
//         });
  
//         // 클릭한 li 요소에 is-active 클래스를 추가하여 활성화된 상태를 표시합니다.
//         li.classList.add("is-active");
//       });
//     });
//   });
  






