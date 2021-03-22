import React, {FC, useState} from "react";
import Container from "./components/Container";

interface UseStateProps {

}

const UseState: FC<UseStateProps> = ({}) => {
    const [count, setCount] = useState(0)


    return <Container>
        <strong>Clicked {count} times</strong>
        <button onClick={() => setCount(count + 1)}>Click</button>
    </Container>
}

export default UseState;