import React, {Component} from 'react';
import {Switch, Route} from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Page from "./containers/Page/Page";
import EditPage from "./containers/EditPage/EditPage";


class App extends Component {
    render() {
        return (
            <Layout>
                <Switch>
                    <Route path="/" exact component={Page} />
                    <Route path="/pages/admin" component={EditPage}/>
                    <Route path="/pages/:name" component={Page}/>
                </Switch>
            </Layout>
        );
    }
}

export default App;
