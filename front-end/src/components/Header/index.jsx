import './style.css';

import Logo from '../../assets/brand.png';

function Header() {
    return(
        <header id="Home" className="default_color container">
            <a className="brand" href="./index.html">
                <img className="brand_image" src={Logo} alt="rabosa azul" />
                <h2 className="brand_title">Blue Fox</h2>
            </a>
            <div className="mobile_offcanvas"  data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling">
            <div className="mobile_offcanvas_line"></div>
            <div className="mobile_offcanvas_line"></div>
            <div className="mobile_offcanvas_line"></div>
            </div>

            <div className="offcanvas offcanvas-end default_color" data-bs-scroll="true" data-bs-backdrop="false" tabIndex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
            <div className="offcanvas-header informationGuide">
                <h5 className="offcanvas-title" id="offcanvasScrollingLabel">Guia de Informações</h5>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-x-circle-fill" viewBox="0 0 16 16" data-bs-dismiss="offcanvas" aria-label="Close">
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293z"/>
                </svg>
            </div>

            <div className="offcanvas-body">
                <nav className="header_navbar_offcanvas">
                <ul className="header_navbar_list" >
                    <li className="navbar_item">
                    <a className="item" href="#Home">Início</a>
                    </li>
                    <li className="header_sub_item">
                    <div className="navbar_item">
                        <a className="item" href="#about_section">Sobre mim</a>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-down-fill" viewBox="0 0 16 16">
                        <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
                        </svg>
                    </div>
                    <ul className="sub_item">
                        <li className="navbar_item"><a className="item" href="#preface">Prefácio</a></li>
                        <li className="navbar_item"><a className="item" href="#contact">Contatos</a></li>
                        <li className="navbar_item"><a className="item" href="#skill">Habilidades</a></li>
                    </ul>
                    </li>
                    <li className="navbar_item">
                    <a className="item" href="#project_section">Projetos</a>
                    </li>
                    <li className="header_sub_item">
                    <div className="navbar_item">
                        <a className="item" href="#additional_activity_section">Atividades Adicionais</a>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-down-fill" viewBox="0 0 16 16">
                        <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
                        </svg>
                    </div>
                    <ul className="sub_item">
                        <li className="navbar_item"><a className="item" href="#additional_activity_section">Beecrowd</a></li>
                        <li className="navbar_item"><a className="item" href="#leetcode">LeetCode</a></li>
                        <li className="navbar_item"><a className="item" href="#Voluntary">Empresa Júnior</a></li>
                    </ul>
                    </li>
                </ul>
                </nav>
            </div>
            </div>

            <nav className="header_navbar">
            <ul className="header_navbar_list" >
                <li className="navbar_item">
                <a className="item" href="#Home">Início</a>
                </li>
                <li className="header_sub_item">
                <div className="navbar_item">
                    <a className="item" href="#about_section">Sobre mim</a>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-down-fill" viewBox="0 0 16 16">
                    <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
                    </svg>
                </div>
                <ul className="sub_item">
                    <li className="navbar_item"><a className="item" href="#preface">Prefácio</a></li>
                    <li className="navbar_item"><a className="item" href="#contact">Contatos</a></li>
                    <li className="navbar_item"><a className="item" href="#skill">Habilidades</a></li>
                </ul>
                </li>
                <li className="navbar_item">
                <a className="item" href="#project_section">Projetos</a>
                </li>
                <li className="header_sub_item">
                <div className="navbar_item">
                    <a className="item" href="#additional_activity_section">Atividades Adicionais</a>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-down-fill" viewBox="0 0 16 16">
                    <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
                    </svg>
                </div>
                <ul className="sub_item">
                    <li className="navbar_item"><a className="item" href="#additional_activity_section">Beecrowd</a></li>
                    <li className="navbar_item"><a className="item" href="#leetcode">LeetCode</a></li>
                    <li className="navbar_item"><a className="item" href="#Voluntary">Empresa Júnior</a></li>
                </ul>
                </li>
            </ul>
            </nav>
        </header>
    )
}

export default Header;