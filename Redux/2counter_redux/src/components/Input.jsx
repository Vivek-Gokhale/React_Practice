import { useRef } from "react";

const Input = ({ handleOnChange }) => {
    const inValue = useRef();

    const onChangeHandler = () => {
        handleOnChange(inValue.current.value);
    };

    return (
        <div className="form-group input-val">
            <label htmlFor="cntVal">Enter any value</label>
            <center>
                <input
                    type="text"
                    className="form-control"
                    id="cntVal"
                    style={{ margin: "10px", width: "100px" }}
                    ref={inValue}
                    onChange={onChangeHandler}
                />
            </center>
        </div>
    );
};

export default Input;
