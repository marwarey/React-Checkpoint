import  Image from './vvg.jpg'
function About (){
    const user = 'Marwa ' 
    return (
     <div style={{border:"solid ",color:"black",maxWidth:"100vw"}}>

            <h1 className='title' >{user}</h1>
    <img class="img"
        src={Image}
        alt=""
        width="300" height="250" />
        <img class="img2"
        src="/piano.jpg"
        alt=""
        width="300" height="250" />  
    
    </div>
  
  )
}

    

    
export default About