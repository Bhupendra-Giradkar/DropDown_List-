import { useState } from 'react';
import '../DropDown/DropDown.css'

function Dropdown() {
    const list = ['Yes', 'Always', 'Probably Not', 'On Requirement Basis', 'Never'];

    const [selectedOption, setSelectedOption] = useState('');
    const [optionArray, setOptionArray] = useState([]);


    const handleMouseOver = () => {
        setOptionArray(list);
    }

    const handleList = () => {
        setOptionArray([]);
    }

    const handleOptionClick = (data) => {
        setSelectedOption(data);
    }

    return (
        <>
            <div onClick={handleList}>
                <h1>Have you use Dropdown ?</h1>
                <div>
                    <h2>{selectedOption}</h2>
                    <button type='button' onMouseOver={handleMouseOver} className="initialOption">Select</button>
                    <div className="options">
                        {optionArray.map((data) => (
                            <div onClick={() => handleOptionClick(data)} className="singleOption">{data}</div>
                        ))}
                    </div>

                </div>
            </div>
        </>
    )
}


export default Dropdown;