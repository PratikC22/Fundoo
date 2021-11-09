import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import signUp from 'src/components/signUp/signUp'
import signIn from 'src/components/signIn/signIn'
import ResetFundooPassword from 'src/components/resetPassword/ResetFundooPassword'
import Resetpassword from 'src/components/resetPassword/resetpassword'
import Dashboard from 'src/components/dashboard/dashboard'
import MainContainer from 'src/components/mainContainer/mainContainer'
import Reminders from 'src/components/reminders/Reminders'
import PageNotFound from 'src/components/pageNotFound'
import Trash from 'src/components/trash/trash'
import ArchiveNotes from 'src/components/archiveNotes/archiveNotes'
import ProtectedRoute from './ProtectedRoute';
import AuthRoute from './AuthRoute';

export const MyRouter = () => {
    return (

        <BrowserRouter>
            <Switch>
                <AuthRoute exact path='/' component={signIn} />
                <AuthRoute path='/signUp' component={signUp} />
                <AuthRoute path='/ResetFundooPassword/' component={ResetFundooPassword} />
                <AuthRoute path='/resetpassword/:token' component={Resetpassword} />
                <>
                    <MainContainer />
                    <ProtectedRoute exact path="/home" component={Dashboard}></ProtectedRoute>
                    <ProtectedRoute exact path="/reminders" component={Reminders}></ProtectedRoute>
                    <ProtectedRoute exact path="/archive" component={ArchiveNotes}></ProtectedRoute>
                    <ProtectedRoute exact path="/trash" component={Trash} ></ProtectedRoute>
                </>
                <Route exact path="*" component={PageNotFound}></Route>
            </Switch>
        </BrowserRouter>
    )
}

export default MyRouter