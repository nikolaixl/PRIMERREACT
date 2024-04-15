import { useState, userState} from 'react'

export function TwitterFollowCard({children, userName, initialIsFollowing}){
   const [isFollowing, setIsFolling] = useState(initialIsFollowing) 
   console.log('[TwitterFollowCard] render with userName: ', userName)
    
    const text = isFollowing ? 'Siguiendo' : 'Seguir';
    const buttonClassName = isFollowing ?
     'tw-followCard-button is-following'
    : 'tw-followCard-button'
    
  const handleClick = () =>{
    setIsFolling(!isFollowing);
  }
    return(

<article className='tw-followCard'>
        <header className='tw-followCard-header'>
            <img
            className='tw-followCard-avatar'
            src={`https://unavatar.io/kikobeats?ttl=1h${userName}`}
             alt="El avatar random" />
        <div className='tw-followCard-info'>
            <strong>{children}</strong>
            <span className='tw-followCard-username'>@{userName}</span>
        </div>
        </header>
        <aside>
            <button className={buttonClassName} onClick={handleClick}>
            <span className='tw-followCard-text'> {text}</span>
            <span className='tw-followCard-stopFollow'>Dejar de Seguir</span>
            </button>
        </aside>
    </article>
    )}