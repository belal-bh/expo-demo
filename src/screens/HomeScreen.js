import { useNavigation } from "@react-navigation/native";
import React from "react";

import { View, Text, Button } from "react-native";

export default HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Text>HomeScreen</Text>
      <Button
        title="Go to Sample Page"
        onPress={() => navigation.navigate("Sample")}
      />
    </View>
  );
};
