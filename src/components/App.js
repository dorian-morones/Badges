import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import BadgeNew from '../pages/BadgeNew';
import Badges from '../pages/Badges';
import Layout from '../components/Layout'
import NotFound from '../pages/NotFound'
import BadgeEdit from '../pages/BadgeEdit'
import BadgeDetails from '../pages/BadgeDetailsContainer';
import Home from '../pages/Home'


function App() {
    return (
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/Badges" component={Badges} />
                    <Route exact path="/Badges/new" component={BadgeNew} />
                    <Route exact path="/Badges/:badgeId/edit" component={BadgeEdit} />
                    <Route exact path="/Badges/:badgeId/details" component={BadgeDetails} />
                    <Route component={NotFound} />
                </Switch>
            </Layout>
        </BrowserRouter>
    )
}

export default App;