// import logo from './logo.svg';
import './App.css';
// import log from './logo.svg' // 이미지 파일 가져올 때 사용하는 방법
import React, { useState } from 'react';
// eslint-disable

function App() {


    let posts ="강남 고기 맛집";  // style 도 여기서 만들어서 사용이 가능하다.
    // <h4 style={{ color : "skyblue", fontSize : '30px' }}> { posts }</h4>  {/*중괄호 열면 렌더링이 가능하다. ,변수 , 함수명, 객체 다가능*/}
    // document.getElementById("").innerHTML = ''
    // D:\factory\frontEnd\demo\src\App.js
    // function 함수() {
    //     return 100;
    // }

    // onClick = {function() }  ;
    // 위에것이랑 같음  onClick = { () => { 실행할내용 } };
    let [a,b] = useState(['남자 코트 추천', '여자 청바지 추천', '알파고 세트추천']);  // ES6 destructuring 문법 =   var [a,b] = [10, 100];
    let [따봉, 따봉변경] = useState(0);
    let [modal, setModal] = useState(false);

    return (
        <div>
            <button onClick={() => setModal(true)}>모달열기</button>
            {modal === true ? <Modal/> : null}
        </div>
    );



    // 따봉변경(10); // 따봉을 완전히 대체 해버림
    function titleChange(){
        let newArray = [...a];
        newArray[0] = '여자 청바지 추천'
        b(newArray);
        // b((['남자 코트 추천', '여자 청바지 추천', '유니섹스 코트추천'])); // 데이터를 아예 갈아 치우는 함수
    }


    function Modal() {
        return (
            <div className="modal">
                <h2>제목</h2>
                <p>날짜</p>
                <p>상세내용</p>
            </div>
    )
    }

    return (
    <div className="App">
        <div className="black-nav">
            <div> 개발 BLOG</div>
        </div>
            <div className="list">
                <button onClick={ () => Modal() }>상세보기</button>
                <h3>{ a[2] }</h3>
                <p>2월 17일 발행</p>
                <hr/>
            </div>

        {/*<Modal/>*/}

            {/*<div className="list">*/}
            {/*    <h3>{ a[0] }<span onClick={() => { 따봉변경(따봉 + 1)}}>👍</span> {따봉} </h3>*/}
            {/*    <p>2월 17일 발행</p>*/}
            {/*    <hr/>*/}
            {/*</div>*/}

            <div className="list">
                {/*<input type={"button"} value={"이름 바꾸기"} onClick={ newArray }/>*/}
                <button onClick={ titleChange } >이름 바꾸기</button>
                <h3>{ a[0] }<span onClick={() => { 따봉변경(따봉 + 1)}}>👍</span> {따봉} </h3>
                <p>3월 27일 발행</p>
                <hr/>
            </div>

        {/*<Modal/>*/}

    </div>
  );
}


export default App;
