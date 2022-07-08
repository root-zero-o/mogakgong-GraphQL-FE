import React from 'react'
import { useForm } from 'react-hook-form';
import Seo from '../components/Seo';

const signUp = () => {
  return (
    <div className='wrapper bg-green_mid py-8'>
        <Seo title="회원가입"/>
        <div className='circle z-0 absolute w-96 h-96 right-[-80px] top-[-40px] bg-green_light'/>
        <div className='circle z-0 absolute w-96 h-96 left-[-100px] bottom-4 bg-ivory'/>
        <form className="space-y-7 z-40">
            <h1>회원가입</h1>
            <label htmlFor="imgInput" className='z-40 circle shadow-md w-[150px] h-[150px] bg-gray hover'>
                클릭 후<br/>프로필 사진 선택
            </label>
            <input id="imgInput" type="file" className='hidden'/>
            <input type="email" placeholder='이메일 아이디'/>
            <input type="text" placeholder='닉네임'/>
            <input type="password" placeholder='비밀번호'/>
            <input type="password" placeholder='비밀번호 확인'/>
            <input type="number" placeholder='목표 공부시간'/>
            <input type="text" placeholder='각오 한 마디'/>
            <button className='z-40 submitBtn bg-green_light'>가입하기</button>
        </form>
    </div>
  )
}

export default signUp;
