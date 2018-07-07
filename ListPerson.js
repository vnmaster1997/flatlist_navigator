import React, { Component } from "react";
import { View, Text, FlatList, ActivityIndicator } from "react-native";
import { List, ListItem, SearchBar } from "react-native-elements";

export default class ListPerson extends Component {
  	constructor(props) {
    super(props);

    this.state = {
      loading: false,
      data: [],
      page: 1,
      seed: 1,
      error: null,
      refreshing: false
    };
  	}		

	componentDidMount() {
		this.makeRemoteRequest();
	}

	makeRemoteRequest = () => {
		const { page, seed } = this.state;
		const url = `https://randomuser.me/api/?seed=${seed}&page=${page}&results=20`;
		this.setState({ loading: true });

		fetch(url)
		.then(res => res.json())
		.then(res => {
			this.setState({
				data: page === 1 ? res.results : [...this.state.data, ...res.results],
				error: res.error || null,
				loading: false,
				refreshing: false
			});
		})
		.catch(error => {
			this.setState({ error, loading: false });
		});
	};

	handleRefresh = () => {
		this.setState(
		{
			page: 1,
			seed: this.state.seed + 1,
			refreshing: true
		},
		() => {
			this.makeRemoteRequest();
		}
		);
	};

	handleLoadMore = () => {
		this.setState(
		{
			page: this.state.page + 1
		},
		() => {
			this.makeRemoteRequest();
		}
		);
	};

	renderSeparator = () => {
		return (
		<View
			style={{
				height: 1,
				width: "86%",
				backgroundColor: "#CED0CE",
				marginLeft: "14%"
			}}
		/>
		);
	};

	renderHeader = () => {
		return <SearchBar placeholder="Type Here..." lightTheme round />;
	};

	renderFooter = () => {
		if (!this.state.loading) return null;

		return (
		<View
			style={{
			paddingVertical: 20,
			borderTopWidth: 1,
			borderColor: "#CED0CE"
			}}
		>
			<ActivityIndicator animating size="large" />
		</View>
		);
	};

	onLearnMore = (user) => {
		this.props.navigation.navigate('Details', {...user});
	}

	render() {
		return (
		<List containerStyle={{ borderTopWidth: 0, borderBottomWidth: 0 }}>
			<FlatList	
			data={this.state.data}
			renderItem={({ item }) => (
				<ListItem
				roundAvatar
				title={`${item.name.first.toUpperCase()} ${item.name.last.toUpperCase()}`}
				subtitle={item.email}
				avatar={{ uri: item.picture.thumbnail }}
				containerStyle={{ borderBottomWidth: 0 }}
				onPress={() => this.onLearnMore(item)} // item = user
				/>
			)}
			keyExtractor={item => item.email} // mỗi item đều cần có key để phân biệt
			ItemSeparatorComponent={this.renderSeparator} // style dòng kẻ tách giữa các item
			ListHeaderComponent={this.renderHeader} // cho searchBar lên đầu App
			ListFooterComponent={this.renderFooter} // Footer của App
			onRefresh={this.handleRefresh} // kéo lên trên thì refresh 
			refreshing={this.state.refreshing} // trạng thái refresh: true || false
			onEndReached={this.handleLoadMore} // kéo xuống load thêm dữ liệu phía bên dưới
			onEndReachedThreshold={50}
			/>
		</List>
		);
	}
}


