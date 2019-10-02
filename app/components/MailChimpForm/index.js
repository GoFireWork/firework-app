import React from 'react';

export const MailChimpForm = () => (
  <div>
    <link
      href="//cdn-images.mailchimp.com/embedcode/horizontal-slim-10_7.css"
      rel="stylesheet"
      type="text/css"
    />
    <div id="mc_embed_signup">
      <form
        action="https://gmail.us20.list-manage.com/subscribe/post?u=080e7d76c1af33a59c13126db&amp;id=36a30fa311"
        method="post"
        id="mc-embedded-subscribe-form"
        name="mc-embedded-subscribe-form"
        className="validate"
        target="_blank"
        // novalidate
      >
        <div id="mc_embed_signup_scroll">
          <h3>Get Notified When We Launch</h3>
          <div className="mc-field-group">
            <input
              style={{ marginTop: '-3px', width: '280px' }}
              type="email"
              defaultValue=""
              placeholder="Email"
              name="EMAIL"
              className="required email"
              id="mce-EMAIL"
            />
          </div>
          <div
            style={{ position: 'absolute', left: '-5000px' }}
            aria-hidden="true"
          >
            <input
              type="text"
              name="b_080e7d76c1af33a59c13126db_36a30fa311"
              tabIndex="-1"
              defaultValue
            />
          </div>
          <div className="clear">
            <input
              type="submit"
              value="Subscribe"
              name="subscribe"
              id="mc-embedded-subscribe"
              className="button"
            />
          </div>
        </div>
      </form>
    </div>
  </div>
);
