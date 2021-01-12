//커스텀훅으로 전역에서 적용되는 state 관리하기

/*to apply states to other components, here we
need some mechanism that could lead to other components 
to re-render. 'useState' has such a mechanism.
A component that uses a custom Hook, and that custom hook
uses useState, the component uses the custom hook will 
re-render when useState in that custom hook will trigger
a re-render.
 */

import { useState, useEffect } from "react";

let globalState = {};
let listeners = [];

let actions = {};

export const useStore = (shouldListen = true) => {
  /*useStore라는 커스텀 훅 바깥에 있는 변수를 초기state로 지정한다.
    따라서 useStore가 호출 될 때마다 이 초기 state가 재생성되지 않는다.
    초기 import시에만 한번 생성됨. 
    */

  /*기존 커스텀 훅과 다른 점 : 
    useStore라는 커스텀 훅을 사용하는 모든 컴포넌트들이 useStore 바깥에 있는
    globalState를 함께 사용한다. 기존 커스텀훅은 logic만 공유하고 data는 공유하지 않았다.
    
     */

  const setState = useState(globalState)[1];
  //globalState를 바꾸는 함수만 setState변수에 담음.
  //setState 호출될 때마다 useStore이 re-render됨.

  const dispatch = (actionIdentifier, payLoad) => {
    const newState = actions[actionIdentifier](globalState, payLoad);
    globalState = { ...globalState, ...newState };

    for (const listener of listeners) {
      listener(globalState);
      //useStore의 globalState를 setState로 업데이트 시키면 useStore가 리렌더링되고, 그에 따라 useStore사용하고 있는
      //컴포넌트도 리렌더링된다.
    }
  };

  useEffect(() => {
    if (shouldListen) {
      listeners.push(setState);
    }

    return () => {
      if (shouldListen) {
        listeners = listeners.filter((li) => li !== setState);
        console.log("setState removed");
      }
    };
  }, [setState, shouldListen]);

  //listeners는 커스텀훅을 사용하는 전체 컴포넌트를 렌더시키는 function들을 담은 배열임.
  //커스텀훅 사용하는 컴포넌트들이 각각 고유의 setState가지게 되고, 각각의 setState를
  //listeners배열에 넣게 됨(useEffect 사이클 사용해서 첫 렌더시에만). useStore를 사용하는 component가 늘어날 수록 이 array도
  //커지게 된다.
  //useEffect가 closer역할을 하면서 clear동작에서 받는 setState는 커스텀훅 첫 렌더시의 setState이고,
  //이 커스텀훅이 unmount될 때 setState를 지운다.

  return [globalState, dispatch];
};

export const initStore = (userActions, initialState) => {
  if (initialState) {
    globalState = { ...globalState, ...initialState };
  }

  actions = { ...actions, ...userActions };
};
