import React, { useRef, useState } from 'react';
import axios from 'axios'; // 서버와 통신을 해 주는 라이브러리래.
import { useEffect } from 'react';
import Tr from "./Tr";
import Post from './Post';

function Board() {

    const[info, setInfo] = useState([]);
    
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(res => setInfo(res.data))
            .catch(err => console.log(err))
    },[]);

    const nextId = useRef(11); // 더미 데이터 10개가 담긴 채로 시작했으니까, 새 데이터는 11번부터 시작해라. 이런 의도

    const handleSave = (infoData)=> {
        // setInfo((prevInfo)=> {
        //     return [
        //         ...prevInfo, {
        //             id: nextId.current,
        //             name:infoData.name,
        //             email:infoData.email,
        //             phone:infoData.phone,
        //             website:infoData.website,
        //         }]
        // })

        setInfo(info => info.concat( // 위의 방법을 쓸 수도 있으나, 요즘은 concat() 하는 방법이 유행이라 함.
            {
                id: nextId.current,
                name:infoData.name,
                email:infoData.email,
                phone:infoData.phone,
                website:infoData.website,  
            }
        ))

        nextId.current += 1;
    };
    
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
            <Post onSaveData={handleSave}></Post> {/* 이러면 handleSave가 onSaveData라는 이름의 prop으로 들어가게 된다. 그 후에는 Post.js 참조. */}
        </div>
    );
  }
  
  export default Board;