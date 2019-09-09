import React from 'react';

import PropTypes from 'prop-types';
import Card from '../../components/Card';

import { CardFooter, BorderRight, RepoType } from './style';

export const List = props => (
  <>
    {props.repo.length ? (
      props.repo.map(repo => (
        <Card
          onClick={() => {}}
          title={
            <>
              <div>{repo.name}</div>
              <RepoType>{repo.private ? 'Private' : 'Public'}</RepoType>
            </>
          }
          content={
            <>
              {' '}
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

List.propTypes = {
  repo: PropTypes.array,
};

export default List;
