import {ThemeContextProvider} from './context'
import {AuthContextProvider} from './Authcontext'
function Mycontext({children}) {
  return (
    <>
    <ThemeContextProvider>
         <AuthContextProvider>
            {children}
        </AuthContextProvider>
    </ThemeContextProvider>
    </>
  );
}
export default Mycontext;