import { StyleSheet } from 'react-native';
import globalStyles from '../../styles/global.style';

export const sidebarStyles = StyleSheet.create({
  sidebar: {
    flex: 1,
    backgroundColor: globalStyles.colors.colorBasic200,
    padding: 0,
    alignItems: 'stretch',
  },
  header: {
    minHeight: 80,
    justifyContent: 'space-between',
    flexDirection: 'row',
    padding: globalStyles.spacing.sm,
    paddingTop: globalStyles.spacing.lg,
    backgroundColor: globalStyles.colors.colorPrimary500,
    display: 'flex',
  },
  icon: {
    height: 40,
    width: 40,
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
  navItems: {
    flex: 1,
    padding: globalStyles.spacing.nm,
  },
  saudation: {
    color: globalStyles.colors.colorPrimary100,
    fontWeight: 'bold',
    flex: 1,
    alignSelf: 'center',
    padding: globalStyles.spacing.sm,
  },
});
