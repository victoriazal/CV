import Qualities from '../carousel/Qualities';
import './Main.scss' 
export default  function Main() {
    return (
      <>
      <div className="main">
        <div>
        <img className='main_grain-bg' src='../../../public/grain.avif'/>
        </div>

        <Qualities/>
      </div>
      </>
    );
  }