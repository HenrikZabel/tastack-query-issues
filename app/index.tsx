import { Button, Text, View } from "react-native";
import { useMutation } from "@tanstack/react-query";

const IndexPage = () => {
  const mutate = useMutation({
    // I have to use my local ip adress here. When using a non-existing url it works as intented
    // (isPending is false and status is error)
    // The server is not running but was in the past.
    mutationFn: async () =>
      fetch("https://192.178.26.5:8000/some-path-that-never-existed", {
        method: "PATCH",
      }),
    onError: (e) => {
      console.log(e);
    },
  });

  return (
    <View
      style={{
        height: "100%",
        backgroundColor: "lime",
        justifyContent: "center",
        paddingHorizontal: 50,
      }}
    >
      <Button onPress={() => mutate.mutate()} title="Mutate" />
      <Text>Status: {mutate.status}</Text>
      <Text>Is Pending: {String(mutate.isPending)}</Text>
    </View>
  );
};

export default IndexPage;