import React, {Component} from 'react';
import axios from '../../axios-pages';
import Content from "../../components/Content/Content";

class Page extends Component {

    state = {
        pageData: {},
    };

    getPageData = () => {
        let pageName = 'home';

        if (this.props.match.params.name) {
            pageName = this.props.match.params.name;
        }

        axios.get('pages/' + pageName + '.json').then(response => {
            this.setState({pageData: response.data})
        }).catch(error => {
            console.log(error);
        })
    };

    componentDidMount() {
        this.getPageData();
    }

    componentDidUpdate(prevProps) {
        if (this.props.match.params.name !== prevProps.match.params.name) {
            this.getPageData();
        }
    }

    render() {
        return (
            <Content {...this.state.pageData}/>
        );
    }
}

export default Page;