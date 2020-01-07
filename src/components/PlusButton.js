import React from "react";

class PlusButton extends React.Component {
    render() {
        return (
            <div>
                <button onClick={this.props.clickHandler}>+</button>
            </div>
        );
    }
}
 export default PlusButton;