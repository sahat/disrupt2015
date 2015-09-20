/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var NavigationBar = require('react-native-navbar');
var { Icon } = require('react-native-icons');

var {
  Image,
  ListView,
  TouchableHighlight,
  AppRegistry,
  StyleSheet,
  Text,
  View,
  AlertIOS,
  ScrollView,
  PixelRatio,
  TabBarIOS,
  Navigator,
  TouchableOpacity
  } = React;


var disrupt2015 = React.createClass({

  renderScene: function(route, navigator) {
    var Component = route.component;
    var navBar = route.navigationBar;

    if (navBar) {
      navBar = React.addons.cloneWithProps(navBar, {
        navigator: navigator,
        route: route
      });
    }

    return (
      <View style={{ flex: 1 }}>
        {navBar}
        <Component navigator={navigator} route={route}/>
      </View>
    );
  },

  render: function() {
    return (
      <Navigator
        renderScene={this.renderScene}
        initialRoute={{
          component: EmptyPage,
          navigationBar: (
            <NavigationBar
              customTitle={<CustomTitle/>}
              buttonsColor="white"
              titleColor="white"
              customNext={<CustomNextButton />}
              customPrev={<CustomPrevButton />}
              onNext={() => alert('Next button click handler')}
              onPrev={() => alert('Prev button click handler')}
              style={styles.navigationBar}
            />
          )
        }}
        />
    );
  }
});

