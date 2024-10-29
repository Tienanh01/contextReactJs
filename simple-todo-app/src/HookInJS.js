import { React, useEffect, useState } from "react"


console.log(React)

function HookInJS() {

    const [data, setData] = useState([]);
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {

        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => setData(data))

    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setSeconds(prevSeconds => prevSeconds + 1);
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return (

        <div>

            <div>Thời gian đã trôi qua : {seconds} giây</div>

            <ul>
                {data.map(post => (
                    <li key={post.id}>{post.title}</li>
                ))}

            </ul>

        </div>


    )
}

export default HookInJS 