import CountryModal from "@/components/Modals/CountryModal";
import MainNav from "@/components/Navigation/MainNav";
import NavExpand from "@/components/Navigation/NavExpand";
import Switch from "@/components/Switch/Switch";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";
import React, { useState } from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { useSelector } from "react-redux";
import Bell from "./svgs/Bell";
import Family from "./svgs/Family";
import Female from "./svgs/Female";
import Help from "./svgs/Help";
import Info from "./svgs/Info";
import Language from "./svgs/Language";
import Privacy from "./svgs/Privacy";
import Profile from "./svgs/Profile";
import Subscription from "./svgs/Subcriptions";

const Index = () => {
  const [showNav, setshowNav] = useState(false);
  const [isNotifOn, setisNotifOn] = useState(false);
  const [showLanguageModal, setshowLanguageModal] = useState(false);
  const [selectLanguage, setsetselectLanguage] = useState("English");
  const { users } = useSelector((state: any) => state.users);

  const settingsData = [
    {
      title: "Account Management",
      items: [
        {
          icon: "user",
          label: users?.first_name ?? "No Name",
          subtitle: users?.email ?? "",
          avatar: "https://cdn-icons-png.flaticon.com/512/149/149071.png",
          route: "/profile/account",
        },
        {
          icon: <Female />,
          label: "Children Profiles",
          route: "/profile/childrens",
        },
        { icon: <Family />, label: "Family Profile", route: "/family_profile" },
        {
          icon: <Subscription />,
          label: "Subscription",
          rightLabel: "Premium",
          route: "/subscription/myplan",
        },
      ],
    },
    {
      title: "App Preferences",
      items: [
        {
          icon: <Language />,
          label: "Language",
          rightLabel: selectLanguage,
          onclick: () => setshowLanguageModal(true),
        },
        {
          icon: <Bell />,
          label: "Notification Settings",
          rightLabel: "On",
          route: "#",
        },
      ],
    },
    {
      title: "Support & About",
      items: [
        { icon: <Help />, label: "Help Center / FAQ", route: "/profile/faq" },
        { icon: <Profile />, label: "Contact Us", route: "/profile/contact" },
        {
          icon: <Privacy />,
          label: "Privacy Policy",
          route: "/profile/policy",
        },
        {
          icon: <Privacy />,
          label: "Terms of Service",
          route: "/profile/terms",
        },
        {
          icon: <Info />,
          label: "About ZenFamy",
          rightLabel: "Version 1.0.0",
          route: "/profile/about",
        },
      ],
    },
  ];

  const logout = () => {
    AsyncStorage.removeItem("access_token");
    router.push("/onboarding");
  };

  return (
    <>
      <ScrollView style={{ flex: 1, backgroundColor: "#87CEEB" }}>
        <View className="p-4">
          {/* Header */}
          <View className=" py-6 mt-[30px] flex-row justify-between items-center">
            <Text className="text-[23px] font-semibold text-white">
              Settings
            </Text>
            <TouchableOpacity
              onPress={logout}
              className="flex-row items-center space-x-2"
            >
              <FontAwesome name="sign-out" size={23} color="#4682B4" />
              <Text style={{ color: "#4682B4", fontSize: 16 }}> Logout</Text>
            </TouchableOpacity>
          </View>

          {/* Sections */}

          {settingsData.map((section, sectionIndex) => (
            <View key={sectionIndex}>
              <Text className="text-[16px] font-semibold mt-4 text-white">
                {section.title}
              </Text>
              <View className="bg-white/80 p-4 mt-4 rounded-lg">
                {section.items.map((item: any, itemIndex) => (
                  <TouchableOpacity
                    onPress={() =>
                      item.route
                        ? router.push(item?.route as any)
                        : item?.onclick()
                    }
                    key={itemIndex}
                    className={`flex-row items-center justify-between p-2 py-3 ${
                      itemIndex !== section.items.length - 1
                        ? "border-b border-gray-100"
                        : ""
                    }`}
                  >
                    <View className="flex-row items-center space-x-2">
                      {item?.avatar ? (
                        <Image
                          source={{ uri: item?.avatar }}
                          style={{
                            width: 48,
                            height: 48,
                            borderRadius: 20,
                          }}
                        />
                      ) : (
                        item.icon
                      )}
                      <View className="ml-3">
                        <Text className="font-semibold text-[16px]">
                          {item.label}
                        </Text>
                        {item.subtitle && (
                          <Text className="text-gray-500">{item.subtitle}</Text>
                        )}
                      </View>
                    </View>
                    {item.rightLabel ? (
                      item.label !== "Notification Settings" ? (
                        <View className="flex-row items-center space-x-2">
                          <Text
                            style={{
                              color: "#4682B4",
                              fontSize: 14,
                              marginRight: 2,
                            }}
                          >
                            {item.rightLabel}
                          </Text>
                          <Ionicons
                            name="chevron-forward"
                            size={22}
                            color="#4682B4"
                          />
                        </View>
                      ) : (
                        <Switch setvalue={setisNotifOn} value={isNotifOn} />
                      )
                    ) : (
                      <Ionicons
                        name="chevron-forward"
                        size={22}
                        color="#4682B4"
                      />
                    )}
                  </TouchableOpacity>
                ))}
              </View>
            </View>
          ))}
        </View>
        <View className="h-[80px]" />
        <CountryModal
          setvalue={setsetselectLanguage}
          selectedvalue={selectLanguage}
          setshowmodal={setshowLanguageModal}
          showmodal={showLanguageModal}
          datatype="language"
        />
      </ScrollView>

      {showNav && <NavExpand setshowNav={setshowNav} />}
      <MainNav screen={"profile"} setshowNav={setshowNav} />
    </>
  );
};

export default Index;
