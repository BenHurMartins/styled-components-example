import styled from 'styled-components/native';

export const StyledSafeAreaView = styled.SafeAreaView`
  background-color: #f7f7ff;
  width: 100%;
  flex: 1;
  align-items: center;
  justify-content: space-between;
`;

export const StyledHeaderView = styled.View`
  background-color: #23b5d3;
  height: 300px;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const StyledText = styled.Text`
  font-size: 20px;
  color: #070600;
`;

export const StyledTextInput = styled.TextInput`
  border-width: 1px;
  border-radius: 5px;
  width: 80%;
  height: 40px;
  padding: 5px;
`;

export const StyledButton = styled.TouchableOpacity`
  border-radius: 5px;
  background-color: #279af1;
  width: 80%;
  height: 40px;
  padding: 5px;
  align-items: center;
  justify-content: center;
  margin: 50px;
`;
