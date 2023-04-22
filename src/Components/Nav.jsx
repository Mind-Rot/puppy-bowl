import { Link } from 'react-router-dom'

function Nav(){
    return (
        <div style={{
            display: "flex",
            width: "60vw",
            justifyContent: "space-between"
        }}
        >
            <link to='/'>To Home</link>
            <link to="/createPup">Create Player Form</link>
        </div>
    )
}

export default Nav