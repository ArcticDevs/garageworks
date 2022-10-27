import { useState, useEffect } from 'react'
import Login from './Login';
import Account from './Account';
import styles from '../../../styles/loginparent.module.css'

const LoginParent = () => {

    const [nextPage, setNextPage] = useState(false);
    const [loginNum, setLoginNum] = useState('');

    return (
        <div className={styles.login_parent_wrap}>
            <Login setNum={setLoginNum} moveAhead={setNextPage} />
            {/* <div className={`${styles.account_wrap} ${nextPage ? styles.show__account : styles.hide__account}`}>
                <Account origNum={loginNum} moveBack={setNextPage} />
            </div> */}
        </div>
    )
}

export default LoginParent