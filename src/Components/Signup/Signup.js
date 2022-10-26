import {useState,useRef} from 'react'
import "./Signup.css"
import {data} from "../../Constants/data"


const Signup =()=> {
	const [name ,setName] = useState(""),
				[ville, setVille] = useState(""),
				[date , setDate] = useState(""),
				[lois ,setLois] = useState([]);
	const refName = useRef(),
				refVille = useRef(),
				refLois1 = useRef(),
				refLois2 = useRef(),
				refLois3 = useRef(),
				refDate = useRef(),
				refPass = useRef();
				
	console.log(data)
	const chs = [refLois1,refLois2,refLois3]
	let ckPass = /(?=.*[\d])(?=.*[A-Z])(?=.*[a-z])(?=.*[#$@%?+&=()*]){8,}/
	const handleSubmit =()=>{
		if (refName.current.value !== "" && refDate.current.value !== "" && refPass.current.value.match(ckPass) !== null){ 
			setName(refName.current.value)
			setDate(refDate.current.value)
			setVille(refVille.current.value)
			setLois(chs.filter(e=>e.current.checked))
			let user = {nom:refName.current.value,pass:refPass.current.value};
			data.push(user)
			console.log(data)
		}
	}
	
  return (
    <form onSubmit={e=>e.preventDefault()}>
    <legend>Inscription</legend>
			<input type="text" ref={refName} placeholder="L'identifiant" required/>
			<div className="inp-pass">
				<input type="password" ref={refPass} placeholder="Mot de pass" required/>
			</div>
			<input ref={refDate} type="date" required/>
			
			<select ref={refVille} required>
				<option disabled>Ville</option>
				<option>Casablanca</option>
				<option>Zagora</option>
				<option>Ouarzazate</option>
				<option>Rabat</option>
				<option>Agadir</option>
			</select>
			
			<div id="genre">
				<label htmlFor="genre">Genre</label>
				<div className="ggg">
					<input type="radio" name="genre" id="man" checked/>
					<label htmlFor="man" >Homme</label>
				</div>
				<div className="ggg">
					<input type="radio" name="genre" id="wmn" />
					<label htmlFor="wmn">Femme</label>
				</div>
			</div>
			
			<div id="loisir">
				<label htmlFor="loisir">Loisirs</label>
				<div className="ggg">
					<input type="checkbox" ref={refLois1} value="Sport" id="spo" />
					<label htmlFor="spo">Sport</label>
				</div>
				<div className="ggg">
					<input type="checkbox" ref={refLois2} value="Lecture" id="lec" />
					<label htmlFor="lec">Lecture</label>
				</div>
				<div className="ggg">
					<input type="checkbox" value="Musique" ref={refLois3}  id="mus" />
					<label htmlFor="mus">Musique</label>
				</div>
			</div>
			
    	<button onClick={handleSubmit}  type="submit">S'inscrire</button>
    	
    	<div>
    		<p>Nom : {name}</p>
    		<p>Date : {date}</p>
    		<p>Ville : {ville}</p>
    		<p>Loisirs : {lois.map(itm=>`${itm.current.value} `)}</p>
    	</div>
    </form>
  )
}

export default Signup