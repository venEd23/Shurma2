import React, { FC, useEffect } from "react";
import getUserLogin from "../../store/selectors";
import AuthPage from "../AuthPage";


const AuthPageContainer: FC = () => {
    const history = useHistory();
    const login = useSelector(getUserLogin);

    useEffect(()=>{
        if(login){
            history.push("/main");
        }
    }, [history, login]);

return <AuthPage />;
}

export default AuthPageContainer;
