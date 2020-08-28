import React, { Component } from 'react';
import Home from './HomeComponent';
import Menu from './MenuComponent';
import Dishdetail from './DishDetailComponent';
import Contact from './ContactComponent';
import About from './AboutComponent';
import { View, Platform } from 'react-native';
import { createStackNavigator, createDrawerNavigator } from 'react-navigation';

// for navigation available
const MenuNavigator = createStackNavigator({
    Menu: { screen: Menu },
    Dishdetail: { screen: Dishdetail }
},
{
    initialRouteName: 'Menu',
    navigationOptions: {
        headerStyle: {
            backgroundColor: "#512DA8"
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            color: "#fff"
        }
    }
});

const HomeNavigator = createStackNavigator({
    Home: { screen: Home },
},
{
    navigationOptions: {
        headerStyle: {
            backgroundColor: "#512DA8"
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            color: "#fff"
        }
    }
});

const ContactNavigator = createStackNavigator({
    Contact: { screen: Contact },
},
{
    navigationOptions: {
        headerStyle: {
            backgroundColor: "#512DA8"
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            color: "#fff"
        }
    }
});

const AboutNavigator = createStackNavigator({
    About: { screen: About },
},
{
    navigationOptions: {
        headerStyle: {
            backgroundColor: "#512DA8"
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            color: "#fff"
        }
    }
});

// for put in drawer
const MainNavigator = createDrawerNavigator({
    Home : {
        screen: HomeNavigator,
            navigationOptions: {
                title: 'Home',
                drawerLable: 'Home'
            }
        },
    Menu : {
        screen: MenuNavigator,
            navigationOptions: {
            title: 'Menu',
            drawerLabel: 'Menu'
            }, 
    },
    Contact : {
        screen: ContactNavigator,
            navigationOptions: {
                title: 'Contact us',
                drawerLabel: 'Contact us'
            },
    },
    About : {
        screen: AboutNavigator,
            navigationOptions: {
                title: 'About us',
                drawerLabel: 'About us'
            },
    }
}, {
    drawerBackgroundColor: '#D1C4E9'
});

class Main extends Component {

    render() {
        return(
            <View style = {{flex:1, paddingTop: Platform.OS === 'ios' ? 0 : Expo.Constants.statusBarHeight }}>
               <MainNavigator />
            </View>
        );
    }
}
export default Main;