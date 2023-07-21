페이지 로드 시 데이터 준비:

data라는 배열 변수에 포스터에 대한 정보를 객체로 담아두었습니다. 각 객체는 color, name, alt라는 세 가지 속성을 가지고 있습니다.
color: 두 개의 색상을 담은 배열입니다.
name: 포스터 이름을 나타내는 문자열입니다.
alt: 포스터 이미지에 대체 텍스트로 사용될 설명을 나타내는 문자열입니다.
li 버튼 클릭 이벤트 처리:

DOMContentLoaded 이벤트가 발생하면 페이지의 모든 리소스가 로드된 상태이므로, 해당 이벤트를 기준으로 코드가 실행됩니다.
const navList = document.querySelector('.nav ul');을 통해 li 버튼들의 부모 요소를 찾습니다.
navList.querySelectorAll('li').forEach((li) => { ... })을 통해 li 버튼들을 선택하고, 각각에 클릭 이벤트 리스너를 추가합니다.
li 버튼 클릭 이벤트 핸들러:

각 li 버튼이 클릭되면 이벤트 핸들러 함수가 실행됩니다.
const index = this.getAttribute('data-index');를 통해 현재 클릭된 li 요소의 data-index 속성 값을 가져옵니다.
const selectedData = data[index - 1];를 통해 data 배열에서 해당 index에 해당하는 데이터를 가져옵니다. (인덱스는 1부터 시작하지만 배열은 0부터 시작하므로 index-1을 해줍니다.)
이미지 변경:

포스터 이미지를 변경하기 위해 const posterImage = document.querySelector('.visual img');를 사용하여 이미지 요소를 찾습니다.
포스터의 이름은 소문자로 변환하여 ./assets/포스터이름.jpeg 형식의 파일 경로로 설정하고, selectedData.alt를 이미지의 alt 속성으로 설정합니다.
h1 태그 변경:

const nickName = document.querySelector('.nickName');을 사용하여 h1 요소를 찾습니다.
selectedData.name을 통해 포스터의 이름을 가져와 textContent 속성으로 설정하여 h1 태그 내용을 변경합니다.
배경색 변경:

const body = document.querySelector('body');를 통해 body 요소를 가져옵니다.
linear-gradient를 사용하여 selectedData.color 배열에 저장된 두 개의 색상으로 배경색을 변경합니다. body.style.background에 설정됩니다.
이렇게 하면 각 li 버튼을 클릭할 때마다 해당하는 포스터 정보가 이미지, 제목, 배경색 등으로 변경될 것입니다. 예를 들어, 첫 번째 li 버튼을 클릭하면 data 배열의 첫 번째 객체 정보가 선택되어 이미지, 제목, 배경색 등이 변경됩니다. 이후 다른 li 버튼을 클릭하면 해당하는 객체 정보로 변경됩니다.