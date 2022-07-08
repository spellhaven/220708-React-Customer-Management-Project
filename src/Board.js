import React, { useState } from 'react';
import axios from 'axios'; // 서버와 통신을 해 주는 라이브러리래.
import { useEffect } from 'react';
import Tr from "./Tr";

function Board() {

    const[info, setInfo] = useState([]);
    
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(res => setInfo(res.data))
            .catch(err => console.log(err))
    },[]);
    
    return (
        <div className=''>
            <div className='text-center font-bold'>고객 정보 리스트</div>
            <table className='min-w-full table-auto text-gray-800'>
                <thead className=''>
                    <tr className='bg-gray-300'>
                        <th className=''>아이디</th>
                        <th className=''>고겍이름</th>
                        <th className=''>이메일</th>
                        <th className=''>전화버너</th>
                        <th className=''>왭사이트</th>
                        <th className=''>수정</th>
                        <th className=''>삭제</th>
                    </tr>
                </thead>
                <Tr info = {info}></Tr>
            </table>
        </div>
    );
  }
  
  export default Board;