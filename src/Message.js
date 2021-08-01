import './Message.css'

export function Message(props) {
    return (
        <div className="Message">
            <h2 className="Message__heading">{props.message}</h2>
        </div>
    );
}

//export default App;
