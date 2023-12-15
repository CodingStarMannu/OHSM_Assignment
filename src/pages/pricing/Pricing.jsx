
import Header from "../../components/header/Header"
import Plan from "../../components/plan/Plan"
import FaqComp from "../../components/faqs/FaqComp";
import  Footer from "../../components/footer/Footer";
import styles from './Style.module.css';

export default function Pricing(){
return(
    <>
    <div className={styles.layout}>
    <Header/>
    <Plan/>
    <FaqComp/>
    <Footer/>
    </div>
   
    </>
)
}