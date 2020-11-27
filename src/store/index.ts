export class Action {
  static action1: 'ACTION1';
  static action2: 'ACTION2';
}

interface actionType1 {
  type: typeof Action.action1;
  stringPayload: string;
}

interface actionType2 {
  type: typeof Action.action2;
  objectPayload: {
    str: string;
  };
}

type actionType = actionType1 | actionType2;

export interface IStateType {
  str: string;
  color?: string;
}

const reducer = (state: IStateType = { str: '' }, action: actionType): IStateType => {
  switch (action.type) {
    case Action.action1:
      return {
        str: action.stringPayload,
      };
    default:
      return state;
  }
};

export default reducer;
