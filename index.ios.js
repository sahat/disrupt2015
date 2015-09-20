/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var NavigationBar = require('react-native-navbar');
var { Icon } = require('react-native-icons');
var { find } = require('lodash');
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


let mockData = [
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
        category: 'Men\s Woven Shirts',
        price: 12,
        size: 'S',
        color: 'Charcoal',
        quantity: 1,
        image: 'http://ll-us-i5.wal.co/dfw/dce07b8c-8ad7/k2-_1e1f4d10-8ce1-4b1c-8366-7bd10c493afb.v1.jpg',
        done: true
      },
      {
        title: 'Fruit of the Loom Men\'s Short Sleeve Pocket Tee',
        category: 'Men\'s T-Shirts & Tank Tops',
        price: 3.45,
        size: 'S',
        color: 'Heather Blue',
        quantity: 2,
        image: 'http://i5.walmartimages.com/dfw/dce07b8c-797c/k2-_190fe3c6-a0c1-4217-b17b-35aee5f21fbd.v2.jpg',
        done: true

      },
      {
        title: 'Fruit of the Loom men\'s 12 pack of crew socks',
        category: 'Men\'s Socks',
        price: 8.77,
        size: 'ONE',
        color: 'Black',
        quantity: 1,
        image: 'http://i5.walmartimages.com/dfw/dce07b8c-fc12/k2-_7a9f4961-082a-41a2-8625-f86fbae6c988.v3.jpg',
        done: true
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
        title: 'Suddenly Slim by Catalina Women\'s Slimming Origami',
        category: 'Women\'s Swimwear',
        price: 17.30,
        size: 'L',
        color: 'Rich Black',
        quantity: 1,
        image: 'http://ll-us-i5.wal.co/dfw/dce07b8c-3265/k2-_88891af7-43e2-4101-8b01-b9fb0a2e3de0.v1.jpg',
        done: true
      },
      {
        title: 'Fourteenth Place Women\'s Tiered Applique Scoop Neck Top',
        category: 'Women\'s Tank Tops',
        price: 8.95,
        size: 'S',
        color: 'Black',
        quantity: 1,
        image: 'http://ll-us-i5.wal.co/dfw/dce07b8c-888b/k2-_76fe3511-1700-4256-ad3a-fed309aab932.v1.jpg'
      },
      {
        title: 'Faded Glory Women\'s Super Soft French Terry Skinny Jeans',
        category: 'Women\'s Jeans',
        price: 11.00,
        size: 4,
        color: 'Medium Wash',
        quantity: 1,
        image: 'http://ll-us-i5.wal.co/dfw/dce07b8c-cf8a/k2-_0699b85d-f33f-4d33-8ff6-e6bb3741eb8e.v2.jpg'
      },
      {
        title: 'Danskin Now Women\'s Dri-More Full Zip Core Hoodie',
        category: 'Women\'s Activewear',
        price: 11.88,
        size: 'S',
        color: 'Heather Grey',
        quantity: 1,
        image: 'http://ll-us-i5.wal.co/dfw/dce07b8c-eca7/k2-_e1b71dac-9f0c-432f-8e58-51ec8e0f8df8.v1.jpg'
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
        title: 'Xbox One 1 TB FIFA 16 Limited Edition Console Bundle',
        category: 'Video Game Consoles',
        price: 399.99,
        size: 'N/A',
        color: 'N/A',
        quantity: 1,
        image: 'http://ll-us-i5.wal.co/dfw/dce07b8c-4322/k2-_76165eac-7764-4266-af5c-ff2efe92fc4e.v1.jpg'
      }
    ]
  },
  {
    status: 'received',
    customer: {
      name: 'Anthony Keeling',
      photo: 'http://i.imgur.com/ofQ5BQP.jpg'
    },
    pickupTime: '8:30 PM',
    items: [
      {
        title: 'Teenage Mutant Ninja Turtles Men\'s Graphic Tee',
        category: 'Men\'s Graphic Tees',
        price: 7.50,
        size: 'S',
        color: 'Green Heather',
        quantity: 1,
        image: 'http://ll-us-i5.wal.co/dfw/dce07b8c-6547/k2-_abff469d-05bc-4d24-9fef-d9dee95894ab.v1.jpg'
      },
      {
        title: 'Cafepress Men\'s Tuxedo Graphic Tee',
        category: 'Men\'s T-Shirts & Tank Tops',
        price: 9.97,
        size: 'S',
        color: 'Black',
        quantity: 1,
        image: 'http://ll-us-i5.wal.co/dfw/dce07b8c-4077/k2-_1c42ff2c-53a3-4493-bd14-22eabf4e9805.v1.jpg'
      }
    ]
  }
];

var disrupt2015 = React.createClass({

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
      dataSource: ds.cloneWithRows(mockData)
    };
  }

  onUpdateItem(item) {
    console.log(find(mockData, item));
  }

  onPressRow(item) {
    console.log(item);
    this.props.navigator.push({
      title: `#${item.walmartNumber}`,
      component: ProductPage,
      passProps: {
        item: item,
        onUpdateItem: this.onUpdateItem
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
      <View style={{ flex:1 }}>
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
    width: 40,
    height: 40
  },
  itemOverlay: {
    flex: 1,
    borderRadius: 6,
    backgroundColor: 'rgba(46,204,113,0.3)'
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
    resizeMode: 'contain',
    width: 220,
    height: 220,
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

class ProductPage extends React.Component {
  constructor(props) {
    super(props);
  }

  onPressDone(item) {
    this.props.onUpdateItem(item);
    this.props.navigator.pop();
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
          <Text style={styles.productNumber}>{item.category}</Text>
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
        <TouchableHighlight style={styles.markAsDone} onPress={this.onPressDone.bind(this, item)}>
          <Text style={styles.markAsDoneText}>MARK AS DONE</Text>
        </TouchableHighlight>
      </View>
    )
  }

}


AppRegistry.registerComponent('disrupt2015', () => disrupt2015);
