import React, { useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
import AuthNavigator from './AuthNavigator'
import StackNavigator from './StackNavigator'
import { initAuthentication } from '../store/actions'


const MainNavigator = () => {

const dispatch = useDispatch()
const auth = useSelector(state => state.auth)


useEffect(() => {
    dispatch(initAuthentication());
  }, []);


    return (
        <NavigationContainer>
            {auth === null ? <AuthNavigator/> : <StackNavigator/>}
        </NavigationContainer>
    )
}

export default MainNavigator