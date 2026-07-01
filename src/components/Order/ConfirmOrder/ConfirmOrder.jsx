import { useState } from "react";
import { FaCheck } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { ShowToastError } from "../../ShowToastError/ShowToastError ";

export default function ConfirmOrder() {
    const [checked, setChecked] = useState(false);


    const handleCheckboxChange = () => {
        setChecked((prev) => !prev);
    };

    const handleClick = (e) => {
        if (!checked) {
            e.preventDefault();
            ShowToastError({ message: "Please agree to the terms and conditions." });
        }
    };

    return (
        <div className="box-confirm-order">
            <h4>Taxes, shipping, and discount codes calculated at checkout</h4>

            <div className="section-checkBox">
                <div
                    className={`checkbox${checked ? " active" : ""}`}
                    onClick={handleCheckboxChange}
                >
                    <FaCheck />
                </div>
                <label>I agree with the terms and conditions.</label>
            </div>

            <Link
                className={`btn ${checked ? "active" : ""}`}
                to= {checked ? "/checkout" : "#"}
                onClick={handleClick}
            >
                Check Out
            </Link>
        </div>
    );
}
