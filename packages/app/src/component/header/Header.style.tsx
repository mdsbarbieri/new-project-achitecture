import { StyleSheet } from 'react-native';
import globalStyles from '../../styles/global.style';

export const headerStyles = StyleSheet.create({
  nav: {
    minHeight: 80,
    backgroundColor: globalStyles.colors.colorBasic200,
    alignItems: 'flex-end',
    display: 'flex',
    paddingLeft: 0,
  },
  menuContent: {
    height: 50,
    width: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: globalStyles.border.radius.xm,
  },
});
