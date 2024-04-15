import { useState } from 'react'
import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'
const users = [
{
   userName: 'Miguel Angel',
   name: 'Miguel Angel Duran',
   isFollowing: true 

},
{
    userName: 'Pedro Suarez',
    name: 'Pedro Suarez Vertiz',
    isFollowing: false
 
},
{
    userName: 'Maria Becerra',
    name: 'Maria Becerran',
    isFollowing: true 
 
},
{
    userName: 'Joel Gonzales',
    name: 'caraDePez',
    isFollowing: false
 
}
]
export function App(){

return (
    <section className='App'>
    {
    users.map(({ userName, name, isFollowing}) =>(
        <TwitterFollowCard
        key={userName}
        userName={userName}
        initialIsFollowing={isFollowing}
    >
        {name}
    </TwitterFollowCard>
    ))
}
    </section>
)
}