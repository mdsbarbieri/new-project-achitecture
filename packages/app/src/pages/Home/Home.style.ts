import { StyleSheet } from 'react-native';
import globalStyles from '../../styles/global.style';

export const homeStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'center',
    backgroundColor: globalStyles.colors.colorBasic200,
    padding: globalStyles.spacing.nm,
    paddingTop: 0,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    borderRadius: globalStyles.border.radius.lg,
    padding: globalStyles.spacing.nm,
    backgroundColor: globalStyles.colors.colorBasic100,
  },
});
