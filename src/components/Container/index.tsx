import React, {FC} from "react";


const Container: FC = ({children}) => {
    return <div style={{
        width: '75%',
        margin: '0 auto',
        padding: '2em'
    }}>
        {children}
    </div>
}

export default Container;