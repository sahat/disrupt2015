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
  NavigatorIOS,
  TouchableOpacity,
  Modal,
  SwitchIOS
  } = React;


var disrupt2015 = React.createClass({
  statics: {
    title: '<NavigatorIOS>',
    description: 'iOS navigation capabilities',
  },

  render: function() {
    return (
      <NavigatorIOS
        barTintColor="black"
        tintColor="white"
        titleTextColor="white"
        style={styles.wrapper}
        initialRoute={{
            title: 'Pickup Club',
            component: EmptyPage,
            rightButtonTitle: 'Sign in'
        }}
        />
    )
  }
});

class EmptyPage extends React.Component {
  constructor(props) {
    super(props);
    var ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      dataSource: ds.cloneWithRows([
        {
          status: 'ready',
          customer: {
            name: 'Dan Seider',
            photo: 'http://i.imgur.com/XWRhrUC.jpg'
          },
          pickupLocation: 'A',
          items: [
            {
              title: 'Men\'s Solid Dress Shirt with Matching Tie',
              walmartNumber: '554222918',
              price: 12,
              size: 'S',
              color: 'Charcoal',
              quantity: 1,
              image: 'http://ll-us-i5.wal.co/dfw/dce07b8c-8ad7/k2-_1e1f4d10-8ce1-4b1c-8366-7bd10c493afb.v1.jpg-49fabc758118a5f19d75ca5096137a2550d560e1-webp-450x450.jpg'
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
          status: 'in_progress',
          customer: {
            name: 'Casey C. Roberts',
            photo: 'http://i.imgur.com/rTwvkDN.jpg'
          },
          pickupTime: '6:15 PM',
          items: [
            {
              image: 'http://i5.walmartimages.com/dfw/dce07b8c-1b24/k2-_6883b400-953a-4171-9da3-3cac0b502f47.v1.jpg'
            },
            {
              image: 'http://ll-us-i5.wal.co/dfw/dce07b8c-ff07/k2-_2a609791-dce8-4b9c-8e18-2ea4b11ba22c.v3.jpg'
            },
            {
              image: 'http://ll-us-i5.wal.co/dfw/dce07b8c-20a3/k2-_64c47dad-5d13-4f20-82fb-caa3a793d9ab.v1.jpg'
            },
            {
              image: 'http://ll-us-i5.wal.co/dfw/dce07b8c-5433/k2-_30a6bd22-4a19-4be8-bdb3-490d3ae31a4c.v6.jpg'
            }
          ]
        },
        {
          status: 'in_progress',
          customer: {
            name: 'Elizabeth W. Davis',
            photo: 'http://i.imgur.com/HJQ6b3M.jpg'
          },
          pickupTime: '5:30 PM',
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
          status: 'received',
          customer: {
            name: 'Eugene V. Lane',
            photo: 'http://i.imgur.com/yQaVS1f.jpg'
          },
          pickupTime: '8:00 PM',
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

  onPressRow(item) {
    console.log(item);
    this.props.navigator.push({
      title: `#${item.walmartNumber}`,
      component: ProductPage,
      passProps: {
        item: item
      }
    })

  }

  renderRow(rowData, sectionID, rowID) {
    let pickupLocation = rowData.pickupLocation ? (
      <View style={{  flexDirection: 'row' }}>
        <Text style={{ fontSize: 12 }}>Pick-up Location: </Text>
        <Text style={{ fontSize: 12, fontWeight: '600' }}>{rowData.pickupLocation}</Text>
      </View>
    ) : null;

    let pickupTime = rowData.pickupTime ? (
      <View style={{ flexDirection: 'row' }}>
        <Text style={{ fontSize: 12 }}>Pick-up Time: </Text>
        <Text style={{ fontSize: 12, fontWeight: '600' }}>{rowData.pickupTime}</Text>
      </View>
    ) : null;

    let items = rowData.items.map((item) => {
      let doneOverlay = item.done && <View style={styles.itemOverlay}></View>;
      return (
        <TouchableOpacity key={item.image} onPress={() => this.onPressRow(item)}>
          <Image style={styles.item} source={{ uri: item.image }}>
            {doneOverlay}
          </Image>
        </TouchableOpacity>
      );
    });

    let statusIcon;
    let statusText;
    let statusColor;

    switch (rowData.status) {
      case 'in_progress':
        statusIcon = (
          <Icon
            name='ion|ios-pulse-strong'
            size={12}
            color='#f39c12'
            style={styles.icon}
          />
        );
        statusText = 'In Progress';
        statusColor = '#f39c12';
        break;
      case 'ready':
        statusIcon = (
          <Icon
            name='ion|checkmark-circled'
            size={12}
            color='#2ecc71'
            style={styles.icon}
            />
        );
        statusText = 'Ready for Pickup';
        statusColor = '#2ecc71';
        break;
      case 'received':
        statusIcon = (
          <Icon
            name='ion|clipboard'
            size={12}
            color='#3498db'
            style={styles.icon}
            />
        );
        statusText = 'Order Received';
        statusColor = '#3498db';
        break;
      default:
        statusText = 'TBD';
    }

    return (
      <View>
        <View style={styles.row}>
          <Image style={styles.avatar} source={{ uri: rowData.customer.photo }}/>
          <View style={{ flexDirection: 'column' }}>
            <View style={{ flexDirection: 'row'}}>
              {statusIcon}
              <Text style={{ fontSize: 12, fontWeight: '600', color: statusColor }}>
                {statusText.toUpperCase()}
              </Text>
            </View>
            <Text style={{ fontSize: 12, fontWeight: '600', paddingVertical: 5 }}>
              {rowData.customer.name}
            </Text>
            {pickupLocation}
            {pickupTime}
          </View>
        </View>
        <View style={styles.row}>
          {items}
        </View>
        <View style={styles.separator}/>
      </View>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this.renderRow.bind(this)}
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

class CustomNextButton extends React.Component {
  render() {
    return (
      <TouchableOpacity onPress={() => alert('It is a hackathon...no one has time to implement authentication.') }>
        <Text style={styles.customButton}>SIGN IN</Text>
      </TouchableOpacity>
    );
  }
}

var styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
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
    marginVertical: 5,
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
    width: 12,
    height: 12,
    marginRight: 4
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
  },
  itemOverlay: {
    flex: 1,
    backgroundColor: 'rgba(46,204,113,0.5)'
  },
  innerContainer: {
    borderRadius: 10,
  },
  rowTitle: {
    flex: 1,
    fontWeight: 'bold',
  },
  button: {
    borderRadius: 5,
    flex: 1,
    height: 44,
    justifyContent: 'center',
    overflow: 'hidden',
  },
  buttonText: {
    fontSize: 18,
    margin: 5,
    textAlign: 'center',
  },
  modalButton: {
    marginTop: 10,
  },
  markAsDone: {
    backgroundColor: 'black',
    padding: 12,
    marginHorizontal: 15,
    marginBottom: 15,

  },
  markAsDoneText: {
    fontSize: 12,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center'
  },
  productPage: {
    flex: 1,
    paddingTop: 64,
    justifyContent: 'space-around',
  },
  productPageInnerContainer: {
    flex: 1,
    alignItems: 'center',
  },
  productImage: {
    flex: 1,
    width: 450,
    height: 450,
    marginBottom: 10
  },
  productTitle: {
    fontWeight: 'bold',
    fontSize: 12

  },
  productNumber: {
    fontSize: 12

  },
  productPrice: {
    fontWeight: 'bold',
    fontSize: 12
  },
  productInfo: {
    flexDirection: 'row' ,
    marginTop: 15
  },
  productQty: {
    fontWeight: 'bold',
    fontSize: 12
  },
  productSize: {
    fontWeight: 'bold',
    fontSize: 12
  },
  productSizeButton: {
    marginLeft: 14,
    marginRight: 7,
    marginBottom: 10,
    flex: 1,
    padding: 8,
    borderWidth: 2,
    borderColor: 'black'
  },
  productQtyButton: {
    marginLeft: 7,
    marginRight: 14,
    marginBottom: 10,
    flex: 1,
    padding: 8,
    borderWidth: 2,
    borderColor: 'black'
  }
});

var Button = React.createClass({
  getInitialState() {
    return {
      active: false,
    };
  },

  _onHighlight() {
    this.setState({ active: true });
  },

  _onUnhighlight() {
    this.setState({ active: false });
  },

  render() {
    var colorStyle = {
      color: this.state.active ? '#fff' : '#000'
    };
    return (
      <TouchableHighlight
        onHideUnderlay={this._onUnhighlight}
        onPress={this.props.onPress}
        onShowUnderlay={this._onHighlight}
        style={[styles.button, this.props.style]}
        underlayColor="#a9d9d4">
        <Text style={[styles.buttonText, colorStyle]}>{this.props.children}</Text>
      </TouchableHighlight>
    );
  }
});

class ProductPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let item = this.props.item;

    return (
      <View style={styles.productPage}>
        <View style={styles.productPageInnerContainer}>
          <Image
            style={styles.productImage}
            source={{ uri: item.image }}/>
          <Text style={styles.productTitle}>{item.title.toUpperCase()}</Text>
          <Text style={styles.productNumber}>Walmart #{item.walmartNumber}</Text>
          <Text style={styles.productPrice}>{'$' + parseFloat(item.price).toFixed(2)}</Text>
        </View>

        <View style={styles.productInfo}>
          <TouchableOpacity style={styles.productSizeButton}>
            <Text style={styles.productSize}>Size: {item.size}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.productQtyButton}>
            <Text style={styles.productQty}>Qty: {item.quantity}</Text>
          </TouchableOpacity>
        </View>
        <TouchableHighlight style={styles.markAsDone}>
          <Text style={styles.markAsDoneText}>MARK AS DONE</Text>
        </TouchableHighlight>
      </View>
    )
  }

}


AppRegistry.registerComponent('disrupt2015', () => disrupt2015);