class EmptyPage extends React.Component {
  constructor(props) {
    super(props);
    var ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      dataSource: ds.cloneWithRows([
        {
          status: 'Ready for Pickup',
          customer: {
            name:  'Dan Seider',
            photo: 'http://i.imgur.com/XWRhrUC.jpg'
          },
          pickupLocation: 'A',
          items: [
            {
              image: 'http://i5.walmartimages.com/dfw/dce07b8c-1b24/k2-_6883b400-953a-4171-9da3-3cac0b502f47.v1.jpg'
            },
            {
              image: 'http://ll-us-i5.wal.co/dfw/dce07b8c-ff07/k2-_2a609791-dce8-4b9c-8e18-2ea4b11ba22c.v3.jpg-b9a07f3ea413c5a38f76a34ba7365e1404207a83-webp-450x450.jpg'
            },
            {
              image: 'http://ll-us-i5.wal.co/dfw/dce07b8c-20a3/k2-_64c47dad-5d13-4f20-82fb-caa3a793d9ab.v1.jpg-5873a66dd7e0ed3ac2db50252fa0ec12f9c30999-webp-450x450.jpg'
            },
            {
              image: 'http://ll-us-i5.wal.co/dfw/dce07b8c-5433/k2-_30a6bd22-4a19-4be8-bdb3-490d3ae31a4c.v6.jpg-9e658601edc1d17dc97bc281105c01afb13c9855-webp-450x450.jpg'
            }
          ]
        },
        {
          status: 'In Progress',
          customer: {
            name:  'Steve Jobs',
            photo: 'http://i.imgur.com/rTwvkDN.jpg'
          },
          pickupTime: '6:15 PM',
          items: [
            {
              image: 'http://i5.walmartimages.com/dfw/dce07b8c-1b24/k2-_6883b400-953a-4171-9da3-3cac0b502f47.v1.jpg'
            },
            {
              image: 'http://ll-us-i5.wal.co/dfw/dce07b8c-ff07/k2-_2a609791-dce8-4b9c-8e18-2ea4b11ba22c.v3.jpg-b9a07f3ea413c5a38f76a34ba7365e1404207a83-webp-450x450.jpg'
            },
            {
              image: 'http://ll-us-i5.wal.co/dfw/dce07b8c-20a3/k2-_64c47dad-5d13-4f20-82fb-caa3a793d9ab.v1.jpg-5873a66dd7e0ed3ac2db50252fa0ec12f9c30999-webp-450x450.jpg'
            },
            {
              image: 'http://ll-us-i5.wal.co/dfw/dce07b8c-5433/k2-_30a6bd22-4a19-4be8-bdb3-490d3ae31a4c.v6.jpg-9e658601edc1d17dc97bc281105c01afb13c9855-webp-450x450.jpg'
            }
          ]
        },
        {
          status: 'In Progress',
          customer: {
            name:  'Steve Jobs',
            photo: 'http://i.imgur.com/rTwvkDN.jpg'
          },
          pickupTime: '6:15 PM',
          items: [
            {
              image: 'http://i5.walmartimages.com/dfw/dce07b8c-1b24/k2-_6883b400-953a-4171-9da3-3cac0b502f47.v1.jpg'
            },
            {
              image: 'http://ll-us-i5.wal.co/dfw/dce07b8c-ff07/k2-_2a609791-dce8-4b9c-8e18-2ea4b11ba22c.v3.jpg-b9a07f3ea413c5a38f76a34ba7365e1404207a83-webp-450x450.jpg'
            },
            {
              image: 'http://ll-us-i5.wal.co/dfw/dce07b8c-20a3/k2-_64c47dad-5d13-4f20-82fb-caa3a793d9ab.v1.jpg-5873a66dd7e0ed3ac2db50252fa0ec12f9c30999-webp-450x450.jpg'
            },
            {
              image: 'http://ll-us-i5.wal.co/dfw/dce07b8c-5433/k2-_30a6bd22-4a19-4be8-bdb3-490d3ae31a4c.v6.jpg-9e658601edc1d17dc97bc281105c01afb13c9855-webp-450x450.jpg'
            }
          ]
        },
        {
          status: 'In Progress',
          customer: {
            name:  'Steve Jobs',
            photo: 'http://i.imgur.com/rTwvkDN.jpg'
          },
          pickupTime: '6:15 PM',
          items: [
            {
              image: 'http://i5.walmartimages.com/dfw/dce07b8c-1b24/k2-_6883b400-953a-4171-9da3-3cac0b502f47.v1.jpg'
            },
            {
              image: 'http://ll-us-i5.wal.co/dfw/dce07b8c-ff07/k2-_2a609791-dce8-4b9c-8e18-2ea4b11ba22c.v3.jpg-b9a07f3ea413c5a38f76a34ba7365e1404207a83-webp-450x450.jpg'
            },
            {
              image: 'http://ll-us-i5.wal.co/dfw/dce07b8c-20a3/k2-_64c47dad-5d13-4f20-82fb-caa3a793d9ab.v1.jpg-5873a66dd7e0ed3ac2db50252fa0ec12f9c30999-webp-450x450.jpg'
            },
            {
              image: 'http://ll-us-i5.wal.co/dfw/dce07b8c-5433/k2-_30a6bd22-4a19-4be8-bdb3-490d3ae31a4c.v6.jpg-9e658601edc1d17dc97bc281105c01afb13c9855-webp-450x450.jpg'
            }
          ]
        },
        {
          status: 'In Progress',
          customer: {
            name:  'Steve Jobs',
            photo: 'http://i.imgur.com/rTwvkDN.jpg'
          },
          pickupTime: '6:15 PM',
          items: [
            {
              image: 'http://i5.walmartimages.com/dfw/dce07b8c-1b24/k2-_6883b400-953a-4171-9da3-3cac0b502f47.v1.jpg'
            },
            {
              image: 'http://ll-us-i5.wal.co/dfw/dce07b8c-ff07/k2-_2a609791-dce8-4b9c-8e18-2ea4b11ba22c.v3.jpg-b9a07f3ea413c5a38f76a34ba7365e1404207a83-webp-450x450.jpg'
            },
            {
              image: 'http://ll-us-i5.wal.co/dfw/dce07b8c-20a3/k2-_64c47dad-5d13-4f20-82fb-caa3a793d9ab.v1.jpg-5873a66dd7e0ed3ac2db50252fa0ec12f9c30999-webp-450x450.jpg'
            },
            {
              image: 'http://ll-us-i5.wal.co/dfw/dce07b8c-5433/k2-_30a6bd22-4a19-4be8-bdb3-490d3ae31a4c.v6.jpg-9e658601edc1d17dc97bc281105c01afb13c9855-webp-450x450.jpg'
            }
          ]
        }
      ])
    };
  }

  onPressRow(rowID) {
    console.log('Pressed', rowID);
  }

  renderRow(rowData, sectionID, rowID) {
    var pickupLocation = rowData.pickupLocation ? (
      'Pick-up Location: ' + rowData.pickupLocation
    ) : null;

    var pickupTime = rowData.pickupTime ? (
      'Pick-up Time: ' + rowData.pickupTime
    ) : null;

    var items = rowData.items.map((item) => {
      return (
        <Image style={styles.item} source={{ uri: item.image }}/>
      )
    });
    return (
      <TouchableHighlight onPress={() => this.onPressRow(rowID)}>
        <View>
          <View style={styles.row}>
            <Image style={styles.avatar} source={{ uri: rowData.customer.photo }}/>
            <View style={{ flexDirection: 'column' }}>
              <Text style={{ fontFamily: 'Brandon Grotesque', color: '#080' }}>
                {rowData.status.toUpperCase()}
              </Text>
              <Text style={{ fontFamily: 'Brandon Grotesque' }}>
                {rowData.customer.name}
              </Text>
              <Text style={{ fontFamily: 'Brandon Grotesque' }}>
                {pickupLocation}
                {pickupTime}
              </Text>
            </View>
          </View>
          <View style={styles.row}>
            {items}
          </View>
          <View style={styles.separator}/>
        </View>
      </TouchableHighlight>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this.renderRow}
          />
      </View>
    );
  }
}

