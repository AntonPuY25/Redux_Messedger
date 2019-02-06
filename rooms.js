import React from "react";
import { connect } from "react-redux";
import { setRoom } from "./action";
import { bindActionCreators } from "redux";


class AllRooms extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}

    }



    componentDidMount() {
        this.props.setRoom();

    }

    render() {
        let rooms;
      
            rooms = this.props.allRooms;
              

        return (<div className="col-xs-12">
            <ul className="list-group">
                {{rooms}}
                
            </ul>

        </div>
        )
    }
}
function mapStateToProps(state) {
    return {allRooms: state.allRooms}
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({setRoom}, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(AllRooms);