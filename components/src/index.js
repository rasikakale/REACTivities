import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';


const App = () => {
    return (
        <div className="ui containter comments">
          <ApprovalCard>
            <div>
              <h4> Warning!</h4>
              Are you sure you want to do this?
            </div>
            
          </ApprovalCard>
          <ApprovalCard> 
            <CommentDetail 
              author="Sam" 
              timeAgo="Today at 4:45PM" 
              response="Nice blog post!" 
              avatar={faker.image.avatar()}
            />
          </ApprovalCard>

          <ApprovalCard>
            <CommentDetail 
              author="Alex" 
              timeAgo="Today at 2:00AM" 
              response="This was alright..." 
              avatar={faker.image.avatar()}
            />
           </ApprovalCard>

          <ApprovalCard>
            <CommentDetail 
              author="Jane"  
              timeAgo="Yesterday at 6:00PM" 
              response="Love the creativity! :)" 
              avatar={faker.image.avatar()}
            />
          </ApprovalCard>
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));