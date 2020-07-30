import React from 'react';

const withProps = (WrappedComponent, classes) => {
    return props => (
        <div className={classes}>
            <WrappedComponent {...props} />
        </div>
    );
};

export default withProps;