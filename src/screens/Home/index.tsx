import { View, H1 } from "dripsy";

const Home = () => {
  return (
    <View
      sx={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        p: 16,
      }}
    >
      <H1>Welcome to Expo Web Starter.</H1>
    </View>
  );
};

export default Home;
