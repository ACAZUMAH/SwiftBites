import React from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { CustomHeader } from "src/components/CustomHeader";
import { icons, images } from "src/constants";
import { useAppNavigationWithRef } from "src/hook/useAppNavigationWithRef";
import { ProfileInfoItem } from "./components/ProfileInfoItem";

export const Profile: React.FC = () => {
  const { navigateBack } = useAppNavigationWithRef();

  return (
    <SafeAreaView className="flex-1 px-4">
      <ScrollView showsVerticalScrollIndicator={false}>
        <CustomHeader title="Profile" onNavigateBack={navigateBack} />

        <View className="flex-center">
          <Image source={images.avatar} className="profile-avatar" />
          <TouchableOpacity className="profile-edit">
            <Image source={icons.pencil} className="size-5" />
          </TouchableOpacity>
        </View>

        <View className="bg-white/70 rounded-2xl p-6 mt-6">
          <ProfileInfoItem
            label="Full Name"
            value="John Doe"
            icon={icons.user}
            mb="mb-6"
          />

          <ProfileInfoItem
            label="Email"
            value="john.doe@example.com"
            icon={icons.envelope}
            mb="mb-6"
          />

          <ProfileInfoItem
            label="Phone"
            value="123-456-7890"
            icon={icons.phone}
            mb="mb-6"
          />

          <ProfileInfoItem
            label="Address"
            value="123 Main St, Anytown, USA"
            icon={icons.location}
            mb="mb-6"
          />

          <ProfileInfoItem
            label="Address"
            value="234 Main St, Anytown, USA"
            icon={icons.location}
          />
        </View>

        <TouchableOpacity
          className="bg-primary/10 rounded-full p-3 mt-6 w-full 
         flex items-center justify-center border-primary border"
        >
          <Text className="base-semibold text-primary ">Edit Profile</Text>
        </TouchableOpacity>

        <TouchableOpacity
          className="bg-error/10 rounded-full p-3 mt-6 w-full 
         flex items-center justify-center border-error border"
        >
          <Text className="base-semibold text-error ">Logout</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};
