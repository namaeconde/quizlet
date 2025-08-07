export default function Home() {

    const redirectToQuiz = (path: string) => {
        window.location.href = path;
    }

    return (
        <div>
            <h1>Welcome to the Quiz App</h1>
            <p>Select a quiz from the menu to get started!</p>
            <p>Enjoy learning and testing your knowledge!</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <button onClick={() => redirectToQuiz('/quiz-1')}>Quiz 1</button>
                <button onClick={() => redirectToQuiz('/quiz-2')}>Quiz 2</button>
            </div>
        </div>
    )
}