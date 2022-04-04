import React from 'react';
import NProgress from 'nprogress';
import Router, { withRouter } from 'next/router';
import App from 'next/app';
import { func, shape } from 'prop-types';
import MainLayout from '#views/layouts/main';
import { ToastContainer, toast } from 'react-toastify';
import '#scss/_styles.scss';
import 'nprogress/nprogress.css';
import '@fontsource/montserrat';

class Brud extends App {
  componentDidMount = () => {
    this.handleLoaderOnRoutes();
    document.addEventListener('setReactTostify', this.handleNotiSnackEvent);
  };

  componentWillUnmount() {
    document.removeEventListener('setReactTostify', this.handleNotiSnackEvent);
  }

  /**
   * Handle notisnack event
   *
   * @param {Object} e
   */
  handleNotiSnackEvent = (e) => {
    const { detail } = e || {};
    if (!detail?.variant) return;
    toast[detail.variant](detail?.message, {
      position: 'top-center',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  routeChangeStart = (url) => {
    NProgress.start();
  };

  routeChangeError = () => {
    NProgress.done(true);
  };

  routeChangeComplete = () => {
    NProgress.done(true);
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  };

  handleLoaderOnRoutes = () => {
    NProgress.configure({ showSpinner: false });
    Router.events.on('routeChangeStart', this.routeChangeStart);
    Router.events.on('routeChangeComplete', this.routeChangeComplete);
    Router.events.on('routeChangeError', this.routeChangeError);
  };

  /**
   * Render
   */
  render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <ToastContainer />
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      </>
    );
  }
}

Brud.propTypes = {
  Component: func,
  pageProps: shape({}),
};

export default withRouter(Brud);
