import React from "react";
import { ThemeProvider } from "styled-components";
import ChatBot from "react-simple-chatbot";
function CustomChatbot(props) {
  const theme = {
    background: "#f5f8fb",
    fontFamily: "Helvetica Neue",
    headerBgColor: "rgb(82, 33, 33)",
    headerFontColor: "#fff",
    headerFontSize: "15px",
    botBubbleColor: "rgb(82, 33, 33)",
    botFontColor: "#fff",
    userBubbleColor: "#fff",
    userFontColor: "#4a4a4a"
  };
  const config = {
    height: "300px",
    floating: true
  };
  const steps = [
    {
      id: "Greet",
      message: "Good Day !",
      trigger: "Ask Name"
    },
    {
      id: "Ask Name",
      message: "What's your name ?",
      trigger: "Waiting user input for name"
    },
    {
      id: "Waiting user input for name",
      user: true,
      trigger: "Asking options to eat"
    },
    {
      id: "Asking options to eat",
      message: "Hi {previousValue}, maybe I can help you ?",
      trigger: "Displaying options to help"
    },
    {
      id: "Displaying options to help",
      options: [
        {
          value: "opening times",
          label: "Openings time",
          trigger: "OT1"
        },
        {
          value: "burger",
          label: "I want to order something",
          trigger: "order"
        }
      ]
    },
    {
      id: "OT1",
      message: "Is it for lunch or diner ?",
      trigger: "lunch/diner"
    },
    {
      id: "lunch/diner",
      options: [
        {
          value: "lunch",
          label: "lunch",
          trigger: "OTlunch"
        },
        {
          value: "diner",
          label: "diner",
          trigger: "OTdiner"
        }
      ]
    },
    {
      id: "OTlunch",
      message:
        "Mon - Fri: 11 a.m. - 2 p.m. Saturday: 11 a.m. - 3 p.m. Sunday: 10 a.m. - 4 p.m.",
      trigger: "Asking for pizza after burger"
    },
    {
      id: "OTdiner",
      message: "Daily: 5 p.m. - 11 p.m.",
      trigger: "Asking for pizza after burger"
    },
    {
      id: "Asking for pizza after burger",
      options: [
        {
          value: true,
          label: "Yes",
          trigger: "order"
        },
        {
          value: "false",
          label: "No",
          trigger: "Done"
        }
      ]
    },
    {
      id: "order",
      message: "Would you like to have tomatoes in your pizza",
      trigger: "Adding Tomatoes in Pizza"
    },
    {
      id: "Adding Tomatoes in Pizza",
      options: [
        {
          value: true,
          label: "Yes",
          trigger: () => {
            //props.eventHandler("tomato");
            return "Asking for Mushroom in Pizza";
          }
        },
        {
          value: "false",
          label: "No",
          trigger: "Asking for Mushroom in Pizza"
        }
      ]
    },

    {
      id: "Asking for Mushroom in Pizza",
      message: "Would you like to have mushroom in your pizza",
      trigger: "Adding Mushroom in Pizza"
    },

    {
      id: "Adding Mushroom in Pizza",
      options: [
        {
          value: true,
          label: "Yes",
          trigger: () => {
            props.eventHandler("mushroom");
            return "Asking for Corn in Pizza";
          }
        },
        {
          value: "false",
          label: "No",
          trigger: "Asking for Corn in Pizza"
        }
      ]
    },
    {
      id: "Asking for Corn in Pizza",
      message: "Would you like to have corn in your pizza",
      trigger: "Adding Corn in Pizza"
    },

    {
      id: "Adding Corn in Pizza",
      options: [
        {
          value: true,
          label: "Yes",
          trigger: () => {
            props.eventHandler("corn");
            return "Asking for Veggies in Pizza";
          }
        },
        {
          value: "false",
          label: "No",
          trigger: "Asking for Veggies in Pizza"
        }
      ]
    },

    {
      id: "Asking for Veggies in Pizza",
      message: "Would you like to have veggies in your pizza",
      trigger: "Adding Veggies in Pizza"
    },

    {
      id: "Adding Veggies in Pizza",
      options: [
        {
          value: true,
          label: "Yes",
          trigger: () => {
            props.eventHandler("veggie");
            return "Done";
          }
        },
        {
          value: "false",
          label: "No",
          trigger: "Done"
        }
      ]
    },
    {
      id: "Done",
      message: "Have a great day !!",
      end: true
    }
  ];
  return (
    <ThemeProvider theme={theme}>
      <ChatBot steps={steps} {...config} />
    </ThemeProvider>
  );
}
export default CustomChatbot;
