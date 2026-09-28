export default function TabButton({children, onSelect}) {
    //js
    // const btn = document.querySelector("button");
    // btn.addEventListener("click", ()=>{//tham số 1 là lắng nghe sk, tham số 2 là thực hiện hàm
    //     //làm việc gì đó
    // }) 

    return (
        <li>
            <button onClick={onSelect}>
                {children}
            </button>
        </li>
        // ko thêm dấu ngoặc tròn vì thêm nó thì hàm thực thi ngay lập tức
    )
}

// export default function TabButton({aaa}) {
//     return (
//         <li>
//             <button>
//                 {aaa}
//             </button>
//         </li>
//     )
// }