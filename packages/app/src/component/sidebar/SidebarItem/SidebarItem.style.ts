import { StyleSheet } from 'react-native';
import globalStyles from '../../../styles/global.style';

export const sidebarItemStyles = StyleSheet.create({
  container: {
    borderColor: globalStyles.colors.colorPrimary300,
    borderWidth: 1,
    borderStyle: 'solid',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: globalStyles.border.radius.sm,
    padding: globalStyles.spacing.nm,
  },
  text: {
    flexDirection: 'row',
    alignItems: 'center',
    color: globalStyles.colors.colorPrimary700,
  },
  altContainer: {
    borderColor: globalStyles.colors.colorPrimary300,
    borderWidth: 1,
    borderStyle: 'solid',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: globalStyles.border.radius.sm,
    padding: globalStyles.spacing.sm,
    marginTop: globalStyles.spacing.xm,
  },
  altText: {
    flexDirection: 'row',
    alignItems: 'center',
    color: globalStyles.colors.colorPrimary100,
    fontWeight: 'bold',
    width: 50,
  },
});
