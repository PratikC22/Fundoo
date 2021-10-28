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

export const MyRouter = () => {
    return (

        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={signIn} />
                <Route path='/signUp' component={signUp} />
                <Route path='/ResetFundooPassword/' component={ResetFundooPassword} />
                <Route path='/resetpassword/:token' component={Resetpassword} />
                <>
                    <MainContainer />
                    <Route exact path="/home" component={Dashboard}></Route>
                    <Route exact path="/reminders" component={Reminders}></Route>
                    <Route exact path="/archive" component={ArchiveNotes}></Route>
                    <Route exact path="/trash" component={Trash} ></Route>
                </>
                <Route exact path="*" component={PageNotFound}></Route>
            </Switch>
        </BrowserRouter>
    )
}

export default MyRouter