// app/index.tsx
import { Text, View, StyleSheet } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.largeText}>
        Typescript is great if you practice more
      </Text>
      <Text style={styles.mediumText}>
        React Native provides you a single codebase for cross platforms
      </Text>
      <Text style={styles.smallText}>ALX is awesome</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
  },
  largeText: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 12,
  },
  mediumText: {
    fontSize: 18,
    marginBottom: 8,
  },
  smallText: {
    fontSize: 14,
    color: "gray",
  },
});
