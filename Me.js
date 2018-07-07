import React, {Component} from 'react';
import {
    ScrollView,
    StyleSheet,
    TouchableOpacity
} from 'react-native';
import {
    Tile,
    List,
    ListItem,
    Button,
    View,
    Text, 
} from 'react-native-elements';
import TabNavigator from 'react-navigation';
import Settings from './Settings';
import Test from './Test';
export default class Me extends Component{
    
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            picture: [],
            name: [],
            login: [],
            location: [],
            page: 1,
            seed: 1,
            error: null,
        }
    }

    componentDidMount() {
		this.makeRemoteRequest();
	}

    makeRemoteRequest = () => {
        const { page, seed } = this.state;
        const url = `https://randomuser.me/api/?seed=${seed}&page=${page}&results=1`;

        fetch(url)
        .then(res => res.json())
        .then(res => {
            this.setState({
                data: res.results[0],
                picture: res.results[0].picture,
                name: res.results[0].name,
                login: res.results[0].login,
                location: res.results[0].location,
                error: res.error || null,
            });
        }).catch(error => {
            this.setState({ error });
        })
    }
    
    _goToSettings = () => {
        this.props.navigation.navigate('Settings');
    };

    render() {

        return(
            <ScrollView>
                <Tile
                    imageSrc = {{uri: this.state.picture.large}}
                    featured
                    title = {this.state.name.first + ' ' + this.state.name.last}
                    caption={this.state.data.email}
                /> 

                <TouchableOpacity                    
                    style={styles.buttonContainer}
                    onPress={() => this._goToSettings()}>
                    <Text style={styles.butonText}>Settings</Text>
                </TouchableOpacity>
                
                <List>
                    <ListItem
                        title="Email"
                        rightTitle={this.state.data.email}
                        hideChevron
                        
                    />
                    <ListItem
                        title="Phone"
                        rightTitle={this.state.data.phone}
                        hideChevron
                    />
                </List>

                <List>
                    <ListItem 
                        title="Username"
                        rightTitle={this.state.login.username}
                        hideChevron
                    />
                </List>

                <List>
                    <ListItem 
                        title="Birthday"
                        rightTitle={this.state.data.dob}
                        hideChevron
                    />
                    <ListItem 
                        title="City"
                        rightTitle={this.state.location.city}
                        hideChevron
                    />
                </List>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    buttonContainer: {
        backgroundColor: '#2792ea',
        paddingVertical: 15
    },
    butonText: {
        textAlign: 'center',
        color: '#FFFFFF',
        fontWeight: '700',
    }
})
