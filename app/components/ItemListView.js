import React, {Component} from 'react';
import { AppRegistry, ListView, Text, View } from 'react-native';

export default class ItemListView extends Component {
    //initialize the hardcoded data
    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds.cloneWithRows([
                'John', 'Lee', 'Jee', 'Uee', 'Iee'
            ])
        };
    }

    render() {
        return (
            <View style={{flex:1, paddingTop:22 }}>
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow = {(rowData) => <Text>{rowData}</Text>}
                />
            </View>
        );
    }
}