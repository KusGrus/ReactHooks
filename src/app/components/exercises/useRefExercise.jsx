import React, { useRef, useState } from "react";
import CollapseWrapper from "../common/collapse";
const UseRefExercise = () => {
    const [blockTitle, setBlockTitle] = useState("Блок");
    const blockRef = useRef();

    const handleClick = () => {
        setBlockTitle("text");
        blockRef.current.style.width = "80px";
        blockRef.current.style.height = "160px";
    };

    return (
        <CollapseWrapper title="Упражнение">
            <p className="mt-3">
                У вас есть блок, у которого заданы ширина и высота. Добавьте
                кнопку, при нажатии которой изменятся следующие свойства:
            </p>
            <ul>
                <li>Изменится содежимое блока на &quot;text&quot;</li>
                <li>высота и ширина станут равны 150 и 80 соответственно</li>
            </ul>
            <div
                ref={blockRef}
                className="bg-primary d-flex flex-row justify-content-center align-items-center rounded"
                style={{
                    height: 40,
                    width: 60,
                    color: "white"
                }}
            >
                <small>{blockTitle}</small>
            </div>
            <button className="btn btn-primary mt-4" onClick={handleClick}>Change</button>
        </CollapseWrapper>
    );
};

export default UseRefExercise;
