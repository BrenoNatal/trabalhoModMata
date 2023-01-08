import React, { useState } from 'react';
import RK4 from './src/Rk4';
import { Box, Button, Center, Container, HStack, NativeBaseProvider, Text, VStack } from 'native-base';
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



  let dataInicial: FormData = {
    x0: '1',
    y0: '1',
    t0: '0',
    h: '1',
    n: '500',
    func1: '0.2 * x * (1-(x+y)/ 1000)',
    func2: '0.5 * y * (1-(x+y)/ 500)',
  };


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
              <Center>
                <Text fontSize={22}>
                  Primeira Derivada de X:
                </Text>
                <Controller
                  control={control}
                  name="func1"
                  rules={{
                    required: "Função é obrigatório",
                  }}
                  render={({field: { onChange }  }) => (
                    <InputNumber 
                      alignSelf={'center'}
                      placeholder={dataInicial.func1}
                      onChangeText={onChange}
                      height={12}
                      width={300}
                      errorMessage={errors.func1?.message}
                    />
                  )}
                />
              </Center>
              <Center>
                <Text fontSize={22}>
                  Primeira Derivada de y:
                </Text>
                <Controller
                  control={control}
                  name="func2"
                  rules={{
                    required: "Função é obrigatório",
                  }}
                  render={({field: { onChange }  }) => (
                    <InputNumber 
                      alignSelf={'center'}
                      placeholder={dataInicial.func2}
                      onChangeText={onChange}
                      height={12}
                      width={300}
                      errorMessage={errors.func2?.message}
                    />
                  )}
                />
              </Center>
            </HStack>
          </Center>
          <HStack mt={10} space={20}>
            <Center>
              <Text fontSize={16}>
                Valor Inicial de X:
              </Text>
              <Controller
                control={control}
                name="x0"
                rules={{
                  required: "X inicial é obrigatório",
                  pattern: {
                      value: /^[+-]?\d+(\.\d+)?$/i,
                      message: 'Somente números são permitidos',
                  },
              }}

                render={({field: { onChange }  }) => (
                  <InputNumber 
                    alignSelf={'center'}
                    placeholder={dataInicial.x0}
                    onChangeText={onChange}
                    height={12}
                    width={140}
                    errorMessage={errors.x0?.message}
                  />
                )}
              />
            </Center>
            
            <Center>
              <Text fontSize={16}>
                Valor Inicial de Y:
              </Text>
              <Controller
                control={control}
                name="y0"
                rules={{
                  required: "Y inicial é obrigatório",
                  pattern: {
                      value: /^[+-]?\d+(\.\d+)?$/i,
                      message: 'Somente números são permitidos',
                  },
              }}
                render={({field: { onChange }  }) => (
                  <InputNumber 
                    alignSelf={'center'}
                    placeholder={dataInicial.y0}
                    onChangeText={onChange}
                    height={12}
                    width={140}
                    errorMessage={errors.y0?.message}
                  />
                )}
              />
            </Center>
            <Center>
              <Text fontSize={16}>
                Valor Inicial do tempo:
              </Text>
              <Controller
                control={control}
                name="t0"
                rules={{
                  required: "Tempo inicial é obrigatório",
                  pattern: {
                      value: /^[+-]?\d+(\.\d+)?$/i,
                      message: 'Somente números são permitidos',
                  },
              }}
                render={({field: { onChange }  }) => (
                  <InputNumber
                    alignSelf={'center'} 
                    placeholder={dataInicial.t0}
                    onChangeText={onChange}
                    height={12}
                    width={140}
                    errorMessage={errors.t0?.message}
                  />
                )}
              />
            </Center>
            <Center>
              <Text fontSize={16}>
                Tamanho do passo H:
              </Text>
              <Controller
                control={control}
                name="h"
                rules={{
                  required: "Tamanho do passo é obrigatório",
                  pattern: {
                      value: /^[+-]?\d+(\.\d+)?$/i,
                      message: 'Somente números são permitidos',
                  },
              }}
                render={({field: { onChange }  }) => (
                  <InputNumber 
                    alignSelf={'center'}
                    placeholder={dataInicial.h}
                    onChangeText={onChange}
                    height={12}
                    width={140}
                    errorMessage={errors.h?.message}
                  />
                )}
              />
            </Center>
            <VStack> 
              <Text fontSize={16}>
                Quantidade total de interações:
              </Text>
              <Controller
                control={control}
                name="n"
                rules={{
                  required: "Quantidade total de interações é obrigatório",
                  pattern: {
                      value: /^[+-]?\d+(\.\d+)?$/i,
                      message: 'Somente números são permitidos',
                  },
              }}
                render={({field: { onChange }  }) => (
                  <InputNumber
                    alignSelf={'center'}
                    placeholder={dataInicial.n}
                    onChangeText={onChange}
                    height={12}
                    width={140}
                    errorMessage={errors.n?.message}
                  />
                )}
              />
            </VStack>
          </HStack>
        </VStack>

        <Button mt={20} onPress={handleSubmit(onSubmit)} alignSelf={'center'} p={0} height={50} width={250} borderWidth={2} borderRadius={3} borderColor={'#121313'} variant='ghost'>
          <Text fontSize={32} color={'#121313'}>Calcular</Text>
        </Button>
        {/* 
        <Center>
          {showInitialGraph? <RK4 x0={parseFloat(dataInicial.x0)} y0={parseFloat(dataInicial.y0)} t0={parseFloat(dataInicial.t0)} h={parseFloat(dataInicial.h)} n={parseFloat(dataInicial.n)} func1={dataInicial.func1} func2={dataInicial.func2} /> : null  }
        </Center> 
        */}
        <Center>
          {showGraph? <RK4 x0={parseFloat(getValues().x0)} y0={parseFloat(getValues().y0)} t0={parseFloat(getValues().t0)} h={parseFloat(getValues().h)} n={parseFloat(getValues().n)} func1={getValues().func1} func2={getValues().func2} /> : <RK4 x0={parseFloat(dataInicial.x0)} y0={parseFloat(dataInicial.y0)} t0={parseFloat(dataInicial.t0)} h={parseFloat(dataInicial.h)} n={parseFloat(dataInicial.n)} func1={dataInicial.func1} func2={dataInicial.func2} />  }
        </Center>
      </Center>
      <Container ml={20} mt={20}>
        <Text fontSize={24}>
          Para a entrada da função tem os seguintes operadores:{"\n"}
          Adição (+){"\n"}
          Subtração (-){"\n"}
          Multiplicação (*){"\n"}
          Divisão (/){"\n"}
          Exponenciação ( ^ ){"\n"}
          Tem também as seguintes funções: {"\n"}
          sin(x) - Seno de x (x em radianos){"\n"}
          cos(x) - Cosseno de x (x em radianos){"\n"}
          tan(x) - Tangente de x (x em radianos){"\n"}
          asin(x) - Arco seno de x (x em radianos){"\n"}
          acos(x) - Arco cosseno de x (x em radianos){"\n"}
          atan(x) - Arco  tangente de x (x em radianos){"\n"}
          sqrt(x) - Raiz quadrada de x{"\n"}
          log(x) - Logaritmo natural de x{"\n"}
          abs(x) - Valor absoluto de x{"\n"}
          exp(x) -  Exponencial de base e elevado a x{"\n"}
        </Text>
      </Container>
    </NativeBaseProvider>
  );
}