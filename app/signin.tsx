// import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
// import React from 'react'
// import { Link, router } from 'expo-router'

// type Props = {}

// const SignInScreen = (props: Props) => {
//   return (
//     <View style={styles.container}>
//       <Text>SignIn Screen</Text>
//       {/* <Link href={"/(tabs)"} asChild> */}
//         <TouchableOpacity onPress={() => {
//           router.dismissAll();
//           router.push('/(tabs)');
//         }}>
//           <Text>Go to App Home Screen</Text>
//         </TouchableOpacity>
//       {/* </Link> */}
//     </View>
//   )
// }

// export default SignInScreen

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center'
//   }
// })

import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { router } from 'expo-router';

type Props = {};

const SignInScreen = (props: Props) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const hardcodedUsername = 'meow'; // Hardcoded username for testing
  const hardcodedPassword = 'meow'; // Hardcoded password for testing

  const handleLogin = () => {
    if (username === hardcodedUsername && password === hardcodedPassword) {
      setError('');
      router.push('/(tabs)'); // Navigate to the home screen upon success
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Sign In</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      {error ? <Text style={styles.error}>{error}</Text> : null}
      <TouchableOpacity onPress={handleLogin} style={styles.button}>
        <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>
      {/* Optional Link to the home screen */}
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
  },
  error: {
    color: 'red',
    marginBottom: 10,
    textAlign: 'center',
  },
  button: {
    backgroundColor: 'blue',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  link: {
    color: 'blue',
    marginTop: 20,
    textDecorationLine: 'underline',
  },
});

export default SignInScreen;
