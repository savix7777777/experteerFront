import React, { useCallback, Children } from 'react';

import If from './If';
import ElseIf from './ElseIf';
import Else from './Else';

type ConditionPropsType = {
  children: JSX.Element | string;
  condition: boolean;
};

const Condition = ({ children, condition }: ConditionPropsType) => {
  const findChild = useCallback(
    (MatchComponent) =>
      Children.toArray(children).find(
        (child) =>
          // @ts-ignore
          child.type === MatchComponent &&
          // @ts-ignore
          (MatchComponent !== ElseIf || child.props.condition)
      ),
    [children]
  );

  return condition
    ? findChild(If)
    : findChild(ElseIf) || findChild(Else) || null;
};

export { If, ElseIf, Else };

export default Condition;
