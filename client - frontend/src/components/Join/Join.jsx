import React, {useRef} from 'react'
import io from 'socket.io-client'

export default function Join({setChatVisibility}){

const userNameRef = useRef()
const handleSubmit = async () => {
    const username = userNameRef.current.value
    if (!username.trim()) return
        const socket = await io.connect('http://127.0.0.1:3001/')
        socket.emit('set_username', username)
        setChatVisibility(true)
    
}
    return(
        <div>
            <h1>Join</h1>
            <input type="text" ref={userNameRef} placeholder="nome de usuario "/>
            <button onClick={()=>handleSubmit()}>entrar</button>
        </div>
    )
}