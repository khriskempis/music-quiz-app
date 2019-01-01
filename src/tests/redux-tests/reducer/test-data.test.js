import testDataReducer from '../../../reducers/test-data';
import * as _ from '../../../actions/test-data';

describe('testDataReducer', ()=> {
  const initialState = {
    loading: false,
    error: null,
  
    numberOfQuestions: 10,
    currentQuestion: 1,
    currentCard: {
    },
    testName: "Treble Clef",
    wrongAnswers: [],
    correctAnswers: [],
    hasStarted: false,
    hasFinished: true,
    timeRemaining: null,
    outOfTime: false,
    responses: [
      "Great Job!",
      "Keep It Up!",
      "Amazing!",
      "Are you a Musician?"
    ],
    data: [
      {
        imgUrl: "https://res.cloudinary.com/khrisraymond/image/upload/v1543184876/bass/treble%20jpgs/C4.jpg",
        noteId: "C4",
        note: "C",
        clef: "treble"
      },
      {
        imgUrl: "https://res.cloudinary.com/khrisraymond/image/upload/v1543184876/bass/treble%20jpgs/D4.jpg",
        noteId: "D4",
        note: "D",
        clef: "treble"
      }
    ]
  }

  it('should set initial state when nothing is passed in', ()=> {
    const state = testDataReducer(undefined, {type: '__UNKOWN'});
    expect(state).toEqual(initialState);
  })
  it('should return currect state on unkown action', ()=> {
    const currentState = {};
    const state = testDataReducer(currentState, {type: '__UNKNOWN'});
    expect(state).toBe(currentState);
  })

})