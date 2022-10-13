import { StyleSheet } from 'react-native';
import { Colors } from 'constants/Colors';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: Colors.formBackground,
  },
  header: {
    paddingTop: 24,
    paddingBottom: 4,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: Colors.grey,
  },
  headerLabel: {
    paddingLeft: 16,
    fontSize: 20,
    color: Colors.text,
  },
  icon: {
    color: Colors.primary,
    paddingLeft: 16,
  },
  end: {
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingRight: 32,
  },
  accounts: {
    borderBottomWidth: 1,
    borderColor: Colors.grey,
    flexGrow: 1,
    flexShrink: 1,
    minHeight: 0,
  },
  account: {
    width: '100%',
    height: 48,
    display: 'flex',
    flexDirection: 'row',
    paddingLeft: 24,
    paddingRight: 24,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: Colors.divider,
  },
  details: {
    paddingLeft: 16,
    display: 'flex',
    flexDirection: 'column',
  },
  list: {
    paddingTop: 8,
  },
  name: {
    fontSize: 14,
    color: Colors.text,
  },
  handle: {
    fontSize: 14,
    color: Colors.text,
  },
  control: {
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  delete: {
    color: Colors.alert,
    paddingLeft: 16,
  },
  unlock: {
    color: Colors.alert,
    paddingLeft: 16,
  },
  disable: {
    color: Colors.pending,
    paddingLeft: 16,
  },
  saveText: {
    color: Colors.white,
  },
  save: {
    backgroundColor: Colors.primary,
    borderRadius: 4,
    padding: 6,
    marginRight: 8,
    width: 72,
    display: 'flex',
    alignItems: 'center',
  },
  cancel: {
    borderWidth: 1,
    borderColor: Colors.lightgrey,
    borderRadius: 4,
    padding: 6,
    marginRight: 8,
    width: 72,
    display: 'flex',
    alignItems: 'center',
  },
  modalBackground: {
    display: 'flex',
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(52, 52, 52, 0.8)'
  },
  modalControls: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingTop: 16,
    borderTopWidth: 1,
    borderColor: Colors.divider,
  },
  modalContainer: {
    backgroundColor: Colors.formBackground,
    padding: 16,
    width: '80%',
    maxWidth: 400,
  },
  modalHeader: {
    paddingBottom: 4,
    borderBottomWidth: 1,
    borderColor: Colors.divider,
    paddingLeft: 8,
  },
  modalHeaderText: {
    fontSize: 18,
  },
  modalBody: {
    padding: 8,
  },
  input: {
    marginTop: 4,
    marginBottom: 4,
    backgroundColor: Colors.white,
    padding: 4,
    borderRadius: 4,
  },
});
