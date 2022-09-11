import { useContext } from 'react';
import classes from './Wellcome.module.css';
import AuthContext from '../../store/auth-context';

const Wellcome = () => {

  const authCtx = useContext(AuthContext);

  return (
    <div className={classes.container} >
      {!authCtx.isLoggedIn && <h1>JOIN YOUR DREAMED APP</h1>}
      {authCtx.isLoggedIn && <h1>WELLCOME TO YOUR DREAMED APP !!!</h1>}
    </div>

  )
}

export default Wellcome;