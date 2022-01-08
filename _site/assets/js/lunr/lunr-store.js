var store = [{
        "title": "Github Blog 만들기",
        "excerpt":"나만의 Blog를 만들어 보자!🥝 요즘 많은 분들이 자신만의 블로그를 갖고 있어서 나도 한번 만들어 보려고한다 ㅎㅎ 블로그는 많은 플랫폼으로 만들 수 있지만 나는 그 중에서도 Github를 골랐다! 이유는 다양하지만 가장 큰 이유는 Github와 연동이 된다는 점이다! 또한 jekyll, gatsby 등을 통해 커스터마이징 할 수 도 있다고 한다. 단점으로는 진입장벽이 높다는...","categories": [],
        "tags": [],
        "url": "/first/",
        "teaser": null
      },{
        "title": "블로그 작성시",
        "excerpt":"즉각적인 반응을 위해…🥝 bundle, jekyll 설치 해야할일 터미널창에서 내 블로그 경로를 타고 들어간다. bundle exec jekyll serve localhost:4000 즉각적으로 바뀌는것을 알수있음. (구글에서 다운받은 bundle로는 에러가뜸 꼭 bundle update를 해주자) console.log('코드입력하는방법'); .```python .``` (온점을 한개씩 빼고 그 사이에 작성할 코드 입력) Primary Notice: 중요한 Notice Notice: 기본적인 Notice Info Notice: 정보...","categories": [],
        "tags": [],
        "url": "/second/",
        "teaser": null
      },{
        "title": "JavaScript 1주차",
        "excerpt":"## 변수란..?🍍 변수(variable)는 하나의 값을 저장하기 위해 확보한 메모리 공간 자체 또는 메모리 공간을 식별하기 위해 붙인 이름이다. 변수의 선언은 var, let, const 키워드로 할 수 있고 ES6에서 let과 const가 추가되었다. 1. Var 재선언 재할당 가능 var LJH = '사람'; // 변수 선언, 값 할당 var LJH = '동물'; //...","categories": [],
        "tags": [],
        "url": "/javascript-01/",
        "teaser": null
      },{
        "title": "JavaScript 1주차",
        "excerpt":"number와 string의 메서드 각각 3개와 사용 방법🍍 number와 srting의 메서드(method)를 알아보자. 우선 JavaScript의 모든 메서드는 ‘모든메서드’에서 볼수있다. 이중에서 나는 Number의 메서드 중 가장 마음에 드는 3가지를 골랐다. Number 1. toString() toString()메서드는 숫자를 문자열로 반환합니다. cheet sheet var a = 12345; // 변수 선언 및 값 할당 console.log(a.toString()); // '12345' console.log(typeof...","categories": [],
        "tags": [],
        "url": "/javascript-02/",
        "teaser": null
      },{
        "title": "터미널로 commit, push 하기",
        "excerpt":"터미널을 써보자🥝 github desktop…..commit,push가 너무 느리다 터미널을 써서 빠르고 쉽게 잔디를 쌓아보자 내가 만든 폴더 or 파일의 경로에서 터미널을 킨다. git init // .git 이라는 하위 디렉토리를 만든다 git status // 수정된 파일이 있는지 확인 git add --all //git add (올릴 파일) 하나씩올려도 된다 git commit -m '메세지' // 날짜...","categories": [],
        "tags": [],
        "url": "/3st/",
        "teaser": null
      },{
        "title": "JavaScript 2주차",
        "excerpt":"배열이란?🍍 배열(array)은 같은 타입의 변수들로 이루어진 유한 집합으로 정의됩니다. 배열을 구성하는 각각의 값을 배열 요소(element)라고 하며, 배열에서의 위치를 가리키는 숫자는 인덱스(index)라고 합니다. C언어에서 인덱스는 언제나 0부터 시작하며, 0을 포함한 양의 정수만을 가질 수 있습니다. let arr = ['a', 'b',500,'good'] // 배열선언 arr[0] = 'change' // 0번째 인덱스 변경 console.log(arr) //...","categories": [],
        "tags": [],
        "url": "/javascript-03/",
        "teaser": null
      },{
        "title": "JavaScript 2주차",
        "excerpt":"For문🍍 (for), (for in), (for of), (forEach) 를 배워보자 반복문의 필요이유와 사용방법 코드가 길어짐을 방지 중복된 코드의 오류 중복은 중복을 강요 function getAllLetters(str) { let strArray = []; for(let i=0; i&lt;str.length;i++) { strArray[i] = str.substr(i,1) } return strArray; } console.log(getAllLetters(flower)); //['f','l','o','w','e','r'] for문 기초 - 문자를 쪼개어 각 인덱스에 넣어보기 const...","categories": [],
        "tags": [],
        "url": "/javascript-04/",
        "teaser": null
      },{
        "title": "JavaScript 3주차",
        "excerpt":"객체에 대해 알아보자.🍍 🏳️ 객체의 정의란 무엇이며 필요한 이유 객체란? 이름(key)과 값(value)으로 구성된 프로퍼티(property)의 정렬되지 않은 집합이다. 배열에 비해 직관적이다. 유지보수가 용이하다. 🏳️ 객체에서의 property, key, value const 객체 = { name: \"LJH\", age: 28, sub: { bloodType: \"B\", }, city: \"busan\", hi() { console.log('안녕') } // hi: function() {...","categories": [],
        "tags": [],
        "url": "/javascript-05/",
        "teaser": null
      },{
        "title": "react 사용이유",
        "excerpt":"React?🍓 🏳️ React란 javascript의 라이브러리이다. JSX? 🏳️ const hi = &lt; 태그&gt;Hi&lt; 태그&gt;; 위의 코드는 JS도 HTML도 아닌 javascript syntax extension라고 하는 JS의 확장버전이다. .js 파일에서 사용할 수 있고 별도의 컴파일 과정을 거쳐야지만 js문법으로 변환하여 브라우저가 인식할 수 있다. JSX는 어떤 태그라도 self closing tag가 가능함. ex) div /div =&gt;...","categories": [],
        "tags": [],
        "url": "/react-01/",
        "teaser": null
      },{
        "title": "react 기초문법",
        "excerpt":"기초문법&lt;1&gt; 여러가지들🍓 저번 글과 같이 계속해서 기초 문법을 알아보자. 기초 문법🚩 &lt;button onClick={ ()=&gt;{ modal===false ? modalModify(true) : modalModify(false) } }&gt;눌러주세요&lt;/button&gt; // !modal { modal === true ? &lt;Model&gt;&lt;/Model&gt; : null } react에서는 {}을 사용하여 js문법을 사용하는데 아쉽게도 if는 기능지원을 하지않는다. 그래서 삼항연산자 ‘조건 ? true : false’를 사용한다. ‘modal===false...","categories": [],
        "tags": [],
        "url": "/react-02/",
        "teaser": null
      },{
        "title": "react 기초문법",
        "excerpt":"기초문법&lt;2&gt; 여러가지들🍓 저번 글과 같이 계속해서 기초 문법을 알아보자. 기초 문법🚩 npm install react-router-dom 페이지를 나누기 위해 위의 코드를 터미널에 치기. import { BrowserRouter } from 'react-router-dom' ReactDOM.render( &lt;React.StrictMode&gt; &lt;BrowserRouter&gt; &lt;App /&gt; &lt;/BrowserRouter&gt; &lt;/React.StrictMode&gt;, document.getElementById(\"root\") ); src/index.js에서 위와 같이 셋팅해주자 import { Link, Route, Switch } from \"react-router-dom\"; 마지막으로 App.js에...","categories": [],
        "tags": [],
        "url": "/react-03/",
        "teaser": null
      },{
        "title": "react 기초문법",
        "excerpt":"기초문법&lt;3&gt; 여러가지들🍓 저번 글과 같이 계속해서 기초 문법을 알아보자. 기초 문법🚩 npm install styled-components className이 중복되지않게 class선언없이 components에 css를 직접 넣기위해 깔아줌.(CSS in js) import styled from \"styled-components\"; 셋팅은 이렇게 한다. let Box = styled.div` padding: 20px; `; &lt;Box&gt;이렇게&lt;/Box&gt; 사용 예시 class Abcd extends React.Component { componentDidMount() { } componentWillUnmount()...","categories": [],
        "tags": [],
        "url": "/react-04/",
        "teaser": null
      },{
        "title": "react bootstrap",
        "excerpt":"부트스트랩을 사용해보자🍓 구글에 react bootstrap이라고 치고 다운받으면 되는데 귀찮다면 이곳을 눌러 주자. 설치가 끝났다면 사이트에 아래와 같은 link가 있을것이다. 복사하자. ```python ``` 다시 vscode로 돌아와 public/index.html ➡️ 링크자리에 붙여넣기를 하자. ```python import { Navbar,Nav,Container } from 'react-bootstrap'; POPO App Home Features Pricing ``` 사이트의 components에 들어가서 필요한것들을 복붙하면 되는데 react에서는...","categories": [],
        "tags": [],
        "url": "/react-05/",
        "teaser": null
      },{
        "title": "react Redux",
        "excerpt":"Redux(상)🍓 npm install redux react-redux redux를 사용하기 위해 터미널에서 명령어를 통해 설치하자. 기초 문법🚩 index.js import { Provider } from \"react-redux\"; import { createStore } from \"redux\"; let store = createStore(reducer); //state만들기 function reducer() { return [ { id: 0, name: \"신발\", quan: 7 }, { id: 1, name: \"상의\",...","categories": [],
        "tags": [],
        "url": "/react-06/",
        "teaser": null
      },{
        "title": "react Redux",
        "excerpt":"Redux(하)🍓 기초 문법🚩 index.js function reducer(state = datastate, action) { if (action.type === \"add\") { let copy = [...state]; copy.push(action.payload); return copy; } } App.js props.dispatch( { type : \"add\", payload : {a,b,c,d} } ); ‘Redux의 정보전달’ dispatch의 type옆에 작명하고 보내고 싶은 데이터를 쓴다. action.작명 ➡️ 메서드를 사용하듯이 보내준 데이터를...","categories": [],
        "tags": [],
        "url": "/react-07/",
        "teaser": null
      },{
        "title": "JavaScript 쓰는 이유와 기초",
        "excerpt":"왜 JavaScript를 사용하는가?🍍 요즘 어디서나 JavaScript를 사용한다. 왜? 1.웹서버 2.모바일앱 3.머신러닝 등등 그 중 웹환경에서의 JavaScript의 목적은 'html 조작과 변경이다'. 자, 이제 html을 JS로 조작해보자. index.html &lt;body&gt; &lt;h2 id=\"ㅎㅇ\"&gt;ㅎㅇ&lt;/h2&gt; &lt;script&gt; document.getElementById(\"ㅎㅇ\").innerHTML = \"안녕하세요\"; &lt;/script&gt; &lt;/body&gt; ‘html 조작방법’ html에 body태그안에 script로 감싸주어 그 안에 코드를 작성한다. getElementById는 이름만 봐도 알 수...","categories": [],
        "tags": [],
        "url": "/javascript-06/",
        "teaser": null
      },{
        "title": "JavaScript ➡️ JQuery",
        "excerpt":"JQuery?🍍 제이쿼리? 그게 뭘까 앞선 게시글에서 쌩JS의 엄청난 메서드길이를 보았다. 이것을 해결하기위해 제이쿼리가 나오게됐다. 짧고 간단하며 직관적이다. 꼭 배우자 근데 요즘은 jQuery의 상위버전인 React를 쓴다던데... 하지만 여전히 JQuery로 개발된 웹이 많기에 배워야한다. index.html &lt;script src=\"https://code.jquery.com/jquery-3.5.1.min.js\" integrity=\"sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=\" crossorigin=\"anonymous\"&gt;&lt;/script&gt; JQuery CDN에서 호스팅된걸 갖다 쓰자. minified는 공백을 제거한것이다. 닫히는 body태그의 바로 위에 놔두는것이...","categories": [],
        "tags": [],
        "url": "/javascript-07/",
        "teaser": null
      },{
        "title": "Algorithm - input받기",
        "excerpt":"Algorithm?🤮 알고리즘을 풀어봅시다...그중 악명높은 백준으로 백준알고리즘은 JS로 풀기에는 초보자들이 정~~~말 어렵다.. 이유는 input으로 text값을 받아서 푸는 문제들이 많은데 이게 JS로 input받기가 까다롭다 그래서 초보자도 문제를 풀수있도록 input 받는것을 설정하는 code를 짜본다. JS로 백준문제를 풀다가 대부분 위와 같은 문제에서 막힌다 어떻게 input을 받으라는거야? 아래를 보자.. input.text 1 2 question.js const fs...","categories": [],
        "tags": [],
        "url": "/Algorithm-01/",
        "teaser": null
      },{
        "title": "JavaScript 문법총정리",
        "excerpt":"JS의 문법총정리(상)🍍 🏳️ for, if 등등 기초를 제외한 고급 문법들을 배워보자. index.html console.log(this); // window function a() { console.log(this); } a(); // window const b = { c() { console.log(this); }, d: () =&gt; { console.log(this); } } b.c(); // 객체b를 가리킨다. b.d(); // window를 가리킨다. ‘this의 뜻(1)’ 일반적으로 this란...","categories": [],
        "tags": [],
        "url": "/javascript-08/",
        "teaser": null
      },{
        "title": "JavaScript 문법총정리",
        "excerpt":"JS의 문법총정리(하)🍍 🏳️ JS의 문법총정리(상)에 이어 계속해서 알아보자. 그전에 웹 브라우저의 동작원리를 알아보자 index.html console.log(1); setTimeout( ()=&gt;{console.log(3)}, 1000) // 1초뒤에 3을 출력해줘 console.log(2); 일반적으로 위에서 밑으로 차례대로 코드를 실행시키기때문에 1 출력 (1초뒤)3 출력 2 출력 순으로 될것이라고 생각지만 실제로는 1 출력 2출력 3출력을 해준다. JS의 동작순서 JS는 Stack이란 곳에서 코드를...","categories": [],
        "tags": [],
        "url": "/javascript-09/",
        "teaser": null
      },{
        "title": "HTML and CSS 기초(1)",
        "excerpt":"HTML and CSS 알아보기🍇 🏳️ HTML(hypertext markup language) : 웹페이지를 만들기 위한 언어로 웹브라우저 위에서 동작하는 언어다. 또한 웹페이지의 구조를 잡을 수 있다. 화이팅!!! tag는 시작태그, 내용, 끝태그로 이루어져 있으면 이것을 요소(element)라고한다. &lt;!DOCTYPE&gt; &lt;html&gt; &lt;head&gt; &lt;/head&gt; &lt;body&gt; &lt;/body&gt; &lt;/html&gt; html 파일의 구조 &lt;!DOCTYPE&gt; tag처럼 생겼지만 태그는 아니다. html이 무슨 버전의...","categories": [],
        "tags": [],
        "url": "/html-css-01/",
        "teaser": null
      },{
        "title": "HTML and CSS 기초(2)",
        "excerpt":"HTML and CSS 알아보기🍇 🏳️ Semantic Web과 Semantic Tag Semantic Web : 사전적 의미론 ‘의미있는 웹’으로 기계가 읽고 처리할 수 있는 웹이다. 목적으로는 방대한 양의 데이터를 사용자의 검색에 맞게 연관성 있는 데이터만을 기계가 해석하여 사용자에게 보여주는 것이다. Semantic Tag : 기계에게 의미를 가진 정보로서 보이기 위해 고안된 태그. 이것은 명확한...","categories": [],
        "tags": [],
        "url": "/html-css-02/",
        "teaser": null
      },{
        "title": "유용한 Algorithm 모음",
        "excerpt":"Algorithm🤮 프로그래머스 기초단계를 푸며 알게된 유용한 메서드팁을 알아보자 배열.filter( a =&gt; 배열2.includes(a) ) 같은 value값을 배열로 리턴. let a = ‘the for pak’ a.split(‘for’) // [‘the’, ‘pak’] split(문자) 해당 문자는 없어지고 그 문자를 기준으로 나눠진 배열이 생성 array.join() 각 배열의 인덱스를 ()안의 값으로 이어줌 const arrNum = [11, 2, 33,...","categories": [],
        "tags": [],
        "url": "/Algorithm-02/",
        "teaser": null
      },{
        "title": "HTML, CSS , JS 기초 면접",
        "excerpt":"면접준비 💯 🏳️ HTML, CSS, JS 면접기초를 준비해보자. 나의 말투로 정리를 해봐야겠다. HTML, CSS관련 HTML이 무엇인가요? 웹페이지를 만들기 위한것이며 웹브라우저에서 동작하는 언어입니다. 주로 웹페이지의 구조를 잡습니다. HTML 파일의 필수 구조는 어떻게 되나요? 맨처음 어느종류의 문서인지 알려주는 DOCTYPE과 HTML의 범위를 알려주는 HTML태그, 그밑에 주로 보이지않는 정보를 저장하는 head태그, 마지막으로 사용자에게 보여지기위한...","categories": [],
        "tags": [],
        "url": "/interview-01/",
        "teaser": null
      },{
        "title": "Git & GitHub",
        "excerpt":"Git과 Github! 💯 🏳️ Git, Github의 기초를 알아보자 Git은 한마디로 버전관리를 도와주는 시스템이다. Github는 git을 이용한 프로젝트들을 관리하게 해주는 호스팅 서비스이다. 1. Git clone 하는방법 왜 clone을 사용하는가? 개발환경이 바뀔때 usb에 파일을 담아서 옮기는것이아닌 좀 더 스마트하고 빠르게 환경을 만들기 위해. 1)내가 만들 repo에 들어간다. 2)초록색 Code를 눌러 https의 주소를...","categories": [],
        "tags": [],
        "url": "/interview-02/",
        "teaser": null
      },{
        "title": "프로그래머스 키패드 누르기",
        "excerpt":"Algorithm🤮 키패드 누르기 기초문제를 풀어보자 이문제는 접근을 어떻게할지 몰라 접근하는데만 30분을 소비했다… 하지만 이문제를 풀면서 JS의 기초를 좀 더 쌓을 수 있었기에 리뷰한다. 나의 풀이 function solution(numbers, hand) { let result = []; let left = []; let right = []; let distance = [ { 0: 0, 8: 1,...","categories": [],
        "tags": [],
        "url": "/Algorithm-03/",
        "teaser": null
      },{
        "title": "Webucks 만들기 - js",
        "excerpt":"스타벅스를 복제해봅시다 ~ 🧑‍💻 Wecode의 첫번째 과제.....webucks만들기....한번해봅시다. [Mission 1] 로그인 페이지 레이아웃 구현 #1 과제의 사진을 보고 똑같이 구현하라. &lt;body&gt; &lt;section class=\"container\"&gt; &lt;div class=\"login-logo\"&gt; &lt;img src=\"./images/logo.png\" alt=\"로고이미지\" /&gt; &lt;/div&gt; &lt;form class=\"login-form\"&gt; &lt;input id=\"id\" placeholder=\"전화번호, 사용자 이름 또는 이메일\" autocomplete=\"off\" /&gt; &lt;input type=\"password\" id=\"pw\" placeholder=\"비밀번호\" /&gt; &lt;button class=\"showHide\" type=\"button\"&gt; show &lt;/button&gt;...","categories": [],
        "tags": [],
        "url": "/wecode-01/",
        "teaser": null
      },{
        "title": "react example",
        "excerpt":"간단한 게시판 만들어보기🍓 🏳️ 정말 간단한 게시판을 만들어보자 주말에 react 예습할겸 재미로 만들어봐서 퀄리티가 많이 낮지만 기본문법을 손에 익히기에는 좋은 예제이다. 아래는 결과물이다. 전체적인 틀의 모습을 보자면 아래와 같다. 네비게이션과 글을 작성할 수 있는 input, 각 페이지마다 작성한 글을 15개씩 slice 시켜 보여주기. 글의 수가 15로 나눠떨어질때마다 pageNum에 아무값이나 넣어...","categories": [],
        "tags": [],
        "url": "/react-08/",
        "teaser": null
      },{
        "title": "SASS(SCSS)",
        "excerpt":"Sass(Scss) 알아보기🍇 🏳️ Sass(Scss) : CSS Preprocessor(CSS 전처리기)라 불리며 선택자의 중첩(Nesting)이나 조건문, 반복문, 다양한 단위(Unit)의 연산 등… 표준 CSS 보다 훨씬 많은 기능을 사용해서 편리하게 작성할수 있게 해준다. Sass와 SCSS는 차이점은? 🏳️ SCSS는 CSS 구문과 완전히 호환되도록 새로운 구문을 도입해 만든 Sass의 모든 기능을 지원하는 CSS의 상위집합(Superset) 이다.또한 Sass는 선택자의...","categories": [],
        "tags": [],
        "url": "/html-css-03/",
        "teaser": null
      },{
        "title": "codecata Day3",
        "excerpt":"Algorithm🤮 나름 신박한 문제여서 쓴다. const getLengthOfStr = (str) =&gt; { const arr = []; let newStr = \"\"; for (let i = 0; i &lt; str.length; i++) { newStr = str[i]; for (let j = i + 1; j &lt; str.length; j++) { if (newStr.includes(str[j])) { break; } else...","categories": [],
        "tags": [],
        "url": "/Algorithm-04/",
        "teaser": null
      },{
        "title": "codecata Day3",
        "excerpt":"Algorithm🤮 접근 조차못하였다. 다만 내가 문제를 조금 이상하게 생각한것같다. 문제의 의도는 N x M 의 그리드면 N번의 오른쪽이동 M번의 아래쪽이동의 최소값을 원하는것이지만 나는 어떻게 가든 최솟값이 나오게만 이동하는 것으로 이해했다. [1,9,9,1,1,1,1] [1,1,1,1,1,9,1] [1,9,9,9,9,1,1] [1,9,9,1,1,1,1] 이러한 배열은 1의 값으로만 이동하여 12의 값이 나와야한다고 생각했지만 문제에서 원하는값은 7번의 오른쪽이동 4번의 아래쪽이동으로 최솟값...","categories": [],
        "tags": [],
        "url": "/Algorithm-05/",
        "teaser": null
      },{
        "title": "export improt",
        "excerpt":"exprot import를 알아보자🍓 1. Default Export //export function Abcd() { return } export default Abcd; //import import 아무렇게나작명 from \"Abcd의 장소\"; 하나의 파일에서 단 하나의 변수 또는 클래스 등만 export가능. (let, const를 바로 default export할 수는 없다.) 2. Named Export //export export const Abcd = () =&gt; {} export const...","categories": [],
        "tags": [],
        "url": "/react-09/",
        "teaser": null
      },{
        "title": "JSON and Copy",
        "excerpt":"JSON? 💯 JSON이 무엇인지 알기 위해선 약간의 배경지식이 필요하다. AJAX(Asynchronous JavaScript And XML), XHR(XMLHttpRequest) 등과 같이 XML이란 단어가 보이는데 XML이란 HTML과 같은 markup언어 중에 하나이다.(태그를 이용해 데이터 나타냄) 이러한 markup언어를 통해 서버와 데이터를 주고 받을 수 있는데 예전에는 XML이 주였다면 지금은 JSON(JavaScript Object Notation)을 많이 사용한다고 한다. 이유는 XML은 불필요한...","categories": [],
        "tags": [],
        "url": "/interview-03/",
        "teaser": null
      },{
        "title": "Promise async await",
        "excerpt":"JS의 비동기🍍 Promise 🏳️ Promise : JS에 내장된 Object로 async한것을 수행할때 콜백함수 대신에 사용하기 좋은 함수 1. Producer const promise = new Promise((reslove, reject) =&gt; { resolve('junhyeok') //성공했을때 reject(new Error('뭔가 잘안됐어!')) //실패했을때 console.log(\"asd\"); }); 위의 코드를 실행시켜보면 바로 'asd'가 출력된다. 즉 Promise는 생성되는 순간 콜백함수를 실행시킨다. 그렇기에 Promise의 생성타이밍을 잘...","categories": [],
        "tags": [],
        "url": "/javascript-10/",
        "teaser": null
      },{
        "title": "useState and Copy",
        "excerpt":"useState?🍓 useState : useState함수를 호출하면 변수와 그 변수를 set해주는 함수를 return 한다 useState를 통해 만든 변수는 값이 변경이 되면 랜더링되며 새롭게 써진다. 이때 변수의 값을 변경하기 위해 사용되는 함수가 setter함수이다. 사용방법🍓 ex) 잘못된 사용법 let [like, setlike] = useState(\"🤍\"); { &lt;div onClick={() =&gt; { like = \"하트\"; }} &gt; {like}...","categories": [],
        "tags": [],
        "url": "/react-10/",
        "teaser": null
      },{
        "title": "Webucks 만들기 - react",
        "excerpt":"스타벅스를 복제해봅시다 ~ 🧑‍💻 Wecode의 두번째 과제 react로 위벅스 만들기 사전작업. node -v , npm -v 버전정보 확인 npx create-react-app ‘폴더이름작명’ npm start npm install react-router-dom –save npm install sass –save 무거운것들 .gitignore에 추가 여기까지 잘되었다면 이제 시작해봅시다. 👉 [Mission 0] 레이아웃 리액트로 옮기기 JS에서 만든것을 react폴더에 옮기는데 css가 박살나있었다....","categories": [],
        "tags": [],
        "url": "/wecode-02/",
        "teaser": null
      },{
        "title": "react 관련 면접",
        "excerpt":"면접준비 💯 🏳️ react 면접을 준비해보자. 나의 말투로 정리를 해봐야겠다. JSX란 무엇인가요? 자바스크립트 익스텐션, JS의 확장된 문법으로 JS코드를 HTML처럼 표현가능하게 해주는것입니다. (HTML을 작성하는것과 유사하기때문에 컴포넌트를 생성하기 좋습니다. 이러한 이유로 react에서는 jsx의 사용을 권장하고 있습니다.) React란 무엇인가요? JS의 라이브러리 중 하나로써 주로 사용자 인터페이스를 만들기 위해 사용됩니다. React를 사용하는 이유는 무엇인가요?...","categories": [],
        "tags": [],
        "url": "/interview-04/",
        "teaser": null
      },{
        "title": "useEffect",
        "excerpt":"useEffect?🍓 Side Effect : 부수적인 효과로 함수가 어떤동작을 할때 input, output이외의 다른값이 조작된다면 그것은 side Effect가 있다고 한다. let count = 0; function greetWithSideEffect(name) { // Input count = count + 1; // Side Effect! return `${name}님 안녕하세요!`; // Output } side Effect의 예시 function greetWithSideEffect({ name }) { //...","categories": [],
        "tags": [],
        "url": "/react-11/",
        "teaser": null
      },{
        "title": "react에서 fetch함수로 데이터받아오기",
        "excerpt":"react의 마지막 실습 ~ 🧑‍💻 postman을 통해 backend서버로 아이디와 비밀번호를 보내 회원가입을 해보자. body에 json타입으로 객체를 만들어 해당 주소로 post요청을 보냈다. 그 결과 회원번호 148을 가진 회원으로 가입이 되었다. login페이지에서 사용자가 회원가입된 ID, PW를 DB에 일치하는 값으로 작성하였을때 token을 주고 list페이지로 이동하는 로직이다 분명 올바른 url과 ID,PW값 문법도 틀리지 않는...","categories": [],
        "tags": [],
        "url": "/wecode-03/",
        "teaser": null
      },{
        "title": "MYSQL 첫걸음",
        "excerpt":"MYSQL👾 database : 서로 연관된 데이터(table)들을 모아놓은것 쉽게말해 폴더같은느낌, SCHEMA라고도 불린다. database server : 여러개의 schema들을 모아놓은곳 간단한 명령어들 CREATE DATABASE '작명'; ➡️ 스키마 생성 DROP DATABASE 'table이름'; ➡️ 스키마 delete SHOW DATABASES; ➡️ 스키마들을 보여줌 USE 'table이름' ➡️ 해당 스키마에서 작업을 하겠다. 테이블 만들기 mysql&gt; create table data( //...","categories": [],
        "tags": [],
        "url": "/sql-01/",
        "teaser": null
      },{
        "title": "node.js 첫걸음",
        "excerpt":"Node.js 🙀 Node.js : 비동기(Asynchronous) 이벤트-기반(event-driven) JavaScript 실행환경이다. 비동기 이벤트-기반의 처리, 메모리 관리, 스케줄 관리 등의 일들을 V8 엔진이 감당하기때문에 이점을 이해하고 code를 짠다면 빠르고 안정성 있는 앱을 설계할 수 있다. 즉, node란 V8이라는 JavaScript 엔진 위에서 동작하는 자바스크립트 런타임이다. 배경 Node.js를 사용하려면 먼저 JavaScript를 배워야한다. Node.js는 JavaScript를 사용하기 위해...","categories": [],
        "tags": [],
        "url": "/node-01/",
        "teaser": null
      },{
        "title": "ORM & Prisma",
        "excerpt":"ORM 🙀 ORM : Object-relational-mapping의 약어로 객체와 관계형 데이터베이스의 데이터를 자동으로 매핑(연결)해주는 것이다. 데이터베이스 데이터 ⬅️ 매핑 ➡️ Object 필드 class User extends Model {} User.init( { username: DataTypes.STRING, birthday: DataTypes.DATE, }, { sequelize, modelName: \"user\" } ); ORM 중 하나인 sequelize 의 문법이다. username, birtday라는 속성이 있으며 이것들의 데이터타입은...","categories": [],
        "tags": [],
        "url": "/node-02/",
        "teaser": null
      },{
        "title": "Babel",
        "excerpt":"Babel? 💯 babel : JS의 ES6+ 코드를 현재 및 과거의 브라우저와 같은 환경에서 호환되는 버전으로 변환하는데 주로 사용되는 컴파일러이다. 탄생배경 Cross Browsing : 다른 기종 혹은 플랫폼에 따라 달리 구현되는 기술을 비슷하게 만듦과 동시에 어느 한쪽에 최적화되어 치우지지 않도록 공통 요소를 사용하여 웹 페이지를 제작하는 기법을 말한다. 또한, 지원할 수...","categories": [],
        "tags": [],
        "url": "/interview-05/",
        "teaser": null
      },{
        "title": "Bcrypt & Jsonwebtoken",
        "excerpt":"Bcrypt &amp; Jsonwebtoken 🙀 “보안 시스템은 가장 약한 연결 고리만큼만 강하다.” 특정부분의 보안이 아무리 강하다고 하더라도 다른부분에서 보안이 뚫려버리면 의미가 없다. 따라서 보안 시스템의 안정성은 ‘강한 부분이 얼마나 강한가’보다는 ‘약한 부분이 얼마나 약한가’에 따라서 좌우된다. 단방향 해시 함수 단방향 해시 함수 : 수학적인 연산을 통해 원본 메시지를 변환하여 암호화된 메시지인...","categories": [],
        "tags": [],
        "url": "/node-03/",
        "teaser": null
      },{
        "title": "MiddleWare",
        "excerpt":"MiddleWare 🙀  ","categories": [],
        "tags": [],
        "url": "/node-04/",
        "teaser": null
      },{
        "title": "Webucks 만들기 - node.js",
        "excerpt":"backend 시작 ~ 🧑‍💻 Wecode의 서버, node로 위벅스 서버 만들기 사전작업. node -v , npm -v 버전정보 확인 git init -y ( package.json 생성확인 ) npm install express ( package.json dependencies에 생성되었는지 확인 - node5부터는 –save하지 않아도 dependency에 적용) npm install prisma –save-dev npm install @prisma/client npm install dotenv nodemon...","categories": [],
        "tags": [],
        "url": "/wecode-04/",
        "teaser": null
      }]
