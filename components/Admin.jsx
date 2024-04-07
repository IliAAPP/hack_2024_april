import React, { useState } from 'react';
import { StyleSheet, Text, View, Dimensions, Button } from 'react-native';
import { LineChart, StackedBarChart } from 'react-native-chart-kit';


const Admin = () => {
  const styles = StyleSheet.create({
    graphStyle: {
      backgroundColor: 'orange',
        
    },
    dynamika: {
      marginTop: 30,
    },
    title: {
      fontSize: 20,
      marginLeft: 10,
      fontFamily: 'mt-bold',
    },
    descritpion: {
      fontFamily: 'mt-light',
      margin: 20

    },
    buttn: {
              
    },
    dopt: {
      marginTop: 10,
    }
  });
  const [users, setUsers] = useState([]);

  const handleAddUser = () => {
    const newUser = {
      id: Math.random().toString(36).substring(7),
      login: 'user' + Math.floor(Math.random() * 100),
      password: 'password' + Math.floor(Math.random() * 100),
    };
    setUsers([...users, newUser]);
  };

  const handleEditUser = (user) => {
    const updatedUsers = users.map((u) => (u.id === user.id ? user : u));
    setUsers(updatedUsers);
  };

  const handleDeleteUser = (id) => {
    setUsers(users.filter((u) => u.id !== id));
  };

  const data = {
    labels: ["VIP", "Simple"],
    legend: ["L1", "L2", "L3"],
    data: [
      [60, 60, 60],
      [30, 30, 60]
    ],
    barColors: ["#dfe4ea", "#000", "#a4b0be"]
  };
  const screenWidth = Dimensions.get("window").width;

  const chartConfig = {
    backgroundGradientFrom: "#1E2923",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "#08130D",
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`, 
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false // optional
  };

  return (
    <View>
      <View style={styles.dynamika}>
        <Text style={styles.title}>Динамика посещения сайта</Text>
        <LineChart
          data={{
            labels: ['January', 'February', 'March', 'April', 'May', 'June'],
            datasets: [
              {
                data: [105, 48, 65, 17, 103, 115],
              },
            ],
          }}
          width={Dimensions.get('window').width}
          height={220}
          yAxisLabel=""
          yAxisSuffix=""
          yAxisInterval={1}
          chartConfig={{
            backgroundColor: '#e26a00',
            backgroundGradientFrom: '#fb8c00',
            backgroundGradientTo: '#ffa726',
            decimalPlaces: 2,
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`, 
            style: {
              borderRadius: 16,
            },
            propsForDots: {
              r: '6',
              strokeWidth: '2',
              stroke: '#ffa726',
            },
          }}
          bezier
          style={{
            marginVertical: 8,
            borderRadius: 16,
          }}
        />
      </View>
        <Text style={styles.title}>Информация по категориям клиентов</Text>
        <StackedBarChart
        style={styles.graphStyle}
        data={data}
        width={screenWidth}
        height={220}
        chartConfig={chartConfig}
        />
      <View style={{ marginTop: 30 }}>
        <Text style={styles.title}>Дополнительная информация для админов</Text>
        {/* Add your admin-specific information here, e.g., */}
        <Text style={styles.dop}>Количество активных пользователей за последний месяц: 500</Text>
        <Text style={styles.dop}>Количество новых регистраций за сегодня: 12</Text>
      </View>

      <Button
        title="Назад"
        color="#e26a00" 
        onPress={() => {
          
        }}
        style={styles.buttn}
      />


    </View>
  );
};



export default Admin;
