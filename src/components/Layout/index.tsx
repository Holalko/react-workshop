import React, {FC} from "react";
import {NavLink} from "react-router-dom";
import {useDarkMode} from "../../contexts/DarkModeContext";

interface LayoutProps {

}

const Layout: FC<LayoutProps> = ({children}) => {
    // TODO: TASK #6
    //     create context for dark mode
    const {isDarkMode, toggleDarkMode} = useDarkMode();


    return <>
        <nav style={{
            display: 'flex',
            alignItems: 'center',
            flexFlow: "row",
            background: '#585858',
            color: "white",
            padding: '0.5em 1em'
        }}>
            <h2>React Workshop</h2>
            <ul style={{
                display: 'flex',
                listStyle: 'none'
            }}>
                <NavLink to={"/"}>
                    <li>
                        Posts
                    </li>
                </NavLink>
            </ul>


            <div style={{
                marginLeft: 'auto',
                display: 'flex',
                alignItems: 'center'
            }}>
                Dark mode
                <label className="switch">
                    <input type="checkbox" checked={isDarkMode} onChange={evt => toggleDarkMode()}/>
                    <span className="slider round"></span>
                </label>
            </div>
        </nav>
        <main>
            {children}
        </main>
    </>
}

export default Layout;