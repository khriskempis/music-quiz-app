import * as _ from '../../../actions/test-data'

describe('fetchDataSuccess', ()=> {
  it('should return the action', ()=> {
    const data = [];
    const action = _.fetchDataSucces(data);
    expect(action.type).toEqual(_.FETCH_DATA_SUCCESS);
    expect(action.data).toEqual(data);
  });
});

describe('fetchDataError', ()=> {
  it('should return the action', ()=> {
    const error = "test error";
    const action = _.fetchDataError(error);
    expect(action.type).toEqual(_.FETCH_DATA_ERROR);
    expect(action.error).toEqual(error);
  })
})

describe('setNumberOfQuestions', ()=> {
  it('should return the action', ()=> {
    const num = 10;
    const action = _.setNumberOfQuestions(num);
    expect(action.type).toEqual(_.SET_NUMBER_OF_QUESTIONS);
    expect(action.num).toEqual(num)
  });
});

describe('setCurrentQuestion', ()=> {
  it('should return the action', ()=> {
    const action = _.setCurrentQuestion();
    expect(action.type).toEqual(_.SET_CURRENT_QUESTION)
  });
})

describe('setCurrentCard', ()=> {
  it('should return the action', ()=> {
    const action = _.setCurrentCard();
    expect(action.type).toEqual(_.SET_CURRENT_CARD);
  });
});

describe('setTestName', ()=> {
  it('should return the action', ()=> {
    const testName = "test";
    const action = _.setTestName(testName);
    expect(action.type).toEqual(_.SET_TEST_NAME);
    expect(action.testName).toEqual(testName);
  });
});

describe('addWrongAnswer', ()=> {
  it('should return the action', ()=> {
    const card = "T"
    const action = _.addWrongAnswer(card);
    expect(action.type).toEqual(_.ADD_WRONG_ANSWER);
    expect(action.card).toEqual(card);
  });
});

describe('addCorrectAnswer', ()=> {
  it('should return the action', ()=> {
    const card = "T";
    const action = _.addCorrectAnswer(card);
    expect(action.type).toEqual(_.ADD_CORRECT_ANSWER);
    expect(action.card).toEqual(card);
  });
});

describe('setHasStarted', ()=> {
  it('should return the action', ()=> {
    const action = _.setHasStarted()
    expect(action.type).toEqual(_.SET_HAS_STARTED)
  });
});

describe('setHasFinished', ()=> {
  it('should return the action', ()=> {
    const action = _.setHasFinished();
    expect(action.type).toEqual(_.SET_HAS_FINISHED);
  });
});

describe('setTimeRemaining', ()=> {
  it('should return the action', ()=> {
    const time = "0:22"
    const action = _.setTimeRemaining(time);
    expect(action.type).toEqual(_.SET_TIME_REMAINING);
    expect(action.time).toEqual(time);
  });
});

describe('setOutOfTime', ()=> {
  it('should return the action', ()=> {
    const action = _.setOutOfTime();
    expect(action.type).toEqual(_.SET_OUT_OF_TIME);
  });
});

describe('testRequest', ()=> {
  it('should return the action', ()=> {
    const action = _.testRequest();
    expect(action.type).toEqual(_.TEST_REQUEST);
  })
})

describe('testSuccess', ()=> {
  it('should return the action', ()=> {
    const test = "Treble Clef"
    const action = _.testSuccess(test)
    expect(action.type).toEqual(_.TEST_SUCCESS);
    expect(action.test).toEqual(test);
  });
});

describe('testError', ()=> {
  it('should return the action', ()=> {
    const error = "error";
    const action = _.testError(error);
    expect(action.type).toEqual(_.TEST_ERROR);
    expect(action.error).toEqual(error);
  });
});

describe('beginTest', ()=> {
  it('should return the action', ()=> {
    const testName = "Treble Test";
    const action = _.beginTest(testName);
    expect(action.type).toEqual(_.BEGIN_TEST);
    expect(action.testName).toEqual(testName)
  });
});

describe('restartTest', ()=> {
  it('should return the action', ()=> {
    const action = _.restartTest();
    expect(action.type).toEqual(_.RESTART_TEST);
  });
});
