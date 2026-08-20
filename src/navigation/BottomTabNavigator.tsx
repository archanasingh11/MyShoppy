import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Ionicons } from "@expo/vector-icons";

import HomeScreen from "../screens/Home/HomeScreen";
import CategoriesScreen from "../screens/Categories/CategoriesScreen";
import ProductsScreen from "../screens/Products/ProductsScreen";
import ProductDetailsScreen from "../screens/ProductDetails/ProductDetails";
import CartScreen from "../screens/Cart/CartScreen";
import CheckoutScreen from "../screens/Checkout/CheckoutScreen";
import OrderSuccessScreen from "../screens/OrderSuccess/OrderSuccessScreen";

import { useCart } from "../context/CartContext";
import { COLORS } from "../theme/colors";
import { TYPOGRAPHY } from "../theme/typography";

const Tab = createBottomTabNavigator();

const HomeStack = createNativeStackNavigator();
const CategoriesStack = createNativeStackNavigator();
const CartStack = createNativeStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator screenOptions={{ headerShown: false }}>
      <HomeStack.Screen name="HomeMain" component={HomeScreen} />
      <HomeStack.Screen name="Products" component={ProductsScreen} />
      <HomeStack.Screen
        name="ProductDetails"
        component={ProductDetailsScreen}
      />
    </HomeStack.Navigator>
  );
}

function CategoriesStackScreen() {
  return (
    <CategoriesStack.Navigator screenOptions={{ headerShown: false }}>
      <CategoriesStack.Screen
        name="CategoriesMain"
        component={CategoriesScreen}
      />
      <CategoriesStack.Screen
        name="Products"
        component={ProductsScreen}
      />
      <CategoriesStack.Screen
        name="ProductDetails"
        component={ProductDetailsScreen}
      />
    </CategoriesStack.Navigator>
  );
}

function CartStackScreen() {
  return (
    <CartStack.Navigator screenOptions={{ headerShown: false }}>
      <CartStack.Screen
        name="CartMain"
        component={CartScreen}
      />
      <CartStack.Screen
        name="Checkout"
        component={CheckoutScreen}
      />
      <CartStack.Screen
        name="OrderSuccess"
        component={OrderSuccessScreen}
      />
    </CartStack.Navigator>
  );
}

export default function BottomTabNavigator() {
  const { totalItems } = useCart();

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        popToTopOnBlur: true,


        tabBarActiveTintColor: COLORS.white,
        tabBarInactiveTintColor: "#A7F3D0",

        tabBarStyle: {
          backgroundColor: COLORS.primary,
          height: 65,
          paddingBottom: 8,
          paddingTop: 6,
        },

        tabBarLabelStyle: TYPOGRAPHY.tabLabel,

        tabBarIcon: ({ color }) => {
          let iconName: keyof typeof Ionicons.glyphMap;

          switch (route.name) {
            case "Home":
              iconName = "home";
              break;
            case "Categories":
              iconName = "grid";
              break;
            case "Cart":
              iconName = "cart";
              break;
            default:
              iconName = "ellipse";
          }

          return (
            <Ionicons
              name={iconName}
              size={24}
              color={color}
            />
          );
        },
      })}
    >
      <Tab.Screen
        name="Home"
        component={HomeStackScreen}
        listeners={({ navigation }) => ({
          tabPress: () => {
            navigation.navigate("Home", { screen: "HomeMain" });
          },
        })}
      />

      <Tab.Screen
        name="Categories"
        component={CategoriesStackScreen}
        listeners={({ navigation }) => ({
          tabPress: () => {
            navigation.navigate("Categories", { screen: "CategoriesMain" });
          },
        })}
      />

      <Tab.Screen
        name="Cart"
        component={CartStackScreen}
        listeners={({ navigation }) => ({
          tabPress: () => {
            navigation.navigate("Cart", { screen: "CartMain" });
          },
        })}
        options={{
          tabBarBadge: totalItems > 0 ? totalItems : undefined,
          tabBarBadgeStyle: {
            backgroundColor: "#EF4444",
            color: "#FFFFFF",
            fontSize: 11,
            fontWeight: "700",
          },
        }}
      />


    </Tab.Navigator>
  );
}