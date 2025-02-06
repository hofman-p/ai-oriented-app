import React, { useState } from 'react';
import {
  Keyboard,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

const App = (): JSX.Element => {
  const [prompt, setPrompt] = useState<string>('');
  const [response, setResponse] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSend = () => {
    if (!prompt.trim()) return;
    Keyboard.dismiss();
    setIsLoading(true);
    setResponse('');
    // Simulate an API call delay for the AI response
    setTimeout(() => {
      setResponse(`Simulated AI response to: ${prompt}`);
      setIsLoading(false);
      setPrompt('');
    }, 1500);
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#343541', padding: 16 }}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <View style={{ width: '100%', marginBottom: 24 }}>
          <Text
            style={{
              fontSize: 24,
              fontWeight: 'bold',
              textAlign: 'center',
              color: '#d1d5db',
            }}
          >
            AI Prompt
          </Text>
          <Text style={{ textAlign: 'center', color: '#8e8ea0', marginTop: 8 }}>
            Enter your prompt and get an AI response.
          </Text>
        </View>
        <View style={{ width: '80%', marginBottom: 16 }}>
          <TextInput
            value={prompt}
            onChangeText={setPrompt}
            placeholder="Type your prompt here..."
            placeholderTextColor="#9CA3AF"
            style={{
              borderColor: '#565869',
              borderWidth: 1,
              borderRadius: 8,
              backgroundColor: '#40414f',
              padding: 16,
              color: '#d1d5db',
              textAlign: 'center',
            }}
          />
        </View>
        <TouchableOpacity
          onPress={handleSend}
          disabled={isLoading}
          style={{
            backgroundColor: isLoading ? '#565869' : '#10a37f',
            borderRadius: 8,
            padding: 16,
            marginBottom: 16,
            width: '80%',
            alignItems: 'center',
          }}
        >
          <Text
            style={{ textAlign: 'center', color: '#fff', fontWeight: '600' }}
          >
            {isLoading ? 'Loading...' : 'Send Prompt'}
          </Text>
        </TouchableOpacity>
        <ScrollView
          contentContainerStyle={{
            flexGrow: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          style={{
            flex: 1,
            backgroundColor: '#40414f',
            borderRadius: 8,
            padding: 16,
            borderColor: '#565869',
            borderWidth: 1,
            width: '80%',
          }}
        >
          {response ? (
            <Text style={{ color: '#d1d5db', textAlign: 'center' }}>
              {response}
            </Text>
          ) : (
            <Text style={{ color: '#9CA3AF', textAlign: 'center' }}>
              Your AI response will appear here...
            </Text>
          )}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default App;
