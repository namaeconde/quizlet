export default function ProgressBar({ currentStep, totalSteps }: { currentStep: number; totalSteps: number }) {
    return (
        <div style={{ display: "flex", alignItems: "center", gap: "10px", height: "10px", width: "100%" }}>
            {
                new Array(totalSteps).fill(null).map((_, i) => {
                    return <div style={{ backgroundColor:  `${ i < currentStep ? 'white' : ''}`, width: `${100/totalSteps}%`, height: "10px", border: "1px solid" }}></div>
                })
            }
        </div>
    );
}