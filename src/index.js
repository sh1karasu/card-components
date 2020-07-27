import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCar';
import faker from 'faker';

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <h4>Warning!</h4>
        <div>Are you sure you want to do this?</div>
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail 
            author='Sam' 
            timeAgo="Today at 1:45PM" 
            postText="Really interesting" 
            srcDest={faker.image.avatar()} />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail 
            author='Jane'
            timeAgo="Today at 4:45PM" 
            postText="Give me more information" 
            srcDest={faker.image.avatar()} />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail 
            author='Alex' 
            timeAgo="Today at 3:45PM" 
            postText="I like this idea" 
            srcDest={faker.image.avatar()} />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));