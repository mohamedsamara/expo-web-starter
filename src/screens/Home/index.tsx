import { useSx, View, H1, P, Row, A } from "dripsy";

const Home = () => {
  const sx = useSx();

  return (
    <View
      sx={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        p: 16,
      }}
    >
      <H1 sx={{ fontWeight: "800" }}>Welcome to Expo Web Starter.</H1>
    </View>
  );
};

export default Home;
