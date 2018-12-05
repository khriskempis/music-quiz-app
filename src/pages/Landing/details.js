import React from 'react';
import SheetMusic from './../../assets/icons/sheetMusic';
import LearningIcon from './../../assets/icons/learning';
import CommentIcon from './../../assets/icons/comment';

export function details() {
    return (
      <div className="details-section">

        <div className="detail">

          <div className="icon-container">
            <LearningIcon />
          </div>

          <h3>Practice, Practice, Practice...</h3>
          <p>The only way to learn a skill is through focused repitition.</p>
          <p>And with Music Tests, you can take as many practice tests before you take a real test.</p>
          
        </div>

        <div className="detail">
          <div className="icon-container">
            <SheetMusic />
          </div>
          <h3>Test Time!</h3>
          <p>Pick the right test to test your sight-reading skills!</p>
          <p>Choose from Treble clef, Bass clef, or Both!</p>
        </div>

        <div className="detail"> 
          <div className="icon-container">
            <CommentIcon />
          </div>
          <h3>Share your Thoughts!</h3>
          <p>There are still many more features coming but I would like to hear more about what you would like to see in this service.</p>
          <p>Help me build the best sight-reading tool!</p>
        </div>
        
      </div>
    );
}

export default details;