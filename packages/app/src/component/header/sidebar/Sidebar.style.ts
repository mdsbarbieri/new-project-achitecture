import { StyleSheet } from 'react-native';
import globalStyles from '../../../styles/global.style';

export const sidebarStyles = StyleSheet.create({
  sidebar: {
    flex: 1,
    backgroundColor: globalStyles.colors.colorBasic200,
    padding: 0,
  },
  header: {
    backgroundColor: globalStyles.colors.colorPrimary500,
    minHeight: 80,
    justifyContent: 'center',
    alignItems: 'flex-end',
    padding: globalStyles.spacing.sm,
    paddingTop: globalStyles.spacing.lg,
  },
  icon: {
    height: 40,
    width: 40,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: globalStyles.colors.colorBasic100,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: globalStyles.border.radius.sm,
  },
  text: {
    fontSize: 16,
    textAlign: 'center',
    color: 'grey',
  },
  iconStyle: {
    width: 15,
    height: 15,
    marginHorizontal: 5,
  },
  customItem: {
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
});
