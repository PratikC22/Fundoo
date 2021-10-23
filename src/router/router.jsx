import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import signUp from 'src/components/signUp/signUp'
import signIn from 'src/components/signIn/signIn'
import ResetFundooPassword from 'src/components/resetPassword/ResetFundooPassword'
import Resetpassword from 'src/components/resetPassword/resetpassword'
import Dashboard from 'src/components/dashboard/dashboard'

export const RouterDom = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={signIn} />
                <Route path='/signUp' component={signUp} />
                <Route path='/ResetFundooPassword/' component={ResetFundooPassword} />
                <Route path='/resetpassword/:token' component={Resetpassword} />
                <Route path='/dashboard' component={Dashboard} />
            </Switch>
        </BrowserRouter>
    )
}

export default RouterDom
