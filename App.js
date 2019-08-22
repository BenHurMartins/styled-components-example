import React from 'react';

import {
  StyledSafeAreaView,
  StyledHeaderView,
  StyledText,
  StyledTextInput,
  StyledButton,
} from './styledComponents';

const App = () => {
  return (
    <StyledSafeAreaView>
      <StyledHeaderView>
        <StyledText> Styled Header </StyledText>
      </StyledHeaderView>
      <StyledTextInput placeholder={'StyledText Input'} />
      <StyledButton>
        <StyledText> Styled Button </StyledText>
      </StyledButton>
    </StyledSafeAreaView>
  );
};

export default App;
