import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';


const App = () => {
    return (
        <div className="ui containter comments">
          <CommentDetail author="Sam" timeAgo="Today at 4:45PM" response="Nice blog post!" avatar={faker.image.avatar()}/>
          <CommentDetail author="Alex" timeAgo="Today at 2:00AM" response="This was alright..." avatar={faker.image.avatar()}/>
          <CommentDetail author="Jane" timeAgo="Yesterday at 6:00PM" response="Love the creativity! :)" avatar={faker.image.avatar()}/>
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));