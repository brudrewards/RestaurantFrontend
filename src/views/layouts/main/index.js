import React, { Component } from 'react';
import { shape } from 'prop-types';
import { withRouter } from 'next/router';

class MainLayout extends Component {
  render() {
    const { children } = this.props;

    return <>{children}</>;
  }
}

/**
 * Define component props
 */
MainLayout.propTypes = {
  children: shape({}),
  router: shape({}),
};

export default withRouter(MainLayout);
