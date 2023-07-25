import React from 'react';
import {View, Text, TextInput} from 'react-native';
import {Controller} from 'react-hook-form';

const InputField = ({
  icon,
  name,
  control,
  rules = {},
  placeholder,
  secureTextEntry,
  keyboardType,
}: any) => {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({field: {onChange, onBlur, value}, fieldState: {error}}) => (
        <>
          <View
            className="flex-row pl-4 pr-2 py-2 rounded-lg mt-1 border-2  justify-start items-center"
            style={[{borderColor: error ? 'red' : '#ccc'}]}>
            {icon}
            <TextInput
              placeholder={placeholder}
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              secureTextEntry={secureTextEntry}
              keyboardType={keyboardType}
              className="text-lightSecText dark:text-darkText"
            />
          </View>
          <Text className="text-red-500">{error?.message}</Text>
        </>
      )}
    />
  );
};

export default InputField;