class CustomTitle extends React.Component {
  render() {
    return (
      <View style={styles.customTitleContainer}>
        <Text style={styles.customTitle}>PICKUP</Text>
        <Text style={styles.customTitleBold}> CLUB</Text>
      </View>
    );
  }
}

class CustomPrevButton extends React.Component {
  render() {
    return (
      <Icon
        name='ion|navicon'
        size={30}
        color='white'
        style={styles.icon}
        />
    );
  }
}

class CustomNextButton extends React.Component {
  render() {
    return (
      <TouchableOpacity onPress={() => alert('prev') }>
        <Text style={styles.customButton}>SIGN IN</Text>
      </TouchableOpacity>
    );
  }
}

var styles = StyleSheet.create({
  customWrapperStyle: {
    backgroundColor: '#bbdddd'
  },
  emptyPage: {
    flex: 1,
    paddingTop: 64
  },
  emptyPageText: {
    margin: 10
  },
  list: {
    backgroundColor: '#eeeeee',
    marginTop: 10
  },
  group: {
    backgroundColor: 'white'
  },
  groupSpace: {
    height: 15
  },
  line: {
    backgroundColor: '#bbbbbb',
    height: 1 / PixelRatio.get()
  },
  row: {
    marginHorizontal: 15,

    flexDirection: 'row',
    backgroundColor: 'white',
    paddingVertical: 5
  },

  separator: {
    height: 1 / PixelRatio.get(),
    backgroundColor: '#bbbbbb',
  },
  rowNote: {
    fontSize: 17
  },
  rowText: {
    fontSize: 17,
    fontWeight: '500'
  },
  customTitleContainer: {
    flexDirection: 'row',
    top: -8
  },
  customTitle: {
    color: 'white',
  },
  customTitleBold: {
    color: 'white',
    fontFamily: 'Brandon Grotesque',
    fontWeight: 'bold'
  },
  navigationBar: {
    backgroundColor: 'black'
  },
  customButton: {
    color: 'white',
    top: 30,
    right: 10,
    fontFamily: 'Brandon Grotesque'
  },
  icon: {
    width: 30,
    height: 30,
    top: 25,
    left: 10
  },
  avatar: {
    marginRight: 15,
    borderRadius: 6,
    width: 60,
    height: 60
  },
  item: {
    marginRight: 5,
    marginVertical: 5,
    //borderWidth: 1,
    //borderColor: '#00ff00',
    borderRadius: 6,
    width: 40,
    height: 40
  }
});


AppRegistry.registerComponent('disrupt2015', () => disrupt2015);
