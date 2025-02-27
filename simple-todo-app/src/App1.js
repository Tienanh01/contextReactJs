
import { useState } from "react";
import { MyContext } from "./MyContext"
import MyComponent from "./MyComponent";
function App1() {

    const [text, setText] = useState("");

    return (
        <div>
            <MyContext.Provider value={{ text, setText }}>
                <MyComponent />
            </MyContext.Provider>
        </div>
    )

}

export default App1;