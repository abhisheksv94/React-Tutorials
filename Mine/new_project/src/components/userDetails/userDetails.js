import React,{Component} from 'react';

export default class UserDetails extends Component{
    showUserDetails(){
        if(this.props.user.firstName!==undefined) {
            return (
                <div className='container'>
                    <label style={{fontSize:"23px",color:"#4286f4"}}>User Details:</label>
                        <table className="table table-striped table-bordered table-sm">
                            <tbody>
                            <tr>
                            <th scope='row'>First Name:</th>
                            <td>{this.props.user.firstName}</td>
                            </tr><tr>
                            <th scope='row'>Last Name:</th>
                                <td>{this.props.user.lastName}</td></tr>
                            <tr>
                            <th scope='row'>Age:</th>
                                <td>{this.props.user.age}</td></tr>
                            <tr>
                            <th scope='row'>ID:</th>
                                <td>{this.props.user.id}</td></tr>
                            </tbody>
                        </table>

                </div>
            );
        }
        else{
            return(
                <div>Click on a user for more details...</div>
            );
        }
    }

    render(){
        return(
            <div>
                {this.showUserDetails()}
            </div>
        );

    }
}