import "./App.css";
import { useState, useEffect } from "react";
import wifi from "./img/wifi.svg"
import signal from "./img/signal.svg"
import battery from "./img/battery.svg"
import NumberFormat from "react-number-format";

function App() {
  const [preState, setPreState] = useState("");
  const [curState, setCurState] = useState("");
  const [input, setInput] = useState("0");
  const [operator, setOperator] = useState(null);
  const [total, setTotal] = useState(false);

  const inputNum = (e) => {
    if (curState.includes(".") && e.target.innerText === ".") return;

    if (total) {
      setPreState("");
    }

    curState
        ? setCurState((pre) => pre + e.target.innerText)
        : setCurState(e.target.innerText);
    setTotal(false);
  };

  useEffect(() => {
    setInput(curState);
  }, [curState]);

  useEffect(() => {
    setInput("0");
  }, []);
  const operatorType = (e) => {
    setTotal(false);
    setOperator(e.target.innerText);
    if (curState === "") return;
    if (preState !== "") {
      equals();
    } else {
      setPreState(curState);
      setCurState("");
    }
  };

  const equals = (e) => {
    if (e?.target.innerText === "=") {
      setTotal(true);
    }
    let cal;
    switch (operator) {
      case "/":
        cal = String(parseFloat(preState) / parseFloat(curState));
        break;

      case "+":
        cal = String(parseFloat(preState) + parseFloat(curState));
        break;
      case "X":
        cal = String(parseFloat(preState) * parseFloat(curState));
        break;
      case "-":
        cal = String(parseFloat(preState) - parseFloat(curState));
        break;
      default:
        return;
    }
    setInput("");
    setPreState(cal);
    setCurState("");
  };

  const minusPlus = () => {
    if (curState.charAt(0) === "-") {
      setCurState(curState.substring(1));
    } else {
      setCurState("-" + curState);
    }
  };

  const percent = () => {
    preState
        ? setCurState(String((parseFloat(curState) / 100) * preState))
        : setCurState(String(parseFloat(curState) / 100));
  };

  const reset = () => {
    setPreState("");
    setCurState("");
    setInput("0");
  };

  const date = new Date();

  const [dateTime, setDateTime] = useState({
    hours: date.getHours(),
    minutes: date.getMinutes(),
    seconds: date.getSeconds()
  });
  useEffect(() => {
    const timer = setInterval(() => {
      const date = new Date();
      setDateTime({
        hours: date.getHours(),
        minutes: date.getMinutes(),
        seconds: date.getSeconds()
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
      <div className='container'>
        <div className="top-bar">
          <div className="status">
            <div className="signal">
              <img
                  src={signal}
                  alt="signal"
              />
            </div>
            <div className="mts">
              MTS RUS
            </div>
            <div className="wifi">
              <img
                  src={wifi}
                  alt="wifi"
              />
            </div>
          </div>

          <div>
            {dateTime.hours}:{dateTime.minutes.toString().padStart(2, '0')}
          </div>

          <div className="battery">
            <div className="battery-text">
              100%
            </div>
            <div className="battery-logo">
              <img
                  src={battery}
                  alt="battery"
              />
            </div>
          </div>
        </div>
        <div className='wrapper'>
          <div className='screen'>
            {input !== "" || input === "0" ? (
                <NumberFormat
                    value={input}
                    displayType={"text"}
                    thousandSeparator={true}
                />
            ) : (
                <NumberFormat
                    value={preState}
                    displayType={"text"}
                    thousandSeparator={true}
                />
            )}
          </div>
          <div className="calcButtons-container">
            <span>
               <div className='btn light-gray' onClick={reset}>
                AC
              </div>
              <div className='btn light-gray' onClick={percent}>
                %
              </div>
              <div className='btn light-gray' onClick={minusPlus}>
                +/-
              </div>
              <div className='btn orange' onClick={operatorType}>
                /
              </div>
            </span>
            <span>
              <div className='btn' onClick={inputNum}>
                7
              </div>
              <div className='btn' onClick={inputNum}>
                8
              </div>
              <div className='btn' onClick={inputNum}>
                9
              </div>
              <div className='btn orange' onClick={operatorType}>
                  X
              </div>
            </span>
            <span>
                <div className='btn' onClick={inputNum}>
                  4
                </div>
                <div className='btn' onClick={inputNum}>
                  5
                </div>
                <div className='btn' onClick={inputNum}>
                  6
                </div>
                <div className='btn orange' onClick={operatorType}>
                  +
                </div>
            </span>
            <span>
              <div className='btn' onClick={inputNum}>
                1
              </div>
              <div className='btn' onClick={inputNum}>
                2
              </div>
              <div className='btn' onClick={inputNum}>
                3
              </div>
              <div className='btn orange' onClick={operatorType}>
                -
              </div>
            </span>
            <span>
              <div className='btn zero' onClick={inputNum}>
                0
              </div>
              <div className='btn' onClick={inputNum}>
                .
              </div>
              <div className='btn' onClick={equals}>
                =
              </div>
            </span>
          </div>
        </div>
      </div>
  );
}

export default App;
