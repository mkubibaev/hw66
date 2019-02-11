import React, {Component} from 'react';
import axios from '../../axios-pages';
import EditForm from "../../components/EditForm/EditForm";

class EditPage extends Component {

    state = {
        pagesList: [],
        selectedPage: '',
        pageData: {
            title: '',
            content: ''
        }

    };

    getPageData = (pageName) => {
        axios.get('pages/' + pageName + '.json').then(response => {
            this.setState({pageData: response.data});
        }).catch(error => {
            console.log(error);
        });
    };

    selectHandler = event => {
        const pageName = event.target.value;

        this.setState({selectedPage: pageName});
        this.getPageData(pageName);
    };

    valueChanged = event => {
        const pageData = {...this.state.pageData};
        const {name, value} = event.target;

        pageData[name] = value;
        this.setState({pageData: pageData});
    };

    submitHandler = event => {
        event.preventDefault();

        if (this.state.selectedPage) {
            axios.put('pages/' + this.state.selectedPage + '.json', this.state.pageData).then(() => {
                this.props.history.replace(this.state.selectedPage);
            }).catch(error => {
                console.log(error);
            });
        } else {
            alert('Select page!');
        }
    };

    componentDidMount() {
        axios.get('pages.json').then(response => {
            this.setState({pagesList: Object.keys(response.data)});
        }).catch(error => {
            console.log(error);
        });
    }

    render() {
        return (
            <EditForm
                pagesList={this.state.pagesList}
                title={this.state.pageData.title}
                content={this.state.pageData.content}
                changed={this.valueChanged}
                selected={this.selectHandler}
                submitted={this.submitHandler}
            />
        );
    }
}

export default EditPage;