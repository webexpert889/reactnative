//import liraries
import React, { useState, useCallback, useEffect } from 'react'
import { View, Text, Image, Pressable, TouchableOpacity } from 'react-native'
import { Button } from '../../components/Button'
import styles from './styles'
import svgPaths from '../../utilities/svgPaths'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromCart } from '../../redux/actions/users.actions'
import Toast from 'react-native-toast-message'
import AsyncStorage from '@react-native-async-storage/async-storage'
import imagePaths from '../../utilities/imagePaths'
import { useRoute } from '@react-navigation/native'

export const ProductCard = ({
  item,
  FillNeeds,
  from,
  onChange,
  navigation,
  basePath,
  routes,
}) => {
 
  const dispatch = useDispatch()
  const route = useRoute()
  const {
    category,
    title,
    quantity,
    images,
    fulfilled_quantity,
    total_fulfilled_quantity,
    total_equivalent_amount,
    category_image_path,
    categories,
    need,
  } = item
  const [max, setMax] = useState(quantity)
  const rest = categories?.length - 1

  const fromScreen = from ? from : null
  const completedPercentage =
    item.fulfilled_quantity == 0 && route.name == 'CART'
      ? 100
      : route.name == 'MyDonation'
      ? (total_fulfilled_quantity / max) * 100
      : (fulfilled_quantity / max) * 100
  const [deleteParams, setDeleteParams] = useState({
    cart_id: item?.id,
  })
  const [userType, setuserType] = useState('')
  const deleteSuccess = true

  const getInitialData = async () => {
    let userType = await AsyncStorage.getItem('user_type')
    setuserType(userType)
  }
  useEffect(() => {
    getInitialData()
    if (route.name == 'CART') {
      setMax(need.quantity - need.fulfilled_quantity)
    }
    if (route.name == 'MyDonation') {
  
    }
  }, [])

  const removeItemFromCart = () => {
    dispatch(removeFromCart(deleteParams)).then(res => {
      onChange(deleteSuccess)
      Toast.show({
        type: 'success',
        text1: res.message,
      })
    })
  }

  return (
    <TouchableOpacity
      onPress={() => {
        route.name == 'MyDonation'
          ? navigation.navigate('UserNeedDetails', {
              need: need,
              type: null,
              location: basePath?.length > 0 ? basePath : '',
              fromRoute: 'donation',
            })
          : fromScreen !== 'cart_screen'
          ? navigation.navigate(
              userType == 'User' ? 'UserNeedDetails' : 'NeedDetails',
              {
                need: item,
                type: null,
                location: basePath?.length > 0 ? basePath : '',
                fromRoute: route.name == 'AllPostedNeeds' && 'postedNeeds',
              },
            )
          : navigation.navigate('UserNeedDetails', {
              need: item,
              type: fromScreen,
              location: basePath?.length > 0 ? basePath : '',
            })
      }}
      style={styles.productCard}>
      {fromScreen == 'cart_screen' && (
        <TouchableOpacity style={styles.crossIcon} onPress={removeItemFromCart}>
          {svgPaths.crossIcon}
        </TouchableOpacity>
      )}
      {route.name == 'MyDonation' ? (
        <View style={{ height: 160, alignSelf: 'center' }}>
          {need.images.length > 0 ? (
            <Image
              resizeMode="cover"
              style={styles.productImg}
              source={{
                uri:
                  need.images.length > 0
                    ? basePath + '/' + need.images[0]?.image_path
                    : category_image_path,
              }}
            />
          ) : (
            <Image
              resizeMode="cover"
              style={styles.productImg}
              source={imagePaths.needDemoSquare}
            />
          )}
        </View>
      ) : (
        <View style={{ height: 160, alignSelf: 'center' }}>
          {images.length > 0 ? (
            <Image
              resizeMode="cover"
              style={styles.productImg}
              source={{
                uri:
                  route.name == 'Agencydetail' || fromScreen == 'AgencyDetail'
                    ? images.length > 0
                      ? basePath + '/' + images[0]?.image_path
                      : category_image_path
                    : images.length > 0
                    ? images[0]?.image_path
                    : category_image_path,
              }}
            />
          ) : (
            <Image
              resizeMode="cover"
              style={styles.productImg}
              source={imagePaths.needDemoSquare}
            />
          )}
        </View>
      )}
      <View style={styles.productInfo}>
        <View style={{ flexDirection: 'row' }}>
          {need?.categories
            ? need.categories.length > 0
            : categories?.length > 0 && (
                <View
                  key={categories?.[0]?.category.id}
                  style={styles.chipsContainer}>
                  <Text style={styles.chipText}>
                    {categories?.[0]?.category?.name || 'N/A'}
                  </Text>
                </View>
              )}
          {rest > 0 && (
            <View key="UniqieKey" style={styles.chipsContainer}>
              <Text style={styles.chipText}>+ {rest}</Text>
            </View>
          )}
        </View>

        {need?.title ? (
          <Text style={styles.productTitle}>
            {need.title.slice(0, 25) + (need.title.length > 25 ? '...' : '')} -
            QTY {max}
          </Text>
        ) : (
          <Text style={styles.productTitle}>
            {title.slice(0, 25) + (title.length > 25 ? '...' : '')} - QTY {max}
          </Text>
        )}

        {FillNeeds && <Text style={styles.by}></Text>}
        <View style={styles.progressBarWrap}>
          <View
            style={[
              styles.progressIndicator,
              { width: `${completedPercentage}%` },
            ]}
          />
        </View>
        {item.fulfilled_quantity == 0 && route.name == 'CART' ? (
          <Text style={styles.fulfilledText}>
            {max} out of {max}
          </Text>
        ) : route.name == 'CART' ? (
          <Text style={styles.fulfilledText}>
            {fulfilled_quantity} out of {max}
          </Text>
        ) : route.name == 'MyDonation' ? (
          <>
            <Text style={styles.fulfilledText}>
              {total_fulfilled_quantity} out of {max}
            </Text>
            <Text style={styles.fulfilledText}>
              {total_equivalent_amount > 0 && total_equivalent_amount}
            </Text>
          </>
        ) : (
          <Text style={styles.fulfilledText}>
            {fulfilled_quantity} out of {quantity}
          </Text>
        )}

        <View>
          {fromScreen !== 'cart_screen' ? (
            <Button
              style={styles.button}
              textStyle={styles.btnText}
              onPress={() =>
                navigation.navigate(
                  userType == 'User' ? 'UserNeedDetails' : 'NeedDetails',
                  {
                    need: route.name == 'MyDonation' ? need : item,
                    type: null,
                    location: basePath?.length > 0 ? basePath : '',
                    fromRoute:
                      route.name == 'AllPostedNeeds'
                        ? 'postedNeeds'
                        : route.name == 'MyDonation' && 'donation',
                  },
                )
              }
              // onPress={onPress({fromScreen:null})}
              // title={FillNeeds ? 'Fill Needs' : 'View Need'}
              title={
                route.name != 'MyDonation' &&
                userType == 'User' &&
                fulfilled_quantity != quantity
                  ? 'Fill Need'
                  : 'View Need'
              }
            />
          ) : item.equivalent_amount > 0 ? (
            <Text style={{ marginTop: 10 }}>
              Amount: {item.equivalent_amount}
            </Text>
          ) : (
            <Button
              style={styles.button}
              textStyle={styles.btnText}
              onPress={() =>
                navigation.navigate('UserNeedDetails', {
                  need: item,
                  type: fromScreen,
                })
              }
              // onPress={onPress({fromScreen:fromScreen})}
              title={'Update Need'}
            />
          )}
        </View>
      </View>
    </TouchableOpacity>
  )
}
