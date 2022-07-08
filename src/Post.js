import React, { useState } from "react";

function Post({onSaveData}) {

    const[form, setForm] = useState({
        name:'',
        email:'',
        phone:'',
        website:''
    })

    const handleChange = (e)=> {
        const {name, value} = e.target;
        setForm({
            ...form, // 스프레드 문법으로 현재 form의 값을 복사해 왔습니다 ^^
            [name]:value // 그리고 각 이름에 맞게 사용자가 입력한 값을 넣어 주었습니다^^
        })
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSaveData(form);

        // 폼을 저장한 후엔 다음 데이터를 위해 초기화한다.
        setForm({
            name:'',
            email:'',
            phone:'',
            website:''
        })
    };

    return(
        <div>
            <div className="text-center font-bold">고객정보 추가하기, ㅋ</div>
            <form className="" onSubmit={handleSubmit}>
                <div className="">
                    <label className="w-full font-semibold text-gray-600">고겍이름</label>
                    <input className="w-full py-3 px-1 border-2 border-gray-300 text-gray-900 focus:text-gray-500 focus:border-gray-200" placeholder="이름을 입력해 주세요" type = "text" name = "name" value = {form.name} onChange = {handleChange}></input>
                    <label className="w-full font-semibold text-gray-600">이메일</label>
                    <input className="w-full py-3 px-1 border-2 border-gray-300 text-gray-900 focus:text-gray-500 focus:border-gray-200" placeholder="이메일을 입력해 주세요" type = "email" name = "email" value = {form.email} onChange = {handleChange}></input>
                </div>
                <div className="">
                    <label className="w-full font-semibold text-gray-600">전화번호</label>
                    <input className="w-full py-3 px-1 border-2 border-gray-300 text-gray-900 focus:text-gray-500 focus:border-gray-200" placeholder="전화번호를 입력해 주세요" type = "phone" name = "phone" value = {form.phone} onChange = {handleChange}></input>
                    <label className="w-full font-semibold text-gray-600">왭사이트 </label>
                    <input className="w-full py-3 px-1 border-2 border-gray-300 text-gray-900 focus:text-gray-500 focus:border-gray-200" placeholder="왭사이트 주소를 입력해 주세요" type = "website" name = "website" value = {form.website} onChange = {handleChange}></input>
                </div>
                <div className="text-center">
                    <button className="bg-blue-500 py-1 px-8 text-white rounded-lg shadow-md" type = "submit">저장띠</button>
                </div>
            </form>
        </div>
    );
}

export default Post;