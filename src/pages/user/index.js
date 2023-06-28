import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, H1, MainLayout } from "../style";

const User = () => {

    const navigate = useNavigate()

    const [userLogin, setUserLogin] = useState(false);

    const getInitialData = () => {
        const userJsonString = localStorage.getItem("Reflection")
        if (userJsonString) {
            const userObj = JSON.parse(userJsonString)
            setUserLogin(userObj.login)
        } else {
            navigate("/")
        }
    }

    useEffect(() => {
        getInitialData()
    },)

  return (
    <>
         <MainLayout>
            {userLogin &&
            <>
                <H1>
                    You are logged into your account: {userLogin}
                </H1>
                <Button onClick={() => navigate("/")}>
                    Log out
                </Button>            
            </>
            }
        </MainLayout>
    </>
  );
}

export default User;