import { View, Text, StyleSheet } from "react-native"
import { useContext, useState } from "react"
import { globalStyles } from "../../utils/globalStyles"
import CustomText from "../../components/CustomText/CustomText"
import IconButton from "../../components/IconButton/IconButton"
import { Ionicons } from "@expo/vector-icons"
import { ThemeContext } from "../../contexts/ThemeContext"
import { AntDesign } from "@expo/vector-icons"
import { MaterialIcons } from "@expo/vector-icons"
import FormInput from "../../components/FormInput/FormInput"
import Button from "../../components/Button/Button"
import { ScrollView } from "react-native-gesture-handler"
import { COLORS } from "../../utils/colors"
import { generateRandomData, IPerson } from "../../utils/helpers"
import { DrawerNavigationProp } from "@react-navigation/drawer"

type HomeScreenProps = {
  navigation: DrawerNavigationProp<{}>
}

export default function HomeScreen({ navigation }: HomeScreenProps) {
  const { themeColors } = useContext(ThemeContext)
  const [contacts, setContacts] = useState(() => generateRandomData(50))
  return (
    <View style={[styles.container]}>
      {/* Title */}
      <View style={[styles.titleContainer]}>
        <CustomText style={[styles.title]}>Add Contacts</CustomText>
      </View>

      {/* Icon Buttons */}
      <View style={[styles.iconButtonsContainer]}>
        {/* New */}
        <View style={[styles.iconButtonContainer]}>
          <IconButton
            icon={
              <Ionicons
                name="person-add-sharp"
                size={40}
                color={themeColors.primary}
              />
            }
            label={"New"}
            labelStyle={styles.iconButtonLabel}
            pressHandler={() => navigation.navigate("Add Contact" as never)}
          />
        </View>

        {/* Phonebook */}
        <View style={[styles.iconButtonContainer]}>
          <IconButton
            icon={
              <AntDesign
                name="contacts"
                size={34}
                color={themeColors.primary}
              />
            }
            label={"Phonebook"}
            labelStyle={styles.iconButtonLabel}
          />
        </View>

        {/* Email */}
        <View style={[styles.iconButtonContainer]}>
          <IconButton
            icon={
              <MaterialIcons
                name="alternate-email"
                size={30}
                color={themeColors.primary}
              />
            }
            label={"Email"}
            labelStyle={styles.iconButtonLabel}
          />
        </View>
      </View>

      {/* Divider */}
      <View
        style={[
          styles.divider,
          { borderBottomColor: themeColors.secondary },
        ]}></View>

      {/* Search Input */}
      <View style={[styles.searchContainer]}>
        <View style={[styles.searchInputContainer]}>
          <FormInput fullBorder placeholder="Search" />
        </View>

        {/* Search Button */}
        <View style={[styles.searchButtonContainer]}>
          <Button text="Search" />
        </View>
      </View>

      {/* Contact List */}
      <ScrollView
        contentContainerStyle={[]}
        showsVerticalScrollIndicator={false}>
        {contacts.map((contact) => {
          const { firstName, lastName, mobileNumber } = contact
          return <ContactPreview key={mobileNumber} contact={contact} />
        })}
      </ScrollView>

      {/* Footer */}
      <View
        style={[
          {
            padding: 5,
            backgroundColor: COLORS.accent,
            height: 80,
            flexDirection: "row",
            justifyContent: "flex-start",
          },
        ]}>
        <IconButton
          backgroundColor={themeColors.primary}
          size={"10"}
          label={"Refresh Contacts"}
          labelStyle={[{ color: themeColors.primary }]}
          icon={
            <Ionicons
              name="refresh-circle"
              size={24}
              color={themeColors.secondary}
            />
          }
        />
      </View>
    </View>
  )
}

type ContactPreviewProps = {
  contact: IPerson
}
const ContactPreview = ({
  contact: { firstName, lastName },
}: ContactPreviewProps) => {
  const { themeColors } = useContext(ThemeContext)
  return (
    <View style={[styles.contactPreviewContainer]}>
      {/* Profile Picture */}
      <Ionicons
        name="person-circle-outline"
        size={40}
        color={themeColors.secondary}
      />

      {/* Name */}
      <CustomText style={[{ marginLeft: 5 }]}>
        {firstName + " " + lastName}
      </CustomText>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingHorizontal: 10,
  },

  titleContainer: {
    height: 70,
    justifyContent: "center",
    alignItems: "center",
    // ...globalStyles.debug,
  },

  title: {
    fontSize: 24,
    fontFamily: "Ubuntu",
  },

  iconButtonsContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    height: 100,
    // ...globalStyles.debug,
  },

  iconButtonContainer: {
    // flexBasis: 1 / 3,
  },

  iconButtonLabel: {
    fontSize: 12,
  },

  divider: {
    borderBottomWidth: 2,
    marginVertical: 25,
  },

  searchContainer: {
    marginHorizontal: 20,
  },

  searchInputContainer: {
    height: 50,
  },

  searchButtonContainer: {
    height: 40,
    marginTop: 10,
  },

  contactPreviewContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
    height: 50,
    borderBottomWidth: 1,
    marginHorizontal: 20,
    // ...globalStyles.debug,
  },
})
