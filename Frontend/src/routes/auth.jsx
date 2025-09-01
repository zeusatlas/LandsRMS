import { Route } from "react-router-dom";
// import TempLogin from "../pages/temp/TempLogin";
import AuthLayout from "../layouts/AuthLayout";
// import AuthLogin from "../pages/auth/Login";
// import AuthRecoverPassword from "../pages/auth/RecoverPassword";
// import AuthVerifyToken from "../pages/auth/VerifyToken";
// import AuthLockScreen from "../pages/auth/LockScreen";
// import AuthLogOut from "../pages/auth/LogOut";
// import AuthChangePassword from "../pages/auth/ChangePassword";

const auth = () => {
  return (
    <Route element={<AuthLayout />}>

      {/* Grouped Auth Routes */}
      {/* <Route path="/" element={<AuthLogin />} />
      <Route path="/auth">
        <Route path="login" element={<AuthLogin />} />
        <Route path="reset-password" element={<AuthChangePassword />} />
        <Route path="recover-password" element={<AuthRecoverPassword />} />
        <Route path="verify-token" element={<AuthVerifyToken />} />
        <Route path="lock-screen" element={<AuthLockScreen />} />
        <Route path="logout" element={<AuthLogOut />} />
      </Route>
      <Route path="/temp/login" element={<TempLogin />} /> */}
    </Route>
  )
}

export default auth
