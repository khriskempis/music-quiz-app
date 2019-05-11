import React from 'react';
import {Transition} from 'react-spring/renderprops';

const withTransition = WrappedComponent => {
  
  return props => {
    return (
      <>
        <Transition
          items={show}
          from={{opacity: 0}}
          enter={{ opacity: 1}}
          leave={{opacity: 0}}>
          {show => show && 
          (transProps => (
            <div style={transProps}>
              <WrappedComponent {...props}/>
            </div>
          ))}
        </Transition>
        
      </>
    )
  }
}

export default withTransition;