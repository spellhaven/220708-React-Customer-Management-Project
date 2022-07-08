import React from "react";
import Td from "./Td";

function Tr({info, handleModify, handleDelete}) {

    return (
        <tbody>
            {
                info.map(item => { // <c:forEach>를 돌리는 거랑 비슷하다. <Td> 10개 다 불러 (네 식구들 다 불러)
                    return (
                        <Td key = {item.id} item = {item} handleModify = {handleModify} handleDelete = {handleDelete}></Td>
                    )
                })
            }
        </tbody>
    );
}

export default Tr;