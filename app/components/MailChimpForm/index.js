import React from 'react';
import PropTypes from 'prop-types';

export const MailChimpForm = props => {
  const mainMailChimpGroup = props.isMainMailChimpGroup;
  return (
    <div>
      <link
        href="//cdn-images.mailchimp.com/embedcode/classic-10_7.css"
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
              <label htmlFor="mce-EMAIL">Email</label>
              <input
                type="email"
                defaultValue=""
                name="EMAIL"
                className="required email"
                id="mce-EMAIL"
              />
            </div>
            <div
              className="mc-field-group input-group"
              style={{ display: 'none' }}
            >
              <strong>Sub Type</strong>
              <ul>
                <li>
                  <input
                    type="checkbox"
                    defaultValue="1"
                    name="group[2649][1]"
                    id="mce-group[2649]-2649-0"
                  />
                </li>
                <li>
                  <input
                    type="checkbox"
                    defaultValue="2"
                    name="group[2649][2]"
                    id="mce-group[2649]-2649-1"
                    checked={mainMailChimpGroup}
                    readOnly
                  />
                </li>
              </ul>
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
};

MailChimpForm.propTypes = {
  isMainMailChimpGroup: PropTypes.bool,
};
