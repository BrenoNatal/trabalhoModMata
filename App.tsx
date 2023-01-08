import React, { useState } from 'react';
import RK4 from './src/Rk4';
import { Button, Center, HStack, NativeBaseProvider, Text, VStack } from 'native-base';
import { useForm, Controller } from 'react-hook-form';
import InputNumber from './src/components/Input';

interface  FormData {
  x0: string,
  y0: string,
  t0: string,
  h: string,
  n: string,
  func1: string,
  func2: string,
}



export default function App() {

  const { control, handleSubmit, getValues , formState: {errors}} = useForm<FormData>();
  
  const [showGraph, setGraph] = useState(false);

  function onSubmit(data: FormData){
    setGraph(true)
  }

  
  return (
    <NativeBaseProvider>
      <Center bg={'white'}>
        <VStack mt={20}>
          <Center>
            <HStack space={40}>
              <Controller
                control={control}
                name="func1"
                render={({field: { onChange }  }) => (
                  <InputNumber 
                    placeholder='dx/dt'
                    onChangeText={onChange}
                  />
                )}
              />
              <Controller
                control={control}
                name="func2"
                render={({field: { onChange }  }) => (
                  <InputNumber 
                    placeholder='dy/dt'
                    onChangeText={onChange}
                  />
                )}
              />
            </HStack>
          </Center>
          <HStack mt={10} space={20}>
            <Controller
              control={control}
              name="x0"
              render={({field: { onChange }  }) => (
                <InputNumber 
                  placeholder='x0'
                  onChangeText={onChange}
                />
              )}
            />
            <Controller
              control={control}
              name="y0"
              render={({field: { onChange }  }) => (
                <InputNumber 
                  placeholder='y0'
                  onChangeText={onChange}
                />
              )}
            />
            <Controller
              control={control}
              name="t0"
              render={({field: { onChange }  }) => (
                <InputNumber 
                  placeholder='t0'
                  onChangeText={onChange}
                />
              )}
            />
            <Controller
              control={control}
              name="h"
              render={({field: { onChange }  }) => (
                <InputNumber 
                  placeholder='h'
                  onChangeText={onChange}
                />
              )}
            />
            <Controller
              control={control}
              name="n"
              render={({field: { onChange }  }) => (
                <InputNumber 
                  placeholder='n'
                  onChangeText={onChange}
                />
              )}
            />
          </HStack>
        </VStack>

        <Button mt={20} onPress={handleSubmit(onSubmit)} alignSelf={'center'} p={0} height={51} width={263} borderWidth={2} borderRadius={11} borderColor={'#3DF5EF'} variant='ghost'>
          <Text fontSize={32} color={'#3DF5EF'}>Submit</Text>
        </Button> 
        <Center>
          {showGraph? <RK4 x0={parseFloat(getValues().x0)} y0={parseFloat(getValues().y0)} t0={parseFloat(getValues().t0)} h={parseFloat(getValues().h)} n={parseFloat(getValues().n)} func1={getValues().func1} func2={getValues().func2} /> : null  }
        </Center>
      </Center>
    </NativeBaseProvider>
  );
}