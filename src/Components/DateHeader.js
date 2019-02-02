import React, { Component } from 'react';

class DateHeader extends Component {
    render() {
        return (
            <div className="row p-3">
                {this.props.dateHeaders.map((date, index) => {
                    return (
                        <div key={index} className="col-md-12">
                            {date}
                        </div>
                    )
                })}
            </div>
        );
    }
}

export default DateHeader;
