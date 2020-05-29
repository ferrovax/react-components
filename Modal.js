import React from 'react';
import ReactDOM from 'react-dom';

const Modal = props => {
  return ReactDOM.createPortal(
    <div
      className="ui dimmer modals visible active"
      onClick={props.handleDismiss}
    >
      <div
        className="ui standard modal visible active"
        onClick={event => event.stopPropagation()}
      >
        <div className="header">
          {props.title}
        </div>
        <div className="content">
          {props.content}
        </div>
        <div className="actions">
          {props.actions}
        </div>
      </div>
    </div>,
    document.querySelector('#modal')
  );
}

export default Modal;

/*
Usage Example:
=============
import Modal from './Modal';
...
return (
  <Modal
    title="INSERT_YOUR_TITLE"
    content={renderContent()} //your renderContent function will probably be a message, like 'Are you sure you want to do the thing this modal does?'
    actions={renderActions()} //your renderActions function will probably return a React.Fragment with some buttons, or links, or whatever
    handleDismiss={INSERT_CALLBACK_FOR_HANDLING_CLICK_OUTSIDE_MODAL}
  />
);
...



One way to configure handleDismiss (if using create-react-app) is to have a history.js file, like so:
import { createBroswerHistory } from 'history';
export default createBrowserHistory();

Then you would have something like the following when returning the Modal component:
<Modal
  ...
  handleDismiss={() => history.push('/path-back-to-previous-page')}
/>



Make sure your HTML template's root div has a sibling modal div, like so:
...
<body>
  <div id="root"></div>
  <div id="modal"></div>
  ...
</body>
...
*/
