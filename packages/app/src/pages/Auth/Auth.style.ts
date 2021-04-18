import { StyleSheet } from 'react-native';
import globalStyles from '../../styles/global.style';

export const authStyles = StyleSheet.create({
  view: {
    flex: 1,
  },
  layout: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: globalStyles.spacing.lg,
    backgroundColor: 'transparent',
  },
  input: {
    marginBottom: globalStyles.spacing.nm,
  },
  button: {
    alignSelf: 'stretch',
  },
});
