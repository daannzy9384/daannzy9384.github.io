import React from "react";

const footer: React.FC = () => {
    return (
        <footer className="wrapper style1 align-center">
            <div className="inner">
                <ul className="icons">
                    <li>
                        <a href="https://github.com/daannzy9384" className="icon brands style2 fa-github">
                        <span className="label">Github</span>
                        </a>
                    </li>
                    
                </ul>
                <p>
                    &copy; {new Date().getFullYear()}  daannzy9384
                </p>
            </div>
        </footer>
    );
};
export default footer;