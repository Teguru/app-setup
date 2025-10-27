import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ROUTES } from "./routes";

const Stack = createNativeStackNavigator()

export function RootNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerStyle: {
                        backgroundColor: 'black',
                    },
                    headerTitleStyle: {
                        color: 'white',
                        fontWeight: "200"
                    },
                    contentStyle: {
                        backgroundColor: 'black'
                    },
                    headerTintColor: 'white',
                }}
                initialRouteName='Home'>
                {ROUTES.map(({ name, component, title }) => (
                    <Stack.Screen
                        key={name}
                        name={name}
                        component={component}
                        options={{ title }}
                    />
                ))
                }
            </Stack.Navigator>
        </NavigationContainer>
    )
}