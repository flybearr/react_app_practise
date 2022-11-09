import {useContext, useState} from 'react';

function ToggleButton({statusIndex,texts,handler}) {
 const [button,setButton] = useState(statusIndex);
    const classNames = ['btn'];
  


    const myClick = ()=>{
        const nextStatusIndex = button === 0 ? 1 : 0;
        setButton (nextStatusIndex); 
        handler(nextStatusIndex);
    }
   
 
 classNames.push(button === 0 ? 'btn-primary' : 'btn-outline-primary' )
 
 
    return(
    <>
    <button type="button" className ={classNames.join(' ')} onClick={()=>{
       myClick();
    }}>{texts[button]}</button>
    </>
  );
}
ToggleButton.defaultProps = {
    statusIndex: 0,
    texts:["關" , "開"],
    handler:(index)=>{},
}

export default ToggleButton;


