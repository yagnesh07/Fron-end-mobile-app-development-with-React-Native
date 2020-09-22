import React, { Component } from 'react';
import Home from './HomeComponent';
import Menu from './MenuComponent';
import Dishdetail from './DishDetailComponent';
import Contact from './ContactComponent';
import About from './AboutComponent';
import { View, Platform, ScrollView, Text, StyleSheet, Image } from 'react-native';
import { createStackNavigator, createDrawerNavigator, SafeAreaView, DrawerItems } from 'react-navigation';
import { Icon } from 'react-native-elements';

import { connect } from 'react-redux';
import { fetchDishes, fetchComments, fetchPromos, fetchLeaders } from '../redux/ActionCreators';

const mapStateToProps = state => {
  return {
  }
}

const mapDispatchToProps = dispatch => ({
    fetchDishes: () => dispatch(fetchDishes()),
    fetchComments: () => dispatch(fetchComments()),
    fetchPromos: () => dispatch(fetchPromos()),
    fetchLeaders: () => dispatch(fetchLeaders())
})

//--------------------------------------- for navigation available --------------------------------------------------
const MenuNavigator = createStackNavigator({
    Menu: { screen: Menu,
        //navigation Icon
        navigationOptions: ({ navigation }) => ({
            headerLeft: <Icon name = "menu" size = {24} color = 'white'
            onPress = { () => navigation.toggleDrawer()} />
        }) }, //navigation Icon over 
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
    navigationOptions: ({ navigation }) => ({
        headerStyle: {
            backgroundColor: "#512DA8"
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            color: "#fff"
        }, //Navigation Icon start 
        headerLeft: <Icon name = "menu" size = {24} color = 'white'
            onPress = { () => navigation.toggleDrawer()} />  //end
    })
});

const ContactNavigator = createStackNavigator({
    Contact: { screen: Contact },
},
{
    navigationOptions: ({ navigation }) => ({
        headerStyle: {
            backgroundColor: "#512DA8"
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            color: "#fff"
        },
        headerLeft: <Icon name = "menu" size = {24} color = 'white'
            onPress = { () => navigation.toggleDrawer()} />
    })
});

const AboutNavigator = createStackNavigator({
    About: { screen: About },
},
{
    navigationOptions: ({ navigation }) => ({
        headerStyle: {
            backgroundColor: "#512DA8"
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            color: "#fff"
        },
        headerLeft: <Icon name = "menu" size = {24} color = 'white'
            onPress = { () => navigation.toggleDrawer()} />
    })
});
//------------------------------------------------- Logo in drawer ------------------------------------------------

const CustomDrawerContentComponent = (props) => (
    <ScrollView>
        <SafeAreaView style = {styles.container} forceInset = {{ top: 'always', horizontal: 'never'}}>
            <View style = {styles.drawerHeader}>
                <View style = {{flex:1}}>
                    <Image source = {require('./images/logo.png')} style = {styles.drawerImage}/>
                </View>
                <View style = {{flex:2}}>
                    <Text style = {styles.drawerHeaderText}>Ristorante Con Fusion</Text>
                </View>
            </View>
            <DrawerItems {...props}/>
        </SafeAreaView>
    </ScrollView>
);

//------------------------------------------------ for put in drawer ----------------------------------------------
const MainNavigator = createDrawerNavigator({
    Home : {
        screen: HomeNavigator,
            navigationOptions: {
                title: 'Home',
                drawerLable: 'Home',
                drawerIcon: ({ tintColor, focused }) => (
                    <Icon name = 'home'
                    type = 'font-awesome'
                    size = {24}
                    color = {tintColor}/>
                ),
            }
        },
    Menu : {
        screen: MenuNavigator,
            navigationOptions: {
            title: 'Menu',
            drawerLabel: 'Menu',
            drawerIcon: ({ tintColor, focused }) => (
                <Icon name = 'list'
                type = 'font-awesome'
                size = {24}
                color = {tintColor}/>
                ),
            }, 
    },
    Contact : {
        screen: ContactNavigator,
            navigationOptions: {
                title: 'Contact us',
                drawerLabel: 'Contact us',
                drawerIcon: ({ tintColor, focused }) => (
                    <Icon name = 'address-card'
                    type = 'font-awesome'
                    size = {22}
                    color = {tintColor}/>
                ),
            },
    },
    About : {
        screen: AboutNavigator,
            navigationOptions: {
                title: 'About us',
                drawerLabel: 'About us',
                drawerIcon: ({ tintColor, focused }) => (
                    <Icon name = 'info-circle'
                    type = 'font-awesome'
                    size = {24}
                    color = {tintColor}/>
                ),
            },
    }
}, {
    drawerBackgroundColor: '#D1C4E9',
    contentComponent: CustomDrawerContentComponent
});
//---------------------------------------- Main Component -----------------------------------------------------------
class Main extends Component {

    componentDidMount() {
        this.props.fetchDishes();
        this.props.fetchComments();
        this.props.fetchPromos();
        this.props.fetchLeaders();
      }

    render() {
        return(
            <View style = {{flex:1, paddingTop: Platform.OS === 'ios' ? 0 : Expo.Constants.statusBarHeight }}>
               <MainNavigator />
            </View>
        );
    }
}

//---------------------------------------- Style ----------------------------------------------------------------------
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    drawerHeader: {
        backgroundColor: '#512DA8',
        height: 140,
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        flexDirection: 'row'
    },
    drawerHeaderText: {
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold'
    },
    drawerImage: {
        margin: 10,
        width: 80,
        height: 60
    }
});
export default connect(mapStateToProps, mapDispatchToProps)(Main);