import { Link } from "@react-navigation/native";
import React from "react";
import {
  Dimensions,
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { CustomInput } from "src/components/CustomInput/CustomInput";
import { appRoutes, images } from "src/constants";

export const SignUp: React.FC = () => {
  const windowHeight = Dimensions.get("window").height;

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView
        className="bg-white h-full"
        keyboardShouldPersistTaps="handled"
      >
        <View
          className="relative w-full"
          style={{ height: windowHeight / 2.25 }}
        >
          <Image
            source={images.loginGraphic}
            className="size-full rounded-b-lg"
            resizeMode="stretch"
          />
          <Image
            source={images.logo2}
            className="self-center absolute size-[80%] -bottom-[30.5%] z-10"
          />
        </View>

        <View className="gap-8 rounded-lg mt-5 p-5">
          <CustomInput
            label="Full Name"
            placeholder="Enter your full name"
            value=""
            setValue={() => {}}
          />

          <CustomInput
            label="Email"
            placeholder="Enter your email"
            value=""
            keyboardType="email-address"
            setValue={() => {}}
          />

          <CustomInput
            label="Password"
            placeholder="Enter your password"
            value=""
            keyboardType="default"
            secureTextEntry
            setValue={() => {}}
          />

          {/* <CustomInput
            label="Confirm Password"
            placeholder="Enter your confirm password"
            value=""
            keyboardType="default"
            secureTextEntry
            setValue={() => {}}
          /> */}

          <TouchableOpacity onPress={() => {}} className="custom-btn">
            <Text className="base-semibold text-white">Sign Up</Text>
          </TouchableOpacity>

          <Text className="text-center base-regular text-gray-100">
            Already have an account?{" "}
            <Link
              screen={appRoutes.signIn}
              params={{}}
              className="base-bold text-primary"
            >
              Sign in
            </Link>
          </Text>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
