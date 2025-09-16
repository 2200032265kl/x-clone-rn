import { useClerk } from "@clerk/clerk-expo";
import { Text, View, Button } from "react-native";

const HomeScreen = () => {
    const {signOut} = useClerk()
    return(
        <View>
            <Text>HomeScreen</Text>
            <Button onPress={() => signOut()} title="logout"></Button>
        </View>
    );
};

export default HomeScreen