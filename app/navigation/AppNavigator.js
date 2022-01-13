import {
  Feather,
  Foundation,
  MaterialCommunityIcons
} from "@expo/vector-icons";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import React from "react";
import AudioList from "../screens/AudioList";
import Player from "../screens/Player";
import PlayList from "../screens/PlayList";

const Tab = createMaterialBottomTabNavigator();
export default function AppNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="AudioList"
        component={AudioList}
        options={{
          tabBarIcon: ({ color, size }) => {
            return <Feather name="headphones" size={24} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="Player"
        component={Player}
        options={{
          tabBarIcon: ({ color, size }) => {
            return (
              <MaterialCommunityIcons
                name="disc-player"
                size={24}
                color={color}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="PlayList"
        component={PlayList}
        options={{
          tabBarIcon: ({ color, size }) => {
            return (
              <Foundation name="list-thumbnails" size={24} color={color} />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
}
