import {useContext} from 'react';
import ThemeContext from '../context/context';


function ThemeTest (){
    const {name, backgroundColor, color} = useContext(ThemeContext);

    const style ={
        backgroundColor,
        color,
        width: '200px',
        height: '200px',
    }
    return(
        <div style={style}>ThemeTest {name}</div>
    )
}
export default ThemeTest