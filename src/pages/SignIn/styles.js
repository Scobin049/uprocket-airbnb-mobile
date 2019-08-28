import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #f5f5f5;
  align-items: center;
  justify-content: center;
`;

export const Logo = styled.Image`
  height: 30%;
  margin-bottom: 40px;
`;

export const Input = styled.TextInput`
  padding: 20px 15px;
  border-radius: 5px;
  background-color: #fff;
  align-self: stretch;
  margin: 5px 20px;
  font-size: 16px;
`;

export const ErrorMessage = styled.Text`
  text-align: center;
  color: #ce2029;
  font-size: 16px;
  margin: 15px 20px;
`;
export const Button = styled.TouchableHighlight`
  padding: 20px;
  border-radius: 5px;
  background-color: #fc6663;
  align-self: stretch;
  margin: 15px 20px;
`;
export const ButtonText = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 16px;
  text-align: center;
`;
export const SignUpLink = styled.TouchableHighlight`
  padding: 10px;
  margin-top: 20px;
`;
export const SignUpLinkText = styled.Text`
  color: #999;
  font-weight: bold;
  font-size: 16px;
  text-align: center;
`;
