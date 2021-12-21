import schedule from "@/assets/schedule.svg";
import hangout from "@/assets/hangout.svg";
import messages from "@/assets/messages.svg";
import paystubs from "@/assets/pay-stubs.svg";

export const getProducts = () => {
  return {
    products: [
      {
        id: 1,
        isNew: true,
        align: "left",
        illustration: schedule,
        name: "Work Schedule",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
      },
      {
        id: 2,
        isNew: true,
        align: "right",
        illustration: hangout,
        name: "Time off request",
        description:
          "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      },
      {
        id: 3,
        isNew: false,
        align: "left",
        illustration: messages,
        name: "Messages",
        description:
          "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.",
      },
      {
        id: 4,
        isNew: true,
        align: "right",
        illustration: paystubs,
        name: "Pay Stubs",
        description:
          "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam",
      },
    ],
  };
};
