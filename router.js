import React from 'react';
import { TabNavigator, StackNavigator, TabBarBottom } from 'react-navigation';
import { Icon } from 'react-native-elements';

import Login from './Login';
// import LoginForm from './LoginForm';
import ListPerson from './ListPerson';
import Me from './Me';
import UserDetail from './UserDetail';
import Settings from './Settings';
const FeedStack = StackNavigator(
    {
        Feed: 
        { 
            screen: ListPerson,
            navigationOptions: { 
                title: 'Feed', 
                headerTitleStyle: { flex: 1, textAlign: 'center', alignSelf: 'center' },
            },
        },
        Details: 
        {
            screen: UserDetail,
            navigationOptions: ({ navigation }) => ({
                title: `${navigation.state.params.name.first.toUpperCase()} ${navigation.state.params.name.last.toUpperCase()}`,
            }),
        },
    },
);

export const Tabs = TabNavigator(
    {
        Feed: {screen: FeedStack,},
        Me: {screen: Me, },
    },
    {
        navigationOptions: ({ navigation }) => ({
          tabBarIcon: ({ focused, tintColor }) => {
            const { routeName } = navigation.state;
            let iconName;
            if (routeName === 'Feed') {
              iconName = "feed";
            } else if (routeName === 'Me') {
              iconName = "me";
            }
    
            // You can return any component that you like here! We usually use an
            // icon component from react-native-vector-icons
            return <Icon name={iconName} size={35} color={tintColor} />;
          },
        }),
        tabBarComponent: TabBarBottom,
        tabBarPosition: 'bottom',
        tabBarOptions: {
          activeTintColor: 'blue',
          inactiveTintColor: 'gray',
        },
        animationEnabled: false,
        swipeEnabled: false,
    }
);

export const RootStack = StackNavigator({
    Tabs: {
        screen: Tabs,        },
    Settings: {
        screen: Settings,
    }
}, 
    {
    headerMode: 'none',
    mode: 'modal'
    }
)

export const LoginStack = StackNavigator({
    Login: {
        screen: Login,
    },
    RootStack: {
        screen: RootStack,
    }
},
    {
        headerMode: 'none',
        mode: 'modal'
    }
)
