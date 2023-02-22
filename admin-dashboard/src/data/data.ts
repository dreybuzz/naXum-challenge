import { generateRandomNumber, generateRandomUsers } from "../utils/helpers"

export const NavSchema = [
  {
    title: "Dashboard",
    iconTitle: "home",
    link: "/",
  },

  {
    title: "Analytics",
    iconTitle: "monitoring",
    link: "/analytics",
  },

  {
    groupTitle: "Users",
    items: [
      {
        title: "Add New",
        iconTitle: "person_add",
        link: "/users/add",
      },

      {
        title: "Manage",
        iconTitle: "group",
        link: "/users",
      },

      {
        title: "User Contacts",
        iconTitle: "contacts",
        link: "/users/contacts",
      },

      {
        title: "Logs",
        iconTitle: "list_alt",
        link: "/users/logs",
      },
    ],
  },

  {
    groupTitle: "Admins",
    items: [
      {
        title: "Add New",
        iconTitle: "add",
        link: "/admins/add",
      },

      {
        title: "Manage",
        iconTitle: "settings_accessibility",
        link: "/admins",
      },

      {
        title: "Logs",
        iconTitle: "history",
        link: "/admins/logs",
      },
    ],
  },

  {
    groupTitle: "Support",
    items: [
      {
        title: "View Tickets",
        iconTitle: "chat",
        link: "/support/tickets",
      },

      {
        title: "Newsletter",
        iconTitle: "feed",
        link: "/support/newsletter",
      },

      {
        title: "Contact Info",
        iconTitle: "info",
        link: "/support/company-info",
      },
    ],
  },
]

export const DemoUsers = generateRandomUsers().map((user) => {
  return {
    ...user,
    profilePicture: `https://randomuser.me/api/portraits/${
      generateRandomNumber() % 2 === 0 ? "men" : "women"
    }/${generateRandomNumber(1, 99)}.jpg`,
  }
})
