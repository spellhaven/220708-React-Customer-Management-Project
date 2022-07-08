import React, { useRef, useState } from 'react';
import axios from 'axios'; // 서버와 통신을 해 주는 라이브러리래.
import { useEffect } from 'react';
import Tr from "./Tr";
import Post from './Post';
import Modal from './Modal';

function Board() {

    const[info, setInfo] = useState([]);
    const [modalOn, setModalOn] = useState(false);
    const [selected, setSelected] = useState('');
    
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(res => setInfo(res.data))
            .catch(err => console.log(err))
    },[]);

    const nextId = useRef(11); // 더미 데이터 10개가 담긴 채로 시작했으니까, 새 데이터는 11번부터 시작해라. 이런 의도

    const handleSave = (infoData)=> {

        if (infoData.id) { // 이 if 조건은 "기존 데이터를 수정하냐"고, else는 "그렇지 않고 신규 데이터를 만드냐"다. 왜냐면 수정 창에서 넘어온 데이터엔 id값이 존재함, 새로운 데이터를 만들 때는 그렇지 않음... 
            setInfo(
                info.map(row => infoData.id === row.id ? { // 수정된 글의 id가 기존 테이블의 id와 같으면
                    id:infoData.id,
                    name:infoData.name,
                    email:infoData.email,
                    phone:infoData.phone,
                    website:infoData.website
                }:row
                ))
        } else {

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
        }
    };

    const handleModify = (item)=>{
        setModalOn(true);
        const selectedData = {
            id:item.id,
            name:item.name,
            email:item.email,
            phone:item.phone,
            website:item.website
        };
        setSelected(selectedData);
    };

    const handleCancel = () => {
        setModalOn(false);
    };

    const handleModlfySubmit = (item) => {
        handleSave(item);
        setModalOn(false);
    };
    
    const handleDelete = (deleteId) => {
        setInfo (
            info => info.filter(item => item.id !== deleteId)
        );
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
                <Tr info = {info} handleModify = {handleModify} handleDelete = {handleDelete}></Tr>
            </table>
            <Post onSaveData={handleSave}></Post> {/* 이러면 handleSave가 onSaveData라는 이름의 prop으로 들어가게 된다. 그 후에는 Post.js 참조. */}
            {modalOn && <Modal selectedData={selected} handleCancel={handleCancel} handleModifySubmit={handleCancel}></Modal>} {/* 못 알아들은 게 투성이지만 얘한테 설명을 쓰자면... modalOn = true와 <뒤 어쩌고>가 둘 다 있으면(&&는 and) 실행되라 이 말이야.*/}
        </div>
    );
  }
  
  export default Board;