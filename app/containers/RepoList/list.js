import React, { memo } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, compose } from 'redux';

import PropTypes from 'prop-types';
import { push } from 'connected-react-router';
import Card from '../../components/Card';

import { CardFooter, BorderRight, RepoType } from './style';
import { setSelectedRepositries } from './action';

export const List = props => {
  const selectRepo = url => {
    props.setSelectRepo(url);
    props.redirect('/');
  };
  return (
    <>
      {props.repo.length ? (
        props.repo.map(repo => (
          <Card
            onClick={() => selectRepo(repo.svn_url)}
            title={
              <>
                <div>{repo.name}</div>
                <RepoType>{repo.private ? 'Private' : 'Public'}</RepoType>
              </>
            }
            content={
              <>
                <div>{repo.description}</div>
                <small>Update At : {repo.updated_at}</small>
              </>
            }
            footer={
              <CardFooter>
                <BorderRight>
                  <span>Size</span>
                  <div>{repo.size}</div>
                </BorderRight>
                <BorderRight>
                  <span>Open Issues</span>
                  <div>{repo.open_issues_count}</div>
                </BorderRight>
              </CardFooter>
            }
          />
        ))
      ) : (
        <div>No Repositories Found</div>
      )}
    </>
  );
};

List.propTypes = {
  repo: PropTypes.array,
  setSelectRepo: PropTypes.func,
  redirect: PropTypes.func,
};
const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
  setSelectRepo: repoURL => {
    dispatch(setSelectedRepositries(repoURL));
  },
  redirect: bindActionCreators(push, dispatch),
  push,
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(List);
