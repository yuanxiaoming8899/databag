import { StyleSheet } from 'react-native';
import { Colors } from 'constants/Colors';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    borderLeftWidth: 1,
    borderColor: Colors.divider,
  },
  header: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: Colors.divider,
    padding: 8,
  },
  body: {
    flexGrow: 1,
    flexShrink: 1,
    width: '100%',
  },
  title: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  subject: {
    width: '100%',
    flexGrow: 1,
    flexShrink: 1,
    textAlign: 'center',
    paddingLeft: 16,
  },
  subjectText: {
    fontSize: 18,
    textAlign: 'center',
  },
  action: {
    paddingLeft: 8,
  },
  thread: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
  },
  topics: {
    paddingBottom: 32,
    paddingTop: 8,
  },
  conversation: {
    flexShrink: 1,
    flexGrow: 1,
    minHeight: 0,
  },
  close: {
    flexGrow: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  add: {
    borderTopWidth: 1,
    borderColor: Colors.divider,
    display: 'flex',
    flexDirection: 'column',
  },
  addButtons: {
    display: 'flex',
    flexDirection: 'row',
  },
  addButton: {
    width: 24,
    height: 24,
  },
  input: {
    margin: 8,
    padding: 8,
    borderRadius: 4,
    backgroundColor: Colors.white,
    maxHeight: 64,
  },
  addtopic: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  latchbar: {
    position: 'absolute',
    top: -26,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
  },
  latch: {
    backgroundColor: Colors.formBackground,
    borderRadius: 12,
    borderWidth: 1,
    padding: 4,
    borderColor: Colors.primary,
  },
})
