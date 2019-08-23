/*
import React from 'react';
// import { render } from 'react-testing-library';
// import { IntlProvider } from 'react-intl';
// import { Provider } from 'react-redux';
import { browserHistory } from 'react-router-dom';

// import { Tests, mapDispatchToProps } from '../index';
// import { changeUsername } from '../actions';
// import { loadRepos } from '../../App/actions';
import configureStore from '../../../configureStore';

describe('<Tests />', () => {
  let store;

  beforeAll(() => {
    store = configureStore({}, browserHistory);
  });

  // it('should render and match the snapshot', () => {
  //   const {
  //     container: { firstChild },
  //   } = render(
  //     <Provider store={store}>
  //       <IntlProvider locale="en">
  //         <Tests loading={false} error={false} repos={[]} />
  //       </IntlProvider>
  //     </Provider>,
  //   );
  //   expect(firstChild).toMatchSnapshot();
  // });
  //
  // it('should run tests on mount', () => {
  //   const submitSpy = jest.fn();
  //   render(
  //     <Provider store={store}>
  //       <IntlProvider locale="en">
  //         <Tests
  //           username="Not Empty"
  //           onChangeUsername={() => {}}
  //           onSubmitForm={submitSpy}
  //         />
  //       </IntlProvider>
  //     </Provider>,
  //   );
  //   expect(submitSpy).toHaveBeenCalled();
  // });
  //
  // it('', () => {
  //   const submitSpy = jest.fn();
  //   render(
  //     <Provider store={store}>
  //       <IntlProvider locale="en">
  //         <HomePage onChangeUsername={() => {}} onSubmitForm={submitSpy} />
  //       </IntlProvider>
  //     </Provider>,
  //   );
  //   expect(submitSpy).not.toHaveBeenCalled();
  // });
  //
  // it('should not call onSubmitForm if username is null', () => {
  //   const submitSpy = jest.fn();
  //   render(
  //     <Provider store={store}>
  //       <IntlProvider locale="en">
  //         <Tests
  //           username=""
  //           onChangeUsername={() => {}}
  //           onSubmitForm={submitSpy}
  //         />
  //       </IntlProvider>
  //     </Provider>,
  //   );
  //   expect(submitSpy).not.toHaveBeenCalled();
  // });

  // describe('mapDispatchToProps', () => {
  //   describe('onChangeUsername', () => {
  //     it('should be injected', () => {
  //       const dispatch = jest.fn();
  //       const result = mapDispatchToProps(dispatch);
  //       expect(result.onChangeUsername).toBeDefined();
  //     });
  //
  //     it('should dispatch changeUsername when called', () => {
  //       const dispatch = jest.fn();
  //       const result = mapDispatchToProps(dispatch);
  //       const username = 'mxstbr';
  //       result.onChangeUsername({ target: { value: username } });
  //       expect(dispatch).toHaveBeenCalledWith(changeUsername(username));
  //     });
  //   });
  //

  /!*describe('onSubmitForm', () => {
      it('should be injected', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        expect(result.onSubmitForm).toBeDefined();
      });

      it('should dispatch loadRepos when called', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        result.onSubmitForm();
        expect(dispatch).toHaveBeenCalledWith(loadRepos());
      });

      it('should preventDefault if called with event', () => {
        const preventDefault = jest.fn();
        const result = mapDispatchToProps(() => {});
        const evt = { preventDefault };
        result.onSubmitForm(evt);
        expect(preventDefault).toHaveBeenCalledWith();
      });
    });*!/
  // });
});
*/
