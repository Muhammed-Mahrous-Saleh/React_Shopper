import React from "react";


class NavLink extends React.Component {
    handleClick = () => {
        this.props.onClick(this.props.index);
    }

    render() {
        return (
            <a onClick={this.handleClick}>
                {this.props.children}
            </a>
        );
    }
}

export default NavLink;
