import React,{Component} from 'react';
import Modal from '../../components/UI/Modal/Modal';
import Aux from '../../hoc/aux/aux';

const errorHandler=(WrappedComponent,axios)=>{
    return class extends Component{
        state={
            error:null
        };
        componentWillMount(){
            this.reqInterceptor=axios.interceptors.request.use(request=>{
                this.setState({error:null});
                return request;
            });
            this.resInterceptor=axios.interceptors.response.use(res=>res,error => {
                this.setState({error:error});
            });
        }
        componentWillUnmount(){
            axios.interceptors.response.eject(this.resInterceptor);
            axios.interceptors.request.eject(this.reqInterceptor);
        }
        render(){
            return (
                <Aux>
                    <Modal
                        show={this.state.error}
                        backgroundClick={()=>{this.setState({error:null});}}>
                        {this.state.error?this.state.error.message:null}
                    </Modal>
                    <WrappedComponent {...this.props}/>
                </Aux>
            );
        }
    }
};

export default errorHandler;