import React from 'react'

const Login = () => {
  return (
    <div className="wrapper bg-green_mid overflow-hidden">
        <form className="flex flex-col justify-center items-center py-9 space-y-8">
          <h1 className='mb-5'>로그인</h1>
          <input placeholder='이메일아이디'/>
          <input placeholder='비밀번호'/>
          <button className='submitBtn bg-ivory'><h2>공부 시작!</h2></button>
        </form>
        <div className='circle right-1/2 bottom-[-1/2] translate-x-1/2 -translate-y-[-1/2] bg-green_light w-[400px] h-[400px] pt-3 pb-32'>
          <h2>모각공이 <br/>처음이신가요?</h2>
          <div className='w-full h-2/3 grid grid-cols-2 px-10 py-2 '>
            <div className='loginBtn bg-white'>구글<br/> 로그인</div>
            <div className="loginBtn bg-naver">네이버<br/> 로그인</div>
            <div className="loginBtn bg-kakao">카카오<br/> 로그인</div>
            <div className="loginBtn bg-green_deep">회원가입</div>
          </div>
        </div>
    </div>
  )
}

export default Login;