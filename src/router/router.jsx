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

                <Route path='/home' render={() =>
                    <div className="structure" style={styles}>
                        <MainContainer />
                        <Dashboard />
                    </div>
                } />

                <Route path='/reminders' render={() =>
                    <div className="structure" style={styles}>
                        <MainContainer />
                        <Reminders />
                    </div>
                } />

                <Route path='/archive' render={() =>
                    <div className="structure" style={styles}>
                        <MainContainer />
                        <ArchiveNotes />
                    </div>
                } />

                <Route path='/trash' render={() =>
                    <div className="structure" style={styles}>
                        <MainContainer />
                        <Trash />
                    </div>
                } />


                <Route path='*'><PageNotFound /></Route>
            </Switch>
        </BrowserRouter>
    )
}

const styles = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between"
}

export default MyRouter