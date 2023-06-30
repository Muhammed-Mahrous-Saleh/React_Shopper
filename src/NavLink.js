import React from "react";


class NavLink extends React.Component {
    handleClick = () => {
        this.props.onClick(this.props.index);
    }

    render() {
        return (
            <span onClick={this.handleClick}>
                {this.props.children}
            </span>
        );
    }
}

export default NavLink;
