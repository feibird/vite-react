import styles from './logo.module.less';
import logoUrl from '../../assets/react.svg';
function LogoItem(){
    return(
        <div className={styles.LogoItems}>
            <img src={logoUrl}/>
            <span>Ant Design</span>
        </div>
    )
}
export default LogoItem