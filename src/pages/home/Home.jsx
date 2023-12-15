import Status from "../../components/statusBar/Status";
import Logo from "../../components/logo/Logo";
import styles from './Style.module.css';
import { Link } from 'react-router-dom';

export default function Home(){
return(
    <>
    <div className={styles.layout}>
    <Status/>
    <Link to="/signin">
    <Logo/>
    </Link>
   
    </div>
   
    </>
)
}