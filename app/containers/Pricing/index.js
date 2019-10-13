import React from 'react';
import { withRouter } from 'react-router-dom';
import './styles.css';

const Pricing = withRouter(({ history }) => (
  <div>
    <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
      <h1 className="display-4">Pricing</h1>
      <p className="lead">
        Quickly build an effective pricing table for your potential customers
        with this Bootstrap example. It&#39;s built with default Bootstrap
        components and utilities with little customization.
      </p>
    </div>
    <div className="container">
      <div className="card-deck mb-3 text-center">
        <div className="card mb-4 box-shadow">
          <div className="card-header">
            <h4 className="my-0 font-weight-normal">Free</h4>
          </div>
          <div className="card-body">
            <h1 className="card-title pricing-card-title">
              $0 <small className="text-muted">/ mo</small>
            </h1>
            <ul className="list-unstyled mt-3 mb-4">
              <li> &lt; 1000 daily visits</li>
              <li>SEO Title optimization</li>
              <li>SEO Description optimization</li>
            </ul>
            <button
              type="button"
              className="btn btn-lg btn-block btn-outline-primary"
            >
              Free
            </button>
          </div>
        </div>
        <div className="card mb-4 box-shadow">
          <div className="card-header">
            <h4 className="my-0 font-weight-normal">Basic</h4>
          </div>
          <div className="card-body">
            <h1 className="card-title pricing-card-title">
              $9.99 <small className="text-muted">/ mo</small>
            </h1>
            <ul className="list-unstyled mt-3 mb-4">
              <li> &gt; 1000 daily visits (&lt;5000)</li>
              <li>SEO Title optimization</li>
              <li>SEO Description optimization</li>
              <li>Priority email support</li>
            </ul>
            <button type="button" className="btn btn-lg btn-block btn-primary">
              Get started
            </button>
          </div>
        </div>
        <div className="card mb-4 box-shadow">
          <div className="card-header">
            <h4 className="my-0 font-weight-normal">Pro</h4>
          </div>
          <div className="card-body">
            <h1 className="card-title pricing-card-title">
              $19.99 <small className="text-muted">/ mo</small>
            </h1>
            <ul className="list-unstyled mt-3 mb-4">
              <li> &gt; 5000 daily visits</li>
              <li>SEO Title optimization</li>
              <li>SEO Description optimization</li>
            </ul>
            <button type="button" className="btn btn-lg btn-block btn-primary">
              Get started
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
));

export default Pricing;
