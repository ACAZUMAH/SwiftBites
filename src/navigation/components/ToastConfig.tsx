import { BaseToast } from "react-native-toast-message";

const toastConfig = {
  success: (props: any) => (
    <BaseToast
      {...props}
      style={{
        borderLeftColor: "#FE8C00",
      }}
    />
  ),
};

export default toastConfig;
