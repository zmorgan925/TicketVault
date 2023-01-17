import { StyleSheet, View, Pressable, Text } from 'react-native';
import FontAwesome from "@expo/vector-icons/FontAwesome";

export default function Button({ label, theme, onPress }) {
    if (theme === "primary") {
        return (
          <View
          style={[styles.buttonContainer, { borderWidth: 4, borderColor: "#f98b88" }]}
          >
            <Pressable
              style={[styles.button, { backgroundColor: "#f98b88" }]}
              onPress={onPress}
            >
              <Text style={[styles.buttonLabel, { color: "#25292e" }]}>{label}</Text>
            </Pressable>
        </View>
        );
      }

return (
    <View style={styles.buttonContainer}>
      <Pressable style={styles.button} onPress={onPress}>
        <Text style={styles.buttonLabel}>{label}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    width: 200,
    height: 68,
    marginTop: 30, 
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f98b88',
    padding: 3,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  buttonLabel: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
});
