import { useState } from "react";
import './Calculator.css'

function Calculator() {

    const [calc, setCalc] = useState("");

    const [result, setResult] = useState("");

    const operators = ['/', '*', '+', '-', '.'];

    const updateCalc = value => {
        if (
            operators.includes(value) && calc === '' ||
            operators.includes(value) && operators.includes(calc.slice(-1)
            )
        ) {
        return;
    }
        setCalc(calc + value);

        if (!operators.includes(value)) {
            setResult(eval(calc + value.toString()));
        }
    }

    const createDigits = () => {
        const digits = [];

        for (let i = 1; i < 10; i++) {
            digits.push(
                <button onClick={() => updateCalc(i, toString())} key={i}>{i}</button>
            )
        }

        return digits;
    }

    const calculate = () => {
        setCalc(eval(calc).toString());
    }

    const deleteLast = () => {
        if (calc == '') {
            return;
        }

        const value = calc.slice(0, -1);

        setCalc(value);
    }
    return (
        <div className="Calculator">
            <div className="display">
                {result ? <span>({result})</span> : '' } { calc || "0"}
                <div className="operators">
                    <button onClick={ () => updateCalc('/') }>/</button>
                    <button onClick={ () => updateCalc('*') }>*</button>
                    <button onClick={ () => updateCalc('+') }>+</button>
                    <button onClick={ () => updateCalc('-') }>-</button>

                    <button onClick={deleteLast}>Delete</button>

                </div>
                <div className="digits">
                    { createDigits() }
                    <button onClick={ () => updateCalc('0') }>0</button>
                    <button onClick={ () => updateCalc('.') }>.</button>

                    <button onClick={calculate}>=</button>

                </div>
            </div>

        </div>
    )
}

export default Calculator;