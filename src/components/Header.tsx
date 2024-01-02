import { View, Text, StyleSheet } from 'react-native';

const Header = (): JSX.Element => {
  return (
    <View style={styles.header}>
      <View style={styles.headerInner}>
        <Text style={styles.headerTitle}>Memo App</Text>
        <Text style={styles.headerRight}>ログアウト</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 104,
    backgroundColor: '#467fd3',
    justifyContent: 'flex-end',
    padding: 0,
  },
  headerInner: {
    alignItems: 'center',
  },
  headerTitle: {
    color: '#ffffff',
    lineHeight: 32,
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  headerRight: {
    position: 'absolute',
    right: 16,
    bottom: 16,
    color: 'rgba(255,255,255,0.7)',
  },
});

export default Header;
