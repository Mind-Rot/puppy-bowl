import { useState } from "react";
import { useNavigate} from "react-router-dom";
import { createPuppy } from "../API";

function createPuppyForm(){
        const navigate = useNavigate();
    const [name, setName] = useState("");
    const [breed, setBreed] = useState("");

    return <h1>
        <form onSubmit={async (e)=>{
        e.preventDefault()
        await createPuppy(name, breed);
        }}
        >
        <input 
                   onChange={(e) => {
                    setName(e.target.value);
                  }}
         value={name} placeholder="name"
         />
        <input
                   onChange={(e) => {
                    setBreed(e.target.value);
                   }}
         value={breed} placeholder="breed"
         />
         <button type="submit">Create Player!</button>
        </form>
     </h1>;
}

export default createPuppyForm