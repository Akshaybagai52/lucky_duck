import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 0,
    title: "Volvo",
    description:
      "Description of Volvo to popular belief, Lorem Ipsum is not simply random text. It has roots in.",
    ticketValue: 275040,
    drawDate: "Jan 2 2023",
    status: 0,
    img: "/assets/image/cards/image1.svg",
    participators: [],
  },
  {
    id: 1,
    title: "Audi",
    description:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in.",
    ticketValue: 475000,
    drawDate: "Feb 24 2023",
    status: 1,
    img: "/assets/image/cards/image2.svg",
    participators: [],
  },
  {
    id: 2,
    title: "Wagen",
    description:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in.",
    ticketValue: 700000,
    drawDate: "Jan 15 2023",
    status: 1,
    img: "/assets/image/cards/image3.svg",
    participators: [],
  },
  {
    id: 3,
    title: "Apple 012",
    description:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in.",
    ticketValue: 175000,
    drawDate: "Mar 15 2018",
    status: 2,
    img: "/assets/image/cards/image4.svg",
    participators: [],
  },
  {
    id: 4,
    title: "Benz",
    description:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in.",
    ticketValue: 225000,
    drawDate: "Jul 25 2023",
    status: 0,
    img: "/assets/image/cards/image5.svg",
    participators: [],
  },
  {
    id: 5,
    title: "SamSung",
    description:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in.",
    ticketValue: 432000,
    drawDate: "Jun 25 2023",
    status: 0,
    img: "/assets/image/cards/image6.svg",
    participators: [],
  },
  {
    id: 6,
    title: "Mercedes Benz",
    description:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in.",
    ticketValue: 980000,
    drawDate: "Dec 25 2021",
    status: 0,
    img: "/assets/image/cards/image7.svg",
    participators: [],
  },
  {
    id: 7,
    title: "Apple 342",
    description:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in.",
    ticketValue: 217000,
    drawDate: "Jan 25 2023",
    status: 0,
    img: "/assets/image/cards/image8.svg",
    participators: [],
  },
  {
    id: 8,
    title: "Apple 43",
    description:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in.",
    ticketValue: 654000,
    drawDate: "Aug 25 2023",
    status: 1,
    img: "/assets/image/cards/image9.svg",
    participators: [],
  },
  {
    id: 9,
    title: "Lexus",
    description:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in.",
    ticketValue: 103000,
    drawDate: "Sep 25 2022",
    status: 0,
    img: "/assets/image/cards/image10.svg",
    participators: [],
  },
  {
    id: 10,
    title: "Racing Car",
    description:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in.",
    ticketValue: 189000,
    drawDate: "Jan 25 2023",
    status: 2,
    img: "/assets/image/cards/image11.svg",
    participators: [],
  },
  {
    id: 11,
    title: "Ford",
    description:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in.",
    ticketValue: 980000,
    drawDate: "Feb 25 2023",
    status: 0,
    img: "/assets/image/cards/image12.svg",
    participators: [],
  },
  {
    id: 12,
    title: "Knight Rider",
    description:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in.",
    ticketValue: 205000,
    drawDate: "Dec 25 2023",
    status: 0,
    img: "/assets/image/cards/image13.svg",
    participators: [],
  },
  {
    id: 13,
    title: "Magnum",
    description:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in.",
    ticketValue: 340000,
    drawDate: "Oct 25 2023",
    status: 1,
    img: "/assets/image/cards/image14.svg",
    participators: [],
  },
  {
    id: 14,
    title: "Miami",
    description:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in.",
    ticketValue: 302000,
    drawDate: "Jan 25 2023",
    status: 0,
    img: "/assets/image/cards/image15.svg",
    participators: [],
  },
];

const poolSlice = createSlice({
  name: "pools",
  initialState,
  reducers: {
    register: (state, action) => {
      state.push(action.payload);
    },
    get: (state, action) => {
      return state.filter((el) => el.status === action.payload);
    },
    participate: (state, action) => {
      state.forEach((el) => {
        if (action.payload.id === el.id) {
          el.ticketValue += parseInt(action.payload.amount);
          if (
            el.participators.length > 0 &&
            el.participators.includes(action.payload.address)
          ) {
            console.log("Already participated");
          } else {
            console.log("New participant");
            el.participators.push(action.payload.address);
          }
        }
      });
    },
    // participate: (state, action) => {
    //   state.forEach((el) => {
    //     if (action.payload.id === el.id) {
    //       el.ticketValue += parseInt(action.payload.amount);
    //       if (!el.participators.includes(action.payload.address)) {
    //         el.participators.push(action.payload.address);
    //       }
    //     }
    //   });
    // },
    // increaseValue: (state, action) => {
    //   let dt = state.filter(el => el.id === action.payload.id)
    //   dt.ticketValue += action.payload.amount
    //   [state, ...dt]
    // }
  },
});

export const { register, get, participate } = poolSlice.actions;

export default poolSlice.reducer;
