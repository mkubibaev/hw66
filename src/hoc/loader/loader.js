import React, {Component} from 'react';
import Spinner from "../../components/UI/Spinner/Spinner";

const loader = (WrappedComponent, axios) => {
	return class LoaderHOC extends Component {

		constructor(props) {
			super(props);

			this.state = {
				content: null
			};

			this.state.interceptorId = axios.interceptors.response.use(res => {
				console.log(res);
				this.setState({content: res});
			}, err => err);
		}

		componentWillUnmount() {
			axios.interceptors.response.eject(this.state.interceptorId);
		}


		render() {
			if (!this.state.content) {
				return <Spinner/>
			}

			return <WrappedComponent {...this.props}/>
		}

	}
};

export default loader;