import { Link } from "react-router-dom"
import { useLanguage } from "../contexts/LanguageContext"
import '../styles/HeaderStyle.css'

const Header = () => {
    
    const {language, toggleLanguage} = useLanguage();
    const translations = {
        en: {
            title: 'Todo App',
            languageToggle: 'Change Language',
            main: 'Main',
            create: 'Create'
        },
        ge: {
            title: 'Todo აპლიკაცია',
            languageToggle: 'ენის შეცვლა',
            main: 'მთავარი',
            create: 'შექმნა'
        }
    };
    return (
        <header>
            <h1>{translations[language].title}</h1>
            <Link to={'/'}>{translations[language].main}</Link>
            <Link to={'/create'}>{translations[language].create}</Link>
            <button onClick={toggleLanguage}>{translations[language].languageToggle}</button>

        </header>
    )

}

export default Header