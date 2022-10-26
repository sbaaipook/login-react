import {useState,useRef} from 'react'
import "./App.css"
import Header from '../../Components/Header'
import Home from "../Home"
import Footer from '../../Components/Footer'
import Default from "../../Components/Default"
import Signup from '../../Components/Signup'
import Signin from '../../Components/Signin'
import {data} from "../../Constants/data"

const App=()=> {
	const handelClick=()=>{
			if (refIdent.current.value !== "" && data.filter(usr=>usr.nom === refIdent.current.value)[0] === undefined){
				setMsgIdent("L'ident que vous avez entrer n'existe pas !")
			}else if(refIdent.current.value === ""){
				setMsgIdent("Entrez votre ident !")
			}else {
				setIdent(data.filter(usr=>usr.nom === refIdent.current.value)[0])
				 	setMsgIdent("")
			}
			if (refPass.current.value !== "" && ident.pass !== refPass.current.value){
				setMsgPass("invalid mot de pass")
			}else if(refPass.current.value === "" ){
				setMsgPass("Entrez le mot de pass !")
			}else if(ident.pass === refPass.current.value && ident.nom === refIdent.current.value){
				setMsgPass("")
				setContent(<Default user={refIdent.current.value}/>)
			}
			// let ckPass = /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#%$§&]){8,}/
		}
	const refIdent = useRef(),
	      refPass = useRef(),
	      [msgIdent,setMsgIdent] = useState(""),
	      [msgPass, setMsgPass] = useState(""),
	      [ident,setIdent] = useState("");
	
	const [content , setContent] = useState(<Signin onclick={handelClick} inpPass={refPass} inpIdent={refIdent} msgErrPass={msgPass} msgErrIdent={msgIdent} />)
	const handleSignup =()=>{
		setContent(<Signup/>)
	}
	const handleSignin =()=>{
		setContent(<Signin onclick={handelClick} inpPass={refPass} inpIdent={refIdent} msgErrPass={msgPass} msgErrIdent={msgIdent} />)
	}
	
	
  return (
    <Home>
      <Header signupClick={handleSignup} signinClick={handleSignin} /> 
			{content}
      <Footer/> 
    </Home>
  )
}

export default App