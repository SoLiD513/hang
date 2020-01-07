import React from "react";

class Counter extends React.Component {
    render() {
        return (
            <div>
                {this.props.display}
            </div>
        );
    }
}
 export default Counter;