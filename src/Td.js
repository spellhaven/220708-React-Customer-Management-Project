import React from "react";



function Td({item}) {
    return(
        <tr className="">
            <td className="">{item.id}</td>
            <td className="">{item.name}</td>
            <td className="">{item.email}</td>
            <td className="">{item.phone}</td>
            <td className="">{item.website}</td>
            <td className="">
                <button className="py-2 px-4 rounded-lg shadow-md text-white bg-blue-500 hover:bg-blue-800">수정</button>
            </td>
            <td className="">
                <button className="py-2 px-4 rounded-lg shadow-md text-white bg-red-500 hover:bg-red-800">삭제, ㅋ</button>
            </td>
        </tr>
    );
}

export default Td;