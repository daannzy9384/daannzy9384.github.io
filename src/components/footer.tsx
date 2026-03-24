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
                    <li>
                            <a href="#"className="icon brands style2 fa-linkedin-in">
                                <span className="label">Email</span>
                            </a>  
                    </li>
                </ul>
                <p>
                    &copy; {new Date().getFullYear()} daannzy9384.
                     Design: <a href="https://html5up.net">HTTML5 UP</a>.

                </p>
            </div>
        </footer>
    );
};
export default footer;