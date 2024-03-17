const profile = {
    name: "Rohit",
    company: "PayPal",
    address: {
      area: "Ayodhya Bypass",
      pincode: 411023,
      block: "CD"
    },
    hobbies: ["music", "travel", "writing"],
    isMarried: true,
    horoscope: "Aries",
    badHabits: null
  };

// Template Literals or use Backticks
// Way 1
const messageV1 = 'Hello' + profile.name +", how are you doing at" + profile.company;

const messageV2 = `Hello ${profile.name}, how are you doing at ${profile.company}`;

const orderId = 'SG-5678';
const orderTime = '45 Min';
const orderMessage = `Your order no ${orderId} is placed. Please wait for ${orderTime} to get your order`

//Way 2
const uName = profile.name;
const uCompany = profile.company;


const messageV3 = `Hello ${uName}, how you are doing at ${uCompany}`;
