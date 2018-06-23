import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
    View,
    ImageBackground,
} from 'react-native';

class Attachments extends Component {
    render() {
        if (!this.props.attachments || this.props.attachments.length === 0) {
            return null;
        }

        return (
            <ImageBackground
                source={{uri: this.props.attachments[0].thumbs.l}}

                style={{
                    width: null,
                    backgroundColor: 'rgba(0,0,0,0.1)',
                    aspectRatio: 1,
                    borderRadius: this.props.borderRadius,
                    borderColor: 'rgba(0,0,0,0.05)',
                    borderWidth: 1,
                    overflow: 'hidden',
                }}
            />
        );

    }
}

Attachments.propTypes = {
    borderRadius: PropTypes.number,
};
Attachments.defaultProps = {
    borderRadius: 5,
};

export default Attachments;