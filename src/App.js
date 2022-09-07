// import logo from './logo.svg';
import './App.css';
// import log from './logo.svg' // 이미지 파일 가져올 때 사용하는 방법
function App() {

    let posts ="강남 고기 맛집";  // style 도 여기서 만들어서 사용이 가능하다.
    // document.getElementById("").innerHTML = ''
    // function 함수() {
    //     return 100;
    // }

  return (
    <div className="App">
        <div className="black-nav">
        <h4 style={{ color : "skyblue", fontSize : '30px' }}> { posts }</h4>  {/*중괄호 열면 렌더링이 가능하다. ,변수 , 함수명, 객체 다가능*/}
            {/*<img src={ logo } />*/}

      </div>
    </div>
  );
}

export default App;
