import React, {FC, useEffect, useState} from "react";
import Container from "./components/Container";

interface UseEffectProps {

}

const UseEffect: FC<UseEffectProps> = ({}) => {
    const [count, setCount] = useState(0)
    const [useEffectUpdates, setUseEffectUpdates] = useState(0);

    useEffect(() => {
        setUseEffectUpdates(useEffectUpdates + 1);
    }, [count])


    return <Container>
        <strong>Clicked {count} times</strong>
        <br />
        <strong>useEffect was called {useEffectUpdates} times</strong>
        <br />
        <button onClick={() => setCount(count + 1)}>Click</button>
    </Container>
}

export default UseEffect;