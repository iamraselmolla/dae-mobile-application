import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Image, TextInput, View } from "react-native";

const Login = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const { useNavigation } = useNavigation();
  return (
    <View className="flex flex-col items-center justify-center h-screen">
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        className="border border-gray-300 rounded-md px-4 py-2 mb-4"
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        className="border border-gray-300 rounded-md px-4 py-2 mb-4"
      />
    </View>
  );
};

export default Login;
