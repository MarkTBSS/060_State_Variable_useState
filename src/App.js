import { useState } from "react";

const messages = [
    "Learn React ⚛️",
    "Apply for jobs 💼",
    "Invest your new income 🤑",
];

export default function App() {
    const [step, setStep] = useState(1);
    const [obj, setObj] = useState({ name: "Default", age: 10 });
    const [isOpen, setIsOpen] = useState(false);

    function handlePrevious() {
        if (step > 1) setStep((currentStep) => currentStep - 1);
        setObj({ name: "Previous Click", age: 20 });
    }

    function handleNext() {
        if (step < 3) setStep((currentStep) => currentStep + 1);
        setObj({ name: "Next Click", age: 30 });
    }

    return (
        <>
            <button className="close" onClick={() => setIsOpen((is) => !is)}>
                &times;
            </button>
            {isOpen ? (
                <div className="steps">
                    <div className="numbers">
                        <div className={step >= 1 ? "active" : ""}>1</div>
                        <div className={step >= 2 ? "active" : ""}>2</div>
                        <div className={step >= 3 ? "active" : ""}>3</div>
                    </div>
                    <p className="message">Step {step} : {messages[step - 1]}</p>
                    <p className="message">Name: {obj.name}, Age: {obj.age}</p>
                    <div className="buttons">
                        <button
                            style={{ backgroundColor: "#7950f2", color: "#fff" }}
                            onClick={handlePrevious}
                        >
                            Previous
                        </button>
                        <button
                            style={{ backgroundColor: "#7950f2", color: "#fff" }}
                            onClick={handleNext}
                        >
                            Next
                        </button>
                    </div>
                </div>
            ) : (
                <div className="message">Closed Message</div>
            )}
        </>
    );
}
