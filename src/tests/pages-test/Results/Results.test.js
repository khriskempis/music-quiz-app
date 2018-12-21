import React from 'react';
import {shallow} from 'enzyme';

import {Results} from '../../../pages/Results/Results';

describe('<Results />', ()=> {
  it('should render without crashing', ()=> {
    const correctAnswersArray = [1, 2, 3];
    const wrongAnswersArray = [1, 2, 3];
    shallow(
      <Results 
        correctAnswers={correctAnswersArray}
        wrongAnswers={wrongAnswersArray}/>);
  });

  it('should calculate correct score', ()=> {
    const correctAnswersArray = [1, 2, 3];
    const wrongAnswersArray = [1, 2, 3];
    const score = (9/10);
    const wrapper = shallow(
      <Results 
        correctAnswers={correctAnswersArray}
        wrongAnswers={wrongAnswersArray}
        score={score}/>);
    const scoreDisplay = wrapper.find('.score-display').text();

    expect(scoreDisplay).toEqual(`${score * 100}%`);
  });

  it('should calculate 0 score', ()=> {
    const correctAnswersArray = [1, 2, 3];
    const wrongAnswersArray = [1, 2, 3];
    const score = 0;
    const wrapper = shallow(
      <Results 
        correctAnswers={correctAnswersArray}
        wrongAnswers={wrongAnswersArray}
        score={score}/>);
    const scoreDisplay = wrapper.find('.score-display').text();

    expect(scoreDisplay).toEqual(`${score}%`);
  });

  it('should run callback when clicked', ()=> {
    const dispatch = jest.fn();
    const correctAnswersArray = [1, 2, 3];
    const wrongAnswersArray = [1, 2, 3];
    const wrapper = shallow(
      <Results 
        correctAnswers={correctAnswersArray}
        wrongAnswers={wrongAnswersArray}
        dispatch={dispatch}/>);
    const button = wrapper.find('.take-again-button');

    button.simulate('click');
    expect(dispatch).toHaveBeenCalled();
    });
})