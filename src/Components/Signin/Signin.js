
import "./Signin.css"
// import {data} from "../../Constants/data"
const Signin=props=> {
  return (
    <form className="signin" onSubmit={e=>e.preventDefault()}>
    	<legend>Conexion</legend>
    	<input ref={props.inpIdent} type="text" placeholder="L'identifiant" />
    	<span className="msg-err">{props.msgErrIdent}</span>
    	<input ref={props.inpPass} type="password" placeholder="Mot de pass" />
    	<span className="msg-err">{props.msgErrPass}</span>
    	<button onClick={props.onclick} type="submit">Se connecter</button>
    </form>
  )
}

export default Signin