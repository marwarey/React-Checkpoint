import './App.css';

import {Navigation} from './component/Navbar'
import {Car} from './component/Carousel'
import Input from './component/Form';
import About from './component/About'
import ReactPlayer from 'react-player';

function App() {


return(
<div>
<Navigation></Navigation>
<Car></Car>
<About></About>
<ReactPlayer
 width='320'
 height='240'
 controls
url ='https://www.youtube.com/watch?v=Rq5SEhs9lws'/>
<Input></Input>

</div>
  )


}

export default App
