import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";

const Counter = () => {
    const [step, setStep] = useState(1);
    const [count, setCount] = useState(0);
    let date = new Date("Octobar 1 2024");
    date.setDate(date.getDate() + count)

    return (
        <>
            <div>
                <button onClick={() => setStep((c) => c - 1)}>-</button>
                <label>Step: {step} </label>
                <button onClick={() => setStep((c) => c + 1)}>+</button>
            </div>
            <div>
                <button onClick={() => setCount((c) => c - step)}>-</button>
                <label>Count: {count}</label>
                <button onClick={() => setCount((c) => c + step)}>+</button>
            </div>
            <div>
                <span>
                    {count === 0 ? "Today is "
                        : count > 0
                            ? `${count} days from today is `
                            : `${Math.abs(count)} days ago was `
                    }
                </span>
                <span>{date.toDateString()}</span>
            </div>
        </>
    )
}

function App() {

    return (
        <div>
            <Counter />
        </div>
    );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
    <StrictMode>
        <App />
    </StrictMode>
);
